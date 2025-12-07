import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useRouter } from 'next/router';

interface Requirement {
  id: string;
  name: string;
  description: string;
  status: 'pending' | 'completed';
}

const GatherRequirements: React.FC = () => {
  const [requirements, setRequirements] = useState<Requirement[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchRequirements = async () => {
      try {
        const response = await axios.get<{ requirements: Requirement[] }>('/api/requirements');
        setRequirements(response.data.requirements);
        setLoading(false);
      } catch (err) {
        setError('Failed to load requirements.');
        setLoading(false);
      }
    };

    fetchRequirements();
  }, []);

  if (loading) return <div className="text-center mt-10">Loading...</div>;
  if (error) return <div className="text-red-500 text-center mt-10">{error}</div>;

  const handleRequirementChange = async (id: string, status: Requirement['status']) => {
    try {
      await axios.put(`/api/requirements/${id}`, { status });
      setRequirements(prev => prev.map(req => req.id === id ? {...req, status} : req));
    } catch (err) {
      setError(`Failed to update requirement ${id}.`);
    }
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6">Gather Requirements</h1>
      <ul role="list" aria-label="Requirements list" className="divide-y divide-gray-200">
        {requirements.map(req => (
          <li key={req.id} className="py-4 flex items-center justify-between">
            <div className="flex-grow">
              <p className="text-lg font-medium">{req.name}</p>
              <p className="text-sm text-gray-500">{req.description}</p>
            </div>
            <button
              onClick={() => handleRequirementChange(req.id, req.status === 'pending' ? 'completed' : 'pending')}
              className={`px-4 py-2 rounded ${req.status === 'pending' ? 'bg-blue-500 text-white' : 'bg-green-500 text-white'}`}
            >
              {req.status === 'pending' ? 'Pending' : 'Completed'}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default GatherRequirements;

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useRouter } from 'next/router';

interface Requirement {
  id: string;
  name: string;
  description: string;
  status: 'pending' | 'completed';
}

const GatherRequirements: React.FC = () => {
  const [requirements, setRequirements] = useState<Requirement[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchRequirements = async () => {
      try {
        const response = await axios.get<{ requirements: Requirement[] }>('/api/requirements');
        setRequirements(response.data.requirements);
        setLoading(false);
      } catch (err) {
        setError('Failed to load requirements.');
        setLoading(false);
      }
    };

    fetchRequirements();
  }, []);

  if (loading) return <div className="text-center mt-10">Loading...</div>;
  if (error) return <div className="text-red-500 text-center mt-10">{error}</div>;

  const handleRequirementChange = async (id: string, status: Requirement['status']) => {
    try {
      await axios.put(`/api/requirements/${id}`, { status });
      setRequirements(prev => prev.map(req => req.id === id ? {...req, status} : req));
    } catch (err) {
      setError(`Failed to update requirement ${id}.`);
    }
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6">Gather Requirements</h1>
      <ul role="list" aria-label="Requirements list" className="divide-y divide-gray-200">
        {requirements.map(req => (
          <li key={req.id} className="py-4 flex items-center justify-between">
            <div className="flex-grow">
              <p className="text-lg font-medium">{req.name}</p>
              <p className="text-sm text-gray-500">{req.description}</p>
            </div>
            <button
              onClick={() => handleRequirementChange(req.id, req.status === 'pending' ? 'completed' : 'pending')}
              className={`px-4 py-2 rounded ${req.status === 'pending' ? 'bg-blue-500 text-white' : 'bg-green-500 text-white'}`}
            >
              {req.status === 'pending' ? 'Pending' : 'Completed'}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default GatherRequirements;