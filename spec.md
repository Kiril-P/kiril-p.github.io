# Spec: Project Exhibition & Deep-Dive System (V2)

## 1. Vision
Transform the portfolio into an immersive, premium exhibition. Projects are no longer just links; they are high-fidelity case studies featuring looped videos, technical breakdowns, and multi-media galleries to impress big-tech recruiters and engineering leads.

## 2. Priority & Main Showcase
The featured projects section on the home page will follow this strict priority order:

| Rank | Project | Primary Image (Home Page) | Source Tag |
| :--- | :--- | :--- | :--- |
| **1** | **Cleanr** | `cleanr pic.png` | `Cloud Source` |
| **2** | **Polygon Protocol** | `polygonprotocol.png` | `Open Source` |
| **3** | **Chess Project** | `chess pic1.png` | `Open Source` |
| **4** | **Starburst** | `starburst1.png` | `Open Source` |
| **5** | **Battleship** | `Battleship.png` | `Open Source` |

## 3. Media & Connectivity (Internal Pages)

Each project will have a dedicated internal page (`/projects/[slug]`) with the following media assets:

### A. Looped Video Features
These videos will play on loop as the central focus of the project page:
- **Chess Project**: [YouTube Link](https://youtu.be/g9J_QGgzTGg)
- **NomNomNow (Cloud Project)**: [YouTube Link](https://youtu.be/CGYAp0squuc)
- **Polygon Protocol**: [YouTube Link](https://youtu.be/Yu9m_tLXc84)

### B. Image Galleries
Additional assets for internal pages (to be displayed as scrollable or grid galleries):
- **Battleship**: `Battleship (1).png`, `(2)`, `(3)`, `(4)`
- **Chess**: `chess pic2.png`
- **Solitaire**: `solitaire.png`, `solitaire2.png`, `solitaire3.png`
- **Starburst**: `starburst2.png`, `3`, `4`, `5`

### C. Source Tags & Linking
- **Open Source**: Displays a GitHub link and an "Open Source" badge.
- **Closed/Cloud Source**: Displays a "Closed Source" or "Private Repository" badge (no public code link).
- **Internal Pages**: All cards on the main page are CLIKCABLE and take the user to the internal deep-dive page, *not* directly to external links.

## 4. Technical Strategy

### A. Data Schema (`src/lib/projects-config.ts`)
Update projects to include:
- `video_url`: For the looped YouTube background/feature.
- `gallery_images`: Array of paths for the deep-dive page.
- `source_status`: `open-source` | `closed-source` | `proprietary`.
- `github_url`: (Optional) link to repo if open source.

### B. Internal Page Template (`src/pages/projects/[slug].astro`)
- **Hero Section**: High-res display of the primary image or looped video.
- **Context Section**: Overview of the project goals.
- **Technical Stack**: Deep-dive into specific engineering choices.
- **Visual Evidence**: Multi-image gallery utilizing the remaining assets.
- **CTA**: Links to code (if Open Source) or live demo (if applicable).

## 5. Next Steps
- [ ] Refactor `projects-config.ts` with updated priority and the specified primary images.
- [ ] Design the dynamic `[slug].astro` layout for premium video/image storytelling.
- [ ] Implement the badge system for "Open Source" vs "Closed/Cloud Source".
