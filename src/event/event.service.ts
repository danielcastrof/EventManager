/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { CreateEventDto } from './dto/create-event.dto';
import { UpdateEventDto } from './dto/update-event.dto';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class EventService {
  constructor(private readonly prisma: PrismaService) {}
  async create(createEventDto: CreateEventDto) {
    const events = {
      ...createEventDto
    }

    const data = new Date();

    const br = new Date(data.setHours(data.getHours() - 3));

    const created = await this.prisma.event.create({
      data: {...data, name: events.name, description: events.description, dateStart: br, dateProgram: events.dateProgram}
    }) 
    return created;
  }

  async findAll() {
    const finds = await this.prisma.event.findMany();

    return finds;
  }

  async findOne(id: string) {
    const find = await this.prisma.event.findUnique({where: {id: id}});
    
    return find;
  }

  async findByName(name: string) {
    const find = await this.prisma.event.findMany({where: {name: name}});

    return find;
  }

  async update(id: string, updateEventDto: UpdateEventDto) {
    const events = await this.findOne(id);

    const attEvent = await this.prisma.event.update({
      where: {id: events.id},
      data: {...updateEventDto, id: events.id, dateStart: events.dateStart},
    })
    return attEvent;
  }

  async remove(id: string) {
    const events = await this.findOne(id);

    await this.prisma.event.delete({where: {id: events.id}});
    return `O evento ${events.name} foi deletado com sucesso!`;
  }
}
