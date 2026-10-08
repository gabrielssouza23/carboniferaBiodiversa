# Carbonífera Biodiversa

**Live:** [carbonifera-biodiversa.vercel.app](https://carbonifera-biodiversa.vercel.app/)

A biodiversity mapping platform for the coal-mining region of Rio Grande do Sul, Brazil. It catalogs local fauna and flora and lets anyone contribute geotagged photos of species they find, which researchers then review in an admin area.

Research project developed at IFSul. **1st place at Mocitec 2024**, qualified for **FEBRACE 2025**.

This repository is the web frontend. The REST API lives in [carboAPI](https://github.com/gabrielssouza23/carboAPI).

## Features

- **Paginated species catalog** and a page per species: taxonomy, description, image gallery, bibliographic references and a map of where it was sighted.
- **Community contributions.** Visitors upload photos and the app reads the GPS coordinates and capture date from each image's EXIF metadata in the browser, so the sighting is placed on the map without manual input.
- **Admin area** (JWT login) to register species, add bibliographic references and review contributions on a map.
- **AI-assisted identification.** Reviewers can send a contributed photo to a vision model (via the API) to get a suggested species, common names and habitat notes.
- **Articles** and a "get involved" form for people who want to join the project.

## Stack

- **React 18** + **Vite**, **React Router**
- **Tailwind CSS**, MUI Joy, Ant Design, Headless UI, Framer Motion
- **Axios** for the API, **ExifReader** for photo metadata
- **Google Maps** (`google-map-react`) for sighting maps
- **Storybook** for components, deployed on **Vercel**

## Project structure

```
src/
├── pages/
│   ├── home/              # landing page
│   ├── catalog/           # paginated species catalog
│   ├── speciePage/        # species detail: gallery, map, references
│   ├── contributionPage/  # photo upload with EXIF extraction
│   ├── admin/             # login, species CRUD, contribution review, AI analysis
│   ├── articles/
│   └── participe/
├── components/            # navbar, footer, shared UI
└── services/api.js        # Axios instance pointing to the API
```

## Running locally

```bash
npm install
npm run dev
```

Create a `.env` file with a Google Maps API key:

```env
VITE_MAPS_KEY=your-key
```

By default the app talks to the deployed API. To use a local one, change `baseURL` in `src/services/api.js` to `http://localhost:3333`.

Other scripts: `npm run build`, `npm run preview`, `npm run lint`, `npm run storybook`.
