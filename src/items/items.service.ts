/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { UpdateItemDto } from './dto/update-item.dto';
import { CreateItemDto } from './dto/create-item.dto';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class ItemsService {
  constructor(private readonly prisma: PrismaService){}
  async create(itemDto: CreateItemDto){
    const data = {
      ...itemDto,
    }
    
    const created = await this.prisma.items.create({
       data: {...data, price: data.price,}
     })
    return created;
  }

  async findAll() {
    const finds = await this.prisma.items.findMany();

    return finds;
  }

  async findOne(id: string) {
    const find = await this.prisma.items.findUnique({where: {id: id}});
    
    return find;
  }

  async findByName(name: string) {
    const find = await this.prisma.items.findMany({where: {ItemName: name}});

    return find;
  }

  async findByCategory(category: string) {
    const find = await this.prisma.items.findMany({where: {category: category}});

    return find;
  }
  async findBySubcategory(subcategory: string) {
    const find = await this.prisma.items.findMany({where: {subcategory: subcategory}});

    return find;
  }

  async findByStatus(status: string) {
    const find = await this.prisma.items.findMany({where: {status: status}});

    return find;
  }

  async update(id: string, updateItemDto: UpdateItemDto) {
    const item = await this.findOne(id);

    const attItem = await this.prisma.items.update({
      where: {id: item.id},
      data: {...item, id: item.id},
    })

    return attItem;
  }

  async remove(id: string) {
    const items = await this.findOne(id);

    await this.prisma.items.delete({where: {id: items.id}});
    return `O item ${items.ItemName} foi deletado com sucesso!`;
  }
}
