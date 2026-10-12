# FlyCompare — Stage 107 release verification

Status: **Not yet certified for public launch.** This is a reproducible manual test plan; unchecked cases have not been verified in a real browser.

## Travel planning
- [ ] One-way search accepts distinct valid three-letter airport codes and a future departure date.
- [ ] Same origin/destination and past dates are rejected with understandable feedback.
- [ ] Round trip requires a return date no earlier than departure.
- [ ] Leave the tab open overnight and confirm an old departure date is rejected on submit.
- [ ] Shared search URL restores fields; expired dates are not restored.
- [ ] Calendar (.ics) and travel plan (.txt) exports accurately reflect the generated itinerary, not later edits.

## Quotations and budget
- [ ] Two visitor-entered quotations compute base fare + fees and group totals for both quote bases.
- [ ] Changing a quote invalidates stale comparison and transfer actions.
- [ ] Budget contingency, per-traveller amount, spending limit and per-night metrics calculate as labelled.
- [ ] Saved budget draft survives refresh; compare, dismiss, restore and delete behave as labelled.
- [ ] Draft import rejects malformed or out-of-range JSON without partially changing fields.
- [ ] CSV/TXT exports open correctly; values beginning with spreadsheet formulas are safely represented.
- [ ] Updating a saved draft in another tab invalidates an older comparison.
- [ ] Erase saved travel data removes recent searches, checklist and saved budget draft.

## PWA, accessibility and privacy
- [ ] Install on supported desktop/mobile browsers and relaunch from the installed icon.
- [ ] Load once online, go offline, then reopen the homepage and privacy page.
- [ ] Reconnect and confirm a new service-worker version replaces FlyCompare's old cache without deleting unrelated caches.
- [ ] With storage restricted/full, successful online page loads still work.
- [ ] At narrow mobile width, no controls or comparison table become unusable.
- [ ] Keyboard-only operation reaches all controls, focus remains visible, and status updates are announced appropriately.
- [ ] External links work and never imply FlyCompare is an airline or live ticketing provider.
- [ ] Verify deployed robots.txt, sitemap.xml, canonical URL, manifest and privacy page.

Record browser, OS, date, expected result, actual result, and any defect before marking a case complete. No live fares, ticketing, account system or revenue are claimed.

## Stage 114: export/share acceptance cases
- [ ] Generate a comparison, change one quote and confirm copy/TXT/CSV/transfer are disabled until recalculation.
- [ ] Reset a comparison and confirm no stale CSV or TXT is available.
- [ ] Generate a budget, change passenger count and confirm stale budget downloads are disabled until recalculation.
- [ ] Share a valid one-way and round-trip URL; open in a new tab and verify restored inputs.
- [ ] Cancel the native share sheet and installation prompt; ensure the planner remains usable.
- [ ] Test denied clipboard permissions and unavailable native sharing; confirm visible fallback instructions.
- [ ] Open CSV in spreadsheet software and verify names/notes beginning with formula characters are treated as text.

These are pending manual browser checks, not passed tests.
