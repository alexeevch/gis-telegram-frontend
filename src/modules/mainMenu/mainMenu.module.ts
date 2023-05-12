import { Module } from '@nestjs/common';
import { MainMenuScene } from './mainMenu.scene';

@Module({
  providers: [MainMenuScene],
})
export class MainMenuModule {}
