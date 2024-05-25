/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { PrismaService } from "../../prisma/prisma.service";
import { Prisma, Button as PrismaButton } from "@prisma/client";

export class ButtonServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count(args: Omit<Prisma.ButtonCountArgs, "select">): Promise<number> {
    return this.prisma.button.count(args);
  }

  async buttons<T extends Prisma.ButtonFindManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.ButtonFindManyArgs>
  ): Promise<PrismaButton[]> {
    return this.prisma.button.findMany<Prisma.ButtonFindManyArgs>(args);
  }
  async button<T extends Prisma.ButtonFindUniqueArgs>(
    args: Prisma.SelectSubset<T, Prisma.ButtonFindUniqueArgs>
  ): Promise<PrismaButton | null> {
    return this.prisma.button.findUnique(args);
  }
  async createButton<T extends Prisma.ButtonCreateArgs>(
    args: Prisma.SelectSubset<T, Prisma.ButtonCreateArgs>
  ): Promise<PrismaButton> {
    return this.prisma.button.create<T>(args);
  }
  async updateButton<T extends Prisma.ButtonUpdateArgs>(
    args: Prisma.SelectSubset<T, Prisma.ButtonUpdateArgs>
  ): Promise<PrismaButton> {
    return this.prisma.button.update<T>(args);
  }
  async deleteButton<T extends Prisma.ButtonDeleteArgs>(
    args: Prisma.SelectSubset<T, Prisma.ButtonDeleteArgs>
  ): Promise<PrismaButton> {
    return this.prisma.button.delete(args);
  }
}