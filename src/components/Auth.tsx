import axios from "axios";
import { ChangeEvent, useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addUserInfo } from "../States/Userstore";
import { URL } from "../Config/config";
interface SignupInput {
  email?: string;
  name?: string,       //Auth
  username: string;
  password: string;
}
type Type = "signup" | "signin";
export function Auth() {
  const navigate = useNavigate();
  const [Type, setType] = useState<Type>("signin")
  const dispatch = useDispatch();
  const [postInputs, setPostInputs] = useState<SignupInput>({
    email: "",
    name: '',
    password: "",
    username: "",
  });

  async function sendRequest() {
    const res = await axios.post(`${URL}user/` + Type, {
      email: postInputs.email,
      password: postInputs.password,
      username: postInputs.username,
      name: postInputs.name
    })

    console.log(res.data);
    dispatch(addUserInfo(res.data))
    navigate("/Home");
  }
  function Assign() {
    if (Type === "signin") {
      setType("signup")
    } else {
      setType("signin");
    }
  }
  return (
    <div className=" h-screen font-dm-sans flex justify-center">
      <div className=" flex justify-center flex-col p-2 h-auto sm:w-auto lg:w-2/5">
        <div className="flex justify-center font-extrabold mb-3 sm:text-xl lg:text-3xl">Create an account</div>
        <div className="flex justify-center mb-3">
          <div>{Type === "signup" ? "Already hava an account?" : "Don't have an account"}</div>
          <div role="button" onClick={Assign} className="underline hover:underline-offset-auto">{Type === "signup" ? "signin" : "Sign up"}</div>
        </div>
        <div>
          {Type == "signup" ? <LabelledInput labell="Email" placeholder="user12@email" onchange={(e) => { setPostInputs(c => ({ ...c, email: e.target.value })) }} /> : null}
          {Type == "signup" ? <LabelledInput labell="Name" placeholder="Jhone" onchange={(e) => { setPostInputs(c => ({ ...c, name: e.target.value })) }} /> : null}
          <LabelledInput labell="Username" placeholder="Enter username" onchange={(e) => { setPostInputs(c => ({ ...c, username: e.target.value })) }} />

          <LabelledInput labell="Password" type="password" placeholder="" onchange={(e) => { setPostInputs(c => ({ ...c, password: e.target.value })) }} />

          <button type="button" onClick={sendRequest} className=" w-full mt-9 text-white font-bold bg-indigo-700 hover:bg-indigo-600 rounded-lg sm:text-md lg:text-2xl px-5 py-2.5 me-2 mb-2 dark:bg-indigo-700 dark:hover:bg-indigo-700 focus:outline-none dark:focus:ring-indigo-700">{Type === "signup" ? "Sign up" : "Sign in"}</button>
        </div></div>
    </div>
  );
}

interface LabelledInputtype {
  labell: string,
  placeholder: string,
  onchange: (e: ChangeEvent<HTMLInputElement>) => void,
  type?: string
}
function LabelledInput({ labell, placeholder, onchange, type }: LabelledInputtype) {
  return <div className="w-full font-dm-sans mb-3">
    <div className=" w-64 pr-3 flex justify-start sm:text-lg lg:text-2xl font-bold mb-3 ">{labell}</div>
    <div className="">
      <input
        type={type || "text"}
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full h-12 ps-10 p-2.5 dark:bg-slate-950 dark:border-gray-600 dark:placeholder-slate-200 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 focus:bg-white focus:text-black"
        placeholder={placeholder} onChange={onchange}
      />
    </div>
  </div>
}
