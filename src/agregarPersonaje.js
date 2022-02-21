const {v4}= require("uuid");
const AWS= require("aws-sdk");

const agregarPersonaje= async (event) => {
    const dynamodb= new AWS.DynamoDB.DocumentClient();
    const{nombre,altura,masa,color_pelo,color_piel,color_ojos,
        nacimiento,genero,planeta_origen,pelicula,especies,
        vechiculos,naves_espaciales}=JSON.parse(event.body);
    const id=v4();
    const fechaCreacion=new Date();
    const estructura={
        id,
        fechaCreacion,
        nombre,
        altura,
        masa,
        color_pelo,
        color_piel,
        color_ojos,
        nacimiento,
        genero,
        planeta_origen,
        pelicula,
        especies,
        vechiculos,
        naves_espaciales
    };
  
    await dynamodb.put({
        TableName: 'PersonajeStarkWar',
        Item: estructura,
    }).promise();

    return{
        statusCode:200,
        headers: {
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Credentials': true,
          },
        body: JSON.stringify(estructura),

    };

};

module.exports={
    agregarPersonaje,
};