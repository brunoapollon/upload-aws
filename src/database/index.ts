import mongoose from 'mongoose';

mongoose.connect('mongodb://localhost/upload-aws');

mongoose.Promise = global.Promise;

export { mongoose };
