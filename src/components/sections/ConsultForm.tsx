import { useState } from 'react'
import { Reveal } from '@/components/ui/Reveal'
import { submitContact } from '@/services/content'

const inputClass =
  'w-full rounded bg-white px-4 py-3 text-black/80 outline-none placeholder:text-black/40 focus:ring-2 focus:ring-primary'

const courses = ['Anglais', 'Espagnol', 'Portugais', 'Chinois', 'Italien', 'Autres services']

/** Section "Nous rejoindre" : formulaire sur fond parallax. */
export function ConsultForm() {
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [course, setCourse] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [message, setMessage] = useState('')
  const [submitting, setSubmitting] = useState(false)
  const [feedback, setFeedback] = useState<{ type: 'success' | 'error'; text: string } | null>(null)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitting(true)
    setFeedback(null)
    try {
      await submitContact({
        name: `${firstName} ${lastName}`.trim(),
        email: email || 'contact@tl-academy.com',
        phone,
        subject: course,
        message,
      })
      setFeedback({ type: 'success', text: 'Demande envoyée, merci ! Nous vous recontacterons bientôt.' })
      setFirstName('')
      setLastName('')
      setCourse('')
      setEmail('')
      setPhone('')
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
    <section
      className="relative bg-cover bg-fixed bg-center"
      style={{ backgroundImage: 'url(/images/bg_5.jpeg)' }}
    >
      <div className="absolute inset-0 bg-black/40" />
      <div className="relative mx-auto max-w-6xl px-4">
        <div className="flex justify-end">
          <Reveal className="w-full py-20 md:w-1/2 md:py-28 md:pl-8">
            <div className="mb-8">
              <h2 className="mb-4 text-3xl font-semibold text-white">Nous rejoindre</h2>
              <p className="text-white/80">
                Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live
                the blind texts.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid gap-4 sm:grid-cols-2">
                <input
                  type="text"
                  placeholder="First Name"
                  className={inputClass}
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                  required
                />
                <input
                  type="text"
                  placeholder="Last Name"
                  className={inputClass}
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                  required
                />
              </div>
              <div className="grid gap-4 sm:grid-cols-2">
                <select
                  className={inputClass}
                  value={course}
                  onChange={(e) => setCourse(e.target.value)}
                >
                  <option value="" disabled>
                    Select Your Course
                  </option>
                  {courses.map((c) => (
                    <option key={c}>{c}</option>
                  ))}
                </select>
                <input
                  type="email"
                  placeholder="Email"
                  className={inputClass}
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
              <input
                type="text"
                placeholder="Phone"
                className={inputClass}
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
              />
              <div className="grid items-end gap-4 sm:grid-cols-2">
                <textarea
                  rows={2}
                  placeholder="Message"
                  className={inputClass}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                />
                <input
                  type="submit"
                  value={submitting ? 'Envoi…' : 'Request A Quote'}
                  disabled={submitting}
                  className="cursor-pointer rounded bg-primary px-4 py-3 text-white transition-colors hover:bg-primary-light disabled:cursor-not-allowed disabled:opacity-60"
                />
              </div>
              {feedback && (
                <p className={`text-sm ${feedback.type === 'success' ? 'text-white' : 'text-red-200'}`}>
                  {feedback.text}
                </p>
              )}
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
