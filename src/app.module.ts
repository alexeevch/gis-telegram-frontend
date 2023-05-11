import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TelegrafModule } from 'nestjs-telegraf';
import { StartModule } from './commands/start/start.module';

import * as LocalSession from 'telegraf-session-local';
import * as process from 'process';

const sessions = new LocalSession({ database: 'session_db.json' });

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: '.env',
    }),
    TelegrafModule.forRoot({
      include: [StartModule],
      middlewares: [sessions.middleware()],
      botName: process.env.BOT_NAME,
      token: process.env.BOT_TOKEN,
    }),
    StartModule,
  ],
})
export class AppModule {}
