import Modal from "../../components/ui/Modal";
import TaskForm from "./TaskForm";
import { useTasks } from "../../context/TaskContext";

function TaskModal() {
  const {
    isModalOpen,
    closeModal,
    editingTask,
  } = useTasks();

  return (
    <Modal
      open={isModalOpen}
      onClose={closeModal}
    >
      <h2 className="mb-5 text-2xl font-bold">
        {editingTask
          ? "Edit Task"
          : "Create New Task"}
      </h2>

      <TaskForm />
    </Modal>
  );
}

export default TaskModal;