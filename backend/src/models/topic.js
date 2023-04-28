import mongoose from 'mongoose';

const topicSchema = new mongoose.Schema({
    title: {
        type: String,
        minLength: 1,
        maxLength: 100,
        required: true
    },
    content: {
        type: String,
        minLength: 1,
        required: true
    },
    created_at: {
        type: Date, default: Date.now()
    },
    modified_at: {
        type: Date, default: Date.now()
    },
});

const Topic = mongoose.model('Topic', topicSchema);
export default Topic;