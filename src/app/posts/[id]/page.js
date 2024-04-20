import axios from "axios";

async function getDetailsData(id) {
  const { data } = await axios.get(
    `https://jsonplaceholder.typicode.com/posts/${id}`
  );
  return data;
}

const PostDetailsPage = async ({params}) => {
  const data = await getDetailsData(params.id);
  return (
    <>
      <h2>{data.title}</h2>
      <p>{data.body}</p>
    </>
  );
};

export default PostDetailsPage;
