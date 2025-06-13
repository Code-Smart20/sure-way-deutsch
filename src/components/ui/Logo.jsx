import { Link } from 'react-router-dom';

function Logo({ variant = 'dark' }) {
  return (
    <Link to="/" className="flex items-center">
      <span className={`font-display text-xl font-bold ${variant === 'light' ? 'text-white' : 'text-primary-600'}`}>
        Deutsch<span className={variant === 'light' ? 'text-accent-400' : 'text-accent-500'}>Akademie</span>
      </span>
    </Link>
  );
}

export default Logo;