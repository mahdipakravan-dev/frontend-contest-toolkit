let pendingQueue = [
  {
    id : '1',
    duration : 3,
    dependency : null,
    status : "scheduled"
  },
  {
    id : '2',
    duration : 2,
    dependency : '1',
    status : "scheduled"
  },
  {
    id : '3',
    duration : 4,
    dependency : '2',
    status : "scheduled"
  },
  {
    id : '5',
    duration : 2,
    dependency : null,
    status : "scheduled"
  },
];


function updateTask(index , partial) {
  pendingQueue[index] = {
    ...pendingQueue[index],
    ...partial
  }
}
function taskRunner(task , index) {
  updateTask(index , {status : 'running'})
  console.log("----START TASK--- " , task.id , '---duration-- ' , task.duration)
  setTimeout(() => {
    console.log("----DONE TASK--- " , task.id)
    updateTask(index , {status : 'done'})
    queue(pendingQueue)
  } , task.duration * 1000)  
}

function queue() {
  pendingQueue.forEach((task , index) => {
    if(task.status === "running" || task.status === "done") return
    if(!task.dependency) {
      taskRunner(task , index)
      return
    }
    const isPendingTaskDone = pendingQueue.find(
      pendingTask => pendingTask.id === task.dependency && pendingTask.status === "done"
    )
    if(isPendingTaskDone) {
      taskRunner(task , index)
    }
  })
}

queue(pendingQueue)
