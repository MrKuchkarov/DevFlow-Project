'use server'

import {connectToDataBase} from "@/lib/mongoose";
import User from "@/database/user.model";
import {CreateUserParams, DeleteUserParams, GetUserByIdParams, UpdateUserParams} from "@/lib/actions/shared.types";
import {revalidatePath} from "next/cache";
import Question from "@/database/question.model";

export async function getUserById(params: GetUserByIdParams) {
    try {
        await connectToDataBase();

        const { userId } = params;

        return await User.findOne({ clerkId: userId });
    } catch (error) {
        console.log(error);
        throw error;
    }
}

export async function createUser(userData: CreateUserParams) {
    try {
        await connectToDataBase();

        return await User.create(userData)
    } catch (error) {
        console.log(error);
        throw error;
    }
}

export async function updateUser(params: UpdateUserParams) {
    try {
        await connectToDataBase();

        const { clerkId, updateData, path } = params;

        await User.findOneAndUpdate({clerkId}, updateData, {
            new: true,
        })

        revalidatePath(path)
    } catch (error) {
        console.log(error);
        throw error;
    }
}

export async function deleteUser(params: DeleteUserParams) {
    try {
        await connectToDataBase();

        const {clerkId} = params;

        const user = await User.findOneAndDelete({clerkId});

        if (!user) {
            console.error('User not found');
            return null;
        }

        // Delete user from database
        // and questions, answers, comments, etc.

        // const userQuestionsIds = await Question.find({ author: user._id })
        //     .distinct('_id');

        // delete user questions

        await Question.deleteMany({ author: user._id });

        // TODO: delete user answers, comments, etc.

        return await User.findByIdAndDelete(user._id);
    } catch (error) {
        console.log(error);
        throw error;
    }
}


