import { render, screen } from '@testing-library/react';
import { Header } from './Header';
import { useSession } from 'next-auth/react';
import LogoutButton from '@/pages/auth/signout';

jest.mock('next/image', () => ({
  __esModule: true,
  default: (props: any) => <img {...props} />
}));

jest.mock('next-auth/react');
jest.mock('@/pages/auth/signout', () => ({
  __esModule: true,
  default: () => <button>Sign Out</button>, // This is a simple mock for the LogoutButton
}));

describe('Header Component', () => {
  it('renders the company logo', () => {
    (useSession as jest.Mock).mockReturnValueOnce({ data: null });
    render(<Header />);
    const image = screen.getByAltText('logo');
    expect(image).toBeInTheDocument();
  });

  it('renders the company name "Zurich"', () => {
    (useSession as jest.Mock).mockReturnValueOnce({ data: null });
    render(<Header />);
    const companyName = screen.getByText('Zurich');
    expect(companyName).toBeInTheDocument();
  });

  it('shows user details and logout button if there is a session', () => {
    // Setup mock session
    (useSession as jest.Mock).mockReturnValueOnce({
      data: { user: { name: 'John Doe', image: 'path/to/image.jpg' } },
    });

    // Render the Header component
    render(<Header />);

    // Assert the LogoutButton is present using role
    const logoutButton = screen.getByRole('button');
    expect(logoutButton).toBeInTheDocument();

    // Additional checks for user name if necessary
    const userName = screen.getByText('John Doe');
    expect(userName).toBeInTheDocument();
  });


  it('displays the user image if available', () => {
    (useSession as jest.Mock).mockReturnValueOnce({
      data: { session: { user: { name: 'John Doe', image: 'path/to/image.jpg' } } },
    });
    render(<Header />);
    const userImage = screen.getByAltText('Profile of John Doe');
    expect(userImage).toBeInTheDocument();
  });

  it('displays a default avatar if the user image is not available', () => {
    (useSession as jest.Mock).mockReturnValueOnce({
      data: { session: { user: { name: 'Jane Doe' } } },
    });
    render(<Header />);
    const defaultAvatar = screen.getByRole('img', { name: /default avatar/i });
    expect(defaultAvatar).toBeInTheDocument();
  });

  it('displays "User" as the user name if the name is not available', () => {
    (useSession as jest.Mock).mockReturnValueOnce({
      data: { session: { user: {} } },
    });
    render(<Header />);
    const defaultName = screen.getByText('User');
    expect(defaultName).toBeInTheDocument();
  });
});
