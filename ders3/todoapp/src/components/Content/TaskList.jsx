import Task from "./Task";

const TaskList = ({ list }) => {
  return (
    <div className="taskListWrapper">
      {list.map((task) => (
        <Task text={task.text} category={task.category} />
      ))}
    </div>
  );
};

export default TaskList;
