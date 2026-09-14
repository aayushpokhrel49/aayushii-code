use client::ZED_URL_SCHEME;
use gpui::{AsyncApp, actions};

actions!(
    cli,
    [
        /// Registers the aayushicode:// URL scheme handler.
        RegisterAayushicodeScheme
    ]
);

pub async fn register_aayushicode_scheme(cx: &AsyncApp) -> anyhow::Result<()> {
    cx.update(|cx| cx.register_url_scheme(ZED_URL_SCHEME)).await
}