import Link from 'next/link';
import NavStyles from './styles/NavStyles';

export default function Nav() {
  return (
    <NavStyles>
      <Link href="/sell">
        <a>
          Sell
        </a>
      </Link>
      <Link href="/">
        <a>
          Home
        </a>
      </Link>
    </NavStyles>
  );
}


