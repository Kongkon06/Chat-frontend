import axios from "axios";
import { useState } from "react"
import { URL } from "../Config/config";
import { useSelector } from "react-redux";

export function Createpost() {
    const [input, setinput] = useState("");
    const user = useSelector((state:any)=> state.userInfo.value)
    const handleInput = (e: React.FormEvent<HTMLTextAreaElement>) => {
        const textarea = e.currentTarget;
        textarea.style.height = "auto"; // Reset height to calculate new content height
        textarea.style.height = `${textarea.scrollHeight}px`; // Dynamically adjust height
        setinput(textarea.value); // Update the state
    };
    const Sendreq =async ()=>{
        axios.post(`${URL}post`,{
            userId:user.userId,
            content:input,
            date: "12-23-910"
        })
        setinput("");
    }
    return <div>
        <textarea
            value={input}
            onInput={handleInput}
            onKeyDown={(e: React.KeyboardEvent<HTMLTextAreaElement>) => {
                if (e.key == "Enter") {
                  Sendreq();
                }
              }}
            className="w-full min-h-36 max-h-56 overflow-hidden resize-none rounded-t-xl text-slate-200 bg-zinc-900 placeholder-zinc-700 p-2 outline-none"
            placeholder="What's on your mind today"
        />
        <div className=" flex justify-between items-center p-2 bg-zinc-800 rounded-b-xl">
            <div className="h-full flex items-center bg-zinc-800">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="size-6 stroke-zinc-500 mr-3">
                    <path d="M13.19 8.688a4.5 4.5 0 0 1 1.242 7.244l-4.5 4.5a4.5 4.5 0 0 1-6.364-6.364l1.757-1.757m13.35-.622 1.757-1.757a4.5 4.5 0 0 0-6.364-6.364l-4.5 4.5a4.5 4.5 0 0 0 1.242 7.244" />
                </svg>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="size-6 stroke-zinc-500">
                    <path d="m2.25 15.75 5.159-5.159a2.25 2.25 0 0 1 3.182 0l5.159 5.159m-1.5-1.5 1.409-1.409a2.25 2.25 0 0 1 3.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 0 0 1.5-1.5V6a1.5 1.5 0 0 0-1.5-1.5H3.75A1.5 1.5 0 0 0 2.25 6v12a1.5 1.5 0 0 0 1.5 1.5Zm10.5-11.25h.008v.008h-.008V8.25Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z" />
                </svg>
            </div>
            <button onClick={Sendreq} className=" bg-zinc-900 h-auto w-auto rounded-full p-2">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6 fill-orange-400">
                    <path d="M3.478 2.404a.75.75 0 0 0-.926.941l2.432 7.905H13.5a.75.75 0 0 1 0 1.5H4.984l-2.432 7.905a.75.75 0 0 0 .926.94 60.519 60.519 0 0 0 18.445-8.986.75.75 0 0 0 0-1.218A60.517 60.517 0 0 0 3.478 2.404Z" />
                </svg>
            </button>
        </div>
    </div>
}