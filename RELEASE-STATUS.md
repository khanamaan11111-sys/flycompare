# FlyCompare — Stage 115 release checkpoint

**Status: Release candidate; public-launch certification pending.**

## Scope verified by repository inspection
- Main independent travel planner, manual fare quotation comparison and budget tools are present.
- Privacy page, manifest, service worker, sitemap and robots file are part of the repository.
- The release QA cases are recorded in [QA-CHECKLIST.md](./QA-CHECKLIST.md).
- The app does not provide live fares, issue tickets or confirm reservations.

## Required release gates (not yet marked passed)
1. Run the QA checklist on desktop and narrow mobile browsers; record browser, OS, date, result and defects.
2. Verify all planner validation, quote and budget calculations, saved drafts, data deletion and cross-tab behaviour.
3. Open generated TXT, CSV, JSON and ICS files; test share/copy and denied-permission fallbacks.
4. Install the PWA on a supported device, reload offline and confirm the homepage and privacy page are accessible.
5. Verify the deployed GitHub Pages site, canonical URL, manifest, sitemap, robots file and external links.
6. Resolve release-blocking defects and repeat the affected tests before promoting the site as fully tested.

**Decision:** No claim of real-device QA completion, revenue, airline affiliation, live pricing or booking capability. The 115-stage development roadmap ends here; any defects found during acceptance testing are follow-up fixes, not invented passed tests.
