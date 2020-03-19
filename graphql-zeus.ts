/* tslint:disable */
/* eslint-disable */

export type ValueTypes = {
    ["AddBoardInput"]: {
	project:ValueTypes["ProjectRef"],
	title:string,
	columns?:(ValueTypes["ColumnRef"] | undefined)[],
	order?:(string | undefined)[]
};
	["AddBoardPayload"]: AliasType<{
board?: [{	filter?:ValueTypes["BoardFilter"],	order?:ValueTypes["BoardOrder"],	first?:number,	offset?:number},ValueTypes["Board"]],
	numUids?:true
		__typename?: true
}>;
	["AddColumnInput"]: {
	board:ValueTypes["BoardRef"],
	title:string,
	tasks?:(ValueTypes["TaskRef"] | undefined)[]
};
	["AddColumnPayload"]: AliasType<{
column?: [{	filter?:ValueTypes["ColumnFilter"],	order?:ValueTypes["ColumnOrder"],	first?:number,	offset?:number},ValueTypes["Column"]],
	numUids?:true
		__typename?: true
}>;
	["AddCommentInput"]: {
	task:ValueTypes["TaskRef"],
	developer:ValueTypes["DeveloperRef"],
	content:string
};
	["AddCommentPayload"]: AliasType<{
comment?: [{	filter?:ValueTypes["CommentFilter"],	order?:ValueTypes["CommentOrder"],	first?:number,	offset?:number},ValueTypes["Comment"]],
	numUids?:true
		__typename?: true
}>;
	["AddDeveloperInput"]: {
	project:ValueTypes["ProjectRef"],
	name:string,
	availability:number,
	user?:(ValueTypes["UserRef"] | undefined)[],
	tags?:(ValueTypes["TagRef"] | undefined)[],
	tasks?:(ValueTypes["TaskRef"] | undefined)[],
	liked?:(ValueTypes["TaskRef"] | undefined)[]
};
	["AddDeveloperPayload"]: AliasType<{
developer?: [{	filter?:ValueTypes["DeveloperFilter"],	order?:ValueTypes["DeveloperOrder"],	first?:number,	offset?:number},ValueTypes["Developer"]],
	numUids?:true
		__typename?: true
}>;
	["AddProjectInput"]: {
	title:string,
	hosts?:ValueTypes["UserRef"][],
	description:string,
	tags?:(ValueTypes["TagRef"] | undefined)[],
	tasks?:(ValueTypes["TaskRef"] | undefined)[],
	boards?:(ValueTypes["BoardRef"] | undefined)[],
	developers?:(ValueTypes["DeveloperRef"] | undefined)[]
};
	["AddProjectPayload"]: AliasType<{
project?: [{	filter?:ValueTypes["ProjectFilter"],	order?:ValueTypes["ProjectOrder"],	first?:number,	offset?:number},ValueTypes["Project"]],
	numUids?:true
		__typename?: true
}>;
	["AddTagInput"]: {
	title:string,
	project:ValueTypes["ProjectRef"],
	developers?:(ValueTypes["DeveloperRef"] | undefined)[]
};
	["AddTagPayload"]: AliasType<{
tag?: [{	filter?:ValueTypes["TagFilter"],	order?:ValueTypes["TagOrder"],	first?:number,	offset?:number},ValueTypes["Tag"]],
	numUids?:true
		__typename?: true
}>;
	["AddTaskInput"]: {
	project:ValueTypes["ProjectRef"],
	column?:ValueTypes["ColumnRef"],
	title:string,
	developers?:(ValueTypes["DeveloperRef"] | undefined)[],
	hours:number,
	deadline:string,
	content:string,
	priority:number,
	complete:boolean,
	likes?:(ValueTypes["DeveloperRef"] | undefined)[],
	comments?:(ValueTypes["CommentRef"] | undefined)[]
};
	["AddTaskPayload"]: AliasType<{
task?: [{	filter?:ValueTypes["TaskFilter"],	order?:ValueTypes["TaskOrder"],	first?:number,	offset?:number},ValueTypes["Task"]],
	numUids?:true
		__typename?: true
}>;
	["AddUserInput"]: {
	username:string,
	password:string,
	location:string,
	developer?:(ValueTypes["DeveloperRef"] | undefined)[],
	host?:(ValueTypes["ProjectRef"] | undefined)[],
	stars?:(ValueTypes["TaskRef"] | undefined)[]
};
	["AddUserPayload"]: AliasType<{
user?: [{	filter?:ValueTypes["UserFilter"],	order?:ValueTypes["UserOrder"],	first?:number,	offset?:number},ValueTypes["User"]],
	numUids?:true
		__typename?: true
}>;
	["Board"]: AliasType<{
	id?:true,
project?: [{	filter?:ValueTypes["ProjectFilter"]},ValueTypes["Project"]],
	title?:true,
columns?: [{	filter?:ValueTypes["ColumnFilter"],	order?:ValueTypes["ColumnOrder"],	first?:number,	offset?:number},ValueTypes["Column"]],
	order?:true
		__typename?: true
}>;
	["BoardFilter"]: {
	id?:string[],
	not?:ValueTypes["BoardFilter"]
};
	["BoardOrder"]: {
	asc?:ValueTypes["BoardOrderable"],
	desc?:ValueTypes["BoardOrderable"],
	then?:ValueTypes["BoardOrder"]
};
	["BoardOrderable"]:BoardOrderable;
	["BoardPatch"]: {
	project?:ValueTypes["ProjectRef"],
	title?:string,
	columns?:(ValueTypes["ColumnRef"] | undefined)[],
	order?:(string | undefined)[]
};
	["BoardRef"]: {
	id?:string,
	project?:ValueTypes["ProjectRef"],
	title?:string,
	columns?:(ValueTypes["ColumnRef"] | undefined)[],
	order?:(string | undefined)[]
};
	["Column"]: AliasType<{
	id?:true,
board?: [{	filter?:ValueTypes["BoardFilter"]},ValueTypes["Board"]],
	title?:true,
tasks?: [{	filter?:ValueTypes["TaskFilter"],	order?:ValueTypes["TaskOrder"],	first?:number,	offset?:number},ValueTypes["Task"]]
		__typename?: true
}>;
	["ColumnFilter"]: {
	id?:string[],
	not?:ValueTypes["ColumnFilter"]
};
	["ColumnOrder"]: {
	asc?:ValueTypes["ColumnOrderable"],
	desc?:ValueTypes["ColumnOrderable"],
	then?:ValueTypes["ColumnOrder"]
};
	["ColumnOrderable"]:ColumnOrderable;
	["ColumnPatch"]: {
	board?:ValueTypes["BoardRef"],
	title?:string,
	tasks?:(ValueTypes["TaskRef"] | undefined)[]
};
	["ColumnRef"]: {
	id?:string,
	board?:ValueTypes["BoardRef"],
	title?:string,
	tasks?:(ValueTypes["TaskRef"] | undefined)[]
};
	["Comment"]: AliasType<{
	id?:true,
task?: [{	filter?:ValueTypes["TaskFilter"]},ValueTypes["Task"]],
developer?: [{	filter?:ValueTypes["DeveloperFilter"]},ValueTypes["Developer"]],
	content?:true
		__typename?: true
}>;
	["CommentFilter"]: {
	id?:string[],
	not?:ValueTypes["CommentFilter"]
};
	["CommentOrder"]: {
	asc?:ValueTypes["CommentOrderable"],
	desc?:ValueTypes["CommentOrderable"],
	then?:ValueTypes["CommentOrder"]
};
	["CommentOrderable"]:CommentOrderable;
	["CommentPatch"]: {
	task?:ValueTypes["TaskRef"],
	developer?:ValueTypes["DeveloperRef"],
	content?:string
};
	["CommentRef"]: {
	id?:string,
	task?:ValueTypes["TaskRef"],
	developer?:ValueTypes["DeveloperRef"],
	content?:string
};
	["DateTime"]:unknown;
	["DateTimeFilter"]: {
	eq?:ValueTypes["DateTime"],
	le?:ValueTypes["DateTime"],
	lt?:ValueTypes["DateTime"],
	ge?:ValueTypes["DateTime"],
	gt?:ValueTypes["DateTime"]
};
	["DeleteBoardPayload"]: AliasType<{
	msg?:true,
	numUids?:true
		__typename?: true
}>;
	["DeleteColumnPayload"]: AliasType<{
	msg?:true,
	numUids?:true
		__typename?: true
}>;
	["DeleteCommentPayload"]: AliasType<{
	msg?:true,
	numUids?:true
		__typename?: true
}>;
	["DeleteDeveloperPayload"]: AliasType<{
	msg?:true,
	numUids?:true
		__typename?: true
}>;
	["DeleteProjectPayload"]: AliasType<{
	msg?:true,
	numUids?:true
		__typename?: true
}>;
	["DeleteTagPayload"]: AliasType<{
	msg?:true,
	numUids?:true
		__typename?: true
}>;
	["DeleteTaskPayload"]: AliasType<{
	msg?:true,
	numUids?:true
		__typename?: true
}>;
	["DeleteUserPayload"]: AliasType<{
	msg?:true,
	numUids?:true
		__typename?: true
}>;
	["Developer"]: AliasType<{
	id?:true,
project?: [{	filter?:ValueTypes["ProjectFilter"]},ValueTypes["Project"]],
	name?:true,
	availability?:true,
user?: [{	filter?:ValueTypes["UserFilter"],	order?:ValueTypes["UserOrder"],	first?:number,	offset?:number},ValueTypes["User"]],
tags?: [{	filter?:ValueTypes["TagFilter"],	order?:ValueTypes["TagOrder"],	first?:number,	offset?:number},ValueTypes["Tag"]],
tasks?: [{	filter?:ValueTypes["TaskFilter"],	order?:ValueTypes["TaskOrder"],	first?:number,	offset?:number},ValueTypes["Task"]],
liked?: [{	filter?:ValueTypes["TaskFilter"],	order?:ValueTypes["TaskOrder"],	first?:number,	offset?:number},ValueTypes["Task"]]
		__typename?: true
}>;
	["DeveloperFilter"]: {
	id?:string[],
	name?:ValueTypes["StringHashFilter"],
	and?:ValueTypes["DeveloperFilter"],
	or?:ValueTypes["DeveloperFilter"],
	not?:ValueTypes["DeveloperFilter"]
};
	["DeveloperOrder"]: {
	asc?:ValueTypes["DeveloperOrderable"],
	desc?:ValueTypes["DeveloperOrderable"],
	then?:ValueTypes["DeveloperOrder"]
};
	["DeveloperOrderable"]:DeveloperOrderable;
	["DeveloperPatch"]: {
	project?:ValueTypes["ProjectRef"],
	name?:string,
	availability?:number,
	user?:(ValueTypes["UserRef"] | undefined)[],
	tags?:(ValueTypes["TagRef"] | undefined)[],
	tasks?:(ValueTypes["TaskRef"] | undefined)[],
	liked?:(ValueTypes["TaskRef"] | undefined)[]
};
	["DeveloperRef"]: {
	id?:string,
	project?:ValueTypes["ProjectRef"],
	name?:string,
	availability?:number,
	user?:(ValueTypes["UserRef"] | undefined)[],
	tags?:(ValueTypes["TagRef"] | undefined)[],
	tasks?:(ValueTypes["TaskRef"] | undefined)[],
	liked?:(ValueTypes["TaskRef"] | undefined)[]
};
	["DgraphIndex"]:DgraphIndex;
	["FloatFilter"]: {
	eq?:number,
	le?:number,
	lt?:number,
	ge?:number,
	gt?:number
};
	["IntFilter"]: {
	eq?:number,
	le?:number,
	lt?:number,
	ge?:number,
	gt?:number
};
	["Mutation"]: AliasType<{
addComment?: [{	input:ValueTypes["AddCommentInput"][]},ValueTypes["AddCommentPayload"]],
updateComment?: [{	input:ValueTypes["UpdateCommentInput"]},ValueTypes["UpdateCommentPayload"]],
deleteComment?: [{	filter:ValueTypes["CommentFilter"]},ValueTypes["DeleteCommentPayload"]],
addTag?: [{	input:ValueTypes["AddTagInput"][]},ValueTypes["AddTagPayload"]],
updateTag?: [{	input:ValueTypes["UpdateTagInput"]},ValueTypes["UpdateTagPayload"]],
deleteTag?: [{	filter:ValueTypes["TagFilter"]},ValueTypes["DeleteTagPayload"]],
addTask?: [{	input:ValueTypes["AddTaskInput"][]},ValueTypes["AddTaskPayload"]],
updateTask?: [{	input:ValueTypes["UpdateTaskInput"]},ValueTypes["UpdateTaskPayload"]],
deleteTask?: [{	filter:ValueTypes["TaskFilter"]},ValueTypes["DeleteTaskPayload"]],
addColumn?: [{	input:ValueTypes["AddColumnInput"][]},ValueTypes["AddColumnPayload"]],
updateColumn?: [{	input:ValueTypes["UpdateColumnInput"]},ValueTypes["UpdateColumnPayload"]],
deleteColumn?: [{	filter:ValueTypes["ColumnFilter"]},ValueTypes["DeleteColumnPayload"]],
addBoard?: [{	input:ValueTypes["AddBoardInput"][]},ValueTypes["AddBoardPayload"]],
updateBoard?: [{	input:ValueTypes["UpdateBoardInput"]},ValueTypes["UpdateBoardPayload"]],
deleteBoard?: [{	filter:ValueTypes["BoardFilter"]},ValueTypes["DeleteBoardPayload"]],
addDeveloper?: [{	input:ValueTypes["AddDeveloperInput"][]},ValueTypes["AddDeveloperPayload"]],
updateDeveloper?: [{	input:ValueTypes["UpdateDeveloperInput"]},ValueTypes["UpdateDeveloperPayload"]],
deleteDeveloper?: [{	filter:ValueTypes["DeveloperFilter"]},ValueTypes["DeleteDeveloperPayload"]],
addUser?: [{	input:ValueTypes["AddUserInput"][]},ValueTypes["AddUserPayload"]],
updateUser?: [{	input:ValueTypes["UpdateUserInput"]},ValueTypes["UpdateUserPayload"]],
deleteUser?: [{	filter:ValueTypes["UserFilter"]},ValueTypes["DeleteUserPayload"]],
addProject?: [{	input:ValueTypes["AddProjectInput"][]},ValueTypes["AddProjectPayload"]],
updateProject?: [{	input:ValueTypes["UpdateProjectInput"]},ValueTypes["UpdateProjectPayload"]],
deleteProject?: [{	filter:ValueTypes["ProjectFilter"]},ValueTypes["DeleteProjectPayload"]]
		__typename?: true
}>;
	["Project"]: AliasType<{
	id?:true,
	title?:true,
hosts?: [{	filter?:ValueTypes["UserFilter"],	order?:ValueTypes["UserOrder"],	first?:number,	offset?:number},ValueTypes["User"]],
	description?:true,
tags?: [{	filter?:ValueTypes["TagFilter"],	order?:ValueTypes["TagOrder"],	first?:number,	offset?:number},ValueTypes["Tag"]],
tasks?: [{	filter?:ValueTypes["TaskFilter"],	order?:ValueTypes["TaskOrder"],	first?:number,	offset?:number},ValueTypes["Task"]],
boards?: [{	filter?:ValueTypes["BoardFilter"],	order?:ValueTypes["BoardOrder"],	first?:number,	offset?:number},ValueTypes["Board"]],
developers?: [{	filter?:ValueTypes["DeveloperFilter"],	order?:ValueTypes["DeveloperOrder"],	first?:number,	offset?:number},ValueTypes["Developer"]]
		__typename?: true
}>;
	["ProjectFilter"]: {
	id?:string[],
	title?:ValueTypes["StringHashFilter"],
	and?:ValueTypes["ProjectFilter"],
	or?:ValueTypes["ProjectFilter"],
	not?:ValueTypes["ProjectFilter"]
};
	["ProjectOrder"]: {
	asc?:ValueTypes["ProjectOrderable"],
	desc?:ValueTypes["ProjectOrderable"],
	then?:ValueTypes["ProjectOrder"]
};
	["ProjectOrderable"]:ProjectOrderable;
	["ProjectPatch"]: {
	title?:string,
	hosts?:(ValueTypes["UserRef"] | undefined)[],
	description?:string,
	tags?:(ValueTypes["TagRef"] | undefined)[],
	tasks?:(ValueTypes["TaskRef"] | undefined)[],
	boards?:(ValueTypes["BoardRef"] | undefined)[],
	developers?:(ValueTypes["DeveloperRef"] | undefined)[]
};
	["ProjectRef"]: {
	id?:string,
	title?:string,
	hosts?:(ValueTypes["UserRef"] | undefined)[],
	description?:string,
	tags?:(ValueTypes["TagRef"] | undefined)[],
	tasks?:(ValueTypes["TaskRef"] | undefined)[],
	boards?:(ValueTypes["BoardRef"] | undefined)[],
	developers?:(ValueTypes["DeveloperRef"] | undefined)[]
};
	["Query"]: AliasType<{
getComment?: [{	id:string},ValueTypes["Comment"]],
queryComment?: [{	filter?:ValueTypes["CommentFilter"],	order?:ValueTypes["CommentOrder"],	first?:number,	offset?:number},ValueTypes["Comment"]],
getTag?: [{	id:string},ValueTypes["Tag"]],
queryTag?: [{	filter?:ValueTypes["TagFilter"],	order?:ValueTypes["TagOrder"],	first?:number,	offset?:number},ValueTypes["Tag"]],
getTask?: [{	id:string},ValueTypes["Task"]],
queryTask?: [{	filter?:ValueTypes["TaskFilter"],	order?:ValueTypes["TaskOrder"],	first?:number,	offset?:number},ValueTypes["Task"]],
getColumn?: [{	id:string},ValueTypes["Column"]],
queryColumn?: [{	filter?:ValueTypes["ColumnFilter"],	order?:ValueTypes["ColumnOrder"],	first?:number,	offset?:number},ValueTypes["Column"]],
getBoard?: [{	id:string},ValueTypes["Board"]],
queryBoard?: [{	filter?:ValueTypes["BoardFilter"],	order?:ValueTypes["BoardOrder"],	first?:number,	offset?:number},ValueTypes["Board"]],
getDeveloper?: [{	id:string},ValueTypes["Developer"]],
queryDeveloper?: [{	filter?:ValueTypes["DeveloperFilter"],	order?:ValueTypes["DeveloperOrder"],	first?:number,	offset?:number},ValueTypes["Developer"]],
getUser?: [{	id:string},ValueTypes["User"]],
queryUser?: [{	filter?:ValueTypes["UserFilter"],	order?:ValueTypes["UserOrder"],	first?:number,	offset?:number},ValueTypes["User"]],
getProject?: [{	id:string},ValueTypes["Project"]],
queryProject?: [{	filter?:ValueTypes["ProjectFilter"],	order?:ValueTypes["ProjectOrder"],	first?:number,	offset?:number},ValueTypes["Project"]]
		__typename?: true
}>;
	["StringExactFilter"]: {
	eq?:string,
	le?:string,
	lt?:string,
	ge?:string,
	gt?:string
};
	["StringFullTextFilter"]: {
	alloftext?:string,
	anyoftext?:string
};
	["StringHashFilter"]: {
	eq?:string
};
	["StringRegExpFilter"]: {
	regexp?:string
};
	["StringTermFilter"]: {
	allofterms?:string,
	anyofterms?:string
};
	["Tag"]: AliasType<{
	id?:true,
	title?:true,
project?: [{	filter?:ValueTypes["ProjectFilter"]},ValueTypes["Project"]],
developers?: [{	filter?:ValueTypes["DeveloperFilter"],	order?:ValueTypes["DeveloperOrder"],	first?:number,	offset?:number},ValueTypes["Developer"]]
		__typename?: true
}>;
	["TagFilter"]: {
	id?:string[],
	not?:ValueTypes["TagFilter"]
};
	["TagOrder"]: {
	asc?:ValueTypes["TagOrderable"],
	desc?:ValueTypes["TagOrderable"],
	then?:ValueTypes["TagOrder"]
};
	["TagOrderable"]:TagOrderable;
	["TagPatch"]: {
	title?:string,
	project?:ValueTypes["ProjectRef"],
	developers?:(ValueTypes["DeveloperRef"] | undefined)[]
};
	["TagRef"]: {
	id?:string,
	title?:string,
	project?:ValueTypes["ProjectRef"],
	developers?:(ValueTypes["DeveloperRef"] | undefined)[]
};
	["Task"]: AliasType<{
	id?:true,
project?: [{	filter?:ValueTypes["ProjectFilter"]},ValueTypes["Project"]],
column?: [{	filter?:ValueTypes["ColumnFilter"]},ValueTypes["Column"]],
	title?:true,
developers?: [{	filter?:ValueTypes["DeveloperFilter"],	order?:ValueTypes["DeveloperOrder"],	first?:number,	offset?:number},ValueTypes["Developer"]],
	hours?:true,
	deadline?:true,
	content?:true,
	priority?:true,
	complete?:true,
likes?: [{	filter?:ValueTypes["DeveloperFilter"],	order?:ValueTypes["DeveloperOrder"],	first?:number,	offset?:number},ValueTypes["Developer"]],
comments?: [{	filter?:ValueTypes["CommentFilter"],	order?:ValueTypes["CommentOrder"],	first?:number,	offset?:number},ValueTypes["Comment"]]
		__typename?: true
}>;
	["TaskFilter"]: {
	id?:string[],
	title?:ValueTypes["StringHashFilter"],
	and?:ValueTypes["TaskFilter"],
	or?:ValueTypes["TaskFilter"],
	not?:ValueTypes["TaskFilter"]
};
	["TaskOrder"]: {
	asc?:ValueTypes["TaskOrderable"],
	desc?:ValueTypes["TaskOrderable"],
	then?:ValueTypes["TaskOrder"]
};
	["TaskOrderable"]:TaskOrderable;
	["TaskPatch"]: {
	project?:ValueTypes["ProjectRef"],
	column?:ValueTypes["ColumnRef"],
	title?:string,
	developers?:(ValueTypes["DeveloperRef"] | undefined)[],
	hours?:number,
	deadline?:string,
	content?:string,
	priority?:number,
	complete?:boolean,
	likes?:(ValueTypes["DeveloperRef"] | undefined)[],
	comments?:(ValueTypes["CommentRef"] | undefined)[]
};
	["TaskRef"]: {
	id?:string,
	project?:ValueTypes["ProjectRef"],
	column?:ValueTypes["ColumnRef"],
	title?:string,
	developers?:(ValueTypes["DeveloperRef"] | undefined)[],
	hours?:number,
	deadline?:string,
	content?:string,
	priority?:number,
	complete?:boolean,
	likes?:(ValueTypes["DeveloperRef"] | undefined)[],
	comments?:(ValueTypes["CommentRef"] | undefined)[]
};
	["UpdateBoardInput"]: {
	filter:ValueTypes["BoardFilter"],
	set?:ValueTypes["BoardPatch"],
	remove?:ValueTypes["BoardPatch"]
};
	["UpdateBoardPayload"]: AliasType<{
board?: [{	filter?:ValueTypes["BoardFilter"],	order?:ValueTypes["BoardOrder"],	first?:number,	offset?:number},ValueTypes["Board"]],
	numUids?:true
		__typename?: true
}>;
	["UpdateColumnInput"]: {
	filter:ValueTypes["ColumnFilter"],
	set?:ValueTypes["ColumnPatch"],
	remove?:ValueTypes["ColumnPatch"]
};
	["UpdateColumnPayload"]: AliasType<{
column?: [{	filter?:ValueTypes["ColumnFilter"],	order?:ValueTypes["ColumnOrder"],	first?:number,	offset?:number},ValueTypes["Column"]],
	numUids?:true
		__typename?: true
}>;
	["UpdateCommentInput"]: {
	filter:ValueTypes["CommentFilter"],
	set?:ValueTypes["CommentPatch"],
	remove?:ValueTypes["CommentPatch"]
};
	["UpdateCommentPayload"]: AliasType<{
comment?: [{	filter?:ValueTypes["CommentFilter"],	order?:ValueTypes["CommentOrder"],	first?:number,	offset?:number},ValueTypes["Comment"]],
	numUids?:true
		__typename?: true
}>;
	["UpdateDeveloperInput"]: {
	filter:ValueTypes["DeveloperFilter"],
	set?:ValueTypes["DeveloperPatch"],
	remove?:ValueTypes["DeveloperPatch"]
};
	["UpdateDeveloperPayload"]: AliasType<{
developer?: [{	filter?:ValueTypes["DeveloperFilter"],	order?:ValueTypes["DeveloperOrder"],	first?:number,	offset?:number},ValueTypes["Developer"]],
	numUids?:true
		__typename?: true
}>;
	["UpdateProjectInput"]: {
	filter:ValueTypes["ProjectFilter"],
	set?:ValueTypes["ProjectPatch"],
	remove?:ValueTypes["ProjectPatch"]
};
	["UpdateProjectPayload"]: AliasType<{
project?: [{	filter?:ValueTypes["ProjectFilter"],	order?:ValueTypes["ProjectOrder"],	first?:number,	offset?:number},ValueTypes["Project"]],
	numUids?:true
		__typename?: true
}>;
	["UpdateTagInput"]: {
	filter:ValueTypes["TagFilter"],
	set?:ValueTypes["TagPatch"],
	remove?:ValueTypes["TagPatch"]
};
	["UpdateTagPayload"]: AliasType<{
tag?: [{	filter?:ValueTypes["TagFilter"],	order?:ValueTypes["TagOrder"],	first?:number,	offset?:number},ValueTypes["Tag"]],
	numUids?:true
		__typename?: true
}>;
	["UpdateTaskInput"]: {
	filter:ValueTypes["TaskFilter"],
	set?:ValueTypes["TaskPatch"],
	remove?:ValueTypes["TaskPatch"]
};
	["UpdateTaskPayload"]: AliasType<{
task?: [{	filter?:ValueTypes["TaskFilter"],	order?:ValueTypes["TaskOrder"],	first?:number,	offset?:number},ValueTypes["Task"]],
	numUids?:true
		__typename?: true
}>;
	["UpdateUserInput"]: {
	filter:ValueTypes["UserFilter"],
	set?:ValueTypes["UserPatch"],
	remove?:ValueTypes["UserPatch"]
};
	["UpdateUserPayload"]: AliasType<{
user?: [{	filter?:ValueTypes["UserFilter"],	order?:ValueTypes["UserOrder"],	first?:number,	offset?:number},ValueTypes["User"]],
	numUids?:true
		__typename?: true
}>;
	["User"]: AliasType<{
	id?:true,
	username?:true,
	password?:true,
	location?:true,
developer?: [{	filter?:ValueTypes["DeveloperFilter"],	order?:ValueTypes["DeveloperOrder"],	first?:number,	offset?:number},ValueTypes["Developer"]],
host?: [{	filter?:ValueTypes["ProjectFilter"],	order?:ValueTypes["ProjectOrder"],	first?:number,	offset?:number},ValueTypes["Project"]],
stars?: [{	filter?:ValueTypes["TaskFilter"],	order?:ValueTypes["TaskOrder"],	first?:number,	offset?:number},ValueTypes["Task"]]
		__typename?: true
}>;
	["UserFilter"]: {
	id?:string[],
	username?:ValueTypes["StringHashFilter"],
	and?:ValueTypes["UserFilter"],
	or?:ValueTypes["UserFilter"],
	not?:ValueTypes["UserFilter"]
};
	["UserOrder"]: {
	asc?:ValueTypes["UserOrderable"],
	desc?:ValueTypes["UserOrderable"],
	then?:ValueTypes["UserOrder"]
};
	["UserOrderable"]:UserOrderable;
	["UserPatch"]: {
	username?:string,
	password?:string,
	location?:string,
	developer?:(ValueTypes["DeveloperRef"] | undefined)[],
	host?:(ValueTypes["ProjectRef"] | undefined)[],
	stars?:(ValueTypes["TaskRef"] | undefined)[]
};
	["UserRef"]: {
	id?:string,
	username?:string,
	password?:string,
	location?:string,
	developer?:(ValueTypes["DeveloperRef"] | undefined)[],
	host?:(ValueTypes["ProjectRef"] | undefined)[],
	stars?:(ValueTypes["TaskRef"] | undefined)[]
}
  }

