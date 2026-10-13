import React, { useEffect, useRef, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Icon from "../ui/Icon";
import AssistantStage from "./AssistantStage";
import Caption from "./Caption";
import useSpeech from "./useSpeech";
import { createScriptedResponder } from "./responder";

const responder = createScriptedResponder();

function ControlButton({ icon, children, ...rest }) {
  return (
    <button
      type="button"
      className="inline-flex min-h-[2.5rem] items-center gap-1.5 rounded-full border border-line bg-surface px-3 text-[0.8125rem] font-medium text-ink-soft transition duration-200 hover:border-ink hover:text-ink active:scale-[0.97] disabled:opacity-40"
      {...rest}
    >
      {icon && <Icon name={icon} size={15} />}
      {children}
    </button>
  );
}

// Playback controls sit on the dark stage so they stay visible while the caption scrolls.
function StageButton({ icon, children, ...rest }) {
  return (
    <button
      type="button"
      className="inline-flex min-h-[2.25rem] items-center gap-1.5 rounded-full border border-night-line px-3 text-[0.8125rem] font-medium text-night-text transition duration-200 hover:border-accent-bright hover:text-accent-bright active:scale-[0.97]"
      {...rest}
    >
      <Icon name={icon} size={15} />
      {children}
    </button>
  );
}

function PrimaryButton({ children, ...rest }) {
  return (
    <button type="button" className="btn btn-primary min-h-[2.5rem] px-4" {...rest}>
      {children}
    </button>
  );
}

export default function AssistantPanel({ onClose }) {
  const [message, setMessage] = useState(responder.welcome);
  const [tourIndex, setTourIndex] = useState(null);
  const [voiceOn, setVoiceOn] = useState(false);
  const speech = useSpeech();
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const panelRef = useRef(null);

  useEffect(() => {
    if (panelRef.current) panelRef.current.focus();
  }, []);

  // The narration describes the home page, so stop it if the visitor leaves.
  const { stop } = speech;
  useEffect(() => {
    if (pathname !== "/") stop();
  }, [pathname, stop]);

  const present = async (topicId, { tour = null, voice = voiceOn } = {}) => {
    const reply = await responder.respond({ topicId });
    setMessage(reply);
    setTourIndex(tour);
    setVoiceOn(voice);
    if (reply.sectionId) navigate(`/#${reply.sectionId}`);
    if (voice) speech.speak(reply.text);
    else speech.stop();
  };

  const goToTourStep = (index) => present(responder.tour[index].id, { tour: index });

  const startOver = () => {
    speech.stop();
    setTourIndex(null);
    setMessage(responder.welcome);
  };

  const mute = () => {
    speech.stop();
    setVoiceOn(false);
  };

  const play = () => {
    setVoiceOn(true);
    speech.speak(message.text);
  };

  const onKeyDown = (event) => {
    if (event.key === "Escape") onClose();
  };

  const inTour = tourIndex !== null;
  const isWelcome = message.id === "welcome";
  const lastStep = inTour && tourIndex === responder.tour.length - 1;
  const voiceActive = voiceOn && speech.supported;
  const stageState = voiceActive ? speech.status : "idle";

  let caption = message.label;
  if (inTour) caption = `Tour · ${tourIndex + 1} of ${responder.tour.length} · ${message.label}`;
  else if (!isWelcome && message.id !== "intro") caption = `In Vamsi's words · ${message.label}`;

  return (
    <section
      ref={panelRef}
      role="dialog"
      aria-label="Portfolio assistant"
      tabIndex={-1}
      onKeyDown={onKeyDown}
      className="no-print pop-in fixed inset-x-3 bottom-3 z-50 flex max-h-[min(36rem,62dvh)] flex-col overflow-hidden rounded-2xl border border-night-line bg-paper shadow-lift focus:outline-none sm:inset-x-auto sm:bottom-5 sm:right-5 sm:max-h-[min(36rem,78dvh)] sm:w-[23.5rem]"
    >
      <AssistantStage state={stageState} voiceOn={voiceActive} onProgress={speech.onProgress} onClose={onClose}>
        {speech.supported && !isWelcome && (
          <div role="group" aria-label="Voice playback" className="flex flex-wrap gap-2 border-t border-night-line px-4 py-2.5">
            {speech.status === "speaking" && (
              <StageButton icon="pause" onClick={speech.pause}>
                Pause
              </StageButton>
            )}
            {speech.status === "paused" && (
              <StageButton icon="play" onClick={speech.resume}>
                Resume
              </StageButton>
            )}
            {speech.status === "idle" && (
              <StageButton icon="volume" onClick={play}>
                Play voice
              </StageButton>
            )}
            {speech.status !== "idle" && (
              <>
                <StageButton icon="replay" onClick={play}>
                  Replay
                </StageButton>
                <StageButton icon="volume-off" onClick={mute}>
                  Mute
                </StageButton>
              </>
            )}
          </div>
        )}
      </AssistantStage>

      <div className="flex-1 overflow-y-auto px-4 py-4">
        <p className="font-mono text-[0.6875rem] uppercase tracking-[0.14em] text-accent">{caption}</p>
        <Caption
          key={message.id}
          text={message.text}
          tracking={voiceActive && speech.status !== "idle"}
          onProgress={speech.onProgress}
        />

        {speech.error && (
          <p role="alert" className="mt-3 text-xs text-ink-soft">
            Voice playback stopped unexpectedly on this device. The caption above has the full text.
          </p>
        )}

        {!speech.supported && (
          <p className="mt-4 text-xs text-ink-mute">
            Voice playback is not available in this browser, so the introduction is shown as captions.
          </p>
        )}
      </div>

      <div className="flex flex-wrap gap-2 border-t border-line px-4 py-3">
        {inTour && (
          <>
            <ControlButton icon="chevron-left" onClick={() => goToTourStep(tourIndex - 1)} disabled={tourIndex === 0}>
              Back
            </ControlButton>
            {!lastStep && (
              <PrimaryButton onClick={() => goToTourStep(tourIndex + 1)}>
                Next
                <Icon name="chevron-right" size={16} />
              </PrimaryButton>
            )}
            <ControlButton onClick={startOver}>{lastStep ? "Finish tour" : "End tour"}</ControlButton>
          </>
        )}
        {!inTour && isWelcome && (
          <>
            <PrimaryButton onClick={() => present("intro", { voice: speech.supported })}>
              <Icon name={speech.supported ? "volume" : "play"} size={16} />
              Meet Vamsi
            </PrimaryButton>
            {speech.supported && (
              <ControlButton onClick={() => present("intro", { voice: false })}>Captions only</ControlButton>
            )}
          </>
        )}
        {!inTour && !isWelcome && (
          <>
            <PrimaryButton onClick={() => goToTourStep(0)}>
              Tour the portfolio
              <Icon name="chevron-right" size={16} />
            </PrimaryButton>
            <ControlButton onClick={startOver}>Start over</ControlButton>
          </>
        )}
      </div>

      {/* During the tour on small screens, Back and Next replace the shortcuts to keep the panel short. */}
      <nav
        aria-label="Jump to a section"
        className={`border-t border-line bg-surface px-4 py-3 ${inTour ? "hidden sm:block" : ""}`}
      >
        <ul className="flex flex-wrap gap-1.5">
          {responder.tour.map((topic) => (
            <li key={topic.id}>
              <button
                type="button"
                onClick={() => present(topic.id)}
                aria-current={message.id === topic.id ? "true" : undefined}
                className={`min-h-[2.25rem] rounded-full px-3 text-[0.8125rem] transition-colors duration-200 ${
                  message.id === topic.id ? "bg-ink text-white" : "bg-paper text-ink-soft hover:text-ink"
                }`}
              >
                {topic.label}
              </button>
            </li>
          ))}
        </ul>
      </nav>
    </section>
  );
}
