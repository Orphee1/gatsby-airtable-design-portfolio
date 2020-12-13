import React, { useState } from "react"
import sublinks from "../constants/links"

const GatsbyContext = React.createContext()



const GatsbyProvider = ({ children }) => {
  const [isSideBarOpen, setIsSideBarOpen] = useState(false)
  const [links, setLinks] = useState(sublinks)

  const showSideBar = () => {
    setIsSideBarOpen(true)
  }
  const hideSideBar = () => {
    setIsSideBarOpen(false)
  }

  return (
    <GatsbyContext.Provider
      value={{ isSideBarOpen, links, showSideBar, hideSideBar }}
    >
      {children}
    </GatsbyContext.Provider>
  )
}

export { GatsbyContext, GatsbyProvider }
