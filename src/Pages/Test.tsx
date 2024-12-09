import axios from "axios";
import { useEffect, useState } from "react"
export function Test(){
    interface ProfilePost{
          name:string;
          username:string;
          userId:string;
          followers:[];
          Bio?:string;
          posts:[{
            content:string,
            likes:[]
          }]
      }
      const [profileInfo, setProfile] = useState<ProfilePost>({
          name:"",
          username:"",
          userId:"",
          followers:[],
          posts:[{
            content:"",
            likes:[]
          }]
      });
      const Sendreq = async ()=>{
        const res = await axios.post(`${URL}/user/userInfo`);
        setProfile(res.data);
        console.log(res.data);
      }
      useEffect(()=>{
        Sendreq();
      },[])
    return <div className="w-full text-red-500 bg-indigo-400">
        {profileInfo.posts.map((data)=>(<div>
            {data.content}
        </div>))}
    </div>
}