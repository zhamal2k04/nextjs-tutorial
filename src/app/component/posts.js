import Link from "next/link"; 


const Posts = ({data}) => {
  return (
    <>
      <table border={1}>
        <thead>
          <th>id</th>
          <th>body</th>
        </thead>
        <tbody>
          {data.map((a) => (
            <tr key={a.id}>
              <td>{a.id}</td>
              <td>
                <Link href={`./posts/${a.id}`}>{a.body}</Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default Posts;
