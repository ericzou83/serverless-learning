import * as dynamoose from 'dynamoose'
import * as uuid from 'uuid'

import { initDynamoDb } from "../dynamo-setup";

initDynamoDb();

const schema = new dynamoose.Schema({
    productOrderId: {
        type: String,
        hashKey: true,
        default: () => `${uuid.v4()}`
    },
    productId: {
        type: String,
        index: [{
            name: 'productId-createAt-index',
            type: 'global',
            rangeKey: 'createdAt',
            project: true
        }],
    },
    username: {
        type: String,
        index: {
            name: "username-createAt-index",
            type: 'global',
            rangeKey: 'createdAt',
            project: true
        }
    },
    count: Number,
    createdAt: {
        type: Number,
        default: () => Date.now()
    }
});

export const ProductOrder = dynamoose.model('ProductOrder', schema, { create: true });
