import { fireEvent, render, screen, within } from '@testing-library/react';
import App from './App';

beforeEach(() => {
  window.history.pushState({}, '', '/');
});

test('renders the hero with name, role, and primary calls to action', () => {
  render(<App />);
  const heading = screen.getByRole('heading', { level: 1 });
  expect(screen.getAllByRole('heading', { level: 1 })).toHaveLength(1);
  expect(heading).toHaveTextContent('Vamsi Korla · Full Stack Developer · AI Applications');
  expect(heading).toHaveTextContent('Building intelligent products from frontend to backend.');
  expect(screen.getByText(/I'm Vamsi Korla, a Full Stack Developer/)).toBeInTheDocument();
  expect(screen.getByRole('link', { name: 'Explore My Work' })).toHaveAttribute('href', '/#projects');
  expect(screen.getAllByRole('link', { name: 'View Resume' })[0]).toHaveAttribute('href', '/resume');
});

test('primary navigation links to every section', () => {
  render(<App />);
  const nav = screen.getByRole('navigation', { name: 'Primary' });
  ['About', 'Experience', 'Projects', 'Skills', 'Contact'].forEach((label) => {
    expect(within(nav).getByRole('link', { name: label })).toHaveAttribute(
      'href',
      `/#${label.toLowerCase()}`
    );
  });
});

test('lists three roles and four projects, and opens a case study', () => {
  render(<App />);
  ['Audena AI', 'DhiAspire AI', 'NewOwl AI'].forEach((company) => {
    expect(screen.getAllByText(company).length).toBeGreaterThan(0);
  });

  const caseStudyButtons = screen.getAllByRole('button', { name: /View case study/ });
  expect(caseStudyButtons).toHaveLength(4);

  fireEvent.click(screen.getByRole('button', { name: 'View case study : Colosseum' }));
  expect(screen.getByRole('heading', { level: 2, name: 'Colosseum' })).toBeInTheDocument();
  expect(screen.getByText('My contribution')).toBeInTheDocument();
});

test('assistant opens on request, introduces Vamsi with captions, and closes', async () => {
  render(<App />);
  fireEvent.click(screen.getByRole('button', { name: 'Open portfolio assistant' }));

  const panel = await screen.findByRole('dialog', { name: 'Portfolio assistant' });
  const spoken = { selector: '[aria-live="polite"]' };
  expect(within(panel).getByText(/I'm Vamsi's AI assistant/, spoken)).toBeInTheDocument();

  // jsdom has no speech synthesis, so this also covers the captions-only fallback.
  fireEvent.click(within(panel).getByRole('button', { name: 'Meet Vamsi' }));
  expect(await within(panel).findByText(/I'm Vamsi Korla, a Full Stack Developer/, spoken)).toBeInTheDocument();
  expect(within(panel).getByText(/Voice playback is not available/)).toBeInTheDocument();
  expect(within(panel).queryByRole('button', { name: 'Pause' })).not.toBeInTheDocument();

  fireEvent.click(within(panel).getByRole('button', { name: 'Experience' }));
  expect(await within(panel).findByText(/I've held three roles/, spoken)).toBeInTheDocument();

  fireEvent.click(within(panel).getByRole('button', { name: /Tour the portfolio/ }));
  expect(await within(panel).findByText('Tour · 1 of 5 · About')).toBeInTheDocument();

  fireEvent.click(within(panel).getByRole('button', { name: 'Close assistant' }));
  expect(screen.queryByRole('dialog', { name: 'Portfolio assistant' })).not.toBeInTheDocument();
});

test('resume route renders the resume page', async () => {
  window.history.pushState({}, '', '/resume');
  render(<App />);
  expect(await screen.findByRole('heading', { level: 1, name: 'Vamsi Korla' })).toBeInTheDocument();
  expect(screen.getByRole('button', { name: 'Print or save as PDF' })).toBeInTheDocument();
});
