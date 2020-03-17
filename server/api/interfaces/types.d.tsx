export type Maybe<T> = T | null;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  DateTime: any;
};

export type AddBoardInput = {
  project: ProjectRef;
  title: Scalars['String'];
  columns?: Maybe<Array<Maybe<ColumnRef>>>;
  order?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type AddBoardPayload = {
   __typename?: 'AddBoardPayload';
  board?: Maybe<Array<Maybe<Board>>>;
  numUids?: Maybe<Scalars['Int']>;
};


export type AddBoardPayloadBoardArgs = {
  filter?: Maybe<BoardFilter>;
  order?: Maybe<BoardOrder>;
  first?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
};

export type AddColumnInput = {
  board: BoardRef;
  title: Scalars['String'];
  tasks?: Maybe<Array<Maybe<TaskRef>>>;
};

export type AddColumnPayload = {
   __typename?: 'AddColumnPayload';
  column?: Maybe<Array<Maybe<Column>>>;
  numUids?: Maybe<Scalars['Int']>;
};


export type AddColumnPayloadColumnArgs = {
  filter?: Maybe<ColumnFilter>;
  order?: Maybe<ColumnOrder>;
  first?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
};

export type AddCommentInput = {
  task: TaskRef;
  developer: DeveloperRef;
  content: Scalars['String'];
};

export type AddCommentPayload = {
   __typename?: 'AddCommentPayload';
  comment?: Maybe<Array<Maybe<Comment>>>;
  numUids?: Maybe<Scalars['Int']>;
};


export type AddCommentPayloadCommentArgs = {
  filter?: Maybe<CommentFilter>;
  order?: Maybe<CommentOrder>;
  first?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
};

export type AddDeveloperInput = {
  project: ProjectRef;
  name: Scalars['String'];
  availability: Scalars['Int'];
  user?: Maybe<Array<Maybe<UserRef>>>;
  tags?: Maybe<Array<Maybe<TagRef>>>;
  tasks?: Maybe<Array<Maybe<TaskRef>>>;
  liked?: Maybe<Array<Maybe<TaskRef>>>;
};

export type AddDeveloperPayload = {
   __typename?: 'AddDeveloperPayload';
  developer?: Maybe<Array<Maybe<Developer>>>;
  numUids?: Maybe<Scalars['Int']>;
};


export type AddDeveloperPayloadDeveloperArgs = {
  filter?: Maybe<DeveloperFilter>;
  order?: Maybe<DeveloperOrder>;
  first?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
};

export type AddProjectInput = {
  title: Scalars['String'];
  description: Scalars['String'];
  tags?: Maybe<Array<Maybe<TagRef>>>;
  tasks?: Maybe<Array<Maybe<TaskRef>>>;
  boards?: Maybe<Array<Maybe<BoardRef>>>;
  developers?: Maybe<Array<Maybe<DeveloperRef>>>;
};

export type AddProjectPayload = {
   __typename?: 'AddProjectPayload';
  project?: Maybe<Array<Maybe<Project>>>;
  numUids?: Maybe<Scalars['Int']>;
};


export type AddProjectPayloadProjectArgs = {
  filter?: Maybe<ProjectFilter>;
  order?: Maybe<ProjectOrder>;
  first?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
};

export type AddTagInput = {
  title: Scalars['String'];
  project: ProjectRef;
  developers?: Maybe<Array<Maybe<DeveloperRef>>>;
};

export type AddTagPayload = {
   __typename?: 'AddTagPayload';
  tag?: Maybe<Array<Maybe<Tag>>>;
  numUids?: Maybe<Scalars['Int']>;
};


export type AddTagPayloadTagArgs = {
  filter?: Maybe<TagFilter>;
  order?: Maybe<TagOrder>;
  first?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
};

export type AddTaskInput = {
  project: ProjectRef;
  column?: Maybe<ColumnRef>;
  title: Scalars['String'];
  developers?: Maybe<Array<Maybe<DeveloperRef>>>;
  hours: Scalars['Int'];
  deadline: Scalars['String'];
  content: Scalars['String'];
  priority: Scalars['Int'];
  complete: Scalars['Boolean'];
  likes?: Maybe<Array<Maybe<DeveloperRef>>>;
  comments?: Maybe<Array<Maybe<CommentRef>>>;
};

export type AddTaskPayload = {
   __typename?: 'AddTaskPayload';
  task?: Maybe<Array<Maybe<Task>>>;
  numUids?: Maybe<Scalars['Int']>;
};


export type AddTaskPayloadTaskArgs = {
  filter?: Maybe<TaskFilter>;
  order?: Maybe<TaskOrder>;
  first?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
};

export type AddUserInput = {
  username: Scalars['String'];
  password: Scalars['String'];
  location: Scalars['String'];
  roles?: Maybe<Array<Maybe<DeveloperRef>>>;
  stars?: Maybe<Array<Maybe<TaskRef>>>;
};

export type AddUserPayload = {
   __typename?: 'AddUserPayload';
  user?: Maybe<Array<Maybe<User>>>;
  numUids?: Maybe<Scalars['Int']>;
};


export type AddUserPayloadUserArgs = {
  filter?: Maybe<UserFilter>;
  order?: Maybe<UserOrder>;
  first?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
};

export type Board = {
   __typename?: 'Board';
  id: Scalars['ID'];
  project: Project;
  title: Scalars['String'];
  columns?: Maybe<Array<Maybe<Column>>>;
  order?: Maybe<Array<Maybe<Scalars['String']>>>;
};


export type BoardProjectArgs = {
  filter?: Maybe<ProjectFilter>;
};


export type BoardColumnsArgs = {
  filter?: Maybe<ColumnFilter>;
  order?: Maybe<ColumnOrder>;
  first?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
};

export type BoardFilter = {
  id?: Maybe<Array<Scalars['ID']>>;
  not?: Maybe<BoardFilter>;
};

export type BoardOrder = {
  asc?: Maybe<BoardOrderable>;
  desc?: Maybe<BoardOrderable>;
  then?: Maybe<BoardOrder>;
};

export enum BoardOrderable {
  Title = 'title',
  Order = 'order'
}

export type BoardPatch = {
  project?: Maybe<ProjectRef>;
  title?: Maybe<Scalars['String']>;
  columns?: Maybe<Array<Maybe<ColumnRef>>>;
  order?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type BoardRef = {
  id?: Maybe<Scalars['ID']>;
  project?: Maybe<ProjectRef>;
  title?: Maybe<Scalars['String']>;
  columns?: Maybe<Array<Maybe<ColumnRef>>>;
  order?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type Column = {
   __typename?: 'Column';
  id: Scalars['ID'];
  board: Board;
  title: Scalars['String'];
  tasks?: Maybe<Array<Maybe<Task>>>;
};


export type ColumnBoardArgs = {
  filter?: Maybe<BoardFilter>;
};


export type ColumnTasksArgs = {
  filter?: Maybe<TaskFilter>;
  order?: Maybe<TaskOrder>;
  first?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
};

export type ColumnFilter = {
  id?: Maybe<Array<Scalars['ID']>>;
  not?: Maybe<ColumnFilter>;
};

export type ColumnOrder = {
  asc?: Maybe<ColumnOrderable>;
  desc?: Maybe<ColumnOrderable>;
  then?: Maybe<ColumnOrder>;
};

export enum ColumnOrderable {
  Title = 'title'
}

export type ColumnPatch = {
  board?: Maybe<BoardRef>;
  title?: Maybe<Scalars['String']>;
  tasks?: Maybe<Array<Maybe<TaskRef>>>;
};

export type ColumnRef = {
  id?: Maybe<Scalars['ID']>;
  board?: Maybe<BoardRef>;
  title?: Maybe<Scalars['String']>;
  tasks?: Maybe<Array<Maybe<TaskRef>>>;
};

export type Comment = {
   __typename?: 'Comment';
  id: Scalars['ID'];
  task: Task;
  developer: Developer;
  content: Scalars['String'];
};


export type CommentTaskArgs = {
  filter?: Maybe<TaskFilter>;
};


export type CommentDeveloperArgs = {
  filter?: Maybe<DeveloperFilter>;
};

export type CommentFilter = {
  id?: Maybe<Array<Scalars['ID']>>;
  not?: Maybe<CommentFilter>;
};

export type CommentOrder = {
  asc?: Maybe<CommentOrderable>;
  desc?: Maybe<CommentOrderable>;
  then?: Maybe<CommentOrder>;
};

export enum CommentOrderable {
  Content = 'content'
}

export type CommentPatch = {
  task?: Maybe<TaskRef>;
  developer?: Maybe<DeveloperRef>;
  content?: Maybe<Scalars['String']>;
};

export type CommentRef = {
  id?: Maybe<Scalars['ID']>;
  task?: Maybe<TaskRef>;
  developer?: Maybe<DeveloperRef>;
  content?: Maybe<Scalars['String']>;
};


export type DateTimeFilter = {
  eq?: Maybe<Scalars['DateTime']>;
  le?: Maybe<Scalars['DateTime']>;
  lt?: Maybe<Scalars['DateTime']>;
  ge?: Maybe<Scalars['DateTime']>;
  gt?: Maybe<Scalars['DateTime']>;
};

export type DeleteBoardPayload = {
   __typename?: 'DeleteBoardPayload';
  msg?: Maybe<Scalars['String']>;
  numUids?: Maybe<Scalars['Int']>;
};

export type DeleteColumnPayload = {
   __typename?: 'DeleteColumnPayload';
  msg?: Maybe<Scalars['String']>;
  numUids?: Maybe<Scalars['Int']>;
};

export type DeleteCommentPayload = {
   __typename?: 'DeleteCommentPayload';
  msg?: Maybe<Scalars['String']>;
  numUids?: Maybe<Scalars['Int']>;
};

export type DeleteDeveloperPayload = {
   __typename?: 'DeleteDeveloperPayload';
  msg?: Maybe<Scalars['String']>;
  numUids?: Maybe<Scalars['Int']>;
};

export type DeleteProjectPayload = {
   __typename?: 'DeleteProjectPayload';
  msg?: Maybe<Scalars['String']>;
  numUids?: Maybe<Scalars['Int']>;
};

export type DeleteTagPayload = {
   __typename?: 'DeleteTagPayload';
  msg?: Maybe<Scalars['String']>;
  numUids?: Maybe<Scalars['Int']>;
};

export type DeleteTaskPayload = {
   __typename?: 'DeleteTaskPayload';
  msg?: Maybe<Scalars['String']>;
  numUids?: Maybe<Scalars['Int']>;
};

export type DeleteUserPayload = {
   __typename?: 'DeleteUserPayload';
  msg?: Maybe<Scalars['String']>;
  numUids?: Maybe<Scalars['Int']>;
};

export type Developer = {
   __typename?: 'Developer';
  id: Scalars['ID'];
  project: Project;
  name: Scalars['String'];
  availability: Scalars['Int'];
  user?: Maybe<Array<Maybe<User>>>;
  tags?: Maybe<Array<Maybe<Tag>>>;
  tasks?: Maybe<Array<Maybe<Task>>>;
  liked?: Maybe<Array<Maybe<Task>>>;
};


export type DeveloperProjectArgs = {
  filter?: Maybe<ProjectFilter>;
};


export type DeveloperUserArgs = {
  filter?: Maybe<UserFilter>;
  order?: Maybe<UserOrder>;
  first?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
};


export type DeveloperTagsArgs = {
  filter?: Maybe<TagFilter>;
  order?: Maybe<TagOrder>;
  first?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
};


export type DeveloperTasksArgs = {
  filter?: Maybe<TaskFilter>;
  order?: Maybe<TaskOrder>;
  first?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
};


export type DeveloperLikedArgs = {
  filter?: Maybe<TaskFilter>;
  order?: Maybe<TaskOrder>;
  first?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
};

export type DeveloperFilter = {
  id?: Maybe<Array<Scalars['ID']>>;
  name?: Maybe<StringHashFilter>;
  and?: Maybe<DeveloperFilter>;
  or?: Maybe<DeveloperFilter>;
  not?: Maybe<DeveloperFilter>;
};

export type DeveloperOrder = {
  asc?: Maybe<DeveloperOrderable>;
  desc?: Maybe<DeveloperOrderable>;
  then?: Maybe<DeveloperOrder>;
};

export enum DeveloperOrderable {
  Name = 'name',
  Availability = 'availability'
}

export type DeveloperPatch = {
  project?: Maybe<ProjectRef>;
  name?: Maybe<Scalars['String']>;
  availability?: Maybe<Scalars['Int']>;
  user?: Maybe<Array<Maybe<UserRef>>>;
  tags?: Maybe<Array<Maybe<TagRef>>>;
  tasks?: Maybe<Array<Maybe<TaskRef>>>;
  liked?: Maybe<Array<Maybe<TaskRef>>>;
};

export type DeveloperRef = {
  id?: Maybe<Scalars['ID']>;
  project?: Maybe<ProjectRef>;
  name?: Maybe<Scalars['String']>;
  availability?: Maybe<Scalars['Int']>;
  user?: Maybe<Array<Maybe<UserRef>>>;
  tags?: Maybe<Array<Maybe<TagRef>>>;
  tasks?: Maybe<Array<Maybe<TaskRef>>>;
  liked?: Maybe<Array<Maybe<TaskRef>>>;
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
  eq?: Maybe<Scalars['Float']>;
  le?: Maybe<Scalars['Float']>;
  lt?: Maybe<Scalars['Float']>;
  ge?: Maybe<Scalars['Float']>;
  gt?: Maybe<Scalars['Float']>;
};

export type IntFilter = {
  eq?: Maybe<Scalars['Int']>;
  le?: Maybe<Scalars['Int']>;
  lt?: Maybe<Scalars['Int']>;
  ge?: Maybe<Scalars['Int']>;
  gt?: Maybe<Scalars['Int']>;
};

export type Mutation = {
   __typename?: 'Mutation';
  addComment?: Maybe<AddCommentPayload>;
  updateComment?: Maybe<UpdateCommentPayload>;
  deleteComment?: Maybe<DeleteCommentPayload>;
  addTag?: Maybe<AddTagPayload>;
  updateTag?: Maybe<UpdateTagPayload>;
  deleteTag?: Maybe<DeleteTagPayload>;
  addTask?: Maybe<AddTaskPayload>;
  updateTask?: Maybe<UpdateTaskPayload>;
  deleteTask?: Maybe<DeleteTaskPayload>;
  addColumn?: Maybe<AddColumnPayload>;
  updateColumn?: Maybe<UpdateColumnPayload>;
  deleteColumn?: Maybe<DeleteColumnPayload>;
  addBoard?: Maybe<AddBoardPayload>;
  updateBoard?: Maybe<UpdateBoardPayload>;
  deleteBoard?: Maybe<DeleteBoardPayload>;
  addDeveloper?: Maybe<AddDeveloperPayload>;
  updateDeveloper?: Maybe<UpdateDeveloperPayload>;
  deleteDeveloper?: Maybe<DeleteDeveloperPayload>;
  addUser?: Maybe<AddUserPayload>;
  updateUser?: Maybe<UpdateUserPayload>;
  deleteUser?: Maybe<DeleteUserPayload>;
  addProject?: Maybe<AddProjectPayload>;
  updateProject?: Maybe<UpdateProjectPayload>;
  deleteProject?: Maybe<DeleteProjectPayload>;
};


export type MutationAddCommentArgs = {
  input: Array<AddCommentInput>;
};


export type MutationUpdateCommentArgs = {
  input: UpdateCommentInput;
};


export type MutationDeleteCommentArgs = {
  filter: CommentFilter;
};


export type MutationAddTagArgs = {
  input: Array<AddTagInput>;
};


export type MutationUpdateTagArgs = {
  input: UpdateTagInput;
};


export type MutationDeleteTagArgs = {
  filter: TagFilter;
};


export type MutationAddTaskArgs = {
  input: Array<AddTaskInput>;
};


export type MutationUpdateTaskArgs = {
  input: UpdateTaskInput;
};


export type MutationDeleteTaskArgs = {
  filter: TaskFilter;
};


export type MutationAddColumnArgs = {
  input: Array<AddColumnInput>;
};


export type MutationUpdateColumnArgs = {
  input: UpdateColumnInput;
};


export type MutationDeleteColumnArgs = {
  filter: ColumnFilter;
};


export type MutationAddBoardArgs = {
  input: Array<AddBoardInput>;
};


export type MutationUpdateBoardArgs = {
  input: UpdateBoardInput;
};


export type MutationDeleteBoardArgs = {
  filter: BoardFilter;
};


export type MutationAddDeveloperArgs = {
  input: Array<AddDeveloperInput>;
};


export type MutationUpdateDeveloperArgs = {
  input: UpdateDeveloperInput;
};


export type MutationDeleteDeveloperArgs = {
  filter: DeveloperFilter;
};


export type MutationAddUserArgs = {
  input: Array<AddUserInput>;
};


export type MutationUpdateUserArgs = {
  input: UpdateUserInput;
};


export type MutationDeleteUserArgs = {
  filter: UserFilter;
};


export type MutationAddProjectArgs = {
  input: Array<AddProjectInput>;
};


export type MutationUpdateProjectArgs = {
  input: UpdateProjectInput;
};


export type MutationDeleteProjectArgs = {
  filter: ProjectFilter;
};

export type Project = {
   __typename?: 'Project';
  id: Scalars['ID'];
  title: Scalars['String'];
  description: Scalars['String'];
  tags?: Maybe<Array<Maybe<Tag>>>;
  tasks?: Maybe<Array<Maybe<Task>>>;
  boards?: Maybe<Array<Maybe<Board>>>;
  developers?: Maybe<Array<Maybe<Developer>>>;
};


export type ProjectTagsArgs = {
  filter?: Maybe<TagFilter>;
  order?: Maybe<TagOrder>;
  first?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
};


export type ProjectTasksArgs = {
  filter?: Maybe<TaskFilter>;
  order?: Maybe<TaskOrder>;
  first?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
};


export type ProjectBoardsArgs = {
  filter?: Maybe<BoardFilter>;
  order?: Maybe<BoardOrder>;
  first?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
};


export type ProjectDevelopersArgs = {
  filter?: Maybe<DeveloperFilter>;
  order?: Maybe<DeveloperOrder>;
  first?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
};

export type ProjectFilter = {
  id?: Maybe<Array<Scalars['ID']>>;
  title?: Maybe<StringHashFilter>;
  and?: Maybe<ProjectFilter>;
  or?: Maybe<ProjectFilter>;
  not?: Maybe<ProjectFilter>;
};

export type ProjectOrder = {
  asc?: Maybe<ProjectOrderable>;
  desc?: Maybe<ProjectOrderable>;
  then?: Maybe<ProjectOrder>;
};

export enum ProjectOrderable {
  Title = 'title',
  Description = 'description'
}

export type ProjectPatch = {
  title?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  tags?: Maybe<Array<Maybe<TagRef>>>;
  tasks?: Maybe<Array<Maybe<TaskRef>>>;
  boards?: Maybe<Array<Maybe<BoardRef>>>;
  developers?: Maybe<Array<Maybe<DeveloperRef>>>;
};

export type ProjectRef = {
  id?: Maybe<Scalars['ID']>;
  title?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  tags?: Maybe<Array<Maybe<TagRef>>>;
  tasks?: Maybe<Array<Maybe<TaskRef>>>;
  boards?: Maybe<Array<Maybe<BoardRef>>>;
  developers?: Maybe<Array<Maybe<DeveloperRef>>>;
};

export type Query = {
   __typename?: 'Query';
  getComment?: Maybe<Comment>;
  queryComment?: Maybe<Array<Maybe<Comment>>>;
  getTag?: Maybe<Tag>;
  queryTag?: Maybe<Array<Maybe<Tag>>>;
  getTask?: Maybe<Task>;
  queryTask?: Maybe<Array<Maybe<Task>>>;
  getColumn?: Maybe<Column>;
  queryColumn?: Maybe<Array<Maybe<Column>>>;
  getBoard?: Maybe<Board>;
  queryBoard?: Maybe<Array<Maybe<Board>>>;
  getDeveloper?: Maybe<Developer>;
  queryDeveloper?: Maybe<Array<Maybe<Developer>>>;
  getUser?: Maybe<User>;
  queryUser?: Maybe<Array<Maybe<User>>>;
  getProject?: Maybe<Project>;
  queryProject?: Maybe<Array<Maybe<Project>>>;
};


export type QueryGetCommentArgs = {
  id: Scalars['ID'];
};


export type QueryQueryCommentArgs = {
  filter?: Maybe<CommentFilter>;
  order?: Maybe<CommentOrder>;
  first?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
};


export type QueryGetTagArgs = {
  id: Scalars['ID'];
};


export type QueryQueryTagArgs = {
  filter?: Maybe<TagFilter>;
  order?: Maybe<TagOrder>;
  first?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
};


export type QueryGetTaskArgs = {
  id: Scalars['ID'];
};


export type QueryQueryTaskArgs = {
  filter?: Maybe<TaskFilter>;
  order?: Maybe<TaskOrder>;
  first?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
};


export type QueryGetColumnArgs = {
  id: Scalars['ID'];
};


export type QueryQueryColumnArgs = {
  filter?: Maybe<ColumnFilter>;
  order?: Maybe<ColumnOrder>;
  first?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
};


export type QueryGetBoardArgs = {
  id: Scalars['ID'];
};


export type QueryQueryBoardArgs = {
  filter?: Maybe<BoardFilter>;
  order?: Maybe<BoardOrder>;
  first?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
};


export type QueryGetDeveloperArgs = {
  id: Scalars['ID'];
};


export type QueryQueryDeveloperArgs = {
  filter?: Maybe<DeveloperFilter>;
  order?: Maybe<DeveloperOrder>;
  first?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
};


export type QueryGetUserArgs = {
  id: Scalars['ID'];
};


export type QueryQueryUserArgs = {
  filter?: Maybe<UserFilter>;
  order?: Maybe<UserOrder>;
  first?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
};


export type QueryGetProjectArgs = {
  id: Scalars['ID'];
};


export type QueryQueryProjectArgs = {
  filter?: Maybe<ProjectFilter>;
  order?: Maybe<ProjectOrder>;
  first?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
};

export type StringExactFilter = {
  eq?: Maybe<Scalars['String']>;
  le?: Maybe<Scalars['String']>;
  lt?: Maybe<Scalars['String']>;
  ge?: Maybe<Scalars['String']>;
  gt?: Maybe<Scalars['String']>;
};

export type StringFullTextFilter = {
  alloftext?: Maybe<Scalars['String']>;
  anyoftext?: Maybe<Scalars['String']>;
};

export type StringHashFilter = {
  eq?: Maybe<Scalars['String']>;
};

export type StringRegExpFilter = {
  regexp?: Maybe<Scalars['String']>;
};

export type StringTermFilter = {
  allofterms?: Maybe<Scalars['String']>;
  anyofterms?: Maybe<Scalars['String']>;
};

export type Tag = {
   __typename?: 'Tag';
  id: Scalars['ID'];
  title: Scalars['String'];
  project: Project;
  developers?: Maybe<Array<Maybe<Developer>>>;
};


export type TagProjectArgs = {
  filter?: Maybe<ProjectFilter>;
};


export type TagDevelopersArgs = {
  filter?: Maybe<DeveloperFilter>;
  order?: Maybe<DeveloperOrder>;
  first?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
};

export type TagFilter = {
  id?: Maybe<Array<Scalars['ID']>>;
  not?: Maybe<TagFilter>;
};

export type TagOrder = {
  asc?: Maybe<TagOrderable>;
  desc?: Maybe<TagOrderable>;
  then?: Maybe<TagOrder>;
};

export enum TagOrderable {
  Title = 'title'
}

export type TagPatch = {
  title?: Maybe<Scalars['String']>;
  project?: Maybe<ProjectRef>;
  developers?: Maybe<Array<Maybe<DeveloperRef>>>;
};

export type TagRef = {
  id?: Maybe<Scalars['ID']>;
  title?: Maybe<Scalars['String']>;
  project?: Maybe<ProjectRef>;
  developers?: Maybe<Array<Maybe<DeveloperRef>>>;
};

export type Task = {
   __typename?: 'Task';
  id: Scalars['ID'];
  project: Project;
  column?: Maybe<Column>;
  title: Scalars['String'];
  developers?: Maybe<Array<Maybe<Developer>>>;
  hours: Scalars['Int'];
  deadline: Scalars['String'];
  content: Scalars['String'];
  priority: Scalars['Int'];
  complete: Scalars['Boolean'];
  likes?: Maybe<Array<Maybe<Developer>>>;
  comments?: Maybe<Array<Maybe<Comment>>>;
};


export type TaskProjectArgs = {
  filter?: Maybe<ProjectFilter>;
};


export type TaskColumnArgs = {
  filter?: Maybe<ColumnFilter>;
};


export type TaskDevelopersArgs = {
  filter?: Maybe<DeveloperFilter>;
  order?: Maybe<DeveloperOrder>;
  first?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
};


export type TaskLikesArgs = {
  filter?: Maybe<DeveloperFilter>;
  order?: Maybe<DeveloperOrder>;
  first?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
};


export type TaskCommentsArgs = {
  filter?: Maybe<CommentFilter>;
  order?: Maybe<CommentOrder>;
  first?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
};

export type TaskFilter = {
  id?: Maybe<Array<Scalars['ID']>>;
  title?: Maybe<StringHashFilter>;
  and?: Maybe<TaskFilter>;
  or?: Maybe<TaskFilter>;
  not?: Maybe<TaskFilter>;
};

export type TaskOrder = {
  asc?: Maybe<TaskOrderable>;
  desc?: Maybe<TaskOrderable>;
  then?: Maybe<TaskOrder>;
};

export enum TaskOrderable {
  Title = 'title',
  Hours = 'hours',
  Deadline = 'deadline',
  Content = 'content',
  Priority = 'priority'
}

export type TaskPatch = {
  project?: Maybe<ProjectRef>;
  column?: Maybe<ColumnRef>;
  title?: Maybe<Scalars['String']>;
  developers?: Maybe<Array<Maybe<DeveloperRef>>>;
  hours?: Maybe<Scalars['Int']>;
  deadline?: Maybe<Scalars['String']>;
  content?: Maybe<Scalars['String']>;
  priority?: Maybe<Scalars['Int']>;
  complete?: Maybe<Scalars['Boolean']>;
  likes?: Maybe<Array<Maybe<DeveloperRef>>>;
  comments?: Maybe<Array<Maybe<CommentRef>>>;
};

export type TaskRef = {
  id?: Maybe<Scalars['ID']>;
  project?: Maybe<ProjectRef>;
  column?: Maybe<ColumnRef>;
  title?: Maybe<Scalars['String']>;
  developers?: Maybe<Array<Maybe<DeveloperRef>>>;
  hours?: Maybe<Scalars['Int']>;
  deadline?: Maybe<Scalars['String']>;
  content?: Maybe<Scalars['String']>;
  priority?: Maybe<Scalars['Int']>;
  complete?: Maybe<Scalars['Boolean']>;
  likes?: Maybe<Array<Maybe<DeveloperRef>>>;
  comments?: Maybe<Array<Maybe<CommentRef>>>;
};

export type UpdateBoardInput = {
  filter: BoardFilter;
  set?: Maybe<BoardPatch>;
  remove?: Maybe<BoardPatch>;
};

export type UpdateBoardPayload = {
   __typename?: 'UpdateBoardPayload';
  board?: Maybe<Array<Maybe<Board>>>;
  numUids?: Maybe<Scalars['Int']>;
};


export type UpdateBoardPayloadBoardArgs = {
  filter?: Maybe<BoardFilter>;
  order?: Maybe<BoardOrder>;
  first?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
};

export type UpdateColumnInput = {
  filter: ColumnFilter;
  set?: Maybe<ColumnPatch>;
  remove?: Maybe<ColumnPatch>;
};

export type UpdateColumnPayload = {
   __typename?: 'UpdateColumnPayload';
  column?: Maybe<Array<Maybe<Column>>>;
  numUids?: Maybe<Scalars['Int']>;
};


export type UpdateColumnPayloadColumnArgs = {
  filter?: Maybe<ColumnFilter>;
  order?: Maybe<ColumnOrder>;
  first?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
};

export type UpdateCommentInput = {
  filter: CommentFilter;
  set?: Maybe<CommentPatch>;
  remove?: Maybe<CommentPatch>;
};

export type UpdateCommentPayload = {
   __typename?: 'UpdateCommentPayload';
  comment?: Maybe<Array<Maybe<Comment>>>;
  numUids?: Maybe<Scalars['Int']>;
};


export type UpdateCommentPayloadCommentArgs = {
  filter?: Maybe<CommentFilter>;
  order?: Maybe<CommentOrder>;
  first?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
};

export type UpdateDeveloperInput = {
  filter: DeveloperFilter;
  set?: Maybe<DeveloperPatch>;
  remove?: Maybe<DeveloperPatch>;
};

export type UpdateDeveloperPayload = {
   __typename?: 'UpdateDeveloperPayload';
  developer?: Maybe<Array<Maybe<Developer>>>;
  numUids?: Maybe<Scalars['Int']>;
};


export type UpdateDeveloperPayloadDeveloperArgs = {
  filter?: Maybe<DeveloperFilter>;
  order?: Maybe<DeveloperOrder>;
  first?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
};

export type UpdateProjectInput = {
  filter: ProjectFilter;
  set?: Maybe<ProjectPatch>;
  remove?: Maybe<ProjectPatch>;
};

export type UpdateProjectPayload = {
   __typename?: 'UpdateProjectPayload';
  project?: Maybe<Array<Maybe<Project>>>;
  numUids?: Maybe<Scalars['Int']>;
};


export type UpdateProjectPayloadProjectArgs = {
  filter?: Maybe<ProjectFilter>;
  order?: Maybe<ProjectOrder>;
  first?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
};

export type UpdateTagInput = {
  filter: TagFilter;
  set?: Maybe<TagPatch>;
  remove?: Maybe<TagPatch>;
};

export type UpdateTagPayload = {
   __typename?: 'UpdateTagPayload';
  tag?: Maybe<Array<Maybe<Tag>>>;
  numUids?: Maybe<Scalars['Int']>;
};


export type UpdateTagPayloadTagArgs = {
  filter?: Maybe<TagFilter>;
  order?: Maybe<TagOrder>;
  first?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
};

export type UpdateTaskInput = {
  filter: TaskFilter;
  set?: Maybe<TaskPatch>;
  remove?: Maybe<TaskPatch>;
};

export type UpdateTaskPayload = {
   __typename?: 'UpdateTaskPayload';
  task?: Maybe<Array<Maybe<Task>>>;
  numUids?: Maybe<Scalars['Int']>;
};


export type UpdateTaskPayloadTaskArgs = {
  filter?: Maybe<TaskFilter>;
  order?: Maybe<TaskOrder>;
  first?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
};

export type UpdateUserInput = {
  filter: UserFilter;
  set?: Maybe<UserPatch>;
  remove?: Maybe<UserPatch>;
};

export type UpdateUserPayload = {
   __typename?: 'UpdateUserPayload';
  user?: Maybe<Array<Maybe<User>>>;
  numUids?: Maybe<Scalars['Int']>;
};


export type UpdateUserPayloadUserArgs = {
  filter?: Maybe<UserFilter>;
  order?: Maybe<UserOrder>;
  first?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
};

export type User = {
   __typename?: 'User';
  id: Scalars['ID'];
  username: Scalars['String'];
  password: Scalars['String'];
  location: Scalars['String'];
  roles?: Maybe<Array<Maybe<Developer>>>;
  stars?: Maybe<Array<Maybe<Task>>>;
};


export type UserRolesArgs = {
  filter?: Maybe<DeveloperFilter>;
  order?: Maybe<DeveloperOrder>;
  first?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
};


export type UserStarsArgs = {
  filter?: Maybe<TaskFilter>;
  order?: Maybe<TaskOrder>;
  first?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
};

export type UserFilter = {
  id?: Maybe<Array<Scalars['ID']>>;
  username?: Maybe<StringHashFilter>;
  and?: Maybe<UserFilter>;
  or?: Maybe<UserFilter>;
  not?: Maybe<UserFilter>;
};

export type UserOrder = {
  asc?: Maybe<UserOrderable>;
  desc?: Maybe<UserOrderable>;
  then?: Maybe<UserOrder>;
};

export enum UserOrderable {
  Username = 'username',
  Password = 'password',
  Location = 'location'
}

export type UserPatch = {
  username?: Maybe<Scalars['String']>;
  password?: Maybe<Scalars['String']>;
  location?: Maybe<Scalars['String']>;
  roles?: Maybe<Array<Maybe<DeveloperRef>>>;
  stars?: Maybe<Array<Maybe<TaskRef>>>;
};

export type UserRef = {
  id?: Maybe<Scalars['ID']>;
  username?: Maybe<Scalars['String']>;
  password?: Maybe<Scalars['String']>;
  location?: Maybe<Scalars['String']>;
  roles?: Maybe<Array<Maybe<DeveloperRef>>>;
  stars?: Maybe<Array<Maybe<TaskRef>>>;
};

export type AddBoardMutationVariables = {
  filter?: Maybe<ProjectFilter>;
  filter1?: Maybe<DeveloperFilter>;
  order?: Maybe<DeveloperOrder>;
  first?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  filter2?: Maybe<TagFilter>;
  order1?: Maybe<TagOrder>;
  first1?: Maybe<Scalars['Int']>;
  offset1?: Maybe<Scalars['Int']>;
  filter3?: Maybe<ProjectFilter>;
  filter4?: Maybe<ColumnFilter>;
  filter5?: Maybe<DeveloperFilter>;
  order2?: Maybe<DeveloperOrder>;
  first2?: Maybe<Scalars['Int']>;
  offset2?: Maybe<Scalars['Int']>;
  filter6?: Maybe<DeveloperFilter>;
  order3?: Maybe<DeveloperOrder>;
  first3?: Maybe<Scalars['Int']>;
  offset3?: Maybe<Scalars['Int']>;
  filter7?: Maybe<CommentFilter>;
  order4?: Maybe<CommentOrder>;
  first4?: Maybe<Scalars['Int']>;
  offset4?: Maybe<Scalars['Int']>;
  filter8?: Maybe<TaskFilter>;
  order5?: Maybe<TaskOrder>;
  first5?: Maybe<Scalars['Int']>;
  offset5?: Maybe<Scalars['Int']>;
  filter9?: Maybe<ProjectFilter>;
  filter10?: Maybe<ColumnFilter>;
  order6?: Maybe<ColumnOrder>;
  first6?: Maybe<Scalars['Int']>;
  offset6?: Maybe<Scalars['Int']>;
  filter11?: Maybe<BoardFilter>;
  order7?: Maybe<BoardOrder>;
  first7?: Maybe<Scalars['Int']>;
  offset7?: Maybe<Scalars['Int']>;
  filter12?: Maybe<ProjectFilter>;
  filter13?: Maybe<UserFilter>;
  order8?: Maybe<UserOrder>;
  first8?: Maybe<Scalars['Int']>;
  offset8?: Maybe<Scalars['Int']>;
  filter14?: Maybe<TagFilter>;
  order9?: Maybe<TagOrder>;
  first9?: Maybe<Scalars['Int']>;
  offset9?: Maybe<Scalars['Int']>;
  filter15?: Maybe<TaskFilter>;
  order10?: Maybe<TaskOrder>;
  first10?: Maybe<Scalars['Int']>;
  offset10?: Maybe<Scalars['Int']>;
  filter16?: Maybe<TaskFilter>;
  order11?: Maybe<TaskOrder>;
  first11?: Maybe<Scalars['Int']>;
  offset11?: Maybe<Scalars['Int']>;
  filter17?: Maybe<DeveloperFilter>;
  order12?: Maybe<DeveloperOrder>;
  first12?: Maybe<Scalars['Int']>;
  offset12?: Maybe<Scalars['Int']>;
  filter18?: Maybe<ProjectFilter>;
  filter19?: Maybe<BoardFilter>;
  filter20?: Maybe<TaskFilter>;
  order13?: Maybe<TaskOrder>;
  first13?: Maybe<Scalars['Int']>;
  offset13?: Maybe<Scalars['Int']>;
  filter21?: Maybe<ColumnFilter>;
  order14?: Maybe<ColumnOrder>;
  first14?: Maybe<Scalars['Int']>;
  offset14?: Maybe<Scalars['Int']>;
  filter22?: Maybe<BoardFilter>;
  order15?: Maybe<BoardOrder>;
  first15?: Maybe<Scalars['Int']>;
  offset15?: Maybe<Scalars['Int']>;
  input: Array<AddBoardInput>;
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
  filter?: Maybe<TagFilter>;
  order?: Maybe<TagOrder>;
  first?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  filter1?: Maybe<TaskFilter>;
  order1?: Maybe<TaskOrder>;
  first1?: Maybe<Scalars['Int']>;
  offset1?: Maybe<Scalars['Int']>;
  filter2?: Maybe<BoardFilter>;
  order2?: Maybe<BoardOrder>;
  first2?: Maybe<Scalars['Int']>;
  offset2?: Maybe<Scalars['Int']>;
  filter3?: Maybe<DeveloperFilter>;
  order3?: Maybe<DeveloperOrder>;
  first3?: Maybe<Scalars['Int']>;
  offset3?: Maybe<Scalars['Int']>;
  filter4?: Maybe<ProjectFilter>;
  filter5?: Maybe<BoardFilter>;
  filter6?: Maybe<TaskFilter>;
  order4?: Maybe<TaskOrder>;
  first4?: Maybe<Scalars['Int']>;
  offset4?: Maybe<Scalars['Int']>;
  filter7?: Maybe<ColumnFilter>;
  order5?: Maybe<ColumnOrder>;
  first5?: Maybe<Scalars['Int']>;
  offset5?: Maybe<Scalars['Int']>;
  filter8?: Maybe<BoardFilter>;
  filter9?: Maybe<ProjectFilter>;
  filter10?: Maybe<ColumnFilter>;
  filter11?: Maybe<ProjectFilter>;
  filter12?: Maybe<UserFilter>;
  order6?: Maybe<UserOrder>;
  first6?: Maybe<Scalars['Int']>;
  offset6?: Maybe<Scalars['Int']>;
  filter13?: Maybe<TagFilter>;
  order7?: Maybe<TagOrder>;
  first7?: Maybe<Scalars['Int']>;
  offset7?: Maybe<Scalars['Int']>;
  filter14?: Maybe<TaskFilter>;
  order8?: Maybe<TaskOrder>;
  first8?: Maybe<Scalars['Int']>;
  offset8?: Maybe<Scalars['Int']>;
  filter15?: Maybe<TaskFilter>;
  order9?: Maybe<TaskOrder>;
  first9?: Maybe<Scalars['Int']>;
  offset9?: Maybe<Scalars['Int']>;
  filter16?: Maybe<DeveloperFilter>;
  order10?: Maybe<DeveloperOrder>;
  first10?: Maybe<Scalars['Int']>;
  offset10?: Maybe<Scalars['Int']>;
  filter17?: Maybe<ProjectFilter>;
  filter18?: Maybe<UserFilter>;
  order11?: Maybe<UserOrder>;
  first11?: Maybe<Scalars['Int']>;
  offset11?: Maybe<Scalars['Int']>;
  filter19?: Maybe<TagFilter>;
  order12?: Maybe<TagOrder>;
  first12?: Maybe<Scalars['Int']>;
  offset12?: Maybe<Scalars['Int']>;
  filter20?: Maybe<TaskFilter>;
  order13?: Maybe<TaskOrder>;
  first13?: Maybe<Scalars['Int']>;
  offset13?: Maybe<Scalars['Int']>;
  filter21?: Maybe<TaskFilter>;
  order14?: Maybe<TaskOrder>;
  first14?: Maybe<Scalars['Int']>;
  offset14?: Maybe<Scalars['Int']>;
  filter22?: Maybe<DeveloperFilter>;
  order15?: Maybe<DeveloperOrder>;
  first15?: Maybe<Scalars['Int']>;
  offset15?: Maybe<Scalars['Int']>;
  filter23?: Maybe<TaskFilter>;
  filter24?: Maybe<DeveloperFilter>;
  filter25?: Maybe<CommentFilter>;
  order16?: Maybe<CommentOrder>;
  first16?: Maybe<Scalars['Int']>;
  offset16?: Maybe<Scalars['Int']>;
  filter26?: Maybe<TaskFilter>;
  order17?: Maybe<TaskOrder>;
  first17?: Maybe<Scalars['Int']>;
  offset17?: Maybe<Scalars['Int']>;
  filter27?: Maybe<ColumnFilter>;
  order18?: Maybe<ColumnOrder>;
  first18?: Maybe<Scalars['Int']>;
  offset18?: Maybe<Scalars['Int']>;
  input: Array<AddColumnInput>;
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
  filter?: Maybe<TagFilter>;
  order?: Maybe<TagOrder>;
  first?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  filter1?: Maybe<TaskFilter>;
  order1?: Maybe<TaskOrder>;
  first1?: Maybe<Scalars['Int']>;
  offset1?: Maybe<Scalars['Int']>;
  filter2?: Maybe<BoardFilter>;
  order2?: Maybe<BoardOrder>;
  first2?: Maybe<Scalars['Int']>;
  offset2?: Maybe<Scalars['Int']>;
  filter3?: Maybe<DeveloperFilter>;
  order3?: Maybe<DeveloperOrder>;
  first3?: Maybe<Scalars['Int']>;
  offset3?: Maybe<Scalars['Int']>;
  filter4?: Maybe<ProjectFilter>;
  filter5?: Maybe<BoardFilter>;
  filter6?: Maybe<TaskFilter>;
  order4?: Maybe<TaskOrder>;
  first4?: Maybe<Scalars['Int']>;
  offset4?: Maybe<Scalars['Int']>;
  filter7?: Maybe<ColumnFilter>;
  filter8?: Maybe<ProjectFilter>;
  filter9?: Maybe<UserFilter>;
  order5?: Maybe<UserOrder>;
  first5?: Maybe<Scalars['Int']>;
  offset5?: Maybe<Scalars['Int']>;
  filter10?: Maybe<TagFilter>;
  order6?: Maybe<TagOrder>;
  first6?: Maybe<Scalars['Int']>;
  offset6?: Maybe<Scalars['Int']>;
  filter11?: Maybe<TaskFilter>;
  order7?: Maybe<TaskOrder>;
  first7?: Maybe<Scalars['Int']>;
  offset7?: Maybe<Scalars['Int']>;
  filter12?: Maybe<TaskFilter>;
  order8?: Maybe<TaskOrder>;
  first8?: Maybe<Scalars['Int']>;
  offset8?: Maybe<Scalars['Int']>;
  filter13?: Maybe<DeveloperFilter>;
  order9?: Maybe<DeveloperOrder>;
  first9?: Maybe<Scalars['Int']>;
  offset9?: Maybe<Scalars['Int']>;
  filter14?: Maybe<ProjectFilter>;
  filter15?: Maybe<UserFilter>;
  order10?: Maybe<UserOrder>;
  first10?: Maybe<Scalars['Int']>;
  offset10?: Maybe<Scalars['Int']>;
  filter16?: Maybe<TagFilter>;
  order11?: Maybe<TagOrder>;
  first11?: Maybe<Scalars['Int']>;
  offset11?: Maybe<Scalars['Int']>;
  filter17?: Maybe<TaskFilter>;
  order12?: Maybe<TaskOrder>;
  first12?: Maybe<Scalars['Int']>;
  offset12?: Maybe<Scalars['Int']>;
  filter18?: Maybe<TaskFilter>;
  order13?: Maybe<TaskOrder>;
  first13?: Maybe<Scalars['Int']>;
  offset13?: Maybe<Scalars['Int']>;
  filter19?: Maybe<DeveloperFilter>;
  order14?: Maybe<DeveloperOrder>;
  first14?: Maybe<Scalars['Int']>;
  offset14?: Maybe<Scalars['Int']>;
  filter20?: Maybe<TaskFilter>;
  filter21?: Maybe<DeveloperFilter>;
  filter22?: Maybe<CommentFilter>;
  order15?: Maybe<CommentOrder>;
  first15?: Maybe<Scalars['Int']>;
  offset15?: Maybe<Scalars['Int']>;
  filter23?: Maybe<TaskFilter>;
  filter24?: Maybe<ProjectFilter>;
  filter25?: Maybe<DeveloperFilter>;
  order16?: Maybe<DeveloperOrder>;
  first16?: Maybe<Scalars['Int']>;
  offset16?: Maybe<Scalars['Int']>;
  filter26?: Maybe<TaskFilter>;
  order17?: Maybe<TaskOrder>;
  first17?: Maybe<Scalars['Int']>;
  offset17?: Maybe<Scalars['Int']>;
  filter27?: Maybe<UserFilter>;
  order18?: Maybe<UserOrder>;
  first18?: Maybe<Scalars['Int']>;
  offset18?: Maybe<Scalars['Int']>;
  filter28?: Maybe<ProjectFilter>;
  filter29?: Maybe<DeveloperFilter>;
  order19?: Maybe<DeveloperOrder>;
  first19?: Maybe<Scalars['Int']>;
  offset19?: Maybe<Scalars['Int']>;
  filter30?: Maybe<TagFilter>;
  order20?: Maybe<TagOrder>;
  first20?: Maybe<Scalars['Int']>;
  offset20?: Maybe<Scalars['Int']>;
  filter31?: Maybe<ProjectFilter>;
  filter32?: Maybe<ColumnFilter>;
  filter33?: Maybe<DeveloperFilter>;
  order21?: Maybe<DeveloperOrder>;
  first21?: Maybe<Scalars['Int']>;
  offset21?: Maybe<Scalars['Int']>;
  filter34?: Maybe<DeveloperFilter>;
  order22?: Maybe<DeveloperOrder>;
  first22?: Maybe<Scalars['Int']>;
  offset22?: Maybe<Scalars['Int']>;
  filter35?: Maybe<CommentFilter>;
  order23?: Maybe<CommentOrder>;
  first23?: Maybe<Scalars['Int']>;
  offset23?: Maybe<Scalars['Int']>;
  filter36?: Maybe<TaskFilter>;
  order24?: Maybe<TaskOrder>;
  first24?: Maybe<Scalars['Int']>;
  offset24?: Maybe<Scalars['Int']>;
  filter37?: Maybe<ProjectFilter>;
  filter38?: Maybe<ColumnFilter>;
  filter39?: Maybe<DeveloperFilter>;
  order25?: Maybe<DeveloperOrder>;
  first25?: Maybe<Scalars['Int']>;
  offset25?: Maybe<Scalars['Int']>;
  filter40?: Maybe<DeveloperFilter>;
  order26?: Maybe<DeveloperOrder>;
  first26?: Maybe<Scalars['Int']>;
  offset26?: Maybe<Scalars['Int']>;
  filter41?: Maybe<CommentFilter>;
  order27?: Maybe<CommentOrder>;
  first27?: Maybe<Scalars['Int']>;
  offset27?: Maybe<Scalars['Int']>;
  filter42?: Maybe<TaskFilter>;
  order28?: Maybe<TaskOrder>;
  first28?: Maybe<Scalars['Int']>;
  offset28?: Maybe<Scalars['Int']>;
  filter43?: Maybe<DeveloperFilter>;
  filter44?: Maybe<CommentFilter>;
  order29?: Maybe<CommentOrder>;
  first29?: Maybe<Scalars['Int']>;
  offset29?: Maybe<Scalars['Int']>;
  input: Array<AddCommentInput>;
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
  filter?: Maybe<ProjectFilter>;
  filter1?: Maybe<DeveloperFilter>;
  order?: Maybe<DeveloperOrder>;
  first?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  filter2?: Maybe<TagFilter>;
  order1?: Maybe<TagOrder>;
  first1?: Maybe<Scalars['Int']>;
  offset1?: Maybe<Scalars['Int']>;
  filter3?: Maybe<ProjectFilter>;
  filter4?: Maybe<ColumnFilter>;
  filter5?: Maybe<DeveloperFilter>;
  order2?: Maybe<DeveloperOrder>;
  first2?: Maybe<Scalars['Int']>;
  offset2?: Maybe<Scalars['Int']>;
  filter6?: Maybe<DeveloperFilter>;
  order3?: Maybe<DeveloperOrder>;
  first3?: Maybe<Scalars['Int']>;
  offset3?: Maybe<Scalars['Int']>;
  filter7?: Maybe<CommentFilter>;
  order4?: Maybe<CommentOrder>;
  first4?: Maybe<Scalars['Int']>;
  offset4?: Maybe<Scalars['Int']>;
  filter8?: Maybe<TaskFilter>;
  order5?: Maybe<TaskOrder>;
  first5?: Maybe<Scalars['Int']>;
  offset5?: Maybe<Scalars['Int']>;
  filter9?: Maybe<ProjectFilter>;
  filter10?: Maybe<ColumnFilter>;
  order6?: Maybe<ColumnOrder>;
  first6?: Maybe<Scalars['Int']>;
  offset6?: Maybe<Scalars['Int']>;
  filter11?: Maybe<BoardFilter>;
  order7?: Maybe<BoardOrder>;
  first7?: Maybe<Scalars['Int']>;
  offset7?: Maybe<Scalars['Int']>;
  filter12?: Maybe<ProjectFilter>;
  filter13?: Maybe<UserFilter>;
  order8?: Maybe<UserOrder>;
  first8?: Maybe<Scalars['Int']>;
  offset8?: Maybe<Scalars['Int']>;
  filter14?: Maybe<TagFilter>;
  order9?: Maybe<TagOrder>;
  first9?: Maybe<Scalars['Int']>;
  offset9?: Maybe<Scalars['Int']>;
  filter15?: Maybe<TaskFilter>;
  order10?: Maybe<TaskOrder>;
  first10?: Maybe<Scalars['Int']>;
  offset10?: Maybe<Scalars['Int']>;
  filter16?: Maybe<TaskFilter>;
  order11?: Maybe<TaskOrder>;
  first11?: Maybe<Scalars['Int']>;
  offset11?: Maybe<Scalars['Int']>;
  filter17?: Maybe<DeveloperFilter>;
  order12?: Maybe<DeveloperOrder>;
  first12?: Maybe<Scalars['Int']>;
  offset12?: Maybe<Scalars['Int']>;
  filter18?: Maybe<ProjectFilter>;
  filter19?: Maybe<ProjectFilter>;
  filter20?: Maybe<UserFilter>;
  order13?: Maybe<UserOrder>;
  first13?: Maybe<Scalars['Int']>;
  offset13?: Maybe<Scalars['Int']>;
  filter21?: Maybe<TagFilter>;
  order14?: Maybe<TagOrder>;
  first14?: Maybe<Scalars['Int']>;
  offset14?: Maybe<Scalars['Int']>;
  filter22?: Maybe<TaskFilter>;
  order15?: Maybe<TaskOrder>;
  first15?: Maybe<Scalars['Int']>;
  offset15?: Maybe<Scalars['Int']>;
  filter23?: Maybe<TaskFilter>;
  order16?: Maybe<TaskOrder>;
  first16?: Maybe<Scalars['Int']>;
  offset16?: Maybe<Scalars['Int']>;
  filter24?: Maybe<DeveloperFilter>;
  order17?: Maybe<DeveloperOrder>;
  first17?: Maybe<Scalars['Int']>;
  offset17?: Maybe<Scalars['Int']>;
  filter25?: Maybe<ProjectFilter>;
  filter26?: Maybe<ColumnFilter>;
  filter27?: Maybe<DeveloperFilter>;
  order18?: Maybe<DeveloperOrder>;
  first18?: Maybe<Scalars['Int']>;
  offset18?: Maybe<Scalars['Int']>;
  filter28?: Maybe<DeveloperFilter>;
  order19?: Maybe<DeveloperOrder>;
  first19?: Maybe<Scalars['Int']>;
  offset19?: Maybe<Scalars['Int']>;
  filter29?: Maybe<CommentFilter>;
  order20?: Maybe<CommentOrder>;
  first20?: Maybe<Scalars['Int']>;
  offset20?: Maybe<Scalars['Int']>;
  filter30?: Maybe<TaskFilter>;
  order21?: Maybe<TaskOrder>;
  first21?: Maybe<Scalars['Int']>;
  offset21?: Maybe<Scalars['Int']>;
  filter31?: Maybe<UserFilter>;
  order22?: Maybe<UserOrder>;
  first22?: Maybe<Scalars['Int']>;
  offset22?: Maybe<Scalars['Int']>;
  filter32?: Maybe<TagFilter>;
  order23?: Maybe<TagOrder>;
  first23?: Maybe<Scalars['Int']>;
  offset23?: Maybe<Scalars['Int']>;
  filter33?: Maybe<TaskFilter>;
  order24?: Maybe<TaskOrder>;
  first24?: Maybe<Scalars['Int']>;
  offset24?: Maybe<Scalars['Int']>;
  filter34?: Maybe<ProjectFilter>;
  filter35?: Maybe<BoardFilter>;
  filter36?: Maybe<TaskFilter>;
  order25?: Maybe<TaskOrder>;
  first25?: Maybe<Scalars['Int']>;
  offset25?: Maybe<Scalars['Int']>;
  filter37?: Maybe<ColumnFilter>;
  filter38?: Maybe<DeveloperFilter>;
  order26?: Maybe<DeveloperOrder>;
  first26?: Maybe<Scalars['Int']>;
  offset26?: Maybe<Scalars['Int']>;
  filter39?: Maybe<ProjectFilter>;
  filter40?: Maybe<UserFilter>;
  order27?: Maybe<UserOrder>;
  first27?: Maybe<Scalars['Int']>;
  offset27?: Maybe<Scalars['Int']>;
  filter41?: Maybe<TagFilter>;
  order28?: Maybe<TagOrder>;
  first28?: Maybe<Scalars['Int']>;
  offset28?: Maybe<Scalars['Int']>;
  filter42?: Maybe<TaskFilter>;
  order29?: Maybe<TaskOrder>;
  first29?: Maybe<Scalars['Int']>;
  offset29?: Maybe<Scalars['Int']>;
  filter43?: Maybe<TaskFilter>;
  order30?: Maybe<TaskOrder>;
  first30?: Maybe<Scalars['Int']>;
  offset30?: Maybe<Scalars['Int']>;
  filter44?: Maybe<DeveloperFilter>;
  order31?: Maybe<DeveloperOrder>;
  first31?: Maybe<Scalars['Int']>;
  offset31?: Maybe<Scalars['Int']>;
  filter45?: Maybe<TaskFilter>;
  filter46?: Maybe<DeveloperFilter>;
  filter47?: Maybe<CommentFilter>;
  order32?: Maybe<CommentOrder>;
  first32?: Maybe<Scalars['Int']>;
  offset32?: Maybe<Scalars['Int']>;
  filter48?: Maybe<TaskFilter>;
  order33?: Maybe<TaskOrder>;
  first33?: Maybe<Scalars['Int']>;
  offset33?: Maybe<Scalars['Int']>;
  filter49?: Maybe<DeveloperFilter>;
  order34?: Maybe<DeveloperOrder>;
  first34?: Maybe<Scalars['Int']>;
  offset34?: Maybe<Scalars['Int']>;
  input: Array<AddDeveloperInput>;
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
  filter?: Maybe<TaskFilter>;
  order?: Maybe<TaskOrder>;
  first?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  filter1?: Maybe<BoardFilter>;
  order1?: Maybe<BoardOrder>;
  first1?: Maybe<Scalars['Int']>;
  offset1?: Maybe<Scalars['Int']>;
  filter2?: Maybe<DeveloperFilter>;
  order2?: Maybe<DeveloperOrder>;
  first2?: Maybe<Scalars['Int']>;
  offset2?: Maybe<Scalars['Int']>;
  filter3?: Maybe<ProjectFilter>;
  filter4?: Maybe<ProjectFilter>;
  filter5?: Maybe<UserFilter>;
  order3?: Maybe<UserOrder>;
  first3?: Maybe<Scalars['Int']>;
  offset3?: Maybe<Scalars['Int']>;
  filter6?: Maybe<TagFilter>;
  order4?: Maybe<TagOrder>;
  first4?: Maybe<Scalars['Int']>;
  offset4?: Maybe<Scalars['Int']>;
  filter7?: Maybe<TaskFilter>;
  order5?: Maybe<TaskOrder>;
  first5?: Maybe<Scalars['Int']>;
  offset5?: Maybe<Scalars['Int']>;
  filter8?: Maybe<TaskFilter>;
  order6?: Maybe<TaskOrder>;
  first6?: Maybe<Scalars['Int']>;
  offset6?: Maybe<Scalars['Int']>;
  filter9?: Maybe<DeveloperFilter>;
  order7?: Maybe<DeveloperOrder>;
  first7?: Maybe<Scalars['Int']>;
  offset7?: Maybe<Scalars['Int']>;
  filter10?: Maybe<TagFilter>;
  order8?: Maybe<TagOrder>;
  first8?: Maybe<Scalars['Int']>;
  offset8?: Maybe<Scalars['Int']>;
  filter11?: Maybe<ProjectFilter>;
  order9?: Maybe<ProjectOrder>;
  first9?: Maybe<Scalars['Int']>;
  offset9?: Maybe<Scalars['Int']>;
  input: Array<AddProjectInput>;
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
  filter?: Maybe<ProjectFilter>;
  filter1?: Maybe<DeveloperFilter>;
  order?: Maybe<DeveloperOrder>;
  first?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  filter2?: Maybe<TagFilter>;
  order1?: Maybe<TagOrder>;
  first1?: Maybe<Scalars['Int']>;
  offset1?: Maybe<Scalars['Int']>;
  filter3?: Maybe<ProjectFilter>;
  filter4?: Maybe<ColumnFilter>;
  filter5?: Maybe<DeveloperFilter>;
  order2?: Maybe<DeveloperOrder>;
  first2?: Maybe<Scalars['Int']>;
  offset2?: Maybe<Scalars['Int']>;
  filter6?: Maybe<DeveloperFilter>;
  order3?: Maybe<DeveloperOrder>;
  first3?: Maybe<Scalars['Int']>;
  offset3?: Maybe<Scalars['Int']>;
  filter7?: Maybe<CommentFilter>;
  order4?: Maybe<CommentOrder>;
  first4?: Maybe<Scalars['Int']>;
  offset4?: Maybe<Scalars['Int']>;
  filter8?: Maybe<TaskFilter>;
  order5?: Maybe<TaskOrder>;
  first5?: Maybe<Scalars['Int']>;
  offset5?: Maybe<Scalars['Int']>;
  filter9?: Maybe<ProjectFilter>;
  filter10?: Maybe<ColumnFilter>;
  order6?: Maybe<ColumnOrder>;
  first6?: Maybe<Scalars['Int']>;
  offset6?: Maybe<Scalars['Int']>;
  filter11?: Maybe<BoardFilter>;
  order7?: Maybe<BoardOrder>;
  first7?: Maybe<Scalars['Int']>;
  offset7?: Maybe<Scalars['Int']>;
  filter12?: Maybe<ProjectFilter>;
  filter13?: Maybe<UserFilter>;
  order8?: Maybe<UserOrder>;
  first8?: Maybe<Scalars['Int']>;
  offset8?: Maybe<Scalars['Int']>;
  filter14?: Maybe<TagFilter>;
  order9?: Maybe<TagOrder>;
  first9?: Maybe<Scalars['Int']>;
  offset9?: Maybe<Scalars['Int']>;
  filter15?: Maybe<TaskFilter>;
  order10?: Maybe<TaskOrder>;
  first10?: Maybe<Scalars['Int']>;
  offset10?: Maybe<Scalars['Int']>;
  filter16?: Maybe<TaskFilter>;
  order11?: Maybe<TaskOrder>;
  first11?: Maybe<Scalars['Int']>;
  offset11?: Maybe<Scalars['Int']>;
  filter17?: Maybe<DeveloperFilter>;
  order12?: Maybe<DeveloperOrder>;
  first12?: Maybe<Scalars['Int']>;
  offset12?: Maybe<Scalars['Int']>;
  filter18?: Maybe<ProjectFilter>;
  filter19?: Maybe<DeveloperFilter>;
  order13?: Maybe<DeveloperOrder>;
  first13?: Maybe<Scalars['Int']>;
  offset13?: Maybe<Scalars['Int']>;
  filter20?: Maybe<TagFilter>;
  order14?: Maybe<TagOrder>;
  first14?: Maybe<Scalars['Int']>;
  offset14?: Maybe<Scalars['Int']>;
  input: Array<AddTagInput>;
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
  filter?: Maybe<ProjectFilter>;
  filter1?: Maybe<DeveloperFilter>;
  order?: Maybe<DeveloperOrder>;
  first?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  filter2?: Maybe<TagFilter>;
  order1?: Maybe<TagOrder>;
  first1?: Maybe<Scalars['Int']>;
  offset1?: Maybe<Scalars['Int']>;
  filter3?: Maybe<ProjectFilter>;
  filter4?: Maybe<ColumnFilter>;
  filter5?: Maybe<DeveloperFilter>;
  order2?: Maybe<DeveloperOrder>;
  first2?: Maybe<Scalars['Int']>;
  offset2?: Maybe<Scalars['Int']>;
  filter6?: Maybe<DeveloperFilter>;
  order3?: Maybe<DeveloperOrder>;
  first3?: Maybe<Scalars['Int']>;
  offset3?: Maybe<Scalars['Int']>;
  filter7?: Maybe<CommentFilter>;
  order4?: Maybe<CommentOrder>;
  first4?: Maybe<Scalars['Int']>;
  offset4?: Maybe<Scalars['Int']>;
  filter8?: Maybe<TaskFilter>;
  order5?: Maybe<TaskOrder>;
  first5?: Maybe<Scalars['Int']>;
  offset5?: Maybe<Scalars['Int']>;
  filter9?: Maybe<ProjectFilter>;
  filter10?: Maybe<ColumnFilter>;
  order6?: Maybe<ColumnOrder>;
  first6?: Maybe<Scalars['Int']>;
  offset6?: Maybe<Scalars['Int']>;
  filter11?: Maybe<BoardFilter>;
  order7?: Maybe<BoardOrder>;
  first7?: Maybe<Scalars['Int']>;
  offset7?: Maybe<Scalars['Int']>;
  filter12?: Maybe<ProjectFilter>;
  filter13?: Maybe<UserFilter>;
  order8?: Maybe<UserOrder>;
  first8?: Maybe<Scalars['Int']>;
  offset8?: Maybe<Scalars['Int']>;
  filter14?: Maybe<TagFilter>;
  order9?: Maybe<TagOrder>;
  first9?: Maybe<Scalars['Int']>;
  offset9?: Maybe<Scalars['Int']>;
  filter15?: Maybe<TaskFilter>;
  order10?: Maybe<TaskOrder>;
  first10?: Maybe<Scalars['Int']>;
  offset10?: Maybe<Scalars['Int']>;
  filter16?: Maybe<TaskFilter>;
  order11?: Maybe<TaskOrder>;
  first11?: Maybe<Scalars['Int']>;
  offset11?: Maybe<Scalars['Int']>;
  filter17?: Maybe<DeveloperFilter>;
  order12?: Maybe<DeveloperOrder>;
  first12?: Maybe<Scalars['Int']>;
  offset12?: Maybe<Scalars['Int']>;
  filter18?: Maybe<ProjectFilter>;
  filter19?: Maybe<ProjectFilter>;
  filter20?: Maybe<ColumnFilter>;
  order13?: Maybe<ColumnOrder>;
  first13?: Maybe<Scalars['Int']>;
  offset13?: Maybe<Scalars['Int']>;
  filter21?: Maybe<BoardFilter>;
  filter22?: Maybe<TaskFilter>;
  order14?: Maybe<TaskOrder>;
  first14?: Maybe<Scalars['Int']>;
  offset14?: Maybe<Scalars['Int']>;
  filter23?: Maybe<ColumnFilter>;
  filter24?: Maybe<DeveloperFilter>;
  order15?: Maybe<DeveloperOrder>;
  first15?: Maybe<Scalars['Int']>;
  offset15?: Maybe<Scalars['Int']>;
  filter25?: Maybe<ProjectFilter>;
  filter26?: Maybe<DeveloperFilter>;
  order16?: Maybe<DeveloperOrder>;
  first16?: Maybe<Scalars['Int']>;
  offset16?: Maybe<Scalars['Int']>;
  filter27?: Maybe<TaskFilter>;
  order17?: Maybe<TaskOrder>;
  first17?: Maybe<Scalars['Int']>;
  offset17?: Maybe<Scalars['Int']>;
  filter28?: Maybe<UserFilter>;
  order18?: Maybe<UserOrder>;
  first18?: Maybe<Scalars['Int']>;
  offset18?: Maybe<Scalars['Int']>;
  filter29?: Maybe<TagFilter>;
  order19?: Maybe<TagOrder>;
  first19?: Maybe<Scalars['Int']>;
  offset19?: Maybe<Scalars['Int']>;
  filter30?: Maybe<TaskFilter>;
  order20?: Maybe<TaskOrder>;
  first20?: Maybe<Scalars['Int']>;
  offset20?: Maybe<Scalars['Int']>;
  filter31?: Maybe<ProjectFilter>;
  filter32?: Maybe<ColumnFilter>;
  filter33?: Maybe<DeveloperFilter>;
  order21?: Maybe<DeveloperOrder>;
  first21?: Maybe<Scalars['Int']>;
  offset21?: Maybe<Scalars['Int']>;
  filter34?: Maybe<DeveloperFilter>;
  order22?: Maybe<DeveloperOrder>;
  first22?: Maybe<Scalars['Int']>;
  offset22?: Maybe<Scalars['Int']>;
  filter35?: Maybe<CommentFilter>;
  order23?: Maybe<CommentOrder>;
  first23?: Maybe<Scalars['Int']>;
  offset23?: Maybe<Scalars['Int']>;
  filter36?: Maybe<TaskFilter>;
  order24?: Maybe<TaskOrder>;
  first24?: Maybe<Scalars['Int']>;
  offset24?: Maybe<Scalars['Int']>;
  filter37?: Maybe<DeveloperFilter>;
  order25?: Maybe<DeveloperOrder>;
  first25?: Maybe<Scalars['Int']>;
  offset25?: Maybe<Scalars['Int']>;
  filter38?: Maybe<TaskFilter>;
  filter39?: Maybe<ProjectFilter>;
  filter40?: Maybe<UserFilter>;
  order26?: Maybe<UserOrder>;
  first26?: Maybe<Scalars['Int']>;
  offset26?: Maybe<Scalars['Int']>;
  filter41?: Maybe<TagFilter>;
  order27?: Maybe<TagOrder>;
  first27?: Maybe<Scalars['Int']>;
  offset27?: Maybe<Scalars['Int']>;
  filter42?: Maybe<TaskFilter>;
  order28?: Maybe<TaskOrder>;
  first28?: Maybe<Scalars['Int']>;
  offset28?: Maybe<Scalars['Int']>;
  filter43?: Maybe<TaskFilter>;
  order29?: Maybe<TaskOrder>;
  first29?: Maybe<Scalars['Int']>;
  offset29?: Maybe<Scalars['Int']>;
  filter44?: Maybe<DeveloperFilter>;
  filter45?: Maybe<CommentFilter>;
  order30?: Maybe<CommentOrder>;
  first30?: Maybe<Scalars['Int']>;
  offset30?: Maybe<Scalars['Int']>;
  filter46?: Maybe<TaskFilter>;
  order31?: Maybe<TaskOrder>;
  first31?: Maybe<Scalars['Int']>;
  offset31?: Maybe<Scalars['Int']>;
  input: Array<AddTaskInput>;
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
  filter?: Maybe<TagFilter>;
  order?: Maybe<TagOrder>;
  first?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  filter1?: Maybe<TaskFilter>;
  order1?: Maybe<TaskOrder>;
  first1?: Maybe<Scalars['Int']>;
  offset1?: Maybe<Scalars['Int']>;
  filter2?: Maybe<BoardFilter>;
  order2?: Maybe<BoardOrder>;
  first2?: Maybe<Scalars['Int']>;
  offset2?: Maybe<Scalars['Int']>;
  filter3?: Maybe<DeveloperFilter>;
  order3?: Maybe<DeveloperOrder>;
  first3?: Maybe<Scalars['Int']>;
  offset3?: Maybe<Scalars['Int']>;
  filter4?: Maybe<ProjectFilter>;
  filter5?: Maybe<TaskFilter>;
  order4?: Maybe<TaskOrder>;
  first4?: Maybe<Scalars['Int']>;
  offset4?: Maybe<Scalars['Int']>;
  filter6?: Maybe<UserFilter>;
  order5?: Maybe<UserOrder>;
  first5?: Maybe<Scalars['Int']>;
  offset5?: Maybe<Scalars['Int']>;
  filter7?: Maybe<ProjectFilter>;
  filter8?: Maybe<DeveloperFilter>;
  order6?: Maybe<DeveloperOrder>;
  first6?: Maybe<Scalars['Int']>;
  offset6?: Maybe<Scalars['Int']>;
  filter9?: Maybe<TagFilter>;
  order7?: Maybe<TagOrder>;
  first7?: Maybe<Scalars['Int']>;
  offset7?: Maybe<Scalars['Int']>;
  filter10?: Maybe<ProjectFilter>;
  filter11?: Maybe<ColumnFilter>;
  filter12?: Maybe<DeveloperFilter>;
  order8?: Maybe<DeveloperOrder>;
  first8?: Maybe<Scalars['Int']>;
  offset8?: Maybe<Scalars['Int']>;
  filter13?: Maybe<DeveloperFilter>;
  order9?: Maybe<DeveloperOrder>;
  first9?: Maybe<Scalars['Int']>;
  offset9?: Maybe<Scalars['Int']>;
  filter14?: Maybe<CommentFilter>;
  order10?: Maybe<CommentOrder>;
  first10?: Maybe<Scalars['Int']>;
  offset10?: Maybe<Scalars['Int']>;
  filter15?: Maybe<TaskFilter>;
  order11?: Maybe<TaskOrder>;
  first11?: Maybe<Scalars['Int']>;
  offset11?: Maybe<Scalars['Int']>;
  filter16?: Maybe<ProjectFilter>;
  filter17?: Maybe<ColumnFilter>;
  filter18?: Maybe<DeveloperFilter>;
  order12?: Maybe<DeveloperOrder>;
  first12?: Maybe<Scalars['Int']>;
  offset12?: Maybe<Scalars['Int']>;
  filter19?: Maybe<DeveloperFilter>;
  order13?: Maybe<DeveloperOrder>;
  first13?: Maybe<Scalars['Int']>;
  offset13?: Maybe<Scalars['Int']>;
  filter20?: Maybe<CommentFilter>;
  order14?: Maybe<CommentOrder>;
  first14?: Maybe<Scalars['Int']>;
  offset14?: Maybe<Scalars['Int']>;
  filter21?: Maybe<TaskFilter>;
  order15?: Maybe<TaskOrder>;
  first15?: Maybe<Scalars['Int']>;
  offset15?: Maybe<Scalars['Int']>;
  filter22?: Maybe<DeveloperFilter>;
  order16?: Maybe<DeveloperOrder>;
  first16?: Maybe<Scalars['Int']>;
  offset16?: Maybe<Scalars['Int']>;
  filter23?: Maybe<UserFilter>;
  order17?: Maybe<UserOrder>;
  first17?: Maybe<Scalars['Int']>;
  offset17?: Maybe<Scalars['Int']>;
  input: Array<AddUserInput>;
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
  filter: BoardFilter;
};


export type DeleteBoardMutation = (
  { __typename?: 'Mutation' }
  & { deleteBoard: Maybe<(
    { __typename?: 'DeleteBoardPayload' }
    & Pick<DeleteBoardPayload, 'msg' | 'numUids'>
  )> }
);

export type DeleteColumnMutationVariables = {
  filter: ColumnFilter;
};


export type DeleteColumnMutation = (
  { __typename?: 'Mutation' }
  & { deleteColumn: Maybe<(
    { __typename?: 'DeleteColumnPayload' }
    & Pick<DeleteColumnPayload, 'msg' | 'numUids'>
  )> }
);

export type DeleteCommentMutationVariables = {
  filter: CommentFilter;
};


export type DeleteCommentMutation = (
  { __typename?: 'Mutation' }
  & { deleteComment: Maybe<(
    { __typename?: 'DeleteCommentPayload' }
    & Pick<DeleteCommentPayload, 'msg' | 'numUids'>
  )> }
);

export type DeleteDeveloperMutationVariables = {
  filter: DeveloperFilter;
};


export type DeleteDeveloperMutation = (
  { __typename?: 'Mutation' }
  & { deleteDeveloper: Maybe<(
    { __typename?: 'DeleteDeveloperPayload' }
    & Pick<DeleteDeveloperPayload, 'msg' | 'numUids'>
  )> }
);

export type DeleteProjectMutationVariables = {
  filter: ProjectFilter;
};


export type DeleteProjectMutation = (
  { __typename?: 'Mutation' }
  & { deleteProject: Maybe<(
    { __typename?: 'DeleteProjectPayload' }
    & Pick<DeleteProjectPayload, 'msg' | 'numUids'>
  )> }
);

export type DeleteTagMutationVariables = {
  filter: TagFilter;
};


export type DeleteTagMutation = (
  { __typename?: 'Mutation' }
  & { deleteTag: Maybe<(
    { __typename?: 'DeleteTagPayload' }
    & Pick<DeleteTagPayload, 'msg' | 'numUids'>
  )> }
);

export type DeleteTaskMutationVariables = {
  filter: TaskFilter;
};


export type DeleteTaskMutation = (
  { __typename?: 'Mutation' }
  & { deleteTask: Maybe<(
    { __typename?: 'DeleteTaskPayload' }
    & Pick<DeleteTaskPayload, 'msg' | 'numUids'>
  )> }
);

export type DeleteUserMutationVariables = {
  filter: UserFilter;
};


export type DeleteUserMutation = (
  { __typename?: 'Mutation' }
  & { deleteUser: Maybe<(
    { __typename?: 'DeleteUserPayload' }
    & Pick<DeleteUserPayload, 'msg' | 'numUids'>
  )> }
);

export type UpdateBoardMutationVariables = {
  filter?: Maybe<ProjectFilter>;
  filter1?: Maybe<DeveloperFilter>;
  order?: Maybe<DeveloperOrder>;
  first?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  filter2?: Maybe<TagFilter>;
  order1?: Maybe<TagOrder>;
  first1?: Maybe<Scalars['Int']>;
  offset1?: Maybe<Scalars['Int']>;
  filter3?: Maybe<ProjectFilter>;
  filter4?: Maybe<ColumnFilter>;
  filter5?: Maybe<DeveloperFilter>;
  order2?: Maybe<DeveloperOrder>;
  first2?: Maybe<Scalars['Int']>;
  offset2?: Maybe<Scalars['Int']>;
  filter6?: Maybe<DeveloperFilter>;
  order3?: Maybe<DeveloperOrder>;
  first3?: Maybe<Scalars['Int']>;
  offset3?: Maybe<Scalars['Int']>;
  filter7?: Maybe<CommentFilter>;
  order4?: Maybe<CommentOrder>;
  first4?: Maybe<Scalars['Int']>;
  offset4?: Maybe<Scalars['Int']>;
  filter8?: Maybe<TaskFilter>;
  order5?: Maybe<TaskOrder>;
  first5?: Maybe<Scalars['Int']>;
  offset5?: Maybe<Scalars['Int']>;
  filter9?: Maybe<ProjectFilter>;
  filter10?: Maybe<ColumnFilter>;
  order6?: Maybe<ColumnOrder>;
  first6?: Maybe<Scalars['Int']>;
  offset6?: Maybe<Scalars['Int']>;
  filter11?: Maybe<BoardFilter>;
  order7?: Maybe<BoardOrder>;
  first7?: Maybe<Scalars['Int']>;
  offset7?: Maybe<Scalars['Int']>;
  filter12?: Maybe<ProjectFilter>;
  filter13?: Maybe<UserFilter>;
  order8?: Maybe<UserOrder>;
  first8?: Maybe<Scalars['Int']>;
  offset8?: Maybe<Scalars['Int']>;
  filter14?: Maybe<TagFilter>;
  order9?: Maybe<TagOrder>;
  first9?: Maybe<Scalars['Int']>;
  offset9?: Maybe<Scalars['Int']>;
  filter15?: Maybe<TaskFilter>;
  order10?: Maybe<TaskOrder>;
  first10?: Maybe<Scalars['Int']>;
  offset10?: Maybe<Scalars['Int']>;
  filter16?: Maybe<TaskFilter>;
  order11?: Maybe<TaskOrder>;
  first11?: Maybe<Scalars['Int']>;
  offset11?: Maybe<Scalars['Int']>;
  filter17?: Maybe<DeveloperFilter>;
  order12?: Maybe<DeveloperOrder>;
  first12?: Maybe<Scalars['Int']>;
  offset12?: Maybe<Scalars['Int']>;
  filter18?: Maybe<ProjectFilter>;
  filter19?: Maybe<BoardFilter>;
  filter20?: Maybe<TaskFilter>;
  order13?: Maybe<TaskOrder>;
  first13?: Maybe<Scalars['Int']>;
  offset13?: Maybe<Scalars['Int']>;
  filter21?: Maybe<ColumnFilter>;
  order14?: Maybe<ColumnOrder>;
  first14?: Maybe<Scalars['Int']>;
  offset14?: Maybe<Scalars['Int']>;
  filter22?: Maybe<BoardFilter>;
  order15?: Maybe<BoardOrder>;
  first15?: Maybe<Scalars['Int']>;
  offset15?: Maybe<Scalars['Int']>;
  input: UpdateBoardInput;
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
  filter?: Maybe<TagFilter>;
  order?: Maybe<TagOrder>;
  first?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  filter1?: Maybe<TaskFilter>;
  order1?: Maybe<TaskOrder>;
  first1?: Maybe<Scalars['Int']>;
  offset1?: Maybe<Scalars['Int']>;
  filter2?: Maybe<BoardFilter>;
  order2?: Maybe<BoardOrder>;
  first2?: Maybe<Scalars['Int']>;
  offset2?: Maybe<Scalars['Int']>;
  filter3?: Maybe<DeveloperFilter>;
  order3?: Maybe<DeveloperOrder>;
  first3?: Maybe<Scalars['Int']>;
  offset3?: Maybe<Scalars['Int']>;
  filter4?: Maybe<ProjectFilter>;
  filter5?: Maybe<BoardFilter>;
  filter6?: Maybe<TaskFilter>;
  order4?: Maybe<TaskOrder>;
  first4?: Maybe<Scalars['Int']>;
  offset4?: Maybe<Scalars['Int']>;
  filter7?: Maybe<ColumnFilter>;
  order5?: Maybe<ColumnOrder>;
  first5?: Maybe<Scalars['Int']>;
  offset5?: Maybe<Scalars['Int']>;
  filter8?: Maybe<BoardFilter>;
  filter9?: Maybe<ProjectFilter>;
  filter10?: Maybe<ColumnFilter>;
  filter11?: Maybe<ProjectFilter>;
  filter12?: Maybe<UserFilter>;
  order6?: Maybe<UserOrder>;
  first6?: Maybe<Scalars['Int']>;
  offset6?: Maybe<Scalars['Int']>;
  filter13?: Maybe<TagFilter>;
  order7?: Maybe<TagOrder>;
  first7?: Maybe<Scalars['Int']>;
  offset7?: Maybe<Scalars['Int']>;
  filter14?: Maybe<TaskFilter>;
  order8?: Maybe<TaskOrder>;
  first8?: Maybe<Scalars['Int']>;
  offset8?: Maybe<Scalars['Int']>;
  filter15?: Maybe<TaskFilter>;
  order9?: Maybe<TaskOrder>;
  first9?: Maybe<Scalars['Int']>;
  offset9?: Maybe<Scalars['Int']>;
  filter16?: Maybe<DeveloperFilter>;
  order10?: Maybe<DeveloperOrder>;
  first10?: Maybe<Scalars['Int']>;
  offset10?: Maybe<Scalars['Int']>;
  filter17?: Maybe<ProjectFilter>;
  filter18?: Maybe<UserFilter>;
  order11?: Maybe<UserOrder>;
  first11?: Maybe<Scalars['Int']>;
  offset11?: Maybe<Scalars['Int']>;
  filter19?: Maybe<TagFilter>;
  order12?: Maybe<TagOrder>;
  first12?: Maybe<Scalars['Int']>;
  offset12?: Maybe<Scalars['Int']>;
  filter20?: Maybe<TaskFilter>;
  order13?: Maybe<TaskOrder>;
  first13?: Maybe<Scalars['Int']>;
  offset13?: Maybe<Scalars['Int']>;
  filter21?: Maybe<TaskFilter>;
  order14?: Maybe<TaskOrder>;
  first14?: Maybe<Scalars['Int']>;
  offset14?: Maybe<Scalars['Int']>;
  filter22?: Maybe<DeveloperFilter>;
  order15?: Maybe<DeveloperOrder>;
  first15?: Maybe<Scalars['Int']>;
  offset15?: Maybe<Scalars['Int']>;
  filter23?: Maybe<TaskFilter>;
  filter24?: Maybe<DeveloperFilter>;
  filter25?: Maybe<CommentFilter>;
  order16?: Maybe<CommentOrder>;
  first16?: Maybe<Scalars['Int']>;
  offset16?: Maybe<Scalars['Int']>;
  filter26?: Maybe<TaskFilter>;
  order17?: Maybe<TaskOrder>;
  first17?: Maybe<Scalars['Int']>;
  offset17?: Maybe<Scalars['Int']>;
  filter27?: Maybe<ColumnFilter>;
  order18?: Maybe<ColumnOrder>;
  first18?: Maybe<Scalars['Int']>;
  offset18?: Maybe<Scalars['Int']>;
  input: UpdateColumnInput;
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
  filter?: Maybe<TagFilter>;
  order?: Maybe<TagOrder>;
  first?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  filter1?: Maybe<TaskFilter>;
  order1?: Maybe<TaskOrder>;
  first1?: Maybe<Scalars['Int']>;
  offset1?: Maybe<Scalars['Int']>;
  filter2?: Maybe<BoardFilter>;
  order2?: Maybe<BoardOrder>;
  first2?: Maybe<Scalars['Int']>;
  offset2?: Maybe<Scalars['Int']>;
  filter3?: Maybe<DeveloperFilter>;
  order3?: Maybe<DeveloperOrder>;
  first3?: Maybe<Scalars['Int']>;
  offset3?: Maybe<Scalars['Int']>;
  filter4?: Maybe<ProjectFilter>;
  filter5?: Maybe<BoardFilter>;
  filter6?: Maybe<TaskFilter>;
  order4?: Maybe<TaskOrder>;
  first4?: Maybe<Scalars['Int']>;
  offset4?: Maybe<Scalars['Int']>;
  filter7?: Maybe<ColumnFilter>;
  filter8?: Maybe<ProjectFilter>;
  filter9?: Maybe<UserFilter>;
  order5?: Maybe<UserOrder>;
  first5?: Maybe<Scalars['Int']>;
  offset5?: Maybe<Scalars['Int']>;
  filter10?: Maybe<TagFilter>;
  order6?: Maybe<TagOrder>;
  first6?: Maybe<Scalars['Int']>;
  offset6?: Maybe<Scalars['Int']>;
  filter11?: Maybe<TaskFilter>;
  order7?: Maybe<TaskOrder>;
  first7?: Maybe<Scalars['Int']>;
  offset7?: Maybe<Scalars['Int']>;
  filter12?: Maybe<TaskFilter>;
  order8?: Maybe<TaskOrder>;
  first8?: Maybe<Scalars['Int']>;
  offset8?: Maybe<Scalars['Int']>;
  filter13?: Maybe<DeveloperFilter>;
  order9?: Maybe<DeveloperOrder>;
  first9?: Maybe<Scalars['Int']>;
  offset9?: Maybe<Scalars['Int']>;
  filter14?: Maybe<ProjectFilter>;
  filter15?: Maybe<UserFilter>;
  order10?: Maybe<UserOrder>;
  first10?: Maybe<Scalars['Int']>;
  offset10?: Maybe<Scalars['Int']>;
  filter16?: Maybe<TagFilter>;
  order11?: Maybe<TagOrder>;
  first11?: Maybe<Scalars['Int']>;
  offset11?: Maybe<Scalars['Int']>;
  filter17?: Maybe<TaskFilter>;
  order12?: Maybe<TaskOrder>;
  first12?: Maybe<Scalars['Int']>;
  offset12?: Maybe<Scalars['Int']>;
  filter18?: Maybe<TaskFilter>;
  order13?: Maybe<TaskOrder>;
  first13?: Maybe<Scalars['Int']>;
  offset13?: Maybe<Scalars['Int']>;
  filter19?: Maybe<DeveloperFilter>;
  order14?: Maybe<DeveloperOrder>;
  first14?: Maybe<Scalars['Int']>;
  offset14?: Maybe<Scalars['Int']>;
  filter20?: Maybe<TaskFilter>;
  filter21?: Maybe<DeveloperFilter>;
  filter22?: Maybe<CommentFilter>;
  order15?: Maybe<CommentOrder>;
  first15?: Maybe<Scalars['Int']>;
  offset15?: Maybe<Scalars['Int']>;
  filter23?: Maybe<TaskFilter>;
  filter24?: Maybe<ProjectFilter>;
  filter25?: Maybe<DeveloperFilter>;
  order16?: Maybe<DeveloperOrder>;
  first16?: Maybe<Scalars['Int']>;
  offset16?: Maybe<Scalars['Int']>;
  filter26?: Maybe<TaskFilter>;
  order17?: Maybe<TaskOrder>;
  first17?: Maybe<Scalars['Int']>;
  offset17?: Maybe<Scalars['Int']>;
  filter27?: Maybe<UserFilter>;
  order18?: Maybe<UserOrder>;
  first18?: Maybe<Scalars['Int']>;
  offset18?: Maybe<Scalars['Int']>;
  filter28?: Maybe<ProjectFilter>;
  filter29?: Maybe<DeveloperFilter>;
  order19?: Maybe<DeveloperOrder>;
  first19?: Maybe<Scalars['Int']>;
  offset19?: Maybe<Scalars['Int']>;
  filter30?: Maybe<TagFilter>;
  order20?: Maybe<TagOrder>;
  first20?: Maybe<Scalars['Int']>;
  offset20?: Maybe<Scalars['Int']>;
  filter31?: Maybe<ProjectFilter>;
  filter32?: Maybe<ColumnFilter>;
  filter33?: Maybe<DeveloperFilter>;
  order21?: Maybe<DeveloperOrder>;
  first21?: Maybe<Scalars['Int']>;
  offset21?: Maybe<Scalars['Int']>;
  filter34?: Maybe<DeveloperFilter>;
  order22?: Maybe<DeveloperOrder>;
  first22?: Maybe<Scalars['Int']>;
  offset22?: Maybe<Scalars['Int']>;
  filter35?: Maybe<CommentFilter>;
  order23?: Maybe<CommentOrder>;
  first23?: Maybe<Scalars['Int']>;
  offset23?: Maybe<Scalars['Int']>;
  filter36?: Maybe<TaskFilter>;
  order24?: Maybe<TaskOrder>;
  first24?: Maybe<Scalars['Int']>;
  offset24?: Maybe<Scalars['Int']>;
  filter37?: Maybe<ProjectFilter>;
  filter38?: Maybe<ColumnFilter>;
  filter39?: Maybe<DeveloperFilter>;
  order25?: Maybe<DeveloperOrder>;
  first25?: Maybe<Scalars['Int']>;
  offset25?: Maybe<Scalars['Int']>;
  filter40?: Maybe<DeveloperFilter>;
  order26?: Maybe<DeveloperOrder>;
  first26?: Maybe<Scalars['Int']>;
  offset26?: Maybe<Scalars['Int']>;
  filter41?: Maybe<CommentFilter>;
  order27?: Maybe<CommentOrder>;
  first27?: Maybe<Scalars['Int']>;
  offset27?: Maybe<Scalars['Int']>;
  filter42?: Maybe<TaskFilter>;
  order28?: Maybe<TaskOrder>;
  first28?: Maybe<Scalars['Int']>;
  offset28?: Maybe<Scalars['Int']>;
  filter43?: Maybe<DeveloperFilter>;
  filter44?: Maybe<CommentFilter>;
  order29?: Maybe<CommentOrder>;
  first29?: Maybe<Scalars['Int']>;
  offset29?: Maybe<Scalars['Int']>;
  input: UpdateCommentInput;
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
  filter?: Maybe<ProjectFilter>;
  filter1?: Maybe<DeveloperFilter>;
  order?: Maybe<DeveloperOrder>;
  first?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  filter2?: Maybe<TagFilter>;
  order1?: Maybe<TagOrder>;
  first1?: Maybe<Scalars['Int']>;
  offset1?: Maybe<Scalars['Int']>;
  filter3?: Maybe<ProjectFilter>;
  filter4?: Maybe<ColumnFilter>;
  filter5?: Maybe<DeveloperFilter>;
  order2?: Maybe<DeveloperOrder>;
  first2?: Maybe<Scalars['Int']>;
  offset2?: Maybe<Scalars['Int']>;
  filter6?: Maybe<DeveloperFilter>;
  order3?: Maybe<DeveloperOrder>;
  first3?: Maybe<Scalars['Int']>;
  offset3?: Maybe<Scalars['Int']>;
  filter7?: Maybe<CommentFilter>;
  order4?: Maybe<CommentOrder>;
  first4?: Maybe<Scalars['Int']>;
  offset4?: Maybe<Scalars['Int']>;
  filter8?: Maybe<TaskFilter>;
  order5?: Maybe<TaskOrder>;
  first5?: Maybe<Scalars['Int']>;
  offset5?: Maybe<Scalars['Int']>;
  filter9?: Maybe<ProjectFilter>;
  filter10?: Maybe<ColumnFilter>;
  order6?: Maybe<ColumnOrder>;
  first6?: Maybe<Scalars['Int']>;
  offset6?: Maybe<Scalars['Int']>;
  filter11?: Maybe<BoardFilter>;
  order7?: Maybe<BoardOrder>;
  first7?: Maybe<Scalars['Int']>;
  offset7?: Maybe<Scalars['Int']>;
  filter12?: Maybe<ProjectFilter>;
  filter13?: Maybe<UserFilter>;
  order8?: Maybe<UserOrder>;
  first8?: Maybe<Scalars['Int']>;
  offset8?: Maybe<Scalars['Int']>;
  filter14?: Maybe<TagFilter>;
  order9?: Maybe<TagOrder>;
  first9?: Maybe<Scalars['Int']>;
  offset9?: Maybe<Scalars['Int']>;
  filter15?: Maybe<TaskFilter>;
  order10?: Maybe<TaskOrder>;
  first10?: Maybe<Scalars['Int']>;
  offset10?: Maybe<Scalars['Int']>;
  filter16?: Maybe<TaskFilter>;
  order11?: Maybe<TaskOrder>;
  first11?: Maybe<Scalars['Int']>;
  offset11?: Maybe<Scalars['Int']>;
  filter17?: Maybe<DeveloperFilter>;
  order12?: Maybe<DeveloperOrder>;
  first12?: Maybe<Scalars['Int']>;
  offset12?: Maybe<Scalars['Int']>;
  filter18?: Maybe<ProjectFilter>;
  filter19?: Maybe<ProjectFilter>;
  filter20?: Maybe<UserFilter>;
  order13?: Maybe<UserOrder>;
  first13?: Maybe<Scalars['Int']>;
  offset13?: Maybe<Scalars['Int']>;
  filter21?: Maybe<TagFilter>;
  order14?: Maybe<TagOrder>;
  first14?: Maybe<Scalars['Int']>;
  offset14?: Maybe<Scalars['Int']>;
  filter22?: Maybe<TaskFilter>;
  order15?: Maybe<TaskOrder>;
  first15?: Maybe<Scalars['Int']>;
  offset15?: Maybe<Scalars['Int']>;
  filter23?: Maybe<TaskFilter>;
  order16?: Maybe<TaskOrder>;
  first16?: Maybe<Scalars['Int']>;
  offset16?: Maybe<Scalars['Int']>;
  filter24?: Maybe<DeveloperFilter>;
  order17?: Maybe<DeveloperOrder>;
  first17?: Maybe<Scalars['Int']>;
  offset17?: Maybe<Scalars['Int']>;
  filter25?: Maybe<ProjectFilter>;
  filter26?: Maybe<ColumnFilter>;
  filter27?: Maybe<DeveloperFilter>;
  order18?: Maybe<DeveloperOrder>;
  first18?: Maybe<Scalars['Int']>;
  offset18?: Maybe<Scalars['Int']>;
  filter28?: Maybe<DeveloperFilter>;
  order19?: Maybe<DeveloperOrder>;
  first19?: Maybe<Scalars['Int']>;
  offset19?: Maybe<Scalars['Int']>;
  filter29?: Maybe<CommentFilter>;
  order20?: Maybe<CommentOrder>;
  first20?: Maybe<Scalars['Int']>;
  offset20?: Maybe<Scalars['Int']>;
  filter30?: Maybe<TaskFilter>;
  order21?: Maybe<TaskOrder>;
  first21?: Maybe<Scalars['Int']>;
  offset21?: Maybe<Scalars['Int']>;
  filter31?: Maybe<UserFilter>;
  order22?: Maybe<UserOrder>;
  first22?: Maybe<Scalars['Int']>;
  offset22?: Maybe<Scalars['Int']>;
  filter32?: Maybe<TagFilter>;
  order23?: Maybe<TagOrder>;
  first23?: Maybe<Scalars['Int']>;
  offset23?: Maybe<Scalars['Int']>;
  filter33?: Maybe<TaskFilter>;
  order24?: Maybe<TaskOrder>;
  first24?: Maybe<Scalars['Int']>;
  offset24?: Maybe<Scalars['Int']>;
  filter34?: Maybe<ProjectFilter>;
  filter35?: Maybe<BoardFilter>;
  filter36?: Maybe<TaskFilter>;
  order25?: Maybe<TaskOrder>;
  first25?: Maybe<Scalars['Int']>;
  offset25?: Maybe<Scalars['Int']>;
  filter37?: Maybe<ColumnFilter>;
  filter38?: Maybe<DeveloperFilter>;
  order26?: Maybe<DeveloperOrder>;
  first26?: Maybe<Scalars['Int']>;
  offset26?: Maybe<Scalars['Int']>;
  filter39?: Maybe<ProjectFilter>;
  filter40?: Maybe<UserFilter>;
  order27?: Maybe<UserOrder>;
  first27?: Maybe<Scalars['Int']>;
  offset27?: Maybe<Scalars['Int']>;
  filter41?: Maybe<TagFilter>;
  order28?: Maybe<TagOrder>;
  first28?: Maybe<Scalars['Int']>;
  offset28?: Maybe<Scalars['Int']>;
  filter42?: Maybe<TaskFilter>;
  order29?: Maybe<TaskOrder>;
  first29?: Maybe<Scalars['Int']>;
  offset29?: Maybe<Scalars['Int']>;
  filter43?: Maybe<TaskFilter>;
  order30?: Maybe<TaskOrder>;
  first30?: Maybe<Scalars['Int']>;
  offset30?: Maybe<Scalars['Int']>;
  filter44?: Maybe<DeveloperFilter>;
  order31?: Maybe<DeveloperOrder>;
  first31?: Maybe<Scalars['Int']>;
  offset31?: Maybe<Scalars['Int']>;
  filter45?: Maybe<TaskFilter>;
  filter46?: Maybe<DeveloperFilter>;
  filter47?: Maybe<CommentFilter>;
  order32?: Maybe<CommentOrder>;
  first32?: Maybe<Scalars['Int']>;
  offset32?: Maybe<Scalars['Int']>;
  filter48?: Maybe<TaskFilter>;
  order33?: Maybe<TaskOrder>;
  first33?: Maybe<Scalars['Int']>;
  offset33?: Maybe<Scalars['Int']>;
  filter49?: Maybe<DeveloperFilter>;
  order34?: Maybe<DeveloperOrder>;
  first34?: Maybe<Scalars['Int']>;
  offset34?: Maybe<Scalars['Int']>;
  input: UpdateDeveloperInput;
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
  filter?: Maybe<TaskFilter>;
  order?: Maybe<TaskOrder>;
  first?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  filter1?: Maybe<BoardFilter>;
  order1?: Maybe<BoardOrder>;
  first1?: Maybe<Scalars['Int']>;
  offset1?: Maybe<Scalars['Int']>;
  filter2?: Maybe<DeveloperFilter>;
  order2?: Maybe<DeveloperOrder>;
  first2?: Maybe<Scalars['Int']>;
  offset2?: Maybe<Scalars['Int']>;
  filter3?: Maybe<ProjectFilter>;
  filter4?: Maybe<ProjectFilter>;
  filter5?: Maybe<UserFilter>;
  order3?: Maybe<UserOrder>;
  first3?: Maybe<Scalars['Int']>;
  offset3?: Maybe<Scalars['Int']>;
  filter6?: Maybe<TagFilter>;
  order4?: Maybe<TagOrder>;
  first4?: Maybe<Scalars['Int']>;
  offset4?: Maybe<Scalars['Int']>;
  filter7?: Maybe<TaskFilter>;
  order5?: Maybe<TaskOrder>;
  first5?: Maybe<Scalars['Int']>;
  offset5?: Maybe<Scalars['Int']>;
  filter8?: Maybe<TaskFilter>;
  order6?: Maybe<TaskOrder>;
  first6?: Maybe<Scalars['Int']>;
  offset6?: Maybe<Scalars['Int']>;
  filter9?: Maybe<DeveloperFilter>;
  order7?: Maybe<DeveloperOrder>;
  first7?: Maybe<Scalars['Int']>;
  offset7?: Maybe<Scalars['Int']>;
  filter10?: Maybe<TagFilter>;
  order8?: Maybe<TagOrder>;
  first8?: Maybe<Scalars['Int']>;
  offset8?: Maybe<Scalars['Int']>;
  filter11?: Maybe<ProjectFilter>;
  order9?: Maybe<ProjectOrder>;
  first9?: Maybe<Scalars['Int']>;
  offset9?: Maybe<Scalars['Int']>;
  input: UpdateProjectInput;
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
  filter?: Maybe<ProjectFilter>;
  filter1?: Maybe<DeveloperFilter>;
  order?: Maybe<DeveloperOrder>;
  first?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  filter2?: Maybe<TagFilter>;
  order1?: Maybe<TagOrder>;
  first1?: Maybe<Scalars['Int']>;
  offset1?: Maybe<Scalars['Int']>;
  filter3?: Maybe<ProjectFilter>;
  filter4?: Maybe<ColumnFilter>;
  filter5?: Maybe<DeveloperFilter>;
  order2?: Maybe<DeveloperOrder>;
  first2?: Maybe<Scalars['Int']>;
  offset2?: Maybe<Scalars['Int']>;
  filter6?: Maybe<DeveloperFilter>;
  order3?: Maybe<DeveloperOrder>;
  first3?: Maybe<Scalars['Int']>;
  offset3?: Maybe<Scalars['Int']>;
  filter7?: Maybe<CommentFilter>;
  order4?: Maybe<CommentOrder>;
  first4?: Maybe<Scalars['Int']>;
  offset4?: Maybe<Scalars['Int']>;
  filter8?: Maybe<TaskFilter>;
  order5?: Maybe<TaskOrder>;
  first5?: Maybe<Scalars['Int']>;
  offset5?: Maybe<Scalars['Int']>;
  filter9?: Maybe<ProjectFilter>;
  filter10?: Maybe<ColumnFilter>;
  order6?: Maybe<ColumnOrder>;
  first6?: Maybe<Scalars['Int']>;
  offset6?: Maybe<Scalars['Int']>;
  filter11?: Maybe<BoardFilter>;
  order7?: Maybe<BoardOrder>;
  first7?: Maybe<Scalars['Int']>;
  offset7?: Maybe<Scalars['Int']>;
  filter12?: Maybe<ProjectFilter>;
  filter13?: Maybe<UserFilter>;
  order8?: Maybe<UserOrder>;
  first8?: Maybe<Scalars['Int']>;
  offset8?: Maybe<Scalars['Int']>;
  filter14?: Maybe<TagFilter>;
  order9?: Maybe<TagOrder>;
  first9?: Maybe<Scalars['Int']>;
  offset9?: Maybe<Scalars['Int']>;
  filter15?: Maybe<TaskFilter>;
  order10?: Maybe<TaskOrder>;
  first10?: Maybe<Scalars['Int']>;
  offset10?: Maybe<Scalars['Int']>;
  filter16?: Maybe<TaskFilter>;
  order11?: Maybe<TaskOrder>;
  first11?: Maybe<Scalars['Int']>;
  offset11?: Maybe<Scalars['Int']>;
  filter17?: Maybe<DeveloperFilter>;
  order12?: Maybe<DeveloperOrder>;
  first12?: Maybe<Scalars['Int']>;
  offset12?: Maybe<Scalars['Int']>;
  filter18?: Maybe<ProjectFilter>;
  filter19?: Maybe<DeveloperFilter>;
  order13?: Maybe<DeveloperOrder>;
  first13?: Maybe<Scalars['Int']>;
  offset13?: Maybe<Scalars['Int']>;
  filter20?: Maybe<TagFilter>;
  order14?: Maybe<TagOrder>;
  first14?: Maybe<Scalars['Int']>;
  offset14?: Maybe<Scalars['Int']>;
  input: UpdateTagInput;
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
  filter?: Maybe<ProjectFilter>;
  filter1?: Maybe<DeveloperFilter>;
  order?: Maybe<DeveloperOrder>;
  first?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  filter2?: Maybe<TagFilter>;
  order1?: Maybe<TagOrder>;
  first1?: Maybe<Scalars['Int']>;
  offset1?: Maybe<Scalars['Int']>;
  filter3?: Maybe<ProjectFilter>;
  filter4?: Maybe<ColumnFilter>;
  filter5?: Maybe<DeveloperFilter>;
  order2?: Maybe<DeveloperOrder>;
  first2?: Maybe<Scalars['Int']>;
  offset2?: Maybe<Scalars['Int']>;
  filter6?: Maybe<DeveloperFilter>;
  order3?: Maybe<DeveloperOrder>;
  first3?: Maybe<Scalars['Int']>;
  offset3?: Maybe<Scalars['Int']>;
  filter7?: Maybe<CommentFilter>;
  order4?: Maybe<CommentOrder>;
  first4?: Maybe<Scalars['Int']>;
  offset4?: Maybe<Scalars['Int']>;
  filter8?: Maybe<TaskFilter>;
  order5?: Maybe<TaskOrder>;
  first5?: Maybe<Scalars['Int']>;
  offset5?: Maybe<Scalars['Int']>;
  filter9?: Maybe<ProjectFilter>;
  filter10?: Maybe<ColumnFilter>;
  order6?: Maybe<ColumnOrder>;
  first6?: Maybe<Scalars['Int']>;
  offset6?: Maybe<Scalars['Int']>;
  filter11?: Maybe<BoardFilter>;
  order7?: Maybe<BoardOrder>;
  first7?: Maybe<Scalars['Int']>;
  offset7?: Maybe<Scalars['Int']>;
  filter12?: Maybe<ProjectFilter>;
  filter13?: Maybe<UserFilter>;
  order8?: Maybe<UserOrder>;
  first8?: Maybe<Scalars['Int']>;
  offset8?: Maybe<Scalars['Int']>;
  filter14?: Maybe<TagFilter>;
  order9?: Maybe<TagOrder>;
  first9?: Maybe<Scalars['Int']>;
  offset9?: Maybe<Scalars['Int']>;
  filter15?: Maybe<TaskFilter>;
  order10?: Maybe<TaskOrder>;
  first10?: Maybe<Scalars['Int']>;
  offset10?: Maybe<Scalars['Int']>;
  filter16?: Maybe<TaskFilter>;
  order11?: Maybe<TaskOrder>;
  first11?: Maybe<Scalars['Int']>;
  offset11?: Maybe<Scalars['Int']>;
  filter17?: Maybe<DeveloperFilter>;
  order12?: Maybe<DeveloperOrder>;
  first12?: Maybe<Scalars['Int']>;
  offset12?: Maybe<Scalars['Int']>;
  filter18?: Maybe<ProjectFilter>;
  filter19?: Maybe<ProjectFilter>;
  filter20?: Maybe<ColumnFilter>;
  order13?: Maybe<ColumnOrder>;
  first13?: Maybe<Scalars['Int']>;
  offset13?: Maybe<Scalars['Int']>;
  filter21?: Maybe<BoardFilter>;
  filter22?: Maybe<TaskFilter>;
  order14?: Maybe<TaskOrder>;
  first14?: Maybe<Scalars['Int']>;
  offset14?: Maybe<Scalars['Int']>;
  filter23?: Maybe<ColumnFilter>;
  filter24?: Maybe<DeveloperFilter>;
  order15?: Maybe<DeveloperOrder>;
  first15?: Maybe<Scalars['Int']>;
  offset15?: Maybe<Scalars['Int']>;
  filter25?: Maybe<ProjectFilter>;
  filter26?: Maybe<DeveloperFilter>;
  order16?: Maybe<DeveloperOrder>;
  first16?: Maybe<Scalars['Int']>;
  offset16?: Maybe<Scalars['Int']>;
  filter27?: Maybe<TaskFilter>;
  order17?: Maybe<TaskOrder>;
  first17?: Maybe<Scalars['Int']>;
  offset17?: Maybe<Scalars['Int']>;
  filter28?: Maybe<UserFilter>;
  order18?: Maybe<UserOrder>;
  first18?: Maybe<Scalars['Int']>;
  offset18?: Maybe<Scalars['Int']>;
  filter29?: Maybe<TagFilter>;
  order19?: Maybe<TagOrder>;
  first19?: Maybe<Scalars['Int']>;
  offset19?: Maybe<Scalars['Int']>;
  filter30?: Maybe<TaskFilter>;
  order20?: Maybe<TaskOrder>;
  first20?: Maybe<Scalars['Int']>;
  offset20?: Maybe<Scalars['Int']>;
  filter31?: Maybe<ProjectFilter>;
  filter32?: Maybe<ColumnFilter>;
  filter33?: Maybe<DeveloperFilter>;
  order21?: Maybe<DeveloperOrder>;
  first21?: Maybe<Scalars['Int']>;
  offset21?: Maybe<Scalars['Int']>;
  filter34?: Maybe<DeveloperFilter>;
  order22?: Maybe<DeveloperOrder>;
  first22?: Maybe<Scalars['Int']>;
  offset22?: Maybe<Scalars['Int']>;
  filter35?: Maybe<CommentFilter>;
  order23?: Maybe<CommentOrder>;
  first23?: Maybe<Scalars['Int']>;
  offset23?: Maybe<Scalars['Int']>;
  filter36?: Maybe<TaskFilter>;
  order24?: Maybe<TaskOrder>;
  first24?: Maybe<Scalars['Int']>;
  offset24?: Maybe<Scalars['Int']>;
  filter37?: Maybe<DeveloperFilter>;
  order25?: Maybe<DeveloperOrder>;
  first25?: Maybe<Scalars['Int']>;
  offset25?: Maybe<Scalars['Int']>;
  filter38?: Maybe<TaskFilter>;
  filter39?: Maybe<ProjectFilter>;
  filter40?: Maybe<UserFilter>;
  order26?: Maybe<UserOrder>;
  first26?: Maybe<Scalars['Int']>;
  offset26?: Maybe<Scalars['Int']>;
  filter41?: Maybe<TagFilter>;
  order27?: Maybe<TagOrder>;
  first27?: Maybe<Scalars['Int']>;
  offset27?: Maybe<Scalars['Int']>;
  filter42?: Maybe<TaskFilter>;
  order28?: Maybe<TaskOrder>;
  first28?: Maybe<Scalars['Int']>;
  offset28?: Maybe<Scalars['Int']>;
  filter43?: Maybe<TaskFilter>;
  order29?: Maybe<TaskOrder>;
  first29?: Maybe<Scalars['Int']>;
  offset29?: Maybe<Scalars['Int']>;
  filter44?: Maybe<DeveloperFilter>;
  filter45?: Maybe<CommentFilter>;
  order30?: Maybe<CommentOrder>;
  first30?: Maybe<Scalars['Int']>;
  offset30?: Maybe<Scalars['Int']>;
  filter46?: Maybe<TaskFilter>;
  order31?: Maybe<TaskOrder>;
  first31?: Maybe<Scalars['Int']>;
  offset31?: Maybe<Scalars['Int']>;
  input: UpdateTaskInput;
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
  filter?: Maybe<TagFilter>;
  order?: Maybe<TagOrder>;
  first?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  filter1?: Maybe<TaskFilter>;
  order1?: Maybe<TaskOrder>;
  first1?: Maybe<Scalars['Int']>;
  offset1?: Maybe<Scalars['Int']>;
  filter2?: Maybe<BoardFilter>;
  order2?: Maybe<BoardOrder>;
  first2?: Maybe<Scalars['Int']>;
  offset2?: Maybe<Scalars['Int']>;
  filter3?: Maybe<DeveloperFilter>;
  order3?: Maybe<DeveloperOrder>;
  first3?: Maybe<Scalars['Int']>;
  offset3?: Maybe<Scalars['Int']>;
  filter4?: Maybe<ProjectFilter>;
  filter5?: Maybe<TaskFilter>;
  order4?: Maybe<TaskOrder>;
  first4?: Maybe<Scalars['Int']>;
  offset4?: Maybe<Scalars['Int']>;
  filter6?: Maybe<UserFilter>;
  order5?: Maybe<UserOrder>;
  first5?: Maybe<Scalars['Int']>;
  offset5?: Maybe<Scalars['Int']>;
  filter7?: Maybe<ProjectFilter>;
  filter8?: Maybe<DeveloperFilter>;
  order6?: Maybe<DeveloperOrder>;
  first6?: Maybe<Scalars['Int']>;
  offset6?: Maybe<Scalars['Int']>;
  filter9?: Maybe<TagFilter>;
  order7?: Maybe<TagOrder>;
  first7?: Maybe<Scalars['Int']>;
  offset7?: Maybe<Scalars['Int']>;
  filter10?: Maybe<ProjectFilter>;
  filter11?: Maybe<ColumnFilter>;
  filter12?: Maybe<DeveloperFilter>;
  order8?: Maybe<DeveloperOrder>;
  first8?: Maybe<Scalars['Int']>;
  offset8?: Maybe<Scalars['Int']>;
  filter13?: Maybe<DeveloperFilter>;
  order9?: Maybe<DeveloperOrder>;
  first9?: Maybe<Scalars['Int']>;
  offset9?: Maybe<Scalars['Int']>;
  filter14?: Maybe<CommentFilter>;
  order10?: Maybe<CommentOrder>;
  first10?: Maybe<Scalars['Int']>;
  offset10?: Maybe<Scalars['Int']>;
  filter15?: Maybe<TaskFilter>;
  order11?: Maybe<TaskOrder>;
  first11?: Maybe<Scalars['Int']>;
  offset11?: Maybe<Scalars['Int']>;
  filter16?: Maybe<ProjectFilter>;
  filter17?: Maybe<ColumnFilter>;
  filter18?: Maybe<DeveloperFilter>;
  order12?: Maybe<DeveloperOrder>;
  first12?: Maybe<Scalars['Int']>;
  offset12?: Maybe<Scalars['Int']>;
  filter19?: Maybe<DeveloperFilter>;
  order13?: Maybe<DeveloperOrder>;
  first13?: Maybe<Scalars['Int']>;
  offset13?: Maybe<Scalars['Int']>;
  filter20?: Maybe<CommentFilter>;
  order14?: Maybe<CommentOrder>;
  first14?: Maybe<Scalars['Int']>;
  offset14?: Maybe<Scalars['Int']>;
  filter21?: Maybe<TaskFilter>;
  order15?: Maybe<TaskOrder>;
  first15?: Maybe<Scalars['Int']>;
  offset15?: Maybe<Scalars['Int']>;
  filter22?: Maybe<DeveloperFilter>;
  order16?: Maybe<DeveloperOrder>;
  first16?: Maybe<Scalars['Int']>;
  offset16?: Maybe<Scalars['Int']>;
  filter23?: Maybe<UserFilter>;
  order17?: Maybe<UserOrder>;
  first17?: Maybe<Scalars['Int']>;
  offset17?: Maybe<Scalars['Int']>;
  input: UpdateUserInput;
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
  filter?: Maybe<TaskFilter>;
  order?: Maybe<TaskOrder>;
  first?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  filter1?: Maybe<BoardFilter>;
  order1?: Maybe<BoardOrder>;
  first1?: Maybe<Scalars['Int']>;
  offset1?: Maybe<Scalars['Int']>;
  filter2?: Maybe<DeveloperFilter>;
  order2?: Maybe<DeveloperOrder>;
  first2?: Maybe<Scalars['Int']>;
  offset2?: Maybe<Scalars['Int']>;
  filter3?: Maybe<ProjectFilter>;
  filter4?: Maybe<ProjectFilter>;
  filter5?: Maybe<UserFilter>;
  order3?: Maybe<UserOrder>;
  first3?: Maybe<Scalars['Int']>;
  offset3?: Maybe<Scalars['Int']>;
  filter6?: Maybe<TagFilter>;
  order4?: Maybe<TagOrder>;
  first4?: Maybe<Scalars['Int']>;
  offset4?: Maybe<Scalars['Int']>;
  filter7?: Maybe<TaskFilter>;
  order5?: Maybe<TaskOrder>;
  first5?: Maybe<Scalars['Int']>;
  offset5?: Maybe<Scalars['Int']>;
  filter8?: Maybe<TaskFilter>;
  order6?: Maybe<TaskOrder>;
  first6?: Maybe<Scalars['Int']>;
  offset6?: Maybe<Scalars['Int']>;
  filter9?: Maybe<DeveloperFilter>;
  order7?: Maybe<DeveloperOrder>;
  first7?: Maybe<Scalars['Int']>;
  offset7?: Maybe<Scalars['Int']>;
  filter10?: Maybe<TagFilter>;
  order8?: Maybe<TagOrder>;
  first8?: Maybe<Scalars['Int']>;
  offset8?: Maybe<Scalars['Int']>;
  filter11?: Maybe<ProjectFilter>;
  filter12?: Maybe<ProjectFilter>;
  filter13?: Maybe<TaskFilter>;
  order9?: Maybe<TaskOrder>;
  first9?: Maybe<Scalars['Int']>;
  offset9?: Maybe<Scalars['Int']>;
  filter14?: Maybe<ColumnFilter>;
  order10?: Maybe<ColumnOrder>;
  first10?: Maybe<Scalars['Int']>;
  offset10?: Maybe<Scalars['Int']>;
  filter15?: Maybe<BoardFilter>;
  filter16?: Maybe<ColumnFilter>;
  order11?: Maybe<ColumnOrder>;
  first11?: Maybe<Scalars['Int']>;
  offset11?: Maybe<Scalars['Int']>;
  id: Scalars['ID'];
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
  filter?: Maybe<ProjectFilter>;
  filter1?: Maybe<DeveloperFilter>;
  order?: Maybe<DeveloperOrder>;
  first?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  filter2?: Maybe<TagFilter>;
  order1?: Maybe<TagOrder>;
  first1?: Maybe<Scalars['Int']>;
  offset1?: Maybe<Scalars['Int']>;
  filter3?: Maybe<ProjectFilter>;
  filter4?: Maybe<ColumnFilter>;
  filter5?: Maybe<DeveloperFilter>;
  order2?: Maybe<DeveloperOrder>;
  first2?: Maybe<Scalars['Int']>;
  offset2?: Maybe<Scalars['Int']>;
  filter6?: Maybe<DeveloperFilter>;
  order3?: Maybe<DeveloperOrder>;
  first3?: Maybe<Scalars['Int']>;
  offset3?: Maybe<Scalars['Int']>;
  filter7?: Maybe<CommentFilter>;
  order4?: Maybe<CommentOrder>;
  first4?: Maybe<Scalars['Int']>;
  offset4?: Maybe<Scalars['Int']>;
  filter8?: Maybe<TaskFilter>;
  order5?: Maybe<TaskOrder>;
  first5?: Maybe<Scalars['Int']>;
  offset5?: Maybe<Scalars['Int']>;
  filter9?: Maybe<ProjectFilter>;
  filter10?: Maybe<ColumnFilter>;
  order6?: Maybe<ColumnOrder>;
  first6?: Maybe<Scalars['Int']>;
  offset6?: Maybe<Scalars['Int']>;
  filter11?: Maybe<BoardFilter>;
  order7?: Maybe<BoardOrder>;
  first7?: Maybe<Scalars['Int']>;
  offset7?: Maybe<Scalars['Int']>;
  filter12?: Maybe<ProjectFilter>;
  filter13?: Maybe<UserFilter>;
  order8?: Maybe<UserOrder>;
  first8?: Maybe<Scalars['Int']>;
  offset8?: Maybe<Scalars['Int']>;
  filter14?: Maybe<TagFilter>;
  order9?: Maybe<TagOrder>;
  first9?: Maybe<Scalars['Int']>;
  offset9?: Maybe<Scalars['Int']>;
  filter15?: Maybe<TaskFilter>;
  order10?: Maybe<TaskOrder>;
  first10?: Maybe<Scalars['Int']>;
  offset10?: Maybe<Scalars['Int']>;
  filter16?: Maybe<TaskFilter>;
  order11?: Maybe<TaskOrder>;
  first11?: Maybe<Scalars['Int']>;
  offset11?: Maybe<Scalars['Int']>;
  filter17?: Maybe<DeveloperFilter>;
  order12?: Maybe<DeveloperOrder>;
  first12?: Maybe<Scalars['Int']>;
  offset12?: Maybe<Scalars['Int']>;
  filter18?: Maybe<ProjectFilter>;
  filter19?: Maybe<BoardFilter>;
  filter20?: Maybe<TaskFilter>;
  order13?: Maybe<TaskOrder>;
  first13?: Maybe<Scalars['Int']>;
  offset13?: Maybe<Scalars['Int']>;
  filter21?: Maybe<ColumnFilter>;
  order14?: Maybe<ColumnOrder>;
  first14?: Maybe<Scalars['Int']>;
  offset14?: Maybe<Scalars['Int']>;
  filter22?: Maybe<BoardFilter>;
  filter23?: Maybe<TaskFilter>;
  order15?: Maybe<TaskOrder>;
  first15?: Maybe<Scalars['Int']>;
  offset15?: Maybe<Scalars['Int']>;
  id: Scalars['ID'];
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
  filter?: Maybe<ProjectFilter>;
  filter1?: Maybe<DeveloperFilter>;
  order?: Maybe<DeveloperOrder>;
  first?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  filter2?: Maybe<TagFilter>;
  order1?: Maybe<TagOrder>;
  first1?: Maybe<Scalars['Int']>;
  offset1?: Maybe<Scalars['Int']>;
  filter3?: Maybe<ProjectFilter>;
  filter4?: Maybe<ColumnFilter>;
  filter5?: Maybe<DeveloperFilter>;
  order2?: Maybe<DeveloperOrder>;
  first2?: Maybe<Scalars['Int']>;
  offset2?: Maybe<Scalars['Int']>;
  filter6?: Maybe<DeveloperFilter>;
  order3?: Maybe<DeveloperOrder>;
  first3?: Maybe<Scalars['Int']>;
  offset3?: Maybe<Scalars['Int']>;
  filter7?: Maybe<CommentFilter>;
  order4?: Maybe<CommentOrder>;
  first4?: Maybe<Scalars['Int']>;
  offset4?: Maybe<Scalars['Int']>;
  filter8?: Maybe<TaskFilter>;
  order5?: Maybe<TaskOrder>;
  first5?: Maybe<Scalars['Int']>;
  offset5?: Maybe<Scalars['Int']>;
  filter9?: Maybe<ProjectFilter>;
  filter10?: Maybe<ColumnFilter>;
  order6?: Maybe<ColumnOrder>;
  first6?: Maybe<Scalars['Int']>;
  offset6?: Maybe<Scalars['Int']>;
  filter11?: Maybe<BoardFilter>;
  order7?: Maybe<BoardOrder>;
  first7?: Maybe<Scalars['Int']>;
  offset7?: Maybe<Scalars['Int']>;
  filter12?: Maybe<ProjectFilter>;
  filter13?: Maybe<UserFilter>;
  order8?: Maybe<UserOrder>;
  first8?: Maybe<Scalars['Int']>;
  offset8?: Maybe<Scalars['Int']>;
  filter14?: Maybe<TagFilter>;
  order9?: Maybe<TagOrder>;
  first9?: Maybe<Scalars['Int']>;
  offset9?: Maybe<Scalars['Int']>;
  filter15?: Maybe<TaskFilter>;
  order10?: Maybe<TaskOrder>;
  first10?: Maybe<Scalars['Int']>;
  offset10?: Maybe<Scalars['Int']>;
  filter16?: Maybe<TaskFilter>;
  order11?: Maybe<TaskOrder>;
  first11?: Maybe<Scalars['Int']>;
  offset11?: Maybe<Scalars['Int']>;
  filter17?: Maybe<DeveloperFilter>;
  order12?: Maybe<DeveloperOrder>;
  first12?: Maybe<Scalars['Int']>;
  offset12?: Maybe<Scalars['Int']>;
  filter18?: Maybe<ProjectFilter>;
  filter19?: Maybe<ProjectFilter>;
  filter20?: Maybe<ColumnFilter>;
  order13?: Maybe<ColumnOrder>;
  first13?: Maybe<Scalars['Int']>;
  offset13?: Maybe<Scalars['Int']>;
  filter21?: Maybe<BoardFilter>;
  filter22?: Maybe<TaskFilter>;
  order14?: Maybe<TaskOrder>;
  first14?: Maybe<Scalars['Int']>;
  offset14?: Maybe<Scalars['Int']>;
  filter23?: Maybe<ColumnFilter>;
  filter24?: Maybe<DeveloperFilter>;
  order15?: Maybe<DeveloperOrder>;
  first15?: Maybe<Scalars['Int']>;
  offset15?: Maybe<Scalars['Int']>;
  filter25?: Maybe<ProjectFilter>;
  filter26?: Maybe<DeveloperFilter>;
  order16?: Maybe<DeveloperOrder>;
  first16?: Maybe<Scalars['Int']>;
  offset16?: Maybe<Scalars['Int']>;
  filter27?: Maybe<TaskFilter>;
  order17?: Maybe<TaskOrder>;
  first17?: Maybe<Scalars['Int']>;
  offset17?: Maybe<Scalars['Int']>;
  filter28?: Maybe<UserFilter>;
  order18?: Maybe<UserOrder>;
  first18?: Maybe<Scalars['Int']>;
  offset18?: Maybe<Scalars['Int']>;
  filter29?: Maybe<TagFilter>;
  order19?: Maybe<TagOrder>;
  first19?: Maybe<Scalars['Int']>;
  offset19?: Maybe<Scalars['Int']>;
  filter30?: Maybe<TaskFilter>;
  order20?: Maybe<TaskOrder>;
  first20?: Maybe<Scalars['Int']>;
  offset20?: Maybe<Scalars['Int']>;
  filter31?: Maybe<ProjectFilter>;
  filter32?: Maybe<ColumnFilter>;
  filter33?: Maybe<DeveloperFilter>;
  order21?: Maybe<DeveloperOrder>;
  first21?: Maybe<Scalars['Int']>;
  offset21?: Maybe<Scalars['Int']>;
  filter34?: Maybe<DeveloperFilter>;
  order22?: Maybe<DeveloperOrder>;
  first22?: Maybe<Scalars['Int']>;
  offset22?: Maybe<Scalars['Int']>;
  filter35?: Maybe<CommentFilter>;
  order23?: Maybe<CommentOrder>;
  first23?: Maybe<Scalars['Int']>;
  offset23?: Maybe<Scalars['Int']>;
  filter36?: Maybe<TaskFilter>;
  order24?: Maybe<TaskOrder>;
  first24?: Maybe<Scalars['Int']>;
  offset24?: Maybe<Scalars['Int']>;
  filter37?: Maybe<DeveloperFilter>;
  order25?: Maybe<DeveloperOrder>;
  first25?: Maybe<Scalars['Int']>;
  offset25?: Maybe<Scalars['Int']>;
  filter38?: Maybe<TaskFilter>;
  filter39?: Maybe<ProjectFilter>;
  filter40?: Maybe<UserFilter>;
  order26?: Maybe<UserOrder>;
  first26?: Maybe<Scalars['Int']>;
  offset26?: Maybe<Scalars['Int']>;
  filter41?: Maybe<TagFilter>;
  order27?: Maybe<TagOrder>;
  first27?: Maybe<Scalars['Int']>;
  offset27?: Maybe<Scalars['Int']>;
  filter42?: Maybe<TaskFilter>;
  order28?: Maybe<TaskOrder>;
  first28?: Maybe<Scalars['Int']>;
  offset28?: Maybe<Scalars['Int']>;
  filter43?: Maybe<TaskFilter>;
  order29?: Maybe<TaskOrder>;
  first29?: Maybe<Scalars['Int']>;
  offset29?: Maybe<Scalars['Int']>;
  filter44?: Maybe<DeveloperFilter>;
  filter45?: Maybe<CommentFilter>;
  order30?: Maybe<CommentOrder>;
  first30?: Maybe<Scalars['Int']>;
  offset30?: Maybe<Scalars['Int']>;
  filter46?: Maybe<TaskFilter>;
  filter47?: Maybe<DeveloperFilter>;
  id: Scalars['ID'];
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
  filter?: Maybe<TaskFilter>;
  order?: Maybe<TaskOrder>;
  first?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  filter1?: Maybe<BoardFilter>;
  order1?: Maybe<BoardOrder>;
  first1?: Maybe<Scalars['Int']>;
  offset1?: Maybe<Scalars['Int']>;
  filter2?: Maybe<DeveloperFilter>;
  order2?: Maybe<DeveloperOrder>;
  first2?: Maybe<Scalars['Int']>;
  offset2?: Maybe<Scalars['Int']>;
  filter3?: Maybe<ProjectFilter>;
  filter4?: Maybe<ProjectFilter>;
  filter5?: Maybe<UserFilter>;
  order3?: Maybe<UserOrder>;
  first3?: Maybe<Scalars['Int']>;
  offset3?: Maybe<Scalars['Int']>;
  filter6?: Maybe<TagFilter>;
  order4?: Maybe<TagOrder>;
  first4?: Maybe<Scalars['Int']>;
  offset4?: Maybe<Scalars['Int']>;
  filter7?: Maybe<TaskFilter>;
  order5?: Maybe<TaskOrder>;
  first5?: Maybe<Scalars['Int']>;
  offset5?: Maybe<Scalars['Int']>;
  filter8?: Maybe<TaskFilter>;
  order6?: Maybe<TaskOrder>;
  first6?: Maybe<Scalars['Int']>;
  offset6?: Maybe<Scalars['Int']>;
  filter9?: Maybe<DeveloperFilter>;
  order7?: Maybe<DeveloperOrder>;
  first7?: Maybe<Scalars['Int']>;
  offset7?: Maybe<Scalars['Int']>;
  filter10?: Maybe<TagFilter>;
  order8?: Maybe<TagOrder>;
  first8?: Maybe<Scalars['Int']>;
  offset8?: Maybe<Scalars['Int']>;
  filter11?: Maybe<ProjectFilter>;
  filter12?: Maybe<ProjectFilter>;
  filter13?: Maybe<TaskFilter>;
  order9?: Maybe<TaskOrder>;
  first9?: Maybe<Scalars['Int']>;
  offset9?: Maybe<Scalars['Int']>;
  filter14?: Maybe<UserFilter>;
  order10?: Maybe<UserOrder>;
  first10?: Maybe<Scalars['Int']>;
  offset10?: Maybe<Scalars['Int']>;
  filter15?: Maybe<TagFilter>;
  order11?: Maybe<TagOrder>;
  first11?: Maybe<Scalars['Int']>;
  offset11?: Maybe<Scalars['Int']>;
  filter16?: Maybe<ProjectFilter>;
  filter17?: Maybe<ColumnFilter>;
  filter18?: Maybe<DeveloperFilter>;
  order12?: Maybe<DeveloperOrder>;
  first12?: Maybe<Scalars['Int']>;
  offset12?: Maybe<Scalars['Int']>;
  filter19?: Maybe<DeveloperFilter>;
  order13?: Maybe<DeveloperOrder>;
  first13?: Maybe<Scalars['Int']>;
  offset13?: Maybe<Scalars['Int']>;
  filter20?: Maybe<CommentFilter>;
  order14?: Maybe<CommentOrder>;
  first14?: Maybe<Scalars['Int']>;
  offset14?: Maybe<Scalars['Int']>;
  filter21?: Maybe<TaskFilter>;
  order15?: Maybe<TaskOrder>;
  first15?: Maybe<Scalars['Int']>;
  offset15?: Maybe<Scalars['Int']>;
  filter22?: Maybe<ProjectFilter>;
  filter23?: Maybe<ColumnFilter>;
  filter24?: Maybe<DeveloperFilter>;
  order16?: Maybe<DeveloperOrder>;
  first16?: Maybe<Scalars['Int']>;
  offset16?: Maybe<Scalars['Int']>;
  filter25?: Maybe<DeveloperFilter>;
  order17?: Maybe<DeveloperOrder>;
  first17?: Maybe<Scalars['Int']>;
  offset17?: Maybe<Scalars['Int']>;
  filter26?: Maybe<CommentFilter>;
  order18?: Maybe<CommentOrder>;
  first18?: Maybe<Scalars['Int']>;
  offset18?: Maybe<Scalars['Int']>;
  filter27?: Maybe<TaskFilter>;
  order19?: Maybe<TaskOrder>;
  first19?: Maybe<Scalars['Int']>;
  offset19?: Maybe<Scalars['Int']>;
  filter28?: Maybe<DeveloperFilter>;
  order20?: Maybe<DeveloperOrder>;
  first20?: Maybe<Scalars['Int']>;
  offset20?: Maybe<Scalars['Int']>;
  filter29?: Maybe<UserFilter>;
  order21?: Maybe<UserOrder>;
  first21?: Maybe<Scalars['Int']>;
  offset21?: Maybe<Scalars['Int']>;
  filter30?: Maybe<TagFilter>;
  order22?: Maybe<TagOrder>;
  first22?: Maybe<Scalars['Int']>;
  offset22?: Maybe<Scalars['Int']>;
  filter31?: Maybe<TaskFilter>;
  order23?: Maybe<TaskOrder>;
  first23?: Maybe<Scalars['Int']>;
  offset23?: Maybe<Scalars['Int']>;
  filter32?: Maybe<TaskFilter>;
  order24?: Maybe<TaskOrder>;
  first24?: Maybe<Scalars['Int']>;
  offset24?: Maybe<Scalars['Int']>;
  id: Scalars['ID'];
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
  filter?: Maybe<DeveloperFilter>;
  order?: Maybe<DeveloperOrder>;
  first?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  filter1?: Maybe<TagFilter>;
  order1?: Maybe<TagOrder>;
  first1?: Maybe<Scalars['Int']>;
  offset1?: Maybe<Scalars['Int']>;
  filter2?: Maybe<ProjectFilter>;
  filter3?: Maybe<ColumnFilter>;
  filter4?: Maybe<DeveloperFilter>;
  order2?: Maybe<DeveloperOrder>;
  first2?: Maybe<Scalars['Int']>;
  offset2?: Maybe<Scalars['Int']>;
  filter5?: Maybe<DeveloperFilter>;
  order3?: Maybe<DeveloperOrder>;
  first3?: Maybe<Scalars['Int']>;
  offset3?: Maybe<Scalars['Int']>;
  filter6?: Maybe<CommentFilter>;
  order4?: Maybe<CommentOrder>;
  first4?: Maybe<Scalars['Int']>;
  offset4?: Maybe<Scalars['Int']>;
  filter7?: Maybe<TaskFilter>;
  order5?: Maybe<TaskOrder>;
  first5?: Maybe<Scalars['Int']>;
  offset5?: Maybe<Scalars['Int']>;
  filter8?: Maybe<ProjectFilter>;
  filter9?: Maybe<ColumnFilter>;
  order6?: Maybe<ColumnOrder>;
  first6?: Maybe<Scalars['Int']>;
  offset6?: Maybe<Scalars['Int']>;
  filter10?: Maybe<BoardFilter>;
  order7?: Maybe<BoardOrder>;
  first7?: Maybe<Scalars['Int']>;
  offset7?: Maybe<Scalars['Int']>;
  filter11?: Maybe<ProjectFilter>;
  filter12?: Maybe<UserFilter>;
  order8?: Maybe<UserOrder>;
  first8?: Maybe<Scalars['Int']>;
  offset8?: Maybe<Scalars['Int']>;
  filter13?: Maybe<TagFilter>;
  order9?: Maybe<TagOrder>;
  first9?: Maybe<Scalars['Int']>;
  offset9?: Maybe<Scalars['Int']>;
  filter14?: Maybe<TaskFilter>;
  order10?: Maybe<TaskOrder>;
  first10?: Maybe<Scalars['Int']>;
  offset10?: Maybe<Scalars['Int']>;
  filter15?: Maybe<TaskFilter>;
  order11?: Maybe<TaskOrder>;
  first11?: Maybe<Scalars['Int']>;
  offset11?: Maybe<Scalars['Int']>;
  filter16?: Maybe<DeveloperFilter>;
  order12?: Maybe<DeveloperOrder>;
  first12?: Maybe<Scalars['Int']>;
  offset12?: Maybe<Scalars['Int']>;
  filter17?: Maybe<ProjectFilter>;
  filter18?: Maybe<TagFilter>;
  order13?: Maybe<TagOrder>;
  first13?: Maybe<Scalars['Int']>;
  offset13?: Maybe<Scalars['Int']>;
  filter19?: Maybe<TaskFilter>;
  order14?: Maybe<TaskOrder>;
  first14?: Maybe<Scalars['Int']>;
  offset14?: Maybe<Scalars['Int']>;
  filter20?: Maybe<BoardFilter>;
  order15?: Maybe<BoardOrder>;
  first15?: Maybe<Scalars['Int']>;
  offset15?: Maybe<Scalars['Int']>;
  filter21?: Maybe<DeveloperFilter>;
  order16?: Maybe<DeveloperOrder>;
  first16?: Maybe<Scalars['Int']>;
  offset16?: Maybe<Scalars['Int']>;
  id: Scalars['ID'];
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
  filter?: Maybe<TaskFilter>;
  order?: Maybe<TaskOrder>;
  first?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  filter1?: Maybe<BoardFilter>;
  order1?: Maybe<BoardOrder>;
  first1?: Maybe<Scalars['Int']>;
  offset1?: Maybe<Scalars['Int']>;
  filter2?: Maybe<DeveloperFilter>;
  order2?: Maybe<DeveloperOrder>;
  first2?: Maybe<Scalars['Int']>;
  offset2?: Maybe<Scalars['Int']>;
  filter3?: Maybe<ProjectFilter>;
  filter4?: Maybe<ProjectFilter>;
  filter5?: Maybe<UserFilter>;
  order3?: Maybe<UserOrder>;
  first3?: Maybe<Scalars['Int']>;
  offset3?: Maybe<Scalars['Int']>;
  filter6?: Maybe<TagFilter>;
  order4?: Maybe<TagOrder>;
  first4?: Maybe<Scalars['Int']>;
  offset4?: Maybe<Scalars['Int']>;
  filter7?: Maybe<TaskFilter>;
  order5?: Maybe<TaskOrder>;
  first5?: Maybe<Scalars['Int']>;
  offset5?: Maybe<Scalars['Int']>;
  filter8?: Maybe<TaskFilter>;
  order6?: Maybe<TaskOrder>;
  first6?: Maybe<Scalars['Int']>;
  offset6?: Maybe<Scalars['Int']>;
  filter9?: Maybe<DeveloperFilter>;
  order7?: Maybe<DeveloperOrder>;
  first7?: Maybe<Scalars['Int']>;
  offset7?: Maybe<Scalars['Int']>;
  filter10?: Maybe<TagFilter>;
  order8?: Maybe<TagOrder>;
  first8?: Maybe<Scalars['Int']>;
  offset8?: Maybe<Scalars['Int']>;
  filter11?: Maybe<ProjectFilter>;
  filter12?: Maybe<DeveloperFilter>;
  order9?: Maybe<DeveloperOrder>;
  first9?: Maybe<Scalars['Int']>;
  offset9?: Maybe<Scalars['Int']>;
  id: Scalars['ID'];
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
  filter?: Maybe<TaskFilter>;
  order?: Maybe<TaskOrder>;
  first?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  filter1?: Maybe<BoardFilter>;
  order1?: Maybe<BoardOrder>;
  first1?: Maybe<Scalars['Int']>;
  offset1?: Maybe<Scalars['Int']>;
  filter2?: Maybe<DeveloperFilter>;
  order2?: Maybe<DeveloperOrder>;
  first2?: Maybe<Scalars['Int']>;
  offset2?: Maybe<Scalars['Int']>;
  filter3?: Maybe<ProjectFilter>;
  filter4?: Maybe<ProjectFilter>;
  filter5?: Maybe<UserFilter>;
  order3?: Maybe<UserOrder>;
  first3?: Maybe<Scalars['Int']>;
  offset3?: Maybe<Scalars['Int']>;
  filter6?: Maybe<TagFilter>;
  order4?: Maybe<TagOrder>;
  first4?: Maybe<Scalars['Int']>;
  offset4?: Maybe<Scalars['Int']>;
  filter7?: Maybe<TaskFilter>;
  order5?: Maybe<TaskOrder>;
  first5?: Maybe<Scalars['Int']>;
  offset5?: Maybe<Scalars['Int']>;
  filter8?: Maybe<TaskFilter>;
  order6?: Maybe<TaskOrder>;
  first6?: Maybe<Scalars['Int']>;
  offset6?: Maybe<Scalars['Int']>;
  filter9?: Maybe<DeveloperFilter>;
  order7?: Maybe<DeveloperOrder>;
  first7?: Maybe<Scalars['Int']>;
  offset7?: Maybe<Scalars['Int']>;
  filter10?: Maybe<TagFilter>;
  order8?: Maybe<TagOrder>;
  first8?: Maybe<Scalars['Int']>;
  offset8?: Maybe<Scalars['Int']>;
  filter11?: Maybe<ProjectFilter>;
  filter12?: Maybe<ProjectFilter>;
  filter13?: Maybe<BoardFilter>;
  filter14?: Maybe<TaskFilter>;
  order9?: Maybe<TaskOrder>;
  first9?: Maybe<Scalars['Int']>;
  offset9?: Maybe<Scalars['Int']>;
  filter15?: Maybe<ColumnFilter>;
  order10?: Maybe<ColumnOrder>;
  first10?: Maybe<Scalars['Int']>;
  offset10?: Maybe<Scalars['Int']>;
  filter16?: Maybe<BoardFilter>;
  filter17?: Maybe<ProjectFilter>;
  filter18?: Maybe<ColumnFilter>;
  filter19?: Maybe<DeveloperFilter>;
  order11?: Maybe<DeveloperOrder>;
  first11?: Maybe<Scalars['Int']>;
  offset11?: Maybe<Scalars['Int']>;
  filter20?: Maybe<ProjectFilter>;
  filter21?: Maybe<UserFilter>;
  order12?: Maybe<UserOrder>;
  first12?: Maybe<Scalars['Int']>;
  offset12?: Maybe<Scalars['Int']>;
  filter22?: Maybe<TagFilter>;
  order13?: Maybe<TagOrder>;
  first13?: Maybe<Scalars['Int']>;
  offset13?: Maybe<Scalars['Int']>;
  filter23?: Maybe<TaskFilter>;
  order14?: Maybe<TaskOrder>;
  first14?: Maybe<Scalars['Int']>;
  offset14?: Maybe<Scalars['Int']>;
  filter24?: Maybe<TaskFilter>;
  order15?: Maybe<TaskOrder>;
  first15?: Maybe<Scalars['Int']>;
  offset15?: Maybe<Scalars['Int']>;
  filter25?: Maybe<DeveloperFilter>;
  order16?: Maybe<DeveloperOrder>;
  first16?: Maybe<Scalars['Int']>;
  offset16?: Maybe<Scalars['Int']>;
  filter26?: Maybe<TaskFilter>;
  filter27?: Maybe<DeveloperFilter>;
  filter28?: Maybe<CommentFilter>;
  order17?: Maybe<CommentOrder>;
  first17?: Maybe<Scalars['Int']>;
  offset17?: Maybe<Scalars['Int']>;
  filter29?: Maybe<TaskFilter>;
  order18?: Maybe<TaskOrder>;
  first18?: Maybe<Scalars['Int']>;
  offset18?: Maybe<Scalars['Int']>;
  filter30?: Maybe<ColumnFilter>;
  filter31?: Maybe<DeveloperFilter>;
  order19?: Maybe<DeveloperOrder>;
  first19?: Maybe<Scalars['Int']>;
  offset19?: Maybe<Scalars['Int']>;
  filter32?: Maybe<DeveloperFilter>;
  order20?: Maybe<DeveloperOrder>;
  first20?: Maybe<Scalars['Int']>;
  offset20?: Maybe<Scalars['Int']>;
  filter33?: Maybe<CommentFilter>;
  order21?: Maybe<CommentOrder>;
  first21?: Maybe<Scalars['Int']>;
  offset21?: Maybe<Scalars['Int']>;
  id: Scalars['ID'];
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
  filter?: Maybe<ProjectFilter>;
  filter1?: Maybe<DeveloperFilter>;
  order?: Maybe<DeveloperOrder>;
  first?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  filter2?: Maybe<TagFilter>;
  order1?: Maybe<TagOrder>;
  first1?: Maybe<Scalars['Int']>;
  offset1?: Maybe<Scalars['Int']>;
  filter3?: Maybe<ProjectFilter>;
  filter4?: Maybe<ColumnFilter>;
  filter5?: Maybe<DeveloperFilter>;
  order2?: Maybe<DeveloperOrder>;
  first2?: Maybe<Scalars['Int']>;
  offset2?: Maybe<Scalars['Int']>;
  filter6?: Maybe<DeveloperFilter>;
  order3?: Maybe<DeveloperOrder>;
  first3?: Maybe<Scalars['Int']>;
  offset3?: Maybe<Scalars['Int']>;
  filter7?: Maybe<CommentFilter>;
  order4?: Maybe<CommentOrder>;
  first4?: Maybe<Scalars['Int']>;
  offset4?: Maybe<Scalars['Int']>;
  filter8?: Maybe<TaskFilter>;
  order5?: Maybe<TaskOrder>;
  first5?: Maybe<Scalars['Int']>;
  offset5?: Maybe<Scalars['Int']>;
  filter9?: Maybe<ProjectFilter>;
  filter10?: Maybe<ColumnFilter>;
  order6?: Maybe<ColumnOrder>;
  first6?: Maybe<Scalars['Int']>;
  offset6?: Maybe<Scalars['Int']>;
  filter11?: Maybe<BoardFilter>;
  order7?: Maybe<BoardOrder>;
  first7?: Maybe<Scalars['Int']>;
  offset7?: Maybe<Scalars['Int']>;
  filter12?: Maybe<ProjectFilter>;
  filter13?: Maybe<UserFilter>;
  order8?: Maybe<UserOrder>;
  first8?: Maybe<Scalars['Int']>;
  offset8?: Maybe<Scalars['Int']>;
  filter14?: Maybe<TagFilter>;
  order9?: Maybe<TagOrder>;
  first9?: Maybe<Scalars['Int']>;
  offset9?: Maybe<Scalars['Int']>;
  filter15?: Maybe<TaskFilter>;
  order10?: Maybe<TaskOrder>;
  first10?: Maybe<Scalars['Int']>;
  offset10?: Maybe<Scalars['Int']>;
  filter16?: Maybe<TaskFilter>;
  order11?: Maybe<TaskOrder>;
  first11?: Maybe<Scalars['Int']>;
  offset11?: Maybe<Scalars['Int']>;
  filter17?: Maybe<DeveloperFilter>;
  order12?: Maybe<DeveloperOrder>;
  first12?: Maybe<Scalars['Int']>;
  offset12?: Maybe<Scalars['Int']>;
  filter18?: Maybe<ProjectFilter>;
  filter19?: Maybe<TagFilter>;
  order13?: Maybe<TagOrder>;
  first13?: Maybe<Scalars['Int']>;
  offset13?: Maybe<Scalars['Int']>;
  filter20?: Maybe<TaskFilter>;
  order14?: Maybe<TaskOrder>;
  first14?: Maybe<Scalars['Int']>;
  offset14?: Maybe<Scalars['Int']>;
  filter21?: Maybe<TaskFilter>;
  order15?: Maybe<TaskOrder>;
  first15?: Maybe<Scalars['Int']>;
  offset15?: Maybe<Scalars['Int']>;
  filter22?: Maybe<DeveloperFilter>;
  order16?: Maybe<DeveloperOrder>;
  first16?: Maybe<Scalars['Int']>;
  offset16?: Maybe<Scalars['Int']>;
  filter23?: Maybe<ProjectFilter>;
  filter24?: Maybe<ColumnFilter>;
  filter25?: Maybe<DeveloperFilter>;
  order17?: Maybe<DeveloperOrder>;
  first17?: Maybe<Scalars['Int']>;
  offset17?: Maybe<Scalars['Int']>;
  filter26?: Maybe<DeveloperFilter>;
  order18?: Maybe<DeveloperOrder>;
  first18?: Maybe<Scalars['Int']>;
  offset18?: Maybe<Scalars['Int']>;
  filter27?: Maybe<CommentFilter>;
  order19?: Maybe<CommentOrder>;
  first19?: Maybe<Scalars['Int']>;
  offset19?: Maybe<Scalars['Int']>;
  filter28?: Maybe<TaskFilter>;
  order20?: Maybe<TaskOrder>;
  first20?: Maybe<Scalars['Int']>;
  offset20?: Maybe<Scalars['Int']>;
  filter29?: Maybe<UserFilter>;
  order21?: Maybe<UserOrder>;
  first21?: Maybe<Scalars['Int']>;
  offset21?: Maybe<Scalars['Int']>;
  filter30?: Maybe<DeveloperFilter>;
  order22?: Maybe<DeveloperOrder>;
  first22?: Maybe<Scalars['Int']>;
  offset22?: Maybe<Scalars['Int']>;
  filter31?: Maybe<TaskFilter>;
  order23?: Maybe<TaskOrder>;
  first23?: Maybe<Scalars['Int']>;
  offset23?: Maybe<Scalars['Int']>;
  id: Scalars['ID'];
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
  filter?: Maybe<TaskFilter>;
  order?: Maybe<TaskOrder>;
  first?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  filter1?: Maybe<BoardFilter>;
  order1?: Maybe<BoardOrder>;
  first1?: Maybe<Scalars['Int']>;
  offset1?: Maybe<Scalars['Int']>;
  filter2?: Maybe<DeveloperFilter>;
  order2?: Maybe<DeveloperOrder>;
  first2?: Maybe<Scalars['Int']>;
  offset2?: Maybe<Scalars['Int']>;
  filter3?: Maybe<ProjectFilter>;
  filter4?: Maybe<ProjectFilter>;
  filter5?: Maybe<UserFilter>;
  order3?: Maybe<UserOrder>;
  first3?: Maybe<Scalars['Int']>;
  offset3?: Maybe<Scalars['Int']>;
  filter6?: Maybe<TagFilter>;
  order4?: Maybe<TagOrder>;
  first4?: Maybe<Scalars['Int']>;
  offset4?: Maybe<Scalars['Int']>;
  filter7?: Maybe<TaskFilter>;
  order5?: Maybe<TaskOrder>;
  first5?: Maybe<Scalars['Int']>;
  offset5?: Maybe<Scalars['Int']>;
  filter8?: Maybe<TaskFilter>;
  order6?: Maybe<TaskOrder>;
  first6?: Maybe<Scalars['Int']>;
  offset6?: Maybe<Scalars['Int']>;
  filter9?: Maybe<DeveloperFilter>;
  order7?: Maybe<DeveloperOrder>;
  first7?: Maybe<Scalars['Int']>;
  offset7?: Maybe<Scalars['Int']>;
  filter10?: Maybe<TagFilter>;
  order8?: Maybe<TagOrder>;
  first8?: Maybe<Scalars['Int']>;
  offset8?: Maybe<Scalars['Int']>;
  filter11?: Maybe<ProjectFilter>;
  filter12?: Maybe<ProjectFilter>;
  filter13?: Maybe<TaskFilter>;
  order9?: Maybe<TaskOrder>;
  first9?: Maybe<Scalars['Int']>;
  offset9?: Maybe<Scalars['Int']>;
  filter14?: Maybe<ColumnFilter>;
  order10?: Maybe<ColumnOrder>;
  first10?: Maybe<Scalars['Int']>;
  offset10?: Maybe<Scalars['Int']>;
  filter15?: Maybe<BoardFilter>;
  filter16?: Maybe<ColumnFilter>;
  order11?: Maybe<ColumnOrder>;
  first11?: Maybe<Scalars['Int']>;
  offset11?: Maybe<Scalars['Int']>;
  filter17?: Maybe<BoardFilter>;
  order12?: Maybe<BoardOrder>;
  first12?: Maybe<Scalars['Int']>;
  offset12?: Maybe<Scalars['Int']>;
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
  filter?: Maybe<ProjectFilter>;
  filter1?: Maybe<DeveloperFilter>;
  order?: Maybe<DeveloperOrder>;
  first?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  filter2?: Maybe<TagFilter>;
  order1?: Maybe<TagOrder>;
  first1?: Maybe<Scalars['Int']>;
  offset1?: Maybe<Scalars['Int']>;
  filter3?: Maybe<ProjectFilter>;
  filter4?: Maybe<ColumnFilter>;
  filter5?: Maybe<DeveloperFilter>;
  order2?: Maybe<DeveloperOrder>;
  first2?: Maybe<Scalars['Int']>;
  offset2?: Maybe<Scalars['Int']>;
  filter6?: Maybe<DeveloperFilter>;
  order3?: Maybe<DeveloperOrder>;
  first3?: Maybe<Scalars['Int']>;
  offset3?: Maybe<Scalars['Int']>;
  filter7?: Maybe<CommentFilter>;
  order4?: Maybe<CommentOrder>;
  first4?: Maybe<Scalars['Int']>;
  offset4?: Maybe<Scalars['Int']>;
  filter8?: Maybe<TaskFilter>;
  order5?: Maybe<TaskOrder>;
  first5?: Maybe<Scalars['Int']>;
  offset5?: Maybe<Scalars['Int']>;
  filter9?: Maybe<ProjectFilter>;
  filter10?: Maybe<ColumnFilter>;
  order6?: Maybe<ColumnOrder>;
  first6?: Maybe<Scalars['Int']>;
  offset6?: Maybe<Scalars['Int']>;
  filter11?: Maybe<BoardFilter>;
  order7?: Maybe<BoardOrder>;
  first7?: Maybe<Scalars['Int']>;
  offset7?: Maybe<Scalars['Int']>;
  filter12?: Maybe<ProjectFilter>;
  filter13?: Maybe<UserFilter>;
  order8?: Maybe<UserOrder>;
  first8?: Maybe<Scalars['Int']>;
  offset8?: Maybe<Scalars['Int']>;
  filter14?: Maybe<TagFilter>;
  order9?: Maybe<TagOrder>;
  first9?: Maybe<Scalars['Int']>;
  offset9?: Maybe<Scalars['Int']>;
  filter15?: Maybe<TaskFilter>;
  order10?: Maybe<TaskOrder>;
  first10?: Maybe<Scalars['Int']>;
  offset10?: Maybe<Scalars['Int']>;
  filter16?: Maybe<TaskFilter>;
  order11?: Maybe<TaskOrder>;
  first11?: Maybe<Scalars['Int']>;
  offset11?: Maybe<Scalars['Int']>;
  filter17?: Maybe<DeveloperFilter>;
  order12?: Maybe<DeveloperOrder>;
  first12?: Maybe<Scalars['Int']>;
  offset12?: Maybe<Scalars['Int']>;
  filter18?: Maybe<ProjectFilter>;
  filter19?: Maybe<BoardFilter>;
  filter20?: Maybe<TaskFilter>;
  order13?: Maybe<TaskOrder>;
  first13?: Maybe<Scalars['Int']>;
  offset13?: Maybe<Scalars['Int']>;
  filter21?: Maybe<ColumnFilter>;
  order14?: Maybe<ColumnOrder>;
  first14?: Maybe<Scalars['Int']>;
  offset14?: Maybe<Scalars['Int']>;
  filter22?: Maybe<BoardFilter>;
  filter23?: Maybe<TaskFilter>;
  order15?: Maybe<TaskOrder>;
  first15?: Maybe<Scalars['Int']>;
  offset15?: Maybe<Scalars['Int']>;
  filter24?: Maybe<ColumnFilter>;
  order16?: Maybe<ColumnOrder>;
  first16?: Maybe<Scalars['Int']>;
  offset16?: Maybe<Scalars['Int']>;
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
  filter?: Maybe<ProjectFilter>;
  filter1?: Maybe<DeveloperFilter>;
  order?: Maybe<DeveloperOrder>;
  first?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  filter2?: Maybe<TagFilter>;
  order1?: Maybe<TagOrder>;
  first1?: Maybe<Scalars['Int']>;
  offset1?: Maybe<Scalars['Int']>;
  filter3?: Maybe<ProjectFilter>;
  filter4?: Maybe<ColumnFilter>;
  filter5?: Maybe<DeveloperFilter>;
  order2?: Maybe<DeveloperOrder>;
  first2?: Maybe<Scalars['Int']>;
  offset2?: Maybe<Scalars['Int']>;
  filter6?: Maybe<DeveloperFilter>;
  order3?: Maybe<DeveloperOrder>;
  first3?: Maybe<Scalars['Int']>;
  offset3?: Maybe<Scalars['Int']>;
  filter7?: Maybe<CommentFilter>;
  order4?: Maybe<CommentOrder>;
  first4?: Maybe<Scalars['Int']>;
  offset4?: Maybe<Scalars['Int']>;
  filter8?: Maybe<TaskFilter>;
  order5?: Maybe<TaskOrder>;
  first5?: Maybe<Scalars['Int']>;
  offset5?: Maybe<Scalars['Int']>;
  filter9?: Maybe<ProjectFilter>;
  filter10?: Maybe<ColumnFilter>;
  order6?: Maybe<ColumnOrder>;
  first6?: Maybe<Scalars['Int']>;
  offset6?: Maybe<Scalars['Int']>;
  filter11?: Maybe<BoardFilter>;
  order7?: Maybe<BoardOrder>;
  first7?: Maybe<Scalars['Int']>;
  offset7?: Maybe<Scalars['Int']>;
  filter12?: Maybe<ProjectFilter>;
  filter13?: Maybe<UserFilter>;
  order8?: Maybe<UserOrder>;
  first8?: Maybe<Scalars['Int']>;
  offset8?: Maybe<Scalars['Int']>;
  filter14?: Maybe<TagFilter>;
  order9?: Maybe<TagOrder>;
  first9?: Maybe<Scalars['Int']>;
  offset9?: Maybe<Scalars['Int']>;
  filter15?: Maybe<TaskFilter>;
  order10?: Maybe<TaskOrder>;
  first10?: Maybe<Scalars['Int']>;
  offset10?: Maybe<Scalars['Int']>;
  filter16?: Maybe<TaskFilter>;
  order11?: Maybe<TaskOrder>;
  first11?: Maybe<Scalars['Int']>;
  offset11?: Maybe<Scalars['Int']>;
  filter17?: Maybe<DeveloperFilter>;
  order12?: Maybe<DeveloperOrder>;
  first12?: Maybe<Scalars['Int']>;
  offset12?: Maybe<Scalars['Int']>;
  filter18?: Maybe<ProjectFilter>;
  filter19?: Maybe<ProjectFilter>;
  filter20?: Maybe<ColumnFilter>;
  order13?: Maybe<ColumnOrder>;
  first13?: Maybe<Scalars['Int']>;
  offset13?: Maybe<Scalars['Int']>;
  filter21?: Maybe<BoardFilter>;
  filter22?: Maybe<TaskFilter>;
  order14?: Maybe<TaskOrder>;
  first14?: Maybe<Scalars['Int']>;
  offset14?: Maybe<Scalars['Int']>;
  filter23?: Maybe<ColumnFilter>;
  filter24?: Maybe<DeveloperFilter>;
  order15?: Maybe<DeveloperOrder>;
  first15?: Maybe<Scalars['Int']>;
  offset15?: Maybe<Scalars['Int']>;
  filter25?: Maybe<ProjectFilter>;
  filter26?: Maybe<DeveloperFilter>;
  order16?: Maybe<DeveloperOrder>;
  first16?: Maybe<Scalars['Int']>;
  offset16?: Maybe<Scalars['Int']>;
  filter27?: Maybe<TaskFilter>;
  order17?: Maybe<TaskOrder>;
  first17?: Maybe<Scalars['Int']>;
  offset17?: Maybe<Scalars['Int']>;
  filter28?: Maybe<UserFilter>;
  order18?: Maybe<UserOrder>;
  first18?: Maybe<Scalars['Int']>;
  offset18?: Maybe<Scalars['Int']>;
  filter29?: Maybe<TagFilter>;
  order19?: Maybe<TagOrder>;
  first19?: Maybe<Scalars['Int']>;
  offset19?: Maybe<Scalars['Int']>;
  filter30?: Maybe<TaskFilter>;
  order20?: Maybe<TaskOrder>;
  first20?: Maybe<Scalars['Int']>;
  offset20?: Maybe<Scalars['Int']>;
  filter31?: Maybe<ProjectFilter>;
  filter32?: Maybe<ColumnFilter>;
  filter33?: Maybe<DeveloperFilter>;
  order21?: Maybe<DeveloperOrder>;
  first21?: Maybe<Scalars['Int']>;
  offset21?: Maybe<Scalars['Int']>;
  filter34?: Maybe<DeveloperFilter>;
  order22?: Maybe<DeveloperOrder>;
  first22?: Maybe<Scalars['Int']>;
  offset22?: Maybe<Scalars['Int']>;
  filter35?: Maybe<CommentFilter>;
  order23?: Maybe<CommentOrder>;
  first23?: Maybe<Scalars['Int']>;
  offset23?: Maybe<Scalars['Int']>;
  filter36?: Maybe<TaskFilter>;
  order24?: Maybe<TaskOrder>;
  first24?: Maybe<Scalars['Int']>;
  offset24?: Maybe<Scalars['Int']>;
  filter37?: Maybe<DeveloperFilter>;
  order25?: Maybe<DeveloperOrder>;
  first25?: Maybe<Scalars['Int']>;
  offset25?: Maybe<Scalars['Int']>;
  filter38?: Maybe<TaskFilter>;
  filter39?: Maybe<ProjectFilter>;
  filter40?: Maybe<UserFilter>;
  order26?: Maybe<UserOrder>;
  first26?: Maybe<Scalars['Int']>;
  offset26?: Maybe<Scalars['Int']>;
  filter41?: Maybe<TagFilter>;
  order27?: Maybe<TagOrder>;
  first27?: Maybe<Scalars['Int']>;
  offset27?: Maybe<Scalars['Int']>;
  filter42?: Maybe<TaskFilter>;
  order28?: Maybe<TaskOrder>;
  first28?: Maybe<Scalars['Int']>;
  offset28?: Maybe<Scalars['Int']>;
  filter43?: Maybe<TaskFilter>;
  order29?: Maybe<TaskOrder>;
  first29?: Maybe<Scalars['Int']>;
  offset29?: Maybe<Scalars['Int']>;
  filter44?: Maybe<DeveloperFilter>;
  filter45?: Maybe<CommentFilter>;
  order30?: Maybe<CommentOrder>;
  first30?: Maybe<Scalars['Int']>;
  offset30?: Maybe<Scalars['Int']>;
  filter46?: Maybe<TaskFilter>;
  filter47?: Maybe<DeveloperFilter>;
  filter48?: Maybe<CommentFilter>;
  order31?: Maybe<CommentOrder>;
  first31?: Maybe<Scalars['Int']>;
  offset31?: Maybe<Scalars['Int']>;
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
  filter?: Maybe<TaskFilter>;
  order?: Maybe<TaskOrder>;
  first?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  filter1?: Maybe<BoardFilter>;
  order1?: Maybe<BoardOrder>;
  first1?: Maybe<Scalars['Int']>;
  offset1?: Maybe<Scalars['Int']>;
  filter2?: Maybe<DeveloperFilter>;
  order2?: Maybe<DeveloperOrder>;
  first2?: Maybe<Scalars['Int']>;
  offset2?: Maybe<Scalars['Int']>;
  filter3?: Maybe<ProjectFilter>;
  filter4?: Maybe<ProjectFilter>;
  filter5?: Maybe<UserFilter>;
  order3?: Maybe<UserOrder>;
  first3?: Maybe<Scalars['Int']>;
  offset3?: Maybe<Scalars['Int']>;
  filter6?: Maybe<TagFilter>;
  order4?: Maybe<TagOrder>;
  first4?: Maybe<Scalars['Int']>;
  offset4?: Maybe<Scalars['Int']>;
  filter7?: Maybe<TaskFilter>;
  order5?: Maybe<TaskOrder>;
  first5?: Maybe<Scalars['Int']>;
  offset5?: Maybe<Scalars['Int']>;
  filter8?: Maybe<TaskFilter>;
  order6?: Maybe<TaskOrder>;
  first6?: Maybe<Scalars['Int']>;
  offset6?: Maybe<Scalars['Int']>;
  filter9?: Maybe<DeveloperFilter>;
  order7?: Maybe<DeveloperOrder>;
  first7?: Maybe<Scalars['Int']>;
  offset7?: Maybe<Scalars['Int']>;
  filter10?: Maybe<TagFilter>;
  order8?: Maybe<TagOrder>;
  first8?: Maybe<Scalars['Int']>;
  offset8?: Maybe<Scalars['Int']>;
  filter11?: Maybe<ProjectFilter>;
  filter12?: Maybe<ProjectFilter>;
  filter13?: Maybe<TaskFilter>;
  order9?: Maybe<TaskOrder>;
  first9?: Maybe<Scalars['Int']>;
  offset9?: Maybe<Scalars['Int']>;
  filter14?: Maybe<UserFilter>;
  order10?: Maybe<UserOrder>;
  first10?: Maybe<Scalars['Int']>;
  offset10?: Maybe<Scalars['Int']>;
  filter15?: Maybe<TagFilter>;
  order11?: Maybe<TagOrder>;
  first11?: Maybe<Scalars['Int']>;
  offset11?: Maybe<Scalars['Int']>;
  filter16?: Maybe<ProjectFilter>;
  filter17?: Maybe<ColumnFilter>;
  filter18?: Maybe<DeveloperFilter>;
  order12?: Maybe<DeveloperOrder>;
  first12?: Maybe<Scalars['Int']>;
  offset12?: Maybe<Scalars['Int']>;
  filter19?: Maybe<DeveloperFilter>;
  order13?: Maybe<DeveloperOrder>;
  first13?: Maybe<Scalars['Int']>;
  offset13?: Maybe<Scalars['Int']>;
  filter20?: Maybe<CommentFilter>;
  order14?: Maybe<CommentOrder>;
  first14?: Maybe<Scalars['Int']>;
  offset14?: Maybe<Scalars['Int']>;
  filter21?: Maybe<TaskFilter>;
  order15?: Maybe<TaskOrder>;
  first15?: Maybe<Scalars['Int']>;
  offset15?: Maybe<Scalars['Int']>;
  filter22?: Maybe<ProjectFilter>;
  filter23?: Maybe<ColumnFilter>;
  filter24?: Maybe<DeveloperFilter>;
  order16?: Maybe<DeveloperOrder>;
  first16?: Maybe<Scalars['Int']>;
  offset16?: Maybe<Scalars['Int']>;
  filter25?: Maybe<DeveloperFilter>;
  order17?: Maybe<DeveloperOrder>;
  first17?: Maybe<Scalars['Int']>;
  offset17?: Maybe<Scalars['Int']>;
  filter26?: Maybe<CommentFilter>;
  order18?: Maybe<CommentOrder>;
  first18?: Maybe<Scalars['Int']>;
  offset18?: Maybe<Scalars['Int']>;
  filter27?: Maybe<TaskFilter>;
  order19?: Maybe<TaskOrder>;
  first19?: Maybe<Scalars['Int']>;
  offset19?: Maybe<Scalars['Int']>;
  filter28?: Maybe<DeveloperFilter>;
  order20?: Maybe<DeveloperOrder>;
  first20?: Maybe<Scalars['Int']>;
  offset20?: Maybe<Scalars['Int']>;
  filter29?: Maybe<UserFilter>;
  order21?: Maybe<UserOrder>;
  first21?: Maybe<Scalars['Int']>;
  offset21?: Maybe<Scalars['Int']>;
  filter30?: Maybe<TagFilter>;
  order22?: Maybe<TagOrder>;
  first22?: Maybe<Scalars['Int']>;
  offset22?: Maybe<Scalars['Int']>;
  filter31?: Maybe<TaskFilter>;
  order23?: Maybe<TaskOrder>;
  first23?: Maybe<Scalars['Int']>;
  offset23?: Maybe<Scalars['Int']>;
  filter32?: Maybe<TaskFilter>;
  order24?: Maybe<TaskOrder>;
  first24?: Maybe<Scalars['Int']>;
  offset24?: Maybe<Scalars['Int']>;
  filter33?: Maybe<DeveloperFilter>;
  order25?: Maybe<DeveloperOrder>;
  first25?: Maybe<Scalars['Int']>;
  offset25?: Maybe<Scalars['Int']>;
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
  filter?: Maybe<DeveloperFilter>;
  order?: Maybe<DeveloperOrder>;
  first?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  filter1?: Maybe<TagFilter>;
  order1?: Maybe<TagOrder>;
  first1?: Maybe<Scalars['Int']>;
  offset1?: Maybe<Scalars['Int']>;
  filter2?: Maybe<ProjectFilter>;
  filter3?: Maybe<ColumnFilter>;
  filter4?: Maybe<DeveloperFilter>;
  order2?: Maybe<DeveloperOrder>;
  first2?: Maybe<Scalars['Int']>;
  offset2?: Maybe<Scalars['Int']>;
  filter5?: Maybe<DeveloperFilter>;
  order3?: Maybe<DeveloperOrder>;
  first3?: Maybe<Scalars['Int']>;
  offset3?: Maybe<Scalars['Int']>;
  filter6?: Maybe<CommentFilter>;
  order4?: Maybe<CommentOrder>;
  first4?: Maybe<Scalars['Int']>;
  offset4?: Maybe<Scalars['Int']>;
  filter7?: Maybe<TaskFilter>;
  order5?: Maybe<TaskOrder>;
  first5?: Maybe<Scalars['Int']>;
  offset5?: Maybe<Scalars['Int']>;
  filter8?: Maybe<ProjectFilter>;
  filter9?: Maybe<ColumnFilter>;
  order6?: Maybe<ColumnOrder>;
  first6?: Maybe<Scalars['Int']>;
  offset6?: Maybe<Scalars['Int']>;
  filter10?: Maybe<BoardFilter>;
  order7?: Maybe<BoardOrder>;
  first7?: Maybe<Scalars['Int']>;
  offset7?: Maybe<Scalars['Int']>;
  filter11?: Maybe<ProjectFilter>;
  filter12?: Maybe<UserFilter>;
  order8?: Maybe<UserOrder>;
  first8?: Maybe<Scalars['Int']>;
  offset8?: Maybe<Scalars['Int']>;
  filter13?: Maybe<TagFilter>;
  order9?: Maybe<TagOrder>;
  first9?: Maybe<Scalars['Int']>;
  offset9?: Maybe<Scalars['Int']>;
  filter14?: Maybe<TaskFilter>;
  order10?: Maybe<TaskOrder>;
  first10?: Maybe<Scalars['Int']>;
  offset10?: Maybe<Scalars['Int']>;
  filter15?: Maybe<TaskFilter>;
  order11?: Maybe<TaskOrder>;
  first11?: Maybe<Scalars['Int']>;
  offset11?: Maybe<Scalars['Int']>;
  filter16?: Maybe<DeveloperFilter>;
  order12?: Maybe<DeveloperOrder>;
  first12?: Maybe<Scalars['Int']>;
  offset12?: Maybe<Scalars['Int']>;
  filter17?: Maybe<ProjectFilter>;
  filter18?: Maybe<TagFilter>;
  order13?: Maybe<TagOrder>;
  first13?: Maybe<Scalars['Int']>;
  offset13?: Maybe<Scalars['Int']>;
  filter19?: Maybe<TaskFilter>;
  order14?: Maybe<TaskOrder>;
  first14?: Maybe<Scalars['Int']>;
  offset14?: Maybe<Scalars['Int']>;
  filter20?: Maybe<BoardFilter>;
  order15?: Maybe<BoardOrder>;
  first15?: Maybe<Scalars['Int']>;
  offset15?: Maybe<Scalars['Int']>;
  filter21?: Maybe<DeveloperFilter>;
  order16?: Maybe<DeveloperOrder>;
  first16?: Maybe<Scalars['Int']>;
  offset16?: Maybe<Scalars['Int']>;
  filter22?: Maybe<ProjectFilter>;
  order17?: Maybe<ProjectOrder>;
  first17?: Maybe<Scalars['Int']>;
  offset17?: Maybe<Scalars['Int']>;
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
  filter?: Maybe<TaskFilter>;
  order?: Maybe<TaskOrder>;
  first?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  filter1?: Maybe<BoardFilter>;
  order1?: Maybe<BoardOrder>;
  first1?: Maybe<Scalars['Int']>;
  offset1?: Maybe<Scalars['Int']>;
  filter2?: Maybe<DeveloperFilter>;
  order2?: Maybe<DeveloperOrder>;
  first2?: Maybe<Scalars['Int']>;
  offset2?: Maybe<Scalars['Int']>;
  filter3?: Maybe<ProjectFilter>;
  filter4?: Maybe<ProjectFilter>;
  filter5?: Maybe<UserFilter>;
  order3?: Maybe<UserOrder>;
  first3?: Maybe<Scalars['Int']>;
  offset3?: Maybe<Scalars['Int']>;
  filter6?: Maybe<TagFilter>;
  order4?: Maybe<TagOrder>;
  first4?: Maybe<Scalars['Int']>;
  offset4?: Maybe<Scalars['Int']>;
  filter7?: Maybe<TaskFilter>;
  order5?: Maybe<TaskOrder>;
  first5?: Maybe<Scalars['Int']>;
  offset5?: Maybe<Scalars['Int']>;
  filter8?: Maybe<TaskFilter>;
  order6?: Maybe<TaskOrder>;
  first6?: Maybe<Scalars['Int']>;
  offset6?: Maybe<Scalars['Int']>;
  filter9?: Maybe<DeveloperFilter>;
  order7?: Maybe<DeveloperOrder>;
  first7?: Maybe<Scalars['Int']>;
  offset7?: Maybe<Scalars['Int']>;
  filter10?: Maybe<TagFilter>;
  order8?: Maybe<TagOrder>;
  first8?: Maybe<Scalars['Int']>;
  offset8?: Maybe<Scalars['Int']>;
  filter11?: Maybe<ProjectFilter>;
  filter12?: Maybe<DeveloperFilter>;
  order9?: Maybe<DeveloperOrder>;
  first9?: Maybe<Scalars['Int']>;
  offset9?: Maybe<Scalars['Int']>;
  filter13?: Maybe<TagFilter>;
  order10?: Maybe<TagOrder>;
  first10?: Maybe<Scalars['Int']>;
  offset10?: Maybe<Scalars['Int']>;
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
  filter?: Maybe<TaskFilter>;
  order?: Maybe<TaskOrder>;
  first?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  filter1?: Maybe<BoardFilter>;
  order1?: Maybe<BoardOrder>;
  first1?: Maybe<Scalars['Int']>;
  offset1?: Maybe<Scalars['Int']>;
  filter2?: Maybe<DeveloperFilter>;
  order2?: Maybe<DeveloperOrder>;
  first2?: Maybe<Scalars['Int']>;
  offset2?: Maybe<Scalars['Int']>;
  filter3?: Maybe<ProjectFilter>;
  filter4?: Maybe<ProjectFilter>;
  filter5?: Maybe<UserFilter>;
  order3?: Maybe<UserOrder>;
  first3?: Maybe<Scalars['Int']>;
  offset3?: Maybe<Scalars['Int']>;
  filter6?: Maybe<TagFilter>;
  order4?: Maybe<TagOrder>;
  first4?: Maybe<Scalars['Int']>;
  offset4?: Maybe<Scalars['Int']>;
  filter7?: Maybe<TaskFilter>;
  order5?: Maybe<TaskOrder>;
  first5?: Maybe<Scalars['Int']>;
  offset5?: Maybe<Scalars['Int']>;
  filter8?: Maybe<TaskFilter>;
  order6?: Maybe<TaskOrder>;
  first6?: Maybe<Scalars['Int']>;
  offset6?: Maybe<Scalars['Int']>;
  filter9?: Maybe<DeveloperFilter>;
  order7?: Maybe<DeveloperOrder>;
  first7?: Maybe<Scalars['Int']>;
  offset7?: Maybe<Scalars['Int']>;
  filter10?: Maybe<TagFilter>;
  order8?: Maybe<TagOrder>;
  first8?: Maybe<Scalars['Int']>;
  offset8?: Maybe<Scalars['Int']>;
  filter11?: Maybe<ProjectFilter>;
  filter12?: Maybe<ProjectFilter>;
  filter13?: Maybe<BoardFilter>;
  filter14?: Maybe<TaskFilter>;
  order9?: Maybe<TaskOrder>;
  first9?: Maybe<Scalars['Int']>;
  offset9?: Maybe<Scalars['Int']>;
  filter15?: Maybe<ColumnFilter>;
  order10?: Maybe<ColumnOrder>;
  first10?: Maybe<Scalars['Int']>;
  offset10?: Maybe<Scalars['Int']>;
  filter16?: Maybe<BoardFilter>;
  filter17?: Maybe<ProjectFilter>;
  filter18?: Maybe<ColumnFilter>;
  filter19?: Maybe<DeveloperFilter>;
  order11?: Maybe<DeveloperOrder>;
  first11?: Maybe<Scalars['Int']>;
  offset11?: Maybe<Scalars['Int']>;
  filter20?: Maybe<ProjectFilter>;
  filter21?: Maybe<UserFilter>;
  order12?: Maybe<UserOrder>;
  first12?: Maybe<Scalars['Int']>;
  offset12?: Maybe<Scalars['Int']>;
  filter22?: Maybe<TagFilter>;
  order13?: Maybe<TagOrder>;
  first13?: Maybe<Scalars['Int']>;
  offset13?: Maybe<Scalars['Int']>;
  filter23?: Maybe<TaskFilter>;
  order14?: Maybe<TaskOrder>;
  first14?: Maybe<Scalars['Int']>;
  offset14?: Maybe<Scalars['Int']>;
  filter24?: Maybe<TaskFilter>;
  order15?: Maybe<TaskOrder>;
  first15?: Maybe<Scalars['Int']>;
  offset15?: Maybe<Scalars['Int']>;
  filter25?: Maybe<DeveloperFilter>;
  order16?: Maybe<DeveloperOrder>;
  first16?: Maybe<Scalars['Int']>;
  offset16?: Maybe<Scalars['Int']>;
  filter26?: Maybe<TaskFilter>;
  filter27?: Maybe<DeveloperFilter>;
  filter28?: Maybe<CommentFilter>;
  order17?: Maybe<CommentOrder>;
  first17?: Maybe<Scalars['Int']>;
  offset17?: Maybe<Scalars['Int']>;
  filter29?: Maybe<TaskFilter>;
  order18?: Maybe<TaskOrder>;
  first18?: Maybe<Scalars['Int']>;
  offset18?: Maybe<Scalars['Int']>;
  filter30?: Maybe<ColumnFilter>;
  filter31?: Maybe<DeveloperFilter>;
  order19?: Maybe<DeveloperOrder>;
  first19?: Maybe<Scalars['Int']>;
  offset19?: Maybe<Scalars['Int']>;
  filter32?: Maybe<DeveloperFilter>;
  order20?: Maybe<DeveloperOrder>;
  first20?: Maybe<Scalars['Int']>;
  offset20?: Maybe<Scalars['Int']>;
  filter33?: Maybe<CommentFilter>;
  order21?: Maybe<CommentOrder>;
  first21?: Maybe<Scalars['Int']>;
  offset21?: Maybe<Scalars['Int']>;
  filter34?: Maybe<TaskFilter>;
  order22?: Maybe<TaskOrder>;
  first22?: Maybe<Scalars['Int']>;
  offset22?: Maybe<Scalars['Int']>;
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
  filter?: Maybe<ProjectFilter>;
  filter1?: Maybe<DeveloperFilter>;
  order?: Maybe<DeveloperOrder>;
  first?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  filter2?: Maybe<TagFilter>;
  order1?: Maybe<TagOrder>;
  first1?: Maybe<Scalars['Int']>;
  offset1?: Maybe<Scalars['Int']>;
  filter3?: Maybe<ProjectFilter>;
  filter4?: Maybe<ColumnFilter>;
  filter5?: Maybe<DeveloperFilter>;
  order2?: Maybe<DeveloperOrder>;
  first2?: Maybe<Scalars['Int']>;
  offset2?: Maybe<Scalars['Int']>;
  filter6?: Maybe<DeveloperFilter>;
  order3?: Maybe<DeveloperOrder>;
  first3?: Maybe<Scalars['Int']>;
  offset3?: Maybe<Scalars['Int']>;
  filter7?: Maybe<CommentFilter>;
  order4?: Maybe<CommentOrder>;
  first4?: Maybe<Scalars['Int']>;
  offset4?: Maybe<Scalars['Int']>;
  filter8?: Maybe<TaskFilter>;
  order5?: Maybe<TaskOrder>;
  first5?: Maybe<Scalars['Int']>;
  offset5?: Maybe<Scalars['Int']>;
  filter9?: Maybe<ProjectFilter>;
  filter10?: Maybe<ColumnFilter>;
  order6?: Maybe<ColumnOrder>;
  first6?: Maybe<Scalars['Int']>;
  offset6?: Maybe<Scalars['Int']>;
  filter11?: Maybe<BoardFilter>;
  order7?: Maybe<BoardOrder>;
  first7?: Maybe<Scalars['Int']>;
  offset7?: Maybe<Scalars['Int']>;
  filter12?: Maybe<ProjectFilter>;
  filter13?: Maybe<UserFilter>;
  order8?: Maybe<UserOrder>;
  first8?: Maybe<Scalars['Int']>;
  offset8?: Maybe<Scalars['Int']>;
  filter14?: Maybe<TagFilter>;
  order9?: Maybe<TagOrder>;
  first9?: Maybe<Scalars['Int']>;
  offset9?: Maybe<Scalars['Int']>;
  filter15?: Maybe<TaskFilter>;
  order10?: Maybe<TaskOrder>;
  first10?: Maybe<Scalars['Int']>;
  offset10?: Maybe<Scalars['Int']>;
  filter16?: Maybe<TaskFilter>;
  order11?: Maybe<TaskOrder>;
  first11?: Maybe<Scalars['Int']>;
  offset11?: Maybe<Scalars['Int']>;
  filter17?: Maybe<DeveloperFilter>;
  order12?: Maybe<DeveloperOrder>;
  first12?: Maybe<Scalars['Int']>;
  offset12?: Maybe<Scalars['Int']>;
  filter18?: Maybe<ProjectFilter>;
  filter19?: Maybe<TagFilter>;
  order13?: Maybe<TagOrder>;
  first13?: Maybe<Scalars['Int']>;
  offset13?: Maybe<Scalars['Int']>;
  filter20?: Maybe<TaskFilter>;
  order14?: Maybe<TaskOrder>;
  first14?: Maybe<Scalars['Int']>;
  offset14?: Maybe<Scalars['Int']>;
  filter21?: Maybe<TaskFilter>;
  order15?: Maybe<TaskOrder>;
  first15?: Maybe<Scalars['Int']>;
  offset15?: Maybe<Scalars['Int']>;
  filter22?: Maybe<DeveloperFilter>;
  order16?: Maybe<DeveloperOrder>;
  first16?: Maybe<Scalars['Int']>;
  offset16?: Maybe<Scalars['Int']>;
  filter23?: Maybe<ProjectFilter>;
  filter24?: Maybe<ColumnFilter>;
  filter25?: Maybe<DeveloperFilter>;
  order17?: Maybe<DeveloperOrder>;
  first17?: Maybe<Scalars['Int']>;
  offset17?: Maybe<Scalars['Int']>;
  filter26?: Maybe<DeveloperFilter>;
  order18?: Maybe<DeveloperOrder>;
  first18?: Maybe<Scalars['Int']>;
  offset18?: Maybe<Scalars['Int']>;
  filter27?: Maybe<CommentFilter>;
  order19?: Maybe<CommentOrder>;
  first19?: Maybe<Scalars['Int']>;
  offset19?: Maybe<Scalars['Int']>;
  filter28?: Maybe<TaskFilter>;
  order20?: Maybe<TaskOrder>;
  first20?: Maybe<Scalars['Int']>;
  offset20?: Maybe<Scalars['Int']>;
  filter29?: Maybe<UserFilter>;
  order21?: Maybe<UserOrder>;
  first21?: Maybe<Scalars['Int']>;
  offset21?: Maybe<Scalars['Int']>;
  filter30?: Maybe<DeveloperFilter>;
  order22?: Maybe<DeveloperOrder>;
  first22?: Maybe<Scalars['Int']>;
  offset22?: Maybe<Scalars['Int']>;
  filter31?: Maybe<TaskFilter>;
  order23?: Maybe<TaskOrder>;
  first23?: Maybe<Scalars['Int']>;
  offset23?: Maybe<Scalars['Int']>;
  filter32?: Maybe<UserFilter>;
  order24?: Maybe<UserOrder>;
  first24?: Maybe<Scalars['Int']>;
  offset24?: Maybe<Scalars['Int']>;
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
