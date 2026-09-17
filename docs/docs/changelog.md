---
sidebar_position: 9
title: Changelog
---

# Changelog

This document provides a detailed history of changes in each release of Aayushi Code.

## [1.0.8] - 2026-09-16

### Added
- Initial stable release of Aayushi Code
- GPU-accelerated editor built on Rust
- Built-in language support with tree-sitter grammars
- LSP integration for language server support
- Familiar UI with project panel, terminal, tasks, and debugging
- First-class theme support with light and dark color schemes
- Extension system for languages and themes
- Multi-platform support (macOS, Linux, Arch Linux, Windows)

### Platforms
- **macOS**: Apple Silicon and Intel
- **Linux**: x86_64 and aarch64 (tarball)
- **Arch Linux**: x86_64 and aarch64 (`.pkg.tar.zst`)
- **Windows**: x86_64 (installer)
- **Debian / Ubuntu**: `.deb` package

## Upcoming Releases

### Planned Features
- Enhanced debugging capabilities
- Additional language server integrations
- Performance optimizations for large projects
- Improved extension marketplace
- Advanced theming options
- Collaboration features

## Version History

### Release Cadence
Aayushi Code follows semantic versioning (MAJOR.MINOR.PATCH):
- **MAJOR**: Incompatible API changes
- **MINOR**: Backwards-compatible functionality additions
- **PATCH**: Backwards-compatible bug fixes

### Stable Releases
Stable releases are published on the [GitHub releases page](https://github.com/aayushpokhrel49/aayushii-code/releases) and include:
- Pre-built binaries for all supported platforms
- Package manager installers
- Complete changelog
- Upgrade instructions

### Development Builds
Development builds may be available for testing new features. These are not recommended for production use.

## Migration Guide

### Upgrading from Previous Versions

When upgrading to a new version:

1. **Backup your settings**: Export your `settings.json` and `keymap.json`
2. **Check the changelog**: Review any breaking changes
3. **Install the new version**: Follow the installation guide
4. **Restore settings**: Copy your settings back to the new location
5. **Update extensions**: Check for extension updates

### Breaking Changes

Breaking changes will be clearly marked in release notes and include migration instructions.

## Known Issues

See the [GitHub issues page](https://github.com/aayushpokhrel49/aayushii-code/issues) for known issues and their status.

## Roadmap

The [GitHub project board](https://github.com/aayushpokhrel49/aayushii-code/projects) shows planned features and their progress.

## Contributing to Changelog

When contributing to Aayushi Code:
- Document your changes in the pull request description
- Follow the existing changelog format
- Include version number and date for releases
- Categorize changes as Added, Changed, Deprecated, Removed, Fixed, or Security

For more information on contributing, see the [Contributing guide](contributing.md).