import Head from 'next/head'
import { useQuery } from 'react-query'

import Card from '@/libs/ui/Card'
import { LinksService } from './service/links.service'

export default function HomePage() {
  const { data, isLoading, error } = useQuery('links', LinksService.fetchLinks)

  if (isLoading) return <p>Loading...</p>
  if (error) return <p>Error...</p>

  return (
    <div>
      <Head>
        <title>Awesome Links</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="container mx-auto max-w-5xl my-20">
        <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {data?.map(({ id, imageUrl, title, category, description, url }) => (
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
          ))}
        </ul>
      </div>
    </div>
  )
}
