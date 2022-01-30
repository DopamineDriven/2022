import { UserStatus } from "../../.generated/prisma-nestjs-graphql/prisma/enums/user-status.enum";
import { Role } from "../../.generated/prisma-nestjs-graphql/prisma/enums/role.enum";
import { Field, HideField, ID, ObjectType } from "@nestjs/graphql";
import { Connection } from "../../connection/model/connection.model";
import { Comment } from "../../comment/model/comment.model";
import { Account } from "../../account/model/account.model";
import { Entry } from "../../entry/model/entry.model";
import { Session } from "../../session/model/session.model";
import { UserCount } from "../../.generated/prisma-nestjs-graphql/user/outputs/user-count.output";
import { Profile } from "../../profile/model/profile.model";
import { Category } from "../../category/model/category.model";
import { EntryConnection } from "../../entry/model/entry-connection.model";
type Nullable<T> = T | null;

@ObjectType("User")
export class User {
  @Field(() => ID, {
    name: "id",
    nullable: false
  })
  id!: string;
  @Field(() => String, { nullable: true })
  firstName: string | null;

  @Field(() => String, { nullable: true })
  lastName: string | null;

  @Field(() => String, { nullable: false })
  email!: string;

  @Field(() => String, { nullable: true })
  image: string | null;

  @Field(() => Role, { nullable: true, defaultValue: Role.USER })
  role: Nullable<keyof typeof Role>;

  @Field(() => UserStatus, {
    defaultValue: UserStatus.OFFLINE
  })
  status!: keyof typeof UserStatus | null;

  @HideField()
  @Field(() => String, { nullable: false, defaultValue: "", name: "password" })
  password!: string;

  @Field(_type => Date, {
    name: "createdAt",
    defaultValue: new Date(Date.now()),
    description: "Identifies the date and time when the user was created."
  })
  createdAt: Date;
  @Field(_type => Date, {
    name: "updatedAt",
    nullable: true,
    description:
      "Identifies the date and time when the user was last updated."
  })
  updatedAt: Date | null;

  @Field(() => Date, { nullable: true })
  emailVerified: Date | null;

  @Field(() => Profile, { nullable: true })
  profile?: Profile | null;

  @Field(() => [Account], { nullable: true })
  accounts?: Array<Account>;

  @Field(() => [Entry], { nullable: true })
  entries?: Entry[];

  @Field(() => [Session], { nullable: true })
  sessions?: Array<Session>;

  @Field(() => [Connection], { nullable: true })
  connections?: Array<Connection>;

  @Field(() => [Comment], { nullable: true })
  comments?: Array<Comment>;

  @Field(() => [Category], {nullable:true})
  categories?: Array<Category>;
}