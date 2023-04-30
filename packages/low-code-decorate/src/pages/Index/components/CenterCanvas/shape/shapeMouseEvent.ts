import { ComponentObj } from "@/types/basicStore"
import { Dispatch, useState } from "react"

const useMouseEvent = (curComponentDispath: Dispatch<ComponentObj>) => {
  const [display, setDispaly] = useState(false)

  return {
    display,
    setDispaly
  }
}

export default useMouseEvent