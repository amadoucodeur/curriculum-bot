"use client"

import { useState } from "react"

export default function Home() {

  const [code, setCode] = useState('')

  const handlesubmit = async (event) => {
    event.preventDefault()
    const formData = new FormData(event.currentTarget)
    const prompt = formData.get('prompt')
    const result = await fetch('/api',{
      method: "POST",
      body: JSON.stringify(prompt)
    })
    const json = await result
    console.log(json)
    setCode(json.code)

  }
  return (
    <main className="h-full relative">
      <h1 className="font-bold text-2xl">Curriculum Bot</h1>
      <pre>{code}</pre>
      {/* <textarea  className="h-full outline-none border-2"></textarea> */}
      <form onSubmit={handlesubmit} className=" fixed bottom-4 flex items-center justify-center w-full flex-row gap-2" >
        <input name="prompt" className="flex-grow-0 border border-gray-500 rounded outline-none" type="text" />
        <button type="submit"  className="bg-slate-800 rounded text-white p-2">Send</button>
      </form>
    </main>
  );
}
