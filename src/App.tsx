import { useState } from 'react'

import { Button } from "@/components/ui/button"

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="flex flex-col items-center justify-center space-y-4 max-w-[300px] mx-auto">
        <div className="flex flex-row w-[300px] h-[36px] justify-between items-center">
          <div>Todo</div>
          <div className="z-50">
            <ModeToggle />
          </div>
        </div>
        <Calendar
          mode="single"
          selected={date}
          onSelect={setDate}
          className="rounded-md border shadow-sm"
          captionLayout="dropdown"
        />
        <Button>Click me</Button>
        <Button>Click me</Button>
      </div>
    </>
  )
}

export default App
