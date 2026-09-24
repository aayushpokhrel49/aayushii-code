## Install

Download the installer for your platform [here](https://github.com/aayushpokhrel49/Aaykra/releases/latest). Then follow the steps below.

### macOS (Apple Silicon)

1. Download `aaykra-aarch64.dmg`, open it, and drag AAYKRA into your Applications folder. AAYKRA is not signed with an Apple Developer certificate yet, so macOS will block it the first time you open it.
2. Open Terminal and run:

   ```sh
   xattr -d com.apple.quarantine /Applications/AAYKRA.app
   ```

3. Open AAYKRA normally.

If you'd rather not use Terminal: open AAYKRA once (you'll see a "AAYKRA can't be opened" or "Apple could not verify" message), then go to **System Settings → Privacy & Security**, scroll down, and click **Open Anyway** next to AAYKRA. Confirm with your password.

### Linux (x86_64 and aarch64)

Download `aaykra-linux-<arch>.tar.gz` and unpack it into `~/.local`:

```sh
tar -xzf aaykra-linux-$(uname -m).tar.gz -C ~/.local
ln -sf ~/.local/aaykra.app/bin/aaykra ~/.local/bin/aaykra
```

Make sure `~/.local/bin` is on your `PATH`, then run `aaykra`.

### Windows (x86_64)

Download and run `aaykra-x86_64.exe`. The installer isn't code-signed, so Windows SmartScreen may warn you. Click **More info**, then **Run anyway**.