"use client";

import Image from "next/image";
import Link from "next/link";
import { signOut } from "next-auth/react";

type User = {
  image: string;
};
const Logged = ({ image }: User) => {
  return (
    <ul>
      <li className="flex gap-8 items-center">
        <button
          className="text-sm bg-gray-700 text-white py-2 px-6 rounded-md"
          onClick={() => signOut()}
        >
          Sign out
        </button>
        <Link href="/dashboard">
          <Image
            className="w-14 rounded-full"
            alt=""
            src={image}
            width={64}
            height={64}
          />
        </Link>
      </li>
    </ul>
  );
};

export default Logged;
