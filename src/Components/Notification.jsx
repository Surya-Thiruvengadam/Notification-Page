import images from "../images.js";

const Notification = ({ notif }) => {
  switch (notif.type) {
    case "react-to-post":
      return (
        <div className="notif-text">
          <p>
            <span className="user-name">{notif.name}</span> 
            <span className="txt">reacted to your recent post</span> 
            <span className="post-name">{notif.post}</span>
          </p>
          <time>{notif.actionAt}</time>
        </div>
      );
    case "follow":
      return (
        <div className="notif-text">
          <p>
            <span className="user-name">{notif.name}</span>
            <span className="txt">followed you</span>
          </p>
          <time>{notif.actionAt}</time>
        </div>
      );
    case "joined-group":
      return (
        <div className="notif-text">
          <p>
            <span className="user-name">{notif.name}</span>
            <span className="txt">has joined your group</span>
            <span className="group">{notif.groupName}</span>
          </p>
          <time>{notif.actionAt}</time>
        </div>
      );
    case "private-msg":
      return (
        <div className="private-msg">
          <div className="notif-text">
            <p>
              <span className="user-name">{notif.name}</span>
              <span className="txt">send you a private message</span>
            </p>
            <time>{notif.actionAt}</time>
          </div>
          <div className="msg">{notif.msg}</div>
        </div>
      );
    case "commented-pic":
      return (
        <>
          <div className="notif-text">
            <p>
              <span className="user-name">{notif.name}</span>
              <span className="txt">commented on your picture</span>
            </p>
            <time>{notif.actionAt}</time>
          </div>
          <div className="pic">
            <img src={images[notif.pic]} alt={notif.pic} />
          </div>
        </>
      );
    case "left-group":
      return (
        <div className="notif-text">
          <p>
            <span className="user-name">{notif.name}</span>
            <span className="txt">left the group</span>
            <span className="group">{notif.groupName}</span>
          </p>
          <time>{notif.actionAt}</time>
        </div>
      );

    default:
      return <>no notification</>;
  }
};

export default Notification;
