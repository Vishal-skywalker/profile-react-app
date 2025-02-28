import { getProjects } from '../lib/SalesforceService';
import { useQuery } from '@tanstack/react-query';
import SkeletonCard from './SkeletonCard';

export default function ProjectCards() {

  const { data, isLoading, error } = useQuery({
    queryKey: ['projects'],
    queryFn: getProjects,
    staleTime: 60000,
  });

  if (error) return <div>Error: {error.message}</div>;
  return (
    isLoading ? Array.from({ length: 6 })
      .map((_, index) => (
        <SkeletonCard key={index} />
      )) :
      <div className="p-6">
        {data.map((project) => (
          <div key={project.uuid} className="border-gray-300 rounded-lg p-4 shadow-lg my-2">
            <h2 className="text-xl font-bold text-blue-950 mb-2">{project.name}</h2>
            <p className="text-gray-600 mb-2">{project.start_date} - {project.end_date || 'Present'}</p>
            <p className="mb-4">{project.descrption}</p>
            {project.more_info && (
              <a
                href={project.more_info}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 hover:underline"
              >
                More Info
              </a>
            )}
          </div>
        ))}
      </div>
  );
};
