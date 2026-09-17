---
sidebar_position: 3
title: Getting started
---

# Getting started

## Open a project

- Launch Aayushi Code and click **Open Folder** on the welcome screen, or
- Run the CLI from a terminal:

  ```sh
  aayushicode .
  ```

  Or open a specific folder:

  ```sh
  aayushicode /path/to/your/project
  ```

The editor will pick up the project's files, language grammars, and any
installed language servers automatically.

## Open a single file

Use the command palette (<kbd>Ctrl/Cmd</kbd>+<kbd>Shift</kbd>+<kbd>P</kbd>)
and run **File: Open**, or drag a file onto the editor window.

## File explorer

Toggle the project panel with <kbd>Ctrl/Cmd</kbd>+<kbd>Shift</kbd>+<kbd>E</kbd>
to browse the file tree, create new files and folders, and search within the
project.

## Terminal

Toggle the integrated terminal with <kbd>Ctrl/Cmd</kbd>+<kbd>`</kbd>
(backtick). The terminal starts in your project directory.

## Tasks

Define project tasks in `.aayushicode/tasks.json` in your project root (a
`.vscode/tasks.json` fallback is also supported), then run
them from the command palette or the tasks view. User-level tasks live in
`tasks.json` inside your config directory.

Example `.aayushicode/tasks.json`:

```json
{
  "tasks": [
    {
      "label": "Build project",
      "command": "cargo build",
      "args": ["--release"]
    },
    {
      "label": "Run tests",
      "command": "cargo test"
    },
    {
      "label": "Start dev server",
      "command": "npm",
      "args": ["start"]
    }
  ]
}
```

## Your settings

User settings live in `settings.json` inside your config directory:

- **Linux:** `$XDG_CONFIG_HOME/aayushicode/settings.json`
- **macOS:** `~/.config/aayushicode/settings.json`
- **Windows:** `%APPDATA%\Aayushi Code\settings.json`

Example user settings:

```json
{
  "buffer_font_family": "Fira Code",
  "buffer_font_size": 14,
  "ui_font_size": 14,
  "theme": {
    "mode": "system",
    "light_theme": "One Light",
    "dark_theme": "One Dark"
  },
  "tab_size": 4,
  "soft_wrap": "preferred",
  "vertical_scroll_margin": 3
}
```

Project settings live in `.aayushicode/settings.json` at your project root.
Open the Settings UI from the
command palette to change common options. See [Interface](interface.md) and
[Themes](themes.md) for details.