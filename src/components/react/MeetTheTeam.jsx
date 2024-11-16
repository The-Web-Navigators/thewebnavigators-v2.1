import React from 'react';
import Jatin from '../../assets/images/jatin.jpeg'
import Shubhangi from '../../assets/images/shubhangi.jpeg'
import Simran from '../../assets/images/simran.jpeg'
import Saurabh from '../../assets/images/saurabh.jpeg';
import { ChevronRight } from "lucide-react";
import { Link } from 'react-router-dom';

const MeetTheTeam = () => {
    const teamMembers = [
        {
            name: 'Jatin D.',
            role: 'Founder',
            image: Jatin
        },
        {
            name: 'Shubhangi',
            role: 'Developer',
            image: Shubhangi
        },
        {
            name: 'Simran Ah.',
            role: 'Developer',
            image: Simran
        },
        {
            name: 'Saurabh S.',
            role: 'UI Designer',
            image: Saurabh
        }
    ];

    return (
        <div className="mt-44 container mx-auto px-6 xl:px-0">
            <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">
                <div className='flex flex-col items-center xl:items-start gap-4'>
                    <h2 className="bg-gradient-to-br from-black to-black/40 dark:from-white dark:to-white/40 bg-clip-text text-3xl font-medium leading-none tracking-tighter text-transparent sm:text-3xl md:text-4xl lg:text-5xl">
                        Meet the team
                    </h2>
                    <p className="text-balance text-lg font-normal tracking-tight text-gray-400 text-center xl:text-start">
                        Meet the dedicated individuals who lead our team to success. Their expertise and leadership drive our company forward, ensuring that we deliver the best products and services to our customers.
                    </p>
                    <Link to="https://www.upwork.com/freelancers/~012d6eb926a1f7a86a" target='_blank' className="border-none outline-none font-medium text-tertiary-dark dark:text-tertiary-light leading-none tracking-tight inline-flex items-center gap-1 group">
                        View Profile
                        <ChevronRight className="ml-1 size-3 transition-transform ease-in-out duration-300 group-hover:translate-x-1" />
                    </Link>
                </div>
                <ul className="grid grid-cols-2 gap-x-8 gap-y-12">
                    {teamMembers.map((member, index) => (
                        <li key={index}>
                            <div className="flex items-center gap-x-4">
                                <img className="h-12 w-12 xl:h-16 xl:w-16 rounded-full" src={member.image} alt={member.name} />
                                <div>
                                    <h3 className="font-semibold leading-7 tracking-tight text-gray-900 text-base dark:text-tertiary-light">
                                        {member.name}
                                    </h3>
                                    <p className="font-semibold leading-6 text-indigo-600 text-xs">
                                        {member.role}
                                    </p>
                                </div>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default MeetTheTeam;