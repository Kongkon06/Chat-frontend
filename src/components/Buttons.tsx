import { ReactNode } from "react";
export function Buttons({ children, fn }: { children: ReactNode, fn: () => any }){
    return <div role="button" onClick={fn} className="w-2/3 h-auto mb-4 flex justify-center bg-slate-950 text-slate-100 text-xl font-semibold rounded-full  p-2 hover:bg-slate-200 hover:text-slate-700">
        {children}
    </div>
}