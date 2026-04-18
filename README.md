# rpiv-ask-user-question

> **Moved to [`juicesharp/rpiv-mono`](https://github.com/juicesharp/rpiv-mono).** This package now lives at [`packages/rpiv-ask-user-question`](https://github.com/juicesharp/rpiv-mono/tree/main/packages/rpiv-ask-user-question) inside the rpiv-mono monorepo. Still published as `@juicesharp/rpiv-ask-user-question` on npm (no install change). New issues and PRs belong on `rpiv-mono`; this repo is read-only going forward.

Pi extension that registers the `ask_user_question` tool — a structured option
selector (with free-text "Other" fallback) the model can use to ask you a
clarifying question instead of guessing.

![Structured question prompt](https://raw.githubusercontent.com/juicesharp/rpiv-ask-user-question/main/docs/prompt.jpg)

## Installation

    pi install npm:@juicesharp/rpiv-ask-user-question

Then restart your Pi session.

## Tool

- **`ask_user_question`** — present a structured question with 2+ options and
  (optionally) a multi-select toggle. Returns the user's selection or free-text
  answer. See the tool's `promptGuidelines` for usage policy.

## License

MIT
