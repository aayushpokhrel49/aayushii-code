---
sidebar_position: 16
title: Editing features
---

# Editing features

Aayushi Code includes a full set of modern editing features on top of its fast
GPU-accelerated core. This page covers the less obvious ones.

## Multiple cursors

Place a cursor in multiple places at once to edit several lines in one go.

- **Add cursor:** hold <kbd>Alt</kbd> and click where you want another cursor.
- **Add cursor above/below:** <kbd>Ctrl/Cmd</kbd>+<kbd>Alt</kbd>+<kbd>Up/Down</kbd>.
- **Select all matches:** select a word, then press
  <kbd>Ctrl/Cmd</kbd>+<kbd>Shift</kbd>+<kbd>L</kbd> to place a cursor on every
  occurrence.
- **Add next match:** <kbd>Ctrl/Cmd</kbd>+<kbd>D</kbd> adds the next occurrence
  of the current selection.

Type after adding cursors and the text is inserted at every cursor position.

## Selections

- **Word selection:** double-click a word to select it.
- **Line selection:** triple-click a line to select the whole line.
- **Column/box selection:** hold <kbd>Alt</kbd> and drag with the mouse to
  select a rectangular block of text.
- **Select to matching bracket:** place the cursor on a bracket and press
  <kbd>Ctrl/Cmd</kbd>+<kbd>Shift</kbd>+<kbd>M</kbd> to select the content inside.

## Rename symbol

Place the cursor on a symbol such as a function or variable name and press
<kbd>F2</kbd>. Type the new name and everything in scope is updated at once.
This uses the active language server, so it renames across files when the
language supports it.

## Formatting

- Run **Format Document** from the command palette to format the current file.
- Configure an automatic formatter per language in your settings:

```json
{
  "languages": {
    "Rust": {
      "format_on_save": "on",
      "formatter": "language_server"
    },
    "TypeScript": {
      "format_on_save": "on",
      "formatter": "language_server"
    }
  }
}
```

## Inline diagnostics

Errors and warnings appear as squiggly underlines in the buffer. Hover over a
highlighted span to see the message and available quick fixes.

- **Jump to next diagnostic:** <kbd>F8</kbd>.
- **Jump to previous diagnostic:** <kbd>Shift</kbd>+<kbd>F8</kbd>.
- **Open the diagnostics panel:** from the bottom dock or run
  **Diagnostics: Show Errors** in the command palette.

## Quick fixes

When a diagnostic has a suggested fix, put the cursor on it and press
<kbd>Ctrl/Cmd</kbd>+<kbd>.</kbd>, or choose the lightbulb action from the
hover popover. Examples include auto-imports, adding missing types, and
applying clippy suggestions.

## Snippets and completions

- The editor autocompletes while you type. Press <kbd>Tab</kbd> to accept a
  completion, or <kbd>Enter</kbd> for the highlighted entry.
- Language servers power completions, signatures, and parameter hints.
- Trigger completions manually with <kbd>Ctrl/Cmd</kbd>+<kbd>Space</kbd>.

## Code folding

- Press <kbd>Ctrl/Cmd</kbd>+<kbd>Shift</kbd>+<kbd>[</kbd> to fold the block at
  the cursor, and <kbd>Ctrl/Cmd</kbd>+<kbd>Shift</kbd>+<kbd>]</kbd> to unfold.
- Use **Fold All** and **Unfold All** from the command palette.
- Click the fold arrows in the gutter to collapse regions.

## Word wrap

Enable soft wrapping per project or globally:

```json
{
  "soft_wrap": "preferred",
  "preferred_line_length": 100
}
```

Available modes: `none`, `preferred`, or `always`.

## Related topics

- [Keyboard shortcuts](shortcuts.md) — the default bindings for these actions.
- [Search](search.md) — finding files, symbols, and text.
- [Interface](interface.md) — panels and the workspace layout.