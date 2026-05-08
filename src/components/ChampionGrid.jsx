import { CHAMPIONS } from '../data/champions'
import ChampionCard from './ChampionCard'

export default function ChampionGrid({ navigate, roleFilter, search }) {
  const filtered = CHAMPIONS.filter(c => {
    const matchRole = roleFilter === 'All' || c.roles.includes(roleFilter)
    const matchSearch = c.name.toLowerCase().includes(search.toLowerCase())
    return matchRole && matchSearch
  })

  return (
    <div>
      {/* Hero */}
      <div style={{
        textAlign: 'center',
        padding: '40px 0 32px',
        borderBottom: '1px solid #2a3548',
        marginBottom: '32px',
      }}>
        <div style={{
          fontSize: '11px',
          fontWeight: 700,
          textTransform: 'uppercase',
          letterSpacing: '3px',
          color: '#c89b3c',
          marginBottom: '12px',
        }}>
          Wild Rift
        </div>
        <h1 style={{
          fontSize: '32px',
          fontWeight: 700,
          color: '#fff',
          letterSpacing: '2px',
          textTransform: 'uppercase',
          marginBottom: '10px',
        }}>
          Champion Builds & Guides
        </h1>
        <p style={{ color: '#7a8fa6', fontSize: '14px' }}>
          Best builds, runes, and tips for every Wild Rift champion — updated regularly
        </p>

        {/* Stats row */}
        <div style={{
          display: 'flex',
          justifyContent: 'center',
          gap: '32px',
          marginTop: '24px',
        }}>
          {[
            { label: 'Champions', value: CHAMPIONS.length },
            { label: 'Builds', value: '200+' },
            { label: 'Patch', value: '7.1d' },
          ].map(s => (
            <div key={s.label} style={{ textAlign: 'center' }}>
              <div style={{ fontSize: '22px', fontWeight: 700, color: '#c89b3c' }}>{s.value}</div>
              <div style={{ fontSize: '11px', color: '#7a8fa6', textTransform: 'uppercase', letterSpacing: '1px' }}>{s.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Results count */}
      <div style={{
        fontSize: '12px',
        color: '#7a8fa6',
        marginBottom: '16px',
        textTransform: 'uppercase',
        letterSpacing: '1px',
      }}>
        {filtered.length} champion{filtered.length !== 1 ? 's' : ''} found
      </div>

      {/* Grid */}
      {filtered.length > 0 ? (
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(120px, 1fr))',
          gap: '12px',
        }}>
          {filtered.map(c => (
            <ChampionCard key={c.id} champ={c} navigate={navigate} />
          ))}
        </div>
      ) : (
        <div style={{
          textAlign: 'center',
          padding: '80px 0',
          color: '#7a8fa6',
        }}>
          <div style={{ fontSize: '48px', marginBottom: '16px' }}>🔍</div>
          <div style={{ fontSize: '16px', fontWeight: 600, color: '#fff', marginBottom: '8px' }}>No champions found</div>
          <div style={{ fontSize: '13px' }}>Try a different name or role filter</div>
        </div>
      )}
    </div>
  )
}