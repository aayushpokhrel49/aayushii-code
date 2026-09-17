---
sidebar_position: 6
title: Themes
---

# Themes

Aayushi Code ships with both light and dark themes out of the box and
supports custom themes provided by extensions.

## Switching themes

1. Open the command palette (<kbd>Ctrl/Cmd</kbd>+<kbd>Shift</kbd>+<kbd>P</kbd>).
2. Run **Theme: Select**, then pick a theme from the list.

To switch the editor color scheme and the syntax theme independently, disable
**Settings: Sync themes** in settings and pick each separately.

## Fonts

Set a custom font family and size in your user settings:

```jsonc
{
  "buffer_font_family": "Fira Code",
  "buffer_font_size": 14,
  "ui_font_size": 14
}
```

Popular font choices for code editors:
- **Fira Code** - Excellent ligature support
- **JetBrains Mono** - Designed for developers
- **Source Code Pro** - Clean and readable
- **Cascadia Code** - Microsoft's coding font
- **MonoLisa** - Premium font with great features

## Syntax highlighting

The active language-specific grammar uses a syntax theme that matches your
color scheme. Install extras through [extensions](extensions.md) or drop JSON
theme files into the `themes` folder of your config directory (for example
`~/.config/aayushicode/themes` on Linux).

## Custom theme example

Create a custom theme by adding a JSON file to your themes folder:

```json
{
  "name": "My Custom Theme",
  "appearance": "dark",
  "colors": {
    "background": "#1e1e1e",
    "foreground": "#d4d4d4",
    "primary": "#6d8bff",
    "secondary": "#4f74ef"
  },
  "syntax": {
    "comment": "#6a9955",
    "keyword": "#569cd6",
    "string": "#ce9178",
    "function": "#dcdcaa"
  }
}
```

## Editor customization

Additional editor appearance settings:

```json
{
  "line_height": "comfortable",
  "buffer_line_height": 1.6,
  "scroll_beyond_end": "one_page",
  "show_whitespace": "all",
  "show_line_numbers": true,
  "show_git_diff": true,
  "indent_guides": {
    "enabled": true,
    "color": "#404040"
  }
}
```