import { CHAMPIONS, ROLE_TIERS } from '../data/champions'
import React from 'react'

// ─── Config ──────────────────────────────────────────────────────────────────

const TIER_CONFIG = {
  GOD: { color: '#ff6b35', bg: 'linear-gradient(135deg,#ff6b3520,#ffd70010)', glow: '0 0 28px #ff6b3518' },
  S:   { color: '#22c55e', bg: 'rgba(34,197,94,0.05)',   glow: 'none' },
  A:   { color: '#3b82f6', bg: 'rgba(59,130,246,0.05)',  glow: 'none' },
  B:   { color: '#f97316', bg: 'rgba(249,115,22,0.05)',  glow: 'none' },
  C:   { color: '#ef4444', bg: 'rgba(239,68,68,0.05)',   glow: 'none' },
}

const ROLE_META = {
  Baron:   { color: '#8b5cf6', icon: '🗡️' },
  Jungle:  { color: '#22c55e', icon: '🌿' },
  Mid:     { color: '#3b82f6', icon: '✦'  },
  Duo:     { color: '#f97316', icon: '🎯' },
  Support: { color: '#ec4899', icon: '💛' },
}

const ROLES = ['All', 'Baron', 'Jungle', 'Mid', 'Duo', 'Support']

// ─── Helpers ─────────────────────────────────────────────────────────────────

/** Returns role-specific tier, falling back to champion's overall tier */
const getRoleTier = (champ, role) =>
  ROLE_TIERS[`${champ.id}-${role}`] || champ.tier

/**
 * Builds flat entries [{champ, role, tier}].
 * In "All" mode every champ appears once per role they play.
 */
const buildEntries = (activeRole) => {
  if (activeRole === 'All') {
    const entries = []
    CHAMPIONS.forEach(champ => {
      champ.roles.forEach(role => {
        entries.push({ champ, role, tier: getRoleTier(champ, role) })
      })
    })
    return entries
  }
  return CHAMPIONS
    .filter(c => c.roles.includes(activeRole))
    .map(champ => ({ champ, role: activeRole, tier: getRoleTier(champ, activeRole) }))
}

/** Groups entries by tier preserving GOD→S→A→B→C order */
const groupByTier = (entries) => {
  const grouped = { GOD: [], S: [], A: [], B: [], C: [] }
  entries.forEach(e => { if (grouped[e.tier]) grouped[e.tier].push(e) })
  return grouped
}

// ─── Champion card ────────────────────────────────────────────────────────────

function ChampCard({ champ, role, tier, onNavigate, onRoleClick }) {
  const { color: roleColor, icon: roleIcon } = ROLE_META[role]
  const tierColor = TIER_CONFIG[tier]?.color || '#7a8fa6'
  const [hovered, setHovered] = React.useState(false)

  return (
    <div style={{
      display: 'flex', flexDirection: 'column',
      alignItems: 'center', gap: '5px',
      width: '64px',
    }}>
      {/* Portrait */}
      <div
        onClick={() => onNavigate(champ)}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        style={{
          width: '56px', height: '56px',
          borderRadius: '10px',
          border: `2px solid ${hovered ? roleColor : tier === 'GOD' ? '#ff6b3555' : '#2a3548'}`,
          overflow: 'hidden',
          background: '#232d3f',
          cursor: 'pointer',
          transition: 'border-color .15s, transform .15s, box-shadow .15s',
          transform: hovered ? 'translateY(-3px)' : 'translateY(0)',
          boxShadow: hovered ? `0 6px 16px ${roleColor}44` : 'none',
          position: 'relative',
        }}
      >
        <img
          src={champ.img}
          alt={champ.name}
          style={{ width: '100%', height: '100%', objectFit: 'cover' }}
          onError={e => { e.target.style.display = 'none' }}
        />
        {/* Tier badge on portrait */}
        <div style={{
          position: 'absolute', bottom: '2px', right: '2px',
          background: '#0d1117cc',
          borderRadius: '3px',
          padding: '1px 4px',
          fontSize: '8px', fontWeight: 800,
          color: tierColor,
          lineHeight: 1.4,
        }}>
          {tier}
        </div>
      </div>

      {/* Name */}
      <span style={{
        fontSize: '9px', color: '#94a3b8',
        textAlign: 'center', width: '64px',
        overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap',
      }}>
        {champ.name}
      </span>

      {/* Role badge — filters the list on click */}
      <button
        onClick={() => onRoleClick(role)}
        style={{
          background: `${roleColor}20`,
          border: `1px solid ${roleColor}50`,
          borderRadius: '4px',
          color: roleColor,
          fontSize: '8px', fontWeight: 700,
          padding: '2px 6px',
          cursor: 'pointer',
          textTransform: 'uppercase',
          letterSpacing: '0.3px',
          transition: 'background .15s, border-color .15s',
          whiteSpace: 'nowrap',
        }}
        onMouseEnter={e => {
          e.currentTarget.style.background = `${roleColor}40`
          e.currentTarget.style.borderColor = roleColor
        }}
        onMouseLeave={e => {
          e.currentTarget.style.background = `${roleColor}20`
          e.currentTarget.style.borderColor = `${roleColor}50`
        }}
      >
        {roleIcon} {role}
      </button>
    </div>
  )
}

// ─── Tier row ─────────────────────────────────────────────────────────────────

