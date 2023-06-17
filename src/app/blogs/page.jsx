import { getData } from "../lib/contentful/getData";

const Blogs = async ({ id }) => {
  console.log(id);
  var data;
  const res = await getData();
  res.items.map((item) => {
    if (item.fields.id == id) {
      data = item.fields;
    }
  });
  // const blogid=res.items
  // console.log("data: ", data);
  return (
    <>
      <div>Blogs</div>
      {!data ? (
        <>
          <h1>Sorry no such blog found</h1>
        </>
      ) : (
        <>
          <h1>Blog title : {data.blogTitle}</h1>
          <p>Blog Description : {data.blogDescription}</p>
          {/* <h1>Blog title : {}</h1> */}
        </>
      )}
    </>
  );
};

export default Blogs;
