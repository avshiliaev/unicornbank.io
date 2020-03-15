"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const graphql_tag_1 = __importDefault(require("graphql-tag"));
const React = __importStar(require("react"));
const ApolloReactComponents = __importStar(require("@apollo/react-components"));
const ApolloReactHoc = __importStar(require("@apollo/react-hoc"));
var BoardOrderable;
(function (BoardOrderable) {
    BoardOrderable["Title"] = "title";
    BoardOrderable["Order"] = "order";
})(BoardOrderable = exports.BoardOrderable || (exports.BoardOrderable = {}));
var ColumnOrderable;
(function (ColumnOrderable) {
    ColumnOrderable["Title"] = "title";
})(ColumnOrderable = exports.ColumnOrderable || (exports.ColumnOrderable = {}));
var CommentOrderable;
(function (CommentOrderable) {
    CommentOrderable["Content"] = "content";
})(CommentOrderable = exports.CommentOrderable || (exports.CommentOrderable = {}));
var DgraphIndex;
(function (DgraphIndex) {
    DgraphIndex["Int"] = "int";
    DgraphIndex["Float"] = "float";
    DgraphIndex["Bool"] = "bool";
    DgraphIndex["Hash"] = "hash";
    DgraphIndex["Exact"] = "exact";
    DgraphIndex["Term"] = "term";
    DgraphIndex["Fulltext"] = "fulltext";
    DgraphIndex["Trigram"] = "trigram";
    DgraphIndex["Regexp"] = "regexp";
    DgraphIndex["Year"] = "year";
    DgraphIndex["Month"] = "month";
    DgraphIndex["Day"] = "day";
    DgraphIndex["Hour"] = "hour";
})(DgraphIndex = exports.DgraphIndex || (exports.DgraphIndex = {}));
var ProjectOrderable;
(function (ProjectOrderable) {
    ProjectOrderable["Title"] = "title";
    ProjectOrderable["Description"] = "description";
})(ProjectOrderable = exports.ProjectOrderable || (exports.ProjectOrderable = {}));
var TagOrderable;
(function (TagOrderable) {
    TagOrderable["Title"] = "title";
})(TagOrderable = exports.TagOrderable || (exports.TagOrderable = {}));
var TaskOrderable;
(function (TaskOrderable) {
    TaskOrderable["Title"] = "title";
    TaskOrderable["Hours"] = "hours";
    TaskOrderable["Deadline"] = "deadline";
    TaskOrderable["Content"] = "content";
    TaskOrderable["Priority"] = "priority";
})(TaskOrderable = exports.TaskOrderable || (exports.TaskOrderable = {}));
var UserOrderable;
(function (UserOrderable) {
    UserOrderable["Username"] = "username";
    UserOrderable["Password"] = "password";
    UserOrderable["Location"] = "location";
})(UserOrderable = exports.UserOrderable || (exports.UserOrderable = {}));
var WorkerOrderable;
(function (WorkerOrderable) {
    WorkerOrderable["Name"] = "name";
    WorkerOrderable["Availability"] = "availability";
})(WorkerOrderable = exports.WorkerOrderable || (exports.WorkerOrderable = {}));
exports.AddBoardDocument = graphql_tag_1.default `
    mutation addBoard($filter: ProjectFilter, $filter1: WorkerFilter, $order: WorkerOrder, $first: Int, $offset: Int, $filter2: TagFilter, $order1: TagOrder, $first1: Int, $offset1: Int, $filter3: ProjectFilter, $filter4: ColumnFilter, $filter5: WorkerFilter, $order2: WorkerOrder, $first2: Int, $offset2: Int, $filter6: WorkerFilter, $order3: WorkerOrder, $first3: Int, $offset3: Int, $filter7: CommentFilter, $order4: CommentOrder, $first4: Int, $offset4: Int, $filter8: TaskFilter, $order5: TaskOrder, $first5: Int, $offset5: Int, $filter9: ProjectFilter, $filter10: ColumnFilter, $order6: ColumnOrder, $first6: Int, $offset6: Int, $filter11: BoardFilter, $order7: BoardOrder, $first7: Int, $offset7: Int, $filter12: ProjectFilter, $filter13: UserFilter, $order8: UserOrder, $first8: Int, $offset8: Int, $filter14: TagFilter, $order9: TagOrder, $first9: Int, $offset9: Int, $filter15: TaskFilter, $order10: TaskOrder, $first10: Int, $offset10: Int, $filter16: TaskFilter, $order11: TaskOrder, $first11: Int, $offset11: Int, $filter17: WorkerFilter, $order12: WorkerOrder, $first12: Int, $offset12: Int, $filter18: ProjectFilter, $filter19: BoardFilter, $filter20: TaskFilter, $order13: TaskOrder, $first13: Int, $offset13: Int, $filter21: ColumnFilter, $order14: ColumnOrder, $first14: Int, $offset14: Int, $filter22: BoardFilter, $order15: BoardOrder, $first15: Int, $offset15: Int, $input: [AddBoardInput!]!) {
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
          workers(filter: $filter1, order: $order, first: $first, offset: $offset) {
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
          workers(filter: $filter5, order: $order2, first: $first2, offset: $offset2) {
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
        workers(filter: $filter17, order: $order12, first: $first12, offset: $offset12) {
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
exports.AddBoardComponent = (props) => (<ApolloReactComponents.Mutation mutation={exports.AddBoardDocument} {...props}/>);
function withAddBoard(operationOptions) {
    return ApolloReactHoc.withMutation(exports.AddBoardDocument, Object.assign({ alias: 'addBoard' }, operationOptions));
}
exports.withAddBoard = withAddBoard;
;
exports.AddColumnDocument = graphql_tag_1.default `
    mutation addColumn($filter: TagFilter, $order: TagOrder, $first: Int, $offset: Int, $filter1: TaskFilter, $order1: TaskOrder, $first1: Int, $offset1: Int, $filter2: BoardFilter, $order2: BoardOrder, $first2: Int, $offset2: Int, $filter3: WorkerFilter, $order3: WorkerOrder, $first3: Int, $offset3: Int, $filter4: ProjectFilter, $filter5: BoardFilter, $filter6: TaskFilter, $order4: TaskOrder, $first4: Int, $offset4: Int, $filter7: ColumnFilter, $order5: ColumnOrder, $first5: Int, $offset5: Int, $filter8: BoardFilter, $filter9: ProjectFilter, $filter10: ColumnFilter, $filter11: ProjectFilter, $filter12: UserFilter, $order6: UserOrder, $first6: Int, $offset6: Int, $filter13: TagFilter, $order7: TagOrder, $first7: Int, $offset7: Int, $filter14: TaskFilter, $order8: TaskOrder, $first8: Int, $offset8: Int, $filter15: TaskFilter, $order9: TaskOrder, $first9: Int, $offset9: Int, $filter16: WorkerFilter, $order10: WorkerOrder, $first10: Int, $offset10: Int, $filter17: ProjectFilter, $filter18: UserFilter, $order11: UserOrder, $first11: Int, $offset11: Int, $filter19: TagFilter, $order12: TagOrder, $first12: Int, $offset12: Int, $filter20: TaskFilter, $order13: TaskOrder, $first13: Int, $offset13: Int, $filter21: TaskFilter, $order14: TaskOrder, $first14: Int, $offset14: Int, $filter22: WorkerFilter, $order15: WorkerOrder, $first15: Int, $offset15: Int, $filter23: TaskFilter, $filter24: WorkerFilter, $filter25: CommentFilter, $order16: CommentOrder, $first16: Int, $offset16: Int, $filter26: TaskFilter, $order17: TaskOrder, $first17: Int, $offset17: Int, $filter27: ColumnFilter, $order18: ColumnOrder, $first18: Int, $offset18: Int, $input: [AddColumnInput!]!) {
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
          workers(filter: $filter3, order: $order3, first: $first3, offset: $offset3) {
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
        workers(filter: $filter16, order: $order10, first: $first10, offset: $offset10) {
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
          worker(filter: $filter24) {
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
exports.AddColumnComponent = (props) => (<ApolloReactComponents.Mutation mutation={exports.AddColumnDocument} {...props}/>);
function withAddColumn(operationOptions) {
    return ApolloReactHoc.withMutation(exports.AddColumnDocument, Object.assign({ alias: 'addColumn' }, operationOptions));
}
exports.withAddColumn = withAddColumn;
;
exports.AddCommentDocument = graphql_tag_1.default `
    mutation addComment($filter: TagFilter, $order: TagOrder, $first: Int, $offset: Int, $filter1: TaskFilter, $order1: TaskOrder, $first1: Int, $offset1: Int, $filter2: BoardFilter, $order2: BoardOrder, $first2: Int, $offset2: Int, $filter3: WorkerFilter, $order3: WorkerOrder, $first3: Int, $offset3: Int, $filter4: ProjectFilter, $filter5: BoardFilter, $filter6: TaskFilter, $order4: TaskOrder, $first4: Int, $offset4: Int, $filter7: ColumnFilter, $filter8: ProjectFilter, $filter9: UserFilter, $order5: UserOrder, $first5: Int, $offset5: Int, $filter10: TagFilter, $order6: TagOrder, $first6: Int, $offset6: Int, $filter11: TaskFilter, $order7: TaskOrder, $first7: Int, $offset7: Int, $filter12: TaskFilter, $order8: TaskOrder, $first8: Int, $offset8: Int, $filter13: WorkerFilter, $order9: WorkerOrder, $first9: Int, $offset9: Int, $filter14: ProjectFilter, $filter15: UserFilter, $order10: UserOrder, $first10: Int, $offset10: Int, $filter16: TagFilter, $order11: TagOrder, $first11: Int, $offset11: Int, $filter17: TaskFilter, $order12: TaskOrder, $first12: Int, $offset12: Int, $filter18: TaskFilter, $order13: TaskOrder, $first13: Int, $offset13: Int, $filter19: WorkerFilter, $order14: WorkerOrder, $first14: Int, $offset14: Int, $filter20: TaskFilter, $filter21: WorkerFilter, $filter22: CommentFilter, $order15: CommentOrder, $first15: Int, $offset15: Int, $filter23: TaskFilter, $filter24: ProjectFilter, $filter25: WorkerFilter, $order16: WorkerOrder, $first16: Int, $offset16: Int, $filter26: TaskFilter, $order17: TaskOrder, $first17: Int, $offset17: Int, $filter27: UserFilter, $order18: UserOrder, $first18: Int, $offset18: Int, $filter28: ProjectFilter, $filter29: WorkerFilter, $order19: WorkerOrder, $first19: Int, $offset19: Int, $filter30: TagFilter, $order20: TagOrder, $first20: Int, $offset20: Int, $filter31: ProjectFilter, $filter32: ColumnFilter, $filter33: WorkerFilter, $order21: WorkerOrder, $first21: Int, $offset21: Int, $filter34: WorkerFilter, $order22: WorkerOrder, $first22: Int, $offset22: Int, $filter35: CommentFilter, $order23: CommentOrder, $first23: Int, $offset23: Int, $filter36: TaskFilter, $order24: TaskOrder, $first24: Int, $offset24: Int, $filter37: ProjectFilter, $filter38: ColumnFilter, $filter39: WorkerFilter, $order25: WorkerOrder, $first25: Int, $offset25: Int, $filter40: WorkerFilter, $order26: WorkerOrder, $first26: Int, $offset26: Int, $filter41: CommentFilter, $order27: CommentOrder, $first27: Int, $offset27: Int, $filter42: TaskFilter, $order28: TaskOrder, $first28: Int, $offset28: Int, $filter43: WorkerFilter, $filter44: CommentFilter, $order29: CommentOrder, $first29: Int, $offset29: Int, $input: [AddCommentInput!]!) {
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
          workers(filter: $filter3, order: $order3, first: $first3, offset: $offset3) {
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
        workers(filter: $filter13, order: $order9, first: $first9, offset: $offset9) {
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
          worker(filter: $filter21) {
            id
            name
            availability
          }
          content
        }
      }
      worker(filter: $filter43) {
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
          workers(filter: $filter29, order: $order19, first: $first19, offset: $offset19) {
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
          workers(filter: $filter33, order: $order21, first: $first21, offset: $offset21) {
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
          workers(filter: $filter39, order: $order25, first: $first25, offset: $offset25) {
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
exports.AddCommentComponent = (props) => (<ApolloReactComponents.Mutation mutation={exports.AddCommentDocument} {...props}/>);
function withAddComment(operationOptions) {
    return ApolloReactHoc.withMutation(exports.AddCommentDocument, Object.assign({ alias: 'addComment' }, operationOptions));
}
exports.withAddComment = withAddComment;
;
exports.AddProjectDocument = graphql_tag_1.default `
    mutation addProject($filter: TaskFilter, $order: TaskOrder, $first: Int, $offset: Int, $filter1: BoardFilter, $order1: BoardOrder, $first1: Int, $offset1: Int, $filter2: WorkerFilter, $order2: WorkerOrder, $first2: Int, $offset2: Int, $filter3: ProjectFilter, $filter4: ProjectFilter, $filter5: UserFilter, $order3: UserOrder, $first3: Int, $offset3: Int, $filter6: TagFilter, $order4: TagOrder, $first4: Int, $offset4: Int, $filter7: TaskFilter, $order5: TaskOrder, $first5: Int, $offset5: Int, $filter8: TaskFilter, $order6: TaskOrder, $first6: Int, $offset6: Int, $filter9: WorkerFilter, $order7: WorkerOrder, $first7: Int, $offset7: Int, $filter10: TagFilter, $order8: TagOrder, $first8: Int, $offset8: Int, $filter11: ProjectFilter, $order9: ProjectOrder, $first9: Int, $offset9: Int, $input: [AddProjectInput!]!) {
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
          workers(filter: $filter2, order: $order2, first: $first2, offset: $offset2) {
            id
            name
            availability
          }
        }
        workers(filter: $filter9, order: $order7, first: $first7, offset: $offset7) {
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
exports.AddProjectComponent = (props) => (<ApolloReactComponents.Mutation mutation={exports.AddProjectDocument} {...props}/>);
function withAddProject(operationOptions) {
    return ApolloReactHoc.withMutation(exports.AddProjectDocument, Object.assign({ alias: 'addProject' }, operationOptions));
}
exports.withAddProject = withAddProject;
;
exports.AddTagDocument = graphql_tag_1.default `
    mutation addTag($filter: ProjectFilter, $filter1: WorkerFilter, $order: WorkerOrder, $first: Int, $offset: Int, $filter2: TagFilter, $order1: TagOrder, $first1: Int, $offset1: Int, $filter3: ProjectFilter, $filter4: ColumnFilter, $filter5: WorkerFilter, $order2: WorkerOrder, $first2: Int, $offset2: Int, $filter6: WorkerFilter, $order3: WorkerOrder, $first3: Int, $offset3: Int, $filter7: CommentFilter, $order4: CommentOrder, $first4: Int, $offset4: Int, $filter8: TaskFilter, $order5: TaskOrder, $first5: Int, $offset5: Int, $filter9: ProjectFilter, $filter10: ColumnFilter, $order6: ColumnOrder, $first6: Int, $offset6: Int, $filter11: BoardFilter, $order7: BoardOrder, $first7: Int, $offset7: Int, $filter12: ProjectFilter, $filter13: UserFilter, $order8: UserOrder, $first8: Int, $offset8: Int, $filter14: TagFilter, $order9: TagOrder, $first9: Int, $offset9: Int, $filter15: TaskFilter, $order10: TaskOrder, $first10: Int, $offset10: Int, $filter16: TaskFilter, $order11: TaskOrder, $first11: Int, $offset11: Int, $filter17: WorkerFilter, $order12: WorkerOrder, $first12: Int, $offset12: Int, $filter18: ProjectFilter, $filter19: WorkerFilter, $order13: WorkerOrder, $first13: Int, $offset13: Int, $filter20: TagFilter, $order14: TagOrder, $first14: Int, $offset14: Int, $input: [AddTagInput!]!) {
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
          workers(filter: $filter1, order: $order, first: $first, offset: $offset) {
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
          workers(filter: $filter5, order: $order2, first: $first2, offset: $offset2) {
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
        workers(filter: $filter17, order: $order12, first: $first12, offset: $offset12) {
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
      workers(filter: $filter19, order: $order13, first: $first13, offset: $offset13) {
        id
        name
        availability
      }
    }
    numUids
  }
}
    `;
exports.AddTagComponent = (props) => (<ApolloReactComponents.Mutation mutation={exports.AddTagDocument} {...props}/>);
function withAddTag(operationOptions) {
    return ApolloReactHoc.withMutation(exports.AddTagDocument, Object.assign({ alias: 'addTag' }, operationOptions));
}
exports.withAddTag = withAddTag;
;
exports.AddTaskDocument = graphql_tag_1.default `
    mutation addTask($filter: ProjectFilter, $filter1: WorkerFilter, $order: WorkerOrder, $first: Int, $offset: Int, $filter2: TagFilter, $order1: TagOrder, $first1: Int, $offset1: Int, $filter3: ProjectFilter, $filter4: ColumnFilter, $filter5: WorkerFilter, $order2: WorkerOrder, $first2: Int, $offset2: Int, $filter6: WorkerFilter, $order3: WorkerOrder, $first3: Int, $offset3: Int, $filter7: CommentFilter, $order4: CommentOrder, $first4: Int, $offset4: Int, $filter8: TaskFilter, $order5: TaskOrder, $first5: Int, $offset5: Int, $filter9: ProjectFilter, $filter10: ColumnFilter, $order6: ColumnOrder, $first6: Int, $offset6: Int, $filter11: BoardFilter, $order7: BoardOrder, $first7: Int, $offset7: Int, $filter12: ProjectFilter, $filter13: UserFilter, $order8: UserOrder, $first8: Int, $offset8: Int, $filter14: TagFilter, $order9: TagOrder, $first9: Int, $offset9: Int, $filter15: TaskFilter, $order10: TaskOrder, $first10: Int, $offset10: Int, $filter16: TaskFilter, $order11: TaskOrder, $first11: Int, $offset11: Int, $filter17: WorkerFilter, $order12: WorkerOrder, $first12: Int, $offset12: Int, $filter18: ProjectFilter, $filter19: ProjectFilter, $filter20: ColumnFilter, $order13: ColumnOrder, $first13: Int, $offset13: Int, $filter21: BoardFilter, $filter22: TaskFilter, $order14: TaskOrder, $first14: Int, $offset14: Int, $filter23: ColumnFilter, $filter24: WorkerFilter, $order15: WorkerOrder, $first15: Int, $offset15: Int, $filter25: ProjectFilter, $filter26: WorkerFilter, $order16: WorkerOrder, $first16: Int, $offset16: Int, $filter27: TaskFilter, $order17: TaskOrder, $first17: Int, $offset17: Int, $filter28: UserFilter, $order18: UserOrder, $first18: Int, $offset18: Int, $filter29: TagFilter, $order19: TagOrder, $first19: Int, $offset19: Int, $filter30: TaskFilter, $order20: TaskOrder, $first20: Int, $offset20: Int, $filter31: ProjectFilter, $filter32: ColumnFilter, $filter33: WorkerFilter, $order21: WorkerOrder, $first21: Int, $offset21: Int, $filter34: WorkerFilter, $order22: WorkerOrder, $first22: Int, $offset22: Int, $filter35: CommentFilter, $order23: CommentOrder, $first23: Int, $offset23: Int, $filter36: TaskFilter, $order24: TaskOrder, $first24: Int, $offset24: Int, $filter37: WorkerFilter, $order25: WorkerOrder, $first25: Int, $offset25: Int, $filter38: TaskFilter, $filter39: ProjectFilter, $filter40: UserFilter, $order26: UserOrder, $first26: Int, $offset26: Int, $filter41: TagFilter, $order27: TagOrder, $first27: Int, $offset27: Int, $filter42: TaskFilter, $order28: TaskOrder, $first28: Int, $offset28: Int, $filter43: TaskFilter, $order29: TaskOrder, $first29: Int, $offset29: Int, $filter44: WorkerFilter, $filter45: CommentFilter, $order30: CommentOrder, $first30: Int, $offset30: Int, $filter46: TaskFilter, $order31: TaskOrder, $first31: Int, $offset31: Int, $input: [AddTaskInput!]!) {
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
          workers(filter: $filter1, order: $order, first: $first, offset: $offset) {
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
          workers(filter: $filter5, order: $order2, first: $first2, offset: $offset2) {
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
        workers(filter: $filter17, order: $order12, first: $first12, offset: $offset12) {
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
      workers(filter: $filter24, order: $order15, first: $first15, offset: $offset15) {
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
          workers(filter: $filter33, order: $order21, first: $first21, offset: $offset21) {
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
        worker(filter: $filter44) {
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
exports.AddTaskComponent = (props) => (<ApolloReactComponents.Mutation mutation={exports.AddTaskDocument} {...props}/>);
function withAddTask(operationOptions) {
    return ApolloReactHoc.withMutation(exports.AddTaskDocument, Object.assign({ alias: 'addTask' }, operationOptions));
}
exports.withAddTask = withAddTask;
;
exports.AddUserDocument = graphql_tag_1.default `
    mutation addUser($filter: TagFilter, $order: TagOrder, $first: Int, $offset: Int, $filter1: TaskFilter, $order1: TaskOrder, $first1: Int, $offset1: Int, $filter2: BoardFilter, $order2: BoardOrder, $first2: Int, $offset2: Int, $filter3: WorkerFilter, $order3: WorkerOrder, $first3: Int, $offset3: Int, $filter4: ProjectFilter, $filter5: TaskFilter, $order4: TaskOrder, $first4: Int, $offset4: Int, $filter6: UserFilter, $order5: UserOrder, $first5: Int, $offset5: Int, $filter7: ProjectFilter, $filter8: WorkerFilter, $order6: WorkerOrder, $first6: Int, $offset6: Int, $filter9: TagFilter, $order7: TagOrder, $first7: Int, $offset7: Int, $filter10: ProjectFilter, $filter11: ColumnFilter, $filter12: WorkerFilter, $order8: WorkerOrder, $first8: Int, $offset8: Int, $filter13: WorkerFilter, $order9: WorkerOrder, $first9: Int, $offset9: Int, $filter14: CommentFilter, $order10: CommentOrder, $first10: Int, $offset10: Int, $filter15: TaskFilter, $order11: TaskOrder, $first11: Int, $offset11: Int, $filter16: ProjectFilter, $filter17: ColumnFilter, $filter18: WorkerFilter, $order12: WorkerOrder, $first12: Int, $offset12: Int, $filter19: WorkerFilter, $order13: WorkerOrder, $first13: Int, $offset13: Int, $filter20: CommentFilter, $order14: CommentOrder, $first14: Int, $offset14: Int, $filter21: TaskFilter, $order15: TaskOrder, $first15: Int, $offset15: Int, $filter22: WorkerFilter, $order16: WorkerOrder, $first16: Int, $offset16: Int, $filter23: UserFilter, $order17: UserOrder, $first17: Int, $offset17: Int, $input: [AddUserInput!]!) {
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
          workers(filter: $filter3, order: $order3, first: $first3, offset: $offset3) {
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
          workers(filter: $filter8, order: $order6, first: $first6, offset: $offset6) {
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
          workers(filter: $filter12, order: $order8, first: $first8, offset: $offset8) {
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
          workers(filter: $filter18, order: $order12, first: $first12, offset: $offset12) {
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
exports.AddUserComponent = (props) => (<ApolloReactComponents.Mutation mutation={exports.AddUserDocument} {...props}/>);
function withAddUser(operationOptions) {
    return ApolloReactHoc.withMutation(exports.AddUserDocument, Object.assign({ alias: 'addUser' }, operationOptions));
}
exports.withAddUser = withAddUser;
;
exports.AddWorkerDocument = graphql_tag_1.default `
    mutation addWorker($filter: ProjectFilter, $filter1: WorkerFilter, $order: WorkerOrder, $first: Int, $offset: Int, $filter2: TagFilter, $order1: TagOrder, $first1: Int, $offset1: Int, $filter3: ProjectFilter, $filter4: ColumnFilter, $filter5: WorkerFilter, $order2: WorkerOrder, $first2: Int, $offset2: Int, $filter6: WorkerFilter, $order3: WorkerOrder, $first3: Int, $offset3: Int, $filter7: CommentFilter, $order4: CommentOrder, $first4: Int, $offset4: Int, $filter8: TaskFilter, $order5: TaskOrder, $first5: Int, $offset5: Int, $filter9: ProjectFilter, $filter10: ColumnFilter, $order6: ColumnOrder, $first6: Int, $offset6: Int, $filter11: BoardFilter, $order7: BoardOrder, $first7: Int, $offset7: Int, $filter12: ProjectFilter, $filter13: UserFilter, $order8: UserOrder, $first8: Int, $offset8: Int, $filter14: TagFilter, $order9: TagOrder, $first9: Int, $offset9: Int, $filter15: TaskFilter, $order10: TaskOrder, $first10: Int, $offset10: Int, $filter16: TaskFilter, $order11: TaskOrder, $first11: Int, $offset11: Int, $filter17: WorkerFilter, $order12: WorkerOrder, $first12: Int, $offset12: Int, $filter18: ProjectFilter, $filter19: ProjectFilter, $filter20: UserFilter, $order13: UserOrder, $first13: Int, $offset13: Int, $filter21: TagFilter, $order14: TagOrder, $first14: Int, $offset14: Int, $filter22: TaskFilter, $order15: TaskOrder, $first15: Int, $offset15: Int, $filter23: TaskFilter, $order16: TaskOrder, $first16: Int, $offset16: Int, $filter24: WorkerFilter, $order17: WorkerOrder, $first17: Int, $offset17: Int, $filter25: ProjectFilter, $filter26: ColumnFilter, $filter27: WorkerFilter, $order18: WorkerOrder, $first18: Int, $offset18: Int, $filter28: WorkerFilter, $order19: WorkerOrder, $first19: Int, $offset19: Int, $filter29: CommentFilter, $order20: CommentOrder, $first20: Int, $offset20: Int, $filter30: TaskFilter, $order21: TaskOrder, $first21: Int, $offset21: Int, $filter31: UserFilter, $order22: UserOrder, $first22: Int, $offset22: Int, $filter32: TagFilter, $order23: TagOrder, $first23: Int, $offset23: Int, $filter33: TaskFilter, $order24: TaskOrder, $first24: Int, $offset24: Int, $filter34: ProjectFilter, $filter35: BoardFilter, $filter36: TaskFilter, $order25: TaskOrder, $first25: Int, $offset25: Int, $filter37: ColumnFilter, $filter38: WorkerFilter, $order26: WorkerOrder, $first26: Int, $offset26: Int, $filter39: ProjectFilter, $filter40: UserFilter, $order27: UserOrder, $first27: Int, $offset27: Int, $filter41: TagFilter, $order28: TagOrder, $first28: Int, $offset28: Int, $filter42: TaskFilter, $order29: TaskOrder, $first29: Int, $offset29: Int, $filter43: TaskFilter, $order30: TaskOrder, $first30: Int, $offset30: Int, $filter44: WorkerFilter, $order31: WorkerOrder, $first31: Int, $offset31: Int, $filter45: TaskFilter, $filter46: WorkerFilter, $filter47: CommentFilter, $order32: CommentOrder, $first32: Int, $offset32: Int, $filter48: TaskFilter, $order33: TaskOrder, $first33: Int, $offset33: Int, $filter49: WorkerFilter, $order34: WorkerOrder, $first34: Int, $offset34: Int, $input: [AddWorkerInput!]!) {
  addWorker(input: $input) {
    worker(filter: $filter49, order: $order34, first: $first34, offset: $offset34) {
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
          workers(filter: $filter1, order: $order, first: $first, offset: $offset) {
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
          workers(filter: $filter5, order: $order2, first: $first2, offset: $offset2) {
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
        workers(filter: $filter17, order: $order12, first: $first12, offset: $offset12) {
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
          workers(filter: $filter27, order: $order18, first: $first18, offset: $offset18) {
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
        workers(filter: $filter38, order: $order26, first: $first26, offset: $offset26) {
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
          worker(filter: $filter46) {
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
exports.AddWorkerComponent = (props) => (<ApolloReactComponents.Mutation mutation={exports.AddWorkerDocument} {...props}/>);
function withAddWorker(operationOptions) {
    return ApolloReactHoc.withMutation(exports.AddWorkerDocument, Object.assign({ alias: 'addWorker' }, operationOptions));
}
exports.withAddWorker = withAddWorker;
;
exports.DeleteBoardDocument = graphql_tag_1.default `
    mutation deleteBoard($filter: BoardFilter!) {
  deleteBoard(filter: $filter) {
    msg
    numUids
  }
}
    `;
exports.DeleteBoardComponent = (props) => (<ApolloReactComponents.Mutation mutation={exports.DeleteBoardDocument} {...props}/>);
function withDeleteBoard(operationOptions) {
    return ApolloReactHoc.withMutation(exports.DeleteBoardDocument, Object.assign({ alias: 'deleteBoard' }, operationOptions));
}
exports.withDeleteBoard = withDeleteBoard;
;
exports.DeleteColumnDocument = graphql_tag_1.default `
    mutation deleteColumn($filter: ColumnFilter!) {
  deleteColumn(filter: $filter) {
    msg
    numUids
  }
}
    `;
exports.DeleteColumnComponent = (props) => (<ApolloReactComponents.Mutation mutation={exports.DeleteColumnDocument} {...props}/>);
function withDeleteColumn(operationOptions) {
    return ApolloReactHoc.withMutation(exports.DeleteColumnDocument, Object.assign({ alias: 'deleteColumn' }, operationOptions));
}
exports.withDeleteColumn = withDeleteColumn;
;
exports.DeleteCommentDocument = graphql_tag_1.default `
    mutation deleteComment($filter: CommentFilter!) {
  deleteComment(filter: $filter) {
    msg
    numUids
  }
}
    `;
exports.DeleteCommentComponent = (props) => (<ApolloReactComponents.Mutation mutation={exports.DeleteCommentDocument} {...props}/>);
function withDeleteComment(operationOptions) {
    return ApolloReactHoc.withMutation(exports.DeleteCommentDocument, Object.assign({ alias: 'deleteComment' }, operationOptions));
}
exports.withDeleteComment = withDeleteComment;
;
exports.DeleteProjectDocument = graphql_tag_1.default `
    mutation deleteProject($filter: ProjectFilter!) {
  deleteProject(filter: $filter) {
    msg
    numUids
  }
}
    `;
exports.DeleteProjectComponent = (props) => (<ApolloReactComponents.Mutation mutation={exports.DeleteProjectDocument} {...props}/>);
function withDeleteProject(operationOptions) {
    return ApolloReactHoc.withMutation(exports.DeleteProjectDocument, Object.assign({ alias: 'deleteProject' }, operationOptions));
}
exports.withDeleteProject = withDeleteProject;
;
exports.DeleteTagDocument = graphql_tag_1.default `
    mutation deleteTag($filter: TagFilter!) {
  deleteTag(filter: $filter) {
    msg
    numUids
  }
}
    `;
exports.DeleteTagComponent = (props) => (<ApolloReactComponents.Mutation mutation={exports.DeleteTagDocument} {...props}/>);
function withDeleteTag(operationOptions) {
    return ApolloReactHoc.withMutation(exports.DeleteTagDocument, Object.assign({ alias: 'deleteTag' }, operationOptions));
}
exports.withDeleteTag = withDeleteTag;
;
exports.DeleteTaskDocument = graphql_tag_1.default `
    mutation deleteTask($filter: TaskFilter!) {
  deleteTask(filter: $filter) {
    msg
    numUids
  }
}
    `;
exports.DeleteTaskComponent = (props) => (<ApolloReactComponents.Mutation mutation={exports.DeleteTaskDocument} {...props}/>);
function withDeleteTask(operationOptions) {
    return ApolloReactHoc.withMutation(exports.DeleteTaskDocument, Object.assign({ alias: 'deleteTask' }, operationOptions));
}
exports.withDeleteTask = withDeleteTask;
;
exports.DeleteUserDocument = graphql_tag_1.default `
    mutation deleteUser($filter: UserFilter!) {
  deleteUser(filter: $filter) {
    msg
    numUids
  }
}
    `;
exports.DeleteUserComponent = (props) => (<ApolloReactComponents.Mutation mutation={exports.DeleteUserDocument} {...props}/>);
function withDeleteUser(operationOptions) {
    return ApolloReactHoc.withMutation(exports.DeleteUserDocument, Object.assign({ alias: 'deleteUser' }, operationOptions));
}
exports.withDeleteUser = withDeleteUser;
;
exports.DeleteWorkerDocument = graphql_tag_1.default `
    mutation deleteWorker($filter: WorkerFilter!) {
  deleteWorker(filter: $filter) {
    msg
    numUids
  }
}
    `;
exports.DeleteWorkerComponent = (props) => (<ApolloReactComponents.Mutation mutation={exports.DeleteWorkerDocument} {...props}/>);
function withDeleteWorker(operationOptions) {
    return ApolloReactHoc.withMutation(exports.DeleteWorkerDocument, Object.assign({ alias: 'deleteWorker' }, operationOptions));
}
exports.withDeleteWorker = withDeleteWorker;
;
exports.UpdateBoardDocument = graphql_tag_1.default `
    mutation updateBoard($filter: ProjectFilter, $filter1: WorkerFilter, $order: WorkerOrder, $first: Int, $offset: Int, $filter2: TagFilter, $order1: TagOrder, $first1: Int, $offset1: Int, $filter3: ProjectFilter, $filter4: ColumnFilter, $filter5: WorkerFilter, $order2: WorkerOrder, $first2: Int, $offset2: Int, $filter6: WorkerFilter, $order3: WorkerOrder, $first3: Int, $offset3: Int, $filter7: CommentFilter, $order4: CommentOrder, $first4: Int, $offset4: Int, $filter8: TaskFilter, $order5: TaskOrder, $first5: Int, $offset5: Int, $filter9: ProjectFilter, $filter10: ColumnFilter, $order6: ColumnOrder, $first6: Int, $offset6: Int, $filter11: BoardFilter, $order7: BoardOrder, $first7: Int, $offset7: Int, $filter12: ProjectFilter, $filter13: UserFilter, $order8: UserOrder, $first8: Int, $offset8: Int, $filter14: TagFilter, $order9: TagOrder, $first9: Int, $offset9: Int, $filter15: TaskFilter, $order10: TaskOrder, $first10: Int, $offset10: Int, $filter16: TaskFilter, $order11: TaskOrder, $first11: Int, $offset11: Int, $filter17: WorkerFilter, $order12: WorkerOrder, $first12: Int, $offset12: Int, $filter18: ProjectFilter, $filter19: BoardFilter, $filter20: TaskFilter, $order13: TaskOrder, $first13: Int, $offset13: Int, $filter21: ColumnFilter, $order14: ColumnOrder, $first14: Int, $offset14: Int, $filter22: BoardFilter, $order15: BoardOrder, $first15: Int, $offset15: Int, $input: UpdateBoardInput!) {
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
          workers(filter: $filter1, order: $order, first: $first, offset: $offset) {
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
          workers(filter: $filter5, order: $order2, first: $first2, offset: $offset2) {
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
        workers(filter: $filter17, order: $order12, first: $first12, offset: $offset12) {
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
exports.UpdateBoardComponent = (props) => (<ApolloReactComponents.Mutation mutation={exports.UpdateBoardDocument} {...props}/>);
function withUpdateBoard(operationOptions) {
    return ApolloReactHoc.withMutation(exports.UpdateBoardDocument, Object.assign({ alias: 'updateBoard' }, operationOptions));
}
exports.withUpdateBoard = withUpdateBoard;
;
exports.UpdateColumnDocument = graphql_tag_1.default `
    mutation updateColumn($filter: TagFilter, $order: TagOrder, $first: Int, $offset: Int, $filter1: TaskFilter, $order1: TaskOrder, $first1: Int, $offset1: Int, $filter2: BoardFilter, $order2: BoardOrder, $first2: Int, $offset2: Int, $filter3: WorkerFilter, $order3: WorkerOrder, $first3: Int, $offset3: Int, $filter4: ProjectFilter, $filter5: BoardFilter, $filter6: TaskFilter, $order4: TaskOrder, $first4: Int, $offset4: Int, $filter7: ColumnFilter, $order5: ColumnOrder, $first5: Int, $offset5: Int, $filter8: BoardFilter, $filter9: ProjectFilter, $filter10: ColumnFilter, $filter11: ProjectFilter, $filter12: UserFilter, $order6: UserOrder, $first6: Int, $offset6: Int, $filter13: TagFilter, $order7: TagOrder, $first7: Int, $offset7: Int, $filter14: TaskFilter, $order8: TaskOrder, $first8: Int, $offset8: Int, $filter15: TaskFilter, $order9: TaskOrder, $first9: Int, $offset9: Int, $filter16: WorkerFilter, $order10: WorkerOrder, $first10: Int, $offset10: Int, $filter17: ProjectFilter, $filter18: UserFilter, $order11: UserOrder, $first11: Int, $offset11: Int, $filter19: TagFilter, $order12: TagOrder, $first12: Int, $offset12: Int, $filter20: TaskFilter, $order13: TaskOrder, $first13: Int, $offset13: Int, $filter21: TaskFilter, $order14: TaskOrder, $first14: Int, $offset14: Int, $filter22: WorkerFilter, $order15: WorkerOrder, $first15: Int, $offset15: Int, $filter23: TaskFilter, $filter24: WorkerFilter, $filter25: CommentFilter, $order16: CommentOrder, $first16: Int, $offset16: Int, $filter26: TaskFilter, $order17: TaskOrder, $first17: Int, $offset17: Int, $filter27: ColumnFilter, $order18: ColumnOrder, $first18: Int, $offset18: Int, $input: UpdateColumnInput!) {
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
          workers(filter: $filter3, order: $order3, first: $first3, offset: $offset3) {
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
        workers(filter: $filter16, order: $order10, first: $first10, offset: $offset10) {
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
          worker(filter: $filter24) {
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
exports.UpdateColumnComponent = (props) => (<ApolloReactComponents.Mutation mutation={exports.UpdateColumnDocument} {...props}/>);
function withUpdateColumn(operationOptions) {
    return ApolloReactHoc.withMutation(exports.UpdateColumnDocument, Object.assign({ alias: 'updateColumn' }, operationOptions));
}
exports.withUpdateColumn = withUpdateColumn;
;
exports.UpdateCommentDocument = graphql_tag_1.default `
    mutation updateComment($filter: TagFilter, $order: TagOrder, $first: Int, $offset: Int, $filter1: TaskFilter, $order1: TaskOrder, $first1: Int, $offset1: Int, $filter2: BoardFilter, $order2: BoardOrder, $first2: Int, $offset2: Int, $filter3: WorkerFilter, $order3: WorkerOrder, $first3: Int, $offset3: Int, $filter4: ProjectFilter, $filter5: BoardFilter, $filter6: TaskFilter, $order4: TaskOrder, $first4: Int, $offset4: Int, $filter7: ColumnFilter, $filter8: ProjectFilter, $filter9: UserFilter, $order5: UserOrder, $first5: Int, $offset5: Int, $filter10: TagFilter, $order6: TagOrder, $first6: Int, $offset6: Int, $filter11: TaskFilter, $order7: TaskOrder, $first7: Int, $offset7: Int, $filter12: TaskFilter, $order8: TaskOrder, $first8: Int, $offset8: Int, $filter13: WorkerFilter, $order9: WorkerOrder, $first9: Int, $offset9: Int, $filter14: ProjectFilter, $filter15: UserFilter, $order10: UserOrder, $first10: Int, $offset10: Int, $filter16: TagFilter, $order11: TagOrder, $first11: Int, $offset11: Int, $filter17: TaskFilter, $order12: TaskOrder, $first12: Int, $offset12: Int, $filter18: TaskFilter, $order13: TaskOrder, $first13: Int, $offset13: Int, $filter19: WorkerFilter, $order14: WorkerOrder, $first14: Int, $offset14: Int, $filter20: TaskFilter, $filter21: WorkerFilter, $filter22: CommentFilter, $order15: CommentOrder, $first15: Int, $offset15: Int, $filter23: TaskFilter, $filter24: ProjectFilter, $filter25: WorkerFilter, $order16: WorkerOrder, $first16: Int, $offset16: Int, $filter26: TaskFilter, $order17: TaskOrder, $first17: Int, $offset17: Int, $filter27: UserFilter, $order18: UserOrder, $first18: Int, $offset18: Int, $filter28: ProjectFilter, $filter29: WorkerFilter, $order19: WorkerOrder, $first19: Int, $offset19: Int, $filter30: TagFilter, $order20: TagOrder, $first20: Int, $offset20: Int, $filter31: ProjectFilter, $filter32: ColumnFilter, $filter33: WorkerFilter, $order21: WorkerOrder, $first21: Int, $offset21: Int, $filter34: WorkerFilter, $order22: WorkerOrder, $first22: Int, $offset22: Int, $filter35: CommentFilter, $order23: CommentOrder, $first23: Int, $offset23: Int, $filter36: TaskFilter, $order24: TaskOrder, $first24: Int, $offset24: Int, $filter37: ProjectFilter, $filter38: ColumnFilter, $filter39: WorkerFilter, $order25: WorkerOrder, $first25: Int, $offset25: Int, $filter40: WorkerFilter, $order26: WorkerOrder, $first26: Int, $offset26: Int, $filter41: CommentFilter, $order27: CommentOrder, $first27: Int, $offset27: Int, $filter42: TaskFilter, $order28: TaskOrder, $first28: Int, $offset28: Int, $filter43: WorkerFilter, $filter44: CommentFilter, $order29: CommentOrder, $first29: Int, $offset29: Int, $input: UpdateCommentInput!) {
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
          workers(filter: $filter3, order: $order3, first: $first3, offset: $offset3) {
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
        workers(filter: $filter13, order: $order9, first: $first9, offset: $offset9) {
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
          worker(filter: $filter21) {
            id
            name
            availability
          }
          content
        }
      }
      worker(filter: $filter43) {
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
          workers(filter: $filter29, order: $order19, first: $first19, offset: $offset19) {
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
          workers(filter: $filter33, order: $order21, first: $first21, offset: $offset21) {
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
          workers(filter: $filter39, order: $order25, first: $first25, offset: $offset25) {
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
exports.UpdateCommentComponent = (props) => (<ApolloReactComponents.Mutation mutation={exports.UpdateCommentDocument} {...props}/>);
function withUpdateComment(operationOptions) {
    return ApolloReactHoc.withMutation(exports.UpdateCommentDocument, Object.assign({ alias: 'updateComment' }, operationOptions));
}
exports.withUpdateComment = withUpdateComment;
;
exports.UpdateProjectDocument = graphql_tag_1.default `
    mutation updateProject($filter: TaskFilter, $order: TaskOrder, $first: Int, $offset: Int, $filter1: BoardFilter, $order1: BoardOrder, $first1: Int, $offset1: Int, $filter2: WorkerFilter, $order2: WorkerOrder, $first2: Int, $offset2: Int, $filter3: ProjectFilter, $filter4: ProjectFilter, $filter5: UserFilter, $order3: UserOrder, $first3: Int, $offset3: Int, $filter6: TagFilter, $order4: TagOrder, $first4: Int, $offset4: Int, $filter7: TaskFilter, $order5: TaskOrder, $first5: Int, $offset5: Int, $filter8: TaskFilter, $order6: TaskOrder, $first6: Int, $offset6: Int, $filter9: WorkerFilter, $order7: WorkerOrder, $first7: Int, $offset7: Int, $filter10: TagFilter, $order8: TagOrder, $first8: Int, $offset8: Int, $filter11: ProjectFilter, $order9: ProjectOrder, $first9: Int, $offset9: Int, $input: UpdateProjectInput!) {
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
          workers(filter: $filter2, order: $order2, first: $first2, offset: $offset2) {
            id
            name
            availability
          }
        }
        workers(filter: $filter9, order: $order7, first: $first7, offset: $offset7) {
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
exports.UpdateProjectComponent = (props) => (<ApolloReactComponents.Mutation mutation={exports.UpdateProjectDocument} {...props}/>);
function withUpdateProject(operationOptions) {
    return ApolloReactHoc.withMutation(exports.UpdateProjectDocument, Object.assign({ alias: 'updateProject' }, operationOptions));
}
exports.withUpdateProject = withUpdateProject;
;
exports.UpdateTagDocument = graphql_tag_1.default `
    mutation updateTag($filter: ProjectFilter, $filter1: WorkerFilter, $order: WorkerOrder, $first: Int, $offset: Int, $filter2: TagFilter, $order1: TagOrder, $first1: Int, $offset1: Int, $filter3: ProjectFilter, $filter4: ColumnFilter, $filter5: WorkerFilter, $order2: WorkerOrder, $first2: Int, $offset2: Int, $filter6: WorkerFilter, $order3: WorkerOrder, $first3: Int, $offset3: Int, $filter7: CommentFilter, $order4: CommentOrder, $first4: Int, $offset4: Int, $filter8: TaskFilter, $order5: TaskOrder, $first5: Int, $offset5: Int, $filter9: ProjectFilter, $filter10: ColumnFilter, $order6: ColumnOrder, $first6: Int, $offset6: Int, $filter11: BoardFilter, $order7: BoardOrder, $first7: Int, $offset7: Int, $filter12: ProjectFilter, $filter13: UserFilter, $order8: UserOrder, $first8: Int, $offset8: Int, $filter14: TagFilter, $order9: TagOrder, $first9: Int, $offset9: Int, $filter15: TaskFilter, $order10: TaskOrder, $first10: Int, $offset10: Int, $filter16: TaskFilter, $order11: TaskOrder, $first11: Int, $offset11: Int, $filter17: WorkerFilter, $order12: WorkerOrder, $first12: Int, $offset12: Int, $filter18: ProjectFilter, $filter19: WorkerFilter, $order13: WorkerOrder, $first13: Int, $offset13: Int, $filter20: TagFilter, $order14: TagOrder, $first14: Int, $offset14: Int, $input: UpdateTagInput!) {
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
          workers(filter: $filter1, order: $order, first: $first, offset: $offset) {
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
          workers(filter: $filter5, order: $order2, first: $first2, offset: $offset2) {
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
        workers(filter: $filter17, order: $order12, first: $first12, offset: $offset12) {
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
      workers(filter: $filter19, order: $order13, first: $first13, offset: $offset13) {
        id
        name
        availability
      }
    }
    numUids
  }
}
    `;
exports.UpdateTagComponent = (props) => (<ApolloReactComponents.Mutation mutation={exports.UpdateTagDocument} {...props}/>);
function withUpdateTag(operationOptions) {
    return ApolloReactHoc.withMutation(exports.UpdateTagDocument, Object.assign({ alias: 'updateTag' }, operationOptions));
}
exports.withUpdateTag = withUpdateTag;
;
exports.UpdateTaskDocument = graphql_tag_1.default `
    mutation updateTask($filter: ProjectFilter, $filter1: WorkerFilter, $order: WorkerOrder, $first: Int, $offset: Int, $filter2: TagFilter, $order1: TagOrder, $first1: Int, $offset1: Int, $filter3: ProjectFilter, $filter4: ColumnFilter, $filter5: WorkerFilter, $order2: WorkerOrder, $first2: Int, $offset2: Int, $filter6: WorkerFilter, $order3: WorkerOrder, $first3: Int, $offset3: Int, $filter7: CommentFilter, $order4: CommentOrder, $first4: Int, $offset4: Int, $filter8: TaskFilter, $order5: TaskOrder, $first5: Int, $offset5: Int, $filter9: ProjectFilter, $filter10: ColumnFilter, $order6: ColumnOrder, $first6: Int, $offset6: Int, $filter11: BoardFilter, $order7: BoardOrder, $first7: Int, $offset7: Int, $filter12: ProjectFilter, $filter13: UserFilter, $order8: UserOrder, $first8: Int, $offset8: Int, $filter14: TagFilter, $order9: TagOrder, $first9: Int, $offset9: Int, $filter15: TaskFilter, $order10: TaskOrder, $first10: Int, $offset10: Int, $filter16: TaskFilter, $order11: TaskOrder, $first11: Int, $offset11: Int, $filter17: WorkerFilter, $order12: WorkerOrder, $first12: Int, $offset12: Int, $filter18: ProjectFilter, $filter19: ProjectFilter, $filter20: ColumnFilter, $order13: ColumnOrder, $first13: Int, $offset13: Int, $filter21: BoardFilter, $filter22: TaskFilter, $order14: TaskOrder, $first14: Int, $offset14: Int, $filter23: ColumnFilter, $filter24: WorkerFilter, $order15: WorkerOrder, $first15: Int, $offset15: Int, $filter25: ProjectFilter, $filter26: WorkerFilter, $order16: WorkerOrder, $first16: Int, $offset16: Int, $filter27: TaskFilter, $order17: TaskOrder, $first17: Int, $offset17: Int, $filter28: UserFilter, $order18: UserOrder, $first18: Int, $offset18: Int, $filter29: TagFilter, $order19: TagOrder, $first19: Int, $offset19: Int, $filter30: TaskFilter, $order20: TaskOrder, $first20: Int, $offset20: Int, $filter31: ProjectFilter, $filter32: ColumnFilter, $filter33: WorkerFilter, $order21: WorkerOrder, $first21: Int, $offset21: Int, $filter34: WorkerFilter, $order22: WorkerOrder, $first22: Int, $offset22: Int, $filter35: CommentFilter, $order23: CommentOrder, $first23: Int, $offset23: Int, $filter36: TaskFilter, $order24: TaskOrder, $first24: Int, $offset24: Int, $filter37: WorkerFilter, $order25: WorkerOrder, $first25: Int, $offset25: Int, $filter38: TaskFilter, $filter39: ProjectFilter, $filter40: UserFilter, $order26: UserOrder, $first26: Int, $offset26: Int, $filter41: TagFilter, $order27: TagOrder, $first27: Int, $offset27: Int, $filter42: TaskFilter, $order28: TaskOrder, $first28: Int, $offset28: Int, $filter43: TaskFilter, $order29: TaskOrder, $first29: Int, $offset29: Int, $filter44: WorkerFilter, $filter45: CommentFilter, $order30: CommentOrder, $first30: Int, $offset30: Int, $filter46: TaskFilter, $order31: TaskOrder, $first31: Int, $offset31: Int, $input: UpdateTaskInput!) {
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
          workers(filter: $filter1, order: $order, first: $first, offset: $offset) {
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
          workers(filter: $filter5, order: $order2, first: $first2, offset: $offset2) {
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
        workers(filter: $filter17, order: $order12, first: $first12, offset: $offset12) {
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
      workers(filter: $filter24, order: $order15, first: $first15, offset: $offset15) {
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
          workers(filter: $filter33, order: $order21, first: $first21, offset: $offset21) {
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
        worker(filter: $filter44) {
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
exports.UpdateTaskComponent = (props) => (<ApolloReactComponents.Mutation mutation={exports.UpdateTaskDocument} {...props}/>);
function withUpdateTask(operationOptions) {
    return ApolloReactHoc.withMutation(exports.UpdateTaskDocument, Object.assign({ alias: 'updateTask' }, operationOptions));
}
exports.withUpdateTask = withUpdateTask;
;
exports.UpdateUserDocument = graphql_tag_1.default `
    mutation updateUser($filter: TagFilter, $order: TagOrder, $first: Int, $offset: Int, $filter1: TaskFilter, $order1: TaskOrder, $first1: Int, $offset1: Int, $filter2: BoardFilter, $order2: BoardOrder, $first2: Int, $offset2: Int, $filter3: WorkerFilter, $order3: WorkerOrder, $first3: Int, $offset3: Int, $filter4: ProjectFilter, $filter5: TaskFilter, $order4: TaskOrder, $first4: Int, $offset4: Int, $filter6: UserFilter, $order5: UserOrder, $first5: Int, $offset5: Int, $filter7: ProjectFilter, $filter8: WorkerFilter, $order6: WorkerOrder, $first6: Int, $offset6: Int, $filter9: TagFilter, $order7: TagOrder, $first7: Int, $offset7: Int, $filter10: ProjectFilter, $filter11: ColumnFilter, $filter12: WorkerFilter, $order8: WorkerOrder, $first8: Int, $offset8: Int, $filter13: WorkerFilter, $order9: WorkerOrder, $first9: Int, $offset9: Int, $filter14: CommentFilter, $order10: CommentOrder, $first10: Int, $offset10: Int, $filter15: TaskFilter, $order11: TaskOrder, $first11: Int, $offset11: Int, $filter16: ProjectFilter, $filter17: ColumnFilter, $filter18: WorkerFilter, $order12: WorkerOrder, $first12: Int, $offset12: Int, $filter19: WorkerFilter, $order13: WorkerOrder, $first13: Int, $offset13: Int, $filter20: CommentFilter, $order14: CommentOrder, $first14: Int, $offset14: Int, $filter21: TaskFilter, $order15: TaskOrder, $first15: Int, $offset15: Int, $filter22: WorkerFilter, $order16: WorkerOrder, $first16: Int, $offset16: Int, $filter23: UserFilter, $order17: UserOrder, $first17: Int, $offset17: Int, $input: UpdateUserInput!) {
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
          workers(filter: $filter3, order: $order3, first: $first3, offset: $offset3) {
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
          workers(filter: $filter8, order: $order6, first: $first6, offset: $offset6) {
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
          workers(filter: $filter12, order: $order8, first: $first8, offset: $offset8) {
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
          workers(filter: $filter18, order: $order12, first: $first12, offset: $offset12) {
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
exports.UpdateUserComponent = (props) => (<ApolloReactComponents.Mutation mutation={exports.UpdateUserDocument} {...props}/>);
function withUpdateUser(operationOptions) {
    return ApolloReactHoc.withMutation(exports.UpdateUserDocument, Object.assign({ alias: 'updateUser' }, operationOptions));
}
exports.withUpdateUser = withUpdateUser;
;
exports.UpdateWorkerDocument = graphql_tag_1.default `
    mutation updateWorker($filter: ProjectFilter, $filter1: WorkerFilter, $order: WorkerOrder, $first: Int, $offset: Int, $filter2: TagFilter, $order1: TagOrder, $first1: Int, $offset1: Int, $filter3: ProjectFilter, $filter4: ColumnFilter, $filter5: WorkerFilter, $order2: WorkerOrder, $first2: Int, $offset2: Int, $filter6: WorkerFilter, $order3: WorkerOrder, $first3: Int, $offset3: Int, $filter7: CommentFilter, $order4: CommentOrder, $first4: Int, $offset4: Int, $filter8: TaskFilter, $order5: TaskOrder, $first5: Int, $offset5: Int, $filter9: ProjectFilter, $filter10: ColumnFilter, $order6: ColumnOrder, $first6: Int, $offset6: Int, $filter11: BoardFilter, $order7: BoardOrder, $first7: Int, $offset7: Int, $filter12: ProjectFilter, $filter13: UserFilter, $order8: UserOrder, $first8: Int, $offset8: Int, $filter14: TagFilter, $order9: TagOrder, $first9: Int, $offset9: Int, $filter15: TaskFilter, $order10: TaskOrder, $first10: Int, $offset10: Int, $filter16: TaskFilter, $order11: TaskOrder, $first11: Int, $offset11: Int, $filter17: WorkerFilter, $order12: WorkerOrder, $first12: Int, $offset12: Int, $filter18: ProjectFilter, $filter19: ProjectFilter, $filter20: UserFilter, $order13: UserOrder, $first13: Int, $offset13: Int, $filter21: TagFilter, $order14: TagOrder, $first14: Int, $offset14: Int, $filter22: TaskFilter, $order15: TaskOrder, $first15: Int, $offset15: Int, $filter23: TaskFilter, $order16: TaskOrder, $first16: Int, $offset16: Int, $filter24: WorkerFilter, $order17: WorkerOrder, $first17: Int, $offset17: Int, $filter25: ProjectFilter, $filter26: ColumnFilter, $filter27: WorkerFilter, $order18: WorkerOrder, $first18: Int, $offset18: Int, $filter28: WorkerFilter, $order19: WorkerOrder, $first19: Int, $offset19: Int, $filter29: CommentFilter, $order20: CommentOrder, $first20: Int, $offset20: Int, $filter30: TaskFilter, $order21: TaskOrder, $first21: Int, $offset21: Int, $filter31: UserFilter, $order22: UserOrder, $first22: Int, $offset22: Int, $filter32: TagFilter, $order23: TagOrder, $first23: Int, $offset23: Int, $filter33: TaskFilter, $order24: TaskOrder, $first24: Int, $offset24: Int, $filter34: ProjectFilter, $filter35: BoardFilter, $filter36: TaskFilter, $order25: TaskOrder, $first25: Int, $offset25: Int, $filter37: ColumnFilter, $filter38: WorkerFilter, $order26: WorkerOrder, $first26: Int, $offset26: Int, $filter39: ProjectFilter, $filter40: UserFilter, $order27: UserOrder, $first27: Int, $offset27: Int, $filter41: TagFilter, $order28: TagOrder, $first28: Int, $offset28: Int, $filter42: TaskFilter, $order29: TaskOrder, $first29: Int, $offset29: Int, $filter43: TaskFilter, $order30: TaskOrder, $first30: Int, $offset30: Int, $filter44: WorkerFilter, $order31: WorkerOrder, $first31: Int, $offset31: Int, $filter45: TaskFilter, $filter46: WorkerFilter, $filter47: CommentFilter, $order32: CommentOrder, $first32: Int, $offset32: Int, $filter48: TaskFilter, $order33: TaskOrder, $first33: Int, $offset33: Int, $filter49: WorkerFilter, $order34: WorkerOrder, $first34: Int, $offset34: Int, $input: UpdateWorkerInput!) {
  updateWorker(input: $input) {
    worker(filter: $filter49, order: $order34, first: $first34, offset: $offset34) {
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
          workers(filter: $filter1, order: $order, first: $first, offset: $offset) {
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
          workers(filter: $filter5, order: $order2, first: $first2, offset: $offset2) {
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
        workers(filter: $filter17, order: $order12, first: $first12, offset: $offset12) {
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
          workers(filter: $filter27, order: $order18, first: $first18, offset: $offset18) {
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
        workers(filter: $filter38, order: $order26, first: $first26, offset: $offset26) {
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
          worker(filter: $filter46) {
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
exports.UpdateWorkerComponent = (props) => (<ApolloReactComponents.Mutation mutation={exports.UpdateWorkerDocument} {...props}/>);
function withUpdateWorker(operationOptions) {
    return ApolloReactHoc.withMutation(exports.UpdateWorkerDocument, Object.assign({ alias: 'updateWorker' }, operationOptions));
}
exports.withUpdateWorker = withUpdateWorker;
;
exports.GetBoardDocument = graphql_tag_1.default `
    query getBoard($filter: TaskFilter, $order: TaskOrder, $first: Int, $offset: Int, $filter1: BoardFilter, $order1: BoardOrder, $first1: Int, $offset1: Int, $filter2: WorkerFilter, $order2: WorkerOrder, $first2: Int, $offset2: Int, $filter3: ProjectFilter, $filter4: ProjectFilter, $filter5: UserFilter, $order3: UserOrder, $first3: Int, $offset3: Int, $filter6: TagFilter, $order4: TagOrder, $first4: Int, $offset4: Int, $filter7: TaskFilter, $order5: TaskOrder, $first5: Int, $offset5: Int, $filter8: TaskFilter, $order6: TaskOrder, $first6: Int, $offset6: Int, $filter9: WorkerFilter, $order7: WorkerOrder, $first7: Int, $offset7: Int, $filter10: TagFilter, $order8: TagOrder, $first8: Int, $offset8: Int, $filter11: ProjectFilter, $filter12: ProjectFilter, $filter13: TaskFilter, $order9: TaskOrder, $first9: Int, $offset9: Int, $filter14: ColumnFilter, $order10: ColumnOrder, $first10: Int, $offset10: Int, $filter15: BoardFilter, $filter16: ColumnFilter, $order11: ColumnOrder, $first11: Int, $offset11: Int, $id: ID!) {
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
          workers(filter: $filter2, order: $order2, first: $first2, offset: $offset2) {
            id
            name
            availability
          }
        }
        workers(filter: $filter9, order: $order7, first: $first7, offset: $offset7) {
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
exports.GetBoardComponent = (props) => (<ApolloReactComponents.Query query={exports.GetBoardDocument} {...props}/>);
function withGetBoard(operationOptions) {
    return ApolloReactHoc.withQuery(exports.GetBoardDocument, Object.assign({ alias: 'getBoard' }, operationOptions));
}
exports.withGetBoard = withGetBoard;
;
exports.GetColumnDocument = graphql_tag_1.default `
    query getColumn($filter: ProjectFilter, $filter1: WorkerFilter, $order: WorkerOrder, $first: Int, $offset: Int, $filter2: TagFilter, $order1: TagOrder, $first1: Int, $offset1: Int, $filter3: ProjectFilter, $filter4: ColumnFilter, $filter5: WorkerFilter, $order2: WorkerOrder, $first2: Int, $offset2: Int, $filter6: WorkerFilter, $order3: WorkerOrder, $first3: Int, $offset3: Int, $filter7: CommentFilter, $order4: CommentOrder, $first4: Int, $offset4: Int, $filter8: TaskFilter, $order5: TaskOrder, $first5: Int, $offset5: Int, $filter9: ProjectFilter, $filter10: ColumnFilter, $order6: ColumnOrder, $first6: Int, $offset6: Int, $filter11: BoardFilter, $order7: BoardOrder, $first7: Int, $offset7: Int, $filter12: ProjectFilter, $filter13: UserFilter, $order8: UserOrder, $first8: Int, $offset8: Int, $filter14: TagFilter, $order9: TagOrder, $first9: Int, $offset9: Int, $filter15: TaskFilter, $order10: TaskOrder, $first10: Int, $offset10: Int, $filter16: TaskFilter, $order11: TaskOrder, $first11: Int, $offset11: Int, $filter17: WorkerFilter, $order12: WorkerOrder, $first12: Int, $offset12: Int, $filter18: ProjectFilter, $filter19: BoardFilter, $filter20: TaskFilter, $order13: TaskOrder, $first13: Int, $offset13: Int, $filter21: ColumnFilter, $order14: ColumnOrder, $first14: Int, $offset14: Int, $filter22: BoardFilter, $filter23: TaskFilter, $order15: TaskOrder, $first15: Int, $offset15: Int, $id: ID!) {
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
          workers(filter: $filter1, order: $order, first: $first, offset: $offset) {
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
          workers(filter: $filter5, order: $order2, first: $first2, offset: $offset2) {
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
        workers(filter: $filter17, order: $order12, first: $first12, offset: $offset12) {
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
exports.GetColumnComponent = (props) => (<ApolloReactComponents.Query query={exports.GetColumnDocument} {...props}/>);
function withGetColumn(operationOptions) {
    return ApolloReactHoc.withQuery(exports.GetColumnDocument, Object.assign({ alias: 'getColumn' }, operationOptions));
}
exports.withGetColumn = withGetColumn;
;
exports.GetCommentDocument = graphql_tag_1.default `
    query getComment($filter: ProjectFilter, $filter1: WorkerFilter, $order: WorkerOrder, $first: Int, $offset: Int, $filter2: TagFilter, $order1: TagOrder, $first1: Int, $offset1: Int, $filter3: ProjectFilter, $filter4: ColumnFilter, $filter5: WorkerFilter, $order2: WorkerOrder, $first2: Int, $offset2: Int, $filter6: WorkerFilter, $order3: WorkerOrder, $first3: Int, $offset3: Int, $filter7: CommentFilter, $order4: CommentOrder, $first4: Int, $offset4: Int, $filter8: TaskFilter, $order5: TaskOrder, $first5: Int, $offset5: Int, $filter9: ProjectFilter, $filter10: ColumnFilter, $order6: ColumnOrder, $first6: Int, $offset6: Int, $filter11: BoardFilter, $order7: BoardOrder, $first7: Int, $offset7: Int, $filter12: ProjectFilter, $filter13: UserFilter, $order8: UserOrder, $first8: Int, $offset8: Int, $filter14: TagFilter, $order9: TagOrder, $first9: Int, $offset9: Int, $filter15: TaskFilter, $order10: TaskOrder, $first10: Int, $offset10: Int, $filter16: TaskFilter, $order11: TaskOrder, $first11: Int, $offset11: Int, $filter17: WorkerFilter, $order12: WorkerOrder, $first12: Int, $offset12: Int, $filter18: ProjectFilter, $filter19: ProjectFilter, $filter20: ColumnFilter, $order13: ColumnOrder, $first13: Int, $offset13: Int, $filter21: BoardFilter, $filter22: TaskFilter, $order14: TaskOrder, $first14: Int, $offset14: Int, $filter23: ColumnFilter, $filter24: WorkerFilter, $order15: WorkerOrder, $first15: Int, $offset15: Int, $filter25: ProjectFilter, $filter26: WorkerFilter, $order16: WorkerOrder, $first16: Int, $offset16: Int, $filter27: TaskFilter, $order17: TaskOrder, $first17: Int, $offset17: Int, $filter28: UserFilter, $order18: UserOrder, $first18: Int, $offset18: Int, $filter29: TagFilter, $order19: TagOrder, $first19: Int, $offset19: Int, $filter30: TaskFilter, $order20: TaskOrder, $first20: Int, $offset20: Int, $filter31: ProjectFilter, $filter32: ColumnFilter, $filter33: WorkerFilter, $order21: WorkerOrder, $first21: Int, $offset21: Int, $filter34: WorkerFilter, $order22: WorkerOrder, $first22: Int, $offset22: Int, $filter35: CommentFilter, $order23: CommentOrder, $first23: Int, $offset23: Int, $filter36: TaskFilter, $order24: TaskOrder, $first24: Int, $offset24: Int, $filter37: WorkerFilter, $order25: WorkerOrder, $first25: Int, $offset25: Int, $filter38: TaskFilter, $filter39: ProjectFilter, $filter40: UserFilter, $order26: UserOrder, $first26: Int, $offset26: Int, $filter41: TagFilter, $order27: TagOrder, $first27: Int, $offset27: Int, $filter42: TaskFilter, $order28: TaskOrder, $first28: Int, $offset28: Int, $filter43: TaskFilter, $order29: TaskOrder, $first29: Int, $offset29: Int, $filter44: WorkerFilter, $filter45: CommentFilter, $order30: CommentOrder, $first30: Int, $offset30: Int, $filter46: TaskFilter, $filter47: WorkerFilter, $id: ID!) {
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
          workers(filter: $filter1, order: $order, first: $first, offset: $offset) {
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
          workers(filter: $filter5, order: $order2, first: $first2, offset: $offset2) {
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
        workers(filter: $filter17, order: $order12, first: $first12, offset: $offset12) {
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
      workers(filter: $filter24, order: $order15, first: $first15, offset: $offset15) {
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
          workers(filter: $filter33, order: $order21, first: $first21, offset: $offset21) {
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
        worker(filter: $filter44) {
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
    worker(filter: $filter47) {
      id
      name
      availability
    }
    content
  }
}
    `;
exports.GetCommentComponent = (props) => (<ApolloReactComponents.Query query={exports.GetCommentDocument} {...props}/>);
function withGetComment(operationOptions) {
    return ApolloReactHoc.withQuery(exports.GetCommentDocument, Object.assign({ alias: 'getComment' }, operationOptions));
}
exports.withGetComment = withGetComment;
;
exports.GetProjectDocument = graphql_tag_1.default `
    query getProject($filter: WorkerFilter, $order: WorkerOrder, $first: Int, $offset: Int, $filter1: TagFilter, $order1: TagOrder, $first1: Int, $offset1: Int, $filter2: ProjectFilter, $filter3: ColumnFilter, $filter4: WorkerFilter, $order2: WorkerOrder, $first2: Int, $offset2: Int, $filter5: WorkerFilter, $order3: WorkerOrder, $first3: Int, $offset3: Int, $filter6: CommentFilter, $order4: CommentOrder, $first4: Int, $offset4: Int, $filter7: TaskFilter, $order5: TaskOrder, $first5: Int, $offset5: Int, $filter8: ProjectFilter, $filter9: ColumnFilter, $order6: ColumnOrder, $first6: Int, $offset6: Int, $filter10: BoardFilter, $order7: BoardOrder, $first7: Int, $offset7: Int, $filter11: ProjectFilter, $filter12: UserFilter, $order8: UserOrder, $first8: Int, $offset8: Int, $filter13: TagFilter, $order9: TagOrder, $first9: Int, $offset9: Int, $filter14: TaskFilter, $order10: TaskOrder, $first10: Int, $offset10: Int, $filter15: TaskFilter, $order11: TaskOrder, $first11: Int, $offset11: Int, $filter16: WorkerFilter, $order12: WorkerOrder, $first12: Int, $offset12: Int, $filter17: ProjectFilter, $filter18: TagFilter, $order13: TagOrder, $first13: Int, $offset13: Int, $filter19: TaskFilter, $order14: TaskOrder, $first14: Int, $offset14: Int, $filter20: BoardFilter, $order15: BoardOrder, $first15: Int, $offset15: Int, $filter21: WorkerFilter, $order16: WorkerOrder, $first16: Int, $offset16: Int, $id: ID!) {
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
          workers(filter: $filter, order: $order, first: $first, offset: $offset) {
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
          workers(filter: $filter4, order: $order2, first: $first2, offset: $offset2) {
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
        workers(filter: $filter16, order: $order12, first: $first12, offset: $offset12) {
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
    workers(filter: $filter21, order: $order16, first: $first16, offset: $offset16) {
      id
      name
      availability
    }
  }
}
    `;
exports.GetProjectComponent = (props) => (<ApolloReactComponents.Query query={exports.GetProjectDocument} {...props}/>);
function withGetProject(operationOptions) {
    return ApolloReactHoc.withQuery(exports.GetProjectDocument, Object.assign({ alias: 'getProject' }, operationOptions));
}
exports.withGetProject = withGetProject;
;
exports.GetTagDocument = graphql_tag_1.default `
    query getTag($filter: TaskFilter, $order: TaskOrder, $first: Int, $offset: Int, $filter1: BoardFilter, $order1: BoardOrder, $first1: Int, $offset1: Int, $filter2: WorkerFilter, $order2: WorkerOrder, $first2: Int, $offset2: Int, $filter3: ProjectFilter, $filter4: ProjectFilter, $filter5: UserFilter, $order3: UserOrder, $first3: Int, $offset3: Int, $filter6: TagFilter, $order4: TagOrder, $first4: Int, $offset4: Int, $filter7: TaskFilter, $order5: TaskOrder, $first5: Int, $offset5: Int, $filter8: TaskFilter, $order6: TaskOrder, $first6: Int, $offset6: Int, $filter9: WorkerFilter, $order7: WorkerOrder, $first7: Int, $offset7: Int, $filter10: TagFilter, $order8: TagOrder, $first8: Int, $offset8: Int, $filter11: ProjectFilter, $filter12: WorkerFilter, $order9: WorkerOrder, $first9: Int, $offset9: Int, $id: ID!) {
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
          workers(filter: $filter2, order: $order2, first: $first2, offset: $offset2) {
            id
            name
            availability
          }
        }
        workers(filter: $filter9, order: $order7, first: $first7, offset: $offset7) {
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
    workers(filter: $filter12, order: $order9, first: $first9, offset: $offset9) {
      id
      name
      availability
    }
  }
}
    `;
exports.GetTagComponent = (props) => (<ApolloReactComponents.Query query={exports.GetTagDocument} {...props}/>);
function withGetTag(operationOptions) {
    return ApolloReactHoc.withQuery(exports.GetTagDocument, Object.assign({ alias: 'getTag' }, operationOptions));
}
exports.withGetTag = withGetTag;
;
exports.GetTaskDocument = graphql_tag_1.default `
    query getTask($filter: TaskFilter, $order: TaskOrder, $first: Int, $offset: Int, $filter1: BoardFilter, $order1: BoardOrder, $first1: Int, $offset1: Int, $filter2: WorkerFilter, $order2: WorkerOrder, $first2: Int, $offset2: Int, $filter3: ProjectFilter, $filter4: ProjectFilter, $filter5: UserFilter, $order3: UserOrder, $first3: Int, $offset3: Int, $filter6: TagFilter, $order4: TagOrder, $first4: Int, $offset4: Int, $filter7: TaskFilter, $order5: TaskOrder, $first5: Int, $offset5: Int, $filter8: TaskFilter, $order6: TaskOrder, $first6: Int, $offset6: Int, $filter9: WorkerFilter, $order7: WorkerOrder, $first7: Int, $offset7: Int, $filter10: TagFilter, $order8: TagOrder, $first8: Int, $offset8: Int, $filter11: ProjectFilter, $filter12: ProjectFilter, $filter13: BoardFilter, $filter14: TaskFilter, $order9: TaskOrder, $first9: Int, $offset9: Int, $filter15: ColumnFilter, $order10: ColumnOrder, $first10: Int, $offset10: Int, $filter16: BoardFilter, $filter17: ProjectFilter, $filter18: ColumnFilter, $filter19: WorkerFilter, $order11: WorkerOrder, $first11: Int, $offset11: Int, $filter20: ProjectFilter, $filter21: UserFilter, $order12: UserOrder, $first12: Int, $offset12: Int, $filter22: TagFilter, $order13: TagOrder, $first13: Int, $offset13: Int, $filter23: TaskFilter, $order14: TaskOrder, $first14: Int, $offset14: Int, $filter24: TaskFilter, $order15: TaskOrder, $first15: Int, $offset15: Int, $filter25: WorkerFilter, $order16: WorkerOrder, $first16: Int, $offset16: Int, $filter26: TaskFilter, $filter27: WorkerFilter, $filter28: CommentFilter, $order17: CommentOrder, $first17: Int, $offset17: Int, $filter29: TaskFilter, $order18: TaskOrder, $first18: Int, $offset18: Int, $filter30: ColumnFilter, $filter31: WorkerFilter, $order19: WorkerOrder, $first19: Int, $offset19: Int, $filter32: WorkerFilter, $order20: WorkerOrder, $first20: Int, $offset20: Int, $filter33: CommentFilter, $order21: CommentOrder, $first21: Int, $offset21: Int, $id: ID!) {
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
          workers(filter: $filter2, order: $order2, first: $first2, offset: $offset2) {
            id
            name
            availability
          }
        }
        workers(filter: $filter9, order: $order7, first: $first7, offset: $offset7) {
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
        workers(filter: $filter19, order: $order11, first: $first11, offset: $offset11) {
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
          worker(filter: $filter27) {
            id
            name
            availability
          }
          content
        }
      }
    }
    title
    workers(filter: $filter31, order: $order19, first: $first19, offset: $offset19) {
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
exports.GetTaskComponent = (props) => (<ApolloReactComponents.Query query={exports.GetTaskDocument} {...props}/>);
function withGetTask(operationOptions) {
    return ApolloReactHoc.withQuery(exports.GetTaskDocument, Object.assign({ alias: 'getTask' }, operationOptions));
}
exports.withGetTask = withGetTask;
;
exports.GetUserDocument = graphql_tag_1.default `
    query getUser($filter: ProjectFilter, $filter1: WorkerFilter, $order: WorkerOrder, $first: Int, $offset: Int, $filter2: TagFilter, $order1: TagOrder, $first1: Int, $offset1: Int, $filter3: ProjectFilter, $filter4: ColumnFilter, $filter5: WorkerFilter, $order2: WorkerOrder, $first2: Int, $offset2: Int, $filter6: WorkerFilter, $order3: WorkerOrder, $first3: Int, $offset3: Int, $filter7: CommentFilter, $order4: CommentOrder, $first4: Int, $offset4: Int, $filter8: TaskFilter, $order5: TaskOrder, $first5: Int, $offset5: Int, $filter9: ProjectFilter, $filter10: ColumnFilter, $order6: ColumnOrder, $first6: Int, $offset6: Int, $filter11: BoardFilter, $order7: BoardOrder, $first7: Int, $offset7: Int, $filter12: ProjectFilter, $filter13: UserFilter, $order8: UserOrder, $first8: Int, $offset8: Int, $filter14: TagFilter, $order9: TagOrder, $first9: Int, $offset9: Int, $filter15: TaskFilter, $order10: TaskOrder, $first10: Int, $offset10: Int, $filter16: TaskFilter, $order11: TaskOrder, $first11: Int, $offset11: Int, $filter17: WorkerFilter, $order12: WorkerOrder, $first12: Int, $offset12: Int, $filter18: ProjectFilter, $filter19: TagFilter, $order13: TagOrder, $first13: Int, $offset13: Int, $filter20: TaskFilter, $order14: TaskOrder, $first14: Int, $offset14: Int, $filter21: TaskFilter, $order15: TaskOrder, $first15: Int, $offset15: Int, $filter22: WorkerFilter, $order16: WorkerOrder, $first16: Int, $offset16: Int, $filter23: ProjectFilter, $filter24: ColumnFilter, $filter25: WorkerFilter, $order17: WorkerOrder, $first17: Int, $offset17: Int, $filter26: WorkerFilter, $order18: WorkerOrder, $first18: Int, $offset18: Int, $filter27: CommentFilter, $order19: CommentOrder, $first19: Int, $offset19: Int, $filter28: TaskFilter, $order20: TaskOrder, $first20: Int, $offset20: Int, $filter29: UserFilter, $order21: UserOrder, $first21: Int, $offset21: Int, $filter30: WorkerFilter, $order22: WorkerOrder, $first22: Int, $offset22: Int, $filter31: TaskFilter, $order23: TaskOrder, $first23: Int, $offset23: Int, $id: ID!) {
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
          workers(filter: $filter1, order: $order, first: $first, offset: $offset) {
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
          workers(filter: $filter5, order: $order2, first: $first2, offset: $offset2) {
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
        workers(filter: $filter17, order: $order12, first: $first12, offset: $offset12) {
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
          workers(filter: $filter25, order: $order17, first: $first17, offset: $offset17) {
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
exports.GetUserComponent = (props) => (<ApolloReactComponents.Query query={exports.GetUserDocument} {...props}/>);
function withGetUser(operationOptions) {
    return ApolloReactHoc.withQuery(exports.GetUserDocument, Object.assign({ alias: 'getUser' }, operationOptions));
}
exports.withGetUser = withGetUser;
;
exports.GetWorkerDocument = graphql_tag_1.default `
    query getWorker($filter: TaskFilter, $order: TaskOrder, $first: Int, $offset: Int, $filter1: BoardFilter, $order1: BoardOrder, $first1: Int, $offset1: Int, $filter2: WorkerFilter, $order2: WorkerOrder, $first2: Int, $offset2: Int, $filter3: ProjectFilter, $filter4: ProjectFilter, $filter5: UserFilter, $order3: UserOrder, $first3: Int, $offset3: Int, $filter6: TagFilter, $order4: TagOrder, $first4: Int, $offset4: Int, $filter7: TaskFilter, $order5: TaskOrder, $first5: Int, $offset5: Int, $filter8: TaskFilter, $order6: TaskOrder, $first6: Int, $offset6: Int, $filter9: WorkerFilter, $order7: WorkerOrder, $first7: Int, $offset7: Int, $filter10: TagFilter, $order8: TagOrder, $first8: Int, $offset8: Int, $filter11: ProjectFilter, $filter12: ProjectFilter, $filter13: TaskFilter, $order9: TaskOrder, $first9: Int, $offset9: Int, $filter14: UserFilter, $order10: UserOrder, $first10: Int, $offset10: Int, $filter15: TagFilter, $order11: TagOrder, $first11: Int, $offset11: Int, $filter16: ProjectFilter, $filter17: ColumnFilter, $filter18: WorkerFilter, $order12: WorkerOrder, $first12: Int, $offset12: Int, $filter19: WorkerFilter, $order13: WorkerOrder, $first13: Int, $offset13: Int, $filter20: CommentFilter, $order14: CommentOrder, $first14: Int, $offset14: Int, $filter21: TaskFilter, $order15: TaskOrder, $first15: Int, $offset15: Int, $filter22: ProjectFilter, $filter23: ColumnFilter, $filter24: WorkerFilter, $order16: WorkerOrder, $first16: Int, $offset16: Int, $filter25: WorkerFilter, $order17: WorkerOrder, $first17: Int, $offset17: Int, $filter26: CommentFilter, $order18: CommentOrder, $first18: Int, $offset18: Int, $filter27: TaskFilter, $order19: TaskOrder, $first19: Int, $offset19: Int, $filter28: WorkerFilter, $order20: WorkerOrder, $first20: Int, $offset20: Int, $filter29: UserFilter, $order21: UserOrder, $first21: Int, $offset21: Int, $filter30: TagFilter, $order22: TagOrder, $first22: Int, $offset22: Int, $filter31: TaskFilter, $order23: TaskOrder, $first23: Int, $offset23: Int, $filter32: TaskFilter, $order24: TaskOrder, $first24: Int, $offset24: Int, $id: ID!) {
  getWorker(id: $id) {
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
          workers(filter: $filter2, order: $order2, first: $first2, offset: $offset2) {
            id
            name
            availability
          }
        }
        workers(filter: $filter9, order: $order7, first: $first7, offset: $offset7) {
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
          workers(filter: $filter18, order: $order12, first: $first12, offset: $offset12) {
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
          workers(filter: $filter24, order: $order16, first: $first16, offset: $offset16) {
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
exports.GetWorkerComponent = (props) => (<ApolloReactComponents.Query query={exports.GetWorkerDocument} {...props}/>);
function withGetWorker(operationOptions) {
    return ApolloReactHoc.withQuery(exports.GetWorkerDocument, Object.assign({ alias: 'getWorker' }, operationOptions));
}
exports.withGetWorker = withGetWorker;
;
exports.QueryBoardDocument = graphql_tag_1.default `
    query queryBoard($filter: TaskFilter, $order: TaskOrder, $first: Int, $offset: Int, $filter1: BoardFilter, $order1: BoardOrder, $first1: Int, $offset1: Int, $filter2: WorkerFilter, $order2: WorkerOrder, $first2: Int, $offset2: Int, $filter3: ProjectFilter, $filter4: ProjectFilter, $filter5: UserFilter, $order3: UserOrder, $first3: Int, $offset3: Int, $filter6: TagFilter, $order4: TagOrder, $first4: Int, $offset4: Int, $filter7: TaskFilter, $order5: TaskOrder, $first5: Int, $offset5: Int, $filter8: TaskFilter, $order6: TaskOrder, $first6: Int, $offset6: Int, $filter9: WorkerFilter, $order7: WorkerOrder, $first7: Int, $offset7: Int, $filter10: TagFilter, $order8: TagOrder, $first8: Int, $offset8: Int, $filter11: ProjectFilter, $filter12: ProjectFilter, $filter13: TaskFilter, $order9: TaskOrder, $first9: Int, $offset9: Int, $filter14: ColumnFilter, $order10: ColumnOrder, $first10: Int, $offset10: Int, $filter15: BoardFilter, $filter16: ColumnFilter, $order11: ColumnOrder, $first11: Int, $offset11: Int, $filter17: BoardFilter, $order12: BoardOrder, $first12: Int, $offset12: Int) {
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
          workers(filter: $filter2, order: $order2, first: $first2, offset: $offset2) {
            id
            name
            availability
          }
        }
        workers(filter: $filter9, order: $order7, first: $first7, offset: $offset7) {
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
exports.QueryBoardComponent = (props) => (<ApolloReactComponents.Query query={exports.QueryBoardDocument} {...props}/>);
function withQueryBoard(operationOptions) {
    return ApolloReactHoc.withQuery(exports.QueryBoardDocument, Object.assign({ alias: 'queryBoard' }, operationOptions));
}
exports.withQueryBoard = withQueryBoard;
;
exports.QueryColumnDocument = graphql_tag_1.default `
    query queryColumn($filter: ProjectFilter, $filter1: WorkerFilter, $order: WorkerOrder, $first: Int, $offset: Int, $filter2: TagFilter, $order1: TagOrder, $first1: Int, $offset1: Int, $filter3: ProjectFilter, $filter4: ColumnFilter, $filter5: WorkerFilter, $order2: WorkerOrder, $first2: Int, $offset2: Int, $filter6: WorkerFilter, $order3: WorkerOrder, $first3: Int, $offset3: Int, $filter7: CommentFilter, $order4: CommentOrder, $first4: Int, $offset4: Int, $filter8: TaskFilter, $order5: TaskOrder, $first5: Int, $offset5: Int, $filter9: ProjectFilter, $filter10: ColumnFilter, $order6: ColumnOrder, $first6: Int, $offset6: Int, $filter11: BoardFilter, $order7: BoardOrder, $first7: Int, $offset7: Int, $filter12: ProjectFilter, $filter13: UserFilter, $order8: UserOrder, $first8: Int, $offset8: Int, $filter14: TagFilter, $order9: TagOrder, $first9: Int, $offset9: Int, $filter15: TaskFilter, $order10: TaskOrder, $first10: Int, $offset10: Int, $filter16: TaskFilter, $order11: TaskOrder, $first11: Int, $offset11: Int, $filter17: WorkerFilter, $order12: WorkerOrder, $first12: Int, $offset12: Int, $filter18: ProjectFilter, $filter19: BoardFilter, $filter20: TaskFilter, $order13: TaskOrder, $first13: Int, $offset13: Int, $filter21: ColumnFilter, $order14: ColumnOrder, $first14: Int, $offset14: Int, $filter22: BoardFilter, $filter23: TaskFilter, $order15: TaskOrder, $first15: Int, $offset15: Int, $filter24: ColumnFilter, $order16: ColumnOrder, $first16: Int, $offset16: Int) {
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
          workers(filter: $filter1, order: $order, first: $first, offset: $offset) {
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
          workers(filter: $filter5, order: $order2, first: $first2, offset: $offset2) {
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
        workers(filter: $filter17, order: $order12, first: $first12, offset: $offset12) {
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
exports.QueryColumnComponent = (props) => (<ApolloReactComponents.Query query={exports.QueryColumnDocument} {...props}/>);
function withQueryColumn(operationOptions) {
    return ApolloReactHoc.withQuery(exports.QueryColumnDocument, Object.assign({ alias: 'queryColumn' }, operationOptions));
}
exports.withQueryColumn = withQueryColumn;
;
exports.QueryCommentDocument = graphql_tag_1.default `
    query queryComment($filter: ProjectFilter, $filter1: WorkerFilter, $order: WorkerOrder, $first: Int, $offset: Int, $filter2: TagFilter, $order1: TagOrder, $first1: Int, $offset1: Int, $filter3: ProjectFilter, $filter4: ColumnFilter, $filter5: WorkerFilter, $order2: WorkerOrder, $first2: Int, $offset2: Int, $filter6: WorkerFilter, $order3: WorkerOrder, $first3: Int, $offset3: Int, $filter7: CommentFilter, $order4: CommentOrder, $first4: Int, $offset4: Int, $filter8: TaskFilter, $order5: TaskOrder, $first5: Int, $offset5: Int, $filter9: ProjectFilter, $filter10: ColumnFilter, $order6: ColumnOrder, $first6: Int, $offset6: Int, $filter11: BoardFilter, $order7: BoardOrder, $first7: Int, $offset7: Int, $filter12: ProjectFilter, $filter13: UserFilter, $order8: UserOrder, $first8: Int, $offset8: Int, $filter14: TagFilter, $order9: TagOrder, $first9: Int, $offset9: Int, $filter15: TaskFilter, $order10: TaskOrder, $first10: Int, $offset10: Int, $filter16: TaskFilter, $order11: TaskOrder, $first11: Int, $offset11: Int, $filter17: WorkerFilter, $order12: WorkerOrder, $first12: Int, $offset12: Int, $filter18: ProjectFilter, $filter19: ProjectFilter, $filter20: ColumnFilter, $order13: ColumnOrder, $first13: Int, $offset13: Int, $filter21: BoardFilter, $filter22: TaskFilter, $order14: TaskOrder, $first14: Int, $offset14: Int, $filter23: ColumnFilter, $filter24: WorkerFilter, $order15: WorkerOrder, $first15: Int, $offset15: Int, $filter25: ProjectFilter, $filter26: WorkerFilter, $order16: WorkerOrder, $first16: Int, $offset16: Int, $filter27: TaskFilter, $order17: TaskOrder, $first17: Int, $offset17: Int, $filter28: UserFilter, $order18: UserOrder, $first18: Int, $offset18: Int, $filter29: TagFilter, $order19: TagOrder, $first19: Int, $offset19: Int, $filter30: TaskFilter, $order20: TaskOrder, $first20: Int, $offset20: Int, $filter31: ProjectFilter, $filter32: ColumnFilter, $filter33: WorkerFilter, $order21: WorkerOrder, $first21: Int, $offset21: Int, $filter34: WorkerFilter, $order22: WorkerOrder, $first22: Int, $offset22: Int, $filter35: CommentFilter, $order23: CommentOrder, $first23: Int, $offset23: Int, $filter36: TaskFilter, $order24: TaskOrder, $first24: Int, $offset24: Int, $filter37: WorkerFilter, $order25: WorkerOrder, $first25: Int, $offset25: Int, $filter38: TaskFilter, $filter39: ProjectFilter, $filter40: UserFilter, $order26: UserOrder, $first26: Int, $offset26: Int, $filter41: TagFilter, $order27: TagOrder, $first27: Int, $offset27: Int, $filter42: TaskFilter, $order28: TaskOrder, $first28: Int, $offset28: Int, $filter43: TaskFilter, $order29: TaskOrder, $first29: Int, $offset29: Int, $filter44: WorkerFilter, $filter45: CommentFilter, $order30: CommentOrder, $first30: Int, $offset30: Int, $filter46: TaskFilter, $filter47: WorkerFilter, $filter48: CommentFilter, $order31: CommentOrder, $first31: Int, $offset31: Int) {
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
          workers(filter: $filter1, order: $order, first: $first, offset: $offset) {
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
          workers(filter: $filter5, order: $order2, first: $first2, offset: $offset2) {
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
        workers(filter: $filter17, order: $order12, first: $first12, offset: $offset12) {
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
      workers(filter: $filter24, order: $order15, first: $first15, offset: $offset15) {
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
          workers(filter: $filter33, order: $order21, first: $first21, offset: $offset21) {
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
        worker(filter: $filter44) {
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
    worker(filter: $filter47) {
      id
      name
      availability
    }
    content
  }
}
    `;
exports.QueryCommentComponent = (props) => (<ApolloReactComponents.Query query={exports.QueryCommentDocument} {...props}/>);
function withQueryComment(operationOptions) {
    return ApolloReactHoc.withQuery(exports.QueryCommentDocument, Object.assign({ alias: 'queryComment' }, operationOptions));
}
exports.withQueryComment = withQueryComment;
;
exports.QueryProjectDocument = graphql_tag_1.default `
    query queryProject($filter: WorkerFilter, $order: WorkerOrder, $first: Int, $offset: Int, $filter1: TagFilter, $order1: TagOrder, $first1: Int, $offset1: Int, $filter2: ProjectFilter, $filter3: ColumnFilter, $filter4: WorkerFilter, $order2: WorkerOrder, $first2: Int, $offset2: Int, $filter5: WorkerFilter, $order3: WorkerOrder, $first3: Int, $offset3: Int, $filter6: CommentFilter, $order4: CommentOrder, $first4: Int, $offset4: Int, $filter7: TaskFilter, $order5: TaskOrder, $first5: Int, $offset5: Int, $filter8: ProjectFilter, $filter9: ColumnFilter, $order6: ColumnOrder, $first6: Int, $offset6: Int, $filter10: BoardFilter, $order7: BoardOrder, $first7: Int, $offset7: Int, $filter11: ProjectFilter, $filter12: UserFilter, $order8: UserOrder, $first8: Int, $offset8: Int, $filter13: TagFilter, $order9: TagOrder, $first9: Int, $offset9: Int, $filter14: TaskFilter, $order10: TaskOrder, $first10: Int, $offset10: Int, $filter15: TaskFilter, $order11: TaskOrder, $first11: Int, $offset11: Int, $filter16: WorkerFilter, $order12: WorkerOrder, $first12: Int, $offset12: Int, $filter17: ProjectFilter, $filter18: TagFilter, $order13: TagOrder, $first13: Int, $offset13: Int, $filter19: TaskFilter, $order14: TaskOrder, $first14: Int, $offset14: Int, $filter20: BoardFilter, $order15: BoardOrder, $first15: Int, $offset15: Int, $filter21: WorkerFilter, $order16: WorkerOrder, $first16: Int, $offset16: Int, $filter22: ProjectFilter, $order17: ProjectOrder, $first17: Int, $offset17: Int) {
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
          workers(filter: $filter, order: $order, first: $first, offset: $offset) {
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
          workers(filter: $filter4, order: $order2, first: $first2, offset: $offset2) {
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
        workers(filter: $filter16, order: $order12, first: $first12, offset: $offset12) {
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
    workers(filter: $filter21, order: $order16, first: $first16, offset: $offset16) {
      id
      name
      availability
    }
  }
}
    `;
exports.QueryProjectComponent = (props) => (<ApolloReactComponents.Query query={exports.QueryProjectDocument} {...props}/>);
function withQueryProject(operationOptions) {
    return ApolloReactHoc.withQuery(exports.QueryProjectDocument, Object.assign({ alias: 'queryProject' }, operationOptions));
}
exports.withQueryProject = withQueryProject;
;
exports.QueryTagDocument = graphql_tag_1.default `
    query queryTag($filter: TaskFilter, $order: TaskOrder, $first: Int, $offset: Int, $filter1: BoardFilter, $order1: BoardOrder, $first1: Int, $offset1: Int, $filter2: WorkerFilter, $order2: WorkerOrder, $first2: Int, $offset2: Int, $filter3: ProjectFilter, $filter4: ProjectFilter, $filter5: UserFilter, $order3: UserOrder, $first3: Int, $offset3: Int, $filter6: TagFilter, $order4: TagOrder, $first4: Int, $offset4: Int, $filter7: TaskFilter, $order5: TaskOrder, $first5: Int, $offset5: Int, $filter8: TaskFilter, $order6: TaskOrder, $first6: Int, $offset6: Int, $filter9: WorkerFilter, $order7: WorkerOrder, $first7: Int, $offset7: Int, $filter10: TagFilter, $order8: TagOrder, $first8: Int, $offset8: Int, $filter11: ProjectFilter, $filter12: WorkerFilter, $order9: WorkerOrder, $first9: Int, $offset9: Int, $filter13: TagFilter, $order10: TagOrder, $first10: Int, $offset10: Int) {
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
          workers(filter: $filter2, order: $order2, first: $first2, offset: $offset2) {
            id
            name
            availability
          }
        }
        workers(filter: $filter9, order: $order7, first: $first7, offset: $offset7) {
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
    workers(filter: $filter12, order: $order9, first: $first9, offset: $offset9) {
      id
      name
      availability
    }
  }
}
    `;
exports.QueryTagComponent = (props) => (<ApolloReactComponents.Query query={exports.QueryTagDocument} {...props}/>);
function withQueryTag(operationOptions) {
    return ApolloReactHoc.withQuery(exports.QueryTagDocument, Object.assign({ alias: 'queryTag' }, operationOptions));
}
exports.withQueryTag = withQueryTag;
;
exports.QueryTaskDocument = graphql_tag_1.default `
    query queryTask($filter: TaskFilter, $order: TaskOrder, $first: Int, $offset: Int, $filter1: BoardFilter, $order1: BoardOrder, $first1: Int, $offset1: Int, $filter2: WorkerFilter, $order2: WorkerOrder, $first2: Int, $offset2: Int, $filter3: ProjectFilter, $filter4: ProjectFilter, $filter5: UserFilter, $order3: UserOrder, $first3: Int, $offset3: Int, $filter6: TagFilter, $order4: TagOrder, $first4: Int, $offset4: Int, $filter7: TaskFilter, $order5: TaskOrder, $first5: Int, $offset5: Int, $filter8: TaskFilter, $order6: TaskOrder, $first6: Int, $offset6: Int, $filter9: WorkerFilter, $order7: WorkerOrder, $first7: Int, $offset7: Int, $filter10: TagFilter, $order8: TagOrder, $first8: Int, $offset8: Int, $filter11: ProjectFilter, $filter12: ProjectFilter, $filter13: BoardFilter, $filter14: TaskFilter, $order9: TaskOrder, $first9: Int, $offset9: Int, $filter15: ColumnFilter, $order10: ColumnOrder, $first10: Int, $offset10: Int, $filter16: BoardFilter, $filter17: ProjectFilter, $filter18: ColumnFilter, $filter19: WorkerFilter, $order11: WorkerOrder, $first11: Int, $offset11: Int, $filter20: ProjectFilter, $filter21: UserFilter, $order12: UserOrder, $first12: Int, $offset12: Int, $filter22: TagFilter, $order13: TagOrder, $first13: Int, $offset13: Int, $filter23: TaskFilter, $order14: TaskOrder, $first14: Int, $offset14: Int, $filter24: TaskFilter, $order15: TaskOrder, $first15: Int, $offset15: Int, $filter25: WorkerFilter, $order16: WorkerOrder, $first16: Int, $offset16: Int, $filter26: TaskFilter, $filter27: WorkerFilter, $filter28: CommentFilter, $order17: CommentOrder, $first17: Int, $offset17: Int, $filter29: TaskFilter, $order18: TaskOrder, $first18: Int, $offset18: Int, $filter30: ColumnFilter, $filter31: WorkerFilter, $order19: WorkerOrder, $first19: Int, $offset19: Int, $filter32: WorkerFilter, $order20: WorkerOrder, $first20: Int, $offset20: Int, $filter33: CommentFilter, $order21: CommentOrder, $first21: Int, $offset21: Int, $filter34: TaskFilter, $order22: TaskOrder, $first22: Int, $offset22: Int) {
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
          workers(filter: $filter2, order: $order2, first: $first2, offset: $offset2) {
            id
            name
            availability
          }
        }
        workers(filter: $filter9, order: $order7, first: $first7, offset: $offset7) {
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
        workers(filter: $filter19, order: $order11, first: $first11, offset: $offset11) {
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
          worker(filter: $filter27) {
            id
            name
            availability
          }
          content
        }
      }
    }
    title
    workers(filter: $filter31, order: $order19, first: $first19, offset: $offset19) {
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
exports.QueryTaskComponent = (props) => (<ApolloReactComponents.Query query={exports.QueryTaskDocument} {...props}/>);
function withQueryTask(operationOptions) {
    return ApolloReactHoc.withQuery(exports.QueryTaskDocument, Object.assign({ alias: 'queryTask' }, operationOptions));
}
exports.withQueryTask = withQueryTask;
;
exports.QueryUserDocument = graphql_tag_1.default `
    query queryUser($filter: ProjectFilter, $filter1: WorkerFilter, $order: WorkerOrder, $first: Int, $offset: Int, $filter2: TagFilter, $order1: TagOrder, $first1: Int, $offset1: Int, $filter3: ProjectFilter, $filter4: ColumnFilter, $filter5: WorkerFilter, $order2: WorkerOrder, $first2: Int, $offset2: Int, $filter6: WorkerFilter, $order3: WorkerOrder, $first3: Int, $offset3: Int, $filter7: CommentFilter, $order4: CommentOrder, $first4: Int, $offset4: Int, $filter8: TaskFilter, $order5: TaskOrder, $first5: Int, $offset5: Int, $filter9: ProjectFilter, $filter10: ColumnFilter, $order6: ColumnOrder, $first6: Int, $offset6: Int, $filter11: BoardFilter, $order7: BoardOrder, $first7: Int, $offset7: Int, $filter12: ProjectFilter, $filter13: UserFilter, $order8: UserOrder, $first8: Int, $offset8: Int, $filter14: TagFilter, $order9: TagOrder, $first9: Int, $offset9: Int, $filter15: TaskFilter, $order10: TaskOrder, $first10: Int, $offset10: Int, $filter16: TaskFilter, $order11: TaskOrder, $first11: Int, $offset11: Int, $filter17: WorkerFilter, $order12: WorkerOrder, $first12: Int, $offset12: Int, $filter18: ProjectFilter, $filter19: TagFilter, $order13: TagOrder, $first13: Int, $offset13: Int, $filter20: TaskFilter, $order14: TaskOrder, $first14: Int, $offset14: Int, $filter21: TaskFilter, $order15: TaskOrder, $first15: Int, $offset15: Int, $filter22: WorkerFilter, $order16: WorkerOrder, $first16: Int, $offset16: Int, $filter23: ProjectFilter, $filter24: ColumnFilter, $filter25: WorkerFilter, $order17: WorkerOrder, $first17: Int, $offset17: Int, $filter26: WorkerFilter, $order18: WorkerOrder, $first18: Int, $offset18: Int, $filter27: CommentFilter, $order19: CommentOrder, $first19: Int, $offset19: Int, $filter28: TaskFilter, $order20: TaskOrder, $first20: Int, $offset20: Int, $filter29: UserFilter, $order21: UserOrder, $first21: Int, $offset21: Int, $filter30: WorkerFilter, $order22: WorkerOrder, $first22: Int, $offset22: Int, $filter31: TaskFilter, $order23: TaskOrder, $first23: Int, $offset23: Int, $filter32: UserFilter, $order24: UserOrder, $first24: Int, $offset24: Int) {
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
          workers(filter: $filter1, order: $order, first: $first, offset: $offset) {
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
          workers(filter: $filter5, order: $order2, first: $first2, offset: $offset2) {
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
        workers(filter: $filter17, order: $order12, first: $first12, offset: $offset12) {
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
          workers(filter: $filter25, order: $order17, first: $first17, offset: $offset17) {
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
exports.QueryUserComponent = (props) => (<ApolloReactComponents.Query query={exports.QueryUserDocument} {...props}/>);
function withQueryUser(operationOptions) {
    return ApolloReactHoc.withQuery(exports.QueryUserDocument, Object.assign({ alias: 'queryUser' }, operationOptions));
}
exports.withQueryUser = withQueryUser;
;
exports.QueryWorkerDocument = graphql_tag_1.default `
    query queryWorker($filter: TaskFilter, $order: TaskOrder, $first: Int, $offset: Int, $filter1: BoardFilter, $order1: BoardOrder, $first1: Int, $offset1: Int, $filter2: WorkerFilter, $order2: WorkerOrder, $first2: Int, $offset2: Int, $filter3: ProjectFilter, $filter4: ProjectFilter, $filter5: UserFilter, $order3: UserOrder, $first3: Int, $offset3: Int, $filter6: TagFilter, $order4: TagOrder, $first4: Int, $offset4: Int, $filter7: TaskFilter, $order5: TaskOrder, $first5: Int, $offset5: Int, $filter8: TaskFilter, $order6: TaskOrder, $first6: Int, $offset6: Int, $filter9: WorkerFilter, $order7: WorkerOrder, $first7: Int, $offset7: Int, $filter10: TagFilter, $order8: TagOrder, $first8: Int, $offset8: Int, $filter11: ProjectFilter, $filter12: ProjectFilter, $filter13: TaskFilter, $order9: TaskOrder, $first9: Int, $offset9: Int, $filter14: UserFilter, $order10: UserOrder, $first10: Int, $offset10: Int, $filter15: TagFilter, $order11: TagOrder, $first11: Int, $offset11: Int, $filter16: ProjectFilter, $filter17: ColumnFilter, $filter18: WorkerFilter, $order12: WorkerOrder, $first12: Int, $offset12: Int, $filter19: WorkerFilter, $order13: WorkerOrder, $first13: Int, $offset13: Int, $filter20: CommentFilter, $order14: CommentOrder, $first14: Int, $offset14: Int, $filter21: TaskFilter, $order15: TaskOrder, $first15: Int, $offset15: Int, $filter22: ProjectFilter, $filter23: ColumnFilter, $filter24: WorkerFilter, $order16: WorkerOrder, $first16: Int, $offset16: Int, $filter25: WorkerFilter, $order17: WorkerOrder, $first17: Int, $offset17: Int, $filter26: CommentFilter, $order18: CommentOrder, $first18: Int, $offset18: Int, $filter27: TaskFilter, $order19: TaskOrder, $first19: Int, $offset19: Int, $filter28: WorkerFilter, $order20: WorkerOrder, $first20: Int, $offset20: Int, $filter29: UserFilter, $order21: UserOrder, $first21: Int, $offset21: Int, $filter30: TagFilter, $order22: TagOrder, $first22: Int, $offset22: Int, $filter31: TaskFilter, $order23: TaskOrder, $first23: Int, $offset23: Int, $filter32: TaskFilter, $order24: TaskOrder, $first24: Int, $offset24: Int, $filter33: WorkerFilter, $order25: WorkerOrder, $first25: Int, $offset25: Int) {
  queryWorker(filter: $filter33, order: $order25, first: $first25, offset: $offset25) {
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
          workers(filter: $filter2, order: $order2, first: $first2, offset: $offset2) {
            id
            name
            availability
          }
        }
        workers(filter: $filter9, order: $order7, first: $first7, offset: $offset7) {
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
          workers(filter: $filter18, order: $order12, first: $first12, offset: $offset12) {
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
          workers(filter: $filter24, order: $order16, first: $first16, offset: $offset16) {
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
exports.QueryWorkerComponent = (props) => (<ApolloReactComponents.Query query={exports.QueryWorkerDocument} {...props}/>);
function withQueryWorker(operationOptions) {
    return ApolloReactHoc.withQuery(exports.QueryWorkerDocument, Object.assign({ alias: 'queryWorker' }, operationOptions));
}
exports.withQueryWorker = withQueryWorker;
;
