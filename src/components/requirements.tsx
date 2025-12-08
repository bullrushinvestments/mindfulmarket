import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useRouter } from 'next/router';

interface IRequirement {
  title: string;
  description?: string;
  requirements: Array<{
    name: string;
    type: string;
    required: boolean;
  }>;
}

interface IFormValues {
  [key: string]: any;
}

const GatherRequirements: React.FC = () => {
  const router = useRouter();
  const { register, handleSubmit, formState: { errors }, reset } = useForm<IFormValues>();
  const [loading, setLoading] = useState(false);
  const [requirements, setRequirements] = useState<IRequirement[]>([]);

  const handleRequirementsSubmit = (data: IFormValues) => {
    setLoading(true);
    // Simulate API call
    setTimeout(() => {
      console.log('Data submitted:', data);
      reset();
      router.push('/confirmation');
    }, 1000);
  };

  return (
    <div className="p-6 max-w-md mx-auto bg-white rounded-lg shadow-md flex flex-col items-center">
      <h2 className="text-xl font-bold mb-4">Gather Requirements</h2>
      {requirements.map((req, index) => (
        <React.Fragment key={index}>
          <div className="mb-4">
            <label htmlFor={`title-${index}`} className="block text-sm font-medium text-gray-700">
              Title
            </label>
            <input
              id={`title-${index}`}
              type="text"
              {...register(`requirements.${index}.name`, { required: true })}
              className="mt-1 block w-full rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
            />
          </div>
          <div className="mb-4">
            <label htmlFor={`type-${index}`} className="block text-sm font-medium text-gray-700">
              Type
            </label>
            <input
              id={`type-${index}`}
              type="text"
              {...register(`requirements.${index}.type`, { required: true })}
              className="mt-1 block w-full rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
            />
          </div>
        </React.Fragment>
      ))}
      
      <button
        type="submit"
        onClick={handleSubmit(handleRequirementsSubmit)}
        className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
      >
        {loading ? 'Submitting...' : 'Submit'}
      </button>
    </div>
  );
};

export default GatherRequirements;

import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useRouter } from 'next/router';

interface IRequirement {
  title: string;
  description?: string;
  requirements: Array<{
    name: string;
    type: string;
    required: boolean;
  }>;
}

interface IFormValues {
  [key: string]: any;
}

const GatherRequirements: React.FC = () => {
  const router = useRouter();
  const { register, handleSubmit, formState: { errors }, reset } = useForm<IFormValues>();
  const [loading, setLoading] = useState(false);
  const [requirements, setRequirements] = useState<IRequirement[]>([]);

  const handleRequirementsSubmit = (data: IFormValues) => {
    setLoading(true);
    // Simulate API call
    setTimeout(() => {
      console.log('Data submitted:', data);
      reset();
      router.push('/confirmation');
    }, 1000);
  };

  return (
    <div className="p-6 max-w-md mx-auto bg-white rounded-lg shadow-md flex flex-col items-center">
      <h2 className="text-xl font-bold mb-4">Gather Requirements</h2>
      {requirements.map((req, index) => (
        <React.Fragment key={index}>
          <div className="mb-4">
            <label htmlFor={`title-${index}`} className="block text-sm font-medium text-gray-700">
              Title
            </label>
            <input
              id={`title-${index}`}
              type="text"
              {...register(`requirements.${index}.name`, { required: true })}
              className="mt-1 block w-full rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
            />
          </div>
          <div className="mb-4">
            <label htmlFor={`type-${index}`} className="block text-sm font-medium text-gray-700">
              Type
            </label>
            <input
              id={`type-${index}`}
              type="text"
              {...register(`requirements.${index}.type`, { required: true })}
              className="mt-1 block w-full rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
            />
          </div>
        </React.Fragment>
      ))}
      
      <button
        type="submit"
        onClick={handleSubmit(handleRequirementsSubmit)}
        className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
      >
        {loading ? 'Submitting...' : 'Submit'}
      </button>
    </div>
  );
};

export default GatherRequirements;