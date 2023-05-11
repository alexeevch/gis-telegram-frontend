import { Scene, SceneEnter, SceneLeave, Command, Ctx } from 'nestjs-telegraf';
import {
  FEEDBACK_SCENE_TITLE,
  GUIDE_SCENE_TITLE,
  CATEGORY_QUESTION_SCENE_TITLE,
  MAIN_MENU_SCENE_ID,
  MAIN_MENU_SCENE_TITLE,
} from '../../app.constants';
import { Context } from '../../interfaces/context.interface';

@Scene(MAIN_MENU_SCENE_ID)
export class MainMenuScene {
  @SceneEnter()
  async OnSceneEnter(@Ctx() ctx: Context) {
    await ctx.reply(`Вы вошли в сцену ${MAIN_MENU_SCENE_TITLE}`, {
      reply_markup: {
        keyboard: [
          [CATEGORY_QUESTION_SCENE_TITLE],
          [GUIDE_SCENE_TITLE, FEEDBACK_SCENE_TITLE],
        ],
        one_time_keyboard: true,
        resize_keyboard: true,
      },
    });
  }

  @SceneLeave()
  onSceneLeave(): string {
    return `Вы покинули сцену ${MAIN_MENU_SCENE_TITLE}`;
  }

  @Command('/leave')
  async onLeaveCommand(ctx: Context): Promise<void> {
    await ctx.scene.leave();
  }
}
