import {
  GraphQLResolveInfo,
  GraphQLScalarType,
  GraphQLScalarTypeConfig
} from "graphql";
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = {
  [K in keyof T]: T[K];
};
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]?: Maybe<T[SubKey]>;
};
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]: Maybe<T[SubKey]>;
};
export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;
export type RequireFields<T, K extends keyof T> = Omit<T, K> & {
  [P in K]-?: NonNullable<T[P]>;
};
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** The `BigInt` scalar type represents non-fractional signed whole numeric values. */
  BigInt: any;
  /** A date-time string at UTC, such as 2019-12-03T09:54:33Z, compliant with the date-time format. */
  DateTime: any;
  /** A field whose value conforms to the standard E.164 format as specified in: https://en.wikipedia.org/wiki/E.164. Basically this is +17895551234. */
  PhoneNumber: any;
};

export type Account = Node & {
  __typename?: "Account";
  access_token?: Maybe<Scalars["String"]>;
  expires_at?: Maybe<Scalars["Int"]>;
  id: Scalars["ID"];
  id_token?: Maybe<Scalars["String"]>;
  oauth_token?: Maybe<Scalars["String"]>;
  oauth_token_secret?: Maybe<Scalars["String"]>;
  provider: Scalars["String"];
  providerAccountId: Scalars["String"];
  refresh_secret?: Maybe<Scalars["String"]>;
  refresh_token?: Maybe<Scalars["String"]>;
  scope?: Maybe<Scalars["String"]>;
  session_state?: Maybe<Scalars["String"]>;
  token_type?: Maybe<Scalars["String"]>;
  type: Scalars["String"];
  user: User;
  userId: Scalars["String"];
};

export type AccountCreateManyUserInput = {
  access_token?: InputMaybe<Scalars["String"]>;
  expires_at?: InputMaybe<Scalars["Int"]>;
  id?: InputMaybe<Scalars["String"]>;
  id_token?: InputMaybe<Scalars["String"]>;
  oauth_token?: InputMaybe<Scalars["String"]>;
  oauth_token_secret?: InputMaybe<Scalars["String"]>;
  provider: Scalars["String"];
  providerAccountId: Scalars["String"];
  refresh_secret?: InputMaybe<Scalars["String"]>;
  refresh_token?: InputMaybe<Scalars["String"]>;
  scope?: InputMaybe<Scalars["String"]>;
  session_state?: InputMaybe<Scalars["String"]>;
  token_type?: InputMaybe<Scalars["String"]>;
  type: Scalars["String"];
};

export type AccountCreateManyUserInputEnvelope = {
  data: Array<AccountCreateManyUserInput>;
  skipDuplicates?: InputMaybe<Scalars["Boolean"]>;
};

export type AccountCreateNestedManyWithoutUserInput = {
  connect?: InputMaybe<Array<AccountWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<
    Array<AccountCreateOrConnectWithoutUserInput>
  >;
  create?: InputMaybe<Array<AccountCreateWithoutUserInput>>;
  createMany?: InputMaybe<AccountCreateManyUserInputEnvelope>;
};

export type AccountCreateOrConnectWithoutUserInput = {
  create: AccountCreateWithoutUserInput;
  where: AccountWhereUniqueInput;
};

export type AccountCreateWithoutUserInput = {
  access_token?: InputMaybe<Scalars["String"]>;
  expires_at?: InputMaybe<Scalars["Int"]>;
  id?: InputMaybe<Scalars["String"]>;
  id_token?: InputMaybe<Scalars["String"]>;
  oauth_token?: InputMaybe<Scalars["String"]>;
  oauth_token_secret?: InputMaybe<Scalars["String"]>;
  provider: Scalars["String"];
  providerAccountId: Scalars["String"];
  refresh_secret?: InputMaybe<Scalars["String"]>;
  refresh_token?: InputMaybe<Scalars["String"]>;
  scope?: InputMaybe<Scalars["String"]>;
  session_state?: InputMaybe<Scalars["String"]>;
  token_type?: InputMaybe<Scalars["String"]>;
  type: Scalars["String"];
};

export type AccountListRelationFilter = {
  every?: InputMaybe<AccountWhereInput>;
  none?: InputMaybe<AccountWhereInput>;
  some?: InputMaybe<AccountWhereInput>;
};

export type AccountOrderByRelationAggregateInput = {
  _count?: InputMaybe<SortOrder>;
};

export type AccountProviderProviderAccountIdCompoundUniqueInput = {
  provider: Scalars["String"];
  providerAccountId: Scalars["String"];
};

export type AccountScalarWhereInput = {
  AND?: InputMaybe<Array<AccountScalarWhereInput>>;
  NOT?: InputMaybe<Array<AccountScalarWhereInput>>;
  OR?: InputMaybe<Array<AccountScalarWhereInput>>;
  access_token?: InputMaybe<StringNullableFilter>;
  expires_at?: InputMaybe<IntNullableFilter>;
  id?: InputMaybe<StringFilter>;
  id_token?: InputMaybe<StringNullableFilter>;
  oauth_token?: InputMaybe<StringNullableFilter>;
  oauth_token_secret?: InputMaybe<StringNullableFilter>;
  provider?: InputMaybe<StringFilter>;
  providerAccountId?: InputMaybe<StringFilter>;
  refresh_secret?: InputMaybe<StringNullableFilter>;
  refresh_token?: InputMaybe<StringNullableFilter>;
  scope?: InputMaybe<StringNullableFilter>;
  session_state?: InputMaybe<StringNullableFilter>;
  token_type?: InputMaybe<StringNullableFilter>;
  type?: InputMaybe<StringFilter>;
  userId?: InputMaybe<StringFilter>;
};

export type AccountUpdateManyMutationInput = {
  access_token?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  expires_at?: InputMaybe<NullableIntFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  id_token?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  oauth_token?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  oauth_token_secret?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  provider?: InputMaybe<StringFieldUpdateOperationsInput>;
  providerAccountId?: InputMaybe<StringFieldUpdateOperationsInput>;
  refresh_secret?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  refresh_token?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  scope?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  session_state?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  token_type?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  type?: InputMaybe<StringFieldUpdateOperationsInput>;
};

export type AccountUpdateManyWithWhereWithoutUserInput = {
  data: AccountUpdateManyMutationInput;
  where: AccountScalarWhereInput;
};

export type AccountUpdateManyWithoutUserInput = {
  connect?: InputMaybe<Array<AccountWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<
    Array<AccountCreateOrConnectWithoutUserInput>
  >;
  create?: InputMaybe<Array<AccountCreateWithoutUserInput>>;
  createMany?: InputMaybe<AccountCreateManyUserInputEnvelope>;
  delete?: InputMaybe<Array<AccountWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<AccountScalarWhereInput>>;
  disconnect?: InputMaybe<Array<AccountWhereUniqueInput>>;
  set?: InputMaybe<Array<AccountWhereUniqueInput>>;
  update?: InputMaybe<Array<AccountUpdateWithWhereUniqueWithoutUserInput>>;
  updateMany?: InputMaybe<
    Array<AccountUpdateManyWithWhereWithoutUserInput>
  >;
  upsert?: InputMaybe<Array<AccountUpsertWithWhereUniqueWithoutUserInput>>;
};

export type AccountUpdateWithWhereUniqueWithoutUserInput = {
  data: AccountUpdateWithoutUserInput;
  where: AccountWhereUniqueInput;
};

export type AccountUpdateWithoutUserInput = {
  access_token?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  expires_at?: InputMaybe<NullableIntFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  id_token?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  oauth_token?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  oauth_token_secret?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  provider?: InputMaybe<StringFieldUpdateOperationsInput>;
  providerAccountId?: InputMaybe<StringFieldUpdateOperationsInput>;
  refresh_secret?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  refresh_token?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  scope?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  session_state?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  token_type?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  type?: InputMaybe<StringFieldUpdateOperationsInput>;
};

export type AccountUpsertWithWhereUniqueWithoutUserInput = {
  create: AccountCreateWithoutUserInput;
  update: AccountUpdateWithoutUserInput;
  where: AccountWhereUniqueInput;
};

export type AccountWhereInput = {
  AND?: InputMaybe<Array<AccountWhereInput>>;
  NOT?: InputMaybe<Array<AccountWhereInput>>;
  OR?: InputMaybe<Array<AccountWhereInput>>;
  access_token?: InputMaybe<StringNullableFilter>;
  expires_at?: InputMaybe<IntNullableFilter>;
  id?: InputMaybe<StringFilter>;
  id_token?: InputMaybe<StringNullableFilter>;
  oauth_token?: InputMaybe<StringNullableFilter>;
  oauth_token_secret?: InputMaybe<StringNullableFilter>;
  provider?: InputMaybe<StringFilter>;
  providerAccountId?: InputMaybe<StringFilter>;
  refresh_secret?: InputMaybe<StringNullableFilter>;
  refresh_token?: InputMaybe<StringNullableFilter>;
  scope?: InputMaybe<StringNullableFilter>;
  session_state?: InputMaybe<StringNullableFilter>;
  token_type?: InputMaybe<StringNullableFilter>;
  type?: InputMaybe<StringFilter>;
  user?: InputMaybe<UserRelationFilter>;
  userId?: InputMaybe<StringFilter>;
};

export type AccountWhereUniqueInput = {
  id?: InputMaybe<Scalars["String"]>;
  provider_providerAccountId?: InputMaybe<AccountProviderProviderAccountIdCompoundUniqueInput>;
};

export enum AlgorithmType {
  Es256 = "ES256",
  Es256K = "ES256K",
  Es384 = "ES384",
  Es512 = "ES512",
  Ed448 = "Ed448",
  Ed25519 = "Ed25519",
  Hs256 = "HS256",
  Hs384 = "HS384",
  Hs512 = "HS512",
  None = "None",
  Ps256 = "PS256",
  Ps384 = "PS384",
  Ps512 = "PS512",
  Rs256 = "RS256",
  Rs384 = "RS384",
  Rs512 = "RS512"
}

export type Auth = {
  __typename?: "Auth";
  /** JWT access token */
  accessToken?: Maybe<Scalars["String"]>;
  /** JWT refresh token */
  refreshToken?: Maybe<Scalars["String"]>;
  session?: Maybe<Session>;
  user: User;
};

export type AuthDetailed = {
  __typename?: "AuthDetailed";
  auth?: Maybe<Auth>;
  jwt?: Maybe<JwtDecoded>;
};

export type AuthSansSession = {
  __typename?: "AuthSansSession";
  /** JWT access token */
  accessToken?: Maybe<Scalars["String"]>;
  /** JWT refresh token */
  refreshToken?: Maybe<Scalars["String"]>;
  user?: Maybe<User>;
};

export type BaseTypeNodes = {
  __typename?: "BaseTypeNodes";
  nodes: Array<TypesUnion>;
  pageInfo?: Maybe<PageInfo>;
  totalCount: Scalars["Int"];
};

export type BaseTypesEdge = {
  __typename?: "BaseTypesEdge";
  cursor: Scalars["String"];
  node: TypesUnion;
};

export type BoolFieldUpdateOperationsInput = {
  set?: InputMaybe<Scalars["Boolean"]>;
};

export type BoolFilter = {
  equals?: InputMaybe<Scalars["Boolean"]>;
  not?: InputMaybe<NestedBoolFilter>;
};

export type Category = Node & {
  __typename?: "Category";
  _count: CategoryCount;
  createdAt?: Maybe<Scalars["DateTime"]>;
  creator: User;
  creatorId: Scalars["String"];
  entries?: Maybe<Array<Entry>>;
  entryId?: Maybe<Scalars["String"]>;
  id: Scalars["ID"];
  name: Scalars["String"];
  updatedAt?: Maybe<Scalars["DateTime"]>;
};

export type CategoryConnection = {
  __typename?: "CategoryConnection";
  edges: Array<CategoryEdge>;
  pageInfo: PageInfo;
  totalCount: Scalars["Int"];
};

export type CategoryCount = {
  __typename?: "CategoryCount";
  entries: Scalars["Int"];
};

export type CategoryCreateManyCreatorInput = {
  createdAt?: InputMaybe<Scalars["DateTime"]>;
  entryId?: InputMaybe<Scalars["String"]>;
  id?: InputMaybe<Scalars["String"]>;
  name: Scalars["String"];
  updatedAt?: InputMaybe<Scalars["DateTime"]>;
};

export type CategoryCreateManyCreatorInputEnvelope = {
  data: Array<CategoryCreateManyCreatorInput>;
  skipDuplicates?: InputMaybe<Scalars["Boolean"]>;
};

export type CategoryCreateNestedManyWithoutCreatorInput = {
  connect?: InputMaybe<Array<CategoryWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<
    Array<CategoryCreateOrConnectWithoutCreatorInput>
  >;
  create?: InputMaybe<Array<CategoryCreateWithoutCreatorInput>>;
  createMany?: InputMaybe<CategoryCreateManyCreatorInputEnvelope>;
};

export type CategoryCreateNestedManyWithoutEntriesInput = {
  connect?: InputMaybe<Array<CategoryWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<
    Array<CategoryCreateOrConnectWithoutEntriesInput>
  >;
  create?: InputMaybe<Array<CategoryCreateWithoutEntriesInput>>;
};

export type CategoryCreateOrConnectWithoutCreatorInput = {
  create: CategoryCreateWithoutCreatorInput;
  where: CategoryWhereUniqueInput;
};

export type CategoryCreateOrConnectWithoutEntriesInput = {
  create: CategoryCreateWithoutEntriesInput;
  where: CategoryWhereUniqueInput;
};

export type CategoryCreateWithoutCreatorInput = {
  createdAt?: InputMaybe<Scalars["DateTime"]>;
  entries?: InputMaybe<EntryCreateNestedManyWithoutCategoriesInput>;
  entryId?: InputMaybe<Scalars["String"]>;
  id?: InputMaybe<Scalars["String"]>;
  name: Scalars["String"];
  updatedAt?: InputMaybe<Scalars["DateTime"]>;
};

export type CategoryCreateWithoutEntriesInput = {
  createdAt?: InputMaybe<Scalars["DateTime"]>;
  creator: UserCreateNestedOneWithoutCategoriesInput;
  entryId?: InputMaybe<Scalars["String"]>;
  id?: InputMaybe<Scalars["String"]>;
  name: Scalars["String"];
  updatedAt?: InputMaybe<Scalars["DateTime"]>;
};

export type CategoryEdge = {
  __typename?: "CategoryEdge";
  cursor: Scalars["String"];
  node: Category;
};

export type CategoryListRelationFilter = {
  every?: InputMaybe<CategoryWhereInput>;
  none?: InputMaybe<CategoryWhereInput>;
  some?: InputMaybe<CategoryWhereInput>;
};

export type CategoryOrderByRelationAggregateInput = {
  _count?: InputMaybe<SortOrder>;
};

export enum CategoryOrderByRelevanceFieldEnum {
  CreatorId = "creatorId",
  EntryId = "entryId",
  Id = "id",
  Name = "name"
}

export type CategoryOrderByRelevanceInput = {
  fields: Array<CategoryOrderByRelevanceFieldEnum>;
  search: Scalars["String"];
  sort: SortOrder;
};

export type CategoryOrderByWithRelationAndSearchRelevanceInput = {
  _relevance?: InputMaybe<CategoryOrderByRelevanceInput>;
  createdAt?: InputMaybe<SortOrder>;
  creator?: InputMaybe<UserOrderByWithRelationAndSearchRelevanceInput>;
  creatorId?: InputMaybe<SortOrder>;
  entries?: InputMaybe<EntryOrderByRelationAggregateInput>;
  entryId?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
};

export enum CategoryScalarFieldEnum {
  CreatedAt = "createdAt",
  CreatorId = "creatorId",
  EntryId = "entryId",
  Id = "id",
  Name = "name",
  UpdatedAt = "updatedAt"
}

export type CategoryScalarWhereInput = {
  AND?: InputMaybe<Array<CategoryScalarWhereInput>>;
  NOT?: InputMaybe<Array<CategoryScalarWhereInput>>;
  OR?: InputMaybe<Array<CategoryScalarWhereInput>>;
  createdAt?: InputMaybe<DateTimeNullableFilter>;
  creatorId?: InputMaybe<StringFilter>;
  entryId?: InputMaybe<StringNullableFilter>;
  id?: InputMaybe<StringFilter>;
  name?: InputMaybe<StringFilter>;
  updatedAt?: InputMaybe<DateTimeNullableFilter>;
};

export type CategoryUpdateManyMutationInput = {
  createdAt?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  entryId?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
};

export type CategoryUpdateManyWithWhereWithoutCreatorInput = {
  data: CategoryUpdateManyMutationInput;
  where: CategoryScalarWhereInput;
};

export type CategoryUpdateManyWithWhereWithoutEntriesInput = {
  data: CategoryUpdateManyMutationInput;
  where: CategoryScalarWhereInput;
};

export type CategoryUpdateManyWithoutCreatorInput = {
  connect?: InputMaybe<Array<CategoryWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<
    Array<CategoryCreateOrConnectWithoutCreatorInput>
  >;
  create?: InputMaybe<Array<CategoryCreateWithoutCreatorInput>>;
  createMany?: InputMaybe<CategoryCreateManyCreatorInputEnvelope>;
  delete?: InputMaybe<Array<CategoryWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<CategoryScalarWhereInput>>;
  disconnect?: InputMaybe<Array<CategoryWhereUniqueInput>>;
  set?: InputMaybe<Array<CategoryWhereUniqueInput>>;
  update?: InputMaybe<
    Array<CategoryUpdateWithWhereUniqueWithoutCreatorInput>
  >;
  updateMany?: InputMaybe<
    Array<CategoryUpdateManyWithWhereWithoutCreatorInput>
  >;
  upsert?: InputMaybe<
    Array<CategoryUpsertWithWhereUniqueWithoutCreatorInput>
  >;
};

export type CategoryUpdateManyWithoutEntriesInput = {
  connect?: InputMaybe<Array<CategoryWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<
    Array<CategoryCreateOrConnectWithoutEntriesInput>
  >;
  create?: InputMaybe<Array<CategoryCreateWithoutEntriesInput>>;
  delete?: InputMaybe<Array<CategoryWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<CategoryScalarWhereInput>>;
  disconnect?: InputMaybe<Array<CategoryWhereUniqueInput>>;
  set?: InputMaybe<Array<CategoryWhereUniqueInput>>;
  update?: InputMaybe<
    Array<CategoryUpdateWithWhereUniqueWithoutEntriesInput>
  >;
  updateMany?: InputMaybe<
    Array<CategoryUpdateManyWithWhereWithoutEntriesInput>
  >;
  upsert?: InputMaybe<
    Array<CategoryUpsertWithWhereUniqueWithoutEntriesInput>
  >;
};

export type CategoryUpdateWithWhereUniqueWithoutCreatorInput = {
  data: CategoryUpdateWithoutCreatorInput;
  where: CategoryWhereUniqueInput;
};

export type CategoryUpdateWithWhereUniqueWithoutEntriesInput = {
  data: CategoryUpdateWithoutEntriesInput;
  where: CategoryWhereUniqueInput;
};

export type CategoryUpdateWithoutCreatorInput = {
  createdAt?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  entries?: InputMaybe<EntryUpdateManyWithoutCategoriesInput>;
  entryId?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
};

export type CategoryUpdateWithoutEntriesInput = {
  createdAt?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  creator?: InputMaybe<UserUpdateOneRequiredWithoutCategoriesInput>;
  entryId?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
};

export type CategoryUpsertWithWhereUniqueWithoutCreatorInput = {
  create: CategoryCreateWithoutCreatorInput;
  update: CategoryUpdateWithoutCreatorInput;
  where: CategoryWhereUniqueInput;
};

export type CategoryUpsertWithWhereUniqueWithoutEntriesInput = {
  create: CategoryCreateWithoutEntriesInput;
  update: CategoryUpdateWithoutEntriesInput;
  where: CategoryWhereUniqueInput;
};

export type CategoryWhereInput = {
  AND?: InputMaybe<Array<CategoryWhereInput>>;
  NOT?: InputMaybe<Array<CategoryWhereInput>>;
  OR?: InputMaybe<Array<CategoryWhereInput>>;
  createdAt?: InputMaybe<DateTimeNullableFilter>;
  creator?: InputMaybe<UserRelationFilter>;
  creatorId?: InputMaybe<StringFilter>;
  entries?: InputMaybe<EntryListRelationFilter>;
  entryId?: InputMaybe<StringNullableFilter>;
  id?: InputMaybe<StringFilter>;
  name?: InputMaybe<StringFilter>;
  updatedAt?: InputMaybe<DateTimeNullableFilter>;
};

export type CategoryWhereUniqueInput = {
  id?: InputMaybe<Scalars["String"]>;
  name?: InputMaybe<Scalars["String"]>;
};

export type ChangePasswordInput = {
  newPassword: Scalars["String"];
  oldPassword: Scalars["String"];
};

export type Comment = Node & {
  __typename?: "Comment";
  author: User;
  authorId: Scalars["String"];
  body?: Maybe<Scalars["String"]>;
  createdAt: Scalars["DateTime"];
  entry: Entry;
  entryId: Scalars["String"];
  id: Scalars["ID"];
  position?: Maybe<Scalars["String"]>;
  reactions?: Maybe<Array<CommentReactions>>;
  updatedAt?: Maybe<Scalars["DateTime"]>;
};

export type CommentAuthorIdEntryIdCompoundUniqueInput = {
  authorId: Scalars["String"];
  entryId: Scalars["String"];
};

export type CommentConnection = {
  __typename?: "CommentConnection";
  edges: Array<CommentEdge>;
  pageInfo: PageInfo;
  totalCount: Scalars["Int"];
};

export type CommentCreateManyAuthorInput = {
  body?: InputMaybe<Scalars["String"]>;
  createdAt?: InputMaybe<Scalars["DateTime"]>;
  entryId: Scalars["String"];
  id?: InputMaybe<Scalars["String"]>;
  position?: InputMaybe<Scalars["String"]>;
  reactions?: InputMaybe<CommentCreateManyreactionsInput>;
  updatedAt?: InputMaybe<Scalars["DateTime"]>;
};

export type CommentCreateManyAuthorInputEnvelope = {
  data: Array<CommentCreateManyAuthorInput>;
  skipDuplicates?: InputMaybe<Scalars["Boolean"]>;
};

export type CommentCreateManyEntryInput = {
  authorId: Scalars["String"];
  body?: InputMaybe<Scalars["String"]>;
  createdAt?: InputMaybe<Scalars["DateTime"]>;
  id?: InputMaybe<Scalars["String"]>;
  position?: InputMaybe<Scalars["String"]>;
  reactions?: InputMaybe<CommentCreateManyreactionsInput>;
  updatedAt?: InputMaybe<Scalars["DateTime"]>;
};

export type CommentCreateManyEntryInputEnvelope = {
  data: Array<CommentCreateManyEntryInput>;
  skipDuplicates?: InputMaybe<Scalars["Boolean"]>;
};

export type CommentCreateManyreactionsInput = {
  set: Array<CommentReactions>;
};

export type CommentCreateNestedManyWithoutAuthorInput = {
  connect?: InputMaybe<Array<CommentWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<
    Array<CommentCreateOrConnectWithoutAuthorInput>
  >;
  create?: InputMaybe<Array<CommentCreateWithoutAuthorInput>>;
  createMany?: InputMaybe<CommentCreateManyAuthorInputEnvelope>;
};

export type CommentCreateNestedManyWithoutEntryInput = {
  connect?: InputMaybe<Array<CommentWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<
    Array<CommentCreateOrConnectWithoutEntryInput>
  >;
  create?: InputMaybe<Array<CommentCreateWithoutEntryInput>>;
  createMany?: InputMaybe<CommentCreateManyEntryInputEnvelope>;
};

export type CommentCreateOrConnectWithoutAuthorInput = {
  create: CommentCreateWithoutAuthorInput;
  where: CommentWhereUniqueInput;
};

export type CommentCreateOrConnectWithoutEntryInput = {
  create: CommentCreateWithoutEntryInput;
  where: CommentWhereUniqueInput;
};

export type CommentCreateWithoutAuthorInput = {
  body?: InputMaybe<Scalars["String"]>;
  createdAt?: InputMaybe<Scalars["DateTime"]>;
  entry: EntryCreateNestedOneWithoutCommentsInput;
  id?: InputMaybe<Scalars["String"]>;
  position?: InputMaybe<Scalars["String"]>;
  reactions?: InputMaybe<CommentCreatereactionsInput>;
  updatedAt?: InputMaybe<Scalars["DateTime"]>;
};

export type CommentCreateWithoutEntryInput = {
  author: UserCreateNestedOneWithoutCommentsInput;
  body?: InputMaybe<Scalars["String"]>;
  createdAt?: InputMaybe<Scalars["DateTime"]>;
  id?: InputMaybe<Scalars["String"]>;
  position?: InputMaybe<Scalars["String"]>;
  reactions?: InputMaybe<CommentCreatereactionsInput>;
  updatedAt?: InputMaybe<Scalars["DateTime"]>;
};

export type CommentCreatereactionsInput = {
  set: Array<CommentReactions>;
};

export type CommentEdge = {
  __typename?: "CommentEdge";
  cursor: Scalars["String"];
  node: Comment;
};

export type CommentListRelationFilter = {
  every?: InputMaybe<CommentWhereInput>;
  none?: InputMaybe<CommentWhereInput>;
  some?: InputMaybe<CommentWhereInput>;
};

export type CommentOrderByRelationAggregateInput = {
  _count?: InputMaybe<SortOrder>;
};

export enum CommentOrderByRelevanceFieldEnum {
  AuthorId = "authorId",
  Body = "body",
  EntryId = "entryId",
  Id = "id",
  Position = "position"
}

export type CommentOrderByRelevanceInput = {
  fields: Array<CommentOrderByRelevanceFieldEnum>;
  search: Scalars["String"];
  sort: SortOrder;
};

export type CommentOrderByWithRelationAndSearchRelevanceInput = {
  _relevance?: InputMaybe<CommentOrderByRelevanceInput>;
  author?: InputMaybe<UserOrderByWithRelationAndSearchRelevanceInput>;
  authorId?: InputMaybe<SortOrder>;
  body?: InputMaybe<SortOrder>;
  createdAt?: InputMaybe<SortOrder>;
  entry?: InputMaybe<EntryOrderByWithRelationAndSearchRelevanceInput>;
  entryId?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  position?: InputMaybe<SortOrder>;
  reactions?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
};

export enum CommentReactions {
  Angry = "ANGRY",
  Care = "CARE",
  Confused = "CONFUSED",
  Dislike = "DISLIKE",
  Laugh = "LAUGH",
  Like = "LIKE",
  Love = "LOVE",
  Parrot = "PARROT",
  Rocket = "ROCKET",
  Tears = "TEARS",
  Wow = "WOW"
}

export enum CommentScalarFieldEnum {
  AuthorId = "authorId",
  Body = "body",
  CreatedAt = "createdAt",
  EntryId = "entryId",
  Id = "id",
  Position = "position",
  Reactions = "reactions",
  UpdatedAt = "updatedAt"
}

export type CommentScalarWhereInput = {
  AND?: InputMaybe<Array<CommentScalarWhereInput>>;
  NOT?: InputMaybe<Array<CommentScalarWhereInput>>;
  OR?: InputMaybe<Array<CommentScalarWhereInput>>;
  authorId?: InputMaybe<StringFilter>;
  body?: InputMaybe<StringNullableFilter>;
  createdAt?: InputMaybe<DateTimeFilter>;
  entryId?: InputMaybe<StringFilter>;
  id?: InputMaybe<StringFilter>;
  position?: InputMaybe<StringNullableFilter>;
  reactions?: InputMaybe<EnumCommentReactionsNullableListFilter>;
  updatedAt?: InputMaybe<DateTimeNullableFilter>;
};

export type CommentUpdateManyMutationInput = {
  body?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  position?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  reactions?: InputMaybe<CommentUpdatereactionsInput>;
  updatedAt?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
};

export type CommentUpdateManyWithWhereWithoutAuthorInput = {
  data: CommentUpdateManyMutationInput;
  where: CommentScalarWhereInput;
};

export type CommentUpdateManyWithWhereWithoutEntryInput = {
  data: CommentUpdateManyMutationInput;
  where: CommentScalarWhereInput;
};

export type CommentUpdateManyWithoutAuthorInput = {
  connect?: InputMaybe<Array<CommentWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<
    Array<CommentCreateOrConnectWithoutAuthorInput>
  >;
  create?: InputMaybe<Array<CommentCreateWithoutAuthorInput>>;
  createMany?: InputMaybe<CommentCreateManyAuthorInputEnvelope>;
  delete?: InputMaybe<Array<CommentWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<CommentScalarWhereInput>>;
  disconnect?: InputMaybe<Array<CommentWhereUniqueInput>>;
  set?: InputMaybe<Array<CommentWhereUniqueInput>>;
  update?: InputMaybe<
    Array<CommentUpdateWithWhereUniqueWithoutAuthorInput>
  >;
  updateMany?: InputMaybe<
    Array<CommentUpdateManyWithWhereWithoutAuthorInput>
  >;
  upsert?: InputMaybe<
    Array<CommentUpsertWithWhereUniqueWithoutAuthorInput>
  >;
};

