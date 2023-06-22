import Image from "next/image";

const NavBar = () => {
  return (
    <nav className="flex flex-row justify-between items-center lg:px-24 px-4">
      <div className="bg-primary-brand p-2 px-4 my-4 rounded-full">
        <Image src="/images/logo.png" alt="logo" height={50} width={50} />
      </div>
      <ul className="flex flex-row space-x-4 font-medium">
        <li>Blogs</li>
        <li>About</li>
        <li>Contact</li>
      </ul>
    </nav>
  );
};

export default NavBar;
