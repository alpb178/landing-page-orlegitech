import { render, screen } from '@testing-library/react';
import AboutUs from '@/components/AboutUs';

describe('AboutUs', () => {
  it('renders the about us section title', () => {
    render(<AboutUs />);
    expect(screen.getByText('Nosotros')).toBeInTheDocument();
  });

  it('renders all feature items', () => {
    render(<AboutUs />);
    expect(screen.getByText('Aplicación móvil')).toBeInTheDocument();
    expect(screen.getByText('Más de 150 campos')).toBeInTheDocument();
    expect(screen.getByText('Seguimiento de partidas')).toBeInTheDocument();
    expect(screen.getByText('Alquiler de buggies')).toBeInTheDocument();
    expect(screen.getByText('Servicios de drone')).toBeInTheDocument();
    expect(screen.getByText('Monitoreo de condiciones')).toBeInTheDocument();
    expect(screen.getByText('Múltiples ubicaciones')).toBeInTheDocument();
    expect(screen.getByText('Experiencia completa')).toBeInTheDocument();
  });
});
