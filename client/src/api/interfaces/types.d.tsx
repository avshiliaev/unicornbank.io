import gql from 'graphql-tag';
import * as ApolloReactCommon from '@apollo/react-common';
import * as React from 'react';
import * as ApolloReactComponents from '@apollo/react-components';
import * as ApolloReactHoc from '@apollo/react-hoc';
export type Maybe<T> = T | null;
export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string,
  String: string,
  Boolean: boolean,
  Int: number,
  Float: number,
  DateTime: any,
};





export type AddBoardInput = {
  title: Scalars['String'],
  columns?: Maybe<Array<Maybe<ColumnRef>>>,
  order?: Maybe<Array<Maybe<Scalars['String']>>>,
};

export type AddBoardPayload = {
   __typename?: 'AddBoardPayload',
  board?: Maybe<Array<Maybe<Board>>>,
};


export type AddBoardPayloadBoardArgs = {
  filter?: Maybe<BoardFilter>,
  order?: Maybe<BoardOrder>,
  first?: Maybe<Scalars['Int']>,
  offset?: Maybe<Scalars['Int']>
};

export type AddColumnInput = {
  title: Scalars['String'],
  tasks?: Maybe<Array<Maybe<TaskRef>>>,
};

export type AddColumnPayload = {
   __typename?: 'AddColumnPayload',
  column?: Maybe<Array<Maybe<Column>>>,
};


export type AddColumnPayloadColumnArgs = {
  filter?: Maybe<ColumnFilter>,
  order?: Maybe<ColumnOrder>,
  first?: Maybe<Scalars['Int']>,
  offset?: Maybe<Scalars['Int']>
};

export type AddCommentInput = {
  worker: WorkerRef,
  content: Scalars['String'],
};

export type AddCommentPayload = {
   __typename?: 'AddCommentPayload',
  comment?: Maybe<Array<Maybe<Comment>>>,
};


export type AddCommentPayloadCommentArgs = {
  filter?: Maybe<CommentFilter>,
  order?: Maybe<CommentOrder>,
  first?: Maybe<Scalars['Int']>,
  offset?: Maybe<Scalars['Int']>
};

export type AddProjectInput = {
  title: Scalars['String'],
  tags?: Maybe<Array<Maybe<TagRef>>>,
  tasks?: Maybe<Array<Maybe<TaskRef>>>,
  boards?: Maybe<Array<Maybe<BoardRef>>>,
  workers?: Maybe<Array<Maybe<WorkerRef>>>,
};

export type AddProjectPayload = {
   __typename?: 'AddProjectPayload',
  project?: Maybe<Array<Maybe<Project>>>,
};


export type AddProjectPayloadProjectArgs = {
  filter?: Maybe<ProjectFilter>,
  order?: Maybe<ProjectOrder>,
  first?: Maybe<Scalars['Int']>,
  offset?: Maybe<Scalars['Int']>
};

export type AddTagInput = {
  title: Scalars['String'],
};

export type AddTagPayload = {
   __typename?: 'AddTagPayload',
  tag?: Maybe<Array<Maybe<Tag>>>,
};


export type AddTagPayloadTagArgs = {
  filter?: Maybe<TagFilter>,
  order?: Maybe<TagOrder>,
  first?: Maybe<Scalars['Int']>,
  offset?: Maybe<Scalars['Int']>
};

export type AddTaskInput = {
  title: Scalars['String'],
  hours: Scalars['Int'],
  deadline: Scalars['String'],
  content: Scalars['String'],
  priority: Scalars['Int'],
  complete: Scalars['Boolean'],
  likes?: Maybe<Array<Maybe<WorkerRef>>>,
  comments?: Maybe<Array<Maybe<CommentRef>>>,
};

export type AddTaskPayload = {
   __typename?: 'AddTaskPayload',
  task?: Maybe<Array<Maybe<Task>>>,
};


export type AddTaskPayloadTaskArgs = {
  filter?: Maybe<TaskFilter>,
  order?: Maybe<TaskOrder>,
  first?: Maybe<Scalars['Int']>,
  offset?: Maybe<Scalars['Int']>
};

export type AddUserInput = {
  username: Scalars['String'],
  password: Scalars['String'],
  location: Scalars['String'],
  roles?: Maybe<Array<Maybe<WorkerRef>>>,
  stars?: Maybe<Array<Maybe<TaskRef>>>,
};

export type AddUserPayload = {
   __typename?: 'AddUserPayload',
  user?: Maybe<Array<Maybe<User>>>,
};


export type AddUserPayloadUserArgs = {
  filter?: Maybe<UserFilter>,
  order?: Maybe<UserOrder>,
  first?: Maybe<Scalars['Int']>,
  offset?: Maybe<Scalars['Int']>
};

export type AddWorkerInput = {
  name: Scalars['String'],
  availability: Scalars['Int'],
  user: UserRef,
  tags?: Maybe<Array<Maybe<TagRef>>>,
  tasks?: Maybe<Array<Maybe<TaskRef>>>,
};

export type AddWorkerPayload = {
   __typename?: 'AddWorkerPayload',
  worker?: Maybe<Array<Maybe<Worker>>>,
};


export type AddWorkerPayloadWorkerArgs = {
  filter?: Maybe<WorkerFilter>,
  order?: Maybe<WorkerOrder>,
  first?: Maybe<Scalars['Int']>,
  offset?: Maybe<Scalars['Int']>
};

export type Board = {
   __typename?: 'Board',
  id: Scalars['ID'],
  title: Scalars['String'],
  columns?: Maybe<Array<Maybe<Column>>>,
  order?: Maybe<Array<Maybe<Scalars['String']>>>,
};


export type BoardColumnsArgs = {
  filter?: Maybe<ColumnFilter>,
  order?: Maybe<ColumnOrder>,
  first?: Maybe<Scalars['Int']>,
  offset?: Maybe<Scalars['Int']>
};

export type BoardFilter = {
  id?: Maybe<Array<Scalars['ID']>>,
  not?: Maybe<BoardFilter>,
};

export type BoardOrder = {
  asc?: Maybe<BoardOrderable>,
  desc?: Maybe<BoardOrderable>,
  then?: Maybe<BoardOrder>,
};

export enum BoardOrderable {
  Title = 'title',
  Order = 'order'
}

export type BoardPatch = {
  title?: Maybe<Scalars['String']>,
  columns?: Maybe<Array<Maybe<ColumnRef>>>,
  order?: Maybe<Array<Maybe<Scalars['String']>>>,
};

export type BoardRef = {
  id?: Maybe<Scalars['ID']>,
  title?: Maybe<Scalars['String']>,
  columns?: Maybe<Array<Maybe<ColumnRef>>>,
  order?: Maybe<Array<Maybe<Scalars['String']>>>,
};

export type Column = {
   __typename?: 'Column',
  id: Scalars['ID'],
  title: Scalars['String'],
  tasks?: Maybe<Array<Maybe<Task>>>,
};


export type ColumnTasksArgs = {
  filter?: Maybe<TaskFilter>,
  order?: Maybe<TaskOrder>,
  first?: Maybe<Scalars['Int']>,
  offset?: Maybe<Scalars['Int']>
};

export type ColumnFilter = {
  id?: Maybe<Array<Scalars['ID']>>,
  not?: Maybe<ColumnFilter>,
};

export type ColumnOrder = {
  asc?: Maybe<ColumnOrderable>,
  desc?: Maybe<ColumnOrderable>,
  then?: Maybe<ColumnOrder>,
};

export enum ColumnOrderable {
  Title = 'title'
}

export type ColumnPatch = {
  title?: Maybe<Scalars['String']>,
  tasks?: Maybe<Array<Maybe<TaskRef>>>,
};

export type ColumnRef = {
  id?: Maybe<Scalars['ID']>,
  title?: Maybe<Scalars['String']>,
  tasks?: Maybe<Array<Maybe<TaskRef>>>,
};

export type Comment = {
   __typename?: 'Comment',
  id: Scalars['ID'],
  worker: Worker,
  content: Scalars['String'],
};


export type CommentWorkerArgs = {
  filter?: Maybe<WorkerFilter>
};

export type CommentFilter = {
  id?: Maybe<Array<Scalars['ID']>>,
  not?: Maybe<CommentFilter>,
};

export type CommentOrder = {
  asc?: Maybe<CommentOrderable>,
  desc?: Maybe<CommentOrderable>,
  then?: Maybe<CommentOrder>,
};

export enum CommentOrderable {
  Content = 'content'
}

export type CommentPatch = {
  worker?: Maybe<WorkerRef>,
  content?: Maybe<Scalars['String']>,
};

export type CommentRef = {
  id?: Maybe<Scalars['ID']>,
  worker?: Maybe<WorkerRef>,
  content?: Maybe<Scalars['String']>,
};


export type DateTimeFilter = {
  eq?: Maybe<Scalars['DateTime']>,
  le?: Maybe<Scalars['DateTime']>,
  lt?: Maybe<Scalars['DateTime']>,
  ge?: Maybe<Scalars['DateTime']>,
  gt?: Maybe<Scalars['DateTime']>,
};

export type DeleteBoardPayload = {
   __typename?: 'DeleteBoardPayload',
  msg?: Maybe<Scalars['String']>,
};

export type DeleteColumnPayload = {
   __typename?: 'DeleteColumnPayload',
  msg?: Maybe<Scalars['String']>,
};

export type DeleteCommentPayload = {
   __typename?: 'DeleteCommentPayload',
  msg?: Maybe<Scalars['String']>,
};

export type DeleteProjectPayload = {
   __typename?: 'DeleteProjectPayload',
  msg?: Maybe<Scalars['String']>,
};

export type DeleteTagPayload = {
   __typename?: 'DeleteTagPayload',
  msg?: Maybe<Scalars['String']>,
};

export type DeleteTaskPayload = {
   __typename?: 'DeleteTaskPayload',
  msg?: Maybe<Scalars['String']>,
};

export type DeleteUserPayload = {
   __typename?: 'DeleteUserPayload',
  msg?: Maybe<Scalars['String']>,
};

export type DeleteWorkerPayload = {
   __typename?: 'DeleteWorkerPayload',
  msg?: Maybe<Scalars['String']>,
};

export enum DgraphIndex {
  Int = 'int',
  Float = 'float',
  Bool = 'bool',
  Hash = 'hash',
  Exact = 'exact',
  Term = 'term',
  Fulltext = 'fulltext',
  Trigram = 'trigram',
  Regexp = 'regexp',
  Year = 'year',
  Month = 'month',
  Day = 'day',
  Hour = 'hour'
}

export type FloatFilter = {
  eq?: Maybe<Scalars['Float']>,
  le?: Maybe<Scalars['Float']>,
  lt?: Maybe<Scalars['Float']>,
  ge?: Maybe<Scalars['Float']>,
  gt?: Maybe<Scalars['Float']>,
};

export type IntFilter = {
  eq?: Maybe<Scalars['Int']>,
  le?: Maybe<Scalars['Int']>,
  lt?: Maybe<Scalars['Int']>,
  ge?: Maybe<Scalars['Int']>,
  gt?: Maybe<Scalars['Int']>,
};

export type Mutation = {
   __typename?: 'Mutation',
  addComment?: Maybe<AddCommentPayload>,
  updateComment?: Maybe<UpdateCommentPayload>,
  deleteComment?: Maybe<DeleteCommentPayload>,
  addTag?: Maybe<AddTagPayload>,
  updateTag?: Maybe<UpdateTagPayload>,
  deleteTag?: Maybe<DeleteTagPayload>,
  addTask?: Maybe<AddTaskPayload>,
  updateTask?: Maybe<UpdateTaskPayload>,
  deleteTask?: Maybe<DeleteTaskPayload>,
  addColumn?: Maybe<AddColumnPayload>,
  updateColumn?: Maybe<UpdateColumnPayload>,
  deleteColumn?: Maybe<DeleteColumnPayload>,
  addBoard?: Maybe<AddBoardPayload>,
  updateBoard?: Maybe<UpdateBoardPayload>,
  deleteBoard?: Maybe<DeleteBoardPayload>,
  addWorker?: Maybe<AddWorkerPayload>,
  updateWorker?: Maybe<UpdateWorkerPayload>,
  deleteWorker?: Maybe<DeleteWorkerPayload>,
  addUser?: Maybe<AddUserPayload>,
  updateUser?: Maybe<UpdateUserPayload>,
  deleteUser?: Maybe<DeleteUserPayload>,
  addProject?: Maybe<AddProjectPayload>,
  updateProject?: Maybe<UpdateProjectPayload>,
  deleteProject?: Maybe<DeleteProjectPayload>,
};


export type MutationAddCommentArgs = {
  input: Array<AddCommentInput>
};


export type MutationUpdateCommentArgs = {
  input: UpdateCommentInput
};


export type MutationDeleteCommentArgs = {
  filter: CommentFilter
};


export type MutationAddTagArgs = {
  input: Array<AddTagInput>
};


export type MutationUpdateTagArgs = {
  input: UpdateTagInput
};


export type MutationDeleteTagArgs = {
  filter: TagFilter
};


export type MutationAddTaskArgs = {
  input: Array<AddTaskInput>
};


export type MutationUpdateTaskArgs = {
  input: UpdateTaskInput
};


export type MutationDeleteTaskArgs = {
  filter: TaskFilter
};


export type MutationAddColumnArgs = {
  input: Array<AddColumnInput>
};


export type MutationUpdateColumnArgs = {
  input: UpdateColumnInput
};


export type MutationDeleteColumnArgs = {
  filter: ColumnFilter
};


export type MutationAddBoardArgs = {
  input: Array<AddBoardInput>
};


export type MutationUpdateBoardArgs = {
  input: UpdateBoardInput
};


export type MutationDeleteBoardArgs = {
  filter: BoardFilter
};


export type MutationAddWorkerArgs = {
  input: Array<AddWorkerInput>
};


export type MutationUpdateWorkerArgs = {
  input: UpdateWorkerInput
};


export type MutationDeleteWorkerArgs = {
  filter: WorkerFilter
};


export type MutationAddUserArgs = {
  input: Array<AddUserInput>
};


export type MutationUpdateUserArgs = {
  input: UpdateUserInput
};


export type MutationDeleteUserArgs = {
  filter: UserFilter
};


export type MutationAddProjectArgs = {
  input: Array<AddProjectInput>
};


export type MutationUpdateProjectArgs = {
  input: UpdateProjectInput
};


export type MutationDeleteProjectArgs = {
  filter: ProjectFilter
};

export type Project = {
   __typename?: 'Project',
  id: Scalars['ID'],
  title: Scalars['String'],
  tags?: Maybe<Array<Maybe<Tag>>>,
  tasks?: Maybe<Array<Maybe<Task>>>,
  boards?: Maybe<Array<Maybe<Board>>>,
  workers?: Maybe<Array<Maybe<Worker>>>,
};


export type ProjectTagsArgs = {
  filter?: Maybe<TagFilter>,
  order?: Maybe<TagOrder>,
  first?: Maybe<Scalars['Int']>,
  offset?: Maybe<Scalars['Int']>
};


export type ProjectTasksArgs = {
  filter?: Maybe<TaskFilter>,
  order?: Maybe<TaskOrder>,
  first?: Maybe<Scalars['Int']>,
  offset?: Maybe<Scalars['Int']>
};


export type ProjectBoardsArgs = {
  filter?: Maybe<BoardFilter>,
  order?: Maybe<BoardOrder>,
  first?: Maybe<Scalars['Int']>,
  offset?: Maybe<Scalars['Int']>
};


export type ProjectWorkersArgs = {
  filter?: Maybe<WorkerFilter>,
  order?: Maybe<WorkerOrder>,
  first?: Maybe<Scalars['Int']>,
  offset?: Maybe<Scalars['Int']>
};

export type ProjectFilter = {
  id?: Maybe<Array<Scalars['ID']>>,
  title?: Maybe<StringHashFilter>,
  and?: Maybe<ProjectFilter>,
  or?: Maybe<ProjectFilter>,
  not?: Maybe<ProjectFilter>,
};

export type ProjectOrder = {
  asc?: Maybe<ProjectOrderable>,
  desc?: Maybe<ProjectOrderable>,
  then?: Maybe<ProjectOrder>,
};

export enum ProjectOrderable {
  Title = 'title'
}

export type ProjectPatch = {
  title?: Maybe<Scalars['String']>,
  tags?: Maybe<Array<Maybe<TagRef>>>,
  tasks?: Maybe<Array<Maybe<TaskRef>>>,
  boards?: Maybe<Array<Maybe<BoardRef>>>,
  workers?: Maybe<Array<Maybe<WorkerRef>>>,
};

export type ProjectRef = {
  id?: Maybe<Scalars['ID']>,
  title?: Maybe<Scalars['String']>,
  tags?: Maybe<Array<Maybe<TagRef>>>,
  tasks?: Maybe<Array<Maybe<TaskRef>>>,
  boards?: Maybe<Array<Maybe<BoardRef>>>,
  workers?: Maybe<Array<Maybe<WorkerRef>>>,
};

export type Query = {
   __typename?: 'Query',
  getComment?: Maybe<Comment>,
  queryComment?: Maybe<Array<Maybe<Comment>>>,
  getTag?: Maybe<Tag>,
  queryTag?: Maybe<Array<Maybe<Tag>>>,
  getTask?: Maybe<Task>,
  queryTask?: Maybe<Array<Maybe<Task>>>,
  getColumn?: Maybe<Column>,
  queryColumn?: Maybe<Array<Maybe<Column>>>,
  getBoard?: Maybe<Board>,
  queryBoard?: Maybe<Array<Maybe<Board>>>,
  getWorker?: Maybe<Worker>,
  queryWorker?: Maybe<Array<Maybe<Worker>>>,
  getUser?: Maybe<User>,
  queryUser?: Maybe<Array<Maybe<User>>>,
  getProject?: Maybe<Project>,
  queryProject?: Maybe<Array<Maybe<Project>>>,
};


export type QueryGetCommentArgs = {
  id: Scalars['ID']
};


export type QueryQueryCommentArgs = {
  filter?: Maybe<CommentFilter>,
  order?: Maybe<CommentOrder>,
  first?: Maybe<Scalars['Int']>,
  offset?: Maybe<Scalars['Int']>
};


export type QueryGetTagArgs = {
  id: Scalars['ID']
};


export type QueryQueryTagArgs = {
  filter?: Maybe<TagFilter>,
  order?: Maybe<TagOrder>,
  first?: Maybe<Scalars['Int']>,
  offset?: Maybe<Scalars['Int']>
};


export type QueryGetTaskArgs = {
  id: Scalars['ID']
};


export type QueryQueryTaskArgs = {
  filter?: Maybe<TaskFilter>,
  order?: Maybe<TaskOrder>,
  first?: Maybe<Scalars['Int']>,
  offset?: Maybe<Scalars['Int']>
};


export type QueryGetColumnArgs = {
  id: Scalars['ID']
};


export type QueryQueryColumnArgs = {
  filter?: Maybe<ColumnFilter>,
  order?: Maybe<ColumnOrder>,
  first?: Maybe<Scalars['Int']>,
  offset?: Maybe<Scalars['Int']>
};


export type QueryGetBoardArgs = {
  id: Scalars['ID']
};


export type QueryQueryBoardArgs = {
  filter?: Maybe<BoardFilter>,
  order?: Maybe<BoardOrder>,
  first?: Maybe<Scalars['Int']>,
  offset?: Maybe<Scalars['Int']>
};


export type QueryGetWorkerArgs = {
  id: Scalars['ID']
};


export type QueryQueryWorkerArgs = {
  filter?: Maybe<WorkerFilter>,
  order?: Maybe<WorkerOrder>,
  first?: Maybe<Scalars['Int']>,
  offset?: Maybe<Scalars['Int']>
};


export type QueryGetUserArgs = {
  id: Scalars['ID']
};


export type QueryQueryUserArgs = {
  filter?: Maybe<UserFilter>,
  order?: Maybe<UserOrder>,
  first?: Maybe<Scalars['Int']>,
  offset?: Maybe<Scalars['Int']>
};


export type QueryGetProjectArgs = {
  id: Scalars['ID']
};


export type QueryQueryProjectArgs = {
  filter?: Maybe<ProjectFilter>,
  order?: Maybe<ProjectOrder>,
  first?: Maybe<Scalars['Int']>,
  offset?: Maybe<Scalars['Int']>
};

export type StringExactFilter = {
  eq?: Maybe<Scalars['String']>,
  le?: Maybe<Scalars['String']>,
  lt?: Maybe<Scalars['String']>,
  ge?: Maybe<Scalars['String']>,
  gt?: Maybe<Scalars['String']>,
};

export type StringFullTextFilter = {
  alloftext?: Maybe<Scalars['String']>,
  anyoftext?: Maybe<Scalars['String']>,
};

export type StringHashFilter = {
  eq?: Maybe<Scalars['String']>,
};

export type StringRegExpFilter = {
  regexp?: Maybe<Scalars['String']>,
};

export type StringTermFilter = {
  allofterms?: Maybe<Scalars['String']>,
  anyofterms?: Maybe<Scalars['String']>,
};

export type Tag = {
   __typename?: 'Tag',
  id: Scalars['ID'],
  title: Scalars['String'],
};

export type TagFilter = {
  id?: Maybe<Array<Scalars['ID']>>,
  not?: Maybe<TagFilter>,
};

export type TagOrder = {
  asc?: Maybe<TagOrderable>,
  desc?: Maybe<TagOrderable>,
  then?: Maybe<TagOrder>,
};

export enum TagOrderable {
  Title = 'title'
}

export type TagPatch = {
  title?: Maybe<Scalars['String']>,
};

export type TagRef = {
  id?: Maybe<Scalars['ID']>,
  title?: Maybe<Scalars['String']>,
};

export type Task = {
   __typename?: 'Task',
  id: Scalars['ID'],
  title: Scalars['String'],
  hours: Scalars['Int'],
  deadline: Scalars['String'],
  content: Scalars['String'],
  priority: Scalars['Int'],
  complete: Scalars['Boolean'],
  likes?: Maybe<Array<Maybe<Worker>>>,
  comments?: Maybe<Array<Maybe<Comment>>>,
};


export type TaskLikesArgs = {
  filter?: Maybe<WorkerFilter>,
  order?: Maybe<WorkerOrder>,
  first?: Maybe<Scalars['Int']>,
  offset?: Maybe<Scalars['Int']>
};


export type TaskCommentsArgs = {
  filter?: Maybe<CommentFilter>,
  order?: Maybe<CommentOrder>,
  first?: Maybe<Scalars['Int']>,
  offset?: Maybe<Scalars['Int']>
};

export type TaskFilter = {
  id?: Maybe<Array<Scalars['ID']>>,
  title?: Maybe<StringHashFilter>,
  and?: Maybe<TaskFilter>,
  or?: Maybe<TaskFilter>,
  not?: Maybe<TaskFilter>,
};

export type TaskOrder = {
  asc?: Maybe<TaskOrderable>,
  desc?: Maybe<TaskOrderable>,
  then?: Maybe<TaskOrder>,
};

export enum TaskOrderable {
  Title = 'title',
  Hours = 'hours',
  Deadline = 'deadline',
  Content = 'content',
  Priority = 'priority'
}

export type TaskPatch = {
  title?: Maybe<Scalars['String']>,
  hours?: Maybe<Scalars['Int']>,
  deadline?: Maybe<Scalars['String']>,
  content?: Maybe<Scalars['String']>,
  priority?: Maybe<Scalars['Int']>,
  complete?: Maybe<Scalars['Boolean']>,
  likes?: Maybe<Array<Maybe<WorkerRef>>>,
  comments?: Maybe<Array<Maybe<CommentRef>>>,
};

export type TaskRef = {
  id?: Maybe<Scalars['ID']>,
  title?: Maybe<Scalars['String']>,
  hours?: Maybe<Scalars['Int']>,
  deadline?: Maybe<Scalars['String']>,
  content?: Maybe<Scalars['String']>,
  priority?: Maybe<Scalars['Int']>,
  complete?: Maybe<Scalars['Boolean']>,
  likes?: Maybe<Array<Maybe<WorkerRef>>>,
  comments?: Maybe<Array<Maybe<CommentRef>>>,
};

export type UpdateBoardInput = {
  filter: BoardFilter,
  set?: Maybe<BoardPatch>,
  remove?: Maybe<BoardPatch>,
};

export type UpdateBoardPayload = {
   __typename?: 'UpdateBoardPayload',
  board?: Maybe<Array<Maybe<Board>>>,
};


export type UpdateBoardPayloadBoardArgs = {
  filter?: Maybe<BoardFilter>,
  order?: Maybe<BoardOrder>,
  first?: Maybe<Scalars['Int']>,
  offset?: Maybe<Scalars['Int']>
};

export type UpdateColumnInput = {
  filter: ColumnFilter,
  set?: Maybe<ColumnPatch>,
  remove?: Maybe<ColumnPatch>,
};

export type UpdateColumnPayload = {
   __typename?: 'UpdateColumnPayload',
  column?: Maybe<Array<Maybe<Column>>>,
};


export type UpdateColumnPayloadColumnArgs = {
  filter?: Maybe<ColumnFilter>,
  order?: Maybe<ColumnOrder>,
  first?: Maybe<Scalars['Int']>,
  offset?: Maybe<Scalars['Int']>
};

export type UpdateCommentInput = {
  filter: CommentFilter,
  set?: Maybe<CommentPatch>,
  remove?: Maybe<CommentPatch>,
};

export type UpdateCommentPayload = {
   __typename?: 'UpdateCommentPayload',
  comment?: Maybe<Array<Maybe<Comment>>>,
};


export type UpdateCommentPayloadCommentArgs = {
  filter?: Maybe<CommentFilter>,
  order?: Maybe<CommentOrder>,
  first?: Maybe<Scalars['Int']>,
  offset?: Maybe<Scalars['Int']>
};

export type UpdateProjectInput = {
  filter: ProjectFilter,
  set?: Maybe<ProjectPatch>,
  remove?: Maybe<ProjectPatch>,
};

export type UpdateProjectPayload = {
   __typename?: 'UpdateProjectPayload',
  project?: Maybe<Array<Maybe<Project>>>,
};


export type UpdateProjectPayloadProjectArgs = {
  filter?: Maybe<ProjectFilter>,
  order?: Maybe<ProjectOrder>,
  first?: Maybe<Scalars['Int']>,
  offset?: Maybe<Scalars['Int']>
};

export type UpdateTagInput = {
  filter: TagFilter,
  set?: Maybe<TagPatch>,
  remove?: Maybe<TagPatch>,
};

export type UpdateTagPayload = {
   __typename?: 'UpdateTagPayload',
  tag?: Maybe<Array<Maybe<Tag>>>,
};


export type UpdateTagPayloadTagArgs = {
  filter?: Maybe<TagFilter>,
  order?: Maybe<TagOrder>,
  first?: Maybe<Scalars['Int']>,
  offset?: Maybe<Scalars['Int']>
};

export type UpdateTaskInput = {
  filter: TaskFilter,
  set?: Maybe<TaskPatch>,
  remove?: Maybe<TaskPatch>,
};

export type UpdateTaskPayload = {
   __typename?: 'UpdateTaskPayload',
  task?: Maybe<Array<Maybe<Task>>>,
};


export type UpdateTaskPayloadTaskArgs = {
  filter?: Maybe<TaskFilter>,
  order?: Maybe<TaskOrder>,
  first?: Maybe<Scalars['Int']>,
  offset?: Maybe<Scalars['Int']>
};

export type UpdateUserInput = {
  filter: UserFilter,
  set?: Maybe<UserPatch>,
  remove?: Maybe<UserPatch>,
};

export type UpdateUserPayload = {
   __typename?: 'UpdateUserPayload',
  user?: Maybe<Array<Maybe<User>>>,
};


export type UpdateUserPayloadUserArgs = {
  filter?: Maybe<UserFilter>,
  order?: Maybe<UserOrder>,
  first?: Maybe<Scalars['Int']>,
  offset?: Maybe<Scalars['Int']>
};

export type UpdateWorkerInput = {
  filter: WorkerFilter,
  set?: Maybe<WorkerPatch>,
  remove?: Maybe<WorkerPatch>,
};

export type UpdateWorkerPayload = {
   __typename?: 'UpdateWorkerPayload',
  worker?: Maybe<Array<Maybe<Worker>>>,
};


export type UpdateWorkerPayloadWorkerArgs = {
  filter?: Maybe<WorkerFilter>,
  order?: Maybe<WorkerOrder>,
  first?: Maybe<Scalars['Int']>,
  offset?: Maybe<Scalars['Int']>
};

export type User = {
   __typename?: 'User',
  id: Scalars['ID'],
  username: Scalars['String'],
  password: Scalars['String'],
  location: Scalars['String'],
  roles?: Maybe<Array<Maybe<Worker>>>,
  stars?: Maybe<Array<Maybe<Task>>>,
};


export type UserRolesArgs = {
  filter?: Maybe<WorkerFilter>,
  order?: Maybe<WorkerOrder>,
  first?: Maybe<Scalars['Int']>,
  offset?: Maybe<Scalars['Int']>
};


export type UserStarsArgs = {
  filter?: Maybe<TaskFilter>,
  order?: Maybe<TaskOrder>,
  first?: Maybe<Scalars['Int']>,
  offset?: Maybe<Scalars['Int']>
};

export type UserFilter = {
  id?: Maybe<Array<Scalars['ID']>>,
  username?: Maybe<StringHashFilter>,
  and?: Maybe<UserFilter>,
  or?: Maybe<UserFilter>,
  not?: Maybe<UserFilter>,
};

export type UserOrder = {
  asc?: Maybe<UserOrderable>,
  desc?: Maybe<UserOrderable>,
  then?: Maybe<UserOrder>,
};

export enum UserOrderable {
  Username = 'username',
  Password = 'password',
  Location = 'location'
}

export type UserPatch = {
  username?: Maybe<Scalars['String']>,
  password?: Maybe<Scalars['String']>,
  location?: Maybe<Scalars['String']>,
  roles?: Maybe<Array<Maybe<WorkerRef>>>,
  stars?: Maybe<Array<Maybe<TaskRef>>>,
};

export type UserRef = {
  id?: Maybe<Scalars['ID']>,
  username?: Maybe<Scalars['String']>,
  password?: Maybe<Scalars['String']>,
  location?: Maybe<Scalars['String']>,
  roles?: Maybe<Array<Maybe<WorkerRef>>>,
  stars?: Maybe<Array<Maybe<TaskRef>>>,
};

export type Worker = {
   __typename?: 'Worker',
  id: Scalars['ID'],
  name: Scalars['String'],
  availability: Scalars['Int'],
  user: User,
  tags?: Maybe<Array<Maybe<Tag>>>,
  tasks?: Maybe<Array<Maybe<Task>>>,
};


export type WorkerUserArgs = {
  filter?: Maybe<UserFilter>
};


export type WorkerTagsArgs = {
  filter?: Maybe<TagFilter>,
  order?: Maybe<TagOrder>,
  first?: Maybe<Scalars['Int']>,
  offset?: Maybe<Scalars['Int']>
};


export type WorkerTasksArgs = {
  filter?: Maybe<TaskFilter>,
  order?: Maybe<TaskOrder>,
  first?: Maybe<Scalars['Int']>,
  offset?: Maybe<Scalars['Int']>
};

export type WorkerFilter = {
  id?: Maybe<Array<Scalars['ID']>>,
  name?: Maybe<StringHashFilter>,
  and?: Maybe<WorkerFilter>,
  or?: Maybe<WorkerFilter>,
  not?: Maybe<WorkerFilter>,
};

export type WorkerOrder = {
  asc?: Maybe<WorkerOrderable>,
  desc?: Maybe<WorkerOrderable>,
  then?: Maybe<WorkerOrder>,
};

export enum WorkerOrderable {
  Name = 'name',
  Availability = 'availability'
}

export type WorkerPatch = {
  name?: Maybe<Scalars['String']>,
  availability?: Maybe<Scalars['Int']>,
  user?: Maybe<UserRef>,
  tags?: Maybe<Array<Maybe<TagRef>>>,
  tasks?: Maybe<Array<Maybe<TaskRef>>>,
};

export type WorkerRef = {
  id?: Maybe<Scalars['ID']>,
  name?: Maybe<Scalars['String']>,
  availability?: Maybe<Scalars['Int']>,
  user?: Maybe<UserRef>,
  tags?: Maybe<Array<Maybe<TagRef>>>,
  tasks?: Maybe<Array<Maybe<TaskRef>>>,
};

export type AddBoardMutationVariables = {
  filter?: Maybe<WorkerFilter>,
  order?: Maybe<WorkerOrder>,
  first?: Maybe<Scalars['Int']>,
  offset?: Maybe<Scalars['Int']>,
  filter1?: Maybe<CommentFilter>,
  order1?: Maybe<CommentOrder>,
  first1?: Maybe<Scalars['Int']>,
  offset1?: Maybe<Scalars['Int']>,
  filter2?: Maybe<TaskFilter>,
  order2?: Maybe<TaskOrder>,
  first2?: Maybe<Scalars['Int']>,
  offset2?: Maybe<Scalars['Int']>,
  filter3?: Maybe<ColumnFilter>,
  order3?: Maybe<ColumnOrder>,
  first3?: Maybe<Scalars['Int']>,
  offset3?: Maybe<Scalars['Int']>,
  filter4?: Maybe<BoardFilter>,
  order4?: Maybe<BoardOrder>,
  first4?: Maybe<Scalars['Int']>,
  offset4?: Maybe<Scalars['Int']>,
  input: Array<AddBoardInput>
};


export type AddBoardMutation = (
  { __typename?: 'Mutation' }
  & { addBoard: Maybe<(
    { __typename?: 'AddBoardPayload' }
    & { board: Maybe<Array<Maybe<(
      { __typename?: 'Board' }
      & Pick<Board, 'id' | 'title' | 'order'>
      & { columns: Maybe<Array<Maybe<(
        { __typename?: 'Column' }
        & Pick<Column, 'id' | 'title'>
        & { tasks: Maybe<Array<Maybe<(
          { __typename?: 'Task' }
          & Pick<Task, 'id' | 'title' | 'hours' | 'deadline' | 'content' | 'priority' | 'complete'>
          & { likes: Maybe<Array<Maybe<(
            { __typename?: 'Worker' }
            & Pick<Worker, 'id' | 'name' | 'availability'>
          )>>>, comments: Maybe<Array<Maybe<(
            { __typename?: 'Comment' }
            & Pick<Comment, 'id' | 'content'>
          )>>> }
        )>>> }
      )>>> }
    )>>> }
  )> }
);

