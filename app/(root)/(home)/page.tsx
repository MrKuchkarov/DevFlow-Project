import React from 'react';
import Link from "next/link";
import {Button} from "@/components/ui/button";

const Home = () => {
    return (
        <>
            <div
                className='flex flex-col-reverse w-full justify-between gap-4 sm:flex-row sm:items-center'
            >
                <h1
                    className='h1-bold text-dark100_light900'
                >
                       All Questions
                </h1>
                <Link
                    href='/ask-question'
                    className='flex justify-end max-sm:w-full'
                >
                    <Button
                        className='primary-gradient min-h-[46-px] px-4 py-3 !text-light-900'
                    >
                        Ask Questions
                    </Button>
                </Link>
            </div>
            <div
                className='mt-11 flex justify-between gap-5 max-sm:flex-col sm:items-center'
            >
                {/* */}
            </div>
        </>
    );
};

export default Home;