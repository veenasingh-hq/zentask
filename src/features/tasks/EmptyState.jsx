function EmptyState() {
  return (
    <div className="rounded-xl border-2 border-dashed bg-white p-16 text-center">
      <h2 className="text-3xl font-bold">
        📋
      </h2>

      <h3 className="mt-3 text-xl font-semibold">
        No Tasks Found
      </h3>

      <p className="mt-2 text-slate-500">
        Try changing your filters or create a
        new task.
      </p>
    </div>
  );
}

export default EmptyState;