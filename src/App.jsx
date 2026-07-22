import { useState } from "react";

import Header from "./components/layout/Header";
import Container from "./components/layout/Container";
import Button from "./components/ui/Button";

import DashboardStats from "./features/tasks/DashboardStats";
import TaskToolbar from "./features/tasks/TaskToolbar";
import TaskBoard from "./features/tasks/TaskBoard";
import TaskModal from "./features/tasks/TaskModal";

import { useTasks } from "./context/TaskContext";

function App() {
  const { openCreateModal } = useTasks();

  const [search, setSearch] = useState("");
  const [priority, setPriority] = useState("all");
  const [sort, setSort] = useState("newest");

  return (
    <div className="min-h-screen bg-slate-100">
      <Header />

      <TaskModal />

      <Container>
        <div className="my-8 flex items-center justify-between">
          <div>
            <h2 className="text-3xl font-bold">
              ZenTask Dashboard
            </h2>

            <p className="text-slate-500">
              Organize your workflow efficiently
            </p>
          </div>

          <Button onClick={openCreateModal}>
            + Add Task
          </Button>
        </div>

        <DashboardStats />

        <TaskToolbar
          search={search}
          setSearch={setSearch}
          priority={priority}
          setPriority={setPriority}
          sort={sort}
          setSort={setSort}
        />

        <TaskBoard
          search={search}
          priority={priority}
          sort={sort}
        />
      </Container>
    </div>
  );
}

export default App;