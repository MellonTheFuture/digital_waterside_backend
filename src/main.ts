import { NestFactory } from "@nestjs/core";
import { AppModule } from "./app.module";

async function bootstrap() {
    const app = await NestFactory.create(AppModule);
    const allowedOrigins = process.env.FRONTEND_ORIGIN?.split(",").map((origin) => origin.trim());
    app.enableCors({ origin: allowedOrigins?.length ? allowedOrigins : true });
    await app.listen(process.env.PORT ?? 4000);
}

void bootstrap();
