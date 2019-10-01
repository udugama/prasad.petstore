import { createPet, savePet } from './../petCreate';
import { savePetResponse, body } from './fixtures/requests';
import { server } from './../../index';
import * as request from 'supertest';

describe('putCreate', () => {
    afterAll(() => {
        server.close();
    });
    it('is a function', () => {
        expect(createPet).toBeInstanceOf(Function);
    });

    test('successfully process request for route post /petcreate', async () => {
        (savePet as any) = jest
            .fn()
            .mockReturnValue(savePetResponse);
        (request(server) as any)
        .post('/petcreate')
        .send(body)
        .set('Accept', 'application/json')
        .expect('Content-Type', /json/)
        .expect(200)
    });

    //todo: negative test case to be implimented
});