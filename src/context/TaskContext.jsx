import { createContext, useContext, useEffect, useReducer, useState } from "react";
import { taskReducer } from "./taskReducer";
import { ACTIONS, TASK_PRIORITY, TASK_STATUS } from "../utils/constants";
import { generateId } from "../utils/generateId";

const TaskContext = createContext();

const initialTasks = [
  {
    id: generateId(),
    title: "Learn React Context",
    description: "Understand Context API and useReducer",
    status: TASK_STATUS.TODO,
    priority: TASK_PRIORITY.HIGH,
    createdAt: Date.now(),
  },
  {
    id: generateId(),
    title: "Build ZenTask UI",
    description: "Create Kanban Board",
    status: TASK_STATUS.IN_PROGRESS,
    priority: TASK_PRIORITY.MEDIUM,
    createdAt: Date.now(),
  },
];

export function TaskProvider({ children }) {
  const [tasks, dispatch] = useReducer(
    taskReducer,
    [],
    () => {
      const stored = localStorage.getItem("zentask");
      return stored ? JSON.parse(stored) : initialTasks;
    }
  );

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingTask, setEditingTask] = useState(null);

  useEffect(() => {
    localStorage.setItem("zentask", JSON.stringify(tasks));
  }, [tasks]);

  const openCreateModal = () => {
    setEditingTask(null);
    setIsModalOpen(true);
  };

  const openEditModal = (task) => {
    setEditingTask(task);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setEditingTask(null);
    setIsModalOpen(false);
  };

  const addTask = (task) => {
    dispatch({
      type: ACTIONS.ADD_TASK,
      payload: {
        ...task,
        id: generateId(),
        createdAt: Date.now(),
      },
    });
  };

  const updateTask = (task) => {
    dispatch({
      type: ACTIONS.UPDATE_TASK,
      payload: task,
    });
  };

  return (
    <TaskContext.Provider
      value={{
        tasks,
        addTask,
        updateTask,
        isModalOpen,
        editingTask,
        openCreateModal,
        openEditModal,
        closeModal,
      }}
    >
      {children}
    </TaskContext.Provider>
  );
}

export const useTasks = () => useContext(TaskContext);