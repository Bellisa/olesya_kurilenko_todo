export const ComPostList = (props) => {
  const posts = (props.posts || [])
    .map(post => (
      <p key={post.id} className="media-body pb-3 mb-0 small lh-125 border-bottom border-gray">
        <strong className="d-block text-gray-dark">{post.title}</strong>
        {post.body}
      </p>));
  return <div><h4>Posts</h4>{posts}</div>;
};
