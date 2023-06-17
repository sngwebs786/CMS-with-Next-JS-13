import { getData } from "../lib/contentful/getData";

const Blogs = async ({ id }) => {
  let loading = true;
  var data;
  const res = await getData();
  res.items.map((item) => {
    if (item.fields.id == id) {
      data = item.fields;
      loading = false;
    }
  });
  return (
    <>
      {!loading ? (
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
              {data.blogDescription2 ? (
                <>
                  <p>{data.blogDescription2}</p>
                </>
              ) : (
                <></>
              )}
              <img
                src={`https:${data.blogImage.fields.file.url}`}
                alt="image"
                height={"400px"}
                width={"400px"}
              />
            </>
          )}
        </>
      ) : (
        <>
          <h1>Loading...</h1>
        </>
      )}
    </>
  );
};

export default Blogs;
