import { Module } from '@nestjs/common';
import { StartUpdate } from './start.update';
import { CategoryQuestionModule } from '../../modules/categoryQuestion/categoryQuestion.module';
import { MainMenuScene } from '../../modules/mainMenu/mainMenu.scene';

@Module({
  imports: [CategoryQuestionModule, MainMenuScene],
  providers: [StartUpdate],
})
export class StartModule {}
