import React from 'react';
import { List } from 'antd';
import { Entity } from '../sdk/graphql-zeus';
import { Link } from '@reach/router';

const EntitiesTable = ({ entities }) => {

  const entitiesList: Entity[] = entities;

  return (
    <List
      itemLayout="horizontal"
      dataSource={entitiesList}
      renderItem={item => (
        <List.Item>
          <List.Item.Meta
            title={<Link to={'../entities/' + item.id}>{item.title}</Link>}
            description={item.description}
          />
        </List.Item>
      )}
    />
  );
};

export default EntitiesTable;
