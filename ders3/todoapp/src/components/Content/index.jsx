import { useState } from "react";
import AddTaskControls from "./AddTaskControls";
import TaskList from "./TaskList";

const taskList = [
  { text: "Get a new helmet", category: "Security" },
  { text: "Purchase Milk & Corn Flakes", category: "Good" },
];

const Content = () => {
  const [list, setList] = useState(taskList);

  return (
    <div className="contentWrapper">
      <AddTaskControls
        onAddClick={(text) => setList([...list, { text: text }])}
      />
      <TaskList list={list} />
    </div>
  );
};

export default Content;
