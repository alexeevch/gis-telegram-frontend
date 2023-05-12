import { Ctx, Hears, Start, Update } from 'nestjs-telegraf';
import { Context } from '../../interfaces/context.interface';
import {
  CATEGORY_QUESTION_SCENE_ID,
  CATEGORY_QUESTION_SCENE_TITLE,
  MAIN_MENU_SCENE_ID,
} from '../../app.constants';

@Update()
export class StartUpdate {
  @Start()
  async onStart(@Ctx() ctx: Context): Promise<void> {
    await ctx.scene.enter(MAIN_MENU_SCENE_ID);
  }

  @Hears(CATEGORY_QUESTION_SCENE_TITLE)
  async onInformationSystemHears(@Ctx() ctx: Context): Promise<void> {
    await ctx.scene.enter(CATEGORY_QUESTION_SCENE_ID);
  }
}
