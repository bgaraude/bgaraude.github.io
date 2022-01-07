import { MDXRemoteSerializeResult } from "next-mdx-remote"


type PostType = {
  slug: string
  title: string
  date: string
  coverImage: string
  excerpt: string
  coordinates: string
  mdxSource: MDXRemoteSerializeResult<Record<string, unknown>>
  tags: Array<string>
}

export default PostType
