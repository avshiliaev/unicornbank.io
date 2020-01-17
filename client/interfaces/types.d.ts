export type Maybe<T> = T | null;
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
  taskIds?: Maybe<Array<Maybe<Scalars['String']>>>,
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
  worker?: Maybe<WorkerRef>,
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
  id?: Maybe<Scalars['ID']>,
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
  id?: Maybe<Scalars['ID']>,
  title: Scalars['String'],
  taskIds?: Maybe<Array<Maybe<Scalars['String']>>>,
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
  Title = 'title',
  TaskIds = 'taskIds'
}

export type ColumnPatch = {
  title?: Maybe<Scalars['String']>,
  taskIds?: Maybe<Array<Maybe<Scalars['String']>>>,
};

export type ColumnRef = {
  id?: Maybe<Scalars['ID']>,
  title?: Maybe<Scalars['String']>,
  taskIds?: Maybe<Array<Maybe<Scalars['String']>>>,
};

export type Comment = {
   __typename?: 'Comment',
  id?: Maybe<Scalars['ID']>,
  worker?: Maybe<Worker>,
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
  id?: Maybe<Scalars['ID']>,
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
  id?: Maybe<Scalars['ID']>,
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
  id?: Maybe<Scalars['ID']>,
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
  id?: Maybe<Scalars['ID']>,
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
  id?: Maybe<Scalars['ID']>,
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
  filter?: Maybe<ColumnFilter>,
  order?: Maybe<ColumnOrder>,
  first?: Maybe<Scalars['Int']>,
  offset?: Maybe<Scalars['Int']>,
  filter1?: Maybe<BoardFilter>,
  order1?: Maybe<BoardOrder>,
  first1?: Maybe<Scalars['Int']>,
  offset1?: Maybe<Scalars['Int']>,
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
        & Pick<Column, 'id' | 'title' | 'taskIds'>
      )>>> }
    )>>> }
  )> }
);

export type AddColumnMutationVariables = {
  filter?: Maybe<ColumnFilter>,
  order?: Maybe<ColumnOrder>,
  first?: Maybe<Scalars['Int']>,
  offset?: Maybe<Scalars['Int']>,
  input: Array<AddColumnInput>
};


export type AddColumnMutation = (
  { __typename?: 'Mutation' }
  & { addColumn: Maybe<(
    { __typename?: 'AddColumnPayload' }
    & { column: Maybe<Array<Maybe<(
      { __typename?: 'Column' }
      & Pick<Column, 'id' | 'title' | 'taskIds'>
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
      & { worker: Maybe<(
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
      )> }
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
  filter8?: Maybe<ColumnFilter>,
  order6?: Maybe<ColumnOrder>,
  first6?: Maybe<Scalars['Int']>,
  offset6?: Maybe<Scalars['Int']>,
  filter9?: Maybe<BoardFilter>,
  order7?: Maybe<BoardOrder>,
  first7?: Maybe<Scalars['Int']>,
  offset7?: Maybe<Scalars['Int']>,
  filter10?: Maybe<WorkerFilter>,
  order8?: Maybe<WorkerOrder>,
  first8?: Maybe<Scalars['Int']>,
  offset8?: Maybe<Scalars['Int']>,
  filter11?: Maybe<TaskFilter>,
  order9?: Maybe<TaskOrder>,
  first9?: Maybe<Scalars['Int']>,
  offset9?: Maybe<Scalars['Int']>,
  filter12?: Maybe<UserFilter>,
  filter13?: Maybe<TagFilter>,
  order10?: Maybe<TagOrder>,
  first10?: Maybe<Scalars['Int']>,
  offset10?: Maybe<Scalars['Int']>,
  filter14?: Maybe<TaskFilter>,
  order11?: Maybe<TaskOrder>,
  first11?: Maybe<Scalars['Int']>,
  offset11?: Maybe<Scalars['Int']>,
  filter15?: Maybe<WorkerFilter>,
  order12?: Maybe<WorkerOrder>,
  first12?: Maybe<Scalars['Int']>,
  offset12?: Maybe<Scalars['Int']>,
  filter16?: Maybe<ProjectFilter>,
  order13?: Maybe<ProjectOrder>,
  first13?: Maybe<Scalars['Int']>,
  offset13?: Maybe<Scalars['Int']>,
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
          & { worker: Maybe<(
            { __typename?: 'Worker' }
            & Pick<Worker, 'id' | 'name' | 'availability'>
          )> }
        )>>> }
      )>>>, boards: Maybe<Array<Maybe<(
        { __typename?: 'Board' }
        & Pick<Board, 'id' | 'title' | 'order'>
        & { columns: Maybe<Array<Maybe<(
          { __typename?: 'Column' }
          & Pick<Column, 'id' | 'title' | 'taskIds'>
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
        & { worker: Maybe<(
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
        )> }
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
          & { worker: Maybe<(
            { __typename?: 'Worker' }
            & Pick<Worker, 'id' | 'name' | 'availability'>
          )> }
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
  filter?: Maybe<ColumnFilter>,
  order?: Maybe<ColumnOrder>,
  first?: Maybe<Scalars['Int']>,
  offset?: Maybe<Scalars['Int']>,
  filter1?: Maybe<BoardFilter>,
  order1?: Maybe<BoardOrder>,
  first1?: Maybe<Scalars['Int']>,
  offset1?: Maybe<Scalars['Int']>,
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
        & Pick<Column, 'id' | 'title' | 'taskIds'>
      )>>> }
    )>>> }
  )> }
);

