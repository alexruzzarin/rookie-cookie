import React, {
  useCallback,
  createContext,
  useState,
  useMemo,
  useContext,
} from 'react';

type ShowAddClassContextType = {
  isAddingClass: boolean;
  showAddClass: () => void;
  hideAddClass: () => void;
};

const ShowAddClassContext = createContext<ShowAddClassContextType | null>(null);

export const ShowAddClassProvider: React.FC = (props) => {
  const [isAddingClass, setShowAddClass] = useState(false);

  const showAddClass = useCallback(() => {
    setShowAddClass(true);
  }, []);

  const hideAddClass = useCallback(() => {
    setShowAddClass(false);
  }, []);

  const value = useMemo(() => ({ isAddingClass, showAddClass, hideAddClass }), [
    hideAddClass,
    isAddingClass,
    showAddClass,
  ]);

  return <ShowAddClassContext.Provider value={value} {...props} />;
};

export const useShowAddClass = () => {
  const context = useContext(ShowAddClassContext);
  if (!context) {
    throw new Error(
      'useShowAddClass must be used within a ShowAddClassProvider',
    );
  }
  return context;
};

export default useShowAddClass;
