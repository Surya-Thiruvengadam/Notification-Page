import { useEffect, useState } from "react";
import "./App.css";
import Notification from "./Components/Notification.jsx";
import notifJson from "../messages.json";
import avatars from "./avatars.js";

function App() {
  const [unreadCount, setUnreadCount] = useState(0);
  const [notification, setNotifications] = useState(notifJson);

  useEffect(() => {
    let count = 0;
    notification.forEach((notif) => !notif.read && count++);
    setUnreadCount(count);
  }, [notification]);
  const markAllAsRead = () => {
    setNotifications((notification) =>
      notification.map((nt) => ({ ...nt, read: true }))
    );
  };

  const markAsReaad = (notifId) => {
    setNotifications((notification) =>
      notification.map((nt) => (nt.id == notifId ? { ...nt, read: true } : nt))
    );
  };
  return (
    <div className="container">
      <div className="notif-cnt">
        <header>
          <h1>Notification</h1>
          <span className="unread-count">{unreadCount}</span>
          <button onClick={markAllAsRead}>Mark all as read</button>
        </header>
        <main>
          {notification.map((notif) => {
            return (
              <div
                className="notif"
                read={`${notif.read}`}
                onClick={() => markAsReaad(notif.id)}
                key={notif.avatar}
              >
                <img
                  src={avatars[notif.avatar]}
                  alt={notif.avatar}
                  className="avatar"
                />
                <Notification notif={notif} />
              </div>
            );
          })}
        </main>
      </div>
    </div>
  );
}

export default App;
