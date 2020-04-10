/* tslint:disable */
/* eslint-disable */

export type ValueTypes = {
    ["AddDeveloperInput"]: {
	project:ValueTypes["ProjectRef"],
	name:string,
	user?:(ValueTypes["UserRef"] | undefined)[],
	entities?:(ValueTypes["EntityRef"] | undefined)[]
};
	["AddDeveloperPayload"]: AliasType<{
developer?: [{	filter?:ValueTypes["DeveloperFilter"],	order?:ValueTypes["DeveloperOrder"],	first?:number,	offset?:number},ValueTypes["Developer"]],
	numUids?:true
		__typename?: true
}>;
	["AddEntityInput"]: {
	project:ValueTypes["ProjectRef"],
	title:string,
	description:string,
	developers?:(ValueTypes["DeveloperRef"] | undefined)[],
	status:ValueTypes["EntityStatus"]
};
	["AddEntityPayload"]: AliasType<{
entity?: [{	filter?:ValueTypes["EntityFilter"],	order?:ValueTypes["EntityOrder"],	first?:number,	offset?:number},ValueTypes["Entity"]],
	numUids?:true
		__typename?: true
}>;
	["AddProjectInput"]: {
	title:string,
	description:string,
	hosts?:ValueTypes["UserRef"][],
	developers?:(ValueTypes["DeveloperRef"] | undefined)[],
	entities?:(ValueTypes["EntityRef"] | undefined)[]
};
	["AddProjectPayload"]: AliasType<{
project?: [{	filter?:ValueTypes["ProjectFilter"],	order?:ValueTypes["ProjectOrder"],	first?:number,	offset?:number},ValueTypes["Project"]],
	numUids?:true
		__typename?: true
}>;
	["AddUserInput"]: {
	username:string,
	developer?:(ValueTypes["DeveloperRef"] | undefined)[],
	host?:(ValueTypes["ProjectRef"] | undefined)[],
	stars?:(ValueTypes["ProjectRef"] | undefined)[]
};
	["AddUserPayload"]: AliasType<{
user?: [{	filter?:ValueTypes["UserFilter"],	order?:ValueTypes["UserOrder"],	first?:number,	offset?:number},ValueTypes["User"]],
	numUids?:true
		__typename?: true
}>;
	["DateTime"]:unknown;
	["DateTimeFilter"]: {
	eq?:ValueTypes["DateTime"],
	le?:ValueTypes["DateTime"],
	lt?:ValueTypes["DateTime"],
	ge?:ValueTypes["DateTime"],
	gt?:ValueTypes["DateTime"]
};
	["DeleteDeveloperPayload"]: AliasType<{
	msg?:true,
	numUids?:true
		__typename?: true
}>;
	["DeleteEntityPayload"]: AliasType<{
	msg?:true,
	numUids?:true
		__typename?: true
}>;
	["DeleteProjectPayload"]: AliasType<{
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
user?: [{	filter?:ValueTypes["UserFilter"],	order?:ValueTypes["UserOrder"],	first?:number,	offset?:number},ValueTypes["User"]],
entities?: [{	filter?:ValueTypes["EntityFilter"],	order?:ValueTypes["EntityOrder"],	first?:number,	offset?:number},ValueTypes["Entity"]]
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
	user?:(ValueTypes["UserRef"] | undefined)[],
	entities?:(ValueTypes["EntityRef"] | undefined)[]
};
	["DeveloperRef"]: {
	id?:string,
	project?:ValueTypes["ProjectRef"],
	name?:string,
	user?:(ValueTypes["UserRef"] | undefined)[],
	entities?:(ValueTypes["EntityRef"] | undefined)[]
};
	["DgraphIndex"]:DgraphIndex;
	["Entity"]: AliasType<{
	id?:true,
project?: [{	filter?:ValueTypes["ProjectFilter"]},ValueTypes["Project"]],
	title?:true,
	description?:true,
developers?: [{	filter?:ValueTypes["DeveloperFilter"],	order?:ValueTypes["DeveloperOrder"],	first?:number,	offset?:number},ValueTypes["Developer"]],
	status?:true
		__typename?: true
}>;
	["EntityFilter"]: {
	id?:string[],
	title?:ValueTypes["StringHashFilter"],
	and?:ValueTypes["EntityFilter"],
	or?:ValueTypes["EntityFilter"],
	not?:ValueTypes["EntityFilter"]
};
	["EntityOrder"]: {
	asc?:ValueTypes["EntityOrderable"],
	desc?:ValueTypes["EntityOrderable"],
	then?:ValueTypes["EntityOrder"]
};
	["EntityOrderable"]:EntityOrderable;
	["EntityPatch"]: {
	project?:ValueTypes["ProjectRef"],
	title?:string,
	description?:string,
	developers?:(ValueTypes["DeveloperRef"] | undefined)[],
	status?:ValueTypes["EntityStatus"]
};
	["EntityRef"]: {
	id?:string,
	project?:ValueTypes["ProjectRef"],
	title?:string,
	description?:string,
	developers?:(ValueTypes["DeveloperRef"] | undefined)[],
	status?:ValueTypes["EntityStatus"]
};
	["EntityStatus"]:EntityStatus;
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
addUser?: [{	input:ValueTypes["AddUserInput"][]},ValueTypes["AddUserPayload"]],
updateUser?: [{	input:ValueTypes["UpdateUserInput"]},ValueTypes["UpdateUserPayload"]],
deleteUser?: [{	filter:ValueTypes["UserFilter"]},ValueTypes["DeleteUserPayload"]],
addProject?: [{	input:ValueTypes["AddProjectInput"][]},ValueTypes["AddProjectPayload"]],
updateProject?: [{	input:ValueTypes["UpdateProjectInput"]},ValueTypes["UpdateProjectPayload"]],
deleteProject?: [{	filter:ValueTypes["ProjectFilter"]},ValueTypes["DeleteProjectPayload"]],
addEntity?: [{	input:ValueTypes["AddEntityInput"][]},ValueTypes["AddEntityPayload"]],
updateEntity?: [{	input:ValueTypes["UpdateEntityInput"]},ValueTypes["UpdateEntityPayload"]],
deleteEntity?: [{	filter:ValueTypes["EntityFilter"]},ValueTypes["DeleteEntityPayload"]],
addDeveloper?: [{	input:ValueTypes["AddDeveloperInput"][]},ValueTypes["AddDeveloperPayload"]],
updateDeveloper?: [{	input:ValueTypes["UpdateDeveloperInput"]},ValueTypes["UpdateDeveloperPayload"]],
deleteDeveloper?: [{	filter:ValueTypes["DeveloperFilter"]},ValueTypes["DeleteDeveloperPayload"]]
		__typename?: true
}>;
	["Project"]: AliasType<{
	id?:true,
	title?:true,
	description?:true,
hosts?: [{	filter?:ValueTypes["UserFilter"],	order?:ValueTypes["UserOrder"],	first?:number,	offset?:number},ValueTypes["User"]],
developers?: [{	filter?:ValueTypes["DeveloperFilter"],	order?:ValueTypes["DeveloperOrder"],	first?:number,	offset?:number},ValueTypes["Developer"]],
entities?: [{	filter?:ValueTypes["EntityFilter"],	order?:ValueTypes["EntityOrder"],	first?:number,	offset?:number},ValueTypes["Entity"]]
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
	description?:string,
	hosts?:(ValueTypes["UserRef"] | undefined)[],
	developers?:(ValueTypes["DeveloperRef"] | undefined)[],
	entities?:(ValueTypes["EntityRef"] | undefined)[]
};
	["ProjectRef"]: {
	id?:string,
	title?:string,
	description?:string,
	hosts?:(ValueTypes["UserRef"] | undefined)[],
	developers?:(ValueTypes["DeveloperRef"] | undefined)[],
	entities?:(ValueTypes["EntityRef"] | undefined)[]
};
	["Query"]: AliasType<{
getUser?: [{	id:string},ValueTypes["User"]],
queryUser?: [{	filter?:ValueTypes["UserFilter"],	order?:ValueTypes["UserOrder"],	first?:number,	offset?:number},ValueTypes["User"]],
getProject?: [{	id:string},ValueTypes["Project"]],
queryProject?: [{	filter?:ValueTypes["ProjectFilter"],	order?:ValueTypes["ProjectOrder"],	first?:number,	offset?:number},ValueTypes["Project"]],
getEntity?: [{	id:string},ValueTypes["Entity"]],
queryEntity?: [{	filter?:ValueTypes["EntityFilter"],	order?:ValueTypes["EntityOrder"],	first?:number,	offset?:number},ValueTypes["Entity"]],
getDeveloper?: [{	id:string},ValueTypes["Developer"]],
queryDeveloper?: [{	filter?:ValueTypes["DeveloperFilter"],	order?:ValueTypes["DeveloperOrder"],	first?:number,	offset?:number},ValueTypes["Developer"]]
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
	["UpdateEntityInput"]: {
	filter:ValueTypes["EntityFilter"],
	set?:ValueTypes["EntityPatch"],
	remove?:ValueTypes["EntityPatch"]
};
	["UpdateEntityPayload"]: AliasType<{
entity?: [{	filter?:ValueTypes["EntityFilter"],	order?:ValueTypes["EntityOrder"],	first?:number,	offset?:number},ValueTypes["Entity"]],
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
developer?: [{	filter?:ValueTypes["DeveloperFilter"],	order?:ValueTypes["DeveloperOrder"],	first?:number,	offset?:number},ValueTypes["Developer"]],
host?: [{	filter?:ValueTypes["ProjectFilter"],	order?:ValueTypes["ProjectOrder"],	first?:number,	offset?:number},ValueTypes["Project"]],
stars?: [{	filter?:ValueTypes["ProjectFilter"],	order?:ValueTypes["ProjectOrder"],	first?:number,	offset?:number},ValueTypes["Project"]]
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
	developer?:(ValueTypes["DeveloperRef"] | undefined)[],
	host?:(ValueTypes["ProjectRef"] | undefined)[],
	stars?:(ValueTypes["ProjectRef"] | undefined)[]
};
	["UserRef"]: {
	id?:string,
	username?:string,
	developer?:(ValueTypes["DeveloperRef"] | undefined)[],
	host?:(ValueTypes["ProjectRef"] | undefined)[],
	stars?:(ValueTypes["ProjectRef"] | undefined)[]
}
  }

