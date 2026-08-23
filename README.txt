RM 2D Logic Pro v1.4.8A — One Date / One Session / One Name Share

Includes PNG icons at 16, 32, 48, 72, 96, 128, 144, 152, 180, 192, 256, 384, and 512 pixels.
Also includes Apple Touch, favicon, and maskable icon filenames plus a manifest-icons.json snippet.

Upload every file and the vendor folder together to the GitHub Pages repository root. Do not rename files. Publish the included firestore.rules before testing, then refresh once so the v1.4.6B-1.1 service worker replaces older cached versions.

Firebase Authentication: Google + Phone. Firestore stores each user's data separately. Owner access is granted by manually creating owners/{UID} in Firestore after the first successful owner login.

If the v1.4.4 Firestore rules are already published, this update does not require a rules change. New users receive 14 days of free access. Owner Control can save the public contact phone and expiry notice, choose an Exp Date per user, activate access until that date, or block the user.

New in v1.4.5A: AM to PM Copy Entry. Filter the source by Date, Session, and Name, preview groups, select only the required entries, edit Direct/R amounts before saving, and copy them to another Date/Session. The app skips entries already copied to the same target and can undo the latest copy batch without changing the original entries.

New in v1.4.5B: Full History page with From/To Date, Session, Name, and Code/Number search filters. It shows Entry Group count, expanded Number Row count, Total Amount, complete number details, and a COPY badge for entries created by AM/PM Copy. The History page is read-only; existing edit/delete behavior remains on Records.

New in v1.4.5C: Select one Name on Full History and share the filtered Date/Session/Search result as Text, a 1080px-wide PNG image, or a detailed CSV with one expanded number per row. Supported phones use the system share sheet; unsupported browsers download the PNG or CSV. Image export never silently truncates an oversized report and asks for a smaller date range instead.

v1.4.5 Final consolidates the user-confirmed v1.4.5A, v1.4.5B, and v1.4.5C checkpoints without changing their accepted behavior. This is the stable baseline for the next version.

New in v1.4.6A: Entry Date, Time, and Session are locked automatically using Asia/Yangon time. AM is 00:00 through 12:00; PM starts at 12:01. The login timestamp calibrates the device clock against Firebase server time when available. Dashboard Graph is replaced by the current Monday-Friday P Number table. Owner Control can save or correct AM/PM P Numbers by date in Firestore; users can read them, and AM, PM, Daily, and Image report P fields auto-fill with manual fallback when a result is missing.

New in v1.4.6B-1: Added an API-ready SET Live page with SET, VALUE, 12:01 PM AM result, 4:30 PM PM result, date view, recent history, offline last-known cache, and visible data status. Owner Control can manually save an AM or PM market snapshot. The saved P Number is also synchronized to pResults so Dashboard and report P fields update automatically. This checkpoint does not call or copy any third-party private API; an authorized official API adapter can replace the manual source later without redesigning the UI or Firestore data model.

Fixed in v1.4.6B-1.1: AM Report is permanently scoped to AM records for the selected date, PM Report is permanently scoped to PM records, and Daily Report always combines AM + PM. The shared Session selector is hidden only on these three report pages, so changing the global Session on Records, Limit, Over, or Image can no longer empty or alter AM/PM/Daily report calculations.

Integrated from v1.4.3: separate English/Myanmar presentation mode, repaired Limit Board and page buttons, restored Records/Edit/Delete flow, risk and auto-limit calculations, manual Buy Back deductions, and the latest Pair Entry behavior.

New in v1.4.7: Confirmed Community Live API is connected as a read-only public data source. Normal User accounts open on the SET Live page and only see the public Live page plus their Account page. Owner accounts retain the complete app. The public Live UI shows current/last P, SET, VALUE, API update/status, 12:01 AM final, 4:30 PM final, and Owner-managed Modern/Internet/TV values. Owner Control adds API refresh, explicit final-result sync to Firestore Weekly P/Reports, and Modern/Internet/TV inputs. Existing manual SET/VALUE/P saving remains available as an offline fallback. No API response is written to Firestore unless the Owner presses SYNC FINAL RESULTS.

New in v1.4.8A: Name-specific sharing now requires exactly one Date, AM or PM, and one Name. Preview, Text, PNG, and CSV exports aggregate duplicate Numbers and display Number and Amount in separate, clear fields. Records, Full History, and Latest Record now display the full expanded Group Amount: for example, 80* at 500 shows 1,000 and -9 at 500 shows 2,500. The underlying saved records, entry parser, role access, Firebase rules, and Live API integration are unchanged.

After uploading all files, refresh the installed PWA once so the v1.4.8A service worker replaces the old cache. The existing firestore.rules already allow signed-in users to read marketResults and restrict writes to Owner accounts.
