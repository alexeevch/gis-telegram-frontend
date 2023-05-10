import { Command, Ctx, Start, Update } from 'nestjs-telegraf';
import { Context } from '../../interfaces/context.interface';
import { INFORMATION_SYSTEM_SCENE } from '../../app.constants';

@Update()
export class StartUpdate {
  @Start()
  onStart(): string {
    return 'Ну привет';
  }

  @Command('choseIS')
  async onInformationSystemCommand(@Ctx() ctx: Context): Promise<void> {
    await ctx.scene.enter(INFORMATION_SYSTEM_SCENE);
  }
}
