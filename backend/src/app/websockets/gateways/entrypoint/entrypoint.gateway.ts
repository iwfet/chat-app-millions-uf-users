import { WebSocketGateway } from '@nestjs/websockets';

@WebSocketGateway({ path: '/entrypoint' })
export class EntrypointGateway {}