export type PartialObjects = {
    ["AddBoardInput"]: {
	project:PartialObjects["ProjectRef"],
	title:string,
	columns?:(PartialObjects["ColumnRef"] | undefined)[],
	order?:(string | undefined)[]
},
	["AddBoardPayload"]: {
		__typename?: "AddBoardPayload";
			board?:(PartialObjects["Board"] | undefined)[],
			numUids?:number
	},
	["AddColumnInput"]: {
	board:PartialObjects["BoardRef"],
	title:string,
	tasks?:(PartialObjects["TaskRef"] | undefined)[]
},
	["AddColumnPayload"]: {
		__typename?: "AddColumnPayload";
			column?:(PartialObjects["Column"] | undefined)[],
			numUids?:number
	},
	["AddCommentInput"]: {
	task:PartialObjects["TaskRef"],
	developer:PartialObjects["DeveloperRef"],
	content:string
},
	["AddCommentPayload"]: {
		__typename?: "AddCommentPayload";
			comment?:(PartialObjects["Comment"] | undefined)[],
			numUids?:number
	},
	["AddDeveloperInput"]: {
	project:PartialObjects["ProjectRef"],
	name:string,
	availability:number,
	user?:(PartialObjects["UserRef"] | undefined)[],
	tags?:(PartialObjects["TagRef"] | undefined)[],
	tasks?:(PartialObjects["TaskRef"] | undefined)[],
	liked?:(PartialObjects["TaskRef"] | undefined)[]
},
	["AddDeveloperPayload"]: {
		__typename?: "AddDeveloperPayload";
			developer?:(PartialObjects["Developer"] | undefined)[],
			numUids?:number
	},
	["AddProjectInput"]: {
	title:string,
	hosts?:PartialObjects["UserRef"][],
	description:string,
	tags?:(PartialObjects["TagRef"] | undefined)[],
	tasks?:(PartialObjects["TaskRef"] | undefined)[],
	boards?:(PartialObjects["BoardRef"] | undefined)[],
	developers?:(PartialObjects["DeveloperRef"] | undefined)[]
},
	["AddProjectPayload"]: {
		__typename?: "AddProjectPayload";
			project?:(PartialObjects["Project"] | undefined)[],
			numUids?:number
	},
	["AddTagInput"]: {
	title:string,
	project:PartialObjects["ProjectRef"],
	developers?:(PartialObjects["DeveloperRef"] | undefined)[]
},
	["AddTagPayload"]: {
		__typename?: "AddTagPayload";
			tag?:(PartialObjects["Tag"] | undefined)[],
			numUids?:number
	},
	["AddTaskInput"]: {
	project:PartialObjects["ProjectRef"],
	column?:PartialObjects["ColumnRef"],
	title:string,
	developers?:(PartialObjects["DeveloperRef"] | undefined)[],
	hours:number,
	deadline:string,
	content:string,
	priority:number,
	complete:boolean,
	likes?:(PartialObjects["DeveloperRef"] | undefined)[],
	comments?:(PartialObjects["CommentRef"] | undefined)[]
},
	["AddTaskPayload"]: {
		__typename?: "AddTaskPayload";
			task?:(PartialObjects["Task"] | undefined)[],
			numUids?:number
	},
	["AddUserInput"]: {
	username:string,
	password:string,
	location:string,
	developer?:(PartialObjects["DeveloperRef"] | undefined)[],
	host?:(PartialObjects["ProjectRef"] | undefined)[],
	stars?:(PartialObjects["TaskRef"] | undefined)[]
},
	["AddUserPayload"]: {
		__typename?: "AddUserPayload";
			user?:(PartialObjects["User"] | undefined)[],
			numUids?:number
	},
	["Board"]: {
		__typename?: "Board";
			id?:string,
			project?:PartialObjects["Project"],
			title?:string,
			columns?:(PartialObjects["Column"] | undefined)[],
			order?:(string | undefined)[]
	},
	["BoardFilter"]: {
	id?:string[],
	not?:PartialObjects["BoardFilter"]
},
	["BoardOrder"]: {
	asc?:PartialObjects["BoardOrderable"],
	desc?:PartialObjects["BoardOrderable"],
	then?:PartialObjects["BoardOrder"]
},
	["BoardOrderable"]:BoardOrderable,
	["BoardPatch"]: {
	project?:PartialObjects["ProjectRef"],
	title?:string,
	columns?:(PartialObjects["ColumnRef"] | undefined)[],
	order?:(string | undefined)[]
},
	["BoardRef"]: {
	id?:string,
	project?:PartialObjects["ProjectRef"],
	title?:string,
	columns?:(PartialObjects["ColumnRef"] | undefined)[],
	order?:(string | undefined)[]
},
	["Column"]: {
		__typename?: "Column";
			id?:string,
			board?:PartialObjects["Board"],
			title?:string,
			tasks?:(PartialObjects["Task"] | undefined)[]
	},
	["ColumnFilter"]: {
	id?:string[],
	not?:PartialObjects["ColumnFilter"]
},
	["ColumnOrder"]: {
	asc?:PartialObjects["ColumnOrderable"],
	desc?:PartialObjects["ColumnOrderable"],
	then?:PartialObjects["ColumnOrder"]
},
	["ColumnOrderable"]:ColumnOrderable,
	["ColumnPatch"]: {
	board?:PartialObjects["BoardRef"],
	title?:string,
	tasks?:(PartialObjects["TaskRef"] | undefined)[]
},
	["ColumnRef"]: {
	id?:string,
	board?:PartialObjects["BoardRef"],
	title?:string,
	tasks?:(PartialObjects["TaskRef"] | undefined)[]
},
	["Comment"]: {
		__typename?: "Comment";
			id?:string,
			task?:PartialObjects["Task"],
			developer?:PartialObjects["Developer"],
			content?:string
	},
	["CommentFilter"]: {
	id?:string[],
	not?:PartialObjects["CommentFilter"]
},
	["CommentOrder"]: {
	asc?:PartialObjects["CommentOrderable"],
	desc?:PartialObjects["CommentOrderable"],
	then?:PartialObjects["CommentOrder"]
},
	["CommentOrderable"]:CommentOrderable,
	["CommentPatch"]: {
	task?:PartialObjects["TaskRef"],
	developer?:PartialObjects["DeveloperRef"],
	content?:string
},
	["CommentRef"]: {
	id?:string,
	task?:PartialObjects["TaskRef"],
	developer?:PartialObjects["DeveloperRef"],
	content?:string
},
	["DateTime"]:any,
	["DateTimeFilter"]: {
	eq?:PartialObjects["DateTime"],
	le?:PartialObjects["DateTime"],
	lt?:PartialObjects["DateTime"],
	ge?:PartialObjects["DateTime"],
	gt?:PartialObjects["DateTime"]
},
	["DeleteBoardPayload"]: {
		__typename?: "DeleteBoardPayload";
			msg?:string,
			numUids?:number
	},
	["DeleteColumnPayload"]: {
		__typename?: "DeleteColumnPayload";
			msg?:string,
			numUids?:number
	},
	["DeleteCommentPayload"]: {
		__typename?: "DeleteCommentPayload";
			msg?:string,
			numUids?:number
	},
	["DeleteDeveloperPayload"]: {
		__typename?: "DeleteDeveloperPayload";
			msg?:string,
			numUids?:number
	},
	["DeleteProjectPayload"]: {
		__typename?: "DeleteProjectPayload";
			msg?:string,
			numUids?:number
	},
	["DeleteTagPayload"]: {
		__typename?: "DeleteTagPayload";
			msg?:string,
			numUids?:number
	},
	["DeleteTaskPayload"]: {
		__typename?: "DeleteTaskPayload";
			msg?:string,
			numUids?:number
	},
	["DeleteUserPayload"]: {
		__typename?: "DeleteUserPayload";
			msg?:string,
			numUids?:number
	},
	["Developer"]: {
		__typename?: "Developer";
			id?:string,
			project?:PartialObjects["Project"],
			name?:string,
			availability?:number,
			user?:(PartialObjects["User"] | undefined)[],
			tags?:(PartialObjects["Tag"] | undefined)[],
			tasks?:(PartialObjects["Task"] | undefined)[],
			liked?:(PartialObjects["Task"] | undefined)[]
	},
	["DeveloperFilter"]: {
	id?:string[],
	name?:PartialObjects["StringHashFilter"],
	and?:PartialObjects["DeveloperFilter"],
	or?:PartialObjects["DeveloperFilter"],
	not?:PartialObjects["DeveloperFilter"]
},
	["DeveloperOrder"]: {
	asc?:PartialObjects["DeveloperOrderable"],
	desc?:PartialObjects["DeveloperOrderable"],
	then?:PartialObjects["DeveloperOrder"]
},
	["DeveloperOrderable"]:DeveloperOrderable,
	["DeveloperPatch"]: {
	project?:PartialObjects["ProjectRef"],
	name?:string,
	availability?:number,
	user?:(PartialObjects["UserRef"] | undefined)[],
	tags?:(PartialObjects["TagRef"] | undefined)[],
	tasks?:(PartialObjects["TaskRef"] | undefined)[],
	liked?:(PartialObjects["TaskRef"] | undefined)[]
},
	["DeveloperRef"]: {
	id?:string,
	project?:PartialObjects["ProjectRef"],
	name?:string,
	availability?:number,
	user?:(PartialObjects["UserRef"] | undefined)[],
	tags?:(PartialObjects["TagRef"] | undefined)[],
	tasks?:(PartialObjects["TaskRef"] | undefined)[],
	liked?:(PartialObjects["TaskRef"] | undefined)[]
},
	["DgraphIndex"]:DgraphIndex,
	["FloatFilter"]: {
	eq?:number,
	le?:number,
	lt?:number,
	ge?:number,
	gt?:number
},
	["IntFilter"]: {
	eq?:number,
	le?:number,
	lt?:number,
	ge?:number,
	gt?:number
},
	["Mutation"]: {
		__typename?: "Mutation";
			addComment?:PartialObjects["AddCommentPayload"],
			updateComment?:PartialObjects["UpdateCommentPayload"],
			deleteComment?:PartialObjects["DeleteCommentPayload"],
			addTag?:PartialObjects["AddTagPayload"],
			updateTag?:PartialObjects["UpdateTagPayload"],
			deleteTag?:PartialObjects["DeleteTagPayload"],
			addTask?:PartialObjects["AddTaskPayload"],
			updateTask?:PartialObjects["UpdateTaskPayload"],
			deleteTask?:PartialObjects["DeleteTaskPayload"],
			addColumn?:PartialObjects["AddColumnPayload"],
			updateColumn?:PartialObjects["UpdateColumnPayload"],
			deleteColumn?:PartialObjects["DeleteColumnPayload"],
			addBoard?:PartialObjects["AddBoardPayload"],
			updateBoard?:PartialObjects["UpdateBoardPayload"],
			deleteBoard?:PartialObjects["DeleteBoardPayload"],
			addDeveloper?:PartialObjects["AddDeveloperPayload"],
			updateDeveloper?:PartialObjects["UpdateDeveloperPayload"],
			deleteDeveloper?:PartialObjects["DeleteDeveloperPayload"],
			addUser?:PartialObjects["AddUserPayload"],
			updateUser?:PartialObjects["UpdateUserPayload"],
			deleteUser?:PartialObjects["DeleteUserPayload"],
			addProject?:PartialObjects["AddProjectPayload"],
			updateProject?:PartialObjects["UpdateProjectPayload"],
			deleteProject?:PartialObjects["DeleteProjectPayload"]
	},
	["Project"]: {
		__typename?: "Project";
			id?:string,
			title?:string,
			hosts?:PartialObjects["User"][],
			description?:string,
			tags?:(PartialObjects["Tag"] | undefined)[],
			tasks?:(PartialObjects["Task"] | undefined)[],
			boards?:(PartialObjects["Board"] | undefined)[],
			developers?:(PartialObjects["Developer"] | undefined)[]
	},
	["ProjectFilter"]: {
	id?:string[],
	title?:PartialObjects["StringHashFilter"],
	and?:PartialObjects["ProjectFilter"],
	or?:PartialObjects["ProjectFilter"],
	not?:PartialObjects["ProjectFilter"]
},
	["ProjectOrder"]: {
	asc?:PartialObjects["ProjectOrderable"],
	desc?:PartialObjects["ProjectOrderable"],
	then?:PartialObjects["ProjectOrder"]
},
	["ProjectOrderable"]:ProjectOrderable,
	["ProjectPatch"]: {
	title?:string,
	hosts?:(PartialObjects["UserRef"] | undefined)[],
	description?:string,
	tags?:(PartialObjects["TagRef"] | undefined)[],
	tasks?:(PartialObjects["TaskRef"] | undefined)[],
	boards?:(PartialObjects["BoardRef"] | undefined)[],
	developers?:(PartialObjects["DeveloperRef"] | undefined)[]
},
	["ProjectRef"]: {
	id?:string,
	title?:string,
	hosts?:(PartialObjects["UserRef"] | undefined)[],
	description?:string,
	tags?:(PartialObjects["TagRef"] | undefined)[],
	tasks?:(PartialObjects["TaskRef"] | undefined)[],
	boards?:(PartialObjects["BoardRef"] | undefined)[],
	developers?:(PartialObjects["DeveloperRef"] | undefined)[]
},
	["Query"]: {
		__typename?: "Query";
			getComment?:PartialObjects["Comment"],
			queryComment?:(PartialObjects["Comment"] | undefined)[],
			getTag?:PartialObjects["Tag"],
			queryTag?:(PartialObjects["Tag"] | undefined)[],
			getTask?:PartialObjects["Task"],
			queryTask?:(PartialObjects["Task"] | undefined)[],
			getColumn?:PartialObjects["Column"],
			queryColumn?:(PartialObjects["Column"] | undefined)[],
			getBoard?:PartialObjects["Board"],
			queryBoard?:(PartialObjects["Board"] | undefined)[],
			getDeveloper?:PartialObjects["Developer"],
			queryDeveloper?:(PartialObjects["Developer"] | undefined)[],
			getUser?:PartialObjects["User"],
			queryUser?:(PartialObjects["User"] | undefined)[],
			getProject?:PartialObjects["Project"],
			queryProject?:(PartialObjects["Project"] | undefined)[]
	},
	["StringExactFilter"]: {
	eq?:string,
	le?:string,
	lt?:string,
	ge?:string,
	gt?:string
},
	["StringFullTextFilter"]: {
	alloftext?:string,
	anyoftext?:string
},
	["StringHashFilter"]: {
	eq?:string
},
	["StringRegExpFilter"]: {
	regexp?:string
},
	["StringTermFilter"]: {
	allofterms?:string,
	anyofterms?:string
},
	["Tag"]: {
		__typename?: "Tag";
			id?:string,
			title?:string,
			project?:PartialObjects["Project"],
			developers?:(PartialObjects["Developer"] | undefined)[]
	},
	["TagFilter"]: {
	id?:string[],
	not?:PartialObjects["TagFilter"]
},
	["TagOrder"]: {
	asc?:PartialObjects["TagOrderable"],
	desc?:PartialObjects["TagOrderable"],
	then?:PartialObjects["TagOrder"]
},
	["TagOrderable"]:TagOrderable,
	["TagPatch"]: {
	title?:string,
	project?:PartialObjects["ProjectRef"],
	developers?:(PartialObjects["DeveloperRef"] | undefined)[]
},
	["TagRef"]: {
	id?:string,
	title?:string,
	project?:PartialObjects["ProjectRef"],
	developers?:(PartialObjects["DeveloperRef"] | undefined)[]
},
	["Task"]: {
		__typename?: "Task";
			id?:string,
			project?:PartialObjects["Project"],
			column?:PartialObjects["Column"],
			title?:string,
			developers?:(PartialObjects["Developer"] | undefined)[],
			hours?:number,
			deadline?:string,
			content?:string,
			priority?:number,
			complete?:boolean,
			likes?:(PartialObjects["Developer"] | undefined)[],
			comments?:(PartialObjects["Comment"] | undefined)[]
	},
	["TaskFilter"]: {
	id?:string[],
	title?:PartialObjects["StringHashFilter"],
	and?:PartialObjects["TaskFilter"],
	or?:PartialObjects["TaskFilter"],
	not?:PartialObjects["TaskFilter"]
},
	["TaskOrder"]: {
	asc?:PartialObjects["TaskOrderable"],
	desc?:PartialObjects["TaskOrderable"],
	then?:PartialObjects["TaskOrder"]
},
	["TaskOrderable"]:TaskOrderable,
	["TaskPatch"]: {
	project?:PartialObjects["ProjectRef"],
	column?:PartialObjects["ColumnRef"],
	title?:string,
	developers?:(PartialObjects["DeveloperRef"] | undefined)[],
	hours?:number,
	deadline?:string,
	content?:string,
	priority?:number,
	complete?:boolean,
	likes?:(PartialObjects["DeveloperRef"] | undefined)[],
	comments?:(PartialObjects["CommentRef"] | undefined)[]
},
	["TaskRef"]: {
	id?:string,
	project?:PartialObjects["ProjectRef"],
	column?:PartialObjects["ColumnRef"],
	title?:string,
	developers?:(PartialObjects["DeveloperRef"] | undefined)[],
	hours?:number,
	deadline?:string,
	content?:string,
	priority?:number,
	complete?:boolean,
	likes?:(PartialObjects["DeveloperRef"] | undefined)[],
	comments?:(PartialObjects["CommentRef"] | undefined)[]
},
	["UpdateBoardInput"]: {
	filter:PartialObjects["BoardFilter"],
	set?:PartialObjects["BoardPatch"],
	remove?:PartialObjects["BoardPatch"]
},
	["UpdateBoardPayload"]: {
		__typename?: "UpdateBoardPayload";
			board?:(PartialObjects["Board"] | undefined)[],
			numUids?:number
	},
	["UpdateColumnInput"]: {
	filter:PartialObjects["ColumnFilter"],
	set?:PartialObjects["ColumnPatch"],
	remove?:PartialObjects["ColumnPatch"]
},
	["UpdateColumnPayload"]: {
		__typename?: "UpdateColumnPayload";
			column?:(PartialObjects["Column"] | undefined)[],
			numUids?:number
	},
	["UpdateCommentInput"]: {
	filter:PartialObjects["CommentFilter"],
	set?:PartialObjects["CommentPatch"],
	remove?:PartialObjects["CommentPatch"]
},
	["UpdateCommentPayload"]: {
		__typename?: "UpdateCommentPayload";
			comment?:(PartialObjects["Comment"] | undefined)[],
			numUids?:number
	},
	["UpdateDeveloperInput"]: {
	filter:PartialObjects["DeveloperFilter"],
	set?:PartialObjects["DeveloperPatch"],
	remove?:PartialObjects["DeveloperPatch"]
},
	["UpdateDeveloperPayload"]: {
		__typename?: "UpdateDeveloperPayload";
			developer?:(PartialObjects["Developer"] | undefined)[],
			numUids?:number
	},
	["UpdateProjectInput"]: {
	filter:PartialObjects["ProjectFilter"],
	set?:PartialObjects["ProjectPatch"],
	remove?:PartialObjects["ProjectPatch"]
},
	["UpdateProjectPayload"]: {
		__typename?: "UpdateProjectPayload";
			project?:(PartialObjects["Project"] | undefined)[],
			numUids?:number
	},
	["UpdateTagInput"]: {
	filter:PartialObjects["TagFilter"],
	set?:PartialObjects["TagPatch"],
	remove?:PartialObjects["TagPatch"]
},
	["UpdateTagPayload"]: {
		__typename?: "UpdateTagPayload";
			tag?:(PartialObjects["Tag"] | undefined)[],
			numUids?:number
	},
	["UpdateTaskInput"]: {
	filter:PartialObjects["TaskFilter"],
	set?:PartialObjects["TaskPatch"],
	remove?:PartialObjects["TaskPatch"]
},
	["UpdateTaskPayload"]: {
		__typename?: "UpdateTaskPayload";
			task?:(PartialObjects["Task"] | undefined)[],
			numUids?:number
	},
	["UpdateUserInput"]: {
	filter:PartialObjects["UserFilter"],
	set?:PartialObjects["UserPatch"],
	remove?:PartialObjects["UserPatch"]
},
	["UpdateUserPayload"]: {
		__typename?: "UpdateUserPayload";
			user?:(PartialObjects["User"] | undefined)[],
			numUids?:number
	},
	["User"]: {
		__typename?: "User";
			id?:string,
			username?:string,
			password?:string,
			location?:string,
			developer?:(PartialObjects["Developer"] | undefined)[],
			host?:(PartialObjects["Project"] | undefined)[],
			stars?:(PartialObjects["Task"] | undefined)[]
	},
	["UserFilter"]: {
	id?:string[],
	username?:PartialObjects["StringHashFilter"],
	and?:PartialObjects["UserFilter"],
	or?:PartialObjects["UserFilter"],
	not?:PartialObjects["UserFilter"]
},
	["UserOrder"]: {
	asc?:PartialObjects["UserOrderable"],
	desc?:PartialObjects["UserOrderable"],
	then?:PartialObjects["UserOrder"]
},
	["UserOrderable"]:UserOrderable,
	["UserPatch"]: {
	username?:string,
	password?:string,
	location?:string,
	developer?:(PartialObjects["DeveloperRef"] | undefined)[],
	host?:(PartialObjects["ProjectRef"] | undefined)[],
	stars?:(PartialObjects["TaskRef"] | undefined)[]
},
	["UserRef"]: {
	id?:string,
	username?:string,
	password?:string,
	location?:string,
	developer?:(PartialObjects["DeveloperRef"] | undefined)[],
	host?:(PartialObjects["ProjectRef"] | undefined)[],
	stars?:(PartialObjects["TaskRef"] | undefined)[]
}
  }

