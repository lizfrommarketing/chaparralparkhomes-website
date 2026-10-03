# chaparralparkhomes-website

Chaparral Park Homes - Elizabeth Vijan, Tackett Team at eXp Realty.

Plain HTML/CSS/JS. Original black/white/gold design, now with optimized photography, SEO/AEO markup and lead capture.

- `assets/images/photos/` - optimized WebP photos (640/1200/1920 px widths); pages use `srcset`, `width`/`height`, lazy loading (hero is preloaded).
- `contact.html` - Netlify Form (`name="contact"`, honeypot `bot-field`, success page `thank-you.html`). Set the email notification in Netlify > Forms > Form notifications.
- `blog/` - 2 of the 14 articles linked from `blog/index.html` exist so far: `why-chaparral-park-is-the-heart-of-85250.html` and `relocating-to-scottsdale-az.html` (localized ports of posts from elizabethvijan.com). The other 12 are listed, commented out, in `sitemap.xml`; move each `<url>` out of the comment when its page is written. Their cards on `blog/index.html` are kept in an HTML comment (not linked) and the home-page area cards point at the closest live article or the Journal index.
- `sitemap.xml` / `robots.txt` / `404.html` - SEO basics. Only published pages belong in the sitemap.
- `netlify.toml` - Netlify config: www -> apex and http -> https 301s so `https://chaparralparkhomes.com/` is the only served host (canonical + og:url on every page already point there). To also redirect the default `*.netlify.app` address, uncomment the rule and fill in the site name.
- Canonical/OG URLs use `https://chaparralparkhomes.com/`.

## Network of local sites (cross-links)

The footer "Part of the Elizabeth Vijan network of local sites" block, the footer "Other Areas" column and the homepage "Explore other areas" cards are generated from `network-sites.json`. To add a new branded local-area site:

1. Add it to `sites` (and, if it should appear as an area card/link, `areas`) in `network-sites.json`.
2. Run `python3 tools/sync_network.py` (standard library only) - it rewrites the marked blocks on every page.
3. Copy the same `network-sites.json` entry into the elizabethvijan-website repo and run its copy of the script.

Links between the sites are normal followed links (no `nofollow`).

### Pointing to the main site (elizabethvijan.com)

Beyond the generated blocks, every page carries these hand-maintained references to https://elizabethvijan.com/ (all plain followed links): the header nav link labelled "ElizabethVijan.com" (`a.nav-network`), a "Main site: ElizabethVijan.com" line in the footer brand paragraph (`a.footer-mainsite`), the black "Visit ElizabethVijan.com" band on the home page (`#main-site`), a one-line strip on `about.html` and `contact.html` (`.mainsite-strip`), and `affiliation` + `sameAs` entries in the RealEstateAgent JSON-LD (and `sameAs` on the About-page Person). `network-sites.json` already lists the hub, so no change is needed there.

## Footer logo

`assets/images/tackett-logo-black-540.webp` (540x128, ~10 KB) is the black Tackett Team logo used on elizabethvijan.com, shown on a white brand band at the top of the dark footer. The original PNG is kept for schema.org `logo`.
