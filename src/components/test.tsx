import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import { CREATE_TEST } from './graphql/mutations';
import { GET_TESTS } from './graphql/queries';
import { Test } from './types/TestType';
import { LoadingSpinner } from './components/LoadingSpinner';

interface WriteTestProps {
  onCreate: (test: Test) => void;
}

const WriteTests: React.FC<WriteTestProps> = ({ onCreate }) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const [createTestMutation] = useMutation(CREATE_TEST, {
    variables: { input: { title, description } },
    onCompleted: (data) => {
      onCreate(data.createTest);
      setTitle('');
      setDescription('');
    },
    onError: (error) => setError(error.message),
    refetchQueries: [{ query: GET_TESTS }],
  });

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!title || !description) return;
    setLoading(true);
    await createTestMutation();
    setLoading(false);
  };

  return (
    <div className="p-4">
      {error && <p role="alert" aria-live="assertive">{error}</p>}
      <form onSubmit={handleSubmit} className="flex flex-col gap-2">
        <input
          type="text"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
          className="border p-1 rounded focus:outline-none"
        />
        <textarea
          placeholder="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          rows={4}
          required
          className="border p-1 rounded focus:outline-none"
        />
        <button type="submit" disabled={!title || !description} className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
          {loading ? <LoadingSpinner /> : 'Create Test'}
        </button>
      </form>
    </div>
  );
};

export default WriteTests;

import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import { CREATE_TEST } from './graphql/mutations';
import { GET_TESTS } from './graphql/queries';
import { Test } from './types/TestType';
import { LoadingSpinner } from './components/LoadingSpinner';

interface WriteTestProps {
  onCreate: (test: Test) => void;
}

const WriteTests: React.FC<WriteTestProps> = ({ onCreate }) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const [createTestMutation] = useMutation(CREATE_TEST, {
    variables: { input: { title, description } },
    onCompleted: (data) => {
      onCreate(data.createTest);
      setTitle('');
      setDescription('');
    },
    onError: (error) => setError(error.message),
    refetchQueries: [{ query: GET_TESTS }],
  });

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!title || !description) return;
    setLoading(true);
    await createTestMutation();
    setLoading(false);
  };

  return (
    <div className="p-4">
      {error && <p role="alert" aria-live="assertive">{error}</p>}
      <form onSubmit={handleSubmit} className="flex flex-col gap-2">
        <input
          type="text"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
          className="border p-1 rounded focus:outline-none"
        />
        <textarea
          placeholder="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          rows={4}
          required
          className="border p-1 rounded focus:outline-none"
        />
        <button type="submit" disabled={!title || !description} className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
          {loading ? <LoadingSpinner /> : 'Create Test'}
        </button>
      </form>
    </div>
  );
};

export default WriteTests;