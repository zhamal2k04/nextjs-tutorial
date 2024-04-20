import axios from "axios";
import Posts from "../component/posts";

async function getData() {
  const { data } = await axios.get(
    "https://jsonplaceholder.typicode.com/posts?_limit=15"
  );
  return data;
}

const PostPage = async () => {
  const data = await getData();
  return (
    <>
      <Posts data={data} />
    </>
  );
};

export default PostPage;
