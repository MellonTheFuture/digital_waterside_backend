# Digital Waterside API

NestJS API and background worker for Digital Waterside.

## Requirements

- Node.js 20+
- pnpm 9
- Docker Desktop (for local PostgreSQL)

## Development

```sh
pnpm install
Copy-Item .env.example .env
docker compose up -d
pnpm prisma:generate
pnpm prisma:push
pnpm start:dev
```

The API listens on `http://localhost:4000`; `GET /health` is the health check.
The feature modules are starting points and need domain logic, validation, and authorization before production use.
