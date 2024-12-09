import { ChangeEvent } from "react";
import { useNavigate } from "react-router-dom"

export function Appbar() {
  const navigate = useNavigate();
  return <div
    role="button"
    onClick={() => navigate('/Home')}
    className="w-full p-2 border-b-2 border-zinc-900 flex items-center bg-zinc-950 fixed z-20"
  >
    <div className="w-1/5 flex justify-center text-slate-100 font-bold sm:text-3xl">Swify</div>
    <div className="w-3/5 px-2 flex justify-center items-center rounded-l-full">
      <div className=" w-4/5 px-2 bg-zinc-900 flex items-center rounded-full">
        <svg role="button" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="size-4 stroke-slate-200 sm:size-6">
          <path d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
        </svg>
        <input onChange={(e: ChangeEvent<HTMLInputElement>) => { }}
          onKeyDown={(e: React.KeyboardEvent<HTMLInputElement>) => {
            if (e.key == "Enter") { }
          }}
          className=" w-full rounded-r-full p-2 placeholder-zinc-700 text-slate-200 bg-zinc-900 focus:border-none focus:outline-none focus:ring-none text-sm sm:text-medium" placeholder="Type...">
        </input>
      </div>

    </div>
  </div>

}
