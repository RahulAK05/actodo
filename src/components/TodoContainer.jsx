import Addtoform from "./Addtoform";
import TodoList from "./TodoList";
import { useState } from "react";

function Todocontainer() {
  const [activityarr, setactivityarr] = useState([
    { id: 1, activity: "Go for a walk" },
    { id: 2, activity: "Take Shower" },
  ]);

  return (
    <div>
      <div className="flex gap-5 flex-wrap">
        <Addtoform
          activityarr={activityarr}
          setactivityarr={setactivityarr}
        ></Addtoform>
        <TodoList
          activityarr={activityarr}
          setactivityarr={setactivityarr}
        ></TodoList>
      </div>
    </div>
  );
}

export default Todocontainer;
