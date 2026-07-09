import { useState } from 'react'
import { PageHero } from '@/components/ui/PageHero'
import { contact } from '@/data/site'
import { submitContact } from '@/services/content'

const infos = [
  { icon: 'icon-map-marker', label: 'Address', value: contact.address },
  { icon: 'icon-phone2', label: 'Phone', value: contact.phone },
  { icon: 'icon-paper-plane', label: 'Email', value: contact.email },
  { icon: 'icon-globe', label: 'Website', value: 'tl-academy.com' },
]

const inputClass =
  'w-full rounded border border-black/10 px-4 py-3 outline-none focus:border-primary'

export function ContactPage() {
  const [nom, setNom] = useState('')
  const [email, setEmail] = useState('')
  const [sujet, setSujet] = useState('')
  const [message, setMessage] = useState('')
  const [submitting, setSubmitting] = useState(false)
  const [feedback, setFeedback] = useState<{ type: 'success' | 'error'; text: string } | null>(null)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitting(true)
    setFeedback(null)
    try {
      await submitContact({ name: nom, email, subject: sujet, message })
      setFeedback({ type: 'success', text: 'Message envoyé, merci ! Nous vous répondrons rapidement.' })
      setNom('')
      setEmail('')
      setSujet('')
      setMessage('')
    } catch (err) {
      setFeedback({
        type: 'error',
        text: err instanceof Error ? err.message : "Échec de l'envoi. Veuillez réessayer.",
      })
    } finally {
      setSubmitting(false)
    }
  }

  return (
    <>
      <PageHero
        title="Contact Us"
        crumbs={[{ label: 'Accueil', to: '/' }, { label: 'Contact' }]}
      />

      <section className="py-24">
        <div className="mx-auto max-w-6xl px-4">
          {/* Bandeau d'infos */}
          <div className="mb-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {infos.map((info) => (
              <div key={info.label} className="rounded bg-gray-100 p-6 text-center">
                <div className="mb-3 text-3xl text-primary">
                  <span className={info.icon} />
                </div>
                <h3 className="mb-1 text-lg text-black/80">{info.label}</h3>
                <p className="text-sm">{info.value}</p>
              </div>
            ))}
          </div>

          <div className="grid gap-10 lg:grid-cols-2">
            {/* Formulaire */}
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid gap-4 sm:grid-cols-2">
                <input
                  type="text"
                  placeholder="Votre nom"
                  className={inputClass}
                  value={nom}
                  onChange={(e) => setNom(e.target.value)}
                  required
                />
                <input
                  type="email"
                  placeholder="Votre email"
                  className={inputClass}
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
              <input
                type="text"
                placeholder="Sujet"
                className={inputClass}
                value={sujet}
                onChange={(e) => setSujet(e.target.value)}
              />
              <textarea
                rows={6}
                placeholder="Message"
                className={inputClass}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                required
              />
              <button
                type="submit"
                disabled={submitting}
                className="cursor-pointer rounded bg-primary px-6 py-3 text-white transition-colors hover:bg-primary-light disabled:cursor-not-allowed disabled:opacity-60"
              >
                {submitting ? 'Envoi…' : 'Envoyer le message'}
              </button>
              {feedback && (
                <p
                  className={`text-sm ${feedback.type === 'success' ? 'text-primary' : 'text-red-600'}`}
                >
                  {feedback.text}
                </p>
              )}
            </form>

            {/* Carte (iframe Google Maps sans clé API exposée) */}
            <div className="min-h-[360px] overflow-hidden rounded">
              <iframe
                title="Localisation TLA"
                src="https://maps.google.com/maps?q=San%20Francisco&t=&z=12&ie=UTF8&iwloc=&output=embed"
                className="h-full min-h-[360px] w-full border-0"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
