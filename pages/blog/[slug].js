import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import Carousel from '../../components/Carousel'
import { serialize } from 'next-mdx-remote/serialize'
import { MDXRemote } from 'next-mdx-remote'
import  { useEffect } from "react";

const components = {  Carousel,
  h1: (props) => <h3 {...props}></h3>,
  h2: (props) => <h4 {...props}></h4>,
  h3: (props) => <h5 {...props}></h5>,
  h4: (props) => <h6 {...props}></h6>
  }

const PostPage = ({ frontMatter: { title, date, coordinates }, mdxSource }) => {
  
  useEffect(() => {
    import('bootstrap/dist/js/bootstrap.min.js');
  }, []);

  return (
    <main>
        <div className="ratio ratio-21x9 my-3">
          <iframe loading="lazy" allowFullScreen src={'https://www.google.com/maps/embed/v1/place?key=AIzaSyDu3d7MkHvftALIjXo-l66GXSZ7kDyZO5A&zoom=10&q='+coordinates}></iframe>
        </div>
        <h1>{title}</h1>
        <div>
          <p className="text-muted text-start">{new Date(date).toLocaleDateString('fr', {'day':'numeric', 'month':'long', 'year':'numeric'})} </p>
        </div>
        <MDXRemote {...mdxSource} components={components} />
    </main>
  )
}
const getStaticPaths = async () => {
    const files = fs.readdirSync(path.join('posts'))
    const paths = files.map(filename => ({
      params: {
        slug: filename.replace('.html', '')
      }
    }))
  
    return {
      paths,
      fallback: false
    }
  }
  
const getStaticProps = async ({ params: { slug } }) => {
    const markdownWithMeta = fs.readFileSync(path.join('posts', slug + '.html'), 'utf-8')
    const { data: frontMatter, content } = matter(markdownWithMeta)
    const mdxSource = await serialize(content)
    return {
      props: {
        frontMatter,
        slug,
        mdxSource
      }
    }
  }
  
  export { getStaticProps, getStaticPaths }
  export default PostPage