// source: http://localhost:8080/graphql

// timestamp: Thu Mar 19 2020 10:55:06 GMT+0100 (Central European Standard Time)









export type AddBoardInput = {
		project:ProjectRef,
	title:string,
	columns?:(ColumnRef | undefined)[],
	order?:(string | undefined)[]
}

export type AddBoardPayload = {
	__typename?: "AddBoardPayload",
	board?:(Board | undefined)[],
	numUids?:number
}

export type AddColumnInput = {
		board:BoardRef,
	title:string,
	tasks?:(TaskRef | undefined)[]
}

export type AddColumnPayload = {
	__typename?: "AddColumnPayload",
	column?:(Column | undefined)[],
	numUids?:number
}

export type AddCommentInput = {
		task:TaskRef,
	developer:DeveloperRef,
	content:string
}

export type AddCommentPayload = {
	__typename?: "AddCommentPayload",
	comment?:(Comment | undefined)[],
	numUids?:number
}

export type AddDeveloperInput = {
		project:ProjectRef,
	name:string,
	availability:number,
	user?:(UserRef | undefined)[],
	tags?:(TagRef | undefined)[],
	tasks?:(TaskRef | undefined)[],
	liked?:(TaskRef | undefined)[]
}

export type AddDeveloperPayload = {
	__typename?: "AddDeveloperPayload",
	developer?:(Developer | undefined)[],
	numUids?:number
}

