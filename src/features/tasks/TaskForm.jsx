import { useEffect, useState } from "react";

import Button from "../../components/ui/Button";
import Input from "../../components/ui/Input";
import Textarea from "../../components/ui/Textarea";

import { useTasks } from "../../context/TaskContext";
import {
  TASK_PRIORITY,
  TASK_STATUS,
} from "../../utils/constants";

function TaskForm() {
  const {
    addTask,
    updateTask,
    editingTask,
    closeModal,
  } = useTasks();

  const [form, setForm] = useState({
    title: "",
    description: "",
    priority: TASK_PRIORITY.MEDIUM,
    status: TASK_STATUS.TODO,
  });

  useEffect(() => {
    if (editingTask) {
      setForm(editingTask);
    }
  }, [editingTask]);

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!form.title.trim()) {
      alert("Title is required");
      return;
    }

    if (editingTask) {
      updateTask(form);
    } else {
      addTask(form);
    }

    closeModal();

    setForm({
      title: "",
      description: "",
      priority: TASK_PRIORITY.MEDIUM,
      status: TASK_STATUS.TODO,
    });
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-5"
    >
      <Input
        label="Task Title"
        name="title"
        value={form.title}
        onChange={handleChange}
      />

      <Textarea
        label="Description"
        name="description"
        value={form.description}
        onChange={handleChange}
      />

      <div>
        <label className="mb-2 block font-medium">
          Priority
        </label>

        <select
          name="priority"
          value={form.priority}
          onChange={handleChange}
          className="w-full rounded-lg border p-3"
        >
          <option value={TASK_PRIORITY.HIGH}>High</option>
          <option value={TASK_PRIORITY.MEDIUM}>Medium</option>
          <option value={TASK_PRIORITY.LOW}>Low</option>
        </select>
      </div>

      <Button className="w-full">
        {editingTask ? "Update Task" : "Create Task"}
      </Button>
    </form>
  );
}

export default TaskForm;