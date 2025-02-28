import { useQuery } from '@tanstack/react-query';
import SkeletonCard from './SkeletonCard';
import { getSchools, getEmployment } from '../lib/SalesforceService';

export default function Schools({queryKey}) {
  const queryFnc = queryKey === 'Education' ? getSchools : getEmployment;
  const { data, isLoading, error } = useQuery({
    queryKey: [queryKey],
    queryFn: queryFnc,
    staleTime: 60000,
  });

  if (error) return <div>Error: {error.message}</div>;
  return (
    isLoading ? Array.from({ length: 6 })
      .map((_, index) => (
        <SkeletonCard key={index} />
      )) :
      <div className="p-6">
        {data.map((school) => (
          <div key={school.uuid} className="border-gray-300 rounded-lg p-4 shadow-lg my-2">
            <h2 className="text-xl font-bold text-blue-950 mb-2">{school.name}</h2>
            <p className="text-gray-600 mb-2">{school.info ? school.info + ' |'  : ''} {school.start_date || 'Started'} - {school.end_date || 'Present'}</p>
            <p className="mb-4">{school.addition_info}</p>
          </div>
        ))}
      </div>
  )
}