export type CommentUpdateManyWithoutEntryInput = {
  connect?: InputMaybe<Array<CommentWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<
    Array<CommentCreateOrConnectWithoutEntryInput>
  >;
  create?: InputMaybe<Array<CommentCreateWithoutEntryInput>>;
  createMany?: InputMaybe<CommentCreateManyEntryInputEnvelope>;
  delete?: InputMaybe<Array<CommentWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<CommentScalarWhereInput>>;
  disconnect?: InputMaybe<Array<CommentWhereUniqueInput>>;
  set?: InputMaybe<Array<CommentWhereUniqueInput>>;
  update?: InputMaybe<
    Array<CommentUpdateWithWhereUniqueWithoutEntryInput>
  >;
  updateMany?: InputMaybe<
    Array<CommentUpdateManyWithWhereWithoutEntryInput>
  >;
  upsert?: InputMaybe<
    Array<CommentUpsertWithWhereUniqueWithoutEntryInput>
  >;
};

export type CommentUpdateWithWhereUniqueWithoutAuthorInput = {
  data: CommentUpdateWithoutAuthorInput;
  where: CommentWhereUniqueInput;
};

export type CommentUpdateWithWhereUniqueWithoutEntryInput = {
  data: CommentUpdateWithoutEntryInput;
  where: CommentWhereUniqueInput;
};

export type CommentUpdateWithoutAuthorInput = {
  body?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  entry?: InputMaybe<EntryUpdateOneRequiredWithoutCommentsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  position?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  reactions?: InputMaybe<CommentUpdatereactionsInput>;
  updatedAt?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
};

export type CommentUpdateWithoutEntryInput = {
  author?: InputMaybe<UserUpdateOneRequiredWithoutCommentsInput>;
  body?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  position?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  reactions?: InputMaybe<CommentUpdatereactionsInput>;
  updatedAt?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
};

export type CommentUpdatereactionsInput = {
  push?: InputMaybe<Array<CommentReactions>>;
  set?: InputMaybe<Array<CommentReactions>>;
};

export type CommentUpsertWithWhereUniqueWithoutAuthorInput = {
  create: CommentCreateWithoutAuthorInput;
  update: CommentUpdateWithoutAuthorInput;
  where: CommentWhereUniqueInput;
};

export type CommentUpsertWithWhereUniqueWithoutEntryInput = {
  create: CommentCreateWithoutEntryInput;
  update: CommentUpdateWithoutEntryInput;
  where: CommentWhereUniqueInput;
};

export type CommentWhereInput = {
  AND?: InputMaybe<Array<CommentWhereInput>>;
  NOT?: InputMaybe<Array<CommentWhereInput>>;
  OR?: InputMaybe<Array<CommentWhereInput>>;
  author?: InputMaybe<UserRelationFilter>;
  authorId?: InputMaybe<StringFilter>;
  body?: InputMaybe<StringNullableFilter>;
  createdAt?: InputMaybe<DateTimeFilter>;
  entry?: InputMaybe<EntryRelationFilter>;
  entryId?: InputMaybe<StringFilter>;
  id?: InputMaybe<StringFilter>;
  position?: InputMaybe<StringNullableFilter>;
  reactions?: InputMaybe<EnumCommentReactionsNullableListFilter>;
  updatedAt?: InputMaybe<DateTimeNullableFilter>;
};

export type CommentWhereUniqueInput = {
  authorId_entryId?: InputMaybe<CommentAuthorIdEntryIdCompoundUniqueInput>;
  id?: InputMaybe<Scalars["String"]>;
};

export type Connection = Node & {
  __typename?: "Connection";
  email: Scalars["String"];
  firstName?: Maybe<Scalars["String"]>;
  id: Scalars["ID"];
  ip?: Maybe<Scalars["String"]>;
  lastModified?: Maybe<Scalars["DateTime"]>;
  lastName?: Maybe<Scalars["String"]>;
  owner: User;
  ownerId: Scalars["String"];
  phoneNumber?: Maybe<Scalars["PhoneNumber"]>;
};

export type ConnectionConnection = {
  __typename?: "ConnectionConnection";
  edges: Array<ConnectionEdge>;
  pageInfo: PageInfo;
  totalCount: Scalars["Int"];
};

export type ConnectionCreateManyOwnerInput = {
  email: Scalars["String"];
  firstName?: InputMaybe<Scalars["String"]>;
  id?: InputMaybe<Scalars["String"]>;
  ip?: InputMaybe<Scalars["String"]>;
  lastModified?: InputMaybe<Scalars["DateTime"]>;
  lastName?: InputMaybe<Scalars["String"]>;
  phoneNumber?: InputMaybe<Scalars["String"]>;
};

export type ConnectionCreateManyOwnerInputEnvelope = {
  data: Array<ConnectionCreateManyOwnerInput>;
  skipDuplicates?: InputMaybe<Scalars["Boolean"]>;
};

export type ConnectionCreateNestedManyWithoutOwnerInput = {
  connect?: InputMaybe<Array<ConnectionWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<
    Array<ConnectionCreateOrConnectWithoutOwnerInput>
  >;
  create?: InputMaybe<Array<ConnectionCreateWithoutOwnerInput>>;
  createMany?: InputMaybe<ConnectionCreateManyOwnerInputEnvelope>;
};

export type ConnectionCreateOrConnectWithoutOwnerInput = {
  create: ConnectionCreateWithoutOwnerInput;
  where: ConnectionWhereUniqueInput;
};

export type ConnectionCreateWithoutOwnerInput = {
  email: Scalars["String"];
  firstName?: InputMaybe<Scalars["String"]>;
  id?: InputMaybe<Scalars["String"]>;
  ip?: InputMaybe<Scalars["String"]>;
  lastModified?: InputMaybe<Scalars["DateTime"]>;
  lastName?: InputMaybe<Scalars["String"]>;
  phoneNumber?: InputMaybe<Scalars["String"]>;
};

export type ConnectionEdge = {
  __typename?: "ConnectionEdge";
  cursor: Scalars["String"];
  node: Connection;
};

export type ConnectionListRelationFilter = {
  every?: InputMaybe<ConnectionWhereInput>;
  none?: InputMaybe<ConnectionWhereInput>;
  some?: InputMaybe<ConnectionWhereInput>;
};

export type ConnectionOrderByRelationAggregateInput = {
  _count?: InputMaybe<SortOrder>;
};

export enum ConnectionOrderByRelevanceFieldEnum {
  Email = "email",
  FirstName = "firstName",
  Id = "id",
  Ip = "ip",
  LastName = "lastName",
  OwnerId = "ownerId",
  PhoneNumber = "phoneNumber"
}

export type ConnectionOrderByRelevanceInput = {
  fields: Array<ConnectionOrderByRelevanceFieldEnum>;
  search: Scalars["String"];
  sort: SortOrder;
};

export type ConnectionOrderByWithRelationAndSearchRelevanceInput = {
  _relevance?: InputMaybe<ConnectionOrderByRelevanceInput>;
  email?: InputMaybe<SortOrder>;
  firstName?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  ip?: InputMaybe<SortOrder>;
  lastModified?: InputMaybe<SortOrder>;
  lastName?: InputMaybe<SortOrder>;
  owner?: InputMaybe<UserOrderByWithRelationAndSearchRelevanceInput>;
  ownerId?: InputMaybe<SortOrder>;
  phoneNumber?: InputMaybe<SortOrder>;
};

export enum ConnectionScalarFieldEnum {
  Email = "email",
  FirstName = "firstName",
  Id = "id",
  Ip = "ip",
  LastModified = "lastModified",
  LastName = "lastName",
  OwnerId = "ownerId",
  PhoneNumber = "phoneNumber"
}

export type ConnectionScalarWhereInput = {
  AND?: InputMaybe<Array<ConnectionScalarWhereInput>>;
  NOT?: InputMaybe<Array<ConnectionScalarWhereInput>>;
  OR?: InputMaybe<Array<ConnectionScalarWhereInput>>;
  email?: InputMaybe<StringFilter>;
  firstName?: InputMaybe<StringNullableFilter>;
  id?: InputMaybe<StringFilter>;
  ip?: InputMaybe<StringNullableFilter>;
  lastModified?: InputMaybe<DateTimeNullableFilter>;
  lastName?: InputMaybe<StringNullableFilter>;
  ownerId?: InputMaybe<StringFilter>;
  phoneNumber?: InputMaybe<StringNullableFilter>;
};

export type ConnectionUpdateManyMutationInput = {
  email?: InputMaybe<StringFieldUpdateOperationsInput>;
  firstName?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  ip?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  lastModified?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  lastName?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  phoneNumber?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
};

export type ConnectionUpdateManyWithWhereWithoutOwnerInput = {
  data: ConnectionUpdateManyMutationInput;
  where: ConnectionScalarWhereInput;
};

export type ConnectionUpdateManyWithoutOwnerInput = {
  connect?: InputMaybe<Array<ConnectionWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<
    Array<ConnectionCreateOrConnectWithoutOwnerInput>
  >;
  create?: InputMaybe<Array<ConnectionCreateWithoutOwnerInput>>;
  createMany?: InputMaybe<ConnectionCreateManyOwnerInputEnvelope>;
  delete?: InputMaybe<Array<ConnectionWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<ConnectionScalarWhereInput>>;
  disconnect?: InputMaybe<Array<ConnectionWhereUniqueInput>>;
  set?: InputMaybe<Array<ConnectionWhereUniqueInput>>;
  update?: InputMaybe<
    Array<ConnectionUpdateWithWhereUniqueWithoutOwnerInput>
  >;
  updateMany?: InputMaybe<
    Array<ConnectionUpdateManyWithWhereWithoutOwnerInput>
  >;
  upsert?: InputMaybe<
    Array<ConnectionUpsertWithWhereUniqueWithoutOwnerInput>
  >;
};

export type ConnectionUpdateWithWhereUniqueWithoutOwnerInput = {
  data: ConnectionUpdateWithoutOwnerInput;
  where: ConnectionWhereUniqueInput;
};

export type ConnectionUpdateWithoutOwnerInput = {
  email?: InputMaybe<StringFieldUpdateOperationsInput>;
  firstName?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  ip?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  lastModified?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  lastName?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  phoneNumber?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
};

export type ConnectionUpsertWithWhereUniqueWithoutOwnerInput = {
  create: ConnectionCreateWithoutOwnerInput;
  update: ConnectionUpdateWithoutOwnerInput;
  where: ConnectionWhereUniqueInput;
};

export type ConnectionWhereInput = {
  AND?: InputMaybe<Array<ConnectionWhereInput>>;
  NOT?: InputMaybe<Array<ConnectionWhereInput>>;
  OR?: InputMaybe<Array<ConnectionWhereInput>>;
  email?: InputMaybe<StringFilter>;
  firstName?: InputMaybe<StringNullableFilter>;
  id?: InputMaybe<StringFilter>;
  ip?: InputMaybe<StringNullableFilter>;
  lastModified?: InputMaybe<DateTimeNullableFilter>;
  lastName?: InputMaybe<StringNullableFilter>;
  owner?: InputMaybe<UserRelationFilter>;
  ownerId?: InputMaybe<StringFilter>;
  phoneNumber?: InputMaybe<StringNullableFilter>;
};

export type ConnectionWhereUniqueInput = {
  id?: InputMaybe<Scalars["String"]>;
};

export type ContentNodes = {
  __typename?: "ContentNodes";
  contentNodes: BaseTypeNodes;
};

export type DateTimeFieldUpdateOperationsInput = {
  set?: InputMaybe<Scalars["DateTime"]>;
};

export type DateTimeFilter = {
  equals?: InputMaybe<Scalars["DateTime"]>;
  gt?: InputMaybe<Scalars["DateTime"]>;
  gte?: InputMaybe<Scalars["DateTime"]>;
  in?: InputMaybe<Array<Scalars["DateTime"]>>;
  lt?: InputMaybe<Scalars["DateTime"]>;
  lte?: InputMaybe<Scalars["DateTime"]>;
  not?: InputMaybe<NestedDateTimeFilter>;
  notIn?: InputMaybe<Array<Scalars["DateTime"]>>;
};

export type DateTimeNullableFilter = {
  equals?: InputMaybe<Scalars["DateTime"]>;
  gt?: InputMaybe<Scalars["DateTime"]>;
  gte?: InputMaybe<Scalars["DateTime"]>;
  in?: InputMaybe<Array<Scalars["DateTime"]>>;
  lt?: InputMaybe<Scalars["DateTime"]>;
  lte?: InputMaybe<Scalars["DateTime"]>;
  not?: InputMaybe<NestedDateTimeNullableFilter>;
  notIn?: InputMaybe<Array<Scalars["DateTime"]>>;
};

export type Entry = Node & {
  __typename?: "Entry";
  _count: EntryCount;
  author: User;
  authorId: Scalars["String"];
  categories?: Maybe<Array<Category>>;
  categoryId?: Maybe<Scalars["String"]>;
  comments?: Maybe<Array<Comment>>;
  content?: Maybe<Scalars["String"]>;
  createdAt: Scalars["DateTime"];
  featuredImage?: Maybe<Scalars["String"]>;
  id: Scalars["ID"];
  published?: Maybe<Scalars["Boolean"]>;
  title?: Maybe<Scalars["String"]>;
  updatedAt?: Maybe<Scalars["DateTime"]>;
};

export type EntryConnection = {
  __typename?: "EntryConnection";
  edges: Array<EntryEdge>;
  pageInfo: PageInfo;
  totalCount: Scalars["Int"];
};

export type EntryCount = {
  __typename?: "EntryCount";
  categories: Scalars["Int"];
  comments: Scalars["Int"];
};

export type EntryCreateManyAuthorInput = {
  categoryId?: InputMaybe<Scalars["String"]>;
  content?: InputMaybe<Scalars["String"]>;
  createdAt?: InputMaybe<Scalars["DateTime"]>;
  featuredImage?: InputMaybe<Scalars["String"]>;
  id?: InputMaybe<Scalars["String"]>;
  published?: InputMaybe<Scalars["Boolean"]>;
  title: Scalars["String"];
  updatedAt?: InputMaybe<Scalars["DateTime"]>;
};

export type EntryCreateManyAuthorInputEnvelope = {
  data: Array<EntryCreateManyAuthorInput>;
  skipDuplicates?: InputMaybe<Scalars["Boolean"]>;
};

export type EntryCreateNestedManyWithoutAuthorInput = {
  connect?: InputMaybe<Array<EntryWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<
    Array<EntryCreateOrConnectWithoutAuthorInput>
  >;
  create?: InputMaybe<Array<EntryCreateWithoutAuthorInput>>;
  createMany?: InputMaybe<EntryCreateManyAuthorInputEnvelope>;
};

export type EntryCreateNestedManyWithoutCategoriesInput = {
  connect?: InputMaybe<Array<EntryWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<
    Array<EntryCreateOrConnectWithoutCategoriesInput>
  >;
  create?: InputMaybe<Array<EntryCreateWithoutCategoriesInput>>;
};

export type EntryCreateNestedOneWithoutCommentsInput = {
  connect?: InputMaybe<EntryWhereUniqueInput>;
  connectOrCreate?: InputMaybe<EntryCreateOrConnectWithoutCommentsInput>;
  create?: InputMaybe<EntryCreateWithoutCommentsInput>;
};

export type EntryCreateOrConnectWithoutAuthorInput = {
  create: EntryCreateWithoutAuthorInput;
  where: EntryWhereUniqueInput;
};

export type EntryCreateOrConnectWithoutCategoriesInput = {
  create: EntryCreateWithoutCategoriesInput;
  where: EntryWhereUniqueInput;
};

export type EntryCreateOrConnectWithoutCommentsInput = {
  create: EntryCreateWithoutCommentsInput;
  where: EntryWhereUniqueInput;
};

export type EntryCreateWithoutAuthorInput = {
  categories?: InputMaybe<CategoryCreateNestedManyWithoutEntriesInput>;
  categoryId?: InputMaybe<Scalars["String"]>;
  comments?: InputMaybe<CommentCreateNestedManyWithoutEntryInput>;
  content?: InputMaybe<Scalars["String"]>;
  createdAt?: InputMaybe<Scalars["DateTime"]>;
  featuredImage?: InputMaybe<Scalars["String"]>;
  id?: InputMaybe<Scalars["String"]>;
  published?: InputMaybe<Scalars["Boolean"]>;
  title: Scalars["String"];
  updatedAt?: InputMaybe<Scalars["DateTime"]>;
};

export type EntryCreateWithoutCategoriesInput = {
  author: UserCreateNestedOneWithoutEntriesInput;
  categoryId?: InputMaybe<Scalars["String"]>;
  comments?: InputMaybe<CommentCreateNestedManyWithoutEntryInput>;
  content?: InputMaybe<Scalars["String"]>;
  createdAt?: InputMaybe<Scalars["DateTime"]>;
  featuredImage?: InputMaybe<Scalars["String"]>;
  id?: InputMaybe<Scalars["String"]>;
  published?: InputMaybe<Scalars["Boolean"]>;
  title: Scalars["String"];
  updatedAt?: InputMaybe<Scalars["DateTime"]>;
};

export type EntryCreateWithoutCommentsInput = {
  author: UserCreateNestedOneWithoutEntriesInput;
  categories?: InputMaybe<CategoryCreateNestedManyWithoutEntriesInput>;
  categoryId?: InputMaybe<Scalars["String"]>;
  content?: InputMaybe<Scalars["String"]>;
  createdAt?: InputMaybe<Scalars["DateTime"]>;
  featuredImage?: InputMaybe<Scalars["String"]>;
  id?: InputMaybe<Scalars["String"]>;
  published?: InputMaybe<Scalars["Boolean"]>;
  title: Scalars["String"];
  updatedAt?: InputMaybe<Scalars["DateTime"]>;
};

export type EntryEdge = {
  __typename?: "EntryEdge";
  cursor: Scalars["String"];
  node: Entry;
};

export type EntryListRelationFilter = {
  every?: InputMaybe<EntryWhereInput>;
  none?: InputMaybe<EntryWhereInput>;
  some?: InputMaybe<EntryWhereInput>;
};

export type EntryOrderByRelationAggregateInput = {
  _count?: InputMaybe<SortOrder>;
};

export enum EntryOrderByRelevanceFieldEnum {
  AuthorId = "authorId",
  CategoryId = "categoryId",
  Content = "content",
  FeaturedImage = "featuredImage",
  Id = "id",
  Title = "title"
}

export type EntryOrderByRelevanceInput = {
  fields: Array<EntryOrderByRelevanceFieldEnum>;
  search: Scalars["String"];
  sort: SortOrder;
};

export type EntryOrderByWithRelationAndSearchRelevanceInput = {
  _relevance?: InputMaybe<EntryOrderByRelevanceInput>;
  author?: InputMaybe<UserOrderByWithRelationAndSearchRelevanceInput>;
  authorId?: InputMaybe<SortOrder>;
  categories?: InputMaybe<CategoryOrderByRelationAggregateInput>;
  categoryId?: InputMaybe<SortOrder>;
  comments?: InputMaybe<CommentOrderByRelationAggregateInput>;
  content?: InputMaybe<SortOrder>;
  createdAt?: InputMaybe<SortOrder>;
  featuredImage?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  published?: InputMaybe<SortOrder>;
  title?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
};

export type EntryRelationFilter = {
  is?: InputMaybe<EntryWhereInput>;
  isNot?: InputMaybe<EntryWhereInput>;
};

export enum EntryScalarFieldEnum {
  AuthorId = "authorId",
  CategoryId = "categoryId",
  Content = "content",
  CreatedAt = "createdAt",
  FeaturedImage = "featuredImage",
  Id = "id",
  Published = "published",
  Title = "title",
  UpdatedAt = "updatedAt"
}

export type EntryScalarWhereInput = {
  AND?: InputMaybe<Array<EntryScalarWhereInput>>;
  NOT?: InputMaybe<Array<EntryScalarWhereInput>>;
  OR?: InputMaybe<Array<EntryScalarWhereInput>>;
  authorId?: InputMaybe<StringFilter>;
  categoryId?: InputMaybe<StringNullableFilter>;
  content?: InputMaybe<StringNullableFilter>;
  createdAt?: InputMaybe<DateTimeFilter>;
  featuredImage?: InputMaybe<StringNullableFilter>;
  id?: InputMaybe<StringFilter>;
  published?: InputMaybe<BoolFilter>;
  title?: InputMaybe<StringFilter>;
  updatedAt?: InputMaybe<DateTimeNullableFilter>;
};

export type EntryUncheckedCreateNestedManyWithoutAuthorInput = {
  connect?: InputMaybe<Array<EntryWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<
    Array<EntryCreateOrConnectWithoutAuthorInput>
  >;
  create?: InputMaybe<Array<EntryCreateWithoutAuthorInput>>;
  createMany?: InputMaybe<EntryCreateManyAuthorInputEnvelope>;
};

export type EntryUpdateManyMutationInput = {
  categoryId?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  content?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  featuredImage?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  published?: InputMaybe<BoolFieldUpdateOperationsInput>;
  title?: InputMaybe<StringFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
};

export type EntryUpdateManyWithWhereWithoutAuthorInput = {
  data: EntryUpdateManyMutationInput;
  where: EntryScalarWhereInput;
};

export type EntryUpdateManyWithWhereWithoutCategoriesInput = {
  data: EntryUpdateManyMutationInput;
  where: EntryScalarWhereInput;
};

export type EntryUpdateManyWithoutAuthorInput = {
  connect?: InputMaybe<Array<EntryWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<
    Array<EntryCreateOrConnectWithoutAuthorInput>
  >;
  create?: InputMaybe<Array<EntryCreateWithoutAuthorInput>>;
  createMany?: InputMaybe<EntryCreateManyAuthorInputEnvelope>;
  delete?: InputMaybe<Array<EntryWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<EntryScalarWhereInput>>;
  disconnect?: InputMaybe<Array<EntryWhereUniqueInput>>;
  set?: InputMaybe<Array<EntryWhereUniqueInput>>;
  update?: InputMaybe<Array<EntryUpdateWithWhereUniqueWithoutAuthorInput>>;
  updateMany?: InputMaybe<
    Array<EntryUpdateManyWithWhereWithoutAuthorInput>
  >;
  upsert?: InputMaybe<Array<EntryUpsertWithWhereUniqueWithoutAuthorInput>>;
};

export type EntryUpdateManyWithoutCategoriesInput = {
  connect?: InputMaybe<Array<EntryWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<
    Array<EntryCreateOrConnectWithoutCategoriesInput>
  >;
  create?: InputMaybe<Array<EntryCreateWithoutCategoriesInput>>;
  delete?: InputMaybe<Array<EntryWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<EntryScalarWhereInput>>;
  disconnect?: InputMaybe<Array<EntryWhereUniqueInput>>;
  set?: InputMaybe<Array<EntryWhereUniqueInput>>;
  update?: InputMaybe<
    Array<EntryUpdateWithWhereUniqueWithoutCategoriesInput>
  >;
  updateMany?: InputMaybe<
    Array<EntryUpdateManyWithWhereWithoutCategoriesInput>
  >;
  upsert?: InputMaybe<
    Array<EntryUpsertWithWhereUniqueWithoutCategoriesInput>
  >;
};

export type EntryUpdateOneRequiredWithoutCommentsInput = {
  connect?: InputMaybe<EntryWhereUniqueInput>;
  connectOrCreate?: InputMaybe<EntryCreateOrConnectWithoutCommentsInput>;
  create?: InputMaybe<EntryCreateWithoutCommentsInput>;
  update?: InputMaybe<EntryUpdateWithoutCommentsInput>;
  upsert?: InputMaybe<EntryUpsertWithoutCommentsInput>;
};

export type EntryUpdateWithWhereUniqueWithoutAuthorInput = {
  data: EntryUpdateWithoutAuthorInput;
  where: EntryWhereUniqueInput;
};

export type EntryUpdateWithWhereUniqueWithoutCategoriesInput = {
  data: EntryUpdateWithoutCategoriesInput;
  where: EntryWhereUniqueInput;
};

export type EntryUpdateWithoutAuthorInput = {
  categories?: InputMaybe<CategoryUpdateManyWithoutEntriesInput>;
  categoryId?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  comments?: InputMaybe<CommentUpdateManyWithoutEntryInput>;
  content?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  featuredImage?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  published?: InputMaybe<BoolFieldUpdateOperationsInput>;
  title?: InputMaybe<StringFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
};

export type EntryUpdateWithoutCategoriesInput = {
  author?: InputMaybe<UserUpdateOneRequiredWithoutEntriesInput>;
  categoryId?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  comments?: InputMaybe<CommentUpdateManyWithoutEntryInput>;
  content?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  featuredImage?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  published?: InputMaybe<BoolFieldUpdateOperationsInput>;
  title?: InputMaybe<StringFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
};

export type EntryUpdateWithoutCommentsInput = {
  author?: InputMaybe<UserUpdateOneRequiredWithoutEntriesInput>;
  categories?: InputMaybe<CategoryUpdateManyWithoutEntriesInput>;
  categoryId?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  content?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  featuredImage?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  published?: InputMaybe<BoolFieldUpdateOperationsInput>;
  title?: InputMaybe<StringFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
};

export type EntryUpsertWithWhereUniqueWithoutAuthorInput = {
  create: EntryCreateWithoutAuthorInput;
  update: EntryUpdateWithoutAuthorInput;
  where: EntryWhereUniqueInput;
};

export type EntryUpsertWithWhereUniqueWithoutCategoriesInput = {
  create: EntryCreateWithoutCategoriesInput;
  update: EntryUpdateWithoutCategoriesInput;
  where: EntryWhereUniqueInput;
};

export type EntryUpsertWithoutCommentsInput = {
  create: EntryCreateWithoutCommentsInput;
  update: EntryUpdateWithoutCommentsInput;
};

export type EntryWhereInput = {
  AND?: InputMaybe<Array<EntryWhereInput>>;
  NOT?: InputMaybe<Array<EntryWhereInput>>;
  OR?: InputMaybe<Array<EntryWhereInput>>;
  author?: InputMaybe<UserRelationFilter>;
  authorId?: InputMaybe<StringFilter>;
  categories?: InputMaybe<CategoryListRelationFilter>;
  categoryId?: InputMaybe<StringNullableFilter>;
  comments?: InputMaybe<CommentListRelationFilter>;
  content?: InputMaybe<StringNullableFilter>;
  createdAt?: InputMaybe<DateTimeFilter>;
  featuredImage?: InputMaybe<StringNullableFilter>;
  id?: InputMaybe<StringFilter>;
  published?: InputMaybe<BoolFilter>;
  title?: InputMaybe<StringFilter>;
  updatedAt?: InputMaybe<DateTimeNullableFilter>;
};

export type EntryWhereUniqueInput = {
  authorId?: InputMaybe<Scalars["String"]>;
  id?: InputMaybe<Scalars["String"]>;
};

export type EnumCommentReactionsNullableListFilter = {
  equals?: InputMaybe<Array<CommentReactions>>;
  has?: InputMaybe<CommentReactions>;
  hasEvery?: InputMaybe<Array<CommentReactions>>;
  hasSome?: InputMaybe<Array<CommentReactions>>;
  isEmpty?: InputMaybe<Scalars["Boolean"]>;
};

export type EnumGenderNullableFilter = {
  equals?: InputMaybe<Gender>;
  in?: InputMaybe<Array<Gender>>;
  not?: InputMaybe<NestedEnumGenderNullableFilter>;
  notIn?: InputMaybe<Array<Gender>>;
};

export type EnumMediaItemDestinationNullableFilter = {
  equals?: InputMaybe<MediaItemDestination>;
  in?: InputMaybe<Array<MediaItemDestination>>;
  not?: InputMaybe<NestedEnumMediaItemDestinationNullableFilter>;
  notIn?: InputMaybe<Array<MediaItemDestination>>;
};

export type EnumMimeTypesNullableFilter = {
  equals?: InputMaybe<MimeTypes>;
  in?: InputMaybe<Array<MimeTypes>>;
  not?: InputMaybe<NestedEnumMimeTypesNullableFilter>;
  notIn?: InputMaybe<Array<MimeTypes>>;
};

export type EnumPronounsNullableFilter = {
  equals?: InputMaybe<Pronouns>;
  in?: InputMaybe<Array<Pronouns>>;
  not?: InputMaybe<NestedEnumPronounsNullableFilter>;
  notIn?: InputMaybe<Array<Pronouns>>;
};

export type EnumRoleNullableFilter = {
  equals?: InputMaybe<Role>;
  in?: InputMaybe<Array<Role>>;
  not?: InputMaybe<NestedEnumRoleNullableFilter>;
  notIn?: InputMaybe<Array<Role>>;
};

export type EnumUserStatusNullableFilter = {
  equals?: InputMaybe<UserStatus>;
  in?: InputMaybe<Array<UserStatus>>;
  not?: InputMaybe<NestedEnumUserStatusNullableFilter>;
  notIn?: InputMaybe<Array<UserStatus>>;
};

export type FindManyCategoriesPaginatedInput = {
  cursor?: InputMaybe<CategoryWhereUniqueInput>;
  distinct?: InputMaybe<Array<CategoryScalarFieldEnum>>;
  orderBy?: InputMaybe<
    Array<CategoryOrderByWithRelationAndSearchRelevanceInput>
  >;
  pagination: PaginationArgsInput;
  skip?: InputMaybe<Scalars["Int"]>;
  take?: InputMaybe<Scalars["Int"]>;
  where?: InputMaybe<CategoryWhereInput>;
};

