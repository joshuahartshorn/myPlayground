import Link from 'next/link';

export default function Header() {
  return (
    <div className="w-full text-black z-10">
      <nav className="container relative flex flex-wrap items-center justify-between mx-auto p-8">
        <Link href="/" className="font-bold text-3xl">
          Home
        </Link>
      </nav>
    </div>
  );
}
