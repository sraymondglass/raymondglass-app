import Link from 'next/link';

export default function Layout({ children }) {
  return (
    <div className="min-h-screen flex">
      <nav className="w-64 bg-gray-100 p-4">
        <h2 className="font-bold mb-4">RaymondGlass</h2>
        <ul>
          <li><Link href="/">Dashboard</Link></li>
          <li className="mt-2"><Link href="/quotes">Quotes</Link></li>
          <li className="mt-2"><Link href="/jobs">Jobs</Link></li>
          <li className="mt-2"><Link href="/clients">Clients</Link></li>
          <li className="mt-2"><Link href="/login">Login</Link></li>
        </ul>
      </nav>
      <main className="flex-1 bg-white">{children}</main>
    </div>
  );
}
