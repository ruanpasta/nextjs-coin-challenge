## About

This project was developed to meet a challenge. It's a Cryptos project with real data on a specific date. In the future, it can be improved to have real-time data.

I'm using SSR in it, although SSG and even SPA could be used in some cases, since the data is static through the API available at */api/coins*, I'm only using SSR.

You can access the system in production through the link [Coin APP](https://coin-app.ruanpasta.com/).

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

### 🚀 WORK IN PROGRESS 🚀
This project is a work in progress, there are still some things left to finish, such as:

- The Dashboard page
- Unit tests
- End-to-end tests
- etc...
