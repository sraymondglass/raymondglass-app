import { useEffect, useState } from 'react';
import { supabase } from '../lib/supabaseClient';

export default function Dashboard() {
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    supabase
      .from('jobs')
      .select('id, description, status, clients(name)')
      .order('created_at', { ascending: false })
      .then(({ data }) => setJobs(data));
  }, []);

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Dashboard</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {jobs.map(job => (
          <div key={job.id} className="border rounded p-4 shadow">
            <h2 className="font-semibold">Job #{job.id}</h2>
            <p>{job.description}</p>
            <p className="mt-2 text-sm text-gray-500">Status: {job.status}</p>
            <p className="mt-1 text-sm text-gray-500">Client: {job.clients.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
