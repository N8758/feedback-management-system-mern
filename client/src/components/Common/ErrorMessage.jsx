const ErrorMessage = ({
  message,
}) => {
  if (!message) {
    return null;
  }

  return (
    <div className="common-error-message">
      {message}
    </div>
  );
};

export default ErrorMessage;