export type FindManyCommentsPaginatedInput = {
  cursor?: InputMaybe<CommentWhereUniqueInput>;
  distinct?: InputMaybe<Array<CommentScalarFieldEnum>>;
  orderBy?: InputMaybe<
    Array<CommentOrderByWithRelationAndSearchRelevanceInput>
  >;
  pagination: PaginationArgsInput;
  skip?: InputMaybe<Scalars["Int"]>;
  take?: InputMaybe<Scalars["Int"]>;
  where?: InputMaybe<CommentWhereInput>;
};

export type FindManyConnectionsPaginatedInput = {
  cursor?: InputMaybe<ConnectionWhereUniqueInput>;
  distinct?: InputMaybe<Array<ConnectionScalarFieldEnum>>;
  orderBy?: InputMaybe<
    Array<ConnectionOrderByWithRelationAndSearchRelevanceInput>
  >;
  pagination: PaginationArgsInput;
  skip?: InputMaybe<Scalars["Int"]>;
  take?: InputMaybe<Scalars["Int"]>;
  where?: InputMaybe<ConnectionWhereInput>;
};

export type FindManyEntriessPaginatedInput = {
  cursor?: InputMaybe<EntryWhereUniqueInput>;
  distinct?: InputMaybe<Array<EntryScalarFieldEnum>>;
  orderBy?: InputMaybe<
    Array<EntryOrderByWithRelationAndSearchRelevanceInput>
  >;
  pagination: PaginationArgsInput;
  skip?: InputMaybe<Scalars["Int"]>;
  take?: InputMaybe<Scalars["Int"]>;
  where?: InputMaybe<EntryWhereInput>;
};

export type FindManyMediaItemsPaginatedInput = {
  cursor?: InputMaybe<MediaItemWhereUniqueInput>;
  distinct?: InputMaybe<Array<MediaItemScalarFieldEnum>>;
  orderBy?: InputMaybe<
    Array<MediaItemOrderByWithRelationAndSearchRelevanceInput>
  >;
  pagination?: InputMaybe<PaginationArgsInput>;
  skip?: InputMaybe<Scalars["Int"]>;
  take?: InputMaybe<Scalars["Int"]>;
  where?: InputMaybe<MediaItemWhereInput>;
};

export type FindManyProfilesPaginatedInput = {
  cursor?: InputMaybe<ProfileWhereUniqueInput>;
  distinct?: InputMaybe<Array<ProfileScalarFieldEnum>>;
  orderBy?: InputMaybe<
    Array<ProfileOrderByWithRelationAndSearchRelevanceInput>
  >;
  pagination: PaginationArgsInput;
  skip?: InputMaybe<Scalars["Int"]>;
  take?: InputMaybe<Scalars["Int"]>;
  where?: InputMaybe<ProfileWhereInput>;
};

export type FindManySessionsPaginatedInput = {
  cursor: SessionWhereUniqueInput;
  distinct?: InputMaybe<Array<SessionScalarFieldEnum>>;
  orderBy?: InputMaybe<
    Array<SessionOrderByWithRelationAndSearchRelevanceInput>
  >;
  pagination: PaginationArgsInput;
  skip?: InputMaybe<Scalars["Int"]>;
  take?: InputMaybe<Scalars["Int"]>;
  where?: InputMaybe<SessionWhereInput>;
};

export type FindManyUsersPaginatedInput = {
  cursor?: InputMaybe<UserWhereUniqueInput>;
  distinct?: InputMaybe<Array<UserScalarFieldEnum>>;
  orderBy: Array<UserOrderByWithRelationAndSearchRelevanceInput>;
  pagination?: InputMaybe<PaginationArgsInput>;
  skip?: InputMaybe<Scalars["Int"]>;
  take?: InputMaybe<Scalars["Int"]>;
  where?: InputMaybe<UserWhereInput>;
};

export type FindViewerEntriesPaginatedInput = {
  cursor?: InputMaybe<EntryWhereUniqueInput>;
  distinct?: InputMaybe<Array<EntryScalarFieldEnum>>;
  orderBy?: InputMaybe<
    Array<EntryOrderByWithRelationAndSearchRelevanceInput>
  >;
  pagination: PaginationArgsInput;
  skip?: InputMaybe<Scalars["Int"]>;
  take?: InputMaybe<Scalars["Int"]>;
  unique?: InputMaybe<EntryWhereUniqueInput>;
  where?: InputMaybe<ViewerEntriesWhereInput>;
};

export type FloatNullableFilter = {
  equals?: InputMaybe<Scalars["Float"]>;
  gt?: InputMaybe<Scalars["Float"]>;
  gte?: InputMaybe<Scalars["Float"]>;
  in?: InputMaybe<Array<Scalars["Float"]>>;
  lt?: InputMaybe<Scalars["Float"]>;
  lte?: InputMaybe<Scalars["Float"]>;
  not?: InputMaybe<NestedFloatNullableFilter>;
  notIn?: InputMaybe<Array<Scalars["Float"]>>;
};

export enum Gender {
  Female = "FEMALE",
  Male = "MALE",
  Other = "OTHER",
  Uncertain = "UNCERTAIN"
}

export type IntNullableFilter = {
  equals?: InputMaybe<Scalars["Int"]>;
  gt?: InputMaybe<Scalars["Int"]>;
  gte?: InputMaybe<Scalars["Int"]>;
  in?: InputMaybe<Array<Scalars["Int"]>>;
  lt?: InputMaybe<Scalars["Int"]>;
  lte?: InputMaybe<Scalars["Int"]>;
  not?: InputMaybe<NestedIntNullableFilter>;
  notIn?: InputMaybe<Array<Scalars["Int"]>>;
};

export type JwtDecoded = {
  __typename?: "JwtDecoded";
  header: JwtHeaders;
  payload: JwtPayload;
  signature: Scalars["String"];
};

export type JwtHeaders = {
  __typename?: "JwtHeaders";
  alg: AlgorithmType;
  typ: Scalars["String"];
};

export type JwtPayload = {
  __typename?: "JwtPayload";
  exp?: Maybe<Scalars["BigInt"]>;
  iat?: Maybe<Scalars["BigInt"]>;
  userId?: Maybe<Scalars["String"]>;
};

export type LoginInput = {
  email?: InputMaybe<Scalars["String"]>;
  password?: InputMaybe<Scalars["String"]>;
};

export type MediaItem = Node & {
  __typename?: "MediaItem";
  fileLastModified?: Maybe<Scalars["DateTime"]>;
  height?: Maybe<Scalars["Float"]>;
  id: Scalars["ID"];
  name?: Maybe<Scalars["String"]>;
  quality?: Maybe<Scalars["Int"]>;
  size?: Maybe<Scalars["String"]>;
  src?: Maybe<Scalars["String"]>;
  srcSet?: Maybe<Scalars["String"]>;
  type?: Maybe<MimeTypes>;
  updatedAt?: Maybe<Scalars["DateTime"]>;
  uploadedAt: Scalars["DateTime"];
  user: User;
  userId: Scalars["String"];
  width?: Maybe<Scalars["Float"]>;
};

export type MediaItemConnection = {
  __typename?: "MediaItemConnection";
  edges: Array<MediaItemEdge>;
  pageInfo: PageInfo;
  totalCount: Scalars["Int"];
};

export type MediaItemCreateManyUserInput = {
  ariaLabel?: InputMaybe<Scalars["String"]>;
  caption?: InputMaybe<Scalars["String"]>;
  destination?: InputMaybe<MediaItemDestination>;
  fileLastModified?: InputMaybe<Scalars["DateTime"]>;
  height?: InputMaybe<Scalars["Float"]>;
  id?: InputMaybe<Scalars["String"]>;
  name?: InputMaybe<Scalars["String"]>;
  quality?: InputMaybe<Scalars["Int"]>;
  size?: InputMaybe<Scalars["String"]>;
  src?: InputMaybe<Scalars["String"]>;
  srcSet?: InputMaybe<Scalars["String"]>;
  title?: InputMaybe<Scalars["String"]>;
  type?: InputMaybe<MimeTypes>;
  updatedAt?: InputMaybe<Scalars["DateTime"]>;
  uploadedAt?: InputMaybe<Scalars["DateTime"]>;
  width?: InputMaybe<Scalars["Float"]>;
};

export type MediaItemCreateManyUserInputEnvelope = {
  data: Array<MediaItemCreateManyUserInput>;
  skipDuplicates?: InputMaybe<Scalars["Boolean"]>;
};

export type MediaItemCreateNestedManyWithoutUserInput = {
  connect?: InputMaybe<Array<MediaItemWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<
    Array<MediaItemCreateOrConnectWithoutUserInput>
  >;
  create?: InputMaybe<Array<MediaItemCreateWithoutUserInput>>;
  createMany?: InputMaybe<MediaItemCreateManyUserInputEnvelope>;
};

export type MediaItemCreateOrConnectWithoutUserInput = {
  create: MediaItemCreateWithoutUserInput;
  where: MediaItemWhereUniqueInput;
};

export type MediaItemCreateWithoutUserInput = {
  ariaLabel?: InputMaybe<Scalars["String"]>;
  caption?: InputMaybe<Scalars["String"]>;
  destination?: InputMaybe<MediaItemDestination>;
  fileLastModified?: InputMaybe<Scalars["DateTime"]>;
  height?: InputMaybe<Scalars["Float"]>;
  id?: InputMaybe<Scalars["String"]>;
  name?: InputMaybe<Scalars["String"]>;
  quality?: InputMaybe<Scalars["Int"]>;
  size?: InputMaybe<Scalars["String"]>;
  src?: InputMaybe<Scalars["String"]>;
  srcSet?: InputMaybe<Scalars["String"]>;
  title?: InputMaybe<Scalars["String"]>;
  type?: InputMaybe<MimeTypes>;
  updatedAt?: InputMaybe<Scalars["DateTime"]>;
  uploadedAt?: InputMaybe<Scalars["DateTime"]>;
  width?: InputMaybe<Scalars["Float"]>;
};

export enum MediaItemDestination {
  Avatar = "AVATAR",
  CommentAttachment = "COMMENT_ATTACHMENT",
  CoverImage = "COVER_IMAGE",
  EntryAttachment = "ENTRY_ATTACHMENT",
  FeaturedImage = "FEATURED_IMAGE"
}

export type MediaItemEdge = {
  __typename?: "MediaItemEdge";
  cursor: Scalars["String"];
  node: MediaItem;
};

export type MediaItemListRelationFilter = {
  every?: InputMaybe<MediaItemWhereInput>;
  none?: InputMaybe<MediaItemWhereInput>;
  some?: InputMaybe<MediaItemWhereInput>;
};

export type MediaItemNameUserIdCompoundUniqueInput = {
  name: Scalars["String"];
  userId: Scalars["String"];
};

export type MediaItemOrderByRelationAggregateInput = {
  _count?: InputMaybe<SortOrder>;
};

export enum MediaItemOrderByRelevanceFieldEnum {
  AriaLabel = "ariaLabel",
  Caption = "caption",
  Id = "id",
  Name = "name",
  Size = "size",
  Src = "src",
  SrcSet = "srcSet",
  Title = "title",
  UserId = "userId"
}

export type MediaItemOrderByRelevanceInput = {
  fields: Array<MediaItemOrderByRelevanceFieldEnum>;
  search: Scalars["String"];
  sort: SortOrder;
};

export type MediaItemOrderByWithRelationAndSearchRelevanceInput = {
  _relevance?: InputMaybe<MediaItemOrderByRelevanceInput>;
  ariaLabel?: InputMaybe<SortOrder>;
  caption?: InputMaybe<SortOrder>;
  destination?: InputMaybe<SortOrder>;
  fileLastModified?: InputMaybe<SortOrder>;
  height?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  quality?: InputMaybe<SortOrder>;
  size?: InputMaybe<SortOrder>;
  src?: InputMaybe<SortOrder>;
  srcSet?: InputMaybe<SortOrder>;
  title?: InputMaybe<SortOrder>;
  type?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
  uploadedAt?: InputMaybe<SortOrder>;
  user?: InputMaybe<UserOrderByWithRelationAndSearchRelevanceInput>;
  userId?: InputMaybe<SortOrder>;
  width?: InputMaybe<SortOrder>;
};

export enum MediaItemScalarFieldEnum {
  AriaLabel = "ariaLabel",
  Caption = "caption",
  Destination = "destination",
  FileLastModified = "fileLastModified",
  Height = "height",
  Id = "id",
  Name = "name",
  Quality = "quality",
  Size = "size",
  Src = "src",
  SrcSet = "srcSet",
  Title = "title",
  Type = "type",
  UpdatedAt = "updatedAt",
  UploadedAt = "uploadedAt",
  UserId = "userId",
  Width = "width"
}

export type MediaItemScalarWhereInput = {
  AND?: InputMaybe<Array<MediaItemScalarWhereInput>>;
  NOT?: InputMaybe<Array<MediaItemScalarWhereInput>>;
  OR?: InputMaybe<Array<MediaItemScalarWhereInput>>;
  ariaLabel?: InputMaybe<StringNullableFilter>;
  caption?: InputMaybe<StringNullableFilter>;
  destination?: InputMaybe<EnumMediaItemDestinationNullableFilter>;
  fileLastModified?: InputMaybe<DateTimeNullableFilter>;
  height?: InputMaybe<FloatNullableFilter>;
  id?: InputMaybe<StringFilter>;
  name?: InputMaybe<StringNullableFilter>;
  quality?: InputMaybe<IntNullableFilter>;
  size?: InputMaybe<StringNullableFilter>;
  src?: InputMaybe<StringNullableFilter>;
  srcSet?: InputMaybe<StringNullableFilter>;
  title?: InputMaybe<StringNullableFilter>;
  type?: InputMaybe<EnumMimeTypesNullableFilter>;
  updatedAt?: InputMaybe<DateTimeNullableFilter>;
  uploadedAt?: InputMaybe<DateTimeFilter>;
  userId?: InputMaybe<StringFilter>;
  width?: InputMaybe<FloatNullableFilter>;
};

export type MediaItemUpdateManyMutationInput = {
  ariaLabel?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  caption?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  destination?: InputMaybe<NullableEnumMediaItemDestinationFieldUpdateOperationsInput>;
  fileLastModified?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  height?: InputMaybe<NullableFloatFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  name?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  quality?: InputMaybe<NullableIntFieldUpdateOperationsInput>;
  size?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  src?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  srcSet?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  title?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  type?: InputMaybe<NullableEnumMimeTypesFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  uploadedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  width?: InputMaybe<NullableFloatFieldUpdateOperationsInput>;
};

export type MediaItemUpdateManyWithWhereWithoutUserInput = {
  data: MediaItemUpdateManyMutationInput;
  where: MediaItemScalarWhereInput;
};

export type MediaItemUpdateManyWithoutUserInput = {
  connect?: InputMaybe<Array<MediaItemWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<
    Array<MediaItemCreateOrConnectWithoutUserInput>
  >;
  create?: InputMaybe<Array<MediaItemCreateWithoutUserInput>>;
  createMany?: InputMaybe<MediaItemCreateManyUserInputEnvelope>;
  delete?: InputMaybe<Array<MediaItemWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<MediaItemScalarWhereInput>>;
  disconnect?: InputMaybe<Array<MediaItemWhereUniqueInput>>;
  set?: InputMaybe<Array<MediaItemWhereUniqueInput>>;
  update?: InputMaybe<
    Array<MediaItemUpdateWithWhereUniqueWithoutUserInput>
  >;
  updateMany?: InputMaybe<
    Array<MediaItemUpdateManyWithWhereWithoutUserInput>
  >;
  upsert?: InputMaybe<
    Array<MediaItemUpsertWithWhereUniqueWithoutUserInput>
  >;
};

export type MediaItemUpdateWithWhereUniqueWithoutUserInput = {
  data: MediaItemUpdateWithoutUserInput;
  where: MediaItemWhereUniqueInput;
};

export type MediaItemUpdateWithoutUserInput = {
  ariaLabel?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  caption?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  destination?: InputMaybe<NullableEnumMediaItemDestinationFieldUpdateOperationsInput>;
  fileLastModified?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  height?: InputMaybe<NullableFloatFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  name?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  quality?: InputMaybe<NullableIntFieldUpdateOperationsInput>;
  size?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  src?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  srcSet?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  title?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  type?: InputMaybe<NullableEnumMimeTypesFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  uploadedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  width?: InputMaybe<NullableFloatFieldUpdateOperationsInput>;
};

export type MediaItemUpsertWithWhereUniqueWithoutUserInput = {
  create: MediaItemCreateWithoutUserInput;
  update: MediaItemUpdateWithoutUserInput;
  where: MediaItemWhereUniqueInput;
};

export type MediaItemWhereInput = {
  AND?: InputMaybe<Array<MediaItemWhereInput>>;
  NOT?: InputMaybe<Array<MediaItemWhereInput>>;
  OR?: InputMaybe<Array<MediaItemWhereInput>>;
  ariaLabel?: InputMaybe<StringNullableFilter>;
  caption?: InputMaybe<StringNullableFilter>;
  destination?: InputMaybe<EnumMediaItemDestinationNullableFilter>;
  fileLastModified?: InputMaybe<DateTimeNullableFilter>;
  height?: InputMaybe<FloatNullableFilter>;
  id?: InputMaybe<StringFilter>;
  name?: InputMaybe<StringNullableFilter>;
  quality?: InputMaybe<IntNullableFilter>;
  size?: InputMaybe<StringNullableFilter>;
  src?: InputMaybe<StringNullableFilter>;
  srcSet?: InputMaybe<StringNullableFilter>;
  title?: InputMaybe<StringNullableFilter>;
  type?: InputMaybe<EnumMimeTypesNullableFilter>;
  updatedAt?: InputMaybe<DateTimeNullableFilter>;
  uploadedAt?: InputMaybe<DateTimeFilter>;
  user?: InputMaybe<UserRelationFilter>;
  userId?: InputMaybe<StringFilter>;
  width?: InputMaybe<FloatNullableFilter>;
};

export type MediaItemWhereUniqueInput = {
  id?: InputMaybe<Scalars["String"]>;
  name_userId?: InputMaybe<MediaItemNameUserIdCompoundUniqueInput>;
};

export enum MimeTypes {
  Avif = "AVIF",
  Bmp = "BMP",
  Gif = "GIF",
  Jpeg = "JPEG",
  Png = "PNG",
  Svg = "SVG",
  Tiff = "TIFF",
  Webp = "WEBP"
}

export type Mutation = {
  __typename?: "Mutation";
  changePassword: User;
  createEntry: Entry;
  createNewEntry: Entry;
  createProfile: Profile;
  login: Token;
  register: AuthSansSession;
  registerNewUser: AuthDetailed;
  signin: AuthDetailed;
  signup: Token;
  updateUserPassword: User;
  upsertComment: Array<Comment>;
  viewerCreateEntry: Array<Entry>;
};

export type MutationChangePasswordArgs = {
  changePasswordInput: ChangePasswordInput;
};

export type MutationCreateEntryArgs = {
  EntryInput: EntryUncheckedCreateNestedManyWithoutAuthorInput;
};

export type MutationCreateNewEntryArgs = {
  createNewEntryInput: EntryUncheckedCreateNestedManyWithoutAuthorInput;
};

export type MutationCreateProfileArgs = {
  data: ProfileCreateInput;
  userId: Scalars["String"];
};

export type MutationLoginArgs = {
  data: LoginInput;
};

export type MutationRegisterArgs = {
  dataRegister: SignupInput;
};

export type MutationRegisterNewUserArgs = {
  userCreateInput: UserCreateMutationInput;
};

export type MutationSigninArgs = {
  userloginInput: LoginInput;
};

export type MutationSignupArgs = {
  data: SignupInput;
};

export type MutationUpdateUserPasswordArgs = {
  passwordInput: ChangePasswordInput;
};

export type MutationUpsertCommentArgs = {
  commentUpsertInput: CommentUpsertWithWhereUniqueWithoutAuthorInput;
};

export type MutationViewerCreateEntryArgs = {
  viewerEntryCreateInput: EntryUpdateManyWithWhereWithoutAuthorInput;
};

export type NestedBoolFilter = {
  equals?: InputMaybe<Scalars["Boolean"]>;
  not?: InputMaybe<NestedBoolFilter>;
};

export type NestedDateTimeFilter = {
  equals?: InputMaybe<Scalars["DateTime"]>;
  gt?: InputMaybe<Scalars["DateTime"]>;
  gte?: InputMaybe<Scalars["DateTime"]>;
  in?: InputMaybe<Array<Scalars["DateTime"]>>;
  lt?: InputMaybe<Scalars["DateTime"]>;
  lte?: InputMaybe<Scalars["DateTime"]>;
  not?: InputMaybe<NestedDateTimeFilter>;
  notIn?: InputMaybe<Array<Scalars["DateTime"]>>;
};

export type NestedDateTimeNullableFilter = {
  equals?: InputMaybe<Scalars["DateTime"]>;
  gt?: InputMaybe<Scalars["DateTime"]>;
  gte?: InputMaybe<Scalars["DateTime"]>;
  in?: InputMaybe<Array<Scalars["DateTime"]>>;
  lt?: InputMaybe<Scalars["DateTime"]>;
  lte?: InputMaybe<Scalars["DateTime"]>;
  not?: InputMaybe<NestedDateTimeNullableFilter>;
  notIn?: InputMaybe<Array<Scalars["DateTime"]>>;
};

export type NestedEnumGenderNullableFilter = {
  equals?: InputMaybe<Gender>;
  in?: InputMaybe<Array<Gender>>;
  not?: InputMaybe<NestedEnumGenderNullableFilter>;
  notIn?: InputMaybe<Array<Gender>>;
};

export type NestedEnumMediaItemDestinationNullableFilter = {
  equals?: InputMaybe<MediaItemDestination>;
  in?: InputMaybe<Array<MediaItemDestination>>;
  not?: InputMaybe<NestedEnumMediaItemDestinationNullableFilter>;
  notIn?: InputMaybe<Array<MediaItemDestination>>;
};

export type NestedEnumMimeTypesNullableFilter = {
  equals?: InputMaybe<MimeTypes>;
  in?: InputMaybe<Array<MimeTypes>>;
  not?: InputMaybe<NestedEnumMimeTypesNullableFilter>;
  notIn?: InputMaybe<Array<MimeTypes>>;
};

export type NestedEnumPronounsNullableFilter = {
  equals?: InputMaybe<Pronouns>;
  in?: InputMaybe<Array<Pronouns>>;
  not?: InputMaybe<NestedEnumPronounsNullableFilter>;
  notIn?: InputMaybe<Array<Pronouns>>;
};

export type NestedEnumRoleNullableFilter = {
  equals?: InputMaybe<Role>;
  in?: InputMaybe<Array<Role>>;
  not?: InputMaybe<NestedEnumRoleNullableFilter>;
  notIn?: InputMaybe<Array<Role>>;
};

export type NestedEnumUserStatusNullableFilter = {
  equals?: InputMaybe<UserStatus>;
  in?: InputMaybe<Array<UserStatus>>;
  not?: InputMaybe<NestedEnumUserStatusNullableFilter>;
  notIn?: InputMaybe<Array<UserStatus>>;
};

export type NestedFloatNullableFilter = {
  equals?: InputMaybe<Scalars["Float"]>;
  gt?: InputMaybe<Scalars["Float"]>;
  gte?: InputMaybe<Scalars["Float"]>;
  in?: InputMaybe<Array<Scalars["Float"]>>;
  lt?: InputMaybe<Scalars["Float"]>;
  lte?: InputMaybe<Scalars["Float"]>;
  not?: InputMaybe<NestedFloatNullableFilter>;
  notIn?: InputMaybe<Array<Scalars["Float"]>>;
};

export type NestedIntNullableFilter = {
  equals?: InputMaybe<Scalars["Int"]>;
  gt?: InputMaybe<Scalars["Int"]>;
  gte?: InputMaybe<Scalars["Int"]>;
  in?: InputMaybe<Array<Scalars["Int"]>>;
  lt?: InputMaybe<Scalars["Int"]>;
  lte?: InputMaybe<Scalars["Int"]>;
  not?: InputMaybe<NestedIntNullableFilter>;
  notIn?: InputMaybe<Array<Scalars["Int"]>>;
};

export type NestedStringFilter = {
  contains?: InputMaybe<Scalars["String"]>;
  endsWith?: InputMaybe<Scalars["String"]>;
  equals?: InputMaybe<Scalars["String"]>;
  gt?: InputMaybe<Scalars["String"]>;
  gte?: InputMaybe<Scalars["String"]>;
  in?: InputMaybe<Array<Scalars["String"]>>;
  lt?: InputMaybe<Scalars["String"]>;
  lte?: InputMaybe<Scalars["String"]>;
  not?: InputMaybe<NestedStringFilter>;
  notIn?: InputMaybe<Array<Scalars["String"]>>;
  search?: InputMaybe<Scalars["String"]>;
  startsWith?: InputMaybe<Scalars["String"]>;
};

export type NestedStringNullableFilter = {
  contains?: InputMaybe<Scalars["String"]>;
  endsWith?: InputMaybe<Scalars["String"]>;
  equals?: InputMaybe<Scalars["String"]>;
  gt?: InputMaybe<Scalars["String"]>;
  gte?: InputMaybe<Scalars["String"]>;
  in?: InputMaybe<Array<Scalars["String"]>>;
  lt?: InputMaybe<Scalars["String"]>;
  lte?: InputMaybe<Scalars["String"]>;
  not?: InputMaybe<NestedStringNullableFilter>;
  notIn?: InputMaybe<Array<Scalars["String"]>>;
  search?: InputMaybe<Scalars["String"]>;
  startsWith?: InputMaybe<Scalars["String"]>;
};

export type Node = {
  id: Scalars["ID"];
};

export type NodeUnion =
  | CommentConnection
  | EntryConnection
  | MediaItemConnection
  | ProfileConnection
  | SessionConnection
  | UserConnection;

export type NodeUnionConnection = {
  __typename?: "NodeUnionConnection";
  edges: Array<NodeUnion>;
  pageInfo: PageInfo;
  totalCount: Scalars["Int"];
};

export type NullableDateTimeFieldUpdateOperationsInput = {
  set?: InputMaybe<Scalars["DateTime"]>;
};

export type NullableEnumGenderFieldUpdateOperationsInput = {
  set?: InputMaybe<Gender>;
};

export type NullableEnumMediaItemDestinationFieldUpdateOperationsInput = {
  set?: InputMaybe<MediaItemDestination>;
};

export type NullableEnumMimeTypesFieldUpdateOperationsInput = {
  set?: InputMaybe<MimeTypes>;
};

export type NullableEnumPronounsFieldUpdateOperationsInput = {
  set?: InputMaybe<Pronouns>;
};

export type NullableEnumRoleFieldUpdateOperationsInput = {
  set?: InputMaybe<Role>;
};

export type NullableEnumUserStatusFieldUpdateOperationsInput = {
  set?: InputMaybe<UserStatus>;
};

export type NullableFloatFieldUpdateOperationsInput = {
  decrement?: InputMaybe<Scalars["Float"]>;
  divide?: InputMaybe<Scalars["Float"]>;
  increment?: InputMaybe<Scalars["Float"]>;
  multiply?: InputMaybe<Scalars["Float"]>;
  set?: InputMaybe<Scalars["Float"]>;
};

export type NullableIntFieldUpdateOperationsInput = {
  decrement?: InputMaybe<Scalars["Int"]>;
  divide?: InputMaybe<Scalars["Int"]>;
  increment?: InputMaybe<Scalars["Int"]>;
  multiply?: InputMaybe<Scalars["Int"]>;
  set?: InputMaybe<Scalars["Int"]>;
};

export type NullableStringFieldUpdateOperationsInput = {
  set?: InputMaybe<Scalars["String"]>;
};

export type PageInfo = {
  __typename?: "PageInfo";
  endCursor?: Maybe<Scalars["String"]>;
  hasNextPage: Scalars["Boolean"];
  hasPreviousPage: Scalars["Boolean"];
  startCursor?: Maybe<Scalars["String"]>;
};

export type PaginationArgsInput = {
  after?: InputMaybe<Scalars["String"]>;
  before?: InputMaybe<Scalars["String"]>;
  first?: InputMaybe<Scalars["Int"]>;
  last?: InputMaybe<Scalars["Int"]>;
};

export type Profile = Node & {
  __typename?: "Profile";
  activiyFeed?: Maybe<Scalars["String"]>;
  bio?: Maybe<Scalars["String"]>;
  city?: Maybe<Scalars["String"]>;
  country?: Maybe<Scalars["String"]>;
  coverPhoto?: Maybe<Scalars["String"]>;
  dob?: Maybe<Scalars["String"]>;
  gender?: Maybe<Gender>;
  id: Scalars["ID"];
  lastSeen?: Maybe<Scalars["DateTime"]>;
  memberSince: Scalars["DateTime"];
  occupation?: Maybe<Scalars["String"]>;
  phoneNumber?: Maybe<Scalars["String"]>;
  pronouns?: Maybe<Pronouns>;
  recentActivity?: Maybe<Scalars["String"]>;
  user: User;
  userId: Scalars["String"];
  userInProfile: User;
};

