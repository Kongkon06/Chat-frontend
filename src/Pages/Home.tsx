// src/Pages/Home.tsx
import { useEffect } from "react";
import { Appbar } from "../components/Appbar";
import { Card } from "../components/Card";
import { incremented } from "../States/State";
import { useSelector, useDispatch } from "react-redux";
import axios from "axios";
import { URL } from "../Config/config";
import { Sidebar } from "../components/Sidebar";
import { Createpost } from "../components/Createpost";

export function Home() {

  const dispatch = useDispatch();
  const posts = useSelector((state: any) => state.user.value)
  const req = async () => {
    const res = await axios.get(`${URL}post`);
    dispatch(incremented(res.data.posts));
    console.log(res.data.posts)
  };

  useEffect(() => {
    req();
  }, []);

  return (
    <div className="h-auto w-full ">
      <Appbar />
      <div className="w-full h-auto pt-12 flex ">
        <div className="w-auto sm:w-1/5 h-auto bg-neutral-950">
          <Sidebar />
        </div>
        <div className="w-full flex flex-col sm:w-4/5 px-16 sm:px-10 pt-10 h-auto bg-neutral-950">
          <div className="mb-4">
           <Createpost/>
          </div>
          {posts.map((post: any) => (
            <div className="h-auto w-auto flex justify-center">
              <Card postId={post._id} content={post.content} username={post.userInfo[0].username} userId={post.userId} like={post.likes.length} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
