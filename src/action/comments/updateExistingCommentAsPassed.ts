import type { Octokit } from "octokit";

import type { RepositoryLocator } from "../../types/data.js";
import type { CommentData, Entity } from "../../types/entities.js";

import { createCommentBody } from "./createCommentBody.js";

export async function updateExistingCommentAsPassed(
	entity: Entity,
	existingComment: CommentData,
	locator: RepositoryLocator,
	octokit: Octokit,
) {
	await octokit.rest.issues.updateComment({
		body: createCommentBody(entity, "All reports are resolved now. Thanks! ✅"),
		comment_id: existingComment.id,
		owner: locator.owner,
		repo: locator.repository,
	});
}
