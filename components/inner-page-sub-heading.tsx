import React, { FC } from "react";

interface InnerPageSubHeadingProps {
  heading: string;
}

const InnerPageSubHeading: FC<InnerPageSubHeadingProps> = ({ heading }) => {
  return <h2 className="text-2xl font-bold mb-8">{heading}</h2>;
};

export default InnerPageSubHeading;

