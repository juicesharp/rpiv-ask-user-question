/**
 * rpiv-ask-user-question — Pi extension
 *
 * Registers the `ask_user_question` tool, which surfaces a structured
 * option selector (plus free-text "Other" fallback) to disambiguate
 * underspecified user requests.
 *
 * Extracted from rpiv-pi@7525a5d. Tool name preserved verbatim.
 */

import type { ExtensionAPI } from "@mariozechner/pi-coding-agent";
import { registerAskUserQuestionTool } from "./ask-user-question.js";

export default function (pi: ExtensionAPI) {
    registerAskUserQuestionTool(pi);
}