function TierRow({ tier, entries, onNavigate, onRoleClick }) {
  const cfg = TIER_CONFIG[tier]
  return (
    <div style={{
      display: 'flex',
      background: '#161b22',
      border: `1px solid ${tier === 'GOD' ? '#ff6b3544' : '#2a3548'}`,
      borderRadius: '12px',
      overflow: 'hidden',
      marginBottom: '12px',
      boxShadow: cfg.glow,
    }}>
      {/* Tier label */}
      <div style={{
        width: '68px', flexShrink: 0,
        background: cfg.bg,
        borderRight: `1px solid ${cfg.color}30`,
        display: 'flex', flexDirection: 'column',
        alignItems: 'center', justifyContent: 'center',
        gap: '4px', padding: '14px 4px',
      }}>
        {tier === 'GOD' ? (
          <>
            <span style={{ fontSize: '20px' }}>👑</span>
            <span style={{
              fontSize: '11px', fontWeight: 800,
              color: cfg.color, letterSpacing: '1px',
              textShadow: '0 0 14px #ff6b35',
            }}>GOD</span>
          </>
        ) : (
          <span style={{ fontSize: '30px', fontWeight: 800, color: cfg.color }}>
            {tier}
          </span>
        )}
        {/* Count pill */}
        <span style={{
          fontSize: '9px', fontWeight: 700,
          color: `${cfg.color}90`,
          background: `${cfg.color}18`,
          borderRadius: '8px', padding: '1px 6px',
        }}>
          {entries.length}
        </span>
      </div>

      {/* Cards */}
      <div style={{
        display: 'flex', flexWrap: 'wrap',
        gap: '10px', padding: '12px 14px',
        alignItems: 'flex-start', flex: 1,
      }}>
        {entries.map(({ champ, role }, i) => (
          <ChampCard
            key={`${champ.id}-${role}-${i}`}
            champ={champ}
            role={role}
            tier={tier}
            onNavigate={onNavigate}
            onRoleClick={onRoleClick}
          />
        ))}
      </div>
    </div>
  )
}

// ─── Main component ───────────────────────────────────────────────────────────

export default function TierList({ navigate }) {
  const [activeRole, setActiveRole] = React.useState('All')

  const entries = buildEntries(activeRole)
  const grouped = groupByTier(entries)
  const totalChamps = entries.length

  return (
    <div style={{ maxWidth: '960px', margin: '0 auto' }}>

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
          Wild Rift · Patch 7.1e
        </div>
        <h1 style={{
          fontSize: '32px', fontWeight: 700, color: '#fff',
          letterSpacing: '2px', textTransform: 'uppercase', marginBottom: '10px',
        }}>
          Champion Tier List
        </h1>
        <p style={{ color: '#7a8fa6', fontSize: '13px' }}>
          Multi-role champions are ranked <strong style={{ color: '#c89b3c' }}>independently per role</strong> — click any role badge to filter
        </p>
      </div>

      {/* Role filters */}
      <div style={{
        display: 'flex', gap: '8px',
        marginBottom: '20px', flexWrap: 'wrap',
        justifyContent: 'center',
      }}>
        {ROLES.map(r => {
          const meta = ROLE_META[r]
          const active = activeRole === r
          const color = meta ? meta.color : '#c89b3c'
          return (
            <button
              key={r}
              onClick={() => setActiveRole(r)}
              style={{
                background: active ? color : 'transparent',
                border: `1px solid ${active ? color : '#2a3548'}`,
                borderRadius: '20px',
                color: active ? '#fff' : '#7a8fa6',
                fontSize: '12px', fontWeight: 700,
                textTransform: 'uppercase', letterSpacing: '0.5px',
                padding: '8px 20px', cursor: 'pointer',
                transition: 'all .15s',
                display: 'flex', alignItems: 'center', gap: '6px',
              }}
              onMouseEnter={e => {
                if (!active) e.currentTarget.style.borderColor = color
              }}
              onMouseLeave={e => {
                if (!active) e.currentTarget.style.borderColor = '#2a3548'
              }}
            >
              {meta && <span>{meta.icon}</span>}
              {r}
            </button>
          )
        })}
      </div>

      {/* Stats bar */}
      <div style={{
        display: 'flex', justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: '20px',
        padding: '10px 16px',
        background: '#161b22',
        borderRadius: '8px',
        border: '1px solid #2a3548',
        fontSize: '12px',
      }}>
        <span style={{ color: '#7a8fa6' }}>
          Showing <strong style={{ color: '#e2e8f0' }}>{totalChamps}</strong> entries
          {activeRole !== 'All' && (
            <span style={{ color: ROLE_META[activeRole]?.color }}>
              {' '}· {ROLE_META[activeRole]?.icon} {activeRole}
            </span>
          )}
        </span>
        {activeRole !== 'All' && (
          <button
            onClick={() => setActiveRole('All')}
            style={{
              background: 'transparent', border: '1px solid #2a3548',
              borderRadius: '12px', color: '#7a8fa6',
              fontSize: '11px', padding: '4px 12px',
              cursor: 'pointer',
            }}
          >
            ✕ Clear filter
          </button>
        )}
        {activeRole === 'All' && (
          <span style={{ color: '#4a5568', fontSize: '11px' }}>
            Each champion counted once per role
          </span>
        )}
      </div>

      {/* Tier rows */}
      {Object.entries(grouped).map(([tier, tierEntries]) => {
        if (!tierEntries.length) return null
        return (
          <TierRow
            key={tier}
            tier={tier}
            entries={tierEntries}
            onNavigate={champ => navigate('champion', champ)}
            onRoleClick={setActiveRole}
          />
        )
      })}

      {/* Footer */}
      <div style={{
        textAlign: 'center', padding: '24px',
        fontSize: '11px', color: '#4a5568',
        borderTop: '1px solid #2a3548',
        marginTop: '8px',
        lineHeight: 1.7,
      }}>
        Rankings are independent per lane · Multi-role champions appear once per role<br />
        Click a champion portrait to view their full guide · Patch 7.1e
      </div>
    </div>
  )
}
