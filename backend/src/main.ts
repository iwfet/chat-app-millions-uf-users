import {NestFactory} from '@nestjs/core';
import {AppModule} from './app.module';
import {
    FastifyAdapter,
    NestFastifyApplication,
} from '@nestjs/platform-fastify';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
    const app = await NestFactory.create<NestFastifyApplication>(
        AppModule,
        new FastifyAdapter({ logger: true })
    );

    app.enableCors({origin: true});
    app.useGlobalPipes(
        new ValidationPipe({
            transform: true,
            forbidNonWhitelisted: true,
            whitelist: true,
        }));

    // app.useWebSocketAdapter(new WsAdapter(app));

    await app.listen(5000);
}

bootstrap();
