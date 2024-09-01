import Header from "../components/Header";
import Card from "../components/Card";
import Todocontainer from "../components/TodoContainer";
import { useLocation } from "react-router-dom";

function Landing() {
  const name = useLocation();
  return (
    <div className="bg-black p-10">
      <div className="bg-[#EFEFEF] p-10 border rounded-md">
        <Header name={name.state.user}></Header>
        <div className="flex justify-between gap-7 my-5 flex-wrap">
          <Card bgcolor={"#8272da"} title={"23"} subtitle={"Chennai"}></Card>
          <Card
            bgcolor={"#FD6663"}
            title={"DECEMBER 20"}
            subtitle={"14:23:08"}
          ></Card>
          <Card
            bgcolor={"#FCA201"}
            title={"Built using"}
            subtitle={"React"}
          ></Card>
        </div>
        <Todocontainer></Todocontainer>
      </div>
    </div>
  );
}

export default Landing;
