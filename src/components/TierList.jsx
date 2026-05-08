import { CHAMPIONS, TIERS, ROLE_COLORS, ROLE_TIERS } from '../data/champions'
import React from 'react'

const TIER_COLORS = {
  GOD: '#ff6b35',
  S: '#22c55e',
  A: '#3b82f6',
  B: '#f97316',
  C: '#ef4444',
}

export default function TierList({ navigate }) {
  const [activeRole, setActiveRole] = React.useState('All')
  const roles = ['All', 'Baron', 'Jungle', 'Mid', 'Duo', 'Support']
  const ROLE_COLOR = {
    Baron: '#8b5cf6',
    Jungle: '#22c55e',
    Mid: '#3b82f6',
    Duo: '#f97316',
    Support: '#ec4899',
  }

  const getTier = (champ, role) => {
    if (role === 'All') return champ.tier
    return ROLE_TIERS[`${champ.id}-${role}`] || champ.tier
  }

  const getFilteredTiers = () => {
    if (activeRole === 'All') return TIERS

    const tierMap = { GOD: [], S: [], A: [], B: [], C: [] }

    CHAMPIONS
      .filter(c => c.roles.includes(activeRole))
      .forEach(c => {
        const t = getTier(c, activeRole)
        if (tierMap[t]) tierMap[t].push(c.id)
      })

    return {
      GOD: { color: '#ff6b35', champs: tierMap.GOD },
      S: { color: '#22c55e', champs: tierMap.S },
      A: { color: '#3b82f6', champs: tierMap.A },
      B: { color: '#f97316', champs: tierMap.B },
      C: { color: '#ef4444', champs: tierMap.C },
    }
  }

  const displayTiers = getFilteredTiers()

  return (
    <div style={{ maxWidth: '900px', margin: '0 auto' }}>

      {/* Hero */}
      <div style={{
        textAlign: 'center',
        padding: '40px 0 32px',
        borderBottom: '1px solid #2a3548',
        marginBottom: '32px',
      }}>
        <div style={{
          fontSize: '11px', fontWeight: 700,
          textTransform: 'uppercase', letterSpacing: '3px',
          color: '#c89b3c', marginBottom: '12px',
        }}>
          Wild Rift · Patch 7.1d
        </div>
        <h1 style={{
          fontSize: '32px', fontWeight: 700, color: '#fff',
          letterSpacing: '2px', textTransform: 'uppercase', marginBottom: '10px',
        }}>
          Champion Tier List
        </h1>
        <p style={{ color: '#7a8fa6', fontSize: '14px' }}>
          Click any champion to view their full guide — filter by role for role-specific rankings
        </p>
      </div>

      {/* Role filters */}
      <div style={{
        display: 'flex', gap: '8px',
        marginBottom: '28px', flexWrap: 'wrap',
        justifyContent: 'center',
      }}>
        {roles.map(r => (
          <button
            key={r}
            onClick={() => setActiveRole(r)}
            style={{
              background: activeRole === r ? (ROLE_COLOR[r] || '#c89b3c') : 'transparent',
              border: `1px solid ${activeRole === r ? (ROLE_COLOR[r] || '#c89b3c') : '#2a3548'}`,
              borderRadius: '20px',
              color: activeRole === r ? '#fff' : '#7a8fa6',
              fontSize: '12px', fontWeight: 700,
              textTransform: 'uppercase', letterSpacing: '0.5px',
              padding: '8px 18px', cursor: 'pointer', transition: 'all .15s',
            }}
          >
            {r}
          </button>
        ))}
      </div>

      {/* Tier rows */}
      {Object.entries(displayTiers).map(([tier, data]) => {
        if (!data.champs.length) return null
        const champs = data.champs
          .map(id => CHAMPIONS.find(c => c.id === id))
          .filter(Boolean)
        if (!champs.length) return null

        return (
          <div key={tier} style={{
            display: 'flex',
            background: '#161b22',
            border: `1px solid ${tier === 'GOD' ? '#ff6b3566' : '#2a3548'}`,
            borderRadius: '12px',
            overflow: 'hidden',
            marginBottom: '16px',
            boxShadow: tier === 'GOD' ? '0 0 20px #ff6b3522' : 'none',
          }}>
            {/* Tier label */}
            <div style={{
              width: '72px',
              flexShrink: 0,
              background: tier === 'GOD'
                ? 'linear-gradient(135deg, #ff6b3530, #ffd70020)'
                : `${data.color}18`,
              borderRight: `1px solid ${data.color}44`,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: tier === 'GOD' ? '12px' : '26px',
              fontWeight: 700,
              color: data.color,
              letterSpacing: tier === 'GOD' ? '1px' : '0',
              textShadow: tier === 'GOD' ? '0 0 12px #ff6b35' : 'none',
              padding: '16px 4px',
              textAlign: 'center',
              flexDirection: 'column',
              gap: '2px',
            }}>
              {tier === 'GOD' ? (
                <>
                  <span style={{ fontSize: '20px' }}>👑</span>
                  <span>GOD</span>
                </>
              ) : tier}
            </div>

            {/* Champions */}
            <div style={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: '10px',
              padding: '14px',
              alignItems: 'center',
              flex: 1,
            }}>
              {champs.map(c => (
                <div
                  key={c.id}
                  onClick={() => navigate('champion', c)}
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    gap: '5px',
                    cursor: 'pointer',
                  }}
                >
                  <div style={{
                    width: '54px', height: '54px',
                    borderRadius: '8px',
                    border: `2px solid ${tier === 'GOD' ? '#ff6b3566' : '#2a3548'}`,
                    overflow: 'hidden',
                    background: '#232d3f',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    fontSize: '22px', transition: 'all .15s',
                  }}
                  onMouseEnter={e => e.currentTarget.style.borderColor = tier === 'GOD' ? '#ff6b35' : '#c89b3c'}
                  onMouseLeave={e => e.currentTarget.style.borderColor = tier === 'GOD' ? '#ff6b3566' : '#2a3548'}
                  >
                    <img
                      src={c.img}
                      alt={c.name}
                      style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                      onError={e => { e.target.style.display = 'none' }}
                    />
                  </div>
                  <span style={{
                    fontSize: '10px', color: '#7a8fa6',
                    textAlign: 'center', width: '58px',
                    overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap',
                  }}>
                    {c.name}
                  </span>
                  {activeRole !== 'All' && (
                    <span style={{
                      fontSize: '9px',
                      fontWeight: 700,
                      color: TIER_COLORS[getTier(c, activeRole)] || '#7a8fa6',
                    }}>
                      {getTier(c, activeRole)}
                    </span>
                  )}
                </div>
              ))}
            </div>
          </div>
        )
      })}
    </div>
  )
}