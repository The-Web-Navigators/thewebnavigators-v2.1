import React from 'react';
import Jatin from '../../assets/images/jatin.jpeg'
import Shubhangi from '../../assets/images/shubhangi.jpeg'
import Simran from '../../assets/images/simran.jpeg'
import Saurabh from '../../assets/images/saurabh.jpeg'

const MeetTheTeam = () => {
    const teamMembers = [
        {
            name: 'Jatin Dahiya',
            role: 'Founder / Developer',
            image: Jatin
        },
        {
            name: 'Shubhangi Gupta',
            role: 'Developer',
            image: Shubhangi
        },
        {
            name: 'Simran Ahitaan',
            role: 'UI Designer',
            image: Simran
        },
        {
            name: 'Saurabh Sharma',
            role: 'Marketing Head',
            image: Saurabh
        }
    ];

    return (
        <div className="mt-44 container mx-auto">
            <div className="flex items-center justify-between gap-6">
                <div className="w-1/2">
                    <h2 className="bg-gradient-to-br from-black to-black/40 dark:from-white dark:to-white/40 bg-clip-text py-2 text-3xl font-medium leading-none tracking-tighter text-transparent sm:text-3xl md:text-4xl lg:text-5xl">
                        Meet the team
                    </h2>
                    <p className="mb-8 text-balance text-lg font-normal tracking-tight text-gray-400">
                        Meet the dedicated individuals who lead our team to success. Their expertise and leadership drive our company forward, ensuring that we deliver the best products and services to our customers.
                    </p>
                </div>
                <ul className="w-1/2 grid grid-cols-2 gap-x-8 gap-y-12">
                    {teamMembers.map((member, index) => (
                        <li key={index}>
                            <div className="flex items-center gap-x-6">
                                <img className="h-16 w-16 rounded-full" src={member.image} alt={member.name} />
                                <div>
                                    <h3 className="text-base font-semibold leading-7 tracking-tight text-gray-900 dark:text-tertiary-light">
                                        {member.name}
                                    </h3>
                                    <p className="text-sm font-semibold leading-6 text-indigo-600">
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