export type AddProjectInput = {
		title:string,
	hosts?:UserRef[],
	description:string,
	tags?:(TagRef | undefined)[],
	tasks?:(TaskRef | undefined)[],
	boards?:(BoardRef | undefined)[],
	developers?:(DeveloperRef | undefined)[]
}

export type AddProjectPayload = {
	__typename?: "AddProjectPayload",
	project?:(Project | undefined)[],
	numUids?:number
}

export type AddTagInput = {
		title:string,
	project:ProjectRef,
	developers?:(DeveloperRef | undefined)[]
}

export type AddTagPayload = {
	__typename?: "AddTagPayload",
	tag?:(Tag | undefined)[],
	numUids?:number
}

export type AddTaskInput = {
		project:ProjectRef,
	column?:ColumnRef,
	title:string,
	developers?:(DeveloperRef | undefined)[],
	hours:number,
	deadline:string,
	content:string,
	priority:number,
	complete:boolean,
	likes?:(DeveloperRef | undefined)[],
	comments?:(CommentRef | undefined)[]
}

export type AddTaskPayload = {
	__typename?: "AddTaskPayload",
	task?:(Task | undefined)[],
	numUids?:number
}

export type AddUserInput = {
		username:string,
	password:string,
	location:string,
	developer?:(DeveloperRef | undefined)[],
	host?:(ProjectRef | undefined)[],
	stars?:(TaskRef | undefined)[]
}

export type AddUserPayload = {
	__typename?: "AddUserPayload",
	user?:(User | undefined)[],
	numUids?:number
}

export type Board = {
	__typename?: "Board",
	id:string,
	project:Project,
	title:string,
	columns?:(Column | undefined)[],
	order?:(string | undefined)[]
}

export type BoardFilter = {
		id?:string[],
	not?:BoardFilter
}

export type BoardOrder = {
		asc?:BoardOrderable,
	desc?:BoardOrderable,
	then?:BoardOrder
}

export enum BoardOrderable {
	title = "title",
	order = "order"
}

export type BoardPatch = {
		project?:ProjectRef,
	title?:string,
	columns?:(ColumnRef | undefined)[],
	order?:(string | undefined)[]
}

export type BoardRef = {
		id?:string,
	project?:ProjectRef,
	title?:string,
	columns?:(ColumnRef | undefined)[],
	order?:(string | undefined)[]
}

export type Column = {
	__typename?: "Column",
	id:string,
	board:Board,
	title:string,
	tasks?:(Task | undefined)[]
}

export type ColumnFilter = {
		id?:string[],
	not?:ColumnFilter
}

export type ColumnOrder = {
		asc?:ColumnOrderable,
	desc?:ColumnOrderable,
	then?:ColumnOrder
}

export enum ColumnOrderable {
	title = "title"
}

export type ColumnPatch = {
		board?:BoardRef,
	title?:string,
	tasks?:(TaskRef | undefined)[]
}

export type ColumnRef = {
		id?:string,
	board?:BoardRef,
	title?:string,
	tasks?:(TaskRef | undefined)[]
}

export type Comment = {
	__typename?: "Comment",
	id:string,
	task:Task,
	developer:Developer,
	content:string
}

export type CommentFilter = {
		id?:string[],
	not?:CommentFilter
}

export type CommentOrder = {
		asc?:CommentOrderable,
	desc?:CommentOrderable,
	then?:CommentOrder
}

export enum CommentOrderable {
	content = "content"
}

export type CommentPatch = {
		task?:TaskRef,
	developer?:DeveloperRef,
	content?:string
}

export type CommentRef = {
		id?:string,
	task?:TaskRef,
	developer?:DeveloperRef,
	content?:string
}

export type DateTime = any

export type DateTimeFilter = {
		eq?:DateTime,
	le?:DateTime,
	lt?:DateTime,
	ge?:DateTime,
	gt?:DateTime
}

export type DeleteBoardPayload = {
	__typename?: "DeleteBoardPayload",
	msg?:string,
	numUids?:number
}

export type DeleteColumnPayload = {
	__typename?: "DeleteColumnPayload",
	msg?:string,
	numUids?:number
}

export type DeleteCommentPayload = {
	__typename?: "DeleteCommentPayload",
	msg?:string,
	numUids?:number
}

export type DeleteDeveloperPayload = {
	__typename?: "DeleteDeveloperPayload",
	msg?:string,
	numUids?:number
}

export type DeleteProjectPayload = {
	__typename?: "DeleteProjectPayload",
	msg?:string,
	numUids?:number
}

export type DeleteTagPayload = {
	__typename?: "DeleteTagPayload",
	msg?:string,
	numUids?:number
}

export type DeleteTaskPayload = {
	__typename?: "DeleteTaskPayload",
	msg?:string,
	numUids?:number
}

export type DeleteUserPayload = {
	__typename?: "DeleteUserPayload",
	msg?:string,
	numUids?:number
}

export type Developer = {
	__typename?: "Developer",
	id:string,
	project:Project,
	name:string,
	availability:number,
	user?:(User | undefined)[],
	tags?:(Tag | undefined)[],
	tasks?:(Task | undefined)[],
	liked?:(Task | undefined)[]
}

export type DeveloperFilter = {
		id?:string[],
	name?:StringHashFilter,
	and?:DeveloperFilter,
	or?:DeveloperFilter,
	not?:DeveloperFilter
}

export type DeveloperOrder = {
		asc?:DeveloperOrderable,
	desc?:DeveloperOrderable,
	then?:DeveloperOrder
}

export enum DeveloperOrderable {
	name = "name",
	availability = "availability"
}

export type DeveloperPatch = {
		project?:ProjectRef,
	name?:string,
	availability?:number,
	user?:(UserRef | undefined)[],
	tags?:(TagRef | undefined)[],
	tasks?:(TaskRef | undefined)[],
	liked?:(TaskRef | undefined)[]
}

export type DeveloperRef = {
		id?:string,
	project?:ProjectRef,
	name?:string,
	availability?:number,
	user?:(UserRef | undefined)[],
	tags?:(TagRef | undefined)[],
	tasks?:(TaskRef | undefined)[],
	liked?:(TaskRef | undefined)[]
}

export enum DgraphIndex {
	int = "int",
	float = "float",
	bool = "bool",
	hash = "hash",
	exact = "exact",
	term = "term",
	fulltext = "fulltext",
	trigram = "trigram",
	regexp = "regexp",
	year = "year",
	month = "month",
	day = "day",
	hour = "hour"
}

export type FloatFilter = {
		eq?:number,
	le?:number,
	lt?:number,
	ge?:number,
	gt?:number
}

export type IntFilter = {
		eq?:number,
	le?:number,
	lt?:number,
	ge?:number,
	gt?:number
}

export type Mutation = {
	__typename?: "Mutation",
	addComment?:AddCommentPayload,
	updateComment?:UpdateCommentPayload,
	deleteComment?:DeleteCommentPayload,
	addTag?:AddTagPayload,
	updateTag?:UpdateTagPayload,
	deleteTag?:DeleteTagPayload,
	addTask?:AddTaskPayload,
	updateTask?:UpdateTaskPayload,
	deleteTask?:DeleteTaskPayload,
	addColumn?:AddColumnPayload,
	updateColumn?:UpdateColumnPayload,
	deleteColumn?:DeleteColumnPayload,
	addBoard?:AddBoardPayload,
	updateBoard?:UpdateBoardPayload,
	deleteBoard?:DeleteBoardPayload,
	addDeveloper?:AddDeveloperPayload,
	updateDeveloper?:UpdateDeveloperPayload,
	deleteDeveloper?:DeleteDeveloperPayload,
	addUser?:AddUserPayload,
	updateUser?:UpdateUserPayload,
	deleteUser?:DeleteUserPayload,
	addProject?:AddProjectPayload,
	updateProject?:UpdateProjectPayload,
	deleteProject?:DeleteProjectPayload
}

export type Project = {
	__typename?: "Project",
	id:string,
	title:string,
	hosts?:User[],
	description:string,
	tags?:(Tag | undefined)[],
	tasks?:(Task | undefined)[],
	boards?:(Board | undefined)[],
	developers?:(Developer | undefined)[]
}

export type ProjectFilter = {
		id?:string[],
	title?:StringHashFilter,
	and?:ProjectFilter,
	or?:ProjectFilter,
	not?:ProjectFilter
}

export type ProjectOrder = {
		asc?:ProjectOrderable,
	desc?:ProjectOrderable,
	then?:ProjectOrder
}

export enum ProjectOrderable {
	title = "title",
	description = "description"
}

export type ProjectPatch = {
		title?:string,
	hosts?:(UserRef | undefined)[],
	description?:string,
	tags?:(TagRef | undefined)[],
	tasks?:(TaskRef | undefined)[],
	boards?:(BoardRef | undefined)[],
	developers?:(DeveloperRef | undefined)[]
}

export type ProjectRef = {
		id?:string,
	title?:string,
	hosts?:(UserRef | undefined)[],
	description?:string,
	tags?:(TagRef | undefined)[],
	tasks?:(TaskRef | undefined)[],
	boards?:(BoardRef | undefined)[],
	developers?:(DeveloperRef | undefined)[]
}

export type Query = {
	__typename?: "Query",
	getComment?:Comment,
	queryComment?:(Comment | undefined)[],
	getTag?:Tag,
	queryTag?:(Tag | undefined)[],
	getTask?:Task,
	queryTask?:(Task | undefined)[],
	getColumn?:Column,
	queryColumn?:(Column | undefined)[],
	getBoard?:Board,
	queryBoard?:(Board | undefined)[],
	getDeveloper?:Developer,
	queryDeveloper?:(Developer | undefined)[],
	getUser?:User,
	queryUser?:(User | undefined)[],
	getProject?:Project,
	queryProject?:(Project | undefined)[]
}

export type StringExactFilter = {
		eq?:string,
	le?:string,
	lt?:string,
	ge?:string,
	gt?:string
}

export type StringFullTextFilter = {
		alloftext?:string,
	anyoftext?:string
}

export type StringHashFilter = {
		eq?:string
}

export type StringRegExpFilter = {
		regexp?:string
}

export type StringTermFilter = {
		allofterms?:string,
	anyofterms?:string
}

export type Tag = {
	__typename?: "Tag",
	id:string,
	title:string,
	project:Project,
	developers?:(Developer | undefined)[]
}

export type TagFilter = {
		id?:string[],
	not?:TagFilter
}

export type TagOrder = {
		asc?:TagOrderable,
	desc?:TagOrderable,
	then?:TagOrder
}

export enum TagOrderable {
	title = "title"
}

export type TagPatch = {
		title?:string,
	project?:ProjectRef,
	developers?:(DeveloperRef | undefined)[]
}

export type TagRef = {
		id?:string,
	title?:string,
	project?:ProjectRef,
	developers?:(DeveloperRef | undefined)[]
}

export type Task = {
	__typename?: "Task",
	id:string,
	project:Project,
	column?:Column,
	title:string,
	developers?:(Developer | undefined)[],
	hours:number,
	deadline:string,
	content:string,
	priority:number,
	complete:boolean,
	likes?:(Developer | undefined)[],
	comments?:(Comment | undefined)[]
}

export type TaskFilter = {
		id?:string[],
	title?:StringHashFilter,
	and?:TaskFilter,
	or?:TaskFilter,
	not?:TaskFilter
}

export type TaskOrder = {
		asc?:TaskOrderable,
	desc?:TaskOrderable,
	then?:TaskOrder
}

export enum TaskOrderable {
	title = "title",
	hours = "hours",
	deadline = "deadline",
	content = "content",
	priority = "priority"
}

export type TaskPatch = {
		project?:ProjectRef,
	column?:ColumnRef,
	title?:string,
	developers?:(DeveloperRef | undefined)[],
	hours?:number,
	deadline?:string,
	content?:string,
	priority?:number,
	complete?:boolean,
	likes?:(DeveloperRef | undefined)[],
	comments?:(CommentRef | undefined)[]
}

export type TaskRef = {
		id?:string,
	project?:ProjectRef,
	column?:ColumnRef,
	title?:string,
	developers?:(DeveloperRef | undefined)[],
	hours?:number,
	deadline?:string,
	content?:string,
	priority?:number,
	complete?:boolean,
	likes?:(DeveloperRef | undefined)[],
	comments?:(CommentRef | undefined)[]
}

export type UpdateBoardInput = {
		filter:BoardFilter,
	set?:BoardPatch,
	remove?:BoardPatch
}

export type UpdateBoardPayload = {
	__typename?: "UpdateBoardPayload",
	board?:(Board | undefined)[],
	numUids?:number
}

export type UpdateColumnInput = {
		filter:ColumnFilter,
	set?:ColumnPatch,
	remove?:ColumnPatch
}

export type UpdateColumnPayload = {
	__typename?: "UpdateColumnPayload",
	column?:(Column | undefined)[],
	numUids?:number
}

export type UpdateCommentInput = {
		filter:CommentFilter,
	set?:CommentPatch,
	remove?:CommentPatch
}

export type UpdateCommentPayload = {
	__typename?: "UpdateCommentPayload",
	comment?:(Comment | undefined)[],
	numUids?:number
}

export type UpdateDeveloperInput = {
		filter:DeveloperFilter,
	set?:DeveloperPatch,
	remove?:DeveloperPatch
}

export type UpdateDeveloperPayload = {
	__typename?: "UpdateDeveloperPayload",
	developer?:(Developer | undefined)[],
	numUids?:number
}

export type UpdateProjectInput = {
		filter:ProjectFilter,
	set?:ProjectPatch,
	remove?:ProjectPatch
}

export type UpdateProjectPayload = {
	__typename?: "UpdateProjectPayload",
	project?:(Project | undefined)[],
	numUids?:number
}

export type UpdateTagInput = {
		filter:TagFilter,
	set?:TagPatch,
	remove?:TagPatch
}

export type UpdateTagPayload = {
	__typename?: "UpdateTagPayload",
	tag?:(Tag | undefined)[],
	numUids?:number
}

export type UpdateTaskInput = {
		filter:TaskFilter,
	set?:TaskPatch,
	remove?:TaskPatch
}

export type UpdateTaskPayload = {
	__typename?: "UpdateTaskPayload",
	task?:(Task | undefined)[],
	numUids?:number
}

export type UpdateUserInput = {
		filter:UserFilter,
	set?:UserPatch,
	remove?:UserPatch
}

export type UpdateUserPayload = {
	__typename?: "UpdateUserPayload",
	user?:(User | undefined)[],
	numUids?:number
}

export type User = {
	__typename?: "User",
	id:string,
	username:string,
	password:string,
	location:string,
	developer?:(Developer | undefined)[],
	host?:(Project | undefined)[],
	stars?:(Task | undefined)[]
}

export type UserFilter = {
		id?:string[],
	username?:StringHashFilter,
	and?:UserFilter,
	or?:UserFilter,
	not?:UserFilter
}

export type UserOrder = {
		asc?:UserOrderable,
	desc?:UserOrderable,
	then?:UserOrder
}

export enum UserOrderable {
	username = "username",
	password = "password",
	location = "location"
}

export type UserPatch = {
		username?:string,
	password?:string,
	location?:string,
	developer?:(DeveloperRef | undefined)[],
	host?:(ProjectRef | undefined)[],
	stars?:(TaskRef | undefined)[]
}

export type UserRef = {
		id?:string,
	username?:string,
	password?:string,
	location?:string,
	developer?:(DeveloperRef | undefined)[],
	host?:(ProjectRef | undefined)[],
	stars?:(TaskRef | undefined)[]
}

