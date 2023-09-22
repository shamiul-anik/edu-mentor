import Footer from '@/components/(shared)/Footer/Footer';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

describe('Footer', ()=>{
  it('renders the logo', () => {
    render(<Footer />);
    expect(screen.getByAltText('Logo')).toBeInTheDocument();
  });
  it('displays the company name', () => {
    render(<Footer />);
    expect(screen.getByText('EduMentor')).toBeInTheDocument();
  });
  it('displays the company description', () => {
    render(<Footer />);
    const description = screen.getByText(
      'Elevate Education Together: Connecting Tutors and Students Seamlessly!'
    );
    expect(description).toBeInTheDocument();
  });
  it('displays copyright information', () => {
    render(<Footer />);
    expect(screen.getByText('Copyright © 2023 EduMentor. All Rights Reserved.')).toBeInTheDocument();
  });
 
})