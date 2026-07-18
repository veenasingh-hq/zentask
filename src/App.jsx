import { useTasks } from "./context/TaskContext";

function App() {
  const { tasks } = useTasks();

  return (
    <main className="min-h-screen bg-slate-100 p-10">
      <div className="mx-auto max-w-4xl">
        <h1 className="mb-8 text-4xl font-bold text-slate-800">
          ZenTask
        </h1>

        <div className="rounded-xl bg-white p-6 shadow">
          <h2 className="mb-4 text-xl font-semibold">
            Current Tasks
          </h2>

          {tasks.map((task) => (
            <div
              key={task.id}
              className="mb-4 rounded-lg border p-4"
            >
              <h3 className="font-bold">{task.title}</h3>

              <p>{task.description}</p>

              <div className="mt-2 flex gap-4 text-sm">
                <span>Status: {task.status}</span>

                <span>Priority: {task.priority}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}

export default App;
