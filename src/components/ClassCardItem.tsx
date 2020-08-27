import React, { useCallback } from 'react';
import { CardItem, Button } from './styled';
import { Klass } from '../classes';
import useClasses from '../hooks/useClasses';

const ClassCardItem: React.FC<{ content: Klass }> = ({ content }) => {
  const { removeClass } = useClasses();

  const onDelete = useCallback(() => {
    removeClass(content.id);
  }, [content.id, removeClass]);

  return (
    <CardItem>
      <header>
        <h3>
          {content.classType === 'live' ? (
            <span role="img" aria-label="Live" title="Live">
              📡
            </span>
          ) : (
            <span role="img" aria-label="On-Demand" title="On-Demand">
              🖥
            </span>
          )}{' '}
          {content.title}
        </h3>
      </header>
      <img src={content.featureImage} alt={content.title} />
      <main>
        <p>{content.description}</p>
      </main>
      <footer>
        <h4 title="Instructor">
          <span role="img" aria-label="Instructor">
            👩‍🍳
          </span>{' '}
          {content.instructor}
        </h4>
        <h4 title="Duration">
          <span role="img" aria-label="Duration">
            ⏲
          </span>{' '}
          {content.duration} min
        </h4>
        <Button title="Delete" onClick={onDelete}>
          🗑
        </Button>
      </footer>
    </CardItem>
  );
};

export default ClassCardItem;
