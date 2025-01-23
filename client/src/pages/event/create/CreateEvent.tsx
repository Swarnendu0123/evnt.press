import { useState } from "react";
import MDEditorComponent from "./MarkdownEditor";

const UploadCover = () => {
  const [file, setfile] = useState<File | null>(null);
  return (
    <div>
      {file ? (
        <div className={`flex items-center justify-center w-96 h-48`}>
          <img
            src={URL.createObjectURL(file)}
            alt="cover"
            className={`w-96 h-48 object-cover rounded-lg`}
          />
        </div>
      ) : (
        <label
          className={`flex flex-col items-center justify-center w-96 h-48 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50  hover:bg-gray-100  `}
        >
          <div className="flex flex-col items-center justify-center pt-5 pb-6">
            <svg
              className="w-8 h-8 mb-4 text-gray-500"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 20 16"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"
              />
            </svg>

            <p className="mb-2 text-sm text-gray-500 ">
              <span className="font-semibold">+</span>
            </p>
          </div>
          <input
            id="dropzone-file"
            type="file"
            className="hidden"
            onChange={(e) => {
              if (e.target.files) {
                setfile(e.target.files[0]);
              }
            }}
          />
        </label>
      )}
    </div>
  );
};

const CreateEvent = () => {
  return (
    <div className="font-bold text-gray-500">
      <p className="font-bold text-gray-500 text-2xl">Create New Event</p>
      <div className="flex m-5">
        <div className="items-center justify-center w-96 mt-8">
          <p className="font-bold text-gray-500">Upload Cover</p>
          <div className="flex items-center justify-center">
            <UploadCover />
          </div>
        </div>
        <div className="m-5">
          <div className="flex flex-col items-start m-2">
            Event Name
            <input
              type="text"
              className="border rounded-lg w-full p-2"
              placeholder="East India Blockchain Summit 2025"
            />
          </div>
          <div className="flex flex-col items-start m-2">
            Orginization Name
            <select name="" id="" className="border rounded-lg p-2 w-full">
              <option value="">Select Orginization</option>
              <option value="">Kharagpur Blockchain Society</option>
              <option value="">ETH Global</option>
              <option value="">Solana</option>
              <option value="">Avalanche</option>
              <option value="">Sui</option>
              <option value="">Aptos</option>
              <option value="">Individual Creator</option>
            </select>
          </div>
          <div className="flex w-full justify-between">
            <div className="flex flex-col items-start m-2">
              Event Date
              <input type="date" className="border rounded-lg p-2 w-96" />
            </div>
            <div className="flex flex-col items-start m-2">
              Event Time
              <input type="time" className="border rounded-lg p-2 w-96" />
            </div>
          </div>
          <div className="flex w-full justify-between">
            <div className="flex flex-col items-start m-2">
              Registration Deadline
              <input
                type="date"
                className="border rounded-lg p-2 w-96"
                placeholder="30"
              />
            </div>
            <div className="flex flex-col items-start m-2">
              Registration Fee ($)
              <input
                type="number"
                className="border rounded-lg p-2 w-96"
                placeholder="30"
              />
            </div>
          </div>
          <div className="flex flex-col items-start m-2 w-full">
            Event Description
            <MDEditorComponent />
          </div>
          <div className="flex flex-col items-end m-2">
            <button
              className={`text-sm text-white py-2 px-4 rounded-lg flex items-center cursor-pointer`}
              style={{ backgroundColor: "#ff5a60" }}
            >
              Complete Listing
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="20px"
                viewBox="0 -960 960 960"
                width="20px"
                fill="#fff"
              >
                <path d="M575-421H216.98q-24.29 0-41.64-17.29Q158-455.58 158-479.79t17.34-41.71q17.35-17.5 41.64-17.5H575L437.79-676.21Q420-694 419.5-718.5t17.5-42.98q18-17.52 42.5-17.02t42.31 18.32L759.6-522.09q8.4 8.41 13.4 19.72 5 11.31 5 22.53 0 11.21-5 22.53Q768-446 760-438L521-199q-19 19-42 18.5t-41-19.02q-18-18.48-18-42.65 0-24.16 18-41.83l137-137Z" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateEvent;
