import { Injectable } from '@nestjs/common';
import { ElasticsearchService } from '@nestjs/elasticsearch';

@Injectable()
export class SearchService {
  constructor(private readonly elasticsearchService: ElasticsearchService) {}

  async ensureIndexExists(index: string): Promise<void> {
    const indexExists = await this.elasticsearchService.indices.exists({
      index,
    });
    if (!indexExists) {
      // Optionally, create the index if it doesn't exist
      await this.elasticsearchService.indices.create({
        index,
        body: {
          // Define settings and mappings for your index
        },
      });
    }
  }

  async search(index: string, body: any) {
    await this.ensureIndexExists(index);
    return await this.elasticsearchService.search({ index, body });
  }

  async countEmployees() {
    const index = 'index';
    await this.ensureIndexExists(index);
    return await this.elasticsearchService.count({ index: 'employees' });
  }
}
