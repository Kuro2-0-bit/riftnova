export default function Navbar({ page, navigate, search, setSearch, roleFilter, setRoleFilter }) {
  const roles = ['All', 'Baron', 'Jungle', 'Mid', 'Duo', 'Support']

  return (
    <nav style={{
      background: '#0a0e14',
      borderBottom: '1px solid #2a3548',
      position: 'sticky',
      top: 0,
      zIndex: 100,
    }}>
      {/* Top bar */}
      <div style={{
        maxWidth: '1200px',
        margin: '0 auto',
        padding: '0 16px',
        display: 'flex',
        alignItems: 'center',
        height: '60px',
        gap: '32px',
      }}>
        {/* Logo */}
        <div
          onClick={() => navigate('home')}
          style={{ cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '8px', flexShrink: 0 }}
        >
          <span style={{ fontSize: '20px' }}>⚡</span>
          <span style={{ color: '#c89b3c', fontWeight: 700, fontSize: '18px', letterSpacing: '2px', textTransform: 'uppercase' }}>
            Rift<span style={{ color: '#fff' }}>Nova</span>
          </span>
        </div>

        {/* Nav links */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
          {['home', 'tiers', 'items', 'runes', 'calculator'].map(p => (
            <button
              key={p}
              onClick={() => navigate(p)}
              style={{
                background: 'none',
                border: 'none',
                borderBottom: page === p ? '2px solid #c89b3c' : '2px solid transparent',
                color: page === p ? '#c89b3c' : '#7a8fa6',
                fontSize: '12px',
                fontWeight: 600,
                textTransform: 'uppercase',
                letterSpacing: '1px',
                padding: '0 16px',
                height: '60px',
                cursor: 'pointer',
                transition: 'all .2s',
              }}
            >
              {p === 'home' ? 'Champions' : p === 'tiers' ? 'Tier List' : p === 'items' ? 'Items' : p === 'runes' ? 'Runes' : 'Calculator'}
            </button>
          ))}
        </div>

        {/* Search */}
        <div style={{ marginLeft: 'auto' }}>
          <input
            placeholder="Search champion..."
            value={search}
            onChange={e => setSearch(e.target.value)}
            style={{
              background: '#161b22',
              border: '1px solid #2a3548',
              borderRadius: '8px',
              padding: '8px 14px',
              color: '#e2e8f0',
              fontSize: '13px',
              width: '200px',
              outline: 'none',
            }}
          />
        </div>
      </div>

      {/* Role filters — only show on home page */}
      {page !== 'tiers' && (
        <div style={{
          maxWidth: '1200px',
          margin: '0 auto',
          padding: '8px 16px',
          display: 'flex',
          gap: '8px',
          borderTop: '1px solid #1c2230',
          overflowX: 'auto',
        }}>
          {roles.map(r => (
            <button
              key={r}
              onClick={() => setRoleFilter(r)}
              style={{
                background: roleFilter === r ? '#c89b3c' : 'transparent',
                border: `1px solid ${roleFilter === r ? '#c89b3c' : '#2a3548'}`,
                borderRadius: '20px',
                color: roleFilter === r ? '#000' : '#7a8fa6',
                fontSize: '11px',
                fontWeight: 700,
                textTransform: 'uppercase',
                letterSpacing: '0.5px',
                padding: '6px 16px',
                cursor: 'pointer',
                whiteSpace: 'nowrap',
                transition: 'all .15s',
              }}
            >
              {r}
            </button>
          ))}
        </div>
      )}
    </nav>
  )
}