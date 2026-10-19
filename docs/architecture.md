# Architecture

The API is a standalone NestJS application. Feature modules isolate HTTP controllers and domain services; Prisma provides database access through a global module. The frontend is maintained in a separate repository and calls this API over HTTP.
