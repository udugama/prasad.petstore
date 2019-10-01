import * as Ajv from 'ajv';
import * as schema from './../schema/petCreate.json'
import { getPetModel } from './models/pets';

/**
 * saves pet to the database and return database response
 * @param body
 */
export const savePet = (async(body: any) => {
    const PetModel: any = await getPetModel();

    const Pet: any = new PetModel(body);

    const pet: any = await Pet.save()
    .catch((error) => {
      console.log('Error saving pet.', error);
      throw new Error(error);
    });

    return pet;
});  

/**
 * validate the request agains the create schema and process create response 
 * @param ctx 
 */
export const createPet = (async (ctx)=> {
    const { request: { body } } = ctx;
    console.log('request payload : ', body);

    // validate the request agains the json schema to ensure intergrity of the request data
    const ajv = new Ajv ({ allErrors: true });
    const valid = ajv.validate(schema, body); 
    if (!valid) {
        console.log('validation Errors : ', ajv.errors);
        // todo: make the errors json API complient.
        throw Error('Schema Validation Error!');
    }

    const pet: any = await savePet(body);

    console.log('pet=====', pet, '=====');

    const respsonse: object = {
        action: 'petcreate',
        status: 'success',
        content: pet,
    };


    console.log('response payload : ', respsonse);
    ctx.body = respsonse;
});
