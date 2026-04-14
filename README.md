# rpiv-ask-user-question

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
