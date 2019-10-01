import * as mongoose from 'mongoose';

/**
 *  toDo:
 *  this connection string and password contain sensitive information
 *  it expected to store someware else from code preferable 
 *  encrypted or in a key manager
 * */
export const getPetModel = (async() => {
  const options: object = {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
  };

  await mongoose.connect('mongodb://mongo:27017/mongodb', options) // docker url
    .then(() => console.log('MongoDB Connected'))
    .catch(err => console.log(err));
    
    var petSchema = new mongoose.Schema({
        id: Number,
        category: {
          id: Number,
          name: String
        },
        name: String,
        photoUrls: [
          String
        ],
        tags: [
          {
            id: Number,
            name: String
          }
        ],
        status: String,
    });

    if(mongoose.connection.models['Pet']) {
      delete mongoose.connection.models['Pet'];
    }

    const petModel: any = mongoose.model('Pet', petSchema);

    console.log('=====petModel====', petModel, '=========');
    return petModel;
});
