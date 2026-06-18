import type { Counter } from '@/data/counters'
import { useCountUp } from '@/hooks/useCountUp'

/** Un compteur animé (icône + nombre + label). */
export function CounterItem({ icon, number, label }: Counter) {
  const { ref, value } = useCountUp<HTMLDivElement>(number)

  return (
    <div ref={ref} className="flex justify-center">
      <div className="text-center">
        <div className="mb-2 text-4xl text-primary">
          <span className={icon} />
        </div>
        <strong className="block text-4xl font-bold text-white">
          {value.toLocaleString('en-US')}
        </strong>
        <span className="text-white/80">{label}</span>
      </div>
    </div>
  )
}
