import DateFormatter from './date-formatter'
import PostTitle from './post-title'

type Props = {
  title: string
  coverImage: string
  date: string
  coordinates: string
}

const PostHeader = ({ title, coverImage, date, coordinates }: Props) => {
  return (
    <>
      <div className="mb-5 mx-sm-0">
        <div className="ratio ratio-32x9">
          <iframe className="" src={'https://www.google.com/maps/embed/v1/place?key=AIzaSyDu3d7MkHvftALIjXo-l66GXSZ7kDyZO5A&zoom=10&q='+coordinates}/>
        </div>
      </div>
      <PostTitle>{title}</PostTitle>
      <div className="mw-100 mx-auto">
        <div className="mb-5">
          <DateFormatter dateString={date} />
        </div>
      </div>
    </>
  )
}

export default PostHeader