export type AddColumnMutationVariables = {
  filter?: Maybe<UserFilter>,
  filter1?: Maybe<TagFilter>,
  order?: Maybe<TagOrder>,
  first?: Maybe<Scalars['Int']>,
  offset?: Maybe<Scalars['Int']>,
  filter2?: Maybe<TaskFilter>,
  order1?: Maybe<TaskOrder>,
  first1?: Maybe<Scalars['Int']>,
  offset1?: Maybe<Scalars['Int']>,
  filter3?: Maybe<WorkerFilter>,
  order2?: Maybe<WorkerOrder>,
  first2?: Maybe<Scalars['Int']>,
  offset2?: Maybe<Scalars['Int']>,
  filter4?: Maybe<WorkerFilter>,
  filter5?: Maybe<CommentFilter>,
  order3?: Maybe<CommentOrder>,
  first3?: Maybe<Scalars['Int']>,
  offset3?: Maybe<Scalars['Int']>,
  filter6?: Maybe<TaskFilter>,
  order4?: Maybe<TaskOrder>,
  first4?: Maybe<Scalars['Int']>,
  offset4?: Maybe<Scalars['Int']>,
  filter7?: Maybe<ColumnFilter>,
  order5?: Maybe<ColumnOrder>,
  first5?: Maybe<Scalars['Int']>,
  offset5?: Maybe<Scalars['Int']>,
  input: Array<AddColumnInput>
};


export type AddColumnMutation = (
  { __typename?: 'Mutation' }
  & { addColumn: Maybe<(
    { __typename?: 'AddColumnPayload' }
    & { column: Maybe<Array<Maybe<(
      { __typename?: 'Column' }
      & Pick<Column, 'id' | 'title'>
      & { tasks: Maybe<Array<Maybe<(
        { __typename?: 'Task' }
        & Pick<Task, 'id' | 'title' | 'hours' | 'deadline' | 'content' | 'priority' | 'complete'>
        & { likes: Maybe<Array<Maybe<(
          { __typename?: 'Worker' }
          & Pick<Worker, 'id' | 'name' | 'availability'>
          & { user: (
            { __typename?: 'User' }
            & Pick<User, 'id' | 'username' | 'password' | 'location'>
          ), tags: Maybe<Array<Maybe<(
            { __typename?: 'Tag' }
            & Pick<Tag, 'id' | 'title'>
          )>>>, tasks: Maybe<Array<Maybe<(
            { __typename?: 'Task' }
            & Pick<Task, 'id' | 'title' | 'hours' | 'deadline' | 'content' | 'priority' | 'complete'>
          )>>> }
        )>>>, comments: Maybe<Array<Maybe<(
          { __typename?: 'Comment' }
          & Pick<Comment, 'id' | 'content'>
          & { worker: (
            { __typename?: 'Worker' }
            & Pick<Worker, 'id' | 'name' | 'availability'>
          ) }
        )>>> }
      )>>> }
    )>>> }
  )> }
);

export type AddCommentMutationVariables = {
  filter?: Maybe<WorkerFilter>,
  order?: Maybe<WorkerOrder>,
  first?: Maybe<Scalars['Int']>,
  offset?: Maybe<Scalars['Int']>,
  filter1?: Maybe<TaskFilter>,
  order1?: Maybe<TaskOrder>,
  first1?: Maybe<Scalars['Int']>,
  offset1?: Maybe<Scalars['Int']>,
  filter2?: Maybe<UserFilter>,
  filter3?: Maybe<TagFilter>,
  order2?: Maybe<TagOrder>,
  first2?: Maybe<Scalars['Int']>,
  offset2?: Maybe<Scalars['Int']>,
  filter4?: Maybe<WorkerFilter>,
  order3?: Maybe<WorkerOrder>,
  first3?: Maybe<Scalars['Int']>,
  offset3?: Maybe<Scalars['Int']>,
  filter5?: Maybe<CommentFilter>,
  order4?: Maybe<CommentOrder>,
  first4?: Maybe<Scalars['Int']>,
  offset4?: Maybe<Scalars['Int']>,
  filter6?: Maybe<TaskFilter>,
  order5?: Maybe<TaskOrder>,
  first5?: Maybe<Scalars['Int']>,
  offset5?: Maybe<Scalars['Int']>,
  filter7?: Maybe<WorkerFilter>,
  filter8?: Maybe<CommentFilter>,
  order6?: Maybe<CommentOrder>,
  first6?: Maybe<Scalars['Int']>,
  offset6?: Maybe<Scalars['Int']>,
  input: Array<AddCommentInput>
};


export type AddCommentMutation = (
  { __typename?: 'Mutation' }
  & { addComment: Maybe<(
    { __typename?: 'AddCommentPayload' }
    & { comment: Maybe<Array<Maybe<(
      { __typename?: 'Comment' }
      & Pick<Comment, 'id' | 'content'>
      & { worker: (
        { __typename?: 'Worker' }
        & Pick<Worker, 'id' | 'name' | 'availability'>
        & { user: (
          { __typename?: 'User' }
          & Pick<User, 'id' | 'username' | 'password' | 'location'>
          & { roles: Maybe<Array<Maybe<(
            { __typename?: 'Worker' }
            & Pick<Worker, 'id' | 'name' | 'availability'>
          )>>>, stars: Maybe<Array<Maybe<(
            { __typename?: 'Task' }
            & Pick<Task, 'id' | 'title' | 'hours' | 'deadline' | 'content' | 'priority' | 'complete'>
          )>>> }
        ), tags: Maybe<Array<Maybe<(
          { __typename?: 'Tag' }
          & Pick<Tag, 'id' | 'title'>
        )>>>, tasks: Maybe<Array<Maybe<(
          { __typename?: 'Task' }
          & Pick<Task, 'id' | 'title' | 'hours' | 'deadline' | 'content' | 'priority' | 'complete'>
          & { likes: Maybe<Array<Maybe<(
            { __typename?: 'Worker' }
            & Pick<Worker, 'id' | 'name' | 'availability'>
          )>>>, comments: Maybe<Array<Maybe<(
            { __typename?: 'Comment' }
            & Pick<Comment, 'id' | 'content'>
          )>>> }
        )>>> }
      ) }
    )>>> }
  )> }
);

export type AddProjectMutationVariables = {
  filter?: Maybe<TagFilter>,
  order?: Maybe<TagOrder>,
  first?: Maybe<Scalars['Int']>,
  offset?: Maybe<Scalars['Int']>,
  filter1?: Maybe<UserFilter>,
  filter2?: Maybe<TagFilter>,
  order1?: Maybe<TagOrder>,
  first1?: Maybe<Scalars['Int']>,
  offset1?: Maybe<Scalars['Int']>,
  filter3?: Maybe<TaskFilter>,
  order2?: Maybe<TaskOrder>,
  first2?: Maybe<Scalars['Int']>,
  offset2?: Maybe<Scalars['Int']>,
  filter4?: Maybe<WorkerFilter>,
  order3?: Maybe<WorkerOrder>,
  first3?: Maybe<Scalars['Int']>,
  offset3?: Maybe<Scalars['Int']>,
  filter5?: Maybe<WorkerFilter>,
  filter6?: Maybe<CommentFilter>,
  order4?: Maybe<CommentOrder>,
  first4?: Maybe<Scalars['Int']>,
  offset4?: Maybe<Scalars['Int']>,
  filter7?: Maybe<TaskFilter>,
  order5?: Maybe<TaskOrder>,
  first5?: Maybe<Scalars['Int']>,
  offset5?: Maybe<Scalars['Int']>,
  filter8?: Maybe<TaskFilter>,
  order6?: Maybe<TaskOrder>,
  first6?: Maybe<Scalars['Int']>,
  offset6?: Maybe<Scalars['Int']>,
  filter9?: Maybe<ColumnFilter>,
  order7?: Maybe<ColumnOrder>,
  first7?: Maybe<Scalars['Int']>,
  offset7?: Maybe<Scalars['Int']>,
  filter10?: Maybe<BoardFilter>,
  order8?: Maybe<BoardOrder>,
  first8?: Maybe<Scalars['Int']>,
  offset8?: Maybe<Scalars['Int']>,
  filter11?: Maybe<WorkerFilter>,
  order9?: Maybe<WorkerOrder>,
  first9?: Maybe<Scalars['Int']>,
  offset9?: Maybe<Scalars['Int']>,
  filter12?: Maybe<TaskFilter>,
  order10?: Maybe<TaskOrder>,
  first10?: Maybe<Scalars['Int']>,
  offset10?: Maybe<Scalars['Int']>,
  filter13?: Maybe<UserFilter>,
  filter14?: Maybe<TagFilter>,
  order11?: Maybe<TagOrder>,
  first11?: Maybe<Scalars['Int']>,
  offset11?: Maybe<Scalars['Int']>,
  filter15?: Maybe<TaskFilter>,
  order12?: Maybe<TaskOrder>,
  first12?: Maybe<Scalars['Int']>,
  offset12?: Maybe<Scalars['Int']>,
  filter16?: Maybe<WorkerFilter>,
  order13?: Maybe<WorkerOrder>,
  first13?: Maybe<Scalars['Int']>,
  offset13?: Maybe<Scalars['Int']>,
  filter17?: Maybe<ProjectFilter>,
  order14?: Maybe<ProjectOrder>,
  first14?: Maybe<Scalars['Int']>,
  offset14?: Maybe<Scalars['Int']>,
  input: Array<AddProjectInput>
};


export type AddProjectMutation = (
  { __typename?: 'Mutation' }
  & { addProject: Maybe<(
    { __typename?: 'AddProjectPayload' }
    & { project: Maybe<Array<Maybe<(
      { __typename?: 'Project' }
      & Pick<Project, 'id' | 'title'>
      & { tags: Maybe<Array<Maybe<(
        { __typename?: 'Tag' }
        & Pick<Tag, 'id' | 'title'>
      )>>>, tasks: Maybe<Array<Maybe<(
        { __typename?: 'Task' }
        & Pick<Task, 'id' | 'title' | 'hours' | 'deadline' | 'content' | 'priority' | 'complete'>
        & { likes: Maybe<Array<Maybe<(
          { __typename?: 'Worker' }
          & Pick<Worker, 'id' | 'name' | 'availability'>
          & { user: (
            { __typename?: 'User' }
            & Pick<User, 'id' | 'username' | 'password' | 'location'>
          ), tags: Maybe<Array<Maybe<(
            { __typename?: 'Tag' }
            & Pick<Tag, 'id' | 'title'>
          )>>>, tasks: Maybe<Array<Maybe<(
            { __typename?: 'Task' }
            & Pick<Task, 'id' | 'title' | 'hours' | 'deadline' | 'content' | 'priority' | 'complete'>
          )>>> }
        )>>>, comments: Maybe<Array<Maybe<(
          { __typename?: 'Comment' }
          & Pick<Comment, 'id' | 'content'>
          & { worker: (
            { __typename?: 'Worker' }
            & Pick<Worker, 'id' | 'name' | 'availability'>
          ) }
        )>>> }
      )>>>, boards: Maybe<Array<Maybe<(
        { __typename?: 'Board' }
        & Pick<Board, 'id' | 'title' | 'order'>
        & { columns: Maybe<Array<Maybe<(
          { __typename?: 'Column' }
          & Pick<Column, 'id' | 'title'>
          & { tasks: Maybe<Array<Maybe<(
            { __typename?: 'Task' }
            & Pick<Task, 'id' | 'title' | 'hours' | 'deadline' | 'content' | 'priority' | 'complete'>
          )>>> }
        )>>> }
      )>>>, workers: Maybe<Array<Maybe<(
        { __typename?: 'Worker' }
        & Pick<Worker, 'id' | 'name' | 'availability'>
        & { user: (
          { __typename?: 'User' }
          & Pick<User, 'id' | 'username' | 'password' | 'location'>
          & { roles: Maybe<Array<Maybe<(
            { __typename?: 'Worker' }
            & Pick<Worker, 'id' | 'name' | 'availability'>
          )>>>, stars: Maybe<Array<Maybe<(
            { __typename?: 'Task' }
            & Pick<Task, 'id' | 'title' | 'hours' | 'deadline' | 'content' | 'priority' | 'complete'>
          )>>> }
        ), tags: Maybe<Array<Maybe<(
          { __typename?: 'Tag' }
          & Pick<Tag, 'id' | 'title'>
        )>>>, tasks: Maybe<Array<Maybe<(
          { __typename?: 'Task' }
          & Pick<Task, 'id' | 'title' | 'hours' | 'deadline' | 'content' | 'priority' | 'complete'>
        )>>> }
      )>>> }
    )>>> }
  )> }
);

export type AddTagMutationVariables = {
  filter?: Maybe<TagFilter>,
  order?: Maybe<TagOrder>,
  first?: Maybe<Scalars['Int']>,
  offset?: Maybe<Scalars['Int']>,
  input: Array<AddTagInput>
};


export type AddTagMutation = (
  { __typename?: 'Mutation' }
  & { addTag: Maybe<(
    { __typename?: 'AddTagPayload' }
    & { tag: Maybe<Array<Maybe<(
      { __typename?: 'Tag' }
      & Pick<Tag, 'id' | 'title'>
    )>>> }
  )> }
);

export type AddTaskMutationVariables = {
  filter?: Maybe<WorkerFilter>,
  order?: Maybe<WorkerOrder>,
  first?: Maybe<Scalars['Int']>,
  offset?: Maybe<Scalars['Int']>,
  filter1?: Maybe<TaskFilter>,
  order1?: Maybe<TaskOrder>,
  first1?: Maybe<Scalars['Int']>,
  offset1?: Maybe<Scalars['Int']>,
  filter2?: Maybe<UserFilter>,
  filter3?: Maybe<TagFilter>,
  order2?: Maybe<TagOrder>,
  first2?: Maybe<Scalars['Int']>,
  offset2?: Maybe<Scalars['Int']>,
  filter4?: Maybe<WorkerFilter>,
  order3?: Maybe<WorkerOrder>,
  first3?: Maybe<Scalars['Int']>,
  offset3?: Maybe<Scalars['Int']>,
  filter5?: Maybe<CommentFilter>,
  order4?: Maybe<CommentOrder>,
  first4?: Maybe<Scalars['Int']>,
  offset4?: Maybe<Scalars['Int']>,
  filter6?: Maybe<TaskFilter>,
  order5?: Maybe<TaskOrder>,
  first5?: Maybe<Scalars['Int']>,
  offset5?: Maybe<Scalars['Int']>,
  filter7?: Maybe<WorkerFilter>,
  order6?: Maybe<WorkerOrder>,
  first6?: Maybe<Scalars['Int']>,
  offset6?: Maybe<Scalars['Int']>,
  filter8?: Maybe<UserFilter>,
  filter9?: Maybe<TagFilter>,
  order7?: Maybe<TagOrder>,
  first7?: Maybe<Scalars['Int']>,
  offset7?: Maybe<Scalars['Int']>,
  filter10?: Maybe<TaskFilter>,
  order8?: Maybe<TaskOrder>,
  first8?: Maybe<Scalars['Int']>,
  offset8?: Maybe<Scalars['Int']>,
  filter11?: Maybe<WorkerFilter>,
  filter12?: Maybe<CommentFilter>,
  order9?: Maybe<CommentOrder>,
  first9?: Maybe<Scalars['Int']>,
  offset9?: Maybe<Scalars['Int']>,
  filter13?: Maybe<TaskFilter>,
  order10?: Maybe<TaskOrder>,
  first10?: Maybe<Scalars['Int']>,
  offset10?: Maybe<Scalars['Int']>,
  input: Array<AddTaskInput>
};


export type AddTaskMutation = (
  { __typename?: 'Mutation' }
  & { addTask: Maybe<(
    { __typename?: 'AddTaskPayload' }
    & { task: Maybe<Array<Maybe<(
      { __typename?: 'Task' }
      & Pick<Task, 'id' | 'title' | 'hours' | 'deadline' | 'content' | 'priority' | 'complete'>
      & { likes: Maybe<Array<Maybe<(
        { __typename?: 'Worker' }
        & Pick<Worker, 'id' | 'name' | 'availability'>
        & { user: (
          { __typename?: 'User' }
          & Pick<User, 'id' | 'username' | 'password' | 'location'>
          & { roles: Maybe<Array<Maybe<(
            { __typename?: 'Worker' }
            & Pick<Worker, 'id' | 'name' | 'availability'>
          )>>>, stars: Maybe<Array<Maybe<(
            { __typename?: 'Task' }
            & Pick<Task, 'id' | 'title' | 'hours' | 'deadline' | 'content' | 'priority' | 'complete'>
          )>>> }
        ), tags: Maybe<Array<Maybe<(
          { __typename?: 'Tag' }
          & Pick<Tag, 'id' | 'title'>
        )>>>, tasks: Maybe<Array<Maybe<(
          { __typename?: 'Task' }
          & Pick<Task, 'id' | 'title' | 'hours' | 'deadline' | 'content' | 'priority' | 'complete'>
          & { likes: Maybe<Array<Maybe<(
            { __typename?: 'Worker' }
            & Pick<Worker, 'id' | 'name' | 'availability'>
          )>>>, comments: Maybe<Array<Maybe<(
            { __typename?: 'Comment' }
            & Pick<Comment, 'id' | 'content'>
          )>>> }
        )>>> }
      )>>>, comments: Maybe<Array<Maybe<(
        { __typename?: 'Comment' }
        & Pick<Comment, 'id' | 'content'>
        & { worker: (
          { __typename?: 'Worker' }
          & Pick<Worker, 'id' | 'name' | 'availability'>
          & { user: (
            { __typename?: 'User' }
            & Pick<User, 'id' | 'username' | 'password' | 'location'>
          ), tags: Maybe<Array<Maybe<(
            { __typename?: 'Tag' }
            & Pick<Tag, 'id' | 'title'>
          )>>>, tasks: Maybe<Array<Maybe<(
            { __typename?: 'Task' }
            & Pick<Task, 'id' | 'title' | 'hours' | 'deadline' | 'content' | 'priority' | 'complete'>
          )>>> }
        ) }
      )>>> }
    )>>> }
  )> }
);

export type AddUserMutationVariables = {
  filter?: Maybe<TaskFilter>,
  order?: Maybe<TaskOrder>,
  first?: Maybe<Scalars['Int']>,
  offset?: Maybe<Scalars['Int']>,
  filter1?: Maybe<UserFilter>,
  filter2?: Maybe<TagFilter>,
  order1?: Maybe<TagOrder>,
  first1?: Maybe<Scalars['Int']>,
  offset1?: Maybe<Scalars['Int']>,
  filter3?: Maybe<WorkerFilter>,
  order2?: Maybe<WorkerOrder>,
  first2?: Maybe<Scalars['Int']>,
  offset2?: Maybe<Scalars['Int']>,
  filter4?: Maybe<CommentFilter>,
  order3?: Maybe<CommentOrder>,
  first3?: Maybe<Scalars['Int']>,
  offset3?: Maybe<Scalars['Int']>,
  filter5?: Maybe<TaskFilter>,
  order4?: Maybe<TaskOrder>,
  first4?: Maybe<Scalars['Int']>,
  offset4?: Maybe<Scalars['Int']>,
  filter6?: Maybe<WorkerFilter>,
  order5?: Maybe<WorkerOrder>,
  first5?: Maybe<Scalars['Int']>,
  offset5?: Maybe<Scalars['Int']>,
  filter7?: Maybe<UserFilter>,
  order6?: Maybe<UserOrder>,
  first6?: Maybe<Scalars['Int']>,
  offset6?: Maybe<Scalars['Int']>,
  input: Array<AddUserInput>
};


export type AddUserMutation = (
  { __typename?: 'Mutation' }
  & { addUser: Maybe<(
    { __typename?: 'AddUserPayload' }
    & { user: Maybe<Array<Maybe<(
      { __typename?: 'User' }
      & Pick<User, 'id' | 'username' | 'password' | 'location'>
      & { roles: Maybe<Array<Maybe<(
        { __typename?: 'Worker' }
        & Pick<Worker, 'id' | 'name' | 'availability'>
        & { user: (
          { __typename?: 'User' }
          & Pick<User, 'id' | 'username' | 'password' | 'location'>
          & { stars: Maybe<Array<Maybe<(
            { __typename?: 'Task' }
            & Pick<Task, 'id' | 'title' | 'hours' | 'deadline' | 'content' | 'priority' | 'complete'>
          )>>> }
        ), tags: Maybe<Array<Maybe<(
          { __typename?: 'Tag' }
          & Pick<Tag, 'id' | 'title'>
        )>>>, tasks: Maybe<Array<Maybe<(
          { __typename?: 'Task' }
          & Pick<Task, 'id' | 'title' | 'hours' | 'deadline' | 'content' | 'priority' | 'complete'>
          & { likes: Maybe<Array<Maybe<(
            { __typename?: 'Worker' }
            & Pick<Worker, 'id' | 'name' | 'availability'>
          )>>>, comments: Maybe<Array<Maybe<(
            { __typename?: 'Comment' }
            & Pick<Comment, 'id' | 'content'>
          )>>> }
        )>>> }
      )>>> }
    )>>> }
  )> }
);

export type AddWorkerMutationVariables = {
  filter?: Maybe<UserFilter>,
  filter1?: Maybe<TagFilter>,
  order?: Maybe<TagOrder>,
  first?: Maybe<Scalars['Int']>,
  offset?: Maybe<Scalars['Int']>,
  filter2?: Maybe<TaskFilter>,
  order1?: Maybe<TaskOrder>,
  first1?: Maybe<Scalars['Int']>,
  offset1?: Maybe<Scalars['Int']>,
  filter3?: Maybe<WorkerFilter>,
  order2?: Maybe<WorkerOrder>,
  first2?: Maybe<Scalars['Int']>,
  offset2?: Maybe<Scalars['Int']>,
  filter4?: Maybe<WorkerFilter>,
  order3?: Maybe<WorkerOrder>,
  first3?: Maybe<Scalars['Int']>,
  offset3?: Maybe<Scalars['Int']>,
  filter5?: Maybe<CommentFilter>,
  order4?: Maybe<CommentOrder>,
  first4?: Maybe<Scalars['Int']>,
  offset4?: Maybe<Scalars['Int']>,
  filter6?: Maybe<TaskFilter>,
  order5?: Maybe<TaskOrder>,
  first5?: Maybe<Scalars['Int']>,
  offset5?: Maybe<Scalars['Int']>,
  filter7?: Maybe<UserFilter>,
  filter8?: Maybe<TagFilter>,
  order6?: Maybe<TagOrder>,
  first6?: Maybe<Scalars['Int']>,
  offset6?: Maybe<Scalars['Int']>,
  filter9?: Maybe<UserFilter>,
  filter10?: Maybe<TagFilter>,
  order7?: Maybe<TagOrder>,
  first7?: Maybe<Scalars['Int']>,
  offset7?: Maybe<Scalars['Int']>,
  filter11?: Maybe<TaskFilter>,
  order8?: Maybe<TaskOrder>,
  first8?: Maybe<Scalars['Int']>,
  offset8?: Maybe<Scalars['Int']>,
  filter12?: Maybe<WorkerFilter>,
  order9?: Maybe<WorkerOrder>,
  first9?: Maybe<Scalars['Int']>,
  offset9?: Maybe<Scalars['Int']>,
  filter13?: Maybe<WorkerFilter>,
  filter14?: Maybe<CommentFilter>,
  order10?: Maybe<CommentOrder>,
  first10?: Maybe<Scalars['Int']>,
  offset10?: Maybe<Scalars['Int']>,
  filter15?: Maybe<TaskFilter>,
  order11?: Maybe<TaskOrder>,
  first11?: Maybe<Scalars['Int']>,
  offset11?: Maybe<Scalars['Int']>,
  filter16?: Maybe<WorkerFilter>,
  order12?: Maybe<WorkerOrder>,
  first12?: Maybe<Scalars['Int']>,
  offset12?: Maybe<Scalars['Int']>,
  input: Array<AddWorkerInput>
};


export type AddWorkerMutation = (
  { __typename?: 'Mutation' }
  & { addWorker: Maybe<(
    { __typename?: 'AddWorkerPayload' }
    & { worker: Maybe<Array<Maybe<(
      { __typename?: 'Worker' }
      & Pick<Worker, 'id' | 'name' | 'availability'>
      & { user: (
        { __typename?: 'User' }
        & Pick<User, 'id' | 'username' | 'password' | 'location'>
        & { roles: Maybe<Array<Maybe<(
          { __typename?: 'Worker' }
          & Pick<Worker, 'id' | 'name' | 'availability'>
          & { user: (
            { __typename?: 'User' }
            & Pick<User, 'id' | 'username' | 'password' | 'location'>
          ), tags: Maybe<Array<Maybe<(
            { __typename?: 'Tag' }
            & Pick<Tag, 'id' | 'title'>
          )>>>, tasks: Maybe<Array<Maybe<(
            { __typename?: 'Task' }
            & Pick<Task, 'id' | 'title' | 'hours' | 'deadline' | 'content' | 'priority' | 'complete'>
          )>>> }
        )>>>, stars: Maybe<Array<Maybe<(
          { __typename?: 'Task' }
          & Pick<Task, 'id' | 'title' | 'hours' | 'deadline' | 'content' | 'priority' | 'complete'>
          & { likes: Maybe<Array<Maybe<(
            { __typename?: 'Worker' }
            & Pick<Worker, 'id' | 'name' | 'availability'>
          )>>>, comments: Maybe<Array<Maybe<(
            { __typename?: 'Comment' }
            & Pick<Comment, 'id' | 'content'>
          )>>> }
        )>>> }
      ), tags: Maybe<Array<Maybe<(
        { __typename?: 'Tag' }
        & Pick<Tag, 'id' | 'title'>
      )>>>, tasks: Maybe<Array<Maybe<(
        { __typename?: 'Task' }
        & Pick<Task, 'id' | 'title' | 'hours' | 'deadline' | 'content' | 'priority' | 'complete'>
        & { likes: Maybe<Array<Maybe<(
          { __typename?: 'Worker' }
          & Pick<Worker, 'id' | 'name' | 'availability'>
          & { user: (
            { __typename?: 'User' }
            & Pick<User, 'id' | 'username' | 'password' | 'location'>
          ), tags: Maybe<Array<Maybe<(
            { __typename?: 'Tag' }
            & Pick<Tag, 'id' | 'title'>
          )>>>, tasks: Maybe<Array<Maybe<(
            { __typename?: 'Task' }
            & Pick<Task, 'id' | 'title' | 'hours' | 'deadline' | 'content' | 'priority' | 'complete'>
          )>>> }
        )>>>, comments: Maybe<Array<Maybe<(
          { __typename?: 'Comment' }
          & Pick<Comment, 'id' | 'content'>
          & { worker: (
            { __typename?: 'Worker' }
            & Pick<Worker, 'id' | 'name' | 'availability'>
          ) }
        )>>> }
      )>>> }
    )>>> }
  )> }
);

export type DeleteBoardMutationVariables = {
  filter: BoardFilter
};


export type DeleteBoardMutation = (
  { __typename?: 'Mutation' }
  & { deleteBoard: Maybe<(
    { __typename?: 'DeleteBoardPayload' }
    & Pick<DeleteBoardPayload, 'msg'>
  )> }
);

export type DeleteColumnMutationVariables = {
  filter: ColumnFilter
};


export type DeleteColumnMutation = (
  { __typename?: 'Mutation' }
  & { deleteColumn: Maybe<(
    { __typename?: 'DeleteColumnPayload' }
    & Pick<DeleteColumnPayload, 'msg'>
  )> }
);

export type DeleteCommentMutationVariables = {
  filter: CommentFilter
};


export type DeleteCommentMutation = (
  { __typename?: 'Mutation' }
  & { deleteComment: Maybe<(
    { __typename?: 'DeleteCommentPayload' }
    & Pick<DeleteCommentPayload, 'msg'>
  )> }
);

export type DeleteProjectMutationVariables = {
  filter: ProjectFilter
};


export type DeleteProjectMutation = (
  { __typename?: 'Mutation' }
  & { deleteProject: Maybe<(
    { __typename?: 'DeleteProjectPayload' }
    & Pick<DeleteProjectPayload, 'msg'>
  )> }
);

export type DeleteTagMutationVariables = {
  filter: TagFilter
};


export type DeleteTagMutation = (
  { __typename?: 'Mutation' }
  & { deleteTag: Maybe<(
    { __typename?: 'DeleteTagPayload' }
    & Pick<DeleteTagPayload, 'msg'>
  )> }
);

export type DeleteTaskMutationVariables = {
  filter: TaskFilter
};


export type DeleteTaskMutation = (
  { __typename?: 'Mutation' }
  & { deleteTask: Maybe<(
    { __typename?: 'DeleteTaskPayload' }
    & Pick<DeleteTaskPayload, 'msg'>
  )> }
);

export type DeleteUserMutationVariables = {
  filter: UserFilter
};


export type DeleteUserMutation = (
  { __typename?: 'Mutation' }
  & { deleteUser: Maybe<(
    { __typename?: 'DeleteUserPayload' }
    & Pick<DeleteUserPayload, 'msg'>
  )> }
);

export type DeleteWorkerMutationVariables = {
  filter: WorkerFilter
};


export type DeleteWorkerMutation = (
  { __typename?: 'Mutation' }
  & { deleteWorker: Maybe<(
    { __typename?: 'DeleteWorkerPayload' }
    & Pick<DeleteWorkerPayload, 'msg'>
  )> }
);

export type UpdateBoardMutationVariables = {
  filter?: Maybe<WorkerFilter>,
  order?: Maybe<WorkerOrder>,
  first?: Maybe<Scalars['Int']>,
  offset?: Maybe<Scalars['Int']>,
  filter1?: Maybe<CommentFilter>,
  order1?: Maybe<CommentOrder>,
  first1?: Maybe<Scalars['Int']>,
  offset1?: Maybe<Scalars['Int']>,
  filter2?: Maybe<TaskFilter>,
  order2?: Maybe<TaskOrder>,
  first2?: Maybe<Scalars['Int']>,
  offset2?: Maybe<Scalars['Int']>,
  filter3?: Maybe<ColumnFilter>,
  order3?: Maybe<ColumnOrder>,
  first3?: Maybe<Scalars['Int']>,
  offset3?: Maybe<Scalars['Int']>,
  filter4?: Maybe<BoardFilter>,
  order4?: Maybe<BoardOrder>,
  first4?: Maybe<Scalars['Int']>,
  offset4?: Maybe<Scalars['Int']>,
  input: UpdateBoardInput
};


export type UpdateBoardMutation = (
  { __typename?: 'Mutation' }
  & { updateBoard: Maybe<(
    { __typename?: 'UpdateBoardPayload' }
    & { board: Maybe<Array<Maybe<(
      { __typename?: 'Board' }
      & Pick<Board, 'id' | 'title' | 'order'>
      & { columns: Maybe<Array<Maybe<(
        { __typename?: 'Column' }
        & Pick<Column, 'id' | 'title'>
        & { tasks: Maybe<Array<Maybe<(
          { __typename?: 'Task' }
          & Pick<Task, 'id' | 'title' | 'hours' | 'deadline' | 'content' | 'priority' | 'complete'>
          & { likes: Maybe<Array<Maybe<(
            { __typename?: 'Worker' }
            & Pick<Worker, 'id' | 'name' | 'availability'>
          )>>>, comments: Maybe<Array<Maybe<(
            { __typename?: 'Comment' }
            & Pick<Comment, 'id' | 'content'>
          )>>> }
        )>>> }
      )>>> }
    )>>> }
  )> }
);

export type UpdateColumnMutationVariables = {
  filter?: Maybe<UserFilter>,
  filter1?: Maybe<TagFilter>,
  order?: Maybe<TagOrder>,
  first?: Maybe<Scalars['Int']>,
  offset?: Maybe<Scalars['Int']>,
  filter2?: Maybe<TaskFilter>,
  order1?: Maybe<TaskOrder>,
  first1?: Maybe<Scalars['Int']>,
  offset1?: Maybe<Scalars['Int']>,
  filter3?: Maybe<WorkerFilter>,
  order2?: Maybe<WorkerOrder>,
  first2?: Maybe<Scalars['Int']>,
  offset2?: Maybe<Scalars['Int']>,
  filter4?: Maybe<WorkerFilter>,
  filter5?: Maybe<CommentFilter>,
  order3?: Maybe<CommentOrder>,
  first3?: Maybe<Scalars['Int']>,
  offset3?: Maybe<Scalars['Int']>,
  filter6?: Maybe<TaskFilter>,
  order4?: Maybe<TaskOrder>,
  first4?: Maybe<Scalars['Int']>,
  offset4?: Maybe<Scalars['Int']>,
  filter7?: Maybe<ColumnFilter>,
  order5?: Maybe<ColumnOrder>,
  first5?: Maybe<Scalars['Int']>,
  offset5?: Maybe<Scalars['Int']>,
  input: UpdateColumnInput
};


export type UpdateColumnMutation = (
  { __typename?: 'Mutation' }
  & { updateColumn: Maybe<(
    { __typename?: 'UpdateColumnPayload' }
    & { column: Maybe<Array<Maybe<(
      { __typename?: 'Column' }
      & Pick<Column, 'id' | 'title'>
      & { tasks: Maybe<Array<Maybe<(
        { __typename?: 'Task' }
        & Pick<Task, 'id' | 'title' | 'hours' | 'deadline' | 'content' | 'priority' | 'complete'>
        & { likes: Maybe<Array<Maybe<(
          { __typename?: 'Worker' }
          & Pick<Worker, 'id' | 'name' | 'availability'>
          & { user: (
            { __typename?: 'User' }
            & Pick<User, 'id' | 'username' | 'password' | 'location'>
          ), tags: Maybe<Array<Maybe<(
            { __typename?: 'Tag' }
            & Pick<Tag, 'id' | 'title'>
          )>>>, tasks: Maybe<Array<Maybe<(
            { __typename?: 'Task' }
            & Pick<Task, 'id' | 'title' | 'hours' | 'deadline' | 'content' | 'priority' | 'complete'>
          )>>> }
        )>>>, comments: Maybe<Array<Maybe<(
          { __typename?: 'Comment' }
          & Pick<Comment, 'id' | 'content'>
          & { worker: (
            { __typename?: 'Worker' }
            & Pick<Worker, 'id' | 'name' | 'availability'>
          ) }
        )>>> }
      )>>> }
    )>>> }
  )> }
);

