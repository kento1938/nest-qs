import { Controller, Get, Post, Body, Param } from '@nestjs/common';

@Controller('cats')
export class CatsController {
  @Get() // GETリクエスト
  findAll(): string {
    return 'This action returns all cats';
  }

  @Get(':id') // GETリクエスト + 動的ルート
  findOne(@Param('id') id: string): string {
    return `This action returns a #${id} cat`;
  }

  @Post() // POSTリクエスト
  create(@Body() createCatDto: any): string {
    return `This action adds a new cat with name: ${createCatDto.name}`;
  }
}
