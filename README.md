<!--
title: 'AWS Simple HTTP Endpoint example in NodeJS'
description: 'This template demonstrates how to make a simple HTTP API with Node.js running on AWS Lambda and API Gateway using the Serverless Framework.'
layout: Doc
framework: v3
platform: AWS
language: nodeJS
authorLink: 'https://github.com/serverless'
authorName: 'Serverless, inc.'
authorAvatar: 'https://avatars1.githubusercontent.com/u/13742415?s=200&v=4'
-->
# APIS- METODO GET
# 1- Api que muestra todos los registros de la BD
https://nctawz44ah.execute-api.us-west-2.amazonaws.com/mostrarRegistrosBd

# 2- Api que muestra un  registro de la BD según su ID, si se desea conocer el ID de cada registro en la BD, probar con la primera api que devuelve ese valor
https://nctawz44ah.execute-api.us-west-2.amazonaws.com/mostrarBusqueda/25634967-1f2a-4a7a-a35e-6a39781ca047

# 3- Api que integra con SWAPI los personajes
https://nctawz44ah.execute-api.us-west-2.amazonaws.com/mostrarPersonajeIntegracionSwapi

# APIS- METODO DELETE
# 4- Api que elimina un registro de la BD segun su ID, si se desea conocer el ID de cada registro en la BD, probar con la primera api que devuelve ese valor
https://nctawz44ah.execute-api.us-west-2.amazonaws.com/eliminarBusqueda/25634967-1f2a-4a7a-a35e-6a39781ca047

# APIS- METODO POST
# 5- Api que agrega registros a la BD
https://nctawz44ah.execute-api.us-west-2.amazonaws.com/agregarPersonaje
# PRIMER JSON DE PRUEBA:
 
{
			"nombre": "Luke Skywalker",
			"altura": "172",
			"masa": "77",
			"color_pelo": "rubio",
			"color_piel": "claro",
			"color_ojos": "azul",
			"nacimiento": "19BBY",
			"genero": "male",
			"planeta_origen": "https://swapi.py4e.com/api/planets/1/",
			"pelicula": [
				"https://swapi.py4e.com/api/films/1/",
				"https://swapi.py4e.com/api/films/2/",
				"https://swapi.py4e.com/api/films/3/",
				"https://swapi.py4e.com/api/films/6/",
				"https://swapi.py4e.com/api/films/7/"
			],
			"especies": [
				"https://swapi.py4e.com/api/species/1/"
			],
			"vechiculos": [
				"https://swapi.py4e.com/api/vehicles/14/",
				"https://swapi.py4e.com/api/vehicles/30/"
			],
			"naves_espaciales": [
				"https://swapi.py4e.com/api/starships/12/",
				"https://swapi.py4e.com/api/starships/22/"
			]
}

# 2 JSON DE PRUEBA
{
		"nombre": "C-3PO",
		"altura": "167",
		"masa": "75",
		"color_pelo": "n/a",
		"color_piel": "gold",
		"color_ojos": "yellow",
		"nacimiento": "112BBY",
		"genero": "n/a",
		"planeta_origen": "https://swapi.py4e.com/api/planets/1/",
		"pelicula": [
			"https://swapi.py4e.com/api/films/1/",
			"https://swapi.py4e.com/api/films/2/",
			"https://swapi.py4e.com/api/films/3/",
			"https://swapi.py4e.com/api/films/4/",
			"https://swapi.py4e.com/api/films/5/",
			"https://swapi.py4e.com/api/films/6/"
		],
		"especies": [
			"https://swapi.py4e.com/api/species/2/"
		],
		"vechiculos": [],
		"naves_espaciales": []
	}
# 3 JSON DE PRUEBA  
	{
		"nombre": "R2-D2",
		"altura": "96",
		"masa": "32",
		"color_pelo": "n/a",
		"color_piel": "white, blue",
		"color_ojos": "red",
		"nacimiento": "33BBY",
		"genero": "n/a",
		"planeta_origen": "https://swapi.py4e.com/api/planets/8/",
		"pelicula": [
			"https://swapi.py4e.com/api/films/1/",
			"https://swapi.py4e.com/api/films/2/",
			"https://swapi.py4e.com/api/films/3/",
			"https://swapi.py4e.com/api/films/4/",
			"https://swapi.py4e.com/api/films/5/",
			"https://swapi.py4e.com/api/films/6/",
			"https://swapi.py4e.com/api/films/7/"
		],
		"especies": [
			"https://swapi.py4e.com/api/species/2/"
		],
		"vechiculos": [],
		"naves_espaciales": []
	}

# Serverless Framework Node HTTP API on AWS

This template demonstrates how to make a simple HTTP API with Node.js running on AWS Lambda and API Gateway using the Serverless Framework.

This template does not include any kind of persistence (database). For more advanced examples, check out the [serverless/examples repository](https://github.com/serverless/examples/) which includes Typescript, Mongo, DynamoDB and other examples.

## Usage

### Deployment

```
$ serverless deploy
```

After deploying, you should see output similar to:

```bash
Deploying aws-node-http-api-project to stage dev (us-east-1)

✔ Service deployed to stack aws-node-http-api-project-dev (152s)

endpoint: GET - https://xxxxxxxxxx.execute-api.us-east-1.amazonaws.com/
functions:
  hello: aws-node-http-api-project-dev-hello (1.9 kB)
```

_Note_: In current form, after deployment, your API is public and can be invoked by anyone. For production deployments, you might want to configure an authorizer. For details on how to do that, refer to [http event docs](https://www.serverless.com/framework/docs/providers/aws/events/apigateway/).

### Invocation

After successful deployment, you can call the created application via HTTP:

```bash
curl https://xxxxxxx.execute-api.us-east-1.amazonaws.com/
```

Which should result in response similar to the following (removed `input` content for brevity):

```json
{
  "message": "Go Serverless v2.0! Your function executed successfully!",
  "input": {
    ...
  }
}
```

### Local development

You can invoke your function locally by using the following command:

```bash
serverless invoke local --function hello
```

Which should result in response similar to the following:

```
{
  "statusCode": 200,
  "body": "{\n  \"message\": \"Go Serverless v3.0! Your function executed successfully!\",\n  \"input\": \"\"\n}"
}
```


Alternatively, it is also possible to emulate API Gateway and Lambda locally by using `serverless-offline` plugin. In order to do that, execute the following command:

```bash
serverless plugin install -n serverless-offline
```

It will add the `serverless-offline` plugin to `devDependencies` in `package.json` file as well as will add it to `plugins` in `serverless.yml`.

After installation, you can start local emulation with:

```
serverless offline
```

To learn more about the capabilities of `serverless-offline`, please refer to its [GitHub repository](https://github.com/dherault/serverless-offline).
