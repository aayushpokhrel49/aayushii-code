---
sidebar_position: 5
title: Keyboard shortcuts
---

# Keyboard shortcuts

Below are the most useful default keybindings. Use <kbd>Ctrl</kbd> on Linux
and Windows, and <kbd>Cmd</kbd> on macOS.

## Basics

| Action          | Linux / Windows      | macOS               |
| --------------- | -------------------- | ------------------- |
| Command palette | <kbd>Ctrl</kbd>+<kbd>Shift</kbd>+<kbd>P</kbd> or <kbd>F1</kbd> | <kbd>Cmd</kbd>+<kbd>Shift</kbd>+<kbd>P</kbd> |
| File finder     | <kbd>Ctrl</kbd>+<kbd>P</kbd>                    | <kbd>Cmd</kbd>+<kbd>P</kbd>        |
| Open file       | <kbd>Ctrl</kbd>+<kbd>O</kbd>                    | <kbd>Cmd</kbd>+<kbd>O</kbd>        |
| Save            | <kbd>Ctrl</kbd>+<kbd>S</kbd>                    | <kbd>Cmd</kbd>+<kbd>S</kbd>        |
| Find in buffer  | <kbd>Ctrl</kbd>+<kbd>F</kbd>                    | <kbd>Cmd</kbd>+<kbd>F</kbd>        |
| Replace in buffer | <kbd>Ctrl</kbd>+<kbd>H</kbd>                  | <kbd>Cmd</kbd>+<kbd>Alt</kbd>+<kbd>F</kbd> |
| Undo            | <kbd>Ctrl</kbd>+<kbd>Z</kbd>                    | <kbd>Cmd</kbd>+<kbd>Z</kbd>        |
| Select all      | <kbd>Ctrl</kbd>+<kbd>A</kbd>                    | <kbd>Cmd</kbd>+<kbd>A</kbd>        |

## Panels

| Action                 | Linux / Windows            | macOS                     |
| ---------------------- | -------------------------- | ------------------------- |
| Toggle project panel   | <kbd>Ctrl</kbd>+<kbd>B</kbd> | <kbd>Cmd</kbd>+<kbd>B</kbd> |
| Toggle bottom dock     | <kbd>Ctrl</kbd>+<kbd>J</kbd> | <kbd>Cmd</kbd>+<kbd>J</kbd> |
| Toggle terminal        | <kbd>Ctrl</kbd>+<kbd>\`</kbd> | <kbd>Ctrl</kbd>+<kbd>\`</kbd> |
| Outline / symbols      | <kbd>Ctrl</kbd>+<kbd>Shift</kbd>+<kbd>O</kbd> | <kbd>Cmd</kbd>+<kbd>Shift</kbd>+<kbd>O</kbd> |
| Tab switcher           | <kbd>Ctrl</kbd>+<kbd>Tab</kbd>  | <kbd>Ctrl</kbd>+<kbd>Tab</kbd> |

## Editing

| Action                  | Linux / Windows | macOS                  |
| ----------------------- | --------------- | ---------------------- |
| Rename symbol           | <kbd>F2</kbd>   | <kbd>F2</kbd>          |
| Select all matches      | <kbd>Ctrl</kbd>+<kbd>Shift</kbd>+<kbd>L</kbd> | <kbd>Cmd</kbd>+<kbd>Shift</kbd>+<kbd>L</kbd> |
| Toggle comment          | <kbd>Ctrl</kbd>+<kbd>/</kbd> | <kbd>Cmd</kbd>+<kbd>/</kbd> |

## Customizing keybindings

Edit `keymap.json` in your config directory (the same location as
`settings.json`, see [Getting started](getting-started.md)). The command
palette's **Open Keymap** action opens it for you.

Example `keymap.json`:

```json
{
  "bindings": [
    {
      "key": "ctrl+s",
      "command": "workspace.save"
    },
    {
      "key": "ctrl+p",
      "command": "file_finder::toggle"
    },
    {
      "key": "ctrl+shift+p",
      "command": "command_palette::toggle"
    },
    {
      "key": "ctrl+b",
      "command": "workspace::ToggleLeftDock"
    }
  ]
}
```

## Creating custom keybindings

To add custom keybindings:

1. Open the command palette (`Ctrl/Cmd+Shift+P`)
2. Run **Open Keymap**
3. Add your custom bindings following the JSON format
4. Save the file - changes apply immediately

## Keybinding tips

- Use `ctrl` for Linux/Windows and `cmd` for macOS
- Multiple keys can be combined with `+`
- Modifier keys: `ctrl`, `cmd`, `alt`, `shift`, `super`
- Conflicts are resolved by later bindings taking precedence
- Test your keybindings after adding them