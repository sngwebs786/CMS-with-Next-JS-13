import { documentToReactComponents } from "@contentful/rich-text-react-renderer";

const options = {};
const RichText = ({ content }) => {
  return (
    <>
      <div>{documentToReactComponents(content)}</div>
    </>
  );
};

export default RichText;
