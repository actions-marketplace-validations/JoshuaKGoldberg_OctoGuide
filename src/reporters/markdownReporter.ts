import type { RuleReport } from "../types/rules.js";

import { groupBy } from "../action/groupBy.js";
import { Entity } from "../types/entities.js";
import { formatReport } from "./formatReport.js";

export function markdownReporter(entity: Entity, reports: RuleReport[]) {
	const byRule = groupBy(reports, (report) => report.about.name);

	const printedReports = Object.values(byRule).map((ruleReports) => {
		const { about } = ruleReports[0];
		const start = `[[**${about.name}**](https://github.com/JoshuaKGoldberg/octoguide/blob/main/docs/rules/${about.name}.md)]`;

		if (ruleReports.length > 1) {
			return [
				start,
				" ",
				about.explanation.join(" "),
				"\n\n",
				ruleReports.map((report) => formatReport(report)).join("\n\n"),
			].join("");
		}

		return [
			start,
			" ",
			ruleReports
				.map((report) => formatReport(report, about.explanation))
				.join("\n\n"),
		].join("");
	});

	const entityAlias = entity.type.replace("_", " ");
	const entityText =
		entity.type === "comment"
			? `[${entityAlias}](${entity.data.html_url} "comment ${entity.data.id.toString()} reported by OctoGuide")`
			: entityAlias;

	return [
		"👋 Hi",
		entity.data.user ? ` @${entity.data.user.login}` : "",
		", thanks for the ",
		entityText,
		"! A scan flagged ",
		reports.length > 1 ? "some concerns" : "a concern",
		" with it. Could you please take a look?\n\n",
		printedReports.join("\n\n"),
	].join("");
}
