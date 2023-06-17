import { getData } from "../lib/contentful/getData";
import RichText from "../lib/contentful/ui/RichText";

const Blogs = async ({ id }) => {
  let loading = true;
  var data;
  const res = await getData();
  res.items.map((item) => {
    if (item.fields.blogId == id) {
      data = item.fields;
      loading = false;
    }
  });
  let { blogTitle, blogImage, blogDescription } = data;
  return (
    <>
      {!loading ? (
        <>
          {!data ? (
            <>
              <h1>Sorry no such blog found</h1>
            </>
          ) : (
            <>
              <h1>Blog title : {blogTitle}</h1>
              {blogDescription.content.map((item) => {
                return <RichText content={item} />;
              })}

              <img
                src={`https:${blogImage.fields.file.url}`}
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
