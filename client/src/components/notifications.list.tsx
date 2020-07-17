import React, { Fragment } from 'react';
import { Descriptions, List } from 'antd';

interface Props {
  notifications: {
    title: string;
    description: string;
  }[]
}

const NotificationsList = (props: Props) => {

  const { notifications } = props;

  return (
    <Fragment>
      <Descriptions title="Notifications"/>
      <List
        itemLayout="horizontal"
        dataSource={notifications}
        renderItem={item => (
          <List.Item>
            <List.Item.Meta
              title={<a href="https://ant.design">{item.title}</a>}
              description={item.description}
            />
          </List.Item>
        )}
      />
    </Fragment>
  );

};

export default NotificationsList;
