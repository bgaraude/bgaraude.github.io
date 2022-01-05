import Image from 'next/Image'
import Link from 'next/link'

import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'


export default function Home({ posts }) {
  return (
    <main>
      <div className="py-5 my-4 bg-light rounded-3" style={{backgroundImage: 'url(/images/bg.jpg)', backgroundPosition: '50% 30%', backgroundSize: 'cover'}}>
        <div className="container-fluid py-5 text-light">
          <h1 className="display-5 fw-bold">Le titre du blog</h1>
          <p className="col-md-8 fs-4">Using a series of utilities, you can create this jumbotron, just like the one in previous versions of Bootstrap. Check out the examples below for how you can remix and restyle it to your liking.</p>
        </div>
      </div>
      <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
        {posts.map((post, index) => (
            <div className="col" key={index}>
              <div className="card h-100 mb-3 mt-3 border-0" style={{ maxWidth: '540px' }}>
                <div className="ratio ratio-16x9">
                  <Link href={'/blog/' + post.slug} passHref>
                    <img alt={'thumbnail-' + post.slug} role="button" className="card-img-top" src={post.frontMatter.thumbnailUrl} />
                  </Link>
                </div>
                <div className="card-body">
                  {post.frontMatter.tags.map((tag, index)=> <span className={`badge rounded-pill bg-primary tag-${tag}`} key={index}>{tag}</span>)}
                  <h5 className="mt-3 card-title"><Link href={'/blog/' + post.slug} passHref>{post.frontMatter.title}</Link></h5>
                  <small className="text-muted">{new Date(post.frontMatter.date).toLocaleDateString('fr', {'day':'numeric', 'month':'long', 'year':'numeric'})}</small>
                  <p className="card-text mt-2">{post.frontMatter.description}</p>
                </div>
              </div>
            </div>
        ))}
      </div>
    </main>
  )
}

export const getStaticProps = async () => {
  const files = fs.readdirSync(path.join('posts'))
  const posts = files.map(filename => {
    const markdownWithMeta = fs.readFileSync(path.join('posts', filename), 'utf-8')
    const { data: frontMatter } = matter(markdownWithMeta)
    return {
      frontMatter,
      slug: filename.split('.')[0]
    }
  })
  .sort((a,b) => new Date(b.frontMatter.date) - new Date(a.frontMatter.date))
  return {
    props: {
      posts
    }
  }
}