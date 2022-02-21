var Request = require("request");

let consumir_swapi = () => {
    return new Promise((resolve, reject) => {
            Request.get({
                "headers": {
                    "content-type": "application/json",
                },
                "url": `https://swapi.py4e.com/api/people`
            }, (error, response, body) => {
                if (error) {
                    return console.dir(error);
                }
                contenido = JSON.parse(body).results;

                resolve(contenido);
            });
    })
}

const mostrarPersonaje= async (event) => {
    let data=await consumir_swapi();
    return {
        statusCode:200,
        headers: {
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Credentials': true,
          },
        body: JSON.stringify(data),
    };
    
};

module.exports={
    mostrarPersonaje,
};