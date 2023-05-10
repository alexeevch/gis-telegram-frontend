import { Module } from '@nestjs/common';
import { StartUpdate } from './start.update';
import { InformationSystemSceneScene } from '../information-system/information-system.scene';

@Module({
  providers: [StartUpdate, InformationSystemSceneScene],
})
export class StartModule {}
