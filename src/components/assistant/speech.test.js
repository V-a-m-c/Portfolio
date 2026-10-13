import { splitSentences } from './speech';

test('splits narration into sentences and keeps each offset', () => {
  const text = 'I work with Node.js and FastAPI. Email me at a.b@mail.com, please! Thanks';
  const parts = splitSentences(text);
  expect(parts.map((part) => part.text.trim())).toEqual([
    'I work with Node.js and FastAPI.',
    'Email me at a.b@mail.com, please!',
    'Thanks',
  ]);
  parts.forEach((part) => expect(text.slice(part.start, part.start + part.text.length)).toBe(part.text));
  expect(parts.map((part) => part.text).join('')).toBe(text);
});
