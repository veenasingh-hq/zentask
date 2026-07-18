import { createContext, useContext, useEffect, useReducer } from "react";
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
    description: "Create Kanban board",
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

  useEffect(() => {
    localStorage.setItem("zentask", JSON.stringify(tasks));
  }, [tasks]);

  const addTask = (task) => {
    dispatch({
      type: ACTIONS.ADD_TASK,
      payload: task,
    });
  };

  const updateTask = (task) => {
    dispatch({
      type: ACTIONS.UPDATE_TASK,
      payload: task,
    });
  };

  const deleteTask = (id) => {
    dispatch({
      type: ACTIONS.DELETE_TASK,
      payload: id,
    });
  };

  const moveTask = (id, status) => {
    dispatch({
      type: ACTIONS.MOVE_TASK,
      payload: {
        id,
        status,
      },
    });
  };

  return (
    <TaskContext.Provider
      value={{
        tasks,
        addTask,
        updateTask,
        deleteTask,
        moveTask,
      }}
    >
      {children}
    </TaskContext.Provider>
  );
}

export function useTasks() {
  return useContext(TaskContext);
}