export type UpdateColumnMutationVariables = {
  filter?: Maybe<ColumnFilter>,
  order?: Maybe<ColumnOrder>,
  first?: Maybe<Scalars['Int']>,
  offset?: Maybe<Scalars['Int']>,
  input: UpdateColumnInput
};


export type UpdateColumnMutation = (
  { __typename?: 'Mutation' }
  & { updateColumn: Maybe<(
    { __typename?: 'UpdateColumnPayload' }
    & { column: Maybe<Array<Maybe<(
      { __typename?: 'Column' }
      & Pick<Column, 'id' | 'title' | 'taskIds'>
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
      & { worker: Maybe<(
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
      )> }
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
  filter8?: Maybe<ColumnFilter>,
  order6?: Maybe<ColumnOrder>,
  first6?: Maybe<Scalars['Int']>,
  offset6?: Maybe<Scalars['Int']>,
  filter9?: Maybe<BoardFilter>,
  order7?: Maybe<BoardOrder>,
  first7?: Maybe<Scalars['Int']>,
  offset7?: Maybe<Scalars['Int']>,
  filter10?: Maybe<WorkerFilter>,
  order8?: Maybe<WorkerOrder>,
  first8?: Maybe<Scalars['Int']>,
  offset8?: Maybe<Scalars['Int']>,
  filter11?: Maybe<TaskFilter>,
  order9?: Maybe<TaskOrder>,
  first9?: Maybe<Scalars['Int']>,
  offset9?: Maybe<Scalars['Int']>,
  filter12?: Maybe<UserFilter>,
  filter13?: Maybe<TagFilter>,
  order10?: Maybe<TagOrder>,
  first10?: Maybe<Scalars['Int']>,
  offset10?: Maybe<Scalars['Int']>,
  filter14?: Maybe<TaskFilter>,
  order11?: Maybe<TaskOrder>,
  first11?: Maybe<Scalars['Int']>,
  offset11?: Maybe<Scalars['Int']>,
  filter15?: Maybe<WorkerFilter>,
  order12?: Maybe<WorkerOrder>,
  first12?: Maybe<Scalars['Int']>,
  offset12?: Maybe<Scalars['Int']>,
  filter16?: Maybe<ProjectFilter>,
  order13?: Maybe<ProjectOrder>,
  first13?: Maybe<Scalars['Int']>,
  offset13?: Maybe<Scalars['Int']>,
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
          & { worker: Maybe<(
            { __typename?: 'Worker' }
            & Pick<Worker, 'id' | 'name' | 'availability'>
          )> }
        )>>> }
      )>>>, boards: Maybe<Array<Maybe<(
        { __typename?: 'Board' }
        & Pick<Board, 'id' | 'title' | 'order'>
        & { columns: Maybe<Array<Maybe<(
          { __typename?: 'Column' }
          & Pick<Column, 'id' | 'title' | 'taskIds'>
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
        & { worker: Maybe<(
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
        )> }
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
          & { worker: Maybe<(
            { __typename?: 'Worker' }
            & Pick<Worker, 'id' | 'name' | 'availability'>
          )> }
        )>>> }
      )>>> }
    )>>> }
  )> }
);

export type GetBoardQueryVariables = {
  filter?: Maybe<ColumnFilter>,
  order?: Maybe<ColumnOrder>,
  first?: Maybe<Scalars['Int']>,
  offset?: Maybe<Scalars['Int']>,
  id: Scalars['ID']
};


export type GetBoardQuery = (
  { __typename?: 'Query' }
  & { getBoard: Maybe<(
    { __typename?: 'Board' }
    & Pick<Board, 'id' | 'title' | 'order'>
    & { columns: Maybe<Array<Maybe<(
      { __typename?: 'Column' }
      & Pick<Column, 'id' | 'title' | 'taskIds'>
    )>>> }
  )> }
);

export type GetColumnQueryVariables = {
  id: Scalars['ID']
};