export type ProfileConnection = {
  __typename?: "ProfileConnection";
  edges: Array<ProfileEdge>;
  pageInfo: PageInfo;
  totalCount: Scalars["Int"];
};

export type ProfileCreateInput = {
  activiyFeed?: InputMaybe<Scalars["String"]>;
  bio?: InputMaybe<Scalars["String"]>;
  city?: InputMaybe<Scalars["String"]>;
  country?: InputMaybe<Scalars["String"]>;
  coverPhoto?: InputMaybe<Scalars["String"]>;
  dob?: InputMaybe<Scalars["String"]>;
  gender?: InputMaybe<Gender>;
  id?: InputMaybe<Scalars["String"]>;
  lastSeen?: InputMaybe<Scalars["DateTime"]>;
  memberSince?: InputMaybe<Scalars["DateTime"]>;
  occupation?: InputMaybe<Scalars["String"]>;
  phoneNumber?: InputMaybe<Scalars["String"]>;
  pronouns?: InputMaybe<Pronouns>;
  recentActivity?: InputMaybe<Scalars["String"]>;
  user: UserCreateNestedOneWithoutProfileInput;
};

export type ProfileCreateNestedOneWithoutUserInput = {
  connect?: InputMaybe<ProfileWhereUniqueInput>;
  connectOrCreate?: InputMaybe<ProfileCreateOrConnectWithoutUserInput>;
  create?: InputMaybe<ProfileCreateWithoutUserInput>;
};

export type ProfileCreateOrConnectWithoutUserInput = {
  create: ProfileCreateWithoutUserInput;
  where: ProfileWhereUniqueInput;
};

export type ProfileCreateWithoutUserInput = {
  activiyFeed?: InputMaybe<Scalars["String"]>;
  bio?: InputMaybe<Scalars["String"]>;
  city?: InputMaybe<Scalars["String"]>;
  country?: InputMaybe<Scalars["String"]>;
  coverPhoto?: InputMaybe<Scalars["String"]>;
  dob?: InputMaybe<Scalars["String"]>;
  gender?: InputMaybe<Gender>;
  id?: InputMaybe<Scalars["String"]>;
  lastSeen?: InputMaybe<Scalars["DateTime"]>;
  memberSince?: InputMaybe<Scalars["DateTime"]>;
  occupation?: InputMaybe<Scalars["String"]>;
  phoneNumber?: InputMaybe<Scalars["String"]>;
  pronouns?: InputMaybe<Pronouns>;
  recentActivity?: InputMaybe<Scalars["String"]>;
};

export type ProfileEdge = {
  __typename?: "ProfileEdge";
  cursor: Scalars["String"];
  node: Profile;
};

export enum ProfileOrderByRelevanceFieldEnum {
  ActiviyFeed = "activiyFeed",
  Bio = "bio",
  City = "city",
  Country = "country",
  CoverPhoto = "coverPhoto",
  Dob = "dob",
  Id = "id",
  Occupation = "occupation",
  PhoneNumber = "phoneNumber",
  RecentActivity = "recentActivity",
  UserId = "userId"
}

export type ProfileOrderByRelevanceInput = {
  fields: Array<ProfileOrderByRelevanceFieldEnum>;
  search: Scalars["String"];
  sort: SortOrder;
};

export type ProfileOrderByWithRelationAndSearchRelevanceInput = {
  _relevance?: InputMaybe<ProfileOrderByRelevanceInput>;
  activiyFeed?: InputMaybe<SortOrder>;
  bio?: InputMaybe<SortOrder>;
  city?: InputMaybe<SortOrder>;
  country?: InputMaybe<SortOrder>;
  coverPhoto?: InputMaybe<SortOrder>;
  dob?: InputMaybe<SortOrder>;
  gender?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  lastSeen?: InputMaybe<SortOrder>;
  memberSince?: InputMaybe<SortOrder>;
  occupation?: InputMaybe<SortOrder>;
  phoneNumber?: InputMaybe<SortOrder>;
  pronouns?: InputMaybe<SortOrder>;
  recentActivity?: InputMaybe<SortOrder>;
  user?: InputMaybe<UserOrderByWithRelationAndSearchRelevanceInput>;
  userId?: InputMaybe<SortOrder>;
};

export type ProfileRelationFilter = {
  is?: InputMaybe<ProfileWhereInput>;
  isNot?: InputMaybe<ProfileWhereInput>;
};

export enum ProfileScalarFieldEnum {
  ActiviyFeed = "activiyFeed",
  Bio = "bio",
  City = "city",
  Country = "country",
  CoverPhoto = "coverPhoto",
  Dob = "dob",
  Gender = "gender",
  Id = "id",
  LastSeen = "lastSeen",
  MemberSince = "memberSince",
  Occupation = "occupation",
  PhoneNumber = "phoneNumber",
  Pronouns = "pronouns",
  RecentActivity = "recentActivity",
  UserId = "userId"
}

export type ProfileUpdateOneWithoutUserInput = {
  connect?: InputMaybe<ProfileWhereUniqueInput>;
  connectOrCreate?: InputMaybe<ProfileCreateOrConnectWithoutUserInput>;
  create?: InputMaybe<ProfileCreateWithoutUserInput>;
  delete?: InputMaybe<Scalars["Boolean"]>;
  disconnect?: InputMaybe<Scalars["Boolean"]>;
  update?: InputMaybe<ProfileUpdateWithoutUserInput>;
  upsert?: InputMaybe<ProfileUpsertWithoutUserInput>;
};

export type ProfileUpdateWithoutUserInput = {
  activiyFeed?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  bio?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  city?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  country?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  coverPhoto?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  dob?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  gender?: InputMaybe<NullableEnumGenderFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  lastSeen?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  memberSince?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  occupation?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  phoneNumber?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  pronouns?: InputMaybe<NullableEnumPronounsFieldUpdateOperationsInput>;
  recentActivity?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
};

export type ProfileUpsertWithoutUserInput = {
  create: ProfileCreateWithoutUserInput;
  update: ProfileUpdateWithoutUserInput;
};

export type ProfileWhereInput = {
  AND?: InputMaybe<Array<ProfileWhereInput>>;
  NOT?: InputMaybe<Array<ProfileWhereInput>>;
  OR?: InputMaybe<Array<ProfileWhereInput>>;
  activiyFeed?: InputMaybe<StringNullableFilter>;
  bio?: InputMaybe<StringNullableFilter>;
  city?: InputMaybe<StringNullableFilter>;
  country?: InputMaybe<StringNullableFilter>;
  coverPhoto?: InputMaybe<StringNullableFilter>;
  dob?: InputMaybe<StringNullableFilter>;
  gender?: InputMaybe<EnumGenderNullableFilter>;
  id?: InputMaybe<StringFilter>;
  lastSeen?: InputMaybe<DateTimeNullableFilter>;
  memberSince?: InputMaybe<DateTimeFilter>;
  occupation?: InputMaybe<StringNullableFilter>;
  phoneNumber?: InputMaybe<StringNullableFilter>;
  pronouns?: InputMaybe<EnumPronounsNullableFilter>;
  recentActivity?: InputMaybe<StringNullableFilter>;
  user?: InputMaybe<UserRelationFilter>;
  userId?: InputMaybe<StringFilter>;
};

export type ProfileWhereUniqueInput = {
  id?: InputMaybe<Scalars["String"]>;
  userId?: InputMaybe<Scalars["String"]>;
};

export enum Pronouns {
  HeHimHis = "HE_HIM_HIS",
  NotListed = "NOT_LISTED",
  PreferNotToSay = "PREFER_NOT_TO_SAY",
  SheHerHers = "SHE_HER_HERS",
  TheyThemTheirs = "THEY_THEM_THEIRS"
}

export type Query = {
  __typename?: "Query";
  categoryByRelayId: Category;
  commentByRelayId: Comment;
  comprehensiveConnectionUnion: Array<NodeUnion>;
  connectionByRelayId: Connection;
  contentNodesUnion: ContentNodes;
  decodeViewerTokenFromContext: AuthDetailed;
  entryById: Entry;
  findUniqueMediaItem: MediaItem;
  getUserFromAccessToken: User;
  getViewer: AuthDetailed;
  hello: Scalars["String"];
  helloWorld: Scalars["String"];
  listCategories: CategoryConnection;
  listComments: CommentConnection;
  listConnections: ConnectionConnection;
  listEntries: EntryConnection;
  listMediaItems: MediaItemConnection;
  listProfiles: ProfileConnection;
  listSessions: SessionConnection;
  listUsers: UserConnection;
  me: AuthDetailed;
  node?: Maybe<Node>;
  nodeUnionResolver: NodeUnionConnection;
  profileByRelayId: Profile;
  sessionByRelayId: Session;
  siftEntries: EntryConnection;
  userById: User;
  userByRelayId: User;
  userFromAccessTokenDecoded: AuthDetailed;
  viewer: ViewerDetailed;
  viewerAuthInfoFromContext: ViewerAuthInfo;
  viewerEntriesPaginated: EntryConnection;
};

export type QueryCategoryByRelayIdArgs = {
  cursor: Scalars["String"];
};

export type QueryCommentByRelayIdArgs = {
  cursor: Scalars["String"];
};

export type QueryConnectionByRelayIdArgs = {
  connectionCursor: Scalars["String"];
};

export type QueryContentNodesUnionArgs = {
  findManyEntriesPaginatedInput: FindManyEntriessPaginatedInput;
  findManyMediaItemsPaginated?: InputMaybe<FindManyMediaItemsPaginatedInput>;
  findManyUsersPaginatedInput?: InputMaybe<FindManyUsersPaginatedInput>;
};

export type QueryEntryByIdArgs = {
  id: Scalars["String"];
};

export type QueryFindUniqueMediaItemArgs = {
  mediaItemId: Scalars["String"];
};

export type QueryGetUserFromAccessTokenArgs = {
  token: Scalars["String"];
};

export type QueryHelloArgs = {
  name: Scalars["String"];
};

export type QueryListCategoriesArgs = {
  findManyCategoriesPaginatedInput: FindManyCategoriesPaginatedInput;
};

export type QueryListCommentsArgs = {
  findManyCommentsPaginatedInput: FindManyCommentsPaginatedInput;
};

export type QueryListConnectionsArgs = {
  findManyConnectionsPaginatedInput: FindManyConnectionsPaginatedInput;
};

export type QueryListEntriesArgs = {
  findManyEntriesPaginatedInput: FindManyEntriessPaginatedInput;
};

export type QueryListMediaItemsArgs = {
  findManyMediaItemsPaginated?: InputMaybe<FindManyMediaItemsPaginatedInput>;
};

export type QueryListProfilesArgs = {
  profilesArgs: FindManyProfilesPaginatedInput;
};

export type QueryListSessionsArgs = {
  findManySessionsPaginatedInput: FindManySessionsPaginatedInput;
};

export type QueryListUsersArgs = {
  findManyUsersPaginatedInput?: InputMaybe<FindManyUsersPaginatedInput>;
};

export type QueryNodeArgs = {
  id: Scalars["ID"];
};

export type QueryNodeUnionResolverArgs = {
  id: Scalars["String"];
  manyComments: FindManyCommentsPaginatedInput;
  manyEntries: FindManyEntriessPaginatedInput;
  manyMediaItems: FindManyMediaItemsPaginatedInput;
  manyProfiles: FindManyProfilesPaginatedInput;
  manySessions: FindManySessionsPaginatedInput;
  manyUsers: FindManyUsersPaginatedInput;
};

export type QuerySessionByRelayIdArgs = {
  cursor: Scalars["String"];
};

export type QuerySiftEntriesArgs = {
  entryFindManyInput: FindManyEntriessPaginatedInput;
};

export type QueryUserByIdArgs = {
  id: Scalars["String"];
};

export type QueryUserByRelayIdArgs = {
  cursor: Scalars["String"];
};

export type QueryUserFromAccessTokenDecodedArgs = {
  token: Scalars["String"];
};

export type QueryViewerEntriesPaginatedArgs = {
  viewerEntriesPaginatedInput: FindViewerEntriesPaginatedInput;
};

export enum QueryMode {
  Default = "default",
  Insensitive = "insensitive"
}

export enum Role {
  Admin = "ADMIN",
  Maintainer = "MAINTAINER",
  Superadmin = "SUPERADMIN",
  User = "USER"
}

export type Session = Node & {
  __typename?: "Session";
  accessToken?: Maybe<Scalars["String"]>;
  alg?: Maybe<Scalars["String"]>;
  exp?: Maybe<Scalars["Int"]>;
  iat?: Maybe<Scalars["Int"]>;
  id: Scalars["ID"];
  lastVerified?: Maybe<Scalars["DateTime"]>;
  provider?: Maybe<Scalars["String"]>;
  refreshToken?: Maybe<Scalars["String"]>;
  scopes?: Maybe<Array<Scalars["String"]>>;
  signature?: Maybe<Scalars["String"]>;
  tokenState?: Maybe<Scalars["String"]>;
  user?: Maybe<User>;
  userId: Scalars["String"];
};

export type SessionConnection = {
  __typename?: "SessionConnection";
  edges: Array<SessionEdge>;
  pageInfo: PageInfo;
  totalCount: Scalars["Int"];
};

export type SessionCreateManyUserInput = {
  accessToken?: InputMaybe<Scalars["String"]>;
  alg?: InputMaybe<Scalars["String"]>;
  exp?: InputMaybe<Scalars["Int"]>;
  iat?: InputMaybe<Scalars["Int"]>;
  id?: InputMaybe<Scalars["String"]>;
  lastVerified?: InputMaybe<Scalars["DateTime"]>;
  provider?: InputMaybe<Scalars["String"]>;
  refreshToken?: InputMaybe<Scalars["String"]>;
  scopes?: InputMaybe<SessionCreateManyscopesInput>;
  signature?: InputMaybe<Scalars["String"]>;
  tokenState?: InputMaybe<Scalars["String"]>;
};

export type SessionCreateManyUserInputEnvelope = {
  data: Array<SessionCreateManyUserInput>;
  skipDuplicates?: InputMaybe<Scalars["Boolean"]>;
};

export type SessionCreateManyscopesInput = {
  set: Array<Scalars["String"]>;
};

export type SessionCreateNestedManyWithoutUserInput = {
  connect?: InputMaybe<Array<SessionWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<
    Array<SessionCreateOrConnectWithoutUserInput>
  >;
  create?: InputMaybe<Array<SessionCreateWithoutUserInput>>;
  createMany?: InputMaybe<SessionCreateManyUserInputEnvelope>;
};

export type SessionCreateOrConnectWithoutUserInput = {
  create: SessionCreateWithoutUserInput;
  where: SessionWhereUniqueInput;
};

export type SessionCreateWithoutUserInput = {
  accessToken?: InputMaybe<Scalars["String"]>;
  alg?: InputMaybe<Scalars["String"]>;
  exp?: InputMaybe<Scalars["Int"]>;
  iat?: InputMaybe<Scalars["Int"]>;
  id?: InputMaybe<Scalars["String"]>;
  lastVerified?: InputMaybe<Scalars["DateTime"]>;
  provider?: InputMaybe<Scalars["String"]>;
  refreshToken?: InputMaybe<Scalars["String"]>;
  scopes?: InputMaybe<SessionCreatescopesInput>;
  signature?: InputMaybe<Scalars["String"]>;
  tokenState?: InputMaybe<Scalars["String"]>;
};

export type SessionCreatescopesInput = {
  set: Array<Scalars["String"]>;
};

export type SessionEdge = {
  __typename?: "SessionEdge";
  cursor: Scalars["String"];
  node: Session;
};

export type SessionListRelationFilter = {
  every?: InputMaybe<SessionWhereInput>;
  none?: InputMaybe<SessionWhereInput>;
  some?: InputMaybe<SessionWhereInput>;
};

export type SessionOrderByRelationAggregateInput = {
  _count?: InputMaybe<SortOrder>;
};

export enum SessionOrderByRelevanceFieldEnum {
  AccessToken = "accessToken",
  Alg = "alg",
  Id = "id",
  Provider = "provider",
  RefreshToken = "refreshToken",
  Scopes = "scopes",
  Signature = "signature",
  TokenState = "tokenState",
  UserId = "userId"
}

export type SessionOrderByRelevanceInput = {
  fields: Array<SessionOrderByRelevanceFieldEnum>;
  search: Scalars["String"];
  sort: SortOrder;
};

export type SessionOrderByWithRelationAndSearchRelevanceInput = {
  _relevance?: InputMaybe<SessionOrderByRelevanceInput>;
  accessToken?: InputMaybe<SortOrder>;
  alg?: InputMaybe<SortOrder>;
  exp?: InputMaybe<SortOrder>;
  iat?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  lastVerified?: InputMaybe<SortOrder>;
  provider?: InputMaybe<SortOrder>;
  refreshToken?: InputMaybe<SortOrder>;
  scopes?: InputMaybe<SortOrder>;
  signature?: InputMaybe<SortOrder>;
  tokenState?: InputMaybe<SortOrder>;
  user?: InputMaybe<UserOrderByWithRelationAndSearchRelevanceInput>;
  userId?: InputMaybe<SortOrder>;
};

export enum SessionScalarFieldEnum {
  AccessToken = "accessToken",
  Alg = "alg",
  Exp = "exp",
  Iat = "iat",
  Id = "id",
  LastVerified = "lastVerified",
  Provider = "provider",
  RefreshToken = "refreshToken",
  Scopes = "scopes",
  Signature = "signature",
  TokenState = "tokenState",
  UserId = "userId"
}

export type SessionScalarWhereInput = {
  AND?: InputMaybe<Array<SessionScalarWhereInput>>;
  NOT?: InputMaybe<Array<SessionScalarWhereInput>>;
  OR?: InputMaybe<Array<SessionScalarWhereInput>>;
  accessToken?: InputMaybe<StringNullableFilter>;
  alg?: InputMaybe<StringNullableFilter>;
  exp?: InputMaybe<IntNullableFilter>;
  iat?: InputMaybe<IntNullableFilter>;
  id?: InputMaybe<StringFilter>;
  lastVerified?: InputMaybe<DateTimeNullableFilter>;
  provider?: InputMaybe<StringNullableFilter>;
  refreshToken?: InputMaybe<StringNullableFilter>;
  scopes?: InputMaybe<StringNullableListFilter>;
  signature?: InputMaybe<StringNullableFilter>;
  tokenState?: InputMaybe<StringNullableFilter>;
  userId?: InputMaybe<StringFilter>;
};

export type SessionUpdateManyMutationInput = {
  accessToken?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  alg?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  exp?: InputMaybe<NullableIntFieldUpdateOperationsInput>;
  iat?: InputMaybe<NullableIntFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  lastVerified?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  provider?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  refreshToken?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  scopes?: InputMaybe<SessionUpdatescopesInput>;
  signature?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  tokenState?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
};

export type SessionUpdateManyWithWhereWithoutUserInput = {
  data: SessionUpdateManyMutationInput;
  where: SessionScalarWhereInput;
};

export type SessionUpdateManyWithoutUserInput = {
  connect?: InputMaybe<Array<SessionWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<
    Array<SessionCreateOrConnectWithoutUserInput>
  >;
  create?: InputMaybe<Array<SessionCreateWithoutUserInput>>;
  createMany?: InputMaybe<SessionCreateManyUserInputEnvelope>;
  delete?: InputMaybe<Array<SessionWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<SessionScalarWhereInput>>;
  disconnect?: InputMaybe<Array<SessionWhereUniqueInput>>;
  set?: InputMaybe<Array<SessionWhereUniqueInput>>;
  update?: InputMaybe<Array<SessionUpdateWithWhereUniqueWithoutUserInput>>;
  updateMany?: InputMaybe<
    Array<SessionUpdateManyWithWhereWithoutUserInput>
  >;
  upsert?: InputMaybe<Array<SessionUpsertWithWhereUniqueWithoutUserInput>>;
};

export type SessionUpdateWithWhereUniqueWithoutUserInput = {
  data: SessionUpdateWithoutUserInput;
  where: SessionWhereUniqueInput;
};

export type SessionUpdateWithoutUserInput = {
  accessToken?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  alg?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  exp?: InputMaybe<NullableIntFieldUpdateOperationsInput>;
  iat?: InputMaybe<NullableIntFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  lastVerified?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  provider?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  refreshToken?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  scopes?: InputMaybe<SessionUpdatescopesInput>;
  signature?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  tokenState?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
};

export type SessionUpdatescopesInput = {
  push?: InputMaybe<Array<Scalars["String"]>>;
  set?: InputMaybe<Array<Scalars["String"]>>;
};

export type SessionUpsertWithWhereUniqueWithoutUserInput = {
  create: SessionCreateWithoutUserInput;
  update: SessionUpdateWithoutUserInput;
  where: SessionWhereUniqueInput;
};

export type SessionWhereInput = {
  AND?: InputMaybe<Array<SessionWhereInput>>;
  NOT?: InputMaybe<Array<SessionWhereInput>>;
  OR?: InputMaybe<Array<SessionWhereInput>>;
  accessToken?: InputMaybe<StringNullableFilter>;
  alg?: InputMaybe<StringNullableFilter>;
  exp?: InputMaybe<IntNullableFilter>;
  iat?: InputMaybe<IntNullableFilter>;
  id?: InputMaybe<StringFilter>;
  lastVerified?: InputMaybe<DateTimeNullableFilter>;
  provider?: InputMaybe<StringNullableFilter>;
  refreshToken?: InputMaybe<StringNullableFilter>;
  scopes?: InputMaybe<StringNullableListFilter>;
  signature?: InputMaybe<StringNullableFilter>;
  tokenState?: InputMaybe<StringNullableFilter>;
  user?: InputMaybe<UserRelationFilter>;
  userId?: InputMaybe<StringFilter>;
};

export type SessionWhereUniqueInput = {
  id?: InputMaybe<Scalars["String"]>;
  userId?: InputMaybe<Scalars["String"]>;
};

export type SignupInput = {
  email: Scalars["String"];
  firstName?: InputMaybe<Scalars["String"]>;
  image?: InputMaybe<Scalars["String"]>;
  lastName?: InputMaybe<Scalars["String"]>;
  password: Scalars["String"];
};

export enum SortOrder {
  Asc = "asc",
  Desc = "desc"
}

export type StringFieldUpdateOperationsInput = {
  set?: InputMaybe<Scalars["String"]>;
};

export type StringFilter = {
  contains?: InputMaybe<Scalars["String"]>;
  endsWith?: InputMaybe<Scalars["String"]>;
  equals?: InputMaybe<Scalars["String"]>;
  gt?: InputMaybe<Scalars["String"]>;
  gte?: InputMaybe<Scalars["String"]>;
  in?: InputMaybe<Array<Scalars["String"]>>;
  lt?: InputMaybe<Scalars["String"]>;
  lte?: InputMaybe<Scalars["String"]>;
  mode?: InputMaybe<QueryMode>;
  not?: InputMaybe<NestedStringFilter>;
  notIn?: InputMaybe<Array<Scalars["String"]>>;
  search?: InputMaybe<Scalars["String"]>;
  startsWith?: InputMaybe<Scalars["String"]>;
};

export type StringNullableFilter = {
  contains?: InputMaybe<Scalars["String"]>;
  endsWith?: InputMaybe<Scalars["String"]>;
  equals?: InputMaybe<Scalars["String"]>;
  gt?: InputMaybe<Scalars["String"]>;
  gte?: InputMaybe<Scalars["String"]>;
  in?: InputMaybe<Array<Scalars["String"]>>;
  lt?: InputMaybe<Scalars["String"]>;
  lte?: InputMaybe<Scalars["String"]>;
  mode?: InputMaybe<QueryMode>;
  not?: InputMaybe<NestedStringNullableFilter>;
  notIn?: InputMaybe<Array<Scalars["String"]>>;
  search?: InputMaybe<Scalars["String"]>;
  startsWith?: InputMaybe<Scalars["String"]>;
};

export type StringNullableListFilter = {
  equals?: InputMaybe<Array<Scalars["String"]>>;
  has?: InputMaybe<Scalars["String"]>;
  hasEvery?: InputMaybe<Array<Scalars["String"]>>;
  hasSome?: InputMaybe<Array<Scalars["String"]>>;
  isEmpty?: InputMaybe<Scalars["Boolean"]>;
};

export type Subscription = {
  __typename?: "Subscription";
  entryCreated: Entry;
  profileCreated: Profile;
};

export type Token = {
  __typename?: "Token";
  /** JWT access token */
  accessToken?: Maybe<Scalars["String"]>;
  /** JWT refresh token */
  refreshToken?: Maybe<Scalars["String"]>;
};

export type TypesUnion = Entry | MediaItem | User;

export type User = Node & {
  __typename?: "User";
  _count?: Maybe<UserCount>;
  accounts?: Maybe<Array<Account>>;
  categories?: Maybe<Array<Category>>;
  comments?: Maybe<Array<Comment>>;
  connections?: Maybe<Array<Connection>>;
  /** Identifies the date and time when the user was created. */
  createdAt: Scalars["DateTime"];
  email: Scalars["String"];
  emailVerified?: Maybe<Scalars["DateTime"]>;
  entries?: Maybe<Array<Entry>>;
  firstName?: Maybe<Scalars["String"]>;
  id: Scalars["ID"];
  image?: Maybe<Scalars["String"]>;
  lastName?: Maybe<Scalars["String"]>;
  mediaItems?: Maybe<Array<MediaItem>>;
  password: Scalars["String"];
  profile?: Maybe<Profile>;
  role?: Maybe<Role>;
  sessions?: Maybe<Array<Session>>;
  status: UserStatus;
  /** Identifies the date and time when the user was last updated. */
  updatedAt?: Maybe<Scalars["DateTime"]>;
};

export type UserConnection = {
  __typename?: "UserConnection";
  edges: Array<UserEdge>;
  pageInfo: PageInfo;
  totalCount: Scalars["Int"];
};

export type UserCount = {
  __typename?: "UserCount";
  accounts: Scalars["Int"];
  categories: Scalars["Int"];
  comments: Scalars["Int"];
  connections: Scalars["Int"];
  entries: Scalars["Int"];
  mediaItems: Scalars["Int"];
  sessions: Scalars["Int"];
};

export type UserCreateMutationInput = {
  accounts?: InputMaybe<AccountCreateNestedManyWithoutUserInput>;
  categories?: InputMaybe<CategoryCreateNestedManyWithoutCreatorInput>;
  comments?: InputMaybe<CommentCreateNestedManyWithoutAuthorInput>;
  connections?: InputMaybe<ConnectionCreateNestedManyWithoutOwnerInput>;
  createdAt?: InputMaybe<Scalars["DateTime"]>;
  email: Scalars["String"];
  emailVerified?: InputMaybe<Scalars["DateTime"]>;
  entries?: InputMaybe<EntryCreateNestedManyWithoutAuthorInput>;
  firstName?: InputMaybe<Scalars["String"]>;
  id?: InputMaybe<Scalars["ID"]>;
  image?: InputMaybe<Scalars["String"]>;
  lastName?: InputMaybe<Scalars["String"]>;
  mediaItems?: InputMaybe<MediaItemCreateNestedManyWithoutUserInput>;
  password?: InputMaybe<Scalars["String"]>;
  profile?: InputMaybe<ProfileCreateNestedOneWithoutUserInput>;
  role?: InputMaybe<Role>;
  sessions?: InputMaybe<SessionCreateNestedManyWithoutUserInput>;
  status?: InputMaybe<UserStatus>;
  updatedAt?: InputMaybe<Scalars["DateTime"]>;
};

export type UserCreateNestedOneWithoutCategoriesInput = {
  connect?: InputMaybe<UserWhereUniqueInput>;
  connectOrCreate?: InputMaybe<UserCreateOrConnectWithoutCategoriesInput>;
  create?: InputMaybe<UserCreateWithoutCategoriesInput>;
};

export type UserCreateNestedOneWithoutCommentsInput = {
  connect?: InputMaybe<UserWhereUniqueInput>;
  connectOrCreate?: InputMaybe<UserCreateOrConnectWithoutCommentsInput>;
  create?: InputMaybe<UserCreateWithoutCommentsInput>;
};

export type UserCreateNestedOneWithoutEntriesInput = {
  connect?: InputMaybe<UserWhereUniqueInput>;
  connectOrCreate?: InputMaybe<UserCreateOrConnectWithoutEntriesInput>;
  create?: InputMaybe<UserCreateWithoutEntriesInput>;
};

export type UserCreateNestedOneWithoutProfileInput = {
  connect?: InputMaybe<UserWhereUniqueInput>;
  connectOrCreate?: InputMaybe<UserCreateOrConnectWithoutProfileInput>;
  create?: InputMaybe<UserCreateWithoutProfileInput>;
};

export type UserCreateOrConnectWithoutCategoriesInput = {
  create: UserCreateWithoutCategoriesInput;
  where: UserWhereUniqueInput;
};

export type UserCreateOrConnectWithoutCommentsInput = {
  create: UserCreateWithoutCommentsInput;
  where: UserWhereUniqueInput;
};

export type UserCreateOrConnectWithoutEntriesInput = {
  create: UserCreateWithoutEntriesInput;
  where: UserWhereUniqueInput;
};

export type UserCreateOrConnectWithoutProfileInput = {
  create: UserCreateWithoutProfileInput;
  where: UserWhereUniqueInput;
};

