import { Scene, SceneEnter, SceneLeave, Command, Ctx } from 'nestjs-telegraf';
import {
  CATEGORY_QUESTION_SCENE_ID,
  CATEGORY_QUESTION_SCENE_TITLE,
} from '../../app.constants';
import { Context } from '../../interfaces/context.interface';
import { CategoryQuestionService } from './categoryQuestion.service';

@Scene(CATEGORY_QUESTION_SCENE_ID)
export class CategoryQuestionScene {
  constructor(
    private readonly categoryQuestionService: CategoryQuestionService,
  ) {}
  @SceneEnter()
  async OnSceneEnter(@Ctx() ctx: Context) {
    const questions = await this.categoryQuestionService.getAll();
    await ctx.reply(`Вы вошли в сцену ${CATEGORY_QUESTION_SCENE_TITLE}`, {
      reply_markup: {
        keyboard: questions,
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
