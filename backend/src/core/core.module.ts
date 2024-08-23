import {Module} from "@nestjs/common";
import {RedisModule} from "@liaoliaots/nestjs-redis";
import { ConfigService } from '@nestjs/config';


@Module({
    imports: [
        RedisModule.forRootAsync({
            inject: [ConfigService],
            useFactory: async (config: ConfigService) => ({
                config: [
                    {
                        namespace: 'subscriber',
                        host: config.get('REDIS_HOST'),
                        port: config.get('REDIS_PORT'),
                    },
                    {
                        namespace: 'publisher',
                        host: config.get('REDIS_HOST'),
                        port: config.get('REDIS_PORT'),
                    },
                ],
            }),
        }),
    ],
})
export class CoreModule {
}