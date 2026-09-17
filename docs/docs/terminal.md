---
sidebar_position: 13
title: Terminal
---

# Terminal

Aayushi Code includes an integrated terminal that starts in your project
directory, so you can run builds, tests, and Git commands without leaving the
editor.

## Opening the terminal

- Press <kbd>Ctrl/Cmd</kbd>+<kbd>`</kbd> to toggle the terminal panel in the
  bottom dock.
- Run **Terminal: New Terminal** from the command palette to create a new
  terminal session.
- Use **Terminal: Rename** to give a session a descriptive name.

## Multiple terminals

You can open several terminal sessions side by side. Use the `+` button in the
terminal panel's toolbar, or the **Terminal: New Terminal** command. Switch
between sessions from the panel's tab strip.

## Working directory

Each terminal starts in your project root by default. You can change the
directory at any time by running `cd` inside the terminal, or configure the
starting directory per terminal via settings.

## Copy and paste

- **Copy:** select text with the mouse, then press <kbd>Ctrl/Cmd</kbd>+<kbd>C</kbd>.
- **Paste:** press <kbd>Ctrl/Cmd</kbd>+<kbd>V</kbd>.

## Clearing the terminal

Run **Terminal: Clear** from the command palette, type `clear` in the terminal,
or press <kbd>Ctrl/Cmd</kbd>+<kbd>L</kbd> depending on your keybinding set.

## Terminal settings

Terminal behavior is configurable in `settings.json`. Common options:

```json
{
  "terminal": {
    "font_size": 13,
    "font_family": "JetBrains Mono",
    "line_height": 1.5,
    "working_directory": "project_root",
    "shell": {
      "program": "bash",
      "args": ["--login"]
    },
    "show_environment_variables": true
  }
}
```

| Setting         | Description                                                    |
| --------------- | -------------------------------------------------------------- |
| `font_size`     | Terminal font size in pixels.                                  |
| `font_family`   | Terminal font family name.                                     |
| `line_height`   | Line height multiplier for terminal text.                      |
| `working_directory` | Initial working directory (`project_root` or a custom path). |
| `shell.program` | The login shell used for new terminals.                        |
| `shell.args`    | Additional arguments passed to the shell.                      |

## Related topics

- [Getting started](getting-started.md) — the first launch and project setup.
- [Tasks](getting-started.md#tasks) — running project tasks from the editor.
- [Interface](interface.md) — where the terminal lives in the layout.