import React, { useState } from 'react';

const Nav = ({tabs, onSelect, activeTab}) => {

	const tabsCpy = tabs || [];	
	return (
		<div className="p-2">
			<div className="flex flex-wrap justify-center lg:justify-normal space-x-6">
				{tabsCpy.map((tab) => (
					<button
						key={tab}
						className={`px-4 py-2 mb-1 rounded-lg ${activeTab === tab
							? 'bg-blue-50 text-blue-400 font-semibold'
							: 'text-gray-500 hover:text-gray-700'
							}`}
						onClick={() => onSelect(tab)}
					>
						{tab}
					</button>
				))}
			</div>
		</div>
	);
};

export default Nav;