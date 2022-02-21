const AWS= require("aws-sdk");

const mostrarBusqueda= async (event) => {
    const dynamodb= new AWS.DynamoDB.DocumentClient();
    const {id}=event.pathParameters;
    const result= await dynamodb.get({
        TableName: 'PersonajeStarkWar',
        Key: {
            id
        }
    }).promise();

    return {
        statusCode:200,
        headers: {
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Credentials': true,
          },
        body: JSON.stringify(result.Item),
    };
    
};

module.exports={
    mostrarBusqueda,
};