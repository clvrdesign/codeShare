import { useState, useEffect } from 'react'

const Posts = () => {

    const [posts, setPosts] = useState([])

    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/posts')
        .then(response => response.json())
        .then(data => setPosts(data))

    }, [])

  return (
      <div>
          {posts &&
              posts.map(data => {
                  return (
                      <div key={data.id}>
                          <h1>{data.title}</h1>
                          <p>{data.body}</p>
                      </div>
                  )
              })
          }
      </div>
  )
}

export default Posts