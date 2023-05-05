import {Schema,model} from 'mongoose';

const topicSchema = new Schema({
    title:{
        type: String,
        minLength: 1,
        maxLength: 100,
        required: true
    },
    content:{
        type: String,
        minLength: 1,
        required: true
    },
    description:{
        type:String,
        default:""
    },
	url:{
        type:String,
        default:""
    },
	presentationImg:{
        type:String,
        default:""
        },
    category:{
        type:String,
        default:"Varios"
    }
},
//generate a automatic created_at and modified_at
{timestamps:true});

export default model('topic', topicSchema);