export type UpdateCommentMutationVariables = {
  filter?: Maybe<WorkerFilter>,
  order?: Maybe<WorkerOrder>,
  first?: Maybe<Scalars['Int']>,
  offset?: Maybe<Scalars['Int']>,
  filter1?: Maybe<TaskFilter>,
  order1?: Maybe<TaskOrder>,
  first1?: Maybe<Scalars['Int']>,
  offset1?: Maybe<Scalars['Int']>,
  filter2?: Maybe<UserFilter>,
  filter3?: Maybe<TagFilter>,
  order2?: Maybe<TagOrder>,
  first2?: Maybe<Scalars['Int']>,
  offset2?: Maybe<Scalars['Int']>,
  filter4?: Maybe<WorkerFilter>,
  order3?: Maybe<WorkerOrder>,
  first3?: Maybe<Scalars['Int']>,
  offset3?: Maybe<Scalars['Int']>,
  filter5?: Maybe<CommentFilter>,
  order4?: Maybe<CommentOrder>,
  first4?: Maybe<Scalars['Int']>,
  offset4?: Maybe<Scalars['Int']>,
  filter6?: Maybe<TaskFilter>,
  order5?: Maybe<TaskOrder>,
  first5?: Maybe<Scalars['Int']>,
  offset5?: Maybe<Scalars['Int']>,
  filter7?: Maybe<WorkerFilter>,
  filter8?: Maybe<CommentFilter>,
  order6?: Maybe<CommentOrder>,
  first6?: Maybe<Scalars['Int']>,
  offset6?: Maybe<Scalars['Int']>,
  input: UpdateCommentInput
};


export type UpdateCommentMutation = (
  { __typename?: 'Mutation' }
  & { updateComment: Maybe<(
    { __typename?: 'UpdateCommentPayload' }
    & { comment: Maybe<Array<Maybe<(
      { __typename?: 'Comment' }
      & Pick<Comment, 'id' | 'content'>
      & { worker: (
        { __typename?: 'Worker' }
        & Pick<Worker, 'id' | 'name' | 'availability'>
        & { user: (
          { __typename?: 'User' }
          & Pick<User, 'id' | 'username' | 'password' | 'location'>
          & { roles: Maybe<Array<Maybe<(
            { __typename?: 'Worker' }
            & Pick<Worker, 'id' | 'name' | 'availability'>
          )>>>, stars: Maybe<Array<Maybe<(
            { __typename?: 'Task' }
            & Pick<Task, 'id' | 'title' | 'hours' | 'deadline' | 'content' | 'priority' | 'complete'>
          )>>> }
        ), tags: Maybe<Array<Maybe<(
          { __typename?: 'Tag' }
          & Pick<Tag, 'id' | 'title'>
        )>>>, tasks: Maybe<Array<Maybe<(
          { __typename?: 'Task' }
          & Pick<Task, 'id' | 'title' | 'hours' | 'deadline' | 'content' | 'priority' | 'complete'>
          & { likes: Maybe<Array<Maybe<(
            { __typename?: 'Worker' }
            & Pick<Worker, 'id' | 'name' | 'availability'>
          )>>>, comments: Maybe<Array<Maybe<(
            { __typename?: 'Comment' }
            & Pick<Comment, 'id' | 'content'>
          )>>> }
        )>>> }
      ) }
    )>>> }
  )> }
);

export type UpdateProjectMutationVariables = {
  filter?: Maybe<TagFilter>,
  order?: Maybe<TagOrder>,
  first?: Maybe<Scalars['Int']>,
  offset?: Maybe<Scalars['Int']>,
  filter1?: Maybe<UserFilter>,
  filter2?: Maybe<TagFilter>,
  order1?: Maybe<TagOrder>,
  first1?: Maybe<Scalars['Int']>,
  offset1?: Maybe<Scalars['Int']>,
  filter3?: Maybe<TaskFilter>,
  order2?: Maybe<TaskOrder>,
  first2?: Maybe<Scalars['Int']>,
  offset2?: Maybe<Scalars['Int']>,
  filter4?: Maybe<WorkerFilter>,
  order3?: Maybe<WorkerOrder>,
  first3?: Maybe<Scalars['Int']>,
  offset3?: Maybe<Scalars['Int']>,
  filter5?: Maybe<WorkerFilter>,
  filter6?: Maybe<CommentFilter>,
  order4?: Maybe<CommentOrder>,
  first4?: Maybe<Scalars['Int']>,
  offset4?: Maybe<Scalars['Int']>,
  filter7?: Maybe<TaskFilter>,
  order5?: Maybe<TaskOrder>,
  first5?: Maybe<Scalars['Int']>,
  offset5?: Maybe<Scalars['Int']>,
  filter8?: Maybe<TaskFilter>,
  order6?: Maybe<TaskOrder>,
  first6?: Maybe<Scalars['Int']>,
  offset6?: Maybe<Scalars['Int']>,
  filter9?: Maybe<ColumnFilter>,
  order7?: Maybe<ColumnOrder>,
  first7?: Maybe<Scalars['Int']>,
  offset7?: Maybe<Scalars['Int']>,
  filter10?: Maybe<BoardFilter>,
  order8?: Maybe<BoardOrder>,
  first8?: Maybe<Scalars['Int']>,
  offset8?: Maybe<Scalars['Int']>,
  filter11?: Maybe<WorkerFilter>,
  order9?: Maybe<WorkerOrder>,
  first9?: Maybe<Scalars['Int']>,
  offset9?: Maybe<Scalars['Int']>,
  filter12?: Maybe<TaskFilter>,
  order10?: Maybe<TaskOrder>,
  first10?: Maybe<Scalars['Int']>,
  offset10?: Maybe<Scalars['Int']>,
  filter13?: Maybe<UserFilter>,
  filter14?: Maybe<TagFilter>,
  order11?: Maybe<TagOrder>,
  first11?: Maybe<Scalars['Int']>,
  offset11?: Maybe<Scalars['Int']>,
  filter15?: Maybe<TaskFilter>,
  order12?: Maybe<TaskOrder>,
  first12?: Maybe<Scalars['Int']>,
  offset12?: Maybe<Scalars['Int']>,
  filter16?: Maybe<WorkerFilter>,
  order13?: Maybe<WorkerOrder>,
  first13?: Maybe<Scalars['Int']>,
  offset13?: Maybe<Scalars['Int']>,
  filter17?: Maybe<ProjectFilter>,
  order14?: Maybe<ProjectOrder>,
  first14?: Maybe<Scalars['Int']>,
  offset14?: Maybe<Scalars['Int']>,
  input: UpdateProjectInput
};


export type UpdateProjectMutation = (
  { __typename?: 'Mutation' }
  & { updateProject: Maybe<(
    { __typename?: 'UpdateProjectPayload' }
    & { project: Maybe<Array<Maybe<(
      { __typename?: 'Project' }
      & Pick<Project, 'id' | 'title'>
      & { tags: Maybe<Array<Maybe<(
        { __typename?: 'Tag' }
        & Pick<Tag, 'id' | 'title'>
      )>>>, tasks: Maybe<Array<Maybe<(
        { __typename?: 'Task' }
        & Pick<Task, 'id' | 'title' | 'hours' | 'deadline' | 'content' | 'priority' | 'complete'>
        & { likes: Maybe<Array<Maybe<(
          { __typename?: 'Worker' }
          & Pick<Worker, 'id' | 'name' | 'availability'>
          & { user: (
            { __typename?: 'User' }
            & Pick<User, 'id' | 'username' | 'password' | 'location'>
          ), tags: Maybe<Array<Maybe<(
            { __typename?: 'Tag' }
            & Pick<Tag, 'id' | 'title'>
          )>>>, tasks: Maybe<Array<Maybe<(
            { __typename?: 'Task' }
            & Pick<Task, 'id' | 'title' | 'hours' | 'deadline' | 'content' | 'priority' | 'complete'>
          )>>> }
        )>>>, comments: Maybe<Array<Maybe<(
          { __typename?: 'Comment' }
          & Pick<Comment, 'id' | 'content'>
          & { worker: (
            { __typename?: 'Worker' }
            & Pick<Worker, 'id' | 'name' | 'availability'>
          ) }
        )>>> }
      )>>>, boards: Maybe<Array<Maybe<(
        { __typename?: 'Board' }
        & Pick<Board, 'id' | 'title' | 'order'>
        & { columns: Maybe<Array<Maybe<(
          { __typename?: 'Column' }
          & Pick<Column, 'id' | 'title'>
          & { tasks: Maybe<Array<Maybe<(
            { __typename?: 'Task' }
            & Pick<Task, 'id' | 'title' | 'hours' | 'deadline' | 'content' | 'priority' | 'complete'>
          )>>> }
        )>>> }
      )>>>, workers: Maybe<Array<Maybe<(
        { __typename?: 'Worker' }
        & Pick<Worker, 'id' | 'name' | 'availability'>
        & { user: (
          { __typename?: 'User' }
          & Pick<User, 'id' | 'username' | 'password' | 'location'>
          & { roles: Maybe<Array<Maybe<(
            { __typename?: 'Worker' }
            & Pick<Worker, 'id' | 'name' | 'availability'>
          )>>>, stars: Maybe<Array<Maybe<(
            { __typename?: 'Task' }
            & Pick<Task, 'id' | 'title' | 'hours' | 'deadline' | 'content' | 'priority' | 'complete'>
          )>>> }
        ), tags: Maybe<Array<Maybe<(
          { __typename?: 'Tag' }
          & Pick<Tag, 'id' | 'title'>
        )>>>, tasks: Maybe<Array<Maybe<(
          { __typename?: 'Task' }
          & Pick<Task, 'id' | 'title' | 'hours' | 'deadline' | 'content' | 'priority' | 'complete'>
        )>>> }
      )>>> }
    )>>> }
  )> }
);

export type UpdateTagMutationVariables = {
  filter?: Maybe<TagFilter>,
  order?: Maybe<TagOrder>,
  first?: Maybe<Scalars['Int']>,
  offset?: Maybe<Scalars['Int']>,
  input: UpdateTagInput
};


export type UpdateTagMutation = (
  { __typename?: 'Mutation' }
  & { updateTag: Maybe<(
    { __typename?: 'UpdateTagPayload' }
    & { tag: Maybe<Array<Maybe<(
      { __typename?: 'Tag' }
      & Pick<Tag, 'id' | 'title'>
    )>>> }
  )> }
);

export type UpdateTaskMutationVariables = {
  filter?: Maybe<WorkerFilter>,
  order?: Maybe<WorkerOrder>,
  first?: Maybe<Scalars['Int']>,
  offset?: Maybe<Scalars['Int']>,
  filter1?: Maybe<TaskFilter>,
  order1?: Maybe<TaskOrder>,
  first1?: Maybe<Scalars['Int']>,
  offset1?: Maybe<Scalars['Int']>,
  filter2?: Maybe<UserFilter>,
  filter3?: Maybe<TagFilter>,
  order2?: Maybe<TagOrder>,
  first2?: Maybe<Scalars['Int']>,
  offset2?: Maybe<Scalars['Int']>,
  filter4?: Maybe<WorkerFilter>,
  order3?: Maybe<WorkerOrder>,
  first3?: Maybe<Scalars['Int']>,
  offset3?: Maybe<Scalars['Int']>,
  filter5?: Maybe<CommentFilter>,
  order4?: Maybe<CommentOrder>,
  first4?: Maybe<Scalars['Int']>,
  offset4?: Maybe<Scalars['Int']>,
  filter6?: Maybe<TaskFilter>,
  order5?: Maybe<TaskOrder>,
  first5?: Maybe<Scalars['Int']>,
  offset5?: Maybe<Scalars['Int']>,
  filter7?: Maybe<WorkerFilter>,
  order6?: Maybe<WorkerOrder>,
  first6?: Maybe<Scalars['Int']>,
  offset6?: Maybe<Scalars['Int']>,
  filter8?: Maybe<UserFilter>,
  filter9?: Maybe<TagFilter>,
  order7?: Maybe<TagOrder>,
  first7?: Maybe<Scalars['Int']>,
  offset7?: Maybe<Scalars['Int']>,
  filter10?: Maybe<TaskFilter>,
  order8?: Maybe<TaskOrder>,
  first8?: Maybe<Scalars['Int']>,
  offset8?: Maybe<Scalars['Int']>,
  filter11?: Maybe<WorkerFilter>,
  filter12?: Maybe<CommentFilter>,
  order9?: Maybe<CommentOrder>,
  first9?: Maybe<Scalars['Int']>,
  offset9?: Maybe<Scalars['Int']>,
  filter13?: Maybe<TaskFilter>,
  order10?: Maybe<TaskOrder>,
  first10?: Maybe<Scalars['Int']>,
  offset10?: Maybe<Scalars['Int']>,
  input: UpdateTaskInput
};


export type UpdateTaskMutation = (
  { __typename?: 'Mutation' }
  & { updateTask: Maybe<(
    { __typename?: 'UpdateTaskPayload' }
    & { task: Maybe<Array<Maybe<(
      { __typename?: 'Task' }
      & Pick<Task, 'id' | 'title' | 'hours' | 'deadline' | 'content' | 'priority' | 'complete'>
      & { likes: Maybe<Array<Maybe<(
        { __typename?: 'Worker' }
        & Pick<Worker, 'id' | 'name' | 'availability'>
        & { user: (
          { __typename?: 'User' }
          & Pick<User, 'id' | 'username' | 'password' | 'location'>
          & { roles: Maybe<Array<Maybe<(
            { __typename?: 'Worker' }
            & Pick<Worker, 'id' | 'name' | 'availability'>
          )>>>, stars: Maybe<Array<Maybe<(
            { __typename?: 'Task' }
            & Pick<Task, 'id' | 'title' | 'hours' | 'deadline' | 'content' | 'priority' | 'complete'>
          )>>> }
        ), tags: Maybe<Array<Maybe<(
          { __typename?: 'Tag' }
          & Pick<Tag, 'id' | 'title'>
        )>>>, tasks: Maybe<Array<Maybe<(
          { __typename?: 'Task' }
          & Pick<Task, 'id' | 'title' | 'hours' | 'deadline' | 'content' | 'priority' | 'complete'>
          & { likes: Maybe<Array<Maybe<(
            { __typename?: 'Worker' }
            & Pick<Worker, 'id' | 'name' | 'availability'>
          )>>>, comments: Maybe<Array<Maybe<(
            { __typename?: 'Comment' }
            & Pick<Comment, 'id' | 'content'>
          )>>> }
        )>>> }
      )>>>, comments: Maybe<Array<Maybe<(
        { __typename?: 'Comment' }
        & Pick<Comment, 'id' | 'content'>
        & { worker: (
          { __typename?: 'Worker' }
          & Pick<Worker, 'id' | 'name' | 'availability'>
          & { user: (
            { __typename?: 'User' }
            & Pick<User, 'id' | 'username' | 'password' | 'location'>
          ), tags: Maybe<Array<Maybe<(
            { __typename?: 'Tag' }
            & Pick<Tag, 'id' | 'title'>
          )>>>, tasks: Maybe<Array<Maybe<(
            { __typename?: 'Task' }
            & Pick<Task, 'id' | 'title' | 'hours' | 'deadline' | 'content' | 'priority' | 'complete'>
          )>>> }
        ) }
      )>>> }
    )>>> }
  )> }
);

export type UpdateUserMutationVariables = {
  filter?: Maybe<TaskFilter>,
  order?: Maybe<TaskOrder>,
  first?: Maybe<Scalars['Int']>,
  offset?: Maybe<Scalars['Int']>,
  filter1?: Maybe<UserFilter>,
  filter2?: Maybe<TagFilter>,
  order1?: Maybe<TagOrder>,
  first1?: Maybe<Scalars['Int']>,
  offset1?: Maybe<Scalars['Int']>,
  filter3?: Maybe<WorkerFilter>,
  order2?: Maybe<WorkerOrder>,
  first2?: Maybe<Scalars['Int']>,
  offset2?: Maybe<Scalars['Int']>,
  filter4?: Maybe<CommentFilter>,
  order3?: Maybe<CommentOrder>,
  first3?: Maybe<Scalars['Int']>,
  offset3?: Maybe<Scalars['Int']>,
  filter5?: Maybe<TaskFilter>,
  order4?: Maybe<TaskOrder>,
  first4?: Maybe<Scalars['Int']>,
  offset4?: Maybe<Scalars['Int']>,
  filter6?: Maybe<WorkerFilter>,
  order5?: Maybe<WorkerOrder>,
  first5?: Maybe<Scalars['Int']>,
  offset5?: Maybe<Scalars['Int']>,
  filter7?: Maybe<UserFilter>,
  order6?: Maybe<UserOrder>,
  first6?: Maybe<Scalars['Int']>,
  offset6?: Maybe<Scalars['Int']>,
  input: UpdateUserInput
};


export type UpdateUserMutation = (
  { __typename?: 'Mutation' }
  & { updateUser: Maybe<(
    { __typename?: 'UpdateUserPayload' }
    & { user: Maybe<Array<Maybe<(
      { __typename?: 'User' }
      & Pick<User, 'id' | 'username' | 'password' | 'location'>
      & { roles: Maybe<Array<Maybe<(
        { __typename?: 'Worker' }
        & Pick<Worker, 'id' | 'name' | 'availability'>
        & { user: (
          { __typename?: 'User' }
          & Pick<User, 'id' | 'username' | 'password' | 'location'>
          & { stars: Maybe<Array<Maybe<(
            { __typename?: 'Task' }
            & Pick<Task, 'id' | 'title' | 'hours' | 'deadline' | 'content' | 'priority' | 'complete'>
          )>>> }
        ), tags: Maybe<Array<Maybe<(
          { __typename?: 'Tag' }
          & Pick<Tag, 'id' | 'title'>
        )>>>, tasks: Maybe<Array<Maybe<(
          { __typename?: 'Task' }
          & Pick<Task, 'id' | 'title' | 'hours' | 'deadline' | 'content' | 'priority' | 'complete'>
          & { likes: Maybe<Array<Maybe<(
            { __typename?: 'Worker' }
            & Pick<Worker, 'id' | 'name' | 'availability'>
          )>>>, comments: Maybe<Array<Maybe<(
            { __typename?: 'Comment' }
            & Pick<Comment, 'id' | 'content'>
          )>>> }
        )>>> }
      )>>> }
    )>>> }
  )> }
);

export type UpdateWorkerMutationVariables = {
  filter?: Maybe<UserFilter>,
  filter1?: Maybe<TagFilter>,
  order?: Maybe<TagOrder>,
  first?: Maybe<Scalars['Int']>,
  offset?: Maybe<Scalars['Int']>,
  filter2?: Maybe<TaskFilter>,
  order1?: Maybe<TaskOrder>,
  first1?: Maybe<Scalars['Int']>,
  offset1?: Maybe<Scalars['Int']>,
  filter3?: Maybe<WorkerFilter>,
  order2?: Maybe<WorkerOrder>,
  first2?: Maybe<Scalars['Int']>,
  offset2?: Maybe<Scalars['Int']>,
  filter4?: Maybe<WorkerFilter>,
  order3?: Maybe<WorkerOrder>,
  first3?: Maybe<Scalars['Int']>,
  offset3?: Maybe<Scalars['Int']>,
  filter5?: Maybe<CommentFilter>,
  order4?: Maybe<CommentOrder>,
  first4?: Maybe<Scalars['Int']>,
  offset4?: Maybe<Scalars['Int']>,
  filter6?: Maybe<TaskFilter>,
  order5?: Maybe<TaskOrder>,
  first5?: Maybe<Scalars['Int']>,
  offset5?: Maybe<Scalars['Int']>,
  filter7?: Maybe<UserFilter>,
  filter8?: Maybe<TagFilter>,
  order6?: Maybe<TagOrder>,
  first6?: Maybe<Scalars['Int']>,
  offset6?: Maybe<Scalars['Int']>,
  filter9?: Maybe<UserFilter>,
  filter10?: Maybe<TagFilter>,
  order7?: Maybe<TagOrder>,
  first7?: Maybe<Scalars['Int']>,
  offset7?: Maybe<Scalars['Int']>,
  filter11?: Maybe<TaskFilter>,
  order8?: Maybe<TaskOrder>,
  first8?: Maybe<Scalars['Int']>,
  offset8?: Maybe<Scalars['Int']>,
  filter12?: Maybe<WorkerFilter>,
  order9?: Maybe<WorkerOrder>,
  first9?: Maybe<Scalars['Int']>,
  offset9?: Maybe<Scalars['Int']>,
  filter13?: Maybe<WorkerFilter>,
  filter14?: Maybe<CommentFilter>,
  order10?: Maybe<CommentOrder>,
  first10?: Maybe<Scalars['Int']>,
  offset10?: Maybe<Scalars['Int']>,
  filter15?: Maybe<TaskFilter>,
  order11?: Maybe<TaskOrder>,
  first11?: Maybe<Scalars['Int']>,
  offset11?: Maybe<Scalars['Int']>,
  filter16?: Maybe<WorkerFilter>,
  order12?: Maybe<WorkerOrder>,
  first12?: Maybe<Scalars['Int']>,
  offset12?: Maybe<Scalars['Int']>,
  input: UpdateWorkerInput
};


export type UpdateWorkerMutation = (
  { __typename?: 'Mutation' }
  & { updateWorker: Maybe<(
    { __typename?: 'UpdateWorkerPayload' }
    & { worker: Maybe<Array<Maybe<(
      { __typename?: 'Worker' }
      & Pick<Worker, 'id' | 'name' | 'availability'>
      & { user: (
        { __typename?: 'User' }
        & Pick<User, 'id' | 'username' | 'password' | 'location'>
        & { roles: Maybe<Array<Maybe<(
          { __typename?: 'Worker' }
          & Pick<Worker, 'id' | 'name' | 'availability'>
          & { user: (
            { __typename?: 'User' }
            & Pick<User, 'id' | 'username' | 'password' | 'location'>
          ), tags: Maybe<Array<Maybe<(
            { __typename?: 'Tag' }
            & Pick<Tag, 'id' | 'title'>
          )>>>, tasks: Maybe<Array<Maybe<(
            { __typename?: 'Task' }
            & Pick<Task, 'id' | 'title' | 'hours' | 'deadline' | 'content' | 'priority' | 'complete'>
          )>>> }
        )>>>, stars: Maybe<Array<Maybe<(
          { __typename?: 'Task' }
          & Pick<Task, 'id' | 'title' | 'hours' | 'deadline' | 'content' | 'priority' | 'complete'>
          & { likes: Maybe<Array<Maybe<(
            { __typename?: 'Worker' }
            & Pick<Worker, 'id' | 'name' | 'availability'>
          )>>>, comments: Maybe<Array<Maybe<(
            { __typename?: 'Comment' }
            & Pick<Comment, 'id' | 'content'>
          )>>> }
        )>>> }
      ), tags: Maybe<Array<Maybe<(
        { __typename?: 'Tag' }
        & Pick<Tag, 'id' | 'title'>
      )>>>, tasks: Maybe<Array<Maybe<(
        { __typename?: 'Task' }
        & Pick<Task, 'id' | 'title' | 'hours' | 'deadline' | 'content' | 'priority' | 'complete'>
        & { likes: Maybe<Array<Maybe<(
          { __typename?: 'Worker' }
          & Pick<Worker, 'id' | 'name' | 'availability'>
          & { user: (
            { __typename?: 'User' }
            & Pick<User, 'id' | 'username' | 'password' | 'location'>
          ), tags: Maybe<Array<Maybe<(
            { __typename?: 'Tag' }
            & Pick<Tag, 'id' | 'title'>
          )>>>, tasks: Maybe<Array<Maybe<(
            { __typename?: 'Task' }
            & Pick<Task, 'id' | 'title' | 'hours' | 'deadline' | 'content' | 'priority' | 'complete'>
          )>>> }
        )>>>, comments: Maybe<Array<Maybe<(
          { __typename?: 'Comment' }
          & Pick<Comment, 'id' | 'content'>
          & { worker: (
            { __typename?: 'Worker' }
            & Pick<Worker, 'id' | 'name' | 'availability'>
          ) }
        )>>> }
      )>>> }
    )>>> }
  )> }
);

export type GetBoardQueryVariables = {
  filter?: Maybe<UserFilter>,
  filter1?: Maybe<TagFilter>,
  order?: Maybe<TagOrder>,
  first?: Maybe<Scalars['Int']>,
  offset?: Maybe<Scalars['Int']>,
  filter2?: Maybe<TaskFilter>,
  order1?: Maybe<TaskOrder>,
  first1?: Maybe<Scalars['Int']>,
  offset1?: Maybe<Scalars['Int']>,
  filter3?: Maybe<WorkerFilter>,
  order2?: Maybe<WorkerOrder>,
  first2?: Maybe<Scalars['Int']>,
  offset2?: Maybe<Scalars['Int']>,
  filter4?: Maybe<WorkerFilter>,
  filter5?: Maybe<CommentFilter>,
  order3?: Maybe<CommentOrder>,
  first3?: Maybe<Scalars['Int']>,
  offset3?: Maybe<Scalars['Int']>,
  filter6?: Maybe<TaskFilter>,
  order4?: Maybe<TaskOrder>,
  first4?: Maybe<Scalars['Int']>,
  offset4?: Maybe<Scalars['Int']>,
  filter7?: Maybe<ColumnFilter>,
  order5?: Maybe<ColumnOrder>,
  first5?: Maybe<Scalars['Int']>,
  offset5?: Maybe<Scalars['Int']>,
  id: Scalars['ID']
};


export type GetBoardQuery = (
  { __typename?: 'Query' }
  & { getBoard: Maybe<(
    { __typename?: 'Board' }
    & Pick<Board, 'id' | 'title' | 'order'>
    & { columns: Maybe<Array<Maybe<(
      { __typename?: 'Column' }
      & Pick<Column, 'id' | 'title'>
      & { tasks: Maybe<Array<Maybe<(
        { __typename?: 'Task' }
        & Pick<Task, 'id' | 'title' | 'hours' | 'deadline' | 'content' | 'priority' | 'complete'>
        & { likes: Maybe<Array<Maybe<(
          { __typename?: 'Worker' }
          & Pick<Worker, 'id' | 'name' | 'availability'>
          & { user: (
            { __typename?: 'User' }
            & Pick<User, 'id' | 'username' | 'password' | 'location'>
          ), tags: Maybe<Array<Maybe<(
            { __typename?: 'Tag' }
            & Pick<Tag, 'id' | 'title'>
          )>>>, tasks: Maybe<Array<Maybe<(
            { __typename?: 'Task' }
            & Pick<Task, 'id' | 'title' | 'hours' | 'deadline' | 'content' | 'priority' | 'complete'>
          )>>> }
        )>>>, comments: Maybe<Array<Maybe<(
          { __typename?: 'Comment' }
          & Pick<Comment, 'id' | 'content'>
          & { worker: (
            { __typename?: 'Worker' }
            & Pick<Worker, 'id' | 'name' | 'availability'>
          ) }
        )>>> }
      )>>> }
    )>>> }
  )> }
);

export type GetColumnQueryVariables = {
  filter?: Maybe<WorkerFilter>,
  order?: Maybe<WorkerOrder>,
  first?: Maybe<Scalars['Int']>,
  offset?: Maybe<Scalars['Int']>,
  filter1?: Maybe<TaskFilter>,
  order1?: Maybe<TaskOrder>,
  first1?: Maybe<Scalars['Int']>,
  offset1?: Maybe<Scalars['Int']>,
  filter2?: Maybe<UserFilter>,
  filter3?: Maybe<TagFilter>,
  order2?: Maybe<TagOrder>,
  first2?: Maybe<Scalars['Int']>,
  offset2?: Maybe<Scalars['Int']>,
  filter4?: Maybe<CommentFilter>,
  order3?: Maybe<CommentOrder>,
  first3?: Maybe<Scalars['Int']>,
  offset3?: Maybe<Scalars['Int']>,
  filter5?: Maybe<TaskFilter>,
  order4?: Maybe<TaskOrder>,
  first4?: Maybe<Scalars['Int']>,
  offset4?: Maybe<Scalars['Int']>,
  filter6?: Maybe<WorkerFilter>,
  order5?: Maybe<WorkerOrder>,
  first5?: Maybe<Scalars['Int']>,
  offset5?: Maybe<Scalars['Int']>,
  filter7?: Maybe<TaskFilter>,
  order6?: Maybe<TaskOrder>,
  first6?: Maybe<Scalars['Int']>,
  offset6?: Maybe<Scalars['Int']>,
  id: Scalars['ID']
};


export type GetColumnQuery = (
  { __typename?: 'Query' }
  & { getColumn: Maybe<(
    { __typename?: 'Column' }
    & Pick<Column, 'id' | 'title'>
    & { tasks: Maybe<Array<Maybe<(
      { __typename?: 'Task' }
      & Pick<Task, 'id' | 'title' | 'hours' | 'deadline' | 'content' | 'priority' | 'complete'>
      & { likes: Maybe<Array<Maybe<(
        { __typename?: 'Worker' }
        & Pick<Worker, 'id' | 'name' | 'availability'>
        & { user: (
          { __typename?: 'User' }
          & Pick<User, 'id' | 'username' | 'password' | 'location'>
          & { roles: Maybe<Array<Maybe<(
            { __typename?: 'Worker' }
            & Pick<Worker, 'id' | 'name' | 'availability'>
          )>>>, stars: Maybe<Array<Maybe<(
            { __typename?: 'Task' }
            & Pick<Task, 'id' | 'title' | 'hours' | 'deadline' | 'content' | 'priority' | 'complete'>
          )>>> }
        ), tags: Maybe<Array<Maybe<(
          { __typename?: 'Tag' }
          & Pick<Tag, 'id' | 'title'>
        )>>>, tasks: Maybe<Array<Maybe<(
          { __typename?: 'Task' }
          & Pick<Task, 'id' | 'title' | 'hours' | 'deadline' | 'content' | 'priority' | 'complete'>
          & { comments: Maybe<Array<Maybe<(
            { __typename?: 'Comment' }
            & Pick<Comment, 'id' | 'content'>
          )>>> }
        )>>> }
      )>>> }
    )>>> }
  )> }
);

export type GetCommentQueryVariables = {
  filter?: Maybe<UserFilter>,
  filter1?: Maybe<TagFilter>,
  order?: Maybe<TagOrder>,
  first?: Maybe<Scalars['Int']>,
  offset?: Maybe<Scalars['Int']>,
  filter2?: Maybe<TaskFilter>,
  order1?: Maybe<TaskOrder>,
  first1?: Maybe<Scalars['Int']>,
  offset1?: Maybe<Scalars['Int']>,
  filter3?: Maybe<WorkerFilter>,
  order2?: Maybe<WorkerOrder>,
  first2?: Maybe<Scalars['Int']>,
  offset2?: Maybe<Scalars['Int']>,
  filter4?: Maybe<WorkerFilter>,
  order3?: Maybe<WorkerOrder>,
  first3?: Maybe<Scalars['Int']>,
  offset3?: Maybe<Scalars['Int']>,
  filter5?: Maybe<CommentFilter>,
  order4?: Maybe<CommentOrder>,
  first4?: Maybe<Scalars['Int']>,
  offset4?: Maybe<Scalars['Int']>,
  filter6?: Maybe<TaskFilter>,
  order5?: Maybe<TaskOrder>,
  first5?: Maybe<Scalars['Int']>,
  offset5?: Maybe<Scalars['Int']>,
  filter7?: Maybe<UserFilter>,
  filter8?: Maybe<TagFilter>,
  order6?: Maybe<TagOrder>,
  first6?: Maybe<Scalars['Int']>,
  offset6?: Maybe<Scalars['Int']>,
  filter9?: Maybe<UserFilter>,
  filter10?: Maybe<TagFilter>,
  order7?: Maybe<TagOrder>,
  first7?: Maybe<Scalars['Int']>,
  offset7?: Maybe<Scalars['Int']>,
  filter11?: Maybe<TaskFilter>,
  order8?: Maybe<TaskOrder>,
  first8?: Maybe<Scalars['Int']>,
  offset8?: Maybe<Scalars['Int']>,
  filter12?: Maybe<WorkerFilter>,
  order9?: Maybe<WorkerOrder>,
  first9?: Maybe<Scalars['Int']>,
  offset9?: Maybe<Scalars['Int']>,
  filter13?: Maybe<WorkerFilter>,
  filter14?: Maybe<CommentFilter>,
  order10?: Maybe<CommentOrder>,
  first10?: Maybe<Scalars['Int']>,
  offset10?: Maybe<Scalars['Int']>,
  filter15?: Maybe<TaskFilter>,
  order11?: Maybe<TaskOrder>,
  first11?: Maybe<Scalars['Int']>,
  offset11?: Maybe<Scalars['Int']>,
  filter16?: Maybe<WorkerFilter>,
  id: Scalars['ID']
};


export type GetCommentQuery = (
  { __typename?: 'Query' }
  & { getComment: Maybe<(
    { __typename?: 'Comment' }
    & Pick<Comment, 'id' | 'content'>
    & { worker: (
      { __typename?: 'Worker' }
      & Pick<Worker, 'id' | 'name' | 'availability'>
      & { user: (
        { __typename?: 'User' }
        & Pick<User, 'id' | 'username' | 'password' | 'location'>
        & { roles: Maybe<Array<Maybe<(
          { __typename?: 'Worker' }
          & Pick<Worker, 'id' | 'name' | 'availability'>
          & { user: (
            { __typename?: 'User' }
            & Pick<User, 'id' | 'username' | 'password' | 'location'>
          ), tags: Maybe<Array<Maybe<(
            { __typename?: 'Tag' }
            & Pick<Tag, 'id' | 'title'>
          )>>>, tasks: Maybe<Array<Maybe<(
            { __typename?: 'Task' }
            & Pick<Task, 'id' | 'title' | 'hours' | 'deadline' | 'content' | 'priority' | 'complete'>
          )>>> }
        )>>>, stars: Maybe<Array<Maybe<(
          { __typename?: 'Task' }
          & Pick<Task, 'id' | 'title' | 'hours' | 'deadline' | 'content' | 'priority' | 'complete'>
          & { likes: Maybe<Array<Maybe<(
            { __typename?: 'Worker' }
            & Pick<Worker, 'id' | 'name' | 'availability'>
          )>>>, comments: Maybe<Array<Maybe<(
            { __typename?: 'Comment' }
            & Pick<Comment, 'id' | 'content'>
          )>>> }
        )>>> }
      ), tags: Maybe<Array<Maybe<(
        { __typename?: 'Tag' }
        & Pick<Tag, 'id' | 'title'>
      )>>>, tasks: Maybe<Array<Maybe<(
        { __typename?: 'Task' }
        & Pick<Task, 'id' | 'title' | 'hours' | 'deadline' | 'content' | 'priority' | 'complete'>
        & { likes: Maybe<Array<Maybe<(
          { __typename?: 'Worker' }
          & Pick<Worker, 'id' | 'name' | 'availability'>
          & { user: (
            { __typename?: 'User' }
            & Pick<User, 'id' | 'username' | 'password' | 'location'>
          ), tags: Maybe<Array<Maybe<(
            { __typename?: 'Tag' }
            & Pick<Tag, 'id' | 'title'>
          )>>>, tasks: Maybe<Array<Maybe<(
            { __typename?: 'Task' }
            & Pick<Task, 'id' | 'title' | 'hours' | 'deadline' | 'content' | 'priority' | 'complete'>
          )>>> }
        )>>>, comments: Maybe<Array<Maybe<(
          { __typename?: 'Comment' }
          & Pick<Comment, 'id' | 'content'>
          & { worker: (
            { __typename?: 'Worker' }
            & Pick<Worker, 'id' | 'name' | 'availability'>
          ) }
        )>>> }
      )>>> }
    ) }
  )> }
);

