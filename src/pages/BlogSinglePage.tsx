import { Link, useParams } from 'react-router-dom'
import { PageHero } from '@/components/ui/PageHero'
import { posts } from '@/data/posts'

const tags = ['Life', 'Sport', 'Tech', 'Travel']
const categories = ['Anglais', 'Espagnol', 'Portugais', 'Chinois', 'Italien']

const body = [
  'Temporibus ad error suscipit exercitationem hic molestiae totam obcaecati rerum, eius aut, in. Exercitationem atque quidem tempora maiores ex architecto voluptatum aut officia doloremque. Error dolore voluptas, omnis molestias odio dignissimos culpa ex earum nisi consequatur quos odit quasi repellat qui officiis reiciendis incidunt hic non? Debitis commodi aut, adipisci.',
  'Quisquam esse aliquam fuga distinctio, quidem delectus veritatis reiciendis. Nihil explicabo quod, est eos ipsum. Unde aut non tenetur tempore, nisi culpa voluptate maiores officiis quis vel ab consectetur suscipit veritatis nulla quos quia aspernatur perferendis, libero sint.',
  'Odit voluptatibus, eveniet vel nihil cum ullam dolores laborum, quo velit commodi rerum eum quidem pariatur! Quia fuga iste tenetur, ipsa vel nisi in dolorum consequatur, veritatis porro explicabo soluta commodi libero voluptatem similique id quidem?',
]

export function BlogSinglePage() {
  const { slug } = useParams()
  const post = posts.find((p) => slug?.startsWith(p.slug)) ?? posts[0]

  return (
    <>
      <PageHero
        title="Blog Single"
        crumbs={[{ label: 'Accueil', to: '/' }, { label: 'Blog', to: '/blog' }, { label: 'Article' }]}
      />
      <section className="py-24">
        <div className="mx-auto grid max-w-6xl gap-12 px-4 lg:grid-cols-3">
          {/* Article */}
          <article className="lg:col-span-2">
            <h2 className="mb-3 text-3xl">{post.title}</h2>
            {body.map((p, i) => (
              <p key={i} className="mb-4">
                {p}
              </p>
            ))}
            <img src="/images/image_2.jpeg" alt="" className="my-6 w-full rounded" />

            <div className="my-8 flex flex-wrap gap-2">
              {tags.map((tag) => (
                <a
                  key={tag}
                  href="#"
                  className="rounded border border-black/10 px-3 py-1 text-sm text-black/60 hover:border-primary hover:text-primary"
                >
                  {tag}
                </a>
              ))}
            </div>

            <div className="flex flex-col gap-5 bg-gray-100 p-6 sm:flex-row">
              <img
                src="/images/teacher-1.jpeg"
                alt=""
                className="h-32 w-32 shrink-0 rounded object-cover"
              />
              <div>
                <h3 className="text-xl">George Washington</h3>
                <p className="mt-2 text-sm">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus itaque, autem necessitatibus
                  voluptate quod mollitia delectus aut, sunt placeat nam vero culpa sapiente.
                </p>
              </div>
            </div>
          </article>

          {/* Sidebar */}
          <aside className="space-y-10">
            <form onSubmit={(e) => e.preventDefault()}>
              <input
                type="text"
                placeholder="Search..."
                className="w-full rounded border border-black/10 px-4 py-3 outline-none focus:border-primary"
              />
            </form>

            <div>
              <h3 className="mb-4 text-xl">Catégories</h3>
              <ul className="space-y-2">
                {categories.map((c) => (
                  <li key={c}>
                    <a href="#" className="flex justify-between text-black/70 hover:text-primary">
                      <span>{c}</span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="mb-4 text-xl">Articles récents</h3>
              <div className="space-y-5">
                {posts.map((p) => (
                  <div key={p.slug} className="flex gap-4">
                    <Link
                      to={`/blog/${p.slug}`}
                      className="h-16 w-16 shrink-0 rounded bg-cover bg-center"
                      style={{ backgroundImage: `url(${p.image})` }}
                    />
                    <div>
                      <h4 className="text-sm leading-snug">
                        <Link to={`/blog/${p.slug}`} className="text-black/80 hover:text-primary">
                          {p.title}
                        </Link>
                      </h4>
                      <span className="text-xs text-black/50">{p.date}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </aside>
        </div>
      </section>
    </>
  )
}