export type UserCreateWithoutCategoriesInput = {
  accounts?: InputMaybe<AccountCreateNestedManyWithoutUserInput>;
  comments?: InputMaybe<CommentCreateNestedManyWithoutAuthorInput>;
  connections?: InputMaybe<ConnectionCreateNestedManyWithoutOwnerInput>;
  createdAt?: InputMaybe<Scalars["DateTime"]>;
  email: Scalars["String"];
  emailVerified?: InputMaybe<Scalars["DateTime"]>;
  entries?: InputMaybe<EntryCreateNestedManyWithoutAuthorInput>;
  firstName?: InputMaybe<Scalars["String"]>;
  id?: InputMaybe<Scalars["String"]>;
  image?: InputMaybe<Scalars["String"]>;
  lastName?: InputMaybe<Scalars["String"]>;
  mediaItems?: InputMaybe<MediaItemCreateNestedManyWithoutUserInput>;
  password?: InputMaybe<Scalars["String"]>;
  profile?: InputMaybe<ProfileCreateNestedOneWithoutUserInput>;
  role?: InputMaybe<Role>;
  sessions?: InputMaybe<SessionCreateNestedManyWithoutUserInput>;
  status?: InputMaybe<UserStatus>;
  updatedAt?: InputMaybe<Scalars["DateTime"]>;
};

export type UserCreateWithoutCommentsInput = {
  accounts?: InputMaybe<AccountCreateNestedManyWithoutUserInput>;
  categories?: InputMaybe<CategoryCreateNestedManyWithoutCreatorInput>;
  connections?: InputMaybe<ConnectionCreateNestedManyWithoutOwnerInput>;
  createdAt?: InputMaybe<Scalars["DateTime"]>;
  email: Scalars["String"];
  emailVerified?: InputMaybe<Scalars["DateTime"]>;
  entries?: InputMaybe<EntryCreateNestedManyWithoutAuthorInput>;
  firstName?: InputMaybe<Scalars["String"]>;
  id?: InputMaybe<Scalars["String"]>;
  image?: InputMaybe<Scalars["String"]>;
  lastName?: InputMaybe<Scalars["String"]>;
  mediaItems?: InputMaybe<MediaItemCreateNestedManyWithoutUserInput>;
  password?: InputMaybe<Scalars["String"]>;
  profile?: InputMaybe<ProfileCreateNestedOneWithoutUserInput>;
  role?: InputMaybe<Role>;
  sessions?: InputMaybe<SessionCreateNestedManyWithoutUserInput>;
  status?: InputMaybe<UserStatus>;
  updatedAt?: InputMaybe<Scalars["DateTime"]>;
};

export type UserCreateWithoutEntriesInput = {
  accounts?: InputMaybe<AccountCreateNestedManyWithoutUserInput>;
  categories?: InputMaybe<CategoryCreateNestedManyWithoutCreatorInput>;
  comments?: InputMaybe<CommentCreateNestedManyWithoutAuthorInput>;
  connections?: InputMaybe<ConnectionCreateNestedManyWithoutOwnerInput>;
  createdAt?: InputMaybe<Scalars["DateTime"]>;
  email: Scalars["String"];
  emailVerified?: InputMaybe<Scalars["DateTime"]>;
  firstName?: InputMaybe<Scalars["String"]>;
  id?: InputMaybe<Scalars["String"]>;
  image?: InputMaybe<Scalars["String"]>;
  lastName?: InputMaybe<Scalars["String"]>;
  mediaItems?: InputMaybe<MediaItemCreateNestedManyWithoutUserInput>;
  password?: InputMaybe<Scalars["String"]>;
  profile?: InputMaybe<ProfileCreateNestedOneWithoutUserInput>;
  role?: InputMaybe<Role>;
  sessions?: InputMaybe<SessionCreateNestedManyWithoutUserInput>;
  status?: InputMaybe<UserStatus>;
  updatedAt?: InputMaybe<Scalars["DateTime"]>;
};

export type UserCreateWithoutProfileInput = {
  accounts?: InputMaybe<AccountCreateNestedManyWithoutUserInput>;
  categories?: InputMaybe<CategoryCreateNestedManyWithoutCreatorInput>;
  comments?: InputMaybe<CommentCreateNestedManyWithoutAuthorInput>;
  connections?: InputMaybe<ConnectionCreateNestedManyWithoutOwnerInput>;
  createdAt?: InputMaybe<Scalars["DateTime"]>;
  email: Scalars["String"];
  emailVerified?: InputMaybe<Scalars["DateTime"]>;
  entries?: InputMaybe<EntryCreateNestedManyWithoutAuthorInput>;
  firstName?: InputMaybe<Scalars["String"]>;
  id?: InputMaybe<Scalars["String"]>;
  image?: InputMaybe<Scalars["String"]>;
  lastName?: InputMaybe<Scalars["String"]>;
  mediaItems?: InputMaybe<MediaItemCreateNestedManyWithoutUserInput>;
  password?: InputMaybe<Scalars["String"]>;
  role?: InputMaybe<Role>;
  sessions?: InputMaybe<SessionCreateNestedManyWithoutUserInput>;
  status?: InputMaybe<UserStatus>;
  updatedAt?: InputMaybe<Scalars["DateTime"]>;
};

export type UserEdge = {
  __typename?: "UserEdge";
  cursor: Scalars["String"];
  node: User;
};

export enum UserOrderByRelevanceFieldEnum {
  Email = "email",
  FirstName = "firstName",
  Id = "id",
  Image = "image",
  LastName = "lastName",
  Password = "password"
}

export type UserOrderByRelevanceInput = {
  fields: Array<UserOrderByRelevanceFieldEnum>;
  search: Scalars["String"];
  sort: SortOrder;
};

export type UserOrderByWithRelationAndSearchRelevanceInput = {
  _relevance?: InputMaybe<UserOrderByRelevanceInput>;
  accounts?: InputMaybe<AccountOrderByRelationAggregateInput>;
  categories?: InputMaybe<CategoryOrderByRelationAggregateInput>;
  comments?: InputMaybe<CommentOrderByRelationAggregateInput>;
  connections?: InputMaybe<ConnectionOrderByRelationAggregateInput>;
  createdAt?: InputMaybe<SortOrder>;
  email?: InputMaybe<SortOrder>;
  emailVerified?: InputMaybe<SortOrder>;
  entries?: InputMaybe<EntryOrderByRelationAggregateInput>;
  firstName?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  image?: InputMaybe<SortOrder>;
  lastName?: InputMaybe<SortOrder>;
  mediaItems?: InputMaybe<MediaItemOrderByRelationAggregateInput>;
  password?: InputMaybe<SortOrder>;
  profile?: InputMaybe<ProfileOrderByWithRelationAndSearchRelevanceInput>;
  role?: InputMaybe<SortOrder>;
  sessions?: InputMaybe<SessionOrderByRelationAggregateInput>;
  status?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
};

export type UserRelationFilter = {
  is?: InputMaybe<UserWhereInput>;
  isNot?: InputMaybe<UserWhereInput>;
};

export enum UserScalarFieldEnum {
  CreatedAt = "createdAt",
  Email = "email",
  EmailVerified = "emailVerified",
  FirstName = "firstName",
  Id = "id",
  Image = "image",
  LastName = "lastName",
  Password = "password",
  Role = "role",
  Status = "status",
  UpdatedAt = "updatedAt"
}

export enum UserStatus {
  Banned = "BANNED",
  Deactivated = "DEACTIVATED",
  Deleted = "DELETED",
  Offline = "OFFLINE",
  Online = "ONLINE",
  Suspended = "SUSPENDED"
}

export type UserUpdateOneRequiredWithoutCategoriesInput = {
  connect?: InputMaybe<UserWhereUniqueInput>;
  connectOrCreate?: InputMaybe<UserCreateOrConnectWithoutCategoriesInput>;
  create?: InputMaybe<UserCreateWithoutCategoriesInput>;
  update?: InputMaybe<UserUpdateWithoutCategoriesInput>;
  upsert?: InputMaybe<UserUpsertWithoutCategoriesInput>;
};

export type UserUpdateOneRequiredWithoutCommentsInput = {
  connect?: InputMaybe<UserWhereUniqueInput>;
  connectOrCreate?: InputMaybe<UserCreateOrConnectWithoutCommentsInput>;
  create?: InputMaybe<UserCreateWithoutCommentsInput>;
  update?: InputMaybe<UserUpdateWithoutCommentsInput>;
  upsert?: InputMaybe<UserUpsertWithoutCommentsInput>;
};

export type UserUpdateOneRequiredWithoutEntriesInput = {
  connect?: InputMaybe<UserWhereUniqueInput>;
  connectOrCreate?: InputMaybe<UserCreateOrConnectWithoutEntriesInput>;
  create?: InputMaybe<UserCreateWithoutEntriesInput>;
  update?: InputMaybe<UserUpdateWithoutEntriesInput>;
  upsert?: InputMaybe<UserUpsertWithoutEntriesInput>;
};

export type UserUpdateWithoutCategoriesInput = {
  accounts?: InputMaybe<AccountUpdateManyWithoutUserInput>;
  comments?: InputMaybe<CommentUpdateManyWithoutAuthorInput>;
  connections?: InputMaybe<ConnectionUpdateManyWithoutOwnerInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  email?: InputMaybe<StringFieldUpdateOperationsInput>;
  emailVerified?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  entries?: InputMaybe<EntryUpdateManyWithoutAuthorInput>;
  firstName?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  image?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  lastName?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  mediaItems?: InputMaybe<MediaItemUpdateManyWithoutUserInput>;
  password?: InputMaybe<StringFieldUpdateOperationsInput>;
  profile?: InputMaybe<ProfileUpdateOneWithoutUserInput>;
  role?: InputMaybe<NullableEnumRoleFieldUpdateOperationsInput>;
  sessions?: InputMaybe<SessionUpdateManyWithoutUserInput>;
  status?: InputMaybe<NullableEnumUserStatusFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
};

export type UserUpdateWithoutCommentsInput = {
  accounts?: InputMaybe<AccountUpdateManyWithoutUserInput>;
  categories?: InputMaybe<CategoryUpdateManyWithoutCreatorInput>;
  connections?: InputMaybe<ConnectionUpdateManyWithoutOwnerInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  email?: InputMaybe<StringFieldUpdateOperationsInput>;
  emailVerified?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  entries?: InputMaybe<EntryUpdateManyWithoutAuthorInput>;
  firstName?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  image?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  lastName?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  mediaItems?: InputMaybe<MediaItemUpdateManyWithoutUserInput>;
  password?: InputMaybe<StringFieldUpdateOperationsInput>;
  profile?: InputMaybe<ProfileUpdateOneWithoutUserInput>;
  role?: InputMaybe<NullableEnumRoleFieldUpdateOperationsInput>;
  sessions?: InputMaybe<SessionUpdateManyWithoutUserInput>;
  status?: InputMaybe<NullableEnumUserStatusFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
};

export type UserUpdateWithoutEntriesInput = {
  accounts?: InputMaybe<AccountUpdateManyWithoutUserInput>;
  categories?: InputMaybe<CategoryUpdateManyWithoutCreatorInput>;
  comments?: InputMaybe<CommentUpdateManyWithoutAuthorInput>;
  connections?: InputMaybe<ConnectionUpdateManyWithoutOwnerInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  email?: InputMaybe<StringFieldUpdateOperationsInput>;
  emailVerified?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  firstName?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  image?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  lastName?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  mediaItems?: InputMaybe<MediaItemUpdateManyWithoutUserInput>;
  password?: InputMaybe<StringFieldUpdateOperationsInput>;
  profile?: InputMaybe<ProfileUpdateOneWithoutUserInput>;
  role?: InputMaybe<NullableEnumRoleFieldUpdateOperationsInput>;
  sessions?: InputMaybe<SessionUpdateManyWithoutUserInput>;
  status?: InputMaybe<NullableEnumUserStatusFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
};

export type UserUpsertWithoutCategoriesInput = {
  create: UserCreateWithoutCategoriesInput;
  update: UserUpdateWithoutCategoriesInput;
};

export type UserUpsertWithoutCommentsInput = {
  create: UserCreateWithoutCommentsInput;
  update: UserUpdateWithoutCommentsInput;
};

export type UserUpsertWithoutEntriesInput = {
  create: UserCreateWithoutEntriesInput;
  update: UserUpdateWithoutEntriesInput;
};

export type UserWhereInput = {
  AND?: InputMaybe<Array<UserWhereInput>>;
  NOT?: InputMaybe<Array<UserWhereInput>>;
  OR?: InputMaybe<Array<UserWhereInput>>;
  accounts?: InputMaybe<AccountListRelationFilter>;
  categories?: InputMaybe<CategoryListRelationFilter>;
  comments?: InputMaybe<CommentListRelationFilter>;
  connections?: InputMaybe<ConnectionListRelationFilter>;
  createdAt?: InputMaybe<DateTimeFilter>;
  email?: InputMaybe<StringFilter>;
  emailVerified?: InputMaybe<DateTimeNullableFilter>;
  entries?: InputMaybe<EntryListRelationFilter>;
  firstName?: InputMaybe<StringNullableFilter>;
  id?: InputMaybe<StringFilter>;
  image?: InputMaybe<StringNullableFilter>;
  lastName?: InputMaybe<StringNullableFilter>;
  mediaItems?: InputMaybe<MediaItemListRelationFilter>;
  password?: InputMaybe<StringFilter>;
  profile?: InputMaybe<ProfileRelationFilter>;
  role?: InputMaybe<EnumRoleNullableFilter>;
  sessions?: InputMaybe<SessionListRelationFilter>;
  status?: InputMaybe<EnumUserStatusNullableFilter>;
  updatedAt?: InputMaybe<DateTimeNullableFilter>;
};

export type UserWhereUniqueInput = {
  email?: InputMaybe<Scalars["String"]>;
  id?: InputMaybe<Scalars["String"]>;
};

export type ViewerAuthInfo = {
  __typename?: "ViewerAuthInfo";
  accessToken: Scalars["String"];
  refreshToken: Scalars["String"];
  viewerJwt: JwtDecoded;
};

export type ViewerDetailed = Node & {
  __typename?: "ViewerDetailed";
  _count?: Maybe<UserCount>;
  accessToken?: Maybe<Scalars["String"]>;
  accounts?: Maybe<Array<Account>>;
  categories?: Maybe<Array<Category>>;
  comments?: Maybe<Array<Comment>>;
  connections?: Maybe<Array<Connection>>;
  /** Identifies the date and time when the user was created. */
  createdAt: Scalars["DateTime"];
  email: Scalars["String"];
  emailVerified?: Maybe<Scalars["DateTime"]>;
  entries?: Maybe<Array<Entry>>;
  firstName?: Maybe<Scalars["String"]>;
  id: Scalars["ID"];
  image?: Maybe<Scalars["String"]>;
  lastName?: Maybe<Scalars["String"]>;
  mediaItems?: Maybe<Array<MediaItem>>;
  password: Scalars["String"];
  profile?: Maybe<Profile>;
  refreshToken?: Maybe<Scalars["String"]>;
  role?: Maybe<Role>;
  secret?: Maybe<Scalars["String"]>;
  sessions?: Maybe<Array<Session>>;
  status: UserStatus;
  /** Identifies the date and time when the user was last updated. */
  updatedAt?: Maybe<Scalars["DateTime"]>;
};

export type ViewerEntriesWhereInput = {
  AND?: InputMaybe<Array<ViewerEntriesWhereInput>>;
  NOT?: InputMaybe<Array<ViewerEntriesWhereInput>>;
  OR?: InputMaybe<Array<ViewerEntriesWhereInput>>;
  categories?: InputMaybe<CategoryListRelationFilter>;
  categoryId?: InputMaybe<StringNullableFilter>;
  comments?: InputMaybe<CommentListRelationFilter>;
  content?: InputMaybe<StringNullableFilter>;
  createdAt?: InputMaybe<DateTimeFilter>;
  featuredImage?: InputMaybe<StringNullableFilter>;
  id?: InputMaybe<StringFilter>;
  published?: InputMaybe<BoolFilter>;
  title?: InputMaybe<StringFilter>;
  updatedAt?: InputMaybe<DateTimeNullableFilter>;
};

export type WithIndex<TObject> = TObject & Record<string, any>;
export type ResolversObject<TObject> = WithIndex<TObject>;

export type ResolverTypeWrapper<T> = Promise<T> | T;

export type ResolverWithResolve<TResult, TParent, TContext, TArgs> = {
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};
export type Resolver<TResult, TParent = {}, TContext = {}, TArgs = {}> =
  | ResolverFn<TResult, TParent, TContext, TArgs>
  | ResolverWithResolve<TResult, TParent, TContext, TArgs>;

export type ResolverFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => Promise<TResult> | TResult;

export type SubscriptionSubscribeFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => AsyncIterable<TResult> | Promise<AsyncIterable<TResult>>;

export type SubscriptionResolveFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

export interface SubscriptionSubscriberObject<
  TResult,
  TKey extends string,
  TParent,
  TContext,
  TArgs
> {
  subscribe: SubscriptionSubscribeFn<
    { [key in TKey]: TResult },
    TParent,
    TContext,
    TArgs
  >;
  resolve?: SubscriptionResolveFn<
    TResult,
    { [key in TKey]: TResult },
    TContext,
    TArgs
  >;
}

export interface SubscriptionResolverObject<
  TResult,
  TParent,
  TContext,
  TArgs
> {
  subscribe: SubscriptionSubscribeFn<any, TParent, TContext, TArgs>;
  resolve: SubscriptionResolveFn<TResult, any, TContext, TArgs>;
}

export type SubscriptionObject<
  TResult,
  TKey extends string,
  TParent,
  TContext,
  TArgs
> =
  | SubscriptionSubscriberObject<TResult, TKey, TParent, TContext, TArgs>
  | SubscriptionResolverObject<TResult, TParent, TContext, TArgs>;

export type SubscriptionResolver<
  TResult,
  TKey extends string,
  TParent = {},
  TContext = {},
  TArgs = {}
> =
  | ((
      ...args: any[]
    ) => SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>)
  | SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>;

export type TypeResolveFn<TTypes, TParent = {}, TContext = {}> = (
  parent: TParent,
  context: TContext,
  info: GraphQLResolveInfo
) => Maybe<TTypes> | Promise<Maybe<TTypes>>;

export type IsTypeOfResolverFn<T = {}, TContext = {}> = (
  obj: T,
  context: TContext,
  info: GraphQLResolveInfo
) => boolean | Promise<boolean>;

export type NextResolverFn<T> = () => Promise<T>;

export type DirectiveResolverFn<
  TResult = {},
  TParent = {},
  TContext = {},
  TArgs = {}
