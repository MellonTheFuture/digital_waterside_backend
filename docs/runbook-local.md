# Local Runbook

1. Copy `.env.example` to `.env`.
2. Start PostgreSQL with `docker compose up -d`.
3. Install dependencies with `pnpm install`.
4. Generate Prisma Client with `pnpm prisma:generate` and sync the schema with `pnpm prisma:push`.
5. Start the API with `pnpm start:dev` and verify `GET http://localhost:4000/health`.
