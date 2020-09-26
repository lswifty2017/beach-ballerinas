import React, { useState, useEffect } from "react"
import ReactMarkdown from "react-markdown"
import "./notification-bar.scss"
import ExitIcon from "../../assets/svgs/circle-exit.svg"

const NotificationBar = ({ content }) => {
  const [notificationBarState, setNotificationBarState] = useState("")

  useEffect(() => {
    setTimeout(() => {
      setNotificationBarState("active")
    }, 3000)
  }, [])

  return (
    <div className={`notification-bar ${notificationBarState}`}>
      <ReactMarkdown source={content} />
      <button
        aria-label="close notification"
        className="notification-bar__close"
        onClick={() => {
          setNotificationBarState("")
        }}
      >
        <ExitIcon />
      </button>
    </div>
  )
}

export default NotificationBar
