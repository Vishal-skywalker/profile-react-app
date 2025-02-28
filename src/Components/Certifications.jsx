import { useQuery } from '@tanstack/react-query';
import SkeletonCard from './SkeletonCard';
import { getCertifications } from '../lib/SalesforceService';
import emptyBadge from '../assets/empty-badge.svg';

export default function Certifications() {
	const { data, isLoading, error } = useQuery({
		queryKey: ['Certifications'],
		queryFn: getCertifications,
		staleTime: 60000,
	});

	if (error) return <div>Error: {error.message}</div>;
	return (
		isLoading ? Array.from({ length: 6 })
			.map((_, index) => (
				<SkeletonCard key={index} />
			)) :
			<div className="p-6 grid grid-cols-1 lg:grid-cols-2 gap-2">
				{data.map((crt) => (
					<div key={crt.badge_url} className="border-gray-300 rounded-lg p-4 shadow-lg">
						<div className="flex items-center gap-2">
							<img src={crt.badge_url || emptyBadge} alt={crt.badge_url || 'Empty Badge'} className='size-20' />
							<div>
								<h2 className="text-xl font-bold text-blue-950 mb-2">{crt.title}</h2>
								<p className="text-gray-600 mb-2">{crt.issued_date ? 'Issued - ' + crt.issued_date : 'Present'}</p>
							</div>
						</div>
					</div>
				))}
			</div>
	)
}
