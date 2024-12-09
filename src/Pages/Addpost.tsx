import axios from "axios";
import { ChangeEvent, useState } from "react";
import { useSelector } from "react-redux";
import { Appbar } from "../components/Appbar";
import { URL } from "../Config/config";
export function Addpost(){
    const [postInputs,setInputs] = useState({
        content:"",
        date:"12-23-910"
    });
    const user = useSelector((state: any) => state.userInfo.value);
    const SendData = async()=>{
        axios.post(`${URL}post`,{
            userId:user.userId,
            content:postInputs.content,
            date:postInputs.date
        })
    }
    return <div className="h-screen w-full ">
    <Appbar />
    <div className="w-full h-full pt-12 flex justify-center items-center ">
    <div className="w-56 h-56 rounded-lg p-2 flex flex-col bg-indigo-400">
                <div className="text-slate-400 text-2xl w-auto flex justify-center ">Add Post</div>
                <div className="text-slate-400 text-lg w-auto flex justify-center ">
                    <input onChange={(e:ChangeEvent<HTMLInputElement> ) =>{
                        setInputs(c =>({...c,content :e.target.value}));
                    }} placeholder="Post text"/>
                </div>
                <button className="p-3 bg-red-300 rounded-xl mt-3" onClick={SendData}>Create post</button>
            </div>
    </div>
</div>
}