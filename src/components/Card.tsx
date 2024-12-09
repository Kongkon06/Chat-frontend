import axios from "axios";
import { Profilebar } from "./Profilebar";
import { URL } from "../Config/config";
import { useSelector } from "react-redux";


export function Card({ postId, content, username, userId, like }: { postId:string, content: string, username: string, userId: string, like: string }) {
    console.log(userId)
    const mainuser = useSelector((state :any)=>state.userInfo.userId);
    async function Sendreq(){
        await axios.put(`${URL}post/likes`,{
            userId:mainuser,
            postId:postId
        })
    }
    return <div className="w-full shadow-xl mb-7 h-auto flex ">
        <div className="w-full sm:w-2/3 bg-zinc-900 text-slate-200 rounded-l-xl p-3">
            <Profilebar username={username} userId={userId} />
            <div className="h-auto text-lg mb-2">
                {content}
            </div>
            <div className="h-auto flex">
                <div className="flex w-auto p-2 mr-4 rounded-xl">
                    <svg role="button" onClick={Sendreq} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="h-6 w-6 mr-1  bg-opacity-50 hover:fill-red-500 hover:stroke-red-500">
                        <path d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
                    </svg>
                    {like}
                </div>

                <div className="flex w-auto p-2 mr-2 rounded-xl hover:bg-orange-700 bg-opacity-5">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="size-6 mr-1">
                        <path d="M8.625 9.75a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H8.25m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H12m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0h-.375m-13.5 3.01c0 1.6 1.123 2.994 2.707 3.227 1.087.16 2.185.283 3.293.369V21l4.184-4.183a1.14 1.14 0 0 1 .778-.332 48.294 48.294 0 0 0 5.83-.498c1.585-.233 2.708-1.626 2.708-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0 0 12 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018Z" />
                    </svg>
                    {like}
                </div>
            </div>
        </div>
        <div className="hidden sm:block w-1/3 ml-10 bg-green-400 rounded-r-xl">
            comments
        </div>
    </div>
}