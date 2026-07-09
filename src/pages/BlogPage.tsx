import { PageHero } from '@/components/ui/PageHero'
import { BlogCard } from '@/components/cards/BlogCard'
import { Reveal } from '@/components/ui/Reveal'
import { useAsync } from '@/hooks/useAsync'
import { getPosts } from '@/services/content'
import { CardsSkeleton } from '@/components/ui/Skeleton'

export function BlogPage() {
  const { data: posts, loading, error } = useAsync(() => getPosts(), [])

  return (
    <>
      <PageHero
        title="Actualité"
        crumbs={[{ label: 'Accueil', to: '/' }, { label: 'Blog' }]}
      />
      <section className="py-24">
        <div className="mx-auto max-w-6xl px-4">
          {loading ? (
            <CardsSkeleton count={6} gridClass="grid gap-8 md:grid-cols-2 lg:grid-cols-3" cardClass="h-[380px]" />
          ) : error ? (
            <p className="py-10 text-center text-black/50">Impossible de charger les articles.</p>
          ) : (
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {(posts ?? []).map((post, i) => (
                <Reveal key={post.slug} delay={(i % 3) * 100}>
                  <BlogCard {...post} />
                </Reveal>
              ))}
            </div>
          )}

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
