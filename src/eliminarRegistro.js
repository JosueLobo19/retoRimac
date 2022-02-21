const AWS= require("aws-sdk");

const eliminarBusqueda= async (event) => {
    const dynamodb= new AWS.DynamoDB.DocumentClient();
    const {id}=event.pathParameters;
    const result= await dynamodb.delete({
        TableName: 'PersonajeStarkWar',
        Key: {
            id,
        },
    }).promise();
    let mensaje="Se elimino con exito";
    const regresaMensaje={
        mensaje
    };
    return {
        statusCode:200,
        headers: {
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Credentials': true,
          },
          body: JSON.stringify(regresaMensaje),
    };
    
};

module.exports={
    eliminarBusqueda,
};