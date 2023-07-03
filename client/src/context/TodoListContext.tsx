import React from 'react';

export const TodoListContext = React.createContext({
  view: 'List',
  maxWeight: 0,
  onCreateTask: (task: any) => {},
  onEditTask: (task: any) => {},
  onDeleteTask: (task: any) => {},
});