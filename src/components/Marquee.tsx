const ITEMS = [
  'Fotona 4D®',
  'Ultraformer®',
  'Laser CO₂ Fracionado',
  'Linear Z®',
  'Toxina Botulínica',
  'Bioestimuladores',
  'Harmonização Full Face',
  'Skinboosters',
  'Medicina Regenerativa',
]

export default function Marquee() {
  return (
    <div className="overflow-hidden border-y border-royal/10 bg-white py-5">
      <div className="animate-marquee flex w-max items-center">
        {[0, 1].map((half) => (
          <div key={half} className="flex items-center" aria-hidden={half === 1}>
            {ITEMS.map((item) => (
              <span
                key={`${half}-${item}`}
                className="flex items-center gap-8 pr-8 text-[0.78rem] font-medium tracking-[0.3em] whitespace-nowrap text-royal/70 uppercase"
              >
                {item}
                <span className="font-serif text-lg text-sand italic">✦</span>
              </span>
            ))}
          </div>
        ))}
      </div>
    </div>
  )
}
