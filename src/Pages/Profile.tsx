import { useEffect, useState } from "react";
import { Appbar } from "../components/Appbar";
import axios from "axios";
import { Buttons } from "../components/Buttons";
import { Sidebar } from "../components/Sidebar";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { URL } from "../Config/config";
import { Userpost } from "../components/Userposts";
import { increamentedmsguser, incremented } from "../States/MgsStore";

export function Profile() {
  const navigte = useNavigate();
  interface ProfilePost {
    _id:string;
    followers: [];
    name: string;
    Bio?: string;
    posts: [{
      content: string,
      likes: []
    }];
    username: string;
    userId: string;
  }
  const username = useParams();
  const user = useSelector((state: any) => state.userInfo.value);
  const [profileInfo, setProfile] = useState<ProfilePost | null>(null);
  async function reqSend() {
    const res = await axios.post(`${URL}user/userInfo`, {
      username: username.Profile
    })
    setProfile(res.data.data[0]);
    console.log(res.data.data[0]);
  }
  useEffect(() => {
    reqSend();
  }, [username]);

  return (

    <div className="h-screen w-full bg-zinc-900">

      <Appbar />

      <div className="w-full h-full pt-12 flex">

        <div className="w-1/5 h-full bg-neutral-200">
          <Sidebar />
        </div>



        <div className="w-4/5 p-4 flex flex-col ">

          <div className="w-full rounded-t-2xl h-48 z-10 bg-zinc-700 relative">

            <div className="absolute left-1/2 -bottom-24 transform -translate-x-1/2 h-48 w-48 flex justify-center items-center bg-slate-700 rounded-full border-4 border-indigo-500 group">
              <div className="text-transparent bg-transparent">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  className="hidden size-6 stroke-current group-hover:flex group-hover:stroke-white"
                >
                  <path d="M6.827 6.175A2.31 2.31 0 0 1 5.186 7.23c-.38.054-.757.112-1.134.175C2.999 7.58 2.25 8.507 2.25 9.574V18a2.25 2.25 0 0 0 2.25 2.25h15A2.25 2.25 0 0 0 21.75 18V9.574c0-1.067-.75-1.994-1.802-2.169a47.865 47.865 0 0 0-1.134-.175 2.31 2.31 0 0 1-1.64-1.055l-.822-1.316a2.192 2.192 0 0 0-1.736-1.039 48.774 48.774 0 0 0-5.232 0 2.192 2.192 0 0 0-1.736 1.039l-.821 1.316Z" />
                  <path d="M16.5 12.75a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0ZM18.75 10.5h.008v.008h-.008V10.5Z" />
                </svg>
              </div>
            </div>

          </div>
          <div className="mt-24 w-full flex justify-center pl-4 text-slate-700">{username.Profile}
          </div>
          <div className="w-56">
            {user.username === username.Profile ? (<div>
              <Buttons fn={()=>{}}>Edit Profile</Buttons>
            </div>) : null}
          </div>
          <div className="mt-7 w-28 h-auto flex flex-between pl-4 items-center text-slate-900">
            <div className="mr-3 text-xl h-full">BIO</div>
            {user.username === username.Profile ? (<div>
              <button className="bg-green-700 rounded-2xl h-auto p-2 text-slate-100 text-xl" >Edit</button>
            </div>) : null}
          </div>
          <div className=" w-full mt-7 flex pl-4">
            <div className="text-indigo-500 font-bold text-lg mr-4">Followers</div>
            <div>{user.followers}</div>
            <div className="text-indigo-500 font-bold text-lg mr-2">Following</div>
            <div>{user.follow}</div>
          </div>
          <div className=" flex mt-3 pl-4 flex justify-between w-56">
            <Buttons fn={()=>{}}>Follow</Buttons>
            <Msg username={username.Profile || ""} userId={profileInfo?._id|| ""} text="Message" />
          </div>
          <div className="mt-10 flex justify-center pl-4">
            <div className="w-56">
              {user.username === username.Profile ? (<div>
                <Buttons fn={()=>{
                  navigte('/Addpost')
                }}>Create post</Buttons>
              </div>) : null}
            </div>
          </div>
          <div>
            {profileInfo?.posts?.map((data, index) => (
              <div key={index}>
              <Userpost like={data.likes.length.toString()} username={user.username} content={data.content}/>
              </div>
            ))}
          </div>
        </div>
      </div>

    </div>

  );

}

function Msg({text,username,userId}:{text:string,username:string,userId : string}){
  const navigate = useNavigate();
  const dispatch = useDispatch();
  console.log(userId);
  const Send = (()=>{
    dispatch(increamentedmsguser(userId));
    console.log(userId);
    navigate(`/Messages`);
  })
  return <div role="button" onClick={Send} className="w-2/3 h-auto mb-4 flex justify-center bg-slate-900 text-slate-100 text-xl font-semibold rounded-full  p-2 hover:bg-slate-400 hover:text-slate-700">
      {text}
  </div>
}
