This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Config

Create `.env.local` with the following attributes:

```
AUTH0_SECRET=development
AUTH0_BASE_URL=[app url]
AUTH0_ISSUER_BASE_URL=[auth0 issuer url]
AUTH0_CLIENT_ID=[client ID]
AUTH0_CLIENT_SECRET=[client secret]
```

## Running Locally

Run the development server:

```bash
npm run dev
```

## Running in Docker

```bash
docker build -t nextjs-playground:latest .
docker run -p 3001:3000 --env-file .env.local -e AUTH0_BASE_URL=http://localhost:3000 nextjs-playground:latest
```
