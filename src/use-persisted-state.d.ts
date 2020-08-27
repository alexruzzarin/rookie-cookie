declare module 'use-persisted-state' {
  function createPersistedState<T>(
    key: string,
  ): (initialState: T) => [T, (dispatch: T | ((prev: T) => T)) => T];
  export default createPersistedState;
}
