'use client';

import axios from 'axios';
import { ChangeEvent, useState } from 'react';

function VideoUploader() {
  const [file, setFile] = useState<File>();

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setFile(e.target.files[0]);
    }
  };

  const handleUploadClick = async () => {
    if (!file) {
      return;
    }
    console.log(file);

    // * GET request: presigned URL
    const response = await axios({
      method: 'GET',
      url: process.env.NEXT_PUBLIC_SIGNED_ENDPOINT,
    });

    console.log('Response: ', response);

    // * PUT request: upload file to S3
    const result = await fetch(response.data.uploadURL, {
      method: 'PUT',
      body: file,
    });
    console.log('Result: ', result);
  };

  return (
    <div>
      <input type="file" onChange={handleFileChange} />

      <div>{file && `${file.name} - ${file.type}`}</div>

      <button onClick={handleUploadClick}>Upload</button>
    </div>
  );
}

export default VideoUploader;
