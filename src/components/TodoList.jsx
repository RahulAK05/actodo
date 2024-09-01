import { useState } from "react";
import Todoitem from "./Todoitem";

function TodoList(props) {
  const activityarr = props.activityarr;
  const setactivityarr = props.setactivityarr;
  return (
    <div className="bg-[#BDB4EA] border rounded-md p-2 flex-grow">
      <h1 className="text-2xl font-medium ">Today's Activity</h1>

      {activityarr.length === 0 ? <p>You haven't added anything</p> : ""}
      {activityarr.map(function (item, index) {
        return (
          <Todoitem
            item={item}
            index={index}
            activityarr={activityarr}
            setactivityarr={setactivityarr}
          ></Todoitem>
        );
      })}
    </div>
  );
}

export default TodoList;
