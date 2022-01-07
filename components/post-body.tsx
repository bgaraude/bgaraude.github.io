import { MDXRemote, MDXRemoteSerializeResult } from 'next-mdx-remote'
import Carousel from './carousel'

type Props = {
  mdxSource: MDXRemoteSerializeResult<Record<string, unknown>>
}

const components = {  
  Carousel,
  img: (props: any) => <div className="photo ratio ratio-16x9"><img {...props}/></div>,
  h1: (props: any) => <h3 {...props}></h3>,
  h2: (props: any) => <h4 {...props}></h4>,
  h3: (props: any) => <h5 {...props}></h5>,
  h4: (props: any) => <h6 {...props}></h6>
  }

const PostBody = ({ mdxSource }: Props) => { 

  return (
    <div className="mw-100 mx-auto">
      <div className="markdown">
        <MDXRemote {...mdxSource} components={components} />
      </div>
    </div>
  )
}

export default PostBody
