import Image from "next/image";
import Link from "next/link";

const NavBar = () => {
  return (
    <nav className="flex flex-row justify-between items-center lg:px-24 px-4">
      <div className="bg-primary-brand p-2 px-4 my-4 rounded-full">
        <Link href="/">
          <Image src="/images/logo.png" alt="logo" height={50} width={50} />
        </Link>
      </div>
      <ul className="flex flex-row space-x-4 font-medium">
        <li>
          <Link href="/">Blogs</Link>
        </li>
        <li>
          <Link href="/about">About</Link>
        </li>
        <li>
          <Link href="/contact">Contact</Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
