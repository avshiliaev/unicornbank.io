"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
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
var DeveloperOrderable;
(function (DeveloperOrderable) {
    DeveloperOrderable["Name"] = "name";
    DeveloperOrderable["Availability"] = "availability";
})(DeveloperOrderable = exports.DeveloperOrderable || (exports.DeveloperOrderable = {}));
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
