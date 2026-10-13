import { topics, tourOrder, welcome } from "./script";

/**
 * A responder turns a visitor request into a reply the panel can show:
 *
 *   respond({ topicId }) -> Promise<{ id, label, text, sectionId }>
 *
 * The panel only depends on this shape. Today it is backed by the prewritten
 * script. To add real conversations later, write a second responder that
 * posts `{ question }` to a server endpoint (for example a Netlify Function)
 * which calls the LLM with the approved portfolio content, and return the same
 * reply shape. API keys belong on that server, never in REACT_APP_* variables,
 * which are bundled into public JavaScript.
 *
 * Voice is separate: see speech.js for the matching seam for hosted
 * text-to-speech.
 */
export function createScriptedResponder() {
  const byId = new Map(topics.map((topic) => [topic.id, topic]));

  return {
    welcome,
    topics,
    tour: tourOrder.map((id) => byId.get(id)),
    respond({ topicId }) {
      return Promise.resolve(byId.get(topicId) || welcome);
    },
  };
}
