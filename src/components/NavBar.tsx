import React, { useCallback } from 'react';
import { Header, HeaderMenu, HeaderItem, Button } from './styled';
import useClasses from '../hooks/useClasses';
import useShowAddClass from '../hooks/useShowAddClass';

const NavBar = () => {
  const { resetClasses } = useClasses();
  const { showAddClass, isAddingClass } = useShowAddClass();

  const onReset = useCallback(() => {
    resetClasses();
  }, [resetClasses]);

  const onAddClass = useCallback(() => {
    showAddClass();
  }, [showAddClass]);

  return (
    <Header>
      <HeaderMenu>
        <HeaderItem as="h1">RookieCookie</HeaderItem>
        <HeaderItem>
          <Button onClick={onReset}>
            <span role="img" aria-label="Reset">
              🔄
            </span>{' '}
            Reset
          </Button>
          <Button onClick={onAddClass} disabled={isAddingClass}>
            <span role="img" aria-label="Plus">
              ➕
            </span>{' '}
            Add Class
          </Button>
        </HeaderItem>
      </HeaderMenu>
    </Header>
  );
};
export default NavBar;
