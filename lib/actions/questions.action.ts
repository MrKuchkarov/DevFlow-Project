'use server'

import {connectToDataBase} from "@/lib/mongoose";

export async function createQuestion(params: any) {
    try {
        connectToDataBase();
    } catch (error) {

    }
}