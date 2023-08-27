import { useState } from "react";
import Checkbox from "../Checkbox";
import Chip from "../Chip";

const Task = ({ text, category }) => {
  const [isDone, setIsDone] = useState();

  return (
    <div className="taskWrapper">
      <Checkbox onChange={(isChecked) => setIsDone(isChecked)} />
      <p className={isDone && "doneText"}>{text}</p>
      {category && <Chip>{category}</Chip>}
    </div>
  );
};

export default Task;
