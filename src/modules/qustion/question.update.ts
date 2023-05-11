import { HttpService } from '@nestjs/axios';
import { lastValueFrom, map } from 'rxjs';
import * as process from 'process';
import { Update } from 'nestjs-telegraf';

@Update()
export class QuestionUpdate {
  constructor(private http: HttpService) {}
  async getAll() {
    const response = await lastValueFrom(
      this.http
        .get(`https://api.gis.hard2code.ru/api/v1/questions`, {
          headers: { Authorization: `Basic ${process.env.API_AUTH_TOKEN}` },
        })
        .pipe(map((response) => response.data)),
    );

    console.log(response);
    return response;
  }

  async getByInformationSystem(id) {
    const response = await lastValueFrom(
      this.http
        .get(
          `https://api.gis.hard2code.ru/api/v1/questions?informationSystemId=${id}`,
          {
            headers: { Authorization: `Basic ${process.env.API_AUTH_TOKEN}` },
          },
        )
        .pipe(map((response) => response.data)),
    );

    console.log(response);
    return response;
  }
}
