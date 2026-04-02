# Nishank’s Portfolio

Personal portfolio website built with **Next.js** and **TypeScript**, styled with **Tailwind CSS**, **shadcn/ui**, and **Magic UI**.  
Live site: https://portfolio-dovy.vercel.app

---

## Tech Stack

- **Framework:** Next.js
- **Language:** TypeScript
- **UI:** shadcn/ui + Magic UI
- **Styling:** Tailwind CSS
- **Content:** MDX / content-collections
- **Deployment:** Vercel

---

## Customize Content

Most of the site content (name, links, skills, projects, etc.) is configured here:

- `src/data/resume.tsx`

Update that file to change:

- Profile info (name, location, bio)
- Social links (GitHub, LinkedIn, X, Email)
- Skills list
- Projects / work / education

---

## Run Locally

### 1) Clone the repo

```bash
git clone https://github.com/Devnish0/portfolio.git
cd portfolio
```

### 2) Install dependencies (pnpm)

```bash
pnpm install
```

### 3) Start the dev server

```bash
pnpm dev
```

Then open: `http://localhost:3000`

---

## Scripts

```bash
pnpm dev      # start local dev server
pnpm build    # production build
pnpm start    # run production server
pnpm lint     # run eslint
pnpm lint:fix # fix lint issues
```

---

## License

MIT — see `LICENSE`.
