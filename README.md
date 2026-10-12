# FlyCompare

FlyCompare is a free, independent flight and trip planning progressive web app hosted on GitHub Pages.

## What it does
- Build a personal one-way or round-trip itinerary and open independent flight-search providers to check current offers.
- Compare two quotations entered manually by the visitor; estimate group and per-traveller totals.
- Estimate trip budgets, save a browser-local draft and compare it with current inputs.
- Export planning summaries, comparisons and calendar reminders. Install as a PWA for offline access to cached app assets.

FlyCompare **does not retrieve live fares, issue tickets, make reservations or confirm flight availability**. Prices and budgets are visitor-entered estimates. It is not affiliated with any airline or booking provider.

## Stage 101 audit notes
- Reviewed and corrected the HTML page title, meta description and PWA manifest description to match the actual feature set.
- Updated the offline cache version to make the revised application assets available after service-worker update.
- Manual browser testing remains required: mobile layouts; form validation; local-storage restrictions; import/export files; calendar files; cross-tab invalidation; offline install/update; keyboard and screen-reader interaction.
- Before public promotion, check the live GitHub Pages deployment and external provider links in real browsers. This source review is not an end-to-end production certification.
