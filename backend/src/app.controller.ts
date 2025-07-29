import { Body, Controller, Get, Post } from '@nestjs/common';
import { AppService } from './app.service';
import { IItem } from './model/item.model';

interface ItemDto {
  name: string;
  description: string;
}
@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  items: IItem[] = [
    {
      id: '1',
      name: 'Banana',
      description: '',
      createdAt: new Date(),
    },
    {
      id: '2',
      name: 'Apple',
      description: '',
      createdAt: new Date(),
    },
  ];

  @Get('/items')
  getItems(): IItem[] {
    return this.items;
  }

  @Post('/items')
  addItem(@Body() body: ItemDto): IItem {
    const newId = Math.max(...this.items.map((item) => Number(item.id)));
    const newItem: IItem = {
      id: newId.toString(),
      name: body.name,
      description: body.description,
      createdAt: new Date(),
    };
    return newItem;
  }
}
