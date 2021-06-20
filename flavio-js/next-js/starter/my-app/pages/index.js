import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Link from "next/link"
import {useRouter} from 'next/router'
import posts from '../posts.json'
//import '../style.css'

const Index = () =>{
  <div>
    <h1>Home Page</h1>
    <a href="/blog">Blog</a>
  </div>
}

const Home = () => {
  return (
   <div>
     <h1>Home Page</h1>
          <a href="/blog">Blog</a>
    <style jsx>{`
      h1{
        font-size: 4rem;
        text-align: center;
      }
      body{
        margin: 10px;
        padding: 10px;
      }
    `}</style>
    </div>
  )
}


export default () => {
  const router = useRouter()

  const post = posts[router.query.id]
  if(!post) return <p>No post found</p>

  useEffect(() =>{
      router.push("/login")
  })
  return (
    <>
      <h2>Home Page</h2>
      <h1>{post.title}</h1>
      <p>{post.content}</p>
      <a href="/blog">Blogger</a>
      </>
  )
}

