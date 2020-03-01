import React from 'react';
import {List} from 'antd';
import {Task} from '../api/interfaces/types.d';


const TasksTable = ({tasks}) => {

    const tasksList: Task[] = tasks;

    return (
        <List
            itemLayout="horizontal"
            dataSource={tasksList}
            renderItem={item => (
                <List.Item>
                    {JSON.stringify(item)}
                </List.Item>
            )}
        />
    )
};

export default TasksTable;
