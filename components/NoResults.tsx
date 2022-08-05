import React from "react";
import { MdOutlineVideocamOff } from "react-icons/md";
import { RiChatOffLine } from "react-icons/ri";

interface IProps {
  text: string;
  video: boolean;
}

const NoResults = ({ text, video }: IProps) => {
  return (
    <div className="flex flex-col justify-center items-center h-full w-full">
      <p className="text-8xl">
        {video ? <MdOutlineVideocamOff /> : <RiChatOffLine />}
      </p>
      <p className="text-2xl text-center">{text}</p>
    </div>
  );
};

export default NoResults;
