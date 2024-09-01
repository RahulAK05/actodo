import { Link } from "react-router-dom";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Signup(props) {
  const [eusername, setEusername] = useState();
  const [epassword, setEpassword] = useState();
  const user = props.user;
  const setuser = props.setuser;
  const navigate = useNavigate();

  function handleUsername(event) {
    setEusername(event.target.value);
  }
  function handlePassword(event) {
    setEpassword(event.target.value);
  }
  function adduser() {
    setuser([...user, { username: eusername, password: epassword }]);
    navigate("/");
  }
  return (
    <div className="bg-black p-10">
      <div className="bg-[#EFEFEF] p-10 border rounded-md">
        <h1 className="text-3xl font-medium">Hey Hi</h1>
        <p>You can Signup here :)</p>
        <div className="flex flex-col gap-2 my-2">
          <input
            type="text"
            className="w-52 border-black border rounded-md bg-transparent p-1"
            placeholder="username"
            value={eusername}
            onChange={handleUsername}
          ></input>
          <input
            type="text"
            className="w-52 border-black border rounded-md bg-transparent p-1"
            placeholder="password"
            value={epassword}
            onChange={handlePassword}
          ></input>
          <input
            type="text"
            className="w-52 border-black border rounded-md bg-transparent p-1"
            placeholder="confirm password"
          ></input>
          <button
            onClick={adduser}
            className="bg-[#FCA201] w-24 p-1 rounded-md"
          >
            Sign up
          </button>
          <p>
            Already have an account?{" "}
            <Link className="underline" to={"/"}>
              Login
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Signup;
