import { useRouteError } from "react-router-dom";

const ErrorNotFound = () => {
  const error = useRouteError();

  return (
    <div id="error-page">
      <h1>Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <p>
        <i>{error && (error.statusText || error.message)}</i>
      </p>
    </div>
  );
}
export default ErrorNotFound