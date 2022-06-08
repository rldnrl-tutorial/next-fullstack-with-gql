// /pages/index.tsx
import Head from 'next/head'
import { gql, useQuery } from '@apollo/client'
import { Link } from '@prisma/client'
import Card from '@/libs/ui/Card'

const AllLinksQuery = gql`
  query {
    links {
      id
      title
      url
      description
      imageUrl
      category
    }
  }
`

export default function Home() {
  const { data, loading, error } = useQuery(AllLinksQuery)

  if (loading) return <p>Loading...</p>
  if (error) return <p>Oh no... {error.message}</p>

  return (
    <div>
      <Head>
        <title>Awesome Links</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="container mx-auto max-w-5xl my-20">
        <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {data.links.map(
            ({ id, imageUrl, title, category, description, url }: Link) => (
              <li key={id} className="shadow max-w-md rounded">
                <Card
                  imageUrl={imageUrl}
                  alt={title}
                  title={title}
                  description={description}
                  category={category}
                  to={url}
                />
              </li>
            )
          )}
        </ul>
      </div>
    </div>
  )
}
