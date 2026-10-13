import { useEffect, useState, useSyncExternalStore } from "react";
import { createSpeechController } from "./speech";

// Binds a speech controller to a component: re-renders on status changes only
// (word progress goes through `onProgress`), and always stops speech when the
// component unmounts or the page is left.
export default function useSpeech() {
  const [controller] = useState(createSpeechController);
  const state = useSyncExternalStore(controller.subscribe, controller.getState);

  useEffect(() => {
    const stopWatchingVoices = controller.watchVoices();
    window.addEventListener("pagehide", controller.stop);
    return () => {
      stopWatchingVoices();
      window.removeEventListener("pagehide", controller.stop);
      controller.stop();
    };
  }, [controller]);

  return { ...controller, status: state.status, error: state.error };
}
