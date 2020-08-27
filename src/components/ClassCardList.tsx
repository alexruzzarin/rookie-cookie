import React from 'react';
import { CardList } from './styled';
import ClassCardItem from './ClassCardItem';
import AddClassCardItem from './AddClassCardItem';
import useClasses from '../hooks/useClasses';
import useShowAddClass from '../hooks/useShowAddClass';

const ClassCardList: React.FC = () => {
  const { classes } = useClasses();
  const { isAddingClass } = useShowAddClass();
  return (
    <CardList>
      {classes.map((klass) => (
        <ClassCardItem key={klass.id} content={klass} />
      ))}
      {isAddingClass ? <AddClassCardItem /> : null}
    </CardList>
  );
};

export default ClassCardList;
