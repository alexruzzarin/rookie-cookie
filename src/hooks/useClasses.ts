import { useCallback } from 'react';
import createPersistedState from 'use-persisted-state';
import classList, { NewKlass, Klasses } from '../classes';

const useClassesState = createPersistedState<Klasses>('classes');

const useClasses = () => {
  const [classes, setClasses] = useClassesState(classList);

  const removeClass = useCallback(
    (id: number) => {
      setClasses((prev) => prev.filter((klass) => klass.id !== id));
    },
    [setClasses],
  );

  const addClass = useCallback(
    (klass: NewKlass) => {
      const maxId = classes.reduce((max, c) => Math.max(max, c.id), 0);

      setClasses((prev) => [...prev, { id: maxId + 1, ...klass }]);
    },
    [classes, setClasses],
  );

  const resetClasses = useCallback(() => {
    setClasses(classList);
  }, [setClasses]);

  return {
    classes,
    removeClass,
    addClass,
    resetClasses,
  };
};

export default useClasses;
