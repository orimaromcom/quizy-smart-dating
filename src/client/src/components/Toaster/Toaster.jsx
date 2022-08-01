import { Toast } from "monday-ui-react-core";

export default function Toaster({
  isError,
  hideToasterAction,
  message,
  isSuccess,
}) {
  return isError ? (
    <Toast
      id="toaster"
      type={isError ? Toast.types.NEGATIVE : Toast.types.POSITIVE}
      open={isError || isSuccess}
      autoHideDuration={5000}
      // style={{ width: "100vw" }}
      className="monday-storybook-toast_wrapper"
      onClose={() => {
        hideToasterAction();
      }}
    >
      {message}
    </Toast>
  ) : null;
}
