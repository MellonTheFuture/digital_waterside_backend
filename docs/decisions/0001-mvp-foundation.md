# 0001: MVP Foundation

## Decision

Keep the frontend applications and backend API in separate Git repositories. The frontend repository contains the marketplace, vendor, and admin applications with shared UI and API client packages. The backend repository owns the NestJS API, database schema, and local infrastructure.

## Consequences

The repositories can be versioned and deployed independently. API contracts must be coordinated across repositories; shared source packages are not imported across the repository boundary.
