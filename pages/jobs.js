import { useEffect, useState } from 'react';
import { supabase } from '../lib/supabaseClient';

export default function Jobs() {
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    supabase
      .from('jobs')
      .select('*')
      .order('created_at', { ascending: false })
      .then(({ data }) => setJobs(data));
  }, []);

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Jobs</h1>
      {jobs.map(j => (
        <div key={j.id} className="border p-4 mb-2 rounded">
          <p>Job #{j.id} — {j.status}</p>
        </div>
      ))}
    </div>
  );
}
