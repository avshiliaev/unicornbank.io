import React from 'react';
import { List } from 'antd';
import { Task } from '../sdk/graphql-zeus';
import { Link } from '@reach/router';

const TasksTable = ({ tasks }) => {

  const tasksList: Task[] = tasks;

  return (
    <List
      itemLayout="horizontal"
      dataSource={tasksList}
      renderItem={item => (
        <List.Item>
          <List.Item.Meta
            title={<Link to={'../tasks/' + item.id}>{item.title}</Link>}
            description={item.content}
          />
        </List.Item>
      )}
    />
  );
};

export default TasksTable;
