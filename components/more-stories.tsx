import PostPreview from './post-preview'
import Post from '../types/post'

type Props = {
  posts: Post[]
}

const MoreStories = ({ posts }: Props) => {
  return (
        <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4 mb-3 mb-md-5">
          {posts.map((post) => (
            <PostPreview
            key={post.slug}
            title={post.title}
            coverImage={post.coverImage}
            date={post.date}
            slug={post.slug}
            excerpt={post.excerpt}
            tags={post.tags}
            />
            ))}
        </div>
  )
}

export default MoreStories
