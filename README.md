> [!IMPORTANT]
> Remove this line to confirm you've reviewed this PR before submitting.

# Aayushi Code

## Building a .deb package

Compiling Aayushi Code locally is slow because the codebase is large. To get a
`.deb` you can install without a local build:

- **GitHub Actions**: push to `main` (or run the `build-deb` workflow manually
  via the Actions tab). The workflow builds the editor in CI and uploads a
  `.deb` as a downloadable artifact. Install it with:
  ```sh
  sudo apt install ./aayushicode_*.deb
  ```
- **Locally**: run `./script/bundle-deb` after installing Linux dependencies
  (`./script/linux`). The package is written to
  `target/release/aayushicode_*.deb`.