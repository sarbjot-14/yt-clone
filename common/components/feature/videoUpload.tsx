'use client';

import axios from 'axios';
import { ChangeEvent, useState } from 'react';
import { ClimbingBoxLoader } from 'react-spinners';
import { setConstantValue } from 'typescript';
import toast, { Toaster } from 'react-hot-toast';
import { dbCreateVideo } from '@/common/db-queries';

function VideoUploader({ creatorEmail }: { creatorEmail: any }) {
  const [file, setFile] = useState<File>();
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setFile(e.target.files[0]);
    }
  };

  const handleUploadClick = async () => {
    if (!file) {
      //   //setError('Please upload a file');
      setError('Please submit file');
    } else if (title == '') {
      setError('Please enter a title');
    } else if (description == '') {
      setError('Please enter a description');
    } else {
      setIsLoading(true);
      // * GET request: presigned URL
      try {
        const response = await axios({
          method: 'GET',
          url: process.env.NEXT_PUBLIC_SIGNED_ENDPOINT,
        });
        // * PUT request: upload file to S3
        const result = await fetch(response.data.uploadURL, {
          method: 'PUT',
          body: file,
        });
        setError('');
        setIsLoading(false);
        setTitle('');
        setDescription('');
        if (result.status == 200) {
          const res = await fetch('/api/videos', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
              title,
              description,
              s3Key: response.data.Key,
              creatorEmail: creatorEmail,
            }),
          });

          // dbCreateVideo({
          //   title,
          //   description,
          //   s3Key: response.data.Key,
          //   creatorEmail: creatorEmail,
          // });
        }
        toast.success('Successfully Uploaded.', {
          duration: 4000,
          position: 'top-center',

          // Styling
          style: {
            backgroundColor: '#AFE1AF',
          },

          // Custom Icon
          icon: '👏',

          // Change colors of success/error/loading icon
          iconTheme: {
            primary: '#000',
            secondary: '#fff',
          },
        });
      } catch (err) {
        console.log(err);
        setError('Error when uploading');
        setIsLoading(false);
      }
    }
  };

  return (
    <div>
      <Toaster />
      {isLoading ? (
        <div className="p-20 py-40">
          <ClimbingBoxLoader color="#FF0000" />
        </div>
      ) : (
        <form className="w-full py-20 max-w-sm  flex flex-col gap-5">
          <div className="md:flex md:items-center mb-6 gap-2">
            <div className="md:w-1/3">
              <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4">
                Title
              </label>
            </div>
            <div className="md:w-2/3">
              <input
                className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white "
                id="title"
                type="text"
                value={title}
                placeholder="Title"
                onChange={(e) => {
                  setTitle(e.target.value);
                }}
              ></input>
            </div>
          </div>
          <div className="md:flex md:items-center mb-6">
            <div className="md:w-1/3">
              <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4">
                Description
              </label>
            </div>
            <div className="md:w-2/3">
              <textarea
                className="form-control bg-gray-200  max-h-40 w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                id="description"
                rows={3}
                value={description}
                onChange={(e) => {
                  setDescription(e.target.value);
                }}
                placeholder="Description of video"
              ></textarea>
            </div>
          </div>
          <div className="flex flex-col justify-center items-center gap-3">
            <input className="ml-20" type="file" onChange={handleFileChange} />

            {/* <div>{file && `${file.name} - ${file.type}`}</div> */}
            <p className="text-red-400">{error}</p>

            <div
              className="bg-blue-600 hover:cursor-pointer hover:bg-blue-400 p-2 px-5 rounded-full text-white"
              onClick={() => {
                handleUploadClick();
              }}
            >
              Upload Video
            </div>
          </div>
        </form>
      )}
    </div>
  );
}

export default VideoUploader;