export const AllTypesProps: Record<string,any> = {
	AddBoardInput:{
		project:{
			type:"ProjectRef",
			array:false,
			arrayRequired:false,
			required:true
		},
		title:{
			type:"String",
			array:false,
			arrayRequired:false,
			required:true
		},
		columns:{
			type:"ColumnRef",
			array:true,
			arrayRequired:false,
			required:false
		},
		order:{
			type:"String",
			array:true,
			arrayRequired:false,
			required:false
		}
	},
	AddBoardPayload:{
		board:{
			filter:{
				type:"BoardFilter",
				array:false,
				arrayRequired:false,
				required:false
			},
			order:{
				type:"BoardOrder",
				array:false,
				arrayRequired:false,
				required:false
			},
			first:{
				type:"Int",
				array:false,
				arrayRequired:false,
				required:false
			},
			offset:{
				type:"Int",
				array:false,
				arrayRequired:false,
				required:false
			}
		}
	},
	AddColumnInput:{
		board:{
			type:"BoardRef",
			array:false,
			arrayRequired:false,
			required:true
		},
		title:{
			type:"String",
			array:false,
			arrayRequired:false,
			required:true
		},
		tasks:{
			type:"TaskRef",
			array:true,
			arrayRequired:false,
			required:false
		}
	},
	AddColumnPayload:{
		column:{
			filter:{
				type:"ColumnFilter",
				array:false,
				arrayRequired:false,
				required:false
			},
			order:{
				type:"ColumnOrder",
				array:false,
				arrayRequired:false,
				required:false
			},
			first:{
				type:"Int",
				array:false,
				arrayRequired:false,
				required:false
			},
			offset:{
				type:"Int",
				array:false,
				arrayRequired:false,
				required:false
			}
		}
	},
	AddCommentInput:{
		task:{
			type:"TaskRef",
			array:false,
			arrayRequired:false,
			required:true
		},
		developer:{
			type:"DeveloperRef",
			array:false,
			arrayRequired:false,
			required:true
		},
		content:{
			type:"String",
			array:false,
			arrayRequired:false,
			required:true
		}
	},
	AddCommentPayload:{
		comment:{
			filter:{
				type:"CommentFilter",
				array:false,
				arrayRequired:false,
				required:false
			},
			order:{
				type:"CommentOrder",
				array:false,
				arrayRequired:false,
				required:false
			},
			first:{
				type:"Int",
				array:false,
				arrayRequired:false,
				required:false
			},
			offset:{
				type:"Int",
				array:false,
				arrayRequired:false,
				required:false
			}
		}
	},
	AddDeveloperInput:{
		project:{
			type:"ProjectRef",
			array:false,
			arrayRequired:false,
			required:true
		},
		name:{
			type:"String",
			array:false,
			arrayRequired:false,
			required:true
		},
		availability:{
			type:"Int",
			array:false,
			arrayRequired:false,
			required:true
		},
		user:{
			type:"UserRef",
			array:true,
			arrayRequired:false,
			required:false
		},
		tags:{
			type:"TagRef",
			array:true,
			arrayRequired:false,
			required:false
		},
		tasks:{
			type:"TaskRef",
			array:true,
			arrayRequired:false,
			required:false
		},
		liked:{
			type:"TaskRef",
			array:true,
			arrayRequired:false,
			required:false
		}
	},
	AddDeveloperPayload:{
		developer:{
			filter:{
				type:"DeveloperFilter",
				array:false,
				arrayRequired:false,
				required:false
			},
			order:{
				type:"DeveloperOrder",
				array:false,
				arrayRequired:false,
				required:false
			},
			first:{
				type:"Int",
				array:false,
				arrayRequired:false,
				required:false
			},
			offset:{
				type:"Int",
				array:false,
				arrayRequired:false,
				required:false
			}
		}
	},
	AddProjectInput:{
		title:{
			type:"String",
			array:false,
			arrayRequired:false,
			required:true
		},
		hosts:{
			type:"UserRef",
			array:true,
			arrayRequired:false,
			required:true
		},
		description:{
			type:"String",
			array:false,
			arrayRequired:false,
			required:true
		},
		tags:{
			type:"TagRef",
			array:true,
			arrayRequired:false,
			required:false
		},
		tasks:{
			type:"TaskRef",
			array:true,
			arrayRequired:false,
			required:false
		},
		boards:{
			type:"BoardRef",
			array:true,
			arrayRequired:false,
			required:false
		},
		developers:{
			type:"DeveloperRef",
			array:true,
			arrayRequired:false,
			required:false
		}
	},
	AddProjectPayload:{
		project:{
			filter:{
				type:"ProjectFilter",
				array:false,
				arrayRequired:false,
				required:false
			},
			order:{
				type:"ProjectOrder",
				array:false,
				arrayRequired:false,
				required:false
			},
			first:{
				type:"Int",
				array:false,
				arrayRequired:false,
				required:false
			},
			offset:{
				type:"Int",
				array:false,
				arrayRequired:false,
				required:false
			}
		}
	},
	AddTagInput:{
		title:{
			type:"String",
			array:false,
			arrayRequired:false,
			required:true
		},
		project:{
			type:"ProjectRef",
			array:false,
			arrayRequired:false,
			required:true
		},
		developers:{
			type:"DeveloperRef",
			array:true,
			arrayRequired:false,
			required:false
		}
	},
	AddTagPayload:{
		tag:{
			filter:{
				type:"TagFilter",
				array:false,
				arrayRequired:false,
				required:false
			},
			order:{
				type:"TagOrder",
				array:false,
				arrayRequired:false,
				required:false
			},
			first:{
				type:"Int",
				array:false,
				arrayRequired:false,
				required:false
			},
			offset:{
				type:"Int",
				array:false,
				arrayRequired:false,
				required:false
			}
		}
	},
	AddTaskInput:{
		project:{
			type:"ProjectRef",
			array:false,
			arrayRequired:false,
			required:true
		},
		column:{
			type:"ColumnRef",
			array:false,
			arrayRequired:false,
			required:false
		},
		title:{
			type:"String",
			array:false,
			arrayRequired:false,
			required:true
		},
		developers:{
			type:"DeveloperRef",
			array:true,
			arrayRequired:false,
			required:false
		},
		hours:{
			type:"Int",
			array:false,
			arrayRequired:false,
			required:true
		},
		deadline:{
			type:"String",
			array:false,
			arrayRequired:false,
			required:true
		},
		content:{
			type:"String",
			array:false,
			arrayRequired:false,
			required:true
		},
		priority:{
			type:"Int",
			array:false,
			arrayRequired:false,
			required:true
		},
		complete:{
			type:"Boolean",
			array:false,
			arrayRequired:false,
			required:true
		},
		likes:{
			type:"DeveloperRef",
			array:true,
			arrayRequired:false,
			required:false
		},
		comments:{
			type:"CommentRef",
			array:true,
			arrayRequired:false,
			required:false
		}
	},
	AddTaskPayload:{
		task:{
			filter:{
				type:"TaskFilter",
				array:false,
				arrayRequired:false,
				required:false
			},
			order:{
				type:"TaskOrder",
				array:false,
				arrayRequired:false,
				required:false
			},
			first:{
				type:"Int",
				array:false,
				arrayRequired:false,
				required:false
			},
			offset:{
				type:"Int",
				array:false,
				arrayRequired:false,
				required:false
			}
		}
	},
	AddUserInput:{
		username:{
			type:"String",
			array:false,
			arrayRequired:false,
			required:true
		},
		password:{
			type:"String",
			array:false,
			arrayRequired:false,
			required:true
		},
		location:{
			type:"String",
			array:false,
			arrayRequired:false,
			required:true
		},
		developer:{
			type:"DeveloperRef",
			array:true,
			arrayRequired:false,
			required:false
		},
		host:{
			type:"ProjectRef",
			array:true,
			arrayRequired:false,
			required:false
		},
		stars:{
			type:"TaskRef",
			array:true,
			arrayRequired:false,
			required:false
		}
	},
	AddUserPayload:{
		user:{
			filter:{
				type:"UserFilter",
				array:false,
				arrayRequired:false,
				required:false
			},
			order:{
				type:"UserOrder",
				array:false,
				arrayRequired:false,
				required:false
			},
			first:{
				type:"Int",
				array:false,
				arrayRequired:false,
				required:false
			},
			offset:{
				type:"Int",
				array:false,
				arrayRequired:false,
				required:false
			}
		}
	},
	Board:{
		project:{
			filter:{
				type:"ProjectFilter",
				array:false,
				arrayRequired:false,
				required:false
			}
		},
		columns:{
			filter:{
				type:"ColumnFilter",
				array:false,
				arrayRequired:false,
				required:false
			},
			order:{
				type:"ColumnOrder",
				array:false,
				arrayRequired:false,
				required:false
			},
			first:{
				type:"Int",
				array:false,
				arrayRequired:false,
				required:false
			},
			offset:{
				type:"Int",
				array:false,
				arrayRequired:false,
				required:false
			}
		}
	},
	BoardFilter:{
		id:{
			type:"ID",
			array:true,
			arrayRequired:false,
			required:true
		},
		not:{
			type:"BoardFilter",
			array:false,
			arrayRequired:false,
			required:false
		}
	},
	BoardOrder:{
		asc:{
			type:"BoardOrderable",
			array:false,
			arrayRequired:false,
			required:false
		},
		desc:{
			type:"BoardOrderable",
			array:false,
			arrayRequired:false,
			required:false
		},
		then:{
			type:"BoardOrder",
			array:false,
			arrayRequired:false,
			required:false
		}
	},
	BoardOrderable: "enum",
	BoardPatch:{
		project:{
			type:"ProjectRef",
			array:false,
			arrayRequired:false,
			required:false
		},
		title:{
			type:"String",
			array:false,
			arrayRequired:false,
			required:false
		},
		columns:{
			type:"ColumnRef",
			array:true,
			arrayRequired:false,
			required:false
		},
		order:{
			type:"String",
			array:true,
			arrayRequired:false,
			required:false
		}
	},
	BoardRef:{
		id:{
			type:"ID",
			array:false,
			arrayRequired:false,
			required:false
		},
		project:{
			type:"ProjectRef",
			array:false,
			arrayRequired:false,
			required:false
		},
		title:{
			type:"String",
			array:false,
			arrayRequired:false,
			required:false
		},
		columns:{
			type:"ColumnRef",
			array:true,
			arrayRequired:false,
			required:false
		},
		order:{
			type:"String",
			array:true,
			arrayRequired:false,
			required:false
		}
	},
	Column:{
		board:{
			filter:{
				type:"BoardFilter",
				array:false,
				arrayRequired:false,
				required:false
			}
		},
		tasks:{
			filter:{
				type:"TaskFilter",
				array:false,
				arrayRequired:false,
				required:false
			},
			order:{
				type:"TaskOrder",
				array:false,
				arrayRequired:false,
				required:false
			},
			first:{
				type:"Int",
				array:false,
				arrayRequired:false,
				required:false
			},
			offset:{
				type:"Int",
				array:false,
				arrayRequired:false,
				required:false
			}
		}
	},
	ColumnFilter:{
		id:{
			type:"ID",
			array:true,
			arrayRequired:false,
			required:true
		},
		not:{
			type:"ColumnFilter",
			array:false,
			arrayRequired:false,
			required:false
		}
	},
	ColumnOrder:{
		asc:{
			type:"ColumnOrderable",
			array:false,
			arrayRequired:false,
			required:false
		},
		desc:{
			type:"ColumnOrderable",
			array:false,
			arrayRequired:false,
			required:false
		},
		then:{
			type:"ColumnOrder",
			array:false,
			arrayRequired:false,
			required:false
		}
	},
	ColumnOrderable: "enum",
	ColumnPatch:{
		board:{
			type:"BoardRef",
			array:false,
			arrayRequired:false,
			required:false
		},
		title:{
			type:"String",
			array:false,
			arrayRequired:false,
			required:false
		},
		tasks:{
			type:"TaskRef",
			array:true,
			arrayRequired:false,
			required:false
		}
	},
	ColumnRef:{
		id:{
			type:"ID",
			array:false,
			arrayRequired:false,
			required:false
		},
		board:{
			type:"BoardRef",
			array:false,
			arrayRequired:false,
			required:false
		},
		title:{
			type:"String",
			array:false,
			arrayRequired:false,
			required:false
		},
		tasks:{
			type:"TaskRef",
			array:true,
			arrayRequired:false,
			required:false
		}
	},
	Comment:{
		task:{
			filter:{
				type:"TaskFilter",
				array:false,
				arrayRequired:false,
				required:false
			}
		},
		developer:{
			filter:{
				type:"DeveloperFilter",
				array:false,
				arrayRequired:false,
				required:false
			}
		}
	},
	CommentFilter:{
		id:{
			type:"ID",
			array:true,
			arrayRequired:false,
			required:true
		},
		not:{
			type:"CommentFilter",
			array:false,
			arrayRequired:false,
			required:false
		}
	},
	CommentOrder:{
		asc:{
			type:"CommentOrderable",
			array:false,
			arrayRequired:false,
			required:false
		},
		desc:{
			type:"CommentOrderable",
			array:false,
			arrayRequired:false,
			required:false
		},
		then:{
			type:"CommentOrder",
			array:false,
			arrayRequired:false,
			required:false
		}
	},
	CommentOrderable: "enum",
	CommentPatch:{
		task:{
			type:"TaskRef",
			array:false,
			arrayRequired:false,
			required:false
		},
		developer:{
			type:"DeveloperRef",
			array:false,
			arrayRequired:false,
			required:false
		},
		content:{
			type:"String",
			array:false,
			arrayRequired:false,
			required:false
		}
	},
	CommentRef:{
		id:{
			type:"ID",
			array:false,
			arrayRequired:false,
			required:false
		},
		task:{
			type:"TaskRef",
			array:false,
			arrayRequired:false,
			required:false
		},
		developer:{
			type:"DeveloperRef",
			array:false,
			arrayRequired:false,
			required:false
		},
		content:{
			type:"String",
			array:false,
			arrayRequired:false,
			required:false
		}
	},
	DateTime: "String",
	DateTimeFilter:{
		eq:{
			type:"DateTime",
			array:false,
			arrayRequired:false,
			required:false
		},
		le:{
			type:"DateTime",
			array:false,
			arrayRequired:false,
			required:false
		},
		lt:{
			type:"DateTime",
			array:false,
			arrayRequired:false,
			required:false
		},
		ge:{
			type:"DateTime",
			array:false,
			arrayRequired:false,
			required:false
		},
		gt:{
			type:"DateTime",
			array:false,
			arrayRequired:false,
			required:false
		}
	},
	Developer:{
		project:{
			filter:{
				type:"ProjectFilter",
				array:false,
				arrayRequired:false,
				required:false
			}
		},
		user:{
			filter:{
				type:"UserFilter",
				array:false,
				arrayRequired:false,
				required:false
			},
			order:{
				type:"UserOrder",
				array:false,
				arrayRequired:false,
				required:false
			},
			first:{
				type:"Int",
				array:false,
				arrayRequired:false,
				required:false
			},
			offset:{
				type:"Int",
				array:false,
				arrayRequired:false,
				required:false
			}
		},
		tags:{
			filter:{
				type:"TagFilter",
				array:false,
				arrayRequired:false,
				required:false
			},
			order:{
				type:"TagOrder",
				array:false,
				arrayRequired:false,
				required:false
			},
			first:{
				type:"Int",
				array:false,
				arrayRequired:false,
				required:false
			},
			offset:{
				type:"Int",
				array:false,
				arrayRequired:false,
				required:false
			}
		},
		tasks:{
			filter:{
				type:"TaskFilter",
				array:false,
				arrayRequired:false,
				required:false
			},
			order:{
				type:"TaskOrder",
				array:false,
				arrayRequired:false,
				required:false
			},
			first:{
				type:"Int",
				array:false,
				arrayRequired:false,
				required:false
			},
			offset:{
				type:"Int",
				array:false,
				arrayRequired:false,
				required:false
			}
		},
		liked:{
			filter:{
				type:"TaskFilter",
				array:false,
				arrayRequired:false,
				required:false
			},
			order:{
				type:"TaskOrder",
				array:false,
				arrayRequired:false,
				required:false
			},
			first:{
				type:"Int",
				array:false,
				arrayRequired:false,
				required:false
			},
			offset:{
				type:"Int",
				array:false,
				arrayRequired:false,
				required:false
			}
		}
	},
	DeveloperFilter:{
		id:{
			type:"ID",
			array:true,
			arrayRequired:false,
			required:true
		},
		name:{
			type:"StringHashFilter",
			array:false,
			arrayRequired:false,
			required:false
		},
		and:{
			type:"DeveloperFilter",
			array:false,
			arrayRequired:false,
			required:false
		},
		or:{
			type:"DeveloperFilter",
			array:false,
			arrayRequired:false,
			required:false
		},
		not:{
			type:"DeveloperFilter",
			array:false,
			arrayRequired:false,
			required:false
		}
	},
	DeveloperOrder:{
		asc:{
			type:"DeveloperOrderable",
			array:false,
			arrayRequired:false,
			required:false
		},
		desc:{
			type:"DeveloperOrderable",
			array:false,
			arrayRequired:false,
			required:false
		},
		then:{
			type:"DeveloperOrder",
			array:false,
			arrayRequired:false,
			required:false
		}
	},
	DeveloperOrderable: "enum",
	DeveloperPatch:{
		project:{
			type:"ProjectRef",
			array:false,
			arrayRequired:false,
			required:false
		},
		name:{
			type:"String",
			array:false,
			arrayRequired:false,
			required:false
		},
		availability:{
			type:"Int",
			array:false,
			arrayRequired:false,
			required:false
		},
		user:{
			type:"UserRef",
			array:true,
			arrayRequired:false,
			required:false
		},
		tags:{
			type:"TagRef",
			array:true,
			arrayRequired:false,
			required:false
		},
		tasks:{
			type:"TaskRef",
			array:true,
			arrayRequired:false,
			required:false
		},
		liked:{
			type:"TaskRef",
			array:true,
			arrayRequired:false,
			required:false
		}
	},
	DeveloperRef:{
		id:{
			type:"ID",
			array:false,
			arrayRequired:false,
			required:false
		},
		project:{
			type:"ProjectRef",
			array:false,
			arrayRequired:false,
			required:false
		},
		name:{
			type:"String",
			array:false,
			arrayRequired:false,
			required:false
		},
		availability:{
			type:"Int",
			array:false,
			arrayRequired:false,
			required:false
		},
		user:{
			type:"UserRef",
			array:true,
			arrayRequired:false,
			required:false
		},
		tags:{
			type:"TagRef",
			array:true,
			arrayRequired:false,
			required:false
		},
		tasks:{
			type:"TaskRef",
			array:true,
			arrayRequired:false,
			required:false
		},
		liked:{
			type:"TaskRef",
			array:true,
			arrayRequired:false,
			required:false
		}
	},
	DgraphIndex: "enum",
	FloatFilter:{
		eq:{
			type:"Float",
			array:false,
			arrayRequired:false,
			required:false
		},
		le:{
			type:"Float",
			array:false,
			arrayRequired:false,
			required:false
		},
		lt:{
			type:"Float",
			array:false,
			arrayRequired:false,
			required:false
		},
		ge:{
			type:"Float",
			array:false,
			arrayRequired:false,
			required:false
		},
		gt:{
			type:"Float",
			array:false,
			arrayRequired:false,
			required:false
		}
	},
	IntFilter:{
		eq:{
			type:"Int",
			array:false,
			arrayRequired:false,
			required:false
		},
		le:{
			type:"Int",
			array:false,
			arrayRequired:false,
			required:false
		},
		lt:{
			type:"Int",
			array:false,
			arrayRequired:false,
			required:false
		},
		ge:{
			type:"Int",
			array:false,
			arrayRequired:false,
			required:false
		},
		gt:{
			type:"Int",
			array:false,
			arrayRequired:false,
			required:false
		}
	},
	Mutation:{
		addComment:{
			input:{
				type:"AddCommentInput",
				array:true,
				arrayRequired:true,
				required:true
			}
		},
		updateComment:{
			input:{
				type:"UpdateCommentInput",
				array:false,
				arrayRequired:false,
				required:true
			}
		},
		deleteComment:{
			filter:{
				type:"CommentFilter",
				array:false,
				arrayRequired:false,
				required:true
			}
		},
		addTag:{
			input:{
				type:"AddTagInput",
				array:true,
				arrayRequired:true,
				required:true
			}
		},
		updateTag:{
			input:{
				type:"UpdateTagInput",
				array:false,
				arrayRequired:false,
				required:true
			}
		},
		deleteTag:{
			filter:{
				type:"TagFilter",
				array:false,
				arrayRequired:false,
				required:true
			}
		},
		addTask:{
			input:{
				type:"AddTaskInput",
				array:true,
				arrayRequired:true,
				required:true
			}
		},
		updateTask:{
			input:{
				type:"UpdateTaskInput",
				array:false,
				arrayRequired:false,
				required:true
			}
		},
		deleteTask:{
			filter:{
				type:"TaskFilter",
				array:false,
				arrayRequired:false,
				required:true
			}
		},
		addColumn:{
			input:{
				type:"AddColumnInput",
				array:true,
				arrayRequired:true,
				required:true
			}
		},
		updateColumn:{
			input:{
				type:"UpdateColumnInput",
				array:false,
				arrayRequired:false,
				required:true
			}
		},
		deleteColumn:{
			filter:{
				type:"ColumnFilter",
				array:false,
				arrayRequired:false,
				required:true
			}
		},
		addBoard:{
			input:{
				type:"AddBoardInput",
				array:true,
				arrayRequired:true,
				required:true
			}
		},
		updateBoard:{
			input:{
				type:"UpdateBoardInput",
				array:false,
				arrayRequired:false,
				required:true
			}
		},
		deleteBoard:{
			filter:{
				type:"BoardFilter",
				array:false,
				arrayRequired:false,
				required:true
			}
		},
		addDeveloper:{
			input:{
				type:"AddDeveloperInput",
				array:true,
				arrayRequired:true,
				required:true
			}
		},
		updateDeveloper:{
			input:{
				type:"UpdateDeveloperInput",
				array:false,
				arrayRequired:false,
				required:true
			}
		},
		deleteDeveloper:{
			filter:{
				type:"DeveloperFilter",
				array:false,
				arrayRequired:false,
				required:true
			}
		},
		addUser:{
			input:{
				type:"AddUserInput",
				array:true,
				arrayRequired:true,
				required:true
			}
		},
		updateUser:{
			input:{
				type:"UpdateUserInput",
				array:false,
				arrayRequired:false,
				required:true
			}
		},
		deleteUser:{
			filter:{
				type:"UserFilter",
				array:false,
				arrayRequired:false,
				required:true
			}
		},
		addProject:{
			input:{
				type:"AddProjectInput",
				array:true,
				arrayRequired:true,
				required:true
			}
		},
		updateProject:{
			input:{
				type:"UpdateProjectInput",
				array:false,
				arrayRequired:false,
				required:true
			}
		},
		deleteProject:{
			filter:{
				type:"ProjectFilter",
				array:false,
				arrayRequired:false,
				required:true
			}
		}
	},
	Project:{
		hosts:{
			filter:{
				type:"UserFilter",
				array:false,
				arrayRequired:false,
				required:false
			},
			order:{
				type:"UserOrder",
				array:false,
				arrayRequired:false,
				required:false
			},
			first:{
				type:"Int",
				array:false,
				arrayRequired:false,
				required:false
			},
			offset:{
				type:"Int",
				array:false,
				arrayRequired:false,
				required:false
			}
		},
		tags:{
			filter:{
				type:"TagFilter",
				array:false,
				arrayRequired:false,
				required:false
			},
			order:{
				type:"TagOrder",
				array:false,
				arrayRequired:false,
				required:false
			},
			first:{
				type:"Int",
				array:false,
				arrayRequired:false,
				required:false
			},
			offset:{
				type:"Int",
				array:false,
				arrayRequired:false,
				required:false
			}
		},
		tasks:{
			filter:{
				type:"TaskFilter",
				array:false,
				arrayRequired:false,
				required:false
			},
			order:{
				type:"TaskOrder",
				array:false,
				arrayRequired:false,
				required:false
			},
			first:{
				type:"Int",
				array:false,
				arrayRequired:false,
				required:false
			},
			offset:{
				type:"Int",
				array:false,
				arrayRequired:false,
				required:false
			}
		},
		boards:{
			filter:{
				type:"BoardFilter",
				array:false,
				arrayRequired:false,
				required:false
			},
			order:{
				type:"BoardOrder",
				array:false,
				arrayRequired:false,
				required:false
			},
			first:{
				type:"Int",
				array:false,
				arrayRequired:false,
				required:false
			},
			offset:{
				type:"Int",
				array:false,
				arrayRequired:false,
				required:false
			}
		},
		developers:{
			filter:{
				type:"DeveloperFilter",
				array:false,
				arrayRequired:false,
				required:false
			},
			order:{
				type:"DeveloperOrder",
				array:false,
				arrayRequired:false,
				required:false
			},
			first:{
				type:"Int",
				array:false,
				arrayRequired:false,
				required:false
			},
			offset:{
				type:"Int",
				array:false,
				arrayRequired:false,
				required:false
			}
		}
	},
	ProjectFilter:{
		id:{
			type:"ID",
			array:true,
			arrayRequired:false,
			required:true
		},
		title:{
			type:"StringHashFilter",
			array:false,
			arrayRequired:false,
			required:false
		},
		and:{
			type:"ProjectFilter",
			array:false,
			arrayRequired:false,
			required:false
		},
		or:{
			type:"ProjectFilter",
			array:false,
			arrayRequired:false,
			required:false
		},
		not:{
			type:"ProjectFilter",
			array:false,
			arrayRequired:false,
			required:false
		}
	},
	ProjectOrder:{
		asc:{
			type:"ProjectOrderable",
			array:false,
			arrayRequired:false,
			required:false
		},
		desc:{
			type:"ProjectOrderable",
			array:false,
			arrayRequired:false,
			required:false
		},
		then:{
			type:"ProjectOrder",
			array:false,
			arrayRequired:false,
			required:false
		}
	},
	ProjectOrderable: "enum",
	ProjectPatch:{
		title:{
			type:"String",
			array:false,
			arrayRequired:false,
			required:false
		},
		hosts:{
			type:"UserRef",
			array:true,
			arrayRequired:false,
			required:false
		},
		description:{
			type:"String",
			array:false,
			arrayRequired:false,
			required:false
		},
		tags:{
			type:"TagRef",
			array:true,
			arrayRequired:false,
			required:false
		},
		tasks:{
			type:"TaskRef",
			array:true,
			arrayRequired:false,
			required:false
		},
		boards:{
			type:"BoardRef",
			array:true,
			arrayRequired:false,
			required:false
		},
		developers:{
			type:"DeveloperRef",
			array:true,
			arrayRequired:false,
			required:false
		}
	},
	ProjectRef:{
		id:{
			type:"ID",
			array:false,
			arrayRequired:false,
			required:false
		},
		title:{
			type:"String",
			array:false,
			arrayRequired:false,
			required:false
		},
		hosts:{
			type:"UserRef",
			array:true,
			arrayRequired:false,
			required:false
		},
		description:{
			type:"String",
			array:false,
			arrayRequired:false,
			required:false
		},
		tags:{
			type:"TagRef",
			array:true,
			arrayRequired:false,
			required:false
		},
		tasks:{
			type:"TaskRef",
			array:true,
			arrayRequired:false,
			required:false
		},
		boards:{
			type:"BoardRef",
			array:true,
			arrayRequired:false,
			required:false
		},
		developers:{
			type:"DeveloperRef",
			array:true,
			arrayRequired:false,
			required:false
		}
	},
	Query:{
		getComment:{
			id:{
				type:"ID",
				array:false,
				arrayRequired:false,
				required:true
			}
		},
		queryComment:{
			filter:{
				type:"CommentFilter",
				array:false,
				arrayRequired:false,
				required:false
			},
			order:{
				type:"CommentOrder",
				array:false,
				arrayRequired:false,
				required:false
			},
			first:{
				type:"Int",
				array:false,
				arrayRequired:false,
				required:false
			},
			offset:{
				type:"Int",
				array:false,
				arrayRequired:false,
				required:false
			}
		},
		getTag:{
			id:{
				type:"ID",
				array:false,
				arrayRequired:false,
				required:true
			}
		},
		queryTag:{
			filter:{
				type:"TagFilter",
				array:false,
				arrayRequired:false,
				required:false
			},
			order:{
				type:"TagOrder",
				array:false,
				arrayRequired:false,
				required:false
			},
			first:{
				type:"Int",
				array:false,
				arrayRequired:false,
				required:false
			},
			offset:{
				type:"Int",
				array:false,
				arrayRequired:false,
				required:false
			}
		},
		getTask:{
			id:{
				type:"ID",
				array:false,
				arrayRequired:false,
				required:true
			}
		},
		queryTask:{
			filter:{
				type:"TaskFilter",
				array:false,
				arrayRequired:false,
				required:false
			},
			order:{
				type:"TaskOrder",
				array:false,
				arrayRequired:false,
				required:false
			},
			first:{
				type:"Int",
				array:false,
				arrayRequired:false,
				required:false
			},
			offset:{
				type:"Int",
				array:false,
				arrayRequired:false,
				required:false
			}
		},
		getColumn:{
			id:{
				type:"ID",
				array:false,
				arrayRequired:false,
				required:true
			}
		},
		queryColumn:{
			filter:{
				type:"ColumnFilter",
				array:false,
				arrayRequired:false,
				required:false
			},
			order:{
				type:"ColumnOrder",
				array:false,
				arrayRequired:false,
				required:false
			},
			first:{
				type:"Int",
				array:false,
				arrayRequired:false,
				required:false
			},
			offset:{
				type:"Int",
				array:false,
				arrayRequired:false,
				required:false
			}
		},
		getBoard:{
			id:{
				type:"ID",
				array:false,
				arrayRequired:false,
				required:true
			}
		},
		queryBoard:{
			filter:{
				type:"BoardFilter",
				array:false,
				arrayRequired:false,
				required:false
			},
			order:{
				type:"BoardOrder",
				array:false,
				arrayRequired:false,
				required:false
			},
			first:{
				type:"Int",
				array:false,
				arrayRequired:false,
				required:false
			},
			offset:{
				type:"Int",
				array:false,
				arrayRequired:false,
				required:false
			}
		},
		getDeveloper:{
			id:{
				type:"ID",
				array:false,
				arrayRequired:false,
				required:true
			}
		},
		queryDeveloper:{
			filter:{
				type:"DeveloperFilter",
				array:false,
				arrayRequired:false,
				required:false
			},
			order:{
				type:"DeveloperOrder",
				array:false,
				arrayRequired:false,
				required:false
			},
			first:{
				type:"Int",
				array:false,
				arrayRequired:false,
				required:false
			},
			offset:{
				type:"Int",
				array:false,
				arrayRequired:false,
				required:false
			}
		},
		getUser:{
			id:{
				type:"ID",
				array:false,
				arrayRequired:false,
				required:true
			}
		},
		queryUser:{
			filter:{
				type:"UserFilter",
				array:false,
				arrayRequired:false,
				required:false
			},
			order:{
				type:"UserOrder",
				array:false,
				arrayRequired:false,
				required:false
			},
			first:{
				type:"Int",
				array:false,
				arrayRequired:false,
				required:false
			},
			offset:{
				type:"Int",
				array:false,
				arrayRequired:false,
				required:false
			}
		},
		getProject:{
			id:{
				type:"ID",
				array:false,
				arrayRequired:false,
				required:true
			}
		},
		queryProject:{
			filter:{
				type:"ProjectFilter",
				array:false,
				arrayRequired:false,
				required:false
			},
			order:{
				type:"ProjectOrder",
				array:false,
				arrayRequired:false,
				required:false
			},
			first:{
				type:"Int",
				array:false,
				arrayRequired:false,
				required:false
			},
			offset:{
				type:"Int",
				array:false,
				arrayRequired:false,
				required:false
			}
		}
	},
	StringExactFilter:{
		eq:{
			type:"String",
			array:false,
			arrayRequired:false,
			required:false
		},
		le:{
			type:"String",
			array:false,
			arrayRequired:false,
			required:false
		},
		lt:{
			type:"String",
			array:false,
			arrayRequired:false,
			required:false
		},
		ge:{
			type:"String",
			array:false,
			arrayRequired:false,
			required:false
		},
		gt:{
			type:"String",
			array:false,
			arrayRequired:false,
			required:false
		}
	},
	StringFullTextFilter:{
		alloftext:{
			type:"String",
			array:false,
			arrayRequired:false,
			required:false
		},
		anyoftext:{
			type:"String",
			array:false,
			arrayRequired:false,
			required:false
		}
	},
	StringHashFilter:{
		eq:{
			type:"String",
			array:false,
			arrayRequired:false,
			required:false
		}
	},
	StringRegExpFilter:{
		regexp:{
			type:"String",
			array:false,
			arrayRequired:false,
			required:false
		}
	},
	StringTermFilter:{
		allofterms:{
			type:"String",
			array:false,
			arrayRequired:false,
			required:false
		},
		anyofterms:{
			type:"String",
			array:false,
			arrayRequired:false,
			required:false
		}
	},
	Tag:{
		project:{
			filter:{
				type:"ProjectFilter",
				array:false,
				arrayRequired:false,
				required:false
			}
		},
		developers:{
			filter:{
				type:"DeveloperFilter",
				array:false,
				arrayRequired:false,
				required:false
			},
			order:{
				type:"DeveloperOrder",
				array:false,
				arrayRequired:false,
				required:false
			},
			first:{
				type:"Int",
				array:false,
				arrayRequired:false,
				required:false
			},
			offset:{
				type:"Int",
				array:false,
				arrayRequired:false,
				required:false
			}
		}
	},
	TagFilter:{
		id:{
			type:"ID",
			array:true,
			arrayRequired:false,
			required:true
		},
		not:{
			type:"TagFilter",
			array:false,
			arrayRequired:false,
			required:false
		}
	},
	TagOrder:{
		asc:{
			type:"TagOrderable",
			array:false,
			arrayRequired:false,
			required:false
		},
		desc:{
			type:"TagOrderable",
			array:false,
			arrayRequired:false,
			required:false
		},
		then:{
			type:"TagOrder",
			array:false,
			arrayRequired:false,
			required:false
		}
	},
	TagOrderable: "enum",
	TagPatch:{
		title:{
			type:"String",
			array:false,
			arrayRequired:false,
			required:false
		},
		project:{
			type:"ProjectRef",
			array:false,
			arrayRequired:false,
			required:false
		},
		developers:{
			type:"DeveloperRef",
			array:true,
			arrayRequired:false,
			required:false
		}
	},
	TagRef:{
		id:{
			type:"ID",
			array:false,
			arrayRequired:false,
			required:false
		},
		title:{
			type:"String",
			array:false,
			arrayRequired:false,
			required:false
		},
		project:{
			type:"ProjectRef",
			array:false,
			arrayRequired:false,
			required:false
		},
		developers:{
			type:"DeveloperRef",
			array:true,
			arrayRequired:false,
			required:false
		}
	},
	Task:{
		project:{
			filter:{
				type:"ProjectFilter",
				array:false,
				arrayRequired:false,
				required:false
			}
		},
		column:{
			filter:{
				type:"ColumnFilter",
				array:false,
				arrayRequired:false,
				required:false
			}
		},
		developers:{
			filter:{
				type:"DeveloperFilter",
				array:false,
				arrayRequired:false,
				required:false
			},
			order:{
				type:"DeveloperOrder",
				array:false,
				arrayRequired:false,
				required:false
			},
			first:{
				type:"Int",
				array:false,
				arrayRequired:false,
				required:false
			},
			offset:{
				type:"Int",
				array:false,
				arrayRequired:false,
				required:false
			}
		},
		likes:{
			filter:{
				type:"DeveloperFilter",
				array:false,
				arrayRequired:false,
				required:false
			},
			order:{
				type:"DeveloperOrder",
				array:false,
				arrayRequired:false,
				required:false
			},
			first:{
				type:"Int",
				array:false,
				arrayRequired:false,
				required:false
			},
			offset:{
				type:"Int",
				array:false,
				arrayRequired:false,
				required:false
			}
		},
		comments:{
			filter:{
				type:"CommentFilter",
				array:false,
				arrayRequired:false,
				required:false
			},
			order:{
				type:"CommentOrder",
				array:false,
				arrayRequired:false,
				required:false
			},
			first:{
				type:"Int",
				array:false,
				arrayRequired:false,
				required:false
			},
			offset:{
				type:"Int",
				array:false,
				arrayRequired:false,
				required:false
			}
		}
	},
	TaskFilter:{
		id:{
			type:"ID",
			array:true,
			arrayRequired:false,
			required:true
		},
		title:{
			type:"StringHashFilter",
			array:false,
			arrayRequired:false,
			required:false
		},
		and:{
			type:"TaskFilter",
			array:false,
			arrayRequired:false,
			required:false
		},
		or:{
			type:"TaskFilter",
			array:false,
			arrayRequired:false,
			required:false
		},
		not:{
			type:"TaskFilter",
			array:false,
			arrayRequired:false,
			required:false
		}
	},
	TaskOrder:{
		asc:{
			type:"TaskOrderable",
			array:false,
			arrayRequired:false,
			required:false
		},
		desc:{
			type:"TaskOrderable",
			array:false,
			arrayRequired:false,
			required:false
		},
		then:{
			type:"TaskOrder",
			array:false,
			arrayRequired:false,
			required:false
		}
	},
	TaskOrderable: "enum",
	TaskPatch:{
		project:{
			type:"ProjectRef",
			array:false,
			arrayRequired:false,
			required:false
		},
		column:{
			type:"ColumnRef",
			array:false,
			arrayRequired:false,
			required:false
		},
		title:{
			type:"String",
			array:false,
			arrayRequired:false,
			required:false
		},
		developers:{
			type:"DeveloperRef",
			array:true,
			arrayRequired:false,
			required:false
		},
		hours:{
			type:"Int",
			array:false,
			arrayRequired:false,
			required:false
		},
		deadline:{
			type:"String",
			array:false,
			arrayRequired:false,
			required:false
		},
		content:{
			type:"String",
			array:false,
			arrayRequired:false,
			required:false
		},
		priority:{
			type:"Int",
			array:false,
			arrayRequired:false,
			required:false
		},
		complete:{
			type:"Boolean",
			array:false,
			arrayRequired:false,
			required:false
		},
		likes:{
			type:"DeveloperRef",
			array:true,
			arrayRequired:false,
			required:false
		},
		comments:{
			type:"CommentRef",
			array:true,
			arrayRequired:false,
			required:false
		}
	},
	TaskRef:{
		id:{
			type:"ID",
			array:false,
			arrayRequired:false,
			required:false
		},
		project:{
			type:"ProjectRef",
			array:false,
			arrayRequired:false,
			required:false
		},
		column:{
			type:"ColumnRef",
			array:false,
			arrayRequired:false,
			required:false
		},
		title:{
			type:"String",
			array:false,
			arrayRequired:false,
			required:false
		},
		developers:{
			type:"DeveloperRef",
			array:true,
			arrayRequired:false,
			required:false
		},
		hours:{
			type:"Int",
			array:false,
			arrayRequired:false,
			required:false
		},
		deadline:{
			type:"String",
			array:false,
			arrayRequired:false,
			required:false
		},
		content:{
			type:"String",
			array:false,
			arrayRequired:false,
			required:false
		},
		priority:{
			type:"Int",
			array:false,
			arrayRequired:false,
			required:false
		},
		complete:{
			type:"Boolean",
			array:false,
			arrayRequired:false,
			required:false
		},
		likes:{
			type:"DeveloperRef",
			array:true,
			arrayRequired:false,
			required:false
		},
		comments:{
			type:"CommentRef",
			array:true,
			arrayRequired:false,
			required:false
		}
	},
	UpdateBoardInput:{
		filter:{
			type:"BoardFilter",
			array:false,
			arrayRequired:false,
			required:true
		},
		set:{
			type:"BoardPatch",
			array:false,
			arrayRequired:false,
			required:false
		},
		remove:{
			type:"BoardPatch",
			array:false,
			arrayRequired:false,
			required:false
		}
	},
	UpdateBoardPayload:{
		board:{
			filter:{
				type:"BoardFilter",
				array:false,
				arrayRequired:false,
				required:false
			},
			order:{
				type:"BoardOrder",
				array:false,
				arrayRequired:false,
				required:false
			},
			first:{
				type:"Int",
				array:false,
				arrayRequired:false,
				required:false
			},
			offset:{
				type:"Int",
				array:false,
				arrayRequired:false,
				required:false
			}
		}
	},
	UpdateColumnInput:{
		filter:{
			type:"ColumnFilter",
			array:false,
			arrayRequired:false,
			required:true
		},
		set:{
			type:"ColumnPatch",
			array:false,
			arrayRequired:false,
			required:false
		},
		remove:{
			type:"ColumnPatch",
			array:false,
			arrayRequired:false,
			required:false
		}
	},
	UpdateColumnPayload:{
		column:{
			filter:{
				type:"ColumnFilter",
				array:false,
				arrayRequired:false,
				required:false
			},
			order:{
				type:"ColumnOrder",
				array:false,
				arrayRequired:false,
				required:false
			},
			first:{
				type:"Int",
				array:false,
				arrayRequired:false,
				required:false
			},
			offset:{
				type:"Int",
				array:false,
				arrayRequired:false,
				required:false
			}
		}
	},
	UpdateCommentInput:{
		filter:{
			type:"CommentFilter",
			array:false,
			arrayRequired:false,
			required:true
		},
		set:{
			type:"CommentPatch",
			array:false,
			arrayRequired:false,
			required:false
		},
		remove:{
			type:"CommentPatch",
			array:false,
			arrayRequired:false,
			required:false
		}
	},
	UpdateCommentPayload:{
		comment:{
			filter:{
				type:"CommentFilter",
				array:false,
				arrayRequired:false,
				required:false
			},
			order:{
				type:"CommentOrder",
				array:false,
				arrayRequired:false,
				required:false
			},
			first:{
				type:"Int",
				array:false,
				arrayRequired:false,
				required:false
			},
			offset:{
				type:"Int",
				array:false,
				arrayRequired:false,
				required:false
			}
		}
	},
	UpdateDeveloperInput:{
		filter:{
			type:"DeveloperFilter",
			array:false,
			arrayRequired:false,
			required:true
		},
		set:{
			type:"DeveloperPatch",
			array:false,
			arrayRequired:false,
			required:false
		},
		remove:{
			type:"DeveloperPatch",
			array:false,
			arrayRequired:false,
			required:false
		}
	},
	UpdateDeveloperPayload:{
		developer:{
			filter:{
				type:"DeveloperFilter",
				array:false,
				arrayRequired:false,
				required:false
			},
			order:{
				type:"DeveloperOrder",
				array:false,
				arrayRequired:false,
				required:false
			},
			first:{
				type:"Int",
				array:false,
				arrayRequired:false,
				required:false
			},
			offset:{
				type:"Int",
				array:false,
				arrayRequired:false,
				required:false
			}
		}
	},
	UpdateProjectInput:{
		filter:{
			type:"ProjectFilter",
			array:false,
			arrayRequired:false,
			required:true
		},
		set:{
			type:"ProjectPatch",
			array:false,
			arrayRequired:false,
			required:false
		},
		remove:{
			type:"ProjectPatch",
			array:false,
			arrayRequired:false,
			required:false
		}
	},
	UpdateProjectPayload:{
		project:{
			filter:{
				type:"ProjectFilter",
				array:false,
				arrayRequired:false,
				required:false
			},
			order:{
				type:"ProjectOrder",
				array:false,
				arrayRequired:false,
				required:false
			},
			first:{
				type:"Int",
				array:false,
				arrayRequired:false,
				required:false
			},
			offset:{
				type:"Int",
				array:false,
				arrayRequired:false,
				required:false
			}
		}
	},
	UpdateTagInput:{
		filter:{
			type:"TagFilter",
			array:false,
			arrayRequired:false,
			required:true
		},
		set:{
			type:"TagPatch",
			array:false,
			arrayRequired:false,
			required:false
		},
		remove:{
			type:"TagPatch",
			array:false,
			arrayRequired:false,
			required:false
		}
	},
	UpdateTagPayload:{
		tag:{
			filter:{
				type:"TagFilter",
				array:false,
				arrayRequired:false,
				required:false
			},
			order:{
				type:"TagOrder",
				array:false,
				arrayRequired:false,
				required:false
			},
			first:{
				type:"Int",
				array:false,
				arrayRequired:false,
				required:false
			},
			offset:{
				type:"Int",
				array:false,
				arrayRequired:false,
				required:false
			}
		}
	},
	UpdateTaskInput:{
		filter:{
			type:"TaskFilter",
			array:false,
			arrayRequired:false,
			required:true
		},
		set:{
			type:"TaskPatch",
			array:false,
			arrayRequired:false,
			required:false
		},
		remove:{
			type:"TaskPatch",
			array:false,
			arrayRequired:false,
			required:false
		}
	},
	UpdateTaskPayload:{
		task:{
			filter:{
				type:"TaskFilter",
				array:false,
				arrayRequired:false,
				required:false
			},
			order:{
				type:"TaskOrder",
				array:false,
				arrayRequired:false,
				required:false
			},
			first:{
				type:"Int",
				array:false,
				arrayRequired:false,
				required:false
			},
			offset:{
				type:"Int",
				array:false,
				arrayRequired:false,
				required:false
			}
		}
	},
	UpdateUserInput:{
		filter:{
			type:"UserFilter",
			array:false,
			arrayRequired:false,
			required:true
		},
		set:{
			type:"UserPatch",
			array:false,
			arrayRequired:false,
			required:false
		},
		remove:{
			type:"UserPatch",
			array:false,
			arrayRequired:false,
			required:false
		}
	},
	UpdateUserPayload:{
		user:{
			filter:{
				type:"UserFilter",
				array:false,
				arrayRequired:false,
				required:false
			},
			order:{
				type:"UserOrder",
				array:false,
				arrayRequired:false,
				required:false
			},
			first:{
				type:"Int",
				array:false,
				arrayRequired:false,
				required:false
			},
			offset:{
				type:"Int",
				array:false,
				arrayRequired:false,
				required:false
			}
		}
	},
	User:{
		developer:{
			filter:{
				type:"DeveloperFilter",
				array:false,
				arrayRequired:false,
				required:false
			},
			order:{
				type:"DeveloperOrder",
				array:false,
				arrayRequired:false,
				required:false
			},
			first:{
				type:"Int",
				array:false,
				arrayRequired:false,
				required:false
			},
			offset:{
				type:"Int",
				array:false,
				arrayRequired:false,
				required:false
			}
		},
		host:{
			filter:{
				type:"ProjectFilter",
				array:false,
				arrayRequired:false,
				required:false
			},
			order:{
				type:"ProjectOrder",
				array:false,
				arrayRequired:false,
				required:false
			},
			first:{
				type:"Int",
				array:false,
				arrayRequired:false,
				required:false
			},
			offset:{
				type:"Int",
				array:false,
				arrayRequired:false,
				required:false
			}
		},
		stars:{
			filter:{
				type:"TaskFilter",
				array:false,
				arrayRequired:false,
				required:false
			},
			order:{
				type:"TaskOrder",
				array:false,
				arrayRequired:false,
				required:false
			},
			first:{
				type:"Int",
				array:false,
				arrayRequired:false,
				required:false
			},
			offset:{
				type:"Int",
				array:false,
				arrayRequired:false,
				required:false
			}
		}
	},
	UserFilter:{
		id:{
			type:"ID",
			array:true,
			arrayRequired:false,
			required:true
		},
		username:{
			type:"StringHashFilter",
			array:false,
			arrayRequired:false,
			required:false
		},
		and:{
			type:"UserFilter",
			array:false,
			arrayRequired:false,
			required:false
		},
		or:{
			type:"UserFilter",
			array:false,
			arrayRequired:false,
			required:false
		},
		not:{
			type:"UserFilter",
			array:false,
			arrayRequired:false,
			required:false
		}
	},
	UserOrder:{
		asc:{
			type:"UserOrderable",
			array:false,
			arrayRequired:false,
			required:false
		},
		desc:{
			type:"UserOrderable",
			array:false,
			arrayRequired:false,
			required:false
		},
		then:{
			type:"UserOrder",
			array:false,
			arrayRequired:false,
			required:false
		}
	},
	UserOrderable: "enum",
	UserPatch:{
		username:{
			type:"String",
			array:false,
			arrayRequired:false,
			required:false
		},
		password:{
			type:"String",
			array:false,
			arrayRequired:false,
			required:false
		},
		location:{
			type:"String",
			array:false,
			arrayRequired:false,
			required:false
		},
		developer:{
			type:"DeveloperRef",
			array:true,
			arrayRequired:false,
			required:false
		},
		host:{
			type:"ProjectRef",
			array:true,
			arrayRequired:false,
			required:false
		},
		stars:{
			type:"TaskRef",
			array:true,
			arrayRequired:false,
			required:false
		}
	},
	UserRef:{
		id:{
			type:"ID",
			array:false,
			arrayRequired:false,
			required:false
		},
		username:{
			type:"String",
			array:false,
			arrayRequired:false,
			required:false
		},
		password:{
			type:"String",
			array:false,
			arrayRequired:false,
			required:false
		},
		location:{
			type:"String",
			array:false,
			arrayRequired:false,
			required:false
		},
		developer:{
			type:"DeveloperRef",
			array:true,
			arrayRequired:false,
			required:false
		},
		host:{
			type:"ProjectRef",
			array:true,
			arrayRequired:false,
			required:false
		},
		stars:{
			type:"TaskRef",
			array:true,
			arrayRequired:false,
			required:false
		}
	}
}

