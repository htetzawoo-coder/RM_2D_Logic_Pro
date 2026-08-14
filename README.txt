RM 2D Logic Pro v1.4.0 — Pair R + Risk Limit + Buy Back PWA

Changes in v1.4.0:
- Number Entry R = original numbers + reverse numbers. Double/palindrome numbers count twice (example 11 at 500 => 11 = 1000).
- Number Entry direct = original numbers only. If R/direct is selected at Number Entry, Amount Entry does not ask for R/direct again.
- Records detail aggregates the same number into one line (example 11 = 1000).
- Limit Page adds two-way Maximum Loss <-> Limit Amount auto formula plus Session Total, Highest Number Amount, Current Balance and Projected Balance.
- Balance formula: Session Total - (Highest Number Amount x Payout Rate).
- Over Page displays only Number and Over Amount.
- Over Manual Buy Back Entry: Name + Number + Amount; saved amount is SUBTRACTED from the Limit Board.

Includes PNG icons at 16, 32, 48, 72, 96, 128, 144, 152, 180, 192, 256, 384, and 512 pixels.
Also includes Apple Touch, favicon, and maskable icon filenames plus a manifest-icons.json snippet.

Upload every file and the vendor folder together to the GitHub Pages repository root. Do not rename files. After deployment, refresh once so the v1.4.0 service worker replaces older cached versions.
