import { Module } from '@nestjs/common';
import { StartUpdate } from './start.update';
import { CategoryQuestionScene } from '../../modules/categoryQuestion/categoryQuestionScene';
import { MainMenuScene } from '../../modules/mainMenu/mainMenu.scene';

@Module({
  providers: [StartUpdate, MainMenuScene, CategoryQuestionScene],
})
export class StartModule {}
