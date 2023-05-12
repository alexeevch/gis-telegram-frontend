import { Update } from 'nestjs-telegraf';
import { CategoryQuestionService } from './categoryQuestion.service';

@Update()
export class CategoryQuestionUpdate {
  constructor(
    private readonly categoryQuestionService: CategoryQuestionService,
  ) {}
}
