## Nextjs Coin Challenge

This project was developed to meet a challenge. It's a Cryptos project with real data on a specific date. In the future, it can be improved to have real-time data.\
I'm using SSR in it, although SSG and even SPA could be used in some cases, since the data is static through the API available at */api/coins*, I'm only using SSR.\

The main technologies used in this project were:\
<img src="https://img.shields.io/badge/Nextjs-050505?logo=next.js"/>
<img src="https://img.shields.io/badge/Stitches.js-6e48f7"/>
<img src="https://img.shields.io/badge/Axios-d3c7fc?logo=axios&logoColor=6e48f7"/>

**Access this project in production:**\
https://nextjs-coin-challenge.ruanpasta.com/

[Nextjs](https://nextjs.org/) version 13.3.0.

## Getting Started

- Install dependencies:

```bash
npm install
# or
yarn 
```

- Copy the `.env.example` file to `.env.local`.

- Run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

API routes can be accessed on [http://localhost:3000/api/coins](http://localhost:3000/api/coins). This endpoint can be edited in `pages/api/coins.ts`.
