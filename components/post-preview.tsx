import DateFormatter from './date-formatter'
import Link from 'next/link'

type Props = {
  title: string
  coverImage: string
  date: string
  excerpt: string
  slug: string
  tags: Array<string>
}

const PostPreview = ({
  title,
  coverImage,
  date,
  excerpt,
  slug,
  tags
}: Props) => {
  return (
    <div className="col">
      <div className="card h-100 mb-5 border-0" style={{ maxWidth: '540px' }}>
        <div className="ratio ratio-16x9" style={{overflow: 'hidden'}}>
          <Link href={'/posts/' + slug} passHref>
            <img alt={'thumbnail-' + slug} role="button" className="card-img-top preview-image" src={coverImage} />
          </Link>
        </div>
        <div className="card-body">
          <h5 className="mt-3 card-title"><Link href={'/posts/' + slug} passHref>{title}</Link></h5>
          <div className="d-flex bd-highlight">
            <div className="p-2 flex-grow-1 bd-highlight"><small className="text-muted"><DateFormatter dateString={date} /></small></div>
            <div className="p-2 bd-highlight"> {tags.map((tag, index)=> <span className={`badge rounded-pill bg-primary tag-${tag}`} key={index}>{tag}</span>)}</div>
          </div>
          <p className="card-text mt-2">{excerpt}</p>
        </div>
      </div>
    </div>
  )
}

export default PostPreview
