import { writeFile } from "fs/promises";

await writeFile(
	".all-contributorsrc",
	JSON.stringify(
		{
			badgeTemplate:
				'\t<a href="#contributors" target="_blank"><img alt="👪 All Contributors: <%= contributors.length %>" src="https://img.shields.io/badge/%F0%9F%91%AA_all_contributors-<%= contributors.length %>-21bb42.svg" /></a>',
			commitConvention: "angular",
			commitType: "docs",
			contributors: [
				{
					avatar_url: "https://avatars.githubusercontent.com/u/3335181?v=4",
					contributions: [
						"code",
						"content",
						"doc",
						"ideas",
						"infra",
						"maintenance",
						"projectManagement",
						"tool",
						"test",
						"design",
					],
					login: "JoshuaKGoldberg",
					name: "Josh Goldberg ✨",
					profile: "http://www.joshuakgoldberg.com",
				},
				{
					avatar_url: "https://avatars.githubusercontent.com/u/4282439?v=4",
					contributions: ["ideas"],
					login: "phryneas",
					name: "Lenz Weber-Tronic",
					profile: "https://phryneas.de",
				},
				{
					avatar_url: "https://avatars.githubusercontent.com/u/5698350?v=4",
					contributions: ["bug", "code", "ideas"],
					login: "azat-io",
					name: "Azat S.",
					profile: "http://azat.io",
				},
				{
					avatar_url: "https://avatars.githubusercontent.com/u/1174092?v=4",
					contributions: ["bug", "code"],
					login: "franky47",
					name: "François Best",
					profile: "https://francoisbest.com/",
				},
			],
			contributorsPerLine: 7,
			contributorsSortAlphabetically: true,
			files: ["README.md"],
			projectName: "OctoGuide",
			projectOwner: "JoshuaKGoldberg",
			repoType: "github",
		},
		null,
		2,
	),
);
