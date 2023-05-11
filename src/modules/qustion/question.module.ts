import { Module } from '@nestjs/common';
import { QuestionUpdate } from './question.update';
import { QuestionScene } from './question.scene';
import { HttpModule } from '@nestjs/axios';

@Module({
  imports: [HttpModule],
  providers: [QuestionUpdate, QuestionScene],
})
export class QuestionModule {}
