import { Project, Task } from './types';

export const projects: Project[] = [
  {
    id: 1,
    name: 'Project 1',
    description: 'Description for Project 1',
  },
  {
    id: 2,
    name: 'Project 2',
    description: 'Description for Project 2',
  },
];

export const tasks: Task[] = [
  {
    id: 1,
    title: 'Task 1',
    description: 'Description for Task 1',
    projectId: 1, 
  },
  {
    id: 2,
    title: 'Task 2',
    description: 'Description for Task 2',
    projectId: 1, 
  },
  {
    id: 3,
    title: 'Task 3',
    description: 'Description for Task 3',
    projectId: 2,
  },
];
