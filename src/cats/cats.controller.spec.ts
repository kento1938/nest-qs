import { Controller, Get, Post, Body, Param } from '@nestjs/common';

@Controller('cats') // /cats のルートを定義
export class CatsController {
  @Get() // /cats へのGETリクエストを処理
  findAll(): string {
    return 'This action returns all cats';
  }

  @Post() // /cats へのPOSTリクエストを処理
  create(@Body() createCatDto: any): string {
    return `This action adds a new cat with name: ${createCatDto.name}`;
  }

  @Get(':id') // /cats/:id へのGETリクエストを処理
  findOne(@Param('id') id: string): string {
    return `This action returns a #${id} cat`;
  }
}
