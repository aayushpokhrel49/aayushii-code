---
sidebar_position: 7
title: Extensions
---

# Extensions

Extensions add language support, themes, and additional tooling to Aayushi
Code. They are installed per-user and updated automatically when new versions
are published.

## Managing extensions

Open the Extensions view from the command palette (`Ctrl/Cmd`+`Shift`+`X` or
search for **Extensions**), then:

- **Search** for a language, theme, or tool extension by name.
- **Install / Uninstall** any public extension.
- **Update** installed extensions with the update button.

Extensions are stored under `extensions` in your data directory (for example
`~/.local/share/aayushicode/extensions` on Linux).

## Built-in languages

Aayushi Code ships with grammars for most common languages out of the box,
including Rust, Python, TypeScript/JavaScript, C/C++, Go, Ruby, and web
formats such as HTML and CSS. If a language you need is missing, check the
Extensions view for a community grammar.

### Popular extension categories

**Language Support:**
- Python (with Pyright language server)
- JavaScript/TypeScript (with TypeScript language server)
- Rust (with rust-analyzer)
- Go (with gopls)
- C/C++ (with clangd)
- Java (with jdt.ls)
- PHP (with intelephense)

**Themes:**
- Dracula
- Monokai
- Solarized
- Nord
- Catppuccin
- GitHub themes

**Tools:**
- Git integration
- Docker support
- Kubernetes support
- Database clients
- Testing frameworks

### Installing extensions

1. Open the Extensions view (`Ctrl/Cmd+Shift+X`)
2. Search for the extension you want
3. Click **Install** on the extension card
4. The extension will be downloaded and installed automatically

### Extension settings

Most extensions have configurable settings. Access them via:
- Settings UI (search for extension name)
- Directly in your `settings.json` under the extension's namespace

Example extension settings:

```json
{
  "lsp": {
    "python": {
      "language_server": "pyright",
      "python_path": "/usr/bin/python3"
    }
  }
}
```