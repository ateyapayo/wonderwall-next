import Link from "next/link";

import { unstable_getServerSession } from "next-auth";
import { authOptions } from "../../pages/api/auth/[...nextauth]";

import Login from "./Login";
import Logged from "./Logged";

const Nav = async () => {
  const session = await unstable_getServerSession(authOptions);
  console.log("THIS IS SESSION ---> ", session);
  return (
    <nav className="flex justify-between items-center py-8">
      <Link href="/">
        <h1 className="font-bold text-lg">Our wonderwall.</h1>
      </Link>
      <ul className="flex items-center gap-6">
        <li>
          {(!session?.user && <Login />) || (
            <Logged image={session?.user?.image || ""} />
          )}
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
