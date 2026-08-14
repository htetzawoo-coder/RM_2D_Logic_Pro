RM 2D Logic Pro v1.4.1 — Bilingual UI + Deduction Board + Corrected Risk Formula PWA

Changes in v1.4.1:
- Page tabs and key labels/tags use English + Myanmar together.
- Limit Board shows deductions in brackets. Example: net 394 with 300 deducted displays 394 and (-300).
- Manual Buy Back can deduct past zero; negative net values display in accounting-style brackets instead of being blocked/clamped to zero.
- Over Manual Buy Back Entry remains Name + Number + Amount and subtracts from the selected Date/Session Limit Board.
- Projected Balance formula corrected to: Session Total - (Limit Amount x Payout Rate) - Over Numbers Amount Total.
- Limit risk panel now shows Over Amount Total.
- Maximum Loss <-> Limit Amount auto calculation was adjusted to include Over Amount Total.

Retained from v1.4.0:
- Number Entry R = original + reverse; palindrome/double counts twice (11 at 500 => 11 = 1000).
- Number Entry direct = original only; Amount Entry does not repeat R/direct after Number Entry choice.
- Records detail aggregates same-number rows into one displayed amount.

Upload every file and the vendor folder together to the GitHub Pages repository root. Do not rename files. After deployment, hard refresh once so the v1.4.1 service worker replaces older cached versions.
