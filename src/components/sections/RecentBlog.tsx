import { BlogCard } from '@/components/cards/BlogCard'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { Reveal } from '@/components/ui/Reveal'
import { posts } from '@/data/posts'

const subtitle =
  'Separated they live in. A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country'

/** Section "Recent Blog" de la home. */
export function RecentBlog() {
  return (
    <section className="bg-gray-100 py-24">
      <div className="mx-auto max-w-6xl px-4">
        <SectionHeading title="Blog" highlight="Recent" subtitle={subtitle} />
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {posts.map((post, i) => (
            <Reveal key={post.slug} delay={i * 100}>
              <BlogCard {...post} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