export const ReturnTypes: Record<string,any> = {
	AddBoardPayload:{
		board:"Board",
		numUids:"Int"
	},
	AddColumnPayload:{
		column:"Column",
		numUids:"Int"
	},
	AddCommentPayload:{
		comment:"Comment",
		numUids:"Int"
	},
	AddDeveloperPayload:{
		developer:"Developer",
		numUids:"Int"
	},
	AddProjectPayload:{
		project:"Project",
		numUids:"Int"
	},
	AddTagPayload:{
		tag:"Tag",
		numUids:"Int"
	},
	AddTaskPayload:{
		task:"Task",
		numUids:"Int"
	},
	AddUserPayload:{
		user:"User",
		numUids:"Int"
	},
	Board:{
		id:"ID",
		project:"Project",
		title:"String",
		columns:"Column",
		order:"String"
	},
	Column:{
		id:"ID",
		board:"Board",
		title:"String",
		tasks:"Task"
	},
	Comment:{
		id:"ID",
		task:"Task",
		developer:"Developer",
		content:"String"
	},
	DeleteBoardPayload:{
		msg:"String",
		numUids:"Int"
	},
	DeleteColumnPayload:{
		msg:"String",
		numUids:"Int"
	},
	DeleteCommentPayload:{
		msg:"String",
		numUids:"Int"
	},
	DeleteDeveloperPayload:{
		msg:"String",
		numUids:"Int"
	},
	DeleteProjectPayload:{
		msg:"String",
		numUids:"Int"
	},
	DeleteTagPayload:{
		msg:"String",
		numUids:"Int"
	},
	DeleteTaskPayload:{
		msg:"String",
		numUids:"Int"
	},
	DeleteUserPayload:{
		msg:"String",
		numUids:"Int"
	},
	Developer:{
		id:"ID",
		project:"Project",
		name:"String",
		availability:"Int",
		user:"User",
		tags:"Tag",
		tasks:"Task",
		liked:"Task"
	},
	Mutation:{
		addComment:"AddCommentPayload",
		updateComment:"UpdateCommentPayload",
		deleteComment:"DeleteCommentPayload",
		addTag:"AddTagPayload",
		updateTag:"UpdateTagPayload",
		deleteTag:"DeleteTagPayload",
		addTask:"AddTaskPayload",
		updateTask:"UpdateTaskPayload",
		deleteTask:"DeleteTaskPayload",
		addColumn:"AddColumnPayload",
		updateColumn:"UpdateColumnPayload",
		deleteColumn:"DeleteColumnPayload",
		addBoard:"AddBoardPayload",
		updateBoard:"UpdateBoardPayload",
		deleteBoard:"DeleteBoardPayload",
		addDeveloper:"AddDeveloperPayload",
		updateDeveloper:"UpdateDeveloperPayload",
		deleteDeveloper:"DeleteDeveloperPayload",
		addUser:"AddUserPayload",
		updateUser:"UpdateUserPayload",
		deleteUser:"DeleteUserPayload",
		addProject:"AddProjectPayload",
		updateProject:"UpdateProjectPayload",
		deleteProject:"DeleteProjectPayload"
	},
	Project:{
		id:"ID",
		title:"String",
		hosts:"User",
		description:"String",
		tags:"Tag",
		tasks:"Task",
		boards:"Board",
		developers:"Developer"
	},
	Query:{
		getComment:"Comment",
		queryComment:"Comment",
		getTag:"Tag",
		queryTag:"Tag",
		getTask:"Task",
		queryTask:"Task",
		getColumn:"Column",
		queryColumn:"Column",
		getBoard:"Board",
		queryBoard:"Board",
		getDeveloper:"Developer",
		queryDeveloper:"Developer",
		getUser:"User",
		queryUser:"User",
		getProject:"Project",
		queryProject:"Project"
	},
	Tag:{
		id:"ID",
		title:"String",
		project:"Project",
		developers:"Developer"
	},
	Task:{
		id:"ID",
		project:"Project",
		column:"Column",
		title:"String",
		developers:"Developer",
		hours:"Int",
		deadline:"String",
		content:"String",
		priority:"Int",
		complete:"Boolean",
		likes:"Developer",
		comments:"Comment"
	},
	UpdateBoardPayload:{
		board:"Board",
		numUids:"Int"
	},
	UpdateColumnPayload:{
		column:"Column",
		numUids:"Int"
	},
	UpdateCommentPayload:{
		comment:"Comment",
		numUids:"Int"
	},
	UpdateDeveloperPayload:{
		developer:"Developer",
		numUids:"Int"
	},
	UpdateProjectPayload:{
		project:"Project",
		numUids:"Int"
	},
	UpdateTagPayload:{
		tag:"Tag",
		numUids:"Int"
	},
	UpdateTaskPayload:{
		task:"Task",
		numUids:"Int"
	},
	UpdateUserPayload:{
		user:"User",
		numUids:"Int"
	},
	User:{
		id:"ID",
		username:"String",
		password:"String",
		location:"String",
		developer:"Developer",
		host:"Project",
		stars:"Task"
	}
}

