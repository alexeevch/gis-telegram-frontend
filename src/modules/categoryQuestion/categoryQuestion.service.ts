import { Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { lastValueFrom, map } from 'rxjs';
import * as process from 'process';

@Injectable()
export class CategoryQuestionService {
  constructor(private http: HttpService) {}
  async getAll() {
    return await lastValueFrom(
      this.http
        .get('https://api.gis.hard2code.ru/api/v1/information-systems', {
          headers: { Authorization: `Basic ${process.env.API_AUTH_TOKEN}` },
        })
        .pipe(map((response) => response.data)),
    );
  }

  async getLabelsAll() {
    const response = await lastValueFrom(
      this.http
        .get('https://api.gis.hard2code.ru/api/v1/information-systems', {
          headers: { Authorization: `Basic ${process.env.API_AUTH_TOKEN}` },
        })
        .pipe(map((response) => response.data)),
    );

    const labels = response.map((item) => [item.name]);
    console.log(labels);
    return labels;
  }
}
