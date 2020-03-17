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
  project: ProjectRef,
  title: Scalars['String'],
  columns?: Maybe<Array<Maybe<ColumnRef>>>,
  order?: Maybe<Array<Maybe<Scalars['String']>>>,
};

export type AddBoardPayload = {
   __typename?: 'AddBoardPayload',
  board?: Maybe<Array<Maybe<Board>>>,
  numUids?: Maybe<Scalars['Int']>,
};


export type AddBoardPayloadBoardArgs = {
  filter?: Maybe<BoardFilter>,
  order?: Maybe<BoardOrder>,
  first?: Maybe<Scalars['Int']>,
  offset?: Maybe<Scalars['Int']>
};

export type AddColumnInput = {
  board: BoardRef,
  title: Scalars['String'],
  tasks?: Maybe<Array<Maybe<TaskRef>>>,
};

export type AddColumnPayload = {
   __typename?: 'AddColumnPayload',
  column?: Maybe<Array<Maybe<Column>>>,
  numUids?: Maybe<Scalars['Int']>,
};


export type AddColumnPayloadColumnArgs = {
  filter?: Maybe<ColumnFilter>,
  order?: Maybe<ColumnOrder>,
  first?: Maybe<Scalars['Int']>,
  offset?: Maybe<Scalars['Int']>
};

export type AddCommentInput = {
  task: TaskRef,
  developer: DeveloperRef,
  content: Scalars['String'],
};

export type AddCommentPayload = {
   __typename?: 'AddCommentPayload',
  comment?: Maybe<Array<Maybe<Comment>>>,
  numUids?: Maybe<Scalars['Int']>,
};


export type AddCommentPayloadCommentArgs = {
  filter?: Maybe<CommentFilter>,
  order?: Maybe<CommentOrder>,
  first?: Maybe<Scalars['Int']>,
  offset?: Maybe<Scalars['Int']>
};

export type AddDeveloperInput = {
  project: ProjectRef,
  name: Scalars['String'],
  availability: Scalars['Int'],
  user?: Maybe<Array<Maybe<UserRef>>>,
  tags?: Maybe<Array<Maybe<TagRef>>>,
  tasks?: Maybe<Array<Maybe<TaskRef>>>,
  liked?: Maybe<Array<Maybe<TaskRef>>>,
};

export type AddDeveloperPayload = {
   __typename?: 'AddDeveloperPayload',
  developer?: Maybe<Array<Maybe<Developer>>>,
  numUids?: Maybe<Scalars['Int']>,
};


export type AddDeveloperPayloadDeveloperArgs = {
  filter?: Maybe<DeveloperFilter>,
  order?: Maybe<DeveloperOrder>,
  first?: Maybe<Scalars['Int']>,
  offset?: Maybe<Scalars['Int']>
};

export type AddProjectInput = {
  title: Scalars['String'],
  description: Scalars['String'],
  tags?: Maybe<Array<Maybe<TagRef>>>,
  tasks?: Maybe<Array<Maybe<TaskRef>>>,
  boards?: Maybe<Array<Maybe<BoardRef>>>,
  developers?: Maybe<Array<Maybe<DeveloperRef>>>,
};

export type AddProjectPayload = {
   __typename?: 'AddProjectPayload',
  project?: Maybe<Array<Maybe<Project>>>,
  numUids?: Maybe<Scalars['Int']>,
};


export type AddProjectPayloadProjectArgs = {
  filter?: Maybe<ProjectFilter>,
  order?: Maybe<ProjectOrder>,
  first?: Maybe<Scalars['Int']>,
  offset?: Maybe<Scalars['Int']>
};

export type AddTagInput = {
  title: Scalars['String'],
  project: ProjectRef,
  developers?: Maybe<Array<Maybe<DeveloperRef>>>,
};

export type AddTagPayload = {
   __typename?: 'AddTagPayload',
  tag?: Maybe<Array<Maybe<Tag>>>,
  numUids?: Maybe<Scalars['Int']>,
};


export type AddTagPayloadTagArgs = {
  filter?: Maybe<TagFilter>,
  order?: Maybe<TagOrder>,
  first?: Maybe<Scalars['Int']>,
  offset?: Maybe<Scalars['Int']>
};

export type AddTaskInput = {
  project: ProjectRef,
  column?: Maybe<ColumnRef>,
  title: Scalars['String'],
  developers?: Maybe<Array<Maybe<DeveloperRef>>>,
  hours: Scalars['Int'],
  deadline: Scalars['String'],
  content: Scalars['String'],
  priority: Scalars['Int'],
  complete: Scalars['Boolean'],
  likes?: Maybe<Array<Maybe<DeveloperRef>>>,
  comments?: Maybe<Array<Maybe<CommentRef>>>,
};

export type AddTaskPayload = {
   __typename?: 'AddTaskPayload',
  task?: Maybe<Array<Maybe<Task>>>,
  numUids?: Maybe<Scalars['Int']>,
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
  roles?: Maybe<Array<Maybe<DeveloperRef>>>,
  stars?: Maybe<Array<Maybe<TaskRef>>>,
};

export type AddUserPayload = {
   __typename?: 'AddUserPayload',
  user?: Maybe<Array<Maybe<User>>>,
  numUids?: Maybe<Scalars['Int']>,
};


export type AddUserPayloadUserArgs = {
  filter?: Maybe<UserFilter>,
  order?: Maybe<UserOrder>,
  first?: Maybe<Scalars['Int']>,
  offset?: Maybe<Scalars['Int']>
};

export type Board = {
   __typename?: 'Board',
  id: Scalars['ID'],
  project: Project,
  title: Scalars['String'],
  columns?: Maybe<Array<Maybe<Column>>>,
  order?: Maybe<Array<Maybe<Scalars['String']>>>,
};


export type BoardProjectArgs = {
  filter?: Maybe<ProjectFilter>
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
  project?: Maybe<ProjectRef>,
  title?: Maybe<Scalars['String']>,
  columns?: Maybe<Array<Maybe<ColumnRef>>>,
  order?: Maybe<Array<Maybe<Scalars['String']>>>,
};

export type BoardRef = {
  id?: Maybe<Scalars['ID']>,
  project?: Maybe<ProjectRef>,
  title?: Maybe<Scalars['String']>,
  columns?: Maybe<Array<Maybe<ColumnRef>>>,
  order?: Maybe<Array<Maybe<Scalars['String']>>>,
};

export type Column = {
   __typename?: 'Column',
  id: Scalars['ID'],
  board: Board,
  title: Scalars['String'],
  tasks?: Maybe<Array<Maybe<Task>>>,
};


export type ColumnBoardArgs = {
  filter?: Maybe<BoardFilter>
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
  board?: Maybe<BoardRef>,
  title?: Maybe<Scalars['String']>,
  tasks?: Maybe<Array<Maybe<TaskRef>>>,
};

export type ColumnRef = {
  id?: Maybe<Scalars['ID']>,
  board?: Maybe<BoardRef>,
  title?: Maybe<Scalars['String']>,
  tasks?: Maybe<Array<Maybe<TaskRef>>>,
};

export type Comment = {
   __typename?: 'Comment',
  id: Scalars['ID'],
  task: Task,
  developer: Developer,
  content: Scalars['String'],
};


export type CommentTaskArgs = {
  filter?: Maybe<TaskFilter>
};


export type CommentDeveloperArgs = {
  filter?: Maybe<DeveloperFilter>
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
  task?: Maybe<TaskRef>,
  developer?: Maybe<DeveloperRef>,
  content?: Maybe<Scalars['String']>,
};

export type CommentRef = {
  id?: Maybe<Scalars['ID']>,
  task?: Maybe<TaskRef>,
  developer?: Maybe<DeveloperRef>,
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
  numUids?: Maybe<Scalars['Int']>,
};

export type DeleteColumnPayload = {
   __typename?: 'DeleteColumnPayload',
  msg?: Maybe<Scalars['String']>,
  numUids?: Maybe<Scalars['Int']>,
};

export type DeleteCommentPayload = {
   __typename?: 'DeleteCommentPayload',
  msg?: Maybe<Scalars['String']>,
  numUids?: Maybe<Scalars['Int']>,
};

export type DeleteDeveloperPayload = {
   __typename?: 'DeleteDeveloperPayload',
  msg?: Maybe<Scalars['String']>,
  numUids?: Maybe<Scalars['Int']>,
};

export type DeleteProjectPayload = {
   __typename?: 'DeleteProjectPayload',
  msg?: Maybe<Scalars['String']>,
  numUids?: Maybe<Scalars['Int']>,
};

export type DeleteTagPayload = {
   __typename?: 'DeleteTagPayload',
  msg?: Maybe<Scalars['String']>,
  numUids?: Maybe<Scalars['Int']>,
};

export type DeleteTaskPayload = {
   __typename?: 'DeleteTaskPayload',
  msg?: Maybe<Scalars['String']>,
  numUids?: Maybe<Scalars['Int']>,
};

export type DeleteUserPayload = {
   __typename?: 'DeleteUserPayload',
  msg?: Maybe<Scalars['String']>,
  numUids?: Maybe<Scalars['Int']>,
};

export type Developer = {
   __typename?: 'Developer',
  id: Scalars['ID'],
  project: Project,
  name: Scalars['String'],
  availability: Scalars['Int'],
  user?: Maybe<Array<Maybe<User>>>,
  tags?: Maybe<Array<Maybe<Tag>>>,
  tasks?: Maybe<Array<Maybe<Task>>>,
  liked?: Maybe<Array<Maybe<Task>>>,
};


export type DeveloperProjectArgs = {
  filter?: Maybe<ProjectFilter>
};


export type DeveloperUserArgs = {
  filter?: Maybe<UserFilter>,
  order?: Maybe<UserOrder>,
  first?: Maybe<Scalars['Int']>,
  offset?: Maybe<Scalars['Int']>
};


export type DeveloperTagsArgs = {
  filter?: Maybe<TagFilter>,
  order?: Maybe<TagOrder>,
  first?: Maybe<Scalars['Int']>,
  offset?: Maybe<Scalars['Int']>
};


export type DeveloperTasksArgs = {
  filter?: Maybe<TaskFilter>,
  order?: Maybe<TaskOrder>,
  first?: Maybe<Scalars['Int']>,
  offset?: Maybe<Scalars['Int']>
};


export type DeveloperLikedArgs = {
  filter?: Maybe<TaskFilter>,
  order?: Maybe<TaskOrder>,
  first?: Maybe<Scalars['Int']>,
  offset?: Maybe<Scalars['Int']>
};

export type DeveloperFilter = {
  id?: Maybe<Array<Scalars['ID']>>,
  name?: Maybe<StringHashFilter>,
  and?: Maybe<DeveloperFilter>,
  or?: Maybe<DeveloperFilter>,
  not?: Maybe<DeveloperFilter>,
};

export type DeveloperOrder = {
  asc?: Maybe<DeveloperOrderable>,
  desc?: Maybe<DeveloperOrderable>,
  then?: Maybe<DeveloperOrder>,
};

export enum DeveloperOrderable {
  Name = 'name',
  Availability = 'availability'
}

export type DeveloperPatch = {
  project?: Maybe<ProjectRef>,
  name?: Maybe<Scalars['String']>,
  availability?: Maybe<Scalars['Int']>,
  user?: Maybe<Array<Maybe<UserRef>>>,
  tags?: Maybe<Array<Maybe<TagRef>>>,
  tasks?: Maybe<Array<Maybe<TaskRef>>>,
  liked?: Maybe<Array<Maybe<TaskRef>>>,
};

export type DeveloperRef = {
  id?: Maybe<Scalars['ID']>,
  project?: Maybe<ProjectRef>,
  name?: Maybe<Scalars['String']>,
  availability?: Maybe<Scalars['Int']>,
  user?: Maybe<Array<Maybe<UserRef>>>,
  tags?: Maybe<Array<Maybe<TagRef>>>,
  tasks?: Maybe<Array<Maybe<TaskRef>>>,
  liked?: Maybe<Array<Maybe<TaskRef>>>,
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
  addDeveloper?: Maybe<AddDeveloperPayload>,
  updateDeveloper?: Maybe<UpdateDeveloperPayload>,
  deleteDeveloper?: Maybe<DeleteDeveloperPayload>,
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


export type MutationAddDeveloperArgs = {
  input: Array<AddDeveloperInput>
};


export type MutationUpdateDeveloperArgs = {
  input: UpdateDeveloperInput
};


export type MutationDeleteDeveloperArgs = {
  filter: DeveloperFilter
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
  description: Scalars['String'],
  tags?: Maybe<Array<Maybe<Tag>>>,
  tasks?: Maybe<Array<Maybe<Task>>>,
  boards?: Maybe<Array<Maybe<Board>>>,
  developers?: Maybe<Array<Maybe<Developer>>>,
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


export type ProjectDevelopersArgs = {
  filter?: Maybe<DeveloperFilter>,
  order?: Maybe<DeveloperOrder>,
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
  Title = 'title',
  Description = 'description'
}

export type ProjectPatch = {
  title?: Maybe<Scalars['String']>,
  description?: Maybe<Scalars['String']>,
  tags?: Maybe<Array<Maybe<TagRef>>>,
  tasks?: Maybe<Array<Maybe<TaskRef>>>,
  boards?: Maybe<Array<Maybe<BoardRef>>>,
  developers?: Maybe<Array<Maybe<DeveloperRef>>>,
};

export type ProjectRef = {
  id?: Maybe<Scalars['ID']>,
  title?: Maybe<Scalars['String']>,
  description?: Maybe<Scalars['String']>,
  tags?: Maybe<Array<Maybe<TagRef>>>,
  tasks?: Maybe<Array<Maybe<TaskRef>>>,
  boards?: Maybe<Array<Maybe<BoardRef>>>,
  developers?: Maybe<Array<Maybe<DeveloperRef>>>,
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
  getDeveloper?: Maybe<Developer>,
  queryDeveloper?: Maybe<Array<Maybe<Developer>>>,
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


export type QueryGetDeveloperArgs = {
  id: Scalars['ID']
};


export type QueryQueryDeveloperArgs = {
  filter?: Maybe<DeveloperFilter>,
  order?: Maybe<DeveloperOrder>,
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
  project: Project,
  developers?: Maybe<Array<Maybe<Developer>>>,
};


export type TagProjectArgs = {
  filter?: Maybe<ProjectFilter>
};


export type TagDevelopersArgs = {
  filter?: Maybe<DeveloperFilter>,
  order?: Maybe<DeveloperOrder>,
  first?: Maybe<Scalars['Int']>,
  offset?: Maybe<Scalars['Int']>
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
  project?: Maybe<ProjectRef>,
  developers?: Maybe<Array<Maybe<DeveloperRef>>>,
};

export type TagRef = {
  id?: Maybe<Scalars['ID']>,
  title?: Maybe<Scalars['String']>,
  project?: Maybe<ProjectRef>,
  developers?: Maybe<Array<Maybe<DeveloperRef>>>,
};

export type Task = {
   __typename?: 'Task',
  id: Scalars['ID'],
  project: Project,
  column?: Maybe<Column>,
  title: Scalars['String'],
  developers?: Maybe<Array<Maybe<Developer>>>,
  hours: Scalars['Int'],
  deadline: Scalars['String'],
  content: Scalars['String'],
  priority: Scalars['Int'],
  complete: Scalars['Boolean'],
  likes?: Maybe<Array<Maybe<Developer>>>,
  comments?: Maybe<Array<Maybe<Comment>>>,
};


export type TaskProjectArgs = {
  filter?: Maybe<ProjectFilter>
};


export type TaskColumnArgs = {
  filter?: Maybe<ColumnFilter>
};


export type TaskDevelopersArgs = {
  filter?: Maybe<DeveloperFilter>,
  order?: Maybe<DeveloperOrder>,
  first?: Maybe<Scalars['Int']>,
  offset?: Maybe<Scalars['Int']>
};


export type TaskLikesArgs = {
  filter?: Maybe<DeveloperFilter>,
  order?: Maybe<DeveloperOrder>,
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
  project?: Maybe<ProjectRef>,
  column?: Maybe<ColumnRef>,
  title?: Maybe<Scalars['String']>,
  developers?: Maybe<Array<Maybe<DeveloperRef>>>,
  hours?: Maybe<Scalars['Int']>,
  deadline?: Maybe<Scalars['String']>,
  content?: Maybe<Scalars['String']>,
  priority?: Maybe<Scalars['Int']>,
  complete?: Maybe<Scalars['Boolean']>,
  likes?: Maybe<Array<Maybe<DeveloperRef>>>,
  comments?: Maybe<Array<Maybe<CommentRef>>>,
};

export type TaskRef = {
  id?: Maybe<Scalars['ID']>,
  project?: Maybe<ProjectRef>,
  column?: Maybe<ColumnRef>,
  title?: Maybe<Scalars['String']>,
  developers?: Maybe<Array<Maybe<DeveloperRef>>>,
  hours?: Maybe<Scalars['Int']>,
  deadline?: Maybe<Scalars['String']>,
  content?: Maybe<Scalars['String']>,
  priority?: Maybe<Scalars['Int']>,
  complete?: Maybe<Scalars['Boolean']>,
  likes?: Maybe<Array<Maybe<DeveloperRef>>>,
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
  numUids?: Maybe<Scalars['Int']>,
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
  numUids?: Maybe<Scalars['Int']>,
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
  numUids?: Maybe<Scalars['Int']>,
};


export type UpdateCommentPayloadCommentArgs = {
  filter?: Maybe<CommentFilter>,
  order?: Maybe<CommentOrder>,
  first?: Maybe<Scalars['Int']>,
  offset?: Maybe<Scalars['Int']>
};

export type UpdateDeveloperInput = {
  filter: DeveloperFilter,
  set?: Maybe<DeveloperPatch>,
  remove?: Maybe<DeveloperPatch>,
};

export type UpdateDeveloperPayload = {
   __typename?: 'UpdateDeveloperPayload',
  developer?: Maybe<Array<Maybe<Developer>>>,
  numUids?: Maybe<Scalars['Int']>,
};


export type UpdateDeveloperPayloadDeveloperArgs = {
  filter?: Maybe<DeveloperFilter>,
  order?: Maybe<DeveloperOrder>,
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
  numUids?: Maybe<Scalars['Int']>,
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
  numUids?: Maybe<Scalars['Int']>,
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
  numUids?: Maybe<Scalars['Int']>,
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
  numUids?: Maybe<Scalars['Int']>,
};


export type UpdateUserPayloadUserArgs = {
  filter?: Maybe<UserFilter>,
  order?: Maybe<UserOrder>,
  first?: Maybe<Scalars['Int']>,
  offset?: Maybe<Scalars['Int']>
};

export type User = {
   __typename?: 'User',
  id: Scalars['ID'],
  username: Scalars['String'],
  password: Scalars['String'],
  location: Scalars['String'],
  roles?: Maybe<Array<Maybe<Developer>>>,
  stars?: Maybe<Array<Maybe<Task>>>,
};


export type UserRolesArgs = {
  filter?: Maybe<DeveloperFilter>,
  order?: Maybe<DeveloperOrder>,
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
  roles?: Maybe<Array<Maybe<DeveloperRef>>>,
  stars?: Maybe<Array<Maybe<TaskRef>>>,
};

export type UserRef = {
  id?: Maybe<Scalars['ID']>,
  username?: Maybe<Scalars['String']>,
  password?: Maybe<Scalars['String']>,
  location?: Maybe<Scalars['String']>,
  roles?: Maybe<Array<Maybe<DeveloperRef>>>,
  stars?: Maybe<Array<Maybe<TaskRef>>>,
};

export type AddBoardMutationVariables = {
  filter?: Maybe<ProjectFilter>,
  filter1?: Maybe<DeveloperFilter>,
  order?: Maybe<DeveloperOrder>,
  first?: Maybe<Scalars['Int']>,
  offset?: Maybe<Scalars['Int']>,
  filter2?: Maybe<TagFilter>,
  order1?: Maybe<TagOrder>,
  first1?: Maybe<Scalars['Int']>,
  offset1?: Maybe<Scalars['Int']>,
  filter3?: Maybe<ProjectFilter>,
  filter4?: Maybe<ColumnFilter>,
  filter5?: Maybe<DeveloperFilter>,
  order2?: Maybe<DeveloperOrder>,
  first2?: Maybe<Scalars['Int']>,
  offset2?: Maybe<Scalars['Int']>,
  filter6?: Maybe<DeveloperFilter>,
  order3?: Maybe<DeveloperOrder>,
  first3?: Maybe<Scalars['Int']>,
  offset3?: Maybe<Scalars['Int']>,
  filter7?: Maybe<CommentFilter>,
  order4?: Maybe<CommentOrder>,
  first4?: Maybe<Scalars['Int']>,
  offset4?: Maybe<Scalars['Int']>,
  filter8?: Maybe<TaskFilter>,
  order5?: Maybe<TaskOrder>,
  first5?: Maybe<Scalars['Int']>,
  offset5?: Maybe<Scalars['Int']>,
  filter9?: Maybe<ProjectFilter>,
  filter10?: Maybe<ColumnFilter>,
  order6?: Maybe<ColumnOrder>,
  first6?: Maybe<Scalars['Int']>,
  offset6?: Maybe<Scalars['Int']>,
  filter11?: Maybe<BoardFilter>,
  order7?: Maybe<BoardOrder>,
  first7?: Maybe<Scalars['Int']>,
  offset7?: Maybe<Scalars['Int']>,
  filter12?: Maybe<ProjectFilter>,
  filter13?: Maybe<UserFilter>,
  order8?: Maybe<UserOrder>,
  first8?: Maybe<Scalars['Int']>,
  offset8?: Maybe<Scalars['Int']>,
  filter14?: Maybe<TagFilter>,
  order9?: Maybe<TagOrder>,
  first9?: Maybe<Scalars['Int']>,
  offset9?: Maybe<Scalars['Int']>,
  filter15?: Maybe<TaskFilter>,
  order10?: Maybe<TaskOrder>,
  first10?: Maybe<Scalars['Int']>,
  offset10?: Maybe<Scalars['Int']>,
  filter16?: Maybe<TaskFilter>,
  order11?: Maybe<TaskOrder>,
  first11?: Maybe<Scalars['Int']>,
  offset11?: Maybe<Scalars['Int']>,
  filter17?: Maybe<DeveloperFilter>,
  order12?: Maybe<DeveloperOrder>,
  first12?: Maybe<Scalars['Int']>,
  offset12?: Maybe<Scalars['Int']>,
  filter18?: Maybe<ProjectFilter>,
  filter19?: Maybe<BoardFilter>,
  filter20?: Maybe<TaskFilter>,
  order13?: Maybe<TaskOrder>,
  first13?: Maybe<Scalars['Int']>,
  offset13?: Maybe<Scalars['Int']>,
  filter21?: Maybe<ColumnFilter>,
  order14?: Maybe<ColumnOrder>,
  first14?: Maybe<Scalars['Int']>,
  offset14?: Maybe<Scalars['Int']>,
  filter22?: Maybe<BoardFilter>,
  order15?: Maybe<BoardOrder>,
  first15?: Maybe<Scalars['Int']>,
  offset15?: Maybe<Scalars['Int']>,
  input: Array<AddBoardInput>
};


export type AddBoardMutation = (
  { __typename?: 'Mutation' }
  & { addBoard: Maybe<(
    { __typename?: 'AddBoardPayload' }
    & Pick<AddBoardPayload, 'numUids'>
    & { board: Maybe<Array<Maybe<(
      { __typename?: 'Board' }
      & Pick<Board, 'id' | 'title' | 'order'>
      & { project: (
        { __typename?: 'Project' }
        & Pick<Project, 'id' | 'title' | 'description'>
        & { tags: Maybe<Array<Maybe<(
          { __typename?: 'Tag' }
          & Pick<Tag, 'id' | 'title'>
          & { project: (
            { __typename?: 'Project' }
            & Pick<Project, 'id' | 'title' | 'description'>
          ), developers: Maybe<Array<Maybe<(
            { __typename?: 'Developer' }
            & Pick<Developer, 'id' | 'name' | 'availability'>
          )>>> }
        )>>>, tasks: Maybe<Array<Maybe<(
          { __typename?: 'Task' }
          & Pick<Task, 'id' | 'title' | 'hours' | 'deadline' | 'content' | 'priority' | 'complete'>
          & { project: (
            { __typename?: 'Project' }
            & Pick<Project, 'id' | 'title' | 'description'>
          ), column: Maybe<(
            { __typename?: 'Column' }
            & Pick<Column, 'id' | 'title'>
          )>, developers: Maybe<Array<Maybe<(
            { __typename?: 'Developer' }
            & Pick<Developer, 'id' | 'name' | 'availability'>
          )>>>, likes: Maybe<Array<Maybe<(
            { __typename?: 'Developer' }
            & Pick<Developer, 'id' | 'name' | 'availability'>
          )>>>, comments: Maybe<Array<Maybe<(
            { __typename?: 'Comment' }
            & Pick<Comment, 'id' | 'content'>
          )>>> }
        )>>>, boards: Maybe<Array<Maybe<(
          { __typename?: 'Board' }
          & Pick<Board, 'id' | 'title' | 'order'>
          & { project: (
            { __typename?: 'Project' }
            & Pick<Project, 'id' | 'title' | 'description'>
          ), columns: Maybe<Array<Maybe<(
            { __typename?: 'Column' }
            & Pick<Column, 'id' | 'title'>
          )>>> }
        )>>>, developers: Maybe<Array<Maybe<(
          { __typename?: 'Developer' }
          & Pick<Developer, 'id' | 'name' | 'availability'>
          & { project: (
            { __typename?: 'Project' }
            & Pick<Project, 'id' | 'title' | 'description'>
          ), user: Maybe<Array<Maybe<(
            { __typename?: 'User' }
            & Pick<User, 'id' | 'username' | 'password' | 'location'>
          )>>>, tags: Maybe<Array<Maybe<(
            { __typename?: 'Tag' }
            & Pick<Tag, 'id' | 'title'>
          )>>>, tasks: Maybe<Array<Maybe<(
            { __typename?: 'Task' }
            & Pick<Task, 'id' | 'title' | 'hours' | 'deadline' | 'content' | 'priority' | 'complete'>
          )>>>, liked: Maybe<Array<Maybe<(
            { __typename?: 'Task' }
            & Pick<Task, 'id' | 'title' | 'hours' | 'deadline' | 'content' | 'priority' | 'complete'>
          )>>> }
        )>>> }
      ), columns: Maybe<Array<Maybe<(
        { __typename?: 'Column' }
        & Pick<Column, 'id' | 'title'>
        & { board: (
          { __typename?: 'Board' }
          & Pick<Board, 'id' | 'title' | 'order'>
        ), tasks: Maybe<Array<Maybe<(
          { __typename?: 'Task' }
          & Pick<Task, 'id' | 'title' | 'hours' | 'deadline' | 'content' | 'priority' | 'complete'>
        )>>> }
      )>>> }
    )>>> }
  )> }
);

export type AddColumnMutationVariables = {
  filter?: Maybe<TagFilter>,
  order?: Maybe<TagOrder>,
  first?: Maybe<Scalars['Int']>,
  offset?: Maybe<Scalars['Int']>,
  filter1?: Maybe<TaskFilter>,
  order1?: Maybe<TaskOrder>,
  first1?: Maybe<Scalars['Int']>,
  offset1?: Maybe<Scalars['Int']>,
  filter2?: Maybe<BoardFilter>,
  order2?: Maybe<BoardOrder>,
  first2?: Maybe<Scalars['Int']>,
  offset2?: Maybe<Scalars['Int']>,
  filter3?: Maybe<DeveloperFilter>,
  order3?: Maybe<DeveloperOrder>,
  first3?: Maybe<Scalars['Int']>,
  offset3?: Maybe<Scalars['Int']>,
  filter4?: Maybe<ProjectFilter>,
  filter5?: Maybe<BoardFilter>,
  filter6?: Maybe<TaskFilter>,
  order4?: Maybe<TaskOrder>,
  first4?: Maybe<Scalars['Int']>,
  offset4?: Maybe<Scalars['Int']>,
  filter7?: Maybe<ColumnFilter>,
  order5?: Maybe<ColumnOrder>,
  first5?: Maybe<Scalars['Int']>,
  offset5?: Maybe<Scalars['Int']>,
  filter8?: Maybe<BoardFilter>,
  filter9?: Maybe<ProjectFilter>,
  filter10?: Maybe<ColumnFilter>,
  filter11?: Maybe<ProjectFilter>,
  filter12?: Maybe<UserFilter>,
  order6?: Maybe<UserOrder>,
  first6?: Maybe<Scalars['Int']>,
  offset6?: Maybe<Scalars['Int']>,
  filter13?: Maybe<TagFilter>,
  order7?: Maybe<TagOrder>,
  first7?: Maybe<Scalars['Int']>,
  offset7?: Maybe<Scalars['Int']>,
  filter14?: Maybe<TaskFilter>,
  order8?: Maybe<TaskOrder>,
  first8?: Maybe<Scalars['Int']>,
  offset8?: Maybe<Scalars['Int']>,
  filter15?: Maybe<TaskFilter>,
  order9?: Maybe<TaskOrder>,
  first9?: Maybe<Scalars['Int']>,
  offset9?: Maybe<Scalars['Int']>,
  filter16?: Maybe<DeveloperFilter>,
  order10?: Maybe<DeveloperOrder>,
  first10?: Maybe<Scalars['Int']>,
  offset10?: Maybe<Scalars['Int']>,
  filter17?: Maybe<ProjectFilter>,
  filter18?: Maybe<UserFilter>,
  order11?: Maybe<UserOrder>,
  first11?: Maybe<Scalars['Int']>,
  offset11?: Maybe<Scalars['Int']>,
  filter19?: Maybe<TagFilter>,
  order12?: Maybe<TagOrder>,
  first12?: Maybe<Scalars['Int']>,
  offset12?: Maybe<Scalars['Int']>,
  filter20?: Maybe<TaskFilter>,
  order13?: Maybe<TaskOrder>,
  first13?: Maybe<Scalars['Int']>,
  offset13?: Maybe<Scalars['Int']>,
  filter21?: Maybe<TaskFilter>,
  order14?: Maybe<TaskOrder>,
  first14?: Maybe<Scalars['Int']>,
  offset14?: Maybe<Scalars['Int']>,
  filter22?: Maybe<DeveloperFilter>,
  order15?: Maybe<DeveloperOrder>,
  first15?: Maybe<Scalars['Int']>,
  offset15?: Maybe<Scalars['Int']>,
  filter23?: Maybe<TaskFilter>,
  filter24?: Maybe<DeveloperFilter>,
  filter25?: Maybe<CommentFilter>,
  order16?: Maybe<CommentOrder>,
  first16?: Maybe<Scalars['Int']>,
  offset16?: Maybe<Scalars['Int']>,
  filter26?: Maybe<TaskFilter>,
  order17?: Maybe<TaskOrder>,
  first17?: Maybe<Scalars['Int']>,
  offset17?: Maybe<Scalars['Int']>,
  filter27?: Maybe<ColumnFilter>,
  order18?: Maybe<ColumnOrder>,
  first18?: Maybe<Scalars['Int']>,
  offset18?: Maybe<Scalars['Int']>,
  input: Array<AddColumnInput>
};


export type AddColumnMutation = (
  { __typename?: 'Mutation' }
  & { addColumn: Maybe<(
    { __typename?: 'AddColumnPayload' }
    & Pick<AddColumnPayload, 'numUids'>
    & { column: Maybe<Array<Maybe<(
      { __typename?: 'Column' }
      & Pick<Column, 'id' | 'title'>
      & { board: (
        { __typename?: 'Board' }
        & Pick<Board, 'id' | 'title' | 'order'>
        & { project: (
          { __typename?: 'Project' }
          & Pick<Project, 'id' | 'title' | 'description'>
          & { tags: Maybe<Array<Maybe<(
            { __typename?: 'Tag' }
            & Pick<Tag, 'id' | 'title'>
          )>>>, tasks: Maybe<Array<Maybe<(
            { __typename?: 'Task' }
            & Pick<Task, 'id' | 'title' | 'hours' | 'deadline' | 'content' | 'priority' | 'complete'>
          )>>>, boards: Maybe<Array<Maybe<(
            { __typename?: 'Board' }
            & Pick<Board, 'id' | 'title' | 'order'>
          )>>>, developers: Maybe<Array<Maybe<(
            { __typename?: 'Developer' }
            & Pick<Developer, 'id' | 'name' | 'availability'>
          )>>> }
        ), columns: Maybe<Array<Maybe<(
          { __typename?: 'Column' }
          & Pick<Column, 'id' | 'title'>
          & { board: (
            { __typename?: 'Board' }
            & Pick<Board, 'id' | 'title' | 'order'>
          ), tasks: Maybe<Array<Maybe<(
            { __typename?: 'Task' }
            & Pick<Task, 'id' | 'title' | 'hours' | 'deadline' | 'content' | 'priority' | 'complete'>
          )>>> }
        )>>> }
      ), tasks: Maybe<Array<Maybe<(
        { __typename?: 'Task' }
        & Pick<Task, 'id' | 'title' | 'hours' | 'deadline' | 'content' | 'priority' | 'complete'>
        & { project: (
          { __typename?: 'Project' }
          & Pick<Project, 'id' | 'title' | 'description'>
        ), column: Maybe<(
          { __typename?: 'Column' }
          & Pick<Column, 'id' | 'title'>
        )>, developers: Maybe<Array<Maybe<(
          { __typename?: 'Developer' }
          & Pick<Developer, 'id' | 'name' | 'availability'>
          & { project: (
            { __typename?: 'Project' }
            & Pick<Project, 'id' | 'title' | 'description'>
          ), user: Maybe<Array<Maybe<(
            { __typename?: 'User' }
            & Pick<User, 'id' | 'username' | 'password' | 'location'>
          )>>>, tags: Maybe<Array<Maybe<(
            { __typename?: 'Tag' }
            & Pick<Tag, 'id' | 'title'>
          )>>>, tasks: Maybe<Array<Maybe<(
            { __typename?: 'Task' }
            & Pick<Task, 'id' | 'title' | 'hours' | 'deadline' | 'content' | 'priority' | 'complete'>
          )>>>, liked: Maybe<Array<Maybe<(
            { __typename?: 'Task' }
            & Pick<Task, 'id' | 'title' | 'hours' | 'deadline' | 'content' | 'priority' | 'complete'>
          )>>> }
        )>>>, likes: Maybe<Array<Maybe<(
          { __typename?: 'Developer' }
          & Pick<Developer, 'id' | 'name' | 'availability'>
          & { project: (
            { __typename?: 'Project' }
            & Pick<Project, 'id' | 'title' | 'description'>
          ), user: Maybe<Array<Maybe<(
            { __typename?: 'User' }
            & Pick<User, 'id' | 'username' | 'password' | 'location'>
          )>>>, tags: Maybe<Array<Maybe<(
            { __typename?: 'Tag' }
            & Pick<Tag, 'id' | 'title'>
          )>>>, tasks: Maybe<Array<Maybe<(
            { __typename?: 'Task' }
            & Pick<Task, 'id' | 'title' | 'hours' | 'deadline' | 'content' | 'priority' | 'complete'>
          )>>>, liked: Maybe<Array<Maybe<(
            { __typename?: 'Task' }
            & Pick<Task, 'id' | 'title' | 'hours' | 'deadline' | 'content' | 'priority' | 'complete'>
          )>>> }
        )>>>, comments: Maybe<Array<Maybe<(
          { __typename?: 'Comment' }
          & Pick<Comment, 'id' | 'content'>
          & { task: (
            { __typename?: 'Task' }
            & Pick<Task, 'id' | 'title' | 'hours' | 'deadline' | 'content' | 'priority' | 'complete'>
          ), developer: (
            { __typename?: 'Developer' }
            & Pick<Developer, 'id' | 'name' | 'availability'>
          ) }
        )>>> }
      )>>> }
    )>>> }
  )> }
);

export type AddCommentMutationVariables = {
  filter?: Maybe<TagFilter>,
  order?: Maybe<TagOrder>,
  first?: Maybe<Scalars['Int']>,
  offset?: Maybe<Scalars['Int']>,
  filter1?: Maybe<TaskFilter>,
  order1?: Maybe<TaskOrder>,
  first1?: Maybe<Scalars['Int']>,
  offset1?: Maybe<Scalars['Int']>,
  filter2?: Maybe<BoardFilter>,
  order2?: Maybe<BoardOrder>,
  first2?: Maybe<Scalars['Int']>,
  offset2?: Maybe<Scalars['Int']>,
  filter3?: Maybe<DeveloperFilter>,
  order3?: Maybe<DeveloperOrder>,
  first3?: Maybe<Scalars['Int']>,
  offset3?: Maybe<Scalars['Int']>,
  filter4?: Maybe<ProjectFilter>,
  filter5?: Maybe<BoardFilter>,
  filter6?: Maybe<TaskFilter>,
  order4?: Maybe<TaskOrder>,
  first4?: Maybe<Scalars['Int']>,
  offset4?: Maybe<Scalars['Int']>,
  filter7?: Maybe<ColumnFilter>,
  filter8?: Maybe<ProjectFilter>,
  filter9?: Maybe<UserFilter>,
  order5?: Maybe<UserOrder>,
  first5?: Maybe<Scalars['Int']>,
  offset5?: Maybe<Scalars['Int']>,
  filter10?: Maybe<TagFilter>,
  order6?: Maybe<TagOrder>,
  first6?: Maybe<Scalars['Int']>,
  offset6?: Maybe<Scalars['Int']>,
  filter11?: Maybe<TaskFilter>,
  order7?: Maybe<TaskOrder>,
  first7?: Maybe<Scalars['Int']>,
  offset7?: Maybe<Scalars['Int']>,
  filter12?: Maybe<TaskFilter>,
  order8?: Maybe<TaskOrder>,
  first8?: Maybe<Scalars['Int']>,
  offset8?: Maybe<Scalars['Int']>,
  filter13?: Maybe<DeveloperFilter>,
  order9?: Maybe<DeveloperOrder>,
  first9?: Maybe<Scalars['Int']>,
  offset9?: Maybe<Scalars['Int']>,
  filter14?: Maybe<ProjectFilter>,
  filter15?: Maybe<UserFilter>,
  order10?: Maybe<UserOrder>,
  first10?: Maybe<Scalars['Int']>,
  offset10?: Maybe<Scalars['Int']>,
  filter16?: Maybe<TagFilter>,
  order11?: Maybe<TagOrder>,
  first11?: Maybe<Scalars['Int']>,
  offset11?: Maybe<Scalars['Int']>,
  filter17?: Maybe<TaskFilter>,
  order12?: Maybe<TaskOrder>,
  first12?: Maybe<Scalars['Int']>,
  offset12?: Maybe<Scalars['Int']>,
  filter18?: Maybe<TaskFilter>,
  order13?: Maybe<TaskOrder>,
  first13?: Maybe<Scalars['Int']>,
  offset13?: Maybe<Scalars['Int']>,
  filter19?: Maybe<DeveloperFilter>,
  order14?: Maybe<DeveloperOrder>,
  first14?: Maybe<Scalars['Int']>,
  offset14?: Maybe<Scalars['Int']>,
  filter20?: Maybe<TaskFilter>,
  filter21?: Maybe<DeveloperFilter>,
  filter22?: Maybe<CommentFilter>,
  order15?: Maybe<CommentOrder>,
  first15?: Maybe<Scalars['Int']>,
  offset15?: Maybe<Scalars['Int']>,
  filter23?: Maybe<TaskFilter>,
  filter24?: Maybe<ProjectFilter>,
  filter25?: Maybe<DeveloperFilter>,
  order16?: Maybe<DeveloperOrder>,
  first16?: Maybe<Scalars['Int']>,
  offset16?: Maybe<Scalars['Int']>,
  filter26?: Maybe<TaskFilter>,
  order17?: Maybe<TaskOrder>,
  first17?: Maybe<Scalars['Int']>,
  offset17?: Maybe<Scalars['Int']>,
  filter27?: Maybe<UserFilter>,
  order18?: Maybe<UserOrder>,
  first18?: Maybe<Scalars['Int']>,
  offset18?: Maybe<Scalars['Int']>,
  filter28?: Maybe<ProjectFilter>,
  filter29?: Maybe<DeveloperFilter>,
  order19?: Maybe<DeveloperOrder>,
  first19?: Maybe<Scalars['Int']>,
  offset19?: Maybe<Scalars['Int']>,
  filter30?: Maybe<TagFilter>,
  order20?: Maybe<TagOrder>,
  first20?: Maybe<Scalars['Int']>,
  offset20?: Maybe<Scalars['Int']>,
  filter31?: Maybe<ProjectFilter>,
  filter32?: Maybe<ColumnFilter>,
  filter33?: Maybe<DeveloperFilter>,
  order21?: Maybe<DeveloperOrder>,
  first21?: Maybe<Scalars['Int']>,
  offset21?: Maybe<Scalars['Int']>,
  filter34?: Maybe<DeveloperFilter>,
  order22?: Maybe<DeveloperOrder>,
  first22?: Maybe<Scalars['Int']>,
  offset22?: Maybe<Scalars['Int']>,
  filter35?: Maybe<CommentFilter>,
  order23?: Maybe<CommentOrder>,
  first23?: Maybe<Scalars['Int']>,
  offset23?: Maybe<Scalars['Int']>,
  filter36?: Maybe<TaskFilter>,
  order24?: Maybe<TaskOrder>,
  first24?: Maybe<Scalars['Int']>,
  offset24?: Maybe<Scalars['Int']>,
  filter37?: Maybe<ProjectFilter>,
  filter38?: Maybe<ColumnFilter>,
  filter39?: Maybe<DeveloperFilter>,
  order25?: Maybe<DeveloperOrder>,
  first25?: Maybe<Scalars['Int']>,
  offset25?: Maybe<Scalars['Int']>,
  filter40?: Maybe<DeveloperFilter>,
  order26?: Maybe<DeveloperOrder>,
  first26?: Maybe<Scalars['Int']>,
  offset26?: Maybe<Scalars['Int']>,
  filter41?: Maybe<CommentFilter>,
  order27?: Maybe<CommentOrder>,
  first27?: Maybe<Scalars['Int']>,
  offset27?: Maybe<Scalars['Int']>,
  filter42?: Maybe<TaskFilter>,
  order28?: Maybe<TaskOrder>,
  first28?: Maybe<Scalars['Int']>,
  offset28?: Maybe<Scalars['Int']>,
  filter43?: Maybe<DeveloperFilter>,
  filter44?: Maybe<CommentFilter>,
  order29?: Maybe<CommentOrder>,
  first29?: Maybe<Scalars['Int']>,
  offset29?: Maybe<Scalars['Int']>,
  input: Array<AddCommentInput>
};


export type AddCommentMutation = (
  { __typename?: 'Mutation' }
  & { addComment: Maybe<(
    { __typename?: 'AddCommentPayload' }
    & Pick<AddCommentPayload, 'numUids'>
    & { comment: Maybe<Array<Maybe<(
      { __typename?: 'Comment' }
      & Pick<Comment, 'id' | 'content'>
      & { task: (
        { __typename?: 'Task' }
        & Pick<Task, 'id' | 'title' | 'hours' | 'deadline' | 'content' | 'priority' | 'complete'>
        & { project: (
          { __typename?: 'Project' }
          & Pick<Project, 'id' | 'title' | 'description'>
          & { tags: Maybe<Array<Maybe<(
            { __typename?: 'Tag' }
            & Pick<Tag, 'id' | 'title'>
          )>>>, tasks: Maybe<Array<Maybe<(
            { __typename?: 'Task' }
            & Pick<Task, 'id' | 'title' | 'hours' | 'deadline' | 'content' | 'priority' | 'complete'>
          )>>>, boards: Maybe<Array<Maybe<(
            { __typename?: 'Board' }
            & Pick<Board, 'id' | 'title' | 'order'>
          )>>>, developers: Maybe<Array<Maybe<(
            { __typename?: 'Developer' }
            & Pick<Developer, 'id' | 'name' | 'availability'>
          )>>> }
        ), column: Maybe<(
          { __typename?: 'Column' }
          & Pick<Column, 'id' | 'title'>
          & { board: (
            { __typename?: 'Board' }
            & Pick<Board, 'id' | 'title' | 'order'>
          ), tasks: Maybe<Array<Maybe<(
            { __typename?: 'Task' }
            & Pick<Task, 'id' | 'title' | 'hours' | 'deadline' | 'content' | 'priority' | 'complete'>
          )>>> }
        )>, developers: Maybe<Array<Maybe<(
          { __typename?: 'Developer' }
          & Pick<Developer, 'id' | 'name' | 'availability'>
          & { project: (
            { __typename?: 'Project' }
            & Pick<Project, 'id' | 'title' | 'description'>
          ), user: Maybe<Array<Maybe<(
            { __typename?: 'User' }
            & Pick<User, 'id' | 'username' | 'password' | 'location'>
          )>>>, tags: Maybe<Array<Maybe<(
            { __typename?: 'Tag' }
            & Pick<Tag, 'id' | 'title'>
          )>>>, tasks: Maybe<Array<Maybe<(
            { __typename?: 'Task' }
            & Pick<Task, 'id' | 'title' | 'hours' | 'deadline' | 'content' | 'priority' | 'complete'>
          )>>>, liked: Maybe<Array<Maybe<(
            { __typename?: 'Task' }
            & Pick<Task, 'id' | 'title' | 'hours' | 'deadline' | 'content' | 'priority' | 'complete'>
          )>>> }
        )>>>, likes: Maybe<Array<Maybe<(
          { __typename?: 'Developer' }
          & Pick<Developer, 'id' | 'name' | 'availability'>
          & { project: (
            { __typename?: 'Project' }
            & Pick<Project, 'id' | 'title' | 'description'>
          ), user: Maybe<Array<Maybe<(
            { __typename?: 'User' }
            & Pick<User, 'id' | 'username' | 'password' | 'location'>
          )>>>, tags: Maybe<Array<Maybe<(
            { __typename?: 'Tag' }
            & Pick<Tag, 'id' | 'title'>
          )>>>, tasks: Maybe<Array<Maybe<(
            { __typename?: 'Task' }
            & Pick<Task, 'id' | 'title' | 'hours' | 'deadline' | 'content' | 'priority' | 'complete'>
          )>>>, liked: Maybe<Array<Maybe<(
            { __typename?: 'Task' }
            & Pick<Task, 'id' | 'title' | 'hours' | 'deadline' | 'content' | 'priority' | 'complete'>
          )>>> }
        )>>>, comments: Maybe<Array<Maybe<(
          { __typename?: 'Comment' }
          & Pick<Comment, 'id' | 'content'>
          & { task: (
            { __typename?: 'Task' }
            & Pick<Task, 'id' | 'title' | 'hours' | 'deadline' | 'content' | 'priority' | 'complete'>
          ), developer: (
            { __typename?: 'Developer' }
            & Pick<Developer, 'id' | 'name' | 'availability'>
          ) }
        )>>> }
      ), developer: (
        { __typename?: 'Developer' }
        & Pick<Developer, 'id' | 'name' | 'availability'>
        & { project: (
          { __typename?: 'Project' }
          & Pick<Project, 'id' | 'title' | 'description'>
        ), user: Maybe<Array<Maybe<(
          { __typename?: 'User' }
          & Pick<User, 'id' | 'username' | 'password' | 'location'>
          & { roles: Maybe<Array<Maybe<(
            { __typename?: 'Developer' }
            & Pick<Developer, 'id' | 'name' | 'availability'>
          )>>>, stars: Maybe<Array<Maybe<(
            { __typename?: 'Task' }
            & Pick<Task, 'id' | 'title' | 'hours' | 'deadline' | 'content' | 'priority' | 'complete'>
          )>>> }
        )>>>, tags: Maybe<Array<Maybe<(
          { __typename?: 'Tag' }
          & Pick<Tag, 'id' | 'title'>
          & { project: (
            { __typename?: 'Project' }
            & Pick<Project, 'id' | 'title' | 'description'>
          ), developers: Maybe<Array<Maybe<(
            { __typename?: 'Developer' }
            & Pick<Developer, 'id' | 'name' | 'availability'>
          )>>> }
        )>>>, tasks: Maybe<Array<Maybe<(
          { __typename?: 'Task' }
          & Pick<Task, 'id' | 'title' | 'hours' | 'deadline' | 'content' | 'priority' | 'complete'>
          & { project: (
            { __typename?: 'Project' }
            & Pick<Project, 'id' | 'title' | 'description'>
          ), column: Maybe<(
            { __typename?: 'Column' }
            & Pick<Column, 'id' | 'title'>
          )>, developers: Maybe<Array<Maybe<(
            { __typename?: 'Developer' }
            & Pick<Developer, 'id' | 'name' | 'availability'>
          )>>>, likes: Maybe<Array<Maybe<(
            { __typename?: 'Developer' }
            & Pick<Developer, 'id' | 'name' | 'availability'>
          )>>>, comments: Maybe<Array<Maybe<(
            { __typename?: 'Comment' }
            & Pick<Comment, 'id' | 'content'>
          )>>> }
        )>>>, liked: Maybe<Array<Maybe<(
          { __typename?: 'Task' }
          & Pick<Task, 'id' | 'title' | 'hours' | 'deadline' | 'content' | 'priority' | 'complete'>
          & { project: (
            { __typename?: 'Project' }
            & Pick<Project, 'id' | 'title' | 'description'>
          ), column: Maybe<(
            { __typename?: 'Column' }
            & Pick<Column, 'id' | 'title'>
          )>, developers: Maybe<Array<Maybe<(
            { __typename?: 'Developer' }
            & Pick<Developer, 'id' | 'name' | 'availability'>
          )>>>, likes: Maybe<Array<Maybe<(
            { __typename?: 'Developer' }
            & Pick<Developer, 'id' | 'name' | 'availability'>
          )>>>, comments: Maybe<Array<Maybe<(
            { __typename?: 'Comment' }
            & Pick<Comment, 'id' | 'content'>
          )>>> }
        )>>> }
      ) }
    )>>> }
  )> }
);

export type AddDeveloperMutationVariables = {
  filter?: Maybe<ProjectFilter>,
  filter1?: Maybe<DeveloperFilter>,
  order?: Maybe<DeveloperOrder>,
  first?: Maybe<Scalars['Int']>,
  offset?: Maybe<Scalars['Int']>,
  filter2?: Maybe<TagFilter>,
  order1?: Maybe<TagOrder>,
  first1?: Maybe<Scalars['Int']>,
  offset1?: Maybe<Scalars['Int']>,
  filter3?: Maybe<ProjectFilter>,
  filter4?: Maybe<ColumnFilter>,
  filter5?: Maybe<DeveloperFilter>,
  order2?: Maybe<DeveloperOrder>,
  first2?: Maybe<Scalars['Int']>,
  offset2?: Maybe<Scalars['Int']>,
  filter6?: Maybe<DeveloperFilter>,
  order3?: Maybe<DeveloperOrder>,
  first3?: Maybe<Scalars['Int']>,
  offset3?: Maybe<Scalars['Int']>,
  filter7?: Maybe<CommentFilter>,
  order4?: Maybe<CommentOrder>,
  first4?: Maybe<Scalars['Int']>,
  offset4?: Maybe<Scalars['Int']>,
  filter8?: Maybe<TaskFilter>,
  order5?: Maybe<TaskOrder>,
  first5?: Maybe<Scalars['Int']>,
  offset5?: Maybe<Scalars['Int']>,
  filter9?: Maybe<ProjectFilter>,
  filter10?: Maybe<ColumnFilter>,
  order6?: Maybe<ColumnOrder>,
  first6?: Maybe<Scalars['Int']>,
  offset6?: Maybe<Scalars['Int']>,
  filter11?: Maybe<BoardFilter>,
  order7?: Maybe<BoardOrder>,
  first7?: Maybe<Scalars['Int']>,
  offset7?: Maybe<Scalars['Int']>,
  filter12?: Maybe<ProjectFilter>,
  filter13?: Maybe<UserFilter>,
  order8?: Maybe<UserOrder>,
  first8?: Maybe<Scalars['Int']>,
  offset8?: Maybe<Scalars['Int']>,
  filter14?: Maybe<TagFilter>,
  order9?: Maybe<TagOrder>,
  first9?: Maybe<Scalars['Int']>,
  offset9?: Maybe<Scalars['Int']>,
  filter15?: Maybe<TaskFilter>,
  order10?: Maybe<TaskOrder>,
  first10?: Maybe<Scalars['Int']>,
  offset10?: Maybe<Scalars['Int']>,
  filter16?: Maybe<TaskFilter>,
  order11?: Maybe<TaskOrder>,
  first11?: Maybe<Scalars['Int']>,
  offset11?: Maybe<Scalars['Int']>,
  filter17?: Maybe<DeveloperFilter>,
  order12?: Maybe<DeveloperOrder>,
  first12?: Maybe<Scalars['Int']>,
  offset12?: Maybe<Scalars['Int']>,
  filter18?: Maybe<ProjectFilter>,
  filter19?: Maybe<ProjectFilter>,
  filter20?: Maybe<UserFilter>,
  order13?: Maybe<UserOrder>,
  first13?: Maybe<Scalars['Int']>,
  offset13?: Maybe<Scalars['Int']>,
  filter21?: Maybe<TagFilter>,
  order14?: Maybe<TagOrder>,
  first14?: Maybe<Scalars['Int']>,
  offset14?: Maybe<Scalars['Int']>,
  filter22?: Maybe<TaskFilter>,
  order15?: Maybe<TaskOrder>,
  first15?: Maybe<Scalars['Int']>,
  offset15?: Maybe<Scalars['Int']>,
  filter23?: Maybe<TaskFilter>,
  order16?: Maybe<TaskOrder>,
  first16?: Maybe<Scalars['Int']>,
  offset16?: Maybe<Scalars['Int']>,
  filter24?: Maybe<DeveloperFilter>,
  order17?: Maybe<DeveloperOrder>,
  first17?: Maybe<Scalars['Int']>,
  offset17?: Maybe<Scalars['Int']>,
  filter25?: Maybe<ProjectFilter>,
  filter26?: Maybe<ColumnFilter>,
  filter27?: Maybe<DeveloperFilter>,
  order18?: Maybe<DeveloperOrder>,
  first18?: Maybe<Scalars['Int']>,
  offset18?: Maybe<Scalars['Int']>,
  filter28?: Maybe<DeveloperFilter>,
  order19?: Maybe<DeveloperOrder>,
  first19?: Maybe<Scalars['Int']>,
  offset19?: Maybe<Scalars['Int']>,
  filter29?: Maybe<CommentFilter>,
  order20?: Maybe<CommentOrder>,
  first20?: Maybe<Scalars['Int']>,
  offset20?: Maybe<Scalars['Int']>,
  filter30?: Maybe<TaskFilter>,
  order21?: Maybe<TaskOrder>,
  first21?: Maybe<Scalars['Int']>,
  offset21?: Maybe<Scalars['Int']>,
  filter31?: Maybe<UserFilter>,
  order22?: Maybe<UserOrder>,
  first22?: Maybe<Scalars['Int']>,
  offset22?: Maybe<Scalars['Int']>,
  filter32?: Maybe<TagFilter>,
  order23?: Maybe<TagOrder>,
  first23?: Maybe<Scalars['Int']>,
  offset23?: Maybe<Scalars['Int']>,
  filter33?: Maybe<TaskFilter>,
  order24?: Maybe<TaskOrder>,
  first24?: Maybe<Scalars['Int']>,
  offset24?: Maybe<Scalars['Int']>,
  filter34?: Maybe<ProjectFilter>,
  filter35?: Maybe<BoardFilter>,
  filter36?: Maybe<TaskFilter>,
  order25?: Maybe<TaskOrder>,
  first25?: Maybe<Scalars['Int']>,
  offset25?: Maybe<Scalars['Int']>,
  filter37?: Maybe<ColumnFilter>,
  filter38?: Maybe<DeveloperFilter>,
  order26?: Maybe<DeveloperOrder>,
  first26?: Maybe<Scalars['Int']>,
  offset26?: Maybe<Scalars['Int']>,
  filter39?: Maybe<ProjectFilter>,
  filter40?: Maybe<UserFilter>,
  order27?: Maybe<UserOrder>,
  first27?: Maybe<Scalars['Int']>,
  offset27?: Maybe<Scalars['Int']>,
  filter41?: Maybe<TagFilter>,
  order28?: Maybe<TagOrder>,
  first28?: Maybe<Scalars['Int']>,
  offset28?: Maybe<Scalars['Int']>,
  filter42?: Maybe<TaskFilter>,
  order29?: Maybe<TaskOrder>,
  first29?: Maybe<Scalars['Int']>,
  offset29?: Maybe<Scalars['Int']>,
  filter43?: Maybe<TaskFilter>,
  order30?: Maybe<TaskOrder>,
  first30?: Maybe<Scalars['Int']>,
  offset30?: Maybe<Scalars['Int']>,
  filter44?: Maybe<DeveloperFilter>,
  order31?: Maybe<DeveloperOrder>,
  first31?: Maybe<Scalars['Int']>,
  offset31?: Maybe<Scalars['Int']>,
  filter45?: Maybe<TaskFilter>,
  filter46?: Maybe<DeveloperFilter>,
  filter47?: Maybe<CommentFilter>,
  order32?: Maybe<CommentOrder>,
  first32?: Maybe<Scalars['Int']>,
  offset32?: Maybe<Scalars['Int']>,
  filter48?: Maybe<TaskFilter>,
  order33?: Maybe<TaskOrder>,
  first33?: Maybe<Scalars['Int']>,
  offset33?: Maybe<Scalars['Int']>,
  filter49?: Maybe<DeveloperFilter>,
  order34?: Maybe<DeveloperOrder>,
  first34?: Maybe<Scalars['Int']>,
  offset34?: Maybe<Scalars['Int']>,
  input: Array<AddDeveloperInput>
};


export type AddDeveloperMutation = (
  { __typename?: 'Mutation' }
  & { addDeveloper: Maybe<(
    { __typename?: 'AddDeveloperPayload' }
    & Pick<AddDeveloperPayload, 'numUids'>
    & { developer: Maybe<Array<Maybe<(
      { __typename?: 'Developer' }
      & Pick<Developer, 'id' | 'name' | 'availability'>
      & { project: (
        { __typename?: 'Project' }
        & Pick<Project, 'id' | 'title' | 'description'>
        & { tags: Maybe<Array<Maybe<(
          { __typename?: 'Tag' }
          & Pick<Tag, 'id' | 'title'>
          & { project: (
            { __typename?: 'Project' }
            & Pick<Project, 'id' | 'title' | 'description'>
          ), developers: Maybe<Array<Maybe<(
            { __typename?: 'Developer' }
            & Pick<Developer, 'id' | 'name' | 'availability'>
          )>>> }
        )>>>, tasks: Maybe<Array<Maybe<(
          { __typename?: 'Task' }
          & Pick<Task, 'id' | 'title' | 'hours' | 'deadline' | 'content' | 'priority' | 'complete'>
          & { project: (
            { __typename?: 'Project' }
            & Pick<Project, 'id' | 'title' | 'description'>
          ), column: Maybe<(
            { __typename?: 'Column' }
            & Pick<Column, 'id' | 'title'>
          )>, developers: Maybe<Array<Maybe<(
            { __typename?: 'Developer' }
            & Pick<Developer, 'id' | 'name' | 'availability'>
          )>>>, likes: Maybe<Array<Maybe<(
            { __typename?: 'Developer' }
            & Pick<Developer, 'id' | 'name' | 'availability'>
          )>>>, comments: Maybe<Array<Maybe<(
            { __typename?: 'Comment' }
            & Pick<Comment, 'id' | 'content'>
          )>>> }
        )>>>, boards: Maybe<Array<Maybe<(
          { __typename?: 'Board' }
          & Pick<Board, 'id' | 'title' | 'order'>
          & { project: (
            { __typename?: 'Project' }
            & Pick<Project, 'id' | 'title' | 'description'>
          ), columns: Maybe<Array<Maybe<(
            { __typename?: 'Column' }
            & Pick<Column, 'id' | 'title'>
          )>>> }
        )>>>, developers: Maybe<Array<Maybe<(
          { __typename?: 'Developer' }
          & Pick<Developer, 'id' | 'name' | 'availability'>
          & { project: (
            { __typename?: 'Project' }
            & Pick<Project, 'id' | 'title' | 'description'>
          ), user: Maybe<Array<Maybe<(
            { __typename?: 'User' }
            & Pick<User, 'id' | 'username' | 'password' | 'location'>
          )>>>, tags: Maybe<Array<Maybe<(
            { __typename?: 'Tag' }
            & Pick<Tag, 'id' | 'title'>
          )>>>, tasks: Maybe<Array<Maybe<(
            { __typename?: 'Task' }
            & Pick<Task, 'id' | 'title' | 'hours' | 'deadline' | 'content' | 'priority' | 'complete'>
          )>>>, liked: Maybe<Array<Maybe<(
            { __typename?: 'Task' }
            & Pick<Task, 'id' | 'title' | 'hours' | 'deadline' | 'content' | 'priority' | 'complete'>
          )>>> }
        )>>> }
      ), user: Maybe<Array<Maybe<(
        { __typename?: 'User' }
        & Pick<User, 'id' | 'username' | 'password' | 'location'>
        & { roles: Maybe<Array<Maybe<(
          { __typename?: 'Developer' }
          & Pick<Developer, 'id' | 'name' | 'availability'>
          & { project: (
            { __typename?: 'Project' }
            & Pick<Project, 'id' | 'title' | 'description'>
          ), user: Maybe<Array<Maybe<(
            { __typename?: 'User' }
            & Pick<User, 'id' | 'username' | 'password' | 'location'>
          )>>>, tags: Maybe<Array<Maybe<(
            { __typename?: 'Tag' }
            & Pick<Tag, 'id' | 'title'>
          )>>>, tasks: Maybe<Array<Maybe<(
            { __typename?: 'Task' }
            & Pick<Task, 'id' | 'title' | 'hours' | 'deadline' | 'content' | 'priority' | 'complete'>
          )>>>, liked: Maybe<Array<Maybe<(
            { __typename?: 'Task' }
            & Pick<Task, 'id' | 'title' | 'hours' | 'deadline' | 'content' | 'priority' | 'complete'>
          )>>> }
        )>>>, stars: Maybe<Array<Maybe<(
          { __typename?: 'Task' }
          & Pick<Task, 'id' | 'title' | 'hours' | 'deadline' | 'content' | 'priority' | 'complete'>
          & { project: (
            { __typename?: 'Project' }
            & Pick<Project, 'id' | 'title' | 'description'>
          ), column: Maybe<(
            { __typename?: 'Column' }
            & Pick<Column, 'id' | 'title'>
          )>, developers: Maybe<Array<Maybe<(
            { __typename?: 'Developer' }
            & Pick<Developer, 'id' | 'name' | 'availability'>
          )>>>, likes: Maybe<Array<Maybe<(
            { __typename?: 'Developer' }
            & Pick<Developer, 'id' | 'name' | 'availability'>
          )>>>, comments: Maybe<Array<Maybe<(
            { __typename?: 'Comment' }
            & Pick<Comment, 'id' | 'content'>
          )>>> }
        )>>> }
      )>>>, tags: Maybe<Array<Maybe<(
        { __typename?: 'Tag' }
        & Pick<Tag, 'id' | 'title'>
      )>>>, tasks: Maybe<Array<Maybe<(
        { __typename?: 'Task' }
        & Pick<Task, 'id' | 'title' | 'hours' | 'deadline' | 'content' | 'priority' | 'complete'>
      )>>>, liked: Maybe<Array<Maybe<(
        { __typename?: 'Task' }
        & Pick<Task, 'id' | 'title' | 'hours' | 'deadline' | 'content' | 'priority' | 'complete'>
        & { project: (
          { __typename?: 'Project' }
          & Pick<Project, 'id' | 'title' | 'description'>
        ), column: Maybe<(
          { __typename?: 'Column' }
          & Pick<Column, 'id' | 'title'>
          & { board: (
            { __typename?: 'Board' }
            & Pick<Board, 'id' | 'title' | 'order'>
          ), tasks: Maybe<Array<Maybe<(
            { __typename?: 'Task' }
            & Pick<Task, 'id' | 'title' | 'hours' | 'deadline' | 'content' | 'priority' | 'complete'>
          )>>> }
        )>, developers: Maybe<Array<Maybe<(
          { __typename?: 'Developer' }
          & Pick<Developer, 'id' | 'name' | 'availability'>
        )>>>, likes: Maybe<Array<Maybe<(
          { __typename?: 'Developer' }
          & Pick<Developer, 'id' | 'name' | 'availability'>
          & { project: (
            { __typename?: 'Project' }
            & Pick<Project, 'id' | 'title' | 'description'>
          ), user: Maybe<Array<Maybe<(
            { __typename?: 'User' }
            & Pick<User, 'id' | 'username' | 'password' | 'location'>
          )>>>, tags: Maybe<Array<Maybe<(
            { __typename?: 'Tag' }
            & Pick<Tag, 'id' | 'title'>
          )>>>, tasks: Maybe<Array<Maybe<(
            { __typename?: 'Task' }
            & Pick<Task, 'id' | 'title' | 'hours' | 'deadline' | 'content' | 'priority' | 'complete'>
          )>>>, liked: Maybe<Array<Maybe<(
            { __typename?: 'Task' }
            & Pick<Task, 'id' | 'title' | 'hours' | 'deadline' | 'content' | 'priority' | 'complete'>
          )>>> }
        )>>>, comments: Maybe<Array<Maybe<(
          { __typename?: 'Comment' }
          & Pick<Comment, 'id' | 'content'>
          & { task: (
            { __typename?: 'Task' }
            & Pick<Task, 'id' | 'title' | 'hours' | 'deadline' | 'content' | 'priority' | 'complete'>
          ), developer: (
            { __typename?: 'Developer' }
            & Pick<Developer, 'id' | 'name' | 'availability'>
          ) }
        )>>> }
      )>>> }
    )>>> }
  )> }
);

export type AddProjectMutationVariables = {
  filter?: Maybe<TaskFilter>,
  order?: Maybe<TaskOrder>,
  first?: Maybe<Scalars['Int']>,
  offset?: Maybe<Scalars['Int']>,
  filter1?: Maybe<BoardFilter>,
  order1?: Maybe<BoardOrder>,
  first1?: Maybe<Scalars['Int']>,
  offset1?: Maybe<Scalars['Int']>,
  filter2?: Maybe<DeveloperFilter>,
  order2?: Maybe<DeveloperOrder>,
  first2?: Maybe<Scalars['Int']>,
  offset2?: Maybe<Scalars['Int']>,
  filter3?: Maybe<ProjectFilter>,
  filter4?: Maybe<ProjectFilter>,
  filter5?: Maybe<UserFilter>,
  order3?: Maybe<UserOrder>,
  first3?: Maybe<Scalars['Int']>,
  offset3?: Maybe<Scalars['Int']>,
  filter6?: Maybe<TagFilter>,
  order4?: Maybe<TagOrder>,
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
  filter9?: Maybe<DeveloperFilter>,
  order7?: Maybe<DeveloperOrder>,
  first7?: Maybe<Scalars['Int']>,
  offset7?: Maybe<Scalars['Int']>,
  filter10?: Maybe<TagFilter>,
  order8?: Maybe<TagOrder>,
  first8?: Maybe<Scalars['Int']>,
  offset8?: Maybe<Scalars['Int']>,
  filter11?: Maybe<ProjectFilter>,
  order9?: Maybe<ProjectOrder>,
  first9?: Maybe<Scalars['Int']>,
  offset9?: Maybe<Scalars['Int']>,
  input: Array<AddProjectInput>
};


export type AddProjectMutation = (
  { __typename?: 'Mutation' }
  & { addProject: Maybe<(
    { __typename?: 'AddProjectPayload' }
    & Pick<AddProjectPayload, 'numUids'>
    & { project: Maybe<Array<Maybe<(
      { __typename?: 'Project' }
      & Pick<Project, 'id' | 'title' | 'description'>
      & { tags: Maybe<Array<Maybe<(
        { __typename?: 'Tag' }
        & Pick<Tag, 'id' | 'title'>
        & { project: (
          { __typename?: 'Project' }
          & Pick<Project, 'id' | 'title' | 'description'>
          & { tasks: Maybe<Array<Maybe<(
            { __typename?: 'Task' }
            & Pick<Task, 'id' | 'title' | 'hours' | 'deadline' | 'content' | 'priority' | 'complete'>
          )>>>, boards: Maybe<Array<Maybe<(
            { __typename?: 'Board' }
            & Pick<Board, 'id' | 'title' | 'order'>
          )>>>, developers: Maybe<Array<Maybe<(
            { __typename?: 'Developer' }
            & Pick<Developer, 'id' | 'name' | 'availability'>
          )>>> }
        ), developers: Maybe<Array<Maybe<(
          { __typename?: 'Developer' }
          & Pick<Developer, 'id' | 'name' | 'availability'>
          & { project: (
            { __typename?: 'Project' }
            & Pick<Project, 'id' | 'title' | 'description'>
          ), user: Maybe<Array<Maybe<(
            { __typename?: 'User' }
            & Pick<User, 'id' | 'username' | 'password' | 'location'>
          )>>>, tags: Maybe<Array<Maybe<(
            { __typename?: 'Tag' }
            & Pick<Tag, 'id' | 'title'>
          )>>>, tasks: Maybe<Array<Maybe<(
            { __typename?: 'Task' }
            & Pick<Task, 'id' | 'title' | 'hours' | 'deadline' | 'content' | 'priority' | 'complete'>
          )>>>, liked: Maybe<Array<Maybe<(
            { __typename?: 'Task' }
            & Pick<Task, 'id' | 'title' | 'hours' | 'deadline' | 'content' | 'priority' | 'complete'>
          )>>> }
        )>>> }
      )>>> }
    )>>> }
  )> }
);

export type AddTagMutationVariables = {
  filter?: Maybe<ProjectFilter>,
  filter1?: Maybe<DeveloperFilter>,
  order?: Maybe<DeveloperOrder>,
  first?: Maybe<Scalars['Int']>,
  offset?: Maybe<Scalars['Int']>,
  filter2?: Maybe<TagFilter>,
  order1?: Maybe<TagOrder>,
  first1?: Maybe<Scalars['Int']>,
  offset1?: Maybe<Scalars['Int']>,
  filter3?: Maybe<ProjectFilter>,
  filter4?: Maybe<ColumnFilter>,
  filter5?: Maybe<DeveloperFilter>,
  order2?: Maybe<DeveloperOrder>,
  first2?: Maybe<Scalars['Int']>,
  offset2?: Maybe<Scalars['Int']>,
  filter6?: Maybe<DeveloperFilter>,
  order3?: Maybe<DeveloperOrder>,
  first3?: Maybe<Scalars['Int']>,
  offset3?: Maybe<Scalars['Int']>,
  filter7?: Maybe<CommentFilter>,
  order4?: Maybe<CommentOrder>,
  first4?: Maybe<Scalars['Int']>,
  offset4?: Maybe<Scalars['Int']>,
  filter8?: Maybe<TaskFilter>,
  order5?: Maybe<TaskOrder>,
  first5?: Maybe<Scalars['Int']>,
  offset5?: Maybe<Scalars['Int']>,
  filter9?: Maybe<ProjectFilter>,
  filter10?: Maybe<ColumnFilter>,
  order6?: Maybe<ColumnOrder>,
  first6?: Maybe<Scalars['Int']>,
  offset6?: Maybe<Scalars['Int']>,
  filter11?: Maybe<BoardFilter>,
  order7?: Maybe<BoardOrder>,
  first7?: Maybe<Scalars['Int']>,
  offset7?: Maybe<Scalars['Int']>,
  filter12?: Maybe<ProjectFilter>,
  filter13?: Maybe<UserFilter>,
  order8?: Maybe<UserOrder>,
  first8?: Maybe<Scalars['Int']>,
  offset8?: Maybe<Scalars['Int']>,
  filter14?: Maybe<TagFilter>,
  order9?: Maybe<TagOrder>,
  first9?: Maybe<Scalars['Int']>,
  offset9?: Maybe<Scalars['Int']>,
  filter15?: Maybe<TaskFilter>,
  order10?: Maybe<TaskOrder>,
  first10?: Maybe<Scalars['Int']>,
  offset10?: Maybe<Scalars['Int']>,
  filter16?: Maybe<TaskFilter>,
  order11?: Maybe<TaskOrder>,
  first11?: Maybe<Scalars['Int']>,
  offset11?: Maybe<Scalars['Int']>,
  filter17?: Maybe<DeveloperFilter>,
  order12?: Maybe<DeveloperOrder>,
  first12?: Maybe<Scalars['Int']>,
  offset12?: Maybe<Scalars['Int']>,
  filter18?: Maybe<ProjectFilter>,
  filter19?: Maybe<DeveloperFilter>,
  order13?: Maybe<DeveloperOrder>,
  first13?: Maybe<Scalars['Int']>,
  offset13?: Maybe<Scalars['Int']>,
  filter20?: Maybe<TagFilter>,
  order14?: Maybe<TagOrder>,
  first14?: Maybe<Scalars['Int']>,
  offset14?: Maybe<Scalars['Int']>,
  input: Array<AddTagInput>
};


export type AddTagMutation = (
  { __typename?: 'Mutation' }
  & { addTag: Maybe<(
    { __typename?: 'AddTagPayload' }
    & Pick<AddTagPayload, 'numUids'>
    & { tag: Maybe<Array<Maybe<(
      { __typename?: 'Tag' }
      & Pick<Tag, 'id' | 'title'>
      & { project: (
        { __typename?: 'Project' }
        & Pick<Project, 'id' | 'title' | 'description'>
        & { tags: Maybe<Array<Maybe<(
          { __typename?: 'Tag' }
          & Pick<Tag, 'id' | 'title'>
          & { project: (
            { __typename?: 'Project' }
            & Pick<Project, 'id' | 'title' | 'description'>
          ), developers: Maybe<Array<Maybe<(
            { __typename?: 'Developer' }
            & Pick<Developer, 'id' | 'name' | 'availability'>
          )>>> }
        )>>>, tasks: Maybe<Array<Maybe<(
          { __typename?: 'Task' }
          & Pick<Task, 'id' | 'title' | 'hours' | 'deadline' | 'content' | 'priority' | 'complete'>
          & { project: (
            { __typename?: 'Project' }
            & Pick<Project, 'id' | 'title' | 'description'>
          ), column: Maybe<(
            { __typename?: 'Column' }
            & Pick<Column, 'id' | 'title'>
          )>, developers: Maybe<Array<Maybe<(
            { __typename?: 'Developer' }
            & Pick<Developer, 'id' | 'name' | 'availability'>
          )>>>, likes: Maybe<Array<Maybe<(
            { __typename?: 'Developer' }
            & Pick<Developer, 'id' | 'name' | 'availability'>
          )>>>, comments: Maybe<Array<Maybe<(
            { __typename?: 'Comment' }
            & Pick<Comment, 'id' | 'content'>
          )>>> }
        )>>>, boards: Maybe<Array<Maybe<(
          { __typename?: 'Board' }
          & Pick<Board, 'id' | 'title' | 'order'>
          & { project: (
            { __typename?: 'Project' }
            & Pick<Project, 'id' | 'title' | 'description'>
          ), columns: Maybe<Array<Maybe<(
            { __typename?: 'Column' }
            & Pick<Column, 'id' | 'title'>
          )>>> }
        )>>>, developers: Maybe<Array<Maybe<(
          { __typename?: 'Developer' }
          & Pick<Developer, 'id' | 'name' | 'availability'>
          & { project: (
            { __typename?: 'Project' }
            & Pick<Project, 'id' | 'title' | 'description'>
          ), user: Maybe<Array<Maybe<(
            { __typename?: 'User' }
            & Pick<User, 'id' | 'username' | 'password' | 'location'>
          )>>>, tags: Maybe<Array<Maybe<(
            { __typename?: 'Tag' }
            & Pick<Tag, 'id' | 'title'>
          )>>>, tasks: Maybe<Array<Maybe<(
            { __typename?: 'Task' }
            & Pick<Task, 'id' | 'title' | 'hours' | 'deadline' | 'content' | 'priority' | 'complete'>
          )>>>, liked: Maybe<Array<Maybe<(
            { __typename?: 'Task' }
            & Pick<Task, 'id' | 'title' | 'hours' | 'deadline' | 'content' | 'priority' | 'complete'>
          )>>> }
        )>>> }
      ), developers: Maybe<Array<Maybe<(
        { __typename?: 'Developer' }
        & Pick<Developer, 'id' | 'name' | 'availability'>
      )>>> }
    )>>> }
  )> }
);

export type AddTaskMutationVariables = {
  filter?: Maybe<ProjectFilter>,
  filter1?: Maybe<DeveloperFilter>,
  order?: Maybe<DeveloperOrder>,
  first?: Maybe<Scalars['Int']>,
  offset?: Maybe<Scalars['Int']>,
  filter2?: Maybe<TagFilter>,
  order1?: Maybe<TagOrder>,
  first1?: Maybe<Scalars['Int']>,
  offset1?: Maybe<Scalars['Int']>,
  filter3?: Maybe<ProjectFilter>,
  filter4?: Maybe<ColumnFilter>,
  filter5?: Maybe<DeveloperFilter>,
  order2?: Maybe<DeveloperOrder>,
  first2?: Maybe<Scalars['Int']>,
  offset2?: Maybe<Scalars['Int']>,
  filter6?: Maybe<DeveloperFilter>,
  order3?: Maybe<DeveloperOrder>,
  first3?: Maybe<Scalars['Int']>,
  offset3?: Maybe<Scalars['Int']>,
  filter7?: Maybe<CommentFilter>,
  order4?: Maybe<CommentOrder>,
  first4?: Maybe<Scalars['Int']>,
  offset4?: Maybe<Scalars['Int']>,
  filter8?: Maybe<TaskFilter>,
  order5?: Maybe<TaskOrder>,
  first5?: Maybe<Scalars['Int']>,
  offset5?: Maybe<Scalars['Int']>,
  filter9?: Maybe<ProjectFilter>,
  filter10?: Maybe<ColumnFilter>,
  order6?: Maybe<ColumnOrder>,
  first6?: Maybe<Scalars['Int']>,
  offset6?: Maybe<Scalars['Int']>,
  filter11?: Maybe<BoardFilter>,
  order7?: Maybe<BoardOrder>,
  first7?: Maybe<Scalars['Int']>,
  offset7?: Maybe<Scalars['Int']>,
  filter12?: Maybe<ProjectFilter>,
  filter13?: Maybe<UserFilter>,
  order8?: Maybe<UserOrder>,
  first8?: Maybe<Scalars['Int']>,
  offset8?: Maybe<Scalars['Int']>,
  filter14?: Maybe<TagFilter>,
  order9?: Maybe<TagOrder>,
  first9?: Maybe<Scalars['Int']>,
  offset9?: Maybe<Scalars['Int']>,
  filter15?: Maybe<TaskFilter>,
  order10?: Maybe<TaskOrder>,
  first10?: Maybe<Scalars['Int']>,
  offset10?: Maybe<Scalars['Int']>,
  filter16?: Maybe<TaskFilter>,
  order11?: Maybe<TaskOrder>,
  first11?: Maybe<Scalars['Int']>,
  offset11?: Maybe<Scalars['Int']>,
  filter17?: Maybe<DeveloperFilter>,
  order12?: Maybe<DeveloperOrder>,
  first12?: Maybe<Scalars['Int']>,
  offset12?: Maybe<Scalars['Int']>,
  filter18?: Maybe<ProjectFilter>,
  filter19?: Maybe<ProjectFilter>,
  filter20?: Maybe<ColumnFilter>,
  order13?: Maybe<ColumnOrder>,
  first13?: Maybe<Scalars['Int']>,
  offset13?: Maybe<Scalars['Int']>,
  filter21?: Maybe<BoardFilter>,
  filter22?: Maybe<TaskFilter>,
  order14?: Maybe<TaskOrder>,
  first14?: Maybe<Scalars['Int']>,
  offset14?: Maybe<Scalars['Int']>,
  filter23?: Maybe<ColumnFilter>,
  filter24?: Maybe<DeveloperFilter>,
  order15?: Maybe<DeveloperOrder>,
  first15?: Maybe<Scalars['Int']>,
  offset15?: Maybe<Scalars['Int']>,
  filter25?: Maybe<ProjectFilter>,
  filter26?: Maybe<DeveloperFilter>,
  order16?: Maybe<DeveloperOrder>,
  first16?: Maybe<Scalars['Int']>,
  offset16?: Maybe<Scalars['Int']>,
  filter27?: Maybe<TaskFilter>,
  order17?: Maybe<TaskOrder>,
  first17?: Maybe<Scalars['Int']>,
  offset17?: Maybe<Scalars['Int']>,
  filter28?: Maybe<UserFilter>,
  order18?: Maybe<UserOrder>,
  first18?: Maybe<Scalars['Int']>,
  offset18?: Maybe<Scalars['Int']>,
  filter29?: Maybe<TagFilter>,
  order19?: Maybe<TagOrder>,
  first19?: Maybe<Scalars['Int']>,
  offset19?: Maybe<Scalars['Int']>,
  filter30?: Maybe<TaskFilter>,
  order20?: Maybe<TaskOrder>,
  first20?: Maybe<Scalars['Int']>,
  offset20?: Maybe<Scalars['Int']>,
  filter31?: Maybe<ProjectFilter>,
  filter32?: Maybe<ColumnFilter>,
  filter33?: Maybe<DeveloperFilter>,
  order21?: Maybe<DeveloperOrder>,
  first21?: Maybe<Scalars['Int']>,
  offset21?: Maybe<Scalars['Int']>,
  filter34?: Maybe<DeveloperFilter>,
  order22?: Maybe<DeveloperOrder>,
  first22?: Maybe<Scalars['Int']>,
  offset22?: Maybe<Scalars['Int']>,
  filter35?: Maybe<CommentFilter>,
  order23?: Maybe<CommentOrder>,
  first23?: Maybe<Scalars['Int']>,
  offset23?: Maybe<Scalars['Int']>,
  filter36?: Maybe<TaskFilter>,
  order24?: Maybe<TaskOrder>,
  first24?: Maybe<Scalars['Int']>,
  offset24?: Maybe<Scalars['Int']>,
  filter37?: Maybe<DeveloperFilter>,
  order25?: Maybe<DeveloperOrder>,
  first25?: Maybe<Scalars['Int']>,
  offset25?: Maybe<Scalars['Int']>,
  filter38?: Maybe<TaskFilter>,
  filter39?: Maybe<ProjectFilter>,
  filter40?: Maybe<UserFilter>,
  order26?: Maybe<UserOrder>,
  first26?: Maybe<Scalars['Int']>,
  offset26?: Maybe<Scalars['Int']>,
  filter41?: Maybe<TagFilter>,
  order27?: Maybe<TagOrder>,
  first27?: Maybe<Scalars['Int']>,
  offset27?: Maybe<Scalars['Int']>,
  filter42?: Maybe<TaskFilter>,
  order28?: Maybe<TaskOrder>,
  first28?: Maybe<Scalars['Int']>,
  offset28?: Maybe<Scalars['Int']>,
  filter43?: Maybe<TaskFilter>,
  order29?: Maybe<TaskOrder>,
  first29?: Maybe<Scalars['Int']>,
  offset29?: Maybe<Scalars['Int']>,
  filter44?: Maybe<DeveloperFilter>,
  filter45?: Maybe<CommentFilter>,
  order30?: Maybe<CommentOrder>,
  first30?: Maybe<Scalars['Int']>,
  offset30?: Maybe<Scalars['Int']>,
  filter46?: Maybe<TaskFilter>,
  order31?: Maybe<TaskOrder>,
  first31?: Maybe<Scalars['Int']>,
  offset31?: Maybe<Scalars['Int']>,
  input: Array<AddTaskInput>
};


export type AddTaskMutation = (
  { __typename?: 'Mutation' }
  & { addTask: Maybe<(
    { __typename?: 'AddTaskPayload' }
    & Pick<AddTaskPayload, 'numUids'>
    & { task: Maybe<Array<Maybe<(
      { __typename?: 'Task' }
      & Pick<Task, 'id' | 'title' | 'hours' | 'deadline' | 'content' | 'priority' | 'complete'>
      & { project: (
        { __typename?: 'Project' }
        & Pick<Project, 'id' | 'title' | 'description'>
        & { tags: Maybe<Array<Maybe<(
          { __typename?: 'Tag' }
          & Pick<Tag, 'id' | 'title'>
          & { project: (
            { __typename?: 'Project' }
            & Pick<Project, 'id' | 'title' | 'description'>
          ), developers: Maybe<Array<Maybe<(
            { __typename?: 'Developer' }
            & Pick<Developer, 'id' | 'name' | 'availability'>
          )>>> }
        )>>>, tasks: Maybe<Array<Maybe<(
          { __typename?: 'Task' }
          & Pick<Task, 'id' | 'title' | 'hours' | 'deadline' | 'content' | 'priority' | 'complete'>
          & { project: (
            { __typename?: 'Project' }
            & Pick<Project, 'id' | 'title' | 'description'>
          ), column: Maybe<(
            { __typename?: 'Column' }
            & Pick<Column, 'id' | 'title'>
          )>, developers: Maybe<Array<Maybe<(
            { __typename?: 'Developer' }
            & Pick<Developer, 'id' | 'name' | 'availability'>
          )>>>, likes: Maybe<Array<Maybe<(
            { __typename?: 'Developer' }
            & Pick<Developer, 'id' | 'name' | 'availability'>
          )>>>, comments: Maybe<Array<Maybe<(
            { __typename?: 'Comment' }
            & Pick<Comment, 'id' | 'content'>
          )>>> }
        )>>>, boards: Maybe<Array<Maybe<(
          { __typename?: 'Board' }
          & Pick<Board, 'id' | 'title' | 'order'>
          & { project: (
            { __typename?: 'Project' }
            & Pick<Project, 'id' | 'title' | 'description'>
          ), columns: Maybe<Array<Maybe<(
            { __typename?: 'Column' }
            & Pick<Column, 'id' | 'title'>
          )>>> }
        )>>>, developers: Maybe<Array<Maybe<(
          { __typename?: 'Developer' }
          & Pick<Developer, 'id' | 'name' | 'availability'>
          & { project: (
            { __typename?: 'Project' }
            & Pick<Project, 'id' | 'title' | 'description'>
          ), user: Maybe<Array<Maybe<(
            { __typename?: 'User' }
            & Pick<User, 'id' | 'username' | 'password' | 'location'>
          )>>>, tags: Maybe<Array<Maybe<(
            { __typename?: 'Tag' }
            & Pick<Tag, 'id' | 'title'>
          )>>>, tasks: Maybe<Array<Maybe<(
            { __typename?: 'Task' }
            & Pick<Task, 'id' | 'title' | 'hours' | 'deadline' | 'content' | 'priority' | 'complete'>
          )>>>, liked: Maybe<Array<Maybe<(
            { __typename?: 'Task' }
            & Pick<Task, 'id' | 'title' | 'hours' | 'deadline' | 'content' | 'priority' | 'complete'>
          )>>> }
        )>>> }
      ), column: Maybe<(
        { __typename?: 'Column' }
        & Pick<Column, 'id' | 'title'>
        & { board: (
          { __typename?: 'Board' }
          & Pick<Board, 'id' | 'title' | 'order'>
          & { project: (
            { __typename?: 'Project' }
            & Pick<Project, 'id' | 'title' | 'description'>
          ), columns: Maybe<Array<Maybe<(
            { __typename?: 'Column' }
            & Pick<Column, 'id' | 'title'>
          )>>> }
        ), tasks: Maybe<Array<Maybe<(
          { __typename?: 'Task' }
          & Pick<Task, 'id' | 'title' | 'hours' | 'deadline' | 'content' | 'priority' | 'complete'>
        )>>> }
      )>, developers: Maybe<Array<Maybe<(
        { __typename?: 'Developer' }
        & Pick<Developer, 'id' | 'name' | 'availability'>
      )>>>, likes: Maybe<Array<Maybe<(
        { __typename?: 'Developer' }
        & Pick<Developer, 'id' | 'name' | 'availability'>
        & { project: (
          { __typename?: 'Project' }
          & Pick<Project, 'id' | 'title' | 'description'>
        ), user: Maybe<Array<Maybe<(
          { __typename?: 'User' }
          & Pick<User, 'id' | 'username' | 'password' | 'location'>
          & { roles: Maybe<Array<Maybe<(
            { __typename?: 'Developer' }
            & Pick<Developer, 'id' | 'name' | 'availability'>
          )>>>, stars: Maybe<Array<Maybe<(
            { __typename?: 'Task' }
            & Pick<Task, 'id' | 'title' | 'hours' | 'deadline' | 'content' | 'priority' | 'complete'>
          )>>> }
        )>>>, tags: Maybe<Array<Maybe<(
          { __typename?: 'Tag' }
          & Pick<Tag, 'id' | 'title'>
        )>>>, tasks: Maybe<Array<Maybe<(
          { __typename?: 'Task' }
          & Pick<Task, 'id' | 'title' | 'hours' | 'deadline' | 'content' | 'priority' | 'complete'>
        )>>>, liked: Maybe<Array<Maybe<(
          { __typename?: 'Task' }
          & Pick<Task, 'id' | 'title' | 'hours' | 'deadline' | 'content' | 'priority' | 'complete'>
          & { project: (
            { __typename?: 'Project' }
            & Pick<Project, 'id' | 'title' | 'description'>
          ), column: Maybe<(
            { __typename?: 'Column' }
            & Pick<Column, 'id' | 'title'>
          )>, developers: Maybe<Array<Maybe<(
            { __typename?: 'Developer' }
            & Pick<Developer, 'id' | 'name' | 'availability'>
          )>>>, likes: Maybe<Array<Maybe<(
            { __typename?: 'Developer' }
            & Pick<Developer, 'id' | 'name' | 'availability'>
          )>>>, comments: Maybe<Array<Maybe<(
            { __typename?: 'Comment' }
            & Pick<Comment, 'id' | 'content'>
          )>>> }
        )>>> }
      )>>>, comments: Maybe<Array<Maybe<(
        { __typename?: 'Comment' }
        & Pick<Comment, 'id' | 'content'>
        & { task: (
          { __typename?: 'Task' }
          & Pick<Task, 'id' | 'title' | 'hours' | 'deadline' | 'content' | 'priority' | 'complete'>
        ), developer: (
          { __typename?: 'Developer' }
          & Pick<Developer, 'id' | 'name' | 'availability'>
          & { project: (
            { __typename?: 'Project' }
            & Pick<Project, 'id' | 'title' | 'description'>
          ), user: Maybe<Array<Maybe<(
            { __typename?: 'User' }
            & Pick<User, 'id' | 'username' | 'password' | 'location'>
          )>>>, tags: Maybe<Array<Maybe<(
            { __typename?: 'Tag' }
            & Pick<Tag, 'id' | 'title'>
          )>>>, tasks: Maybe<Array<Maybe<(
            { __typename?: 'Task' }
            & Pick<Task, 'id' | 'title' | 'hours' | 'deadline' | 'content' | 'priority' | 'complete'>
          )>>>, liked: Maybe<Array<Maybe<(
            { __typename?: 'Task' }
            & Pick<Task, 'id' | 'title' | 'hours' | 'deadline' | 'content' | 'priority' | 'complete'>
          )>>> }
        ) }
      )>>> }
    )>>> }
  )> }
);

export type AddUserMutationVariables = {
  filter?: Maybe<TagFilter>,
  order?: Maybe<TagOrder>,
  first?: Maybe<Scalars['Int']>,
  offset?: Maybe<Scalars['Int']>,
  filter1?: Maybe<TaskFilter>,
  order1?: Maybe<TaskOrder>,
  first1?: Maybe<Scalars['Int']>,
  offset1?: Maybe<Scalars['Int']>,
  filter2?: Maybe<BoardFilter>,
  order2?: Maybe<BoardOrder>,
  first2?: Maybe<Scalars['Int']>,
  offset2?: Maybe<Scalars['Int']>,
  filter3?: Maybe<DeveloperFilter>,
  order3?: Maybe<DeveloperOrder>,
  first3?: Maybe<Scalars['Int']>,
  offset3?: Maybe<Scalars['Int']>,
  filter4?: Maybe<ProjectFilter>,
  filter5?: Maybe<TaskFilter>,
  order4?: Maybe<TaskOrder>,
  first4?: Maybe<Scalars['Int']>,
  offset4?: Maybe<Scalars['Int']>,
  filter6?: Maybe<UserFilter>,
  order5?: Maybe<UserOrder>,
  first5?: Maybe<Scalars['Int']>,
  offset5?: Maybe<Scalars['Int']>,
  filter7?: Maybe<ProjectFilter>,
  filter8?: Maybe<DeveloperFilter>,
  order6?: Maybe<DeveloperOrder>,
  first6?: Maybe<Scalars['Int']>,
  offset6?: Maybe<Scalars['Int']>,
  filter9?: Maybe<TagFilter>,
  order7?: Maybe<TagOrder>,
  first7?: Maybe<Scalars['Int']>,
  offset7?: Maybe<Scalars['Int']>,
  filter10?: Maybe<ProjectFilter>,
  filter11?: Maybe<ColumnFilter>,
  filter12?: Maybe<DeveloperFilter>,
  order8?: Maybe<DeveloperOrder>,
  first8?: Maybe<Scalars['Int']>,
  offset8?: Maybe<Scalars['Int']>,
  filter13?: Maybe<DeveloperFilter>,
  order9?: Maybe<DeveloperOrder>,
  first9?: Maybe<Scalars['Int']>,
  offset9?: Maybe<Scalars['Int']>,
  filter14?: Maybe<CommentFilter>,
  order10?: Maybe<CommentOrder>,
  first10?: Maybe<Scalars['Int']>,
  offset10?: Maybe<Scalars['Int']>,
  filter15?: Maybe<TaskFilter>,
  order11?: Maybe<TaskOrder>,
  first11?: Maybe<Scalars['Int']>,
  offset11?: Maybe<Scalars['Int']>,
  filter16?: Maybe<ProjectFilter>,
  filter17?: Maybe<ColumnFilter>,
  filter18?: Maybe<DeveloperFilter>,
  order12?: Maybe<DeveloperOrder>,
  first12?: Maybe<Scalars['Int']>,
  offset12?: Maybe<Scalars['Int']>,
  filter19?: Maybe<DeveloperFilter>,
  order13?: Maybe<DeveloperOrder>,
  first13?: Maybe<Scalars['Int']>,
  offset13?: Maybe<Scalars['Int']>,
  filter20?: Maybe<CommentFilter>,
  order14?: Maybe<CommentOrder>,
  first14?: Maybe<Scalars['Int']>,
  offset14?: Maybe<Scalars['Int']>,
  filter21?: Maybe<TaskFilter>,
  order15?: Maybe<TaskOrder>,
  first15?: Maybe<Scalars['Int']>,
  offset15?: Maybe<Scalars['Int']>,
  filter22?: Maybe<DeveloperFilter>,
  order16?: Maybe<DeveloperOrder>,
  first16?: Maybe<Scalars['Int']>,
  offset16?: Maybe<Scalars['Int']>,
  filter23?: Maybe<UserFilter>,
  order17?: Maybe<UserOrder>,
  first17?: Maybe<Scalars['Int']>,
  offset17?: Maybe<Scalars['Int']>,
  input: Array<AddUserInput>
};


export type AddUserMutation = (
  { __typename?: 'Mutation' }
  & { addUser: Maybe<(
    { __typename?: 'AddUserPayload' }
    & Pick<AddUserPayload, 'numUids'>
    & { user: Maybe<Array<Maybe<(
      { __typename?: 'User' }
      & Pick<User, 'id' | 'username' | 'password' | 'location'>
      & { roles: Maybe<Array<Maybe<(
        { __typename?: 'Developer' }
        & Pick<Developer, 'id' | 'name' | 'availability'>
        & { project: (
          { __typename?: 'Project' }
          & Pick<Project, 'id' | 'title' | 'description'>
          & { tags: Maybe<Array<Maybe<(
            { __typename?: 'Tag' }
            & Pick<Tag, 'id' | 'title'>
          )>>>, tasks: Maybe<Array<Maybe<(
            { __typename?: 'Task' }
            & Pick<Task, 'id' | 'title' | 'hours' | 'deadline' | 'content' | 'priority' | 'complete'>
          )>>>, boards: Maybe<Array<Maybe<(
            { __typename?: 'Board' }
            & Pick<Board, 'id' | 'title' | 'order'>
          )>>>, developers: Maybe<Array<Maybe<(
            { __typename?: 'Developer' }
            & Pick<Developer, 'id' | 'name' | 'availability'>
          )>>> }
        ), user: Maybe<Array<Maybe<(
          { __typename?: 'User' }
          & Pick<User, 'id' | 'username' | 'password' | 'location'>
          & { stars: Maybe<Array<Maybe<(
            { __typename?: 'Task' }
            & Pick<Task, 'id' | 'title' | 'hours' | 'deadline' | 'content' | 'priority' | 'complete'>
          )>>> }
        )>>>, tags: Maybe<Array<Maybe<(
          { __typename?: 'Tag' }
          & Pick<Tag, 'id' | 'title'>
          & { project: (
            { __typename?: 'Project' }
            & Pick<Project, 'id' | 'title' | 'description'>
          ), developers: Maybe<Array<Maybe<(
            { __typename?: 'Developer' }
            & Pick<Developer, 'id' | 'name' | 'availability'>
          )>>> }
        )>>>, tasks: Maybe<Array<Maybe<(
          { __typename?: 'Task' }
          & Pick<Task, 'id' | 'title' | 'hours' | 'deadline' | 'content' | 'priority' | 'complete'>
          & { project: (
            { __typename?: 'Project' }
            & Pick<Project, 'id' | 'title' | 'description'>
          ), column: Maybe<(
            { __typename?: 'Column' }
            & Pick<Column, 'id' | 'title'>
          )>, developers: Maybe<Array<Maybe<(
            { __typename?: 'Developer' }
            & Pick<Developer, 'id' | 'name' | 'availability'>
          )>>>, likes: Maybe<Array<Maybe<(
            { __typename?: 'Developer' }
            & Pick<Developer, 'id' | 'name' | 'availability'>
          )>>>, comments: Maybe<Array<Maybe<(
            { __typename?: 'Comment' }
            & Pick<Comment, 'id' | 'content'>
          )>>> }
        )>>>, liked: Maybe<Array<Maybe<(
          { __typename?: 'Task' }
          & Pick<Task, 'id' | 'title' | 'hours' | 'deadline' | 'content' | 'priority' | 'complete'>
          & { project: (
            { __typename?: 'Project' }
            & Pick<Project, 'id' | 'title' | 'description'>
          ), column: Maybe<(
            { __typename?: 'Column' }
            & Pick<Column, 'id' | 'title'>
          )>, developers: Maybe<Array<Maybe<(
            { __typename?: 'Developer' }
            & Pick<Developer, 'id' | 'name' | 'availability'>
          )>>>, likes: Maybe<Array<Maybe<(
            { __typename?: 'Developer' }
            & Pick<Developer, 'id' | 'name' | 'availability'>
          )>>>, comments: Maybe<Array<Maybe<(
            { __typename?: 'Comment' }
            & Pick<Comment, 'id' | 'content'>
          )>>> }
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
    & Pick<DeleteBoardPayload, 'msg' | 'numUids'>
  )> }
);

export type DeleteColumnMutationVariables = {
  filter: ColumnFilter
};


export type DeleteColumnMutation = (
  { __typename?: 'Mutation' }
  & { deleteColumn: Maybe<(
    { __typename?: 'DeleteColumnPayload' }
    & Pick<DeleteColumnPayload, 'msg' | 'numUids'>
  )> }
);

export type DeleteCommentMutationVariables = {
  filter: CommentFilter
};


export type DeleteCommentMutation = (
  { __typename?: 'Mutation' }
  & { deleteComment: Maybe<(
    { __typename?: 'DeleteCommentPayload' }
    & Pick<DeleteCommentPayload, 'msg' | 'numUids'>
  )> }
);

export type DeleteDeveloperMutationVariables = {
  filter: DeveloperFilter
};


export type DeleteDeveloperMutation = (
  { __typename?: 'Mutation' }
  & { deleteDeveloper: Maybe<(
    { __typename?: 'DeleteDeveloperPayload' }
    & Pick<DeleteDeveloperPayload, 'msg' | 'numUids'>
  )> }
);

export type DeleteProjectMutationVariables = {
  filter: ProjectFilter
};


export type DeleteProjectMutation = (
  { __typename?: 'Mutation' }
  & { deleteProject: Maybe<(
    { __typename?: 'DeleteProjectPayload' }
    & Pick<DeleteProjectPayload, 'msg' | 'numUids'>
  )> }
);

export type DeleteTagMutationVariables = {
  filter: TagFilter
};


export type DeleteTagMutation = (
  { __typename?: 'Mutation' }
  & { deleteTag: Maybe<(
    { __typename?: 'DeleteTagPayload' }
    & Pick<DeleteTagPayload, 'msg' | 'numUids'>
  )> }
);

export type DeleteTaskMutationVariables = {
  filter: TaskFilter
};


export type DeleteTaskMutation = (
  { __typename?: 'Mutation' }
  & { deleteTask: Maybe<(
    { __typename?: 'DeleteTaskPayload' }
    & Pick<DeleteTaskPayload, 'msg' | 'numUids'>
  )> }
);

export type DeleteUserMutationVariables = {
  filter: UserFilter
};


export type DeleteUserMutation = (
  { __typename?: 'Mutation' }
  & { deleteUser: Maybe<(
    { __typename?: 'DeleteUserPayload' }
    & Pick<DeleteUserPayload, 'msg' | 'numUids'>
  )> }
);

export type UpdateBoardMutationVariables = {
  filter?: Maybe<ProjectFilter>,
  filter1?: Maybe<DeveloperFilter>,
  order?: Maybe<DeveloperOrder>,
  first?: Maybe<Scalars['Int']>,
  offset?: Maybe<Scalars['Int']>,
  filter2?: Maybe<TagFilter>,
  order1?: Maybe<TagOrder>,
  first1?: Maybe<Scalars['Int']>,
  offset1?: Maybe<Scalars['Int']>,
  filter3?: Maybe<ProjectFilter>,
  filter4?: Maybe<ColumnFilter>,
  filter5?: Maybe<DeveloperFilter>,
  order2?: Maybe<DeveloperOrder>,
  first2?: Maybe<Scalars['Int']>,
  offset2?: Maybe<Scalars['Int']>,
  filter6?: Maybe<DeveloperFilter>,
  order3?: Maybe<DeveloperOrder>,
  first3?: Maybe<Scalars['Int']>,
  offset3?: Maybe<Scalars['Int']>,
  filter7?: Maybe<CommentFilter>,
  order4?: Maybe<CommentOrder>,
  first4?: Maybe<Scalars['Int']>,
  offset4?: Maybe<Scalars['Int']>,
  filter8?: Maybe<TaskFilter>,
  order5?: Maybe<TaskOrder>,
  first5?: Maybe<Scalars['Int']>,
  offset5?: Maybe<Scalars['Int']>,
  filter9?: Maybe<ProjectFilter>,
  filter10?: Maybe<ColumnFilter>,
  order6?: Maybe<ColumnOrder>,
  first6?: Maybe<Scalars['Int']>,
  offset6?: Maybe<Scalars['Int']>,
  filter11?: Maybe<BoardFilter>,
  order7?: Maybe<BoardOrder>,
  first7?: Maybe<Scalars['Int']>,
  offset7?: Maybe<Scalars['Int']>,
  filter12?: Maybe<ProjectFilter>,
  filter13?: Maybe<UserFilter>,
  order8?: Maybe<UserOrder>,
  first8?: Maybe<Scalars['Int']>,
  offset8?: Maybe<Scalars['Int']>,
  filter14?: Maybe<TagFilter>,
  order9?: Maybe<TagOrder>,
  first9?: Maybe<Scalars['Int']>,
  offset9?: Maybe<Scalars['Int']>,
  filter15?: Maybe<TaskFilter>,
  order10?: Maybe<TaskOrder>,
  first10?: Maybe<Scalars['Int']>,
  offset10?: Maybe<Scalars['Int']>,
  filter16?: Maybe<TaskFilter>,
  order11?: Maybe<TaskOrder>,
  first11?: Maybe<Scalars['Int']>,
  offset11?: Maybe<Scalars['Int']>,
  filter17?: Maybe<DeveloperFilter>,
  order12?: Maybe<DeveloperOrder>,
  first12?: Maybe<Scalars['Int']>,
  offset12?: Maybe<Scalars['Int']>,
  filter18?: Maybe<ProjectFilter>,
  filter19?: Maybe<BoardFilter>,
  filter20?: Maybe<TaskFilter>,
  order13?: Maybe<TaskOrder>,
  first13?: Maybe<Scalars['Int']>,
  offset13?: Maybe<Scalars['Int']>,
  filter21?: Maybe<ColumnFilter>,
  order14?: Maybe<ColumnOrder>,
  first14?: Maybe<Scalars['Int']>,
  offset14?: Maybe<Scalars['Int']>,
  filter22?: Maybe<BoardFilter>,
  order15?: Maybe<BoardOrder>,
  first15?: Maybe<Scalars['Int']>,
  offset15?: Maybe<Scalars['Int']>,
  input: UpdateBoardInput
};


export type UpdateBoardMutation = (
  { __typename?: 'Mutation' }
  & { updateBoard: Maybe<(
    { __typename?: 'UpdateBoardPayload' }
    & Pick<UpdateBoardPayload, 'numUids'>
    & { board: Maybe<Array<Maybe<(
      { __typename?: 'Board' }
      & Pick<Board, 'id' | 'title' | 'order'>
      & { project: (
        { __typename?: 'Project' }
        & Pick<Project, 'id' | 'title' | 'description'>
        & { tags: Maybe<Array<Maybe<(
          { __typename?: 'Tag' }
          & Pick<Tag, 'id' | 'title'>
          & { project: (
            { __typename?: 'Project' }
            & Pick<Project, 'id' | 'title' | 'description'>
          ), developers: Maybe<Array<Maybe<(
            { __typename?: 'Developer' }
            & Pick<Developer, 'id' | 'name' | 'availability'>
          )>>> }
        )>>>, tasks: Maybe<Array<Maybe<(
          { __typename?: 'Task' }
          & Pick<Task, 'id' | 'title' | 'hours' | 'deadline' | 'content' | 'priority' | 'complete'>
          & { project: (
            { __typename?: 'Project' }
            & Pick<Project, 'id' | 'title' | 'description'>
          ), column: Maybe<(
            { __typename?: 'Column' }
            & Pick<Column, 'id' | 'title'>
          )>, developers: Maybe<Array<Maybe<(
            { __typename?: 'Developer' }
            & Pick<Developer, 'id' | 'name' | 'availability'>
          )>>>, likes: Maybe<Array<Maybe<(
            { __typename?: 'Developer' }
            & Pick<Developer, 'id' | 'name' | 'availability'>
          )>>>, comments: Maybe<Array<Maybe<(
            { __typename?: 'Comment' }
            & Pick<Comment, 'id' | 'content'>
          )>>> }
        )>>>, boards: Maybe<Array<Maybe<(
          { __typename?: 'Board' }
          & Pick<Board, 'id' | 'title' | 'order'>
          & { project: (
            { __typename?: 'Project' }
            & Pick<Project, 'id' | 'title' | 'description'>
          ), columns: Maybe<Array<Maybe<(
            { __typename?: 'Column' }
            & Pick<Column, 'id' | 'title'>
          )>>> }
        )>>>, developers: Maybe<Array<Maybe<(
          { __typename?: 'Developer' }
          & Pick<Developer, 'id' | 'name' | 'availability'>
          & { project: (
            { __typename?: 'Project' }
            & Pick<Project, 'id' | 'title' | 'description'>
          ), user: Maybe<Array<Maybe<(
            { __typename?: 'User' }
            & Pick<User, 'id' | 'username' | 'password' | 'location'>
          )>>>, tags: Maybe<Array<Maybe<(
            { __typename?: 'Tag' }
            & Pick<Tag, 'id' | 'title'>
          )>>>, tasks: Maybe<Array<Maybe<(
            { __typename?: 'Task' }
            & Pick<Task, 'id' | 'title' | 'hours' | 'deadline' | 'content' | 'priority' | 'complete'>
          )>>>, liked: Maybe<Array<Maybe<(
            { __typename?: 'Task' }
            & Pick<Task, 'id' | 'title' | 'hours' | 'deadline' | 'content' | 'priority' | 'complete'>
          )>>> }
        )>>> }
      ), columns: Maybe<Array<Maybe<(
        { __typename?: 'Column' }
        & Pick<Column, 'id' | 'title'>
        & { board: (
          { __typename?: 'Board' }
          & Pick<Board, 'id' | 'title' | 'order'>
        ), tasks: Maybe<Array<Maybe<(
          { __typename?: 'Task' }
          & Pick<Task, 'id' | 'title' | 'hours' | 'deadline' | 'content' | 'priority' | 'complete'>
        )>>> }
      )>>> }
    )>>> }
  )> }
);

export type UpdateColumnMutationVariables = {
  filter?: Maybe<TagFilter>,
  order?: Maybe<TagOrder>,
  first?: Maybe<Scalars['Int']>,
  offset?: Maybe<Scalars['Int']>,
  filter1?: Maybe<TaskFilter>,
  order1?: Maybe<TaskOrder>,
  first1?: Maybe<Scalars['Int']>,
  offset1?: Maybe<Scalars['Int']>,
  filter2?: Maybe<BoardFilter>,
  order2?: Maybe<BoardOrder>,
  first2?: Maybe<Scalars['Int']>,
  offset2?: Maybe<Scalars['Int']>,
  filter3?: Maybe<DeveloperFilter>,
  order3?: Maybe<DeveloperOrder>,
  first3?: Maybe<Scalars['Int']>,
  offset3?: Maybe<Scalars['Int']>,
  filter4?: Maybe<ProjectFilter>,
  filter5?: Maybe<BoardFilter>,
  filter6?: Maybe<TaskFilter>,
  order4?: Maybe<TaskOrder>,
  first4?: Maybe<Scalars['Int']>,
  offset4?: Maybe<Scalars['Int']>,
  filter7?: Maybe<ColumnFilter>,
  order5?: Maybe<ColumnOrder>,
  first5?: Maybe<Scalars['Int']>,
  offset5?: Maybe<Scalars['Int']>,
  filter8?: Maybe<BoardFilter>,
  filter9?: Maybe<ProjectFilter>,
  filter10?: Maybe<ColumnFilter>,
  filter11?: Maybe<ProjectFilter>,
  filter12?: Maybe<UserFilter>,
  order6?: Maybe<UserOrder>,
  first6?: Maybe<Scalars['Int']>,
  offset6?: Maybe<Scalars['Int']>,
  filter13?: Maybe<TagFilter>,
  order7?: Maybe<TagOrder>,
  first7?: Maybe<Scalars['Int']>,
  offset7?: Maybe<Scalars['Int']>,
  filter14?: Maybe<TaskFilter>,
  order8?: Maybe<TaskOrder>,
  first8?: Maybe<Scalars['Int']>,
  offset8?: Maybe<Scalars['Int']>,
  filter15?: Maybe<TaskFilter>,
  order9?: Maybe<TaskOrder>,
  first9?: Maybe<Scalars['Int']>,
  offset9?: Maybe<Scalars['Int']>,
  filter16?: Maybe<DeveloperFilter>,
  order10?: Maybe<DeveloperOrder>,
  first10?: Maybe<Scalars['Int']>,
  offset10?: Maybe<Scalars['Int']>,
  filter17?: Maybe<ProjectFilter>,
  filter18?: Maybe<UserFilter>,
  order11?: Maybe<UserOrder>,
  first11?: Maybe<Scalars['Int']>,
  offset11?: Maybe<Scalars['Int']>,
  filter19?: Maybe<TagFilter>,
  order12?: Maybe<TagOrder>,
  first12?: Maybe<Scalars['Int']>,
  offset12?: Maybe<Scalars['Int']>,
  filter20?: Maybe<TaskFilter>,
  order13?: Maybe<TaskOrder>,
  first13?: Maybe<Scalars['Int']>,
  offset13?: Maybe<Scalars['Int']>,
  filter21?: Maybe<TaskFilter>,
  order14?: Maybe<TaskOrder>,
  first14?: Maybe<Scalars['Int']>,
  offset14?: Maybe<Scalars['Int']>,
  filter22?: Maybe<DeveloperFilter>,
  order15?: Maybe<DeveloperOrder>,
  first15?: Maybe<Scalars['Int']>,
  offset15?: Maybe<Scalars['Int']>,
  filter23?: Maybe<TaskFilter>,
  filter24?: Maybe<DeveloperFilter>,
  filter25?: Maybe<CommentFilter>,
  order16?: Maybe<CommentOrder>,
  first16?: Maybe<Scalars['Int']>,
  offset16?: Maybe<Scalars['Int']>,
  filter26?: Maybe<TaskFilter>,
  order17?: Maybe<TaskOrder>,
  first17?: Maybe<Scalars['Int']>,
  offset17?: Maybe<Scalars['Int']>,
  filter27?: Maybe<ColumnFilter>,
  order18?: Maybe<ColumnOrder>,
  first18?: Maybe<Scalars['Int']>,
  offset18?: Maybe<Scalars['Int']>,
  input: UpdateColumnInput
};


export type UpdateColumnMutation = (
  { __typename?: 'Mutation' }
  & { updateColumn: Maybe<(
    { __typename?: 'UpdateColumnPayload' }
    & Pick<UpdateColumnPayload, 'numUids'>
    & { column: Maybe<Array<Maybe<(
      { __typename?: 'Column' }
      & Pick<Column, 'id' | 'title'>
      & { board: (
        { __typename?: 'Board' }
        & Pick<Board, 'id' | 'title' | 'order'>
        & { project: (
          { __typename?: 'Project' }
          & Pick<Project, 'id' | 'title' | 'description'>
          & { tags: Maybe<Array<Maybe<(
            { __typename?: 'Tag' }
            & Pick<Tag, 'id' | 'title'>
          )>>>, tasks: Maybe<Array<Maybe<(
            { __typename?: 'Task' }
            & Pick<Task, 'id' | 'title' | 'hours' | 'deadline' | 'content' | 'priority' | 'complete'>
          )>>>, boards: Maybe<Array<Maybe<(
            { __typename?: 'Board' }
            & Pick<Board, 'id' | 'title' | 'order'>
          )>>>, developers: Maybe<Array<Maybe<(
            { __typename?: 'Developer' }
            & Pick<Developer, 'id' | 'name' | 'availability'>
          )>>> }
        ), columns: Maybe<Array<Maybe<(
          { __typename?: 'Column' }
          & Pick<Column, 'id' | 'title'>
          & { board: (
            { __typename?: 'Board' }
            & Pick<Board, 'id' | 'title' | 'order'>
          ), tasks: Maybe<Array<Maybe<(
            { __typename?: 'Task' }
            & Pick<Task, 'id' | 'title' | 'hours' | 'deadline' | 'content' | 'priority' | 'complete'>
          )>>> }
        )>>> }
      ), tasks: Maybe<Array<Maybe<(
        { __typename?: 'Task' }
        & Pick<Task, 'id' | 'title' | 'hours' | 'deadline' | 'content' | 'priority' | 'complete'>
        & { project: (
          { __typename?: 'Project' }
          & Pick<Project, 'id' | 'title' | 'description'>
        ), column: Maybe<(
          { __typename?: 'Column' }
          & Pick<Column, 'id' | 'title'>
        )>, developers: Maybe<Array<Maybe<(
          { __typename?: 'Developer' }
          & Pick<Developer, 'id' | 'name' | 'availability'>
          & { project: (
            { __typename?: 'Project' }
            & Pick<Project, 'id' | 'title' | 'description'>
          ), user: Maybe<Array<Maybe<(
            { __typename?: 'User' }
            & Pick<User, 'id' | 'username' | 'password' | 'location'>
          )>>>, tags: Maybe<Array<Maybe<(
            { __typename?: 'Tag' }
            & Pick<Tag, 'id' | 'title'>
          )>>>, tasks: Maybe<Array<Maybe<(
            { __typename?: 'Task' }
            & Pick<Task, 'id' | 'title' | 'hours' | 'deadline' | 'content' | 'priority' | 'complete'>
          )>>>, liked: Maybe<Array<Maybe<(
            { __typename?: 'Task' }
            & Pick<Task, 'id' | 'title' | 'hours' | 'deadline' | 'content' | 'priority' | 'complete'>
          )>>> }
        )>>>, likes: Maybe<Array<Maybe<(
          { __typename?: 'Developer' }
          & Pick<Developer, 'id' | 'name' | 'availability'>
          & { project: (
            { __typename?: 'Project' }
            & Pick<Project, 'id' | 'title' | 'description'>
          ), user: Maybe<Array<Maybe<(
            { __typename?: 'User' }
            & Pick<User, 'id' | 'username' | 'password' | 'location'>
          )>>>, tags: Maybe<Array<Maybe<(
            { __typename?: 'Tag' }
            & Pick<Tag, 'id' | 'title'>
          )>>>, tasks: Maybe<Array<Maybe<(
            { __typename?: 'Task' }
            & Pick<Task, 'id' | 'title' | 'hours' | 'deadline' | 'content' | 'priority' | 'complete'>
          )>>>, liked: Maybe<Array<Maybe<(
            { __typename?: 'Task' }
            & Pick<Task, 'id' | 'title' | 'hours' | 'deadline' | 'content' | 'priority' | 'complete'>
          )>>> }
        )>>>, comments: Maybe<Array<Maybe<(
          { __typename?: 'Comment' }
          & Pick<Comment, 'id' | 'content'>
          & { task: (
            { __typename?: 'Task' }
            & Pick<Task, 'id' | 'title' | 'hours' | 'deadline' | 'content' | 'priority' | 'complete'>
          ), developer: (
            { __typename?: 'Developer' }
            & Pick<Developer, 'id' | 'name' | 'availability'>
          ) }
        )>>> }
      )>>> }
    )>>> }
  )> }
);

export type UpdateCommentMutationVariables = {
  filter?: Maybe<TagFilter>,
  order?: Maybe<TagOrder>,
  first?: Maybe<Scalars['Int']>,
  offset?: Maybe<Scalars['Int']>,
  filter1?: Maybe<TaskFilter>,
  order1?: Maybe<TaskOrder>,
  first1?: Maybe<Scalars['Int']>,
  offset1?: Maybe<Scalars['Int']>,
  filter2?: Maybe<BoardFilter>,
  order2?: Maybe<BoardOrder>,
  first2?: Maybe<Scalars['Int']>,
  offset2?: Maybe<Scalars['Int']>,
  filter3?: Maybe<DeveloperFilter>,
  order3?: Maybe<DeveloperOrder>,
  first3?: Maybe<Scalars['Int']>,
  offset3?: Maybe<Scalars['Int']>,
  filter4?: Maybe<ProjectFilter>,
  filter5?: Maybe<BoardFilter>,
  filter6?: Maybe<TaskFilter>,
  order4?: Maybe<TaskOrder>,
  first4?: Maybe<Scalars['Int']>,
  offset4?: Maybe<Scalars['Int']>,
  filter7?: Maybe<ColumnFilter>,
  filter8?: Maybe<ProjectFilter>,
  filter9?: Maybe<UserFilter>,
  order5?: Maybe<UserOrder>,
  first5?: Maybe<Scalars['Int']>,
  offset5?: Maybe<Scalars['Int']>,
  filter10?: Maybe<TagFilter>,
  order6?: Maybe<TagOrder>,
  first6?: Maybe<Scalars['Int']>,
  offset6?: Maybe<Scalars['Int']>,
  filter11?: Maybe<TaskFilter>,
  order7?: Maybe<TaskOrder>,
  first7?: Maybe<Scalars['Int']>,
  offset7?: Maybe<Scalars['Int']>,
  filter12?: Maybe<TaskFilter>,
  order8?: Maybe<TaskOrder>,
  first8?: Maybe<Scalars['Int']>,
  offset8?: Maybe<Scalars['Int']>,
  filter13?: Maybe<DeveloperFilter>,
  order9?: Maybe<DeveloperOrder>,
  first9?: Maybe<Scalars['Int']>,
  offset9?: Maybe<Scalars['Int']>,
  filter14?: Maybe<ProjectFilter>,
  filter15?: Maybe<UserFilter>,
  order10?: Maybe<UserOrder>,
  first10?: Maybe<Scalars['Int']>,
  offset10?: Maybe<Scalars['Int']>,
  filter16?: Maybe<TagFilter>,
  order11?: Maybe<TagOrder>,
  first11?: Maybe<Scalars['Int']>,
  offset11?: Maybe<Scalars['Int']>,
  filter17?: Maybe<TaskFilter>,
  order12?: Maybe<TaskOrder>,
  first12?: Maybe<Scalars['Int']>,
  offset12?: Maybe<Scalars['Int']>,
  filter18?: Maybe<TaskFilter>,
  order13?: Maybe<TaskOrder>,
  first13?: Maybe<Scalars['Int']>,
  offset13?: Maybe<Scalars['Int']>,
  filter19?: Maybe<DeveloperFilter>,
  order14?: Maybe<DeveloperOrder>,
  first14?: Maybe<Scalars['Int']>,
  offset14?: Maybe<Scalars['Int']>,
  filter20?: Maybe<TaskFilter>,
  filter21?: Maybe<DeveloperFilter>,
  filter22?: Maybe<CommentFilter>,
  order15?: Maybe<CommentOrder>,
  first15?: Maybe<Scalars['Int']>,
  offset15?: Maybe<Scalars['Int']>,
  filter23?: Maybe<TaskFilter>,
  filter24?: Maybe<ProjectFilter>,
  filter25?: Maybe<DeveloperFilter>,
  order16?: Maybe<DeveloperOrder>,
  first16?: Maybe<Scalars['Int']>,
  offset16?: Maybe<Scalars['Int']>,
  filter26?: Maybe<TaskFilter>,
  order17?: Maybe<TaskOrder>,
  first17?: Maybe<Scalars['Int']>,
  offset17?: Maybe<Scalars['Int']>,
  filter27?: Maybe<UserFilter>,
  order18?: Maybe<UserOrder>,
  first18?: Maybe<Scalars['Int']>,
  offset18?: Maybe<Scalars['Int']>,
  filter28?: Maybe<ProjectFilter>,
  filter29?: Maybe<DeveloperFilter>,
  order19?: Maybe<DeveloperOrder>,
  first19?: Maybe<Scalars['Int']>,
  offset19?: Maybe<Scalars['Int']>,
  filter30?: Maybe<TagFilter>,
  order20?: Maybe<TagOrder>,
  first20?: Maybe<Scalars['Int']>,
  offset20?: Maybe<Scalars['Int']>,
  filter31?: Maybe<ProjectFilter>,
  filter32?: Maybe<ColumnFilter>,
  filter33?: Maybe<DeveloperFilter>,
  order21?: Maybe<DeveloperOrder>,
  first21?: Maybe<Scalars['Int']>,
  offset21?: Maybe<Scalars['Int']>,
  filter34?: Maybe<DeveloperFilter>,
  order22?: Maybe<DeveloperOrder>,
  first22?: Maybe<Scalars['Int']>,
  offset22?: Maybe<Scalars['Int']>,
  filter35?: Maybe<CommentFilter>,
  order23?: Maybe<CommentOrder>,
  first23?: Maybe<Scalars['Int']>,
  offset23?: Maybe<Scalars['Int']>,
  filter36?: Maybe<TaskFilter>,
  order24?: Maybe<TaskOrder>,
  first24?: Maybe<Scalars['Int']>,
  offset24?: Maybe<Scalars['Int']>,
  filter37?: Maybe<ProjectFilter>,
  filter38?: Maybe<ColumnFilter>,
  filter39?: Maybe<DeveloperFilter>,
  order25?: Maybe<DeveloperOrder>,
  first25?: Maybe<Scalars['Int']>,
  offset25?: Maybe<Scalars['Int']>,
  filter40?: Maybe<DeveloperFilter>,
  order26?: Maybe<DeveloperOrder>,
  first26?: Maybe<Scalars['Int']>,
  offset26?: Maybe<Scalars['Int']>,
  filter41?: Maybe<CommentFilter>,
  order27?: Maybe<CommentOrder>,
  first27?: Maybe<Scalars['Int']>,
  offset27?: Maybe<Scalars['Int']>,
  filter42?: Maybe<TaskFilter>,
  order28?: Maybe<TaskOrder>,
  first28?: Maybe<Scalars['Int']>,
  offset28?: Maybe<Scalars['Int']>,
  filter43?: Maybe<DeveloperFilter>,
  filter44?: Maybe<CommentFilter>,
  order29?: Maybe<CommentOrder>,
  first29?: Maybe<Scalars['Int']>,
  offset29?: Maybe<Scalars['Int']>,
  input: UpdateCommentInput
};


export type UpdateCommentMutation = (
  { __typename?: 'Mutation' }
  & { updateComment: Maybe<(
    { __typename?: 'UpdateCommentPayload' }
    & Pick<UpdateCommentPayload, 'numUids'>
    & { comment: Maybe<Array<Maybe<(
      { __typename?: 'Comment' }
      & Pick<Comment, 'id' | 'content'>
      & { task: (
        { __typename?: 'Task' }
        & Pick<Task, 'id' | 'title' | 'hours' | 'deadline' | 'content' | 'priority' | 'complete'>
        & { project: (
          { __typename?: 'Project' }
          & Pick<Project, 'id' | 'title' | 'description'>
          & { tags: Maybe<Array<Maybe<(
            { __typename?: 'Tag' }
            & Pick<Tag, 'id' | 'title'>
          )>>>, tasks: Maybe<Array<Maybe<(
            { __typename?: 'Task' }
            & Pick<Task, 'id' | 'title' | 'hours' | 'deadline' | 'content' | 'priority' | 'complete'>
          )>>>, boards: Maybe<Array<Maybe<(
            { __typename?: 'Board' }
            & Pick<Board, 'id' | 'title' | 'order'>
          )>>>, developers: Maybe<Array<Maybe<(
            { __typename?: 'Developer' }
            & Pick<Developer, 'id' | 'name' | 'availability'>
          )>>> }
        ), column: Maybe<(
          { __typename?: 'Column' }
          & Pick<Column, 'id' | 'title'>
          & { board: (
            { __typename?: 'Board' }
            & Pick<Board, 'id' | 'title' | 'order'>
          ), tasks: Maybe<Array<Maybe<(
            { __typename?: 'Task' }
            & Pick<Task, 'id' | 'title' | 'hours' | 'deadline' | 'content' | 'priority' | 'complete'>
          )>>> }
        )>, developers: Maybe<Array<Maybe<(
          { __typename?: 'Developer' }
          & Pick<Developer, 'id' | 'name' | 'availability'>
          & { project: (
            { __typename?: 'Project' }
            & Pick<Project, 'id' | 'title' | 'description'>
          ), user: Maybe<Array<Maybe<(
            { __typename?: 'User' }
            & Pick<User, 'id' | 'username' | 'password' | 'location'>
          )>>>, tags: Maybe<Array<Maybe<(
            { __typename?: 'Tag' }
            & Pick<Tag, 'id' | 'title'>
          )>>>, tasks: Maybe<Array<Maybe<(
            { __typename?: 'Task' }
            & Pick<Task, 'id' | 'title' | 'hours' | 'deadline' | 'content' | 'priority' | 'complete'>
          )>>>, liked: Maybe<Array<Maybe<(
            { __typename?: 'Task' }
            & Pick<Task, 'id' | 'title' | 'hours' | 'deadline' | 'content' | 'priority' | 'complete'>
          )>>> }
        )>>>, likes: Maybe<Array<Maybe<(
          { __typename?: 'Developer' }
          & Pick<Developer, 'id' | 'name' | 'availability'>
          & { project: (
            { __typename?: 'Project' }
            & Pick<Project, 'id' | 'title' | 'description'>
          ), user: Maybe<Array<Maybe<(
            { __typename?: 'User' }
            & Pick<User, 'id' | 'username' | 'password' | 'location'>
          )>>>, tags: Maybe<Array<Maybe<(
            { __typename?: 'Tag' }
            & Pick<Tag, 'id' | 'title'>
          )>>>, tasks: Maybe<Array<Maybe<(
            { __typename?: 'Task' }
            & Pick<Task, 'id' | 'title' | 'hours' | 'deadline' | 'content' | 'priority' | 'complete'>
          )>>>, liked: Maybe<Array<Maybe<(
            { __typename?: 'Task' }
            & Pick<Task, 'id' | 'title' | 'hours' | 'deadline' | 'content' | 'priority' | 'complete'>
          )>>> }
        )>>>, comments: Maybe<Array<Maybe<(
          { __typename?: 'Comment' }
          & Pick<Comment, 'id' | 'content'>
          & { task: (
            { __typename?: 'Task' }
            & Pick<Task, 'id' | 'title' | 'hours' | 'deadline' | 'content' | 'priority' | 'complete'>
          ), developer: (
            { __typename?: 'Developer' }
            & Pick<Developer, 'id' | 'name' | 'availability'>
          ) }
        )>>> }
      ), developer: (
        { __typename?: 'Developer' }
        & Pick<Developer, 'id' | 'name' | 'availability'>
        & { project: (
          { __typename?: 'Project' }
          & Pick<Project, 'id' | 'title' | 'description'>
        ), user: Maybe<Array<Maybe<(
          { __typename?: 'User' }
          & Pick<User, 'id' | 'username' | 'password' | 'location'>
          & { roles: Maybe<Array<Maybe<(
            { __typename?: 'Developer' }
            & Pick<Developer, 'id' | 'name' | 'availability'>
          )>>>, stars: Maybe<Array<Maybe<(
            { __typename?: 'Task' }
            & Pick<Task, 'id' | 'title' | 'hours' | 'deadline' | 'content' | 'priority' | 'complete'>
          )>>> }
        )>>>, tags: Maybe<Array<Maybe<(
          { __typename?: 'Tag' }
          & Pick<Tag, 'id' | 'title'>
          & { project: (
            { __typename?: 'Project' }
            & Pick<Project, 'id' | 'title' | 'description'>
          ), developers: Maybe<Array<Maybe<(
            { __typename?: 'Developer' }
            & Pick<Developer, 'id' | 'name' | 'availability'>
          )>>> }
        )>>>, tasks: Maybe<Array<Maybe<(
          { __typename?: 'Task' }
          & Pick<Task, 'id' | 'title' | 'hours' | 'deadline' | 'content' | 'priority' | 'complete'>
          & { project: (
            { __typename?: 'Project' }
            & Pick<Project, 'id' | 'title' | 'description'>
          ), column: Maybe<(
            { __typename?: 'Column' }
            & Pick<Column, 'id' | 'title'>
          )>, developers: Maybe<Array<Maybe<(
            { __typename?: 'Developer' }
            & Pick<Developer, 'id' | 'name' | 'availability'>
          )>>>, likes: Maybe<Array<Maybe<(
            { __typename?: 'Developer' }
            & Pick<Developer, 'id' | 'name' | 'availability'>
          )>>>, comments: Maybe<Array<Maybe<(
            { __typename?: 'Comment' }
            & Pick<Comment, 'id' | 'content'>
          )>>> }
        )>>>, liked: Maybe<Array<Maybe<(
          { __typename?: 'Task' }
          & Pick<Task, 'id' | 'title' | 'hours' | 'deadline' | 'content' | 'priority' | 'complete'>
          & { project: (
            { __typename?: 'Project' }
            & Pick<Project, 'id' | 'title' | 'description'>
          ), column: Maybe<(
            { __typename?: 'Column' }
            & Pick<Column, 'id' | 'title'>
          )>, developers: Maybe<Array<Maybe<(
            { __typename?: 'Developer' }
            & Pick<Developer, 'id' | 'name' | 'availability'>
          )>>>, likes: Maybe<Array<Maybe<(
            { __typename?: 'Developer' }
            & Pick<Developer, 'id' | 'name' | 'availability'>
          )>>>, comments: Maybe<Array<Maybe<(
            { __typename?: 'Comment' }
            & Pick<Comment, 'id' | 'content'>
          )>>> }
        )>>> }
      ) }
    )>>> }
  )> }
);

export type UpdateDeveloperMutationVariables = {
  filter?: Maybe<ProjectFilter>,
  filter1?: Maybe<DeveloperFilter>,
  order?: Maybe<DeveloperOrder>,
  first?: Maybe<Scalars['Int']>,
  offset?: Maybe<Scalars['Int']>,
  filter2?: Maybe<TagFilter>,
  order1?: Maybe<TagOrder>,
  first1?: Maybe<Scalars['Int']>,
  offset1?: Maybe<Scalars['Int']>,
  filter3?: Maybe<ProjectFilter>,
  filter4?: Maybe<ColumnFilter>,
  filter5?: Maybe<DeveloperFilter>,
  order2?: Maybe<DeveloperOrder>,
  first2?: Maybe<Scalars['Int']>,
  offset2?: Maybe<Scalars['Int']>,
  filter6?: Maybe<DeveloperFilter>,
  order3?: Maybe<DeveloperOrder>,
  first3?: Maybe<Scalars['Int']>,
  offset3?: Maybe<Scalars['Int']>,
  filter7?: Maybe<CommentFilter>,
  order4?: Maybe<CommentOrder>,
  first4?: Maybe<Scalars['Int']>,
  offset4?: Maybe<Scalars['Int']>,
  filter8?: Maybe<TaskFilter>,
  order5?: Maybe<TaskOrder>,
  first5?: Maybe<Scalars['Int']>,
  offset5?: Maybe<Scalars['Int']>,
  filter9?: Maybe<ProjectFilter>,
  filter10?: Maybe<ColumnFilter>,
  order6?: Maybe<ColumnOrder>,
  first6?: Maybe<Scalars['Int']>,
  offset6?: Maybe<Scalars['Int']>,
  filter11?: Maybe<BoardFilter>,
  order7?: Maybe<BoardOrder>,
  first7?: Maybe<Scalars['Int']>,
  offset7?: Maybe<Scalars['Int']>,
  filter12?: Maybe<ProjectFilter>,
  filter13?: Maybe<UserFilter>,
  order8?: Maybe<UserOrder>,
  first8?: Maybe<Scalars['Int']>,
  offset8?: Maybe<Scalars['Int']>,
  filter14?: Maybe<TagFilter>,
  order9?: Maybe<TagOrder>,
  first9?: Maybe<Scalars['Int']>,
  offset9?: Maybe<Scalars['Int']>,
  filter15?: Maybe<TaskFilter>,
  order10?: Maybe<TaskOrder>,
  first10?: Maybe<Scalars['Int']>,
  offset10?: Maybe<Scalars['Int']>,
  filter16?: Maybe<TaskFilter>,
  order11?: Maybe<TaskOrder>,
  first11?: Maybe<Scalars['Int']>,
  offset11?: Maybe<Scalars['Int']>,
  filter17?: Maybe<DeveloperFilter>,
  order12?: Maybe<DeveloperOrder>,
  first12?: Maybe<Scalars['Int']>,
  offset12?: Maybe<Scalars['Int']>,
  filter18?: Maybe<ProjectFilter>,
  filter19?: Maybe<ProjectFilter>,
  filter20?: Maybe<UserFilter>,
  order13?: Maybe<UserOrder>,
  first13?: Maybe<Scalars['Int']>,
  offset13?: Maybe<Scalars['Int']>,
  filter21?: Maybe<TagFilter>,
  order14?: Maybe<TagOrder>,
  first14?: Maybe<Scalars['Int']>,
  offset14?: Maybe<Scalars['Int']>,
  filter22?: Maybe<TaskFilter>,
  order15?: Maybe<TaskOrder>,
  first15?: Maybe<Scalars['Int']>,
  offset15?: Maybe<Scalars['Int']>,
  filter23?: Maybe<TaskFilter>,
  order16?: Maybe<TaskOrder>,
  first16?: Maybe<Scalars['Int']>,
  offset16?: Maybe<Scalars['Int']>,
  filter24?: Maybe<DeveloperFilter>,
  order17?: Maybe<DeveloperOrder>,
  first17?: Maybe<Scalars['Int']>,
  offset17?: Maybe<Scalars['Int']>,
  filter25?: Maybe<ProjectFilter>,
  filter26?: Maybe<ColumnFilter>,
  filter27?: Maybe<DeveloperFilter>,
  order18?: Maybe<DeveloperOrder>,
  first18?: Maybe<Scalars['Int']>,
  offset18?: Maybe<Scalars['Int']>,
  filter28?: Maybe<DeveloperFilter>,
  order19?: Maybe<DeveloperOrder>,
  first19?: Maybe<Scalars['Int']>,
  offset19?: Maybe<Scalars['Int']>,
  filter29?: Maybe<CommentFilter>,
  order20?: Maybe<CommentOrder>,
  first20?: Maybe<Scalars['Int']>,
  offset20?: Maybe<Scalars['Int']>,
  filter30?: Maybe<TaskFilter>,
  order21?: Maybe<TaskOrder>,
  first21?: Maybe<Scalars['Int']>,
  offset21?: Maybe<Scalars['Int']>,
  filter31?: Maybe<UserFilter>,
  order22?: Maybe<UserOrder>,
  first22?: Maybe<Scalars['Int']>,
  offset22?: Maybe<Scalars['Int']>,
  filter32?: Maybe<TagFilter>,
  order23?: Maybe<TagOrder>,
  first23?: Maybe<Scalars['Int']>,
  offset23?: Maybe<Scalars['Int']>,
  filter33?: Maybe<TaskFilter>,
  order24?: Maybe<TaskOrder>,
  first24?: Maybe<Scalars['Int']>,
  offset24?: Maybe<Scalars['Int']>,
  filter34?: Maybe<ProjectFilter>,
  filter35?: Maybe<BoardFilter>,
  filter36?: Maybe<TaskFilter>,
  order25?: Maybe<TaskOrder>,
  first25?: Maybe<Scalars['Int']>,
  offset25?: Maybe<Scalars['Int']>,
  filter37?: Maybe<ColumnFilter>,
  filter38?: Maybe<DeveloperFilter>,
  order26?: Maybe<DeveloperOrder>,
  first26?: Maybe<Scalars['Int']>,
  offset26?: Maybe<Scalars['Int']>,
  filter39?: Maybe<ProjectFilter>,
  filter40?: Maybe<UserFilter>,
  order27?: Maybe<UserOrder>,
  first27?: Maybe<Scalars['Int']>,
  offset27?: Maybe<Scalars['Int']>,
  filter41?: Maybe<TagFilter>,
  order28?: Maybe<TagOrder>,
  first28?: Maybe<Scalars['Int']>,
  offset28?: Maybe<Scalars['Int']>,
  filter42?: Maybe<TaskFilter>,
  order29?: Maybe<TaskOrder>,
  first29?: Maybe<Scalars['Int']>,
  offset29?: Maybe<Scalars['Int']>,
  filter43?: Maybe<TaskFilter>,
  order30?: Maybe<TaskOrder>,
  first30?: Maybe<Scalars['Int']>,
  offset30?: Maybe<Scalars['Int']>,
  filter44?: Maybe<DeveloperFilter>,
  order31?: Maybe<DeveloperOrder>,
  first31?: Maybe<Scalars['Int']>,
  offset31?: Maybe<Scalars['Int']>,
  filter45?: Maybe<TaskFilter>,
  filter46?: Maybe<DeveloperFilter>,
  filter47?: Maybe<CommentFilter>,
  order32?: Maybe<CommentOrder>,
  first32?: Maybe<Scalars['Int']>,
  offset32?: Maybe<Scalars['Int']>,
  filter48?: Maybe<TaskFilter>,
  order33?: Maybe<TaskOrder>,
  first33?: Maybe<Scalars['Int']>,
  offset33?: Maybe<Scalars['Int']>,
  filter49?: Maybe<DeveloperFilter>,
  order34?: Maybe<DeveloperOrder>,
  first34?: Maybe<Scalars['Int']>,
  offset34?: Maybe<Scalars['Int']>,
  input: UpdateDeveloperInput
};


export type UpdateDeveloperMutation = (
  { __typename?: 'Mutation' }
  & { updateDeveloper: Maybe<(
    { __typename?: 'UpdateDeveloperPayload' }
    & Pick<UpdateDeveloperPayload, 'numUids'>
    & { developer: Maybe<Array<Maybe<(
      { __typename?: 'Developer' }
      & Pick<Developer, 'id' | 'name' | 'availability'>
      & { project: (
        { __typename?: 'Project' }
        & Pick<Project, 'id' | 'title' | 'description'>
        & { tags: Maybe<Array<Maybe<(
          { __typename?: 'Tag' }
          & Pick<Tag, 'id' | 'title'>
          & { project: (
            { __typename?: 'Project' }
            & Pick<Project, 'id' | 'title' | 'description'>
          ), developers: Maybe<Array<Maybe<(
            { __typename?: 'Developer' }
            & Pick<Developer, 'id' | 'name' | 'availability'>
          )>>> }
        )>>>, tasks: Maybe<Array<Maybe<(
          { __typename?: 'Task' }
          & Pick<Task, 'id' | 'title' | 'hours' | 'deadline' | 'content' | 'priority' | 'complete'>
          & { project: (
            { __typename?: 'Project' }
            & Pick<Project, 'id' | 'title' | 'description'>
          ), column: Maybe<(
            { __typename?: 'Column' }
            & Pick<Column, 'id' | 'title'>
          )>, developers: Maybe<Array<Maybe<(
            { __typename?: 'Developer' }
            & Pick<Developer, 'id' | 'name' | 'availability'>
          )>>>, likes: Maybe<Array<Maybe<(
            { __typename?: 'Developer' }
            & Pick<Developer, 'id' | 'name' | 'availability'>
          )>>>, comments: Maybe<Array<Maybe<(
            { __typename?: 'Comment' }
            & Pick<Comment, 'id' | 'content'>
          )>>> }
        )>>>, boards: Maybe<Array<Maybe<(
          { __typename?: 'Board' }
          & Pick<Board, 'id' | 'title' | 'order'>
          & { project: (
            { __typename?: 'Project' }
            & Pick<Project, 'id' | 'title' | 'description'>
          ), columns: Maybe<Array<Maybe<(
            { __typename?: 'Column' }
            & Pick<Column, 'id' | 'title'>
          )>>> }
        )>>>, developers: Maybe<Array<Maybe<(
          { __typename?: 'Developer' }
          & Pick<Developer, 'id' | 'name' | 'availability'>
          & { project: (
            { __typename?: 'Project' }
            & Pick<Project, 'id' | 'title' | 'description'>
          ), user: Maybe<Array<Maybe<(
            { __typename?: 'User' }
            & Pick<User, 'id' | 'username' | 'password' | 'location'>
          )>>>, tags: Maybe<Array<Maybe<(
            { __typename?: 'Tag' }
            & Pick<Tag, 'id' | 'title'>
          )>>>, tasks: Maybe<Array<Maybe<(
            { __typename?: 'Task' }
            & Pick<Task, 'id' | 'title' | 'hours' | 'deadline' | 'content' | 'priority' | 'complete'>
          )>>>, liked: Maybe<Array<Maybe<(
            { __typename?: 'Task' }
            & Pick<Task, 'id' | 'title' | 'hours' | 'deadline' | 'content' | 'priority' | 'complete'>
          )>>> }
        )>>> }
      ), user: Maybe<Array<Maybe<(
        { __typename?: 'User' }
        & Pick<User, 'id' | 'username' | 'password' | 'location'>
        & { roles: Maybe<Array<Maybe<(
          { __typename?: 'Developer' }
          & Pick<Developer, 'id' | 'name' | 'availability'>
          & { project: (
            { __typename?: 'Project' }
            & Pick<Project, 'id' | 'title' | 'description'>
          ), user: Maybe<Array<Maybe<(
            { __typename?: 'User' }
            & Pick<User, 'id' | 'username' | 'password' | 'location'>
          )>>>, tags: Maybe<Array<Maybe<(
            { __typename?: 'Tag' }
            & Pick<Tag, 'id' | 'title'>
          )>>>, tasks: Maybe<Array<Maybe<(
            { __typename?: 'Task' }
            & Pick<Task, 'id' | 'title' | 'hours' | 'deadline' | 'content' | 'priority' | 'complete'>
          )>>>, liked: Maybe<Array<Maybe<(
            { __typename?: 'Task' }
            & Pick<Task, 'id' | 'title' | 'hours' | 'deadline' | 'content' | 'priority' | 'complete'>
          )>>> }
        )>>>, stars: Maybe<Array<Maybe<(
          { __typename?: 'Task' }
          & Pick<Task, 'id' | 'title' | 'hours' | 'deadline' | 'content' | 'priority' | 'complete'>
          & { project: (
            { __typename?: 'Project' }
            & Pick<Project, 'id' | 'title' | 'description'>
          ), column: Maybe<(
            { __typename?: 'Column' }
            & Pick<Column, 'id' | 'title'>
          )>, developers: Maybe<Array<Maybe<(
            { __typename?: 'Developer' }
            & Pick<Developer, 'id' | 'name' | 'availability'>
          )>>>, likes: Maybe<Array<Maybe<(
            { __typename?: 'Developer' }
            & Pick<Developer, 'id' | 'name' | 'availability'>
          )>>>, comments: Maybe<Array<Maybe<(
            { __typename?: 'Comment' }
            & Pick<Comment, 'id' | 'content'>
          )>>> }
        )>>> }
      )>>>, tags: Maybe<Array<Maybe<(
        { __typename?: 'Tag' }
        & Pick<Tag, 'id' | 'title'>
      )>>>, tasks: Maybe<Array<Maybe<(
        { __typename?: 'Task' }
        & Pick<Task, 'id' | 'title' | 'hours' | 'deadline' | 'content' | 'priority' | 'complete'>
      )>>>, liked: Maybe<Array<Maybe<(
        { __typename?: 'Task' }
        & Pick<Task, 'id' | 'title' | 'hours' | 'deadline' | 'content' | 'priority' | 'complete'>
        & { project: (
          { __typename?: 'Project' }
          & Pick<Project, 'id' | 'title' | 'description'>
        ), column: Maybe<(
          { __typename?: 'Column' }
          & Pick<Column, 'id' | 'title'>
          & { board: (
            { __typename?: 'Board' }
            & Pick<Board, 'id' | 'title' | 'order'>
          ), tasks: Maybe<Array<Maybe<(
            { __typename?: 'Task' }
            & Pick<Task, 'id' | 'title' | 'hours' | 'deadline' | 'content' | 'priority' | 'complete'>
          )>>> }
        )>, developers: Maybe<Array<Maybe<(
          { __typename?: 'Developer' }
          & Pick<Developer, 'id' | 'name' | 'availability'>
        )>>>, likes: Maybe<Array<Maybe<(
          { __typename?: 'Developer' }
          & Pick<Developer, 'id' | 'name' | 'availability'>
          & { project: (
            { __typename?: 'Project' }
            & Pick<Project, 'id' | 'title' | 'description'>
          ), user: Maybe<Array<Maybe<(
            { __typename?: 'User' }
            & Pick<User, 'id' | 'username' | 'password' | 'location'>
          )>>>, tags: Maybe<Array<Maybe<(
            { __typename?: 'Tag' }
            & Pick<Tag, 'id' | 'title'>
          )>>>, tasks: Maybe<Array<Maybe<(
            { __typename?: 'Task' }
            & Pick<Task, 'id' | 'title' | 'hours' | 'deadline' | 'content' | 'priority' | 'complete'>
          )>>>, liked: Maybe<Array<Maybe<(
            { __typename?: 'Task' }
            & Pick<Task, 'id' | 'title' | 'hours' | 'deadline' | 'content' | 'priority' | 'complete'>
          )>>> }
        )>>>, comments: Maybe<Array<Maybe<(
          { __typename?: 'Comment' }
          & Pick<Comment, 'id' | 'content'>
          & { task: (
            { __typename?: 'Task' }
            & Pick<Task, 'id' | 'title' | 'hours' | 'deadline' | 'content' | 'priority' | 'complete'>
          ), developer: (
            { __typename?: 'Developer' }
            & Pick<Developer, 'id' | 'name' | 'availability'>
          ) }
        )>>> }
      )>>> }
    )>>> }
  )> }
);

export type UpdateProjectMutationVariables = {
  filter?: Maybe<TaskFilter>,
  order?: Maybe<TaskOrder>,
  first?: Maybe<Scalars['Int']>,
  offset?: Maybe<Scalars['Int']>,
  filter1?: Maybe<BoardFilter>,
  order1?: Maybe<BoardOrder>,
  first1?: Maybe<Scalars['Int']>,
  offset1?: Maybe<Scalars['Int']>,
  filter2?: Maybe<DeveloperFilter>,
  order2?: Maybe<DeveloperOrder>,
  first2?: Maybe<Scalars['Int']>,
  offset2?: Maybe<Scalars['Int']>,
  filter3?: Maybe<ProjectFilter>,
  filter4?: Maybe<ProjectFilter>,
  filter5?: Maybe<UserFilter>,
  order3?: Maybe<UserOrder>,
  first3?: Maybe<Scalars['Int']>,
  offset3?: Maybe<Scalars['Int']>,
  filter6?: Maybe<TagFilter>,
  order4?: Maybe<TagOrder>,
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
  filter9?: Maybe<DeveloperFilter>,
  order7?: Maybe<DeveloperOrder>,
  first7?: Maybe<Scalars['Int']>,
  offset7?: Maybe<Scalars['Int']>,
  filter10?: Maybe<TagFilter>,
  order8?: Maybe<TagOrder>,
  first8?: Maybe<Scalars['Int']>,
  offset8?: Maybe<Scalars['Int']>,
  filter11?: Maybe<ProjectFilter>,
  order9?: Maybe<ProjectOrder>,
  first9?: Maybe<Scalars['Int']>,
  offset9?: Maybe<Scalars['Int']>,
  input: UpdateProjectInput
};


export type UpdateProjectMutation = (
  { __typename?: 'Mutation' }
  & { updateProject: Maybe<(
    { __typename?: 'UpdateProjectPayload' }
    & Pick<UpdateProjectPayload, 'numUids'>
    & { project: Maybe<Array<Maybe<(
      { __typename?: 'Project' }
      & Pick<Project, 'id' | 'title' | 'description'>
      & { tags: Maybe<Array<Maybe<(
        { __typename?: 'Tag' }
        & Pick<Tag, 'id' | 'title'>
        & { project: (
          { __typename?: 'Project' }
          & Pick<Project, 'id' | 'title' | 'description'>
          & { tasks: Maybe<Array<Maybe<(
            { __typename?: 'Task' }
            & Pick<Task, 'id' | 'title' | 'hours' | 'deadline' | 'content' | 'priority' | 'complete'>
          )>>>, boards: Maybe<Array<Maybe<(
            { __typename?: 'Board' }
            & Pick<Board, 'id' | 'title' | 'order'>
          )>>>, developers: Maybe<Array<Maybe<(
            { __typename?: 'Developer' }
            & Pick<Developer, 'id' | 'name' | 'availability'>
          )>>> }
        ), developers: Maybe<Array<Maybe<(
          { __typename?: 'Developer' }
          & Pick<Developer, 'id' | 'name' | 'availability'>
          & { project: (
            { __typename?: 'Project' }
            & Pick<Project, 'id' | 'title' | 'description'>
          ), user: Maybe<Array<Maybe<(
            { __typename?: 'User' }
            & Pick<User, 'id' | 'username' | 'password' | 'location'>
          )>>>, tags: Maybe<Array<Maybe<(
            { __typename?: 'Tag' }
            & Pick<Tag, 'id' | 'title'>
          )>>>, tasks: Maybe<Array<Maybe<(
            { __typename?: 'Task' }
            & Pick<Task, 'id' | 'title' | 'hours' | 'deadline' | 'content' | 'priority' | 'complete'>
          )>>>, liked: Maybe<Array<Maybe<(
            { __typename?: 'Task' }
            & Pick<Task, 'id' | 'title' | 'hours' | 'deadline' | 'content' | 'priority' | 'complete'>
          )>>> }
        )>>> }
      )>>> }
    )>>> }
  )> }
);

export type UpdateTagMutationVariables = {
  filter?: Maybe<ProjectFilter>,
  filter1?: Maybe<DeveloperFilter>,
  order?: Maybe<DeveloperOrder>,
  first?: Maybe<Scalars['Int']>,
  offset?: Maybe<Scalars['Int']>,
  filter2?: Maybe<TagFilter>,
  order1?: Maybe<TagOrder>,
  first1?: Maybe<Scalars['Int']>,
  offset1?: Maybe<Scalars['Int']>,
  filter3?: Maybe<ProjectFilter>,
  filter4?: Maybe<ColumnFilter>,
  filter5?: Maybe<DeveloperFilter>,
  order2?: Maybe<DeveloperOrder>,
  first2?: Maybe<Scalars['Int']>,
  offset2?: Maybe<Scalars['Int']>,
  filter6?: Maybe<DeveloperFilter>,
  order3?: Maybe<DeveloperOrder>,
  first3?: Maybe<Scalars['Int']>,
  offset3?: Maybe<Scalars['Int']>,
  filter7?: Maybe<CommentFilter>,
  order4?: Maybe<CommentOrder>,
  first4?: Maybe<Scalars['Int']>,
  offset4?: Maybe<Scalars['Int']>,
  filter8?: Maybe<TaskFilter>,
  order5?: Maybe<TaskOrder>,
  first5?: Maybe<Scalars['Int']>,
  offset5?: Maybe<Scalars['Int']>,
  filter9?: Maybe<ProjectFilter>,
  filter10?: Maybe<ColumnFilter>,
  order6?: Maybe<ColumnOrder>,
  first6?: Maybe<Scalars['Int']>,
  offset6?: Maybe<Scalars['Int']>,
  filter11?: Maybe<BoardFilter>,
  order7?: Maybe<BoardOrder>,
  first7?: Maybe<Scalars['Int']>,
  offset7?: Maybe<Scalars['Int']>,
  filter12?: Maybe<ProjectFilter>,
  filter13?: Maybe<UserFilter>,
  order8?: Maybe<UserOrder>,
  first8?: Maybe<Scalars['Int']>,
  offset8?: Maybe<Scalars['Int']>,
  filter14?: Maybe<TagFilter>,
  order9?: Maybe<TagOrder>,
  first9?: Maybe<Scalars['Int']>,
  offset9?: Maybe<Scalars['Int']>,
  filter15?: Maybe<TaskFilter>,
  order10?: Maybe<TaskOrder>,
  first10?: Maybe<Scalars['Int']>,
  offset10?: Maybe<Scalars['Int']>,
  filter16?: Maybe<TaskFilter>,
  order11?: Maybe<TaskOrder>,
  first11?: Maybe<Scalars['Int']>,
  offset11?: Maybe<Scalars['Int']>,
  filter17?: Maybe<DeveloperFilter>,
  order12?: Maybe<DeveloperOrder>,
  first12?: Maybe<Scalars['Int']>,
  offset12?: Maybe<Scalars['Int']>,
  filter18?: Maybe<ProjectFilter>,
  filter19?: Maybe<DeveloperFilter>,
  order13?: Maybe<DeveloperOrder>,
  first13?: Maybe<Scalars['Int']>,
  offset13?: Maybe<Scalars['Int']>,
  filter20?: Maybe<TagFilter>,
  order14?: Maybe<TagOrder>,
  first14?: Maybe<Scalars['Int']>,
  offset14?: Maybe<Scalars['Int']>,
  input: UpdateTagInput
};


export type UpdateTagMutation = (
  { __typename?: 'Mutation' }
  & { updateTag: Maybe<(
    { __typename?: 'UpdateTagPayload' }
    & Pick<UpdateTagPayload, 'numUids'>
    & { tag: Maybe<Array<Maybe<(
      { __typename?: 'Tag' }
      & Pick<Tag, 'id' | 'title'>
      & { project: (
        { __typename?: 'Project' }
        & Pick<Project, 'id' | 'title' | 'description'>
        & { tags: Maybe<Array<Maybe<(
          { __typename?: 'Tag' }
          & Pick<Tag, 'id' | 'title'>
          & { project: (
            { __typename?: 'Project' }
            & Pick<Project, 'id' | 'title' | 'description'>
          ), developers: Maybe<Array<Maybe<(
            { __typename?: 'Developer' }
            & Pick<Developer, 'id' | 'name' | 'availability'>
          )>>> }
        )>>>, tasks: Maybe<Array<Maybe<(
          { __typename?: 'Task' }
          & Pick<Task, 'id' | 'title' | 'hours' | 'deadline' | 'content' | 'priority' | 'complete'>
          & { project: (
            { __typename?: 'Project' }
            & Pick<Project, 'id' | 'title' | 'description'>
          ), column: Maybe<(
            { __typename?: 'Column' }
            & Pick<Column, 'id' | 'title'>
          )>, developers: Maybe<Array<Maybe<(
            { __typename?: 'Developer' }
            & Pick<Developer, 'id' | 'name' | 'availability'>
          )>>>, likes: Maybe<Array<Maybe<(
            { __typename?: 'Developer' }
            & Pick<Developer, 'id' | 'name' | 'availability'>
          )>>>, comments: Maybe<Array<Maybe<(
            { __typename?: 'Comment' }
            & Pick<Comment, 'id' | 'content'>
          )>>> }
        )>>>, boards: Maybe<Array<Maybe<(
          { __typename?: 'Board' }
          & Pick<Board, 'id' | 'title' | 'order'>
          & { project: (
            { __typename?: 'Project' }
            & Pick<Project, 'id' | 'title' | 'description'>
          ), columns: Maybe<Array<Maybe<(
            { __typename?: 'Column' }
            & Pick<Column, 'id' | 'title'>
          )>>> }
        )>>>, developers: Maybe<Array<Maybe<(
          { __typename?: 'Developer' }
          & Pick<Developer, 'id' | 'name' | 'availability'>
          & { project: (
            { __typename?: 'Project' }
            & Pick<Project, 'id' | 'title' | 'description'>
          ), user: Maybe<Array<Maybe<(
            { __typename?: 'User' }
            & Pick<User, 'id' | 'username' | 'password' | 'location'>
          )>>>, tags: Maybe<Array<Maybe<(
            { __typename?: 'Tag' }
            & Pick<Tag, 'id' | 'title'>
          )>>>, tasks: Maybe<Array<Maybe<(
            { __typename?: 'Task' }
            & Pick<Task, 'id' | 'title' | 'hours' | 'deadline' | 'content' | 'priority' | 'complete'>
          )>>>, liked: Maybe<Array<Maybe<(
            { __typename?: 'Task' }
            & Pick<Task, 'id' | 'title' | 'hours' | 'deadline' | 'content' | 'priority' | 'complete'>
          )>>> }
        )>>> }
      ), developers: Maybe<Array<Maybe<(
        { __typename?: 'Developer' }
        & Pick<Developer, 'id' | 'name' | 'availability'>
      )>>> }
    )>>> }
  )> }
);

export type UpdateTaskMutationVariables = {
  filter?: Maybe<ProjectFilter>,
  filter1?: Maybe<DeveloperFilter>,
  order?: Maybe<DeveloperOrder>,
  first?: Maybe<Scalars['Int']>,
  offset?: Maybe<Scalars['Int']>,
  filter2?: Maybe<TagFilter>,
  order1?: Maybe<TagOrder>,
  first1?: Maybe<Scalars['Int']>,
  offset1?: Maybe<Scalars['Int']>,
  filter3?: Maybe<ProjectFilter>,
  filter4?: Maybe<ColumnFilter>,
  filter5?: Maybe<DeveloperFilter>,
  order2?: Maybe<DeveloperOrder>,
  first2?: Maybe<Scalars['Int']>,
  offset2?: Maybe<Scalars['Int']>,
  filter6?: Maybe<DeveloperFilter>,
  order3?: Maybe<DeveloperOrder>,
  first3?: Maybe<Scalars['Int']>,
  offset3?: Maybe<Scalars['Int']>,
  filter7?: Maybe<CommentFilter>,
  order4?: Maybe<CommentOrder>,
  first4?: Maybe<Scalars['Int']>,
  offset4?: Maybe<Scalars['Int']>,
  filter8?: Maybe<TaskFilter>,
  order5?: Maybe<TaskOrder>,
  first5?: Maybe<Scalars['Int']>,
  offset5?: Maybe<Scalars['Int']>,
  filter9?: Maybe<ProjectFilter>,
  filter10?: Maybe<ColumnFilter>,
  order6?: Maybe<ColumnOrder>,
  first6?: Maybe<Scalars['Int']>,
  offset6?: Maybe<Scalars['Int']>,
  filter11?: Maybe<BoardFilter>,
  order7?: Maybe<BoardOrder>,
  first7?: Maybe<Scalars['Int']>,
  offset7?: Maybe<Scalars['Int']>,
  filter12?: Maybe<ProjectFilter>,
  filter13?: Maybe<UserFilter>,
  order8?: Maybe<UserOrder>,
  first8?: Maybe<Scalars['Int']>,
  offset8?: Maybe<Scalars['Int']>,
  filter14?: Maybe<TagFilter>,
  order9?: Maybe<TagOrder>,
  first9?: Maybe<Scalars['Int']>,
  offset9?: Maybe<Scalars['Int']>,
  filter15?: Maybe<TaskFilter>,
  order10?: Maybe<TaskOrder>,
  first10?: Maybe<Scalars['Int']>,
  offset10?: Maybe<Scalars['Int']>,
  filter16?: Maybe<TaskFilter>,
  order11?: Maybe<TaskOrder>,
  first11?: Maybe<Scalars['Int']>,
  offset11?: Maybe<Scalars['Int']>,
  filter17?: Maybe<DeveloperFilter>,
  order12?: Maybe<DeveloperOrder>,
  first12?: Maybe<Scalars['Int']>,
  offset12?: Maybe<Scalars['Int']>,
  filter18?: Maybe<ProjectFilter>,
  filter19?: Maybe<ProjectFilter>,
  filter20?: Maybe<ColumnFilter>,
  order13?: Maybe<ColumnOrder>,
  first13?: Maybe<Scalars['Int']>,
  offset13?: Maybe<Scalars['Int']>,
  filter21?: Maybe<BoardFilter>,
  filter22?: Maybe<TaskFilter>,
  order14?: Maybe<TaskOrder>,
  first14?: Maybe<Scalars['Int']>,
  offset14?: Maybe<Scalars['Int']>,
  filter23?: Maybe<ColumnFilter>,
  filter24?: Maybe<DeveloperFilter>,
  order15?: Maybe<DeveloperOrder>,
  first15?: Maybe<Scalars['Int']>,
  offset15?: Maybe<Scalars['Int']>,
  filter25?: Maybe<ProjectFilter>,
  filter26?: Maybe<DeveloperFilter>,
  order16?: Maybe<DeveloperOrder>,
  first16?: Maybe<Scalars['Int']>,
  offset16?: Maybe<Scalars['Int']>,
  filter27?: Maybe<TaskFilter>,
  order17?: Maybe<TaskOrder>,
  first17?: Maybe<Scalars['Int']>,
  offset17?: Maybe<Scalars['Int']>,
  filter28?: Maybe<UserFilter>,
  order18?: Maybe<UserOrder>,
  first18?: Maybe<Scalars['Int']>,
  offset18?: Maybe<Scalars['Int']>,
  filter29?: Maybe<TagFilter>,
  order19?: Maybe<TagOrder>,
  first19?: Maybe<Scalars['Int']>,
  offset19?: Maybe<Scalars['Int']>,
  filter30?: Maybe<TaskFilter>,
  order20?: Maybe<TaskOrder>,
  first20?: Maybe<Scalars['Int']>,
  offset20?: Maybe<Scalars['Int']>,
  filter31?: Maybe<ProjectFilter>,
  filter32?: Maybe<ColumnFilter>,
  filter33?: Maybe<DeveloperFilter>,
  order21?: Maybe<DeveloperOrder>,
  first21?: Maybe<Scalars['Int']>,
  offset21?: Maybe<Scalars['Int']>,
  filter34?: Maybe<DeveloperFilter>,
  order22?: Maybe<DeveloperOrder>,
  first22?: Maybe<Scalars['Int']>,
  offset22?: Maybe<Scalars['Int']>,
  filter35?: Maybe<CommentFilter>,
  order23?: Maybe<CommentOrder>,
  first23?: Maybe<Scalars['Int']>,
  offset23?: Maybe<Scalars['Int']>,
  filter36?: Maybe<TaskFilter>,
  order24?: Maybe<TaskOrder>,
  first24?: Maybe<Scalars['Int']>,
  offset24?: Maybe<Scalars['Int']>,
  filter37?: Maybe<DeveloperFilter>,
  order25?: Maybe<DeveloperOrder>,
  first25?: Maybe<Scalars['Int']>,
  offset25?: Maybe<Scalars['Int']>,
  filter38?: Maybe<TaskFilter>,
  filter39?: Maybe<ProjectFilter>,
  filter40?: Maybe<UserFilter>,
  order26?: Maybe<UserOrder>,
  first26?: Maybe<Scalars['Int']>,
  offset26?: Maybe<Scalars['Int']>,
  filter41?: Maybe<TagFilter>,
  order27?: Maybe<TagOrder>,
  first27?: Maybe<Scalars['Int']>,
  offset27?: Maybe<Scalars['Int']>,
  filter42?: Maybe<TaskFilter>,
  order28?: Maybe<TaskOrder>,
  first28?: Maybe<Scalars['Int']>,
  offset28?: Maybe<Scalars['Int']>,
  filter43?: Maybe<TaskFilter>,
  order29?: Maybe<TaskOrder>,
  first29?: Maybe<Scalars['Int']>,
  offset29?: Maybe<Scalars['Int']>,
  filter44?: Maybe<DeveloperFilter>,
  filter45?: Maybe<CommentFilter>,
  order30?: Maybe<CommentOrder>,
  first30?: Maybe<Scalars['Int']>,
  offset30?: Maybe<Scalars['Int']>,
  filter46?: Maybe<TaskFilter>,
  order31?: Maybe<TaskOrder>,
  first31?: Maybe<Scalars['Int']>,
  offset31?: Maybe<Scalars['Int']>,
  input: UpdateTaskInput
};


export type UpdateTaskMutation = (
  { __typename?: 'Mutation' }
  & { updateTask: Maybe<(
    { __typename?: 'UpdateTaskPayload' }
    & Pick<UpdateTaskPayload, 'numUids'>
    & { task: Maybe<Array<Maybe<(
      { __typename?: 'Task' }
      & Pick<Task, 'id' | 'title' | 'hours' | 'deadline' | 'content' | 'priority' | 'complete'>
      & { project: (
        { __typename?: 'Project' }
        & Pick<Project, 'id' | 'title' | 'description'>
        & { tags: Maybe<Array<Maybe<(
          { __typename?: 'Tag' }
          & Pick<Tag, 'id' | 'title'>
          & { project: (
            { __typename?: 'Project' }
            & Pick<Project, 'id' | 'title' | 'description'>
          ), developers: Maybe<Array<Maybe<(
            { __typename?: 'Developer' }
            & Pick<Developer, 'id' | 'name' | 'availability'>
          )>>> }
        )>>>, tasks: Maybe<Array<Maybe<(
          { __typename?: 'Task' }
          & Pick<Task, 'id' | 'title' | 'hours' | 'deadline' | 'content' | 'priority' | 'complete'>
          & { project: (
            { __typename?: 'Project' }
            & Pick<Project, 'id' | 'title' | 'description'>
          ), column: Maybe<(
            { __typename?: 'Column' }
            & Pick<Column, 'id' | 'title'>
          )>, developers: Maybe<Array<Maybe<(
            { __typename?: 'Developer' }
            & Pick<Developer, 'id' | 'name' | 'availability'>
          )>>>, likes: Maybe<Array<Maybe<(
            { __typename?: 'Developer' }
            & Pick<Developer, 'id' | 'name' | 'availability'>
          )>>>, comments: Maybe<Array<Maybe<(
            { __typename?: 'Comment' }
            & Pick<Comment, 'id' | 'content'>
          )>>> }
        )>>>, boards: Maybe<Array<Maybe<(
          { __typename?: 'Board' }
          & Pick<Board, 'id' | 'title' | 'order'>
          & { project: (
            { __typename?: 'Project' }
            & Pick<Project, 'id' | 'title' | 'description'>
          ), columns: Maybe<Array<Maybe<(
            { __typename?: 'Column' }
            & Pick<Column, 'id' | 'title'>
          )>>> }
        )>>>, developers: Maybe<Array<Maybe<(
          { __typename?: 'Developer' }
          & Pick<Developer, 'id' | 'name' | 'availability'>
          & { project: (
            { __typename?: 'Project' }
            & Pick<Project, 'id' | 'title' | 'description'>
          ), user: Maybe<Array<Maybe<(
            { __typename?: 'User' }
            & Pick<User, 'id' | 'username' | 'password' | 'location'>
          )>>>, tags: Maybe<Array<Maybe<(
            { __typename?: 'Tag' }
            & Pick<Tag, 'id' | 'title'>
          )>>>, tasks: Maybe<Array<Maybe<(
            { __typename?: 'Task' }
            & Pick<Task, 'id' | 'title' | 'hours' | 'deadline' | 'content' | 'priority' | 'complete'>
          )>>>, liked: Maybe<Array<Maybe<(
            { __typename?: 'Task' }
            & Pick<Task, 'id' | 'title' | 'hours' | 'deadline' | 'content' | 'priority' | 'complete'>
          )>>> }
        )>>> }
      ), column: Maybe<(
        { __typename?: 'Column' }
        & Pick<Column, 'id' | 'title'>
        & { board: (
          { __typename?: 'Board' }
          & Pick<Board, 'id' | 'title' | 'order'>
          & { project: (
            { __typename?: 'Project' }
            & Pick<Project, 'id' | 'title' | 'description'>
          ), columns: Maybe<Array<Maybe<(
            { __typename?: 'Column' }
            & Pick<Column, 'id' | 'title'>
          )>>> }
        ), tasks: Maybe<Array<Maybe<(
          { __typename?: 'Task' }
          & Pick<Task, 'id' | 'title' | 'hours' | 'deadline' | 'content' | 'priority' | 'complete'>
        )>>> }
      )>, developers: Maybe<Array<Maybe<(
        { __typename?: 'Developer' }
        & Pick<Developer, 'id' | 'name' | 'availability'>
      )>>>, likes: Maybe<Array<Maybe<(
        { __typename?: 'Developer' }
        & Pick<Developer, 'id' | 'name' | 'availability'>
        & { project: (
          { __typename?: 'Project' }
          & Pick<Project, 'id' | 'title' | 'description'>
        ), user: Maybe<Array<Maybe<(
          { __typename?: 'User' }
          & Pick<User, 'id' | 'username' | 'password' | 'location'>
          & { roles: Maybe<Array<Maybe<(
            { __typename?: 'Developer' }
            & Pick<Developer, 'id' | 'name' | 'availability'>
          )>>>, stars: Maybe<Array<Maybe<(
            { __typename?: 'Task' }
            & Pick<Task, 'id' | 'title' | 'hours' | 'deadline' | 'content' | 'priority' | 'complete'>
          )>>> }
        )>>>, tags: Maybe<Array<Maybe<(
          { __typename?: 'Tag' }
          & Pick<Tag, 'id' | 'title'>
        )>>>, tasks: Maybe<Array<Maybe<(
          { __typename?: 'Task' }
          & Pick<Task, 'id' | 'title' | 'hours' | 'deadline' | 'content' | 'priority' | 'complete'>
        )>>>, liked: Maybe<Array<Maybe<(
          { __typename?: 'Task' }
          & Pick<Task, 'id' | 'title' | 'hours' | 'deadline' | 'content' | 'priority' | 'complete'>
          & { project: (
            { __typename?: 'Project' }
            & Pick<Project, 'id' | 'title' | 'description'>
          ), column: Maybe<(
            { __typename?: 'Column' }
            & Pick<Column, 'id' | 'title'>
          )>, developers: Maybe<Array<Maybe<(
            { __typename?: 'Developer' }
            & Pick<Developer, 'id' | 'name' | 'availability'>
          )>>>, likes: Maybe<Array<Maybe<(
            { __typename?: 'Developer' }
            & Pick<Developer, 'id' | 'name' | 'availability'>
          )>>>, comments: Maybe<Array<Maybe<(
            { __typename?: 'Comment' }
            & Pick<Comment, 'id' | 'content'>
          )>>> }
        )>>> }
      )>>>, comments: Maybe<Array<Maybe<(
        { __typename?: 'Comment' }
        & Pick<Comment, 'id' | 'content'>
        & { task: (
          { __typename?: 'Task' }
          & Pick<Task, 'id' | 'title' | 'hours' | 'deadline' | 'content' | 'priority' | 'complete'>
        ), developer: (
          { __typename?: 'Developer' }
          & Pick<Developer, 'id' | 'name' | 'availability'>
          & { project: (
            { __typename?: 'Project' }
            & Pick<Project, 'id' | 'title' | 'description'>
          ), user: Maybe<Array<Maybe<(
            { __typename?: 'User' }
            & Pick<User, 'id' | 'username' | 'password' | 'location'>
          )>>>, tags: Maybe<Array<Maybe<(
            { __typename?: 'Tag' }
            & Pick<Tag, 'id' | 'title'>
          )>>>, tasks: Maybe<Array<Maybe<(
            { __typename?: 'Task' }
            & Pick<Task, 'id' | 'title' | 'hours' | 'deadline' | 'content' | 'priority' | 'complete'>
          )>>>, liked: Maybe<Array<Maybe<(
            { __typename?: 'Task' }
            & Pick<Task, 'id' | 'title' | 'hours' | 'deadline' | 'content' | 'priority' | 'complete'>
          )>>> }
        ) }
      )>>> }
    )>>> }
  )> }
);

export type UpdateUserMutationVariables = {
  filter?: Maybe<TagFilter>,
  order?: Maybe<TagOrder>,
  first?: Maybe<Scalars['Int']>,
  offset?: Maybe<Scalars['Int']>,
  filter1?: Maybe<TaskFilter>,
  order1?: Maybe<TaskOrder>,
  first1?: Maybe<Scalars['Int']>,
  offset1?: Maybe<Scalars['Int']>,
  filter2?: Maybe<BoardFilter>,
  order2?: Maybe<BoardOrder>,
  first2?: Maybe<Scalars['Int']>,
  offset2?: Maybe<Scalars['Int']>,
  filter3?: Maybe<DeveloperFilter>,
  order3?: Maybe<DeveloperOrder>,
  first3?: Maybe<Scalars['Int']>,
  offset3?: Maybe<Scalars['Int']>,
  filter4?: Maybe<ProjectFilter>,
  filter5?: Maybe<TaskFilter>,
  order4?: Maybe<TaskOrder>,
  first4?: Maybe<Scalars['Int']>,
  offset4?: Maybe<Scalars['Int']>,
  filter6?: Maybe<UserFilter>,
  order5?: Maybe<UserOrder>,
  first5?: Maybe<Scalars['Int']>,
  offset5?: Maybe<Scalars['Int']>,
  filter7?: Maybe<ProjectFilter>,
  filter8?: Maybe<DeveloperFilter>,
  order6?: Maybe<DeveloperOrder>,
  first6?: Maybe<Scalars['Int']>,
  offset6?: Maybe<Scalars['Int']>,
  filter9?: Maybe<TagFilter>,
  order7?: Maybe<TagOrder>,
  first7?: Maybe<Scalars['Int']>,
  offset7?: Maybe<Scalars['Int']>,
  filter10?: Maybe<ProjectFilter>,
  filter11?: Maybe<ColumnFilter>,
  filter12?: Maybe<DeveloperFilter>,
  order8?: Maybe<DeveloperOrder>,
  first8?: Maybe<Scalars['Int']>,
  offset8?: Maybe<Scalars['Int']>,
  filter13?: Maybe<DeveloperFilter>,
  order9?: Maybe<DeveloperOrder>,
  first9?: Maybe<Scalars['Int']>,
  offset9?: Maybe<Scalars['Int']>,
  filter14?: Maybe<CommentFilter>,
  order10?: Maybe<CommentOrder>,
  first10?: Maybe<Scalars['Int']>,
  offset10?: Maybe<Scalars['Int']>,
  filter15?: Maybe<TaskFilter>,
  order11?: Maybe<TaskOrder>,
  first11?: Maybe<Scalars['Int']>,
  offset11?: Maybe<Scalars['Int']>,
  filter16?: Maybe<ProjectFilter>,
  filter17?: Maybe<ColumnFilter>,
  filter18?: Maybe<DeveloperFilter>,
  order12?: Maybe<DeveloperOrder>,
  first12?: Maybe<Scalars['Int']>,
  offset12?: Maybe<Scalars['Int']>,
  filter19?: Maybe<DeveloperFilter>,
  order13?: Maybe<DeveloperOrder>,
  first13?: Maybe<Scalars['Int']>,
  offset13?: Maybe<Scalars['Int']>,
  filter20?: Maybe<CommentFilter>,
  order14?: Maybe<CommentOrder>,
  first14?: Maybe<Scalars['Int']>,
  offset14?: Maybe<Scalars['Int']>,
  filter21?: Maybe<TaskFilter>,
  order15?: Maybe<TaskOrder>,
  first15?: Maybe<Scalars['Int']>,
  offset15?: Maybe<Scalars['Int']>,
  filter22?: Maybe<DeveloperFilter>,
  order16?: Maybe<DeveloperOrder>,
  first16?: Maybe<Scalars['Int']>,
  offset16?: Maybe<Scalars['Int']>,
  filter23?: Maybe<UserFilter>,
  order17?: Maybe<UserOrder>,
  first17?: Maybe<Scalars['Int']>,
  offset17?: Maybe<Scalars['Int']>,
  input: UpdateUserInput
};


export type UpdateUserMutation = (
  { __typename?: 'Mutation' }
  & { updateUser: Maybe<(
    { __typename?: 'UpdateUserPayload' }
    & Pick<UpdateUserPayload, 'numUids'>
    & { user: Maybe<Array<Maybe<(
      { __typename?: 'User' }
      & Pick<User, 'id' | 'username' | 'password' | 'location'>
      & { roles: Maybe<Array<Maybe<(
        { __typename?: 'Developer' }
        & Pick<Developer, 'id' | 'name' | 'availability'>
        & { project: (
          { __typename?: 'Project' }
          & Pick<Project, 'id' | 'title' | 'description'>
          & { tags: Maybe<Array<Maybe<(
            { __typename?: 'Tag' }
            & Pick<Tag, 'id' | 'title'>
          )>>>, tasks: Maybe<Array<Maybe<(
            { __typename?: 'Task' }
            & Pick<Task, 'id' | 'title' | 'hours' | 'deadline' | 'content' | 'priority' | 'complete'>
          )>>>, boards: Maybe<Array<Maybe<(
            { __typename?: 'Board' }
            & Pick<Board, 'id' | 'title' | 'order'>
          )>>>, developers: Maybe<Array<Maybe<(
            { __typename?: 'Developer' }
            & Pick<Developer, 'id' | 'name' | 'availability'>
          )>>> }
        ), user: Maybe<Array<Maybe<(
          { __typename?: 'User' }
          & Pick<User, 'id' | 'username' | 'password' | 'location'>
          & { stars: Maybe<Array<Maybe<(
            { __typename?: 'Task' }
            & Pick<Task, 'id' | 'title' | 'hours' | 'deadline' | 'content' | 'priority' | 'complete'>
          )>>> }
        )>>>, tags: Maybe<Array<Maybe<(
          { __typename?: 'Tag' }
          & Pick<Tag, 'id' | 'title'>
          & { project: (
            { __typename?: 'Project' }
            & Pick<Project, 'id' | 'title' | 'description'>
          ), developers: Maybe<Array<Maybe<(
            { __typename?: 'Developer' }
            & Pick<Developer, 'id' | 'name' | 'availability'>
          )>>> }
        )>>>, tasks: Maybe<Array<Maybe<(
          { __typename?: 'Task' }
          & Pick<Task, 'id' | 'title' | 'hours' | 'deadline' | 'content' | 'priority' | 'complete'>
          & { project: (
            { __typename?: 'Project' }
            & Pick<Project, 'id' | 'title' | 'description'>
          ), column: Maybe<(
            { __typename?: 'Column' }
            & Pick<Column, 'id' | 'title'>
          )>, developers: Maybe<Array<Maybe<(
            { __typename?: 'Developer' }
            & Pick<Developer, 'id' | 'name' | 'availability'>
          )>>>, likes: Maybe<Array<Maybe<(
            { __typename?: 'Developer' }
            & Pick<Developer, 'id' | 'name' | 'availability'>
          )>>>, comments: Maybe<Array<Maybe<(
            { __typename?: 'Comment' }
            & Pick<Comment, 'id' | 'content'>
          )>>> }
        )>>>, liked: Maybe<Array<Maybe<(
          { __typename?: 'Task' }
          & Pick<Task, 'id' | 'title' | 'hours' | 'deadline' | 'content' | 'priority' | 'complete'>
          & { project: (
            { __typename?: 'Project' }
            & Pick<Project, 'id' | 'title' | 'description'>
          ), column: Maybe<(
            { __typename?: 'Column' }
            & Pick<Column, 'id' | 'title'>
          )>, developers: Maybe<Array<Maybe<(
            { __typename?: 'Developer' }
            & Pick<Developer, 'id' | 'name' | 'availability'>
          )>>>, likes: Maybe<Array<Maybe<(
            { __typename?: 'Developer' }
            & Pick<Developer, 'id' | 'name' | 'availability'>
          )>>>, comments: Maybe<Array<Maybe<(
            { __typename?: 'Comment' }
            & Pick<Comment, 'id' | 'content'>
          )>>> }
        )>>> }
      )>>> }
    )>>> }
  )> }
);

export type GetBoardQueryVariables = {
  filter?: Maybe<TaskFilter>,
  order?: Maybe<TaskOrder>,
  first?: Maybe<Scalars['Int']>,
  offset?: Maybe<Scalars['Int']>,
  filter1?: Maybe<BoardFilter>,
  order1?: Maybe<BoardOrder>,
  first1?: Maybe<Scalars['Int']>,
  offset1?: Maybe<Scalars['Int']>,
  filter2?: Maybe<DeveloperFilter>,
  order2?: Maybe<DeveloperOrder>,
  first2?: Maybe<Scalars['Int']>,
  offset2?: Maybe<Scalars['Int']>,
  filter3?: Maybe<ProjectFilter>,
  filter4?: Maybe<ProjectFilter>,
  filter5?: Maybe<UserFilter>,
  order3?: Maybe<UserOrder>,
  first3?: Maybe<Scalars['Int']>,
  offset3?: Maybe<Scalars['Int']>,
  filter6?: Maybe<TagFilter>,
  order4?: Maybe<TagOrder>,
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
  filter9?: Maybe<DeveloperFilter>,
  order7?: Maybe<DeveloperOrder>,
  first7?: Maybe<Scalars['Int']>,
  offset7?: Maybe<Scalars['Int']>,
  filter10?: Maybe<TagFilter>,
  order8?: Maybe<TagOrder>,
  first8?: Maybe<Scalars['Int']>,
  offset8?: Maybe<Scalars['Int']>,
  filter11?: Maybe<ProjectFilter>,
  filter12?: Maybe<ProjectFilter>,
  filter13?: Maybe<TaskFilter>,
  order9?: Maybe<TaskOrder>,
  first9?: Maybe<Scalars['Int']>,
  offset9?: Maybe<Scalars['Int']>,
  filter14?: Maybe<ColumnFilter>,
  order10?: Maybe<ColumnOrder>,
  first10?: Maybe<Scalars['Int']>,
  offset10?: Maybe<Scalars['Int']>,
  filter15?: Maybe<BoardFilter>,
  filter16?: Maybe<ColumnFilter>,
  order11?: Maybe<ColumnOrder>,
  first11?: Maybe<Scalars['Int']>,
  offset11?: Maybe<Scalars['Int']>,
  id: Scalars['ID']
};


export type GetBoardQuery = (
  { __typename?: 'Query' }
  & { getBoard: Maybe<(
    { __typename?: 'Board' }
    & Pick<Board, 'id' | 'title' | 'order'>
    & { project: (
      { __typename?: 'Project' }
      & Pick<Project, 'id' | 'title' | 'description'>
      & { tags: Maybe<Array<Maybe<(
        { __typename?: 'Tag' }
        & Pick<Tag, 'id' | 'title'>
        & { project: (
          { __typename?: 'Project' }
          & Pick<Project, 'id' | 'title' | 'description'>
          & { tasks: Maybe<Array<Maybe<(
            { __typename?: 'Task' }
            & Pick<Task, 'id' | 'title' | 'hours' | 'deadline' | 'content' | 'priority' | 'complete'>
          )>>>, boards: Maybe<Array<Maybe<(
            { __typename?: 'Board' }
            & Pick<Board, 'id' | 'title' | 'order'>
          )>>>, developers: Maybe<Array<Maybe<(
            { __typename?: 'Developer' }
            & Pick<Developer, 'id' | 'name' | 'availability'>
          )>>> }
        ), developers: Maybe<Array<Maybe<(
          { __typename?: 'Developer' }
          & Pick<Developer, 'id' | 'name' | 'availability'>
          & { project: (
            { __typename?: 'Project' }
            & Pick<Project, 'id' | 'title' | 'description'>
          ), user: Maybe<Array<Maybe<(
            { __typename?: 'User' }
            & Pick<User, 'id' | 'username' | 'password' | 'location'>
          )>>>, tags: Maybe<Array<Maybe<(
            { __typename?: 'Tag' }
            & Pick<Tag, 'id' | 'title'>
          )>>>, tasks: Maybe<Array<Maybe<(
            { __typename?: 'Task' }
            & Pick<Task, 'id' | 'title' | 'hours' | 'deadline' | 'content' | 'priority' | 'complete'>
          )>>>, liked: Maybe<Array<Maybe<(
            { __typename?: 'Task' }
            & Pick<Task, 'id' | 'title' | 'hours' | 'deadline' | 'content' | 'priority' | 'complete'>
          )>>> }
        )>>> }
      )>>> }
    ), columns: Maybe<Array<Maybe<(
      { __typename?: 'Column' }
      & Pick<Column, 'id' | 'title'>
      & { board: (
        { __typename?: 'Board' }
        & Pick<Board, 'id' | 'title' | 'order'>
        & { project: (
          { __typename?: 'Project' }
          & Pick<Project, 'id' | 'title' | 'description'>
        ), columns: Maybe<Array<Maybe<(
          { __typename?: 'Column' }
          & Pick<Column, 'id' | 'title'>
          & { tasks: Maybe<Array<Maybe<(
            { __typename?: 'Task' }
            & Pick<Task, 'id' | 'title' | 'hours' | 'deadline' | 'content' | 'priority' | 'complete'>
          )>>> }
        )>>> }
      ) }
    )>>> }
  )> }
);

export type GetColumnQueryVariables = {
  filter?: Maybe<ProjectFilter>,
  filter1?: Maybe<DeveloperFilter>,
  order?: Maybe<DeveloperOrder>,
  first?: Maybe<Scalars['Int']>,
  offset?: Maybe<Scalars['Int']>,
  filter2?: Maybe<TagFilter>,
  order1?: Maybe<TagOrder>,
  first1?: Maybe<Scalars['Int']>,
  offset1?: Maybe<Scalars['Int']>,
  filter3?: Maybe<ProjectFilter>,
  filter4?: Maybe<ColumnFilter>,
  filter5?: Maybe<DeveloperFilter>,
  order2?: Maybe<DeveloperOrder>,
  first2?: Maybe<Scalars['Int']>,
  offset2?: Maybe<Scalars['Int']>,
  filter6?: Maybe<DeveloperFilter>,
  order3?: Maybe<DeveloperOrder>,
  first3?: Maybe<Scalars['Int']>,
  offset3?: Maybe<Scalars['Int']>,
  filter7?: Maybe<CommentFilter>,
  order4?: Maybe<CommentOrder>,
  first4?: Maybe<Scalars['Int']>,
  offset4?: Maybe<Scalars['Int']>,
  filter8?: Maybe<TaskFilter>,
  order5?: Maybe<TaskOrder>,
  first5?: Maybe<Scalars['Int']>,
  offset5?: Maybe<Scalars['Int']>,
  filter9?: Maybe<ProjectFilter>,
  filter10?: Maybe<ColumnFilter>,
  order6?: Maybe<ColumnOrder>,
  first6?: Maybe<Scalars['Int']>,
  offset6?: Maybe<Scalars['Int']>,
  filter11?: Maybe<BoardFilter>,
  order7?: Maybe<BoardOrder>,
  first7?: Maybe<Scalars['Int']>,
  offset7?: Maybe<Scalars['Int']>,
  filter12?: Maybe<ProjectFilter>,
  filter13?: Maybe<UserFilter>,
  order8?: Maybe<UserOrder>,
  first8?: Maybe<Scalars['Int']>,
  offset8?: Maybe<Scalars['Int']>,
  filter14?: Maybe<TagFilter>,
  order9?: Maybe<TagOrder>,
  first9?: Maybe<Scalars['Int']>,
  offset9?: Maybe<Scalars['Int']>,
  filter15?: Maybe<TaskFilter>,
  order10?: Maybe<TaskOrder>,
  first10?: Maybe<Scalars['Int']>,
  offset10?: Maybe<Scalars['Int']>,
  filter16?: Maybe<TaskFilter>,
  order11?: Maybe<TaskOrder>,
  first11?: Maybe<Scalars['Int']>,
  offset11?: Maybe<Scalars['Int']>,
  filter17?: Maybe<DeveloperFilter>,
  order12?: Maybe<DeveloperOrder>,
  first12?: Maybe<Scalars['Int']>,
  offset12?: Maybe<Scalars['Int']>,
  filter18?: Maybe<ProjectFilter>,
  filter19?: Maybe<BoardFilter>,
  filter20?: Maybe<TaskFilter>,
  order13?: Maybe<TaskOrder>,
  first13?: Maybe<Scalars['Int']>,
  offset13?: Maybe<Scalars['Int']>,
  filter21?: Maybe<ColumnFilter>,
  order14?: Maybe<ColumnOrder>,
  first14?: Maybe<Scalars['Int']>,
  offset14?: Maybe<Scalars['Int']>,
  filter22?: Maybe<BoardFilter>,
  filter23?: Maybe<TaskFilter>,
  order15?: Maybe<TaskOrder>,
  first15?: Maybe<Scalars['Int']>,
  offset15?: Maybe<Scalars['Int']>,
  id: Scalars['ID']
};


export type GetColumnQuery = (
  { __typename?: 'Query' }
  & { getColumn: Maybe<(
    { __typename?: 'Column' }
    & Pick<Column, 'id' | 'title'>
    & { board: (
      { __typename?: 'Board' }
      & Pick<Board, 'id' | 'title' | 'order'>
      & { project: (
        { __typename?: 'Project' }
        & Pick<Project, 'id' | 'title' | 'description'>
        & { tags: Maybe<Array<Maybe<(
          { __typename?: 'Tag' }
          & Pick<Tag, 'id' | 'title'>
          & { project: (
            { __typename?: 'Project' }
            & Pick<Project, 'id' | 'title' | 'description'>
          ), developers: Maybe<Array<Maybe<(
            { __typename?: 'Developer' }
            & Pick<Developer, 'id' | 'name' | 'availability'>
          )>>> }
        )>>>, tasks: Maybe<Array<Maybe<(
          { __typename?: 'Task' }
          & Pick<Task, 'id' | 'title' | 'hours' | 'deadline' | 'content' | 'priority' | 'complete'>
          & { project: (
            { __typename?: 'Project' }
            & Pick<Project, 'id' | 'title' | 'description'>
          ), column: Maybe<(
            { __typename?: 'Column' }
            & Pick<Column, 'id' | 'title'>
          )>, developers: Maybe<Array<Maybe<(
            { __typename?: 'Developer' }
            & Pick<Developer, 'id' | 'name' | 'availability'>
          )>>>, likes: Maybe<Array<Maybe<(
            { __typename?: 'Developer' }
            & Pick<Developer, 'id' | 'name' | 'availability'>
          )>>>, comments: Maybe<Array<Maybe<(
            { __typename?: 'Comment' }
            & Pick<Comment, 'id' | 'content'>
          )>>> }
        )>>>, boards: Maybe<Array<Maybe<(
          { __typename?: 'Board' }
          & Pick<Board, 'id' | 'title' | 'order'>
          & { project: (
            { __typename?: 'Project' }
            & Pick<Project, 'id' | 'title' | 'description'>
          ), columns: Maybe<Array<Maybe<(
            { __typename?: 'Column' }
            & Pick<Column, 'id' | 'title'>
          )>>> }
        )>>>, developers: Maybe<Array<Maybe<(
          { __typename?: 'Developer' }
          & Pick<Developer, 'id' | 'name' | 'availability'>
          & { project: (
            { __typename?: 'Project' }
            & Pick<Project, 'id' | 'title' | 'description'>
          ), user: Maybe<Array<Maybe<(
            { __typename?: 'User' }
            & Pick<User, 'id' | 'username' | 'password' | 'location'>
          )>>>, tags: Maybe<Array<Maybe<(
            { __typename?: 'Tag' }
            & Pick<Tag, 'id' | 'title'>
          )>>>, tasks: Maybe<Array<Maybe<(
            { __typename?: 'Task' }
            & Pick<Task, 'id' | 'title' | 'hours' | 'deadline' | 'content' | 'priority' | 'complete'>
          )>>>, liked: Maybe<Array<Maybe<(
            { __typename?: 'Task' }
            & Pick<Task, 'id' | 'title' | 'hours' | 'deadline' | 'content' | 'priority' | 'complete'>
          )>>> }
        )>>> }
      ), columns: Maybe<Array<Maybe<(
        { __typename?: 'Column' }
        & Pick<Column, 'id' | 'title'>
        & { board: (
          { __typename?: 'Board' }
          & Pick<Board, 'id' | 'title' | 'order'>
        ), tasks: Maybe<Array<Maybe<(
          { __typename?: 'Task' }
          & Pick<Task, 'id' | 'title' | 'hours' | 'deadline' | 'content' | 'priority' | 'complete'>
        )>>> }
      )>>> }
    ), tasks: Maybe<Array<Maybe<(
      { __typename?: 'Task' }
      & Pick<Task, 'id' | 'title' | 'hours' | 'deadline' | 'content' | 'priority' | 'complete'>
    )>>> }
  )> }
);

export type GetCommentQueryVariables = {
  filter?: Maybe<ProjectFilter>,
  filter1?: Maybe<DeveloperFilter>,
  order?: Maybe<DeveloperOrder>,
  first?: Maybe<Scalars['Int']>,
  offset?: Maybe<Scalars['Int']>,
  filter2?: Maybe<TagFilter>,
  order1?: Maybe<TagOrder>,
  first1?: Maybe<Scalars['Int']>,
  offset1?: Maybe<Scalars['Int']>,
  filter3?: Maybe<ProjectFilter>,
  filter4?: Maybe<ColumnFilter>,
  filter5?: Maybe<DeveloperFilter>,
  order2?: Maybe<DeveloperOrder>,
  first2?: Maybe<Scalars['Int']>,
  offset2?: Maybe<Scalars['Int']>,
  filter6?: Maybe<DeveloperFilter>,
  order3?: Maybe<DeveloperOrder>,
  first3?: Maybe<Scalars['Int']>,
  offset3?: Maybe<Scalars['Int']>,
  filter7?: Maybe<CommentFilter>,
  order4?: Maybe<CommentOrder>,
  first4?: Maybe<Scalars['Int']>,
  offset4?: Maybe<Scalars['Int']>,
  filter8?: Maybe<TaskFilter>,
  order5?: Maybe<TaskOrder>,
  first5?: Maybe<Scalars['Int']>,
  offset5?: Maybe<Scalars['Int']>,
  filter9?: Maybe<ProjectFilter>,
  filter10?: Maybe<ColumnFilter>,
  order6?: Maybe<ColumnOrder>,
  first6?: Maybe<Scalars['Int']>,
  offset6?: Maybe<Scalars['Int']>,
  filter11?: Maybe<BoardFilter>,
  order7?: Maybe<BoardOrder>,
  first7?: Maybe<Scalars['Int']>,
  offset7?: Maybe<Scalars['Int']>,
  filter12?: Maybe<ProjectFilter>,
  filter13?: Maybe<UserFilter>,
  order8?: Maybe<UserOrder>,
  first8?: Maybe<Scalars['Int']>,
  offset8?: Maybe<Scalars['Int']>,
  filter14?: Maybe<TagFilter>,
  order9?: Maybe<TagOrder>,
  first9?: Maybe<Scalars['Int']>,
  offset9?: Maybe<Scalars['Int']>,
  filter15?: Maybe<TaskFilter>,
  order10?: Maybe<TaskOrder>,
  first10?: Maybe<Scalars['Int']>,
  offset10?: Maybe<Scalars['Int']>,
  filter16?: Maybe<TaskFilter>,
  order11?: Maybe<TaskOrder>,
  first11?: Maybe<Scalars['Int']>,
  offset11?: Maybe<Scalars['Int']>,
  filter17?: Maybe<DeveloperFilter>,
  order12?: Maybe<DeveloperOrder>,
  first12?: Maybe<Scalars['Int']>,
  offset12?: Maybe<Scalars['Int']>,
  filter18?: Maybe<ProjectFilter>,
  filter19?: Maybe<ProjectFilter>,
  filter20?: Maybe<ColumnFilter>,
  order13?: Maybe<ColumnOrder>,
  first13?: Maybe<Scalars['Int']>,
  offset13?: Maybe<Scalars['Int']>,
  filter21?: Maybe<BoardFilter>,
  filter22?: Maybe<TaskFilter>,
  order14?: Maybe<TaskOrder>,
  first14?: Maybe<Scalars['Int']>,
  offset14?: Maybe<Scalars['Int']>,
  filter23?: Maybe<ColumnFilter>,
  filter24?: Maybe<DeveloperFilter>,
  order15?: Maybe<DeveloperOrder>,
  first15?: Maybe<Scalars['Int']>,
  offset15?: Maybe<Scalars['Int']>,
  filter25?: Maybe<ProjectFilter>,
  filter26?: Maybe<DeveloperFilter>,
  order16?: Maybe<DeveloperOrder>,
  first16?: Maybe<Scalars['Int']>,
  offset16?: Maybe<Scalars['Int']>,
  filter27?: Maybe<TaskFilter>,
  order17?: Maybe<TaskOrder>,
  first17?: Maybe<Scalars['Int']>,
  offset17?: Maybe<Scalars['Int']>,
  filter28?: Maybe<UserFilter>,
  order18?: Maybe<UserOrder>,
  first18?: Maybe<Scalars['Int']>,
  offset18?: Maybe<Scalars['Int']>,
  filter29?: Maybe<TagFilter>,
  order19?: Maybe<TagOrder>,
  first19?: Maybe<Scalars['Int']>,
  offset19?: Maybe<Scalars['Int']>,
  filter30?: Maybe<TaskFilter>,
  order20?: Maybe<TaskOrder>,
  first20?: Maybe<Scalars['Int']>,
  offset20?: Maybe<Scalars['Int']>,
  filter31?: Maybe<ProjectFilter>,
  filter32?: Maybe<ColumnFilter>,
  filter33?: Maybe<DeveloperFilter>,
  order21?: Maybe<DeveloperOrder>,
  first21?: Maybe<Scalars['Int']>,
  offset21?: Maybe<Scalars['Int']>,
  filter34?: Maybe<DeveloperFilter>,
  order22?: Maybe<DeveloperOrder>,
  first22?: Maybe<Scalars['Int']>,
  offset22?: Maybe<Scalars['Int']>,
  filter35?: Maybe<CommentFilter>,
  order23?: Maybe<CommentOrder>,
  first23?: Maybe<Scalars['Int']>,
  offset23?: Maybe<Scalars['Int']>,
  filter36?: Maybe<TaskFilter>,
  order24?: Maybe<TaskOrder>,
  first24?: Maybe<Scalars['Int']>,
  offset24?: Maybe<Scalars['Int']>,
  filter37?: Maybe<DeveloperFilter>,
  order25?: Maybe<DeveloperOrder>,
  first25?: Maybe<Scalars['Int']>,
  offset25?: Maybe<Scalars['Int']>,
  filter38?: Maybe<TaskFilter>,
  filter39?: Maybe<ProjectFilter>,
  filter40?: Maybe<UserFilter>,
  order26?: Maybe<UserOrder>,
  first26?: Maybe<Scalars['Int']>,
  offset26?: Maybe<Scalars['Int']>,
  filter41?: Maybe<TagFilter>,
  order27?: Maybe<TagOrder>,
  first27?: Maybe<Scalars['Int']>,
  offset27?: Maybe<Scalars['Int']>,
  filter42?: Maybe<TaskFilter>,
  order28?: Maybe<TaskOrder>,
  first28?: Maybe<Scalars['Int']>,
  offset28?: Maybe<Scalars['Int']>,
  filter43?: Maybe<TaskFilter>,
  order29?: Maybe<TaskOrder>,
  first29?: Maybe<Scalars['Int']>,
  offset29?: Maybe<Scalars['Int']>,
  filter44?: Maybe<DeveloperFilter>,
  filter45?: Maybe<CommentFilter>,
  order30?: Maybe<CommentOrder>,
  first30?: Maybe<Scalars['Int']>,
  offset30?: Maybe<Scalars['Int']>,
  filter46?: Maybe<TaskFilter>,
  filter47?: Maybe<DeveloperFilter>,
  id: Scalars['ID']
};


export type GetCommentQuery = (
  { __typename?: 'Query' }
  & { getComment: Maybe<(
    { __typename?: 'Comment' }
    & Pick<Comment, 'id' | 'content'>
    & { task: (
      { __typename?: 'Task' }
      & Pick<Task, 'id' | 'title' | 'hours' | 'deadline' | 'content' | 'priority' | 'complete'>
      & { project: (
        { __typename?: 'Project' }
        & Pick<Project, 'id' | 'title' | 'description'>
        & { tags: Maybe<Array<Maybe<(
          { __typename?: 'Tag' }
          & Pick<Tag, 'id' | 'title'>
          & { project: (
            { __typename?: 'Project' }
            & Pick<Project, 'id' | 'title' | 'description'>
          ), developers: Maybe<Array<Maybe<(
            { __typename?: 'Developer' }
            & Pick<Developer, 'id' | 'name' | 'availability'>
          )>>> }
        )>>>, tasks: Maybe<Array<Maybe<(
          { __typename?: 'Task' }
          & Pick<Task, 'id' | 'title' | 'hours' | 'deadline' | 'content' | 'priority' | 'complete'>
          & { project: (
            { __typename?: 'Project' }
            & Pick<Project, 'id' | 'title' | 'description'>
          ), column: Maybe<(
            { __typename?: 'Column' }
            & Pick<Column, 'id' | 'title'>
          )>, developers: Maybe<Array<Maybe<(
            { __typename?: 'Developer' }
            & Pick<Developer, 'id' | 'name' | 'availability'>
          )>>>, likes: Maybe<Array<Maybe<(
            { __typename?: 'Developer' }
            & Pick<Developer, 'id' | 'name' | 'availability'>
          )>>>, comments: Maybe<Array<Maybe<(
            { __typename?: 'Comment' }
            & Pick<Comment, 'id' | 'content'>
          )>>> }
        )>>>, boards: Maybe<Array<Maybe<(
          { __typename?: 'Board' }
          & Pick<Board, 'id' | 'title' | 'order'>
          & { project: (
            { __typename?: 'Project' }
            & Pick<Project, 'id' | 'title' | 'description'>
          ), columns: Maybe<Array<Maybe<(
            { __typename?: 'Column' }
            & Pick<Column, 'id' | 'title'>
          )>>> }
        )>>>, developers: Maybe<Array<Maybe<(
          { __typename?: 'Developer' }
          & Pick<Developer, 'id' | 'name' | 'availability'>
          & { project: (
            { __typename?: 'Project' }
            & Pick<Project, 'id' | 'title' | 'description'>
          ), user: Maybe<Array<Maybe<(
            { __typename?: 'User' }
            & Pick<User, 'id' | 'username' | 'password' | 'location'>
          )>>>, tags: Maybe<Array<Maybe<(
            { __typename?: 'Tag' }
            & Pick<Tag, 'id' | 'title'>
          )>>>, tasks: Maybe<Array<Maybe<(
            { __typename?: 'Task' }
            & Pick<Task, 'id' | 'title' | 'hours' | 'deadline' | 'content' | 'priority' | 'complete'>
          )>>>, liked: Maybe<Array<Maybe<(
            { __typename?: 'Task' }
            & Pick<Task, 'id' | 'title' | 'hours' | 'deadline' | 'content' | 'priority' | 'complete'>
          )>>> }
        )>>> }
      ), column: Maybe<(
        { __typename?: 'Column' }
        & Pick<Column, 'id' | 'title'>
        & { board: (
          { __typename?: 'Board' }
          & Pick<Board, 'id' | 'title' | 'order'>
          & { project: (
            { __typename?: 'Project' }
            & Pick<Project, 'id' | 'title' | 'description'>
          ), columns: Maybe<Array<Maybe<(
            { __typename?: 'Column' }
            & Pick<Column, 'id' | 'title'>
          )>>> }
        ), tasks: Maybe<Array<Maybe<(
          { __typename?: 'Task' }
          & Pick<Task, 'id' | 'title' | 'hours' | 'deadline' | 'content' | 'priority' | 'complete'>
        )>>> }
      )>, developers: Maybe<Array<Maybe<(
        { __typename?: 'Developer' }
        & Pick<Developer, 'id' | 'name' | 'availability'>
      )>>>, likes: Maybe<Array<Maybe<(
        { __typename?: 'Developer' }
        & Pick<Developer, 'id' | 'name' | 'availability'>
        & { project: (
          { __typename?: 'Project' }
          & Pick<Project, 'id' | 'title' | 'description'>
        ), user: Maybe<Array<Maybe<(
          { __typename?: 'User' }
          & Pick<User, 'id' | 'username' | 'password' | 'location'>
          & { roles: Maybe<Array<Maybe<(
            { __typename?: 'Developer' }
            & Pick<Developer, 'id' | 'name' | 'availability'>
          )>>>, stars: Maybe<Array<Maybe<(
            { __typename?: 'Task' }
            & Pick<Task, 'id' | 'title' | 'hours' | 'deadline' | 'content' | 'priority' | 'complete'>
          )>>> }
        )>>>, tags: Maybe<Array<Maybe<(
          { __typename?: 'Tag' }
          & Pick<Tag, 'id' | 'title'>
        )>>>, tasks: Maybe<Array<Maybe<(
          { __typename?: 'Task' }
          & Pick<Task, 'id' | 'title' | 'hours' | 'deadline' | 'content' | 'priority' | 'complete'>
        )>>>, liked: Maybe<Array<Maybe<(
          { __typename?: 'Task' }
          & Pick<Task, 'id' | 'title' | 'hours' | 'deadline' | 'content' | 'priority' | 'complete'>
          & { project: (
            { __typename?: 'Project' }
            & Pick<Project, 'id' | 'title' | 'description'>
          ), column: Maybe<(
            { __typename?: 'Column' }
            & Pick<Column, 'id' | 'title'>
          )>, developers: Maybe<Array<Maybe<(
            { __typename?: 'Developer' }
            & Pick<Developer, 'id' | 'name' | 'availability'>
          )>>>, likes: Maybe<Array<Maybe<(
            { __typename?: 'Developer' }
            & Pick<Developer, 'id' | 'name' | 'availability'>
          )>>>, comments: Maybe<Array<Maybe<(
            { __typename?: 'Comment' }
            & Pick<Comment, 'id' | 'content'>
          )>>> }
        )>>> }
      )>>>, comments: Maybe<Array<Maybe<(
        { __typename?: 'Comment' }
        & Pick<Comment, 'id' | 'content'>
        & { task: (
          { __typename?: 'Task' }
          & Pick<Task, 'id' | 'title' | 'hours' | 'deadline' | 'content' | 'priority' | 'complete'>
        ), developer: (
          { __typename?: 'Developer' }
          & Pick<Developer, 'id' | 'name' | 'availability'>
          & { project: (
            { __typename?: 'Project' }
            & Pick<Project, 'id' | 'title' | 'description'>
          ), user: Maybe<Array<Maybe<(
            { __typename?: 'User' }
            & Pick<User, 'id' | 'username' | 'password' | 'location'>
          )>>>, tags: Maybe<Array<Maybe<(
            { __typename?: 'Tag' }
            & Pick<Tag, 'id' | 'title'>
          )>>>, tasks: Maybe<Array<Maybe<(
            { __typename?: 'Task' }
            & Pick<Task, 'id' | 'title' | 'hours' | 'deadline' | 'content' | 'priority' | 'complete'>
          )>>>, liked: Maybe<Array<Maybe<(
            { __typename?: 'Task' }
            & Pick<Task, 'id' | 'title' | 'hours' | 'deadline' | 'content' | 'priority' | 'complete'>
          )>>> }
        ) }
      )>>> }
    ), developer: (
      { __typename?: 'Developer' }
      & Pick<Developer, 'id' | 'name' | 'availability'>
    ) }
  )> }
);

export type GetDeveloperQueryVariables = {
  filter?: Maybe<TaskFilter>,
  order?: Maybe<TaskOrder>,
  first?: Maybe<Scalars['Int']>,
  offset?: Maybe<Scalars['Int']>,
  filter1?: Maybe<BoardFilter>,
  order1?: Maybe<BoardOrder>,
  first1?: Maybe<Scalars['Int']>,
  offset1?: Maybe<Scalars['Int']>,
  filter2?: Maybe<DeveloperFilter>,
  order2?: Maybe<DeveloperOrder>,
  first2?: Maybe<Scalars['Int']>,
  offset2?: Maybe<Scalars['Int']>,
  filter3?: Maybe<ProjectFilter>,
  filter4?: Maybe<ProjectFilter>,
  filter5?: Maybe<UserFilter>,
  order3?: Maybe<UserOrder>,
  first3?: Maybe<Scalars['Int']>,
  offset3?: Maybe<Scalars['Int']>,
  filter6?: Maybe<TagFilter>,
  order4?: Maybe<TagOrder>,
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
  filter9?: Maybe<DeveloperFilter>,
  order7?: Maybe<DeveloperOrder>,
  first7?: Maybe<Scalars['Int']>,
  offset7?: Maybe<Scalars['Int']>,
  filter10?: Maybe<TagFilter>,
  order8?: Maybe<TagOrder>,
  first8?: Maybe<Scalars['Int']>,
  offset8?: Maybe<Scalars['Int']>,
  filter11?: Maybe<ProjectFilter>,
  filter12?: Maybe<ProjectFilter>,
  filter13?: Maybe<TaskFilter>,
  order9?: Maybe<TaskOrder>,
  first9?: Maybe<Scalars['Int']>,
  offset9?: Maybe<Scalars['Int']>,
  filter14?: Maybe<UserFilter>,
  order10?: Maybe<UserOrder>,
  first10?: Maybe<Scalars['Int']>,
  offset10?: Maybe<Scalars['Int']>,
  filter15?: Maybe<TagFilter>,
  order11?: Maybe<TagOrder>,
  first11?: Maybe<Scalars['Int']>,
  offset11?: Maybe<Scalars['Int']>,
  filter16?: Maybe<ProjectFilter>,
  filter17?: Maybe<ColumnFilter>,
  filter18?: Maybe<DeveloperFilter>,
  order12?: Maybe<DeveloperOrder>,
  first12?: Maybe<Scalars['Int']>,
  offset12?: Maybe<Scalars['Int']>,
  filter19?: Maybe<DeveloperFilter>,
  order13?: Maybe<DeveloperOrder>,
  first13?: Maybe<Scalars['Int']>,
  offset13?: Maybe<Scalars['Int']>,
  filter20?: Maybe<CommentFilter>,
  order14?: Maybe<CommentOrder>,
  first14?: Maybe<Scalars['Int']>,
  offset14?: Maybe<Scalars['Int']>,
  filter21?: Maybe<TaskFilter>,
  order15?: Maybe<TaskOrder>,
  first15?: Maybe<Scalars['Int']>,
  offset15?: Maybe<Scalars['Int']>,
  filter22?: Maybe<ProjectFilter>,
  filter23?: Maybe<ColumnFilter>,
  filter24?: Maybe<DeveloperFilter>,
  order16?: Maybe<DeveloperOrder>,
  first16?: Maybe<Scalars['Int']>,
  offset16?: Maybe<Scalars['Int']>,
  filter25?: Maybe<DeveloperFilter>,
  order17?: Maybe<DeveloperOrder>,
  first17?: Maybe<Scalars['Int']>,
  offset17?: Maybe<Scalars['Int']>,
  filter26?: Maybe<CommentFilter>,
  order18?: Maybe<CommentOrder>,
  first18?: Maybe<Scalars['Int']>,
  offset18?: Maybe<Scalars['Int']>,
  filter27?: Maybe<TaskFilter>,
  order19?: Maybe<TaskOrder>,
  first19?: Maybe<Scalars['Int']>,
  offset19?: Maybe<Scalars['Int']>,
  filter28?: Maybe<DeveloperFilter>,
  order20?: Maybe<DeveloperOrder>,
  first20?: Maybe<Scalars['Int']>,
  offset20?: Maybe<Scalars['Int']>,
  filter29?: Maybe<UserFilter>,
  order21?: Maybe<UserOrder>,
  first21?: Maybe<Scalars['Int']>,
  offset21?: Maybe<Scalars['Int']>,
  filter30?: Maybe<TagFilter>,
  order22?: Maybe<TagOrder>,
  first22?: Maybe<Scalars['Int']>,
  offset22?: Maybe<Scalars['Int']>,
  filter31?: Maybe<TaskFilter>,
  order23?: Maybe<TaskOrder>,
  first23?: Maybe<Scalars['Int']>,
  offset23?: Maybe<Scalars['Int']>,
  filter32?: Maybe<TaskFilter>,
  order24?: Maybe<TaskOrder>,
  first24?: Maybe<Scalars['Int']>,
  offset24?: Maybe<Scalars['Int']>,
  id: Scalars['ID']
};


export type GetDeveloperQuery = (
  { __typename?: 'Query' }
  & { getDeveloper: Maybe<(
    { __typename?: 'Developer' }
    & Pick<Developer, 'id' | 'name' | 'availability'>
    & { project: (
      { __typename?: 'Project' }
      & Pick<Project, 'id' | 'title' | 'description'>
      & { tags: Maybe<Array<Maybe<(
        { __typename?: 'Tag' }
        & Pick<Tag, 'id' | 'title'>
        & { project: (
          { __typename?: 'Project' }
          & Pick<Project, 'id' | 'title' | 'description'>
          & { tasks: Maybe<Array<Maybe<(
            { __typename?: 'Task' }
            & Pick<Task, 'id' | 'title' | 'hours' | 'deadline' | 'content' | 'priority' | 'complete'>
          )>>>, boards: Maybe<Array<Maybe<(
            { __typename?: 'Board' }
            & Pick<Board, 'id' | 'title' | 'order'>
          )>>>, developers: Maybe<Array<Maybe<(
            { __typename?: 'Developer' }
            & Pick<Developer, 'id' | 'name' | 'availability'>
          )>>> }
        ), developers: Maybe<Array<Maybe<(
          { __typename?: 'Developer' }
          & Pick<Developer, 'id' | 'name' | 'availability'>
          & { project: (
            { __typename?: 'Project' }
            & Pick<Project, 'id' | 'title' | 'description'>
          ), user: Maybe<Array<Maybe<(
            { __typename?: 'User' }
            & Pick<User, 'id' | 'username' | 'password' | 'location'>
          )>>>, tags: Maybe<Array<Maybe<(
            { __typename?: 'Tag' }
            & Pick<Tag, 'id' | 'title'>
          )>>>, tasks: Maybe<Array<Maybe<(
            { __typename?: 'Task' }
            & Pick<Task, 'id' | 'title' | 'hours' | 'deadline' | 'content' | 'priority' | 'complete'>
          )>>>, liked: Maybe<Array<Maybe<(
            { __typename?: 'Task' }
            & Pick<Task, 'id' | 'title' | 'hours' | 'deadline' | 'content' | 'priority' | 'complete'>
          )>>> }
        )>>> }
      )>>> }
    ), user: Maybe<Array<Maybe<(
      { __typename?: 'User' }
      & Pick<User, 'id' | 'username' | 'password' | 'location'>
      & { roles: Maybe<Array<Maybe<(
        { __typename?: 'Developer' }
        & Pick<Developer, 'id' | 'name' | 'availability'>
        & { project: (
          { __typename?: 'Project' }
          & Pick<Project, 'id' | 'title' | 'description'>
        ), user: Maybe<Array<Maybe<(
          { __typename?: 'User' }
          & Pick<User, 'id' | 'username' | 'password' | 'location'>
          & { stars: Maybe<Array<Maybe<(
            { __typename?: 'Task' }
            & Pick<Task, 'id' | 'title' | 'hours' | 'deadline' | 'content' | 'priority' | 'complete'>
          )>>> }
        )>>>, tags: Maybe<Array<Maybe<(
          { __typename?: 'Tag' }
          & Pick<Tag, 'id' | 'title'>
        )>>>, tasks: Maybe<Array<Maybe<(
          { __typename?: 'Task' }
          & Pick<Task, 'id' | 'title' | 'hours' | 'deadline' | 'content' | 'priority' | 'complete'>
          & { project: (
            { __typename?: 'Project' }
            & Pick<Project, 'id' | 'title' | 'description'>
          ), column: Maybe<(
            { __typename?: 'Column' }
            & Pick<Column, 'id' | 'title'>
          )>, developers: Maybe<Array<Maybe<(
            { __typename?: 'Developer' }
            & Pick<Developer, 'id' | 'name' | 'availability'>
          )>>>, likes: Maybe<Array<Maybe<(
            { __typename?: 'Developer' }
            & Pick<Developer, 'id' | 'name' | 'availability'>
          )>>>, comments: Maybe<Array<Maybe<(
            { __typename?: 'Comment' }
            & Pick<Comment, 'id' | 'content'>
          )>>> }
        )>>>, liked: Maybe<Array<Maybe<(
          { __typename?: 'Task' }
          & Pick<Task, 'id' | 'title' | 'hours' | 'deadline' | 'content' | 'priority' | 'complete'>
          & { project: (
            { __typename?: 'Project' }
            & Pick<Project, 'id' | 'title' | 'description'>
          ), column: Maybe<(
            { __typename?: 'Column' }
            & Pick<Column, 'id' | 'title'>
          )>, developers: Maybe<Array<Maybe<(
            { __typename?: 'Developer' }
            & Pick<Developer, 'id' | 'name' | 'availability'>
          )>>>, likes: Maybe<Array<Maybe<(
            { __typename?: 'Developer' }
            & Pick<Developer, 'id' | 'name' | 'availability'>
          )>>>, comments: Maybe<Array<Maybe<(
            { __typename?: 'Comment' }
            & Pick<Comment, 'id' | 'content'>
          )>>> }
        )>>> }
      )>>> }
    )>>>, tags: Maybe<Array<Maybe<(
      { __typename?: 'Tag' }
      & Pick<Tag, 'id' | 'title'>
    )>>>, tasks: Maybe<Array<Maybe<(
      { __typename?: 'Task' }
      & Pick<Task, 'id' | 'title' | 'hours' | 'deadline' | 'content' | 'priority' | 'complete'>
    )>>>, liked: Maybe<Array<Maybe<(
      { __typename?: 'Task' }
      & Pick<Task, 'id' | 'title' | 'hours' | 'deadline' | 'content' | 'priority' | 'complete'>
    )>>> }
  )> }
);

export type GetProjectQueryVariables = {
  filter?: Maybe<DeveloperFilter>,
  order?: Maybe<DeveloperOrder>,
  first?: Maybe<Scalars['Int']>,
  offset?: Maybe<Scalars['Int']>,
  filter1?: Maybe<TagFilter>,
  order1?: Maybe<TagOrder>,
  first1?: Maybe<Scalars['Int']>,
  offset1?: Maybe<Scalars['Int']>,
  filter2?: Maybe<ProjectFilter>,
  filter3?: Maybe<ColumnFilter>,
  filter4?: Maybe<DeveloperFilter>,
  order2?: Maybe<DeveloperOrder>,
  first2?: Maybe<Scalars['Int']>,
  offset2?: Maybe<Scalars['Int']>,
  filter5?: Maybe<DeveloperFilter>,
  order3?: Maybe<DeveloperOrder>,
  first3?: Maybe<Scalars['Int']>,
  offset3?: Maybe<Scalars['Int']>,
  filter6?: Maybe<CommentFilter>,
  order4?: Maybe<CommentOrder>,
  first4?: Maybe<Scalars['Int']>,
  offset4?: Maybe<Scalars['Int']>,
  filter7?: Maybe<TaskFilter>,
  order5?: Maybe<TaskOrder>,
  first5?: Maybe<Scalars['Int']>,
  offset5?: Maybe<Scalars['Int']>,
  filter8?: Maybe<ProjectFilter>,
  filter9?: Maybe<ColumnFilter>,
  order6?: Maybe<ColumnOrder>,
  first6?: Maybe<Scalars['Int']>,
  offset6?: Maybe<Scalars['Int']>,
  filter10?: Maybe<BoardFilter>,
  order7?: Maybe<BoardOrder>,
  first7?: Maybe<Scalars['Int']>,
  offset7?: Maybe<Scalars['Int']>,
  filter11?: Maybe<ProjectFilter>,
  filter12?: Maybe<UserFilter>,
  order8?: Maybe<UserOrder>,
  first8?: Maybe<Scalars['Int']>,
  offset8?: Maybe<Scalars['Int']>,
  filter13?: Maybe<TagFilter>,
  order9?: Maybe<TagOrder>,
  first9?: Maybe<Scalars['Int']>,
  offset9?: Maybe<Scalars['Int']>,
  filter14?: Maybe<TaskFilter>,
  order10?: Maybe<TaskOrder>,
  first10?: Maybe<Scalars['Int']>,
  offset10?: Maybe<Scalars['Int']>,
  filter15?: Maybe<TaskFilter>,
  order11?: Maybe<TaskOrder>,
  first11?: Maybe<Scalars['Int']>,
  offset11?: Maybe<Scalars['Int']>,
  filter16?: Maybe<DeveloperFilter>,
  order12?: Maybe<DeveloperOrder>,
  first12?: Maybe<Scalars['Int']>,
  offset12?: Maybe<Scalars['Int']>,
  filter17?: Maybe<ProjectFilter>,
  filter18?: Maybe<TagFilter>,
  order13?: Maybe<TagOrder>,
  first13?: Maybe<Scalars['Int']>,
  offset13?: Maybe<Scalars['Int']>,
  filter19?: Maybe<TaskFilter>,
  order14?: Maybe<TaskOrder>,
  first14?: Maybe<Scalars['Int']>,
  offset14?: Maybe<Scalars['Int']>,
  filter20?: Maybe<BoardFilter>,
  order15?: Maybe<BoardOrder>,
  first15?: Maybe<Scalars['Int']>,
  offset15?: Maybe<Scalars['Int']>,
  filter21?: Maybe<DeveloperFilter>,
  order16?: Maybe<DeveloperOrder>,
  first16?: Maybe<Scalars['Int']>,
  offset16?: Maybe<Scalars['Int']>,
  id: Scalars['ID']
};


export type GetProjectQuery = (
  { __typename?: 'Query' }
  & { getProject: Maybe<(
    { __typename?: 'Project' }
    & Pick<Project, 'id' | 'title' | 'description'>
    & { tags: Maybe<Array<Maybe<(
      { __typename?: 'Tag' }
      & Pick<Tag, 'id' | 'title'>
      & { project: (
        { __typename?: 'Project' }
        & Pick<Project, 'id' | 'title' | 'description'>
        & { tags: Maybe<Array<Maybe<(
          { __typename?: 'Tag' }
          & Pick<Tag, 'id' | 'title'>
          & { developers: Maybe<Array<Maybe<(
            { __typename?: 'Developer' }
            & Pick<Developer, 'id' | 'name' | 'availability'>
          )>>> }
        )>>>, tasks: Maybe<Array<Maybe<(
          { __typename?: 'Task' }
          & Pick<Task, 'id' | 'title' | 'hours' | 'deadline' | 'content' | 'priority' | 'complete'>
          & { project: (
            { __typename?: 'Project' }
            & Pick<Project, 'id' | 'title' | 'description'>
          ), column: Maybe<(
            { __typename?: 'Column' }
            & Pick<Column, 'id' | 'title'>
          )>, developers: Maybe<Array<Maybe<(
            { __typename?: 'Developer' }
            & Pick<Developer, 'id' | 'name' | 'availability'>
          )>>>, likes: Maybe<Array<Maybe<(
            { __typename?: 'Developer' }
            & Pick<Developer, 'id' | 'name' | 'availability'>
          )>>>, comments: Maybe<Array<Maybe<(
            { __typename?: 'Comment' }
            & Pick<Comment, 'id' | 'content'>
          )>>> }
        )>>>, boards: Maybe<Array<Maybe<(
          { __typename?: 'Board' }
          & Pick<Board, 'id' | 'title' | 'order'>
          & { project: (
            { __typename?: 'Project' }
            & Pick<Project, 'id' | 'title' | 'description'>
          ), columns: Maybe<Array<Maybe<(
            { __typename?: 'Column' }
            & Pick<Column, 'id' | 'title'>
          )>>> }
        )>>>, developers: Maybe<Array<Maybe<(
          { __typename?: 'Developer' }
          & Pick<Developer, 'id' | 'name' | 'availability'>
          & { project: (
            { __typename?: 'Project' }
            & Pick<Project, 'id' | 'title' | 'description'>
          ), user: Maybe<Array<Maybe<(
            { __typename?: 'User' }
            & Pick<User, 'id' | 'username' | 'password' | 'location'>
          )>>>, tags: Maybe<Array<Maybe<(
            { __typename?: 'Tag' }
            & Pick<Tag, 'id' | 'title'>
          )>>>, tasks: Maybe<Array<Maybe<(
            { __typename?: 'Task' }
            & Pick<Task, 'id' | 'title' | 'hours' | 'deadline' | 'content' | 'priority' | 'complete'>
          )>>>, liked: Maybe<Array<Maybe<(
            { __typename?: 'Task' }
            & Pick<Task, 'id' | 'title' | 'hours' | 'deadline' | 'content' | 'priority' | 'complete'>
          )>>> }
        )>>> }
      ) }
    )>>>, tasks: Maybe<Array<Maybe<(
      { __typename?: 'Task' }
      & Pick<Task, 'id' | 'title' | 'hours' | 'deadline' | 'content' | 'priority' | 'complete'>
    )>>>, boards: Maybe<Array<Maybe<(
      { __typename?: 'Board' }
      & Pick<Board, 'id' | 'title' | 'order'>
    )>>>, developers: Maybe<Array<Maybe<(
      { __typename?: 'Developer' }
      & Pick<Developer, 'id' | 'name' | 'availability'>
    )>>> }
  )> }
);

export type GetTagQueryVariables = {
  filter?: Maybe<TaskFilter>,
  order?: Maybe<TaskOrder>,
  first?: Maybe<Scalars['Int']>,
  offset?: Maybe<Scalars['Int']>,
  filter1?: Maybe<BoardFilter>,
  order1?: Maybe<BoardOrder>,
  first1?: Maybe<Scalars['Int']>,
  offset1?: Maybe<Scalars['Int']>,
  filter2?: Maybe<DeveloperFilter>,
  order2?: Maybe<DeveloperOrder>,
  first2?: Maybe<Scalars['Int']>,
  offset2?: Maybe<Scalars['Int']>,
  filter3?: Maybe<ProjectFilter>,
  filter4?: Maybe<ProjectFilter>,
  filter5?: Maybe<UserFilter>,
  order3?: Maybe<UserOrder>,
  first3?: Maybe<Scalars['Int']>,
  offset3?: Maybe<Scalars['Int']>,
  filter6?: Maybe<TagFilter>,
  order4?: Maybe<TagOrder>,
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
  filter9?: Maybe<DeveloperFilter>,
  order7?: Maybe<DeveloperOrder>,
  first7?: Maybe<Scalars['Int']>,
  offset7?: Maybe<Scalars['Int']>,
  filter10?: Maybe<TagFilter>,
  order8?: Maybe<TagOrder>,
  first8?: Maybe<Scalars['Int']>,
  offset8?: Maybe<Scalars['Int']>,
  filter11?: Maybe<ProjectFilter>,
  filter12?: Maybe<DeveloperFilter>,
  order9?: Maybe<DeveloperOrder>,
  first9?: Maybe<Scalars['Int']>,
  offset9?: Maybe<Scalars['Int']>,
  id: Scalars['ID']
};


export type GetTagQuery = (
  { __typename?: 'Query' }
  & { getTag: Maybe<(
    { __typename?: 'Tag' }
    & Pick<Tag, 'id' | 'title'>
    & { project: (
      { __typename?: 'Project' }
      & Pick<Project, 'id' | 'title' | 'description'>
      & { tags: Maybe<Array<Maybe<(
        { __typename?: 'Tag' }
        & Pick<Tag, 'id' | 'title'>
        & { project: (
          { __typename?: 'Project' }
          & Pick<Project, 'id' | 'title' | 'description'>
          & { tasks: Maybe<Array<Maybe<(
            { __typename?: 'Task' }
            & Pick<Task, 'id' | 'title' | 'hours' | 'deadline' | 'content' | 'priority' | 'complete'>
          )>>>, boards: Maybe<Array<Maybe<(
            { __typename?: 'Board' }
            & Pick<Board, 'id' | 'title' | 'order'>
          )>>>, developers: Maybe<Array<Maybe<(
            { __typename?: 'Developer' }
            & Pick<Developer, 'id' | 'name' | 'availability'>
          )>>> }
        ), developers: Maybe<Array<Maybe<(
          { __typename?: 'Developer' }
          & Pick<Developer, 'id' | 'name' | 'availability'>
          & { project: (
            { __typename?: 'Project' }
            & Pick<Project, 'id' | 'title' | 'description'>
          ), user: Maybe<Array<Maybe<(
            { __typename?: 'User' }
            & Pick<User, 'id' | 'username' | 'password' | 'location'>
          )>>>, tags: Maybe<Array<Maybe<(
            { __typename?: 'Tag' }
            & Pick<Tag, 'id' | 'title'>
          )>>>, tasks: Maybe<Array<Maybe<(
            { __typename?: 'Task' }
            & Pick<Task, 'id' | 'title' | 'hours' | 'deadline' | 'content' | 'priority' | 'complete'>
          )>>>, liked: Maybe<Array<Maybe<(
            { __typename?: 'Task' }
            & Pick<Task, 'id' | 'title' | 'hours' | 'deadline' | 'content' | 'priority' | 'complete'>
          )>>> }
        )>>> }
      )>>> }
    ), developers: Maybe<Array<Maybe<(
      { __typename?: 'Developer' }
      & Pick<Developer, 'id' | 'name' | 'availability'>
    )>>> }
  )> }
);

export type GetTaskQueryVariables = {
  filter?: Maybe<TaskFilter>,
  order?: Maybe<TaskOrder>,
  first?: Maybe<Scalars['Int']>,
  offset?: Maybe<Scalars['Int']>,
  filter1?: Maybe<BoardFilter>,
  order1?: Maybe<BoardOrder>,
  first1?: Maybe<Scalars['Int']>,
  offset1?: Maybe<Scalars['Int']>,
  filter2?: Maybe<DeveloperFilter>,
  order2?: Maybe<DeveloperOrder>,
  first2?: Maybe<Scalars['Int']>,
  offset2?: Maybe<Scalars['Int']>,
  filter3?: Maybe<ProjectFilter>,
  filter4?: Maybe<ProjectFilter>,
  filter5?: Maybe<UserFilter>,
  order3?: Maybe<UserOrder>,
  first3?: Maybe<Scalars['Int']>,
  offset3?: Maybe<Scalars['Int']>,
  filter6?: Maybe<TagFilter>,
  order4?: Maybe<TagOrder>,
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
  filter9?: Maybe<DeveloperFilter>,
  order7?: Maybe<DeveloperOrder>,
  first7?: Maybe<Scalars['Int']>,
  offset7?: Maybe<Scalars['Int']>,
  filter10?: Maybe<TagFilter>,
  order8?: Maybe<TagOrder>,
  first8?: Maybe<Scalars['Int']>,
  offset8?: Maybe<Scalars['Int']>,
  filter11?: Maybe<ProjectFilter>,
  filter12?: Maybe<ProjectFilter>,
  filter13?: Maybe<BoardFilter>,
  filter14?: Maybe<TaskFilter>,
  order9?: Maybe<TaskOrder>,
  first9?: Maybe<Scalars['Int']>,
  offset9?: Maybe<Scalars['Int']>,
  filter15?: Maybe<ColumnFilter>,
  order10?: Maybe<ColumnOrder>,
  first10?: Maybe<Scalars['Int']>,
  offset10?: Maybe<Scalars['Int']>,
  filter16?: Maybe<BoardFilter>,
  filter17?: Maybe<ProjectFilter>,
  filter18?: Maybe<ColumnFilter>,
  filter19?: Maybe<DeveloperFilter>,
  order11?: Maybe<DeveloperOrder>,
  first11?: Maybe<Scalars['Int']>,
  offset11?: Maybe<Scalars['Int']>,
  filter20?: Maybe<ProjectFilter>,
  filter21?: Maybe<UserFilter>,
  order12?: Maybe<UserOrder>,
  first12?: Maybe<Scalars['Int']>,
  offset12?: Maybe<Scalars['Int']>,
  filter22?: Maybe<TagFilter>,
  order13?: Maybe<TagOrder>,
  first13?: Maybe<Scalars['Int']>,
  offset13?: Maybe<Scalars['Int']>,
  filter23?: Maybe<TaskFilter>,
  order14?: Maybe<TaskOrder>,
  first14?: Maybe<Scalars['Int']>,
  offset14?: Maybe<Scalars['Int']>,
  filter24?: Maybe<TaskFilter>,
  order15?: Maybe<TaskOrder>,
  first15?: Maybe<Scalars['Int']>,
  offset15?: Maybe<Scalars['Int']>,
  filter25?: Maybe<DeveloperFilter>,
  order16?: Maybe<DeveloperOrder>,
  first16?: Maybe<Scalars['Int']>,
  offset16?: Maybe<Scalars['Int']>,
  filter26?: Maybe<TaskFilter>,
  filter27?: Maybe<DeveloperFilter>,
  filter28?: Maybe<CommentFilter>,
  order17?: Maybe<CommentOrder>,
  first17?: Maybe<Scalars['Int']>,
  offset17?: Maybe<Scalars['Int']>,
  filter29?: Maybe<TaskFilter>,
  order18?: Maybe<TaskOrder>,
  first18?: Maybe<Scalars['Int']>,
  offset18?: Maybe<Scalars['Int']>,
  filter30?: Maybe<ColumnFilter>,
  filter31?: Maybe<DeveloperFilter>,
  order19?: Maybe<DeveloperOrder>,
  first19?: Maybe<Scalars['Int']>,
  offset19?: Maybe<Scalars['Int']>,
  filter32?: Maybe<DeveloperFilter>,
  order20?: Maybe<DeveloperOrder>,
  first20?: Maybe<Scalars['Int']>,
  offset20?: Maybe<Scalars['Int']>,
  filter33?: Maybe<CommentFilter>,
  order21?: Maybe<CommentOrder>,
  first21?: Maybe<Scalars['Int']>,
  offset21?: Maybe<Scalars['Int']>,
  id: Scalars['ID']
};


export type GetTaskQuery = (
  { __typename?: 'Query' }
  & { getTask: Maybe<(
    { __typename?: 'Task' }
    & Pick<Task, 'id' | 'title' | 'hours' | 'deadline' | 'content' | 'priority' | 'complete'>
    & { project: (
      { __typename?: 'Project' }
      & Pick<Project, 'id' | 'title' | 'description'>
      & { tags: Maybe<Array<Maybe<(
        { __typename?: 'Tag' }
        & Pick<Tag, 'id' | 'title'>
        & { project: (
          { __typename?: 'Project' }
          & Pick<Project, 'id' | 'title' | 'description'>
          & { tasks: Maybe<Array<Maybe<(
            { __typename?: 'Task' }
            & Pick<Task, 'id' | 'title' | 'hours' | 'deadline' | 'content' | 'priority' | 'complete'>
          )>>>, boards: Maybe<Array<Maybe<(
            { __typename?: 'Board' }
            & Pick<Board, 'id' | 'title' | 'order'>
          )>>>, developers: Maybe<Array<Maybe<(
            { __typename?: 'Developer' }
            & Pick<Developer, 'id' | 'name' | 'availability'>
          )>>> }
        ), developers: Maybe<Array<Maybe<(
          { __typename?: 'Developer' }
          & Pick<Developer, 'id' | 'name' | 'availability'>
          & { project: (
            { __typename?: 'Project' }
            & Pick<Project, 'id' | 'title' | 'description'>
          ), user: Maybe<Array<Maybe<(
            { __typename?: 'User' }
            & Pick<User, 'id' | 'username' | 'password' | 'location'>
          )>>>, tags: Maybe<Array<Maybe<(
            { __typename?: 'Tag' }
            & Pick<Tag, 'id' | 'title'>
          )>>>, tasks: Maybe<Array<Maybe<(
            { __typename?: 'Task' }
            & Pick<Task, 'id' | 'title' | 'hours' | 'deadline' | 'content' | 'priority' | 'complete'>
          )>>>, liked: Maybe<Array<Maybe<(
            { __typename?: 'Task' }
            & Pick<Task, 'id' | 'title' | 'hours' | 'deadline' | 'content' | 'priority' | 'complete'>
          )>>> }
        )>>> }
      )>>> }
    ), column: Maybe<(
      { __typename?: 'Column' }
      & Pick<Column, 'id' | 'title'>
      & { board: (
        { __typename?: 'Board' }
        & Pick<Board, 'id' | 'title' | 'order'>
        & { project: (
          { __typename?: 'Project' }
          & Pick<Project, 'id' | 'title' | 'description'>
        ), columns: Maybe<Array<Maybe<(
          { __typename?: 'Column' }
          & Pick<Column, 'id' | 'title'>
          & { board: (
            { __typename?: 'Board' }
            & Pick<Board, 'id' | 'title' | 'order'>
          ), tasks: Maybe<Array<Maybe<(
            { __typename?: 'Task' }
            & Pick<Task, 'id' | 'title' | 'hours' | 'deadline' | 'content' | 'priority' | 'complete'>
          )>>> }
        )>>> }
      ), tasks: Maybe<Array<Maybe<(
        { __typename?: 'Task' }
        & Pick<Task, 'id' | 'title' | 'hours' | 'deadline' | 'content' | 'priority' | 'complete'>
        & { project: (
          { __typename?: 'Project' }
          & Pick<Project, 'id' | 'title' | 'description'>
        ), column: Maybe<(
          { __typename?: 'Column' }
          & Pick<Column, 'id' | 'title'>
        )>, developers: Maybe<Array<Maybe<(
          { __typename?: 'Developer' }
          & Pick<Developer, 'id' | 'name' | 'availability'>
        )>>>, likes: Maybe<Array<Maybe<(
          { __typename?: 'Developer' }
          & Pick<Developer, 'id' | 'name' | 'availability'>
          & { project: (
            { __typename?: 'Project' }
            & Pick<Project, 'id' | 'title' | 'description'>
          ), user: Maybe<Array<Maybe<(
            { __typename?: 'User' }
            & Pick<User, 'id' | 'username' | 'password' | 'location'>
          )>>>, tags: Maybe<Array<Maybe<(
            { __typename?: 'Tag' }
            & Pick<Tag, 'id' | 'title'>
          )>>>, tasks: Maybe<Array<Maybe<(
            { __typename?: 'Task' }
            & Pick<Task, 'id' | 'title' | 'hours' | 'deadline' | 'content' | 'priority' | 'complete'>
          )>>>, liked: Maybe<Array<Maybe<(
            { __typename?: 'Task' }
            & Pick<Task, 'id' | 'title' | 'hours' | 'deadline' | 'content' | 'priority' | 'complete'>
          )>>> }
        )>>>, comments: Maybe<Array<Maybe<(
          { __typename?: 'Comment' }
          & Pick<Comment, 'id' | 'content'>
          & { task: (
            { __typename?: 'Task' }
            & Pick<Task, 'id' | 'title' | 'hours' | 'deadline' | 'content' | 'priority' | 'complete'>
          ), developer: (
            { __typename?: 'Developer' }
            & Pick<Developer, 'id' | 'name' | 'availability'>
          ) }
        )>>> }
      )>>> }
    )>, developers: Maybe<Array<Maybe<(
      { __typename?: 'Developer' }
      & Pick<Developer, 'id' | 'name' | 'availability'>
    )>>>, likes: Maybe<Array<Maybe<(
      { __typename?: 'Developer' }
      & Pick<Developer, 'id' | 'name' | 'availability'>
    )>>>, comments: Maybe<Array<Maybe<(
      { __typename?: 'Comment' }
      & Pick<Comment, 'id' | 'content'>
    )>>> }
  )> }
);

export type GetUserQueryVariables = {
  filter?: Maybe<ProjectFilter>,
  filter1?: Maybe<DeveloperFilter>,
  order?: Maybe<DeveloperOrder>,
  first?: Maybe<Scalars['Int']>,
  offset?: Maybe<Scalars['Int']>,
  filter2?: Maybe<TagFilter>,
  order1?: Maybe<TagOrder>,
  first1?: Maybe<Scalars['Int']>,
  offset1?: Maybe<Scalars['Int']>,
  filter3?: Maybe<ProjectFilter>,
  filter4?: Maybe<ColumnFilter>,
  filter5?: Maybe<DeveloperFilter>,
  order2?: Maybe<DeveloperOrder>,
  first2?: Maybe<Scalars['Int']>,
  offset2?: Maybe<Scalars['Int']>,
  filter6?: Maybe<DeveloperFilter>,
  order3?: Maybe<DeveloperOrder>,
  first3?: Maybe<Scalars['Int']>,
  offset3?: Maybe<Scalars['Int']>,
  filter7?: Maybe<CommentFilter>,
  order4?: Maybe<CommentOrder>,
  first4?: Maybe<Scalars['Int']>,
  offset4?: Maybe<Scalars['Int']>,
  filter8?: Maybe<TaskFilter>,
  order5?: Maybe<TaskOrder>,
  first5?: Maybe<Scalars['Int']>,
  offset5?: Maybe<Scalars['Int']>,
  filter9?: Maybe<ProjectFilter>,
  filter10?: Maybe<ColumnFilter>,
  order6?: Maybe<ColumnOrder>,
  first6?: Maybe<Scalars['Int']>,
  offset6?: Maybe<Scalars['Int']>,
  filter11?: Maybe<BoardFilter>,
  order7?: Maybe<BoardOrder>,
  first7?: Maybe<Scalars['Int']>,
  offset7?: Maybe<Scalars['Int']>,
  filter12?: Maybe<ProjectFilter>,
  filter13?: Maybe<UserFilter>,
  order8?: Maybe<UserOrder>,
  first8?: Maybe<Scalars['Int']>,
  offset8?: Maybe<Scalars['Int']>,
  filter14?: Maybe<TagFilter>,
  order9?: Maybe<TagOrder>,
  first9?: Maybe<Scalars['Int']>,
  offset9?: Maybe<Scalars['Int']>,
  filter15?: Maybe<TaskFilter>,
  order10?: Maybe<TaskOrder>,
  first10?: Maybe<Scalars['Int']>,
  offset10?: Maybe<Scalars['Int']>,
  filter16?: Maybe<TaskFilter>,
  order11?: Maybe<TaskOrder>,
  first11?: Maybe<Scalars['Int']>,
  offset11?: Maybe<Scalars['Int']>,
  filter17?: Maybe<DeveloperFilter>,
  order12?: Maybe<DeveloperOrder>,
  first12?: Maybe<Scalars['Int']>,
  offset12?: Maybe<Scalars['Int']>,
  filter18?: Maybe<ProjectFilter>,
  filter19?: Maybe<TagFilter>,
  order13?: Maybe<TagOrder>,
  first13?: Maybe<Scalars['Int']>,
  offset13?: Maybe<Scalars['Int']>,
  filter20?: Maybe<TaskFilter>,
  order14?: Maybe<TaskOrder>,
  first14?: Maybe<Scalars['Int']>,
  offset14?: Maybe<Scalars['Int']>,
  filter21?: Maybe<TaskFilter>,
  order15?: Maybe<TaskOrder>,
  first15?: Maybe<Scalars['Int']>,
  offset15?: Maybe<Scalars['Int']>,
  filter22?: Maybe<DeveloperFilter>,
  order16?: Maybe<DeveloperOrder>,
  first16?: Maybe<Scalars['Int']>,
  offset16?: Maybe<Scalars['Int']>,
  filter23?: Maybe<ProjectFilter>,
  filter24?: Maybe<ColumnFilter>,
  filter25?: Maybe<DeveloperFilter>,
  order17?: Maybe<DeveloperOrder>,
  first17?: Maybe<Scalars['Int']>,
  offset17?: Maybe<Scalars['Int']>,
  filter26?: Maybe<DeveloperFilter>,
  order18?: Maybe<DeveloperOrder>,
  first18?: Maybe<Scalars['Int']>,
  offset18?: Maybe<Scalars['Int']>,
  filter27?: Maybe<CommentFilter>,
  order19?: Maybe<CommentOrder>,
  first19?: Maybe<Scalars['Int']>,
  offset19?: Maybe<Scalars['Int']>,
  filter28?: Maybe<TaskFilter>,
  order20?: Maybe<TaskOrder>,
  first20?: Maybe<Scalars['Int']>,
  offset20?: Maybe<Scalars['Int']>,
  filter29?: Maybe<UserFilter>,
  order21?: Maybe<UserOrder>,
  first21?: Maybe<Scalars['Int']>,
  offset21?: Maybe<Scalars['Int']>,
  filter30?: Maybe<DeveloperFilter>,
  order22?: Maybe<DeveloperOrder>,
  first22?: Maybe<Scalars['Int']>,
  offset22?: Maybe<Scalars['Int']>,
  filter31?: Maybe<TaskFilter>,
  order23?: Maybe<TaskOrder>,
  first23?: Maybe<Scalars['Int']>,
  offset23?: Maybe<Scalars['Int']>,
  id: Scalars['ID']
};


export type GetUserQuery = (
  { __typename?: 'Query' }
  & { getUser: Maybe<(
    { __typename?: 'User' }
    & Pick<User, 'id' | 'username' | 'password' | 'location'>
    & { roles: Maybe<Array<Maybe<(
      { __typename?: 'Developer' }
      & Pick<Developer, 'id' | 'name' | 'availability'>
      & { project: (
        { __typename?: 'Project' }
        & Pick<Project, 'id' | 'title' | 'description'>
        & { tags: Maybe<Array<Maybe<(
          { __typename?: 'Tag' }
          & Pick<Tag, 'id' | 'title'>
          & { project: (
            { __typename?: 'Project' }
            & Pick<Project, 'id' | 'title' | 'description'>
          ), developers: Maybe<Array<Maybe<(
            { __typename?: 'Developer' }
            & Pick<Developer, 'id' | 'name' | 'availability'>
          )>>> }
        )>>>, tasks: Maybe<Array<Maybe<(
          { __typename?: 'Task' }
          & Pick<Task, 'id' | 'title' | 'hours' | 'deadline' | 'content' | 'priority' | 'complete'>
          & { project: (
            { __typename?: 'Project' }
            & Pick<Project, 'id' | 'title' | 'description'>
          ), column: Maybe<(
            { __typename?: 'Column' }
            & Pick<Column, 'id' | 'title'>
          )>, developers: Maybe<Array<Maybe<(
            { __typename?: 'Developer' }
            & Pick<Developer, 'id' | 'name' | 'availability'>
          )>>>, likes: Maybe<Array<Maybe<(
            { __typename?: 'Developer' }
            & Pick<Developer, 'id' | 'name' | 'availability'>
          )>>>, comments: Maybe<Array<Maybe<(
            { __typename?: 'Comment' }
            & Pick<Comment, 'id' | 'content'>
          )>>> }
        )>>>, boards: Maybe<Array<Maybe<(
          { __typename?: 'Board' }
          & Pick<Board, 'id' | 'title' | 'order'>
          & { project: (
            { __typename?: 'Project' }
            & Pick<Project, 'id' | 'title' | 'description'>
          ), columns: Maybe<Array<Maybe<(
            { __typename?: 'Column' }
            & Pick<Column, 'id' | 'title'>
          )>>> }
        )>>>, developers: Maybe<Array<Maybe<(
          { __typename?: 'Developer' }
          & Pick<Developer, 'id' | 'name' | 'availability'>
          & { project: (
            { __typename?: 'Project' }
            & Pick<Project, 'id' | 'title' | 'description'>
          ), user: Maybe<Array<Maybe<(
            { __typename?: 'User' }
            & Pick<User, 'id' | 'username' | 'password' | 'location'>
          )>>>, tags: Maybe<Array<Maybe<(
            { __typename?: 'Tag' }
            & Pick<Tag, 'id' | 'title'>
          )>>>, tasks: Maybe<Array<Maybe<(
            { __typename?: 'Task' }
            & Pick<Task, 'id' | 'title' | 'hours' | 'deadline' | 'content' | 'priority' | 'complete'>
          )>>>, liked: Maybe<Array<Maybe<(
            { __typename?: 'Task' }
            & Pick<Task, 'id' | 'title' | 'hours' | 'deadline' | 'content' | 'priority' | 'complete'>
          )>>> }
        )>>> }
      ), user: Maybe<Array<Maybe<(
        { __typename?: 'User' }
        & Pick<User, 'id' | 'username' | 'password' | 'location'>
        & { roles: Maybe<Array<Maybe<(
          { __typename?: 'Developer' }
          & Pick<Developer, 'id' | 'name' | 'availability'>
          & { tags: Maybe<Array<Maybe<(
            { __typename?: 'Tag' }
            & Pick<Tag, 'id' | 'title'>
          )>>>, tasks: Maybe<Array<Maybe<(
            { __typename?: 'Task' }
            & Pick<Task, 'id' | 'title' | 'hours' | 'deadline' | 'content' | 'priority' | 'complete'>
          )>>>, liked: Maybe<Array<Maybe<(
            { __typename?: 'Task' }
            & Pick<Task, 'id' | 'title' | 'hours' | 'deadline' | 'content' | 'priority' | 'complete'>
          )>>> }
        )>>>, stars: Maybe<Array<Maybe<(
          { __typename?: 'Task' }
          & Pick<Task, 'id' | 'title' | 'hours' | 'deadline' | 'content' | 'priority' | 'complete'>
          & { project: (
            { __typename?: 'Project' }
            & Pick<Project, 'id' | 'title' | 'description'>
          ), column: Maybe<(
            { __typename?: 'Column' }
            & Pick<Column, 'id' | 'title'>
          )>, developers: Maybe<Array<Maybe<(
            { __typename?: 'Developer' }
            & Pick<Developer, 'id' | 'name' | 'availability'>
          )>>>, likes: Maybe<Array<Maybe<(
            { __typename?: 'Developer' }
            & Pick<Developer, 'id' | 'name' | 'availability'>
          )>>>, comments: Maybe<Array<Maybe<(
            { __typename?: 'Comment' }
            & Pick<Comment, 'id' | 'content'>
          )>>> }
        )>>> }
      )>>> }
    )>>>, stars: Maybe<Array<Maybe<(
      { __typename?: 'Task' }
      & Pick<Task, 'id' | 'title' | 'hours' | 'deadline' | 'content' | 'priority' | 'complete'>
    )>>> }
  )> }
);

export type QueryBoardQueryVariables = {
  filter?: Maybe<TaskFilter>,
  order?: Maybe<TaskOrder>,
  first?: Maybe<Scalars['Int']>,
  offset?: Maybe<Scalars['Int']>,
  filter1?: Maybe<BoardFilter>,
  order1?: Maybe<BoardOrder>,
  first1?: Maybe<Scalars['Int']>,
  offset1?: Maybe<Scalars['Int']>,
  filter2?: Maybe<DeveloperFilter>,
  order2?: Maybe<DeveloperOrder>,
  first2?: Maybe<Scalars['Int']>,
  offset2?: Maybe<Scalars['Int']>,
  filter3?: Maybe<ProjectFilter>,
  filter4?: Maybe<ProjectFilter>,
  filter5?: Maybe<UserFilter>,
  order3?: Maybe<UserOrder>,
  first3?: Maybe<Scalars['Int']>,
  offset3?: Maybe<Scalars['Int']>,
  filter6?: Maybe<TagFilter>,
  order4?: Maybe<TagOrder>,
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
  filter9?: Maybe<DeveloperFilter>,
  order7?: Maybe<DeveloperOrder>,
  first7?: Maybe<Scalars['Int']>,
  offset7?: Maybe<Scalars['Int']>,
  filter10?: Maybe<TagFilter>,
  order8?: Maybe<TagOrder>,
  first8?: Maybe<Scalars['Int']>,
  offset8?: Maybe<Scalars['Int']>,
  filter11?: Maybe<ProjectFilter>,
  filter12?: Maybe<ProjectFilter>,
  filter13?: Maybe<TaskFilter>,
  order9?: Maybe<TaskOrder>,
  first9?: Maybe<Scalars['Int']>,
  offset9?: Maybe<Scalars['Int']>,
  filter14?: Maybe<ColumnFilter>,
  order10?: Maybe<ColumnOrder>,
  first10?: Maybe<Scalars['Int']>,
  offset10?: Maybe<Scalars['Int']>,
  filter15?: Maybe<BoardFilter>,
  filter16?: Maybe<ColumnFilter>,
  order11?: Maybe<ColumnOrder>,
  first11?: Maybe<Scalars['Int']>,
  offset11?: Maybe<Scalars['Int']>,
  filter17?: Maybe<BoardFilter>,
  order12?: Maybe<BoardOrder>,
  first12?: Maybe<Scalars['Int']>,
  offset12?: Maybe<Scalars['Int']>
};


export type QueryBoardQuery = (
  { __typename?: 'Query' }
  & { queryBoard: Maybe<Array<Maybe<(
    { __typename?: 'Board' }
    & Pick<Board, 'id' | 'title' | 'order'>
    & { project: (
      { __typename?: 'Project' }
      & Pick<Project, 'id' | 'title' | 'description'>
      & { tags: Maybe<Array<Maybe<(
        { __typename?: 'Tag' }
        & Pick<Tag, 'id' | 'title'>
        & { project: (
          { __typename?: 'Project' }
          & Pick<Project, 'id' | 'title' | 'description'>
          & { tasks: Maybe<Array<Maybe<(
            { __typename?: 'Task' }
            & Pick<Task, 'id' | 'title' | 'hours' | 'deadline' | 'content' | 'priority' | 'complete'>
          )>>>, boards: Maybe<Array<Maybe<(
            { __typename?: 'Board' }
            & Pick<Board, 'id' | 'title' | 'order'>
          )>>>, developers: Maybe<Array<Maybe<(
            { __typename?: 'Developer' }
            & Pick<Developer, 'id' | 'name' | 'availability'>
          )>>> }
        ), developers: Maybe<Array<Maybe<(
          { __typename?: 'Developer' }
          & Pick<Developer, 'id' | 'name' | 'availability'>
          & { project: (
            { __typename?: 'Project' }
            & Pick<Project, 'id' | 'title' | 'description'>
          ), user: Maybe<Array<Maybe<(
            { __typename?: 'User' }
            & Pick<User, 'id' | 'username' | 'password' | 'location'>
          )>>>, tags: Maybe<Array<Maybe<(
            { __typename?: 'Tag' }
            & Pick<Tag, 'id' | 'title'>
          )>>>, tasks: Maybe<Array<Maybe<(
            { __typename?: 'Task' }
            & Pick<Task, 'id' | 'title' | 'hours' | 'deadline' | 'content' | 'priority' | 'complete'>
          )>>>, liked: Maybe<Array<Maybe<(
            { __typename?: 'Task' }
            & Pick<Task, 'id' | 'title' | 'hours' | 'deadline' | 'content' | 'priority' | 'complete'>
          )>>> }
        )>>> }
      )>>> }
    ), columns: Maybe<Array<Maybe<(
      { __typename?: 'Column' }
      & Pick<Column, 'id' | 'title'>
      & { board: (
        { __typename?: 'Board' }
        & Pick<Board, 'id' | 'title' | 'order'>
        & { project: (
          { __typename?: 'Project' }
          & Pick<Project, 'id' | 'title' | 'description'>
        ), columns: Maybe<Array<Maybe<(
          { __typename?: 'Column' }
          & Pick<Column, 'id' | 'title'>
          & { tasks: Maybe<Array<Maybe<(
            { __typename?: 'Task' }
            & Pick<Task, 'id' | 'title' | 'hours' | 'deadline' | 'content' | 'priority' | 'complete'>
          )>>> }
        )>>> }
      ) }
    )>>> }
  )>>> }
);

export type QueryColumnQueryVariables = {
  filter?: Maybe<ProjectFilter>,
  filter1?: Maybe<DeveloperFilter>,
  order?: Maybe<DeveloperOrder>,
  first?: Maybe<Scalars['Int']>,
  offset?: Maybe<Scalars['Int']>,
  filter2?: Maybe<TagFilter>,
  order1?: Maybe<TagOrder>,
  first1?: Maybe<Scalars['Int']>,
  offset1?: Maybe<Scalars['Int']>,
  filter3?: Maybe<ProjectFilter>,
  filter4?: Maybe<ColumnFilter>,
  filter5?: Maybe<DeveloperFilter>,
  order2?: Maybe<DeveloperOrder>,
  first2?: Maybe<Scalars['Int']>,
  offset2?: Maybe<Scalars['Int']>,
  filter6?: Maybe<DeveloperFilter>,
  order3?: Maybe<DeveloperOrder>,
  first3?: Maybe<Scalars['Int']>,
  offset3?: Maybe<Scalars['Int']>,
  filter7?: Maybe<CommentFilter>,
  order4?: Maybe<CommentOrder>,
  first4?: Maybe<Scalars['Int']>,
  offset4?: Maybe<Scalars['Int']>,
  filter8?: Maybe<TaskFilter>,
  order5?: Maybe<TaskOrder>,
  first5?: Maybe<Scalars['Int']>,
  offset5?: Maybe<Scalars['Int']>,
  filter9?: Maybe<ProjectFilter>,
  filter10?: Maybe<ColumnFilter>,
  order6?: Maybe<ColumnOrder>,
  first6?: Maybe<Scalars['Int']>,
  offset6?: Maybe<Scalars['Int']>,
  filter11?: Maybe<BoardFilter>,
  order7?: Maybe<BoardOrder>,
  first7?: Maybe<Scalars['Int']>,
  offset7?: Maybe<Scalars['Int']>,
  filter12?: Maybe<ProjectFilter>,
  filter13?: Maybe<UserFilter>,
  order8?: Maybe<UserOrder>,
  first8?: Maybe<Scalars['Int']>,
  offset8?: Maybe<Scalars['Int']>,
  filter14?: Maybe<TagFilter>,
  order9?: Maybe<TagOrder>,
  first9?: Maybe<Scalars['Int']>,
  offset9?: Maybe<Scalars['Int']>,
  filter15?: Maybe<TaskFilter>,
  order10?: Maybe<TaskOrder>,
  first10?: Maybe<Scalars['Int']>,
  offset10?: Maybe<Scalars['Int']>,
  filter16?: Maybe<TaskFilter>,
  order11?: Maybe<TaskOrder>,
  first11?: Maybe<Scalars['Int']>,
  offset11?: Maybe<Scalars['Int']>,
  filter17?: Maybe<DeveloperFilter>,
  order12?: Maybe<DeveloperOrder>,
  first12?: Maybe<Scalars['Int']>,
  offset12?: Maybe<Scalars['Int']>,
  filter18?: Maybe<ProjectFilter>,
  filter19?: Maybe<BoardFilter>,
  filter20?: Maybe<TaskFilter>,
  order13?: Maybe<TaskOrder>,
  first13?: Maybe<Scalars['Int']>,
  offset13?: Maybe<Scalars['Int']>,
  filter21?: Maybe<ColumnFilter>,
  order14?: Maybe<ColumnOrder>,
  first14?: Maybe<Scalars['Int']>,
  offset14?: Maybe<Scalars['Int']>,
  filter22?: Maybe<BoardFilter>,
  filter23?: Maybe<TaskFilter>,
  order15?: Maybe<TaskOrder>,
  first15?: Maybe<Scalars['Int']>,
  offset15?: Maybe<Scalars['Int']>,
  filter24?: Maybe<ColumnFilter>,
  order16?: Maybe<ColumnOrder>,
  first16?: Maybe<Scalars['Int']>,
  offset16?: Maybe<Scalars['Int']>
};


export type QueryColumnQuery = (
  { __typename?: 'Query' }
  & { queryColumn: Maybe<Array<Maybe<(
    { __typename?: 'Column' }
    & Pick<Column, 'id' | 'title'>
    & { board: (
      { __typename?: 'Board' }
      & Pick<Board, 'id' | 'title' | 'order'>
      & { project: (
        { __typename?: 'Project' }
        & Pick<Project, 'id' | 'title' | 'description'>
        & { tags: Maybe<Array<Maybe<(
          { __typename?: 'Tag' }
          & Pick<Tag, 'id' | 'title'>
          & { project: (
            { __typename?: 'Project' }
            & Pick<Project, 'id' | 'title' | 'description'>
          ), developers: Maybe<Array<Maybe<(
            { __typename?: 'Developer' }
            & Pick<Developer, 'id' | 'name' | 'availability'>
          )>>> }
        )>>>, tasks: Maybe<Array<Maybe<(
          { __typename?: 'Task' }
          & Pick<Task, 'id' | 'title' | 'hours' | 'deadline' | 'content' | 'priority' | 'complete'>
          & { project: (
            { __typename?: 'Project' }
            & Pick<Project, 'id' | 'title' | 'description'>
          ), column: Maybe<(
            { __typename?: 'Column' }
            & Pick<Column, 'id' | 'title'>
          )>, developers: Maybe<Array<Maybe<(
            { __typename?: 'Developer' }
            & Pick<Developer, 'id' | 'name' | 'availability'>
          )>>>, likes: Maybe<Array<Maybe<(
            { __typename?: 'Developer' }
            & Pick<Developer, 'id' | 'name' | 'availability'>
          )>>>, comments: Maybe<Array<Maybe<(
            { __typename?: 'Comment' }
            & Pick<Comment, 'id' | 'content'>
          )>>> }
        )>>>, boards: Maybe<Array<Maybe<(
          { __typename?: 'Board' }
          & Pick<Board, 'id' | 'title' | 'order'>
          & { project: (
            { __typename?: 'Project' }
            & Pick<Project, 'id' | 'title' | 'description'>
          ), columns: Maybe<Array<Maybe<(
            { __typename?: 'Column' }
            & Pick<Column, 'id' | 'title'>
          )>>> }
        )>>>, developers: Maybe<Array<Maybe<(
          { __typename?: 'Developer' }
          & Pick<Developer, 'id' | 'name' | 'availability'>
          & { project: (
            { __typename?: 'Project' }
            & Pick<Project, 'id' | 'title' | 'description'>
          ), user: Maybe<Array<Maybe<(
            { __typename?: 'User' }
            & Pick<User, 'id' | 'username' | 'password' | 'location'>
          )>>>, tags: Maybe<Array<Maybe<(
            { __typename?: 'Tag' }
            & Pick<Tag, 'id' | 'title'>
          )>>>, tasks: Maybe<Array<Maybe<(
            { __typename?: 'Task' }
            & Pick<Task, 'id' | 'title' | 'hours' | 'deadline' | 'content' | 'priority' | 'complete'>
          )>>>, liked: Maybe<Array<Maybe<(
            { __typename?: 'Task' }
            & Pick<Task, 'id' | 'title' | 'hours' | 'deadline' | 'content' | 'priority' | 'complete'>
          )>>> }
        )>>> }
      ), columns: Maybe<Array<Maybe<(
        { __typename?: 'Column' }
        & Pick<Column, 'id' | 'title'>
        & { board: (
          { __typename?: 'Board' }
          & Pick<Board, 'id' | 'title' | 'order'>
        ), tasks: Maybe<Array<Maybe<(
          { __typename?: 'Task' }
          & Pick<Task, 'id' | 'title' | 'hours' | 'deadline' | 'content' | 'priority' | 'complete'>
        )>>> }
      )>>> }
    ), tasks: Maybe<Array<Maybe<(
      { __typename?: 'Task' }
      & Pick<Task, 'id' | 'title' | 'hours' | 'deadline' | 'content' | 'priority' | 'complete'>
    )>>> }
  )>>> }
);

export type QueryCommentQueryVariables = {
  filter?: Maybe<ProjectFilter>,
  filter1?: Maybe<DeveloperFilter>,
  order?: Maybe<DeveloperOrder>,
  first?: Maybe<Scalars['Int']>,
  offset?: Maybe<Scalars['Int']>,
  filter2?: Maybe<TagFilter>,
  order1?: Maybe<TagOrder>,
  first1?: Maybe<Scalars['Int']>,
  offset1?: Maybe<Scalars['Int']>,
  filter3?: Maybe<ProjectFilter>,
  filter4?: Maybe<ColumnFilter>,
  filter5?: Maybe<DeveloperFilter>,
  order2?: Maybe<DeveloperOrder>,
  first2?: Maybe<Scalars['Int']>,
  offset2?: Maybe<Scalars['Int']>,
  filter6?: Maybe<DeveloperFilter>,
  order3?: Maybe<DeveloperOrder>,
  first3?: Maybe<Scalars['Int']>,
  offset3?: Maybe<Scalars['Int']>,
  filter7?: Maybe<CommentFilter>,
  order4?: Maybe<CommentOrder>,
  first4?: Maybe<Scalars['Int']>,
  offset4?: Maybe<Scalars['Int']>,
  filter8?: Maybe<TaskFilter>,
  order5?: Maybe<TaskOrder>,
  first5?: Maybe<Scalars['Int']>,
  offset5?: Maybe<Scalars['Int']>,
  filter9?: Maybe<ProjectFilter>,
  filter10?: Maybe<ColumnFilter>,
  order6?: Maybe<ColumnOrder>,
  first6?: Maybe<Scalars['Int']>,
  offset6?: Maybe<Scalars['Int']>,
  filter11?: Maybe<BoardFilter>,
  order7?: Maybe<BoardOrder>,
  first7?: Maybe<Scalars['Int']>,
  offset7?: Maybe<Scalars['Int']>,
  filter12?: Maybe<ProjectFilter>,
  filter13?: Maybe<UserFilter>,
  order8?: Maybe<UserOrder>,
  first8?: Maybe<Scalars['Int']>,
  offset8?: Maybe<Scalars['Int']>,
  filter14?: Maybe<TagFilter>,
  order9?: Maybe<TagOrder>,
  first9?: Maybe<Scalars['Int']>,
  offset9?: Maybe<Scalars['Int']>,
  filter15?: Maybe<TaskFilter>,
  order10?: Maybe<TaskOrder>,
  first10?: Maybe<Scalars['Int']>,
  offset10?: Maybe<Scalars['Int']>,
  filter16?: Maybe<TaskFilter>,
  order11?: Maybe<TaskOrder>,
  first11?: Maybe<Scalars['Int']>,
  offset11?: Maybe<Scalars['Int']>,
  filter17?: Maybe<DeveloperFilter>,
  order12?: Maybe<DeveloperOrder>,
  first12?: Maybe<Scalars['Int']>,
  offset12?: Maybe<Scalars['Int']>,
  filter18?: Maybe<ProjectFilter>,
  filter19?: Maybe<ProjectFilter>,
  filter20?: Maybe<ColumnFilter>,
  order13?: Maybe<ColumnOrder>,
  first13?: Maybe<Scalars['Int']>,
  offset13?: Maybe<Scalars['Int']>,
  filter21?: Maybe<BoardFilter>,
  filter22?: Maybe<TaskFilter>,
  order14?: Maybe<TaskOrder>,
  first14?: Maybe<Scalars['Int']>,
  offset14?: Maybe<Scalars['Int']>,
  filter23?: Maybe<ColumnFilter>,
  filter24?: Maybe<DeveloperFilter>,
  order15?: Maybe<DeveloperOrder>,
  first15?: Maybe<Scalars['Int']>,
  offset15?: Maybe<Scalars['Int']>,
  filter25?: Maybe<ProjectFilter>,
  filter26?: Maybe<DeveloperFilter>,
  order16?: Maybe<DeveloperOrder>,
  first16?: Maybe<Scalars['Int']>,
  offset16?: Maybe<Scalars['Int']>,
  filter27?: Maybe<TaskFilter>,
  order17?: Maybe<TaskOrder>,
  first17?: Maybe<Scalars['Int']>,
  offset17?: Maybe<Scalars['Int']>,
  filter28?: Maybe<UserFilter>,
  order18?: Maybe<UserOrder>,
  first18?: Maybe<Scalars['Int']>,
  offset18?: Maybe<Scalars['Int']>,
  filter29?: Maybe<TagFilter>,
  order19?: Maybe<TagOrder>,
  first19?: Maybe<Scalars['Int']>,
  offset19?: Maybe<Scalars['Int']>,
  filter30?: Maybe<TaskFilter>,
  order20?: Maybe<TaskOrder>,
  first20?: Maybe<Scalars['Int']>,
  offset20?: Maybe<Scalars['Int']>,
  filter31?: Maybe<ProjectFilter>,
  filter32?: Maybe<ColumnFilter>,
  filter33?: Maybe<DeveloperFilter>,
  order21?: Maybe<DeveloperOrder>,
  first21?: Maybe<Scalars['Int']>,
  offset21?: Maybe<Scalars['Int']>,
  filter34?: Maybe<DeveloperFilter>,
  order22?: Maybe<DeveloperOrder>,
  first22?: Maybe<Scalars['Int']>,
  offset22?: Maybe<Scalars['Int']>,
  filter35?: Maybe<CommentFilter>,
  order23?: Maybe<CommentOrder>,
  first23?: Maybe<Scalars['Int']>,
  offset23?: Maybe<Scalars['Int']>,
  filter36?: Maybe<TaskFilter>,
  order24?: Maybe<TaskOrder>,
  first24?: Maybe<Scalars['Int']>,
  offset24?: Maybe<Scalars['Int']>,
  filter37?: Maybe<DeveloperFilter>,
  order25?: Maybe<DeveloperOrder>,
  first25?: Maybe<Scalars['Int']>,
  offset25?: Maybe<Scalars['Int']>,
  filter38?: Maybe<TaskFilter>,
  filter39?: Maybe<ProjectFilter>,
  filter40?: Maybe<UserFilter>,
  order26?: Maybe<UserOrder>,
  first26?: Maybe<Scalars['Int']>,
  offset26?: Maybe<Scalars['Int']>,
  filter41?: Maybe<TagFilter>,
  order27?: Maybe<TagOrder>,
  first27?: Maybe<Scalars['Int']>,
  offset27?: Maybe<Scalars['Int']>,
  filter42?: Maybe<TaskFilter>,
  order28?: Maybe<TaskOrder>,
  first28?: Maybe<Scalars['Int']>,
  offset28?: Maybe<Scalars['Int']>,
  filter43?: Maybe<TaskFilter>,
  order29?: Maybe<TaskOrder>,
  first29?: Maybe<Scalars['Int']>,
  offset29?: Maybe<Scalars['Int']>,
  filter44?: Maybe<DeveloperFilter>,
  filter45?: Maybe<CommentFilter>,
  order30?: Maybe<CommentOrder>,
  first30?: Maybe<Scalars['Int']>,
  offset30?: Maybe<Scalars['Int']>,
  filter46?: Maybe<TaskFilter>,
  filter47?: Maybe<DeveloperFilter>,
  filter48?: Maybe<CommentFilter>,
  order31?: Maybe<CommentOrder>,
  first31?: Maybe<Scalars['Int']>,
  offset31?: Maybe<Scalars['Int']>
};


export type QueryCommentQuery = (
  { __typename?: 'Query' }
  & { queryComment: Maybe<Array<Maybe<(
    { __typename?: 'Comment' }
    & Pick<Comment, 'id' | 'content'>
    & { task: (
      { __typename?: 'Task' }
      & Pick<Task, 'id' | 'title' | 'hours' | 'deadline' | 'content' | 'priority' | 'complete'>
      & { project: (
        { __typename?: 'Project' }
        & Pick<Project, 'id' | 'title' | 'description'>
        & { tags: Maybe<Array<Maybe<(
          { __typename?: 'Tag' }
          & Pick<Tag, 'id' | 'title'>
          & { project: (
            { __typename?: 'Project' }
            & Pick<Project, 'id' | 'title' | 'description'>
          ), developers: Maybe<Array<Maybe<(
            { __typename?: 'Developer' }
            & Pick<Developer, 'id' | 'name' | 'availability'>
          )>>> }
        )>>>, tasks: Maybe<Array<Maybe<(
          { __typename?: 'Task' }
          & Pick<Task, 'id' | 'title' | 'hours' | 'deadline' | 'content' | 'priority' | 'complete'>
          & { project: (
            { __typename?: 'Project' }
            & Pick<Project, 'id' | 'title' | 'description'>
          ), column: Maybe<(
            { __typename?: 'Column' }
            & Pick<Column, 'id' | 'title'>
          )>, developers: Maybe<Array<Maybe<(
            { __typename?: 'Developer' }
            & Pick<Developer, 'id' | 'name' | 'availability'>
          )>>>, likes: Maybe<Array<Maybe<(
            { __typename?: 'Developer' }
            & Pick<Developer, 'id' | 'name' | 'availability'>
          )>>>, comments: Maybe<Array<Maybe<(
            { __typename?: 'Comment' }
            & Pick<Comment, 'id' | 'content'>
          )>>> }
        )>>>, boards: Maybe<Array<Maybe<(
          { __typename?: 'Board' }
          & Pick<Board, 'id' | 'title' | 'order'>
          & { project: (
            { __typename?: 'Project' }
            & Pick<Project, 'id' | 'title' | 'description'>
          ), columns: Maybe<Array<Maybe<(
            { __typename?: 'Column' }
            & Pick<Column, 'id' | 'title'>
          )>>> }
        )>>>, developers: Maybe<Array<Maybe<(
          { __typename?: 'Developer' }
          & Pick<Developer, 'id' | 'name' | 'availability'>
          & { project: (
            { __typename?: 'Project' }
            & Pick<Project, 'id' | 'title' | 'description'>
          ), user: Maybe<Array<Maybe<(
            { __typename?: 'User' }
            & Pick<User, 'id' | 'username' | 'password' | 'location'>
          )>>>, tags: Maybe<Array<Maybe<(
            { __typename?: 'Tag' }
            & Pick<Tag, 'id' | 'title'>
          )>>>, tasks: Maybe<Array<Maybe<(
            { __typename?: 'Task' }
            & Pick<Task, 'id' | 'title' | 'hours' | 'deadline' | 'content' | 'priority' | 'complete'>
          )>>>, liked: Maybe<Array<Maybe<(
            { __typename?: 'Task' }
            & Pick<Task, 'id' | 'title' | 'hours' | 'deadline' | 'content' | 'priority' | 'complete'>
          )>>> }
        )>>> }
      ), column: Maybe<(
        { __typename?: 'Column' }
        & Pick<Column, 'id' | 'title'>
        & { board: (
          { __typename?: 'Board' }
          & Pick<Board, 'id' | 'title' | 'order'>
          & { project: (
            { __typename?: 'Project' }
            & Pick<Project, 'id' | 'title' | 'description'>
          ), columns: Maybe<Array<Maybe<(
            { __typename?: 'Column' }
            & Pick<Column, 'id' | 'title'>
          )>>> }
        ), tasks: Maybe<Array<Maybe<(
          { __typename?: 'Task' }
          & Pick<Task, 'id' | 'title' | 'hours' | 'deadline' | 'content' | 'priority' | 'complete'>
        )>>> }
      )>, developers: Maybe<Array<Maybe<(
        { __typename?: 'Developer' }
        & Pick<Developer, 'id' | 'name' | 'availability'>
      )>>>, likes: Maybe<Array<Maybe<(
        { __typename?: 'Developer' }
        & Pick<Developer, 'id' | 'name' | 'availability'>
        & { project: (
          { __typename?: 'Project' }
          & Pick<Project, 'id' | 'title' | 'description'>
        ), user: Maybe<Array<Maybe<(
          { __typename?: 'User' }
          & Pick<User, 'id' | 'username' | 'password' | 'location'>
          & { roles: Maybe<Array<Maybe<(
            { __typename?: 'Developer' }
            & Pick<Developer, 'id' | 'name' | 'availability'>
          )>>>, stars: Maybe<Array<Maybe<(
            { __typename?: 'Task' }
            & Pick<Task, 'id' | 'title' | 'hours' | 'deadline' | 'content' | 'priority' | 'complete'>
          )>>> }
        )>>>, tags: Maybe<Array<Maybe<(
          { __typename?: 'Tag' }
          & Pick<Tag, 'id' | 'title'>
        )>>>, tasks: Maybe<Array<Maybe<(
          { __typename?: 'Task' }
          & Pick<Task, 'id' | 'title' | 'hours' | 'deadline' | 'content' | 'priority' | 'complete'>
        )>>>, liked: Maybe<Array<Maybe<(
          { __typename?: 'Task' }
          & Pick<Task, 'id' | 'title' | 'hours' | 'deadline' | 'content' | 'priority' | 'complete'>
          & { project: (
            { __typename?: 'Project' }
            & Pick<Project, 'id' | 'title' | 'description'>
          ), column: Maybe<(
            { __typename?: 'Column' }
            & Pick<Column, 'id' | 'title'>
          )>, developers: Maybe<Array<Maybe<(
            { __typename?: 'Developer' }
            & Pick<Developer, 'id' | 'name' | 'availability'>
          )>>>, likes: Maybe<Array<Maybe<(
            { __typename?: 'Developer' }
            & Pick<Developer, 'id' | 'name' | 'availability'>
          )>>>, comments: Maybe<Array<Maybe<(
            { __typename?: 'Comment' }
            & Pick<Comment, 'id' | 'content'>
          )>>> }
        )>>> }
      )>>>, comments: Maybe<Array<Maybe<(
        { __typename?: 'Comment' }
        & Pick<Comment, 'id' | 'content'>
        & { task: (
          { __typename?: 'Task' }
          & Pick<Task, 'id' | 'title' | 'hours' | 'deadline' | 'content' | 'priority' | 'complete'>
        ), developer: (
          { __typename?: 'Developer' }
          & Pick<Developer, 'id' | 'name' | 'availability'>
          & { project: (
            { __typename?: 'Project' }
            & Pick<Project, 'id' | 'title' | 'description'>
          ), user: Maybe<Array<Maybe<(
            { __typename?: 'User' }
            & Pick<User, 'id' | 'username' | 'password' | 'location'>
          )>>>, tags: Maybe<Array<Maybe<(
            { __typename?: 'Tag' }
            & Pick<Tag, 'id' | 'title'>
          )>>>, tasks: Maybe<Array<Maybe<(
            { __typename?: 'Task' }
            & Pick<Task, 'id' | 'title' | 'hours' | 'deadline' | 'content' | 'priority' | 'complete'>
          )>>>, liked: Maybe<Array<Maybe<(
            { __typename?: 'Task' }
            & Pick<Task, 'id' | 'title' | 'hours' | 'deadline' | 'content' | 'priority' | 'complete'>
          )>>> }
        ) }
      )>>> }
    ), developer: (
      { __typename?: 'Developer' }
      & Pick<Developer, 'id' | 'name' | 'availability'>
    ) }
  )>>> }
);

export type QueryDeveloperQueryVariables = {
  filter?: Maybe<TaskFilter>,
  order?: Maybe<TaskOrder>,
  first?: Maybe<Scalars['Int']>,
  offset?: Maybe<Scalars['Int']>,
  filter1?: Maybe<BoardFilter>,
  order1?: Maybe<BoardOrder>,
  first1?: Maybe<Scalars['Int']>,
  offset1?: Maybe<Scalars['Int']>,
  filter2?: Maybe<DeveloperFilter>,
  order2?: Maybe<DeveloperOrder>,
  first2?: Maybe<Scalars['Int']>,
  offset2?: Maybe<Scalars['Int']>,
  filter3?: Maybe<ProjectFilter>,
  filter4?: Maybe<ProjectFilter>,
  filter5?: Maybe<UserFilter>,
  order3?: Maybe<UserOrder>,
  first3?: Maybe<Scalars['Int']>,
  offset3?: Maybe<Scalars['Int']>,
  filter6?: Maybe<TagFilter>,
  order4?: Maybe<TagOrder>,
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
  filter9?: Maybe<DeveloperFilter>,
  order7?: Maybe<DeveloperOrder>,
  first7?: Maybe<Scalars['Int']>,
  offset7?: Maybe<Scalars['Int']>,
  filter10?: Maybe<TagFilter>,
  order8?: Maybe<TagOrder>,
  first8?: Maybe<Scalars['Int']>,
  offset8?: Maybe<Scalars['Int']>,
  filter11?: Maybe<ProjectFilter>,
  filter12?: Maybe<ProjectFilter>,
  filter13?: Maybe<TaskFilter>,
  order9?: Maybe<TaskOrder>,
  first9?: Maybe<Scalars['Int']>,
  offset9?: Maybe<Scalars['Int']>,
  filter14?: Maybe<UserFilter>,
  order10?: Maybe<UserOrder>,
  first10?: Maybe<Scalars['Int']>,
  offset10?: Maybe<Scalars['Int']>,
  filter15?: Maybe<TagFilter>,
  order11?: Maybe<TagOrder>,
  first11?: Maybe<Scalars['Int']>,
  offset11?: Maybe<Scalars['Int']>,
  filter16?: Maybe<ProjectFilter>,
  filter17?: Maybe<ColumnFilter>,
  filter18?: Maybe<DeveloperFilter>,
  order12?: Maybe<DeveloperOrder>,
  first12?: Maybe<Scalars['Int']>,
  offset12?: Maybe<Scalars['Int']>,
  filter19?: Maybe<DeveloperFilter>,
  order13?: Maybe<DeveloperOrder>,
  first13?: Maybe<Scalars['Int']>,
  offset13?: Maybe<Scalars['Int']>,
  filter20?: Maybe<CommentFilter>,
  order14?: Maybe<CommentOrder>,
  first14?: Maybe<Scalars['Int']>,
  offset14?: Maybe<Scalars['Int']>,
  filter21?: Maybe<TaskFilter>,
  order15?: Maybe<TaskOrder>,
  first15?: Maybe<Scalars['Int']>,
  offset15?: Maybe<Scalars['Int']>,
  filter22?: Maybe<ProjectFilter>,
  filter23?: Maybe<ColumnFilter>,
  filter24?: Maybe<DeveloperFilter>,
  order16?: Maybe<DeveloperOrder>,
  first16?: Maybe<Scalars['Int']>,
  offset16?: Maybe<Scalars['Int']>,
  filter25?: Maybe<DeveloperFilter>,
  order17?: Maybe<DeveloperOrder>,
  first17?: Maybe<Scalars['Int']>,
  offset17?: Maybe<Scalars['Int']>,
  filter26?: Maybe<CommentFilter>,
  order18?: Maybe<CommentOrder>,
  first18?: Maybe<Scalars['Int']>,
  offset18?: Maybe<Scalars['Int']>,
  filter27?: Maybe<TaskFilter>,
  order19?: Maybe<TaskOrder>,
  first19?: Maybe<Scalars['Int']>,
  offset19?: Maybe<Scalars['Int']>,
  filter28?: Maybe<DeveloperFilter>,
  order20?: Maybe<DeveloperOrder>,
  first20?: Maybe<Scalars['Int']>,
  offset20?: Maybe<Scalars['Int']>,
  filter29?: Maybe<UserFilter>,
  order21?: Maybe<UserOrder>,
  first21?: Maybe<Scalars['Int']>,
  offset21?: Maybe<Scalars['Int']>,
  filter30?: Maybe<TagFilter>,
  order22?: Maybe<TagOrder>,
  first22?: Maybe<Scalars['Int']>,
  offset22?: Maybe<Scalars['Int']>,
  filter31?: Maybe<TaskFilter>,
  order23?: Maybe<TaskOrder>,
  first23?: Maybe<Scalars['Int']>,
  offset23?: Maybe<Scalars['Int']>,
  filter32?: Maybe<TaskFilter>,
  order24?: Maybe<TaskOrder>,
  first24?: Maybe<Scalars['Int']>,
  offset24?: Maybe<Scalars['Int']>,
  filter33?: Maybe<DeveloperFilter>,
  order25?: Maybe<DeveloperOrder>,
  first25?: Maybe<Scalars['Int']>,
  offset25?: Maybe<Scalars['Int']>
};


export type QueryDeveloperQuery = (
  { __typename?: 'Query' }
  & { queryDeveloper: Maybe<Array<Maybe<(
    { __typename?: 'Developer' }
    & Pick<Developer, 'id' | 'name' | 'availability'>
    & { project: (
      { __typename?: 'Project' }
      & Pick<Project, 'id' | 'title' | 'description'>
      & { tags: Maybe<Array<Maybe<(
        { __typename?: 'Tag' }
        & Pick<Tag, 'id' | 'title'>
        & { project: (
          { __typename?: 'Project' }
          & Pick<Project, 'id' | 'title' | 'description'>
          & { tasks: Maybe<Array<Maybe<(
            { __typename?: 'Task' }
            & Pick<Task, 'id' | 'title' | 'hours' | 'deadline' | 'content' | 'priority' | 'complete'>
          )>>>, boards: Maybe<Array<Maybe<(
            { __typename?: 'Board' }
            & Pick<Board, 'id' | 'title' | 'order'>
          )>>>, developers: Maybe<Array<Maybe<(
            { __typename?: 'Developer' }
            & Pick<Developer, 'id' | 'name' | 'availability'>
          )>>> }
        ), developers: Maybe<Array<Maybe<(
          { __typename?: 'Developer' }
          & Pick<Developer, 'id' | 'name' | 'availability'>
          & { project: (
            { __typename?: 'Project' }
            & Pick<Project, 'id' | 'title' | 'description'>
          ), user: Maybe<Array<Maybe<(
            { __typename?: 'User' }
            & Pick<User, 'id' | 'username' | 'password' | 'location'>
          )>>>, tags: Maybe<Array<Maybe<(
            { __typename?: 'Tag' }
            & Pick<Tag, 'id' | 'title'>
          )>>>, tasks: Maybe<Array<Maybe<(
            { __typename?: 'Task' }
            & Pick<Task, 'id' | 'title' | 'hours' | 'deadline' | 'content' | 'priority' | 'complete'>
          )>>>, liked: Maybe<Array<Maybe<(
            { __typename?: 'Task' }
            & Pick<Task, 'id' | 'title' | 'hours' | 'deadline' | 'content' | 'priority' | 'complete'>
          )>>> }
        )>>> }
      )>>> }
    ), user: Maybe<Array<Maybe<(
      { __typename?: 'User' }
      & Pick<User, 'id' | 'username' | 'password' | 'location'>
      & { roles: Maybe<Array<Maybe<(
        { __typename?: 'Developer' }
        & Pick<Developer, 'id' | 'name' | 'availability'>
        & { project: (
          { __typename?: 'Project' }
          & Pick<Project, 'id' | 'title' | 'description'>
        ), user: Maybe<Array<Maybe<(
          { __typename?: 'User' }
          & Pick<User, 'id' | 'username' | 'password' | 'location'>
          & { stars: Maybe<Array<Maybe<(
            { __typename?: 'Task' }
            & Pick<Task, 'id' | 'title' | 'hours' | 'deadline' | 'content' | 'priority' | 'complete'>
          )>>> }
        )>>>, tags: Maybe<Array<Maybe<(
          { __typename?: 'Tag' }
          & Pick<Tag, 'id' | 'title'>
        )>>>, tasks: Maybe<Array<Maybe<(
          { __typename?: 'Task' }
          & Pick<Task, 'id' | 'title' | 'hours' | 'deadline' | 'content' | 'priority' | 'complete'>
          & { project: (
            { __typename?: 'Project' }
            & Pick<Project, 'id' | 'title' | 'description'>
          ), column: Maybe<(
            { __typename?: 'Column' }
            & Pick<Column, 'id' | 'title'>
          )>, developers: Maybe<Array<Maybe<(
            { __typename?: 'Developer' }
            & Pick<Developer, 'id' | 'name' | 'availability'>
          )>>>, likes: Maybe<Array<Maybe<(
            { __typename?: 'Developer' }
            & Pick<Developer, 'id' | 'name' | 'availability'>
          )>>>, comments: Maybe<Array<Maybe<(
            { __typename?: 'Comment' }
            & Pick<Comment, 'id' | 'content'>
          )>>> }
        )>>>, liked: Maybe<Array<Maybe<(
          { __typename?: 'Task' }
          & Pick<Task, 'id' | 'title' | 'hours' | 'deadline' | 'content' | 'priority' | 'complete'>
          & { project: (
            { __typename?: 'Project' }
            & Pick<Project, 'id' | 'title' | 'description'>
          ), column: Maybe<(
            { __typename?: 'Column' }
            & Pick<Column, 'id' | 'title'>
          )>, developers: Maybe<Array<Maybe<(
            { __typename?: 'Developer' }
            & Pick<Developer, 'id' | 'name' | 'availability'>
          )>>>, likes: Maybe<Array<Maybe<(
            { __typename?: 'Developer' }
            & Pick<Developer, 'id' | 'name' | 'availability'>
          )>>>, comments: Maybe<Array<Maybe<(
            { __typename?: 'Comment' }
            & Pick<Comment, 'id' | 'content'>
          )>>> }
        )>>> }
      )>>> }
    )>>>, tags: Maybe<Array<Maybe<(
      { __typename?: 'Tag' }
      & Pick<Tag, 'id' | 'title'>
    )>>>, tasks: Maybe<Array<Maybe<(
      { __typename?: 'Task' }
      & Pick<Task, 'id' | 'title' | 'hours' | 'deadline' | 'content' | 'priority' | 'complete'>
    )>>>, liked: Maybe<Array<Maybe<(
      { __typename?: 'Task' }
      & Pick<Task, 'id' | 'title' | 'hours' | 'deadline' | 'content' | 'priority' | 'complete'>
    )>>> }
  )>>> }
);

export type QueryProjectQueryVariables = {
  filter?: Maybe<DeveloperFilter>,
  order?: Maybe<DeveloperOrder>,
  first?: Maybe<Scalars['Int']>,
  offset?: Maybe<Scalars['Int']>,
  filter1?: Maybe<TagFilter>,
  order1?: Maybe<TagOrder>,
  first1?: Maybe<Scalars['Int']>,
  offset1?: Maybe<Scalars['Int']>,
  filter2?: Maybe<ProjectFilter>,
  filter3?: Maybe<ColumnFilter>,
  filter4?: Maybe<DeveloperFilter>,
  order2?: Maybe<DeveloperOrder>,
  first2?: Maybe<Scalars['Int']>,
  offset2?: Maybe<Scalars['Int']>,
  filter5?: Maybe<DeveloperFilter>,
  order3?: Maybe<DeveloperOrder>,
  first3?: Maybe<Scalars['Int']>,
  offset3?: Maybe<Scalars['Int']>,
  filter6?: Maybe<CommentFilter>,
  order4?: Maybe<CommentOrder>,
  first4?: Maybe<Scalars['Int']>,
  offset4?: Maybe<Scalars['Int']>,
  filter7?: Maybe<TaskFilter>,
  order5?: Maybe<TaskOrder>,
  first5?: Maybe<Scalars['Int']>,
  offset5?: Maybe<Scalars['Int']>,
  filter8?: Maybe<ProjectFilter>,
  filter9?: Maybe<ColumnFilter>,
  order6?: Maybe<ColumnOrder>,
  first6?: Maybe<Scalars['Int']>,
  offset6?: Maybe<Scalars['Int']>,
  filter10?: Maybe<BoardFilter>,
  order7?: Maybe<BoardOrder>,
  first7?: Maybe<Scalars['Int']>,
  offset7?: Maybe<Scalars['Int']>,
  filter11?: Maybe<ProjectFilter>,
  filter12?: Maybe<UserFilter>,
  order8?: Maybe<UserOrder>,
  first8?: Maybe<Scalars['Int']>,
  offset8?: Maybe<Scalars['Int']>,
  filter13?: Maybe<TagFilter>,
  order9?: Maybe<TagOrder>,
  first9?: Maybe<Scalars['Int']>,
  offset9?: Maybe<Scalars['Int']>,
  filter14?: Maybe<TaskFilter>,
  order10?: Maybe<TaskOrder>,
  first10?: Maybe<Scalars['Int']>,
  offset10?: Maybe<Scalars['Int']>,
  filter15?: Maybe<TaskFilter>,
  order11?: Maybe<TaskOrder>,
  first11?: Maybe<Scalars['Int']>,
  offset11?: Maybe<Scalars['Int']>,
  filter16?: Maybe<DeveloperFilter>,
  order12?: Maybe<DeveloperOrder>,
  first12?: Maybe<Scalars['Int']>,
  offset12?: Maybe<Scalars['Int']>,
  filter17?: Maybe<ProjectFilter>,
  filter18?: Maybe<TagFilter>,
  order13?: Maybe<TagOrder>,
  first13?: Maybe<Scalars['Int']>,
  offset13?: Maybe<Scalars['Int']>,
  filter19?: Maybe<TaskFilter>,
  order14?: Maybe<TaskOrder>,
  first14?: Maybe<Scalars['Int']>,
  offset14?: Maybe<Scalars['Int']>,
  filter20?: Maybe<BoardFilter>,
  order15?: Maybe<BoardOrder>,
  first15?: Maybe<Scalars['Int']>,
  offset15?: Maybe<Scalars['Int']>,
  filter21?: Maybe<DeveloperFilter>,
  order16?: Maybe<DeveloperOrder>,
  first16?: Maybe<Scalars['Int']>,
  offset16?: Maybe<Scalars['Int']>,
  filter22?: Maybe<ProjectFilter>,
  order17?: Maybe<ProjectOrder>,
  first17?: Maybe<Scalars['Int']>,
  offset17?: Maybe<Scalars['Int']>
};


export type QueryProjectQuery = (
  { __typename?: 'Query' }
  & { queryProject: Maybe<Array<Maybe<(
    { __typename?: 'Project' }
    & Pick<Project, 'id' | 'title' | 'description'>
    & { tags: Maybe<Array<Maybe<(
      { __typename?: 'Tag' }
      & Pick<Tag, 'id' | 'title'>
      & { project: (
        { __typename?: 'Project' }
        & Pick<Project, 'id' | 'title' | 'description'>
        & { tags: Maybe<Array<Maybe<(
          { __typename?: 'Tag' }
          & Pick<Tag, 'id' | 'title'>
          & { developers: Maybe<Array<Maybe<(
            { __typename?: 'Developer' }
            & Pick<Developer, 'id' | 'name' | 'availability'>
          )>>> }
        )>>>, tasks: Maybe<Array<Maybe<(
          { __typename?: 'Task' }
          & Pick<Task, 'id' | 'title' | 'hours' | 'deadline' | 'content' | 'priority' | 'complete'>
          & { project: (
            { __typename?: 'Project' }
            & Pick<Project, 'id' | 'title' | 'description'>
          ), column: Maybe<(
            { __typename?: 'Column' }
            & Pick<Column, 'id' | 'title'>
          )>, developers: Maybe<Array<Maybe<(
            { __typename?: 'Developer' }
            & Pick<Developer, 'id' | 'name' | 'availability'>
          )>>>, likes: Maybe<Array<Maybe<(
            { __typename?: 'Developer' }
            & Pick<Developer, 'id' | 'name' | 'availability'>
          )>>>, comments: Maybe<Array<Maybe<(
            { __typename?: 'Comment' }
            & Pick<Comment, 'id' | 'content'>
          )>>> }
        )>>>, boards: Maybe<Array<Maybe<(
          { __typename?: 'Board' }
          & Pick<Board, 'id' | 'title' | 'order'>
          & { project: (
            { __typename?: 'Project' }
            & Pick<Project, 'id' | 'title' | 'description'>
          ), columns: Maybe<Array<Maybe<(
            { __typename?: 'Column' }
            & Pick<Column, 'id' | 'title'>
          )>>> }
        )>>>, developers: Maybe<Array<Maybe<(
          { __typename?: 'Developer' }
          & Pick<Developer, 'id' | 'name' | 'availability'>
          & { project: (
            { __typename?: 'Project' }
            & Pick<Project, 'id' | 'title' | 'description'>
          ), user: Maybe<Array<Maybe<(
            { __typename?: 'User' }
            & Pick<User, 'id' | 'username' | 'password' | 'location'>
          )>>>, tags: Maybe<Array<Maybe<(
            { __typename?: 'Tag' }
            & Pick<Tag, 'id' | 'title'>
          )>>>, tasks: Maybe<Array<Maybe<(
            { __typename?: 'Task' }
            & Pick<Task, 'id' | 'title' | 'hours' | 'deadline' | 'content' | 'priority' | 'complete'>
          )>>>, liked: Maybe<Array<Maybe<(
            { __typename?: 'Task' }
            & Pick<Task, 'id' | 'title' | 'hours' | 'deadline' | 'content' | 'priority' | 'complete'>
          )>>> }
        )>>> }
      ) }
    )>>>, tasks: Maybe<Array<Maybe<(
      { __typename?: 'Task' }
      & Pick<Task, 'id' | 'title' | 'hours' | 'deadline' | 'content' | 'priority' | 'complete'>
    )>>>, boards: Maybe<Array<Maybe<(
      { __typename?: 'Board' }
      & Pick<Board, 'id' | 'title' | 'order'>
    )>>>, developers: Maybe<Array<Maybe<(
      { __typename?: 'Developer' }
      & Pick<Developer, 'id' | 'name' | 'availability'>
    )>>> }
  )>>> }
);

export type QueryTagQueryVariables = {
  filter?: Maybe<TaskFilter>,
  order?: Maybe<TaskOrder>,
  first?: Maybe<Scalars['Int']>,
  offset?: Maybe<Scalars['Int']>,
  filter1?: Maybe<BoardFilter>,
  order1?: Maybe<BoardOrder>,
  first1?: Maybe<Scalars['Int']>,
  offset1?: Maybe<Scalars['Int']>,
  filter2?: Maybe<DeveloperFilter>,
  order2?: Maybe<DeveloperOrder>,
  first2?: Maybe<Scalars['Int']>,
  offset2?: Maybe<Scalars['Int']>,
  filter3?: Maybe<ProjectFilter>,
  filter4?: Maybe<ProjectFilter>,
  filter5?: Maybe<UserFilter>,
  order3?: Maybe<UserOrder>,
  first3?: Maybe<Scalars['Int']>,
  offset3?: Maybe<Scalars['Int']>,
  filter6?: Maybe<TagFilter>,
  order4?: Maybe<TagOrder>,
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
  filter9?: Maybe<DeveloperFilter>,
  order7?: Maybe<DeveloperOrder>,
  first7?: Maybe<Scalars['Int']>,
  offset7?: Maybe<Scalars['Int']>,
  filter10?: Maybe<TagFilter>,
  order8?: Maybe<TagOrder>,
  first8?: Maybe<Scalars['Int']>,
  offset8?: Maybe<Scalars['Int']>,
  filter11?: Maybe<ProjectFilter>,
  filter12?: Maybe<DeveloperFilter>,
  order9?: Maybe<DeveloperOrder>,
  first9?: Maybe<Scalars['Int']>,
  offset9?: Maybe<Scalars['Int']>,
  filter13?: Maybe<TagFilter>,
  order10?: Maybe<TagOrder>,
  first10?: Maybe<Scalars['Int']>,
  offset10?: Maybe<Scalars['Int']>
};


export type QueryTagQuery = (
  { __typename?: 'Query' }
  & { queryTag: Maybe<Array<Maybe<(
    { __typename?: 'Tag' }
    & Pick<Tag, 'id' | 'title'>
    & { project: (
      { __typename?: 'Project' }
      & Pick<Project, 'id' | 'title' | 'description'>
      & { tags: Maybe<Array<Maybe<(
        { __typename?: 'Tag' }
        & Pick<Tag, 'id' | 'title'>
        & { project: (
          { __typename?: 'Project' }
          & Pick<Project, 'id' | 'title' | 'description'>
          & { tasks: Maybe<Array<Maybe<(
            { __typename?: 'Task' }
            & Pick<Task, 'id' | 'title' | 'hours' | 'deadline' | 'content' | 'priority' | 'complete'>
          )>>>, boards: Maybe<Array<Maybe<(
            { __typename?: 'Board' }
            & Pick<Board, 'id' | 'title' | 'order'>
          )>>>, developers: Maybe<Array<Maybe<(
            { __typename?: 'Developer' }
            & Pick<Developer, 'id' | 'name' | 'availability'>
          )>>> }
        ), developers: Maybe<Array<Maybe<(
          { __typename?: 'Developer' }
          & Pick<Developer, 'id' | 'name' | 'availability'>
          & { project: (
            { __typename?: 'Project' }
            & Pick<Project, 'id' | 'title' | 'description'>
          ), user: Maybe<Array<Maybe<(
            { __typename?: 'User' }
            & Pick<User, 'id' | 'username' | 'password' | 'location'>
          )>>>, tags: Maybe<Array<Maybe<(
            { __typename?: 'Tag' }
            & Pick<Tag, 'id' | 'title'>
          )>>>, tasks: Maybe<Array<Maybe<(
            { __typename?: 'Task' }
            & Pick<Task, 'id' | 'title' | 'hours' | 'deadline' | 'content' | 'priority' | 'complete'>
          )>>>, liked: Maybe<Array<Maybe<(
            { __typename?: 'Task' }
            & Pick<Task, 'id' | 'title' | 'hours' | 'deadline' | 'content' | 'priority' | 'complete'>
          )>>> }
        )>>> }
      )>>> }
    ), developers: Maybe<Array<Maybe<(
      { __typename?: 'Developer' }
      & Pick<Developer, 'id' | 'name' | 'availability'>
    )>>> }
  )>>> }
);

export type QueryTaskQueryVariables = {
  filter?: Maybe<TaskFilter>,
  order?: Maybe<TaskOrder>,
  first?: Maybe<Scalars['Int']>,
  offset?: Maybe<Scalars['Int']>,
  filter1?: Maybe<BoardFilter>,
  order1?: Maybe<BoardOrder>,
  first1?: Maybe<Scalars['Int']>,
  offset1?: Maybe<Scalars['Int']>,
  filter2?: Maybe<DeveloperFilter>,
  order2?: Maybe<DeveloperOrder>,
  first2?: Maybe<Scalars['Int']>,
  offset2?: Maybe<Scalars['Int']>,
  filter3?: Maybe<ProjectFilter>,
  filter4?: Maybe<ProjectFilter>,
  filter5?: Maybe<UserFilter>,
  order3?: Maybe<UserOrder>,
  first3?: Maybe<Scalars['Int']>,
  offset3?: Maybe<Scalars['Int']>,
  filter6?: Maybe<TagFilter>,
  order4?: Maybe<TagOrder>,
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
  filter9?: Maybe<DeveloperFilter>,
  order7?: Maybe<DeveloperOrder>,
  first7?: Maybe<Scalars['Int']>,
  offset7?: Maybe<Scalars['Int']>,
  filter10?: Maybe<TagFilter>,
  order8?: Maybe<TagOrder>,
  first8?: Maybe<Scalars['Int']>,
  offset8?: Maybe<Scalars['Int']>,
  filter11?: Maybe<ProjectFilter>,
  filter12?: Maybe<ProjectFilter>,
  filter13?: Maybe<BoardFilter>,
  filter14?: Maybe<TaskFilter>,
  order9?: Maybe<TaskOrder>,
  first9?: Maybe<Scalars['Int']>,
  offset9?: Maybe<Scalars['Int']>,
  filter15?: Maybe<ColumnFilter>,
  order10?: Maybe<ColumnOrder>,
  first10?: Maybe<Scalars['Int']>,
  offset10?: Maybe<Scalars['Int']>,
  filter16?: Maybe<BoardFilter>,
  filter17?: Maybe<ProjectFilter>,
  filter18?: Maybe<ColumnFilter>,
  filter19?: Maybe<DeveloperFilter>,
  order11?: Maybe<DeveloperOrder>,
  first11?: Maybe<Scalars['Int']>,
  offset11?: Maybe<Scalars['Int']>,
  filter20?: Maybe<ProjectFilter>,
  filter21?: Maybe<UserFilter>,
  order12?: Maybe<UserOrder>,
  first12?: Maybe<Scalars['Int']>,
  offset12?: Maybe<Scalars['Int']>,
  filter22?: Maybe<TagFilter>,
  order13?: Maybe<TagOrder>,
  first13?: Maybe<Scalars['Int']>,
  offset13?: Maybe<Scalars['Int']>,
  filter23?: Maybe<TaskFilter>,
  order14?: Maybe<TaskOrder>,
  first14?: Maybe<Scalars['Int']>,
  offset14?: Maybe<Scalars['Int']>,
  filter24?: Maybe<TaskFilter>,
  order15?: Maybe<TaskOrder>,
  first15?: Maybe<Scalars['Int']>,
  offset15?: Maybe<Scalars['Int']>,
  filter25?: Maybe<DeveloperFilter>,
  order16?: Maybe<DeveloperOrder>,
  first16?: Maybe<Scalars['Int']>,
  offset16?: Maybe<Scalars['Int']>,
  filter26?: Maybe<TaskFilter>,
  filter27?: Maybe<DeveloperFilter>,
  filter28?: Maybe<CommentFilter>,
  order17?: Maybe<CommentOrder>,
  first17?: Maybe<Scalars['Int']>,
  offset17?: Maybe<Scalars['Int']>,
  filter29?: Maybe<TaskFilter>,
  order18?: Maybe<TaskOrder>,
  first18?: Maybe<Scalars['Int']>,
  offset18?: Maybe<Scalars['Int']>,
  filter30?: Maybe<ColumnFilter>,
  filter31?: Maybe<DeveloperFilter>,
  order19?: Maybe<DeveloperOrder>,
  first19?: Maybe<Scalars['Int']>,
  offset19?: Maybe<Scalars['Int']>,
  filter32?: Maybe<DeveloperFilter>,
  order20?: Maybe<DeveloperOrder>,
  first20?: Maybe<Scalars['Int']>,
  offset20?: Maybe<Scalars['Int']>,
  filter33?: Maybe<CommentFilter>,
  order21?: Maybe<CommentOrder>,
  first21?: Maybe<Scalars['Int']>,
  offset21?: Maybe<Scalars['Int']>,
  filter34?: Maybe<TaskFilter>,
  order22?: Maybe<TaskOrder>,
  first22?: Maybe<Scalars['Int']>,
  offset22?: Maybe<Scalars['Int']>
};


export type QueryTaskQuery = (
  { __typename?: 'Query' }
  & { queryTask: Maybe<Array<Maybe<(
    { __typename?: 'Task' }
    & Pick<Task, 'id' | 'title' | 'hours' | 'deadline' | 'content' | 'priority' | 'complete'>
    & { project: (
      { __typename?: 'Project' }
      & Pick<Project, 'id' | 'title' | 'description'>
      & { tags: Maybe<Array<Maybe<(
        { __typename?: 'Tag' }
        & Pick<Tag, 'id' | 'title'>
        & { project: (
          { __typename?: 'Project' }
          & Pick<Project, 'id' | 'title' | 'description'>
          & { tasks: Maybe<Array<Maybe<(
            { __typename?: 'Task' }
            & Pick<Task, 'id' | 'title' | 'hours' | 'deadline' | 'content' | 'priority' | 'complete'>
          )>>>, boards: Maybe<Array<Maybe<(
            { __typename?: 'Board' }
            & Pick<Board, 'id' | 'title' | 'order'>
          )>>>, developers: Maybe<Array<Maybe<(
            { __typename?: 'Developer' }
            & Pick<Developer, 'id' | 'name' | 'availability'>
          )>>> }
        ), developers: Maybe<Array<Maybe<(
          { __typename?: 'Developer' }
          & Pick<Developer, 'id' | 'name' | 'availability'>
          & { project: (
            { __typename?: 'Project' }
            & Pick<Project, 'id' | 'title' | 'description'>
          ), user: Maybe<Array<Maybe<(
            { __typename?: 'User' }
            & Pick<User, 'id' | 'username' | 'password' | 'location'>
          )>>>, tags: Maybe<Array<Maybe<(
            { __typename?: 'Tag' }
            & Pick<Tag, 'id' | 'title'>
          )>>>, tasks: Maybe<Array<Maybe<(
            { __typename?: 'Task' }
            & Pick<Task, 'id' | 'title' | 'hours' | 'deadline' | 'content' | 'priority' | 'complete'>
          )>>>, liked: Maybe<Array<Maybe<(
            { __typename?: 'Task' }
            & Pick<Task, 'id' | 'title' | 'hours' | 'deadline' | 'content' | 'priority' | 'complete'>
          )>>> }
        )>>> }
      )>>> }
    ), column: Maybe<(
      { __typename?: 'Column' }
      & Pick<Column, 'id' | 'title'>
      & { board: (
        { __typename?: 'Board' }
        & Pick<Board, 'id' | 'title' | 'order'>
        & { project: (
          { __typename?: 'Project' }
          & Pick<Project, 'id' | 'title' | 'description'>
        ), columns: Maybe<Array<Maybe<(
          { __typename?: 'Column' }
          & Pick<Column, 'id' | 'title'>
          & { board: (
            { __typename?: 'Board' }
            & Pick<Board, 'id' | 'title' | 'order'>
          ), tasks: Maybe<Array<Maybe<(
            { __typename?: 'Task' }
            & Pick<Task, 'id' | 'title' | 'hours' | 'deadline' | 'content' | 'priority' | 'complete'>
          )>>> }
        )>>> }
      ), tasks: Maybe<Array<Maybe<(
        { __typename?: 'Task' }
        & Pick<Task, 'id' | 'title' | 'hours' | 'deadline' | 'content' | 'priority' | 'complete'>
        & { project: (
          { __typename?: 'Project' }
          & Pick<Project, 'id' | 'title' | 'description'>
        ), column: Maybe<(
          { __typename?: 'Column' }
          & Pick<Column, 'id' | 'title'>
        )>, developers: Maybe<Array<Maybe<(
          { __typename?: 'Developer' }
          & Pick<Developer, 'id' | 'name' | 'availability'>
        )>>>, likes: Maybe<Array<Maybe<(
          { __typename?: 'Developer' }
          & Pick<Developer, 'id' | 'name' | 'availability'>
          & { project: (
            { __typename?: 'Project' }
            & Pick<Project, 'id' | 'title' | 'description'>
          ), user: Maybe<Array<Maybe<(
            { __typename?: 'User' }
            & Pick<User, 'id' | 'username' | 'password' | 'location'>
          )>>>, tags: Maybe<Array<Maybe<(
            { __typename?: 'Tag' }
            & Pick<Tag, 'id' | 'title'>
          )>>>, tasks: Maybe<Array<Maybe<(
            { __typename?: 'Task' }
            & Pick<Task, 'id' | 'title' | 'hours' | 'deadline' | 'content' | 'priority' | 'complete'>
          )>>>, liked: Maybe<Array<Maybe<(
            { __typename?: 'Task' }
            & Pick<Task, 'id' | 'title' | 'hours' | 'deadline' | 'content' | 'priority' | 'complete'>
          )>>> }
        )>>>, comments: Maybe<Array<Maybe<(
          { __typename?: 'Comment' }
          & Pick<Comment, 'id' | 'content'>
          & { task: (
            { __typename?: 'Task' }
            & Pick<Task, 'id' | 'title' | 'hours' | 'deadline' | 'content' | 'priority' | 'complete'>
          ), developer: (
            { __typename?: 'Developer' }
            & Pick<Developer, 'id' | 'name' | 'availability'>
          ) }
        )>>> }
      )>>> }
    )>, developers: Maybe<Array<Maybe<(
      { __typename?: 'Developer' }
      & Pick<Developer, 'id' | 'name' | 'availability'>
    )>>>, likes: Maybe<Array<Maybe<(
      { __typename?: 'Developer' }
      & Pick<Developer, 'id' | 'name' | 'availability'>
    )>>>, comments: Maybe<Array<Maybe<(
      { __typename?: 'Comment' }
      & Pick<Comment, 'id' | 'content'>
    )>>> }
  )>>> }
);

export type QueryUserQueryVariables = {
  filter?: Maybe<ProjectFilter>,
  filter1?: Maybe<DeveloperFilter>,
  order?: Maybe<DeveloperOrder>,
  first?: Maybe<Scalars['Int']>,
  offset?: Maybe<Scalars['Int']>,
  filter2?: Maybe<TagFilter>,
  order1?: Maybe<TagOrder>,
  first1?: Maybe<Scalars['Int']>,
  offset1?: Maybe<Scalars['Int']>,
  filter3?: Maybe<ProjectFilter>,
  filter4?: Maybe<ColumnFilter>,
  filter5?: Maybe<DeveloperFilter>,
  order2?: Maybe<DeveloperOrder>,
  first2?: Maybe<Scalars['Int']>,
  offset2?: Maybe<Scalars['Int']>,
  filter6?: Maybe<DeveloperFilter>,
  order3?: Maybe<DeveloperOrder>,
  first3?: Maybe<Scalars['Int']>,
  offset3?: Maybe<Scalars['Int']>,
  filter7?: Maybe<CommentFilter>,
  order4?: Maybe<CommentOrder>,
  first4?: Maybe<Scalars['Int']>,
  offset4?: Maybe<Scalars['Int']>,
  filter8?: Maybe<TaskFilter>,
  order5?: Maybe<TaskOrder>,
  first5?: Maybe<Scalars['Int']>,
  offset5?: Maybe<Scalars['Int']>,
  filter9?: Maybe<ProjectFilter>,
  filter10?: Maybe<ColumnFilter>,
  order6?: Maybe<ColumnOrder>,
  first6?: Maybe<Scalars['Int']>,
  offset6?: Maybe<Scalars['Int']>,
  filter11?: Maybe<BoardFilter>,
  order7?: Maybe<BoardOrder>,
  first7?: Maybe<Scalars['Int']>,
  offset7?: Maybe<Scalars['Int']>,
  filter12?: Maybe<ProjectFilter>,
  filter13?: Maybe<UserFilter>,
  order8?: Maybe<UserOrder>,
  first8?: Maybe<Scalars['Int']>,
  offset8?: Maybe<Scalars['Int']>,
  filter14?: Maybe<TagFilter>,
  order9?: Maybe<TagOrder>,
  first9?: Maybe<Scalars['Int']>,
  offset9?: Maybe<Scalars['Int']>,
  filter15?: Maybe<TaskFilter>,
  order10?: Maybe<TaskOrder>,
  first10?: Maybe<Scalars['Int']>,
  offset10?: Maybe<Scalars['Int']>,
  filter16?: Maybe<TaskFilter>,
  order11?: Maybe<TaskOrder>,
  first11?: Maybe<Scalars['Int']>,
  offset11?: Maybe<Scalars['Int']>,
  filter17?: Maybe<DeveloperFilter>,
  order12?: Maybe<DeveloperOrder>,
  first12?: Maybe<Scalars['Int']>,
  offset12?: Maybe<Scalars['Int']>,
  filter18?: Maybe<ProjectFilter>,
  filter19?: Maybe<TagFilter>,
  order13?: Maybe<TagOrder>,
  first13?: Maybe<Scalars['Int']>,
  offset13?: Maybe<Scalars['Int']>,
  filter20?: Maybe<TaskFilter>,
  order14?: Maybe<TaskOrder>,
  first14?: Maybe<Scalars['Int']>,
  offset14?: Maybe<Scalars['Int']>,
  filter21?: Maybe<TaskFilter>,
  order15?: Maybe<TaskOrder>,
  first15?: Maybe<Scalars['Int']>,
  offset15?: Maybe<Scalars['Int']>,
  filter22?: Maybe<DeveloperFilter>,
  order16?: Maybe<DeveloperOrder>,
  first16?: Maybe<Scalars['Int']>,
  offset16?: Maybe<Scalars['Int']>,
  filter23?: Maybe<ProjectFilter>,
  filter24?: Maybe<ColumnFilter>,
  filter25?: Maybe<DeveloperFilter>,
  order17?: Maybe<DeveloperOrder>,
  first17?: Maybe<Scalars['Int']>,
  offset17?: Maybe<Scalars['Int']>,
  filter26?: Maybe<DeveloperFilter>,
  order18?: Maybe<DeveloperOrder>,
  first18?: Maybe<Scalars['Int']>,
  offset18?: Maybe<Scalars['Int']>,
  filter27?: Maybe<CommentFilter>,
  order19?: Maybe<CommentOrder>,
  first19?: Maybe<Scalars['Int']>,
  offset19?: Maybe<Scalars['Int']>,
  filter28?: Maybe<TaskFilter>,
  order20?: Maybe<TaskOrder>,
  first20?: Maybe<Scalars['Int']>,
  offset20?: Maybe<Scalars['Int']>,
  filter29?: Maybe<UserFilter>,
  order21?: Maybe<UserOrder>,
  first21?: Maybe<Scalars['Int']>,
  offset21?: Maybe<Scalars['Int']>,
  filter30?: Maybe<DeveloperFilter>,
  order22?: Maybe<DeveloperOrder>,
  first22?: Maybe<Scalars['Int']>,
  offset22?: Maybe<Scalars['Int']>,
  filter31?: Maybe<TaskFilter>,
  order23?: Maybe<TaskOrder>,
  first23?: Maybe<Scalars['Int']>,
  offset23?: Maybe<Scalars['Int']>,
  filter32?: Maybe<UserFilter>,
  order24?: Maybe<UserOrder>,
  first24?: Maybe<Scalars['Int']>,
  offset24?: Maybe<Scalars['Int']>
};


export type QueryUserQuery = (
  { __typename?: 'Query' }
  & { queryUser: Maybe<Array<Maybe<(
    { __typename?: 'User' }
    & Pick<User, 'id' | 'username' | 'password' | 'location'>
    & { roles: Maybe<Array<Maybe<(
      { __typename?: 'Developer' }
      & Pick<Developer, 'id' | 'name' | 'availability'>
      & { project: (
        { __typename?: 'Project' }
        & Pick<Project, 'id' | 'title' | 'description'>
        & { tags: Maybe<Array<Maybe<(
          { __typename?: 'Tag' }
          & Pick<Tag, 'id' | 'title'>
          & { project: (
            { __typename?: 'Project' }
            & Pick<Project, 'id' | 'title' | 'description'>
          ), developers: Maybe<Array<Maybe<(
            { __typename?: 'Developer' }
            & Pick<Developer, 'id' | 'name' | 'availability'>
          )>>> }
        )>>>, tasks: Maybe<Array<Maybe<(
          { __typename?: 'Task' }
          & Pick<Task, 'id' | 'title' | 'hours' | 'deadline' | 'content' | 'priority' | 'complete'>
          & { project: (
            { __typename?: 'Project' }
            & Pick<Project, 'id' | 'title' | 'description'>
          ), column: Maybe<(
            { __typename?: 'Column' }
            & Pick<Column, 'id' | 'title'>
          )>, developers: Maybe<Array<Maybe<(
            { __typename?: 'Developer' }
            & Pick<Developer, 'id' | 'name' | 'availability'>
          )>>>, likes: Maybe<Array<Maybe<(
            { __typename?: 'Developer' }
            & Pick<Developer, 'id' | 'name' | 'availability'>
          )>>>, comments: Maybe<Array<Maybe<(
            { __typename?: 'Comment' }
            & Pick<Comment, 'id' | 'content'>
          )>>> }
        )>>>, boards: Maybe<Array<Maybe<(
          { __typename?: 'Board' }
          & Pick<Board, 'id' | 'title' | 'order'>
          & { project: (
            { __typename?: 'Project' }
            & Pick<Project, 'id' | 'title' | 'description'>
          ), columns: Maybe<Array<Maybe<(
            { __typename?: 'Column' }
            & Pick<Column, 'id' | 'title'>
          )>>> }
        )>>>, developers: Maybe<Array<Maybe<(
          { __typename?: 'Developer' }
          & Pick<Developer, 'id' | 'name' | 'availability'>
          & { project: (
            { __typename?: 'Project' }
            & Pick<Project, 'id' | 'title' | 'description'>
          ), user: Maybe<Array<Maybe<(
            { __typename?: 'User' }
            & Pick<User, 'id' | 'username' | 'password' | 'location'>
          )>>>, tags: Maybe<Array<Maybe<(
            { __typename?: 'Tag' }
            & Pick<Tag, 'id' | 'title'>
          )>>>, tasks: Maybe<Array<Maybe<(
            { __typename?: 'Task' }
            & Pick<Task, 'id' | 'title' | 'hours' | 'deadline' | 'content' | 'priority' | 'complete'>
          )>>>, liked: Maybe<Array<Maybe<(
            { __typename?: 'Task' }
            & Pick<Task, 'id' | 'title' | 'hours' | 'deadline' | 'content' | 'priority' | 'complete'>
          )>>> }
        )>>> }
      ), user: Maybe<Array<Maybe<(
        { __typename?: 'User' }
        & Pick<User, 'id' | 'username' | 'password' | 'location'>
        & { roles: Maybe<Array<Maybe<(
          { __typename?: 'Developer' }
          & Pick<Developer, 'id' | 'name' | 'availability'>
          & { tags: Maybe<Array<Maybe<(
            { __typename?: 'Tag' }
            & Pick<Tag, 'id' | 'title'>
          )>>>, tasks: Maybe<Array<Maybe<(
            { __typename?: 'Task' }
            & Pick<Task, 'id' | 'title' | 'hours' | 'deadline' | 'content' | 'priority' | 'complete'>
          )>>>, liked: Maybe<Array<Maybe<(
            { __typename?: 'Task' }
            & Pick<Task, 'id' | 'title' | 'hours' | 'deadline' | 'content' | 'priority' | 'complete'>
          )>>> }
        )>>>, stars: Maybe<Array<Maybe<(
          { __typename?: 'Task' }
          & Pick<Task, 'id' | 'title' | 'hours' | 'deadline' | 'content' | 'priority' | 'complete'>
          & { project: (
            { __typename?: 'Project' }
            & Pick<Project, 'id' | 'title' | 'description'>
          ), column: Maybe<(
            { __typename?: 'Column' }
            & Pick<Column, 'id' | 'title'>
          )>, developers: Maybe<Array<Maybe<(
            { __typename?: 'Developer' }
            & Pick<Developer, 'id' | 'name' | 'availability'>
          )>>>, likes: Maybe<Array<Maybe<(
            { __typename?: 'Developer' }
            & Pick<Developer, 'id' | 'name' | 'availability'>
          )>>>, comments: Maybe<Array<Maybe<(
            { __typename?: 'Comment' }
            & Pick<Comment, 'id' | 'content'>
          )>>> }
        )>>> }
      )>>> }
    )>>>, stars: Maybe<Array<Maybe<(
      { __typename?: 'Task' }
      & Pick<Task, 'id' | 'title' | 'hours' | 'deadline' | 'content' | 'priority' | 'complete'>
    )>>> }
  )>>> }
);


export const AddBoardDocument = gql`
    mutation addBoard($filter: ProjectFilter, $filter1: DeveloperFilter, $order: DeveloperOrder, $first: Int, $offset: Int, $filter2: TagFilter, $order1: TagOrder, $first1: Int, $offset1: Int, $filter3: ProjectFilter, $filter4: ColumnFilter, $filter5: DeveloperFilter, $order2: DeveloperOrder, $first2: Int, $offset2: Int, $filter6: DeveloperFilter, $order3: DeveloperOrder, $first3: Int, $offset3: Int, $filter7: CommentFilter, $order4: CommentOrder, $first4: Int, $offset4: Int, $filter8: TaskFilter, $order5: TaskOrder, $first5: Int, $offset5: Int, $filter9: ProjectFilter, $filter10: ColumnFilter, $order6: ColumnOrder, $first6: Int, $offset6: Int, $filter11: BoardFilter, $order7: BoardOrder, $first7: Int, $offset7: Int, $filter12: ProjectFilter, $filter13: UserFilter, $order8: UserOrder, $first8: Int, $offset8: Int, $filter14: TagFilter, $order9: TagOrder, $first9: Int, $offset9: Int, $filter15: TaskFilter, $order10: TaskOrder, $first10: Int, $offset10: Int, $filter16: TaskFilter, $order11: TaskOrder, $first11: Int, $offset11: Int, $filter17: DeveloperFilter, $order12: DeveloperOrder, $first12: Int, $offset12: Int, $filter18: ProjectFilter, $filter19: BoardFilter, $filter20: TaskFilter, $order13: TaskOrder, $first13: Int, $offset13: Int, $filter21: ColumnFilter, $order14: ColumnOrder, $first14: Int, $offset14: Int, $filter22: BoardFilter, $order15: BoardOrder, $first15: Int, $offset15: Int, $input: [AddBoardInput!]!) {
  addBoard(input: $input) {
    board(filter: $filter22, order: $order15, first: $first15, offset: $offset15) {
      id
      project(filter: $filter18) {
        id
        title
        description
        tags(filter: $filter2, order: $order1, first: $first1, offset: $offset1) {
          id
          title
          project(filter: $filter) {
            id
            title
            description
          }
          developers(filter: $filter1, order: $order, first: $first, offset: $offset) {
            id
            name
            availability
          }
        }
        tasks(filter: $filter8, order: $order5, first: $first5, offset: $offset5) {
          id
          project(filter: $filter3) {
            id
            title
            description
          }
          column(filter: $filter4) {
            id
            title
          }
          title
          developers(filter: $filter5, order: $order2, first: $first2, offset: $offset2) {
            id
            name
            availability
          }
          hours
          deadline
          content
          priority
          complete
          likes(filter: $filter6, order: $order3, first: $first3, offset: $offset3) {
            id
            name
            availability
          }
          comments(filter: $filter7, order: $order4, first: $first4, offset: $offset4) {
            id
            content
          }
        }
        boards(filter: $filter11, order: $order7, first: $first7, offset: $offset7) {
          id
          project(filter: $filter9) {
            id
            title
            description
          }
          title
          columns(filter: $filter10, order: $order6, first: $first6, offset: $offset6) {
            id
            title
          }
          order
        }
        developers(filter: $filter17, order: $order12, first: $first12, offset: $offset12) {
          id
          project(filter: $filter12) {
            id
            title
            description
          }
          name
          availability
          user(filter: $filter13, order: $order8, first: $first8, offset: $offset8) {
            id
            username
            password
            location
          }
          tags(filter: $filter14, order: $order9, first: $first9, offset: $offset9) {
            id
            title
          }
          tasks(filter: $filter15, order: $order10, first: $first10, offset: $offset10) {
            id
            title
            hours
            deadline
            content
            priority
            complete
          }
          liked(filter: $filter16, order: $order11, first: $first11, offset: $offset11) {
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
      title
      columns(filter: $filter21, order: $order14, first: $first14, offset: $offset14) {
        id
        board(filter: $filter19) {
          id
          title
          order
        }
        title
        tasks(filter: $filter20, order: $order13, first: $first13, offset: $offset13) {
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
    numUids
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
    mutation addColumn($filter: TagFilter, $order: TagOrder, $first: Int, $offset: Int, $filter1: TaskFilter, $order1: TaskOrder, $first1: Int, $offset1: Int, $filter2: BoardFilter, $order2: BoardOrder, $first2: Int, $offset2: Int, $filter3: DeveloperFilter, $order3: DeveloperOrder, $first3: Int, $offset3: Int, $filter4: ProjectFilter, $filter5: BoardFilter, $filter6: TaskFilter, $order4: TaskOrder, $first4: Int, $offset4: Int, $filter7: ColumnFilter, $order5: ColumnOrder, $first5: Int, $offset5: Int, $filter8: BoardFilter, $filter9: ProjectFilter, $filter10: ColumnFilter, $filter11: ProjectFilter, $filter12: UserFilter, $order6: UserOrder, $first6: Int, $offset6: Int, $filter13: TagFilter, $order7: TagOrder, $first7: Int, $offset7: Int, $filter14: TaskFilter, $order8: TaskOrder, $first8: Int, $offset8: Int, $filter15: TaskFilter, $order9: TaskOrder, $first9: Int, $offset9: Int, $filter16: DeveloperFilter, $order10: DeveloperOrder, $first10: Int, $offset10: Int, $filter17: ProjectFilter, $filter18: UserFilter, $order11: UserOrder, $first11: Int, $offset11: Int, $filter19: TagFilter, $order12: TagOrder, $first12: Int, $offset12: Int, $filter20: TaskFilter, $order13: TaskOrder, $first13: Int, $offset13: Int, $filter21: TaskFilter, $order14: TaskOrder, $first14: Int, $offset14: Int, $filter22: DeveloperFilter, $order15: DeveloperOrder, $first15: Int, $offset15: Int, $filter23: TaskFilter, $filter24: DeveloperFilter, $filter25: CommentFilter, $order16: CommentOrder, $first16: Int, $offset16: Int, $filter26: TaskFilter, $order17: TaskOrder, $first17: Int, $offset17: Int, $filter27: ColumnFilter, $order18: ColumnOrder, $first18: Int, $offset18: Int, $input: [AddColumnInput!]!) {
  addColumn(input: $input) {
    column(filter: $filter27, order: $order18, first: $first18, offset: $offset18) {
      id
      board(filter: $filter8) {
        id
        project(filter: $filter4) {
          id
          title
          description
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
          boards(filter: $filter2, order: $order2, first: $first2, offset: $offset2) {
            id
            title
            order
          }
          developers(filter: $filter3, order: $order3, first: $first3, offset: $offset3) {
            id
            name
            availability
          }
        }
        title
        columns(filter: $filter7, order: $order5, first: $first5, offset: $offset5) {
          id
          board(filter: $filter5) {
            id
            title
            order
          }
          title
          tasks(filter: $filter6, order: $order4, first: $first4, offset: $offset4) {
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
      title
      tasks(filter: $filter26, order: $order17, first: $first17, offset: $offset17) {
        id
        project(filter: $filter9) {
          id
          title
          description
        }
        column(filter: $filter10) {
          id
          title
        }
        title
        developers(filter: $filter16, order: $order10, first: $first10, offset: $offset10) {
          id
          project(filter: $filter11) {
            id
            title
            description
          }
          name
          availability
          user(filter: $filter12, order: $order6, first: $first6, offset: $offset6) {
            id
            username
            password
            location
          }
          tags(filter: $filter13, order: $order7, first: $first7, offset: $offset7) {
            id
            title
          }
          tasks(filter: $filter14, order: $order8, first: $first8, offset: $offset8) {
            id
            title
            hours
            deadline
            content
            priority
            complete
          }
          liked(filter: $filter15, order: $order9, first: $first9, offset: $offset9) {
            id
            title
            hours
            deadline
            content
            priority
            complete
          }
        }
        hours
        deadline
        content
        priority
        complete
        likes(filter: $filter22, order: $order15, first: $first15, offset: $offset15) {
          id
          project(filter: $filter17) {
            id
            title
            description
          }
          name
          availability
          user(filter: $filter18, order: $order11, first: $first11, offset: $offset11) {
            id
            username
            password
            location
          }
          tags(filter: $filter19, order: $order12, first: $first12, offset: $offset12) {
            id
            title
          }
          tasks(filter: $filter20, order: $order13, first: $first13, offset: $offset13) {
            id
            title
            hours
            deadline
            content
            priority
            complete
          }
          liked(filter: $filter21, order: $order14, first: $first14, offset: $offset14) {
            id
            title
            hours
            deadline
            content
            priority
            complete
          }
        }
        comments(filter: $filter25, order: $order16, first: $first16, offset: $offset16) {
          id
          task(filter: $filter23) {
            id
            title
            hours
            deadline
            content
            priority
            complete
          }
          developer(filter: $filter24) {
            id
            name
            availability
          }
          content
        }
      }
    }
    numUids
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
    mutation addComment($filter: TagFilter, $order: TagOrder, $first: Int, $offset: Int, $filter1: TaskFilter, $order1: TaskOrder, $first1: Int, $offset1: Int, $filter2: BoardFilter, $order2: BoardOrder, $first2: Int, $offset2: Int, $filter3: DeveloperFilter, $order3: DeveloperOrder, $first3: Int, $offset3: Int, $filter4: ProjectFilter, $filter5: BoardFilter, $filter6: TaskFilter, $order4: TaskOrder, $first4: Int, $offset4: Int, $filter7: ColumnFilter, $filter8: ProjectFilter, $filter9: UserFilter, $order5: UserOrder, $first5: Int, $offset5: Int, $filter10: TagFilter, $order6: TagOrder, $first6: Int, $offset6: Int, $filter11: TaskFilter, $order7: TaskOrder, $first7: Int, $offset7: Int, $filter12: TaskFilter, $order8: TaskOrder, $first8: Int, $offset8: Int, $filter13: DeveloperFilter, $order9: DeveloperOrder, $first9: Int, $offset9: Int, $filter14: ProjectFilter, $filter15: UserFilter, $order10: UserOrder, $first10: Int, $offset10: Int, $filter16: TagFilter, $order11: TagOrder, $first11: Int, $offset11: Int, $filter17: TaskFilter, $order12: TaskOrder, $first12: Int, $offset12: Int, $filter18: TaskFilter, $order13: TaskOrder, $first13: Int, $offset13: Int, $filter19: DeveloperFilter, $order14: DeveloperOrder, $first14: Int, $offset14: Int, $filter20: TaskFilter, $filter21: DeveloperFilter, $filter22: CommentFilter, $order15: CommentOrder, $first15: Int, $offset15: Int, $filter23: TaskFilter, $filter24: ProjectFilter, $filter25: DeveloperFilter, $order16: DeveloperOrder, $first16: Int, $offset16: Int, $filter26: TaskFilter, $order17: TaskOrder, $first17: Int, $offset17: Int, $filter27: UserFilter, $order18: UserOrder, $first18: Int, $offset18: Int, $filter28: ProjectFilter, $filter29: DeveloperFilter, $order19: DeveloperOrder, $first19: Int, $offset19: Int, $filter30: TagFilter, $order20: TagOrder, $first20: Int, $offset20: Int, $filter31: ProjectFilter, $filter32: ColumnFilter, $filter33: DeveloperFilter, $order21: DeveloperOrder, $first21: Int, $offset21: Int, $filter34: DeveloperFilter, $order22: DeveloperOrder, $first22: Int, $offset22: Int, $filter35: CommentFilter, $order23: CommentOrder, $first23: Int, $offset23: Int, $filter36: TaskFilter, $order24: TaskOrder, $first24: Int, $offset24: Int, $filter37: ProjectFilter, $filter38: ColumnFilter, $filter39: DeveloperFilter, $order25: DeveloperOrder, $first25: Int, $offset25: Int, $filter40: DeveloperFilter, $order26: DeveloperOrder, $first26: Int, $offset26: Int, $filter41: CommentFilter, $order27: CommentOrder, $first27: Int, $offset27: Int, $filter42: TaskFilter, $order28: TaskOrder, $first28: Int, $offset28: Int, $filter43: DeveloperFilter, $filter44: CommentFilter, $order29: CommentOrder, $first29: Int, $offset29: Int, $input: [AddCommentInput!]!) {
  addComment(input: $input) {
    comment(filter: $filter44, order: $order29, first: $first29, offset: $offset29) {
      id
      task(filter: $filter23) {
        id
        project(filter: $filter4) {
          id
          title
          description
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
          boards(filter: $filter2, order: $order2, first: $first2, offset: $offset2) {
            id
            title
            order
          }
          developers(filter: $filter3, order: $order3, first: $first3, offset: $offset3) {
            id
            name
            availability
          }
        }
        column(filter: $filter7) {
          id
          board(filter: $filter5) {
            id
            title
            order
          }
          title
          tasks(filter: $filter6, order: $order4, first: $first4, offset: $offset4) {
            id
            title
            hours
            deadline
            content
            priority
            complete
          }
        }
        title
        developers(filter: $filter13, order: $order9, first: $first9, offset: $offset9) {
          id
          project(filter: $filter8) {
            id
            title
            description
          }
          name
          availability
          user(filter: $filter9, order: $order5, first: $first5, offset: $offset5) {
            id
            username
            password
            location
          }
          tags(filter: $filter10, order: $order6, first: $first6, offset: $offset6) {
            id
            title
          }
          tasks(filter: $filter11, order: $order7, first: $first7, offset: $offset7) {
            id
            title
            hours
            deadline
            content
            priority
            complete
          }
          liked(filter: $filter12, order: $order8, first: $first8, offset: $offset8) {
            id
            title
            hours
            deadline
            content
            priority
            complete
          }
        }
        hours
        deadline
        content
        priority
        complete
        likes(filter: $filter19, order: $order14, first: $first14, offset: $offset14) {
          id
          project(filter: $filter14) {
            id
            title
            description
          }
          name
          availability
          user(filter: $filter15, order: $order10, first: $first10, offset: $offset10) {
            id
            username
            password
            location
          }
          tags(filter: $filter16, order: $order11, first: $first11, offset: $offset11) {
            id
            title
          }
          tasks(filter: $filter17, order: $order12, first: $first12, offset: $offset12) {
            id
            title
            hours
            deadline
            content
            priority
            complete
          }
          liked(filter: $filter18, order: $order13, first: $first13, offset: $offset13) {
            id
            title
            hours
            deadline
            content
            priority
            complete
          }
        }
        comments(filter: $filter22, order: $order15, first: $first15, offset: $offset15) {
          id
          task(filter: $filter20) {
            id
            title
            hours
            deadline
            content
            priority
            complete
          }
          developer(filter: $filter21) {
            id
            name
            availability
          }
          content
        }
      }
      developer(filter: $filter43) {
        id
        project(filter: $filter24) {
          id
          title
          description
        }
        name
        availability
        user(filter: $filter27, order: $order18, first: $first18, offset: $offset18) {
          id
          username
          password
          location
          roles(filter: $filter25, order: $order16, first: $first16, offset: $offset16) {
            id
            name
            availability
          }
          stars(filter: $filter26, order: $order17, first: $first17, offset: $offset17) {
            id
            title
            hours
            deadline
            content
            priority
            complete
          }
        }
        tags(filter: $filter30, order: $order20, first: $first20, offset: $offset20) {
          id
          title
          project(filter: $filter28) {
            id
            title
            description
          }
          developers(filter: $filter29, order: $order19, first: $first19, offset: $offset19) {
            id
            name
            availability
          }
        }
        tasks(filter: $filter36, order: $order24, first: $first24, offset: $offset24) {
          id
          project(filter: $filter31) {
            id
            title
            description
          }
          column(filter: $filter32) {
            id
            title
          }
          title
          developers(filter: $filter33, order: $order21, first: $first21, offset: $offset21) {
            id
            name
            availability
          }
          hours
          deadline
          content
          priority
          complete
          likes(filter: $filter34, order: $order22, first: $first22, offset: $offset22) {
            id
            name
            availability
          }
          comments(filter: $filter35, order: $order23, first: $first23, offset: $offset23) {
            id
            content
          }
        }
        liked(filter: $filter42, order: $order28, first: $first28, offset: $offset28) {
          id
          project(filter: $filter37) {
            id
            title
            description
          }
          column(filter: $filter38) {
            id
            title
          }
          title
          developers(filter: $filter39, order: $order25, first: $first25, offset: $offset25) {
            id
            name
            availability
          }
          hours
          deadline
          content
          priority
          complete
          likes(filter: $filter40, order: $order26, first: $first26, offset: $offset26) {
            id
            name
            availability
          }
          comments(filter: $filter41, order: $order27, first: $first27, offset: $offset27) {
            id
            content
          }
        }
      }
      content
    }
    numUids
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
export const AddDeveloperDocument = gql`
    mutation addDeveloper($filter: ProjectFilter, $filter1: DeveloperFilter, $order: DeveloperOrder, $first: Int, $offset: Int, $filter2: TagFilter, $order1: TagOrder, $first1: Int, $offset1: Int, $filter3: ProjectFilter, $filter4: ColumnFilter, $filter5: DeveloperFilter, $order2: DeveloperOrder, $first2: Int, $offset2: Int, $filter6: DeveloperFilter, $order3: DeveloperOrder, $first3: Int, $offset3: Int, $filter7: CommentFilter, $order4: CommentOrder, $first4: Int, $offset4: Int, $filter8: TaskFilter, $order5: TaskOrder, $first5: Int, $offset5: Int, $filter9: ProjectFilter, $filter10: ColumnFilter, $order6: ColumnOrder, $first6: Int, $offset6: Int, $filter11: BoardFilter, $order7: BoardOrder, $first7: Int, $offset7: Int, $filter12: ProjectFilter, $filter13: UserFilter, $order8: UserOrder, $first8: Int, $offset8: Int, $filter14: TagFilter, $order9: TagOrder, $first9: Int, $offset9: Int, $filter15: TaskFilter, $order10: TaskOrder, $first10: Int, $offset10: Int, $filter16: TaskFilter, $order11: TaskOrder, $first11: Int, $offset11: Int, $filter17: DeveloperFilter, $order12: DeveloperOrder, $first12: Int, $offset12: Int, $filter18: ProjectFilter, $filter19: ProjectFilter, $filter20: UserFilter, $order13: UserOrder, $first13: Int, $offset13: Int, $filter21: TagFilter, $order14: TagOrder, $first14: Int, $offset14: Int, $filter22: TaskFilter, $order15: TaskOrder, $first15: Int, $offset15: Int, $filter23: TaskFilter, $order16: TaskOrder, $first16: Int, $offset16: Int, $filter24: DeveloperFilter, $order17: DeveloperOrder, $first17: Int, $offset17: Int, $filter25: ProjectFilter, $filter26: ColumnFilter, $filter27: DeveloperFilter, $order18: DeveloperOrder, $first18: Int, $offset18: Int, $filter28: DeveloperFilter, $order19: DeveloperOrder, $first19: Int, $offset19: Int, $filter29: CommentFilter, $order20: CommentOrder, $first20: Int, $offset20: Int, $filter30: TaskFilter, $order21: TaskOrder, $first21: Int, $offset21: Int, $filter31: UserFilter, $order22: UserOrder, $first22: Int, $offset22: Int, $filter32: TagFilter, $order23: TagOrder, $first23: Int, $offset23: Int, $filter33: TaskFilter, $order24: TaskOrder, $first24: Int, $offset24: Int, $filter34: ProjectFilter, $filter35: BoardFilter, $filter36: TaskFilter, $order25: TaskOrder, $first25: Int, $offset25: Int, $filter37: ColumnFilter, $filter38: DeveloperFilter, $order26: DeveloperOrder, $first26: Int, $offset26: Int, $filter39: ProjectFilter, $filter40: UserFilter, $order27: UserOrder, $first27: Int, $offset27: Int, $filter41: TagFilter, $order28: TagOrder, $first28: Int, $offset28: Int, $filter42: TaskFilter, $order29: TaskOrder, $first29: Int, $offset29: Int, $filter43: TaskFilter, $order30: TaskOrder, $first30: Int, $offset30: Int, $filter44: DeveloperFilter, $order31: DeveloperOrder, $first31: Int, $offset31: Int, $filter45: TaskFilter, $filter46: DeveloperFilter, $filter47: CommentFilter, $order32: CommentOrder, $first32: Int, $offset32: Int, $filter48: TaskFilter, $order33: TaskOrder, $first33: Int, $offset33: Int, $filter49: DeveloperFilter, $order34: DeveloperOrder, $first34: Int, $offset34: Int, $input: [AddDeveloperInput!]!) {
  addDeveloper(input: $input) {
    developer(filter: $filter49, order: $order34, first: $first34, offset: $offset34) {
      id
      project(filter: $filter18) {
        id
        title
        description
        tags(filter: $filter2, order: $order1, first: $first1, offset: $offset1) {
          id
          title
          project(filter: $filter) {
            id
            title
            description
          }
          developers(filter: $filter1, order: $order, first: $first, offset: $offset) {
            id
            name
            availability
          }
        }
        tasks(filter: $filter8, order: $order5, first: $first5, offset: $offset5) {
          id
          project(filter: $filter3) {
            id
            title
            description
          }
          column(filter: $filter4) {
            id
            title
          }
          title
          developers(filter: $filter5, order: $order2, first: $first2, offset: $offset2) {
            id
            name
            availability
          }
          hours
          deadline
          content
          priority
          complete
          likes(filter: $filter6, order: $order3, first: $first3, offset: $offset3) {
            id
            name
            availability
          }
          comments(filter: $filter7, order: $order4, first: $first4, offset: $offset4) {
            id
            content
          }
        }
        boards(filter: $filter11, order: $order7, first: $first7, offset: $offset7) {
          id
          project(filter: $filter9) {
            id
            title
            description
          }
          title
          columns(filter: $filter10, order: $order6, first: $first6, offset: $offset6) {
            id
            title
          }
          order
        }
        developers(filter: $filter17, order: $order12, first: $first12, offset: $offset12) {
          id
          project(filter: $filter12) {
            id
            title
            description
          }
          name
          availability
          user(filter: $filter13, order: $order8, first: $first8, offset: $offset8) {
            id
            username
            password
            location
          }
          tags(filter: $filter14, order: $order9, first: $first9, offset: $offset9) {
            id
            title
          }
          tasks(filter: $filter15, order: $order10, first: $first10, offset: $offset10) {
            id
            title
            hours
            deadline
            content
            priority
            complete
          }
          liked(filter: $filter16, order: $order11, first: $first11, offset: $offset11) {
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
      name
      availability
      user(filter: $filter31, order: $order22, first: $first22, offset: $offset22) {
        id
        username
        password
        location
        roles(filter: $filter24, order: $order17, first: $first17, offset: $offset17) {
          id
          project(filter: $filter19) {
            id
            title
            description
          }
          name
          availability
          user(filter: $filter20, order: $order13, first: $first13, offset: $offset13) {
            id
            username
            password
            location
          }
          tags(filter: $filter21, order: $order14, first: $first14, offset: $offset14) {
            id
            title
          }
          tasks(filter: $filter22, order: $order15, first: $first15, offset: $offset15) {
            id
            title
            hours
            deadline
            content
            priority
            complete
          }
          liked(filter: $filter23, order: $order16, first: $first16, offset: $offset16) {
            id
            title
            hours
            deadline
            content
            priority
            complete
          }
        }
        stars(filter: $filter30, order: $order21, first: $first21, offset: $offset21) {
          id
          project(filter: $filter25) {
            id
            title
            description
          }
          column(filter: $filter26) {
            id
            title
          }
          title
          developers(filter: $filter27, order: $order18, first: $first18, offset: $offset18) {
            id
            name
            availability
          }
          hours
          deadline
          content
          priority
          complete
          likes(filter: $filter28, order: $order19, first: $first19, offset: $offset19) {
            id
            name
            availability
          }
          comments(filter: $filter29, order: $order20, first: $first20, offset: $offset20) {
            id
            content
          }
        }
      }
      tags(filter: $filter32, order: $order23, first: $first23, offset: $offset23) {
        id
        title
      }
      tasks(filter: $filter33, order: $order24, first: $first24, offset: $offset24) {
        id
        title
        hours
        deadline
        content
        priority
        complete
      }
      liked(filter: $filter48, order: $order33, first: $first33, offset: $offset33) {
        id
        project(filter: $filter34) {
          id
          title
          description
        }
        column(filter: $filter37) {
          id
          board(filter: $filter35) {
            id
            title
            order
          }
          title
          tasks(filter: $filter36, order: $order25, first: $first25, offset: $offset25) {
            id
            title
            hours
            deadline
            content
            priority
            complete
          }
        }
        title
        developers(filter: $filter38, order: $order26, first: $first26, offset: $offset26) {
          id
          name
          availability
        }
        hours
        deadline
        content
        priority
        complete
        likes(filter: $filter44, order: $order31, first: $first31, offset: $offset31) {
          id
          project(filter: $filter39) {
            id
            title
            description
          }
          name
          availability
          user(filter: $filter40, order: $order27, first: $first27, offset: $offset27) {
            id
            username
            password
            location
          }
          tags(filter: $filter41, order: $order28, first: $first28, offset: $offset28) {
            id
            title
          }
          tasks(filter: $filter42, order: $order29, first: $first29, offset: $offset29) {
            id
            title
            hours
            deadline
            content
            priority
            complete
          }
          liked(filter: $filter43, order: $order30, first: $first30, offset: $offset30) {
            id
            title
            hours
            deadline
            content
            priority
            complete
          }
        }
        comments(filter: $filter47, order: $order32, first: $first32, offset: $offset32) {
          id
          task(filter: $filter45) {
            id
            title
            hours
            deadline
            content
            priority
            complete
          }
          developer(filter: $filter46) {
            id
            name
            availability
          }
          content
        }
      }
    }
    numUids
  }
}
    `;
export type AddDeveloperMutationFn = ApolloReactCommon.MutationFunction<AddDeveloperMutation, AddDeveloperMutationVariables>;
export type AddDeveloperComponentProps = Omit<ApolloReactComponents.MutationComponentOptions<AddDeveloperMutation, AddDeveloperMutationVariables>, 'mutation'>;

    export const AddDeveloperComponent = (props: AddDeveloperComponentProps) => (
      <ApolloReactComponents.Mutation<AddDeveloperMutation, AddDeveloperMutationVariables> mutation={AddDeveloperDocument} {...props} />
    );
    
export type AddDeveloperProps<TChildProps = {}> = ApolloReactHoc.MutateProps<AddDeveloperMutation, AddDeveloperMutationVariables> & TChildProps;
export function withAddDeveloper<TProps, TChildProps = {}>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  AddDeveloperMutation,
  AddDeveloperMutationVariables,
  AddDeveloperProps<TChildProps>>) {
    return ApolloReactHoc.withMutation<TProps, AddDeveloperMutation, AddDeveloperMutationVariables, AddDeveloperProps<TChildProps>>(AddDeveloperDocument, {
      alias: 'addDeveloper',
      ...operationOptions
    });
};
export type AddDeveloperMutationResult = ApolloReactCommon.MutationResult<AddDeveloperMutation>;
export type AddDeveloperMutationOptions = ApolloReactCommon.BaseMutationOptions<AddDeveloperMutation, AddDeveloperMutationVariables>;
export const AddProjectDocument = gql`
    mutation addProject($filter: TaskFilter, $order: TaskOrder, $first: Int, $offset: Int, $filter1: BoardFilter, $order1: BoardOrder, $first1: Int, $offset1: Int, $filter2: DeveloperFilter, $order2: DeveloperOrder, $first2: Int, $offset2: Int, $filter3: ProjectFilter, $filter4: ProjectFilter, $filter5: UserFilter, $order3: UserOrder, $first3: Int, $offset3: Int, $filter6: TagFilter, $order4: TagOrder, $first4: Int, $offset4: Int, $filter7: TaskFilter, $order5: TaskOrder, $first5: Int, $offset5: Int, $filter8: TaskFilter, $order6: TaskOrder, $first6: Int, $offset6: Int, $filter9: DeveloperFilter, $order7: DeveloperOrder, $first7: Int, $offset7: Int, $filter10: TagFilter, $order8: TagOrder, $first8: Int, $offset8: Int, $filter11: ProjectFilter, $order9: ProjectOrder, $first9: Int, $offset9: Int, $input: [AddProjectInput!]!) {
  addProject(input: $input) {
    project(filter: $filter11, order: $order9, first: $first9, offset: $offset9) {
      id
      title
      description
      tags(filter: $filter10, order: $order8, first: $first8, offset: $offset8) {
        id
        title
        project(filter: $filter3) {
          id
          title
          description
          tasks(filter: $filter, order: $order, first: $first, offset: $offset) {
            id
            title
            hours
            deadline
            content
            priority
            complete
          }
          boards(filter: $filter1, order: $order1, first: $first1, offset: $offset1) {
            id
            title
            order
          }
          developers(filter: $filter2, order: $order2, first: $first2, offset: $offset2) {
            id
            name
            availability
          }
        }
        developers(filter: $filter9, order: $order7, first: $first7, offset: $offset7) {
          id
          project(filter: $filter4) {
            id
            title
            description
          }
          name
          availability
          user(filter: $filter5, order: $order3, first: $first3, offset: $offset3) {
            id
            username
            password
            location
          }
          tags(filter: $filter6, order: $order4, first: $first4, offset: $offset4) {
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
          }
          liked(filter: $filter8, order: $order6, first: $first6, offset: $offset6) {
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
    numUids
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
    mutation addTag($filter: ProjectFilter, $filter1: DeveloperFilter, $order: DeveloperOrder, $first: Int, $offset: Int, $filter2: TagFilter, $order1: TagOrder, $first1: Int, $offset1: Int, $filter3: ProjectFilter, $filter4: ColumnFilter, $filter5: DeveloperFilter, $order2: DeveloperOrder, $first2: Int, $offset2: Int, $filter6: DeveloperFilter, $order3: DeveloperOrder, $first3: Int, $offset3: Int, $filter7: CommentFilter, $order4: CommentOrder, $first4: Int, $offset4: Int, $filter8: TaskFilter, $order5: TaskOrder, $first5: Int, $offset5: Int, $filter9: ProjectFilter, $filter10: ColumnFilter, $order6: ColumnOrder, $first6: Int, $offset6: Int, $filter11: BoardFilter, $order7: BoardOrder, $first7: Int, $offset7: Int, $filter12: ProjectFilter, $filter13: UserFilter, $order8: UserOrder, $first8: Int, $offset8: Int, $filter14: TagFilter, $order9: TagOrder, $first9: Int, $offset9: Int, $filter15: TaskFilter, $order10: TaskOrder, $first10: Int, $offset10: Int, $filter16: TaskFilter, $order11: TaskOrder, $first11: Int, $offset11: Int, $filter17: DeveloperFilter, $order12: DeveloperOrder, $first12: Int, $offset12: Int, $filter18: ProjectFilter, $filter19: DeveloperFilter, $order13: DeveloperOrder, $first13: Int, $offset13: Int, $filter20: TagFilter, $order14: TagOrder, $first14: Int, $offset14: Int, $input: [AddTagInput!]!) {
  addTag(input: $input) {
    tag(filter: $filter20, order: $order14, first: $first14, offset: $offset14) {
      id
      title
      project(filter: $filter18) {
        id
        title
        description
        tags(filter: $filter2, order: $order1, first: $first1, offset: $offset1) {
          id
          title
          project(filter: $filter) {
            id
            title
            description
          }
          developers(filter: $filter1, order: $order, first: $first, offset: $offset) {
            id
            name
            availability
          }
        }
        tasks(filter: $filter8, order: $order5, first: $first5, offset: $offset5) {
          id
          project(filter: $filter3) {
            id
            title
            description
          }
          column(filter: $filter4) {
            id
            title
          }
          title
          developers(filter: $filter5, order: $order2, first: $first2, offset: $offset2) {
            id
            name
            availability
          }
          hours
          deadline
          content
          priority
          complete
          likes(filter: $filter6, order: $order3, first: $first3, offset: $offset3) {
            id
            name
            availability
          }
          comments(filter: $filter7, order: $order4, first: $first4, offset: $offset4) {
            id
            content
          }
        }
        boards(filter: $filter11, order: $order7, first: $first7, offset: $offset7) {
          id
          project(filter: $filter9) {
            id
            title
            description
          }
          title
          columns(filter: $filter10, order: $order6, first: $first6, offset: $offset6) {
            id
            title
          }
          order
        }
        developers(filter: $filter17, order: $order12, first: $first12, offset: $offset12) {
          id
          project(filter: $filter12) {
            id
            title
            description
          }
          name
          availability
          user(filter: $filter13, order: $order8, first: $first8, offset: $offset8) {
            id
            username
            password
            location
          }
          tags(filter: $filter14, order: $order9, first: $first9, offset: $offset9) {
            id
            title
          }
          tasks(filter: $filter15, order: $order10, first: $first10, offset: $offset10) {
            id
            title
            hours
            deadline
            content
            priority
            complete
          }
          liked(filter: $filter16, order: $order11, first: $first11, offset: $offset11) {
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
      developers(filter: $filter19, order: $order13, first: $first13, offset: $offset13) {
        id
        name
        availability
      }
    }
    numUids
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
    mutation addTask($filter: ProjectFilter, $filter1: DeveloperFilter, $order: DeveloperOrder, $first: Int, $offset: Int, $filter2: TagFilter, $order1: TagOrder, $first1: Int, $offset1: Int, $filter3: ProjectFilter, $filter4: ColumnFilter, $filter5: DeveloperFilter, $order2: DeveloperOrder, $first2: Int, $offset2: Int, $filter6: DeveloperFilter, $order3: DeveloperOrder, $first3: Int, $offset3: Int, $filter7: CommentFilter, $order4: CommentOrder, $first4: Int, $offset4: Int, $filter8: TaskFilter, $order5: TaskOrder, $first5: Int, $offset5: Int, $filter9: ProjectFilter, $filter10: ColumnFilter, $order6: ColumnOrder, $first6: Int, $offset6: Int, $filter11: BoardFilter, $order7: BoardOrder, $first7: Int, $offset7: Int, $filter12: ProjectFilter, $filter13: UserFilter, $order8: UserOrder, $first8: Int, $offset8: Int, $filter14: TagFilter, $order9: TagOrder, $first9: Int, $offset9: Int, $filter15: TaskFilter, $order10: TaskOrder, $first10: Int, $offset10: Int, $filter16: TaskFilter, $order11: TaskOrder, $first11: Int, $offset11: Int, $filter17: DeveloperFilter, $order12: DeveloperOrder, $first12: Int, $offset12: Int, $filter18: ProjectFilter, $filter19: ProjectFilter, $filter20: ColumnFilter, $order13: ColumnOrder, $first13: Int, $offset13: Int, $filter21: BoardFilter, $filter22: TaskFilter, $order14: TaskOrder, $first14: Int, $offset14: Int, $filter23: ColumnFilter, $filter24: DeveloperFilter, $order15: DeveloperOrder, $first15: Int, $offset15: Int, $filter25: ProjectFilter, $filter26: DeveloperFilter, $order16: DeveloperOrder, $first16: Int, $offset16: Int, $filter27: TaskFilter, $order17: TaskOrder, $first17: Int, $offset17: Int, $filter28: UserFilter, $order18: UserOrder, $first18: Int, $offset18: Int, $filter29: TagFilter, $order19: TagOrder, $first19: Int, $offset19: Int, $filter30: TaskFilter, $order20: TaskOrder, $first20: Int, $offset20: Int, $filter31: ProjectFilter, $filter32: ColumnFilter, $filter33: DeveloperFilter, $order21: DeveloperOrder, $first21: Int, $offset21: Int, $filter34: DeveloperFilter, $order22: DeveloperOrder, $first22: Int, $offset22: Int, $filter35: CommentFilter, $order23: CommentOrder, $first23: Int, $offset23: Int, $filter36: TaskFilter, $order24: TaskOrder, $first24: Int, $offset24: Int, $filter37: DeveloperFilter, $order25: DeveloperOrder, $first25: Int, $offset25: Int, $filter38: TaskFilter, $filter39: ProjectFilter, $filter40: UserFilter, $order26: UserOrder, $first26: Int, $offset26: Int, $filter41: TagFilter, $order27: TagOrder, $first27: Int, $offset27: Int, $filter42: TaskFilter, $order28: TaskOrder, $first28: Int, $offset28: Int, $filter43: TaskFilter, $order29: TaskOrder, $first29: Int, $offset29: Int, $filter44: DeveloperFilter, $filter45: CommentFilter, $order30: CommentOrder, $first30: Int, $offset30: Int, $filter46: TaskFilter, $order31: TaskOrder, $first31: Int, $offset31: Int, $input: [AddTaskInput!]!) {
  addTask(input: $input) {
    task(filter: $filter46, order: $order31, first: $first31, offset: $offset31) {
      id
      project(filter: $filter18) {
        id
        title
        description
        tags(filter: $filter2, order: $order1, first: $first1, offset: $offset1) {
          id
          title
          project(filter: $filter) {
            id
            title
            description
          }
          developers(filter: $filter1, order: $order, first: $first, offset: $offset) {
            id
            name
            availability
          }
        }
        tasks(filter: $filter8, order: $order5, first: $first5, offset: $offset5) {
          id
          project(filter: $filter3) {
            id
            title
            description
          }
          column(filter: $filter4) {
            id
            title
          }
          title
          developers(filter: $filter5, order: $order2, first: $first2, offset: $offset2) {
            id
            name
            availability
          }
          hours
          deadline
          content
          priority
          complete
          likes(filter: $filter6, order: $order3, first: $first3, offset: $offset3) {
            id
            name
            availability
          }
          comments(filter: $filter7, order: $order4, first: $first4, offset: $offset4) {
            id
            content
          }
        }
        boards(filter: $filter11, order: $order7, first: $first7, offset: $offset7) {
          id
          project(filter: $filter9) {
            id
            title
            description
          }
          title
          columns(filter: $filter10, order: $order6, first: $first6, offset: $offset6) {
            id
            title
          }
          order
        }
        developers(filter: $filter17, order: $order12, first: $first12, offset: $offset12) {
          id
          project(filter: $filter12) {
            id
            title
            description
          }
          name
          availability
          user(filter: $filter13, order: $order8, first: $first8, offset: $offset8) {
            id
            username
            password
            location
          }
          tags(filter: $filter14, order: $order9, first: $first9, offset: $offset9) {
            id
            title
          }
          tasks(filter: $filter15, order: $order10, first: $first10, offset: $offset10) {
            id
            title
            hours
            deadline
            content
            priority
            complete
          }
          liked(filter: $filter16, order: $order11, first: $first11, offset: $offset11) {
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
      column(filter: $filter23) {
        id
        board(filter: $filter21) {
          id
          project(filter: $filter19) {
            id
            title
            description
          }
          title
          columns(filter: $filter20, order: $order13, first: $first13, offset: $offset13) {
            id
            title
          }
          order
        }
        title
        tasks(filter: $filter22, order: $order14, first: $first14, offset: $offset14) {
          id
          title
          hours
          deadline
          content
          priority
          complete
        }
      }
      title
      developers(filter: $filter24, order: $order15, first: $first15, offset: $offset15) {
        id
        name
        availability
      }
      hours
      deadline
      content
      priority
      complete
      likes(filter: $filter37, order: $order25, first: $first25, offset: $offset25) {
        id
        project(filter: $filter25) {
          id
          title
          description
        }
        name
        availability
        user(filter: $filter28, order: $order18, first: $first18, offset: $offset18) {
          id
          username
          password
          location
          roles(filter: $filter26, order: $order16, first: $first16, offset: $offset16) {
            id
            name
            availability
          }
          stars(filter: $filter27, order: $order17, first: $first17, offset: $offset17) {
            id
            title
            hours
            deadline
            content
            priority
            complete
          }
        }
        tags(filter: $filter29, order: $order19, first: $first19, offset: $offset19) {
          id
          title
        }
        tasks(filter: $filter30, order: $order20, first: $first20, offset: $offset20) {
          id
          title
          hours
          deadline
          content
          priority
          complete
        }
        liked(filter: $filter36, order: $order24, first: $first24, offset: $offset24) {
          id
          project(filter: $filter31) {
            id
            title
            description
          }
          column(filter: $filter32) {
            id
            title
          }
          title
          developers(filter: $filter33, order: $order21, first: $first21, offset: $offset21) {
            id
            name
            availability
          }
          hours
          deadline
          content
          priority
          complete
          likes(filter: $filter34, order: $order22, first: $first22, offset: $offset22) {
            id
            name
            availability
          }
          comments(filter: $filter35, order: $order23, first: $first23, offset: $offset23) {
            id
            content
          }
        }
      }
      comments(filter: $filter45, order: $order30, first: $first30, offset: $offset30) {
        id
        task(filter: $filter38) {
          id
          title
          hours
          deadline
          content
          priority
          complete
        }
        developer(filter: $filter44) {
          id
          project(filter: $filter39) {
            id
            title
            description
          }
          name
          availability
          user(filter: $filter40, order: $order26, first: $first26, offset: $offset26) {
            id
            username
            password
            location
          }
          tags(filter: $filter41, order: $order27, first: $first27, offset: $offset27) {
            id
            title
          }
          tasks(filter: $filter42, order: $order28, first: $first28, offset: $offset28) {
            id
            title
            hours
            deadline
            content
            priority
            complete
          }
          liked(filter: $filter43, order: $order29, first: $first29, offset: $offset29) {
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
    numUids
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
    mutation addUser($filter: TagFilter, $order: TagOrder, $first: Int, $offset: Int, $filter1: TaskFilter, $order1: TaskOrder, $first1: Int, $offset1: Int, $filter2: BoardFilter, $order2: BoardOrder, $first2: Int, $offset2: Int, $filter3: DeveloperFilter, $order3: DeveloperOrder, $first3: Int, $offset3: Int, $filter4: ProjectFilter, $filter5: TaskFilter, $order4: TaskOrder, $first4: Int, $offset4: Int, $filter6: UserFilter, $order5: UserOrder, $first5: Int, $offset5: Int, $filter7: ProjectFilter, $filter8: DeveloperFilter, $order6: DeveloperOrder, $first6: Int, $offset6: Int, $filter9: TagFilter, $order7: TagOrder, $first7: Int, $offset7: Int, $filter10: ProjectFilter, $filter11: ColumnFilter, $filter12: DeveloperFilter, $order8: DeveloperOrder, $first8: Int, $offset8: Int, $filter13: DeveloperFilter, $order9: DeveloperOrder, $first9: Int, $offset9: Int, $filter14: CommentFilter, $order10: CommentOrder, $first10: Int, $offset10: Int, $filter15: TaskFilter, $order11: TaskOrder, $first11: Int, $offset11: Int, $filter16: ProjectFilter, $filter17: ColumnFilter, $filter18: DeveloperFilter, $order12: DeveloperOrder, $first12: Int, $offset12: Int, $filter19: DeveloperFilter, $order13: DeveloperOrder, $first13: Int, $offset13: Int, $filter20: CommentFilter, $order14: CommentOrder, $first14: Int, $offset14: Int, $filter21: TaskFilter, $order15: TaskOrder, $first15: Int, $offset15: Int, $filter22: DeveloperFilter, $order16: DeveloperOrder, $first16: Int, $offset16: Int, $filter23: UserFilter, $order17: UserOrder, $first17: Int, $offset17: Int, $input: [AddUserInput!]!) {
  addUser(input: $input) {
    user(filter: $filter23, order: $order17, first: $first17, offset: $offset17) {
      id
      username
      password
      location
      roles(filter: $filter22, order: $order16, first: $first16, offset: $offset16) {
        id
        project(filter: $filter4) {
          id
          title
          description
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
          boards(filter: $filter2, order: $order2, first: $first2, offset: $offset2) {
            id
            title
            order
          }
          developers(filter: $filter3, order: $order3, first: $first3, offset: $offset3) {
            id
            name
            availability
          }
        }
        name
        availability
        user(filter: $filter6, order: $order5, first: $first5, offset: $offset5) {
          id
          username
          password
          location
          stars(filter: $filter5, order: $order4, first: $first4, offset: $offset4) {
            id
            title
            hours
            deadline
            content
            priority
            complete
          }
        }
        tags(filter: $filter9, order: $order7, first: $first7, offset: $offset7) {
          id
          title
          project(filter: $filter7) {
            id
            title
            description
          }
          developers(filter: $filter8, order: $order6, first: $first6, offset: $offset6) {
            id
            name
            availability
          }
        }
        tasks(filter: $filter15, order: $order11, first: $first11, offset: $offset11) {
          id
          project(filter: $filter10) {
            id
            title
            description
          }
          column(filter: $filter11) {
            id
            title
          }
          title
          developers(filter: $filter12, order: $order8, first: $first8, offset: $offset8) {
            id
            name
            availability
          }
          hours
          deadline
          content
          priority
          complete
          likes(filter: $filter13, order: $order9, first: $first9, offset: $offset9) {
            id
            name
            availability
          }
          comments(filter: $filter14, order: $order10, first: $first10, offset: $offset10) {
            id
            content
          }
        }
        liked(filter: $filter21, order: $order15, first: $first15, offset: $offset15) {
          id
          project(filter: $filter16) {
            id
            title
            description
          }
          column(filter: $filter17) {
            id
            title
          }
          title
          developers(filter: $filter18, order: $order12, first: $first12, offset: $offset12) {
            id
            name
            availability
          }
          hours
          deadline
          content
          priority
          complete
          likes(filter: $filter19, order: $order13, first: $first13, offset: $offset13) {
            id
            name
            availability
          }
          comments(filter: $filter20, order: $order14, first: $first14, offset: $offset14) {
            id
            content
          }
        }
      }
    }
    numUids
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
export const DeleteBoardDocument = gql`
    mutation deleteBoard($filter: BoardFilter!) {
  deleteBoard(filter: $filter) {
    msg
    numUids
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
    numUids
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
    numUids
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
export const DeleteDeveloperDocument = gql`
    mutation deleteDeveloper($filter: DeveloperFilter!) {
  deleteDeveloper(filter: $filter) {
    msg
    numUids
  }
}
    `;
export type DeleteDeveloperMutationFn = ApolloReactCommon.MutationFunction<DeleteDeveloperMutation, DeleteDeveloperMutationVariables>;
export type DeleteDeveloperComponentProps = Omit<ApolloReactComponents.MutationComponentOptions<DeleteDeveloperMutation, DeleteDeveloperMutationVariables>, 'mutation'>;

    export const DeleteDeveloperComponent = (props: DeleteDeveloperComponentProps) => (
      <ApolloReactComponents.Mutation<DeleteDeveloperMutation, DeleteDeveloperMutationVariables> mutation={DeleteDeveloperDocument} {...props} />
    );
    
export type DeleteDeveloperProps<TChildProps = {}> = ApolloReactHoc.MutateProps<DeleteDeveloperMutation, DeleteDeveloperMutationVariables> & TChildProps;
export function withDeleteDeveloper<TProps, TChildProps = {}>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  DeleteDeveloperMutation,
  DeleteDeveloperMutationVariables,
  DeleteDeveloperProps<TChildProps>>) {
    return ApolloReactHoc.withMutation<TProps, DeleteDeveloperMutation, DeleteDeveloperMutationVariables, DeleteDeveloperProps<TChildProps>>(DeleteDeveloperDocument, {
      alias: 'deleteDeveloper',
      ...operationOptions
    });
};
export type DeleteDeveloperMutationResult = ApolloReactCommon.MutationResult<DeleteDeveloperMutation>;
export type DeleteDeveloperMutationOptions = ApolloReactCommon.BaseMutationOptions<DeleteDeveloperMutation, DeleteDeveloperMutationVariables>;
export const DeleteProjectDocument = gql`
    mutation deleteProject($filter: ProjectFilter!) {
  deleteProject(filter: $filter) {
    msg
    numUids
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
    numUids
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
    numUids
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
    numUids
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
export const UpdateBoardDocument = gql`
    mutation updateBoard($filter: ProjectFilter, $filter1: DeveloperFilter, $order: DeveloperOrder, $first: Int, $offset: Int, $filter2: TagFilter, $order1: TagOrder, $first1: Int, $offset1: Int, $filter3: ProjectFilter, $filter4: ColumnFilter, $filter5: DeveloperFilter, $order2: DeveloperOrder, $first2: Int, $offset2: Int, $filter6: DeveloperFilter, $order3: DeveloperOrder, $first3: Int, $offset3: Int, $filter7: CommentFilter, $order4: CommentOrder, $first4: Int, $offset4: Int, $filter8: TaskFilter, $order5: TaskOrder, $first5: Int, $offset5: Int, $filter9: ProjectFilter, $filter10: ColumnFilter, $order6: ColumnOrder, $first6: Int, $offset6: Int, $filter11: BoardFilter, $order7: BoardOrder, $first7: Int, $offset7: Int, $filter12: ProjectFilter, $filter13: UserFilter, $order8: UserOrder, $first8: Int, $offset8: Int, $filter14: TagFilter, $order9: TagOrder, $first9: Int, $offset9: Int, $filter15: TaskFilter, $order10: TaskOrder, $first10: Int, $offset10: Int, $filter16: TaskFilter, $order11: TaskOrder, $first11: Int, $offset11: Int, $filter17: DeveloperFilter, $order12: DeveloperOrder, $first12: Int, $offset12: Int, $filter18: ProjectFilter, $filter19: BoardFilter, $filter20: TaskFilter, $order13: TaskOrder, $first13: Int, $offset13: Int, $filter21: ColumnFilter, $order14: ColumnOrder, $first14: Int, $offset14: Int, $filter22: BoardFilter, $order15: BoardOrder, $first15: Int, $offset15: Int, $input: UpdateBoardInput!) {
  updateBoard(input: $input) {
    board(filter: $filter22, order: $order15, first: $first15, offset: $offset15) {
      id
      project(filter: $filter18) {
        id
        title
        description
        tags(filter: $filter2, order: $order1, first: $first1, offset: $offset1) {
          id
          title
          project(filter: $filter) {
            id
            title
            description
          }
          developers(filter: $filter1, order: $order, first: $first, offset: $offset) {
            id
            name
            availability
          }
        }
        tasks(filter: $filter8, order: $order5, first: $first5, offset: $offset5) {
          id
          project(filter: $filter3) {
            id
            title
            description
          }
          column(filter: $filter4) {
            id
            title
          }
          title
          developers(filter: $filter5, order: $order2, first: $first2, offset: $offset2) {
            id
            name
            availability
          }
          hours
          deadline
          content
          priority
          complete
          likes(filter: $filter6, order: $order3, first: $first3, offset: $offset3) {
            id
            name
            availability
          }
          comments(filter: $filter7, order: $order4, first: $first4, offset: $offset4) {
            id
            content
          }
        }
        boards(filter: $filter11, order: $order7, first: $first7, offset: $offset7) {
          id
          project(filter: $filter9) {
            id
            title
            description
          }
          title
          columns(filter: $filter10, order: $order6, first: $first6, offset: $offset6) {
            id
            title
          }
          order
        }
        developers(filter: $filter17, order: $order12, first: $first12, offset: $offset12) {
          id
          project(filter: $filter12) {
            id
            title
            description
          }
          name
          availability
          user(filter: $filter13, order: $order8, first: $first8, offset: $offset8) {
            id
            username
            password
            location
          }
          tags(filter: $filter14, order: $order9, first: $first9, offset: $offset9) {
            id
            title
          }
          tasks(filter: $filter15, order: $order10, first: $first10, offset: $offset10) {
            id
            title
            hours
            deadline
            content
            priority
            complete
          }
          liked(filter: $filter16, order: $order11, first: $first11, offset: $offset11) {
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
      title
      columns(filter: $filter21, order: $order14, first: $first14, offset: $offset14) {
        id
        board(filter: $filter19) {
          id
          title
          order
        }
        title
        tasks(filter: $filter20, order: $order13, first: $first13, offset: $offset13) {
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
    numUids
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
    mutation updateColumn($filter: TagFilter, $order: TagOrder, $first: Int, $offset: Int, $filter1: TaskFilter, $order1: TaskOrder, $first1: Int, $offset1: Int, $filter2: BoardFilter, $order2: BoardOrder, $first2: Int, $offset2: Int, $filter3: DeveloperFilter, $order3: DeveloperOrder, $first3: Int, $offset3: Int, $filter4: ProjectFilter, $filter5: BoardFilter, $filter6: TaskFilter, $order4: TaskOrder, $first4: Int, $offset4: Int, $filter7: ColumnFilter, $order5: ColumnOrder, $first5: Int, $offset5: Int, $filter8: BoardFilter, $filter9: ProjectFilter, $filter10: ColumnFilter, $filter11: ProjectFilter, $filter12: UserFilter, $order6: UserOrder, $first6: Int, $offset6: Int, $filter13: TagFilter, $order7: TagOrder, $first7: Int, $offset7: Int, $filter14: TaskFilter, $order8: TaskOrder, $first8: Int, $offset8: Int, $filter15: TaskFilter, $order9: TaskOrder, $first9: Int, $offset9: Int, $filter16: DeveloperFilter, $order10: DeveloperOrder, $first10: Int, $offset10: Int, $filter17: ProjectFilter, $filter18: UserFilter, $order11: UserOrder, $first11: Int, $offset11: Int, $filter19: TagFilter, $order12: TagOrder, $first12: Int, $offset12: Int, $filter20: TaskFilter, $order13: TaskOrder, $first13: Int, $offset13: Int, $filter21: TaskFilter, $order14: TaskOrder, $first14: Int, $offset14: Int, $filter22: DeveloperFilter, $order15: DeveloperOrder, $first15: Int, $offset15: Int, $filter23: TaskFilter, $filter24: DeveloperFilter, $filter25: CommentFilter, $order16: CommentOrder, $first16: Int, $offset16: Int, $filter26: TaskFilter, $order17: TaskOrder, $first17: Int, $offset17: Int, $filter27: ColumnFilter, $order18: ColumnOrder, $first18: Int, $offset18: Int, $input: UpdateColumnInput!) {
  updateColumn(input: $input) {
    column(filter: $filter27, order: $order18, first: $first18, offset: $offset18) {
      id
      board(filter: $filter8) {
        id
        project(filter: $filter4) {
          id
          title
          description
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
          boards(filter: $filter2, order: $order2, first: $first2, offset: $offset2) {
            id
            title
            order
          }
          developers(filter: $filter3, order: $order3, first: $first3, offset: $offset3) {
            id
            name
            availability
          }
        }
        title
        columns(filter: $filter7, order: $order5, first: $first5, offset: $offset5) {
          id
          board(filter: $filter5) {
            id
            title
            order
          }
          title
          tasks(filter: $filter6, order: $order4, first: $first4, offset: $offset4) {
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
      title
      tasks(filter: $filter26, order: $order17, first: $first17, offset: $offset17) {
        id
        project(filter: $filter9) {
          id
          title
          description
        }
        column(filter: $filter10) {
          id
          title
        }
        title
        developers(filter: $filter16, order: $order10, first: $first10, offset: $offset10) {
          id
          project(filter: $filter11) {
            id
            title
            description
          }
          name
          availability
          user(filter: $filter12, order: $order6, first: $first6, offset: $offset6) {
            id
            username
            password
            location
          }
          tags(filter: $filter13, order: $order7, first: $first7, offset: $offset7) {
            id
            title
          }
          tasks(filter: $filter14, order: $order8, first: $first8, offset: $offset8) {
            id
            title
            hours
            deadline
            content
            priority
            complete
          }
          liked(filter: $filter15, order: $order9, first: $first9, offset: $offset9) {
            id
            title
            hours
            deadline
            content
            priority
            complete
          }
        }
        hours
        deadline
        content
        priority
        complete
        likes(filter: $filter22, order: $order15, first: $first15, offset: $offset15) {
          id
          project(filter: $filter17) {
            id
            title
            description
          }
          name
          availability
          user(filter: $filter18, order: $order11, first: $first11, offset: $offset11) {
            id
            username
            password
            location
          }
          tags(filter: $filter19, order: $order12, first: $first12, offset: $offset12) {
            id
            title
          }
          tasks(filter: $filter20, order: $order13, first: $first13, offset: $offset13) {
            id
            title
            hours
            deadline
            content
            priority
            complete
          }
          liked(filter: $filter21, order: $order14, first: $first14, offset: $offset14) {
            id
            title
            hours
            deadline
            content
            priority
            complete
          }
        }
        comments(filter: $filter25, order: $order16, first: $first16, offset: $offset16) {
          id
          task(filter: $filter23) {
            id
            title
            hours
            deadline
            content
            priority
            complete
          }
          developer(filter: $filter24) {
            id
            name
            availability
          }
          content
        }
      }
    }
    numUids
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
    mutation updateComment($filter: TagFilter, $order: TagOrder, $first: Int, $offset: Int, $filter1: TaskFilter, $order1: TaskOrder, $first1: Int, $offset1: Int, $filter2: BoardFilter, $order2: BoardOrder, $first2: Int, $offset2: Int, $filter3: DeveloperFilter, $order3: DeveloperOrder, $first3: Int, $offset3: Int, $filter4: ProjectFilter, $filter5: BoardFilter, $filter6: TaskFilter, $order4: TaskOrder, $first4: Int, $offset4: Int, $filter7: ColumnFilter, $filter8: ProjectFilter, $filter9: UserFilter, $order5: UserOrder, $first5: Int, $offset5: Int, $filter10: TagFilter, $order6: TagOrder, $first6: Int, $offset6: Int, $filter11: TaskFilter, $order7: TaskOrder, $first7: Int, $offset7: Int, $filter12: TaskFilter, $order8: TaskOrder, $first8: Int, $offset8: Int, $filter13: DeveloperFilter, $order9: DeveloperOrder, $first9: Int, $offset9: Int, $filter14: ProjectFilter, $filter15: UserFilter, $order10: UserOrder, $first10: Int, $offset10: Int, $filter16: TagFilter, $order11: TagOrder, $first11: Int, $offset11: Int, $filter17: TaskFilter, $order12: TaskOrder, $first12: Int, $offset12: Int, $filter18: TaskFilter, $order13: TaskOrder, $first13: Int, $offset13: Int, $filter19: DeveloperFilter, $order14: DeveloperOrder, $first14: Int, $offset14: Int, $filter20: TaskFilter, $filter21: DeveloperFilter, $filter22: CommentFilter, $order15: CommentOrder, $first15: Int, $offset15: Int, $filter23: TaskFilter, $filter24: ProjectFilter, $filter25: DeveloperFilter, $order16: DeveloperOrder, $first16: Int, $offset16: Int, $filter26: TaskFilter, $order17: TaskOrder, $first17: Int, $offset17: Int, $filter27: UserFilter, $order18: UserOrder, $first18: Int, $offset18: Int, $filter28: ProjectFilter, $filter29: DeveloperFilter, $order19: DeveloperOrder, $first19: Int, $offset19: Int, $filter30: TagFilter, $order20: TagOrder, $first20: Int, $offset20: Int, $filter31: ProjectFilter, $filter32: ColumnFilter, $filter33: DeveloperFilter, $order21: DeveloperOrder, $first21: Int, $offset21: Int, $filter34: DeveloperFilter, $order22: DeveloperOrder, $first22: Int, $offset22: Int, $filter35: CommentFilter, $order23: CommentOrder, $first23: Int, $offset23: Int, $filter36: TaskFilter, $order24: TaskOrder, $first24: Int, $offset24: Int, $filter37: ProjectFilter, $filter38: ColumnFilter, $filter39: DeveloperFilter, $order25: DeveloperOrder, $first25: Int, $offset25: Int, $filter40: DeveloperFilter, $order26: DeveloperOrder, $first26: Int, $offset26: Int, $filter41: CommentFilter, $order27: CommentOrder, $first27: Int, $offset27: Int, $filter42: TaskFilter, $order28: TaskOrder, $first28: Int, $offset28: Int, $filter43: DeveloperFilter, $filter44: CommentFilter, $order29: CommentOrder, $first29: Int, $offset29: Int, $input: UpdateCommentInput!) {
  updateComment(input: $input) {
    comment(filter: $filter44, order: $order29, first: $first29, offset: $offset29) {
      id
      task(filter: $filter23) {
        id
        project(filter: $filter4) {
          id
          title
          description
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
          boards(filter: $filter2, order: $order2, first: $first2, offset: $offset2) {
            id
            title
            order
          }
          developers(filter: $filter3, order: $order3, first: $first3, offset: $offset3) {
            id
            name
            availability
          }
        }
        column(filter: $filter7) {
          id
          board(filter: $filter5) {
            id
            title
            order
          }
          title
          tasks(filter: $filter6, order: $order4, first: $first4, offset: $offset4) {
            id
            title
            hours
            deadline
            content
            priority
            complete
          }
        }
        title
        developers(filter: $filter13, order: $order9, first: $first9, offset: $offset9) {
          id
          project(filter: $filter8) {
            id
            title
            description
          }
          name
          availability
          user(filter: $filter9, order: $order5, first: $first5, offset: $offset5) {
            id
            username
            password
            location
          }
          tags(filter: $filter10, order: $order6, first: $first6, offset: $offset6) {
            id
            title
          }
          tasks(filter: $filter11, order: $order7, first: $first7, offset: $offset7) {
            id
            title
            hours
            deadline
            content
            priority
            complete
          }
          liked(filter: $filter12, order: $order8, first: $first8, offset: $offset8) {
            id
            title
            hours
            deadline
            content
            priority
            complete
          }
        }
        hours
        deadline
        content
        priority
        complete
        likes(filter: $filter19, order: $order14, first: $first14, offset: $offset14) {
          id
          project(filter: $filter14) {
            id
            title
            description
          }
          name
          availability
          user(filter: $filter15, order: $order10, first: $first10, offset: $offset10) {
            id
            username
            password
            location
          }
          tags(filter: $filter16, order: $order11, first: $first11, offset: $offset11) {
            id
            title
          }
          tasks(filter: $filter17, order: $order12, first: $first12, offset: $offset12) {
            id
            title
            hours
            deadline
            content
            priority
            complete
          }
          liked(filter: $filter18, order: $order13, first: $first13, offset: $offset13) {
            id
            title
            hours
            deadline
            content
            priority
            complete
          }
        }
        comments(filter: $filter22, order: $order15, first: $first15, offset: $offset15) {
          id
          task(filter: $filter20) {
            id
            title
            hours
            deadline
            content
            priority
            complete
          }
          developer(filter: $filter21) {
            id
            name
            availability
          }
          content
        }
      }
      developer(filter: $filter43) {
        id
        project(filter: $filter24) {
          id
          title
          description
        }
        name
        availability
        user(filter: $filter27, order: $order18, first: $first18, offset: $offset18) {
          id
          username
          password
          location
          roles(filter: $filter25, order: $order16, first: $first16, offset: $offset16) {
            id
            name
            availability
          }
          stars(filter: $filter26, order: $order17, first: $first17, offset: $offset17) {
            id
            title
            hours
            deadline
            content
            priority
            complete
          }
        }
        tags(filter: $filter30, order: $order20, first: $first20, offset: $offset20) {
          id
          title
          project(filter: $filter28) {
            id
            title
            description
          }
          developers(filter: $filter29, order: $order19, first: $first19, offset: $offset19) {
            id
            name
            availability
          }
        }
        tasks(filter: $filter36, order: $order24, first: $first24, offset: $offset24) {
          id
          project(filter: $filter31) {
            id
            title
            description
          }
          column(filter: $filter32) {
            id
            title
          }
          title
          developers(filter: $filter33, order: $order21, first: $first21, offset: $offset21) {
            id
            name
            availability
          }
          hours
          deadline
          content
          priority
          complete
          likes(filter: $filter34, order: $order22, first: $first22, offset: $offset22) {
            id
            name
            availability
          }
          comments(filter: $filter35, order: $order23, first: $first23, offset: $offset23) {
            id
            content
          }
        }
        liked(filter: $filter42, order: $order28, first: $first28, offset: $offset28) {
          id
          project(filter: $filter37) {
            id
            title
            description
          }
          column(filter: $filter38) {
            id
            title
          }
          title
          developers(filter: $filter39, order: $order25, first: $first25, offset: $offset25) {
            id
            name
            availability
          }
          hours
          deadline
          content
          priority
          complete
          likes(filter: $filter40, order: $order26, first: $first26, offset: $offset26) {
            id
            name
            availability
          }
          comments(filter: $filter41, order: $order27, first: $first27, offset: $offset27) {
            id
            content
          }
        }
      }
      content
    }
    numUids
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
export const UpdateDeveloperDocument = gql`
    mutation updateDeveloper($filter: ProjectFilter, $filter1: DeveloperFilter, $order: DeveloperOrder, $first: Int, $offset: Int, $filter2: TagFilter, $order1: TagOrder, $first1: Int, $offset1: Int, $filter3: ProjectFilter, $filter4: ColumnFilter, $filter5: DeveloperFilter, $order2: DeveloperOrder, $first2: Int, $offset2: Int, $filter6: DeveloperFilter, $order3: DeveloperOrder, $first3: Int, $offset3: Int, $filter7: CommentFilter, $order4: CommentOrder, $first4: Int, $offset4: Int, $filter8: TaskFilter, $order5: TaskOrder, $first5: Int, $offset5: Int, $filter9: ProjectFilter, $filter10: ColumnFilter, $order6: ColumnOrder, $first6: Int, $offset6: Int, $filter11: BoardFilter, $order7: BoardOrder, $first7: Int, $offset7: Int, $filter12: ProjectFilter, $filter13: UserFilter, $order8: UserOrder, $first8: Int, $offset8: Int, $filter14: TagFilter, $order9: TagOrder, $first9: Int, $offset9: Int, $filter15: TaskFilter, $order10: TaskOrder, $first10: Int, $offset10: Int, $filter16: TaskFilter, $order11: TaskOrder, $first11: Int, $offset11: Int, $filter17: DeveloperFilter, $order12: DeveloperOrder, $first12: Int, $offset12: Int, $filter18: ProjectFilter, $filter19: ProjectFilter, $filter20: UserFilter, $order13: UserOrder, $first13: Int, $offset13: Int, $filter21: TagFilter, $order14: TagOrder, $first14: Int, $offset14: Int, $filter22: TaskFilter, $order15: TaskOrder, $first15: Int, $offset15: Int, $filter23: TaskFilter, $order16: TaskOrder, $first16: Int, $offset16: Int, $filter24: DeveloperFilter, $order17: DeveloperOrder, $first17: Int, $offset17: Int, $filter25: ProjectFilter, $filter26: ColumnFilter, $filter27: DeveloperFilter, $order18: DeveloperOrder, $first18: Int, $offset18: Int, $filter28: DeveloperFilter, $order19: DeveloperOrder, $first19: Int, $offset19: Int, $filter29: CommentFilter, $order20: CommentOrder, $first20: Int, $offset20: Int, $filter30: TaskFilter, $order21: TaskOrder, $first21: Int, $offset21: Int, $filter31: UserFilter, $order22: UserOrder, $first22: Int, $offset22: Int, $filter32: TagFilter, $order23: TagOrder, $first23: Int, $offset23: Int, $filter33: TaskFilter, $order24: TaskOrder, $first24: Int, $offset24: Int, $filter34: ProjectFilter, $filter35: BoardFilter, $filter36: TaskFilter, $order25: TaskOrder, $first25: Int, $offset25: Int, $filter37: ColumnFilter, $filter38: DeveloperFilter, $order26: DeveloperOrder, $first26: Int, $offset26: Int, $filter39: ProjectFilter, $filter40: UserFilter, $order27: UserOrder, $first27: Int, $offset27: Int, $filter41: TagFilter, $order28: TagOrder, $first28: Int, $offset28: Int, $filter42: TaskFilter, $order29: TaskOrder, $first29: Int, $offset29: Int, $filter43: TaskFilter, $order30: TaskOrder, $first30: Int, $offset30: Int, $filter44: DeveloperFilter, $order31: DeveloperOrder, $first31: Int, $offset31: Int, $filter45: TaskFilter, $filter46: DeveloperFilter, $filter47: CommentFilter, $order32: CommentOrder, $first32: Int, $offset32: Int, $filter48: TaskFilter, $order33: TaskOrder, $first33: Int, $offset33: Int, $filter49: DeveloperFilter, $order34: DeveloperOrder, $first34: Int, $offset34: Int, $input: UpdateDeveloperInput!) {
  updateDeveloper(input: $input) {
    developer(filter: $filter49, order: $order34, first: $first34, offset: $offset34) {
      id
      project(filter: $filter18) {
        id
        title
        description
        tags(filter: $filter2, order: $order1, first: $first1, offset: $offset1) {
          id
          title
          project(filter: $filter) {
            id
            title
            description
          }
          developers(filter: $filter1, order: $order, first: $first, offset: $offset) {
            id
            name
            availability
          }
        }
        tasks(filter: $filter8, order: $order5, first: $first5, offset: $offset5) {
          id
          project(filter: $filter3) {
            id
            title
            description
          }
          column(filter: $filter4) {
            id
            title
          }
          title
          developers(filter: $filter5, order: $order2, first: $first2, offset: $offset2) {
            id
            name
            availability
          }
          hours
          deadline
          content
          priority
          complete
          likes(filter: $filter6, order: $order3, first: $first3, offset: $offset3) {
            id
            name
            availability
          }
          comments(filter: $filter7, order: $order4, first: $first4, offset: $offset4) {
            id
            content
          }
        }
        boards(filter: $filter11, order: $order7, first: $first7, offset: $offset7) {
          id
          project(filter: $filter9) {
            id
            title
            description
          }
          title
          columns(filter: $filter10, order: $order6, first: $first6, offset: $offset6) {
            id
            title
          }
          order
        }
        developers(filter: $filter17, order: $order12, first: $first12, offset: $offset12) {
          id
          project(filter: $filter12) {
            id
            title
            description
          }
          name
          availability
          user(filter: $filter13, order: $order8, first: $first8, offset: $offset8) {
            id
            username
            password
            location
          }
          tags(filter: $filter14, order: $order9, first: $first9, offset: $offset9) {
            id
            title
          }
          tasks(filter: $filter15, order: $order10, first: $first10, offset: $offset10) {
            id
            title
            hours
            deadline
            content
            priority
            complete
          }
          liked(filter: $filter16, order: $order11, first: $first11, offset: $offset11) {
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
      name
      availability
      user(filter: $filter31, order: $order22, first: $first22, offset: $offset22) {
        id
        username
        password
        location
        roles(filter: $filter24, order: $order17, first: $first17, offset: $offset17) {
          id
          project(filter: $filter19) {
            id
            title
            description
          }
          name
          availability
          user(filter: $filter20, order: $order13, first: $first13, offset: $offset13) {
            id
            username
            password
            location
          }
          tags(filter: $filter21, order: $order14, first: $first14, offset: $offset14) {
            id
            title
          }
          tasks(filter: $filter22, order: $order15, first: $first15, offset: $offset15) {
            id
            title
            hours
            deadline
            content
            priority
            complete
          }
          liked(filter: $filter23, order: $order16, first: $first16, offset: $offset16) {
            id
            title
            hours
            deadline
            content
            priority
            complete
          }
        }
        stars(filter: $filter30, order: $order21, first: $first21, offset: $offset21) {
          id
          project(filter: $filter25) {
            id
            title
            description
          }
          column(filter: $filter26) {
            id
            title
          }
          title
          developers(filter: $filter27, order: $order18, first: $first18, offset: $offset18) {
            id
            name
            availability
          }
          hours
          deadline
          content
          priority
          complete
          likes(filter: $filter28, order: $order19, first: $first19, offset: $offset19) {
            id
            name
            availability
          }
          comments(filter: $filter29, order: $order20, first: $first20, offset: $offset20) {
            id
            content
          }
        }
      }
      tags(filter: $filter32, order: $order23, first: $first23, offset: $offset23) {
        id
        title
      }
      tasks(filter: $filter33, order: $order24, first: $first24, offset: $offset24) {
        id
        title
        hours
        deadline
        content
        priority
        complete
      }
      liked(filter: $filter48, order: $order33, first: $first33, offset: $offset33) {
        id
        project(filter: $filter34) {
          id
          title
          description
        }
        column(filter: $filter37) {
          id
          board(filter: $filter35) {
            id
            title
            order
          }
          title
          tasks(filter: $filter36, order: $order25, first: $first25, offset: $offset25) {
            id
            title
            hours
            deadline
            content
            priority
            complete
          }
        }
        title
        developers(filter: $filter38, order: $order26, first: $first26, offset: $offset26) {
          id
          name
          availability
        }
        hours
        deadline
        content
        priority
        complete
        likes(filter: $filter44, order: $order31, first: $first31, offset: $offset31) {
          id
          project(filter: $filter39) {
            id
            title
            description
          }
          name
          availability
          user(filter: $filter40, order: $order27, first: $first27, offset: $offset27) {
            id
            username
            password
            location
          }
          tags(filter: $filter41, order: $order28, first: $first28, offset: $offset28) {
            id
            title
          }
          tasks(filter: $filter42, order: $order29, first: $first29, offset: $offset29) {
            id
            title
            hours
            deadline
            content
            priority
            complete
          }
          liked(filter: $filter43, order: $order30, first: $first30, offset: $offset30) {
            id
            title
            hours
            deadline
            content
            priority
            complete
          }
        }
        comments(filter: $filter47, order: $order32, first: $first32, offset: $offset32) {
          id
          task(filter: $filter45) {
            id
            title
            hours
            deadline
            content
            priority
            complete
          }
          developer(filter: $filter46) {
            id
            name
            availability
          }
          content
        }
      }
    }
    numUids
  }
}
    `;
export type UpdateDeveloperMutationFn = ApolloReactCommon.MutationFunction<UpdateDeveloperMutation, UpdateDeveloperMutationVariables>;
export type UpdateDeveloperComponentProps = Omit<ApolloReactComponents.MutationComponentOptions<UpdateDeveloperMutation, UpdateDeveloperMutationVariables>, 'mutation'>;

    export const UpdateDeveloperComponent = (props: UpdateDeveloperComponentProps) => (
      <ApolloReactComponents.Mutation<UpdateDeveloperMutation, UpdateDeveloperMutationVariables> mutation={UpdateDeveloperDocument} {...props} />
    );
    
export type UpdateDeveloperProps<TChildProps = {}> = ApolloReactHoc.MutateProps<UpdateDeveloperMutation, UpdateDeveloperMutationVariables> & TChildProps;
export function withUpdateDeveloper<TProps, TChildProps = {}>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  UpdateDeveloperMutation,
  UpdateDeveloperMutationVariables,
  UpdateDeveloperProps<TChildProps>>) {
    return ApolloReactHoc.withMutation<TProps, UpdateDeveloperMutation, UpdateDeveloperMutationVariables, UpdateDeveloperProps<TChildProps>>(UpdateDeveloperDocument, {
      alias: 'updateDeveloper',
      ...operationOptions
    });
};
export type UpdateDeveloperMutationResult = ApolloReactCommon.MutationResult<UpdateDeveloperMutation>;
export type UpdateDeveloperMutationOptions = ApolloReactCommon.BaseMutationOptions<UpdateDeveloperMutation, UpdateDeveloperMutationVariables>;
export const UpdateProjectDocument = gql`
    mutation updateProject($filter: TaskFilter, $order: TaskOrder, $first: Int, $offset: Int, $filter1: BoardFilter, $order1: BoardOrder, $first1: Int, $offset1: Int, $filter2: DeveloperFilter, $order2: DeveloperOrder, $first2: Int, $offset2: Int, $filter3: ProjectFilter, $filter4: ProjectFilter, $filter5: UserFilter, $order3: UserOrder, $first3: Int, $offset3: Int, $filter6: TagFilter, $order4: TagOrder, $first4: Int, $offset4: Int, $filter7: TaskFilter, $order5: TaskOrder, $first5: Int, $offset5: Int, $filter8: TaskFilter, $order6: TaskOrder, $first6: Int, $offset6: Int, $filter9: DeveloperFilter, $order7: DeveloperOrder, $first7: Int, $offset7: Int, $filter10: TagFilter, $order8: TagOrder, $first8: Int, $offset8: Int, $filter11: ProjectFilter, $order9: ProjectOrder, $first9: Int, $offset9: Int, $input: UpdateProjectInput!) {
  updateProject(input: $input) {
    project(filter: $filter11, order: $order9, first: $first9, offset: $offset9) {
      id
      title
      description
      tags(filter: $filter10, order: $order8, first: $first8, offset: $offset8) {
        id
        title
        project(filter: $filter3) {
          id
          title
          description
          tasks(filter: $filter, order: $order, first: $first, offset: $offset) {
            id
            title
            hours
            deadline
            content
            priority
            complete
          }
          boards(filter: $filter1, order: $order1, first: $first1, offset: $offset1) {
            id
            title
            order
          }
          developers(filter: $filter2, order: $order2, first: $first2, offset: $offset2) {
            id
            name
            availability
          }
        }
        developers(filter: $filter9, order: $order7, first: $first7, offset: $offset7) {
          id
          project(filter: $filter4) {
            id
            title
            description
          }
          name
          availability
          user(filter: $filter5, order: $order3, first: $first3, offset: $offset3) {
            id
            username
            password
            location
          }
          tags(filter: $filter6, order: $order4, first: $first4, offset: $offset4) {
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
          }
          liked(filter: $filter8, order: $order6, first: $first6, offset: $offset6) {
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
    numUids
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
    mutation updateTag($filter: ProjectFilter, $filter1: DeveloperFilter, $order: DeveloperOrder, $first: Int, $offset: Int, $filter2: TagFilter, $order1: TagOrder, $first1: Int, $offset1: Int, $filter3: ProjectFilter, $filter4: ColumnFilter, $filter5: DeveloperFilter, $order2: DeveloperOrder, $first2: Int, $offset2: Int, $filter6: DeveloperFilter, $order3: DeveloperOrder, $first3: Int, $offset3: Int, $filter7: CommentFilter, $order4: CommentOrder, $first4: Int, $offset4: Int, $filter8: TaskFilter, $order5: TaskOrder, $first5: Int, $offset5: Int, $filter9: ProjectFilter, $filter10: ColumnFilter, $order6: ColumnOrder, $first6: Int, $offset6: Int, $filter11: BoardFilter, $order7: BoardOrder, $first7: Int, $offset7: Int, $filter12: ProjectFilter, $filter13: UserFilter, $order8: UserOrder, $first8: Int, $offset8: Int, $filter14: TagFilter, $order9: TagOrder, $first9: Int, $offset9: Int, $filter15: TaskFilter, $order10: TaskOrder, $first10: Int, $offset10: Int, $filter16: TaskFilter, $order11: TaskOrder, $first11: Int, $offset11: Int, $filter17: DeveloperFilter, $order12: DeveloperOrder, $first12: Int, $offset12: Int, $filter18: ProjectFilter, $filter19: DeveloperFilter, $order13: DeveloperOrder, $first13: Int, $offset13: Int, $filter20: TagFilter, $order14: TagOrder, $first14: Int, $offset14: Int, $input: UpdateTagInput!) {
  updateTag(input: $input) {
    tag(filter: $filter20, order: $order14, first: $first14, offset: $offset14) {
      id
      title
      project(filter: $filter18) {
        id
        title
        description
        tags(filter: $filter2, order: $order1, first: $first1, offset: $offset1) {
          id
          title
          project(filter: $filter) {
            id
            title
            description
          }
          developers(filter: $filter1, order: $order, first: $first, offset: $offset) {
            id
            name
            availability
          }
        }
        tasks(filter: $filter8, order: $order5, first: $first5, offset: $offset5) {
          id
          project(filter: $filter3) {
            id
            title
            description
          }
          column(filter: $filter4) {
            id
            title
          }
          title
          developers(filter: $filter5, order: $order2, first: $first2, offset: $offset2) {
            id
            name
            availability
          }
          hours
          deadline
          content
          priority
          complete
          likes(filter: $filter6, order: $order3, first: $first3, offset: $offset3) {
            id
            name
            availability
          }
          comments(filter: $filter7, order: $order4, first: $first4, offset: $offset4) {
            id
            content
          }
        }
        boards(filter: $filter11, order: $order7, first: $first7, offset: $offset7) {
          id
          project(filter: $filter9) {
            id
            title
            description
          }
          title
          columns(filter: $filter10, order: $order6, first: $first6, offset: $offset6) {
            id
            title
          }
          order
        }
        developers(filter: $filter17, order: $order12, first: $first12, offset: $offset12) {
          id
          project(filter: $filter12) {
            id
            title
            description
          }
          name
          availability
          user(filter: $filter13, order: $order8, first: $first8, offset: $offset8) {
            id
            username
            password
            location
          }
          tags(filter: $filter14, order: $order9, first: $first9, offset: $offset9) {
            id
            title
          }
          tasks(filter: $filter15, order: $order10, first: $first10, offset: $offset10) {
            id
            title
            hours
            deadline
            content
            priority
            complete
          }
          liked(filter: $filter16, order: $order11, first: $first11, offset: $offset11) {
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
      developers(filter: $filter19, order: $order13, first: $first13, offset: $offset13) {
        id
        name
        availability
      }
    }
    numUids
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
    mutation updateTask($filter: ProjectFilter, $filter1: DeveloperFilter, $order: DeveloperOrder, $first: Int, $offset: Int, $filter2: TagFilter, $order1: TagOrder, $first1: Int, $offset1: Int, $filter3: ProjectFilter, $filter4: ColumnFilter, $filter5: DeveloperFilter, $order2: DeveloperOrder, $first2: Int, $offset2: Int, $filter6: DeveloperFilter, $order3: DeveloperOrder, $first3: Int, $offset3: Int, $filter7: CommentFilter, $order4: CommentOrder, $first4: Int, $offset4: Int, $filter8: TaskFilter, $order5: TaskOrder, $first5: Int, $offset5: Int, $filter9: ProjectFilter, $filter10: ColumnFilter, $order6: ColumnOrder, $first6: Int, $offset6: Int, $filter11: BoardFilter, $order7: BoardOrder, $first7: Int, $offset7: Int, $filter12: ProjectFilter, $filter13: UserFilter, $order8: UserOrder, $first8: Int, $offset8: Int, $filter14: TagFilter, $order9: TagOrder, $first9: Int, $offset9: Int, $filter15: TaskFilter, $order10: TaskOrder, $first10: Int, $offset10: Int, $filter16: TaskFilter, $order11: TaskOrder, $first11: Int, $offset11: Int, $filter17: DeveloperFilter, $order12: DeveloperOrder, $first12: Int, $offset12: Int, $filter18: ProjectFilter, $filter19: ProjectFilter, $filter20: ColumnFilter, $order13: ColumnOrder, $first13: Int, $offset13: Int, $filter21: BoardFilter, $filter22: TaskFilter, $order14: TaskOrder, $first14: Int, $offset14: Int, $filter23: ColumnFilter, $filter24: DeveloperFilter, $order15: DeveloperOrder, $first15: Int, $offset15: Int, $filter25: ProjectFilter, $filter26: DeveloperFilter, $order16: DeveloperOrder, $first16: Int, $offset16: Int, $filter27: TaskFilter, $order17: TaskOrder, $first17: Int, $offset17: Int, $filter28: UserFilter, $order18: UserOrder, $first18: Int, $offset18: Int, $filter29: TagFilter, $order19: TagOrder, $first19: Int, $offset19: Int, $filter30: TaskFilter, $order20: TaskOrder, $first20: Int, $offset20: Int, $filter31: ProjectFilter, $filter32: ColumnFilter, $filter33: DeveloperFilter, $order21: DeveloperOrder, $first21: Int, $offset21: Int, $filter34: DeveloperFilter, $order22: DeveloperOrder, $first22: Int, $offset22: Int, $filter35: CommentFilter, $order23: CommentOrder, $first23: Int, $offset23: Int, $filter36: TaskFilter, $order24: TaskOrder, $first24: Int, $offset24: Int, $filter37: DeveloperFilter, $order25: DeveloperOrder, $first25: Int, $offset25: Int, $filter38: TaskFilter, $filter39: ProjectFilter, $filter40: UserFilter, $order26: UserOrder, $first26: Int, $offset26: Int, $filter41: TagFilter, $order27: TagOrder, $first27: Int, $offset27: Int, $filter42: TaskFilter, $order28: TaskOrder, $first28: Int, $offset28: Int, $filter43: TaskFilter, $order29: TaskOrder, $first29: Int, $offset29: Int, $filter44: DeveloperFilter, $filter45: CommentFilter, $order30: CommentOrder, $first30: Int, $offset30: Int, $filter46: TaskFilter, $order31: TaskOrder, $first31: Int, $offset31: Int, $input: UpdateTaskInput!) {
  updateTask(input: $input) {
    task(filter: $filter46, order: $order31, first: $first31, offset: $offset31) {
      id
      project(filter: $filter18) {
        id
        title
        description
        tags(filter: $filter2, order: $order1, first: $first1, offset: $offset1) {
          id
          title
          project(filter: $filter) {
            id
            title
            description
          }
          developers(filter: $filter1, order: $order, first: $first, offset: $offset) {
            id
            name
            availability
          }
        }
        tasks(filter: $filter8, order: $order5, first: $first5, offset: $offset5) {
          id
          project(filter: $filter3) {
            id
            title
            description
          }
          column(filter: $filter4) {
            id
            title
          }
          title
          developers(filter: $filter5, order: $order2, first: $first2, offset: $offset2) {
            id
            name
            availability
          }
          hours
          deadline
          content
          priority
          complete
          likes(filter: $filter6, order: $order3, first: $first3, offset: $offset3) {
            id
            name
            availability
          }
          comments(filter: $filter7, order: $order4, first: $first4, offset: $offset4) {
            id
            content
          }
        }
        boards(filter: $filter11, order: $order7, first: $first7, offset: $offset7) {
          id
          project(filter: $filter9) {
            id
            title
            description
          }
          title
          columns(filter: $filter10, order: $order6, first: $first6, offset: $offset6) {
            id
            title
          }
          order
        }
        developers(filter: $filter17, order: $order12, first: $first12, offset: $offset12) {
          id
          project(filter: $filter12) {
            id
            title
            description
          }
          name
          availability
          user(filter: $filter13, order: $order8, first: $first8, offset: $offset8) {
            id
            username
            password
            location
          }
          tags(filter: $filter14, order: $order9, first: $first9, offset: $offset9) {
            id
            title
          }
          tasks(filter: $filter15, order: $order10, first: $first10, offset: $offset10) {
            id
            title
            hours
            deadline
            content
            priority
            complete
          }
          liked(filter: $filter16, order: $order11, first: $first11, offset: $offset11) {
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
      column(filter: $filter23) {
        id
        board(filter: $filter21) {
          id
          project(filter: $filter19) {
            id
            title
            description
          }
          title
          columns(filter: $filter20, order: $order13, first: $first13, offset: $offset13) {
            id
            title
          }
          order
        }
        title
        tasks(filter: $filter22, order: $order14, first: $first14, offset: $offset14) {
          id
          title
          hours
          deadline
          content
          priority
          complete
        }
      }
      title
      developers(filter: $filter24, order: $order15, first: $first15, offset: $offset15) {
        id
        name
        availability
      }
      hours
      deadline
      content
      priority
      complete
      likes(filter: $filter37, order: $order25, first: $first25, offset: $offset25) {
        id
        project(filter: $filter25) {
          id
          title
          description
        }
        name
        availability
        user(filter: $filter28, order: $order18, first: $first18, offset: $offset18) {
          id
          username
          password
          location
          roles(filter: $filter26, order: $order16, first: $first16, offset: $offset16) {
            id
            name
            availability
          }
          stars(filter: $filter27, order: $order17, first: $first17, offset: $offset17) {
            id
            title
            hours
            deadline
            content
            priority
            complete
          }
        }
        tags(filter: $filter29, order: $order19, first: $first19, offset: $offset19) {
          id
          title
        }
        tasks(filter: $filter30, order: $order20, first: $first20, offset: $offset20) {
          id
          title
          hours
          deadline
          content
          priority
          complete
        }
        liked(filter: $filter36, order: $order24, first: $first24, offset: $offset24) {
          id
          project(filter: $filter31) {
            id
            title
            description
          }
          column(filter: $filter32) {
            id
            title
          }
          title
          developers(filter: $filter33, order: $order21, first: $first21, offset: $offset21) {
            id
            name
            availability
          }
          hours
          deadline
          content
          priority
          complete
          likes(filter: $filter34, order: $order22, first: $first22, offset: $offset22) {
            id
            name
            availability
          }
          comments(filter: $filter35, order: $order23, first: $first23, offset: $offset23) {
            id
            content
          }
        }
      }
      comments(filter: $filter45, order: $order30, first: $first30, offset: $offset30) {
        id
        task(filter: $filter38) {
          id
          title
          hours
          deadline
          content
          priority
          complete
        }
        developer(filter: $filter44) {
          id
          project(filter: $filter39) {
            id
            title
            description
          }
          name
          availability
          user(filter: $filter40, order: $order26, first: $first26, offset: $offset26) {
            id
            username
            password
            location
          }
          tags(filter: $filter41, order: $order27, first: $first27, offset: $offset27) {
            id
            title
          }
          tasks(filter: $filter42, order: $order28, first: $first28, offset: $offset28) {
            id
            title
            hours
            deadline
            content
            priority
            complete
          }
          liked(filter: $filter43, order: $order29, first: $first29, offset: $offset29) {
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
    numUids
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
    mutation updateUser($filter: TagFilter, $order: TagOrder, $first: Int, $offset: Int, $filter1: TaskFilter, $order1: TaskOrder, $first1: Int, $offset1: Int, $filter2: BoardFilter, $order2: BoardOrder, $first2: Int, $offset2: Int, $filter3: DeveloperFilter, $order3: DeveloperOrder, $first3: Int, $offset3: Int, $filter4: ProjectFilter, $filter5: TaskFilter, $order4: TaskOrder, $first4: Int, $offset4: Int, $filter6: UserFilter, $order5: UserOrder, $first5: Int, $offset5: Int, $filter7: ProjectFilter, $filter8: DeveloperFilter, $order6: DeveloperOrder, $first6: Int, $offset6: Int, $filter9: TagFilter, $order7: TagOrder, $first7: Int, $offset7: Int, $filter10: ProjectFilter, $filter11: ColumnFilter, $filter12: DeveloperFilter, $order8: DeveloperOrder, $first8: Int, $offset8: Int, $filter13: DeveloperFilter, $order9: DeveloperOrder, $first9: Int, $offset9: Int, $filter14: CommentFilter, $order10: CommentOrder, $first10: Int, $offset10: Int, $filter15: TaskFilter, $order11: TaskOrder, $first11: Int, $offset11: Int, $filter16: ProjectFilter, $filter17: ColumnFilter, $filter18: DeveloperFilter, $order12: DeveloperOrder, $first12: Int, $offset12: Int, $filter19: DeveloperFilter, $order13: DeveloperOrder, $first13: Int, $offset13: Int, $filter20: CommentFilter, $order14: CommentOrder, $first14: Int, $offset14: Int, $filter21: TaskFilter, $order15: TaskOrder, $first15: Int, $offset15: Int, $filter22: DeveloperFilter, $order16: DeveloperOrder, $first16: Int, $offset16: Int, $filter23: UserFilter, $order17: UserOrder, $first17: Int, $offset17: Int, $input: UpdateUserInput!) {
  updateUser(input: $input) {
    user(filter: $filter23, order: $order17, first: $first17, offset: $offset17) {
      id
      username
      password
      location
      roles(filter: $filter22, order: $order16, first: $first16, offset: $offset16) {
        id
        project(filter: $filter4) {
          id
          title
          description
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
          boards(filter: $filter2, order: $order2, first: $first2, offset: $offset2) {
            id
            title
            order
          }
          developers(filter: $filter3, order: $order3, first: $first3, offset: $offset3) {
            id
            name
            availability
          }
        }
        name
        availability
        user(filter: $filter6, order: $order5, first: $first5, offset: $offset5) {
          id
          username
          password
          location
          stars(filter: $filter5, order: $order4, first: $first4, offset: $offset4) {
            id
            title
            hours
            deadline
            content
            priority
            complete
          }
        }
        tags(filter: $filter9, order: $order7, first: $first7, offset: $offset7) {
          id
          title
          project(filter: $filter7) {
            id
            title
            description
          }
          developers(filter: $filter8, order: $order6, first: $first6, offset: $offset6) {
            id
            name
            availability
          }
        }
        tasks(filter: $filter15, order: $order11, first: $first11, offset: $offset11) {
          id
          project(filter: $filter10) {
            id
            title
            description
          }
          column(filter: $filter11) {
            id
            title
          }
          title
          developers(filter: $filter12, order: $order8, first: $first8, offset: $offset8) {
            id
            name
            availability
          }
          hours
          deadline
          content
          priority
          complete
          likes(filter: $filter13, order: $order9, first: $first9, offset: $offset9) {
            id
            name
            availability
          }
          comments(filter: $filter14, order: $order10, first: $first10, offset: $offset10) {
            id
            content
          }
        }
        liked(filter: $filter21, order: $order15, first: $first15, offset: $offset15) {
          id
          project(filter: $filter16) {
            id
            title
            description
          }
          column(filter: $filter17) {
            id
            title
          }
          title
          developers(filter: $filter18, order: $order12, first: $first12, offset: $offset12) {
            id
            name
            availability
          }
          hours
          deadline
          content
          priority
          complete
          likes(filter: $filter19, order: $order13, first: $first13, offset: $offset13) {
            id
            name
            availability
          }
          comments(filter: $filter20, order: $order14, first: $first14, offset: $offset14) {
            id
            content
          }
        }
      }
    }
    numUids
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
export const GetBoardDocument = gql`
    query getBoard($filter: TaskFilter, $order: TaskOrder, $first: Int, $offset: Int, $filter1: BoardFilter, $order1: BoardOrder, $first1: Int, $offset1: Int, $filter2: DeveloperFilter, $order2: DeveloperOrder, $first2: Int, $offset2: Int, $filter3: ProjectFilter, $filter4: ProjectFilter, $filter5: UserFilter, $order3: UserOrder, $first3: Int, $offset3: Int, $filter6: TagFilter, $order4: TagOrder, $first4: Int, $offset4: Int, $filter7: TaskFilter, $order5: TaskOrder, $first5: Int, $offset5: Int, $filter8: TaskFilter, $order6: TaskOrder, $first6: Int, $offset6: Int, $filter9: DeveloperFilter, $order7: DeveloperOrder, $first7: Int, $offset7: Int, $filter10: TagFilter, $order8: TagOrder, $first8: Int, $offset8: Int, $filter11: ProjectFilter, $filter12: ProjectFilter, $filter13: TaskFilter, $order9: TaskOrder, $first9: Int, $offset9: Int, $filter14: ColumnFilter, $order10: ColumnOrder, $first10: Int, $offset10: Int, $filter15: BoardFilter, $filter16: ColumnFilter, $order11: ColumnOrder, $first11: Int, $offset11: Int, $id: ID!) {
  getBoard(id: $id) {
    id
    project(filter: $filter11) {
      id
      title
      description
      tags(filter: $filter10, order: $order8, first: $first8, offset: $offset8) {
        id
        title
        project(filter: $filter3) {
          id
          title
          description
          tasks(filter: $filter, order: $order, first: $first, offset: $offset) {
            id
            title
            hours
            deadline
            content
            priority
            complete
          }
          boards(filter: $filter1, order: $order1, first: $first1, offset: $offset1) {
            id
            title
            order
          }
          developers(filter: $filter2, order: $order2, first: $first2, offset: $offset2) {
            id
            name
            availability
          }
        }
        developers(filter: $filter9, order: $order7, first: $first7, offset: $offset7) {
          id
          project(filter: $filter4) {
            id
            title
            description
          }
          name
          availability
          user(filter: $filter5, order: $order3, first: $first3, offset: $offset3) {
            id
            username
            password
            location
          }
          tags(filter: $filter6, order: $order4, first: $first4, offset: $offset4) {
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
          }
          liked(filter: $filter8, order: $order6, first: $first6, offset: $offset6) {
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
    title
    columns(filter: $filter16, order: $order11, first: $first11, offset: $offset11) {
      id
      board(filter: $filter15) {
        id
        project(filter: $filter12) {
          id
          title
          description
        }
        title
        columns(filter: $filter14, order: $order10, first: $first10, offset: $offset10) {
          id
          title
          tasks(filter: $filter13, order: $order9, first: $first9, offset: $offset9) {
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
      title
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
    query getColumn($filter: ProjectFilter, $filter1: DeveloperFilter, $order: DeveloperOrder, $first: Int, $offset: Int, $filter2: TagFilter, $order1: TagOrder, $first1: Int, $offset1: Int, $filter3: ProjectFilter, $filter4: ColumnFilter, $filter5: DeveloperFilter, $order2: DeveloperOrder, $first2: Int, $offset2: Int, $filter6: DeveloperFilter, $order3: DeveloperOrder, $first3: Int, $offset3: Int, $filter7: CommentFilter, $order4: CommentOrder, $first4: Int, $offset4: Int, $filter8: TaskFilter, $order5: TaskOrder, $first5: Int, $offset5: Int, $filter9: ProjectFilter, $filter10: ColumnFilter, $order6: ColumnOrder, $first6: Int, $offset6: Int, $filter11: BoardFilter, $order7: BoardOrder, $first7: Int, $offset7: Int, $filter12: ProjectFilter, $filter13: UserFilter, $order8: UserOrder, $first8: Int, $offset8: Int, $filter14: TagFilter, $order9: TagOrder, $first9: Int, $offset9: Int, $filter15: TaskFilter, $order10: TaskOrder, $first10: Int, $offset10: Int, $filter16: TaskFilter, $order11: TaskOrder, $first11: Int, $offset11: Int, $filter17: DeveloperFilter, $order12: DeveloperOrder, $first12: Int, $offset12: Int, $filter18: ProjectFilter, $filter19: BoardFilter, $filter20: TaskFilter, $order13: TaskOrder, $first13: Int, $offset13: Int, $filter21: ColumnFilter, $order14: ColumnOrder, $first14: Int, $offset14: Int, $filter22: BoardFilter, $filter23: TaskFilter, $order15: TaskOrder, $first15: Int, $offset15: Int, $id: ID!) {
  getColumn(id: $id) {
    id
    board(filter: $filter22) {
      id
      project(filter: $filter18) {
        id
        title
        description
        tags(filter: $filter2, order: $order1, first: $first1, offset: $offset1) {
          id
          title
          project(filter: $filter) {
            id
            title
            description
          }
          developers(filter: $filter1, order: $order, first: $first, offset: $offset) {
            id
            name
            availability
          }
        }
        tasks(filter: $filter8, order: $order5, first: $first5, offset: $offset5) {
          id
          project(filter: $filter3) {
            id
            title
            description
          }
          column(filter: $filter4) {
            id
            title
          }
          title
          developers(filter: $filter5, order: $order2, first: $first2, offset: $offset2) {
            id
            name
            availability
          }
          hours
          deadline
          content
          priority
          complete
          likes(filter: $filter6, order: $order3, first: $first3, offset: $offset3) {
            id
            name
            availability
          }
          comments(filter: $filter7, order: $order4, first: $first4, offset: $offset4) {
            id
            content
          }
        }
        boards(filter: $filter11, order: $order7, first: $first7, offset: $offset7) {
          id
          project(filter: $filter9) {
            id
            title
            description
          }
          title
          columns(filter: $filter10, order: $order6, first: $first6, offset: $offset6) {
            id
            title
          }
          order
        }
        developers(filter: $filter17, order: $order12, first: $first12, offset: $offset12) {
          id
          project(filter: $filter12) {
            id
            title
            description
          }
          name
          availability
          user(filter: $filter13, order: $order8, first: $first8, offset: $offset8) {
            id
            username
            password
            location
          }
          tags(filter: $filter14, order: $order9, first: $first9, offset: $offset9) {
            id
            title
          }
          tasks(filter: $filter15, order: $order10, first: $first10, offset: $offset10) {
            id
            title
            hours
            deadline
            content
            priority
            complete
          }
          liked(filter: $filter16, order: $order11, first: $first11, offset: $offset11) {
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
      title
      columns(filter: $filter21, order: $order14, first: $first14, offset: $offset14) {
        id
        board(filter: $filter19) {
          id
          title
          order
        }
        title
        tasks(filter: $filter20, order: $order13, first: $first13, offset: $offset13) {
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
    title
    tasks(filter: $filter23, order: $order15, first: $first15, offset: $offset15) {
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
    query getComment($filter: ProjectFilter, $filter1: DeveloperFilter, $order: DeveloperOrder, $first: Int, $offset: Int, $filter2: TagFilter, $order1: TagOrder, $first1: Int, $offset1: Int, $filter3: ProjectFilter, $filter4: ColumnFilter, $filter5: DeveloperFilter, $order2: DeveloperOrder, $first2: Int, $offset2: Int, $filter6: DeveloperFilter, $order3: DeveloperOrder, $first3: Int, $offset3: Int, $filter7: CommentFilter, $order4: CommentOrder, $first4: Int, $offset4: Int, $filter8: TaskFilter, $order5: TaskOrder, $first5: Int, $offset5: Int, $filter9: ProjectFilter, $filter10: ColumnFilter, $order6: ColumnOrder, $first6: Int, $offset6: Int, $filter11: BoardFilter, $order7: BoardOrder, $first7: Int, $offset7: Int, $filter12: ProjectFilter, $filter13: UserFilter, $order8: UserOrder, $first8: Int, $offset8: Int, $filter14: TagFilter, $order9: TagOrder, $first9: Int, $offset9: Int, $filter15: TaskFilter, $order10: TaskOrder, $first10: Int, $offset10: Int, $filter16: TaskFilter, $order11: TaskOrder, $first11: Int, $offset11: Int, $filter17: DeveloperFilter, $order12: DeveloperOrder, $first12: Int, $offset12: Int, $filter18: ProjectFilter, $filter19: ProjectFilter, $filter20: ColumnFilter, $order13: ColumnOrder, $first13: Int, $offset13: Int, $filter21: BoardFilter, $filter22: TaskFilter, $order14: TaskOrder, $first14: Int, $offset14: Int, $filter23: ColumnFilter, $filter24: DeveloperFilter, $order15: DeveloperOrder, $first15: Int, $offset15: Int, $filter25: ProjectFilter, $filter26: DeveloperFilter, $order16: DeveloperOrder, $first16: Int, $offset16: Int, $filter27: TaskFilter, $order17: TaskOrder, $first17: Int, $offset17: Int, $filter28: UserFilter, $order18: UserOrder, $first18: Int, $offset18: Int, $filter29: TagFilter, $order19: TagOrder, $first19: Int, $offset19: Int, $filter30: TaskFilter, $order20: TaskOrder, $first20: Int, $offset20: Int, $filter31: ProjectFilter, $filter32: ColumnFilter, $filter33: DeveloperFilter, $order21: DeveloperOrder, $first21: Int, $offset21: Int, $filter34: DeveloperFilter, $order22: DeveloperOrder, $first22: Int, $offset22: Int, $filter35: CommentFilter, $order23: CommentOrder, $first23: Int, $offset23: Int, $filter36: TaskFilter, $order24: TaskOrder, $first24: Int, $offset24: Int, $filter37: DeveloperFilter, $order25: DeveloperOrder, $first25: Int, $offset25: Int, $filter38: TaskFilter, $filter39: ProjectFilter, $filter40: UserFilter, $order26: UserOrder, $first26: Int, $offset26: Int, $filter41: TagFilter, $order27: TagOrder, $first27: Int, $offset27: Int, $filter42: TaskFilter, $order28: TaskOrder, $first28: Int, $offset28: Int, $filter43: TaskFilter, $order29: TaskOrder, $first29: Int, $offset29: Int, $filter44: DeveloperFilter, $filter45: CommentFilter, $order30: CommentOrder, $first30: Int, $offset30: Int, $filter46: TaskFilter, $filter47: DeveloperFilter, $id: ID!) {
  getComment(id: $id) {
    id
    task(filter: $filter46) {
      id
      project(filter: $filter18) {
        id
        title
        description
        tags(filter: $filter2, order: $order1, first: $first1, offset: $offset1) {
          id
          title
          project(filter: $filter) {
            id
            title
            description
          }
          developers(filter: $filter1, order: $order, first: $first, offset: $offset) {
            id
            name
            availability
          }
        }
        tasks(filter: $filter8, order: $order5, first: $first5, offset: $offset5) {
          id
          project(filter: $filter3) {
            id
            title
            description
          }
          column(filter: $filter4) {
            id
            title
          }
          title
          developers(filter: $filter5, order: $order2, first: $first2, offset: $offset2) {
            id
            name
            availability
          }
          hours
          deadline
          content
          priority
          complete
          likes(filter: $filter6, order: $order3, first: $first3, offset: $offset3) {
            id
            name
            availability
          }
          comments(filter: $filter7, order: $order4, first: $first4, offset: $offset4) {
            id
            content
          }
        }
        boards(filter: $filter11, order: $order7, first: $first7, offset: $offset7) {
          id
          project(filter: $filter9) {
            id
            title
            description
          }
          title
          columns(filter: $filter10, order: $order6, first: $first6, offset: $offset6) {
            id
            title
          }
          order
        }
        developers(filter: $filter17, order: $order12, first: $first12, offset: $offset12) {
          id
          project(filter: $filter12) {
            id
            title
            description
          }
          name
          availability
          user(filter: $filter13, order: $order8, first: $first8, offset: $offset8) {
            id
            username
            password
            location
          }
          tags(filter: $filter14, order: $order9, first: $first9, offset: $offset9) {
            id
            title
          }
          tasks(filter: $filter15, order: $order10, first: $first10, offset: $offset10) {
            id
            title
            hours
            deadline
            content
            priority
            complete
          }
          liked(filter: $filter16, order: $order11, first: $first11, offset: $offset11) {
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
      column(filter: $filter23) {
        id
        board(filter: $filter21) {
          id
          project(filter: $filter19) {
            id
            title
            description
          }
          title
          columns(filter: $filter20, order: $order13, first: $first13, offset: $offset13) {
            id
            title
          }
          order
        }
        title
        tasks(filter: $filter22, order: $order14, first: $first14, offset: $offset14) {
          id
          title
          hours
          deadline
          content
          priority
          complete
        }
      }
      title
      developers(filter: $filter24, order: $order15, first: $first15, offset: $offset15) {
        id
        name
        availability
      }
      hours
      deadline
      content
      priority
      complete
      likes(filter: $filter37, order: $order25, first: $first25, offset: $offset25) {
        id
        project(filter: $filter25) {
          id
          title
          description
        }
        name
        availability
        user(filter: $filter28, order: $order18, first: $first18, offset: $offset18) {
          id
          username
          password
          location
          roles(filter: $filter26, order: $order16, first: $first16, offset: $offset16) {
            id
            name
            availability
          }
          stars(filter: $filter27, order: $order17, first: $first17, offset: $offset17) {
            id
            title
            hours
            deadline
            content
            priority
            complete
          }
        }
        tags(filter: $filter29, order: $order19, first: $first19, offset: $offset19) {
          id
          title
        }
        tasks(filter: $filter30, order: $order20, first: $first20, offset: $offset20) {
          id
          title
          hours
          deadline
          content
          priority
          complete
        }
        liked(filter: $filter36, order: $order24, first: $first24, offset: $offset24) {
          id
          project(filter: $filter31) {
            id
            title
            description
          }
          column(filter: $filter32) {
            id
            title
          }
          title
          developers(filter: $filter33, order: $order21, first: $first21, offset: $offset21) {
            id
            name
            availability
          }
          hours
          deadline
          content
          priority
          complete
          likes(filter: $filter34, order: $order22, first: $first22, offset: $offset22) {
            id
            name
            availability
          }
          comments(filter: $filter35, order: $order23, first: $first23, offset: $offset23) {
            id
            content
          }
        }
      }
      comments(filter: $filter45, order: $order30, first: $first30, offset: $offset30) {
        id
        task(filter: $filter38) {
          id
          title
          hours
          deadline
          content
          priority
          complete
        }
        developer(filter: $filter44) {
          id
          project(filter: $filter39) {
            id
            title
            description
          }
          name
          availability
          user(filter: $filter40, order: $order26, first: $first26, offset: $offset26) {
            id
            username
            password
            location
          }
          tags(filter: $filter41, order: $order27, first: $first27, offset: $offset27) {
            id
            title
          }
          tasks(filter: $filter42, order: $order28, first: $first28, offset: $offset28) {
            id
            title
            hours
            deadline
            content
            priority
            complete
          }
          liked(filter: $filter43, order: $order29, first: $first29, offset: $offset29) {
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
    developer(filter: $filter47) {
      id
      name
      availability
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
export const GetDeveloperDocument = gql`
    query getDeveloper($filter: TaskFilter, $order: TaskOrder, $first: Int, $offset: Int, $filter1: BoardFilter, $order1: BoardOrder, $first1: Int, $offset1: Int, $filter2: DeveloperFilter, $order2: DeveloperOrder, $first2: Int, $offset2: Int, $filter3: ProjectFilter, $filter4: ProjectFilter, $filter5: UserFilter, $order3: UserOrder, $first3: Int, $offset3: Int, $filter6: TagFilter, $order4: TagOrder, $first4: Int, $offset4: Int, $filter7: TaskFilter, $order5: TaskOrder, $first5: Int, $offset5: Int, $filter8: TaskFilter, $order6: TaskOrder, $first6: Int, $offset6: Int, $filter9: DeveloperFilter, $order7: DeveloperOrder, $first7: Int, $offset7: Int, $filter10: TagFilter, $order8: TagOrder, $first8: Int, $offset8: Int, $filter11: ProjectFilter, $filter12: ProjectFilter, $filter13: TaskFilter, $order9: TaskOrder, $first9: Int, $offset9: Int, $filter14: UserFilter, $order10: UserOrder, $first10: Int, $offset10: Int, $filter15: TagFilter, $order11: TagOrder, $first11: Int, $offset11: Int, $filter16: ProjectFilter, $filter17: ColumnFilter, $filter18: DeveloperFilter, $order12: DeveloperOrder, $first12: Int, $offset12: Int, $filter19: DeveloperFilter, $order13: DeveloperOrder, $first13: Int, $offset13: Int, $filter20: CommentFilter, $order14: CommentOrder, $first14: Int, $offset14: Int, $filter21: TaskFilter, $order15: TaskOrder, $first15: Int, $offset15: Int, $filter22: ProjectFilter, $filter23: ColumnFilter, $filter24: DeveloperFilter, $order16: DeveloperOrder, $first16: Int, $offset16: Int, $filter25: DeveloperFilter, $order17: DeveloperOrder, $first17: Int, $offset17: Int, $filter26: CommentFilter, $order18: CommentOrder, $first18: Int, $offset18: Int, $filter27: TaskFilter, $order19: TaskOrder, $first19: Int, $offset19: Int, $filter28: DeveloperFilter, $order20: DeveloperOrder, $first20: Int, $offset20: Int, $filter29: UserFilter, $order21: UserOrder, $first21: Int, $offset21: Int, $filter30: TagFilter, $order22: TagOrder, $first22: Int, $offset22: Int, $filter31: TaskFilter, $order23: TaskOrder, $first23: Int, $offset23: Int, $filter32: TaskFilter, $order24: TaskOrder, $first24: Int, $offset24: Int, $id: ID!) {
  getDeveloper(id: $id) {
    id
    project(filter: $filter11) {
      id
      title
      description
      tags(filter: $filter10, order: $order8, first: $first8, offset: $offset8) {
        id
        title
        project(filter: $filter3) {
          id
          title
          description
          tasks(filter: $filter, order: $order, first: $first, offset: $offset) {
            id
            title
            hours
            deadline
            content
            priority
            complete
          }
          boards(filter: $filter1, order: $order1, first: $first1, offset: $offset1) {
            id
            title
            order
          }
          developers(filter: $filter2, order: $order2, first: $first2, offset: $offset2) {
            id
            name
            availability
          }
        }
        developers(filter: $filter9, order: $order7, first: $first7, offset: $offset7) {
          id
          project(filter: $filter4) {
            id
            title
            description
          }
          name
          availability
          user(filter: $filter5, order: $order3, first: $first3, offset: $offset3) {
            id
            username
            password
            location
          }
          tags(filter: $filter6, order: $order4, first: $first4, offset: $offset4) {
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
          }
          liked(filter: $filter8, order: $order6, first: $first6, offset: $offset6) {
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
    name
    availability
    user(filter: $filter29, order: $order21, first: $first21, offset: $offset21) {
      id
      username
      password
      location
      roles(filter: $filter28, order: $order20, first: $first20, offset: $offset20) {
        id
        project(filter: $filter12) {
          id
          title
          description
        }
        name
        availability
        user(filter: $filter14, order: $order10, first: $first10, offset: $offset10) {
          id
          username
          password
          location
          stars(filter: $filter13, order: $order9, first: $first9, offset: $offset9) {
            id
            title
            hours
            deadline
            content
            priority
            complete
          }
        }
        tags(filter: $filter15, order: $order11, first: $first11, offset: $offset11) {
          id
          title
        }
        tasks(filter: $filter21, order: $order15, first: $first15, offset: $offset15) {
          id
          project(filter: $filter16) {
            id
            title
            description
          }
          column(filter: $filter17) {
            id
            title
          }
          title
          developers(filter: $filter18, order: $order12, first: $first12, offset: $offset12) {
            id
            name
            availability
          }
          hours
          deadline
          content
          priority
          complete
          likes(filter: $filter19, order: $order13, first: $first13, offset: $offset13) {
            id
            name
            availability
          }
          comments(filter: $filter20, order: $order14, first: $first14, offset: $offset14) {
            id
            content
          }
        }
        liked(filter: $filter27, order: $order19, first: $first19, offset: $offset19) {
          id
          project(filter: $filter22) {
            id
            title
            description
          }
          column(filter: $filter23) {
            id
            title
          }
          title
          developers(filter: $filter24, order: $order16, first: $first16, offset: $offset16) {
            id
            name
            availability
          }
          hours
          deadline
          content
          priority
          complete
          likes(filter: $filter25, order: $order17, first: $first17, offset: $offset17) {
            id
            name
            availability
          }
          comments(filter: $filter26, order: $order18, first: $first18, offset: $offset18) {
            id
            content
          }
        }
      }
    }
    tags(filter: $filter30, order: $order22, first: $first22, offset: $offset22) {
      id
      title
    }
    tasks(filter: $filter31, order: $order23, first: $first23, offset: $offset23) {
      id
      title
      hours
      deadline
      content
      priority
      complete
    }
    liked(filter: $filter32, order: $order24, first: $first24, offset: $offset24) {
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
export type GetDeveloperComponentProps = Omit<ApolloReactComponents.QueryComponentOptions<GetDeveloperQuery, GetDeveloperQueryVariables>, 'query'> & ({ variables: GetDeveloperQueryVariables; skip?: boolean; } | { skip: boolean; });

    export const GetDeveloperComponent = (props: GetDeveloperComponentProps) => (
      <ApolloReactComponents.Query<GetDeveloperQuery, GetDeveloperQueryVariables> query={GetDeveloperDocument} {...props} />
    );
    
export type GetDeveloperProps<TChildProps = {}> = ApolloReactHoc.DataProps<GetDeveloperQuery, GetDeveloperQueryVariables> & TChildProps;
export function withGetDeveloper<TProps, TChildProps = {}>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  GetDeveloperQuery,
  GetDeveloperQueryVariables,
  GetDeveloperProps<TChildProps>>) {
    return ApolloReactHoc.withQuery<TProps, GetDeveloperQuery, GetDeveloperQueryVariables, GetDeveloperProps<TChildProps>>(GetDeveloperDocument, {
      alias: 'getDeveloper',
      ...operationOptions
    });
};
export type GetDeveloperQueryResult = ApolloReactCommon.QueryResult<GetDeveloperQuery, GetDeveloperQueryVariables>;
export const GetProjectDocument = gql`
    query getProject($filter: DeveloperFilter, $order: DeveloperOrder, $first: Int, $offset: Int, $filter1: TagFilter, $order1: TagOrder, $first1: Int, $offset1: Int, $filter2: ProjectFilter, $filter3: ColumnFilter, $filter4: DeveloperFilter, $order2: DeveloperOrder, $first2: Int, $offset2: Int, $filter5: DeveloperFilter, $order3: DeveloperOrder, $first3: Int, $offset3: Int, $filter6: CommentFilter, $order4: CommentOrder, $first4: Int, $offset4: Int, $filter7: TaskFilter, $order5: TaskOrder, $first5: Int, $offset5: Int, $filter8: ProjectFilter, $filter9: ColumnFilter, $order6: ColumnOrder, $first6: Int, $offset6: Int, $filter10: BoardFilter, $order7: BoardOrder, $first7: Int, $offset7: Int, $filter11: ProjectFilter, $filter12: UserFilter, $order8: UserOrder, $first8: Int, $offset8: Int, $filter13: TagFilter, $order9: TagOrder, $first9: Int, $offset9: Int, $filter14: TaskFilter, $order10: TaskOrder, $first10: Int, $offset10: Int, $filter15: TaskFilter, $order11: TaskOrder, $first11: Int, $offset11: Int, $filter16: DeveloperFilter, $order12: DeveloperOrder, $first12: Int, $offset12: Int, $filter17: ProjectFilter, $filter18: TagFilter, $order13: TagOrder, $first13: Int, $offset13: Int, $filter19: TaskFilter, $order14: TaskOrder, $first14: Int, $offset14: Int, $filter20: BoardFilter, $order15: BoardOrder, $first15: Int, $offset15: Int, $filter21: DeveloperFilter, $order16: DeveloperOrder, $first16: Int, $offset16: Int, $id: ID!) {
  getProject(id: $id) {
    id
    title
    description
    tags(filter: $filter18, order: $order13, first: $first13, offset: $offset13) {
      id
      title
      project(filter: $filter17) {
        id
        title
        description
        tags(filter: $filter1, order: $order1, first: $first1, offset: $offset1) {
          id
          title
          developers(filter: $filter, order: $order, first: $first, offset: $offset) {
            id
            name
            availability
          }
        }
        tasks(filter: $filter7, order: $order5, first: $first5, offset: $offset5) {
          id
          project(filter: $filter2) {
            id
            title
            description
          }
          column(filter: $filter3) {
            id
            title
          }
          title
          developers(filter: $filter4, order: $order2, first: $first2, offset: $offset2) {
            id
            name
            availability
          }
          hours
          deadline
          content
          priority
          complete
          likes(filter: $filter5, order: $order3, first: $first3, offset: $offset3) {
            id
            name
            availability
          }
          comments(filter: $filter6, order: $order4, first: $first4, offset: $offset4) {
            id
            content
          }
        }
        boards(filter: $filter10, order: $order7, first: $first7, offset: $offset7) {
          id
          project(filter: $filter8) {
            id
            title
            description
          }
          title
          columns(filter: $filter9, order: $order6, first: $first6, offset: $offset6) {
            id
            title
          }
          order
        }
        developers(filter: $filter16, order: $order12, first: $first12, offset: $offset12) {
          id
          project(filter: $filter11) {
            id
            title
            description
          }
          name
          availability
          user(filter: $filter12, order: $order8, first: $first8, offset: $offset8) {
            id
            username
            password
            location
          }
          tags(filter: $filter13, order: $order9, first: $first9, offset: $offset9) {
            id
            title
          }
          tasks(filter: $filter14, order: $order10, first: $first10, offset: $offset10) {
            id
            title
            hours
            deadline
            content
            priority
            complete
          }
          liked(filter: $filter15, order: $order11, first: $first11, offset: $offset11) {
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
    tasks(filter: $filter19, order: $order14, first: $first14, offset: $offset14) {
      id
      title
      hours
      deadline
      content
      priority
      complete
    }
    boards(filter: $filter20, order: $order15, first: $first15, offset: $offset15) {
      id
      title
      order
    }
    developers(filter: $filter21, order: $order16, first: $first16, offset: $offset16) {
      id
      name
      availability
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
    query getTag($filter: TaskFilter, $order: TaskOrder, $first: Int, $offset: Int, $filter1: BoardFilter, $order1: BoardOrder, $first1: Int, $offset1: Int, $filter2: DeveloperFilter, $order2: DeveloperOrder, $first2: Int, $offset2: Int, $filter3: ProjectFilter, $filter4: ProjectFilter, $filter5: UserFilter, $order3: UserOrder, $first3: Int, $offset3: Int, $filter6: TagFilter, $order4: TagOrder, $first4: Int, $offset4: Int, $filter7: TaskFilter, $order5: TaskOrder, $first5: Int, $offset5: Int, $filter8: TaskFilter, $order6: TaskOrder, $first6: Int, $offset6: Int, $filter9: DeveloperFilter, $order7: DeveloperOrder, $first7: Int, $offset7: Int, $filter10: TagFilter, $order8: TagOrder, $first8: Int, $offset8: Int, $filter11: ProjectFilter, $filter12: DeveloperFilter, $order9: DeveloperOrder, $first9: Int, $offset9: Int, $id: ID!) {
  getTag(id: $id) {
    id
    title
    project(filter: $filter11) {
      id
      title
      description
      tags(filter: $filter10, order: $order8, first: $first8, offset: $offset8) {
        id
        title
        project(filter: $filter3) {
          id
          title
          description
          tasks(filter: $filter, order: $order, first: $first, offset: $offset) {
            id
            title
            hours
            deadline
            content
            priority
            complete
          }
          boards(filter: $filter1, order: $order1, first: $first1, offset: $offset1) {
            id
            title
            order
          }
          developers(filter: $filter2, order: $order2, first: $first2, offset: $offset2) {
            id
            name
            availability
          }
        }
        developers(filter: $filter9, order: $order7, first: $first7, offset: $offset7) {
          id
          project(filter: $filter4) {
            id
            title
            description
          }
          name
          availability
          user(filter: $filter5, order: $order3, first: $first3, offset: $offset3) {
            id
            username
            password
            location
          }
          tags(filter: $filter6, order: $order4, first: $first4, offset: $offset4) {
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
          }
          liked(filter: $filter8, order: $order6, first: $first6, offset: $offset6) {
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
    developers(filter: $filter12, order: $order9, first: $first9, offset: $offset9) {
      id
      name
      availability
    }
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
    query getTask($filter: TaskFilter, $order: TaskOrder, $first: Int, $offset: Int, $filter1: BoardFilter, $order1: BoardOrder, $first1: Int, $offset1: Int, $filter2: DeveloperFilter, $order2: DeveloperOrder, $first2: Int, $offset2: Int, $filter3: ProjectFilter, $filter4: ProjectFilter, $filter5: UserFilter, $order3: UserOrder, $first3: Int, $offset3: Int, $filter6: TagFilter, $order4: TagOrder, $first4: Int, $offset4: Int, $filter7: TaskFilter, $order5: TaskOrder, $first5: Int, $offset5: Int, $filter8: TaskFilter, $order6: TaskOrder, $first6: Int, $offset6: Int, $filter9: DeveloperFilter, $order7: DeveloperOrder, $first7: Int, $offset7: Int, $filter10: TagFilter, $order8: TagOrder, $first8: Int, $offset8: Int, $filter11: ProjectFilter, $filter12: ProjectFilter, $filter13: BoardFilter, $filter14: TaskFilter, $order9: TaskOrder, $first9: Int, $offset9: Int, $filter15: ColumnFilter, $order10: ColumnOrder, $first10: Int, $offset10: Int, $filter16: BoardFilter, $filter17: ProjectFilter, $filter18: ColumnFilter, $filter19: DeveloperFilter, $order11: DeveloperOrder, $first11: Int, $offset11: Int, $filter20: ProjectFilter, $filter21: UserFilter, $order12: UserOrder, $first12: Int, $offset12: Int, $filter22: TagFilter, $order13: TagOrder, $first13: Int, $offset13: Int, $filter23: TaskFilter, $order14: TaskOrder, $first14: Int, $offset14: Int, $filter24: TaskFilter, $order15: TaskOrder, $first15: Int, $offset15: Int, $filter25: DeveloperFilter, $order16: DeveloperOrder, $first16: Int, $offset16: Int, $filter26: TaskFilter, $filter27: DeveloperFilter, $filter28: CommentFilter, $order17: CommentOrder, $first17: Int, $offset17: Int, $filter29: TaskFilter, $order18: TaskOrder, $first18: Int, $offset18: Int, $filter30: ColumnFilter, $filter31: DeveloperFilter, $order19: DeveloperOrder, $first19: Int, $offset19: Int, $filter32: DeveloperFilter, $order20: DeveloperOrder, $first20: Int, $offset20: Int, $filter33: CommentFilter, $order21: CommentOrder, $first21: Int, $offset21: Int, $id: ID!) {
  getTask(id: $id) {
    id
    project(filter: $filter11) {
      id
      title
      description
      tags(filter: $filter10, order: $order8, first: $first8, offset: $offset8) {
        id
        title
        project(filter: $filter3) {
          id
          title
          description
          tasks(filter: $filter, order: $order, first: $first, offset: $offset) {
            id
            title
            hours
            deadline
            content
            priority
            complete
          }
          boards(filter: $filter1, order: $order1, first: $first1, offset: $offset1) {
            id
            title
            order
          }
          developers(filter: $filter2, order: $order2, first: $first2, offset: $offset2) {
            id
            name
            availability
          }
        }
        developers(filter: $filter9, order: $order7, first: $first7, offset: $offset7) {
          id
          project(filter: $filter4) {
            id
            title
            description
          }
          name
          availability
          user(filter: $filter5, order: $order3, first: $first3, offset: $offset3) {
            id
            username
            password
            location
          }
          tags(filter: $filter6, order: $order4, first: $first4, offset: $offset4) {
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
          }
          liked(filter: $filter8, order: $order6, first: $first6, offset: $offset6) {
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
    column(filter: $filter30) {
      id
      board(filter: $filter16) {
        id
        project(filter: $filter12) {
          id
          title
          description
        }
        title
        columns(filter: $filter15, order: $order10, first: $first10, offset: $offset10) {
          id
          board(filter: $filter13) {
            id
            title
            order
          }
          title
          tasks(filter: $filter14, order: $order9, first: $first9, offset: $offset9) {
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
      title
      tasks(filter: $filter29, order: $order18, first: $first18, offset: $offset18) {
        id
        project(filter: $filter17) {
          id
          title
          description
        }
        column(filter: $filter18) {
          id
          title
        }
        title
        developers(filter: $filter19, order: $order11, first: $first11, offset: $offset11) {
          id
          name
          availability
        }
        hours
        deadline
        content
        priority
        complete
        likes(filter: $filter25, order: $order16, first: $first16, offset: $offset16) {
          id
          project(filter: $filter20) {
            id
            title
            description
          }
          name
          availability
          user(filter: $filter21, order: $order12, first: $first12, offset: $offset12) {
            id
            username
            password
            location
          }
          tags(filter: $filter22, order: $order13, first: $first13, offset: $offset13) {
            id
            title
          }
          tasks(filter: $filter23, order: $order14, first: $first14, offset: $offset14) {
            id
            title
            hours
            deadline
            content
            priority
            complete
          }
          liked(filter: $filter24, order: $order15, first: $first15, offset: $offset15) {
            id
            title
            hours
            deadline
            content
            priority
            complete
          }
        }
        comments(filter: $filter28, order: $order17, first: $first17, offset: $offset17) {
          id
          task(filter: $filter26) {
            id
            title
            hours
            deadline
            content
            priority
            complete
          }
          developer(filter: $filter27) {
            id
            name
            availability
          }
          content
        }
      }
    }
    title
    developers(filter: $filter31, order: $order19, first: $first19, offset: $offset19) {
      id
      name
      availability
    }
    hours
    deadline
    content
    priority
    complete
    likes(filter: $filter32, order: $order20, first: $first20, offset: $offset20) {
      id
      name
      availability
    }
    comments(filter: $filter33, order: $order21, first: $first21, offset: $offset21) {
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
    query getUser($filter: ProjectFilter, $filter1: DeveloperFilter, $order: DeveloperOrder, $first: Int, $offset: Int, $filter2: TagFilter, $order1: TagOrder, $first1: Int, $offset1: Int, $filter3: ProjectFilter, $filter4: ColumnFilter, $filter5: DeveloperFilter, $order2: DeveloperOrder, $first2: Int, $offset2: Int, $filter6: DeveloperFilter, $order3: DeveloperOrder, $first3: Int, $offset3: Int, $filter7: CommentFilter, $order4: CommentOrder, $first4: Int, $offset4: Int, $filter8: TaskFilter, $order5: TaskOrder, $first5: Int, $offset5: Int, $filter9: ProjectFilter, $filter10: ColumnFilter, $order6: ColumnOrder, $first6: Int, $offset6: Int, $filter11: BoardFilter, $order7: BoardOrder, $first7: Int, $offset7: Int, $filter12: ProjectFilter, $filter13: UserFilter, $order8: UserOrder, $first8: Int, $offset8: Int, $filter14: TagFilter, $order9: TagOrder, $first9: Int, $offset9: Int, $filter15: TaskFilter, $order10: TaskOrder, $first10: Int, $offset10: Int, $filter16: TaskFilter, $order11: TaskOrder, $first11: Int, $offset11: Int, $filter17: DeveloperFilter, $order12: DeveloperOrder, $first12: Int, $offset12: Int, $filter18: ProjectFilter, $filter19: TagFilter, $order13: TagOrder, $first13: Int, $offset13: Int, $filter20: TaskFilter, $order14: TaskOrder, $first14: Int, $offset14: Int, $filter21: TaskFilter, $order15: TaskOrder, $first15: Int, $offset15: Int, $filter22: DeveloperFilter, $order16: DeveloperOrder, $first16: Int, $offset16: Int, $filter23: ProjectFilter, $filter24: ColumnFilter, $filter25: DeveloperFilter, $order17: DeveloperOrder, $first17: Int, $offset17: Int, $filter26: DeveloperFilter, $order18: DeveloperOrder, $first18: Int, $offset18: Int, $filter27: CommentFilter, $order19: CommentOrder, $first19: Int, $offset19: Int, $filter28: TaskFilter, $order20: TaskOrder, $first20: Int, $offset20: Int, $filter29: UserFilter, $order21: UserOrder, $first21: Int, $offset21: Int, $filter30: DeveloperFilter, $order22: DeveloperOrder, $first22: Int, $offset22: Int, $filter31: TaskFilter, $order23: TaskOrder, $first23: Int, $offset23: Int, $id: ID!) {
  getUser(id: $id) {
    id
    username
    password
    location
    roles(filter: $filter30, order: $order22, first: $first22, offset: $offset22) {
      id
      project(filter: $filter18) {
        id
        title
        description
        tags(filter: $filter2, order: $order1, first: $first1, offset: $offset1) {
          id
          title
          project(filter: $filter) {
            id
            title
            description
          }
          developers(filter: $filter1, order: $order, first: $first, offset: $offset) {
            id
            name
            availability
          }
        }
        tasks(filter: $filter8, order: $order5, first: $first5, offset: $offset5) {
          id
          project(filter: $filter3) {
            id
            title
            description
          }
          column(filter: $filter4) {
            id
            title
          }
          title
          developers(filter: $filter5, order: $order2, first: $first2, offset: $offset2) {
            id
            name
            availability
          }
          hours
          deadline
          content
          priority
          complete
          likes(filter: $filter6, order: $order3, first: $first3, offset: $offset3) {
            id
            name
            availability
          }
          comments(filter: $filter7, order: $order4, first: $first4, offset: $offset4) {
            id
            content
          }
        }
        boards(filter: $filter11, order: $order7, first: $first7, offset: $offset7) {
          id
          project(filter: $filter9) {
            id
            title
            description
          }
          title
          columns(filter: $filter10, order: $order6, first: $first6, offset: $offset6) {
            id
            title
          }
          order
        }
        developers(filter: $filter17, order: $order12, first: $first12, offset: $offset12) {
          id
          project(filter: $filter12) {
            id
            title
            description
          }
          name
          availability
          user(filter: $filter13, order: $order8, first: $first8, offset: $offset8) {
            id
            username
            password
            location
          }
          tags(filter: $filter14, order: $order9, first: $first9, offset: $offset9) {
            id
            title
          }
          tasks(filter: $filter15, order: $order10, first: $first10, offset: $offset10) {
            id
            title
            hours
            deadline
            content
            priority
            complete
          }
          liked(filter: $filter16, order: $order11, first: $first11, offset: $offset11) {
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
      name
      availability
      user(filter: $filter29, order: $order21, first: $first21, offset: $offset21) {
        id
        username
        password
        location
        roles(filter: $filter22, order: $order16, first: $first16, offset: $offset16) {
          id
          name
          availability
          tags(filter: $filter19, order: $order13, first: $first13, offset: $offset13) {
            id
            title
          }
          tasks(filter: $filter20, order: $order14, first: $first14, offset: $offset14) {
            id
            title
            hours
            deadline
            content
            priority
            complete
          }
          liked(filter: $filter21, order: $order15, first: $first15, offset: $offset15) {
            id
            title
            hours
            deadline
            content
            priority
            complete
          }
        }
        stars(filter: $filter28, order: $order20, first: $first20, offset: $offset20) {
          id
          project(filter: $filter23) {
            id
            title
            description
          }
          column(filter: $filter24) {
            id
            title
          }
          title
          developers(filter: $filter25, order: $order17, first: $first17, offset: $offset17) {
            id
            name
            availability
          }
          hours
          deadline
          content
          priority
          complete
          likes(filter: $filter26, order: $order18, first: $first18, offset: $offset18) {
            id
            name
            availability
          }
          comments(filter: $filter27, order: $order19, first: $first19, offset: $offset19) {
            id
            content
          }
        }
      }
    }
    stars(filter: $filter31, order: $order23, first: $first23, offset: $offset23) {
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
export const QueryBoardDocument = gql`
    query queryBoard($filter: TaskFilter, $order: TaskOrder, $first: Int, $offset: Int, $filter1: BoardFilter, $order1: BoardOrder, $first1: Int, $offset1: Int, $filter2: DeveloperFilter, $order2: DeveloperOrder, $first2: Int, $offset2: Int, $filter3: ProjectFilter, $filter4: ProjectFilter, $filter5: UserFilter, $order3: UserOrder, $first3: Int, $offset3: Int, $filter6: TagFilter, $order4: TagOrder, $first4: Int, $offset4: Int, $filter7: TaskFilter, $order5: TaskOrder, $first5: Int, $offset5: Int, $filter8: TaskFilter, $order6: TaskOrder, $first6: Int, $offset6: Int, $filter9: DeveloperFilter, $order7: DeveloperOrder, $first7: Int, $offset7: Int, $filter10: TagFilter, $order8: TagOrder, $first8: Int, $offset8: Int, $filter11: ProjectFilter, $filter12: ProjectFilter, $filter13: TaskFilter, $order9: TaskOrder, $first9: Int, $offset9: Int, $filter14: ColumnFilter, $order10: ColumnOrder, $first10: Int, $offset10: Int, $filter15: BoardFilter, $filter16: ColumnFilter, $order11: ColumnOrder, $first11: Int, $offset11: Int, $filter17: BoardFilter, $order12: BoardOrder, $first12: Int, $offset12: Int) {
  queryBoard(filter: $filter17, order: $order12, first: $first12, offset: $offset12) {
    id
    project(filter: $filter11) {
      id
      title
      description
      tags(filter: $filter10, order: $order8, first: $first8, offset: $offset8) {
        id
        title
        project(filter: $filter3) {
          id
          title
          description
          tasks(filter: $filter, order: $order, first: $first, offset: $offset) {
            id
            title
            hours
            deadline
            content
            priority
            complete
          }
          boards(filter: $filter1, order: $order1, first: $first1, offset: $offset1) {
            id
            title
            order
          }
          developers(filter: $filter2, order: $order2, first: $first2, offset: $offset2) {
            id
            name
            availability
          }
        }
        developers(filter: $filter9, order: $order7, first: $first7, offset: $offset7) {
          id
          project(filter: $filter4) {
            id
            title
            description
          }
          name
          availability
          user(filter: $filter5, order: $order3, first: $first3, offset: $offset3) {
            id
            username
            password
            location
          }
          tags(filter: $filter6, order: $order4, first: $first4, offset: $offset4) {
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
          }
          liked(filter: $filter8, order: $order6, first: $first6, offset: $offset6) {
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
    title
    columns(filter: $filter16, order: $order11, first: $first11, offset: $offset11) {
      id
      board(filter: $filter15) {
        id
        project(filter: $filter12) {
          id
          title
          description
        }
        title
        columns(filter: $filter14, order: $order10, first: $first10, offset: $offset10) {
          id
          title
          tasks(filter: $filter13, order: $order9, first: $first9, offset: $offset9) {
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
      title
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
    query queryColumn($filter: ProjectFilter, $filter1: DeveloperFilter, $order: DeveloperOrder, $first: Int, $offset: Int, $filter2: TagFilter, $order1: TagOrder, $first1: Int, $offset1: Int, $filter3: ProjectFilter, $filter4: ColumnFilter, $filter5: DeveloperFilter, $order2: DeveloperOrder, $first2: Int, $offset2: Int, $filter6: DeveloperFilter, $order3: DeveloperOrder, $first3: Int, $offset3: Int, $filter7: CommentFilter, $order4: CommentOrder, $first4: Int, $offset4: Int, $filter8: TaskFilter, $order5: TaskOrder, $first5: Int, $offset5: Int, $filter9: ProjectFilter, $filter10: ColumnFilter, $order6: ColumnOrder, $first6: Int, $offset6: Int, $filter11: BoardFilter, $order7: BoardOrder, $first7: Int, $offset7: Int, $filter12: ProjectFilter, $filter13: UserFilter, $order8: UserOrder, $first8: Int, $offset8: Int, $filter14: TagFilter, $order9: TagOrder, $first9: Int, $offset9: Int, $filter15: TaskFilter, $order10: TaskOrder, $first10: Int, $offset10: Int, $filter16: TaskFilter, $order11: TaskOrder, $first11: Int, $offset11: Int, $filter17: DeveloperFilter, $order12: DeveloperOrder, $first12: Int, $offset12: Int, $filter18: ProjectFilter, $filter19: BoardFilter, $filter20: TaskFilter, $order13: TaskOrder, $first13: Int, $offset13: Int, $filter21: ColumnFilter, $order14: ColumnOrder, $first14: Int, $offset14: Int, $filter22: BoardFilter, $filter23: TaskFilter, $order15: TaskOrder, $first15: Int, $offset15: Int, $filter24: ColumnFilter, $order16: ColumnOrder, $first16: Int, $offset16: Int) {
  queryColumn(filter: $filter24, order: $order16, first: $first16, offset: $offset16) {
    id
    board(filter: $filter22) {
      id
      project(filter: $filter18) {
        id
        title
        description
        tags(filter: $filter2, order: $order1, first: $first1, offset: $offset1) {
          id
          title
          project(filter: $filter) {
            id
            title
            description
          }
          developers(filter: $filter1, order: $order, first: $first, offset: $offset) {
            id
            name
            availability
          }
        }
        tasks(filter: $filter8, order: $order5, first: $first5, offset: $offset5) {
          id
          project(filter: $filter3) {
            id
            title
            description
          }
          column(filter: $filter4) {
            id
            title
          }
          title
          developers(filter: $filter5, order: $order2, first: $first2, offset: $offset2) {
            id
            name
            availability
          }
          hours
          deadline
          content
          priority
          complete
          likes(filter: $filter6, order: $order3, first: $first3, offset: $offset3) {
            id
            name
            availability
          }
          comments(filter: $filter7, order: $order4, first: $first4, offset: $offset4) {
            id
            content
          }
        }
        boards(filter: $filter11, order: $order7, first: $first7, offset: $offset7) {
          id
          project(filter: $filter9) {
            id
            title
            description
          }
          title
          columns(filter: $filter10, order: $order6, first: $first6, offset: $offset6) {
            id
            title
          }
          order
        }
        developers(filter: $filter17, order: $order12, first: $first12, offset: $offset12) {
          id
          project(filter: $filter12) {
            id
            title
            description
          }
          name
          availability
          user(filter: $filter13, order: $order8, first: $first8, offset: $offset8) {
            id
            username
            password
            location
          }
          tags(filter: $filter14, order: $order9, first: $first9, offset: $offset9) {
            id
            title
          }
          tasks(filter: $filter15, order: $order10, first: $first10, offset: $offset10) {
            id
            title
            hours
            deadline
            content
            priority
            complete
          }
          liked(filter: $filter16, order: $order11, first: $first11, offset: $offset11) {
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
      title
      columns(filter: $filter21, order: $order14, first: $first14, offset: $offset14) {
        id
        board(filter: $filter19) {
          id
          title
          order
        }
        title
        tasks(filter: $filter20, order: $order13, first: $first13, offset: $offset13) {
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
    title
    tasks(filter: $filter23, order: $order15, first: $first15, offset: $offset15) {
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
    query queryComment($filter: ProjectFilter, $filter1: DeveloperFilter, $order: DeveloperOrder, $first: Int, $offset: Int, $filter2: TagFilter, $order1: TagOrder, $first1: Int, $offset1: Int, $filter3: ProjectFilter, $filter4: ColumnFilter, $filter5: DeveloperFilter, $order2: DeveloperOrder, $first2: Int, $offset2: Int, $filter6: DeveloperFilter, $order3: DeveloperOrder, $first3: Int, $offset3: Int, $filter7: CommentFilter, $order4: CommentOrder, $first4: Int, $offset4: Int, $filter8: TaskFilter, $order5: TaskOrder, $first5: Int, $offset5: Int, $filter9: ProjectFilter, $filter10: ColumnFilter, $order6: ColumnOrder, $first6: Int, $offset6: Int, $filter11: BoardFilter, $order7: BoardOrder, $first7: Int, $offset7: Int, $filter12: ProjectFilter, $filter13: UserFilter, $order8: UserOrder, $first8: Int, $offset8: Int, $filter14: TagFilter, $order9: TagOrder, $first9: Int, $offset9: Int, $filter15: TaskFilter, $order10: TaskOrder, $first10: Int, $offset10: Int, $filter16: TaskFilter, $order11: TaskOrder, $first11: Int, $offset11: Int, $filter17: DeveloperFilter, $order12: DeveloperOrder, $first12: Int, $offset12: Int, $filter18: ProjectFilter, $filter19: ProjectFilter, $filter20: ColumnFilter, $order13: ColumnOrder, $first13: Int, $offset13: Int, $filter21: BoardFilter, $filter22: TaskFilter, $order14: TaskOrder, $first14: Int, $offset14: Int, $filter23: ColumnFilter, $filter24: DeveloperFilter, $order15: DeveloperOrder, $first15: Int, $offset15: Int, $filter25: ProjectFilter, $filter26: DeveloperFilter, $order16: DeveloperOrder, $first16: Int, $offset16: Int, $filter27: TaskFilter, $order17: TaskOrder, $first17: Int, $offset17: Int, $filter28: UserFilter, $order18: UserOrder, $first18: Int, $offset18: Int, $filter29: TagFilter, $order19: TagOrder, $first19: Int, $offset19: Int, $filter30: TaskFilter, $order20: TaskOrder, $first20: Int, $offset20: Int, $filter31: ProjectFilter, $filter32: ColumnFilter, $filter33: DeveloperFilter, $order21: DeveloperOrder, $first21: Int, $offset21: Int, $filter34: DeveloperFilter, $order22: DeveloperOrder, $first22: Int, $offset22: Int, $filter35: CommentFilter, $order23: CommentOrder, $first23: Int, $offset23: Int, $filter36: TaskFilter, $order24: TaskOrder, $first24: Int, $offset24: Int, $filter37: DeveloperFilter, $order25: DeveloperOrder, $first25: Int, $offset25: Int, $filter38: TaskFilter, $filter39: ProjectFilter, $filter40: UserFilter, $order26: UserOrder, $first26: Int, $offset26: Int, $filter41: TagFilter, $order27: TagOrder, $first27: Int, $offset27: Int, $filter42: TaskFilter, $order28: TaskOrder, $first28: Int, $offset28: Int, $filter43: TaskFilter, $order29: TaskOrder, $first29: Int, $offset29: Int, $filter44: DeveloperFilter, $filter45: CommentFilter, $order30: CommentOrder, $first30: Int, $offset30: Int, $filter46: TaskFilter, $filter47: DeveloperFilter, $filter48: CommentFilter, $order31: CommentOrder, $first31: Int, $offset31: Int) {
  queryComment(filter: $filter48, order: $order31, first: $first31, offset: $offset31) {
    id
    task(filter: $filter46) {
      id
      project(filter: $filter18) {
        id
        title
        description
        tags(filter: $filter2, order: $order1, first: $first1, offset: $offset1) {
          id
          title
          project(filter: $filter) {
            id
            title
            description
          }
          developers(filter: $filter1, order: $order, first: $first, offset: $offset) {
            id
            name
            availability
          }
        }
        tasks(filter: $filter8, order: $order5, first: $first5, offset: $offset5) {
          id
          project(filter: $filter3) {
            id
            title
            description
          }
          column(filter: $filter4) {
            id
            title
          }
          title
          developers(filter: $filter5, order: $order2, first: $first2, offset: $offset2) {
            id
            name
            availability
          }
          hours
          deadline
          content
          priority
          complete
          likes(filter: $filter6, order: $order3, first: $first3, offset: $offset3) {
            id
            name
            availability
          }
          comments(filter: $filter7, order: $order4, first: $first4, offset: $offset4) {
            id
            content
          }
        }
        boards(filter: $filter11, order: $order7, first: $first7, offset: $offset7) {
          id
          project(filter: $filter9) {
            id
            title
            description
          }
          title
          columns(filter: $filter10, order: $order6, first: $first6, offset: $offset6) {
            id
            title
          }
          order
        }
        developers(filter: $filter17, order: $order12, first: $first12, offset: $offset12) {
          id
          project(filter: $filter12) {
            id
            title
            description
          }
          name
          availability
          user(filter: $filter13, order: $order8, first: $first8, offset: $offset8) {
            id
            username
            password
            location
          }
          tags(filter: $filter14, order: $order9, first: $first9, offset: $offset9) {
            id
            title
          }
          tasks(filter: $filter15, order: $order10, first: $first10, offset: $offset10) {
            id
            title
            hours
            deadline
            content
            priority
            complete
          }
          liked(filter: $filter16, order: $order11, first: $first11, offset: $offset11) {
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
      column(filter: $filter23) {
        id
        board(filter: $filter21) {
          id
          project(filter: $filter19) {
            id
            title
            description
          }
          title
          columns(filter: $filter20, order: $order13, first: $first13, offset: $offset13) {
            id
            title
          }
          order
        }
        title
        tasks(filter: $filter22, order: $order14, first: $first14, offset: $offset14) {
          id
          title
          hours
          deadline
          content
          priority
          complete
        }
      }
      title
      developers(filter: $filter24, order: $order15, first: $first15, offset: $offset15) {
        id
        name
        availability
      }
      hours
      deadline
      content
      priority
      complete
      likes(filter: $filter37, order: $order25, first: $first25, offset: $offset25) {
        id
        project(filter: $filter25) {
          id
          title
          description
        }
        name
        availability
        user(filter: $filter28, order: $order18, first: $first18, offset: $offset18) {
          id
          username
          password
          location
          roles(filter: $filter26, order: $order16, first: $first16, offset: $offset16) {
            id
            name
            availability
          }
          stars(filter: $filter27, order: $order17, first: $first17, offset: $offset17) {
            id
            title
            hours
            deadline
            content
            priority
            complete
          }
        }
        tags(filter: $filter29, order: $order19, first: $first19, offset: $offset19) {
          id
          title
        }
        tasks(filter: $filter30, order: $order20, first: $first20, offset: $offset20) {
          id
          title
          hours
          deadline
          content
          priority
          complete
        }
        liked(filter: $filter36, order: $order24, first: $first24, offset: $offset24) {
          id
          project(filter: $filter31) {
            id
            title
            description
          }
          column(filter: $filter32) {
            id
            title
          }
          title
          developers(filter: $filter33, order: $order21, first: $first21, offset: $offset21) {
            id
            name
            availability
          }
          hours
          deadline
          content
          priority
          complete
          likes(filter: $filter34, order: $order22, first: $first22, offset: $offset22) {
            id
            name
            availability
          }
          comments(filter: $filter35, order: $order23, first: $first23, offset: $offset23) {
            id
            content
          }
        }
      }
      comments(filter: $filter45, order: $order30, first: $first30, offset: $offset30) {
        id
        task(filter: $filter38) {
          id
          title
          hours
          deadline
          content
          priority
          complete
        }
        developer(filter: $filter44) {
          id
          project(filter: $filter39) {
            id
            title
            description
          }
          name
          availability
          user(filter: $filter40, order: $order26, first: $first26, offset: $offset26) {
            id
            username
            password
            location
          }
          tags(filter: $filter41, order: $order27, first: $first27, offset: $offset27) {
            id
            title
          }
          tasks(filter: $filter42, order: $order28, first: $first28, offset: $offset28) {
            id
            title
            hours
            deadline
            content
            priority
            complete
          }
          liked(filter: $filter43, order: $order29, first: $first29, offset: $offset29) {
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
    developer(filter: $filter47) {
      id
      name
      availability
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
export const QueryDeveloperDocument = gql`
    query queryDeveloper($filter: TaskFilter, $order: TaskOrder, $first: Int, $offset: Int, $filter1: BoardFilter, $order1: BoardOrder, $first1: Int, $offset1: Int, $filter2: DeveloperFilter, $order2: DeveloperOrder, $first2: Int, $offset2: Int, $filter3: ProjectFilter, $filter4: ProjectFilter, $filter5: UserFilter, $order3: UserOrder, $first3: Int, $offset3: Int, $filter6: TagFilter, $order4: TagOrder, $first4: Int, $offset4: Int, $filter7: TaskFilter, $order5: TaskOrder, $first5: Int, $offset5: Int, $filter8: TaskFilter, $order6: TaskOrder, $first6: Int, $offset6: Int, $filter9: DeveloperFilter, $order7: DeveloperOrder, $first7: Int, $offset7: Int, $filter10: TagFilter, $order8: TagOrder, $first8: Int, $offset8: Int, $filter11: ProjectFilter, $filter12: ProjectFilter, $filter13: TaskFilter, $order9: TaskOrder, $first9: Int, $offset9: Int, $filter14: UserFilter, $order10: UserOrder, $first10: Int, $offset10: Int, $filter15: TagFilter, $order11: TagOrder, $first11: Int, $offset11: Int, $filter16: ProjectFilter, $filter17: ColumnFilter, $filter18: DeveloperFilter, $order12: DeveloperOrder, $first12: Int, $offset12: Int, $filter19: DeveloperFilter, $order13: DeveloperOrder, $first13: Int, $offset13: Int, $filter20: CommentFilter, $order14: CommentOrder, $first14: Int, $offset14: Int, $filter21: TaskFilter, $order15: TaskOrder, $first15: Int, $offset15: Int, $filter22: ProjectFilter, $filter23: ColumnFilter, $filter24: DeveloperFilter, $order16: DeveloperOrder, $first16: Int, $offset16: Int, $filter25: DeveloperFilter, $order17: DeveloperOrder, $first17: Int, $offset17: Int, $filter26: CommentFilter, $order18: CommentOrder, $first18: Int, $offset18: Int, $filter27: TaskFilter, $order19: TaskOrder, $first19: Int, $offset19: Int, $filter28: DeveloperFilter, $order20: DeveloperOrder, $first20: Int, $offset20: Int, $filter29: UserFilter, $order21: UserOrder, $first21: Int, $offset21: Int, $filter30: TagFilter, $order22: TagOrder, $first22: Int, $offset22: Int, $filter31: TaskFilter, $order23: TaskOrder, $first23: Int, $offset23: Int, $filter32: TaskFilter, $order24: TaskOrder, $first24: Int, $offset24: Int, $filter33: DeveloperFilter, $order25: DeveloperOrder, $first25: Int, $offset25: Int) {
  queryDeveloper(filter: $filter33, order: $order25, first: $first25, offset: $offset25) {
    id
    project(filter: $filter11) {
      id
      title
      description
      tags(filter: $filter10, order: $order8, first: $first8, offset: $offset8) {
        id
        title
        project(filter: $filter3) {
          id
          title
          description
          tasks(filter: $filter, order: $order, first: $first, offset: $offset) {
            id
            title
            hours
            deadline
            content
            priority
            complete
          }
          boards(filter: $filter1, order: $order1, first: $first1, offset: $offset1) {
            id
            title
            order
          }
          developers(filter: $filter2, order: $order2, first: $first2, offset: $offset2) {
            id
            name
            availability
          }
        }
        developers(filter: $filter9, order: $order7, first: $first7, offset: $offset7) {
          id
          project(filter: $filter4) {
            id
            title
            description
          }
          name
          availability
          user(filter: $filter5, order: $order3, first: $first3, offset: $offset3) {
            id
            username
            password
            location
          }
          tags(filter: $filter6, order: $order4, first: $first4, offset: $offset4) {
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
          }
          liked(filter: $filter8, order: $order6, first: $first6, offset: $offset6) {
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
    name
    availability
    user(filter: $filter29, order: $order21, first: $first21, offset: $offset21) {
      id
      username
      password
      location
      roles(filter: $filter28, order: $order20, first: $first20, offset: $offset20) {
        id
        project(filter: $filter12) {
          id
          title
          description
        }
        name
        availability
        user(filter: $filter14, order: $order10, first: $first10, offset: $offset10) {
          id
          username
          password
          location
          stars(filter: $filter13, order: $order9, first: $first9, offset: $offset9) {
            id
            title
            hours
            deadline
            content
            priority
            complete
          }
        }
        tags(filter: $filter15, order: $order11, first: $first11, offset: $offset11) {
          id
          title
        }
        tasks(filter: $filter21, order: $order15, first: $first15, offset: $offset15) {
          id
          project(filter: $filter16) {
            id
            title
            description
          }
          column(filter: $filter17) {
            id
            title
          }
          title
          developers(filter: $filter18, order: $order12, first: $first12, offset: $offset12) {
            id
            name
            availability
          }
          hours
          deadline
          content
          priority
          complete
          likes(filter: $filter19, order: $order13, first: $first13, offset: $offset13) {
            id
            name
            availability
          }
          comments(filter: $filter20, order: $order14, first: $first14, offset: $offset14) {
            id
            content
          }
        }
        liked(filter: $filter27, order: $order19, first: $first19, offset: $offset19) {
          id
          project(filter: $filter22) {
            id
            title
            description
          }
          column(filter: $filter23) {
            id
            title
          }
          title
          developers(filter: $filter24, order: $order16, first: $first16, offset: $offset16) {
            id
            name
            availability
          }
          hours
          deadline
          content
          priority
          complete
          likes(filter: $filter25, order: $order17, first: $first17, offset: $offset17) {
            id
            name
            availability
          }
          comments(filter: $filter26, order: $order18, first: $first18, offset: $offset18) {
            id
            content
          }
        }
      }
    }
    tags(filter: $filter30, order: $order22, first: $first22, offset: $offset22) {
      id
      title
    }
    tasks(filter: $filter31, order: $order23, first: $first23, offset: $offset23) {
      id
      title
      hours
      deadline
      content
      priority
      complete
    }
    liked(filter: $filter32, order: $order24, first: $first24, offset: $offset24) {
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
export type QueryDeveloperComponentProps = Omit<ApolloReactComponents.QueryComponentOptions<QueryDeveloperQuery, QueryDeveloperQueryVariables>, 'query'>;

    export const QueryDeveloperComponent = (props: QueryDeveloperComponentProps) => (
      <ApolloReactComponents.Query<QueryDeveloperQuery, QueryDeveloperQueryVariables> query={QueryDeveloperDocument} {...props} />
    );
    
export type QueryDeveloperProps<TChildProps = {}> = ApolloReactHoc.DataProps<QueryDeveloperQuery, QueryDeveloperQueryVariables> & TChildProps;
export function withQueryDeveloper<TProps, TChildProps = {}>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  QueryDeveloperQuery,
  QueryDeveloperQueryVariables,
  QueryDeveloperProps<TChildProps>>) {
    return ApolloReactHoc.withQuery<TProps, QueryDeveloperQuery, QueryDeveloperQueryVariables, QueryDeveloperProps<TChildProps>>(QueryDeveloperDocument, {
      alias: 'queryDeveloper',
      ...operationOptions
    });
};
export type QueryDeveloperQueryResult = ApolloReactCommon.QueryResult<QueryDeveloperQuery, QueryDeveloperQueryVariables>;
export const QueryProjectDocument = gql`
    query queryProject($filter: DeveloperFilter, $order: DeveloperOrder, $first: Int, $offset: Int, $filter1: TagFilter, $order1: TagOrder, $first1: Int, $offset1: Int, $filter2: ProjectFilter, $filter3: ColumnFilter, $filter4: DeveloperFilter, $order2: DeveloperOrder, $first2: Int, $offset2: Int, $filter5: DeveloperFilter, $order3: DeveloperOrder, $first3: Int, $offset3: Int, $filter6: CommentFilter, $order4: CommentOrder, $first4: Int, $offset4: Int, $filter7: TaskFilter, $order5: TaskOrder, $first5: Int, $offset5: Int, $filter8: ProjectFilter, $filter9: ColumnFilter, $order6: ColumnOrder, $first6: Int, $offset6: Int, $filter10: BoardFilter, $order7: BoardOrder, $first7: Int, $offset7: Int, $filter11: ProjectFilter, $filter12: UserFilter, $order8: UserOrder, $first8: Int, $offset8: Int, $filter13: TagFilter, $order9: TagOrder, $first9: Int, $offset9: Int, $filter14: TaskFilter, $order10: TaskOrder, $first10: Int, $offset10: Int, $filter15: TaskFilter, $order11: TaskOrder, $first11: Int, $offset11: Int, $filter16: DeveloperFilter, $order12: DeveloperOrder, $first12: Int, $offset12: Int, $filter17: ProjectFilter, $filter18: TagFilter, $order13: TagOrder, $first13: Int, $offset13: Int, $filter19: TaskFilter, $order14: TaskOrder, $first14: Int, $offset14: Int, $filter20: BoardFilter, $order15: BoardOrder, $first15: Int, $offset15: Int, $filter21: DeveloperFilter, $order16: DeveloperOrder, $first16: Int, $offset16: Int, $filter22: ProjectFilter, $order17: ProjectOrder, $first17: Int, $offset17: Int) {
  queryProject(filter: $filter22, order: $order17, first: $first17, offset: $offset17) {
    id
    title
    description
    tags(filter: $filter18, order: $order13, first: $first13, offset: $offset13) {
      id
      title
      project(filter: $filter17) {
        id
        title
        description
        tags(filter: $filter1, order: $order1, first: $first1, offset: $offset1) {
          id
          title
          developers(filter: $filter, order: $order, first: $first, offset: $offset) {
            id
            name
            availability
          }
        }
        tasks(filter: $filter7, order: $order5, first: $first5, offset: $offset5) {
          id
          project(filter: $filter2) {
            id
            title
            description
          }
          column(filter: $filter3) {
            id
            title
          }
          title
          developers(filter: $filter4, order: $order2, first: $first2, offset: $offset2) {
            id
            name
            availability
          }
          hours
          deadline
          content
          priority
          complete
          likes(filter: $filter5, order: $order3, first: $first3, offset: $offset3) {
            id
            name
            availability
          }
          comments(filter: $filter6, order: $order4, first: $first4, offset: $offset4) {
            id
            content
          }
        }
        boards(filter: $filter10, order: $order7, first: $first7, offset: $offset7) {
          id
          project(filter: $filter8) {
            id
            title
            description
          }
          title
          columns(filter: $filter9, order: $order6, first: $first6, offset: $offset6) {
            id
            title
          }
          order
        }
        developers(filter: $filter16, order: $order12, first: $first12, offset: $offset12) {
          id
          project(filter: $filter11) {
            id
            title
            description
          }
          name
          availability
          user(filter: $filter12, order: $order8, first: $first8, offset: $offset8) {
            id
            username
            password
            location
          }
          tags(filter: $filter13, order: $order9, first: $first9, offset: $offset9) {
            id
            title
          }
          tasks(filter: $filter14, order: $order10, first: $first10, offset: $offset10) {
            id
            title
            hours
            deadline
            content
            priority
            complete
          }
          liked(filter: $filter15, order: $order11, first: $first11, offset: $offset11) {
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
    tasks(filter: $filter19, order: $order14, first: $first14, offset: $offset14) {
      id
      title
      hours
      deadline
      content
      priority
      complete
    }
    boards(filter: $filter20, order: $order15, first: $first15, offset: $offset15) {
      id
      title
      order
    }
    developers(filter: $filter21, order: $order16, first: $first16, offset: $offset16) {
      id
      name
      availability
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
    query queryTag($filter: TaskFilter, $order: TaskOrder, $first: Int, $offset: Int, $filter1: BoardFilter, $order1: BoardOrder, $first1: Int, $offset1: Int, $filter2: DeveloperFilter, $order2: DeveloperOrder, $first2: Int, $offset2: Int, $filter3: ProjectFilter, $filter4: ProjectFilter, $filter5: UserFilter, $order3: UserOrder, $first3: Int, $offset3: Int, $filter6: TagFilter, $order4: TagOrder, $first4: Int, $offset4: Int, $filter7: TaskFilter, $order5: TaskOrder, $first5: Int, $offset5: Int, $filter8: TaskFilter, $order6: TaskOrder, $first6: Int, $offset6: Int, $filter9: DeveloperFilter, $order7: DeveloperOrder, $first7: Int, $offset7: Int, $filter10: TagFilter, $order8: TagOrder, $first8: Int, $offset8: Int, $filter11: ProjectFilter, $filter12: DeveloperFilter, $order9: DeveloperOrder, $first9: Int, $offset9: Int, $filter13: TagFilter, $order10: TagOrder, $first10: Int, $offset10: Int) {
  queryTag(filter: $filter13, order: $order10, first: $first10, offset: $offset10) {
    id
    title
    project(filter: $filter11) {
      id
      title
      description
      tags(filter: $filter10, order: $order8, first: $first8, offset: $offset8) {
        id
        title
        project(filter: $filter3) {
          id
          title
          description
          tasks(filter: $filter, order: $order, first: $first, offset: $offset) {
            id
            title
            hours
            deadline
            content
            priority
            complete
          }
          boards(filter: $filter1, order: $order1, first: $first1, offset: $offset1) {
            id
            title
            order
          }
          developers(filter: $filter2, order: $order2, first: $first2, offset: $offset2) {
            id
            name
            availability
          }
        }
        developers(filter: $filter9, order: $order7, first: $first7, offset: $offset7) {
          id
          project(filter: $filter4) {
            id
            title
            description
          }
          name
          availability
          user(filter: $filter5, order: $order3, first: $first3, offset: $offset3) {
            id
            username
            password
            location
          }
          tags(filter: $filter6, order: $order4, first: $first4, offset: $offset4) {
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
          }
          liked(filter: $filter8, order: $order6, first: $first6, offset: $offset6) {
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
    developers(filter: $filter12, order: $order9, first: $first9, offset: $offset9) {
      id
      name
      availability
    }
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
    query queryTask($filter: TaskFilter, $order: TaskOrder, $first: Int, $offset: Int, $filter1: BoardFilter, $order1: BoardOrder, $first1: Int, $offset1: Int, $filter2: DeveloperFilter, $order2: DeveloperOrder, $first2: Int, $offset2: Int, $filter3: ProjectFilter, $filter4: ProjectFilter, $filter5: UserFilter, $order3: UserOrder, $first3: Int, $offset3: Int, $filter6: TagFilter, $order4: TagOrder, $first4: Int, $offset4: Int, $filter7: TaskFilter, $order5: TaskOrder, $first5: Int, $offset5: Int, $filter8: TaskFilter, $order6: TaskOrder, $first6: Int, $offset6: Int, $filter9: DeveloperFilter, $order7: DeveloperOrder, $first7: Int, $offset7: Int, $filter10: TagFilter, $order8: TagOrder, $first8: Int, $offset8: Int, $filter11: ProjectFilter, $filter12: ProjectFilter, $filter13: BoardFilter, $filter14: TaskFilter, $order9: TaskOrder, $first9: Int, $offset9: Int, $filter15: ColumnFilter, $order10: ColumnOrder, $first10: Int, $offset10: Int, $filter16: BoardFilter, $filter17: ProjectFilter, $filter18: ColumnFilter, $filter19: DeveloperFilter, $order11: DeveloperOrder, $first11: Int, $offset11: Int, $filter20: ProjectFilter, $filter21: UserFilter, $order12: UserOrder, $first12: Int, $offset12: Int, $filter22: TagFilter, $order13: TagOrder, $first13: Int, $offset13: Int, $filter23: TaskFilter, $order14: TaskOrder, $first14: Int, $offset14: Int, $filter24: TaskFilter, $order15: TaskOrder, $first15: Int, $offset15: Int, $filter25: DeveloperFilter, $order16: DeveloperOrder, $first16: Int, $offset16: Int, $filter26: TaskFilter, $filter27: DeveloperFilter, $filter28: CommentFilter, $order17: CommentOrder, $first17: Int, $offset17: Int, $filter29: TaskFilter, $order18: TaskOrder, $first18: Int, $offset18: Int, $filter30: ColumnFilter, $filter31: DeveloperFilter, $order19: DeveloperOrder, $first19: Int, $offset19: Int, $filter32: DeveloperFilter, $order20: DeveloperOrder, $first20: Int, $offset20: Int, $filter33: CommentFilter, $order21: CommentOrder, $first21: Int, $offset21: Int, $filter34: TaskFilter, $order22: TaskOrder, $first22: Int, $offset22: Int) {
  queryTask(filter: $filter34, order: $order22, first: $first22, offset: $offset22) {
    id
    project(filter: $filter11) {
      id
      title
      description
      tags(filter: $filter10, order: $order8, first: $first8, offset: $offset8) {
        id
        title
        project(filter: $filter3) {
          id
          title
          description
          tasks(filter: $filter, order: $order, first: $first, offset: $offset) {
            id
            title
            hours
            deadline
            content
            priority
            complete
          }
          boards(filter: $filter1, order: $order1, first: $first1, offset: $offset1) {
            id
            title
            order
          }
          developers(filter: $filter2, order: $order2, first: $first2, offset: $offset2) {
            id
            name
            availability
          }
        }
        developers(filter: $filter9, order: $order7, first: $first7, offset: $offset7) {
          id
          project(filter: $filter4) {
            id
            title
            description
          }
          name
          availability
          user(filter: $filter5, order: $order3, first: $first3, offset: $offset3) {
            id
            username
            password
            location
          }
          tags(filter: $filter6, order: $order4, first: $first4, offset: $offset4) {
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
          }
          liked(filter: $filter8, order: $order6, first: $first6, offset: $offset6) {
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
    column(filter: $filter30) {
      id
      board(filter: $filter16) {
        id
        project(filter: $filter12) {
          id
          title
          description
        }
        title
        columns(filter: $filter15, order: $order10, first: $first10, offset: $offset10) {
          id
          board(filter: $filter13) {
            id
            title
            order
          }
          title
          tasks(filter: $filter14, order: $order9, first: $first9, offset: $offset9) {
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
      title
      tasks(filter: $filter29, order: $order18, first: $first18, offset: $offset18) {
        id
        project(filter: $filter17) {
          id
          title
          description
        }
        column(filter: $filter18) {
          id
          title
        }
        title
        developers(filter: $filter19, order: $order11, first: $first11, offset: $offset11) {
          id
          name
          availability
        }
        hours
        deadline
        content
        priority
        complete
        likes(filter: $filter25, order: $order16, first: $first16, offset: $offset16) {
          id
          project(filter: $filter20) {
            id
            title
            description
          }
          name
          availability
          user(filter: $filter21, order: $order12, first: $first12, offset: $offset12) {
            id
            username
            password
            location
          }
          tags(filter: $filter22, order: $order13, first: $first13, offset: $offset13) {
            id
            title
          }
          tasks(filter: $filter23, order: $order14, first: $first14, offset: $offset14) {
            id
            title
            hours
            deadline
            content
            priority
            complete
          }
          liked(filter: $filter24, order: $order15, first: $first15, offset: $offset15) {
            id
            title
            hours
            deadline
            content
            priority
            complete
          }
        }
        comments(filter: $filter28, order: $order17, first: $first17, offset: $offset17) {
          id
          task(filter: $filter26) {
            id
            title
            hours
            deadline
            content
            priority
            complete
          }
          developer(filter: $filter27) {
            id
            name
            availability
          }
          content
        }
      }
    }
    title
    developers(filter: $filter31, order: $order19, first: $first19, offset: $offset19) {
      id
      name
      availability
    }
    hours
    deadline
    content
    priority
    complete
    likes(filter: $filter32, order: $order20, first: $first20, offset: $offset20) {
      id
      name
      availability
    }
    comments(filter: $filter33, order: $order21, first: $first21, offset: $offset21) {
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
    query queryUser($filter: ProjectFilter, $filter1: DeveloperFilter, $order: DeveloperOrder, $first: Int, $offset: Int, $filter2: TagFilter, $order1: TagOrder, $first1: Int, $offset1: Int, $filter3: ProjectFilter, $filter4: ColumnFilter, $filter5: DeveloperFilter, $order2: DeveloperOrder, $first2: Int, $offset2: Int, $filter6: DeveloperFilter, $order3: DeveloperOrder, $first3: Int, $offset3: Int, $filter7: CommentFilter, $order4: CommentOrder, $first4: Int, $offset4: Int, $filter8: TaskFilter, $order5: TaskOrder, $first5: Int, $offset5: Int, $filter9: ProjectFilter, $filter10: ColumnFilter, $order6: ColumnOrder, $first6: Int, $offset6: Int, $filter11: BoardFilter, $order7: BoardOrder, $first7: Int, $offset7: Int, $filter12: ProjectFilter, $filter13: UserFilter, $order8: UserOrder, $first8: Int, $offset8: Int, $filter14: TagFilter, $order9: TagOrder, $first9: Int, $offset9: Int, $filter15: TaskFilter, $order10: TaskOrder, $first10: Int, $offset10: Int, $filter16: TaskFilter, $order11: TaskOrder, $first11: Int, $offset11: Int, $filter17: DeveloperFilter, $order12: DeveloperOrder, $first12: Int, $offset12: Int, $filter18: ProjectFilter, $filter19: TagFilter, $order13: TagOrder, $first13: Int, $offset13: Int, $filter20: TaskFilter, $order14: TaskOrder, $first14: Int, $offset14: Int, $filter21: TaskFilter, $order15: TaskOrder, $first15: Int, $offset15: Int, $filter22: DeveloperFilter, $order16: DeveloperOrder, $first16: Int, $offset16: Int, $filter23: ProjectFilter, $filter24: ColumnFilter, $filter25: DeveloperFilter, $order17: DeveloperOrder, $first17: Int, $offset17: Int, $filter26: DeveloperFilter, $order18: DeveloperOrder, $first18: Int, $offset18: Int, $filter27: CommentFilter, $order19: CommentOrder, $first19: Int, $offset19: Int, $filter28: TaskFilter, $order20: TaskOrder, $first20: Int, $offset20: Int, $filter29: UserFilter, $order21: UserOrder, $first21: Int, $offset21: Int, $filter30: DeveloperFilter, $order22: DeveloperOrder, $first22: Int, $offset22: Int, $filter31: TaskFilter, $order23: TaskOrder, $first23: Int, $offset23: Int, $filter32: UserFilter, $order24: UserOrder, $first24: Int, $offset24: Int) {
  queryUser(filter: $filter32, order: $order24, first: $first24, offset: $offset24) {
    id
    username
    password
    location
    roles(filter: $filter30, order: $order22, first: $first22, offset: $offset22) {
      id
      project(filter: $filter18) {
        id
        title
        description
        tags(filter: $filter2, order: $order1, first: $first1, offset: $offset1) {
          id
          title
          project(filter: $filter) {
            id
            title
            description
          }
          developers(filter: $filter1, order: $order, first: $first, offset: $offset) {
            id
            name
            availability
          }
        }
        tasks(filter: $filter8, order: $order5, first: $first5, offset: $offset5) {
          id
          project(filter: $filter3) {
            id
            title
            description
          }
          column(filter: $filter4) {
            id
            title
          }
          title
          developers(filter: $filter5, order: $order2, first: $first2, offset: $offset2) {
            id
            name
            availability
          }
          hours
          deadline
          content
          priority
          complete
          likes(filter: $filter6, order: $order3, first: $first3, offset: $offset3) {
            id
            name
            availability
          }
          comments(filter: $filter7, order: $order4, first: $first4, offset: $offset4) {
            id
            content
          }
        }
        boards(filter: $filter11, order: $order7, first: $first7, offset: $offset7) {
          id
          project(filter: $filter9) {
            id
            title
            description
          }
          title
          columns(filter: $filter10, order: $order6, first: $first6, offset: $offset6) {
            id
            title
          }
          order
        }
        developers(filter: $filter17, order: $order12, first: $first12, offset: $offset12) {
          id
          project(filter: $filter12) {
            id
            title
            description
          }
          name
          availability
          user(filter: $filter13, order: $order8, first: $first8, offset: $offset8) {
            id
            username
            password
            location
          }
          tags(filter: $filter14, order: $order9, first: $first9, offset: $offset9) {
            id
            title
          }
          tasks(filter: $filter15, order: $order10, first: $first10, offset: $offset10) {
            id
            title
            hours
            deadline
            content
            priority
            complete
          }
          liked(filter: $filter16, order: $order11, first: $first11, offset: $offset11) {
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
      name
      availability
      user(filter: $filter29, order: $order21, first: $first21, offset: $offset21) {
        id
        username
        password
        location
        roles(filter: $filter22, order: $order16, first: $first16, offset: $offset16) {
          id
          name
          availability
          tags(filter: $filter19, order: $order13, first: $first13, offset: $offset13) {
            id
            title
          }
          tasks(filter: $filter20, order: $order14, first: $first14, offset: $offset14) {
            id
            title
            hours
            deadline
            content
            priority
            complete
          }
          liked(filter: $filter21, order: $order15, first: $first15, offset: $offset15) {
            id
            title
            hours
            deadline
            content
            priority
            complete
          }
        }
        stars(filter: $filter28, order: $order20, first: $first20, offset: $offset20) {
          id
          project(filter: $filter23) {
            id
            title
            description
          }
          column(filter: $filter24) {
            id
            title
          }
          title
          developers(filter: $filter25, order: $order17, first: $first17, offset: $offset17) {
            id
            name
            availability
          }
          hours
          deadline
          content
          priority
          complete
          likes(filter: $filter26, order: $order18, first: $first18, offset: $offset18) {
            id
            name
            availability
          }
          comments(filter: $filter27, order: $order19, first: $first19, offset: $offset19) {
            id
            content
          }
        }
      }
    }
    stars(filter: $filter31, order: $order23, first: $first23, offset: $offset23) {
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