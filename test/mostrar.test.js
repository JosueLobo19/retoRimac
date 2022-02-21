const request = require('supertest');

describe('metodo get de mostrar integracion y si es del metodo get', () => {
	const server = request(`https://nctawz44ah.execute-api.us-west-2.amazonaws.com`);
	test('comprobar el status', async () => {
		const res = await server.get('/mostrarPersonajeIntegracionSwapi');
		expect(res.statusCode).toEqual(200);
	});
  
});


describe('metodo get de mostrar registros y si es del metodo get', () => {
	const server = request(`https://nctawz44ah.execute-api.us-west-2.amazonaws.com`);
	test('comprobar el status', async () => {
		const res = await server.get('/mostrarRegistrosBd');
		expect(res.statusCode).toEqual(200);
	});
  
});

describe('metodo get de mostrar la busqeda de un registros y si es del metodo get', () => {
	const server = request(`https://nctawz44ah.execute-api.us-west-2.amazonaws.com`);
	test('comprobar el status', async () => {
		const res = await server.get('/mostrarBusqueda/{id}');
		expect(res.statusCode).toEqual(200);
	});
  
});

describe('metodo delete de uno de los registros', () => {
	const server = request(`https://nctawz44ah.execute-api.us-west-2.amazonaws.com`);
	test('comprobar el status y si es del metodo delete', async () => {
		const res = await server.delete('/eliminarBusqueda/{id}');
		expect(res.statusCode).toEqual(200);
	});
  
});