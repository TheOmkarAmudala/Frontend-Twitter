import mongoose from "mongoose";

const TweetSchema = new mongoose.Schema({
    description:{
        type:String,
        required:true
    },
    Likes:{
        type:Array,
        default: []
    },
    userIs{
        type:mongoose.Schema.Types.ObjectId,
        ref: "user"
    },
    bookmarks:{
        type:Array,
        default: []
    }
},{timestamps:true});

export const Tweet = mongoose.model("Tweet", TweetSchema);

