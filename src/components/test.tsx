import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useRouter } from 'next/router';

interface Test {
  id: number;
  title: string;
  description: string;
  content: string;
}

const WriteTests: React.FC = () => {
  const router = useRouter();
  const [test, setTest] = useState<Test>({
    id: 0,
    title: '',
    description: '',
    content: ''
  });
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (router.query.id) {
      fetchTest(Number(router.query.id));
    }
  }, [router.query.id]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setTest({ ...test, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      if (test.id === 0) {
        await axios.post('/api/tests', test);
      } else {
        await axios.put(`/api/tests/${test.id}`, test);
      }
      router.push('/');
    } catch (err: any) {
      setError(err.response ? err.response.data.message : 'Failed to save the test.');
    }

    setLoading(false);
  };

  const fetchTest = async (id: number) => {
    try {
      const response = await axios.get(`/api/tests/${id}`);
      setTest(response.data);
    } catch (err: any) {
      setError(err.response ? err.response.data.message : 'Failed to load the test.');
    }
  };

  return (
    <div className="p-6 max-w-sm mx-auto bg-white rounded-xl shadow-md space-y-2 sm:p-4">
      <h1 className="text-xl font-bold">Write Test</h1>
      {error && <p role="alert" aria-live="assertive">{error}</p>}
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label htmlFor="title" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Title</label>
          <input
            type="text"
            id="title"
            name="title"
            value={test.title}
            onChange={handleChange}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            aria-label="Title of the test"
          />
        </div>
        <div>
          <label htmlFor="description" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Description</label>
          <input
            type="text"
            id="description"
            name="description"
            value={test.description}
            onChange={handleChange}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            aria-label="Description of the test"
          />
        </div>
        <div>
          <label htmlFor="content" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Content</label>
          <textarea
            id="content"
            name="content"
            value={test.content}
            onChange={handleChange}
            rows={4}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            aria-label="Content of the test"
          />
        </div>
        <button
          type="submit"
          disabled={loading}
          className={`w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded ${loading ? 'opacity-50' : ''}`}
          aria-label="Submit the test"
        >
          {test.id === 0 ? 'Create Test' : 'Update Test'}
        </button>
      </form>
    </div>
  );
};

export default WriteTests;

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useRouter } from 'next/router';

interface Test {
  id: number;
  title: string;
  description: string;
  content: string;
}

const WriteTests: React.FC = () => {
  const router = useRouter();
  const [test, setTest] = useState<Test>({
    id: 0,
    title: '',
    description: '',
    content: ''
  });
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (router.query.id) {
      fetchTest(Number(router.query.id));
    }
  }, [router.query.id]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setTest({ ...test, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      if (test.id === 0) {
        await axios.post('/api/tests', test);
      } else {
        await axios.put(`/api/tests/${test.id}`, test);
      }
      router.push('/');
    } catch (err: any) {
      setError(err.response ? err.response.data.message : 'Failed to save the test.');
    }

    setLoading(false);
  };

  const fetchTest = async (id: number) => {
    try {
      const response = await axios.get(`/api/tests/${id}`);
      setTest(response.data);
    } catch (err: any) {
      setError(err.response ? err.response.data.message : 'Failed to load the test.');
    }
  };

  return (
    <div className="p-6 max-w-sm mx-auto bg-white rounded-xl shadow-md space-y-2 sm:p-4">
      <h1 className="text-xl font-bold">Write Test</h1>
      {error && <p role="alert" aria-live="assertive">{error}</p>}
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label htmlFor="title" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Title</label>
          <input
            type="text"
            id="title"
            name="title"
            value={test.title}
            onChange={handleChange}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            aria-label="Title of the test"
          />
        </div>
        <div>
          <label htmlFor="description" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Description</label>
          <input
            type="text"
            id="description"
            name="description"
            value={test.description}
            onChange={handleChange}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            aria-label="Description of the test"
          />
        </div>
        <div>
          <label htmlFor="content" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Content</label>
          <textarea
            id="content"
            name="content"
            value={test.content}
            onChange={handleChange}
            rows={4}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            aria-label="Content of the test"
          />
        </div>
        <button
          type="submit"
          disabled={loading}
          className={`w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded ${loading ? 'opacity-50' : ''}`}
          aria-label="Submit the test"
        >
          {test.id === 0 ? 'Create Test' : 'Update Test'}
        </button>
      </form>
    </div>
  );
};

export default WriteTests;