export type GetProjectQueryVariables = {
  filter?: Maybe<TagFilter>,
  order?: Maybe<TagOrder>,
  first?: Maybe<Scalars['Int']>,
  offset?: Maybe<Scalars['Int']>,
  filter1?: Maybe<WorkerFilter>,
  order1?: Maybe<WorkerOrder>,
  first1?: Maybe<Scalars['Int']>,
  offset1?: Maybe<Scalars['Int']>,
  filter2?: Maybe<TaskFilter>,
  order2?: Maybe<TaskOrder>,
  first2?: Maybe<Scalars['Int']>,
  offset2?: Maybe<Scalars['Int']>,
  filter3?: Maybe<UserFilter>,
  filter4?: Maybe<TagFilter>,
  order3?: Maybe<TagOrder>,
  first3?: Maybe<Scalars['Int']>,
  offset3?: Maybe<Scalars['Int']>,
  filter5?: Maybe<CommentFilter>,
  order4?: Maybe<CommentOrder>,
  first4?: Maybe<Scalars['Int']>,
  offset4?: Maybe<Scalars['Int']>,
  filter6?: Maybe<TaskFilter>,
  order5?: Maybe<TaskOrder>,
  first5?: Maybe<Scalars['Int']>,
  offset5?: Maybe<Scalars['Int']>,
  filter7?: Maybe<WorkerFilter>,
  order6?: Maybe<WorkerOrder>,
  first6?: Maybe<Scalars['Int']>,
  offset6?: Maybe<Scalars['Int']>,
  filter8?: Maybe<TaskFilter>,
  order7?: Maybe<TaskOrder>,
  first7?: Maybe<Scalars['Int']>,
  offset7?: Maybe<Scalars['Int']>,
  filter9?: Maybe<TaskFilter>,
  order8?: Maybe<TaskOrder>,
  first8?: Maybe<Scalars['Int']>,
  offset8?: Maybe<Scalars['Int']>,
  filter10?: Maybe<ColumnFilter>,
  order9?: Maybe<ColumnOrder>,
  first9?: Maybe<Scalars['Int']>,
  offset9?: Maybe<Scalars['Int']>,
  filter11?: Maybe<BoardFilter>,
  order10?: Maybe<BoardOrder>,
  first10?: Maybe<Scalars['Int']>,
  offset10?: Maybe<Scalars['Int']>,
  filter12?: Maybe<UserFilter>,
  filter13?: Maybe<TagFilter>,
  order11?: Maybe<TagOrder>,
  first11?: Maybe<Scalars['Int']>,
  offset11?: Maybe<Scalars['Int']>,
  filter14?: Maybe<TaskFilter>,
  order12?: Maybe<TaskOrder>,
  first12?: Maybe<Scalars['Int']>,
  offset12?: Maybe<Scalars['Int']>,
  filter15?: Maybe<WorkerFilter>,
  order13?: Maybe<WorkerOrder>,
  first13?: Maybe<Scalars['Int']>,
  offset13?: Maybe<Scalars['Int']>,
  id: Scalars['ID']
};


export type GetProjectQuery = (
  { __typename?: 'Query' }
  & { getProject: Maybe<(
    { __typename?: 'Project' }
    & Pick<Project, 'id' | 'title'>
    & { tags: Maybe<Array<Maybe<(
      { __typename?: 'Tag' }
      & Pick<Tag, 'id' | 'title'>
    )>>>, tasks: Maybe<Array<Maybe<(
      { __typename?: 'Task' }
      & Pick<Task, 'id' | 'title' | 'hours' | 'deadline' | 'content' | 'priority' | 'complete'>
      & { likes: Maybe<Array<Maybe<(
        { __typename?: 'Worker' }
        & Pick<Worker, 'id' | 'name' | 'availability'>
        & { user: (
          { __typename?: 'User' }
          & Pick<User, 'id' | 'username' | 'password' | 'location'>
          & { roles: Maybe<Array<Maybe<(
            { __typename?: 'Worker' }
            & Pick<Worker, 'id' | 'name' | 'availability'>
          )>>>, stars: Maybe<Array<Maybe<(
            { __typename?: 'Task' }
            & Pick<Task, 'id' | 'title' | 'hours' | 'deadline' | 'content' | 'priority' | 'complete'>
          )>>> }
        ), tags: Maybe<Array<Maybe<(
          { __typename?: 'Tag' }
          & Pick<Tag, 'id' | 'title'>
        )>>>, tasks: Maybe<Array<Maybe<(
          { __typename?: 'Task' }
          & Pick<Task, 'id' | 'title' | 'hours' | 'deadline' | 'content' | 'priority' | 'complete'>
          & { comments: Maybe<Array<Maybe<(
            { __typename?: 'Comment' }
            & Pick<Comment, 'id' | 'content'>
          )>>> }
        )>>> }
      )>>> }
    )>>>, boards: Maybe<Array<Maybe<(
      { __typename?: 'Board' }
      & Pick<Board, 'id' | 'title' | 'order'>
      & { columns: Maybe<Array<Maybe<(
        { __typename?: 'Column' }
        & Pick<Column, 'id' | 'title'>
        & { tasks: Maybe<Array<Maybe<(
          { __typename?: 'Task' }
          & Pick<Task, 'id' | 'title' | 'hours' | 'deadline' | 'content' | 'priority' | 'complete'>
        )>>> }
      )>>> }
    )>>>, workers: Maybe<Array<Maybe<(
      { __typename?: 'Worker' }
      & Pick<Worker, 'id' | 'name' | 'availability'>
      & { user: (
        { __typename?: 'User' }
        & Pick<User, 'id' | 'username' | 'password' | 'location'>
      ), tags: Maybe<Array<Maybe<(
        { __typename?: 'Tag' }
        & Pick<Tag, 'id' | 'title'>
      )>>>, tasks: Maybe<Array<Maybe<(
        { __typename?: 'Task' }
        & Pick<Task, 'id' | 'title' | 'hours' | 'deadline' | 'content' | 'priority' | 'complete'>
      )>>> }
    )>>> }
  )> }
);

export type GetTagQueryVariables = {
  id: Scalars['ID']
};


export type GetTagQuery = (
  { __typename?: 'Query' }
  & { getTag: Maybe<(
    { __typename?: 'Tag' }
    & Pick<Tag, 'id' | 'title'>
  )> }
);

export type GetTaskQueryVariables = {
  filter?: Maybe<UserFilter>,
  filter1?: Maybe<TagFilter>,
  order?: Maybe<TagOrder>,
  first?: Maybe<Scalars['Int']>,
  offset?: Maybe<Scalars['Int']>,
  filter2?: Maybe<TaskFilter>,
  order1?: Maybe<TaskOrder>,
  first1?: Maybe<Scalars['Int']>,
  offset1?: Maybe<Scalars['Int']>,
  filter3?: Maybe<WorkerFilter>,
  order2?: Maybe<WorkerOrder>,
  first2?: Maybe<Scalars['Int']>,
  offset2?: Maybe<Scalars['Int']>,
  filter4?: Maybe<WorkerFilter>,
  order3?: Maybe<WorkerOrder>,
  first3?: Maybe<Scalars['Int']>,
  offset3?: Maybe<Scalars['Int']>,
  filter5?: Maybe<CommentFilter>,
  order4?: Maybe<CommentOrder>,
  first4?: Maybe<Scalars['Int']>,
  offset4?: Maybe<Scalars['Int']>,
  filter6?: Maybe<TaskFilter>,
  order5?: Maybe<TaskOrder>,
  first5?: Maybe<Scalars['Int']>,
  offset5?: Maybe<Scalars['Int']>,
  filter7?: Maybe<UserFilter>,
  filter8?: Maybe<TagFilter>,
  order6?: Maybe<TagOrder>,
  first6?: Maybe<Scalars['Int']>,
  offset6?: Maybe<Scalars['Int']>,
  filter9?: Maybe<WorkerFilter>,
  order7?: Maybe<WorkerOrder>,
  first7?: Maybe<Scalars['Int']>,
  offset7?: Maybe<Scalars['Int']>,
  filter10?: Maybe<WorkerFilter>,
  filter11?: Maybe<CommentFilter>,
  order8?: Maybe<CommentOrder>,
  first8?: Maybe<Scalars['Int']>,
  offset8?: Maybe<Scalars['Int']>,
  filter12?: Maybe<TaskFilter>,
  order9?: Maybe<TaskOrder>,
  first9?: Maybe<Scalars['Int']>,
  offset9?: Maybe<Scalars['Int']>,
  filter13?: Maybe<WorkerFilter>,
  order10?: Maybe<WorkerOrder>,
  first10?: Maybe<Scalars['Int']>,
  offset10?: Maybe<Scalars['Int']>,
  filter14?: Maybe<CommentFilter>,
  order11?: Maybe<CommentOrder>,
  first11?: Maybe<Scalars['Int']>,
  offset11?: Maybe<Scalars['Int']>,
  id: Scalars['ID']
};


export type GetTaskQuery = (
  { __typename?: 'Query' }
  & { getTask: Maybe<(
    { __typename?: 'Task' }
    & Pick<Task, 'id' | 'title' | 'hours' | 'deadline' | 'content' | 'priority' | 'complete'>
    & { likes: Maybe<Array<Maybe<(
      { __typename?: 'Worker' }
      & Pick<Worker, 'id' | 'name' | 'availability'>
      & { user: (
        { __typename?: 'User' }
        & Pick<User, 'id' | 'username' | 'password' | 'location'>
        & { roles: Maybe<Array<Maybe<(
          { __typename?: 'Worker' }
          & Pick<Worker, 'id' | 'name' | 'availability'>
          & { user: (
            { __typename?: 'User' }
            & Pick<User, 'id' | 'username' | 'password' | 'location'>
          ), tags: Maybe<Array<Maybe<(
            { __typename?: 'Tag' }
            & Pick<Tag, 'id' | 'title'>
          )>>>, tasks: Maybe<Array<Maybe<(
            { __typename?: 'Task' }
            & Pick<Task, 'id' | 'title' | 'hours' | 'deadline' | 'content' | 'priority' | 'complete'>
          )>>> }
        )>>>, stars: Maybe<Array<Maybe<(
          { __typename?: 'Task' }
          & Pick<Task, 'id' | 'title' | 'hours' | 'deadline' | 'content' | 'priority' | 'complete'>
          & { likes: Maybe<Array<Maybe<(
            { __typename?: 'Worker' }
            & Pick<Worker, 'id' | 'name' | 'availability'>
          )>>>, comments: Maybe<Array<Maybe<(
            { __typename?: 'Comment' }
            & Pick<Comment, 'id' | 'content'>
          )>>> }
        )>>> }
      ), tags: Maybe<Array<Maybe<(
        { __typename?: 'Tag' }
        & Pick<Tag, 'id' | 'title'>
      )>>>, tasks: Maybe<Array<Maybe<(
        { __typename?: 'Task' }
        & Pick<Task, 'id' | 'title' | 'hours' | 'deadline' | 'content' | 'priority' | 'complete'>
        & { likes: Maybe<Array<Maybe<(
          { __typename?: 'Worker' }
          & Pick<Worker, 'id' | 'name' | 'availability'>
        )>>>, comments: Maybe<Array<Maybe<(
          { __typename?: 'Comment' }
          & Pick<Comment, 'id' | 'content'>
          & { worker: (
            { __typename?: 'Worker' }
            & Pick<Worker, 'id' | 'name' | 'availability'>
          ) }
        )>>> }
      )>>> }
    )>>>, comments: Maybe<Array<Maybe<(
      { __typename?: 'Comment' }
      & Pick<Comment, 'id' | 'content'>
    )>>> }
  )> }
);

export type GetUserQueryVariables = {
  filter?: Maybe<TagFilter>,
  order?: Maybe<TagOrder>,
  first?: Maybe<Scalars['Int']>,
  offset?: Maybe<Scalars['Int']>,
  filter1?: Maybe<TaskFilter>,
  order1?: Maybe<TaskOrder>,
  first1?: Maybe<Scalars['Int']>,
  offset1?: Maybe<Scalars['Int']>,
  filter2?: Maybe<WorkerFilter>,
  order2?: Maybe<WorkerOrder>,
  first2?: Maybe<Scalars['Int']>,
  offset2?: Maybe<Scalars['Int']>,
  filter3?: Maybe<WorkerFilter>,
  order3?: Maybe<WorkerOrder>,
  first3?: Maybe<Scalars['Int']>,
  offset3?: Maybe<Scalars['Int']>,
  filter4?: Maybe<CommentFilter>,
  order4?: Maybe<CommentOrder>,
  first4?: Maybe<Scalars['Int']>,
  offset4?: Maybe<Scalars['Int']>,
  filter5?: Maybe<TaskFilter>,
  order5?: Maybe<TaskOrder>,
  first5?: Maybe<Scalars['Int']>,
  offset5?: Maybe<Scalars['Int']>,
  filter6?: Maybe<UserFilter>,
  filter7?: Maybe<WorkerFilter>,
  order6?: Maybe<WorkerOrder>,
  first6?: Maybe<Scalars['Int']>,
  offset6?: Maybe<Scalars['Int']>,
  filter8?: Maybe<TaskFilter>,
  order7?: Maybe<TaskOrder>,
  first7?: Maybe<Scalars['Int']>,
  offset7?: Maybe<Scalars['Int']>,
  id: Scalars['ID']
};


export type GetUserQuery = (
  { __typename?: 'Query' }
  & { getUser: Maybe<(
    { __typename?: 'User' }
    & Pick<User, 'id' | 'username' | 'password' | 'location'>
    & { roles: Maybe<Array<Maybe<(
      { __typename?: 'Worker' }
      & Pick<Worker, 'id' | 'name' | 'availability'>
      & { user: (
        { __typename?: 'User' }
        & Pick<User, 'id' | 'username' | 'password' | 'location'>
        & { roles: Maybe<Array<Maybe<(
          { __typename?: 'Worker' }
          & Pick<Worker, 'id' | 'name' | 'availability'>
          & { tags: Maybe<Array<Maybe<(
            { __typename?: 'Tag' }
            & Pick<Tag, 'id' | 'title'>
          )>>>, tasks: Maybe<Array<Maybe<(
            { __typename?: 'Task' }
            & Pick<Task, 'id' | 'title' | 'hours' | 'deadline' | 'content' | 'priority' | 'complete'>
          )>>> }
        )>>>, stars: Maybe<Array<Maybe<(
          { __typename?: 'Task' }
          & Pick<Task, 'id' | 'title' | 'hours' | 'deadline' | 'content' | 'priority' | 'complete'>
          & { likes: Maybe<Array<Maybe<(
            { __typename?: 'Worker' }
            & Pick<Worker, 'id' | 'name' | 'availability'>
          )>>>, comments: Maybe<Array<Maybe<(
            { __typename?: 'Comment' }
            & Pick<Comment, 'id' | 'content'>
          )>>> }
        )>>> }
      ) }
    )>>>, stars: Maybe<Array<Maybe<(
      { __typename?: 'Task' }
      & Pick<Task, 'id' | 'title' | 'hours' | 'deadline' | 'content' | 'priority' | 'complete'>
    )>>> }
  )> }
);

export type GetWorkerQueryVariables = {
  filter?: Maybe<TaskFilter>,
  order?: Maybe<TaskOrder>,
  first?: Maybe<Scalars['Int']>,
  offset?: Maybe<Scalars['Int']>,
  filter1?: Maybe<UserFilter>,
  filter2?: Maybe<TagFilter>,
  order1?: Maybe<TagOrder>,
  first1?: Maybe<Scalars['Int']>,
  offset1?: Maybe<Scalars['Int']>,
  filter3?: Maybe<WorkerFilter>,
  order2?: Maybe<WorkerOrder>,
  first2?: Maybe<Scalars['Int']>,
  offset2?: Maybe<Scalars['Int']>,
  filter4?: Maybe<CommentFilter>,
  order3?: Maybe<CommentOrder>,
  first3?: Maybe<Scalars['Int']>,
  offset3?: Maybe<Scalars['Int']>,
  filter5?: Maybe<TaskFilter>,
  order4?: Maybe<TaskOrder>,
  first4?: Maybe<Scalars['Int']>,
  offset4?: Maybe<Scalars['Int']>,
  filter6?: Maybe<WorkerFilter>,
  order5?: Maybe<WorkerOrder>,
  first5?: Maybe<Scalars['Int']>,
  offset5?: Maybe<Scalars['Int']>,
  filter7?: Maybe<UserFilter>,
  filter8?: Maybe<TagFilter>,
  order6?: Maybe<TagOrder>,
  first6?: Maybe<Scalars['Int']>,
  offset6?: Maybe<Scalars['Int']>,
  filter9?: Maybe<TaskFilter>,
  order7?: Maybe<TaskOrder>,
  first7?: Maybe<Scalars['Int']>,
  offset7?: Maybe<Scalars['Int']>,
  id: Scalars['ID']
};


export type GetWorkerQuery = (
  { __typename?: 'Query' }
  & { getWorker: Maybe<(
    { __typename?: 'Worker' }
    & Pick<Worker, 'id' | 'name' | 'availability'>
    & { user: (
      { __typename?: 'User' }
      & Pick<User, 'id' | 'username' | 'password' | 'location'>
      & { roles: Maybe<Array<Maybe<(
        { __typename?: 'Worker' }
        & Pick<Worker, 'id' | 'name' | 'availability'>
        & { user: (
          { __typename?: 'User' }
          & Pick<User, 'id' | 'username' | 'password' | 'location'>
          & { stars: Maybe<Array<Maybe<(
            { __typename?: 'Task' }
            & Pick<Task, 'id' | 'title' | 'hours' | 'deadline' | 'content' | 'priority' | 'complete'>
          )>>> }
        ), tags: Maybe<Array<Maybe<(
          { __typename?: 'Tag' }
          & Pick<Tag, 'id' | 'title'>
        )>>>, tasks: Maybe<Array<Maybe<(
          { __typename?: 'Task' }
          & Pick<Task, 'id' | 'title' | 'hours' | 'deadline' | 'content' | 'priority' | 'complete'>
          & { likes: Maybe<Array<Maybe<(
            { __typename?: 'Worker' }
            & Pick<Worker, 'id' | 'name' | 'availability'>
          )>>>, comments: Maybe<Array<Maybe<(
            { __typename?: 'Comment' }
            & Pick<Comment, 'id' | 'content'>
          )>>> }
        )>>> }
      )>>> }
    ), tags: Maybe<Array<Maybe<(
      { __typename?: 'Tag' }
      & Pick<Tag, 'id' | 'title'>
    )>>>, tasks: Maybe<Array<Maybe<(
      { __typename?: 'Task' }
      & Pick<Task, 'id' | 'title' | 'hours' | 'deadline' | 'content' | 'priority' | 'complete'>
    )>>> }
  )> }
);

export type QueryBoardQueryVariables = {
  filter?: Maybe<UserFilter>,
  filter1?: Maybe<TagFilter>,
  order?: Maybe<TagOrder>,
  first?: Maybe<Scalars['Int']>,
  offset?: Maybe<Scalars['Int']>,
  filter2?: Maybe<TaskFilter>,
  order1?: Maybe<TaskOrder>,
  first1?: Maybe<Scalars['Int']>,
  offset1?: Maybe<Scalars['Int']>,
  filter3?: Maybe<WorkerFilter>,
  order2?: Maybe<WorkerOrder>,
  first2?: Maybe<Scalars['Int']>,
  offset2?: Maybe<Scalars['Int']>,
  filter4?: Maybe<WorkerFilter>,
  filter5?: Maybe<CommentFilter>,
  order3?: Maybe<CommentOrder>,
  first3?: Maybe<Scalars['Int']>,
  offset3?: Maybe<Scalars['Int']>,
  filter6?: Maybe<TaskFilter>,
  order4?: Maybe<TaskOrder>,
  first4?: Maybe<Scalars['Int']>,
  offset4?: Maybe<Scalars['Int']>,
  filter7?: Maybe<ColumnFilter>,
  order5?: Maybe<ColumnOrder>,
  first5?: Maybe<Scalars['Int']>,
  offset5?: Maybe<Scalars['Int']>,
  filter8?: Maybe<BoardFilter>,
  order6?: Maybe<BoardOrder>,
  first6?: Maybe<Scalars['Int']>,
  offset6?: Maybe<Scalars['Int']>
};


export type QueryBoardQuery = (
  { __typename?: 'Query' }
  & { queryBoard: Maybe<Array<Maybe<(
    { __typename?: 'Board' }
    & Pick<Board, 'id' | 'title' | 'order'>
    & { columns: Maybe<Array<Maybe<(
      { __typename?: 'Column' }
      & Pick<Column, 'id' | 'title'>
      & { tasks: Maybe<Array<Maybe<(
        { __typename?: 'Task' }
        & Pick<Task, 'id' | 'title' | 'hours' | 'deadline' | 'content' | 'priority' | 'complete'>
        & { likes: Maybe<Array<Maybe<(
          { __typename?: 'Worker' }
          & Pick<Worker, 'id' | 'name' | 'availability'>
          & { user: (
            { __typename?: 'User' }
            & Pick<User, 'id' | 'username' | 'password' | 'location'>
          ), tags: Maybe<Array<Maybe<(
            { __typename?: 'Tag' }
            & Pick<Tag, 'id' | 'title'>
          )>>>, tasks: Maybe<Array<Maybe<(
            { __typename?: 'Task' }
            & Pick<Task, 'id' | 'title' | 'hours' | 'deadline' | 'content' | 'priority' | 'complete'>
          )>>> }
        )>>>, comments: Maybe<Array<Maybe<(
          { __typename?: 'Comment' }
          & Pick<Comment, 'id' | 'content'>
          & { worker: (
            { __typename?: 'Worker' }
            & Pick<Worker, 'id' | 'name' | 'availability'>
          ) }
        )>>> }
      )>>> }
    )>>> }
  )>>> }
);

export type QueryColumnQueryVariables = {
  filter?: Maybe<WorkerFilter>,
  order?: Maybe<WorkerOrder>,
  first?: Maybe<Scalars['Int']>,
  offset?: Maybe<Scalars['Int']>,
  filter1?: Maybe<TaskFilter>,
  order1?: Maybe<TaskOrder>,
  first1?: Maybe<Scalars['Int']>,
  offset1?: Maybe<Scalars['Int']>,
  filter2?: Maybe<UserFilter>,
  filter3?: Maybe<TagFilter>,
  order2?: Maybe<TagOrder>,
  first2?: Maybe<Scalars['Int']>,
  offset2?: Maybe<Scalars['Int']>,
  filter4?: Maybe<CommentFilter>,
  order3?: Maybe<CommentOrder>,
  first3?: Maybe<Scalars['Int']>,
  offset3?: Maybe<Scalars['Int']>,
  filter5?: Maybe<TaskFilter>,
  order4?: Maybe<TaskOrder>,
  first4?: Maybe<Scalars['Int']>,
  offset4?: Maybe<Scalars['Int']>,
  filter6?: Maybe<WorkerFilter>,
  order5?: Maybe<WorkerOrder>,
  first5?: Maybe<Scalars['Int']>,
  offset5?: Maybe<Scalars['Int']>,
  filter7?: Maybe<TaskFilter>,
  order6?: Maybe<TaskOrder>,
  first6?: Maybe<Scalars['Int']>,
  offset6?: Maybe<Scalars['Int']>,
  filter8?: Maybe<ColumnFilter>,
  order7?: Maybe<ColumnOrder>,
  first7?: Maybe<Scalars['Int']>,
  offset7?: Maybe<Scalars['Int']>
};


export type QueryColumnQuery = (
  { __typename?: 'Query' }
  & { queryColumn: Maybe<Array<Maybe<(
    { __typename?: 'Column' }
    & Pick<Column, 'id' | 'title'>
    & { tasks: Maybe<Array<Maybe<(
      { __typename?: 'Task' }
      & Pick<Task, 'id' | 'title' | 'hours' | 'deadline' | 'content' | 'priority' | 'complete'>
      & { likes: Maybe<Array<Maybe<(
        { __typename?: 'Worker' }
        & Pick<Worker, 'id' | 'name' | 'availability'>
        & { user: (
          { __typename?: 'User' }
          & Pick<User, 'id' | 'username' | 'password' | 'location'>
          & { roles: Maybe<Array<Maybe<(
            { __typename?: 'Worker' }
            & Pick<Worker, 'id' | 'name' | 'availability'>
          )>>>, stars: Maybe<Array<Maybe<(
            { __typename?: 'Task' }
            & Pick<Task, 'id' | 'title' | 'hours' | 'deadline' | 'content' | 'priority' | 'complete'>
          )>>> }
        ), tags: Maybe<Array<Maybe<(
          { __typename?: 'Tag' }
          & Pick<Tag, 'id' | 'title'>
        )>>>, tasks: Maybe<Array<Maybe<(
          { __typename?: 'Task' }
          & Pick<Task, 'id' | 'title' | 'hours' | 'deadline' | 'content' | 'priority' | 'complete'>
          & { comments: Maybe<Array<Maybe<(
            { __typename?: 'Comment' }
            & Pick<Comment, 'id' | 'content'>
          )>>> }
        )>>> }
      )>>> }
    )>>> }
  )>>> }
);

export type QueryCommentQueryVariables = {
  filter?: Maybe<UserFilter>,
  filter1?: Maybe<TagFilter>,
  order?: Maybe<TagOrder>,
  first?: Maybe<Scalars['Int']>,
  offset?: Maybe<Scalars['Int']>,
  filter2?: Maybe<TaskFilter>,
  order1?: Maybe<TaskOrder>,
  first1?: Maybe<Scalars['Int']>,
  offset1?: Maybe<Scalars['Int']>,
  filter3?: Maybe<WorkerFilter>,
  order2?: Maybe<WorkerOrder>,
  first2?: Maybe<Scalars['Int']>,
  offset2?: Maybe<Scalars['Int']>,
  filter4?: Maybe<WorkerFilter>,
  order3?: Maybe<WorkerOrder>,
  first3?: Maybe<Scalars['Int']>,
  offset3?: Maybe<Scalars['Int']>,
  filter5?: Maybe<CommentFilter>,
  order4?: Maybe<CommentOrder>,
  first4?: Maybe<Scalars['Int']>,
  offset4?: Maybe<Scalars['Int']>,
  filter6?: Maybe<TaskFilter>,
  order5?: Maybe<TaskOrder>,
  first5?: Maybe<Scalars['Int']>,
  offset5?: Maybe<Scalars['Int']>,
  filter7?: Maybe<UserFilter>,
  filter8?: Maybe<TagFilter>,
  order6?: Maybe<TagOrder>,
  first6?: Maybe<Scalars['Int']>,
  offset6?: Maybe<Scalars['Int']>,
  filter9?: Maybe<UserFilter>,
  filter10?: Maybe<TagFilter>,
  order7?: Maybe<TagOrder>,
  first7?: Maybe<Scalars['Int']>,
  offset7?: Maybe<Scalars['Int']>,
  filter11?: Maybe<TaskFilter>,
  order8?: Maybe<TaskOrder>,
  first8?: Maybe<Scalars['Int']>,
  offset8?: Maybe<Scalars['Int']>,
  filter12?: Maybe<WorkerFilter>,
  order9?: Maybe<WorkerOrder>,
  first9?: Maybe<Scalars['Int']>,
  offset9?: Maybe<Scalars['Int']>,
  filter13?: Maybe<WorkerFilter>,
  filter14?: Maybe<CommentFilter>,
  order10?: Maybe<CommentOrder>,
  first10?: Maybe<Scalars['Int']>,
  offset10?: Maybe<Scalars['Int']>,
  filter15?: Maybe<TaskFilter>,
  order11?: Maybe<TaskOrder>,
  first11?: Maybe<Scalars['Int']>,
  offset11?: Maybe<Scalars['Int']>,
  filter16?: Maybe<WorkerFilter>,
  filter17?: Maybe<CommentFilter>,
  order12?: Maybe<CommentOrder>,
  first12?: Maybe<Scalars['Int']>,
  offset12?: Maybe<Scalars['Int']>
};


export type QueryCommentQuery = (
  { __typename?: 'Query' }
  & { queryComment: Maybe<Array<Maybe<(
    { __typename?: 'Comment' }
    & Pick<Comment, 'id' | 'content'>
    & { worker: (
      { __typename?: 'Worker' }
      & Pick<Worker, 'id' | 'name' | 'availability'>
      & { user: (
        { __typename?: 'User' }
        & Pick<User, 'id' | 'username' | 'password' | 'location'>
        & { roles: Maybe<Array<Maybe<(
          { __typename?: 'Worker' }
          & Pick<Worker, 'id' | 'name' | 'availability'>
          & { user: (
            { __typename?: 'User' }
            & Pick<User, 'id' | 'username' | 'password' | 'location'>
          ), tags: Maybe<Array<Maybe<(
            { __typename?: 'Tag' }
            & Pick<Tag, 'id' | 'title'>
          )>>>, tasks: Maybe<Array<Maybe<(
            { __typename?: 'Task' }
            & Pick<Task, 'id' | 'title' | 'hours' | 'deadline' | 'content' | 'priority' | 'complete'>
          )>>> }
        )>>>, stars: Maybe<Array<Maybe<(
          { __typename?: 'Task' }
          & Pick<Task, 'id' | 'title' | 'hours' | 'deadline' | 'content' | 'priority' | 'complete'>
          & { likes: Maybe<Array<Maybe<(
            { __typename?: 'Worker' }
            & Pick<Worker, 'id' | 'name' | 'availability'>
          )>>>, comments: Maybe<Array<Maybe<(
            { __typename?: 'Comment' }
            & Pick<Comment, 'id' | 'content'>
          )>>> }
        )>>> }
      ), tags: Maybe<Array<Maybe<(
        { __typename?: 'Tag' }
        & Pick<Tag, 'id' | 'title'>
      )>>>, tasks: Maybe<Array<Maybe<(
        { __typename?: 'Task' }
        & Pick<Task, 'id' | 'title' | 'hours' | 'deadline' | 'content' | 'priority' | 'complete'>
        & { likes: Maybe<Array<Maybe<(
          { __typename?: 'Worker' }
          & Pick<Worker, 'id' | 'name' | 'availability'>
          & { user: (
            { __typename?: 'User' }
            & Pick<User, 'id' | 'username' | 'password' | 'location'>
          ), tags: Maybe<Array<Maybe<(
            { __typename?: 'Tag' }
            & Pick<Tag, 'id' | 'title'>
          )>>>, tasks: Maybe<Array<Maybe<(
            { __typename?: 'Task' }
            & Pick<Task, 'id' | 'title' | 'hours' | 'deadline' | 'content' | 'priority' | 'complete'>
          )>>> }
        )>>>, comments: Maybe<Array<Maybe<(
          { __typename?: 'Comment' }
          & Pick<Comment, 'id' | 'content'>
          & { worker: (
            { __typename?: 'Worker' }
            & Pick<Worker, 'id' | 'name' | 'availability'>
          ) }
        )>>> }
      )>>> }
    ) }
  )>>> }
);

export type QueryProjectQueryVariables = {
  filter?: Maybe<TagFilter>,
  order?: Maybe<TagOrder>,
  first?: Maybe<Scalars['Int']>,
  offset?: Maybe<Scalars['Int']>,
  filter1?: Maybe<WorkerFilter>,
  order1?: Maybe<WorkerOrder>,
  first1?: Maybe<Scalars['Int']>,
  offset1?: Maybe<Scalars['Int']>,
  filter2?: Maybe<TaskFilter>,
  order2?: Maybe<TaskOrder>,
  first2?: Maybe<Scalars['Int']>,
  offset2?: Maybe<Scalars['Int']>,
  filter3?: Maybe<UserFilter>,
  filter4?: Maybe<TagFilter>,
  order3?: Maybe<TagOrder>,
  first3?: Maybe<Scalars['Int']>,
  offset3?: Maybe<Scalars['Int']>,
  filter5?: Maybe<CommentFilter>,
  order4?: Maybe<CommentOrder>,
  first4?: Maybe<Scalars['Int']>,
  offset4?: Maybe<Scalars['Int']>,
  filter6?: Maybe<TaskFilter>,
  order5?: Maybe<TaskOrder>,
  first5?: Maybe<Scalars['Int']>,
  offset5?: Maybe<Scalars['Int']>,
  filter7?: Maybe<WorkerFilter>,
  order6?: Maybe<WorkerOrder>,
  first6?: Maybe<Scalars['Int']>,
  offset6?: Maybe<Scalars['Int']>,
  filter8?: Maybe<TaskFilter>,
  order7?: Maybe<TaskOrder>,
  first7?: Maybe<Scalars['Int']>,
  offset7?: Maybe<Scalars['Int']>,
  filter9?: Maybe<TaskFilter>,
  order8?: Maybe<TaskOrder>,
  first8?: Maybe<Scalars['Int']>,
  offset8?: Maybe<Scalars['Int']>,
  filter10?: Maybe<ColumnFilter>,
  order9?: Maybe<ColumnOrder>,
  first9?: Maybe<Scalars['Int']>,
  offset9?: Maybe<Scalars['Int']>,
  filter11?: Maybe<BoardFilter>,
  order10?: Maybe<BoardOrder>,
  first10?: Maybe<Scalars['Int']>,
  offset10?: Maybe<Scalars['Int']>,
  filter12?: Maybe<UserFilter>,
  filter13?: Maybe<TagFilter>,
  order11?: Maybe<TagOrder>,
  first11?: Maybe<Scalars['Int']>,
  offset11?: Maybe<Scalars['Int']>,
  filter14?: Maybe<TaskFilter>,
  order12?: Maybe<TaskOrder>,
  first12?: Maybe<Scalars['Int']>,
  offset12?: Maybe<Scalars['Int']>,
  filter15?: Maybe<WorkerFilter>,
  order13?: Maybe<WorkerOrder>,
  first13?: Maybe<Scalars['Int']>,
  offset13?: Maybe<Scalars['Int']>,
  filter16?: Maybe<ProjectFilter>,
  order14?: Maybe<ProjectOrder>,
  first14?: Maybe<Scalars['Int']>,
  offset14?: Maybe<Scalars['Int']>
};


