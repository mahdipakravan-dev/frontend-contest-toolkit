# Schedule Manager Task

This challenge is about creating a **Task Manager** that handles tasks with dependencies and runs them in the correct order based on those dependencies and their respective durations. 

## Task Description

The task manager should:
- Take an array of tasks.
- Each task may have a dependency on another task.
- The manager should run the tasks in the correct sequence, ensuring each task only starts once its dependencies are complete.
- Each task will take a certain amount of time (duration) to complete.

### Task Structure
Each task is represented as an object with the following properties:
- `id`: A unique identifier for the task.
- `duration`: The time (in seconds) the task takes to complete.
- `dependency`: The `id` of the task that must complete before this one can run. If `null`, the task has no dependencies.
- `status`: The current state of the task, which can be:
  - `"scheduled"`: The task is waiting to run.
  - `"running"`: The task is currently running.
  - `"done"`: The task is complete.

### Example Task Queue

```javascript
let pendingQueue = [
  {
    id: '1',
    duration: 3,
    dependency: null,
    status: "scheduled"
  },
  {
    id: '2',
    duration: 2,
    dependency: '1',
    status: "scheduled"
  },
  {
    id: '3',
    duration: 4,
    dependency: '2',
    status: "scheduled"
  },
  {
    id: '5',
    duration: 2,
    dependency: null,
    status: "scheduled"
  },
];
