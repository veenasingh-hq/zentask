import {
  useDroppable,
} from "@dnd-kit/core";

import {
  SortableContext,
  verticalListSortingStrategy,
} from "@dnd-kit/sortable";

import TaskCard from "./TaskCard";

function TaskColumn({
  title,
  tasks,
  status,
}) {
  const { setNodeRef } = useDroppable({
    id: status,
  });

  return (
    <div
      ref={setNodeRef}
      className="rounded-xl bg-slate-200 p-4 min-h-125"
    >
      <div className="mb-5 flex justify-between">
        <h2 className="text-xl font-bold">
          {title}
        </h2>

        <span className="rounded-full bg-white px-3 py-1">
          {tasks.length}
        </span>
      </div>

      <SortableContext
        items={tasks.map((task) => task.id)}
        strategy={verticalListSortingStrategy}
      >
        {tasks.map((task) => (
          <TaskCard
            key={task.id}
            task={task}
          />
        ))}
      </SortableContext>
    </div>
  );
}

export default TaskColumn;