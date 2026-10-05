# chaparralparkhomes-website

Chaparral Park Homes - Elizabeth Vijan, Tackett Team at eXp Realty.

Plain HTML/CSS/JS. Dark black/white/gold design (Cormorant Garamond + Montserrat): sticky black header with the white Tackett Team logo, a top contact bar, a Neighborhood dropdown and a gold Contact button; full-photo heroes; image tiles; neighborhood cards; stats band; reviews; FAQ accordions; photo CTA bands. Optimized photography, SEO/AEO markup and lead capture are unchanged.

- `css/styles.css` - single shared stylesheet. Design tokens (`--black`, `--gold`, `--gold-deep`, fonts) are at the top; the "v2 integration layer" section styles the SEO/AEO and lead-capture pieces (answer boxes, fact lists, valuation band, main-site band, network links, sticky mobile bar). Older `--color-*` / `--space-*` names are kept as aliases.
- FAQ sections are `<details class="faq-item"><summary><h3>Question</h3></summary><p>Answer</p></details>` (first one open). Keep the visible Q&A text identical to the page's FAQPage JSON-LD.
- `js/main.js` - mobile menu, Neighborhood dropdown, and the contact-form `?interest=` preselect. The Netlify form posts normally (no JavaScript submit handler).

- `assets/images/photos/` - optimized WebP photos (640/1200/1920 px widths); pages use `srcset`, `width`/`height`, lazy loading (hero is preloaded).
- `contact.html` - Netlify Form (`name="contact"`, honeypot `bot-field`, success page `thank-you.html`). Set the email notification in Netlify > Forms > Form notifications.
- `blog/` - 15 articles listed on `blog/index.html` (newest first). `why-chaparral-park-is-the-heart-of-85250.html` and `relocating-to-scottsdale-az.html` are localized ports from elizabethvijan.com; the other 13 are ported from the old chaparralparkhomes.com blog and keep the ORIGINAL old-site slug as the file name (`blog/<old-slug>.html`). Each page follows the template of `why-chaparral-park-is-the-heart-of-85250.html` (self-canonical to the `.html` URL, OG/Twitter tags, Article + BreadcrumbList JSON-LD, valuation CTA, link to elizabethvijan.com, related-post links). Photos come from `assets/images/photos/` (the saved old posts had no article images). To add a post: create `blog/<slug>.html`, add its card to `blog/index.html` (and the Blog JSON-LD list), add it to `sitemap.xml`, and add a `/blog/<slug>` redirect in `netlify.toml`. The home-page area cards and "From the Blog" row link to specific articles.
- `sitemap.xml` / `robots.txt` / `404.html` - SEO basics. Only published pages belong in the sitemap.
- `netlify.toml` - Netlify config: www -> apex and http -> https 301s so `https://chaparralparkhomes.com/` is the only served host (canonical + og:url on every page already point there). It also 301s the old extensionless blog URLs (`/blog/<old-slug>`) to the matching `blog/<slug>.html` file, and maps the two earlier old slugs to `relocating-to-scottsdale-az.html` and `why-chaparral-park-is-the-heart-of-85250.html`. To also redirect the default `*.netlify.app` address, uncomment the rule and fill in the site name.
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

`assets/images/tackett-logo-black-540.webp` (540x128, ~10 KB) is the black Tackett Team logo used on elizabethvijan.com, shown on a white brand band at the top of the dark footer. The original PNG is kept for schema.org `logo`. The dark header uses `assets/images/tackett-logo-white-540.webp` (540x128), made from `tackett-logo-white.png`.
