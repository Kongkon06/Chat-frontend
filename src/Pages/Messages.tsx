import { useDispatch, useSelector } from "react-redux";
import { Appbar } from "../components/Appbar";
import { Chatbox } from "../components/Chatbox";
import { Sidebar } from "../components/Sidebar";
import { MsgName } from "./MsgName";
import { useEffect } from "react";
import { io, Socket } from "socket.io-client";
import {  incremented } from "../States/MgsStore";
import axios from "axios";
import { URL } from "../Config/config";

export function Messages() {
  const msges = useSelector((state: any) => state.msgInfo.message);
  const webstate = useSelector((state: any) => state.webInfo.value);
  const socket: Socket = io("ws://localhost:3001");
  const dispatch = useDispatch();
  const userInfo = useSelector((state:any) => state.userInfo.value)
  function Wsconnect(){
    socket.on("connect", () => {
      console.log("Connected: ", socket.id);
    });

    socket.on("disconnect", () => {
      console.log("Disconnected: ", socket.id);
    });

    socket.on("message", (data) => {
      console.log(data);
    })
    return () => {
      socket.disconnect();
    };
  }
  async function getMessages(){
    const res = await axios.post(`${URL}user/test`,{
      userId : userInfo.userId
    })
    const data = res.data.msg;
    data.map((e:any)=>console.log(e))
  }
  useEffect(() => {
    Wsconnect();
    getMessages();
  }, [webstate]);

  return (
    <div className="h-screen bg-zinc-950">
      <Appbar />
      <div className="w-full h-full pt-12 flex">
        <div className="w-1/5 h-full bg-neutral-200">
          <Sidebar />
        </div>
        <div className="w-4/5 p-4">
          <div className="w-full h-full flex bg-zinc-950 rounded-2xl">
            {/* Sidebar */}
            <div className="w-1/5 rounded-l-2xl p-2 flex flex-col bg-zinc-900 h-full">
              <MsgName name="Kongkon" />
              {/* msges.map((data: { username: string }, index: number) => (
                data.username ? ( // Render only if `username` is not empty
                  <div key={index}>
                    <MsgName name={data.username} />
                  </div>
                ) : null // Do not render anything if `username` is empty
              )) */}

            </div>
            <div className="w-4/5 h-auto">
              <Chatbox socket={socket} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}