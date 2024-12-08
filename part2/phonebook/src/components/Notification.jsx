const Notification = ({ message, isErr }) => {
  if (message === null) {
    return null;
  }

  if (isErr) {
    return <div className="error">{message}</div>;
  }
  else
    return <div className="success">{message}</div>;
};

export default Notification;