export type GetColumnQuery = (
  { __typename?: 'Query' }
  & { getColumn: Maybe<(
    { __typename?: 'Column' }
    & Pick<Column, 'id' | 'title' | 'taskIds'>
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
    & { worker: Maybe<(
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
          & { worker: Maybe<(
            { __typename?: 'Worker' }
            & Pick<Worker, 'id' | 'name' | 'availability'>
          )> }
        )>>> }
      )>>> }
    )> }
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
  filter9?: Maybe<ColumnFilter>,
  order8?: Maybe<ColumnOrder>,
  first8?: Maybe<Scalars['Int']>,
  offset8?: Maybe<Scalars['Int']>,
  filter10?: Maybe<BoardFilter>,
  order9?: Maybe<BoardOrder>,
  first9?: Maybe<Scalars['Int']>,
  offset9?: Maybe<Scalars['Int']>,
  filter11?: Maybe<UserFilter>,
  filter12?: Maybe<TagFilter>,
  order10?: Maybe<TagOrder>,
  first10?: Maybe<Scalars['Int']>,
  offset10?: Maybe<Scalars['Int']>,
  filter13?: Maybe<TaskFilter>,
  order11?: Maybe<TaskOrder>,
  first11?: Maybe<Scalars['Int']>,
  offset11?: Maybe<Scalars['Int']>,
  filter14?: Maybe<WorkerFilter>,
  order12?: Maybe<WorkerOrder>,
  first12?: Maybe<Scalars['Int']>,
  offset12?: Maybe<Scalars['Int']>,
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
        & Pick<Column, 'id' | 'title' | 'taskIds'>
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
          & { worker: Maybe<(
            { __typename?: 'Worker' }
            & Pick<Worker, 'id' | 'name' | 'availability'>
          )> }
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
  filter?: Maybe<ColumnFilter>,
  order?: Maybe<ColumnOrder>,
  first?: Maybe<Scalars['Int']>,
  offset?: Maybe<Scalars['Int']>,
  filter1?: Maybe<BoardFilter>,
  order1?: Maybe<BoardOrder>,
  first1?: Maybe<Scalars['Int']>,
  offset1?: Maybe<Scalars['Int']>
};


export type QueryBoardQuery = (
  { __typename?: 'Query' }
  & { queryBoard: Maybe<Array<Maybe<(
    { __typename?: 'Board' }
    & Pick<Board, 'id' | 'title' | 'order'>
    & { columns: Maybe<Array<Maybe<(
      { __typename?: 'Column' }
      & Pick<Column, 'id' | 'title' | 'taskIds'>
    )>>> }
  )>>> }
);

export type QueryColumnQueryVariables = {
  filter?: Maybe<ColumnFilter>,
  order?: Maybe<ColumnOrder>,
  first?: Maybe<Scalars['Int']>,
  offset?: Maybe<Scalars['Int']>
};


export type QueryColumnQuery = (
  { __typename?: 'Query' }
  & { queryColumn: Maybe<Array<Maybe<(
    { __typename?: 'Column' }
    & Pick<Column, 'id' | 'title' | 'taskIds'>
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
    & { worker: Maybe<(
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
          & { worker: Maybe<(
            { __typename?: 'Worker' }
            & Pick<Worker, 'id' | 'name' | 'availability'>
          )> }
        )>>> }
      )>>> }
    )> }
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
  filter9?: Maybe<ColumnFilter>,
  order8?: Maybe<ColumnOrder>,
  first8?: Maybe<Scalars['Int']>,
  offset8?: Maybe<Scalars['Int']>,
  filter10?: Maybe<BoardFilter>,
  order9?: Maybe<BoardOrder>,
  first9?: Maybe<Scalars['Int']>,
  offset9?: Maybe<Scalars['Int']>,
  filter11?: Maybe<UserFilter>,
  filter12?: Maybe<TagFilter>,
  order10?: Maybe<TagOrder>,
  first10?: Maybe<Scalars['Int']>,
  offset10?: Maybe<Scalars['Int']>,
  filter13?: Maybe<TaskFilter>,
  order11?: Maybe<TaskOrder>,
  first11?: Maybe<Scalars['Int']>,
  offset11?: Maybe<Scalars['Int']>,
  filter14?: Maybe<WorkerFilter>,
  order12?: Maybe<WorkerOrder>,
  first12?: Maybe<Scalars['Int']>,
  offset12?: Maybe<Scalars['Int']>,
  filter15?: Maybe<ProjectFilter>,
  order13?: Maybe<ProjectOrder>,
  first13?: Maybe<Scalars['Int']>,
  offset13?: Maybe<Scalars['Int']>
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
        & Pick<Column, 'id' | 'title' | 'taskIds'>
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
          & { worker: Maybe<(
            { __typename?: 'Worker' }
            & Pick<Worker, 'id' | 'name' | 'availability'>
          )> }
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