export class GraphQLError extends Error {
    constructor(public response: GraphQLResponse) {
      super("");
      console.error(response);
    }
    toString() {
      return "GraphQL Response Error";
    }
  }


type Func<P extends any[], R> = (...args: P) => R;
type AnyFunc = Func<any, any>;

type WithTypeNameValue<T> = T & {
  __typename?: true;
};

type AliasType<T> = WithTypeNameValue<T> & {
  __alias?: Record<string, WithTypeNameValue<T>>;
};

type NotUndefined<T> = T extends undefined ? never : T;

export type ResolverType<F> = NotUndefined<F extends [infer ARGS, any] ? ARGS : undefined>;

export type ArgsType<F extends AnyFunc> = F extends Func<infer P, any> ? P : never;

interface GraphQLResponse {
  data?: Record<string, any>;
  errors?: Array<{
    message: string;
  }>;
}
export type MapInterface<SRC, DST> = SRC extends {
  __interface: infer INTERFACE;
  __resolve: infer IMPLEMENTORS;
}
  ? ObjectToUnion<
      Omit<
        {
          [Key in keyof Omit<DST, keyof INTERFACE | '__typename'>]: Key extends keyof IMPLEMENTORS
            ? MapType<IMPLEMENTORS[Key], DST[Key]> &
                Omit<
                  {
                    [Key in keyof Omit<
                      DST,
                      keyof IMPLEMENTORS | '__typename'
                    >]: Key extends keyof INTERFACE
                      ? LastMapTypeSRCResolver<INTERFACE[Key], DST[Key]>
                      : never;
                  },
                  keyof IMPLEMENTORS
                > &
                (DST extends { __typename: any }
                  ? MapType<IMPLEMENTORS[Key], { __typename: true }>
                  : {})
            : never;
        },
        keyof INTERFACE | '__typename'
      >
    >
  : never;

