import {
  useCreatePostMutation,
  useGetPostsQuery,
} from "../state/posts/postsAPISlice";

const PostsList = () => {
  const { data: posts } = useGetPostsQuery({ limit: 5, offset: 0 });

  const [createPostMutation, { isLoading }] = useCreatePostMutation();

  return (
    <div>
      <button
        onClick={() => {
          const post = { title: "My post" };
          createPostMutation(post);
        }}
      >
        {isLoading ? "Loading..." : "Create My Post"}
      </button>
      <ul>
        {posts?.map((post) => {
          return <li key={post.id}>{post.title}</li>;
        })}
      </ul>
    </div>
  );
};

export default PostsList;
