import { Scene, SceneEnter, SceneLeave, Command, Ctx } from 'nestjs-telegraf';
import { QUESTION_SCENE_ID, QUESTION_SCENE_TITLE } from '../../app.constants';
import { Context } from '../../interfaces/context.interface';
import { QuestionUpdate } from './question.update';

@Scene(QUESTION_SCENE_ID)
export class QuestionScene {
  constructor(private readonly questionUpdate: QuestionUpdate) {}
  @SceneEnter()
  async OnSceneEnter(@Ctx() ctx: Context) {
    const questions = await this.questionUpdate.getAll();
    await ctx.reply(`Вы вошли в сцену ${QUESTION_SCENE_TITLE}`, {
      reply_markup: {
        keyboard: questions,
        one_time_keyboard: true,
        resize_keyboard: true,
      },
    });
  }

  @SceneLeave()
  onSceneLeave(): string {
    return `Вы покинули сцену "${QUESTION_SCENE_TITLE}"`;
  }

  @Command('/leave')
  async onLeaveCommand(@Ctx() ctx: Context): Promise<void> {
    await ctx.scene.leave();
  }
}
