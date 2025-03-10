# Backend Learning

This learning repo is the note of learning `aws Lamda` + `serverless` + `DynamoDB`.

## Get started

Run following cmdline to start local db, we strongly recommand using local db because the testing data can be isolated.

```sh
docker compose up -d
```

Setup your environment with `.env` file.

```.env
USE_DYNAMO_LOCAL=true
DYNAMO_LOCAL_ENDPOINT=http://localhost:8000

AWS_ACCESS_KEY_ID=
AWS_SECRET_ACCESS_KEY=
AWS_REGIION=
```

Run following command line to start the `dev` server.

```sh
npm run dev
```

## Open API

You can download following vscode plugin to view the api file in folder `api-specification`.

https://marketplace.visualstudio.com/items?itemName=42Crunch.vscode-openapi
