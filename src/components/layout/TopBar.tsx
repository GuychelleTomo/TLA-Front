import { Link } from 'react-router-dom'
import { Button } from '@/components/ui/Button'
import { contact } from '@/data/site'

/** Bandeau supérieur blanc : marque + email/téléphone + bouton "Apply now". */
export function TopBar() {
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-6xl px-4">
        <div className="flex flex-col items-stretch md:flex-row md:items-center">
          {/* Marque */}
          <div className="flex items-center py-4 md:w-1/3">
            <Link
              to="/"
              className="text-[38px] font-black uppercase leading-none text-dark"
            >
              TL.{' '}
              <span className="block text-xs uppercase tracking-[2px]">Academy</span>
            </Link>
          </div>

          {/* Infos de contact + CTA */}
          <div className="md:w-2/3">
            <div className="flex flex-col gap-4 pb-4 text-[15px] sm:flex-row sm:items-center sm:py-4">
              <div className="flex items-center gap-3">
                <span className="icon-paper-plane text-xl text-primary" />
                <div className="leading-tight">
                  <span className="block font-bold text-black">Email</span>
                  <span className="block text-black/70">{contact.email}</span>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <span className="icon-phone2 text-xl text-primary" />
                <div className="leading-tight">
                  <span className="block font-bold text-black">Call</span>
                  <span className="block text-black/70">Call Us: {contact.phone}</span>
                </div>
              </div>
              <div className="sm:ml-auto">
                <Button to="/contact" className="px-3 py-2">
                  Apply now
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
