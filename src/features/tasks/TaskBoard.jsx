import {
  DndContext,
  closestCorners,
} from "@dnd-kit/core";

import { useTasks } from "../../context/TaskContext";

import TaskColumn from "./TaskColumn";

function TaskBoard() {
  const {
    tasks,
    moveTask,
  } = useTasks();

  const todo = tasks.filter(
    (task) => task.status === "todo"
  );

  const progress = tasks.filter(
    (task) => task.status === "in-progress"
  );

  const done = tasks.filter(
    (task) => task.status === "done"
  );

  const handleDragEnd = ({ active, over }) => {
    if (!over) return;

    const draggedTask = tasks.find(
      (task) => task.id === active.id
    );

    if (!draggedTask) return;

    const newStatus = over.id;

    if (draggedTask.status !== newStatus) {
      moveTask(draggedTask.id, newStatus);
    }
  };

  return (
    <DndContext
      collisionDetection={closestCorners}
      onDragEnd={handleDragEnd}
    >
      <div className="grid gap-6 lg:grid-cols-3">
        <TaskColumn
          title="Todo"
          status="todo"
          tasks={todo}
        />

        <TaskColumn
          title="In Progress"
          status="in-progress"
          tasks={progress}
        />

        <TaskColumn
          title="Done"
          status="done"
          tasks={done}
        />
      </div>
    </DndContext>
  );
}

export default TaskBoard;