export type PartialObjects = {
    ["AddDeveloperInput"]: {
	project:PartialObjects["ProjectRef"],
	name:string,
	user?:(PartialObjects["UserRef"] | undefined)[],
	entities?:(PartialObjects["EntityRef"] | undefined)[]
},
	["AddDeveloperPayload"]: {
		__typename?: "AddDeveloperPayload";
			developer?:(PartialObjects["Developer"] | undefined)[],
			numUids?:number
	},
	["AddEntityInput"]: {
	project:PartialObjects["ProjectRef"],
	title:string,
	description:string,
	developers?:(PartialObjects["DeveloperRef"] | undefined)[],
	status:PartialObjects["EntityStatus"]
},
	["AddEntityPayload"]: {
		__typename?: "AddEntityPayload";
			entity?:(PartialObjects["Entity"] | undefined)[],
			numUids?:number
	},
	["AddProjectInput"]: {
	title:string,
	description:string,
	hosts?:PartialObjects["UserRef"][],
	developers?:(PartialObjects["DeveloperRef"] | undefined)[],
	entities?:(PartialObjects["EntityRef"] | undefined)[]
},
	["AddProjectPayload"]: {
		__typename?: "AddProjectPayload";
			project?:(PartialObjects["Project"] | undefined)[],
			numUids?:number
	},
	["AddUserInput"]: {
	username:string,
	developer?:(PartialObjects["DeveloperRef"] | undefined)[],
	host?:(PartialObjects["ProjectRef"] | undefined)[],
	stars?:(PartialObjects["ProjectRef"] | undefined)[]
},
	["AddUserPayload"]: {
		__typename?: "AddUserPayload";
			user?:(PartialObjects["User"] | undefined)[],
			numUids?:number
	},
	["DateTime"]:any,
	["DateTimeFilter"]: {
	eq?:PartialObjects["DateTime"],
	le?:PartialObjects["DateTime"],
	lt?:PartialObjects["DateTime"],
	ge?:PartialObjects["DateTime"],
	gt?:PartialObjects["DateTime"]
},
	["DeleteDeveloperPayload"]: {
		__typename?: "DeleteDeveloperPayload";
			msg?:string,
			numUids?:number
	},
	["DeleteEntityPayload"]: {
		__typename?: "DeleteEntityPayload";
			msg?:string,
			numUids?:number
	},
	["DeleteProjectPayload"]: {
		__typename?: "DeleteProjectPayload";
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
			user?:(PartialObjects["User"] | undefined)[],
			entities?:(PartialObjects["Entity"] | undefined)[]
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
	user?:(PartialObjects["UserRef"] | undefined)[],
	entities?:(PartialObjects["EntityRef"] | undefined)[]
},
	["DeveloperRef"]: {
	id?:string,
	project?:PartialObjects["ProjectRef"],
	name?:string,
	user?:(PartialObjects["UserRef"] | undefined)[],
	entities?:(PartialObjects["EntityRef"] | undefined)[]
},
	["DgraphIndex"]:DgraphIndex,
	["Entity"]: {
		__typename?: "Entity";
			id?:string,
			project?:PartialObjects["Project"],
			title?:string,
			description?:string,
			developers?:(PartialObjects["Developer"] | undefined)[],
			status?:PartialObjects["EntityStatus"]
	},
	["EntityFilter"]: {
	id?:string[],
	title?:PartialObjects["StringHashFilter"],
	and?:PartialObjects["EntityFilter"],
	or?:PartialObjects["EntityFilter"],
	not?:PartialObjects["EntityFilter"]
},
	["EntityOrder"]: {
	asc?:PartialObjects["EntityOrderable"],
	desc?:PartialObjects["EntityOrderable"],
	then?:PartialObjects["EntityOrder"]
},
	["EntityOrderable"]:EntityOrderable,
	["EntityPatch"]: {
	project?:PartialObjects["ProjectRef"],
	title?:string,
	description?:string,
	developers?:(PartialObjects["DeveloperRef"] | undefined)[],
	status?:PartialObjects["EntityStatus"]
},
	["EntityRef"]: {
	id?:string,
	project?:PartialObjects["ProjectRef"],
	title?:string,
	description?:string,
	developers?:(PartialObjects["DeveloperRef"] | undefined)[],
	status?:PartialObjects["EntityStatus"]
},
	["EntityStatus"]:EntityStatus,
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
			addUser?:PartialObjects["AddUserPayload"],
			updateUser?:PartialObjects["UpdateUserPayload"],
			deleteUser?:PartialObjects["DeleteUserPayload"],
			addProject?:PartialObjects["AddProjectPayload"],
			updateProject?:PartialObjects["UpdateProjectPayload"],
			deleteProject?:PartialObjects["DeleteProjectPayload"],
			addEntity?:PartialObjects["AddEntityPayload"],
			updateEntity?:PartialObjects["UpdateEntityPayload"],
			deleteEntity?:PartialObjects["DeleteEntityPayload"],
			addDeveloper?:PartialObjects["AddDeveloperPayload"],
			updateDeveloper?:PartialObjects["UpdateDeveloperPayload"],
			deleteDeveloper?:PartialObjects["DeleteDeveloperPayload"]
	},
	["Project"]: {
		__typename?: "Project";
			id?:string,
			title?:string,
			description?:string,
			hosts?:PartialObjects["User"][],
			developers?:(PartialObjects["Developer"] | undefined)[],
			entities?:(PartialObjects["Entity"] | undefined)[]
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
	description?:string,
	hosts?:(PartialObjects["UserRef"] | undefined)[],
	developers?:(PartialObjects["DeveloperRef"] | undefined)[],
	entities?:(PartialObjects["EntityRef"] | undefined)[]
},
	["ProjectRef"]: {
	id?:string,
	title?:string,
	description?:string,
	hosts?:(PartialObjects["UserRef"] | undefined)[],
	developers?:(PartialObjects["DeveloperRef"] | undefined)[],
	entities?:(PartialObjects["EntityRef"] | undefined)[]
},
	["Query"]: {
		__typename?: "Query";
			getUser?:PartialObjects["User"],
			queryUser?:(PartialObjects["User"] | undefined)[],
			getProject?:PartialObjects["Project"],
			queryProject?:(PartialObjects["Project"] | undefined)[],
			getEntity?:PartialObjects["Entity"],
			queryEntity?:(PartialObjects["Entity"] | undefined)[],
			getDeveloper?:PartialObjects["Developer"],
			queryDeveloper?:(PartialObjects["Developer"] | undefined)[]
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
	["UpdateEntityInput"]: {
	filter:PartialObjects["EntityFilter"],
	set?:PartialObjects["EntityPatch"],
	remove?:PartialObjects["EntityPatch"]
},
	["UpdateEntityPayload"]: {
		__typename?: "UpdateEntityPayload";
			entity?:(PartialObjects["Entity"] | undefined)[],
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
			developer?:(PartialObjects["Developer"] | undefined)[],
			host?:(PartialObjects["Project"] | undefined)[],
			stars?:(PartialObjects["Project"] | undefined)[]
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
	developer?:(PartialObjects["DeveloperRef"] | undefined)[],
	host?:(PartialObjects["ProjectRef"] | undefined)[],
	stars?:(PartialObjects["ProjectRef"] | undefined)[]
},
	["UserRef"]: {
	id?:string,
	username?:string,
	developer?:(PartialObjects["DeveloperRef"] | undefined)[],
	host?:(PartialObjects["ProjectRef"] | undefined)[],
	stars?:(PartialObjects["ProjectRef"] | undefined)[]
}
  }

