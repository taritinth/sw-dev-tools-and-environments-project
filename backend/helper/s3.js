require("dotenv").config();
const fs = require("fs");
const AWS = require("aws-sdk");

const s3 = new AWS.S3({
  accessKeyId: process.env.AWS_ID,
  secretAccessKey: process.env.AWS_SECRET,
});

const uploadS3 = async (file, path) => {
  const fileStream = fs.createReadStream(file.path);

  const uploadParams = {
    Bucket: process.env.S3_BUCKET_NAME,
    Body: fileStream,
    Key: path, //user_id instead
  };

  return s3.upload(uploadParams).promise();
};

const downloadS3 = async (path) => {
  const downloadParams = {
    Key: path,
    Bucket: process.env.S3_BUCKET_NAME,
  };
  return s3.getObject(downloadParams).promise();
  //   return s3.getObject(downloadParams).createReadStream();
};
module.exports = { uploadS3, downloadS3 };
