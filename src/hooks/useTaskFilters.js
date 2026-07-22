import { useMemo } from "react";

export default function useTaskFilters(
  tasks,
  search,
  priority,
  sort
) {
  return useMemo(() => {
    let filtered = [...tasks];

    if (search) {
      filtered = filtered.filter(
        (task) =>
          task.title
            .toLowerCase()
            .includes(search.toLowerCase()) ||
          task.description
            .toLowerCase()
            .includes(search.toLowerCase())
      );
    }

    if (priority !== "all") {
      filtered = filtered.filter(
        (task) => task.priority === priority
      );
    }

    switch (sort) {
      case "newest":
        filtered.sort(
          (a, b) => b.createdAt - a.createdAt
        );
        break;

      case "oldest":
        filtered.sort(
          (a, b) => a.createdAt - b.createdAt
        );
        break;

      case "priority":
        const order = {
          high: 3,
          medium: 2,
          low: 1,
        };

        filtered.sort(
          (a, b) =>
            order[b.priority] - order[a.priority]
        );
        break;

      default:
        break;
    }

    return filtered;
  }, [tasks, search, priority, sort]);
}