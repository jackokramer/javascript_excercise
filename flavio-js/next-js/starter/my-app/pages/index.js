import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Link from "next/link"
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

export default Home
