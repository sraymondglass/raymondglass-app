import { useEffect, useState } from 'react';
import { supabase } from '../lib/supabaseClient';

export default function Quotes() {
  const [quotes, setQuotes] = useState([]);

  useEffect(() => {
    supabase
      .from('quotes')
      .select('*')
      .order('date', { ascending: false })
      .then(({ data }) => setQuotes(data));
  }, []);

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Quotes</h1>
      {quotes.map(q => (
        <div key={q.id} className="border p-4 mb-2 rounded">
          <p>Quote #{q.id} — ${q.total} — {q.status}</p>
        </div>
      ))}
    </div>
  );
}
