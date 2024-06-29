'use server'

import {connectToDataBase} from "@/lib/mongoose";
import Question from "@/database/question.model";
import TTag from "@/database/tag.model";
import TUser from "@/database/user.model";
import {CreateQuestionParams, GetQuestionsParams} from "@/lib/actions/shared.types";
import {revalidatePath} from "next/cache";

export async function getQuestions(params: GetQuestionsParams) {

    try {
        connectToDataBase();

        const questions = await Question.find({})
            .populate({ path: 'tags', model: TTag })
            .populate({  path: 'author', model: TUser })
            .sort({ createdAt: -1 })

        return{ questions }
    } catch (error) {
        console.log(error);
        throw error;
    }

}

export async function createQuestion(params: CreateQuestionParams) {
    try {
        connectToDataBase();

        const { title, content, tags, author, path } = params;

        const question = await Question.create({
            title,
            content,
            author
        });

        const tagDocuments = [];

        for (const tag of tags) {
            const existingTag = await Tag.findOneAndUpdate(
                {name: { $regex: new RegExp(`⌃${tag}$`, 'i') }},
                {$setOnInsert: { name: tag }, $push: { question: question._id }},
                {upsert: true, new: true}
            )

            tagDocuments.push(existingTag._id);
        }

        await Question.findByIdAndUpdate(question._id, {
            $push: { tags: {$each: tagDocuments }}
        });

        revalidatePath(path)
    } catch (error) {

    }
}