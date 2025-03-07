import * as dotenv from "dotenv";

dotenv.config();

export const config = {
    useDynamoLocal: process.env.USE_DYNAMO_LOCAL === "true",
    dynamoEndpoint: process.env.DYNAMO_LOCAL_ENDPOINT || "http://localhost:8000",
    awsConfig: {
        credentials: {
            accessKeyId: process.env.AWS_ACCESS_KEY_ID || "",
            secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY || "",
        },
        region: process.env.AWS_REGIION || ""
    },
}
