const ROLE_COLORS = {
  Baron: '#8b5cf6',
  Jungle: '#22c55e',
  Mid: '#3b82f6',
  Duo: '#f97316',
  Support: '#ec4899',
}

const TIER_COLORS = {
  S: '#22c55e',
  A: '#3b82f6',
  B: '#f97316',
  C: '#ef4444',
  '?': '#7a8fa6',
}

export default function ChampionCard({ champ, navigate }) {
  return (
    <div
      onClick={() => navigate('champion', champ)}
      style={{
        background: '#161b22',
        border: '1px solid #2a3548',
        borderRadius: '10px',
        overflow: 'hidden',
        cursor: 'pointer',
        transition: 'all .2s',
        position: 'relative',
      }}
      onMouseEnter={e => {
        e.currentTarget.style.borderColor = '#c89b3c'
        e.currentTarget.style.transform = 'translateY(-4px)'
        e.currentTarget.style.boxShadow = '0 8px 24px rgba(200,155,60,0.15)'
      }}
      onMouseLeave={e => {
        e.currentTarget.style.borderColor = '#2a3548'
        e.currentTarget.style.transform = 'translateY(0)'
        e.currentTarget.style.boxShadow = 'none'
      }}
    >
      
      {/* Champion image */}
      <div style={{
        width: '100%',
        aspectRatio: '1',
        background: '#232d3f',
        overflow: 'hidden',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: '40px',
      }}>
        <img
          src={champ.img}
          alt={champ.name}
          style={{ width: '100%', height: '100%', objectFit: 'cover' }}
          onError={e => {
            e.target.style.display = 'none'
            e.target.parentNode.innerHTML = '<span style="font-size:40px">⚔️</span>'
          }}
        />
      </div>

      {/* Name */}
      <div style={{
        padding: '8px 8px 4px',
        fontSize: '12px',
        fontWeight: 700,
        color: '#fff',
        textAlign: 'center',
        whiteSpace: 'nowrap',
        overflow: 'hidden',
        textOverflow: 'ellipsis',
      }}>
        {champ.name}
      </div>

      {/* Role dots */}
      <div style={{
        display: 'flex',
        justifyContent: 'center',
        gap: '4px',
        paddingBottom: '10px',
      }}>
        {champ.roles.map(r => (
          <div
            key={r}
            title={r}
            style={{
              width: '8px',
              height: '8px',
              borderRadius: '50%',
              background: ROLE_COLORS[r] || '#7a8fa6',
            }}
          />
        ))}
      </div>
    </div>
  )
}