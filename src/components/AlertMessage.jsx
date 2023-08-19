import { useSelector, useDispatch } from "react-redux";
import { changeAlertMessage } from "../redux/actions";

function AlertMessage() {
  const alertMessage = useSelector((state) => state.alertMessage);
  const dispatch = useDispatch();
  const closeAlertMessage = {
    show: false,
    color: "green",
    text: "",
  };

  return (
    <>
      {alertMessage.show && (
        <div
          className={`flex items-center max-w-4xl p-4 mb-4 text-${alertMessage.color}-800 rounded-lg bg-${alertMessage.color}-50 mx-auto`}
          role="alert"
        >
          <svg
            className="flex-shrink-0 w-4 h-4"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill={alertMessage.color}
            viewBox="0 0 20 20"
          >
            <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z" />
          </svg>
          <div className="ml-3 text-sm font-medium">{alertMessage.text}</div>
          <button
            type="button"
            className={`ml-auto -my-1.5 bg-${alertMessage.color}-50 text-${alertMessage.color}-500 rounded-lg focus:ring-2 focus:ring-${alertMessage.color}-400 p-1.5 hover:bg-${alertMessage.color}-200 inline-flex items-center justify-center h-8 w-8`}
            data-dismiss-target="#alert-3"
            aria-label="Close"
            onClick={() => dispatch(changeAlertMessage(closeAlertMessage))}
          >
            <span className="sr-only">Close</span>
            Close
          </button>
        </div>
      )}
    </>
  );
}
export default AlertMessage;
