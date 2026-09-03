#!/usr/bin/env python3
"""Download store badges and generate QR codes from STORE_LINKS in site.js."""
from __future__ import annotations

import re
import ssl
import urllib.parse
import urllib.request
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
OUT = ROOT / "assets" / "store"

APPLE_BADGE = "https://tools.applemediaservices.com/api/badges/download-on-the-app-store/black/en-us?size=250x83&releaseDate=0"
PLAY_BADGE = "https://play.google.com/intl/en_us/badges/static/images/badges/en_badge_web_generic.png"

CTX = ssl.create_default_context()


def store_links() -> tuple[str, str]:
    text = (ROOT / "site.js").read_text(encoding="utf-8")
    block = re.search(r"const STORE_LINKS = \{([\s\S]*?)\};", text)
    if not block:
        raise SystemExit("STORE_LINKS not found in site.js")
    apple = re.search(r'apple:\s*"([^"]*)"', block.group(1))
    play = re.search(r'play:\s*"([^"]*)"', block.group(1))
    if not apple or not play:
        raise SystemExit("apple/play keys missing in STORE_LINKS")
    return apple.group(1), play.group(1)


def fetch(url: str) -> bytes:
    req = urllib.request.Request(url, headers={"User-Agent": "EnerFlowWebsite/1.0"})
    with urllib.request.urlopen(req, context=CTX, timeout=30) as res:
        return res.read()


def qr_svg(data: str) -> bytes:
    qs = urllib.parse.urlencode(
        {
            "size": "480x480",
            "ecc": "H",
            "format": "svg",
            "color": "0b1f1a",
            "bgcolor": "ffffff",
            "qzone": "2",
            "data": data,
        }
    )
    return fetch(f"https://api.qrserver.com/v1/create-qr-code/?{qs}")


def main() -> None:
    OUT.mkdir(parents=True, exist_ok=True)
    apple_url, play_url = store_links()

    if apple_url.startswith("http"):
        (OUT / "qr-app-store.svg").write_bytes(qr_svg(apple_url))
        print(f"wrote qr-app-store.svg for {apple_url}")
    else:
        print("apple URL empty — skipped App Store QR")

    if play_url.startswith("http"):
        (OUT / "qr-play-store.svg").write_bytes(qr_svg(play_url))
        print(f"wrote qr-play-store.svg for {play_url}")
    else:
        print("play URL empty — skipped Play Store QR")

    try:
        apple_badge = fetch(APPLE_BADGE)
        suffix = ".svg" if apple_badge.lstrip().startswith(b"<") or apple_badge.lstrip().startswith(b"<?xml") else ".png"
        (OUT / f"badge-app-store{suffix}").write_bytes(apple_badge)
        print(f"wrote badge-app-store{suffix} ({len(apple_badge)} bytes)")
    except Exception as exc:
        print(f"app store badge skipped: {exc}")

    try:
        play_badge = fetch(PLAY_BADGE)
        (OUT / "badge-google-play.png").write_bytes(play_badge)
        print(f"wrote badge-google-play.png ({len(play_badge)} bytes)")
    except Exception as exc:
        print(f"play badge skipped: {exc}")


if __name__ == "__main__":
    main()
