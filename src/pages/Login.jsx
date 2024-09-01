import { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

function Login(props) {
  const [eusername, setEusername] = useState();
  const [epassword, setEpassword] = useState();
  const [ruser, setruser] = useState(true);
  const navigate = useNavigate();

  const user = props.user;

  function handleUsername(event) {
    setEusername(event.target.value);
  }
  function handlePassword(event) {
    setEpassword(event.target.value);
  }

  function checkuser() {
    console.log(user);

    var userstatus = false;

    user.forEach(function (item) {
      if (item.username === eusername && item.password === epassword) {
        console.log("Login success");
        userstatus = true;
        navigate("/landing", { state: { user: eusername } });
      }
    });
    if (userstatus == false) {
      console.log("failed");
      setruser(false);
    }
  }

  return (
    <h1>
      <div className="bg-black p-10">
        <div className="bg-[#EFEFEF] p-10 border rounded-md">
          <h1 className="text-3xl font-medium">Hey Hi</h1>
          {ruser ? (
            <p>I help you manage your activities after you login:)</p>
          ) : (
            <p className="text-red-800">Please Sign up to login</p>
          )}

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
            <button
              onClick={checkuser}
              className="bg-[#8272DA] w-24 p-1 rounded-md"
            >
              Login
            </button>
            <p>
              Don't have an account?{" "}
              <Link className="underline" to={"/signup"}>
                Sign up
              </Link>
            </p>
          </div>
        </div>
      </div>
    </h1>
  );
}

export default Login;