export type QueryProjectQuery = (
  { __typename?: 'Query' }
  & { queryProject: Maybe<Array<Maybe<(
    { __typename?: 'Project' }
    & Pick<Project, 'id' | 'title'>
    & { tags: Maybe<Array<Maybe<(
      { __typename?: 'Tag' }
      & Pick<Tag, 'id' | 'title'>
    )>>>, tasks: Maybe<Array<Maybe<(
      { __typename?: 'Task' }
      & Pick<Task, 'id' | 'title' | 'hours' | 'deadline' | 'content' | 'priority' | 'complete'>
      & { likes: Maybe<Array<Maybe<(
        { __typename?: 'Worker' }
        & Pick<Worker, 'id' | 'name' | 'availability'>
        & { user: (
          { __typename?: 'User' }
          & Pick<User, 'id' | 'username' | 'password' | 'location'>
          & { roles: Maybe<Array<Maybe<(
            { __typename?: 'Worker' }
            & Pick<Worker, 'id' | 'name' | 'availability'>
          )>>>, stars: Maybe<Array<Maybe<(
            { __typename?: 'Task' }
            & Pick<Task, 'id' | 'title' | 'hours' | 'deadline' | 'content' | 'priority' | 'complete'>
          )>>> }
        ), tags: Maybe<Array<Maybe<(
          { __typename?: 'Tag' }
          & Pick<Tag, 'id' | 'title'>
        )>>>, tasks: Maybe<Array<Maybe<(
          { __typename?: 'Task' }
          & Pick<Task, 'id' | 'title' | 'hours' | 'deadline' | 'content' | 'priority' | 'complete'>
          & { comments: Maybe<Array<Maybe<(
            { __typename?: 'Comment' }
            & Pick<Comment, 'id' | 'content'>
          )>>> }
        )>>> }
      )>>> }
    )>>>, boards: Maybe<Array<Maybe<(
      { __typename?: 'Board' }
      & Pick<Board, 'id' | 'title' | 'order'>
      & { columns: Maybe<Array<Maybe<(
        { __typename?: 'Column' }
        & Pick<Column, 'id' | 'title'>
        & { tasks: Maybe<Array<Maybe<(
          { __typename?: 'Task' }
          & Pick<Task, 'id' | 'title' | 'hours' | 'deadline' | 'content' | 'priority' | 'complete'>
        )>>> }
      )>>> }
    )>>>, workers: Maybe<Array<Maybe<(
      { __typename?: 'Worker' }
      & Pick<Worker, 'id' | 'name' | 'availability'>
      & { user: (
        { __typename?: 'User' }
        & Pick<User, 'id' | 'username' | 'password' | 'location'>
      ), tags: Maybe<Array<Maybe<(
        { __typename?: 'Tag' }
        & Pick<Tag, 'id' | 'title'>
      )>>>, tasks: Maybe<Array<Maybe<(
        { __typename?: 'Task' }
        & Pick<Task, 'id' | 'title' | 'hours' | 'deadline' | 'content' | 'priority' | 'complete'>
      )>>> }
    )>>> }
  )>>> }
);

export type QueryTagQueryVariables = {
  filter?: Maybe<TagFilter>,
  order?: Maybe<TagOrder>,
  first?: Maybe<Scalars['Int']>,
  offset?: Maybe<Scalars['Int']>
};


export type QueryTagQuery = (
  { __typename?: 'Query' }
  & { queryTag: Maybe<Array<Maybe<(
    { __typename?: 'Tag' }
    & Pick<Tag, 'id' | 'title'>
  )>>> }
);

export type QueryTaskQueryVariables = {
  filter?: Maybe<UserFilter>,
  filter1?: Maybe<TagFilter>,
  order?: Maybe<TagOrder>,
  first?: Maybe<Scalars['Int']>,
  offset?: Maybe<Scalars['Int']>,
  filter2?: Maybe<TaskFilter>,
  order1?: Maybe<TaskOrder>,
  first1?: Maybe<Scalars['Int']>,
  offset1?: Maybe<Scalars['Int']>,
  filter3?: Maybe<WorkerFilter>,
  order2?: Maybe<WorkerOrder>,
  first2?: Maybe<Scalars['Int']>,
  offset2?: Maybe<Scalars['Int']>,
  filter4?: Maybe<WorkerFilter>,
  order3?: Maybe<WorkerOrder>,
  first3?: Maybe<Scalars['Int']>,
  offset3?: Maybe<Scalars['Int']>,
  filter5?: Maybe<CommentFilter>,
  order4?: Maybe<CommentOrder>,
  first4?: Maybe<Scalars['Int']>,
  offset4?: Maybe<Scalars['Int']>,
  filter6?: Maybe<TaskFilter>,
  order5?: Maybe<TaskOrder>,
  first5?: Maybe<Scalars['Int']>,
  offset5?: Maybe<Scalars['Int']>,
  filter7?: Maybe<UserFilter>,
  filter8?: Maybe<TagFilter>,
  order6?: Maybe<TagOrder>,
  first6?: Maybe<Scalars['Int']>,
  offset6?: Maybe<Scalars['Int']>,
  filter9?: Maybe<WorkerFilter>,
  order7?: Maybe<WorkerOrder>,
  first7?: Maybe<Scalars['Int']>,
  offset7?: Maybe<Scalars['Int']>,
  filter10?: Maybe<WorkerFilter>,
  filter11?: Maybe<CommentFilter>,
  order8?: Maybe<CommentOrder>,
  first8?: Maybe<Scalars['Int']>,
  offset8?: Maybe<Scalars['Int']>,
  filter12?: Maybe<TaskFilter>,
  order9?: Maybe<TaskOrder>,
  first9?: Maybe<Scalars['Int']>,
  offset9?: Maybe<Scalars['Int']>,
  filter13?: Maybe<WorkerFilter>,
  order10?: Maybe<WorkerOrder>,
  first10?: Maybe<Scalars['Int']>,
  offset10?: Maybe<Scalars['Int']>,
  filter14?: Maybe<CommentFilter>,
  order11?: Maybe<CommentOrder>,
  first11?: Maybe<Scalars['Int']>,
  offset11?: Maybe<Scalars['Int']>,
  filter15?: Maybe<TaskFilter>,
  order12?: Maybe<TaskOrder>,
  first12?: Maybe<Scalars['Int']>,
  offset12?: Maybe<Scalars['Int']>
};


export type QueryTaskQuery = (
  { __typename?: 'Query' }
  & { queryTask: Maybe<Array<Maybe<(
    { __typename?: 'Task' }
    & Pick<Task, 'id' | 'title' | 'hours' | 'deadline' | 'content' | 'priority' | 'complete'>
    & { likes: Maybe<Array<Maybe<(
      { __typename?: 'Worker' }
      & Pick<Worker, 'id' | 'name' | 'availability'>
      & { user: (
        { __typename?: 'User' }
        & Pick<User, 'id' | 'username' | 'password' | 'location'>
        & { roles: Maybe<Array<Maybe<(
          { __typename?: 'Worker' }
          & Pick<Worker, 'id' | 'name' | 'availability'>
          & { user: (
            { __typename?: 'User' }
            & Pick<User, 'id' | 'username' | 'password' | 'location'>
          ), tags: Maybe<Array<Maybe<(
            { __typename?: 'Tag' }
            & Pick<Tag, 'id' | 'title'>
          )>>>, tasks: Maybe<Array<Maybe<(
            { __typename?: 'Task' }
            & Pick<Task, 'id' | 'title' | 'hours' | 'deadline' | 'content' | 'priority' | 'complete'>
          )>>> }
        )>>>, stars: Maybe<Array<Maybe<(
          { __typename?: 'Task' }
          & Pick<Task, 'id' | 'title' | 'hours' | 'deadline' | 'content' | 'priority' | 'complete'>
          & { likes: Maybe<Array<Maybe<(
            { __typename?: 'Worker' }
            & Pick<Worker, 'id' | 'name' | 'availability'>
          )>>>, comments: Maybe<Array<Maybe<(
            { __typename?: 'Comment' }
            & Pick<Comment, 'id' | 'content'>
          )>>> }
        )>>> }
      ), tags: Maybe<Array<Maybe<(
        { __typename?: 'Tag' }
        & Pick<Tag, 'id' | 'title'>
      )>>>, tasks: Maybe<Array<Maybe<(
        { __typename?: 'Task' }
        & Pick<Task, 'id' | 'title' | 'hours' | 'deadline' | 'content' | 'priority' | 'complete'>
        & { likes: Maybe<Array<Maybe<(
          { __typename?: 'Worker' }
          & Pick<Worker, 'id' | 'name' | 'availability'>
        )>>>, comments: Maybe<Array<Maybe<(
          { __typename?: 'Comment' }
          & Pick<Comment, 'id' | 'content'>
          & { worker: (
            { __typename?: 'Worker' }
            & Pick<Worker, 'id' | 'name' | 'availability'>
          ) }
        )>>> }
      )>>> }
    )>>>, comments: Maybe<Array<Maybe<(
      { __typename?: 'Comment' }
      & Pick<Comment, 'id' | 'content'>
    )>>> }
  )>>> }
);

export type QueryUserQueryVariables = {
  filter?: Maybe<TagFilter>,
  order?: Maybe<TagOrder>,
  first?: Maybe<Scalars['Int']>,
  offset?: Maybe<Scalars['Int']>,
  filter1?: Maybe<TaskFilter>,
  order1?: Maybe<TaskOrder>,
  first1?: Maybe<Scalars['Int']>,
  offset1?: Maybe<Scalars['Int']>,
  filter2?: Maybe<WorkerFilter>,
  order2?: Maybe<WorkerOrder>,
  first2?: Maybe<Scalars['Int']>,
  offset2?: Maybe<Scalars['Int']>,
  filter3?: Maybe<WorkerFilter>,
  order3?: Maybe<WorkerOrder>,
  first3?: Maybe<Scalars['Int']>,
  offset3?: Maybe<Scalars['Int']>,
  filter4?: Maybe<CommentFilter>,
  order4?: Maybe<CommentOrder>,
  first4?: Maybe<Scalars['Int']>,
  offset4?: Maybe<Scalars['Int']>,
  filter5?: Maybe<TaskFilter>,
  order5?: Maybe<TaskOrder>,
  first5?: Maybe<Scalars['Int']>,
  offset5?: Maybe<Scalars['Int']>,
  filter6?: Maybe<UserFilter>,
  filter7?: Maybe<WorkerFilter>,
  order6?: Maybe<WorkerOrder>,
  first6?: Maybe<Scalars['Int']>,
  offset6?: Maybe<Scalars['Int']>,
  filter8?: Maybe<TaskFilter>,
  order7?: Maybe<TaskOrder>,
  first7?: Maybe<Scalars['Int']>,
  offset7?: Maybe<Scalars['Int']>,
  filter9?: Maybe<UserFilter>,
  order8?: Maybe<UserOrder>,
  first8?: Maybe<Scalars['Int']>,
  offset8?: Maybe<Scalars['Int']>
};


export type QueryUserQuery = (
  { __typename?: 'Query' }
  & { queryUser: Maybe<Array<Maybe<(
    { __typename?: 'User' }
    & Pick<User, 'id' | 'username' | 'password' | 'location'>
    & { roles: Maybe<Array<Maybe<(
      { __typename?: 'Worker' }
      & Pick<Worker, 'id' | 'name' | 'availability'>
      & { user: (
        { __typename?: 'User' }
        & Pick<User, 'id' | 'username' | 'password' | 'location'>
        & { roles: Maybe<Array<Maybe<(
          { __typename?: 'Worker' }
          & Pick<Worker, 'id' | 'name' | 'availability'>
          & { tags: Maybe<Array<Maybe<(
            { __typename?: 'Tag' }
            & Pick<Tag, 'id' | 'title'>
          )>>>, tasks: Maybe<Array<Maybe<(
            { __typename?: 'Task' }
            & Pick<Task, 'id' | 'title' | 'hours' | 'deadline' | 'content' | 'priority' | 'complete'>
          )>>> }
        )>>>, stars: Maybe<Array<Maybe<(
          { __typename?: 'Task' }
          & Pick<Task, 'id' | 'title' | 'hours' | 'deadline' | 'content' | 'priority' | 'complete'>
          & { likes: Maybe<Array<Maybe<(
            { __typename?: 'Worker' }
            & Pick<Worker, 'id' | 'name' | 'availability'>
          )>>>, comments: Maybe<Array<Maybe<(
            { __typename?: 'Comment' }
            & Pick<Comment, 'id' | 'content'>
          )>>> }
        )>>> }
      ) }
    )>>>, stars: Maybe<Array<Maybe<(
      { __typename?: 'Task' }
      & Pick<Task, 'id' | 'title' | 'hours' | 'deadline' | 'content' | 'priority' | 'complete'>
    )>>> }
  )>>> }
);

export type QueryWorkerQueryVariables = {
  filter?: Maybe<TaskFilter>,
  order?: Maybe<TaskOrder>,
  first?: Maybe<Scalars['Int']>,
  offset?: Maybe<Scalars['Int']>,
  filter1?: Maybe<UserFilter>,
  filter2?: Maybe<TagFilter>,
  order1?: Maybe<TagOrder>,
  first1?: Maybe<Scalars['Int']>,
  offset1?: Maybe<Scalars['Int']>,
  filter3?: Maybe<WorkerFilter>,
  order2?: Maybe<WorkerOrder>,
  first2?: Maybe<Scalars['Int']>,
  offset2?: Maybe<Scalars['Int']>,
  filter4?: Maybe<CommentFilter>,
  order3?: Maybe<CommentOrder>,
  first3?: Maybe<Scalars['Int']>,
  offset3?: Maybe<Scalars['Int']>,
  filter5?: Maybe<TaskFilter>,
  order4?: Maybe<TaskOrder>,
  first4?: Maybe<Scalars['Int']>,
  offset4?: Maybe<Scalars['Int']>,
  filter6?: Maybe<WorkerFilter>,
  order5?: Maybe<WorkerOrder>,
  first5?: Maybe<Scalars['Int']>,
  offset5?: Maybe<Scalars['Int']>,
  filter7?: Maybe<UserFilter>,
  filter8?: Maybe<TagFilter>,
  order6?: Maybe<TagOrder>,
  first6?: Maybe<Scalars['Int']>,
  offset6?: Maybe<Scalars['Int']>,
  filter9?: Maybe<TaskFilter>,
  order7?: Maybe<TaskOrder>,
  first7?: Maybe<Scalars['Int']>,
  offset7?: Maybe<Scalars['Int']>,
  filter10?: Maybe<WorkerFilter>,
  order8?: Maybe<WorkerOrder>,
  first8?: Maybe<Scalars['Int']>,
  offset8?: Maybe<Scalars['Int']>
};


export type QueryWorkerQuery = (
  { __typename?: 'Query' }
  & { queryWorker: Maybe<Array<Maybe<(
    { __typename?: 'Worker' }
    & Pick<Worker, 'id' | 'name' | 'availability'>
    & { user: (
      { __typename?: 'User' }
      & Pick<User, 'id' | 'username' | 'password' | 'location'>
      & { roles: Maybe<Array<Maybe<(
        { __typename?: 'Worker' }
        & Pick<Worker, 'id' | 'name' | 'availability'>
        & { user: (
          { __typename?: 'User' }
          & Pick<User, 'id' | 'username' | 'password' | 'location'>
          & { stars: Maybe<Array<Maybe<(
            { __typename?: 'Task' }
            & Pick<Task, 'id' | 'title' | 'hours' | 'deadline' | 'content' | 'priority' | 'complete'>
          )>>> }
        ), tags: Maybe<Array<Maybe<(
          { __typename?: 'Tag' }
          & Pick<Tag, 'id' | 'title'>
        )>>>, tasks: Maybe<Array<Maybe<(
          { __typename?: 'Task' }
          & Pick<Task, 'id' | 'title' | 'hours' | 'deadline' | 'content' | 'priority' | 'complete'>
          & { likes: Maybe<Array<Maybe<(
            { __typename?: 'Worker' }
            & Pick<Worker, 'id' | 'name' | 'availability'>
          )>>>, comments: Maybe<Array<Maybe<(
            { __typename?: 'Comment' }
            & Pick<Comment, 'id' | 'content'>
          )>>> }
        )>>> }
      )>>> }
    ), tags: Maybe<Array<Maybe<(
      { __typename?: 'Tag' }
      & Pick<Tag, 'id' | 'title'>
    )>>>, tasks: Maybe<Array<Maybe<(
      { __typename?: 'Task' }
      & Pick<Task, 'id' | 'title' | 'hours' | 'deadline' | 'content' | 'priority' | 'complete'>
    )>>> }
  )>>> }
);


export const AddBoardDocument = gql`
    mutation addBoard($filter: WorkerFilter, $order: WorkerOrder, $first: Int, $offset: Int, $filter1: CommentFilter, $order1: CommentOrder, $first1: Int, $offset1: Int, $filter2: TaskFilter, $order2: TaskOrder, $first2: Int, $offset2: Int, $filter3: ColumnFilter, $order3: ColumnOrder, $first3: Int, $offset3: Int, $filter4: BoardFilter, $order4: BoardOrder, $first4: Int, $offset4: Int, $input: [AddBoardInput!]!) {
  addBoard(input: $input) {
    board(filter: $filter4, order: $order4, first: $first4, offset: $offset4) {
      id
      title
      columns(filter: $filter3, order: $order3, first: $first3, offset: $offset3) {
        id
        title
        tasks(filter: $filter2, order: $order2, first: $first2, offset: $offset2) {
          id
          title
          hours
          deadline
          content
          priority
          complete
          likes(filter: $filter, order: $order, first: $first, offset: $offset) {
            id
            name
            availability
          }
          comments(filter: $filter1, order: $order1, first: $first1, offset: $offset1) {
            id
            content
          }
        }
      }
      order
    }
  }
}
    `;
export type AddBoardMutationFn = ApolloReactCommon.MutationFunction<AddBoardMutation, AddBoardMutationVariables>;
export type AddBoardComponentProps = Omit<ApolloReactComponents.MutationComponentOptions<AddBoardMutation, AddBoardMutationVariables>, 'mutation'>;

    export const AddBoardComponent = (props: AddBoardComponentProps) => (
      <ApolloReactComponents.Mutation<AddBoardMutation, AddBoardMutationVariables> mutation={AddBoardDocument} {...props} />
    );
    
export type AddBoardProps<TChildProps = {}> = ApolloReactHoc.MutateProps<AddBoardMutation, AddBoardMutationVariables> & TChildProps;
export function withAddBoard<TProps, TChildProps = {}>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  AddBoardMutation,
  AddBoardMutationVariables,
  AddBoardProps<TChildProps>>) {
    return ApolloReactHoc.withMutation<TProps, AddBoardMutation, AddBoardMutationVariables, AddBoardProps<TChildProps>>(AddBoardDocument, {
      alias: 'addBoard',
      ...operationOptions
    });
};
export type AddBoardMutationResult = ApolloReactCommon.MutationResult<AddBoardMutation>;
export type AddBoardMutationOptions = ApolloReactCommon.BaseMutationOptions<AddBoardMutation, AddBoardMutationVariables>;
export const AddColumnDocument = gql`
    mutation addColumn($filter: UserFilter, $filter1: TagFilter, $order: TagOrder, $first: Int, $offset: Int, $filter2: TaskFilter, $order1: TaskOrder, $first1: Int, $offset1: Int, $filter3: WorkerFilter, $order2: WorkerOrder, $first2: Int, $offset2: Int, $filter4: WorkerFilter, $filter5: CommentFilter, $order3: CommentOrder, $first3: Int, $offset3: Int, $filter6: TaskFilter, $order4: TaskOrder, $first4: Int, $offset4: Int, $filter7: ColumnFilter, $order5: ColumnOrder, $first5: Int, $offset5: Int, $input: [AddColumnInput!]!) {
  addColumn(input: $input) {
    column(filter: $filter7, order: $order5, first: $first5, offset: $offset5) {
      id
      title
      tasks(filter: $filter6, order: $order4, first: $first4, offset: $offset4) {
        id
        title
        hours
        deadline
        content
        priority
        complete
        likes(filter: $filter3, order: $order2, first: $first2, offset: $offset2) {
          id
          name
          availability
          user(filter: $filter) {
            id
            username
            password
            location
          }
          tags(filter: $filter1, order: $order, first: $first, offset: $offset) {
            id
            title
          }
          tasks(filter: $filter2, order: $order1, first: $first1, offset: $offset1) {
            id
            title
            hours
            deadline
            content
            priority
            complete
          }
        }
        comments(filter: $filter5, order: $order3, first: $first3, offset: $offset3) {
          id
          worker(filter: $filter4) {
            id
            name
            availability
          }
          content
        }
      }
    }
  }
}
    `;
export type AddColumnMutationFn = ApolloReactCommon.MutationFunction<AddColumnMutation, AddColumnMutationVariables>;
export type AddColumnComponentProps = Omit<ApolloReactComponents.MutationComponentOptions<AddColumnMutation, AddColumnMutationVariables>, 'mutation'>;

    export const AddColumnComponent = (props: AddColumnComponentProps) => (
      <ApolloReactComponents.Mutation<AddColumnMutation, AddColumnMutationVariables> mutation={AddColumnDocument} {...props} />
    );
    
export type AddColumnProps<TChildProps = {}> = ApolloReactHoc.MutateProps<AddColumnMutation, AddColumnMutationVariables> & TChildProps;
export function withAddColumn<TProps, TChildProps = {}>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  AddColumnMutation,
  AddColumnMutationVariables,
  AddColumnProps<TChildProps>>) {
    return ApolloReactHoc.withMutation<TProps, AddColumnMutation, AddColumnMutationVariables, AddColumnProps<TChildProps>>(AddColumnDocument, {
      alias: 'addColumn',
      ...operationOptions
    });
};
export type AddColumnMutationResult = ApolloReactCommon.MutationResult<AddColumnMutation>;
export type AddColumnMutationOptions = ApolloReactCommon.BaseMutationOptions<AddColumnMutation, AddColumnMutationVariables>;
export const AddCommentDocument = gql`
    mutation addComment($filter: WorkerFilter, $order: WorkerOrder, $first: Int, $offset: Int, $filter1: TaskFilter, $order1: TaskOrder, $first1: Int, $offset1: Int, $filter2: UserFilter, $filter3: TagFilter, $order2: TagOrder, $first2: Int, $offset2: Int, $filter4: WorkerFilter, $order3: WorkerOrder, $first3: Int, $offset3: Int, $filter5: CommentFilter, $order4: CommentOrder, $first4: Int, $offset4: Int, $filter6: TaskFilter, $order5: TaskOrder, $first5: Int, $offset5: Int, $filter7: WorkerFilter, $filter8: CommentFilter, $order6: CommentOrder, $first6: Int, $offset6: Int, $input: [AddCommentInput!]!) {
  addComment(input: $input) {
    comment(filter: $filter8, order: $order6, first: $first6, offset: $offset6) {
      id
      worker(filter: $filter7) {
        id
        name
        availability
        user(filter: $filter2) {
          id
          username
          password
          location
          roles(filter: $filter, order: $order, first: $first, offset: $offset) {
            id
            name
            availability
          }
          stars(filter: $filter1, order: $order1, first: $first1, offset: $offset1) {
            id
            title
            hours
            deadline
            content
            priority
            complete
          }
        }
        tags(filter: $filter3, order: $order2, first: $first2, offset: $offset2) {
          id
          title
        }
        tasks(filter: $filter6, order: $order5, first: $first5, offset: $offset5) {
          id
          title
          hours
          deadline
          content
          priority
          complete
          likes(filter: $filter4, order: $order3, first: $first3, offset: $offset3) {
            id
            name
            availability
          }
          comments(filter: $filter5, order: $order4, first: $first4, offset: $offset4) {
            id
            content
          }
        }
      }
      content
    }
  }
}
    `;
export type AddCommentMutationFn = ApolloReactCommon.MutationFunction<AddCommentMutation, AddCommentMutationVariables>;
export type AddCommentComponentProps = Omit<ApolloReactComponents.MutationComponentOptions<AddCommentMutation, AddCommentMutationVariables>, 'mutation'>;

    export const AddCommentComponent = (props: AddCommentComponentProps) => (
      <ApolloReactComponents.Mutation<AddCommentMutation, AddCommentMutationVariables> mutation={AddCommentDocument} {...props} />
    );
    
export type AddCommentProps<TChildProps = {}> = ApolloReactHoc.MutateProps<AddCommentMutation, AddCommentMutationVariables> & TChildProps;
export function withAddComment<TProps, TChildProps = {}>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  AddCommentMutation,
  AddCommentMutationVariables,
  AddCommentProps<TChildProps>>) {
    return ApolloReactHoc.withMutation<TProps, AddCommentMutation, AddCommentMutationVariables, AddCommentProps<TChildProps>>(AddCommentDocument, {
      alias: 'addComment',
      ...operationOptions
    });
};
export type AddCommentMutationResult = ApolloReactCommon.MutationResult<AddCommentMutation>;
export type AddCommentMutationOptions = ApolloReactCommon.BaseMutationOptions<AddCommentMutation, AddCommentMutationVariables>;
export const AddProjectDocument = gql`
    mutation addProject($filter: TagFilter, $order: TagOrder, $first: Int, $offset: Int, $filter1: UserFilter, $filter2: TagFilter, $order1: TagOrder, $first1: Int, $offset1: Int, $filter3: TaskFilter, $order2: TaskOrder, $first2: Int, $offset2: Int, $filter4: WorkerFilter, $order3: WorkerOrder, $first3: Int, $offset3: Int, $filter5: WorkerFilter, $filter6: CommentFilter, $order4: CommentOrder, $first4: Int, $offset4: Int, $filter7: TaskFilter, $order5: TaskOrder, $first5: Int, $offset5: Int, $filter8: TaskFilter, $order6: TaskOrder, $first6: Int, $offset6: Int, $filter9: ColumnFilter, $order7: ColumnOrder, $first7: Int, $offset7: Int, $filter10: BoardFilter, $order8: BoardOrder, $first8: Int, $offset8: Int, $filter11: WorkerFilter, $order9: WorkerOrder, $first9: Int, $offset9: Int, $filter12: TaskFilter, $order10: TaskOrder, $first10: Int, $offset10: Int, $filter13: UserFilter, $filter14: TagFilter, $order11: TagOrder, $first11: Int, $offset11: Int, $filter15: TaskFilter, $order12: TaskOrder, $first12: Int, $offset12: Int, $filter16: WorkerFilter, $order13: WorkerOrder, $first13: Int, $offset13: Int, $filter17: ProjectFilter, $order14: ProjectOrder, $first14: Int, $offset14: Int, $input: [AddProjectInput!]!) {
  addProject(input: $input) {
    project(filter: $filter17, order: $order14, first: $first14, offset: $offset14) {
      id
      title
      tags(filter: $filter, order: $order, first: $first, offset: $offset) {
        id
        title
      }
      tasks(filter: $filter7, order: $order5, first: $first5, offset: $offset5) {
        id
        title
        hours
        deadline
        content
        priority
        complete
        likes(filter: $filter4, order: $order3, first: $first3, offset: $offset3) {
          id
          name
          availability
          user(filter: $filter1) {
            id
            username
            password
            location
          }
          tags(filter: $filter2, order: $order1, first: $first1, offset: $offset1) {
            id
            title
          }
          tasks(filter: $filter3, order: $order2, first: $first2, offset: $offset2) {
            id
            title
            hours
            deadline
            content
            priority
            complete
          }
        }
        comments(filter: $filter6, order: $order4, first: $first4, offset: $offset4) {
          id
          worker(filter: $filter5) {
            id
            name
            availability
          }
          content
        }
      }
      boards(filter: $filter10, order: $order8, first: $first8, offset: $offset8) {
        id
        title
        columns(filter: $filter9, order: $order7, first: $first7, offset: $offset7) {
          id
          title
          tasks(filter: $filter8, order: $order6, first: $first6, offset: $offset6) {
            id
            title
            hours
            deadline
            content
            priority
            complete
          }
        }
        order
      }
      workers(filter: $filter16, order: $order13, first: $first13, offset: $offset13) {
        id
        name
        availability
        user(filter: $filter13) {
          id
          username
          password
          location
          roles(filter: $filter11, order: $order9, first: $first9, offset: $offset9) {
            id
            name
            availability
          }
          stars(filter: $filter12, order: $order10, first: $first10, offset: $offset10) {
            id
            title
            hours
            deadline
            content
            priority
            complete
          }
        }
        tags(filter: $filter14, order: $order11, first: $first11, offset: $offset11) {
          id
          title
        }
        tasks(filter: $filter15, order: $order12, first: $first12, offset: $offset12) {
          id
          title
          hours
          deadline
          content
          priority
          complete
        }
      }
    }
  }
}
    `;
export type AddProjectMutationFn = ApolloReactCommon.MutationFunction<AddProjectMutation, AddProjectMutationVariables>;
export type AddProjectComponentProps = Omit<ApolloReactComponents.MutationComponentOptions<AddProjectMutation, AddProjectMutationVariables>, 'mutation'>;

    export const AddProjectComponent = (props: AddProjectComponentProps) => (
      <ApolloReactComponents.Mutation<AddProjectMutation, AddProjectMutationVariables> mutation={AddProjectDocument} {...props} />
    );
    
export type AddProjectProps<TChildProps = {}> = ApolloReactHoc.MutateProps<AddProjectMutation, AddProjectMutationVariables> & TChildProps;
export function withAddProject<TProps, TChildProps = {}>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  AddProjectMutation,
  AddProjectMutationVariables,
  AddProjectProps<TChildProps>>) {
    return ApolloReactHoc.withMutation<TProps, AddProjectMutation, AddProjectMutationVariables, AddProjectProps<TChildProps>>(AddProjectDocument, {
      alias: 'addProject',
      ...operationOptions
    });
};
export type AddProjectMutationResult = ApolloReactCommon.MutationResult<AddProjectMutation>;
export type AddProjectMutationOptions = ApolloReactCommon.BaseMutationOptions<AddProjectMutation, AddProjectMutationVariables>;
export const AddTagDocument = gql`
    mutation addTag($filter: TagFilter, $order: TagOrder, $first: Int, $offset: Int, $input: [AddTagInput!]!) {
  addTag(input: $input) {
    tag(filter: $filter, order: $order, first: $first, offset: $offset) {
      id
      title
    }
  }
}
    `;
export type AddTagMutationFn = ApolloReactCommon.MutationFunction<AddTagMutation, AddTagMutationVariables>;
export type AddTagComponentProps = Omit<ApolloReactComponents.MutationComponentOptions<AddTagMutation, AddTagMutationVariables>, 'mutation'>;

    export const AddTagComponent = (props: AddTagComponentProps) => (
      <ApolloReactComponents.Mutation<AddTagMutation, AddTagMutationVariables> mutation={AddTagDocument} {...props} />
    );
    
export type AddTagProps<TChildProps = {}> = ApolloReactHoc.MutateProps<AddTagMutation, AddTagMutationVariables> & TChildProps;
export function withAddTag<TProps, TChildProps = {}>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  AddTagMutation,
  AddTagMutationVariables,
  AddTagProps<TChildProps>>) {
    return ApolloReactHoc.withMutation<TProps, AddTagMutation, AddTagMutationVariables, AddTagProps<TChildProps>>(AddTagDocument, {
      alias: 'addTag',
      ...operationOptions
    });
};
export type AddTagMutationResult = ApolloReactCommon.MutationResult<AddTagMutation>;
export type AddTagMutationOptions = ApolloReactCommon.BaseMutationOptions<AddTagMutation, AddTagMutationVariables>;
export const AddTaskDocument = gql`
    mutation addTask($filter: WorkerFilter, $order: WorkerOrder, $first: Int, $offset: Int, $filter1: TaskFilter, $order1: TaskOrder, $first1: Int, $offset1: Int, $filter2: UserFilter, $filter3: TagFilter, $order2: TagOrder, $first2: Int, $offset2: Int, $filter4: WorkerFilter, $order3: WorkerOrder, $first3: Int, $offset3: Int, $filter5: CommentFilter, $order4: CommentOrder, $first4: Int, $offset4: Int, $filter6: TaskFilter, $order5: TaskOrder, $first5: Int, $offset5: Int, $filter7: WorkerFilter, $order6: WorkerOrder, $first6: Int, $offset6: Int, $filter8: UserFilter, $filter9: TagFilter, $order7: TagOrder, $first7: Int, $offset7: Int, $filter10: TaskFilter, $order8: TaskOrder, $first8: Int, $offset8: Int, $filter11: WorkerFilter, $filter12: CommentFilter, $order9: CommentOrder, $first9: Int, $offset9: Int, $filter13: TaskFilter, $order10: TaskOrder, $first10: Int, $offset10: Int, $input: [AddTaskInput!]!) {
  addTask(input: $input) {
    task(filter: $filter13, order: $order10, first: $first10, offset: $offset10) {
      id
      title
      hours
      deadline
      content
      priority
      complete
      likes(filter: $filter7, order: $order6, first: $first6, offset: $offset6) {
        id
        name
        availability
        user(filter: $filter2) {
          id
          username
          password
          location
          roles(filter: $filter, order: $order, first: $first, offset: $offset) {
            id
            name
            availability
          }
          stars(filter: $filter1, order: $order1, first: $first1, offset: $offset1) {
            id
            title
            hours
            deadline
            content
            priority
            complete
          }
        }
        tags(filter: $filter3, order: $order2, first: $first2, offset: $offset2) {
          id
          title
        }
        tasks(filter: $filter6, order: $order5, first: $first5, offset: $offset5) {
          id
          title
          hours
          deadline
          content
          priority
          complete
          likes(filter: $filter4, order: $order3, first: $first3, offset: $offset3) {
            id
            name
            availability
          }
          comments(filter: $filter5, order: $order4, first: $first4, offset: $offset4) {
            id
            content
          }
        }
      }
      comments(filter: $filter12, order: $order9, first: $first9, offset: $offset9) {
        id
        worker(filter: $filter11) {
          id
          name
          availability
          user(filter: $filter8) {
            id
            username
            password
            location
          }
          tags(filter: $filter9, order: $order7, first: $first7, offset: $offset7) {
            id
            title
          }
          tasks(filter: $filter10, order: $order8, first: $first8, offset: $offset8) {
            id
            title
            hours
            deadline
            content
            priority
            complete
          }
        }
        content
      }
    }
  }
}
    `;
