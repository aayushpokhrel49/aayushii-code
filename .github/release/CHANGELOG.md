# Changelog

All notable user-facing changes to Aayushi Code are listed here, newest first. Add a
bullet under Unreleased with your change; the version bump commit turns that
section into the release, and the release workflow copies it into the GitHub
release body.

## Unreleased

## 1.0.60 - 2026-09-24

- Rebranded installers, packaging, and GitHub release artifacts to AAYKRA on every platform: macOS `.dmg`, Linux `.tar.gz`/`.deb`/`.pkg.tar.zst`, Windows `.exe`, Snap, Flatpak, and the remote-server binaries.
- Pointed the auto-updater, install scripts, and docs at the renamed Aaykra repository after moving the project on GitHub.

## 1.0.50 - 2026-09-23

- Rebranded the editor from Aayushi Code to AAYKRA across the UI: app menus, welcome and onboarding screens, About window, notifications, settings descriptions, theme and icon-theme names, and installer/desktop display names. Core identifiers, data directories, and protocol strings are unchanged.

## 1.0.40 - 2026-09-21

- Added a fresh new logo across the app, installers, and packaging.
- Fixed minor bugs.

## 1.0.30 - 2026-09-20

- Fixed automatic updates on Linux package installs (Arch .pkg.tar.zst and .deb): they now use the same GitHub self-updater as the tar.gz build, checking the releases API, downloading `aaykra-linux-<arch>.tar.gz`, and applying it in place. For root-owned installs the update lands in a per-user copy under `~/.local` and the app restarts from there.

## 1.0.20 - 2026-09-19

- Fixed automatic update downloads failing with "operation timed out"; downloads and update checks now retry and time out gracefully.
- Improved update notifications: once an update is downloaded, Aayushi Code shows an "Update Now" prompt on every launch until you apply it.
- Cleaned up the About window to show only the app version and links to the website, GitHub, X, and email.

## 1.0.10 - 2026-09-18

- Added proper credit to Zed Industries in the README, acknowledging that Aayushi Code is a fork of Zed and is built on top of its code.

## 1.0.9 - 2026-09-18

- Renamed the product, binary, and installer to Aayushi Code / aayushicode. New install paths, app names, and data directories (existing Aayushi Code data is reused; no re-setup needed).
- Fixed macOS release builds: the Intel build now runs on the supported `macos-15-intel` runner and the Apple Silicon build on `macos-15`.
- Fixed the Arch Linux package build: the `.pkg.tar.zst` is written to an absolute path under the repo's `target/release` so packaging no longer fails.
- The release workflow can now be triggered manually ("Run workflow" with a version) in addition to tag pushes, and it publishes every platform package that builds successfully.

## 1.0.8 - 2026-09-12

- Material Icon Theme is now the default icon theme, with light and dark variants that follow the theme mode.
- Synced with Zed 1.19.2: multi-select in the Git panel, automatic language detection for untitled buffers, project search on type, recency-sorted command palette, the `reveal_if_open` setting, and many fixes.
- Removed "Delete Permanently" from the project panel context menu. Delete always moves to the Trash.
- Right-clicking the empty space below the file tree now opens the context menu.
- Tabs for files that no longer exist show "File not found. It was deleted or moved." without offering to recreate the file.
- Release builds compile every crate as a single codegen unit again for better runtime performance.

## 1.0.7 - 2026-09-11

- Files that were deleted while Aayushi Code was closed reopen as strikethrough tabs with a "file not found" message instead of a blank editor.
- Tabs show the file's icon before its name.
- The project panel's Delete action moves files to the Trash, with a separate Delete Permanently option.
- Activity bar icons match VS Code's, with more vertical spacing, and all left-dock panels share one width.
- Search moved into its own panel, and activity bar items can be reordered.
- The file tree scrolls a little past its last entry.
