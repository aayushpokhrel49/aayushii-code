---
sidebar_position: 15
title: Search
---

# Search

Aayushi Code provides several tools for finding files, symbols, and text
quickly.

## File finder

Press <kbd>Ctrl/Cmd</kbd>+<kbd>P</kbd> to open the file finder. Start typing and
the list narrows as you type. The file finder matches on file names and path
segments, so you can search for `req` to find `src/requests.rs`, or `my`,
`comp`, `main.ts`, etc.

Tips:

- Press <kbd>Enter</kbd> to open the highlighted file.
- Use <kbd>Ctrl/Cmd</kbd>+<kbd>P</kbd> from inside a folder to scope the search
  to that folder.
- Results are ranked by how closely they match your input.

## Project search

Search for text across all files in your project:

1. Press <kbd>Ctrl/Cmd</kbd>+<kbd>Shift</kbd>+<kbd>F</kbd> or run **Find in
   Files** from the command palette.
2. Type your query.
3. Results appear grouped by file, with matching lines highlighted.

You can:

- Restrict the search to a folder by right-clicking it in the project panel and
  choosing **Find in Folder**.
- Use regex patterns for more powerful queries.
- Toggle whole-word and case-sensitive matching from the search bar.
- Exclude files using the `exclude` option in your project settings.

## Find in current file

- Press <kbd>Ctrl/Cmd</kbd>+<kbd>F</kbd> to open the find bar.
- Use <kbd>Enter</kbd> to jump to the next match and
  <kbd>Shift</kbd>+<kbd>Enter</kbd> for the previous one.
- Enable **Replace** mode to substitute text, or use **Replace All**.

## Symbols and outline

- Press <kbd>Ctrl/Cmd</kbd>+<kbd>Shift</kbd>+<kbd>O</kbd> to open the symbol
  outline for the current file. It lists functions, classes, and other
  definitions.
- Use the **Project Symbols** pane (right dock) to search symbols across the
  whole project.
- Type to filter symbols as you would in the file finder.

## Search in the project panel

The project panel has a built-in filter box. Type a name to narrow the file
tree, then press <kbd>Enter</kbd> to open the highlighted file.

## Related topics

- [Keyboard shortcuts](shortcuts.md) — all default bindings.
- [Getting started](getting-started.md) — the basic editor workflow.