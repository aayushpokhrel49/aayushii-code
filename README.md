> [!IMPORTANT]
> Remove this line to confirm you've reviewed this PR before submitting.

# Aayushi Code

Aayushi Code is a fast, native code editor built in Rust with a GPU-accelerated
renderer. It pairs the speed of a native application with the familiarity of a
modern IDE, and stays out of your way.

## Features

- **Blazing fast** — GPU-accelerated rendering, incremental parsing, and a
  responsive interface built for large codebases.
- **Native feel** — real windows, native text rendering, and a polished UI on
  macOS, Linux, and Windows.
- **Multi-language support** — built-in grammars, tree-sitter syntax trees,
  and smart editor features.
- **Integrated tools** — terminal, task runner, debugging with DAP, language
  servers via LSP, and a built-in file explorer.
- **Extensions** — extend the editor with language and theme extensions.
- **Open standard** — light enough to run anywhere, powerful enough for daily
  development.

## Platforms

Aayushi Code builds stable releases for:

| Platform  | Architecture | Artifact                            |
| --------- | ------------ | ----------------------------------- |
| macOS     | Apple Silicon | `AayushiCode-aarch64.dmg`          |
| macOS     | Intel        | `AayushiCode-x86_64.dmg`           |
| Linux     | x86_64       | `aayushicode-linux-x86_64.tar.gz`  |
| Linux     | aarch64      | `aayushicode-linux-aarch64.tar.gz` |
| Arch      | x86_64       | `aayushicode-<version>.pkg.tar.zst` |
| Arch      | aarch64      | `aayushicode-<version>.pkg.tar.zst` |
| Windows   | x86_64       | `AayushiCode-x86_64.exe`           |

A `.deb` package is also published for Debian/Ubuntu-based distributions.

## Install

Download the latest release from the
[releases page](https://github.com/aayushpokhrel49/aayushii-code/releases) and
follow the instructions in [INSTALL.md](./INSTALL.md).

## Build from source

Prerequisites: Rust (via `rustup`) and the platform toolchains described below.

### Linux / Arch Linux

Install build dependencies:

```sh
./script/linux
```

Build a `.tar.gz` (for any Linux distro):

```sh
./script/bundle-linux
```

Build an Arch Linux `.pkg.tar.zst`:

```sh
./script/bundle-arch
```

Build a `.deb` (for Debian/Ubuntu-based distros):

```sh
./script/bundle-deb
```

### macOS

```sh
brew install lld
./script/bundle-mac aarch64-apple-darwin   # Apple Silicon
./script/bundle-mac x86_64-apple-darwin    # Intel
```

### Windows

```powershell
./script/bundle-windows.ps1 -Architecture x86_64
```

All release artifacts are also produced automatically by the GitHub Actions
workflow when a `v*` tag is pushed.

## Contributing

Bug reports, feature ideas, and pull requests are welcome. Open an issue or
submit a PR on the [repository](https://github.com/aayushpokhrel49/aayushii-code).

## License

Distributed under the GPL-3.0-or-later and Apache-2.0 licenses. See
`LICENSE-GPL` and `LICENSE-APACHE` for details.

## Credits

This project is built on top of the work of the Zed and Wu teams.