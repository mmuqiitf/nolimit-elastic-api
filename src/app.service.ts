import { Injectable } from '@nestjs/common';
import { Client } from '@elastic/elasticsearch';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello Worldie!';
  }

  async countEmployees() {
    const esclient = new Client({
      node: 'http://elasticsearch:9200',
    });
    return await esclient.search({
      index: 'employees',
      body: {
        query: {
          match_all: {},
        },
      },
    });
  }
}
