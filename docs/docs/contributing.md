---
sidebar_position: 11
title: Contributing
---

# Contributing

Thanks for your interest in contributing to Aayushi Code! The editor core is
a large Rust workspace divided into `crates/`, so a code contribution takes a
few minutes to build locally but is easy to iterate on once set up.

## Building from source

### Linux / Arch Linux

```sh
./script/linux          # installs build dependencies
rustup show             # installs the pinned Rust toolchain
./script/bundle-linux   # builds the release bundle
```

### macOS

```sh
brew install lld
./script/bundle-mac aarch64-apple-darwin
```

### Windows

```powershell
./script/bundle-windows.ps1 -Architecture x86_64
```

## Development workflow

- Pick an issue from the tracker or open one describing what you plan to do.
- Fork the repository and create a branch for your change.
- Follow the existing code style; keep changes focused and add tests where
  behavior changes.
- Run the crate-level checks before opening a pull request:

```sh
./script/clippy 2>&1 | tail
```

and run relevant tests with `cargo test -p <crate>`.

## Release engineering

Stable releases are cut via a version tag. Bump the version in
the main application crate's `Cargo.toml`, add a changelog entry, then:

```sh
git tag vX.Y.Z
git push origin vX.Y.Z
```

The GitHub Actions workflow builds and publishes packages for macOS, Linux,
Arch Linux, and Windows automatically.

## Code of conduct

Be respectful and constructive in discussions, issues, and pull requests.
Feedback should be actionable and aimed at improving the project.