import { Link } from "react-router-dom";

const NotFoundPage = () => {
  return (
    <>
      <div>Page Not Found</div>
      <div>
        <Link to="/">Go To Home Page</Link>
      </div>
    </>
  );
};

export default NotFoundPage;
