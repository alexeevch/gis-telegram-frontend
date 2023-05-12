import { Module } from '@nestjs/common';
import { CategoryQuestionService } from './categoryQuestion.service';
import { HttpModule } from '@nestjs/axios';
import { CategoryQuestionUpdate } from './categoryQuestion.update';
import { CategoryQuestionScene } from './categoryQuestion.scene';

@Module({
  imports: [HttpModule],
  providers: [
    CategoryQuestionService,
    CategoryQuestionUpdate,
    CategoryQuestionScene,
  ],
})
export class CategoryQuestionModule {}
