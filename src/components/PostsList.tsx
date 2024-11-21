import { useGetPostsQuery } from "../state/posts/postsAPISlice";

const PostsList = () => {
  const { data: posts } = useGetPostsQuery({ limit: 5, offset: 0 });

  return (
    <div>
      <ul>
        {posts?.map((post) => {
          return <li key={post.id}>{post.title}</li>;
        })}
      </ul>
    </div>
  );
};

export default PostsList;
