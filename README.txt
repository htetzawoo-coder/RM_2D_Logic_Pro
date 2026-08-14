RM 2D Logic Pro v1.4.3 — Limit Board + Page Button Repair

Fixes in v1.4.3:
- Fixed the blank Limit Board introduced by the v1.4.2 Language Mode patch.
- Restored seven functions that were accidentally removed: sale, setRecordDate, filteredGroups, renderRecords, tog, edit, and delg.
- Restoring sale/render flow allows renderAll() to complete, so Limit Board now builds all 100 cells (00–99).
- Rechecked all top page buttons and their target sections: Dashboard, Record, Records, Limit, Over, AM, PM, Daily, Image, Settings.
- Page buttons now use explicit English/Myanmar labels through data-en/data-my for reliable separate Language Mode switching.
- Myanmar Mode keeps thicker, more prominent Myanmar UI text.
- Records Today / All Dates, ON/OFF detail, Edit and Delete handlers restored.
- Service Worker cache bumped to rm2d-v143-language-limit-fix to prevent stale v1.4.1/v1.4.2 UI files.

Retained:
- Number Entry R = original + reverse; doubles/palindromes count twice (11 x 500 => 1000).
- Number Entry Direct = original only.
- Amount Entry does not repeat R/Direct after a Number Entry choice.
- Records detail aggregates duplicate numbers.
- Manual Buy Back subtracts from Limit Board and deductions display as (-Amount).
- Projected Balance = Session Total - (Limit Amount x Payout Rate) - Over Amount Total.
- Maximum Loss <-> Limit Amount auto calculation remains linked to the selected Date/Session.

Upload every file and the vendor folder together to the GitHub Pages repository root. After deployment, use Ctrl+F5 once; the new service-worker cache name will replace the old cached app shell.
