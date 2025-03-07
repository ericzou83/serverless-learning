import * as dynamoose from 'dynamoose';

import { config } from "./project.config";

export const initDynamoDb = () => {
   if (config.useDynamoLocal) {
      dynamoose.aws.ddb.local(config.dynamoEndpoint)
      console.log(`Using local DynamoDB at ${config.dynamoEndpoint}`);
   } else {
      dynamoose.aws.ddb.set(new dynamoose.aws.ddb.DynamoDB(config.awsConfig));
      console.log(`Using AWS DynamoDB in region ${config.awsConfig.region}`);
   }
};
