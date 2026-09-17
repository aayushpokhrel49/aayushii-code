---
sidebar_position: 8
title: FAQ
---

# Frequently Asked Questions

## General Questions

### Is Aayushi Code free?

Yes, Aayushi Code is completely free and open source. It's released under the GPL-3.0 and Apache-2.0 licenses, so you can use it, modify it, and distribute it freely.

### Does Aayushi Code collect my data?

No. Aayushi Code has zero telemetry and does not collect any data. It never phones home, and no account is required to use it.

### What are the system requirements?

- **macOS**: macOS 11.0 (Big Sur) or later
- **Linux**: Most modern distributions with required system libraries
- **Windows**: Windows 10 or later
- **RAM**: 4GB minimum, 8GB recommended
- **Storage**: 500MB for the application

### Can I use Aayushi Code offline?

Yes, Aayushi Code works completely offline. Language servers and extensions are downloaded once and then work without an internet connection.

## Installation & Setup

### How do I install Aayushi Code?

See the [Installation guide](installation.md) for detailed instructions for your platform.

### Why does macOS block the app?

The app is not signed with an Apple Developer certificate yet. You can bypass this by running:

```sh
xattr -d com.apple.quarantine /Applications/AayushiCode.app
```

Or go to **System Settings → Privacy & Security → Open Anyway**.

### Why does Windows SmartScreen warn me?

The installer is not code-signed yet. Click **More info**, then **Run anyway** to proceed.

### Can I install Aayushi Code for all users?

Yes. On Linux, unpack to `/usr/local` instead of `~/.local`. On Windows, run the installer as administrator. On macOS, drag to `/Applications` (available to all users).

## Features & Usage

### Does Aayushi Code support my programming language?

Aayushi Code supports most common languages out of the box, including Rust, Python, TypeScript/JavaScript, C/C++, Go, Ruby, HTML, CSS, and more. For additional languages, check the [Extensions view](extensions.md).

### Can I customize keyboard shortcuts?

Yes. Edit `keymap.json` in your config directory, or use the **Open Keymap** action from the command palette. See [Keyboard shortcuts](shortcuts.md) for details.

### How do I change the theme?

Open the command palette (`Ctrl/Cmd+Shift+P`) and run **Theme: Select**. You can also sync themes independently in settings. See [Themes](themes.md) for more information.

### Does Aayushi Code have AI features?

Aayushi Code does not include built-in AI assistants. However, you can integrate external AI tools and agents that you already use with the editor.

### Can I use multiple monitors?

Yes, Aayushi Code supports multiple monitors. You can move windows between displays and use the editor across multiple screens.

## Troubleshooting

### The app won't start on Linux

Make sure you have the required system libraries installed. See the [Troubleshooting guide](troubleshooting.md) for details.

### Language features aren't working

Language servers are downloaded on demand. Check the diagnostics panel for download progress or errors, and ensure you have network access on first use.

### The editor feels slow

Aayushi Code is designed to be fast, but performance can be affected by:
- Very large files or projects
- Running language servers for many languages
- System resource limitations

Try closing unused tabs and disabling unnecessary extensions.

### My keyboard shortcuts don't work

Check for conflicts in your `keymap.json` file. Use the **Open Keymap** action from the command palette to inspect custom bindings.

## Development & Contributing

### How do I build Aayushi Code from source?

See the [Contributing guide](contributing.md) for build instructions for your platform.

### Can I contribute to Aayushi Code?

Yes! Contributions are welcome. See the [Contributing guide](contributing.md) for guidelines on how to get started.

### Where can I report bugs?

Report bugs on the [GitHub issues page](https://github.com/aayushpokhrel49/aayushii-code/issues).

### How can I request features?

Feature requests can be submitted via the [GitHub issues page](https://github.com/aayushpokhrel49/aayushii-code/issues) with the "enhancement" label.

## Community & Support

### Where can I get help?

- Read the [documentation](/docs/intro)
- Search or ask questions in [GitHub Discussions](https://github.com/aayushpokhrel49/aayushii-code/discussions)
- Report issues on [GitHub Issues](https://github.com/aayushpokhrel49/aayushii-code/issues)

### Is there a Discord or Slack community?

Currently, community discussions happen on [GitHub Discussions](https://github.com/aayushpokhrel49/aayushii-code/discussions). Join the conversation there!

### How can I contact the team?

Use the [contact form](/contact) or email info@aayushhpokhrel.com.np for direct communication.

## Comparison with Other Editors

### How does Aayushi Code compare to VS Code?

Aayushi Code is similar in functionality but:
- **Native**: Written in Rust, not Electron
- **Faster**: Opens instantly and stays responsive
- **Private**: No account, no telemetry
- **Lighter**: Lower memory usage

### How does Aayushi Code compare to Vim/Neovim?

Aayushi Code provides a more familiar GUI experience while still being fast and lightweight. It's designed for users who prefer a visual editor over terminal-based editing.

### Can I use Vim keybindings in Aayushi Code?

While Vim keybindings aren't included by default, the extension system allows for keybinding customization. You can configure your `keymap.json` to match Vim-style shortcuts.