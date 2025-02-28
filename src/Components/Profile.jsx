import React from 'react'
import dp from '../assets/dp.jpg'
import gitHub from '../assets/github-mark.svg'
import linkedIn from '../assets/linkedIn.svg'
import { useQuery } from '@tanstack/react-query'
import { getProfile } from '../lib/SalesforceService'

export default function Profile() {
    const { data, isLoading, error } = useQuery({
        queryKey: ['profile'],
        queryFn: getProfile,
        staleTime: 60000,
    });
    // const isLoading = true;
    return (
        <div>
            <div className='flex justify-center items-center'>
                <img src={dp} alt="DP" className='w-60 h-60 rounded-full object-cover' />
            </div>
            <section id='name' className='my-2 text-center'>
                <h1 className='text-blue-950 text-3xl font-bold uppercase'>{isLoading ? <div className="h-6 bg-gray-200 rounded w-100 mb-4"></div> : data.Name}</h1>
            </section>
            <section id='profile' className='my-2'>
                <h2 className='text-blue-600 text-xl'>Profile</h2>
                <div>{isLoading ? <><div className="h-6 bg-gray-200 rounded w-100 mb-4"></div><div className="h-6 bg-gray-200 rounded w-100 mb-4"></div><div className="h-6 bg-gray-200 rounded w-100 mb-4"></div></> : data.Description}</div>
            </section>
            <section id='contact' className='my-2'>
                <div className='flex gap-2 items-center'>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-4">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
                    </svg>
                    {isLoading ? <div className="h-6 bg-gray-200 rounded w-3/4 my-2"></div> : <a href={'tel:' + data.Phone} className='text-blue-600'>{data.Phone}</a>}

                </div>
                <div className='flex gap-2 items-center'>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-4">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
                    </svg>
                    {isLoading ? <div className="h-6 bg-gray-200 rounded w-3/4 my-2"></div> : <a href={'mailto:' + data.Email} className='text-blue-600'>{data.Email}</a>}
                </div>
                <div className='flex gap-2 items-center'>
                    <img src={gitHub} alt="github" className='size-4' />
                    {isLoading ? <div className="h-6 bg-gray-200 rounded w-3/4 my-2"></div> : <a href={data.GitHub_u__c} className='text-blue-600'>{data.GitHub_u__c.substring(8)}</a>}
                </div>
                <div className='flex gap-2 items-center'>
                    <img src={linkedIn} alt="Linkedin" className='size-4' />
                    {isLoading ? <div className="h-6 bg-gray-200 rounded w-3/4 my-2"></div> : <a href={data.LinkedIn_u__c} className='text-blue-600'>{data.LinkedIn_u__c.substring(8)}</a>}
                </div>
                <div className='flex gap-2 items-center'>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-4">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
                    </svg>
                    {isLoading ? <div className="h-6 bg-gray-200 rounded w-3/4 my-2"></div> : data.MailingAddress.city + ', ' + data.MailingAddress.country}
                </div>
            </section>
        </div>
    )
}
