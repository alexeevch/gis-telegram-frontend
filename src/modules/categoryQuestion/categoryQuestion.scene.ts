import {
  Scene,
  SceneEnter,
  SceneLeave,
  Command,
  Ctx,
  Hears,
} from 'nestjs-telegraf';
import {
  CATEGORY_QUESTION_SCENE_ID,
  CATEGORY_QUESTION_SCENE_TITLE,
  QUESTION_SCENE_ID,
} from '../../app.constants';
import { Context } from '../../interfaces/context.interface';
import { CategoryQuestionService } from './categoryQuestion.service';

@Scene(CATEGORY_QUESTION_SCENE_ID)
export class CategoryQuestionScene {
  constructor(
    private readonly categoryQuestionService: CategoryQuestionService,
  ) {}

  //TODO: Вынести логику по получению данных в categoryQuestionUpdate и избавиться от categoryQuestionService
  @SceneEnter()
  async OnSceneEnter(@Ctx() ctx: Context) {
    const buttons = await this.categoryQuestionService.getLabelsAll();
    await ctx.reply(`Вы вошли в сцену ${CATEGORY_QUESTION_SCENE_TITLE}`, {
      reply_markup: {
        keyboard: buttons,
        one_time_keyboard: true,
        resize_keyboard: true,
      },
    });
  }

  @Hears(['ГИС ТОР КНД', '2'])
  async onQuestionHears(@Ctx() ctx: Context) {
    await ctx.scene.enter(QUESTION_SCENE_ID);
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
