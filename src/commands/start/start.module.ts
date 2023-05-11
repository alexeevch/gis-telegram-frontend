import { Module } from '@nestjs/common';
import { StartUpdate } from './start.update';
import { MainMenuScene } from '../../modules/mainMenu/mainMenu.scene';
import { CategoryQuestionModule } from '../../modules/categoryQuestion/categoryQuestion.module';

@Module({
  imports: [CategoryQuestionModule],
  providers: [StartUpdate, MainMenuScene],
})
export class StartModule {}