export type AddTaskMutationFn = ApolloReactCommon.MutationFunction<AddTaskMutation, AddTaskMutationVariables>;
export type AddTaskComponentProps = Omit<ApolloReactComponents.MutationComponentOptions<AddTaskMutation, AddTaskMutationVariables>, 'mutation'>;

    export const AddTaskComponent = (props: AddTaskComponentProps) => (
      <ApolloReactComponents.Mutation<AddTaskMutation, AddTaskMutationVariables> mutation={AddTaskDocument} {...props} />
    );
    
export type AddTaskProps<TChildProps = {}> = ApolloReactHoc.MutateProps<AddTaskMutation, AddTaskMutationVariables> & TChildProps;
export function withAddTask<TProps, TChildProps = {}>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  AddTaskMutation,
  AddTaskMutationVariables,
  AddTaskProps<TChildProps>>) {
    return ApolloReactHoc.withMutation<TProps, AddTaskMutation, AddTaskMutationVariables, AddTaskProps<TChildProps>>(AddTaskDocument, {
      alias: 'addTask',
      ...operationOptions
    });
};
export type AddTaskMutationResult = ApolloReactCommon.MutationResult<AddTaskMutation>;
export type AddTaskMutationOptions = ApolloReactCommon.BaseMutationOptions<AddTaskMutation, AddTaskMutationVariables>;
export const AddUserDocument = gql`
    mutation addUser($filter: TaskFilter, $order: TaskOrder, $first: Int, $offset: Int, $filter1: UserFilter, $filter2: TagFilter, $order1: TagOrder, $first1: Int, $offset1: Int, $filter3: WorkerFilter, $order2: WorkerOrder, $first2: Int, $offset2: Int, $filter4: CommentFilter, $order3: CommentOrder, $first3: Int, $offset3: Int, $filter5: TaskFilter, $order4: TaskOrder, $first4: Int, $offset4: Int, $filter6: WorkerFilter, $order5: WorkerOrder, $first5: Int, $offset5: Int, $filter7: UserFilter, $order6: UserOrder, $first6: Int, $offset6: Int, $input: [AddUserInput!]!) {
  addUser(input: $input) {
    user(filter: $filter7, order: $order6, first: $first6, offset: $offset6) {
      id
      username
      password
      location
      roles(filter: $filter6, order: $order5, first: $first5, offset: $offset5) {
        id
        name
        availability
        user(filter: $filter1) {
          id
          username
          password
          location
          stars(filter: $filter, order: $order, first: $first, offset: $offset) {
            id
            title
            hours
            deadline
            content
            priority
            complete
          }
        }
        tags(filter: $filter2, order: $order1, first: $first1, offset: $offset1) {
          id
          title
        }
        tasks(filter: $filter5, order: $order4, first: $first4, offset: $offset4) {
          id
          title
          hours
          deadline
          content
          priority
          complete
          likes(filter: $filter3, order: $order2, first: $first2, offset: $offset2) {
            id
            name
            availability
          }
          comments(filter: $filter4, order: $order3, first: $first3, offset: $offset3) {
            id
            content
          }
        }
      }
    }
  }
}
    `;
export type AddUserMutationFn = ApolloReactCommon.MutationFunction<AddUserMutation, AddUserMutationVariables>;
export type AddUserComponentProps = Omit<ApolloReactComponents.MutationComponentOptions<AddUserMutation, AddUserMutationVariables>, 'mutation'>;

    export const AddUserComponent = (props: AddUserComponentProps) => (
      <ApolloReactComponents.Mutation<AddUserMutation, AddUserMutationVariables> mutation={AddUserDocument} {...props} />
    );
    
export type AddUserProps<TChildProps = {}> = ApolloReactHoc.MutateProps<AddUserMutation, AddUserMutationVariables> & TChildProps;
export function withAddUser<TProps, TChildProps = {}>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  AddUserMutation,
  AddUserMutationVariables,
  AddUserProps<TChildProps>>) {
    return ApolloReactHoc.withMutation<TProps, AddUserMutation, AddUserMutationVariables, AddUserProps<TChildProps>>(AddUserDocument, {
      alias: 'addUser',
      ...operationOptions
    });
};
export type AddUserMutationResult = ApolloReactCommon.MutationResult<AddUserMutation>;
export type AddUserMutationOptions = ApolloReactCommon.BaseMutationOptions<AddUserMutation, AddUserMutationVariables>;
export const AddWorkerDocument = gql`
    mutation addWorker($filter: UserFilter, $filter1: TagFilter, $order: TagOrder, $first: Int, $offset: Int, $filter2: TaskFilter, $order1: TaskOrder, $first1: Int, $offset1: Int, $filter3: WorkerFilter, $order2: WorkerOrder, $first2: Int, $offset2: Int, $filter4: WorkerFilter, $order3: WorkerOrder, $first3: Int, $offset3: Int, $filter5: CommentFilter, $order4: CommentOrder, $first4: Int, $offset4: Int, $filter6: TaskFilter, $order5: TaskOrder, $first5: Int, $offset5: Int, $filter7: UserFilter, $filter8: TagFilter, $order6: TagOrder, $first6: Int, $offset6: Int, $filter9: UserFilter, $filter10: TagFilter, $order7: TagOrder, $first7: Int, $offset7: Int, $filter11: TaskFilter, $order8: TaskOrder, $first8: Int, $offset8: Int, $filter12: WorkerFilter, $order9: WorkerOrder, $first9: Int, $offset9: Int, $filter13: WorkerFilter, $filter14: CommentFilter, $order10: CommentOrder, $first10: Int, $offset10: Int, $filter15: TaskFilter, $order11: TaskOrder, $first11: Int, $offset11: Int, $filter16: WorkerFilter, $order12: WorkerOrder, $first12: Int, $offset12: Int, $input: [AddWorkerInput!]!) {
  addWorker(input: $input) {
    worker(filter: $filter16, order: $order12, first: $first12, offset: $offset12) {
      id
      name
      availability
      user(filter: $filter7) {
        id
        username
        password
        location
        roles(filter: $filter3, order: $order2, first: $first2, offset: $offset2) {
          id
          name
          availability
          user(filter: $filter) {
            id
            username
            password
            location
          }
          tags(filter: $filter1, order: $order, first: $first, offset: $offset) {
            id
            title
          }
          tasks(filter: $filter2, order: $order1, first: $first1, offset: $offset1) {
            id
            title
            hours
            deadline
            content
            priority
            complete
          }
        }
        stars(filter: $filter6, order: $order5, first: $first5, offset: $offset5) {
          id
          title
          hours
          deadline
          content
          priority
          complete
          likes(filter: $filter4, order: $order3, first: $first3, offset: $offset3) {
            id
            name
            availability
          }
          comments(filter: $filter5, order: $order4, first: $first4, offset: $offset4) {
            id
            content
          }
        }
      }
      tags(filter: $filter8, order: $order6, first: $first6, offset: $offset6) {
        id
        title
      }
      tasks(filter: $filter15, order: $order11, first: $first11, offset: $offset11) {
        id
        title
        hours
        deadline
        content
        priority
        complete
        likes(filter: $filter12, order: $order9, first: $first9, offset: $offset9) {
          id
          name
          availability
          user(filter: $filter9) {
            id
            username
            password
            location
          }
          tags(filter: $filter10, order: $order7, first: $first7, offset: $offset7) {
            id
            title
          }
          tasks(filter: $filter11, order: $order8, first: $first8, offset: $offset8) {
            id
            title
            hours
            deadline
            content
            priority
            complete
          }
        }
        comments(filter: $filter14, order: $order10, first: $first10, offset: $offset10) {
          id
          worker(filter: $filter13) {
            id
            name
            availability
          }
          content
        }
      }
    }
  }
}
    `;
export type AddWorkerMutationFn = ApolloReactCommon.MutationFunction<AddWorkerMutation, AddWorkerMutationVariables>;
export type AddWorkerComponentProps = Omit<ApolloReactComponents.MutationComponentOptions<AddWorkerMutation, AddWorkerMutationVariables>, 'mutation'>;

    export const AddWorkerComponent = (props: AddWorkerComponentProps) => (
      <ApolloReactComponents.Mutation<AddWorkerMutation, AddWorkerMutationVariables> mutation={AddWorkerDocument} {...props} />
    );
    
export type AddWorkerProps<TChildProps = {}> = ApolloReactHoc.MutateProps<AddWorkerMutation, AddWorkerMutationVariables> & TChildProps;
export function withAddWorker<TProps, TChildProps = {}>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  AddWorkerMutation,
  AddWorkerMutationVariables,
  AddWorkerProps<TChildProps>>) {
    return ApolloReactHoc.withMutation<TProps, AddWorkerMutation, AddWorkerMutationVariables, AddWorkerProps<TChildProps>>(AddWorkerDocument, {
      alias: 'addWorker',
      ...operationOptions
    });
};
export type AddWorkerMutationResult = ApolloReactCommon.MutationResult<AddWorkerMutation>;
export type AddWorkerMutationOptions = ApolloReactCommon.BaseMutationOptions<AddWorkerMutation, AddWorkerMutationVariables>;
export const DeleteBoardDocument = gql`
    mutation deleteBoard($filter: BoardFilter!) {
  deleteBoard(filter: $filter) {
    msg
  }
}
    `;
export type DeleteBoardMutationFn = ApolloReactCommon.MutationFunction<DeleteBoardMutation, DeleteBoardMutationVariables>;
export type DeleteBoardComponentProps = Omit<ApolloReactComponents.MutationComponentOptions<DeleteBoardMutation, DeleteBoardMutationVariables>, 'mutation'>;

    export const DeleteBoardComponent = (props: DeleteBoardComponentProps) => (
      <ApolloReactComponents.Mutation<DeleteBoardMutation, DeleteBoardMutationVariables> mutation={DeleteBoardDocument} {...props} />
    );
    
export type DeleteBoardProps<TChildProps = {}> = ApolloReactHoc.MutateProps<DeleteBoardMutation, DeleteBoardMutationVariables> & TChildProps;
export function withDeleteBoard<TProps, TChildProps = {}>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  DeleteBoardMutation,
  DeleteBoardMutationVariables,
  DeleteBoardProps<TChildProps>>) {
    return ApolloReactHoc.withMutation<TProps, DeleteBoardMutation, DeleteBoardMutationVariables, DeleteBoardProps<TChildProps>>(DeleteBoardDocument, {
      alias: 'deleteBoard',
      ...operationOptions
    });
};
export type DeleteBoardMutationResult = ApolloReactCommon.MutationResult<DeleteBoardMutation>;
export type DeleteBoardMutationOptions = ApolloReactCommon.BaseMutationOptions<DeleteBoardMutation, DeleteBoardMutationVariables>;
export const DeleteColumnDocument = gql`
    mutation deleteColumn($filter: ColumnFilter!) {
  deleteColumn(filter: $filter) {
    msg
  }
}
    `;
export type DeleteColumnMutationFn = ApolloReactCommon.MutationFunction<DeleteColumnMutation, DeleteColumnMutationVariables>;
export type DeleteColumnComponentProps = Omit<ApolloReactComponents.MutationComponentOptions<DeleteColumnMutation, DeleteColumnMutationVariables>, 'mutation'>;

    export const DeleteColumnComponent = (props: DeleteColumnComponentProps) => (
      <ApolloReactComponents.Mutation<DeleteColumnMutation, DeleteColumnMutationVariables> mutation={DeleteColumnDocument} {...props} />
    );
    
export type DeleteColumnProps<TChildProps = {}> = ApolloReactHoc.MutateProps<DeleteColumnMutation, DeleteColumnMutationVariables> & TChildProps;
export function withDeleteColumn<TProps, TChildProps = {}>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  DeleteColumnMutation,
  DeleteColumnMutationVariables,
  DeleteColumnProps<TChildProps>>) {
    return ApolloReactHoc.withMutation<TProps, DeleteColumnMutation, DeleteColumnMutationVariables, DeleteColumnProps<TChildProps>>(DeleteColumnDocument, {
      alias: 'deleteColumn',
      ...operationOptions
    });
};
export type DeleteColumnMutationResult = ApolloReactCommon.MutationResult<DeleteColumnMutation>;
export type DeleteColumnMutationOptions = ApolloReactCommon.BaseMutationOptions<DeleteColumnMutation, DeleteColumnMutationVariables>;
export const DeleteCommentDocument = gql`
    mutation deleteComment($filter: CommentFilter!) {
  deleteComment(filter: $filter) {
    msg
  }
}
    `;
export type DeleteCommentMutationFn = ApolloReactCommon.MutationFunction<DeleteCommentMutation, DeleteCommentMutationVariables>;
export type DeleteCommentComponentProps = Omit<ApolloReactComponents.MutationComponentOptions<DeleteCommentMutation, DeleteCommentMutationVariables>, 'mutation'>;

    export const DeleteCommentComponent = (props: DeleteCommentComponentProps) => (
      <ApolloReactComponents.Mutation<DeleteCommentMutation, DeleteCommentMutationVariables> mutation={DeleteCommentDocument} {...props} />
    );
    
export type DeleteCommentProps<TChildProps = {}> = ApolloReactHoc.MutateProps<DeleteCommentMutation, DeleteCommentMutationVariables> & TChildProps;
export function withDeleteComment<TProps, TChildProps = {}>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  DeleteCommentMutation,
  DeleteCommentMutationVariables,
  DeleteCommentProps<TChildProps>>) {
    return ApolloReactHoc.withMutation<TProps, DeleteCommentMutation, DeleteCommentMutationVariables, DeleteCommentProps<TChildProps>>(DeleteCommentDocument, {
      alias: 'deleteComment',
      ...operationOptions
    });
};
export type DeleteCommentMutationResult = ApolloReactCommon.MutationResult<DeleteCommentMutation>;
export type DeleteCommentMutationOptions = ApolloReactCommon.BaseMutationOptions<DeleteCommentMutation, DeleteCommentMutationVariables>;
export const DeleteProjectDocument = gql`
    mutation deleteProject($filter: ProjectFilter!) {
  deleteProject(filter: $filter) {
    msg
  }
}
    `;
export type DeleteProjectMutationFn = ApolloReactCommon.MutationFunction<DeleteProjectMutation, DeleteProjectMutationVariables>;
export type DeleteProjectComponentProps = Omit<ApolloReactComponents.MutationComponentOptions<DeleteProjectMutation, DeleteProjectMutationVariables>, 'mutation'>;

    export const DeleteProjectComponent = (props: DeleteProjectComponentProps) => (
      <ApolloReactComponents.Mutation<DeleteProjectMutation, DeleteProjectMutationVariables> mutation={DeleteProjectDocument} {...props} />
    );
    
export type DeleteProjectProps<TChildProps = {}> = ApolloReactHoc.MutateProps<DeleteProjectMutation, DeleteProjectMutationVariables> & TChildProps;
export function withDeleteProject<TProps, TChildProps = {}>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  DeleteProjectMutation,
  DeleteProjectMutationVariables,
  DeleteProjectProps<TChildProps>>) {
    return ApolloReactHoc.withMutation<TProps, DeleteProjectMutation, DeleteProjectMutationVariables, DeleteProjectProps<TChildProps>>(DeleteProjectDocument, {
      alias: 'deleteProject',
      ...operationOptions
    });
};
export type DeleteProjectMutationResult = ApolloReactCommon.MutationResult<DeleteProjectMutation>;
export type DeleteProjectMutationOptions = ApolloReactCommon.BaseMutationOptions<DeleteProjectMutation, DeleteProjectMutationVariables>;
export const DeleteTagDocument = gql`
    mutation deleteTag($filter: TagFilter!) {
  deleteTag(filter: $filter) {
    msg
  }
}
    `;
export type DeleteTagMutationFn = ApolloReactCommon.MutationFunction<DeleteTagMutation, DeleteTagMutationVariables>;
export type DeleteTagComponentProps = Omit<ApolloReactComponents.MutationComponentOptions<DeleteTagMutation, DeleteTagMutationVariables>, 'mutation'>;

    export const DeleteTagComponent = (props: DeleteTagComponentProps) => (
      <ApolloReactComponents.Mutation<DeleteTagMutation, DeleteTagMutationVariables> mutation={DeleteTagDocument} {...props} />
    );
    
export type DeleteTagProps<TChildProps = {}> = ApolloReactHoc.MutateProps<DeleteTagMutation, DeleteTagMutationVariables> & TChildProps;
export function withDeleteTag<TProps, TChildProps = {}>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  DeleteTagMutation,
  DeleteTagMutationVariables,
  DeleteTagProps<TChildProps>>) {
    return ApolloReactHoc.withMutation<TProps, DeleteTagMutation, DeleteTagMutationVariables, DeleteTagProps<TChildProps>>(DeleteTagDocument, {
      alias: 'deleteTag',
      ...operationOptions
    });
};
export type DeleteTagMutationResult = ApolloReactCommon.MutationResult<DeleteTagMutation>;
export type DeleteTagMutationOptions = ApolloReactCommon.BaseMutationOptions<DeleteTagMutation, DeleteTagMutationVariables>;
export const DeleteTaskDocument = gql`
    mutation deleteTask($filter: TaskFilter!) {
  deleteTask(filter: $filter) {
    msg
  }
}
    `;
export type DeleteTaskMutationFn = ApolloReactCommon.MutationFunction<DeleteTaskMutation, DeleteTaskMutationVariables>;
export type DeleteTaskComponentProps = Omit<ApolloReactComponents.MutationComponentOptions<DeleteTaskMutation, DeleteTaskMutationVariables>, 'mutation'>;

    export const DeleteTaskComponent = (props: DeleteTaskComponentProps) => (
      <ApolloReactComponents.Mutation<DeleteTaskMutation, DeleteTaskMutationVariables> mutation={DeleteTaskDocument} {...props} />
    );
    
export type DeleteTaskProps<TChildProps = {}> = ApolloReactHoc.MutateProps<DeleteTaskMutation, DeleteTaskMutationVariables> & TChildProps;
export function withDeleteTask<TProps, TChildProps = {}>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  DeleteTaskMutation,
  DeleteTaskMutationVariables,
  DeleteTaskProps<TChildProps>>) {
    return ApolloReactHoc.withMutation<TProps, DeleteTaskMutation, DeleteTaskMutationVariables, DeleteTaskProps<TChildProps>>(DeleteTaskDocument, {
      alias: 'deleteTask',
      ...operationOptions
    });
};
export type DeleteTaskMutationResult = ApolloReactCommon.MutationResult<DeleteTaskMutation>;
export type DeleteTaskMutationOptions = ApolloReactCommon.BaseMutationOptions<DeleteTaskMutation, DeleteTaskMutationVariables>;
export const DeleteUserDocument = gql`
    mutation deleteUser($filter: UserFilter!) {
  deleteUser(filter: $filter) {
    msg
  }
}
    `;
export type DeleteUserMutationFn = ApolloReactCommon.MutationFunction<DeleteUserMutation, DeleteUserMutationVariables>;
export type DeleteUserComponentProps = Omit<ApolloReactComponents.MutationComponentOptions<DeleteUserMutation, DeleteUserMutationVariables>, 'mutation'>;

    export const DeleteUserComponent = (props: DeleteUserComponentProps) => (
      <ApolloReactComponents.Mutation<DeleteUserMutation, DeleteUserMutationVariables> mutation={DeleteUserDocument} {...props} />
    );
    
export type DeleteUserProps<TChildProps = {}> = ApolloReactHoc.MutateProps<DeleteUserMutation, DeleteUserMutationVariables> & TChildProps;
export function withDeleteUser<TProps, TChildProps = {}>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  DeleteUserMutation,
  DeleteUserMutationVariables,
  DeleteUserProps<TChildProps>>) {
    return ApolloReactHoc.withMutation<TProps, DeleteUserMutation, DeleteUserMutationVariables, DeleteUserProps<TChildProps>>(DeleteUserDocument, {
      alias: 'deleteUser',
      ...operationOptions
    });
};
export type DeleteUserMutationResult = ApolloReactCommon.MutationResult<DeleteUserMutation>;
export type DeleteUserMutationOptions = ApolloReactCommon.BaseMutationOptions<DeleteUserMutation, DeleteUserMutationVariables>;
export const DeleteWorkerDocument = gql`
    mutation deleteWorker($filter: WorkerFilter!) {
  deleteWorker(filter: $filter) {
    msg
  }
}
    `;
export type DeleteWorkerMutationFn = ApolloReactCommon.MutationFunction<DeleteWorkerMutation, DeleteWorkerMutationVariables>;
export type DeleteWorkerComponentProps = Omit<ApolloReactComponents.MutationComponentOptions<DeleteWorkerMutation, DeleteWorkerMutationVariables>, 'mutation'>;

    export const DeleteWorkerComponent = (props: DeleteWorkerComponentProps) => (
      <ApolloReactComponents.Mutation<DeleteWorkerMutation, DeleteWorkerMutationVariables> mutation={DeleteWorkerDocument} {...props} />
    );
    
export type DeleteWorkerProps<TChildProps = {}> = ApolloReactHoc.MutateProps<DeleteWorkerMutation, DeleteWorkerMutationVariables> & TChildProps;
export function withDeleteWorker<TProps, TChildProps = {}>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  DeleteWorkerMutation,
  DeleteWorkerMutationVariables,
  DeleteWorkerProps<TChildProps>>) {
    return ApolloReactHoc.withMutation<TProps, DeleteWorkerMutation, DeleteWorkerMutationVariables, DeleteWorkerProps<TChildProps>>(DeleteWorkerDocument, {
      alias: 'deleteWorker',
      ...operationOptions
    });
};
export type DeleteWorkerMutationResult = ApolloReactCommon.MutationResult<DeleteWorkerMutation>;
export type DeleteWorkerMutationOptions = ApolloReactCommon.BaseMutationOptions<DeleteWorkerMutation, DeleteWorkerMutationVariables>;
export const UpdateBoardDocument = gql`
    mutation updateBoard($filter: WorkerFilter, $order: WorkerOrder, $first: Int, $offset: Int, $filter1: CommentFilter, $order1: CommentOrder, $first1: Int, $offset1: Int, $filter2: TaskFilter, $order2: TaskOrder, $first2: Int, $offset2: Int, $filter3: ColumnFilter, $order3: ColumnOrder, $first3: Int, $offset3: Int, $filter4: BoardFilter, $order4: BoardOrder, $first4: Int, $offset4: Int, $input: UpdateBoardInput!) {
  updateBoard(input: $input) {
    board(filter: $filter4, order: $order4, first: $first4, offset: $offset4) {
      id
      title
      columns(filter: $filter3, order: $order3, first: $first3, offset: $offset3) {
        id
        title
        tasks(filter: $filter2, order: $order2, first: $first2, offset: $offset2) {
          id
          title
          hours
          deadline
          content
          priority
          complete
          likes(filter: $filter, order: $order, first: $first, offset: $offset) {
            id
            name
            availability
          }
          comments(filter: $filter1, order: $order1, first: $first1, offset: $offset1) {
            id
            content
          }
        }
      }
      order
    }
  }
}
    `;
export type UpdateBoardMutationFn = ApolloReactCommon.MutationFunction<UpdateBoardMutation, UpdateBoardMutationVariables>;
export type UpdateBoardComponentProps = Omit<ApolloReactComponents.MutationComponentOptions<UpdateBoardMutation, UpdateBoardMutationVariables>, 'mutation'>;

    export const UpdateBoardComponent = (props: UpdateBoardComponentProps) => (
      <ApolloReactComponents.Mutation<UpdateBoardMutation, UpdateBoardMutationVariables> mutation={UpdateBoardDocument} {...props} />
    );
    
export type UpdateBoardProps<TChildProps = {}> = ApolloReactHoc.MutateProps<UpdateBoardMutation, UpdateBoardMutationVariables> & TChildProps;
export function withUpdateBoard<TProps, TChildProps = {}>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  UpdateBoardMutation,
  UpdateBoardMutationVariables,
  UpdateBoardProps<TChildProps>>) {
    return ApolloReactHoc.withMutation<TProps, UpdateBoardMutation, UpdateBoardMutationVariables, UpdateBoardProps<TChildProps>>(UpdateBoardDocument, {
      alias: 'updateBoard',
      ...operationOptions
    });
};
export type UpdateBoardMutationResult = ApolloReactCommon.MutationResult<UpdateBoardMutation>;
export type UpdateBoardMutationOptions = ApolloReactCommon.BaseMutationOptions<UpdateBoardMutation, UpdateBoardMutationVariables>;
export const UpdateColumnDocument = gql`
    mutation updateColumn($filter: UserFilter, $filter1: TagFilter, $order: TagOrder, $first: Int, $offset: Int, $filter2: TaskFilter, $order1: TaskOrder, $first1: Int, $offset1: Int, $filter3: WorkerFilter, $order2: WorkerOrder, $first2: Int, $offset2: Int, $filter4: WorkerFilter, $filter5: CommentFilter, $order3: CommentOrder, $first3: Int, $offset3: Int, $filter6: TaskFilter, $order4: TaskOrder, $first4: Int, $offset4: Int, $filter7: ColumnFilter, $order5: ColumnOrder, $first5: Int, $offset5: Int, $input: UpdateColumnInput!) {
  updateColumn(input: $input) {
    column(filter: $filter7, order: $order5, first: $first5, offset: $offset5) {
      id
      title
      tasks(filter: $filter6, order: $order4, first: $first4, offset: $offset4) {
        id
        title
        hours
        deadline
        content
        priority
        complete
        likes(filter: $filter3, order: $order2, first: $first2, offset: $offset2) {
          id
          name
          availability
          user(filter: $filter) {
            id
            username
            password
            location
          }
          tags(filter: $filter1, order: $order, first: $first, offset: $offset) {
            id
            title
          }
          tasks(filter: $filter2, order: $order1, first: $first1, offset: $offset1) {
            id
            title
            hours
            deadline
            content
            priority
            complete
          }
        }
        comments(filter: $filter5, order: $order3, first: $first3, offset: $offset3) {
          id
          worker(filter: $filter4) {
            id
            name
            availability
          }
          content
        }
      }
    }
  }
}
    `;
export type UpdateColumnMutationFn = ApolloReactCommon.MutationFunction<UpdateColumnMutation, UpdateColumnMutationVariables>;
export type UpdateColumnComponentProps = Omit<ApolloReactComponents.MutationComponentOptions<UpdateColumnMutation, UpdateColumnMutationVariables>, 'mutation'>;

    export const UpdateColumnComponent = (props: UpdateColumnComponentProps) => (
      <ApolloReactComponents.Mutation<UpdateColumnMutation, UpdateColumnMutationVariables> mutation={UpdateColumnDocument} {...props} />
    );
    
export type UpdateColumnProps<TChildProps = {}> = ApolloReactHoc.MutateProps<UpdateColumnMutation, UpdateColumnMutationVariables> & TChildProps;
export function withUpdateColumn<TProps, TChildProps = {}>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  UpdateColumnMutation,
  UpdateColumnMutationVariables,
  UpdateColumnProps<TChildProps>>) {
    return ApolloReactHoc.withMutation<TProps, UpdateColumnMutation, UpdateColumnMutationVariables, UpdateColumnProps<TChildProps>>(UpdateColumnDocument, {
      alias: 'updateColumn',
      ...operationOptions
    });
};
export type UpdateColumnMutationResult = ApolloReactCommon.MutationResult<UpdateColumnMutation>;
export type UpdateColumnMutationOptions = ApolloReactCommon.BaseMutationOptions<UpdateColumnMutation, UpdateColumnMutationVariables>;
export const UpdateCommentDocument = gql`
    mutation updateComment($filter: WorkerFilter, $order: WorkerOrder, $first: Int, $offset: Int, $filter1: TaskFilter, $order1: TaskOrder, $first1: Int, $offset1: Int, $filter2: UserFilter, $filter3: TagFilter, $order2: TagOrder, $first2: Int, $offset2: Int, $filter4: WorkerFilter, $order3: WorkerOrder, $first3: Int, $offset3: Int, $filter5: CommentFilter, $order4: CommentOrder, $first4: Int, $offset4: Int, $filter6: TaskFilter, $order5: TaskOrder, $first5: Int, $offset5: Int, $filter7: WorkerFilter, $filter8: CommentFilter, $order6: CommentOrder, $first6: Int, $offset6: Int, $input: UpdateCommentInput!) {
  updateComment(input: $input) {
    comment(filter: $filter8, order: $order6, first: $first6, offset: $offset6) {
      id
      worker(filter: $filter7) {
        id
        name
        availability
        user(filter: $filter2) {
          id
          username
          password
          location
          roles(filter: $filter, order: $order, first: $first, offset: $offset) {
            id
            name
            availability
          }
          stars(filter: $filter1, order: $order1, first: $first1, offset: $offset1) {
            id
            title
            hours
            deadline
            content
            priority
            complete
          }
        }
        tags(filter: $filter3, order: $order2, first: $first2, offset: $offset2) {
          id
          title
        }
        tasks(filter: $filter6, order: $order5, first: $first5, offset: $offset5) {
          id
          title
          hours
          deadline
          content
          priority
          complete
          likes(filter: $filter4, order: $order3, first: $first3, offset: $offset3) {
            id
            name
            availability
          }
          comments(filter: $filter5, order: $order4, first: $first4, offset: $offset4) {
            id
            content
          }
        }
      }
      content
    }
  }
}
    `;
export type UpdateCommentMutationFn = ApolloReactCommon.MutationFunction<UpdateCommentMutation, UpdateCommentMutationVariables>;
export type UpdateCommentComponentProps = Omit<ApolloReactComponents.MutationComponentOptions<UpdateCommentMutation, UpdateCommentMutationVariables>, 'mutation'>;

    export const UpdateCommentComponent = (props: UpdateCommentComponentProps) => (
      <ApolloReactComponents.Mutation<UpdateCommentMutation, UpdateCommentMutationVariables> mutation={UpdateCommentDocument} {...props} />
    );
    
export type UpdateCommentProps<TChildProps = {}> = ApolloReactHoc.MutateProps<UpdateCommentMutation, UpdateCommentMutationVariables> & TChildProps;
export function withUpdateComment<TProps, TChildProps = {}>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  UpdateCommentMutation,
  UpdateCommentMutationVariables,
  UpdateCommentProps<TChildProps>>) {
    return ApolloReactHoc.withMutation<TProps, UpdateCommentMutation, UpdateCommentMutationVariables, UpdateCommentProps<TChildProps>>(UpdateCommentDocument, {
      alias: 'updateComment',
      ...operationOptions
    });
};
export type UpdateCommentMutationResult = ApolloReactCommon.MutationResult<UpdateCommentMutation>;
export type UpdateCommentMutationOptions = ApolloReactCommon.BaseMutationOptions<UpdateCommentMutation, UpdateCommentMutationVariables>;
export const UpdateProjectDocument = gql`
    mutation updateProject($filter: TagFilter, $order: TagOrder, $first: Int, $offset: Int, $filter1: UserFilter, $filter2: TagFilter, $order1: TagOrder, $first1: Int, $offset1: Int, $filter3: TaskFilter, $order2: TaskOrder, $first2: Int, $offset2: Int, $filter4: WorkerFilter, $order3: WorkerOrder, $first3: Int, $offset3: Int, $filter5: WorkerFilter, $filter6: CommentFilter, $order4: CommentOrder, $first4: Int, $offset4: Int, $filter7: TaskFilter, $order5: TaskOrder, $first5: Int, $offset5: Int, $filter8: TaskFilter, $order6: TaskOrder, $first6: Int, $offset6: Int, $filter9: ColumnFilter, $order7: ColumnOrder, $first7: Int, $offset7: Int, $filter10: BoardFilter, $order8: BoardOrder, $first8: Int, $offset8: Int, $filter11: WorkerFilter, $order9: WorkerOrder, $first9: Int, $offset9: Int, $filter12: TaskFilter, $order10: TaskOrder, $first10: Int, $offset10: Int, $filter13: UserFilter, $filter14: TagFilter, $order11: TagOrder, $first11: Int, $offset11: Int, $filter15: TaskFilter, $order12: TaskOrder, $first12: Int, $offset12: Int, $filter16: WorkerFilter, $order13: WorkerOrder, $first13: Int, $offset13: Int, $filter17: ProjectFilter, $order14: ProjectOrder, $first14: Int, $offset14: Int, $input: UpdateProjectInput!) {
  updateProject(input: $input) {
    project(filter: $filter17, order: $order14, first: $first14, offset: $offset14) {
      id
      title
      tags(filter: $filter, order: $order, first: $first, offset: $offset) {
        id
        title
      }
      tasks(filter: $filter7, order: $order5, first: $first5, offset: $offset5) {
        id
        title
        hours
        deadline
        content
        priority
        complete
        likes(filter: $filter4, order: $order3, first: $first3, offset: $offset3) {
          id
          name
          availability
          user(filter: $filter1) {
            id
            username
            password
            location
          }
          tags(filter: $filter2, order: $order1, first: $first1, offset: $offset1) {
            id
            title
          }
          tasks(filter: $filter3, order: $order2, first: $first2, offset: $offset2) {
            id
            title
            hours
            deadline
            content
            priority
            complete
          }
        }
        comments(filter: $filter6, order: $order4, first: $first4, offset: $offset4) {
          id
          worker(filter: $filter5) {
            id
            name
            availability
          }
          content
        }
      }
      boards(filter: $filter10, order: $order8, first: $first8, offset: $offset8) {
        id
        title
        columns(filter: $filter9, order: $order7, first: $first7, offset: $offset7) {
          id
          title
          tasks(filter: $filter8, order: $order6, first: $first6, offset: $offset6) {
            id
            title
            hours
            deadline
            content
            priority
            complete
          }
        }
        order
      }
      workers(filter: $filter16, order: $order13, first: $first13, offset: $offset13) {
        id
        name
        availability
        user(filter: $filter13) {
          id
          username
          password
          location
          roles(filter: $filter11, order: $order9, first: $first9, offset: $offset9) {
            id
            name
            availability
          }
          stars(filter: $filter12, order: $order10, first: $first10, offset: $offset10) {
            id
            title
            hours
            deadline
            content
            priority
            complete
          }
        }
        tags(filter: $filter14, order: $order11, first: $first11, offset: $offset11) {
          id
          title
        }
        tasks(filter: $filter15, order: $order12, first: $first12, offset: $offset12) {
          id
          title
          hours
          deadline
          content
          priority
          complete
        }
      }
    }
  }
}
    `;
