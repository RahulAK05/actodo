import { useState } from "react";

function Addtoform(props) {
  const activityarr = props.activityarr;
  const setactivityarr = props.setactivityarr;

  const [activity, setactivity] = useState("");

  function handlechange(event) {
    setactivity(event.target.value);
  }

  function addlist() {
    setactivityarr([
      ...activityarr,
      { id: activityarr.length + 1, activity: activity },
    ]);
    setactivity("");
  }

  return (
    <div className="flex flex-col gap-3">
      <h1 className="text-2xl font-medium">Manage Activities</h1>
      <div>
        <input
          value={activity}
          onChange={handlechange}
          placeholder="Next Activity?"
          className="border border-black bg-transparent p-1"
          type="text"
        ></input>
        <button
          onClick={addlist}
          className="bg-black text-white border border-black p-1"
        >
          Add
        </button>
      </div>
    </div>
  );
}

export default Addtoform;