> = (
  next: NextResolverFn<TResult>,
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

/** Mapping between all available schema types and the resolvers types */
export type ResolversTypes = ResolversObject<{
  Account: ResolverTypeWrapper<Account>;
  AccountCreateManyUserInput: AccountCreateManyUserInput;
  AccountCreateManyUserInputEnvelope: AccountCreateManyUserInputEnvelope;
  AccountCreateNestedManyWithoutUserInput: AccountCreateNestedManyWithoutUserInput;
  AccountCreateOrConnectWithoutUserInput: AccountCreateOrConnectWithoutUserInput;
  AccountCreateWithoutUserInput: AccountCreateWithoutUserInput;
  AccountListRelationFilter: AccountListRelationFilter;
  AccountOrderByRelationAggregateInput: AccountOrderByRelationAggregateInput;
  AccountProviderProviderAccountIdCompoundUniqueInput: AccountProviderProviderAccountIdCompoundUniqueInput;
  AccountScalarWhereInput: AccountScalarWhereInput;
  AccountUpdateManyMutationInput: AccountUpdateManyMutationInput;
  AccountUpdateManyWithWhereWithoutUserInput: AccountUpdateManyWithWhereWithoutUserInput;
  AccountUpdateManyWithoutUserInput: AccountUpdateManyWithoutUserInput;
  AccountUpdateWithWhereUniqueWithoutUserInput: AccountUpdateWithWhereUniqueWithoutUserInput;
  AccountUpdateWithoutUserInput: AccountUpdateWithoutUserInput;
  AccountUpsertWithWhereUniqueWithoutUserInput: AccountUpsertWithWhereUniqueWithoutUserInput;
  AccountWhereInput: AccountWhereInput;
  AccountWhereUniqueInput: AccountWhereUniqueInput;
  AlgorithmType: AlgorithmType;
  Auth: ResolverTypeWrapper<Auth>;
  AuthDetailed: ResolverTypeWrapper<AuthDetailed>;
  AuthSansSession: ResolverTypeWrapper<AuthSansSession>;
  BaseTypeNodes: ResolverTypeWrapper<
    Omit<BaseTypeNodes, "nodes"> & {
      nodes: Array<ResolversTypes["TypesUnion"]>;
    }
  >;
  BaseTypesEdge: ResolverTypeWrapper<
    Omit<BaseTypesEdge, "node"> & { node: ResolversTypes["TypesUnion"] }
  >;
  BigInt: ResolverTypeWrapper<Scalars["BigInt"]>;
  BoolFieldUpdateOperationsInput: BoolFieldUpdateOperationsInput;
  BoolFilter: BoolFilter;
  Boolean: ResolverTypeWrapper<Scalars["Boolean"]>;
  Category: ResolverTypeWrapper<Category>;
  CategoryConnection: ResolverTypeWrapper<CategoryConnection>;
  CategoryCount: ResolverTypeWrapper<CategoryCount>;
  CategoryCreateManyCreatorInput: CategoryCreateManyCreatorInput;
  CategoryCreateManyCreatorInputEnvelope: CategoryCreateManyCreatorInputEnvelope;
  CategoryCreateNestedManyWithoutCreatorInput: CategoryCreateNestedManyWithoutCreatorInput;
  CategoryCreateNestedManyWithoutEntriesInput: CategoryCreateNestedManyWithoutEntriesInput;
  CategoryCreateOrConnectWithoutCreatorInput: CategoryCreateOrConnectWithoutCreatorInput;
  CategoryCreateOrConnectWithoutEntriesInput: CategoryCreateOrConnectWithoutEntriesInput;
  CategoryCreateWithoutCreatorInput: CategoryCreateWithoutCreatorInput;
  CategoryCreateWithoutEntriesInput: CategoryCreateWithoutEntriesInput;
  CategoryEdge: ResolverTypeWrapper<CategoryEdge>;
  CategoryListRelationFilter: CategoryListRelationFilter;
  CategoryOrderByRelationAggregateInput: CategoryOrderByRelationAggregateInput;
  CategoryOrderByRelevanceFieldEnum: CategoryOrderByRelevanceFieldEnum;
  CategoryOrderByRelevanceInput: CategoryOrderByRelevanceInput;
  CategoryOrderByWithRelationAndSearchRelevanceInput: CategoryOrderByWithRelationAndSearchRelevanceInput;
  CategoryScalarFieldEnum: CategoryScalarFieldEnum;
  CategoryScalarWhereInput: CategoryScalarWhereInput;
  CategoryUpdateManyMutationInput: CategoryUpdateManyMutationInput;
  CategoryUpdateManyWithWhereWithoutCreatorInput: CategoryUpdateManyWithWhereWithoutCreatorInput;
  CategoryUpdateManyWithWhereWithoutEntriesInput: CategoryUpdateManyWithWhereWithoutEntriesInput;
  CategoryUpdateManyWithoutCreatorInput: CategoryUpdateManyWithoutCreatorInput;
  CategoryUpdateManyWithoutEntriesInput: CategoryUpdateManyWithoutEntriesInput;
  CategoryUpdateWithWhereUniqueWithoutCreatorInput: CategoryUpdateWithWhereUniqueWithoutCreatorInput;
  CategoryUpdateWithWhereUniqueWithoutEntriesInput: CategoryUpdateWithWhereUniqueWithoutEntriesInput;
  CategoryUpdateWithoutCreatorInput: CategoryUpdateWithoutCreatorInput;
  CategoryUpdateWithoutEntriesInput: CategoryUpdateWithoutEntriesInput;
  CategoryUpsertWithWhereUniqueWithoutCreatorInput: CategoryUpsertWithWhereUniqueWithoutCreatorInput;
  CategoryUpsertWithWhereUniqueWithoutEntriesInput: CategoryUpsertWithWhereUniqueWithoutEntriesInput;
  CategoryWhereInput: CategoryWhereInput;
  CategoryWhereUniqueInput: CategoryWhereUniqueInput;
  ChangePasswordInput: ChangePasswordInput;
  Comment: ResolverTypeWrapper<Comment>;
  CommentAuthorIdEntryIdCompoundUniqueInput: CommentAuthorIdEntryIdCompoundUniqueInput;
  CommentConnection: ResolverTypeWrapper<CommentConnection>;
  CommentCreateManyAuthorInput: CommentCreateManyAuthorInput;
  CommentCreateManyAuthorInputEnvelope: CommentCreateManyAuthorInputEnvelope;
  CommentCreateManyEntryInput: CommentCreateManyEntryInput;
  CommentCreateManyEntryInputEnvelope: CommentCreateManyEntryInputEnvelope;
  CommentCreateManyreactionsInput: CommentCreateManyreactionsInput;
  CommentCreateNestedManyWithoutAuthorInput: CommentCreateNestedManyWithoutAuthorInput;
  CommentCreateNestedManyWithoutEntryInput: CommentCreateNestedManyWithoutEntryInput;
  CommentCreateOrConnectWithoutAuthorInput: CommentCreateOrConnectWithoutAuthorInput;
  CommentCreateOrConnectWithoutEntryInput: CommentCreateOrConnectWithoutEntryInput;
  CommentCreateWithoutAuthorInput: CommentCreateWithoutAuthorInput;
  CommentCreateWithoutEntryInput: CommentCreateWithoutEntryInput;
  CommentCreatereactionsInput: CommentCreatereactionsInput;
  CommentEdge: ResolverTypeWrapper<CommentEdge>;
  CommentListRelationFilter: CommentListRelationFilter;
  CommentOrderByRelationAggregateInput: CommentOrderByRelationAggregateInput;
  CommentOrderByRelevanceFieldEnum: CommentOrderByRelevanceFieldEnum;
  CommentOrderByRelevanceInput: CommentOrderByRelevanceInput;
  CommentOrderByWithRelationAndSearchRelevanceInput: CommentOrderByWithRelationAndSearchRelevanceInput;
  CommentReactions: CommentReactions;
  CommentScalarFieldEnum: CommentScalarFieldEnum;
  CommentScalarWhereInput: CommentScalarWhereInput;
  CommentUpdateManyMutationInput: CommentUpdateManyMutationInput;
  CommentUpdateManyWithWhereWithoutAuthorInput: CommentUpdateManyWithWhereWithoutAuthorInput;
  CommentUpdateManyWithWhereWithoutEntryInput: CommentUpdateManyWithWhereWithoutEntryInput;
  CommentUpdateManyWithoutAuthorInput: CommentUpdateManyWithoutAuthorInput;
  CommentUpdateManyWithoutEntryInput: CommentUpdateManyWithoutEntryInput;
  CommentUpdateWithWhereUniqueWithoutAuthorInput: CommentUpdateWithWhereUniqueWithoutAuthorInput;
  CommentUpdateWithWhereUniqueWithoutEntryInput: CommentUpdateWithWhereUniqueWithoutEntryInput;
  CommentUpdateWithoutAuthorInput: CommentUpdateWithoutAuthorInput;
  CommentUpdateWithoutEntryInput: CommentUpdateWithoutEntryInput;
  CommentUpdatereactionsInput: CommentUpdatereactionsInput;
  CommentUpsertWithWhereUniqueWithoutAuthorInput: CommentUpsertWithWhereUniqueWithoutAuthorInput;
  CommentUpsertWithWhereUniqueWithoutEntryInput: CommentUpsertWithWhereUniqueWithoutEntryInput;
  CommentWhereInput: CommentWhereInput;
  CommentWhereUniqueInput: CommentWhereUniqueInput;
  Connection: ResolverTypeWrapper<Connection>;
  ConnectionConnection: ResolverTypeWrapper<ConnectionConnection>;
  ConnectionCreateManyOwnerInput: ConnectionCreateManyOwnerInput;
  ConnectionCreateManyOwnerInputEnvelope: ConnectionCreateManyOwnerInputEnvelope;
  ConnectionCreateNestedManyWithoutOwnerInput: ConnectionCreateNestedManyWithoutOwnerInput;
  ConnectionCreateOrConnectWithoutOwnerInput: ConnectionCreateOrConnectWithoutOwnerInput;
  ConnectionCreateWithoutOwnerInput: ConnectionCreateWithoutOwnerInput;
  ConnectionEdge: ResolverTypeWrapper<ConnectionEdge>;
  ConnectionListRelationFilter: ConnectionListRelationFilter;
  ConnectionOrderByRelationAggregateInput: ConnectionOrderByRelationAggregateInput;
  ConnectionOrderByRelevanceFieldEnum: ConnectionOrderByRelevanceFieldEnum;
  ConnectionOrderByRelevanceInput: ConnectionOrderByRelevanceInput;
  ConnectionOrderByWithRelationAndSearchRelevanceInput: ConnectionOrderByWithRelationAndSearchRelevanceInput;
  ConnectionScalarFieldEnum: ConnectionScalarFieldEnum;
  ConnectionScalarWhereInput: ConnectionScalarWhereInput;
  ConnectionUpdateManyMutationInput: ConnectionUpdateManyMutationInput;
  ConnectionUpdateManyWithWhereWithoutOwnerInput: ConnectionUpdateManyWithWhereWithoutOwnerInput;
  ConnectionUpdateManyWithoutOwnerInput: ConnectionUpdateManyWithoutOwnerInput;
  ConnectionUpdateWithWhereUniqueWithoutOwnerInput: ConnectionUpdateWithWhereUniqueWithoutOwnerInput;
  ConnectionUpdateWithoutOwnerInput: ConnectionUpdateWithoutOwnerInput;
  ConnectionUpsertWithWhereUniqueWithoutOwnerInput: ConnectionUpsertWithWhereUniqueWithoutOwnerInput;
  ConnectionWhereInput: ConnectionWhereInput;
  ConnectionWhereUniqueInput: ConnectionWhereUniqueInput;
  ContentNodes: ResolverTypeWrapper<ContentNodes>;
  DateTime: ResolverTypeWrapper<Scalars["DateTime"]>;
  DateTimeFieldUpdateOperationsInput: DateTimeFieldUpdateOperationsInput;
  DateTimeFilter: DateTimeFilter;
  DateTimeNullableFilter: DateTimeNullableFilter;
  Entry: ResolverTypeWrapper<Entry>;
  EntryConnection: ResolverTypeWrapper<EntryConnection>;
  EntryCount: ResolverTypeWrapper<EntryCount>;
  EntryCreateManyAuthorInput: EntryCreateManyAuthorInput;
  EntryCreateManyAuthorInputEnvelope: EntryCreateManyAuthorInputEnvelope;
  EntryCreateNestedManyWithoutAuthorInput: EntryCreateNestedManyWithoutAuthorInput;
  EntryCreateNestedManyWithoutCategoriesInput: EntryCreateNestedManyWithoutCategoriesInput;
  EntryCreateNestedOneWithoutCommentsInput: EntryCreateNestedOneWithoutCommentsInput;
  EntryCreateOrConnectWithoutAuthorInput: EntryCreateOrConnectWithoutAuthorInput;
  EntryCreateOrConnectWithoutCategoriesInput: EntryCreateOrConnectWithoutCategoriesInput;
  EntryCreateOrConnectWithoutCommentsInput: EntryCreateOrConnectWithoutCommentsInput;
  EntryCreateWithoutAuthorInput: EntryCreateWithoutAuthorInput;
  EntryCreateWithoutCategoriesInput: EntryCreateWithoutCategoriesInput;
  EntryCreateWithoutCommentsInput: EntryCreateWithoutCommentsInput;
  EntryEdge: ResolverTypeWrapper<EntryEdge>;
  EntryListRelationFilter: EntryListRelationFilter;
  EntryOrderByRelationAggregateInput: EntryOrderByRelationAggregateInput;
  EntryOrderByRelevanceFieldEnum: EntryOrderByRelevanceFieldEnum;
  EntryOrderByRelevanceInput: EntryOrderByRelevanceInput;
  EntryOrderByWithRelationAndSearchRelevanceInput: EntryOrderByWithRelationAndSearchRelevanceInput;
  EntryRelationFilter: EntryRelationFilter;
  EntryScalarFieldEnum: EntryScalarFieldEnum;
  EntryScalarWhereInput: EntryScalarWhereInput;
  EntryUncheckedCreateNestedManyWithoutAuthorInput: EntryUncheckedCreateNestedManyWithoutAuthorInput;
  EntryUpdateManyMutationInput: EntryUpdateManyMutationInput;
  EntryUpdateManyWithWhereWithoutAuthorInput: EntryUpdateManyWithWhereWithoutAuthorInput;
  EntryUpdateManyWithWhereWithoutCategoriesInput: EntryUpdateManyWithWhereWithoutCategoriesInput;
  EntryUpdateManyWithoutAuthorInput: EntryUpdateManyWithoutAuthorInput;
  EntryUpdateManyWithoutCategoriesInput: EntryUpdateManyWithoutCategoriesInput;
  EntryUpdateOneRequiredWithoutCommentsInput: EntryUpdateOneRequiredWithoutCommentsInput;
  EntryUpdateWithWhereUniqueWithoutAuthorInput: EntryUpdateWithWhereUniqueWithoutAuthorInput;
  EntryUpdateWithWhereUniqueWithoutCategoriesInput: EntryUpdateWithWhereUniqueWithoutCategoriesInput;
  EntryUpdateWithoutAuthorInput: EntryUpdateWithoutAuthorInput;
  EntryUpdateWithoutCategoriesInput: EntryUpdateWithoutCategoriesInput;
  EntryUpdateWithoutCommentsInput: EntryUpdateWithoutCommentsInput;
  EntryUpsertWithWhereUniqueWithoutAuthorInput: EntryUpsertWithWhereUniqueWithoutAuthorInput;
  EntryUpsertWithWhereUniqueWithoutCategoriesInput: EntryUpsertWithWhereUniqueWithoutCategoriesInput;
  EntryUpsertWithoutCommentsInput: EntryUpsertWithoutCommentsInput;
  EntryWhereInput: EntryWhereInput;
  EntryWhereUniqueInput: EntryWhereUniqueInput;
  EnumCommentReactionsNullableListFilter: EnumCommentReactionsNullableListFilter;
  EnumGenderNullableFilter: EnumGenderNullableFilter;
  EnumMediaItemDestinationNullableFilter: EnumMediaItemDestinationNullableFilter;
  EnumMimeTypesNullableFilter: EnumMimeTypesNullableFilter;
  EnumPronounsNullableFilter: EnumPronounsNullableFilter;
  EnumRoleNullableFilter: EnumRoleNullableFilter;
  EnumUserStatusNullableFilter: EnumUserStatusNullableFilter;
  FindManyCategoriesPaginatedInput: FindManyCategoriesPaginatedInput;
  FindManyCommentsPaginatedInput: FindManyCommentsPaginatedInput;
  FindManyConnectionsPaginatedInput: FindManyConnectionsPaginatedInput;
  FindManyEntriessPaginatedInput: FindManyEntriessPaginatedInput;
  FindManyMediaItemsPaginatedInput: FindManyMediaItemsPaginatedInput;
  FindManyProfilesPaginatedInput: FindManyProfilesPaginatedInput;
  FindManySessionsPaginatedInput: FindManySessionsPaginatedInput;
  FindManyUsersPaginatedInput: FindManyUsersPaginatedInput;
  FindViewerEntriesPaginatedInput: FindViewerEntriesPaginatedInput;
  Float: ResolverTypeWrapper<Scalars["Float"]>;
  FloatNullableFilter: FloatNullableFilter;
  Gender: Gender;
  ID: ResolverTypeWrapper<Scalars["ID"]>;
  Int: ResolverTypeWrapper<Scalars["Int"]>;
  IntNullableFilter: IntNullableFilter;
  JwtDecoded: ResolverTypeWrapper<JwtDecoded>;
  JwtHeaders: ResolverTypeWrapper<JwtHeaders>;
  JwtPayload: ResolverTypeWrapper<JwtPayload>;
  LoginInput: LoginInput;
  MediaItem: ResolverTypeWrapper<MediaItem>;
  MediaItemConnection: ResolverTypeWrapper<MediaItemConnection>;
  MediaItemCreateManyUserInput: MediaItemCreateManyUserInput;
  MediaItemCreateManyUserInputEnvelope: MediaItemCreateManyUserInputEnvelope;
  MediaItemCreateNestedManyWithoutUserInput: MediaItemCreateNestedManyWithoutUserInput;
  MediaItemCreateOrConnectWithoutUserInput: MediaItemCreateOrConnectWithoutUserInput;
  MediaItemCreateWithoutUserInput: MediaItemCreateWithoutUserInput;
  MediaItemDestination: MediaItemDestination;
  MediaItemEdge: ResolverTypeWrapper<MediaItemEdge>;
  MediaItemListRelationFilter: MediaItemListRelationFilter;
  MediaItemNameUserIdCompoundUniqueInput: MediaItemNameUserIdCompoundUniqueInput;
  MediaItemOrderByRelationAggregateInput: MediaItemOrderByRelationAggregateInput;
  MediaItemOrderByRelevanceFieldEnum: MediaItemOrderByRelevanceFieldEnum;
  MediaItemOrderByRelevanceInput: MediaItemOrderByRelevanceInput;
  MediaItemOrderByWithRelationAndSearchRelevanceInput: MediaItemOrderByWithRelationAndSearchRelevanceInput;
  MediaItemScalarFieldEnum: MediaItemScalarFieldEnum;
  MediaItemScalarWhereInput: MediaItemScalarWhereInput;
  MediaItemUpdateManyMutationInput: MediaItemUpdateManyMutationInput;
  MediaItemUpdateManyWithWhereWithoutUserInput: MediaItemUpdateManyWithWhereWithoutUserInput;
  MediaItemUpdateManyWithoutUserInput: MediaItemUpdateManyWithoutUserInput;
  MediaItemUpdateWithWhereUniqueWithoutUserInput: MediaItemUpdateWithWhereUniqueWithoutUserInput;
  MediaItemUpdateWithoutUserInput: MediaItemUpdateWithoutUserInput;
  MediaItemUpsertWithWhereUniqueWithoutUserInput: MediaItemUpsertWithWhereUniqueWithoutUserInput;
  MediaItemWhereInput: MediaItemWhereInput;
  MediaItemWhereUniqueInput: MediaItemWhereUniqueInput;
  MimeTypes: MimeTypes;
  Mutation: ResolverTypeWrapper<{}>;
  NestedBoolFilter: NestedBoolFilter;
  NestedDateTimeFilter: NestedDateTimeFilter;
  NestedDateTimeNullableFilter: NestedDateTimeNullableFilter;
  NestedEnumGenderNullableFilter: NestedEnumGenderNullableFilter;
  NestedEnumMediaItemDestinationNullableFilter: NestedEnumMediaItemDestinationNullableFilter;
  NestedEnumMimeTypesNullableFilter: NestedEnumMimeTypesNullableFilter;
  NestedEnumPronounsNullableFilter: NestedEnumPronounsNullableFilter;
  NestedEnumRoleNullableFilter: NestedEnumRoleNullableFilter;
  NestedEnumUserStatusNullableFilter: NestedEnumUserStatusNullableFilter;
  NestedFloatNullableFilter: NestedFloatNullableFilter;
  NestedIntNullableFilter: NestedIntNullableFilter;
  NestedStringFilter: NestedStringFilter;
  NestedStringNullableFilter: NestedStringNullableFilter;
  Node:
    | ResolversTypes["Account"]
    | ResolversTypes["Category"]
    | ResolversTypes["Comment"]
    | ResolversTypes["Connection"]
    | ResolversTypes["Entry"]
    | ResolversTypes["MediaItem"]
    | ResolversTypes["Profile"]
    | ResolversTypes["Session"]
    | ResolversTypes["User"]
    | ResolversTypes["ViewerDetailed"];
  NodeUnion:
    | ResolversTypes["CommentConnection"]
    | ResolversTypes["EntryConnection"]
    | ResolversTypes["MediaItemConnection"]
    | ResolversTypes["ProfileConnection"]
    | ResolversTypes["SessionConnection"]
    | ResolversTypes["UserConnection"];
  NodeUnionConnection: ResolverTypeWrapper<
    Omit<NodeUnionConnection, "edges"> & {
      edges: Array<ResolversTypes["NodeUnion"]>;
    }
  >;
  NullableDateTimeFieldUpdateOperationsInput: NullableDateTimeFieldUpdateOperationsInput;
  NullableEnumGenderFieldUpdateOperationsInput: NullableEnumGenderFieldUpdateOperationsInput;
  NullableEnumMediaItemDestinationFieldUpdateOperationsInput: NullableEnumMediaItemDestinationFieldUpdateOperationsInput;
  NullableEnumMimeTypesFieldUpdateOperationsInput: NullableEnumMimeTypesFieldUpdateOperationsInput;
  NullableEnumPronounsFieldUpdateOperationsInput: NullableEnumPronounsFieldUpdateOperationsInput;
  NullableEnumRoleFieldUpdateOperationsInput: NullableEnumRoleFieldUpdateOperationsInput;
  NullableEnumUserStatusFieldUpdateOperationsInput: NullableEnumUserStatusFieldUpdateOperationsInput;
  NullableFloatFieldUpdateOperationsInput: NullableFloatFieldUpdateOperationsInput;
  NullableIntFieldUpdateOperationsInput: NullableIntFieldUpdateOperationsInput;
  NullableStringFieldUpdateOperationsInput: NullableStringFieldUpdateOperationsInput;
  PageInfo: ResolverTypeWrapper<PageInfo>;
  PaginationArgsInput: PaginationArgsInput;
  PhoneNumber: ResolverTypeWrapper<Scalars["PhoneNumber"]>;
  Profile: ResolverTypeWrapper<Profile>;
  ProfileConnection: ResolverTypeWrapper<ProfileConnection>;
  ProfileCreateInput: ProfileCreateInput;
  ProfileCreateNestedOneWithoutUserInput: ProfileCreateNestedOneWithoutUserInput;
  ProfileCreateOrConnectWithoutUserInput: ProfileCreateOrConnectWithoutUserInput;
  ProfileCreateWithoutUserInput: ProfileCreateWithoutUserInput;
  ProfileEdge: ResolverTypeWrapper<ProfileEdge>;
  ProfileOrderByRelevanceFieldEnum: ProfileOrderByRelevanceFieldEnum;
  ProfileOrderByRelevanceInput: ProfileOrderByRelevanceInput;
  ProfileOrderByWithRelationAndSearchRelevanceInput: ProfileOrderByWithRelationAndSearchRelevanceInput;
  ProfileRelationFilter: ProfileRelationFilter;
  ProfileScalarFieldEnum: ProfileScalarFieldEnum;
  ProfileUpdateOneWithoutUserInput: ProfileUpdateOneWithoutUserInput;
  ProfileUpdateWithoutUserInput: ProfileUpdateWithoutUserInput;
  ProfileUpsertWithoutUserInput: ProfileUpsertWithoutUserInput;
  ProfileWhereInput: ProfileWhereInput;
  ProfileWhereUniqueInput: ProfileWhereUniqueInput;
  Pronouns: Pronouns;
  Query: ResolverTypeWrapper<{}>;
  QueryMode: QueryMode;
  Role: Role;
  Session: ResolverTypeWrapper<Session>;
  SessionConnection: ResolverTypeWrapper<SessionConnection>;
  SessionCreateManyUserInput: SessionCreateManyUserInput;
  SessionCreateManyUserInputEnvelope: SessionCreateManyUserInputEnvelope;
  SessionCreateManyscopesInput: SessionCreateManyscopesInput;
  SessionCreateNestedManyWithoutUserInput: SessionCreateNestedManyWithoutUserInput;
  SessionCreateOrConnectWithoutUserInput: SessionCreateOrConnectWithoutUserInput;
  SessionCreateWithoutUserInput: SessionCreateWithoutUserInput;
  SessionCreatescopesInput: SessionCreatescopesInput;
  SessionEdge: ResolverTypeWrapper<SessionEdge>;
  SessionListRelationFilter: SessionListRelationFilter;
  SessionOrderByRelationAggregateInput: SessionOrderByRelationAggregateInput;
  SessionOrderByRelevanceFieldEnum: SessionOrderByRelevanceFieldEnum;
  SessionOrderByRelevanceInput: SessionOrderByRelevanceInput;
  SessionOrderByWithRelationAndSearchRelevanceInput: SessionOrderByWithRelationAndSearchRelevanceInput;
  SessionScalarFieldEnum: SessionScalarFieldEnum;
  SessionScalarWhereInput: SessionScalarWhereInput;
  SessionUpdateManyMutationInput: SessionUpdateManyMutationInput;
  SessionUpdateManyWithWhereWithoutUserInput: SessionUpdateManyWithWhereWithoutUserInput;
  SessionUpdateManyWithoutUserInput: SessionUpdateManyWithoutUserInput;
  SessionUpdateWithWhereUniqueWithoutUserInput: SessionUpdateWithWhereUniqueWithoutUserInput;
  SessionUpdateWithoutUserInput: SessionUpdateWithoutUserInput;
  SessionUpdatescopesInput: SessionUpdatescopesInput;
  SessionUpsertWithWhereUniqueWithoutUserInput: SessionUpsertWithWhereUniqueWithoutUserInput;
  SessionWhereInput: SessionWhereInput;
  SessionWhereUniqueInput: SessionWhereUniqueInput;
  SignupInput: SignupInput;
  SortOrder: SortOrder;
  String: ResolverTypeWrapper<Scalars["String"]>;
  StringFieldUpdateOperationsInput: StringFieldUpdateOperationsInput;
  StringFilter: StringFilter;
  StringNullableFilter: StringNullableFilter;
  StringNullableListFilter: StringNullableListFilter;
  Subscription: ResolverTypeWrapper<{}>;
  Token: ResolverTypeWrapper<Token>;
  TypesUnion:
    | ResolversTypes["Entry"]
    | ResolversTypes["MediaItem"]
    | ResolversTypes["User"];
  User: ResolverTypeWrapper<User>;
  UserConnection: ResolverTypeWrapper<UserConnection>;
  UserCount: ResolverTypeWrapper<UserCount>;
  UserCreateMutationInput: UserCreateMutationInput;
  UserCreateNestedOneWithoutCategoriesInput: UserCreateNestedOneWithoutCategoriesInput;
  UserCreateNestedOneWithoutCommentsInput: UserCreateNestedOneWithoutCommentsInput;
  UserCreateNestedOneWithoutEntriesInput: UserCreateNestedOneWithoutEntriesInput;
  UserCreateNestedOneWithoutProfileInput: UserCreateNestedOneWithoutProfileInput;
  UserCreateOrConnectWithoutCategoriesInput: UserCreateOrConnectWithoutCategoriesInput;
  UserCreateOrConnectWithoutCommentsInput: UserCreateOrConnectWithoutCommentsInput;
  UserCreateOrConnectWithoutEntriesInput: UserCreateOrConnectWithoutEntriesInput;
  UserCreateOrConnectWithoutProfileInput: UserCreateOrConnectWithoutProfileInput;
  UserCreateWithoutCategoriesInput: UserCreateWithoutCategoriesInput;
  UserCreateWithoutCommentsInput: UserCreateWithoutCommentsInput;
  UserCreateWithoutEntriesInput: UserCreateWithoutEntriesInput;
  UserCreateWithoutProfileInput: UserCreateWithoutProfileInput;
  UserEdge: ResolverTypeWrapper<UserEdge>;
  UserOrderByRelevanceFieldEnum: UserOrderByRelevanceFieldEnum;
  UserOrderByRelevanceInput: UserOrderByRelevanceInput;
  UserOrderByWithRelationAndSearchRelevanceInput: UserOrderByWithRelationAndSearchRelevanceInput;
  UserRelationFilter: UserRelationFilter;
  UserScalarFieldEnum: UserScalarFieldEnum;
  UserStatus: UserStatus;
  UserUpdateOneRequiredWithoutCategoriesInput: UserUpdateOneRequiredWithoutCategoriesInput;
  UserUpdateOneRequiredWithoutCommentsInput: UserUpdateOneRequiredWithoutCommentsInput;
  UserUpdateOneRequiredWithoutEntriesInput: UserUpdateOneRequiredWithoutEntriesInput;
  UserUpdateWithoutCategoriesInput: UserUpdateWithoutCategoriesInput;
  UserUpdateWithoutCommentsInput: UserUpdateWithoutCommentsInput;
  UserUpdateWithoutEntriesInput: UserUpdateWithoutEntriesInput;
  UserUpsertWithoutCategoriesInput: UserUpsertWithoutCategoriesInput;
  UserUpsertWithoutCommentsInput: UserUpsertWithoutCommentsInput;
  UserUpsertWithoutEntriesInput: UserUpsertWithoutEntriesInput;
  UserWhereInput: UserWhereInput;
  UserWhereUniqueInput: UserWhereUniqueInput;
  ViewerAuthInfo: ResolverTypeWrapper<ViewerAuthInfo>;
  ViewerDetailed: ResolverTypeWrapper<ViewerDetailed>;
  ViewerEntriesWhereInput: ViewerEntriesWhereInput;
}>;

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = ResolversObject<{
  Account: Account;
  AccountCreateManyUserInput: AccountCreateManyUserInput;
  AccountCreateManyUserInputEnvelope: AccountCreateManyUserInputEnvelope;
  AccountCreateNestedManyWithoutUserInput: AccountCreateNestedManyWithoutUserInput;
  AccountCreateOrConnectWithoutUserInput: AccountCreateOrConnectWithoutUserInput;
  AccountCreateWithoutUserInput: AccountCreateWithoutUserInput;
  AccountListRelationFilter: AccountListRelationFilter;
  AccountOrderByRelationAggregateInput: AccountOrderByRelationAggregateInput;
  AccountProviderProviderAccountIdCompoundUniqueInput: AccountProviderProviderAccountIdCompoundUniqueInput;
  AccountScalarWhereInput: AccountScalarWhereInput;
  AccountUpdateManyMutationInput: AccountUpdateManyMutationInput;
  AccountUpdateManyWithWhereWithoutUserInput: AccountUpdateManyWithWhereWithoutUserInput;
  AccountUpdateManyWithoutUserInput: AccountUpdateManyWithoutUserInput;
  AccountUpdateWithWhereUniqueWithoutUserInput: AccountUpdateWithWhereUniqueWithoutUserInput;
  AccountUpdateWithoutUserInput: AccountUpdateWithoutUserInput;
  AccountUpsertWithWhereUniqueWithoutUserInput: AccountUpsertWithWhereUniqueWithoutUserInput;
  AccountWhereInput: AccountWhereInput;
  AccountWhereUniqueInput: AccountWhereUniqueInput;
  Auth: Auth;
  AuthDetailed: AuthDetailed;
  AuthSansSession: AuthSansSession;
  BaseTypeNodes: Omit<BaseTypeNodes, "nodes"> & {
    nodes: Array<ResolversParentTypes["TypesUnion"]>;
  };
  BaseTypesEdge: Omit<BaseTypesEdge, "node"> & {
    node: ResolversParentTypes["TypesUnion"];
  };
  BigInt: Scalars["BigInt"];
  BoolFieldUpdateOperationsInput: BoolFieldUpdateOperationsInput;
  BoolFilter: BoolFilter;
  Boolean: Scalars["Boolean"];
  Category: Category;
  CategoryConnection: CategoryConnection;
  CategoryCount: CategoryCount;
  CategoryCreateManyCreatorInput: CategoryCreateManyCreatorInput;
  CategoryCreateManyCreatorInputEnvelope: CategoryCreateManyCreatorInputEnvelope;
  CategoryCreateNestedManyWithoutCreatorInput: CategoryCreateNestedManyWithoutCreatorInput;
  CategoryCreateNestedManyWithoutEntriesInput: CategoryCreateNestedManyWithoutEntriesInput;
  CategoryCreateOrConnectWithoutCreatorInput: CategoryCreateOrConnectWithoutCreatorInput;
  CategoryCreateOrConnectWithoutEntriesInput: CategoryCreateOrConnectWithoutEntriesInput;
  CategoryCreateWithoutCreatorInput: CategoryCreateWithoutCreatorInput;
  CategoryCreateWithoutEntriesInput: CategoryCreateWithoutEntriesInput;
  CategoryEdge: CategoryEdge;
  CategoryListRelationFilter: CategoryListRelationFilter;
  CategoryOrderByRelationAggregateInput: CategoryOrderByRelationAggregateInput;
  CategoryOrderByRelevanceInput: CategoryOrderByRelevanceInput;
  CategoryOrderByWithRelationAndSearchRelevanceInput: CategoryOrderByWithRelationAndSearchRelevanceInput;
  CategoryScalarWhereInput: CategoryScalarWhereInput;
  CategoryUpdateManyMutationInput: CategoryUpdateManyMutationInput;
  CategoryUpdateManyWithWhereWithoutCreatorInput: CategoryUpdateManyWithWhereWithoutCreatorInput;
  CategoryUpdateManyWithWhereWithoutEntriesInput: CategoryUpdateManyWithWhereWithoutEntriesInput;
  CategoryUpdateManyWithoutCreatorInput: CategoryUpdateManyWithoutCreatorInput;
  CategoryUpdateManyWithoutEntriesInput: CategoryUpdateManyWithoutEntriesInput;
  CategoryUpdateWithWhereUniqueWithoutCreatorInput: CategoryUpdateWithWhereUniqueWithoutCreatorInput;
  CategoryUpdateWithWhereUniqueWithoutEntriesInput: CategoryUpdateWithWhereUniqueWithoutEntriesInput;
  CategoryUpdateWithoutCreatorInput: CategoryUpdateWithoutCreatorInput;
  CategoryUpdateWithoutEntriesInput: CategoryUpdateWithoutEntriesInput;
  CategoryUpsertWithWhereUniqueWithoutCreatorInput: CategoryUpsertWithWhereUniqueWithoutCreatorInput;
  CategoryUpsertWithWhereUniqueWithoutEntriesInput: CategoryUpsertWithWhereUniqueWithoutEntriesInput;
  CategoryWhereInput: CategoryWhereInput;
  CategoryWhereUniqueInput: CategoryWhereUniqueInput;
  ChangePasswordInput: ChangePasswordInput;
  Comment: Comment;
  CommentAuthorIdEntryIdCompoundUniqueInput: CommentAuthorIdEntryIdCompoundUniqueInput;
  CommentConnection: CommentConnection;
  CommentCreateManyAuthorInput: CommentCreateManyAuthorInput;
  CommentCreateManyAuthorInputEnvelope: CommentCreateManyAuthorInputEnvelope;
  CommentCreateManyEntryInput: CommentCreateManyEntryInput;
  CommentCreateManyEntryInputEnvelope: CommentCreateManyEntryInputEnvelope;
  CommentCreateManyreactionsInput: CommentCreateManyreactionsInput;
  CommentCreateNestedManyWithoutAuthorInput: CommentCreateNestedManyWithoutAuthorInput;
  CommentCreateNestedManyWithoutEntryInput: CommentCreateNestedManyWithoutEntryInput;
  CommentCreateOrConnectWithoutAuthorInput: CommentCreateOrConnectWithoutAuthorInput;
  CommentCreateOrConnectWithoutEntryInput: CommentCreateOrConnectWithoutEntryInput;
  CommentCreateWithoutAuthorInput: CommentCreateWithoutAuthorInput;
  CommentCreateWithoutEntryInput: CommentCreateWithoutEntryInput;
  CommentCreatereactionsInput: CommentCreatereactionsInput;
  CommentEdge: CommentEdge;
  CommentListRelationFilter: CommentListRelationFilter;
  CommentOrderByRelationAggregateInput: CommentOrderByRelationAggregateInput;
  CommentOrderByRelevanceInput: CommentOrderByRelevanceInput;
  CommentOrderByWithRelationAndSearchRelevanceInput: CommentOrderByWithRelationAndSearchRelevanceInput;
  CommentScalarWhereInput: CommentScalarWhereInput;
  CommentUpdateManyMutationInput: CommentUpdateManyMutationInput;
  CommentUpdateManyWithWhereWithoutAuthorInput: CommentUpdateManyWithWhereWithoutAuthorInput;
  CommentUpdateManyWithWhereWithoutEntryInput: CommentUpdateManyWithWhereWithoutEntryInput;
  CommentUpdateManyWithoutAuthorInput: CommentUpdateManyWithoutAuthorInput;
  CommentUpdateManyWithoutEntryInput: CommentUpdateManyWithoutEntryInput;
  CommentUpdateWithWhereUniqueWithoutAuthorInput: CommentUpdateWithWhereUniqueWithoutAuthorInput;
  CommentUpdateWithWhereUniqueWithoutEntryInput: CommentUpdateWithWhereUniqueWithoutEntryInput;
  CommentUpdateWithoutAuthorInput: CommentUpdateWithoutAuthorInput;
  CommentUpdateWithoutEntryInput: CommentUpdateWithoutEntryInput;
  CommentUpdatereactionsInput: CommentUpdatereactionsInput;
  CommentUpsertWithWhereUniqueWithoutAuthorInput: CommentUpsertWithWhereUniqueWithoutAuthorInput;
  CommentUpsertWithWhereUniqueWithoutEntryInput: CommentUpsertWithWhereUniqueWithoutEntryInput;
  CommentWhereInput: CommentWhereInput;
  CommentWhereUniqueInput: CommentWhereUniqueInput;
  Connection: Connection;
  ConnectionConnection: ConnectionConnection;
  ConnectionCreateManyOwnerInput: ConnectionCreateManyOwnerInput;
  ConnectionCreateManyOwnerInputEnvelope: ConnectionCreateManyOwnerInputEnvelope;
  ConnectionCreateNestedManyWithoutOwnerInput: ConnectionCreateNestedManyWithoutOwnerInput;
  ConnectionCreateOrConnectWithoutOwnerInput: ConnectionCreateOrConnectWithoutOwnerInput;
  ConnectionCreateWithoutOwnerInput: ConnectionCreateWithoutOwnerInput;
  ConnectionEdge: ConnectionEdge;
  ConnectionListRelationFilter: ConnectionListRelationFilter;
  ConnectionOrderByRelationAggregateInput: ConnectionOrderByRelationAggregateInput;
  ConnectionOrderByRelevanceInput: ConnectionOrderByRelevanceInput;
  ConnectionOrderByWithRelationAndSearchRelevanceInput: ConnectionOrderByWithRelationAndSearchRelevanceInput;
  ConnectionScalarWhereInput: ConnectionScalarWhereInput;
  ConnectionUpdateManyMutationInput: ConnectionUpdateManyMutationInput;
  ConnectionUpdateManyWithWhereWithoutOwnerInput: ConnectionUpdateManyWithWhereWithoutOwnerInput;
  ConnectionUpdateManyWithoutOwnerInput: ConnectionUpdateManyWithoutOwnerInput;
  ConnectionUpdateWithWhereUniqueWithoutOwnerInput: ConnectionUpdateWithWhereUniqueWithoutOwnerInput;
  ConnectionUpdateWithoutOwnerInput: ConnectionUpdateWithoutOwnerInput;
  ConnectionUpsertWithWhereUniqueWithoutOwnerInput: ConnectionUpsertWithWhereUniqueWithoutOwnerInput;
  ConnectionWhereInput: ConnectionWhereInput;
  ConnectionWhereUniqueInput: ConnectionWhereUniqueInput;
  ContentNodes: ContentNodes;
  DateTime: Scalars["DateTime"];
  DateTimeFieldUpdateOperationsInput: DateTimeFieldUpdateOperationsInput;
  DateTimeFilter: DateTimeFilter;
  DateTimeNullableFilter: DateTimeNullableFilter;
  Entry: Entry;
  EntryConnection: EntryConnection;
  EntryCount: EntryCount;
  EntryCreateManyAuthorInput: EntryCreateManyAuthorInput;
  EntryCreateManyAuthorInputEnvelope: EntryCreateManyAuthorInputEnvelope;
  EntryCreateNestedManyWithoutAuthorInput: EntryCreateNestedManyWithoutAuthorInput;
  EntryCreateNestedManyWithoutCategoriesInput: EntryCreateNestedManyWithoutCategoriesInput;
  EntryCreateNestedOneWithoutCommentsInput: EntryCreateNestedOneWithoutCommentsInput;
  EntryCreateOrConnectWithoutAuthorInput: EntryCreateOrConnectWithoutAuthorInput;
  EntryCreateOrConnectWithoutCategoriesInput: EntryCreateOrConnectWithoutCategoriesInput;
  EntryCreateOrConnectWithoutCommentsInput: EntryCreateOrConnectWithoutCommentsInput;
  EntryCreateWithoutAuthorInput: EntryCreateWithoutAuthorInput;
  EntryCreateWithoutCategoriesInput: EntryCreateWithoutCategoriesInput;
  EntryCreateWithoutCommentsInput: EntryCreateWithoutCommentsInput;
  EntryEdge: EntryEdge;
  EntryListRelationFilter: EntryListRelationFilter;
  EntryOrderByRelationAggregateInput: EntryOrderByRelationAggregateInput;
  EntryOrderByRelevanceInput: EntryOrderByRelevanceInput;
  EntryOrderByWithRelationAndSearchRelevanceInput: EntryOrderByWithRelationAndSearchRelevanceInput;
  EntryRelationFilter: EntryRelationFilter;
  EntryScalarWhereInput: EntryScalarWhereInput;
  EntryUncheckedCreateNestedManyWithoutAuthorInput: EntryUncheckedCreateNestedManyWithoutAuthorInput;
  EntryUpdateManyMutationInput: EntryUpdateManyMutationInput;
  EntryUpdateManyWithWhereWithoutAuthorInput: EntryUpdateManyWithWhereWithoutAuthorInput;
  EntryUpdateManyWithWhereWithoutCategoriesInput: EntryUpdateManyWithWhereWithoutCategoriesInput;
  EntryUpdateManyWithoutAuthorInput: EntryUpdateManyWithoutAuthorInput;
  EntryUpdateManyWithoutCategoriesInput: EntryUpdateManyWithoutCategoriesInput;
  EntryUpdateOneRequiredWithoutCommentsInput: EntryUpdateOneRequiredWithoutCommentsInput;
  EntryUpdateWithWhereUniqueWithoutAuthorInput: EntryUpdateWithWhereUniqueWithoutAuthorInput;
  EntryUpdateWithWhereUniqueWithoutCategoriesInput: EntryUpdateWithWhereUniqueWithoutCategoriesInput;
  EntryUpdateWithoutAuthorInput: EntryUpdateWithoutAuthorInput;
  EntryUpdateWithoutCategoriesInput: EntryUpdateWithoutCategoriesInput;
  EntryUpdateWithoutCommentsInput: EntryUpdateWithoutCommentsInput;
  EntryUpsertWithWhereUniqueWithoutAuthorInput: EntryUpsertWithWhereUniqueWithoutAuthorInput;
  EntryUpsertWithWhereUniqueWithoutCategoriesInput: EntryUpsertWithWhereUniqueWithoutCategoriesInput;
  EntryUpsertWithoutCommentsInput: EntryUpsertWithoutCommentsInput;
  EntryWhereInput: EntryWhereInput;
  EntryWhereUniqueInput: EntryWhereUniqueInput;
  EnumCommentReactionsNullableListFilter: EnumCommentReactionsNullableListFilter;
  EnumGenderNullableFilter: EnumGenderNullableFilter;
  EnumMediaItemDestinationNullableFilter: EnumMediaItemDestinationNullableFilter;
  EnumMimeTypesNullableFilter: EnumMimeTypesNullableFilter;
  EnumPronounsNullableFilter: EnumPronounsNullableFilter;
  EnumRoleNullableFilter: EnumRoleNullableFilter;
  EnumUserStatusNullableFilter: EnumUserStatusNullableFilter;
  FindManyCategoriesPaginatedInput: FindManyCategoriesPaginatedInput;
  FindManyCommentsPaginatedInput: FindManyCommentsPaginatedInput;
  FindManyConnectionsPaginatedInput: FindManyConnectionsPaginatedInput;
  FindManyEntriessPaginatedInput: FindManyEntriessPaginatedInput;
  FindManyMediaItemsPaginatedInput: FindManyMediaItemsPaginatedInput;
  FindManyProfilesPaginatedInput: FindManyProfilesPaginatedInput;
  FindManySessionsPaginatedInput: FindManySessionsPaginatedInput;
  FindManyUsersPaginatedInput: FindManyUsersPaginatedInput;
  FindViewerEntriesPaginatedInput: FindViewerEntriesPaginatedInput;
  Float: Scalars["Float"];
  FloatNullableFilter: FloatNullableFilter;
  ID: Scalars["ID"];
  Int: Scalars["Int"];
  IntNullableFilter: IntNullableFilter;
  JwtDecoded: JwtDecoded;
  JwtHeaders: JwtHeaders;
  JwtPayload: JwtPayload;
  LoginInput: LoginInput;
  MediaItem: MediaItem;
  MediaItemConnection: MediaItemConnection;
  MediaItemCreateManyUserInput: MediaItemCreateManyUserInput;
  MediaItemCreateManyUserInputEnvelope: MediaItemCreateManyUserInputEnvelope;
  MediaItemCreateNestedManyWithoutUserInput: MediaItemCreateNestedManyWithoutUserInput;
  MediaItemCreateOrConnectWithoutUserInput: MediaItemCreateOrConnectWithoutUserInput;
  MediaItemCreateWithoutUserInput: MediaItemCreateWithoutUserInput;
  MediaItemEdge: MediaItemEdge;
  MediaItemListRelationFilter: MediaItemListRelationFilter;
  MediaItemNameUserIdCompoundUniqueInput: MediaItemNameUserIdCompoundUniqueInput;
  MediaItemOrderByRelationAggregateInput: MediaItemOrderByRelationAggregateInput;
  MediaItemOrderByRelevanceInput: MediaItemOrderByRelevanceInput;
  MediaItemOrderByWithRelationAndSearchRelevanceInput: MediaItemOrderByWithRelationAndSearchRelevanceInput;
  MediaItemScalarWhereInput: MediaItemScalarWhereInput;
  MediaItemUpdateManyMutationInput: MediaItemUpdateManyMutationInput;
  MediaItemUpdateManyWithWhereWithoutUserInput: MediaItemUpdateManyWithWhereWithoutUserInput;
  MediaItemUpdateManyWithoutUserInput: MediaItemUpdateManyWithoutUserInput;
  MediaItemUpdateWithWhereUniqueWithoutUserInput: MediaItemUpdateWithWhereUniqueWithoutUserInput;
  MediaItemUpdateWithoutUserInput: MediaItemUpdateWithoutUserInput;
  MediaItemUpsertWithWhereUniqueWithoutUserInput: MediaItemUpsertWithWhereUniqueWithoutUserInput;
  MediaItemWhereInput: MediaItemWhereInput;
  MediaItemWhereUniqueInput: MediaItemWhereUniqueInput;
  Mutation: {};
  NestedBoolFilter: NestedBoolFilter;
  NestedDateTimeFilter: NestedDateTimeFilter;
  NestedDateTimeNullableFilter: NestedDateTimeNullableFilter;
  NestedEnumGenderNullableFilter: NestedEnumGenderNullableFilter;
  NestedEnumMediaItemDestinationNullableFilter: NestedEnumMediaItemDestinationNullableFilter;
  NestedEnumMimeTypesNullableFilter: NestedEnumMimeTypesNullableFilter;
  NestedEnumPronounsNullableFilter: NestedEnumPronounsNullableFilter;
  NestedEnumRoleNullableFilter: NestedEnumRoleNullableFilter;
  NestedEnumUserStatusNullableFilter: NestedEnumUserStatusNullableFilter;
  NestedFloatNullableFilter: NestedFloatNullableFilter;
  NestedIntNullableFilter: NestedIntNullableFilter;
  NestedStringFilter: NestedStringFilter;
  NestedStringNullableFilter: NestedStringNullableFilter;
  Node:
    | ResolversParentTypes["Account"]
    | ResolversParentTypes["Category"]
    | ResolversParentTypes["Comment"]
    | ResolversParentTypes["Connection"]
    | ResolversParentTypes["Entry"]
    | ResolversParentTypes["MediaItem"]
    | ResolversParentTypes["Profile"]
    | ResolversParentTypes["Session"]
    | ResolversParentTypes["User"]
    | ResolversParentTypes["ViewerDetailed"];
  NodeUnion:
    | ResolversParentTypes["CommentConnection"]
    | ResolversParentTypes["EntryConnection"]
    | ResolversParentTypes["MediaItemConnection"]
    | ResolversParentTypes["ProfileConnection"]
    | ResolversParentTypes["SessionConnection"]
    | ResolversParentTypes["UserConnection"];
  NodeUnionConnection: Omit<NodeUnionConnection, "edges"> & {
    edges: Array<ResolversParentTypes["NodeUnion"]>;
  };
  NullableDateTimeFieldUpdateOperationsInput: NullableDateTimeFieldUpdateOperationsInput;
  NullableEnumGenderFieldUpdateOperationsInput: NullableEnumGenderFieldUpdateOperationsInput;
  NullableEnumMediaItemDestinationFieldUpdateOperationsInput: NullableEnumMediaItemDestinationFieldUpdateOperationsInput;
  NullableEnumMimeTypesFieldUpdateOperationsInput: NullableEnumMimeTypesFieldUpdateOperationsInput;
  NullableEnumPronounsFieldUpdateOperationsInput: NullableEnumPronounsFieldUpdateOperationsInput;
  NullableEnumRoleFieldUpdateOperationsInput: NullableEnumRoleFieldUpdateOperationsInput;
  NullableEnumUserStatusFieldUpdateOperationsInput: NullableEnumUserStatusFieldUpdateOperationsInput;
  NullableFloatFieldUpdateOperationsInput: NullableFloatFieldUpdateOperationsInput;
  NullableIntFieldUpdateOperationsInput: NullableIntFieldUpdateOperationsInput;
  NullableStringFieldUpdateOperationsInput: NullableStringFieldUpdateOperationsInput;
  PageInfo: PageInfo;
  PaginationArgsInput: PaginationArgsInput;
  PhoneNumber: Scalars["PhoneNumber"];
  Profile: Profile;
  ProfileConnection: ProfileConnection;
  ProfileCreateInput: ProfileCreateInput;
  ProfileCreateNestedOneWithoutUserInput: ProfileCreateNestedOneWithoutUserInput;
  ProfileCreateOrConnectWithoutUserInput: ProfileCreateOrConnectWithoutUserInput;
  ProfileCreateWithoutUserInput: ProfileCreateWithoutUserInput;
  ProfileEdge: ProfileEdge;
  ProfileOrderByRelevanceInput: ProfileOrderByRelevanceInput;
  ProfileOrderByWithRelationAndSearchRelevanceInput: ProfileOrderByWithRelationAndSearchRelevanceInput;
  ProfileRelationFilter: ProfileRelationFilter;
  ProfileUpdateOneWithoutUserInput: ProfileUpdateOneWithoutUserInput;
  ProfileUpdateWithoutUserInput: ProfileUpdateWithoutUserInput;
  ProfileUpsertWithoutUserInput: ProfileUpsertWithoutUserInput;
  ProfileWhereInput: ProfileWhereInput;
  ProfileWhereUniqueInput: ProfileWhereUniqueInput;
  Query: {};
  Session: Session;
  SessionConnection: SessionConnection;
  SessionCreateManyUserInput: SessionCreateManyUserInput;
  SessionCreateManyUserInputEnvelope: SessionCreateManyUserInputEnvelope;
  SessionCreateManyscopesInput: SessionCreateManyscopesInput;
  SessionCreateNestedManyWithoutUserInput: SessionCreateNestedManyWithoutUserInput;
  SessionCreateOrConnectWithoutUserInput: SessionCreateOrConnectWithoutUserInput;
  SessionCreateWithoutUserInput: SessionCreateWithoutUserInput;
  SessionCreatescopesInput: SessionCreatescopesInput;
  SessionEdge: SessionEdge;
  SessionListRelationFilter: SessionListRelationFilter;
  SessionOrderByRelationAggregateInput: SessionOrderByRelationAggregateInput;
  SessionOrderByRelevanceInput: SessionOrderByRelevanceInput;
  SessionOrderByWithRelationAndSearchRelevanceInput: SessionOrderByWithRelationAndSearchRelevanceInput;
  SessionScalarWhereInput: SessionScalarWhereInput;
  SessionUpdateManyMutationInput: SessionUpdateManyMutationInput;
  SessionUpdateManyWithWhereWithoutUserInput: SessionUpdateManyWithWhereWithoutUserInput;
  SessionUpdateManyWithoutUserInput: SessionUpdateManyWithoutUserInput;
  SessionUpdateWithWhereUniqueWithoutUserInput: SessionUpdateWithWhereUniqueWithoutUserInput;
  SessionUpdateWithoutUserInput: SessionUpdateWithoutUserInput;
  SessionUpdatescopesInput: SessionUpdatescopesInput;
  SessionUpsertWithWhereUniqueWithoutUserInput: SessionUpsertWithWhereUniqueWithoutUserInput;
  SessionWhereInput: SessionWhereInput;
  SessionWhereUniqueInput: SessionWhereUniqueInput;
  SignupInput: SignupInput;
  String: Scalars["String"];
  StringFieldUpdateOperationsInput: StringFieldUpdateOperationsInput;
  StringFilter: StringFilter;
  StringNullableFilter: StringNullableFilter;
  StringNullableListFilter: StringNullableListFilter;
  Subscription: {};
  Token: Token;
  TypesUnion:
    | ResolversParentTypes["Entry"]
    | ResolversParentTypes["MediaItem"]
    | ResolversParentTypes["User"];
  User: User;
  UserConnection: UserConnection;
  UserCount: UserCount;
  UserCreateMutationInput: UserCreateMutationInput;
  UserCreateNestedOneWithoutCategoriesInput: UserCreateNestedOneWithoutCategoriesInput;
  UserCreateNestedOneWithoutCommentsInput: UserCreateNestedOneWithoutCommentsInput;
  UserCreateNestedOneWithoutEntriesInput: UserCreateNestedOneWithoutEntriesInput;
  UserCreateNestedOneWithoutProfileInput: UserCreateNestedOneWithoutProfileInput;
  UserCreateOrConnectWithoutCategoriesInput: UserCreateOrConnectWithoutCategoriesInput;
  UserCreateOrConnectWithoutCommentsInput: UserCreateOrConnectWithoutCommentsInput;
  UserCreateOrConnectWithoutEntriesInput: UserCreateOrConnectWithoutEntriesInput;
  UserCreateOrConnectWithoutProfileInput: UserCreateOrConnectWithoutProfileInput;
  UserCreateWithoutCategoriesInput: UserCreateWithoutCategoriesInput;
  UserCreateWithoutCommentsInput: UserCreateWithoutCommentsInput;
  UserCreateWithoutEntriesInput: UserCreateWithoutEntriesInput;
  UserCreateWithoutProfileInput: UserCreateWithoutProfileInput;
  UserEdge: UserEdge;
  UserOrderByRelevanceInput: UserOrderByRelevanceInput;
  UserOrderByWithRelationAndSearchRelevanceInput: UserOrderByWithRelationAndSearchRelevanceInput;
  UserRelationFilter: UserRelationFilter;
  UserUpdateOneRequiredWithoutCategoriesInput: UserUpdateOneRequiredWithoutCategoriesInput;
  UserUpdateOneRequiredWithoutCommentsInput: UserUpdateOneRequiredWithoutCommentsInput;
  UserUpdateOneRequiredWithoutEntriesInput: UserUpdateOneRequiredWithoutEntriesInput;
  UserUpdateWithoutCategoriesInput: UserUpdateWithoutCategoriesInput;
  UserUpdateWithoutCommentsInput: UserUpdateWithoutCommentsInput;
  UserUpdateWithoutEntriesInput: UserUpdateWithoutEntriesInput;
  UserUpsertWithoutCategoriesInput: UserUpsertWithoutCategoriesInput;
  UserUpsertWithoutCommentsInput: UserUpsertWithoutCommentsInput;
  UserUpsertWithoutEntriesInput: UserUpsertWithoutEntriesInput;
  UserWhereInput: UserWhereInput;
  UserWhereUniqueInput: UserWhereUniqueInput;
  ViewerAuthInfo: ViewerAuthInfo;
  ViewerDetailed: ViewerDetailed;
  ViewerEntriesWhereInput: ViewerEntriesWhereInput;
}>;

export type AccountResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["Account"] = ResolversParentTypes["Account"]
> = ResolversObject<{
  access_token?: Resolver<
    Maybe<ResolversTypes["String"]>,
    ParentType,
    ContextType
  >;
  expires_at?: Resolver<
    Maybe<ResolversTypes["Int"]>,
    ParentType,
    ContextType
  >;
  id?: Resolver<ResolversTypes["ID"], ParentType, ContextType>;
  id_token?: Resolver<
    Maybe<ResolversTypes["String"]>,
    ParentType,
    ContextType
  >;
  oauth_token?: Resolver<
    Maybe<ResolversTypes["String"]>,
    ParentType,
    ContextType
  >;
  oauth_token_secret?: Resolver<
    Maybe<ResolversTypes["String"]>,
    ParentType,
    ContextType
  >;
  provider?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  providerAccountId?: Resolver<
    ResolversTypes["String"],
    ParentType,
    ContextType
  >;
  refresh_secret?: Resolver<
    Maybe<ResolversTypes["String"]>,
    ParentType,
    ContextType
  >;
  refresh_token?: Resolver<
    Maybe<ResolversTypes["String"]>,
    ParentType,
    ContextType
  >;
  scope?: Resolver<
    Maybe<ResolversTypes["String"]>,
    ParentType,
    ContextType
  >;
  session_state?: Resolver<
    Maybe<ResolversTypes["String"]>,
    ParentType,
    ContextType
  >;
  token_type?: Resolver<
    Maybe<ResolversTypes["String"]>,
    ParentType,
    ContextType
  >;
  type?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  user?: Resolver<ResolversTypes["User"], ParentType, ContextType>;
  userId?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type AuthResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["Auth"] = ResolversParentTypes["Auth"]
> = ResolversObject<{
  accessToken?: Resolver<
    Maybe<ResolversTypes["String"]>,
    ParentType,
    ContextType
  >;
  refreshToken?: Resolver<
    Maybe<ResolversTypes["String"]>,
    ParentType,
    ContextType
  >;
  session?: Resolver<
    Maybe<ResolversTypes["Session"]>,
    ParentType,
    ContextType
  >;
  user?: Resolver<ResolversTypes["User"], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type AuthDetailedResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["AuthDetailed"] = ResolversParentTypes["AuthDetailed"]
> = ResolversObject<{
  auth?: Resolver<Maybe<ResolversTypes["Auth"]>, ParentType, ContextType>;
  jwt?: Resolver<
    Maybe<ResolversTypes["JwtDecoded"]>,
    ParentType,
    ContextType
  >;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type AuthSansSessionResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["AuthSansSession"] = ResolversParentTypes["AuthSansSession"]
> = ResolversObject<{
  accessToken?: Resolver<
    Maybe<ResolversTypes["String"]>,
    ParentType,
    ContextType
  >;
  refreshToken?: Resolver<
    Maybe<ResolversTypes["String"]>,
    ParentType,
    ContextType
  >;
  user?: Resolver<Maybe<ResolversTypes["User"]>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type BaseTypeNodesResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["BaseTypeNodes"] = ResolversParentTypes["BaseTypeNodes"]
> = ResolversObject<{
  nodes?: Resolver<
    Array<ResolversTypes["TypesUnion"]>,
    ParentType,
    ContextType
  >;
  pageInfo?: Resolver<
    Maybe<ResolversTypes["PageInfo"]>,
    ParentType,
    ContextType
  >;
  totalCount?: Resolver<ResolversTypes["Int"], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type BaseTypesEdgeResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["BaseTypesEdge"] = ResolversParentTypes["BaseTypesEdge"]
> = ResolversObject<{
  cursor?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  node?: Resolver<ResolversTypes["TypesUnion"], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export interface BigIntScalarConfig
  extends GraphQLScalarTypeConfig<ResolversTypes["BigInt"], any> {
  name: "BigInt";
}

export type CategoryResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["Category"] = ResolversParentTypes["Category"]
> = ResolversObject<{
  _count?: Resolver<
    ResolversTypes["CategoryCount"],
    ParentType,
    ContextType
  >;
  createdAt?: Resolver<
    Maybe<ResolversTypes["DateTime"]>,
    ParentType,
    ContextType
  >;
  creator?: Resolver<ResolversTypes["User"], ParentType, ContextType>;
  creatorId?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  entries?: Resolver<
    Maybe<Array<ResolversTypes["Entry"]>>,
    ParentType,
    ContextType
  >;
  entryId?: Resolver<
    Maybe<ResolversTypes["String"]>,
    ParentType,
    ContextType
  >;
  id?: Resolver<ResolversTypes["ID"], ParentType, ContextType>;
  name?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  updatedAt?: Resolver<
    Maybe<ResolversTypes["DateTime"]>,
    ParentType,
    ContextType
  >;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type CategoryConnectionResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["CategoryConnection"] = ResolversParentTypes["CategoryConnection"]
> = ResolversObject<{
  edges?: Resolver<
    Array<ResolversTypes["CategoryEdge"]>,
    ParentType,
    ContextType
  >;
  pageInfo?: Resolver<ResolversTypes["PageInfo"], ParentType, ContextType>;
  totalCount?: Resolver<ResolversTypes["Int"], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type CategoryCountResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["CategoryCount"] = ResolversParentTypes["CategoryCount"]
> = ResolversObject<{
  entries?: Resolver<ResolversTypes["Int"], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type CategoryEdgeResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["CategoryEdge"] = ResolversParentTypes["CategoryEdge"]
> = ResolversObject<{
  cursor?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  node?: Resolver<ResolversTypes["Category"], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type CommentResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["Comment"] = ResolversParentTypes["Comment"]
> = ResolversObject<{
  author?: Resolver<ResolversTypes["User"], ParentType, ContextType>;
  authorId?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  body?: Resolver<
    Maybe<ResolversTypes["String"]>,
    ParentType,
    ContextType
  >;
  createdAt?: Resolver<
    ResolversTypes["DateTime"],
    ParentType,
    ContextType
  >;
  entry?: Resolver<ResolversTypes["Entry"], ParentType, ContextType>;
  entryId?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  id?: Resolver<ResolversTypes["ID"], ParentType, ContextType>;
  position?: Resolver<
    Maybe<ResolversTypes["String"]>,
    ParentType,
    ContextType
  >;
  reactions?: Resolver<
    Maybe<Array<ResolversTypes["CommentReactions"]>>,
    ParentType,
    ContextType
  >;
  updatedAt?: Resolver<
    Maybe<ResolversTypes["DateTime"]>,
    ParentType,
    ContextType
  >;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type CommentConnectionResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["CommentConnection"] = ResolversParentTypes["CommentConnection"]
> = ResolversObject<{
  edges?: Resolver<
    Array<ResolversTypes["CommentEdge"]>,
    ParentType,
    ContextType
  >;
  pageInfo?: Resolver<ResolversTypes["PageInfo"], ParentType, ContextType>;
  totalCount?: Resolver<ResolversTypes["Int"], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type CommentEdgeResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["CommentEdge"] = ResolversParentTypes["CommentEdge"]
> = ResolversObject<{
  cursor?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  node?: Resolver<ResolversTypes["Comment"], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type ConnectionResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["Connection"] = ResolversParentTypes["Connection"]
> = ResolversObject<{
  email?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  firstName?: Resolver<
    Maybe<ResolversTypes["String"]>,
    ParentType,
    ContextType
  >;
  id?: Resolver<ResolversTypes["ID"], ParentType, ContextType>;
  ip?: Resolver<Maybe<ResolversTypes["String"]>, ParentType, ContextType>;
  lastModified?: Resolver<
    Maybe<ResolversTypes["DateTime"]>,
    ParentType,
    ContextType
  >;
  lastName?: Resolver<
    Maybe<ResolversTypes["String"]>,
    ParentType,
    ContextType
  >;
  owner?: Resolver<ResolversTypes["User"], ParentType, ContextType>;
  ownerId?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  phoneNumber?: Resolver<
    Maybe<ResolversTypes["PhoneNumber"]>,
    ParentType,
    ContextType
  >;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type ConnectionConnectionResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["ConnectionConnection"] = ResolversParentTypes["ConnectionConnection"]
> = ResolversObject<{
  edges?: Resolver<
    Array<ResolversTypes["ConnectionEdge"]>,
    ParentType,
    ContextType
  >;
  pageInfo?: Resolver<ResolversTypes["PageInfo"], ParentType, ContextType>;
  totalCount?: Resolver<ResolversTypes["Int"], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type ConnectionEdgeResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["ConnectionEdge"] = ResolversParentTypes["ConnectionEdge"]
> = ResolversObject<{
  cursor?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  node?: Resolver<ResolversTypes["Connection"], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type ContentNodesResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["ContentNodes"] = ResolversParentTypes["ContentNodes"]
> = ResolversObject<{
  contentNodes?: Resolver<
    ResolversTypes["BaseTypeNodes"],
    ParentType,
    ContextType
  >;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export interface DateTimeScalarConfig
  extends GraphQLScalarTypeConfig<ResolversTypes["DateTime"], any> {
  name: "DateTime";
}

export type EntryResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["Entry"] = ResolversParentTypes["Entry"]
> = ResolversObject<{
  _count?: Resolver<ResolversTypes["EntryCount"], ParentType, ContextType>;
  author?: Resolver<ResolversTypes["User"], ParentType, ContextType>;
  authorId?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  categories?: Resolver<
    Maybe<Array<ResolversTypes["Category"]>>,
    ParentType,
    ContextType
  >;
  categoryId?: Resolver<
    Maybe<ResolversTypes["String"]>,
    ParentType,
    ContextType
  >;
  comments?: Resolver<
    Maybe<Array<ResolversTypes["Comment"]>>,
    ParentType,
    ContextType
  >;
  content?: Resolver<
    Maybe<ResolversTypes["String"]>,
    ParentType,
    ContextType
  >;
  createdAt?: Resolver<
    ResolversTypes["DateTime"],
    ParentType,
    ContextType
  >;
  featuredImage?: Resolver<
    Maybe<ResolversTypes["String"]>,
    ParentType,
    ContextType
  >;
  id?: Resolver<ResolversTypes["ID"], ParentType, ContextType>;
  published?: Resolver<
    Maybe<ResolversTypes["Boolean"]>,
    ParentType,
    ContextType
  >;
  title?: Resolver<
    Maybe<ResolversTypes["String"]>,
    ParentType,
    ContextType
  >;
  updatedAt?: Resolver<
    Maybe<ResolversTypes["DateTime"]>,
    ParentType,
    ContextType
  >;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type EntryConnectionResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["EntryConnection"] = ResolversParentTypes["EntryConnection"]
> = ResolversObject<{
  edges?: Resolver<
    Array<ResolversTypes["EntryEdge"]>,
    ParentType,
    ContextType
  >;
  pageInfo?: Resolver<ResolversTypes["PageInfo"], ParentType, ContextType>;
  totalCount?: Resolver<ResolversTypes["Int"], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type EntryCountResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["EntryCount"] = ResolversParentTypes["EntryCount"]
> = ResolversObject<{
  categories?: Resolver<ResolversTypes["Int"], ParentType, ContextType>;
  comments?: Resolver<ResolversTypes["Int"], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type EntryEdgeResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["EntryEdge"] = ResolversParentTypes["EntryEdge"]
> = ResolversObject<{
  cursor?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  node?: Resolver<ResolversTypes["Entry"], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type JwtDecodedResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["JwtDecoded"] = ResolversParentTypes["JwtDecoded"]
> = ResolversObject<{
  header?: Resolver<ResolversTypes["JwtHeaders"], ParentType, ContextType>;
  payload?: Resolver<
    ResolversTypes["JwtPayload"],
    ParentType,
    ContextType
  >;
  signature?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type JwtHeadersResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["JwtHeaders"] = ResolversParentTypes["JwtHeaders"]
> = ResolversObject<{
  alg?: Resolver<ResolversTypes["AlgorithmType"], ParentType, ContextType>;
  typ?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type JwtPayloadResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["JwtPayload"] = ResolversParentTypes["JwtPayload"]
> = ResolversObject<{
  exp?: Resolver<Maybe<ResolversTypes["BigInt"]>, ParentType, ContextType>;
  iat?: Resolver<Maybe<ResolversTypes["BigInt"]>, ParentType, ContextType>;
  userId?: Resolver<
    Maybe<ResolversTypes["String"]>,
    ParentType,
    ContextType
  >;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type MediaItemResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["MediaItem"] = ResolversParentTypes["MediaItem"]
> = ResolversObject<{
  fileLastModified?: Resolver<
    Maybe<ResolversTypes["DateTime"]>,
    ParentType,
    ContextType
  >;
  height?: Resolver<
    Maybe<ResolversTypes["Float"]>,
    ParentType,
    ContextType
  >;
  id?: Resolver<ResolversTypes["ID"], ParentType, ContextType>;
  name?: Resolver<
    Maybe<ResolversTypes["String"]>,
    ParentType,
    ContextType
  >;
  quality?: Resolver<
    Maybe<ResolversTypes["Int"]>,
    ParentType,
    ContextType
  >;
  size?: Resolver<
    Maybe<ResolversTypes["String"]>,
    ParentType,
    ContextType
  >;
  src?: Resolver<Maybe<ResolversTypes["String"]>, ParentType, ContextType>;
  srcSet?: Resolver<
    Maybe<ResolversTypes["String"]>,
    ParentType,
    ContextType
  >;
  type?: Resolver<
    Maybe<ResolversTypes["MimeTypes"]>,
    ParentType,
    ContextType
  >;
  updatedAt?: Resolver<
    Maybe<ResolversTypes["DateTime"]>,
    ParentType,
    ContextType
  >;
  uploadedAt?: Resolver<
    ResolversTypes["DateTime"],
    ParentType,
    ContextType
  >;
  user?: Resolver<ResolversTypes["User"], ParentType, ContextType>;
  userId?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  width?: Resolver<
    Maybe<ResolversTypes["Float"]>,
    ParentType,
    ContextType
  >;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type MediaItemConnectionResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["MediaItemConnection"] = ResolversParentTypes["MediaItemConnection"]
> = ResolversObject<{
  edges?: Resolver<
    Array<ResolversTypes["MediaItemEdge"]>,
    ParentType,
    ContextType
  >;
  pageInfo?: Resolver<ResolversTypes["PageInfo"], ParentType, ContextType>;
  totalCount?: Resolver<ResolversTypes["Int"], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type MediaItemEdgeResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["MediaItemEdge"] = ResolversParentTypes["MediaItemEdge"]
> = ResolversObject<{
  cursor?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  node?: Resolver<ResolversTypes["MediaItem"], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type MutationResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["Mutation"] = ResolversParentTypes["Mutation"]
> = ResolversObject<{
  changePassword?: Resolver<
    ResolversTypes["User"],
    ParentType,
    ContextType,
    RequireFields<MutationChangePasswordArgs, "changePasswordInput">
  >;
  createEntry?: Resolver<
    ResolversTypes["Entry"],
    ParentType,
    ContextType,
    RequireFields<MutationCreateEntryArgs, "EntryInput">
  >;
  createNewEntry?: Resolver<
    ResolversTypes["Entry"],
    ParentType,
    ContextType,
    RequireFields<MutationCreateNewEntryArgs, "createNewEntryInput">
  >;
  createProfile?: Resolver<
    ResolversTypes["Profile"],
    ParentType,
    ContextType,
    RequireFields<MutationCreateProfileArgs, "data" | "userId">
  >;
  login?: Resolver<
    ResolversTypes["Token"],
    ParentType,
    ContextType,
    RequireFields<MutationLoginArgs, "data">
  >;
  register?: Resolver<
    ResolversTypes["AuthSansSession"],
    ParentType,
    ContextType,
    RequireFields<MutationRegisterArgs, "dataRegister">
  >;
  registerNewUser?: Resolver<
    ResolversTypes["AuthDetailed"],
    ParentType,
    ContextType,
    RequireFields<MutationRegisterNewUserArgs, "userCreateInput">
  >;
  signin?: Resolver<
    ResolversTypes["AuthDetailed"],
    ParentType,
    ContextType,
    RequireFields<MutationSigninArgs, "userloginInput">
  >;
  signup?: Resolver<
    ResolversTypes["Token"],
    ParentType,
    ContextType,
    RequireFields<MutationSignupArgs, "data">
  >;
  updateUserPassword?: Resolver<
    ResolversTypes["User"],
    ParentType,
    ContextType,
    RequireFields<MutationUpdateUserPasswordArgs, "passwordInput">
  >;
  upsertComment?: Resolver<
    Array<ResolversTypes["Comment"]>,
    ParentType,
    ContextType,
    RequireFields<MutationUpsertCommentArgs, "commentUpsertInput">
  >;
  viewerCreateEntry?: Resolver<
    Array<ResolversTypes["Entry"]>,
    ParentType,
    ContextType,
    RequireFields<MutationViewerCreateEntryArgs, "viewerEntryCreateInput">
  >;
}>;

export type NodeResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["Node"] = ResolversParentTypes["Node"]
> = ResolversObject<{
  __resolveType: TypeResolveFn<
    | "Account"
    | "Category"
    | "Comment"
    | "Connection"
    | "Entry"
    | "MediaItem"
    | "Profile"
    | "Session"
    | "User"
    | "ViewerDetailed",
    ParentType,
    ContextType
  >;
  id?: Resolver<ResolversTypes["ID"], ParentType, ContextType>;
}>;

export type NodeUnionResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["NodeUnion"] = ResolversParentTypes["NodeUnion"]
> = ResolversObject<{
  __resolveType: TypeResolveFn<
    | "CommentConnection"
    | "EntryConnection"
    | "MediaItemConnection"
    | "ProfileConnection"
    | "SessionConnection"
    | "UserConnection",
    ParentType,
    ContextType
  >;
}>;

export type NodeUnionConnectionResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["NodeUnionConnection"] = ResolversParentTypes["NodeUnionConnection"]
> = ResolversObject<{
  edges?: Resolver<
    Array<ResolversTypes["NodeUnion"]>,
    ParentType,
    ContextType
  >;
  pageInfo?: Resolver<ResolversTypes["PageInfo"], ParentType, ContextType>;
  totalCount?: Resolver<ResolversTypes["Int"], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type PageInfoResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["PageInfo"] = ResolversParentTypes["PageInfo"]
> = ResolversObject<{
  endCursor?: Resolver<
    Maybe<ResolversTypes["String"]>,
    ParentType,
    ContextType
  >;
  hasNextPage?: Resolver<
    ResolversTypes["Boolean"],
    ParentType,
    ContextType
  >;
  hasPreviousPage?: Resolver<
    ResolversTypes["Boolean"],
    ParentType,
    ContextType
  >;
  startCursor?: Resolver<
    Maybe<ResolversTypes["String"]>,
    ParentType,
    ContextType
  >;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export interface PhoneNumberScalarConfig
  extends GraphQLScalarTypeConfig<ResolversTypes["PhoneNumber"], any> {
  name: "PhoneNumber";
}

export type ProfileResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["Profile"] = ResolversParentTypes["Profile"]
> = ResolversObject<{
  activiyFeed?: Resolver<
    Maybe<ResolversTypes["String"]>,
    ParentType,
    ContextType
  >;
  bio?: Resolver<Maybe<ResolversTypes["String"]>, ParentType, ContextType>;
  city?: Resolver<
    Maybe<ResolversTypes["String"]>,
    ParentType,
    ContextType
  >;
  country?: Resolver<
    Maybe<ResolversTypes["String"]>,
    ParentType,
    ContextType
  >;
  coverPhoto?: Resolver<
    Maybe<ResolversTypes["String"]>,
    ParentType,
    ContextType
  >;
  dob?: Resolver<Maybe<ResolversTypes["String"]>, ParentType, ContextType>;
  gender?: Resolver<
    Maybe<ResolversTypes["Gender"]>,
    ParentType,
    ContextType
  >;
  id?: Resolver<ResolversTypes["ID"], ParentType, ContextType>;
  lastSeen?: Resolver<
    Maybe<ResolversTypes["DateTime"]>,
    ParentType,
    ContextType
  >;
  memberSince?: Resolver<
    ResolversTypes["DateTime"],
    ParentType,
    ContextType
  >;
  occupation?: Resolver<
    Maybe<ResolversTypes["String"]>,
    ParentType,
    ContextType
  >;
  phoneNumber?: Resolver<
    Maybe<ResolversTypes["String"]>,
    ParentType,
    ContextType
  >;
  pronouns?: Resolver<
    Maybe<ResolversTypes["Pronouns"]>,
    ParentType,
    ContextType
  >;
  recentActivity?: Resolver<
    Maybe<ResolversTypes["String"]>,
    ParentType,
    ContextType
  >;
  user?: Resolver<ResolversTypes["User"], ParentType, ContextType>;
  userId?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  userInProfile?: Resolver<
    ResolversTypes["User"],
    ParentType,
    ContextType
  >;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type ProfileConnectionResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["ProfileConnection"] = ResolversParentTypes["ProfileConnection"]
> = ResolversObject<{
  edges?: Resolver<
    Array<ResolversTypes["ProfileEdge"]>,
    ParentType,
    ContextType
  >;
  pageInfo?: Resolver<ResolversTypes["PageInfo"], ParentType, ContextType>;
  totalCount?: Resolver<ResolversTypes["Int"], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type ProfileEdgeResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["ProfileEdge"] = ResolversParentTypes["ProfileEdge"]
> = ResolversObject<{
  cursor?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  node?: Resolver<ResolversTypes["Profile"], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type QueryResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["Query"] = ResolversParentTypes["Query"]
> = ResolversObject<{
  categoryByRelayId?: Resolver<
    ResolversTypes["Category"],
    ParentType,
    ContextType,
    RequireFields<QueryCategoryByRelayIdArgs, "cursor">
  >;
  commentByRelayId?: Resolver<
    ResolversTypes["Comment"],
    ParentType,
    ContextType,
    RequireFields<QueryCommentByRelayIdArgs, "cursor">
  >;
  comprehensiveConnectionUnion?: Resolver<
    Array<ResolversTypes["NodeUnion"]>,
    ParentType,
    ContextType
  >;
  connectionByRelayId?: Resolver<
    ResolversTypes["Connection"],
    ParentType,
    ContextType,
    RequireFields<QueryConnectionByRelayIdArgs, "connectionCursor">
  >;
  contentNodesUnion?: Resolver<
    ResolversTypes["ContentNodes"],
    ParentType,
    ContextType,
    RequireFields<
      QueryContentNodesUnionArgs,
      "findManyEntriesPaginatedInput"
    >
  >;
  decodeViewerTokenFromContext?: Resolver<
    ResolversTypes["AuthDetailed"],
    ParentType,
    ContextType
  >;
  entryById?: Resolver<
    ResolversTypes["Entry"],
    ParentType,
    ContextType,
    RequireFields<QueryEntryByIdArgs, "id">
  >;
  findUniqueMediaItem?: Resolver<
    ResolversTypes["MediaItem"],
    ParentType,
    ContextType,
    RequireFields<QueryFindUniqueMediaItemArgs, "mediaItemId">
  >;
  getUserFromAccessToken?: Resolver<
    ResolversTypes["User"],
    ParentType,
    ContextType,
    RequireFields<QueryGetUserFromAccessTokenArgs, "token">
  >;
  getViewer?: Resolver<
    ResolversTypes["AuthDetailed"],
    ParentType,
    ContextType
  >;
  hello?: Resolver<
    ResolversTypes["String"],
    ParentType,
    ContextType,
    RequireFields<QueryHelloArgs, "name">
  >;
  helloWorld?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  listCategories?: Resolver<
    ResolversTypes["CategoryConnection"],
    ParentType,
    ContextType,
    RequireFields<
      QueryListCategoriesArgs,
      "findManyCategoriesPaginatedInput"
    >
  >;
  listComments?: Resolver<
    ResolversTypes["CommentConnection"],
    ParentType,
    ContextType,
    RequireFields<QueryListCommentsArgs, "findManyCommentsPaginatedInput">
  >;
  listConnections?: Resolver<
    ResolversTypes["ConnectionConnection"],
    ParentType,
    ContextType,
    RequireFields<
      QueryListConnectionsArgs,
      "findManyConnectionsPaginatedInput"
    >
  >;
  listEntries?: Resolver<
    ResolversTypes["EntryConnection"],
    ParentType,
    ContextType,
    RequireFields<QueryListEntriesArgs, "findManyEntriesPaginatedInput">
  >;
  listMediaItems?: Resolver<
    ResolversTypes["MediaItemConnection"],
    ParentType,
    ContextType,
    Partial<QueryListMediaItemsArgs>
  >;
  listProfiles?: Resolver<
    ResolversTypes["ProfileConnection"],
    ParentType,
    ContextType,
    RequireFields<QueryListProfilesArgs, "profilesArgs">
  >;
  listSessions?: Resolver<
    ResolversTypes["SessionConnection"],
    ParentType,
    ContextType,
    RequireFields<QueryListSessionsArgs, "findManySessionsPaginatedInput">
  >;
  listUsers?: Resolver<
    ResolversTypes["UserConnection"],
    ParentType,
    ContextType,
    Partial<QueryListUsersArgs>
  >;
  me?: Resolver<ResolversTypes["AuthDetailed"], ParentType, ContextType>;
  node?: Resolver<
    Maybe<ResolversTypes["Node"]>,
    ParentType,
    ContextType,
    RequireFields<QueryNodeArgs, "id">
  >;
  nodeUnionResolver?: Resolver<
    ResolversTypes["NodeUnionConnection"],
    ParentType,
    ContextType,
    RequireFields<
      QueryNodeUnionResolverArgs,
      | "id"
      | "manyComments"
      | "manyEntries"
      | "manyMediaItems"
      | "manyProfiles"
      | "manySessions"
      | "manyUsers"
    >
  >;
  profileByRelayId?: Resolver<
    ResolversTypes["Profile"],
    ParentType,
    ContextType
  >;
  sessionByRelayId?: Resolver<
    ResolversTypes["Session"],
    ParentType,
    ContextType,
    RequireFields<QuerySessionByRelayIdArgs, "cursor">
  >;
  siftEntries?: Resolver<
    ResolversTypes["EntryConnection"],
    ParentType,
    ContextType,
    RequireFields<QuerySiftEntriesArgs, "entryFindManyInput">
  >;
  userById?: Resolver<
    ResolversTypes["User"],
    ParentType,
    ContextType,
    RequireFields<QueryUserByIdArgs, "id">
  >;
  userByRelayId?: Resolver<
    ResolversTypes["User"],
    ParentType,
    ContextType,
    RequireFields<QueryUserByRelayIdArgs, "cursor">
  >;
  userFromAccessTokenDecoded?: Resolver<
    ResolversTypes["AuthDetailed"],
    ParentType,
    ContextType,
    RequireFields<QueryUserFromAccessTokenDecodedArgs, "token">
  >;
  viewer?: Resolver<
    ResolversTypes["ViewerDetailed"],
    ParentType,
    ContextType
  >;
  viewerAuthInfoFromContext?: Resolver<
    ResolversTypes["ViewerAuthInfo"],
    ParentType,
    ContextType
  >;
  viewerEntriesPaginated?: Resolver<
    ResolversTypes["EntryConnection"],
    ParentType,
    ContextType,
    RequireFields<
      QueryViewerEntriesPaginatedArgs,
      "viewerEntriesPaginatedInput"
    >
  >;
}>;

export type SessionResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["Session"] = ResolversParentTypes["Session"]
> = ResolversObject<{
  accessToken?: Resolver<
    Maybe<ResolversTypes["String"]>,
    ParentType,
    ContextType
  >;
  alg?: Resolver<Maybe<ResolversTypes["String"]>, ParentType, ContextType>;
  exp?: Resolver<Maybe<ResolversTypes["Int"]>, ParentType, ContextType>;
  iat?: Resolver<Maybe<ResolversTypes["Int"]>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes["ID"], ParentType, ContextType>;
  lastVerified?: Resolver<
    Maybe<ResolversTypes["DateTime"]>,
    ParentType,
    ContextType
  >;
  provider?: Resolver<
    Maybe<ResolversTypes["String"]>,
    ParentType,
    ContextType
  >;
  refreshToken?: Resolver<
    Maybe<ResolversTypes["String"]>,
    ParentType,
    ContextType
  >;
  scopes?: Resolver<
    Maybe<Array<ResolversTypes["String"]>>,
    ParentType,
    ContextType
  >;
  signature?: Resolver<
    Maybe<ResolversTypes["String"]>,
    ParentType,
    ContextType
  >;
  tokenState?: Resolver<
    Maybe<ResolversTypes["String"]>,
    ParentType,
    ContextType
  >;
  user?: Resolver<Maybe<ResolversTypes["User"]>, ParentType, ContextType>;
  userId?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type SessionConnectionResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["SessionConnection"] = ResolversParentTypes["SessionConnection"]
> = ResolversObject<{
  edges?: Resolver<
    Array<ResolversTypes["SessionEdge"]>,
    ParentType,
    ContextType
  >;
  pageInfo?: Resolver<ResolversTypes["PageInfo"], ParentType, ContextType>;
  totalCount?: Resolver<ResolversTypes["Int"], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type SessionEdgeResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["SessionEdge"] = ResolversParentTypes["SessionEdge"]
> = ResolversObject<{
  cursor?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  node?: Resolver<ResolversTypes["Session"], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type SubscriptionResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["Subscription"] = ResolversParentTypes["Subscription"]
> = ResolversObject<{
  entryCreated?: SubscriptionResolver<
    ResolversTypes["Entry"],
    "entryCreated",
    ParentType,
    ContextType
  >;
  profileCreated?: SubscriptionResolver<
    ResolversTypes["Profile"],
    "profileCreated",
    ParentType,
    ContextType
  >;
}>;

export type TokenResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["Token"] = ResolversParentTypes["Token"]
> = ResolversObject<{
  accessToken?: Resolver<
    Maybe<ResolversTypes["String"]>,
    ParentType,
    ContextType
  >;
  refreshToken?: Resolver<
    Maybe<ResolversTypes["String"]>,
    ParentType,
    ContextType
  >;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type TypesUnionResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["TypesUnion"] = ResolversParentTypes["TypesUnion"]
> = ResolversObject<{
  __resolveType: TypeResolveFn<
    "Entry" | "MediaItem" | "User",
    ParentType,
    ContextType
  >;
}>;

export type UserResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["User"] = ResolversParentTypes["User"]
> = ResolversObject<{
  _count?: Resolver<
    Maybe<ResolversTypes["UserCount"]>,
    ParentType,
    ContextType
  >;
  accounts?: Resolver<
    Maybe<Array<ResolversTypes["Account"]>>,
    ParentType,
    ContextType
  >;
  categories?: Resolver<
    Maybe<Array<ResolversTypes["Category"]>>,
    ParentType,
    ContextType
  >;
  comments?: Resolver<
    Maybe<Array<ResolversTypes["Comment"]>>,
    ParentType,
    ContextType
  >;
  connections?: Resolver<
    Maybe<Array<ResolversTypes["Connection"]>>,
    ParentType,
    ContextType
  >;
  createdAt?: Resolver<
    ResolversTypes["DateTime"],
    ParentType,
    ContextType
  >;
  email?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  emailVerified?: Resolver<
    Maybe<ResolversTypes["DateTime"]>,
    ParentType,
    ContextType
  >;
  entries?: Resolver<
    Maybe<Array<ResolversTypes["Entry"]>>,
    ParentType,
    ContextType
  >;
  firstName?: Resolver<
    Maybe<ResolversTypes["String"]>,
    ParentType,
    ContextType
  >;
  id?: Resolver<ResolversTypes["ID"], ParentType, ContextType>;
  image?: Resolver<
    Maybe<ResolversTypes["String"]>,
    ParentType,
    ContextType
  >;
  lastName?: Resolver<
    Maybe<ResolversTypes["String"]>,
    ParentType,
    ContextType
  >;
  mediaItems?: Resolver<
    Maybe<Array<ResolversTypes["MediaItem"]>>,
    ParentType,
    ContextType
  >;
  password?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  profile?: Resolver<
    Maybe<ResolversTypes["Profile"]>,
    ParentType,
    ContextType
  >;
  role?: Resolver<Maybe<ResolversTypes["Role"]>, ParentType, ContextType>;
  sessions?: Resolver<
    Maybe<Array<ResolversTypes["Session"]>>,
    ParentType,
    ContextType
  >;
  status?: Resolver<ResolversTypes["UserStatus"], ParentType, ContextType>;
  updatedAt?: Resolver<
    Maybe<ResolversTypes["DateTime"]>,
    ParentType,
    ContextType
  >;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type UserConnectionResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["UserConnection"] = ResolversParentTypes["UserConnection"]
> = ResolversObject<{
  edges?: Resolver<
    Array<ResolversTypes["UserEdge"]>,
    ParentType,
    ContextType
  >;
  pageInfo?: Resolver<ResolversTypes["PageInfo"], ParentType, ContextType>;
  totalCount?: Resolver<ResolversTypes["Int"], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type UserCountResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["UserCount"] = ResolversParentTypes["UserCount"]
> = ResolversObject<{
  accounts?: Resolver<ResolversTypes["Int"], ParentType, ContextType>;
  categories?: Resolver<ResolversTypes["Int"], ParentType, ContextType>;
  comments?: Resolver<ResolversTypes["Int"], ParentType, ContextType>;
  connections?: Resolver<ResolversTypes["Int"], ParentType, ContextType>;
  entries?: Resolver<ResolversTypes["Int"], ParentType, ContextType>;
  mediaItems?: Resolver<ResolversTypes["Int"], ParentType, ContextType>;
  sessions?: Resolver<ResolversTypes["Int"], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type UserEdgeResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["UserEdge"] = ResolversParentTypes["UserEdge"]
> = ResolversObject<{
  cursor?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  node?: Resolver<ResolversTypes["User"], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type ViewerAuthInfoResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["ViewerAuthInfo"] = ResolversParentTypes["ViewerAuthInfo"]
> = ResolversObject<{
  accessToken?: Resolver<
    ResolversTypes["String"],
    ParentType,
    ContextType
  >;
  refreshToken?: Resolver<
    ResolversTypes["String"],
    ParentType,
    ContextType
  >;
  viewerJwt?: Resolver<
    ResolversTypes["JwtDecoded"],
    ParentType,
    ContextType
  >;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type ViewerDetailedResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["ViewerDetailed"] = ResolversParentTypes["ViewerDetailed"]
> = ResolversObject<{
  _count?: Resolver<
    Maybe<ResolversTypes["UserCount"]>,
    ParentType,
    ContextType
  >;
  accessToken?: Resolver<
    Maybe<ResolversTypes["String"]>,
    ParentType,
    ContextType
  >;
  accounts?: Resolver<
    Maybe<Array<ResolversTypes["Account"]>>,
    ParentType,
    ContextType
  >;
  categories?: Resolver<
    Maybe<Array<ResolversTypes["Category"]>>,
    ParentType,
    ContextType
  >;
  comments?: Resolver<
    Maybe<Array<ResolversTypes["Comment"]>>,
    ParentType,
    ContextType
  >;
  connections?: Resolver<
    Maybe<Array<ResolversTypes["Connection"]>>,
    ParentType,
    ContextType
  >;
  createdAt?: Resolver<
    ResolversTypes["DateTime"],
    ParentType,
    ContextType
  >;
  email?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  emailVerified?: Resolver<
    Maybe<ResolversTypes["DateTime"]>,
    ParentType,
    ContextType
  >;
  entries?: Resolver<
    Maybe<Array<ResolversTypes["Entry"]>>,
    ParentType,
    ContextType
  >;
  firstName?: Resolver<
    Maybe<ResolversTypes["String"]>,
    ParentType,
    ContextType
  >;
  id?: Resolver<ResolversTypes["ID"], ParentType, ContextType>;
  image?: Resolver<
    Maybe<ResolversTypes["String"]>,
    ParentType,
    ContextType
  >;
  lastName?: Resolver<
    Maybe<ResolversTypes["String"]>,
    ParentType,
    ContextType
  >;
  mediaItems?: Resolver<
    Maybe<Array<ResolversTypes["MediaItem"]>>,
    ParentType,
    ContextType
  >;
  password?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  profile?: Resolver<
    Maybe<ResolversTypes["Profile"]>,
    ParentType,
    ContextType
  >;
  refreshToken?: Resolver<
    Maybe<ResolversTypes["String"]>,
    ParentType,
    ContextType
  >;
  role?: Resolver<Maybe<ResolversTypes["Role"]>, ParentType, ContextType>;
  secret?: Resolver<
    Maybe<ResolversTypes["String"]>,
    ParentType,
    ContextType
  >;
  sessions?: Resolver<
    Maybe<Array<ResolversTypes["Session"]>>,
    ParentType,
    ContextType
  >;
  status?: Resolver<ResolversTypes["UserStatus"], ParentType, ContextType>;
  updatedAt?: Resolver<
    Maybe<ResolversTypes["DateTime"]>,
    ParentType,
    ContextType
  >;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type Resolvers<ContextType = any> = ResolversObject<{
  Account?: AccountResolvers<ContextType>;
  Auth?: AuthResolvers<ContextType>;
  AuthDetailed?: AuthDetailedResolvers<ContextType>;
  AuthSansSession?: AuthSansSessionResolvers<ContextType>;
  BaseTypeNodes?: BaseTypeNodesResolvers<ContextType>;
  BaseTypesEdge?: BaseTypesEdgeResolvers<ContextType>;
  BigInt?: GraphQLScalarType;
  Category?: CategoryResolvers<ContextType>;
  CategoryConnection?: CategoryConnectionResolvers<ContextType>;
  CategoryCount?: CategoryCountResolvers<ContextType>;
  CategoryEdge?: CategoryEdgeResolvers<ContextType>;
  Comment?: CommentResolvers<ContextType>;
  CommentConnection?: CommentConnectionResolvers<ContextType>;
  CommentEdge?: CommentEdgeResolvers<ContextType>;
  Connection?: ConnectionResolvers<ContextType>;
  ConnectionConnection?: ConnectionConnectionResolvers<ContextType>;
  ConnectionEdge?: ConnectionEdgeResolvers<ContextType>;
  ContentNodes?: ContentNodesResolvers<ContextType>;
  DateTime?: GraphQLScalarType;
  Entry?: EntryResolvers<ContextType>;
  EntryConnection?: EntryConnectionResolvers<ContextType>;
  EntryCount?: EntryCountResolvers<ContextType>;
  EntryEdge?: EntryEdgeResolvers<ContextType>;
  JwtDecoded?: JwtDecodedResolvers<ContextType>;
  JwtHeaders?: JwtHeadersResolvers<ContextType>;
  JwtPayload?: JwtPayloadResolvers<ContextType>;
  MediaItem?: MediaItemResolvers<ContextType>;
  MediaItemConnection?: MediaItemConnectionResolvers<ContextType>;
  MediaItemEdge?: MediaItemEdgeResolvers<ContextType>;
  Mutation?: MutationResolvers<ContextType>;
  Node?: NodeResolvers<ContextType>;
  NodeUnion?: NodeUnionResolvers<ContextType>;
  NodeUnionConnection?: NodeUnionConnectionResolvers<ContextType>;
  PageInfo?: PageInfoResolvers<ContextType>;
  PhoneNumber?: GraphQLScalarType;
  Profile?: ProfileResolvers<ContextType>;
  ProfileConnection?: ProfileConnectionResolvers<ContextType>;
  ProfileEdge?: ProfileEdgeResolvers<ContextType>;
  Query?: QueryResolvers<ContextType>;
  Session?: SessionResolvers<ContextType>;
  SessionConnection?: SessionConnectionResolvers<ContextType>;
  SessionEdge?: SessionEdgeResolvers<ContextType>;
  Subscription?: SubscriptionResolvers<ContextType>;
  Token?: TokenResolvers<ContextType>;
  TypesUnion?: TypesUnionResolvers<ContextType>;
  User?: UserResolvers<ContextType>;
  UserConnection?: UserConnectionResolvers<ContextType>;
  UserCount?: UserCountResolvers<ContextType>;
  UserEdge?: UserEdgeResolvers<ContextType>;
  ViewerAuthInfo?: ViewerAuthInfoResolvers<ContextType>;
  ViewerDetailed?: ViewerDetailedResolvers<ContextType>;
}>;
