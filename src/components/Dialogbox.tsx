export function Dialogbox({ message }: { message: string }) {
    return <div className="w-auto mb-2 py-2 px-4 border-2 border-lime-600 bg-slate-700 text-slate-400 rounded-xl h-auto">
      {message}
    </div>
  }