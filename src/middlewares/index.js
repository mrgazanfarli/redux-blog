export const actionLogger = store => next => action => {
    console.log('%cMIDDLEWARE TRIGGERED, CURRENT ACTION IS:', 'color: #2EAD30', action);
    next(action);
  }