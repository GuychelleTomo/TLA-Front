import { PageHero } from '@/components/ui/PageHero'
import { BlogCard } from '@/components/cards/BlogCard'
import { Reveal } from '@/components/ui/Reveal'
import { posts } from '@/data/posts'

export function BlogPage() {
  // Duplique les articles pour remplir une grille de blog plus complète.
  const allPosts = [...posts, ...posts.map((p) => ({ ...p, slug: `${p.slug}-2` }))]

  return (
    <>
      <PageHero
        title="Actualité"
        crumbs={[{ label: 'Accueil', to: '/' }, { label: 'Blog' }]}
      />
      <section className="py-24">
        <div className="mx-auto max-w-6xl px-4">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {allPosts.map((post, i) => (
              <Reveal key={post.slug} delay={(i % 3) * 100}>
                <BlogCard {...post} />
              </Reveal>
            ))}
          </div>

          {/* Pagination simple (statique) */}
          <div className="mt-12 flex justify-center gap-2">
            {[1, 2].map((n) => (
              <span
                key={n}
                className={`flex h-10 w-10 items-center justify-center rounded-full ${
                  n === 1 ? 'bg-primary text-white' : 'bg-gray-100 text-black/70'
                }`}
              >
                {n}
              </span>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
