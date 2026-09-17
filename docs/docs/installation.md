---
sidebar_position: 2
title: Installation
---

# Installation

Download the latest release for your platform from the
[releases page](https://github.com/aayushpokhrel49/aayushii-code/releases),
then follow the steps below.

## macOS

1. Download `AayushiCode-aarch64.dmg` (Apple Silicon) or
   `AayushiCode-x86_64.dmg` (Intel).
2. Open the DMG and drag the app into your **Applications** folder.
3. The app is not signed with an Apple Developer certificate yet, so macOS
   will block it the first time you open it. Run once:

   ```sh
   xattr -d com.apple.quarantine /Applications/AayushiCode.app
   ```

   or go to **System Settings → Privacy & Security** and click
   **Open Anyway**.

## Linux (any distribution)

1. Download `aayushicode-linux-<arch>.tar.gz`.
2. Unpack it into `~/.local`:

   ```sh
   tar -xzf aayushicode-linux-$(uname -m).tar.gz -C ~/.local
   ln -sf ~/.local/aayushicode.app/bin/aayushicode ~/.local/bin/aayushicode
   ```

3. Make sure `~/.local/bin` is on your `PATH`, then run `aayushicode`.

## Arch Linux

Download the `aayushicode-<version>-1-<arch>.pkg.tar.zst` package for your
architecture and install it with pacman:

```sh
sudo pacman -U ./aayushicode-<version>-1-x86_64.pkg.tar.zst
```

## Debian / Ubuntu

Download the `.deb` package and install it with apt:

```sh
sudo apt install ./aayushicode_*.deb
```

## Windows

Download and run `AayushiCode-x86_64.exe`. SmartScreen may warn you because
the installer is not code-signed — click **More info**, then **Run anyway**.