export type ValueToUnion<T> = T extends {
  __typename: infer R;
}
  ? {
      [P in keyof Omit<T, '__typename'>]: T[P] & {
        __typename: R;
      };
    }
  : T;

export type ObjectToUnion<T> = {
  [P in keyof T]: T[P];
}[keyof T];

type Anify<T> = { [P in keyof T]?: any };


type LastMapTypeSRCResolver<SRC, DST> = SRC extends undefined
  ? undefined
  : SRC extends Array<infer AR>
  ? LastMapTypeSRCResolver<AR, DST>[]
  : SRC extends { __interface: any; __resolve: any }
  ? MapInterface<SRC, DST>
  : SRC extends { __union: any; __resolve: infer RESOLVE }
  ? ObjectToUnion<MapType<RESOLVE, ValueToUnion<DST>>>
  : DST extends boolean
  ? SRC
  : MapType<SRC, DST>;

type MapType<SRC extends Anify<DST>, DST> = DST extends boolean
  ? SRC
  : DST extends {
      __alias: any;
    }
  ? {
      [A in keyof DST["__alias"]]: Required<SRC> extends Anify<
        DST["__alias"][A]
      >
        ? MapType<Required<SRC>, DST["__alias"][A]>
        : never;
    } &
      {
        [Key in keyof Omit<DST, "__alias">]: DST[Key] extends [
          any,
          infer PAYLOAD
        ]
          ? LastMapTypeSRCResolver<SRC[Key], PAYLOAD>
          : LastMapTypeSRCResolver<SRC[Key], DST[Key]>;
      }
  : {
      [Key in keyof DST]: DST[Key] extends [any, infer PAYLOAD]
        ? LastMapTypeSRCResolver<SRC[Key], PAYLOAD>
        : LastMapTypeSRCResolver<SRC[Key], DST[Key]>;
    };

type OperationToGraphQL<V, T> = <Z extends V>(o: Z | V, variables?: Record<string, any>) => Promise<MapType<T, Z>>;

type CastToGraphQL<V, T> = (
  resultOfYourQuery: any
) => <Z extends V>(o: Z | V) => MapType<T, Z>;

type fetchOptions = ArgsType<typeof fetch>;

export type SelectionFunction<V> = <T>(t: T | V) => T;
type FetchFunction = (query: string, variables?: Record<string, any>) => any;



export const ZeusSelect = <T>() => ((t: any) => t) as SelectionFunction<T>;
export const ScalarResolver = (scalar: string, value: any) => {
  switch (scalar) {
    case 'String':
      return  `"${value.replace(/"/g, '\\\"')}"`;
    case 'Int':
      return `${value}`;
    case 'Float':
      return `${value}`;
    case 'Boolean':
      return `${value}`;
    case 'ID':
      return `"${value}"`;
    case 'enum':
      return `${value}`;
    case 'scalar':
      return `${value}`;
    default:
      return false;
  }
};

export const TypesPropsResolver = ({
  value,
  type,
  name,
  key,
  blockArrays
}: {
  value: any;
  type: string;
  name: string;
  key?: string;
  blockArrays?: boolean;
}): string => {
  if (value === null) {
    return `null`;
  }
  let resolvedValue = AllTypesProps[type][name];
  if (key) {
    resolvedValue = resolvedValue[key];
  }
  if (!resolvedValue) {
    throw new Error(`Cannot resolve ${type} ${name}${key ? ` ${key}` : ''}`)
  }
  const typeResolved = resolvedValue.type;
  const isArray: boolean = resolvedValue.array;
  if (typeof value === 'string' && value.startsWith(`ZEUS_VAR$`)) {
    const isRequired = resolvedValue.required ? '!' : ''
    return `\$${value.split(`ZEUS_VAR$`)[1]}__ZEUS_VAR__${typeResolved}${isRequired}`;
  }
  if (isArray && !blockArrays) {
    return `[${value
      .map((v: any) => TypesPropsResolver({ value: v, type, name, key, blockArrays: true }))
      .join(',')}]`;
  }
  const reslovedScalar = ScalarResolver(typeResolved, value);
  if (!reslovedScalar) {
    const resolvedType = AllTypesProps[typeResolved];
    if (typeof resolvedType === 'object') {
      const argsKeys = Object.keys(resolvedType);
      return `{${argsKeys
        .filter((ak) => value[ak] !== undefined)
        .map(
          (ak) => `${ak}:${TypesPropsResolver({ value: value[ak], type: typeResolved, name: ak })}`
        )}}`;
    }
    return ScalarResolver(AllTypesProps[typeResolved], value) as string;
  }
  return reslovedScalar;
};

const isArrayFunction = (
  parent: string[],
  a: any[]
) => {
  const [values, r] = a;
  const [mainKey, key, ...keys] = parent;
  const keyValues = Object.keys(values);

  if (!keys.length) {
      return keyValues.length > 0
        ? `(${keyValues
            .map(
              (v) =>
                `${v}:${TypesPropsResolver({
                  value: values[v],
                  type: mainKey,
                  name: key,
                  key: v
                })}`
            )
            .join(',')})${r ? traverseToSeekArrays(parent, r) : ''}`
        : traverseToSeekArrays(parent, r);
    }

  const [typeResolverKey] = keys.splice(keys.length - 1, 1);
  let valueToResolve = ReturnTypes[mainKey][key];
  for (const k of keys) {
    valueToResolve = ReturnTypes[valueToResolve][k];
  }

  const argumentString =
    keyValues.length > 0
      ? `(${keyValues
          .map(
            (v) =>
              `${v}:${TypesPropsResolver({
                value: values[v],
                type: valueToResolve,
                name: typeResolverKey,
                key: v
              })}`
          )
          .join(',')})${r ? traverseToSeekArrays(parent, r) : ''}`
      : traverseToSeekArrays(parent, r);
  return argumentString;
};

const resolveKV = (k: string, v: boolean | string | { [x: string]: boolean | string }) =>
  typeof v === 'boolean' ? k : typeof v === 'object' ? `${k}{${objectToTree(v)}}` : `${k}${v}`;

const objectToTree = (o: { [x: string]: boolean | string }): string =>
  `{${Object.keys(o).map((k) => `${resolveKV(k, o[k])}`).join(' ')}}`;

const traverseToSeekArrays = (parent: string[], a?: any): string => {
  if (!a) return '';
  if (Object.keys(a).length === 0) {
    return '';
  }
  let b: Record<string, any> = {};
  if (Array.isArray(a)) {
    return isArrayFunction([...parent], a);
  } else {
    if (typeof a === 'object') {
      Object.keys(a).map((k) => {
        if (k === '__alias') {
          Object.keys(a[k]).map((aliasKey) => {
            const aliasOperations = a[k][aliasKey];
            const aliasOperationName = Object.keys(aliasOperations)[0];
            const aliasOperation = aliasOperations[aliasOperationName];
            b[
              `${aliasOperationName}__alias__${aliasKey}: ${aliasOperationName}`
            ] = traverseToSeekArrays([...parent, aliasOperationName], aliasOperation);
          });
        } else {
          b[k] = traverseToSeekArrays([...parent, k], a[k]);
        }
      });
    } else {
      return '';
    }
  }
  return objectToTree(b);
};

const buildQuery = (type: string, a?: Record<any, any>) => traverseToSeekArrays([type], a);

const inspectVariables = (query: string) => {
  const regex = /\$\b\w*ZEUS_VAR\w*\b[!]?/g;
  let result;
  const AllVariables = [];
  while ((result = regex.exec(query))) {
    AllVariables.push(result[0]);
  }
  if (!AllVariables.length) {
    return query;
  }
  let filteredQuery = query;
  AllVariables.forEach((variable) => {
    filteredQuery = filteredQuery.replace(variable, variable.split('__ZEUS_VAR__')[0]);
  });
  return `(${AllVariables.map((a) => a.split('__ZEUS_VAR__'))
    .map(([variableName, variableType]) => `${variableName}:${variableType}`)
    .join(', ')})${filteredQuery}`;
};

const queryConstruct = (t: 'query' | 'mutation' | 'subscription', tName: string) => (o: Record<any, any>) =>
  `${t.toLowerCase()}${inspectVariables(buildQuery(tName, o))}`;
  
const fullChainConstruct = (fn: FetchFunction) => (t: 'query' | 'mutation' | 'subscription', tName: string) => (
  o: Record<any, any>,
  variables?: Record<string, any>,
) => fn(queryConstruct(t, tName)(o), variables);

const seekForAliases = (o: any) => {
  if (typeof o === 'object' && o) {
    const keys = Object.keys(o);
    if (keys.length < 1) {
      return;
    }
    keys.forEach((k) => {
      const value = o[k];
      if (k.indexOf('__alias__') !== -1) {
        const [operation, alias] = k.split('__alias__');
        o[alias] = {
          [operation]: value
        };
        delete o[k];
      } else {
        if (Array.isArray(value)) {
          value.forEach(seekForAliases);
        } else {
          if (typeof value === 'object') {
            seekForAliases(value);
          }
        }
      }
    });
  }
};

export const $ = (t: TemplateStringsArray): any => `ZEUS_VAR$${t.join('')}`;


const handleFetchResponse = (
  response: Parameters<Extract<Parameters<ReturnType<typeof fetch>['then']>[0], Function>>[0]
): Promise<GraphQLResponse> => {
  if (!response.ok) {
    return new Promise((resolve, reject) => {
      response.text().then(text => {
        try { reject(JSON.parse(text)); }
        catch (err) { reject(text); }
      }).catch(reject);
    });
  }
  return response.json();
};

const apiFetch = (options: fetchOptions) => (query: string, variables: Record<string, any> = {}) => {
    let fetchFunction = fetch;
    let queryString = query;
    let fetchOptions = options[1] || {};
    if (fetchOptions.method && fetchOptions.method === 'GET') {
      queryString = encodeURIComponent(query);
      return fetchFunction(`${options[0]}?query=${queryString}`, fetchOptions)
        .then(handleFetchResponse)
        .then((response: GraphQLResponse) => {
          if (response.errors) {
            throw new GraphQLError(response);
          }
          seekForAliases(response.data);
          return response.data;
        });
    }
    return fetchFunction(`${options[0]}`, {
      body: JSON.stringify({ query: queryString, variables }),
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      ...fetchOptions
    })
      .then(handleFetchResponse)
      .then((response: GraphQLResponse) => {
        if (response.errors) {
          throw new GraphQLError(response);
        }
        seekForAliases(response.data);
        return response.data;
      });
  };
  


export const Thunder = (fn: FetchFunction) => ({
  query: ((o: any, variables) =>
    fullChainConstruct(fn)('query', 'Query')(o, variables).then(
      (response: any) => response
    )) as OperationToGraphQL<ValueTypes["Query"],Query>,
mutation: ((o: any, variables) =>
    fullChainConstruct(fn)('mutation', 'Mutation')(o, variables).then(
      (response: any) => response
    )) as OperationToGraphQL<ValueTypes["Mutation"],Mutation>
});

export const Chain = (...options: fetchOptions) => ({
  query: ((o: any, variables) =>
    fullChainConstruct(apiFetch(options))('query', 'Query')(o, variables).then(
      (response: any) => response
    )) as OperationToGraphQL<ValueTypes["Query"],Query>,
mutation: ((o: any, variables) =>
    fullChainConstruct(apiFetch(options))('mutation', 'Mutation')(o, variables).then(
      (response: any) => response
    )) as OperationToGraphQL<ValueTypes["Mutation"],Mutation>
});
export const Zeus = {
  query: (o:ValueTypes["Query"]) => queryConstruct('query', 'Query')(o),
mutation: (o:ValueTypes["Mutation"]) => queryConstruct('mutation', 'Mutation')(o)
};
export const Cast = {
  query: ((o: any) => (b: any) => o) as CastToGraphQL<
  ValueTypes["Query"],
  Query
>,
mutation: ((o: any) => (b: any) => o) as CastToGraphQL<
  ValueTypes["Mutation"],
  Mutation
>
};
export const Selectors = {
  query: ZeusSelect<ValueTypes["Query"]>(),
mutation: ZeusSelect<ValueTypes["Mutation"]>()
};
  