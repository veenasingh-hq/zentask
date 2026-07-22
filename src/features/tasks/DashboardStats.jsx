import { useTasks } from "../../context/TaskContext";

function StatCard({ title, value }) {
  return (
    <div className="rounded-xl bg-white p-5 shadow">
      <p className="text-slate-500">{title}</p>

      <h2 className="mt-2 text-3xl font-bold">
        {value}
      </h2>
    </div>
  );
}

function DashboardStats() {
  const { tasks } = useTasks();

  const todo = tasks.filter(
    (t) => t.status === "todo"
  ).length;

  const progress = tasks.filter(
    (t) => t.status === "in-progress"
  ).length;

  const done = tasks.filter(
    (t) => t.status === "done"
  ).length;

  return (
    <div className="mb-8 grid gap-4 md:grid-cols-4">
      <StatCard
        title="Total"
        value={tasks.length}
      />

      <StatCard
        title="Todo"
        value={todo}
      />

      <StatCard
        title="Progress"
        value={progress}
      />

      <StatCard
        title="Done"
        value={done}
      />
    </div>
  );
}

export default DashboardStats;