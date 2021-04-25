export default function Home({ episodes }) {
  return (
    <div>
      {episodes.map(ep => <h1>{ep.title}</h1>)}
    </div>
  )
}


export async function getStaticProps() {
  const response = await fetch('http://localhost:3333/episodes');
  const data = await response.json();

  return {
    props: {
      episodes: data,
    },
    revalidate: 60 * 60 * 8,
  }
}
