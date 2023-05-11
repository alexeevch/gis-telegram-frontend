import { Scene, SceneEnter, SceneLeave, Command, Ctx } from 'nestjs-telegraf';
import {
  FEEDBACK_SCENE_TITLE,
  GUIDE_SCENE_TITLE,
  CATEGORY_QUESTION_SCENE_ID,
  CATEGORY_QUESTION_SCENE_TITLE,
  MAIN_MENU_SCENE_TITLE,
} from '../../app.constants';
import { Context } from '../../interfaces/context.interface';

@Scene(CATEGORY_QUESTION_SCENE_ID)
export class CategoryQuestionScene {
  @SceneEnter()
  async OnSceneEnter(@Ctx() ctx: Context) {
    await ctx.reply(`Вы вошли в сцену ${CATEGORY_QUESTION_SCENE_TITLE}`, {
      reply_markup: {
        keyboard: [['IS1'], ['IS2'], ['IS3'], ['IS4']],
        one_time_keyboard: true,
        resize_keyboard: true,
      },
    });
  }

  @SceneLeave()
  onSceneLeave(): string {
    return `Вы покинули сцену "${CATEGORY_QUESTION_SCENE_TITLE}"`;
  }

  @Command('/leave')
  async onLeaveCommand(@Ctx() ctx: Context): Promise<void> {
    await ctx.scene.leave();
  }
}
