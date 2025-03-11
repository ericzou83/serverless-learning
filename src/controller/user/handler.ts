import { APIGatewayEvent, Handler } from 'aws-lambda'

import { UserRepo } from '../../repos/user'

export const getUser: Handler<APIGatewayEvent> = async (event, contenxt) => {

  const { id: username } = (event.pathParameters as ({ id?: string | null } | null)) ?? {};

  if (!username) {
    return {
      statusCode: 400,
      body: JSON.stringify({
        message: 'username is required'
      })
    }
  }

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

export const createUser: Handler<APIGatewayEvent> = async (event) => {

  if (!event.body) {
    return {
      statusCode: 400,
      body: JSON.stringify({
        message: 'Body is required'
      })
    }
  }

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