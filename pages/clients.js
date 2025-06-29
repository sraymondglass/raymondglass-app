import { useEffect, useState } from 'react';
import { supabase } from '../lib/supabaseClient';

export default function Clients() {
  const [clients, setClients] = useState([]);

  useEffect(() => {
    supabase
      .from('clients')
      .select('*')
      .order('created_at', { ascending: false })
      .then(({ data }) => setClients(data));
  }, []);

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Clients</h1>
      {clients.map(c => (
        <div key={c.id} className="border p-4 mb-2 rounded">
          <p>{c.name}</p>
        </div>
      ))}
    </div>
  );
}
