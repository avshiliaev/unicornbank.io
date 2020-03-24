import React from 'react';
import Pages from './pages';
import './App.css';
import { useMedia } from 'react-use-media';
import LoginPage from './pages/login.page';
import { Location } from '@reach/router';

function IsLoggedIn({ windowSize, location }) {
  const data = { isLoggedIn: true, userName: 'testTest' };
  return data.isLoggedIn ? <Pages windowSize={windowSize} userName={data.userName} location={location}/> :
    <LoginPage windowSize={windowSize}/>;
}

const App: React.FC = () => {

  // TODO: window size into the store!
  const breakpoints = {
    xs: '480px',
    sm: '576px',
    md: '768px',
    lg: '992px',
    xl: '1200px',
    xxl: '1600px',
  };
  const large = useMedia({
    minWidth: breakpoints.lg,
  });

  const extraLarge = useMedia({
    minWidth: breakpoints.xxl,
  });

  const windowSize = {
    large,
    extraLarge,
  };

  return (
    <Location>
      {props => {
        return (<IsLoggedIn windowSize={windowSize} location={props.location.pathname}/>);
      }}
    </Location>
  );
};

export default App;
