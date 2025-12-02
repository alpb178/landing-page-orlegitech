import { render, screen } from '@testing-library/react';
import Header from '@/components/Header';

describe('Header', () => {
  it('renders the logo and company name', () => {
    render(<Header />);
    expect(screen.getByText('orlegitech')).toBeInTheDocument();
  });

  it('renders all navigation links', () => {
    render(<Header />);
    // Use getAllByText since links appear in both desktop and mobile navigation
    const sobreNosotrosLinks = screen.getAllByText('Sobre nosotros');
    expect(sobreNosotrosLinks.length).toBeGreaterThan(0);
    const serviciosLinks = screen.getAllByText('Servicios');
    expect(serviciosLinks.length).toBeGreaterThan(0);
    const preciosLinks = screen.getAllByText('Precios');
    expect(preciosLinks.length).toBeGreaterThan(0);
    const contactanosLinks = screen.getAllByText('Contáctanos');
    expect(contactanosLinks.length).toBeGreaterThan(0);
  });

  it('has correct navigation structure', () => {
    render(<Header />);
    // Use getAllByRole since there are multiple nav elements (desktop and mobile)
    const navElements = screen.getAllByRole('navigation');
    expect(navElements.length).toBeGreaterThan(0);
  });
});
