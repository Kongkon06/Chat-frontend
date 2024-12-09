export function MsgName({name}:{name:string}){
    return <div className="h-auto w-full p-2 rounded-full bg-zinc-950 text-lg text-slate-200 flex items-center">
        <div className="h-10 w-10 rounded-full mr-2 bg-slate-200">
        </div>
        <div>{name}</div>
    </div>
}