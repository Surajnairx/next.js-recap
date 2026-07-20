import Link from "next/link";
import Image from "next/image";

function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/80 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
        <Link href="/" className="flex items-center gap-3">
          <Image
            src="/next.svg"
            alt="Next Blog"
            width={89}
            height={18}
            priority
          />
        </Link>

        <nav className="flex items-center gap-6 text-sm font-medium">
          <Link
            href="/"
            className="transition-colors duration-200 hover:text-blue-600"
          >
            Home
          </Link>

          <Link
            href="/posts"
            className="transition-colors duration-200 hover:text-blue-600"
          >
            Posts
          </Link>
        </nav>
      </div>
    </header>
  );
}

export default Header;