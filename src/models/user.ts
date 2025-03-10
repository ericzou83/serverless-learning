import * as dynamoose from "dynamoose";
import { initDynamoDb } from "../dynamo-setup";

initDynamoDb();

const schema = new dynamoose.Schema({
    username: {
        type: String,
        hashKey: true, // 主鍵 (Partition Key)
    },
    name: String,
}, {
    timestamps: true,  // 自動增加 createdAt 和 updatedAt 欄位
});

export const User = dynamoose.model('User', schema, { create: true });
