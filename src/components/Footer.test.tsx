import { render, screen } from '@testing-library/react';
import { Footer } from './Footer';

describe('Greeting Component', () => {
  it('renders a greeting message', () => {
    render(<Footer />);
    expect(screen.getByText('Developed for Zurich by @Mahdiyar')).toBeInTheDocument();
  });
});
