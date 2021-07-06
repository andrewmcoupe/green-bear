import { withUrqlClient } from 'next-urql'
import React from 'react'

const Wrapper: React.FC = ({ children }) => {
  return <div className="p-4">{children}</div>
}

export default withUrqlClient(() => ({
  url: 'http://localhost:3000/api/graphql',
}))(Wrapper)
