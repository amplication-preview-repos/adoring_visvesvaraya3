/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as graphql from "@nestjs/graphql";
import { GraphQLError } from "graphql";
import { isRecordNotFoundError } from "../../prisma.util";
import { MetaQueryPayload } from "../../util/MetaQueryPayload";
import { Button } from "./Button";
import { ButtonCountArgs } from "./ButtonCountArgs";
import { ButtonFindManyArgs } from "./ButtonFindManyArgs";
import { ButtonFindUniqueArgs } from "./ButtonFindUniqueArgs";
import { CreateButtonArgs } from "./CreateButtonArgs";
import { UpdateButtonArgs } from "./UpdateButtonArgs";
import { DeleteButtonArgs } from "./DeleteButtonArgs";
import { ButtonService } from "../button.service";
@graphql.Resolver(() => Button)
export class ButtonResolverBase {
  constructor(protected readonly service: ButtonService) {}

  async _buttonsMeta(
    @graphql.Args() args: ButtonCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @graphql.Query(() => [Button])
  async buttons(@graphql.Args() args: ButtonFindManyArgs): Promise<Button[]> {
    return this.service.buttons(args);
  }

  @graphql.Query(() => Button, { nullable: true })
  async button(
    @graphql.Args() args: ButtonFindUniqueArgs
  ): Promise<Button | null> {
    const result = await this.service.button(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @graphql.Mutation(() => Button)
  async createButton(@graphql.Args() args: CreateButtonArgs): Promise<Button> {
    return await this.service.createButton({
      ...args,
      data: args.data,
    });
  }

  @graphql.Mutation(() => Button)
  async updateButton(
    @graphql.Args() args: UpdateButtonArgs
  ): Promise<Button | null> {
    try {
      return await this.service.updateButton({
        ...args,
        data: args.data,
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @graphql.Mutation(() => Button)
  async deleteButton(
    @graphql.Args() args: DeleteButtonArgs
  ): Promise<Button | null> {
    try {
      return await this.service.deleteButton(args);
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }
}