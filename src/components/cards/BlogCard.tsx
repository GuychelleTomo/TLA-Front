import { Link } from 'react-router-dom'
import type { Post } from '@/data/posts'
import { Button } from '@/components/ui/Button'

/** Carte d'un article de blog (image + date + extrait). */
export function BlogCard({ slug, image, day, month, year, title, excerpt, author, comments }: Post) {
  return (
    <div>
      <Link
        to={`/blog/${slug}`}
        className="flex h-[300px] items-end bg-cover bg-center"
        style={{ backgroundImage: `url('${image}')` }}
      >
        <div className="bg-primary p-2 text-center leading-tight text-white">
          <span className="block text-2xl font-bold">{day}</span>
          <span className="block text-sm">{month}</span>
          <span className="block text-sm">{year}</span>
        </div>
      </Link>
      <div className="bg-white p-4">
        <h3 className="text-xl">
          <Link to={`/blog/${slug}`} className="text-black/80 hover:text-primary">
            {title}
          </Link>
        </h3>
        <p className="mt-2">{excerpt}</p>
        <div className="mt-4 flex items-center">
          <Button to={`/blog/${slug}`}>
            Read More <span className="ion-ios-arrow-round-forward ml-1" />
          </Button>
          <p className="ml-auto text-sm">
            <a href="#" className="mr-2">
              {author}
            </a>
            <a href="#" className="text-primary">
              <span className="icon-chat" /> {comments}
            </a>
          </p>
        </div>
      </div>
    </div>
  )
}
