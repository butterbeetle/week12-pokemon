import Link from "next/link";

function Header() {
  return (
    <header className="border border-b-gray-300 select-none">
      <div className="container mx-auto max-w-[1024px] px-4 h-12 flex items-center">
        <Link href="/" className="font-bold text-xl">
          포켓몬
        </Link>
      </div>
    </header>
  );
}

export default Header;
