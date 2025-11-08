import { useRouteError } from "react-router";

function ErrorElement() {
  const error = useRouteError();
  if (error && error.message) {
    return <div>{error.message}</div>;
  } else {
    return <div>Error</div>;
  }
}

export default ErrorElement;
