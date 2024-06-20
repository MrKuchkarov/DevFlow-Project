import React from 'react';
import Link from "next/link";
import Image from "next/image";
import RenderTag from "@/components/shared/RenderTag";

type hotQuestionsT = {
    _id: number;
    title: string
}[];
const hotQuestions: hotQuestionsT = [
    {_id: 1, title: 'How Next is different from other JavaScript frameworks?'},
    {_id: 3, title: 'What is the process of installing Next JS?'},
    {_id: 5, title: 'Write a Hello World Program in Next JS?'},
    {_id: 7, title: 'What are the benefits of using Next JS?'},
];

const popularTags = [
    {_id: 1, name: 'JavaScript', totalQuestions: 5,},
    {_id: 3, name: 'React ', totalQuestions: 6,},
    {_id: 5, name: 'NextJS', totalQuestions: 1,},
    {_id: 7, name: 'NodeJS', totalQuestions: 3,},
    {_id: 9, name: 'Css  ', totalQuestions: 3,},
]
const RightSidebar = () => {

    return (
        <section
            className='background-light900_dark200 light-border mx-xl:hidden
            custom-scrollbar sticky right-0 top-0 flex w-[350px] flex-col
            overflow-y-auto border-l p-6 pt-36 shadow-light-300 dark:shadow-none'>
            <div>
                <h3 className='h3-bold text-dark200_light900'>
                    Top Questions
                </h3>
                <div className='mt-7 flex w-full flex-col gap-[30px]'>
                    {hotQuestions.map((questions) => (
                        <Link
                            href={`/questions/${questions._id}`}
                            key={questions._id}
                            className='flex cursor-pointer items-center justify-between gap-7  '
                        >
                            <p className='body-medium text-dark500_light700'>
                                {questions.title}
                            </p>
                            <Image
                                src='/assets/icons/chevron-right.svg'
                                alt='chevron right'
                                width={20}
                                height={20}
                                className='invert-colors    '
                            />
                        </Link>
                    ))}
                </div>
            </div>
            <div className='mt-16'>
                <h3 className='h3-bold text-dark200_light900'>
                    Popular Tags
                </h3>
                <div className='mt-7 flex flex-col gap-4   '>
                    {popularTags.map((tag) => (
                        <RenderTag
                            key={tag._id}
                            _id={tag._id}
                            name={tag.name}
                            totalQuestions={tag.totalQuestions}
                            showCount
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default RightSidebar;