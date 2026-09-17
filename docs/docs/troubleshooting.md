---
sidebar_position: 10
title: Troubleshooting
---

# Troubleshooting

## macOS: "Aayushi Code can't be opened" / "Apple could not verify"

The app is not signed with an Apple Developer certificate yet. Clear the
quarantine attribute once:

```sh
xattr -d com.apple.quarantine /Applications/AayushiCode.app
```

or use **System Settings → Privacy & Security → Open Anyway**.

## The app doesn't start on Linux

Make sure the required system libraries are installed. For most distros this
means `libasound2`, `libwayland-client0`, `libxkbcommon0`, `libx11-6`, and
the GLib libraries. The bundled release includes the editor's other
dependencies.

## Missing language features (LSP)

Language servers are downloaded on demand when you open the corresponding
file type. Check the diagnostics panel for download progress or errors, and
make sure your machine has network access on first use of a language.

## Keyboard shortcuts don't match

Your `keymap.json` may contain conflicting bindings. Open **Open Keymap**
from the command palette and inspect or remove custom entries.

## GPU / rendering issues

Aayushi Code renders on the GPU. If you see rendering artifacts, ensure your
graphics drivers (for example `libvulkan1` or Mesa Vulkan drivers on Linux)
are up to date, then restart the editor.

## Reporting problems

Open the log directory shown in **Diagnostics: View logs** from the command
palette, or file an issue at
[github.com/aayushpokhrel49/aayushii-code/issues](https://github.com/aayushpokhrel49/aayushii-code/issues)
with the relevant log output.