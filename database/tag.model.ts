import { Schema, model, models, Document } from 'mongoose';

export type TTag = Document & {
    name: string;
    descriptions: string;
    questions: Schema.Types.ObjectId[];
    followers: Schema.Types.ObjectId[];
    createdOn: Date;
};

const TagSchema = new Schema({
    name: { type: String, required: true, unique: true },
    descriptions: { type: String, required: true },
    questions: [{ type: Schema.Types.ObjectId, ref: 'Question' }],
    followers: [{ type: Schema.Types.ObjectId, ref: 'User' }],
    createdOn: { type: Date, default: Date.now }
});

const Tag = models.Tag || model<TTag>('Tag', TagSchema);

export default Tag;
