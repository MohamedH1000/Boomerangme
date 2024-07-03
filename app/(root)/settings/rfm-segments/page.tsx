import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import React from "react";

const page = () => {
  return (
    <div className="pl-20 pt-10 max-md:pl-4 pr-4">
      <h1 className="text-[30px]">RFM settings</h1>
      <p className="mt-5">
        Frequency - visits (how often your customers buy from you) <br />
        Recency - days (how long ago your customers bought something from you){" "}
        <br />
      </p>
      <div
        className="h-[45.6px] w-full bg-[#e3e3e3] border-[#656265] mt-5
      text-[#656265] rounded-md flex justify-start items-center p-4 border-[1px]"
      >
        <p>Changing the settings will recalculate all segments</p>
      </div>
      <div
        className="flex justify-center items-start 
      flex-wrap max-md:flex-col w-full max-md:mb-20 mb-10
      gap-4 mt-7"
      >
        <div
          className="p-4 w-[30%] border-[#D5D5DD] 
        border-[1px] rounded-md bg-[#FFFFFF] max-md:w-[100%]"
        >
          <h1 className="text-[18px] font-medium">RFM - Need attention</h1>
          <div
            className="flex justify-center items-start 
          flex-wrap mt-4 gap-3"
          >
            <div>
              <label htmlFor="frequencyform">Frequency from</label>
              <Input
                name="frequencyform"
                className="border-[#D5D5DD] border-[1px]"
              />
            </div>
            <div>
              <label htmlFor="frequencyto">Frequency to</label>
              <Input
                name="frequencyto"
                className="border-[#D5D5DD] border-[1px]"
              />
            </div>
            <div>
              <label htmlFor="recencyfrom">Recency from</label>
              <Input
                name="recencyfrom"
                className="border-[#D5D5DD] border-[1px]"
              />
            </div>
            <div>
              <label htmlFor="recencyto">Recency to</label>
              <Input
                name="recencyto"
                className="border-[#D5D5DD] border-[1px]"
              />
            </div>
          </div>
          <div className="w-full p-4">
            <Button
              className="bg-[#1F1E1F] text-white 
            rounded-md w-full hover:opacity-85 duration-300"
            >
              Save
            </Button>
          </div>
        </div>
        <div
          className="p-4 w-[30%] border-[#D5D5DD] 
        border-[1px] rounded-md bg-[#FFFFFF] max-md:w-[100%]"
        >
          <h1 className="text-[18px] font-medium">RFM - Loyal - Regular</h1>
          <div
            className="flex justify-center items-start 
          flex-wrap mt-4 gap-3"
          >
            <div>
              <label htmlFor="frequencyform">Frequency from</label>
              <Input
                name="frequencyform"
                className="border-[#D5D5DD] border-[1px]"
              />
            </div>
            <div>
              <label htmlFor="frequencyto">Frequency to</label>
              <Input
                name="frequencyto"
                className="border-[#D5D5DD] border-[1px]"
              />
            </div>
            <div>
              <label htmlFor="recencyfrom">Recency from</label>
              <Input
                name="recencyfrom"
                className="border-[#D5D5DD] border-[1px]"
              />
            </div>
            <div>
              <label htmlFor="recencyto">Recency to</label>
              <Input
                name="recencyto"
                className="border-[#D5D5DD] border-[1px]"
              />
            </div>
          </div>
          <div className="w-full p-4">
            <Button
              className="bg-[#1F1E1F] text-white 
            rounded-md w-full hover:opacity-85 duration-300"
            >
              Save
            </Button>
          </div>
        </div>
        <div
          className="p-4 w-[30%] border-[#D5D5DD] 
        border-[1px] rounded-md bg-[#FFFFFF] max-md:w-[100%]"
        >
          <h1 className="text-[18px] font-medium">RFM - Champions</h1>
          <div
            className="flex justify-center items-start 
          flex-wrap mt-4 gap-3"
          >
            <div>
              <label htmlFor="frequencyform">Frequency from</label>
              <Input
                name="frequencyform"
                className="border-[#D5D5DD] border-[1px]"
              />
            </div>
            <div>
              <label htmlFor="frequencyto">Frequency to</label>
              <Input
                name="frequencyto"
                className="border-[#D5D5DD] border-[1px]"
              />
            </div>
            <div>
              <label htmlFor="recencyfrom">Recency from</label>
              <Input
                name="recencyfrom"
                className="border-[#D5D5DD] border-[1px]"
              />
            </div>
            <div>
              <label htmlFor="recencyto">Recency to</label>
              <Input
                name="recencyto"
                className="border-[#D5D5DD] border-[1px]"
              />
            </div>
          </div>
          <div className="w-full p-4">
            <Button
              className="bg-[#1F1E1F] text-white 
            rounded-md w-full hover:opacity-85 duration-300"
            >
              Save
            </Button>
          </div>
        </div>
        <div
          className="p-4 w-[30%] border-[#D5D5DD] 
        border-[1px] rounded-md bg-[#FFFFFF] max-md:w-[100%]"
        >
          <h1 className="text-[18px] font-medium">RFM - At risk</h1>
          <div
            className="flex justify-center items-start 
          flex-wrap mt-4 gap-3"
          >
            <div>
              <label htmlFor="frequencyform">Frequency from</label>
              <Input
                name="frequencyform"
                className="border-[#D5D5DD] border-[1px]"
              />
            </div>
            <div>
              <label htmlFor="frequencyto">Frequency to</label>
              <Input
                name="frequencyto"
                className="border-[#D5D5DD] border-[1px]"
              />
            </div>
            <div>
              <label htmlFor="recencyfrom">Recency from</label>
              <Input
                name="recencyfrom"
                className="border-[#D5D5DD] border-[1px]"
              />
            </div>
            <div>
              <label htmlFor="recencyto">Recency to</label>
              <Input
                name="recencyto"
                className="border-[#D5D5DD] border-[1px]"
              />
            </div>
          </div>
          <div className="w-full p-4">
            <Button
              className="bg-[#1F1E1F] text-white 
            rounded-md w-full hover:opacity-85 duration-300"
            >
              Save
            </Button>
          </div>
        </div>
        <div
          className="p-4 w-[30%] border-[#D5D5DD] 
        border-[1px] rounded-md bg-[#FFFFFF] max-md:w-[100%]"
        >
          <h1 className="text-[18px] font-medium">RFM - Medium (borderline)</h1>
          <div
            className="flex justify-center items-start 
          flex-wrap mt-4 gap-3"
          >
            <div>
              <label htmlFor="frequencyform">Frequency from</label>
              <Input
                name="frequencyform"
                className="border-[#D5D5DD] border-[1px]"
              />
            </div>
            <div>
              <label htmlFor="frequencyto">Frequency to</label>
              <Input
                name="frequencyto"
                className="border-[#D5D5DD] border-[1px]"
              />
            </div>
            <div>
              <label htmlFor="recencyfrom">Recency from</label>
              <Input
                name="recencyfrom"
                className="border-[#D5D5DD] border-[1px]"
              />
            </div>
            <div>
              <label htmlFor="recencyto">Recency to</label>
              <Input
                name="recencyto"
                className="border-[#D5D5DD] border-[1px]"
              />
            </div>
          </div>
          <div className="w-full p-4">
            <Button
              className="bg-[#1F1E1F] text-white 
            rounded-md w-full hover:opacity-85 duration-300"
            >
              Save
            </Button>
          </div>
        </div>
        <div
          className="p-4 w-[30%] border-[#D5D5DD] 
        border-[1px] rounded-md bg-[#FFFFFF] max-md:w-[100%]"
        >
          <h1 className="text-[18px] font-medium">RFM - Growths</h1>
          <div
            className="flex justify-center items-start 
          flex-wrap mt-4 gap-3"
          >
            <div>
              <label htmlFor="frequencyform">Frequency from</label>
              <Input
                name="frequencyform"
                className="border-[#D5D5DD] border-[1px]"
              />
            </div>
            <div>
              <label htmlFor="frequencyto">Frequency to</label>
              <Input
                name="frequencyto"
                className="border-[#D5D5DD] border-[1px]"
              />
            </div>
            <div>
              <label htmlFor="recencyfrom">Recency from</label>
              <Input
                name="recencyfrom"
                className="border-[#D5D5DD] border-[1px]"
              />
            </div>
            <div>
              <label htmlFor="recencyto">Recency to</label>
              <Input
                name="recencyto"
                className="border-[#D5D5DD] border-[1px]"
              />
            </div>
          </div>
          <div className="w-full p-4">
            <Button
              className="bg-[#1F1E1F] text-white 
            rounded-md w-full hover:opacity-85 duration-300"
            >
              Save
            </Button>
          </div>
        </div>
        <div
          className="p-4 w-[30%] border-[#D5D5DD] 
        border-[1px] rounded-md bg-[#FFFFFF] max-md:w-[100%]"
        >
          <h1 className="text-[18px] font-medium">RFM - Sleeping</h1>
          <div
            className="flex justify-center items-start 
          flex-wrap mt-4 gap-3"
          >
            <div>
              <label htmlFor="frequencyform">Frequency from</label>
              <Input
                name="frequencyform"
                className="border-[#D5D5DD] border-[1px]"
              />
            </div>
            <div>
              <label htmlFor="frequencyto">Frequency to</label>
              <Input
                name="frequencyto"
                className="border-[#D5D5DD] border-[1px]"
              />
            </div>
            <div>
              <label htmlFor="recencyfrom">Recency from</label>
              <Input
                name="recencyfrom"
                className="border-[#D5D5DD] border-[1px]"
              />
            </div>
            <div>
              <label htmlFor="recencyto">Recency to</label>
              <Input
                name="recencyto"
                className="border-[#D5D5DD] border-[1px]"
              />
            </div>
          </div>
          <div className="w-full p-4">
            <Button
              className="bg-[#1F1E1F] text-white 
            rounded-md w-full hover:opacity-85 duration-300"
            >
              Save
            </Button>
          </div>
        </div>
        <div
          className="p-4 w-[30%] border-[#D5D5DD] 
        border-[1px] rounded-md bg-[#FFFFFF] max-md:w-[100%]"
        >
          <h1 className="text-[18px] font-medium">RFM - Doubtful</h1>
          <div
            className="flex justify-center items-start 
          flex-wrap mt-4 gap-3"
          >
            <div>
              <label htmlFor="frequencyform">Frequency from</label>
              <Input
                name="frequencyform"
                className="border-[#D5D5DD] border-[1px]"
              />
            </div>
            <div>
              <label htmlFor="frequencyto">Frequency to</label>
              <Input
                name="frequencyto"
                className="border-[#D5D5DD] border-[1px]"
              />
            </div>
            <div>
              <label htmlFor="recencyfrom">Recency from</label>
              <Input
                name="recencyfrom"
                className="border-[#D5D5DD] border-[1px]"
              />
            </div>
            <div>
              <label htmlFor="recencyto">Recency to</label>
              <Input
                name="recencyto"
                className="border-[#D5D5DD] border-[1px]"
              />
            </div>
          </div>
          <div className="w-full p-4">
            <Button
              className="bg-[#1F1E1F] text-white 
            rounded-md w-full hover:opacity-85 duration-300"
            >
              Save
            </Button>
          </div>
        </div>
        <div
          className="p-4 w-[30%] border-[#D5D5DD] 
        border-[1px] rounded-md bg-[#FFFFFF] max-md:w-[100%]"
        >
          <h1 className="text-[18px] font-medium">RFM - Beginners</h1>
          <div
            className="flex justify-center items-start 
          flex-wrap mt-4 gap-3"
          >
            <div>
              <label htmlFor="frequencyform">Frequency from</label>
              <Input
                name="frequencyform"
                className="border-[#D5D5DD] border-[1px]"
              />
            </div>
            <div>
              <label htmlFor="frequencyto">Frequency to</label>
              <Input
                name="frequencyto"
                className="border-[#D5D5DD] border-[1px]"
              />
            </div>
            <div>
              <label htmlFor="recencyfrom">Recency from</label>
              <Input
                name="recencyfrom"
                className="border-[#D5D5DD] border-[1px]"
              />
            </div>
            <div>
              <label htmlFor="recencyto">Recency to</label>
              <Input
                name="recencyto"
                className="border-[#D5D5DD] border-[1px]"
              />
            </div>
          </div>
          <div className="w-full p-4">
            <Button
              className="bg-[#1F1E1F] text-white 
            rounded-md w-full hover:opacity-85 duration-300"
            >
              Save
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
