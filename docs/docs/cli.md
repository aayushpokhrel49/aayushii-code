---
sidebar_position: 12
title: Command line
---

# Command line

The `aayushicode` command launches the editor from your terminal. It ships with
every release: from the `.tar.gz` on Linux, the extracted app bundle on macOS
(`AayushiCode.app/Contents/MacOS/aayushicode`), or the installer on Windows.

## Open a project

The most common use is opening a folder as a project:

```sh
aayushicode .
```

You can also pass a specific path:

```sh
aayushicode /path/to/your/project
```

## Open a file

Pass a file path to open that file in a new buffer:

```sh
aayushicode src/main.rs
```

Multiple paths are supported:

```sh
aayushicode src/main.rs src/lib.rs
```

## Wait mode

By default the command returns immediately after launching the editor. Some
workflows want the command to stay attached until the editor window closes so
that follow-up shell commands run after you are done editing. Use `--wait`:

```sh
aayushicode --wait path/to/config.json
git commit -m "Update config"
```

## Print the version

```sh
aayushicode --version
```

Outputs the release version, for example `Aayushi Code 1.0.8`.

## Print help

```sh
aayushicode --help
```

Lists all supported flags and options.

## Environment variables

| Variable          | Purpose                                                            |
| ----------------- | ------------------------------------------------------------------ |
| `RELEASE_VERSION` | Version string compiled into the editor when building from source. |

## Related topics

- [Installation](installation.md) — how to get the `aayushicode` binary on
  your platform.
- [Getting started](getting-started.md) — a quick tour of the editor.