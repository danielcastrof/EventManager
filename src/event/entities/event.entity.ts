import { Items, People } from "@prisma/client";

export class Event {
  id?: string;
  name: string;
  description: string;
  dateStart?: Date;
  dateProgram?: Date;
  eventpeople?: People[];
  items?: Items[];
}
