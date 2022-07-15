import React from 'react';
import { TrendData } from '../../data/TrendData';

export const TrendCard = () => {
    return (
        <div className='flex flex-col w-3/4 gap-4 p-4 pl-8 trendCard bg-card-color rounded-2xl'>
            <h1 className='text-2xl font-bold'>Trends for you</h1>
            {TrendData?.map((trend, id) => (
                <div key={id} className='flex flex-col gap-2 trend'>
                    <span className='font-bold'>#{trend.name}</span>
                    <span className='text-xs'>{trend.shares}k shares</span>
                </div>
            ))}
        </div>
    );
};
