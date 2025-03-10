import { Handler } from 'aws-lambda'

import { UserRepo } from '../../repos/user'

export const getUser: Handler = async (event, contenxt) => {

  const username = event.pathParameters.id;

  try {
    const user = await UserRepo.getOne(username)

    return {
      statusCode: 200,
      body: JSON.stringify(user),
    }
  } catch (error) {
    console.log(error);
    return {
      statusCode: 404,
    }
  }
}

export const createUser: Handler = async (event, contenxt) => {

  const { username, name } = JSON.parse(event.body);

  try {
    const user = await UserRepo.makeOne(username, name);

    return {
      statusCode: 201,
      body: JSON.stringify(user),
    }
  } catch (error) {
    console.log(error);
    return {
      statusCode: 500,
    }
  }
}