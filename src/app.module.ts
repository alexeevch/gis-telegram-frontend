import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TelegrafModule } from 'nestjs-telegraf';
import { StartModule } from './modules/start/start.module';

import * as LocalSession from 'telegraf-session-local';
import * as process from 'process';
import { MainMenuScene } from './modules/mainMenu/mainMenu.scene';
import { CategoryQuestionModule } from './modules/categoryQuestion/categoryQuestion.module';

const sessions = new LocalSession({ database: 'session_db.json' });

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: '.env',
    }),
    TelegrafModule.forRootAsync({
      botName: process.env.BOT_NAME,
      useFactory: () => ({
        token: process.env.BOT_TOKEN,
        middlewares: [sessions.middleware()],
        include: [StartModule, MainMenuScene, CategoryQuestionModule],
      }),
    }),
    StartModule,
    MainMenuScene,
    CategoryQuestionModule,
  ],
})
export class AppModule {}
