import {
  PageInfo as PageInfoRelay,
  ConnectionCursor,
  toGlobalId
} from "graphql-relay";
import {
  ObjectType,
  Field,
  registerEnumType,
  Int,
  ReturnTypeFuncValue,
  ArgsType,
  InputType,
  PickType,
  ID,
  EnumOptions
} from "@nestjs/graphql";

type Constructor = { new (...args: any[]): any };

@ObjectType()
export class PageInfo implements PageInfoRelay {
  @Field(_type => String, { nullable: true })
  startCursor: ConnectionCursor | null;

  @Field(_type => String, { nullable: true })
  endCursor: ConnectionCursor | null;

  @Field(_type => Boolean, { defaultValue: false })
  hasPreviousPage: boolean;

  @Field(_type => Boolean, { defaultValue: false })
  hasNextPage: boolean;

}

enum Direction {
  ASC = "ASC",
  DESC = "DESC"
}
registerEnumType<typeof Direction>(Direction, {
  name: "Direction"
} as EnumOptions<typeof Direction>);

export function ConnectionFilterArgsType<T extends Constructor, V extends ReturnTypeFuncValue>(filterType: V): (target: T) => Constructor {
  return (target: T): Constructor => {
    @ArgsType()
    class ConnectionFilterArgsType extends target {
      @Field(() => Int, { nullable: true })
      first: number;

      @Field(() => String, { nullable: true })
      after?: ConnectionCursor | null;

      @Field(() => Int, { nullable: true })
      last: number;

      @Field(() => String, { nullable: true })
      before?: ConnectionCursor | null;


      @Field(() => filterType)
      filter?: V;
    }
    return ConnectionFilterArgsType;
  };
}

export function ConnectionOrderingInputType<T extends Constructor, V extends ReturnTypeFuncValue>(orderType: V): (target: T) => Constructor {
  return (target: T): Constructor => {
    @InputType(target.name)
    class ConnectionOrderingInputType extends target {
      @Field(() => Direction, { defaultValue: Direction.ASC })
      direction: keyof typeof Direction;

      @Field(() => orderType)
      orderBy: V;
    }
    return ConnectionOrderingInputType;
  };
}

export function ConnectionEdgeObjectType<
  T extends Constructor,
  V extends ReturnTypeFuncValue
>(nodeType: V): (target: T) => Constructor {
  return (target: T): Constructor => {
    @ObjectType(target.name)
    class ConnectionEdgeObjectType extends target {
      @Field(() => nodeType)
      node: V;

      @Field()
      cursor: ConnectionCursor;
    }
    return ConnectionEdgeObjectType;
  };
}

export function ConnectionObjectType<
  T extends Constructor,
  V extends ReturnTypeFuncValue
>(edgeType: V): (target: T) => Constructor {
  return (target: T): Constructor => {
    @ObjectType(target.name)
    class ConnectionObjectType extends target {
      @Field(() => PageInfo)
      pageInfo: PageInfo;

      @Field(() => Int, { defaultValue: 0 })
      totalCount: number;

      @Field(() => [edgeType])
      edges: V[];
    }

    return ConnectionObjectType;
  };
}
