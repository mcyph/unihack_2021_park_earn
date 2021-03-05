import { useState } from "react";
import Toast from "../controls/containers/Toast";

function Toasts() {
  let [toastClosed, setToastClosed] = useState(false);

  return <>
    <h2>Toasts</h2>
    <Toast type={Toast.TYPE.DEFAULT}>default toast</Toast>
    <Toast type={Toast.TYPE.PRIMARY}>primary toast</Toast>
    <Toast type={Toast.TYPE.SUCCESS}>success toast</Toast>
    <Toast type={Toast.TYPE.WARNING}>warning toast</Toast>
    <Toast type={Toast.TYPE.ERROR}>error toast</Toast>
    <h3>Close Event</h3>
    { !toastClosed &&
        <Toast type={Toast.TYPE.DEFAULT}
               onClose={() => {setToastClosed(true)}}>closable toast</Toast> }
  </>;
}

export default Toasts;
