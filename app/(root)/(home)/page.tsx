import React from 'react';
import Link from "next/link";
import {Button} from "@/components/ui/button";
import LocalSearchbar from "@/components/shared/search/LocalSearchbar";
import Filter from "@/components/shared/Filter";
import {HomePageFilters} from "@/constants/filters";
import HomeFilters from "@/components/home/HomeFilters";
import NoResult from "@/components/shared/NoResult";
import QuestionCard, {QuestionCardProps} from "@/components/cards/QuestionCard";


const questions: QuestionCardProps[] = [
    {
        _id: '1',
        title: 'The Lightning Component c:LWC_PizzaTracker generated invalid output for field status.',
        tags: [{_id: '1', name: 'React'}, {_id: '3', name: 'Python'}],
        author: {
            _id: '1',
            name: 'John Dou',
            picture: 'j.jpg'
        },
        upvotes: 13000,
        views: 114000000,
        answers: [],
        createdAt: new Date('2021-09-01T12:00:00.000Z'),
    },
    {
        _id: '3',
        title: 'An HTML table where specific cells come from values in a Google Sheet identified by their neighboring cell',
        tags: [{_id: '5', name: 'NextJS'}, {_id: '7', name: 'NodeJS'}],
        author: {
            _id: '3',
            name: 'Elon Musk',
            picture: 'e.jpg'
        },
        upvotes: 19,
        views: 777,
        answers: [],
        createdAt: new Date('2021-01  -01T12:00:00.000Z'),
    },

]
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
                <LocalSearchbar
                    route='/'
                    iconPosition='left'
                    imgSrc='/assets/icons/search.svg'
                    placeholder='Search for questions'
                    otherClasses='fl  ex-1'
                />

                <Filter
                    filters={HomePageFilters}
                    otherClasses='min-h-[56px] sm:min-w-[170px]'
                    containerClasses='hidden max-md:flex '
                />
            </div>

            <HomeFilters/>

            <div
                className='mt-10 flex w-full flex-col gap-6'
            >
                {questions.length > 0
                    ?
                    questions.map((question) => (
                    <QuestionCard
                        key={question._id}
                        _id={question._id}
                        title={question.title}
                        tags={question.tags}
                        author={question.author}
                        upvotes={question.upvotes}
                        views={question.views}
                        answers={question.answers}
                        createdAt={question.createdAt}
                    />
                ))
                    : <NoResult
                        title='There’s no question to show'
                        description='Be the first to break the silence! 🚀 Ask a Question and kickstart the discussion.
                our query could be the next big thing others learn from. Get involved! 💡'
                        link='/ask-question'
                        linkTitle='Ask a Question'
                    />
                }
            </div>
        </>
    );
};

export default Home;