// source: http://localhost:8080/graphql

// timestamp: Sat Jun 06 2020 19:06:08 GMT+0200 (Central European Summer Time)









export type AddDeveloperInput = {
		project:ProjectRef,
	name:string,
	user?:(UserRef | undefined)[],
	entities?:(EntityRef | undefined)[]
}

export type AddDeveloperPayload = {
	__typename?: "AddDeveloperPayload",
	developer?:(Developer | undefined)[],
	numUids?:number
}

export type AddEntityInput = {
		project:ProjectRef,
	title:string,
	description:string,
	developers?:(DeveloperRef | undefined)[],
	status:EntityStatus
}

export type AddEntityPayload = {
	__typename?: "AddEntityPayload",
	entity?:(Entity | undefined)[],
	numUids?:number
}

export type AddProjectInput = {
		title:string,
	description:string,
	hosts?:UserRef[],
	developers?:(DeveloperRef | undefined)[],
	entities?:(EntityRef | undefined)[]
}

export type AddProjectPayload = {
	__typename?: "AddProjectPayload",
	project?:(Project | undefined)[],
	numUids?:number
}

export type AddUserInput = {
		username:string,
	developer?:(DeveloperRef | undefined)[],
	host?:(ProjectRef | undefined)[],
	stars?:(ProjectRef | undefined)[]
}

