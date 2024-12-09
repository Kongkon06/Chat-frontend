import { ChangeEvent, useState } from "react";
import { Dialogbox } from "./Dialogbox";
import { useSelector } from "react-redux";
import { Socket } from "socket.io-client";
export function Chatbox({socket}:{socket:Socket}) {
  const [Text,settext] = useState("");
  const currentmsguser = useSelector((state:any) => state.msgInfo.currentmsg)
  const messenger = useSelector((state : any) => state.userInfo.value)
  const actualmessage = useSelector((state : any) => state.msgInfo.content);
  const Sendreq = async ()=>{
    if (!Text.trim()) return;
    const data = {
      user1:messenger.userId,
      user2:currentmsguser,
      message:{
        content: Text,
        user : messenger.userId
      }
    }
    socket.emit("message",data);
    settext("");
    console.log(data);
  }
  return <div className="w-full h-full flex flex-col py-4 px-2 border-2 border-slate-700 rounded-lg  bg-zinc-950">
    <div className="w-full h-full">
      <Dialogbox message="Hello to the Server" />
      {/*actualmessage.map((data : any)=>{
        return <div>
          <Dialogbox message={data.content}/>
        </div>
      }) */}
    </div>
    <div className="w-full rounded-full text-slate-200 font-md h-auto py-2 px-2 bg-zinc-900 flex justify-between ">
      <input id="msgbox" 
      value={Text}
      onChange={(e: ChangeEvent<HTMLInputElement>) => {
      settext(e.target.value)  
      }}
        onKeyDown={(e: React.KeyboardEvent<HTMLInputElement>) => {
          if (e.key == "Enter") {
            Sendreq();
          }
        }}
        className="w-full w-full rounded-full px-2 placeholder-slate-400 text-slate-200 bg-zinc-900 focus:border-none focus:outline-none focus:ring-none" placeholder="Type...">
      </input>
      <button onClick={() => {
    
      }} className=" bg-zinc-900 h-auto w-auto rounded-full p-2">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6 fill-orange-400">
          <path d="M3.478 2.404a.75.75 0 0 0-.926.941l2.432 7.905H13.5a.75.75 0 0 1 0 1.5H4.984l-2.432 7.905a.75.75 0 0 0 .926.94 60.519 60.519 0 0 0 18.445-8.986.75.75 0 0 0 0-1.218A60.517 60.517 0 0 0 3.478 2.404Z" />
        </svg>
      </button>

    </div>

  </div>
}