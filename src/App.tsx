import React from 'react';
import NavBar from './components/NavBar';
import ClassCardList from './components/ClassCardList';
import { ContentMain, ContentTitle } from './components/styled';

const App = () => {
  return (
    <ContentMain>
      <NavBar />
      <ContentTitle>Welcome to RookieCookie!</ContentTitle>
      <ClassCardList />
    </ContentMain>
  );
};

export default App;