export type UpdateProjectMutationFn = ApolloReactCommon.MutationFunction<UpdateProjectMutation, UpdateProjectMutationVariables>;
export type UpdateProjectComponentProps = Omit<ApolloReactComponents.MutationComponentOptions<UpdateProjectMutation, UpdateProjectMutationVariables>, 'mutation'>;

    export const UpdateProjectComponent = (props: UpdateProjectComponentProps) => (
      <ApolloReactComponents.Mutation<UpdateProjectMutation, UpdateProjectMutationVariables> mutation={UpdateProjectDocument} {...props} />
    );
    
export type UpdateProjectProps<TChildProps = {}> = ApolloReactHoc.MutateProps<UpdateProjectMutation, UpdateProjectMutationVariables> & TChildProps;
export function withUpdateProject<TProps, TChildProps = {}>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  UpdateProjectMutation,
  UpdateProjectMutationVariables,
  UpdateProjectProps<TChildProps>>) {
    return ApolloReactHoc.withMutation<TProps, UpdateProjectMutation, UpdateProjectMutationVariables, UpdateProjectProps<TChildProps>>(UpdateProjectDocument, {
      alias: 'updateProject',
      ...operationOptions
    });
};
export type UpdateProjectMutationResult = ApolloReactCommon.MutationResult<UpdateProjectMutation>;
export type UpdateProjectMutationOptions = ApolloReactCommon.BaseMutationOptions<UpdateProjectMutation, UpdateProjectMutationVariables>;
export const UpdateTagDocument = gql`
    mutation updateTag($filter: TagFilter, $order: TagOrder, $first: Int, $offset: Int, $input: UpdateTagInput!) {
  updateTag(input: $input) {
    tag(filter: $filter, order: $order, first: $first, offset: $offset) {
      id
      title
    }
  }
}
    `;
export type UpdateTagMutationFn = ApolloReactCommon.MutationFunction<UpdateTagMutation, UpdateTagMutationVariables>;
export type UpdateTagComponentProps = Omit<ApolloReactComponents.MutationComponentOptions<UpdateTagMutation, UpdateTagMutationVariables>, 'mutation'>;

    export const UpdateTagComponent = (props: UpdateTagComponentProps) => (
      <ApolloReactComponents.Mutation<UpdateTagMutation, UpdateTagMutationVariables> mutation={UpdateTagDocument} {...props} />
    );
    
export type UpdateTagProps<TChildProps = {}> = ApolloReactHoc.MutateProps<UpdateTagMutation, UpdateTagMutationVariables> & TChildProps;
export function withUpdateTag<TProps, TChildProps = {}>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  UpdateTagMutation,
  UpdateTagMutationVariables,
  UpdateTagProps<TChildProps>>) {
    return ApolloReactHoc.withMutation<TProps, UpdateTagMutation, UpdateTagMutationVariables, UpdateTagProps<TChildProps>>(UpdateTagDocument, {
      alias: 'updateTag',
      ...operationOptions
    });
};
export type UpdateTagMutationResult = ApolloReactCommon.MutationResult<UpdateTagMutation>;
export type UpdateTagMutationOptions = ApolloReactCommon.BaseMutationOptions<UpdateTagMutation, UpdateTagMutationVariables>;
export const UpdateTaskDocument = gql`
    mutation updateTask($filter: WorkerFilter, $order: WorkerOrder, $first: Int, $offset: Int, $filter1: TaskFilter, $order1: TaskOrder, $first1: Int, $offset1: Int, $filter2: UserFilter, $filter3: TagFilter, $order2: TagOrder, $first2: Int, $offset2: Int, $filter4: WorkerFilter, $order3: WorkerOrder, $first3: Int, $offset3: Int, $filter5: CommentFilter, $order4: CommentOrder, $first4: Int, $offset4: Int, $filter6: TaskFilter, $order5: TaskOrder, $first5: Int, $offset5: Int, $filter7: WorkerFilter, $order6: WorkerOrder, $first6: Int, $offset6: Int, $filter8: UserFilter, $filter9: TagFilter, $order7: TagOrder, $first7: Int, $offset7: Int, $filter10: TaskFilter, $order8: TaskOrder, $first8: Int, $offset8: Int, $filter11: WorkerFilter, $filter12: CommentFilter, $order9: CommentOrder, $first9: Int, $offset9: Int, $filter13: TaskFilter, $order10: TaskOrder, $first10: Int, $offset10: Int, $input: UpdateTaskInput!) {
  updateTask(input: $input) {
    task(filter: $filter13, order: $order10, first: $first10, offset: $offset10) {
      id
      title
      hours
      deadline
      content
      priority
      complete
      likes(filter: $filter7, order: $order6, first: $first6, offset: $offset6) {
        id
        name
        availability
        user(filter: $filter2) {
          id
          username
          password
          location
          roles(filter: $filter, order: $order, first: $first, offset: $offset) {
            id
            name
            availability
          }
          stars(filter: $filter1, order: $order1, first: $first1, offset: $offset1) {
            id
            title
            hours
            deadline
            content
            priority
            complete
          }
        }
        tags(filter: $filter3, order: $order2, first: $first2, offset: $offset2) {
          id
          title
        }
        tasks(filter: $filter6, order: $order5, first: $first5, offset: $offset5) {
          id
          title
          hours
          deadline
          content
          priority
          complete
          likes(filter: $filter4, order: $order3, first: $first3, offset: $offset3) {
            id
            name
            availability
          }
          comments(filter: $filter5, order: $order4, first: $first4, offset: $offset4) {
            id
            content
          }
        }
      }
      comments(filter: $filter12, order: $order9, first: $first9, offset: $offset9) {
        id
        worker(filter: $filter11) {
          id
          name
          availability
          user(filter: $filter8) {
            id
            username
            password
            location
          }
          tags(filter: $filter9, order: $order7, first: $first7, offset: $offset7) {
            id
            title
          }
          tasks(filter: $filter10, order: $order8, first: $first8, offset: $offset8) {
            id
            title
            hours
            deadline
            content
            priority
            complete
          }
        }
        content
      }
    }
  }
}
    `;
export type UpdateTaskMutationFn = ApolloReactCommon.MutationFunction<UpdateTaskMutation, UpdateTaskMutationVariables>;
export type UpdateTaskComponentProps = Omit<ApolloReactComponents.MutationComponentOptions<UpdateTaskMutation, UpdateTaskMutationVariables>, 'mutation'>;

    export const UpdateTaskComponent = (props: UpdateTaskComponentProps) => (
      <ApolloReactComponents.Mutation<UpdateTaskMutation, UpdateTaskMutationVariables> mutation={UpdateTaskDocument} {...props} />
    );
    
export type UpdateTaskProps<TChildProps = {}> = ApolloReactHoc.MutateProps<UpdateTaskMutation, UpdateTaskMutationVariables> & TChildProps;
export function withUpdateTask<TProps, TChildProps = {}>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  UpdateTaskMutation,
  UpdateTaskMutationVariables,
  UpdateTaskProps<TChildProps>>) {
    return ApolloReactHoc.withMutation<TProps, UpdateTaskMutation, UpdateTaskMutationVariables, UpdateTaskProps<TChildProps>>(UpdateTaskDocument, {
      alias: 'updateTask',
      ...operationOptions
    });
};
export type UpdateTaskMutationResult = ApolloReactCommon.MutationResult<UpdateTaskMutation>;
export type UpdateTaskMutationOptions = ApolloReactCommon.BaseMutationOptions<UpdateTaskMutation, UpdateTaskMutationVariables>;
export const UpdateUserDocument = gql`
    mutation updateUser($filter: TaskFilter, $order: TaskOrder, $first: Int, $offset: Int, $filter1: UserFilter, $filter2: TagFilter, $order1: TagOrder, $first1: Int, $offset1: Int, $filter3: WorkerFilter, $order2: WorkerOrder, $first2: Int, $offset2: Int, $filter4: CommentFilter, $order3: CommentOrder, $first3: Int, $offset3: Int, $filter5: TaskFilter, $order4: TaskOrder, $first4: Int, $offset4: Int, $filter6: WorkerFilter, $order5: WorkerOrder, $first5: Int, $offset5: Int, $filter7: UserFilter, $order6: UserOrder, $first6: Int, $offset6: Int, $input: UpdateUserInput!) {
  updateUser(input: $input) {
    user(filter: $filter7, order: $order6, first: $first6, offset: $offset6) {
      id
      username
      password
      location
      roles(filter: $filter6, order: $order5, first: $first5, offset: $offset5) {
        id
        name
        availability
        user(filter: $filter1) {
          id
          username
          password
          location
          stars(filter: $filter, order: $order, first: $first, offset: $offset) {
            id
            title
            hours
            deadline
            content
            priority
            complete
          }
        }
        tags(filter: $filter2, order: $order1, first: $first1, offset: $offset1) {
          id
          title
        }
        tasks(filter: $filter5, order: $order4, first: $first4, offset: $offset4) {
          id
          title
          hours
          deadline
          content
          priority
          complete
          likes(filter: $filter3, order: $order2, first: $first2, offset: $offset2) {
            id
            name
            availability
          }
          comments(filter: $filter4, order: $order3, first: $first3, offset: $offset3) {
            id
            content
          }
        }
      }
    }
  }
}
    `;
export type UpdateUserMutationFn = ApolloReactCommon.MutationFunction<UpdateUserMutation, UpdateUserMutationVariables>;
export type UpdateUserComponentProps = Omit<ApolloReactComponents.MutationComponentOptions<UpdateUserMutation, UpdateUserMutationVariables>, 'mutation'>;

    export const UpdateUserComponent = (props: UpdateUserComponentProps) => (
      <ApolloReactComponents.Mutation<UpdateUserMutation, UpdateUserMutationVariables> mutation={UpdateUserDocument} {...props} />
    );
    
export type UpdateUserProps<TChildProps = {}> = ApolloReactHoc.MutateProps<UpdateUserMutation, UpdateUserMutationVariables> & TChildProps;
export function withUpdateUser<TProps, TChildProps = {}>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  UpdateUserMutation,
  UpdateUserMutationVariables,
  UpdateUserProps<TChildProps>>) {
    return ApolloReactHoc.withMutation<TProps, UpdateUserMutation, UpdateUserMutationVariables, UpdateUserProps<TChildProps>>(UpdateUserDocument, {
      alias: 'updateUser',
      ...operationOptions
    });
};
export type UpdateUserMutationResult = ApolloReactCommon.MutationResult<UpdateUserMutation>;
export type UpdateUserMutationOptions = ApolloReactCommon.BaseMutationOptions<UpdateUserMutation, UpdateUserMutationVariables>;
export const UpdateWorkerDocument = gql`
    mutation updateWorker($filter: UserFilter, $filter1: TagFilter, $order: TagOrder, $first: Int, $offset: Int, $filter2: TaskFilter, $order1: TaskOrder, $first1: Int, $offset1: Int, $filter3: WorkerFilter, $order2: WorkerOrder, $first2: Int, $offset2: Int, $filter4: WorkerFilter, $order3: WorkerOrder, $first3: Int, $offset3: Int, $filter5: CommentFilter, $order4: CommentOrder, $first4: Int, $offset4: Int, $filter6: TaskFilter, $order5: TaskOrder, $first5: Int, $offset5: Int, $filter7: UserFilter, $filter8: TagFilter, $order6: TagOrder, $first6: Int, $offset6: Int, $filter9: UserFilter, $filter10: TagFilter, $order7: TagOrder, $first7: Int, $offset7: Int, $filter11: TaskFilter, $order8: TaskOrder, $first8: Int, $offset8: Int, $filter12: WorkerFilter, $order9: WorkerOrder, $first9: Int, $offset9: Int, $filter13: WorkerFilter, $filter14: CommentFilter, $order10: CommentOrder, $first10: Int, $offset10: Int, $filter15: TaskFilter, $order11: TaskOrder, $first11: Int, $offset11: Int, $filter16: WorkerFilter, $order12: WorkerOrder, $first12: Int, $offset12: Int, $input: UpdateWorkerInput!) {
  updateWorker(input: $input) {
    worker(filter: $filter16, order: $order12, first: $first12, offset: $offset12) {
      id
      name
      availability
      user(filter: $filter7) {
        id
        username
        password
        location
        roles(filter: $filter3, order: $order2, first: $first2, offset: $offset2) {
          id
          name
          availability
          user(filter: $filter) {
            id
            username
            password
            location
          }
          tags(filter: $filter1, order: $order, first: $first, offset: $offset) {
            id
            title
          }
          tasks(filter: $filter2, order: $order1, first: $first1, offset: $offset1) {
            id
            title
            hours
            deadline
            content
            priority
            complete
          }
        }
        stars(filter: $filter6, order: $order5, first: $first5, offset: $offset5) {
          id
          title
          hours
          deadline
          content
          priority
          complete
          likes(filter: $filter4, order: $order3, first: $first3, offset: $offset3) {
            id
            name
            availability
          }
          comments(filter: $filter5, order: $order4, first: $first4, offset: $offset4) {
            id
            content
          }
        }
      }
      tags(filter: $filter8, order: $order6, first: $first6, offset: $offset6) {
        id
        title
      }
      tasks(filter: $filter15, order: $order11, first: $first11, offset: $offset11) {
        id
        title
        hours
        deadline
        content
        priority
        complete
        likes(filter: $filter12, order: $order9, first: $first9, offset: $offset9) {
          id
          name
          availability
          user(filter: $filter9) {
            id
            username
            password
            location
          }
          tags(filter: $filter10, order: $order7, first: $first7, offset: $offset7) {
            id
            title
          }
          tasks(filter: $filter11, order: $order8, first: $first8, offset: $offset8) {
            id
            title
            hours
            deadline
            content
            priority
            complete
          }
        }
        comments(filter: $filter14, order: $order10, first: $first10, offset: $offset10) {
          id
          worker(filter: $filter13) {
            id
            name
            availability
          }
          content
        }
      }
    }
  }
}
    `;
export type UpdateWorkerMutationFn = ApolloReactCommon.MutationFunction<UpdateWorkerMutation, UpdateWorkerMutationVariables>;
export type UpdateWorkerComponentProps = Omit<ApolloReactComponents.MutationComponentOptions<UpdateWorkerMutation, UpdateWorkerMutationVariables>, 'mutation'>;

    export const UpdateWorkerComponent = (props: UpdateWorkerComponentProps) => (
      <ApolloReactComponents.Mutation<UpdateWorkerMutation, UpdateWorkerMutationVariables> mutation={UpdateWorkerDocument} {...props} />
    );
    
export type UpdateWorkerProps<TChildProps = {}> = ApolloReactHoc.MutateProps<UpdateWorkerMutation, UpdateWorkerMutationVariables> & TChildProps;
export function withUpdateWorker<TProps, TChildProps = {}>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  UpdateWorkerMutation,
  UpdateWorkerMutationVariables,
  UpdateWorkerProps<TChildProps>>) {
    return ApolloReactHoc.withMutation<TProps, UpdateWorkerMutation, UpdateWorkerMutationVariables, UpdateWorkerProps<TChildProps>>(UpdateWorkerDocument, {
      alias: 'updateWorker',
      ...operationOptions
    });
};
export type UpdateWorkerMutationResult = ApolloReactCommon.MutationResult<UpdateWorkerMutation>;
export type UpdateWorkerMutationOptions = ApolloReactCommon.BaseMutationOptions<UpdateWorkerMutation, UpdateWorkerMutationVariables>;
export const GetBoardDocument = gql`
    query getBoard($filter: UserFilter, $filter1: TagFilter, $order: TagOrder, $first: Int, $offset: Int, $filter2: TaskFilter, $order1: TaskOrder, $first1: Int, $offset1: Int, $filter3: WorkerFilter, $order2: WorkerOrder, $first2: Int, $offset2: Int, $filter4: WorkerFilter, $filter5: CommentFilter, $order3: CommentOrder, $first3: Int, $offset3: Int, $filter6: TaskFilter, $order4: TaskOrder, $first4: Int, $offset4: Int, $filter7: ColumnFilter, $order5: ColumnOrder, $first5: Int, $offset5: Int, $id: ID!) {
  getBoard(id: $id) {
    id
    title
    columns(filter: $filter7, order: $order5, first: $first5, offset: $offset5) {
      id
      title
      tasks(filter: $filter6, order: $order4, first: $first4, offset: $offset4) {
        id
        title
        hours
        deadline
        content
        priority
        complete
        likes(filter: $filter3, order: $order2, first: $first2, offset: $offset2) {
          id
          name
          availability
          user(filter: $filter) {
            id
            username
            password
            location
          }
          tags(filter: $filter1, order: $order, first: $first, offset: $offset) {
            id
            title
          }
          tasks(filter: $filter2, order: $order1, first: $first1, offset: $offset1) {
            id
            title
            hours
            deadline
            content
            priority
            complete
          }
        }
        comments(filter: $filter5, order: $order3, first: $first3, offset: $offset3) {
          id
          worker(filter: $filter4) {
            id
            name
            availability
          }
          content
        }
      }
    }
    order
  }
}
    `;
export type GetBoardComponentProps = Omit<ApolloReactComponents.QueryComponentOptions<GetBoardQuery, GetBoardQueryVariables>, 'query'> & ({ variables: GetBoardQueryVariables; skip?: boolean; } | { skip: boolean; });

    export const GetBoardComponent = (props: GetBoardComponentProps) => (
      <ApolloReactComponents.Query<GetBoardQuery, GetBoardQueryVariables> query={GetBoardDocument} {...props} />
    );
    
export type GetBoardProps<TChildProps = {}> = ApolloReactHoc.DataProps<GetBoardQuery, GetBoardQueryVariables> & TChildProps;
export function withGetBoard<TProps, TChildProps = {}>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  GetBoardQuery,
  GetBoardQueryVariables,
  GetBoardProps<TChildProps>>) {
    return ApolloReactHoc.withQuery<TProps, GetBoardQuery, GetBoardQueryVariables, GetBoardProps<TChildProps>>(GetBoardDocument, {
      alias: 'getBoard',
      ...operationOptions
    });
};
export type GetBoardQueryResult = ApolloReactCommon.QueryResult<GetBoardQuery, GetBoardQueryVariables>;
export const GetColumnDocument = gql`
    query getColumn($filter: WorkerFilter, $order: WorkerOrder, $first: Int, $offset: Int, $filter1: TaskFilter, $order1: TaskOrder, $first1: Int, $offset1: Int, $filter2: UserFilter, $filter3: TagFilter, $order2: TagOrder, $first2: Int, $offset2: Int, $filter4: CommentFilter, $order3: CommentOrder, $first3: Int, $offset3: Int, $filter5: TaskFilter, $order4: TaskOrder, $first4: Int, $offset4: Int, $filter6: WorkerFilter, $order5: WorkerOrder, $first5: Int, $offset5: Int, $filter7: TaskFilter, $order6: TaskOrder, $first6: Int, $offset6: Int, $id: ID!) {
  getColumn(id: $id) {
    id
    title
    tasks(filter: $filter7, order: $order6, first: $first6, offset: $offset6) {
      id
      title
      hours
      deadline
      content
      priority
      complete
      likes(filter: $filter6, order: $order5, first: $first5, offset: $offset5) {
        id
        name
        availability
        user(filter: $filter2) {
          id
          username
          password
          location
          roles(filter: $filter, order: $order, first: $first, offset: $offset) {
            id
            name
            availability
          }
          stars(filter: $filter1, order: $order1, first: $first1, offset: $offset1) {
            id
            title
            hours
            deadline
            content
            priority
            complete
          }
        }
        tags(filter: $filter3, order: $order2, first: $first2, offset: $offset2) {
          id
          title
        }
        tasks(filter: $filter5, order: $order4, first: $first4, offset: $offset4) {
          id
          title
          hours
          deadline
          content
          priority
          complete
          comments(filter: $filter4, order: $order3, first: $first3, offset: $offset3) {
            id
            content
          }
        }
      }
    }
  }
}
    `;
export type GetColumnComponentProps = Omit<ApolloReactComponents.QueryComponentOptions<GetColumnQuery, GetColumnQueryVariables>, 'query'> & ({ variables: GetColumnQueryVariables; skip?: boolean; } | { skip: boolean; });

    export const GetColumnComponent = (props: GetColumnComponentProps) => (
      <ApolloReactComponents.Query<GetColumnQuery, GetColumnQueryVariables> query={GetColumnDocument} {...props} />
    );
    
export type GetColumnProps<TChildProps = {}> = ApolloReactHoc.DataProps<GetColumnQuery, GetColumnQueryVariables> & TChildProps;
export function withGetColumn<TProps, TChildProps = {}>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  GetColumnQuery,
  GetColumnQueryVariables,
  GetColumnProps<TChildProps>>) {
    return ApolloReactHoc.withQuery<TProps, GetColumnQuery, GetColumnQueryVariables, GetColumnProps<TChildProps>>(GetColumnDocument, {
      alias: 'getColumn',
      ...operationOptions
    });
};
export type GetColumnQueryResult = ApolloReactCommon.QueryResult<GetColumnQuery, GetColumnQueryVariables>;
export const GetCommentDocument = gql`
    query getComment($filter: UserFilter, $filter1: TagFilter, $order: TagOrder, $first: Int, $offset: Int, $filter2: TaskFilter, $order1: TaskOrder, $first1: Int, $offset1: Int, $filter3: WorkerFilter, $order2: WorkerOrder, $first2: Int, $offset2: Int, $filter4: WorkerFilter, $order3: WorkerOrder, $first3: Int, $offset3: Int, $filter5: CommentFilter, $order4: CommentOrder, $first4: Int, $offset4: Int, $filter6: TaskFilter, $order5: TaskOrder, $first5: Int, $offset5: Int, $filter7: UserFilter, $filter8: TagFilter, $order6: TagOrder, $first6: Int, $offset6: Int, $filter9: UserFilter, $filter10: TagFilter, $order7: TagOrder, $first7: Int, $offset7: Int, $filter11: TaskFilter, $order8: TaskOrder, $first8: Int, $offset8: Int, $filter12: WorkerFilter, $order9: WorkerOrder, $first9: Int, $offset9: Int, $filter13: WorkerFilter, $filter14: CommentFilter, $order10: CommentOrder, $first10: Int, $offset10: Int, $filter15: TaskFilter, $order11: TaskOrder, $first11: Int, $offset11: Int, $filter16: WorkerFilter, $id: ID!) {
  getComment(id: $id) {
    id
    worker(filter: $filter16) {
      id
      name
      availability
      user(filter: $filter7) {
        id
        username
        password
        location
        roles(filter: $filter3, order: $order2, first: $first2, offset: $offset2) {
          id
          name
          availability
          user(filter: $filter) {
            id
            username
            password
            location
          }
          tags(filter: $filter1, order: $order, first: $first, offset: $offset) {
            id
            title
          }
          tasks(filter: $filter2, order: $order1, first: $first1, offset: $offset1) {
            id
            title
            hours
            deadline
            content
            priority
            complete
          }
        }
        stars(filter: $filter6, order: $order5, first: $first5, offset: $offset5) {
          id
          title
          hours
          deadline
          content
          priority
          complete
          likes(filter: $filter4, order: $order3, first: $first3, offset: $offset3) {
            id
            name
            availability
          }
          comments(filter: $filter5, order: $order4, first: $first4, offset: $offset4) {
            id
            content
          }
        }
      }
      tags(filter: $filter8, order: $order6, first: $first6, offset: $offset6) {
        id
        title
      }
      tasks(filter: $filter15, order: $order11, first: $first11, offset: $offset11) {
        id
        title
        hours
        deadline
        content
        priority
        complete
        likes(filter: $filter12, order: $order9, first: $first9, offset: $offset9) {
          id
          name
          availability
          user(filter: $filter9) {
            id
            username
            password
            location
          }
          tags(filter: $filter10, order: $order7, first: $first7, offset: $offset7) {
            id
            title
          }
          tasks(filter: $filter11, order: $order8, first: $first8, offset: $offset8) {
            id
            title
            hours
            deadline
            content
            priority
            complete
          }
        }
        comments(filter: $filter14, order: $order10, first: $first10, offset: $offset10) {
          id
          worker(filter: $filter13) {
            id
            name
            availability
          }
          content
        }
      }
    }
    content
  }
}
    `;
export type GetCommentComponentProps = Omit<ApolloReactComponents.QueryComponentOptions<GetCommentQuery, GetCommentQueryVariables>, 'query'> & ({ variables: GetCommentQueryVariables; skip?: boolean; } | { skip: boolean; });

    export const GetCommentComponent = (props: GetCommentComponentProps) => (
      <ApolloReactComponents.Query<GetCommentQuery, GetCommentQueryVariables> query={GetCommentDocument} {...props} />
    );
    
export type GetCommentProps<TChildProps = {}> = ApolloReactHoc.DataProps<GetCommentQuery, GetCommentQueryVariables> & TChildProps;
export function withGetComment<TProps, TChildProps = {}>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  GetCommentQuery,
  GetCommentQueryVariables,
  GetCommentProps<TChildProps>>) {
    return ApolloReactHoc.withQuery<TProps, GetCommentQuery, GetCommentQueryVariables, GetCommentProps<TChildProps>>(GetCommentDocument, {
      alias: 'getComment',
      ...operationOptions
    });
};
export type GetCommentQueryResult = ApolloReactCommon.QueryResult<GetCommentQuery, GetCommentQueryVariables>;
export const GetProjectDocument = gql`
    query getProject($filter: TagFilter, $order: TagOrder, $first: Int, $offset: Int, $filter1: WorkerFilter, $order1: WorkerOrder, $first1: Int, $offset1: Int, $filter2: TaskFilter, $order2: TaskOrder, $first2: Int, $offset2: Int, $filter3: UserFilter, $filter4: TagFilter, $order3: TagOrder, $first3: Int, $offset3: Int, $filter5: CommentFilter, $order4: CommentOrder, $first4: Int, $offset4: Int, $filter6: TaskFilter, $order5: TaskOrder, $first5: Int, $offset5: Int, $filter7: WorkerFilter, $order6: WorkerOrder, $first6: Int, $offset6: Int, $filter8: TaskFilter, $order7: TaskOrder, $first7: Int, $offset7: Int, $filter9: TaskFilter, $order8: TaskOrder, $first8: Int, $offset8: Int, $filter10: ColumnFilter, $order9: ColumnOrder, $first9: Int, $offset9: Int, $filter11: BoardFilter, $order10: BoardOrder, $first10: Int, $offset10: Int, $filter12: UserFilter, $filter13: TagFilter, $order11: TagOrder, $first11: Int, $offset11: Int, $filter14: TaskFilter, $order12: TaskOrder, $first12: Int, $offset12: Int, $filter15: WorkerFilter, $order13: WorkerOrder, $first13: Int, $offset13: Int, $id: ID!) {
  getProject(id: $id) {
    id
    title
    tags(filter: $filter, order: $order, first: $first, offset: $offset) {
      id
      title
    }
    tasks(filter: $filter8, order: $order7, first: $first7, offset: $offset7) {
      id
      title
      hours
      deadline
      content
      priority
      complete
      likes(filter: $filter7, order: $order6, first: $first6, offset: $offset6) {
        id
        name
        availability
        user(filter: $filter3) {
          id
          username
          password
          location
          roles(filter: $filter1, order: $order1, first: $first1, offset: $offset1) {
            id
            name
            availability
          }
          stars(filter: $filter2, order: $order2, first: $first2, offset: $offset2) {
            id
            title
            hours
            deadline
            content
            priority
            complete
          }
        }
        tags(filter: $filter4, order: $order3, first: $first3, offset: $offset3) {
          id
          title
        }
        tasks(filter: $filter6, order: $order5, first: $first5, offset: $offset5) {
          id
          title
          hours
          deadline
          content
          priority
          complete
          comments(filter: $filter5, order: $order4, first: $first4, offset: $offset4) {
            id
            content
          }
        }
      }
    }
    boards(filter: $filter11, order: $order10, first: $first10, offset: $offset10) {
      id
      title
      columns(filter: $filter10, order: $order9, first: $first9, offset: $offset9) {
        id
        title
        tasks(filter: $filter9, order: $order8, first: $first8, offset: $offset8) {
          id
          title
          hours
          deadline
          content
          priority
          complete
        }
      }
      order
    }
    workers(filter: $filter15, order: $order13, first: $first13, offset: $offset13) {
      id
      name
      availability
      user(filter: $filter12) {
        id
        username
        password
        location
      }
      tags(filter: $filter13, order: $order11, first: $first11, offset: $offset11) {
        id
        title
      }
      tasks(filter: $filter14, order: $order12, first: $first12, offset: $offset12) {
        id
        title
        hours
        deadline
        content
        priority
        complete
      }
    }
  }
}
    `;
export type GetProjectComponentProps = Omit<ApolloReactComponents.QueryComponentOptions<GetProjectQuery, GetProjectQueryVariables>, 'query'> & ({ variables: GetProjectQueryVariables; skip?: boolean; } | { skip: boolean; });

    export const GetProjectComponent = (props: GetProjectComponentProps) => (
      <ApolloReactComponents.Query<GetProjectQuery, GetProjectQueryVariables> query={GetProjectDocument} {...props} />
    );
    
export type GetProjectProps<TChildProps = {}> = ApolloReactHoc.DataProps<GetProjectQuery, GetProjectQueryVariables> & TChildProps;
export function withGetProject<TProps, TChildProps = {}>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  GetProjectQuery,
  GetProjectQueryVariables,
  GetProjectProps<TChildProps>>) {
    return ApolloReactHoc.withQuery<TProps, GetProjectQuery, GetProjectQueryVariables, GetProjectProps<TChildProps>>(GetProjectDocument, {
      alias: 'getProject',
      ...operationOptions
    });
};
export type GetProjectQueryResult = ApolloReactCommon.QueryResult<GetProjectQuery, GetProjectQueryVariables>;
export const GetTagDocument = gql`
    query getTag($id: ID!) {
  getTag(id: $id) {
    id
    title
  }
}
    `;
export type GetTagComponentProps = Omit<ApolloReactComponents.QueryComponentOptions<GetTagQuery, GetTagQueryVariables>, 'query'> & ({ variables: GetTagQueryVariables; skip?: boolean; } | { skip: boolean; });

    export const GetTagComponent = (props: GetTagComponentProps) => (
      <ApolloReactComponents.Query<GetTagQuery, GetTagQueryVariables> query={GetTagDocument} {...props} />
    );
    
export type GetTagProps<TChildProps = {}> = ApolloReactHoc.DataProps<GetTagQuery, GetTagQueryVariables> & TChildProps;
export function withGetTag<TProps, TChildProps = {}>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  GetTagQuery,
  GetTagQueryVariables,
  GetTagProps<TChildProps>>) {
    return ApolloReactHoc.withQuery<TProps, GetTagQuery, GetTagQueryVariables, GetTagProps<TChildProps>>(GetTagDocument, {
      alias: 'getTag',
      ...operationOptions
    });
};
export type GetTagQueryResult = ApolloReactCommon.QueryResult<GetTagQuery, GetTagQueryVariables>;
export const GetTaskDocument = gql`
    query getTask($filter: UserFilter, $filter1: TagFilter, $order: TagOrder, $first: Int, $offset: Int, $filter2: TaskFilter, $order1: TaskOrder, $first1: Int, $offset1: Int, $filter3: WorkerFilter, $order2: WorkerOrder, $first2: Int, $offset2: Int, $filter4: WorkerFilter, $order3: WorkerOrder, $first3: Int, $offset3: Int, $filter5: CommentFilter, $order4: CommentOrder, $first4: Int, $offset4: Int, $filter6: TaskFilter, $order5: TaskOrder, $first5: Int, $offset5: Int, $filter7: UserFilter, $filter8: TagFilter, $order6: TagOrder, $first6: Int, $offset6: Int, $filter9: WorkerFilter, $order7: WorkerOrder, $first7: Int, $offset7: Int, $filter10: WorkerFilter, $filter11: CommentFilter, $order8: CommentOrder, $first8: Int, $offset8: Int, $filter12: TaskFilter, $order9: TaskOrder, $first9: Int, $offset9: Int, $filter13: WorkerFilter, $order10: WorkerOrder, $first10: Int, $offset10: Int, $filter14: CommentFilter, $order11: CommentOrder, $first11: Int, $offset11: Int, $id: ID!) {
  getTask(id: $id) {
    id
    title
    hours
    deadline
    content
    priority
    complete
    likes(filter: $filter13, order: $order10, first: $first10, offset: $offset10) {
      id
      name
      availability
      user(filter: $filter7) {
        id
        username
        password
        location
        roles(filter: $filter3, order: $order2, first: $first2, offset: $offset2) {
          id
          name
          availability
          user(filter: $filter) {
            id
            username
            password
            location
          }
          tags(filter: $filter1, order: $order, first: $first, offset: $offset) {
            id
            title
          }
          tasks(filter: $filter2, order: $order1, first: $first1, offset: $offset1) {
            id
            title
            hours
            deadline
            content
            priority
            complete
          }
        }
        stars(filter: $filter6, order: $order5, first: $first5, offset: $offset5) {
          id
          title
          hours
          deadline
          content
          priority
          complete
          likes(filter: $filter4, order: $order3, first: $first3, offset: $offset3) {
            id
            name
            availability
          }
          comments(filter: $filter5, order: $order4, first: $first4, offset: $offset4) {
            id
            content
          }
        }
      }
      tags(filter: $filter8, order: $order6, first: $first6, offset: $offset6) {
        id
        title
      }
      tasks(filter: $filter12, order: $order9, first: $first9, offset: $offset9) {
        id
        title
        hours
        deadline
        content
        priority
        complete
        likes(filter: $filter9, order: $order7, first: $first7, offset: $offset7) {
          id
          name
          availability
        }
        comments(filter: $filter11, order: $order8, first: $first8, offset: $offset8) {
          id
          worker(filter: $filter10) {
            id
            name
            availability
          }
          content
        }
      }
    }
    comments(filter: $filter14, order: $order11, first: $first11, offset: $offset11) {
      id
      content
    }
  }
}
    `;
