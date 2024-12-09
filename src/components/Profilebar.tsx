import axios from "axios";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom"
import { URL } from "../Config/config";

export function Profilebar({ username, userId }: { username: string, userId: string }) {
  const navigate = useNavigate();
  const user = useSelector((state:any)=>(state.userInfo.value));
  const follow = async ()=>{ // THis fucntion adds followers
    console.log(user.userId);
    await axios.put(`${URL}user/follow`,{
      userId:userId,
      followerId:user.userId
    })
  }
  return <div className="w-full h-auto flex justify-between items-center">
    <div className="flex items-center">
      <div role="button" onClick={() => navigate(`/${username}`)} className="w-16 h-16 mr-3 rounded-full bg-orange-200">
      </div><div role="button" onClick={() => navigate(`/${username}`)} className="text-lg text-slate-200 font-semibold">
        {username}
      </div>
    </div>
    <div role="button" onClick={follow} className="w-auto h-2/3 bg-slate-200 flex items-center text-slate-900 text-lg rounded-xl font-semibold p-2">
      Follow
    </div>
  </div>
}