export type AddUserPayload = {
	__typename?: "AddUserPayload",
	user?:(User | undefined)[],
	numUids?:number
}

export type DateTime = any

export type DateTimeFilter = {
		eq?:DateTime,
	le?:DateTime,
	lt?:DateTime,
	ge?:DateTime,
	gt?:DateTime
}

export type DeleteDeveloperPayload = {
	__typename?: "DeleteDeveloperPayload",
	msg?:string,
	numUids?:number
}

export type DeleteEntityPayload = {
	__typename?: "DeleteEntityPayload",
	msg?:string,
	numUids?:number
}

export type DeleteProjectPayload = {
	__typename?: "DeleteProjectPayload",
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
	user?:(User | undefined)[],
	entities?:(Entity | undefined)[]
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
	name = "name"
}

export type DeveloperPatch = {
		project?:ProjectRef,
	name?:string,
	user?:(UserRef | undefined)[],
	entities?:(EntityRef | undefined)[]
}

export type DeveloperRef = {
		id?:string,
	project?:ProjectRef,
	name?:string,
	user?:(UserRef | undefined)[],
	entities?:(EntityRef | undefined)[]
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

export type Entity = {
	__typename?: "Entity",
	id:string,
	project:Project,
	title:string,
	description:string,
	developers?:(Developer | undefined)[],
	status:EntityStatus
}

export type EntityFilter = {
		id?:string[],
	title?:StringHashFilter,
	and?:EntityFilter,
	or?:EntityFilter,
	not?:EntityFilter
}

export type EntityOrder = {
		asc?:EntityOrderable,
	desc?:EntityOrderable,
	then?:EntityOrder
}

export enum EntityOrderable {
	title = "title",
	description = "description"
}

export type EntityPatch = {
		project?:ProjectRef,
	title?:string,
	description?:string,
	developers?:(DeveloperRef | undefined)[],
	status?:EntityStatus
}

export type EntityRef = {
		id?:string,
	project?:ProjectRef,
	title?:string,
	description?:string,
	developers?:(DeveloperRef | undefined)[],
	status?:EntityStatus
}

export enum EntityStatus {
	READY = "READY",
	PENDING = "PENDING",
	FAIL = "FAIL"
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
	addUser?:AddUserPayload,
	updateUser?:UpdateUserPayload,
	deleteUser?:DeleteUserPayload,
	addProject?:AddProjectPayload,
	updateProject?:UpdateProjectPayload,
	deleteProject?:DeleteProjectPayload,
	addEntity?:AddEntityPayload,
	updateEntity?:UpdateEntityPayload,
	deleteEntity?:DeleteEntityPayload,
	addDeveloper?:AddDeveloperPayload,
	updateDeveloper?:UpdateDeveloperPayload,
	deleteDeveloper?:DeleteDeveloperPayload
}

export type Project = {
	__typename?: "Project",
	id:string,
	title:string,
	description:string,
	hosts?:User[],
	developers?:(Developer | undefined)[],
	entities?:(Entity | undefined)[]
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
	description?:string,
	hosts?:(UserRef | undefined)[],
	developers?:(DeveloperRef | undefined)[],
	entities?:(EntityRef | undefined)[]
}

export type ProjectRef = {
		id?:string,
	title?:string,
	description?:string,
	hosts?:(UserRef | undefined)[],
	developers?:(DeveloperRef | undefined)[],
	entities?:(EntityRef | undefined)[]
}

export type Query = {
	__typename?: "Query",
	getUser?:User,
	queryUser?:(User | undefined)[],
	getProject?:Project,
	queryProject?:(Project | undefined)[],
	getEntity?:Entity,
	queryEntity?:(Entity | undefined)[],
	getDeveloper?:Developer,
	queryDeveloper?:(Developer | undefined)[]
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

export type UpdateEntityInput = {
		filter:EntityFilter,
	set?:EntityPatch,
	remove?:EntityPatch
}

export type UpdateEntityPayload = {
	__typename?: "UpdateEntityPayload",
	entity?:(Entity | undefined)[],
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
	developer?:(Developer | undefined)[],
	host?:(Project | undefined)[],
	stars?:(Project | undefined)[]
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
	username = "username"
}

export type UserPatch = {
		username?:string,
	developer?:(DeveloperRef | undefined)[],
	host?:(ProjectRef | undefined)[],
	stars?:(ProjectRef | undefined)[]
}

export type UserRef = {
		id?:string,
	username?:string,
	developer?:(DeveloperRef | undefined)[],
	host?:(ProjectRef | undefined)[],
	stars?:(ProjectRef | undefined)[]
}

export const AllTypesProps: Record<string,any> = {
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
		user:{
			type:"UserRef",
			array:true,
			arrayRequired:false,
			required:false
		},
		entities:{
			type:"EntityRef",
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
	AddEntityInput:{
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
		description:{
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
		status:{
			type:"EntityStatus",
			array:false,
			arrayRequired:false,
			required:true
		}
	},
	AddEntityPayload:{
		entity:{
			filter:{
				type:"EntityFilter",
				array:false,
				arrayRequired:false,
				required:false
			},
			order:{
				type:"EntityOrder",
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
		description:{
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
		developers:{
			type:"DeveloperRef",
			array:true,
			arrayRequired:false,
			required:false
		},
		entities:{
			type:"EntityRef",
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
	AddUserInput:{
		username:{
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
			type:"ProjectRef",
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
		entities:{
			filter:{
				type:"EntityFilter",
				array:false,
				arrayRequired:false,
				required:false
			},
			order:{
				type:"EntityOrder",
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
		user:{
			type:"UserRef",
			array:true,
			arrayRequired:false,
			required:false
		},
		entities:{
			type:"EntityRef",
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
		user:{
			type:"UserRef",
			array:true,
			arrayRequired:false,
			required:false
		},
		entities:{
			type:"EntityRef",
			array:true,
			arrayRequired:false,
			required:false
		}
	},
	DgraphIndex: "enum",
	Entity:{
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
	EntityFilter:{
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
			type:"EntityFilter",
			array:false,
			arrayRequired:false,
			required:false
		},
		or:{
			type:"EntityFilter",
			array:false,
			arrayRequired:false,
			required:false
		},
		not:{
			type:"EntityFilter",
			array:false,
			arrayRequired:false,
			required:false
		}
	},
	EntityOrder:{
		asc:{
			type:"EntityOrderable",
			array:false,
			arrayRequired:false,
			required:false
		},
		desc:{
			type:"EntityOrderable",
			array:false,
			arrayRequired:false,
			required:false
		},
		then:{
			type:"EntityOrder",
			array:false,
			arrayRequired:false,
			required:false
		}
	},
	EntityOrderable: "enum",
	EntityPatch:{
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
		description:{
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
		status:{
			type:"EntityStatus",
			array:false,
			arrayRequired:false,
			required:false
		}
	},
	EntityRef:{
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
		description:{
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
		status:{
			type:"EntityStatus",
			array:false,
			arrayRequired:false,
			required:false
		}
	},
	EntityStatus: "enum",
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
		},
		addEntity:{
			input:{
				type:"AddEntityInput",
				array:true,
				arrayRequired:true,
				required:true
			}
		},
		updateEntity:{
			input:{
				type:"UpdateEntityInput",
				array:false,
				arrayRequired:false,
				required:true
			}
		},
		deleteEntity:{
			filter:{
				type:"EntityFilter",
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
		entities:{
			filter:{
				type:"EntityFilter",
				array:false,
				arrayRequired:false,
				required:false
			},
			order:{
				type:"EntityOrder",
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
		description:{
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
		developers:{
			type:"DeveloperRef",
			array:true,
			arrayRequired:false,
			required:false
		},
		entities:{
			type:"EntityRef",
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
		description:{
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
		developers:{
			type:"DeveloperRef",
			array:true,
			arrayRequired:false,
			required:false
		},
		entities:{
			type:"EntityRef",
			array:true,
			arrayRequired:false,
			required:false
		}
	},
	Query:{
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
		},
		getEntity:{
			id:{
				type:"ID",
				array:false,
				arrayRequired:false,
				required:true
			}
		},
		queryEntity:{
			filter:{
				type:"EntityFilter",
				array:false,
				arrayRequired:false,
				required:false
			},
			order:{
				type:"EntityOrder",
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
	UpdateEntityInput:{
		filter:{
			type:"EntityFilter",
			array:false,
			arrayRequired:false,
			required:true
		},
		set:{
			type:"EntityPatch",
			array:false,
			arrayRequired:false,
			required:false
		},
		remove:{
			type:"EntityPatch",
			array:false,
			arrayRequired:false,
			required:false
		}
	},
	UpdateEntityPayload:{
		entity:{
			filter:{
				type:"EntityFilter",
				array:false,
				arrayRequired:false,
				required:false
			},
			order:{
				type:"EntityOrder",
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
			type:"ProjectRef",
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
			type:"ProjectRef",
			array:true,
			arrayRequired:false,
			required:false
		}
	}
}

export const ReturnTypes: Record<string,any> = {
	AddDeveloperPayload:{
		developer:"Developer",
		numUids:"Int"
	},
	AddEntityPayload:{
		entity:"Entity",
		numUids:"Int"
	},
	AddProjectPayload:{
		project:"Project",
		numUids:"Int"
	},
	AddUserPayload:{
		user:"User",
		numUids:"Int"
	},
	DeleteDeveloperPayload:{
		msg:"String",
		numUids:"Int"
	},
	DeleteEntityPayload:{
		msg:"String",
		numUids:"Int"
	},
	DeleteProjectPayload:{
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
		user:"User",
		entities:"Entity"
	},
	Entity:{
		id:"ID",
		project:"Project",
		title:"String",
		description:"String",
		developers:"Developer",
		status:"EntityStatus"
	},
	Mutation:{
		addUser:"AddUserPayload",
		updateUser:"UpdateUserPayload",
		deleteUser:"DeleteUserPayload",
		addProject:"AddProjectPayload",
		updateProject:"UpdateProjectPayload",
		deleteProject:"DeleteProjectPayload",
		addEntity:"AddEntityPayload",
		updateEntity:"UpdateEntityPayload",
		deleteEntity:"DeleteEntityPayload",
		addDeveloper:"AddDeveloperPayload",
		updateDeveloper:"UpdateDeveloperPayload",
		deleteDeveloper:"DeleteDeveloperPayload"
	},
	Project:{
		id:"ID",
		title:"String",
		description:"String",
		hosts:"User",
		developers:"Developer",
		entities:"Entity"
	},
	Query:{
		getUser:"User",
		queryUser:"User",
		getProject:"Project",
		queryProject:"Project",
		getEntity:"Entity",
		queryEntity:"Entity",
		getDeveloper:"Developer",
		queryDeveloper:"Developer"
	},
	UpdateDeveloperPayload:{
		developer:"Developer",
		numUids:"Int"
	},
	UpdateEntityPayload:{
		entity:"Entity",
		numUids:"Int"
	},
	UpdateProjectPayload:{
		project:"Project",
		numUids:"Int"
	},
	UpdateUserPayload:{
		user:"User",
		numUids:"Int"
	},
	User:{
		id:"ID",
		username:"String",
		developer:"Developer",
		host:"Project",
		stars:"Project"
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
    let fetchFunction;
    let queryString = query;
    let fetchOptions = options[1] || {};
    try {
        fetchFunction = require('node-fetch');
    } catch (error) {
        throw new Error("Please install 'node-fetch' to use zeus in nodejs environment");
    }
    if (fetchOptions.method && fetchOptions.method === 'GET') {
      try {
          queryString = require('querystring').stringify(query);
      } catch (error) {
          throw new Error("Something gone wrong 'querystring' is a part of nodejs environment");
      }
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
  