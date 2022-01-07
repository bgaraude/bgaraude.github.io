import { ReactNode } from 'react'

type Props = {
  children?: ReactNode
}

const PostTitle = ({ children }: Props) => {
  return (
    <h1 className="text-center text-md-start">
      {children}
    </h1>
  )
}

export default PostTitle
