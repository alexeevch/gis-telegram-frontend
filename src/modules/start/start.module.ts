import { Module } from '@nestjs/common';
import { StartUpdate } from './start.update';
import { CategoryQuestionModule } from '../categoryQuestion/categoryQuestion.module';
import { MainMenuScene } from '../mainMenu/mainMenu.scene';

@Module({
  providers: [StartUpdate],
})
export class StartModule {}
