import React from 'react'
import { useQuery } from '@tanstack/react-query';
import { getSkills } from '../lib/SalesforceService';

export default function Skills() {
	const { data, isLoading, error } = useQuery({
		queryKey: ['Skills'],
		queryFn: getSkills,
		staleTime: 60000,
	});
	return (
		!isLoading ? <div className="flex flex-wrap gap-2 justify-evenly lg:justify-normal">
			{data.map((skill, index) => {
				const id = `tooltip-${index}`;
				return <div key={id}>
					<button
						id={id}
						className={`p-2 mb-1 rounded-3xl bg-gray-100 text-gray-700 hover:bg-blue-50 hover:text-blue-500`}
					>
						{skill}
					</button></div>
			})}
		</div> : <div>Loading...</div>
	)
}
