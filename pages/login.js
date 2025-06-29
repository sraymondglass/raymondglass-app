import { useState } from 'react';
import { supabase } from '../lib/supabaseClient';
import { useRouter } from 'next/router';

export default function Login() {
  const [email, setEmail] = useState('admin@raymondglass.com');
  const [password, setPassword] = useState('DemoPass123!');
  const router = useRouter();

  const handleLogin = async () => {
    const { error } = await supabase.auth.signInWithPassword({ email, password });
    if (!error) router.push('/');
  };

  return (
    <div className="flex items-center justify-center h-screen">
      <div className="w-full max-w-sm p-6 border rounded shadow">
        <h1 className="text-xl font-semibold mb-4">RaymondGlass Login</h1>
        <input
          type="email"
          value={email}
          onChange={e => setEmail(e.target.value)}
          className="w-full p-2 mb-3 border rounded"
          placeholder="Email"
        />
        <input
          type="password"
          value={password}
          onChange={e => setPassword(e.target.value)}
          className="w-full p-2 mb-3 border rounded"
          placeholder="Password"
        />
        <button
          onClick={handleLogin}
          className="w-full p-2 bg-blue-600 text-white rounded"
        >
          Login
        </button>
      </div>
    </div>
  );
}
