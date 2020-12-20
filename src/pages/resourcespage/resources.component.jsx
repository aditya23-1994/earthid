import React from 'react';
import { Route, useRouteMatch, Switch } from 'react-router-dom';
import './resources.styles.scss';
import { Blogs } from './blogs/blogs.component';

const ResourcesPage = () => {
  let { path } = useRouteMatch();
  return (
    <div className='resourcesPage'>
      <Switch>
        <Route path={`${path}/blogs`} component={Blogs} />
      </Switch>
    </div>
  );
};

export default ResourcesPage;
