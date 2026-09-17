---
sidebar_position: 14
title: Git
---

# Git

Aayushi Code integrates with Git to help you keep track of changes, review
diffs, and commit work without leaving the editor.

## Git status

- Files with uncommitted changes are marked in the project panel and in the
  editor's gutter.
- Modified files show a highlighting marker next to the line numbers.
- New files appear with a badge in the project panel.

## Opening the Git panel

Run **Git: Status** from the command palette, or open it from the bottom dock.
The Git panel shows:

- **Changes** — files with unstaged modifications.
- **Staged changes** — files staged for commit.
- **Unstaged changes** — modifications not yet staged.
- **Untracked files** — new files not yet added to version control.

## Viewing diffs

Click any file in the Git panel to open a diff view that shows the changes
side by side or inline. The diff highlights:

- **Added lines** in green.
- **Removed lines** in red.
- **Modified hunks** with context around each change.

Use **Git: Diff** from the command palette on a file, or right-click a file in
the Git panel and choose **Open Diff**.

## Staging changes

- Click a file in the Git panel and press **Stage** (or run **Git: Stage File**).
- Stage all changes with **Git: Stage All**.
- Unstage with **Git: Unstage** or **Git: Unstage All**.

## Committing

With changes staged, run **Git: Commit** from the command palette. Type a
commit message in the prompt and confirm. The commit is created in your
repository.

## Viewing history

Run **Git: Blame** on a file to see who changed each line and when. The blame
view shows author names, commit messages, and dates next to each line.

## Diff gutter markers

Aayushi Code shows a vertical strip in the gutter with colored markers:

- **Green** — added lines.
- **Red** — deleted lines.
- **Yellow** — modified lines.

Clicking a marker jumps to the corresponding change.

## Git-related settings

```json
{
  "git": {
    "git_url": "system",
    "show_git_diff": true,
    "inline_blame": {
      "enabled": true,
      "delay_ms": 1000
    }
  }
}
```

| Setting         | Description                                                |
| --------------- | ---------------------------------------------------------- |
| `git_url`       | Which git binary to use (`system` uses your installed git). |
| `show_git_diff` | Show diff highlight in the gutter.                         |
| `inline_blame`  | Show inline author info after you stop typing.             |

## Related topics

- [Interface](interface.md) — the layout of panels and docks.
- [Keyboard shortcuts](shortcuts.md) — bindings for Git commands.