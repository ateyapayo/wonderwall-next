import Link from "next/link";

const Nav = async () => {
  return (
    <nav>
      <Link href="/">
        <h1>Our wonderwall.</h1>
      </Link>
    </nav>
  );
};

export default Nav;
