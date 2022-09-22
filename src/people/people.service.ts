/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { CreatePersonDto } from './dto/create-person.dto';
import { UpdatePersonDto } from './dto/update-person.dto';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class PeopleService {
  constructor(private readonly prisma: PrismaService){}
  async create(createPersonDto: CreatePersonDto) {
    const data = {
      ...createPersonDto,
    }
    
    const created = await this.prisma.people.create({
        data: {...data,}
    })
    return created;
  }

  async findAll() {
    const finds = await this.prisma.people.findMany();

    return finds;
  }

  async findOne(id: string) {
    const find = await this.prisma.people.findUnique({where: {id: id}});
    
    return find;
  }

  async update(id: string, updatePersonDto: UpdatePersonDto) {
    const people = await this.findOne(id);

    const attItem = await this.prisma.people.update({
      where: {id: people.id},
      data: {...people, id: people.id},
    })

    return attItem;
  }

  async remove(id: string) {
    const people = await this.findOne(id);

    await this.prisma.people.delete({where: {id: people.id}});
    return `${people.peopleName} foi deletado com sucesso!`;
  }
}
