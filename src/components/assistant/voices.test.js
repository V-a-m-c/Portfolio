import { chooseVoice } from './voices';

const voice = (name, lang, localService = true) => ({ name, lang, localService });

const windowsVoices = [
  voice('Microsoft David - English (United States)', 'en-US'),
  voice('Microsoft Zira - English (United States)', 'en-US'),
  voice('Microsoft Hazel - English (United Kingdom)', 'en-GB'),
  voice('Microsoft Heera - English (India)', 'en-IN'),
  voice('Microsoft Ravi - English (India)', 'en-IN'),
  voice('Microsoft Hemant - Hindi (India)', 'hi-IN'),
];

test('prefers an Indian English male-sounding voice when one exists', () => {
  expect(chooseVoice(windowsVoices).name).toBe('Microsoft Ravi - English (India)');
  expect(chooseVoice([...windowsVoices].reverse()).name).toBe('Microsoft Ravi - English (India)');
});

test('falls back to another English male-sounding voice over an Indian female one', () => {
  const withoutRavi = windowsVoices.filter((item) => !item.name.includes('Ravi'));
  expect(chooseVoice(withoutRavi).name).toBe('Microsoft David - English (United States)');
});

test('recognises male-sounding voices from other platforms', () => {
  expect(
    chooseVoice([
      voice('Microsoft Neerja Online (Natural) - English (India)', 'en-IN', false),
      voice('Microsoft Prabhat Online (Natural) - English (India)', 'en-IN', false),
    ]).name
  ).toBe('Microsoft Prabhat Online (Natural) - English (India)');
  expect(chooseVoice([voice('Veena', 'en-IN'), voice('Rishi', 'en-IN'), voice('Samantha', 'en-US')]).name).toBe('Rishi');
  expect(
    chooseVoice([voice('Google UK English Female', 'en-GB', false), voice('Google UK English Male', 'en-GB', false)]).name
  ).toBe('Google UK English Male');
});

test('uses language preference when names say nothing about gender', () => {
  expect(chooseVoice([voice('English United States', 'en_US'), voice('English India', 'en_IN')]).name).toBe('English India');
  expect(chooseVoice([voice('Microsoft Zira - English (United States)', 'en-US'), voice('English', 'en-AU')]).name).toBe('English');
});

test('never picks a non-English voice and tolerates an empty list', () => {
  expect(chooseVoice([voice('Microsoft Hemant - Hindi (India)', 'hi-IN')])).toBeNull();
  expect(chooseVoice([])).toBeNull();
});
