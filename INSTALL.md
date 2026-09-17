## Install

Download the installer for your platform [here](https://github.com/aayushpokhrel49/aayushii-code/releases/latest). Then follow the steps below.

### macOS (Apple Silicon)

1. Download `AayushiCode-aarch64.dmg`, open it, and drag Aayushi Code into your Applications folder. Aayushi Code is not signed with an Apple Developer certificate yet, so macOS will block it the first time you open it.
2. Open Terminal and run:

   ```sh
   xattr -d com.apple.quarantine /Applications/AayushiCode.app
   ```

3. Open Aayushi Code normally.

If you'd rather not use Terminal: open Aayushi Code once (you'll see a "Aayushi Code can't be opened" or "Apple could not verify" message), then go to **System Settings → Privacy & Security**, scroll down, and click **Open Anyway** next to Aayushi Code. Confirm with your password.

### Linux (x86_64 and aarch64)

Download `aayushicode-linux-<arch>.tar.gz` and unpack it into `~/.local`:

```sh
tar -xzf aayushicode-linux-$(uname -m).tar.gz -C ~/.local
ln -sf ~/.local/aayushicode.app/bin/aayushicode ~/.local/bin/aayushicode
```

Make sure `~/.local/bin` is on your `PATH`, then run `aayushicode`.

### Windows (x86_64)

Download and run `AayushiCode-x86_64.exe`. The installer isn't code-signed, so Windows SmartScreen may warn you. Click **More info**, then **Run anyway**.
