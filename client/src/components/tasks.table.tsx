import React from 'react';
import { List } from 'antd';
import { Task } from '../sdk/graphql-zeus';

const TasksTable = ({ tasks }) => {

  const tasksList: Task[] = tasks;

  return (
    <List
      itemLayout="horizontal"
      dataSource={tasksList}
      renderItem={item => (
        <List.Item>
          <List.Item.Meta
            title={<a href="https://ant.design">{item.title}</a>}
            description={item.content}
          />
        </List.Item>
      )}
    />
  );
};

export default TasksTable;
