function TaskToolbar({
  search,
  setSearch,
  priority,
  setPriority,
  sort,
  setSort,
}) {
  return (
    <div className="mb-8 grid gap-4 md:grid-cols-3">
      <input
        placeholder="Search..."
        value={search}
        onChange={(e) =>
          setSearch(e.target.value)
        }
        className="rounded-lg border p-3"
      />

      <select
        value={priority}
        onChange={(e) =>
          setPriority(e.target.value)
        }
        className="rounded-lg border p-3"
      >
        <option value="all">All Priorities</option>

        <option value="high">High</option>

        <option value="medium">Medium</option>

        <option value="low">Low</option>
      </select>

      <select
        value={sort}
        onChange={(e) =>
          setSort(e.target.value)
        }
        className="rounded-lg border p-3"
      >
        <option value="newest">
          Newest
        </option>

        <option value="oldest">
          Oldest
        </option>

        <option value="priority">
          Priority
        </option>
      </select>
    </div>
  );
}

export default TaskToolbar;