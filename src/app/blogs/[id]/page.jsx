import React from "react";
import Blogs from "../page";

const BlogID = ({ params }) => {
//   console.log(params.id);
  return (
    <>
      <Blogs id={params.id}/>
    </>
  );
};

export default BlogID;
