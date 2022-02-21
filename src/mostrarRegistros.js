const AWS= require("aws-sdk");

const mostrarRegistros= async (event) => {
    const dynamodb= new AWS.DynamoDB.DocumentClient();
    const fechaCreacion=new Date();

    const resultBd= await dynamodb.scan({
        TableName: 'PersonajeStarkWar'
    }).promise();

    const resultado=resultBd.Items;
    const objeto={
        fechaCreacion,
        resultado
    }
    return {
        statusCode:200,
        headers: {
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Credentials': true,
          },
        body: JSON.stringify(objeto),
    };
    
};

module.exports={
    mostrarRegistros,
};