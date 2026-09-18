# Changelog

All notable user-facing changes to Aayushi Code are listed here, newest first. Add a
bullet under Unreleased with your change; the version bump commit turns that
section into the release, and the release workflow copies it into the GitHub
release body.

## Unreleased

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
