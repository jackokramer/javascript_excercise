const Post = () =>{

}


export async function getStaticProps(context) {
    return {
        props: {
            data
        }
    }
}

export default Post

export async function getServerSideProps(context) {
  return {
    props: {}, // will be passed to the page component as props
  }
}
///