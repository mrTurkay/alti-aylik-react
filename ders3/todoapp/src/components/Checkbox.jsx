import { useEffect, useState } from "react";
import { ReactComponent as Unchecked } from "../assets/unchecked.svg";
import { ReactComponent as Checked } from "../assets/checked.svg";

const Checkbox = ({ onChange }) => {
  const [isChecked, setIsChecked] = useState();

  useEffect(() => {
    onChange(isChecked);
  }, [isChecked]);

  return (
    <button
      className="wrapperButton"
      onClick={() => {
        setIsChecked(!isChecked);
      }}
    >
      {isChecked ? <Checked /> : <Unchecked />}
    </button>
  );
};

export default Checkbox;
