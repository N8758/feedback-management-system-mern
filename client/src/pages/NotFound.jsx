import {
  Link,
} from "react-router-dom";

const NotFound = () => {
  return (
    <div className="notfound-page">
      <h1 className="notfound-title">
        404
      </h1>

      <p className="notfound-text">
        Page Not Found
      </p>

      <Link
        to="/"
        className="notfound-button"
      >
        Go Home
      </Link>
    </div>
  );
};

export default NotFound;