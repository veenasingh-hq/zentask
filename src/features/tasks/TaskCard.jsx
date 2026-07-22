import {
  useSortable,
} from "@dnd-kit/sortable";

import {
  CSS,
} from "@dnd-kit/utilities";

import Card from "../../components/ui/Card";
import Badge from "../../components/ui/Badge";
import Button from "../../components/ui/Button";

import { useTasks } from "../../context/TaskContext";

function TaskCard({ task }) {
  const { openEditModal } = useTasks();

  const {
    attributes,
    listeners,
    setNodeRef,
    transform,
    transition,
  } = useSortable({
    id: task.id,
    data: {
      status: task.status,
    },
  });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
  };

  return (
    <div
      ref={setNodeRef}
      style={style}
      {...listeners}
      {...attributes}
    >
      <Card className="mb-4 cursor-grab active:cursor-grabbing">
        <div className="flex justify-between">
          <h3 className="text-lg font-semibold">
            {task.title}
          </h3>

          <Badge color={task.priority}>
            {task.priority}
          </Badge>
        </div>

        <p className="mt-3 text-sm text-slate-600">
          {task.description}
        </p>

        <div className="mt-5 flex justify-end">
          <Button
            variant="secondary"
            onClick={() => openEditModal(task)}
          >
            Edit
          </Button>
        </div>
      </Card>
    </div>
  );
}

export default TaskCard;