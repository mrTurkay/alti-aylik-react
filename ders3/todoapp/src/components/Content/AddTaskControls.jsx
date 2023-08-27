import { useState } from "react";
import { ReactComponent as ButtonSvg } from "../../assets/gridicons_add-outline.svg";

const AddTaskControls = (props) => {
  const onAddClick = props.onAddClick;

  const [text, setText] = useState("");

  const clear = () => {
    setText("");
  };

  const handleAddClick = () => {
    if (text.length < 3) return;
    onAddClick(text);
    clear();
  };

  return (
    <>
      <div class="addTaskControlsWrapper">
        <input
          placeholder="Add a new task insdie ‘All’ category"
          className="input"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <button className="wrapperButton" onClick={handleAddClick}>
          <ButtonSvg />
        </button>
      </div>
    </>
  );
};

export default AddTaskControls;