export type GetTaskComponentProps = Omit<ApolloReactComponents.QueryComponentOptions<GetTaskQuery, GetTaskQueryVariables>, 'query'> & ({ variables: GetTaskQueryVariables; skip?: boolean; } | { skip: boolean; });

    export const GetTaskComponent = (props: GetTaskComponentProps) => (
      <ApolloReactComponents.Query<GetTaskQuery, GetTaskQueryVariables> query={GetTaskDocument} {...props} />
    );
    
export type GetTaskProps<TChildProps = {}> = ApolloReactHoc.DataProps<GetTaskQuery, GetTaskQueryVariables> & TChildProps;
export function withGetTask<TProps, TChildProps = {}>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  GetTaskQuery,
  GetTaskQueryVariables,
  GetTaskProps<TChildProps>>) {
    return ApolloReactHoc.withQuery<TProps, GetTaskQuery, GetTaskQueryVariables, GetTaskProps<TChildProps>>(GetTaskDocument, {
      alias: 'getTask',
      ...operationOptions
    });
};
export type GetTaskQueryResult = ApolloReactCommon.QueryResult<GetTaskQuery, GetTaskQueryVariables>;
export const GetUserDocument = gql`
    query getUser($filter: TagFilter, $order: TagOrder, $first: Int, $offset: Int, $filter1: TaskFilter, $order1: TaskOrder, $first1: Int, $offset1: Int, $filter2: WorkerFilter, $order2: WorkerOrder, $first2: Int, $offset2: Int, $filter3: WorkerFilter, $order3: WorkerOrder, $first3: Int, $offset3: Int, $filter4: CommentFilter, $order4: CommentOrder, $first4: Int, $offset4: Int, $filter5: TaskFilter, $order5: TaskOrder, $first5: Int, $offset5: Int, $filter6: UserFilter, $filter7: WorkerFilter, $order6: WorkerOrder, $first6: Int, $offset6: Int, $filter8: TaskFilter, $order7: TaskOrder, $first7: Int, $offset7: Int, $id: ID!) {
  getUser(id: $id) {
    id
    username
    password
    location
    roles(filter: $filter7, order: $order6, first: $first6, offset: $offset6) {
      id
      name
      availability
      user(filter: $filter6) {
        id
        username
        password
        location
        roles(filter: $filter2, order: $order2, first: $first2, offset: $offset2) {
          id
          name
          availability
          tags(filter: $filter, order: $order, first: $first, offset: $offset) {
            id
            title
          }
          tasks(filter: $filter1, order: $order1, first: $first1, offset: $offset1) {
            id
            title
            hours
            deadline
            content
            priority
            complete
          }
        }
        stars(filter: $filter5, order: $order5, first: $first5, offset: $offset5) {
          id
          title
          hours
          deadline
          content
          priority
          complete
          likes(filter: $filter3, order: $order3, first: $first3, offset: $offset3) {
            id
            name
            availability
          }
          comments(filter: $filter4, order: $order4, first: $first4, offset: $offset4) {
            id
            content
          }
        }
      }
    }
    stars(filter: $filter8, order: $order7, first: $first7, offset: $offset7) {
      id
      title
      hours
      deadline
      content
      priority
      complete
    }
  }
}
    `;
export type GetUserComponentProps = Omit<ApolloReactComponents.QueryComponentOptions<GetUserQuery, GetUserQueryVariables>, 'query'> & ({ variables: GetUserQueryVariables; skip?: boolean; } | { skip: boolean; });

    export const GetUserComponent = (props: GetUserComponentProps) => (
      <ApolloReactComponents.Query<GetUserQuery, GetUserQueryVariables> query={GetUserDocument} {...props} />
    );
    
export type GetUserProps<TChildProps = {}> = ApolloReactHoc.DataProps<GetUserQuery, GetUserQueryVariables> & TChildProps;
export function withGetUser<TProps, TChildProps = {}>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  GetUserQuery,
  GetUserQueryVariables,
  GetUserProps<TChildProps>>) {
    return ApolloReactHoc.withQuery<TProps, GetUserQuery, GetUserQueryVariables, GetUserProps<TChildProps>>(GetUserDocument, {
      alias: 'getUser',
      ...operationOptions
    });
};
export type GetUserQueryResult = ApolloReactCommon.QueryResult<GetUserQuery, GetUserQueryVariables>;
export const GetWorkerDocument = gql`
    query getWorker($filter: TaskFilter, $order: TaskOrder, $first: Int, $offset: Int, $filter1: UserFilter, $filter2: TagFilter, $order1: TagOrder, $first1: Int, $offset1: Int, $filter3: WorkerFilter, $order2: WorkerOrder, $first2: Int, $offset2: Int, $filter4: CommentFilter, $order3: CommentOrder, $first3: Int, $offset3: Int, $filter5: TaskFilter, $order4: TaskOrder, $first4: Int, $offset4: Int, $filter6: WorkerFilter, $order5: WorkerOrder, $first5: Int, $offset5: Int, $filter7: UserFilter, $filter8: TagFilter, $order6: TagOrder, $first6: Int, $offset6: Int, $filter9: TaskFilter, $order7: TaskOrder, $first7: Int, $offset7: Int, $id: ID!) {
  getWorker(id: $id) {
    id
    name
    availability
    user(filter: $filter7) {
      id
      username
      password
      location
      roles(filter: $filter6, order: $order5, first: $first5, offset: $offset5) {
        id
        name
        availability
        user(filter: $filter1) {
          id
          username
          password
          location
          stars(filter: $filter, order: $order, first: $first, offset: $offset) {
            id
            title
            hours
            deadline
            content
            priority
            complete
          }
        }
        tags(filter: $filter2, order: $order1, first: $first1, offset: $offset1) {
          id
          title
        }
        tasks(filter: $filter5, order: $order4, first: $first4, offset: $offset4) {
          id
          title
          hours
          deadline
          content
          priority
          complete
          likes(filter: $filter3, order: $order2, first: $first2, offset: $offset2) {
            id
            name
            availability
          }
          comments(filter: $filter4, order: $order3, first: $first3, offset: $offset3) {
            id
            content
          }
        }
      }
    }
    tags(filter: $filter8, order: $order6, first: $first6, offset: $offset6) {
      id
      title
    }
    tasks(filter: $filter9, order: $order7, first: $first7, offset: $offset7) {
      id
      title
      hours
      deadline
      content
      priority
      complete
    }
  }
}
    `;
export type GetWorkerComponentProps = Omit<ApolloReactComponents.QueryComponentOptions<GetWorkerQuery, GetWorkerQueryVariables>, 'query'> & ({ variables: GetWorkerQueryVariables; skip?: boolean; } | { skip: boolean; });

    export const GetWorkerComponent = (props: GetWorkerComponentProps) => (
      <ApolloReactComponents.Query<GetWorkerQuery, GetWorkerQueryVariables> query={GetWorkerDocument} {...props} />
    );
    
export type GetWorkerProps<TChildProps = {}> = ApolloReactHoc.DataProps<GetWorkerQuery, GetWorkerQueryVariables> & TChildProps;
export function withGetWorker<TProps, TChildProps = {}>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  GetWorkerQuery,
  GetWorkerQueryVariables,
  GetWorkerProps<TChildProps>>) {
    return ApolloReactHoc.withQuery<TProps, GetWorkerQuery, GetWorkerQueryVariables, GetWorkerProps<TChildProps>>(GetWorkerDocument, {
      alias: 'getWorker',
      ...operationOptions
    });
};
export type GetWorkerQueryResult = ApolloReactCommon.QueryResult<GetWorkerQuery, GetWorkerQueryVariables>;
export const QueryBoardDocument = gql`
    query queryBoard($filter: UserFilter, $filter1: TagFilter, $order: TagOrder, $first: Int, $offset: Int, $filter2: TaskFilter, $order1: TaskOrder, $first1: Int, $offset1: Int, $filter3: WorkerFilter, $order2: WorkerOrder, $first2: Int, $offset2: Int, $filter4: WorkerFilter, $filter5: CommentFilter, $order3: CommentOrder, $first3: Int, $offset3: Int, $filter6: TaskFilter, $order4: TaskOrder, $first4: Int, $offset4: Int, $filter7: ColumnFilter, $order5: ColumnOrder, $first5: Int, $offset5: Int, $filter8: BoardFilter, $order6: BoardOrder, $first6: Int, $offset6: Int) {
  queryBoard(filter: $filter8, order: $order6, first: $first6, offset: $offset6) {
    id
    title
    columns(filter: $filter7, order: $order5, first: $first5, offset: $offset5) {
      id
      title
      tasks(filter: $filter6, order: $order4, first: $first4, offset: $offset4) {
        id
        title
        hours
        deadline
        content
        priority
        complete
        likes(filter: $filter3, order: $order2, first: $first2, offset: $offset2) {
          id
          name
          availability
          user(filter: $filter) {
            id
            username
            password
            location
          }
          tags(filter: $filter1, order: $order, first: $first, offset: $offset) {
            id
            title
          }
          tasks(filter: $filter2, order: $order1, first: $first1, offset: $offset1) {
            id
            title
            hours
            deadline
            content
            priority
            complete
          }
        }
        comments(filter: $filter5, order: $order3, first: $first3, offset: $offset3) {
          id
          worker(filter: $filter4) {
            id
            name
            availability
          }
          content
        }
      }
    }
    order
  }
}
    `;
export type QueryBoardComponentProps = Omit<ApolloReactComponents.QueryComponentOptions<QueryBoardQuery, QueryBoardQueryVariables>, 'query'>;

    export const QueryBoardComponent = (props: QueryBoardComponentProps) => (
      <ApolloReactComponents.Query<QueryBoardQuery, QueryBoardQueryVariables> query={QueryBoardDocument} {...props} />
    );
    
export type QueryBoardProps<TChildProps = {}> = ApolloReactHoc.DataProps<QueryBoardQuery, QueryBoardQueryVariables> & TChildProps;
export function withQueryBoard<TProps, TChildProps = {}>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  QueryBoardQuery,
  QueryBoardQueryVariables,
  QueryBoardProps<TChildProps>>) {
    return ApolloReactHoc.withQuery<TProps, QueryBoardQuery, QueryBoardQueryVariables, QueryBoardProps<TChildProps>>(QueryBoardDocument, {
      alias: 'queryBoard',
      ...operationOptions
    });
};
export type QueryBoardQueryResult = ApolloReactCommon.QueryResult<QueryBoardQuery, QueryBoardQueryVariables>;
export const QueryColumnDocument = gql`
    query queryColumn($filter: WorkerFilter, $order: WorkerOrder, $first: Int, $offset: Int, $filter1: TaskFilter, $order1: TaskOrder, $first1: Int, $offset1: Int, $filter2: UserFilter, $filter3: TagFilter, $order2: TagOrder, $first2: Int, $offset2: Int, $filter4: CommentFilter, $order3: CommentOrder, $first3: Int, $offset3: Int, $filter5: TaskFilter, $order4: TaskOrder, $first4: Int, $offset4: Int, $filter6: WorkerFilter, $order5: WorkerOrder, $first5: Int, $offset5: Int, $filter7: TaskFilter, $order6: TaskOrder, $first6: Int, $offset6: Int, $filter8: ColumnFilter, $order7: ColumnOrder, $first7: Int, $offset7: Int) {
  queryColumn(filter: $filter8, order: $order7, first: $first7, offset: $offset7) {
    id
    title
    tasks(filter: $filter7, order: $order6, first: $first6, offset: $offset6) {
      id
      title
      hours
      deadline
      content
      priority
      complete
      likes(filter: $filter6, order: $order5, first: $first5, offset: $offset5) {
        id
        name
        availability
        user(filter: $filter2) {
          id
          username
          password
          location
          roles(filter: $filter, order: $order, first: $first, offset: $offset) {
            id
            name
            availability
          }
          stars(filter: $filter1, order: $order1, first: $first1, offset: $offset1) {
            id
            title
            hours
            deadline
            content
            priority
            complete
          }
        }
        tags(filter: $filter3, order: $order2, first: $first2, offset: $offset2) {
          id
          title
        }
        tasks(filter: $filter5, order: $order4, first: $first4, offset: $offset4) {
          id
          title
          hours
          deadline
          content
          priority
          complete
          comments(filter: $filter4, order: $order3, first: $first3, offset: $offset3) {
            id
            content
          }
        }
      }
    }
  }
}
    `;
export type QueryColumnComponentProps = Omit<ApolloReactComponents.QueryComponentOptions<QueryColumnQuery, QueryColumnQueryVariables>, 'query'>;

    export const QueryColumnComponent = (props: QueryColumnComponentProps) => (
      <ApolloReactComponents.Query<QueryColumnQuery, QueryColumnQueryVariables> query={QueryColumnDocument} {...props} />
    );
    
export type QueryColumnProps<TChildProps = {}> = ApolloReactHoc.DataProps<QueryColumnQuery, QueryColumnQueryVariables> & TChildProps;
export function withQueryColumn<TProps, TChildProps = {}>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  QueryColumnQuery,
  QueryColumnQueryVariables,
  QueryColumnProps<TChildProps>>) {
    return ApolloReactHoc.withQuery<TProps, QueryColumnQuery, QueryColumnQueryVariables, QueryColumnProps<TChildProps>>(QueryColumnDocument, {
      alias: 'queryColumn',
      ...operationOptions
    });
};
export type QueryColumnQueryResult = ApolloReactCommon.QueryResult<QueryColumnQuery, QueryColumnQueryVariables>;
export const QueryCommentDocument = gql`
    query queryComment($filter: UserFilter, $filter1: TagFilter, $order: TagOrder, $first: Int, $offset: Int, $filter2: TaskFilter, $order1: TaskOrder, $first1: Int, $offset1: Int, $filter3: WorkerFilter, $order2: WorkerOrder, $first2: Int, $offset2: Int, $filter4: WorkerFilter, $order3: WorkerOrder, $first3: Int, $offset3: Int, $filter5: CommentFilter, $order4: CommentOrder, $first4: Int, $offset4: Int, $filter6: TaskFilter, $order5: TaskOrder, $first5: Int, $offset5: Int, $filter7: UserFilter, $filter8: TagFilter, $order6: TagOrder, $first6: Int, $offset6: Int, $filter9: UserFilter, $filter10: TagFilter, $order7: TagOrder, $first7: Int, $offset7: Int, $filter11: TaskFilter, $order8: TaskOrder, $first8: Int, $offset8: Int, $filter12: WorkerFilter, $order9: WorkerOrder, $first9: Int, $offset9: Int, $filter13: WorkerFilter, $filter14: CommentFilter, $order10: CommentOrder, $first10: Int, $offset10: Int, $filter15: TaskFilter, $order11: TaskOrder, $first11: Int, $offset11: Int, $filter16: WorkerFilter, $filter17: CommentFilter, $order12: CommentOrder, $first12: Int, $offset12: Int) {
  queryComment(filter: $filter17, order: $order12, first: $first12, offset: $offset12) {
    id
    worker(filter: $filter16) {
      id
      name
      availability
      user(filter: $filter7) {
        id
        username
        password
        location
        roles(filter: $filter3, order: $order2, first: $first2, offset: $offset2) {
          id
          name
          availability
          user(filter: $filter) {
            id
            username
            password
            location
          }
          tags(filter: $filter1, order: $order, first: $first, offset: $offset) {
            id
            title
          }
          tasks(filter: $filter2, order: $order1, first: $first1, offset: $offset1) {
            id
            title
            hours
            deadline
            content
            priority
            complete
          }
        }
        stars(filter: $filter6, order: $order5, first: $first5, offset: $offset5) {
          id
          title
          hours
          deadline
          content
          priority
          complete
          likes(filter: $filter4, order: $order3, first: $first3, offset: $offset3) {
            id
            name
            availability
          }
          comments(filter: $filter5, order: $order4, first: $first4, offset: $offset4) {
            id
            content
          }
        }
      }
      tags(filter: $filter8, order: $order6, first: $first6, offset: $offset6) {
        id
        title
      }
      tasks(filter: $filter15, order: $order11, first: $first11, offset: $offset11) {
        id
        title
        hours
        deadline
        content
        priority
        complete
        likes(filter: $filter12, order: $order9, first: $first9, offset: $offset9) {
          id
          name
          availability
          user(filter: $filter9) {
            id
            username
            password
            location
          }
          tags(filter: $filter10, order: $order7, first: $first7, offset: $offset7) {
            id
            title
          }
          tasks(filter: $filter11, order: $order8, first: $first8, offset: $offset8) {
            id
            title
            hours
            deadline
            content
            priority
            complete
          }
        }
        comments(filter: $filter14, order: $order10, first: $first10, offset: $offset10) {
          id
          worker(filter: $filter13) {
            id
            name
            availability
          }
          content
        }
      }
    }
    content
  }
}
    `;
export type QueryCommentComponentProps = Omit<ApolloReactComponents.QueryComponentOptions<QueryCommentQuery, QueryCommentQueryVariables>, 'query'>;

    export const QueryCommentComponent = (props: QueryCommentComponentProps) => (
      <ApolloReactComponents.Query<QueryCommentQuery, QueryCommentQueryVariables> query={QueryCommentDocument} {...props} />
    );
    
export type QueryCommentProps<TChildProps = {}> = ApolloReactHoc.DataProps<QueryCommentQuery, QueryCommentQueryVariables> & TChildProps;
export function withQueryComment<TProps, TChildProps = {}>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  QueryCommentQuery,
  QueryCommentQueryVariables,
  QueryCommentProps<TChildProps>>) {
    return ApolloReactHoc.withQuery<TProps, QueryCommentQuery, QueryCommentQueryVariables, QueryCommentProps<TChildProps>>(QueryCommentDocument, {
      alias: 'queryComment',
      ...operationOptions
    });
};
export type QueryCommentQueryResult = ApolloReactCommon.QueryResult<QueryCommentQuery, QueryCommentQueryVariables>;
export const QueryProjectDocument = gql`
    query queryProject($filter: TagFilter, $order: TagOrder, $first: Int, $offset: Int, $filter1: WorkerFilter, $order1: WorkerOrder, $first1: Int, $offset1: Int, $filter2: TaskFilter, $order2: TaskOrder, $first2: Int, $offset2: Int, $filter3: UserFilter, $filter4: TagFilter, $order3: TagOrder, $first3: Int, $offset3: Int, $filter5: CommentFilter, $order4: CommentOrder, $first4: Int, $offset4: Int, $filter6: TaskFilter, $order5: TaskOrder, $first5: Int, $offset5: Int, $filter7: WorkerFilter, $order6: WorkerOrder, $first6: Int, $offset6: Int, $filter8: TaskFilter, $order7: TaskOrder, $first7: Int, $offset7: Int, $filter9: TaskFilter, $order8: TaskOrder, $first8: Int, $offset8: Int, $filter10: ColumnFilter, $order9: ColumnOrder, $first9: Int, $offset9: Int, $filter11: BoardFilter, $order10: BoardOrder, $first10: Int, $offset10: Int, $filter12: UserFilter, $filter13: TagFilter, $order11: TagOrder, $first11: Int, $offset11: Int, $filter14: TaskFilter, $order12: TaskOrder, $first12: Int, $offset12: Int, $filter15: WorkerFilter, $order13: WorkerOrder, $first13: Int, $offset13: Int, $filter16: ProjectFilter, $order14: ProjectOrder, $first14: Int, $offset14: Int) {
  queryProject(filter: $filter16, order: $order14, first: $first14, offset: $offset14) {
    id
    title
    tags(filter: $filter, order: $order, first: $first, offset: $offset) {
      id
      title
    }
    tasks(filter: $filter8, order: $order7, first: $first7, offset: $offset7) {
      id
      title
      hours
      deadline
      content
      priority
      complete
      likes(filter: $filter7, order: $order6, first: $first6, offset: $offset6) {
        id
        name
        availability
        user(filter: $filter3) {
          id
          username
          password
          location
          roles(filter: $filter1, order: $order1, first: $first1, offset: $offset1) {
            id
            name
            availability
          }
          stars(filter: $filter2, order: $order2, first: $first2, offset: $offset2) {
            id
            title
            hours
            deadline
            content
            priority
            complete
          }
        }
        tags(filter: $filter4, order: $order3, first: $first3, offset: $offset3) {
          id
          title
        }
        tasks(filter: $filter6, order: $order5, first: $first5, offset: $offset5) {
          id
          title
          hours
          deadline
          content
          priority
          complete
          comments(filter: $filter5, order: $order4, first: $first4, offset: $offset4) {
            id
            content
          }
        }
      }
    }
    boards(filter: $filter11, order: $order10, first: $first10, offset: $offset10) {
      id
      title
      columns(filter: $filter10, order: $order9, first: $first9, offset: $offset9) {
        id
        title
        tasks(filter: $filter9, order: $order8, first: $first8, offset: $offset8) {
          id
          title
          hours
          deadline
          content
          priority
          complete
        }
      }
      order
    }
    workers(filter: $filter15, order: $order13, first: $first13, offset: $offset13) {
      id
      name
      availability
      user(filter: $filter12) {
        id
        username
        password
        location
      }
      tags(filter: $filter13, order: $order11, first: $first11, offset: $offset11) {
        id
        title
      }
      tasks(filter: $filter14, order: $order12, first: $first12, offset: $offset12) {
        id
        title
        hours
        deadline
        content
        priority
        complete
      }
    }
  }
}
    `;
export type QueryProjectComponentProps = Omit<ApolloReactComponents.QueryComponentOptions<QueryProjectQuery, QueryProjectQueryVariables>, 'query'>;

    export const QueryProjectComponent = (props: QueryProjectComponentProps) => (
      <ApolloReactComponents.Query<QueryProjectQuery, QueryProjectQueryVariables> query={QueryProjectDocument} {...props} />
    );
    
export type QueryProjectProps<TChildProps = {}> = ApolloReactHoc.DataProps<QueryProjectQuery, QueryProjectQueryVariables> & TChildProps;
export function withQueryProject<TProps, TChildProps = {}>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  QueryProjectQuery,
  QueryProjectQueryVariables,
  QueryProjectProps<TChildProps>>) {
    return ApolloReactHoc.withQuery<TProps, QueryProjectQuery, QueryProjectQueryVariables, QueryProjectProps<TChildProps>>(QueryProjectDocument, {
      alias: 'queryProject',
      ...operationOptions
    });
};
export type QueryProjectQueryResult = ApolloReactCommon.QueryResult<QueryProjectQuery, QueryProjectQueryVariables>;
export const QueryTagDocument = gql`
    query queryTag($filter: TagFilter, $order: TagOrder, $first: Int, $offset: Int) {
  queryTag(filter: $filter, order: $order, first: $first, offset: $offset) {
    id
    title
  }
}
    `;
export type QueryTagComponentProps = Omit<ApolloReactComponents.QueryComponentOptions<QueryTagQuery, QueryTagQueryVariables>, 'query'>;

    export const QueryTagComponent = (props: QueryTagComponentProps) => (
      <ApolloReactComponents.Query<QueryTagQuery, QueryTagQueryVariables> query={QueryTagDocument} {...props} />
    );
    
export type QueryTagProps<TChildProps = {}> = ApolloReactHoc.DataProps<QueryTagQuery, QueryTagQueryVariables> & TChildProps;
export function withQueryTag<TProps, TChildProps = {}>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  QueryTagQuery,
  QueryTagQueryVariables,
  QueryTagProps<TChildProps>>) {
    return ApolloReactHoc.withQuery<TProps, QueryTagQuery, QueryTagQueryVariables, QueryTagProps<TChildProps>>(QueryTagDocument, {
      alias: 'queryTag',
      ...operationOptions
    });
};
export type QueryTagQueryResult = ApolloReactCommon.QueryResult<QueryTagQuery, QueryTagQueryVariables>;
export const QueryTaskDocument = gql`
    query queryTask($filter: UserFilter, $filter1: TagFilter, $order: TagOrder, $first: Int, $offset: Int, $filter2: TaskFilter, $order1: TaskOrder, $first1: Int, $offset1: Int, $filter3: WorkerFilter, $order2: WorkerOrder, $first2: Int, $offset2: Int, $filter4: WorkerFilter, $order3: WorkerOrder, $first3: Int, $offset3: Int, $filter5: CommentFilter, $order4: CommentOrder, $first4: Int, $offset4: Int, $filter6: TaskFilter, $order5: TaskOrder, $first5: Int, $offset5: Int, $filter7: UserFilter, $filter8: TagFilter, $order6: TagOrder, $first6: Int, $offset6: Int, $filter9: WorkerFilter, $order7: WorkerOrder, $first7: Int, $offset7: Int, $filter10: WorkerFilter, $filter11: CommentFilter, $order8: CommentOrder, $first8: Int, $offset8: Int, $filter12: TaskFilter, $order9: TaskOrder, $first9: Int, $offset9: Int, $filter13: WorkerFilter, $order10: WorkerOrder, $first10: Int, $offset10: Int, $filter14: CommentFilter, $order11: CommentOrder, $first11: Int, $offset11: Int, $filter15: TaskFilter, $order12: TaskOrder, $first12: Int, $offset12: Int) {
  queryTask(filter: $filter15, order: $order12, first: $first12, offset: $offset12) {
    id
    title
    hours
    deadline
    content
    priority
    complete
    likes(filter: $filter13, order: $order10, first: $first10, offset: $offset10) {
      id
      name
      availability
      user(filter: $filter7) {
        id
        username
        password
        location
        roles(filter: $filter3, order: $order2, first: $first2, offset: $offset2) {
          id
          name
          availability
          user(filter: $filter) {
            id
            username
            password
            location
          }
          tags(filter: $filter1, order: $order, first: $first, offset: $offset) {
            id
            title
          }
          tasks(filter: $filter2, order: $order1, first: $first1, offset: $offset1) {
            id
            title
            hours
            deadline
            content
            priority
            complete
          }
        }
        stars(filter: $filter6, order: $order5, first: $first5, offset: $offset5) {
          id
          title
          hours
          deadline
          content
          priority
          complete
          likes(filter: $filter4, order: $order3, first: $first3, offset: $offset3) {
            id
            name
            availability
          }
          comments(filter: $filter5, order: $order4, first: $first4, offset: $offset4) {
            id
            content
          }
        }
      }
      tags(filter: $filter8, order: $order6, first: $first6, offset: $offset6) {
        id
        title
      }
      tasks(filter: $filter12, order: $order9, first: $first9, offset: $offset9) {
        id
        title
        hours
        deadline
        content
        priority
        complete
        likes(filter: $filter9, order: $order7, first: $first7, offset: $offset7) {
          id
          name
          availability
        }
        comments(filter: $filter11, order: $order8, first: $first8, offset: $offset8) {
          id
          worker(filter: $filter10) {
            id
            name
            availability
          }
          content
        }
      }
    }
    comments(filter: $filter14, order: $order11, first: $first11, offset: $offset11) {
      id
      content
    }
  }
}
    `;
export type QueryTaskComponentProps = Omit<ApolloReactComponents.QueryComponentOptions<QueryTaskQuery, QueryTaskQueryVariables>, 'query'>;

    export const QueryTaskComponent = (props: QueryTaskComponentProps) => (
      <ApolloReactComponents.Query<QueryTaskQuery, QueryTaskQueryVariables> query={QueryTaskDocument} {...props} />
    );
    
export type QueryTaskProps<TChildProps = {}> = ApolloReactHoc.DataProps<QueryTaskQuery, QueryTaskQueryVariables> & TChildProps;
export function withQueryTask<TProps, TChildProps = {}>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  QueryTaskQuery,
  QueryTaskQueryVariables,
  QueryTaskProps<TChildProps>>) {
    return ApolloReactHoc.withQuery<TProps, QueryTaskQuery, QueryTaskQueryVariables, QueryTaskProps<TChildProps>>(QueryTaskDocument, {
      alias: 'queryTask',
      ...operationOptions
    });
};
export type QueryTaskQueryResult = ApolloReactCommon.QueryResult<QueryTaskQuery, QueryTaskQueryVariables>;
export const QueryUserDocument = gql`
    query queryUser($filter: TagFilter, $order: TagOrder, $first: Int, $offset: Int, $filter1: TaskFilter, $order1: TaskOrder, $first1: Int, $offset1: Int, $filter2: WorkerFilter, $order2: WorkerOrder, $first2: Int, $offset2: Int, $filter3: WorkerFilter, $order3: WorkerOrder, $first3: Int, $offset3: Int, $filter4: CommentFilter, $order4: CommentOrder, $first4: Int, $offset4: Int, $filter5: TaskFilter, $order5: TaskOrder, $first5: Int, $offset5: Int, $filter6: UserFilter, $filter7: WorkerFilter, $order6: WorkerOrder, $first6: Int, $offset6: Int, $filter8: TaskFilter, $order7: TaskOrder, $first7: Int, $offset7: Int, $filter9: UserFilter, $order8: UserOrder, $first8: Int, $offset8: Int) {
  queryUser(filter: $filter9, order: $order8, first: $first8, offset: $offset8) {
    id
    username
    password
    location
    roles(filter: $filter7, order: $order6, first: $first6, offset: $offset6) {
      id
      name
      availability
      user(filter: $filter6) {
        id
        username
        password
        location
        roles(filter: $filter2, order: $order2, first: $first2, offset: $offset2) {
          id
          name
          availability
          tags(filter: $filter, order: $order, first: $first, offset: $offset) {
            id
            title
          }
          tasks(filter: $filter1, order: $order1, first: $first1, offset: $offset1) {
            id
            title
            hours
            deadline
            content
            priority
            complete
          }
        }
        stars(filter: $filter5, order: $order5, first: $first5, offset: $offset5) {
          id
          title
          hours
          deadline
          content
          priority
          complete
          likes(filter: $filter3, order: $order3, first: $first3, offset: $offset3) {
            id
            name
            availability
          }
          comments(filter: $filter4, order: $order4, first: $first4, offset: $offset4) {
            id
            content
          }
        }
      }
    }
    stars(filter: $filter8, order: $order7, first: $first7, offset: $offset7) {
      id
      title
      hours
      deadline
      content
      priority
      complete
    }
  }
}
    `;
export type QueryUserComponentProps = Omit<ApolloReactComponents.QueryComponentOptions<QueryUserQuery, QueryUserQueryVariables>, 'query'>;

    export const QueryUserComponent = (props: QueryUserComponentProps) => (
      <ApolloReactComponents.Query<QueryUserQuery, QueryUserQueryVariables> query={QueryUserDocument} {...props} />
    );
    
export type QueryUserProps<TChildProps = {}> = ApolloReactHoc.DataProps<QueryUserQuery, QueryUserQueryVariables> & TChildProps;
export function withQueryUser<TProps, TChildProps = {}>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  QueryUserQuery,
  QueryUserQueryVariables,
  QueryUserProps<TChildProps>>) {
    return ApolloReactHoc.withQuery<TProps, QueryUserQuery, QueryUserQueryVariables, QueryUserProps<TChildProps>>(QueryUserDocument, {
      alias: 'queryUser',
      ...operationOptions
    });
};
export type QueryUserQueryResult = ApolloReactCommon.QueryResult<QueryUserQuery, QueryUserQueryVariables>;
export const QueryWorkerDocument = gql`
    query queryWorker($filter: TaskFilter, $order: TaskOrder, $first: Int, $offset: Int, $filter1: UserFilter, $filter2: TagFilter, $order1: TagOrder, $first1: Int, $offset1: Int, $filter3: WorkerFilter, $order2: WorkerOrder, $first2: Int, $offset2: Int, $filter4: CommentFilter, $order3: CommentOrder, $first3: Int, $offset3: Int, $filter5: TaskFilter, $order4: TaskOrder, $first4: Int, $offset4: Int, $filter6: WorkerFilter, $order5: WorkerOrder, $first5: Int, $offset5: Int, $filter7: UserFilter, $filter8: TagFilter, $order6: TagOrder, $first6: Int, $offset6: Int, $filter9: TaskFilter, $order7: TaskOrder, $first7: Int, $offset7: Int, $filter10: WorkerFilter, $order8: WorkerOrder, $first8: Int, $offset8: Int) {
  queryWorker(filter: $filter10, order: $order8, first: $first8, offset: $offset8) {
    id
    name
    availability
    user(filter: $filter7) {
      id
      username
      password
      location
      roles(filter: $filter6, order: $order5, first: $first5, offset: $offset5) {
        id
        name
        availability
        user(filter: $filter1) {
          id
          username
          password
          location
          stars(filter: $filter, order: $order, first: $first, offset: $offset) {
            id
            title
            hours
            deadline
            content
            priority
            complete
          }
        }
        tags(filter: $filter2, order: $order1, first: $first1, offset: $offset1) {
          id
          title
        }
        tasks(filter: $filter5, order: $order4, first: $first4, offset: $offset4) {
          id
          title
          hours
          deadline
          content
          priority
          complete
          likes(filter: $filter3, order: $order2, first: $first2, offset: $offset2) {
            id
            name
            availability
          }
          comments(filter: $filter4, order: $order3, first: $first3, offset: $offset3) {
            id
            content
          }
        }
      }
    }
    tags(filter: $filter8, order: $order6, first: $first6, offset: $offset6) {
      id
      title
    }
    tasks(filter: $filter9, order: $order7, first: $first7, offset: $offset7) {
      id
      title
      hours
      deadline
      content
      priority
      complete
    }
  }
}
    `;
export type QueryWorkerComponentProps = Omit<ApolloReactComponents.QueryComponentOptions<QueryWorkerQuery, QueryWorkerQueryVariables>, 'query'>;

    export const QueryWorkerComponent = (props: QueryWorkerComponentProps) => (
      <ApolloReactComponents.Query<QueryWorkerQuery, QueryWorkerQueryVariables> query={QueryWorkerDocument} {...props} />
    );
    
export type QueryWorkerProps<TChildProps = {}> = ApolloReactHoc.DataProps<QueryWorkerQuery, QueryWorkerQueryVariables> & TChildProps;
export function withQueryWorker<TProps, TChildProps = {}>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  QueryWorkerQuery,
  QueryWorkerQueryVariables,
  QueryWorkerProps<TChildProps>>) {
    return ApolloReactHoc.withQuery<TProps, QueryWorkerQuery, QueryWorkerQueryVariables, QueryWorkerProps<TChildProps>>(QueryWorkerDocument, {
      alias: 'queryWorker',
      ...operationOptions
    });
};
export type QueryWorkerQueryResult = ApolloReactCommon.QueryResult<QueryWorkerQuery, QueryWorkerQueryVariables>;