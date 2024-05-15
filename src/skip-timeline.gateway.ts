import { SubscribeMessage, WebSocketGateway, WsResponse, WebSocketServer } from '@nestjs/websockets';
import { InjectRepository } from '@nestjs/typeorm';
import { Socket, Client } from 'socket.io';
import { Server } from 'http';

@WebSocketGateway()
export class SkipTimelineGateway {
  @WebSocketServer() server: Server;


  @SubscribeMessage('jobToServer')
  addJobs(client: Client, data: string): void{
    this.server.emit("jobToClient", data);
  }
}
