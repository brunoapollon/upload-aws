import { mongoose } from '../database';

const fileSchema = new mongoose.Schema({
  name: String,
  size: Number,
  key: String,
  url: String,
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

fileSchema.pre('save', function () {
  if (!this.url) this.url = `${process.env.APP_URL}/files/${this.key}`;
});

const File = mongoose.model('File', fileSchema);

export { File };
