import { Scene, SceneEnter, SceneLeave, Command } from 'nestjs-telegraf';
import { INFORMATION_SYSTEM_SCENE } from '../../app.constants';
import { Context } from '../../interfaces/context.interface';

@Scene(INFORMATION_SYSTEM_SCENE)
export class InformationSystemSceneScene {
  @SceneEnter()
  onSceneEnter(): string {
    return 'Welcome on IS scene';
  }

  @SceneLeave()
  onSceneLeave(): string {
    return 'Bye Bye';
  }

  @Command('leave')
  async onLeaveCommand(ctx: Context): Promise<void> {
    await ctx.scene.leave();
  }
}
