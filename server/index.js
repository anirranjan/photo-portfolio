const express = require('express');
const { S3Client, ListObjectsV2Command, GetObjectCommand } = require('@aws-sdk/client-s3');
const { getSignedUrl } = require('@aws-sdk/s3-request-presigner');
const dotenv = require('dotenv');
const cors = require('cors');
dotenv.config();

const app = express();
const port = process.env.PORT || 3001;
app.use(cors())

const s3Client = new S3Client({
  region: process.env.REGION,
  credentials: {
    accessKeyId: process.env.ACCESSKEY,
    secretAccessKey: process.env.SECRETKEY,
  },
});

app.get('/image-urls', async (req, res) => {
  const params = {
    Bucket: process.env.BUCKET,
  };

  try {
    const data = await s3Client.send(new ListObjectsV2Command(params));
    const urls = await Promise.all(
      data.Contents.map(async (obj) => {
        const signedUrl = await getSignedUrl(s3Client, new GetObjectCommand({
          Bucket: params.Bucket,
          Key: obj.Key,
        }), { expiresIn: 3600 });
        return signedUrl;
      })
    );
    res.json(urls);
  } catch (err) {
    console.error('Error fetching images from S3:', err);
    res.status(500).send('Error fetching images from S3');
  }
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
