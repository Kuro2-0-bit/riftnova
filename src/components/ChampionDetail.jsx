import React from 'react'
import { CHAMPIONS } from '../data/champions'
import { ITEM_IMAGES, RUNE_IMAGES, SPELL_IMAGES } from '../data/images'
import { CHAMPION_EXTRAS } from '../data/championExtras'
import { getAbilityImage } from '../data/abilityImages'
import { SKILL_ORDERS } from '../data/skillOrders'
import { CHAMPION_PATCH_NOTES } from '../data/patchNotes'
import { getStatsAtLevel } from '../data/statGrowth'

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
  GOD: '#ff6b35',
  '?': '#7a8fa6',
}

const SKILL_COLORS = {
  R: { bg: 'rgba(236,72,153,.15)', border: '#ec4899', color: '#f9a8d4' },
  Q: { bg: 'rgba(59,130,246,.15)', border: '#3b82f6', color: '#93c5fd' },
  W: { bg: 'rgba(34,197,94,.15)', border: '#22c55e', color: '#86efac' },
  E: { bg: 'rgba(249,115,22,.15)', border: '#f97316', color: '#fdba74' },
  P: { bg: 'rgba(200,155,60,.15)', border: '#c89b3c', color: '#fcd34d' },
}

const STAT_DISPLAY = [
  { key: 'hp', label: 'Health', icon: '❤️', color: '#22c55e', suffix: '' },
  { key: 'mana', label: 'Mana', icon: '💧', color: '#60a5fa', suffix: '' },
  { key: 'ad', label: 'Attack Damage', icon: '⚔️', color: '#f97316', suffix: '' },
  { key: 'armor', label: 'Armor', icon: '🛡', color: '#eab308', suffix: '' },
  { key: 'mr', label: 'Magic Resist', icon: '💠', color: '#3b82f6', suffix: '' },
  { key: 'as', label: 'Attack Speed', icon: '⚡', color: '#f97316', suffix: '' },
  { key: 'moveSpeed', label: 'Move Speed', icon: '💨', color: '#c89b3c', suffix: '' },
  { key: 'hpRegen', label: 'HP Regen', icon: '💚', color: '#22c55e', suffix: '/s' },
  { key: 'manaRegen', label: 'Mana Regen', icon: '🔵', color: '#60a5fa', suffix: '/s' },
  { key: 'range', label: 'Attack Range', icon: '🎯', color: '#7a8fa6', suffix: '' },
]

function Section({ title, children }) {
  return (
    <div style={{ marginBottom: '28px' }}>
      <div style={{
        fontSize: '11px', fontWeight: 700,
        textTransform: 'uppercase', letterSpacing: '1.5px',
        color: '#c89b3c', borderBottom: '1px solid #2a3548',
        paddingBottom: '10px', marginBottom: '16px',
      }}>
        {title}
      </div>
      {children}
    </div>
  )
}

// Ability popup modal
function AbilityPopup({ ability, abilityKey, champId, onClose }) {
  if (!ability) return null
  const img = getAbilityImage(champId, abilityKey)

  return (
    <div
      onClick={onClose}
      style={{
        position: 'fixed', inset: 0,
        background: 'rgba(0,0,0,0.75)',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        zIndex: 1000, padding: '20px',
      }}
    >
      <div
        onClick={e => e.stopPropagation()}
        style={{
          background: '#161b22',
          border: `1px solid ${SKILL_COLORS[abilityKey]?.border || '#c89b3c'}`,
          borderRadius: '16px',
          padding: '24px',
          maxWidth: '420px',
          width: '100%',
          boxShadow: `0 0 40px ${SKILL_COLORS[abilityKey]?.border || '#c89b3c'}44`,
        }}
      >
        {/* Header */}
        <div style={{ display: 'flex', gap: '16px', alignItems: 'center', marginBottom: '16px' }}>
          <div style={{
            width: '64px', height: '64px',
            borderRadius: '12px',
            border: `2px solid ${SKILL_COLORS[abilityKey]?.border || '#c89b3c'}`,
            overflow: 'hidden',
            background: '#232d3f',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            flexShrink: 0,
          }}>
            {img ? (
              <img src={img} alt={ability.name}
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                onError={e => { e.target.style.display = 'none' }}
              />
            ) : (
              <span style={{ fontWeight: 700, fontSize: '20px', color: SKILL_COLORS[abilityKey]?.color || '#fff' }}>
                {abilityKey}
              </span>
            )}
          </div>
          <div style={{ flex: 1 }}>
            <div style={{
              display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '4px',
            }}>
              <span style={{
                background: SKILL_COLORS[abilityKey]?.border || '#c89b3c',
                color: '#000', fontSize: '10px', fontWeight: 700,
                padding: '2px 8px', borderRadius: '4px',
              }}>
                {abilityKey === 'P' ? 'PASSIVE' : abilityKey}
              </span>
            </div>
            <div style={{ fontSize: '16px', fontWeight: 700, color: '#fff', textTransform: 'uppercase', letterSpacing: '1px' }}>
              {ability.name}
            </div>
          </div>
          <button
            onClick={onClose}
            style={{
              background: 'none', border: '1px solid #2a3548',
              borderRadius: '8px', color: '#7a8fa6',
              width: '32px', height: '32px',
              cursor: 'pointer', fontSize: '16px',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              flexShrink: 0,
            }}
          >✕</button>
        </div>

        {/* Description */}
        <div style={{
          fontSize: '13px', color: '#b0bec5',
          lineHeight: '1.8',
          background: '#0d1117',
          borderRadius: '10px',
          padding: '16px',
          borderLeft: `3px solid ${SKILL_COLORS[abilityKey]?.border || '#c89b3c'}`,
        }}>
          {ability.desc}
        </div>

        {/* Close button */}
        <button
          onClick={onClose}
          style={{
            width: '100%', marginTop: '16px',
            background: SKILL_COLORS[abilityKey]?.border || '#c89b3c',
            border: 'none', borderRadius: '8px',
            color: '#000', fontWeight: 700,
            fontSize: '13px', padding: '12px',
            cursor: 'pointer', letterSpacing: '1px',
            textTransform: 'uppercase',
          }}
        >
          CLOSE
        </button>
      </div>
    </div>
  )
}

export default function ChampionDetail({ champ, navigate }) {
  const [showAdvanced, setShowAdvanced] = React.useState(false)
  const [selectedLevel, setSelectedLevel] = React.useState(1)
  const [selectedAbility, setSelectedAbility] = React.useState(null)
  const [selectedAbilityKey, setSelectedAbilityKey] = React.useState(null)
  const [activeRole, setActiveRole] = React.useState(champ?.roles?.[0] || 'Mid')

  if (!champ) return null

  // Role-specific build resolution — falls back to base champ data if no override exists
  const roleData    = champ.roleBuilds?.[activeRole] || {}
  const activeBuild  = roleData.build  || champ.build
  const activeRunes  = roleData.runes  || champ.runes
  const activeSpells = roleData.spells || champ.spells
  const activeTips   = roleData.tips   || champ.tips

  const extras = CHAMPION_EXTRAS[champ.id] || {}
  const champStats = extras.stats || champ.stats
  const champAbilities = extras.abilities || champ.abilities

  const counterChamps = (champ.counters || [])
    .map(id => CHAMPIONS.find(c => c.id === id))
    .filter(Boolean)

  const skillOrder = SKILL_ORDERS[champ.id]

  const openAbility = (key) => {
    if (!champAbilities) return
    setSelectedAbility(champAbilities[key])
    setSelectedAbilityKey(key)
  }

  return (
    <div style={{ maxWidth: '860px', margin: '0 auto' }}>

      {/* Ability popup */}
      {selectedAbility && (
        <AbilityPopup
          ability={selectedAbility}
          abilityKey={selectedAbilityKey}
          champId={champ.id}
          onClose={() => { setSelectedAbility(null); setSelectedAbilityKey(null) }}
        />
      )}

      {/* Back button */}
      <button
        onClick={() => navigate('home')}
        style={{
          background: 'none', border: '1px solid #2a3548',
          borderRadius: '8px', color: '#7a8fa6',
          fontSize: '13px', padding: '9px 18px',
          cursor: 'pointer', marginBottom: '24px',
          display: 'flex', alignItems: 'center', gap: '6px',
          transition: 'all .2s',
        }}
        onMouseEnter={e => { e.currentTarget.style.borderColor = '#c89b3c'; e.currentTarget.style.color = '#c89b3c' }}
        onMouseLeave={e => { e.currentTarget.style.borderColor = '#2a3548'; e.currentTarget.style.color = '#7a8fa6' }}
      >
        ← Back to Champions
      </button>

      {/* Champion header */}
      <div style={{
        display: 'flex', gap: '24px', alignItems: 'flex-start',
        background: '#161b22', border: '1px solid #2a3548',
        borderRadius: '12px', padding: '24px', marginBottom: '28px',
      }}>
        <div style={{
          width: '100px', height: '100px', borderRadius: '12px',
          border: '2px solid #c89b3c', overflow: 'hidden',
          flexShrink: 0, background: '#232d3f',
        }}>
          <img src={champ.img} alt={champ.name}
            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
            onError={e => { e.target.style.display = 'none' }}
          />
        </div>

        <div style={{ flex: 1 }}>
          <h1 style={{ fontSize: '28px', fontWeight: 700, color: '#fff', letterSpacing: '1px', marginBottom: '6px' }}>
            {champ.name}
          </h1>
          <p style={{ color: '#7a8fa6', fontSize: '13px', marginBottom: '14px' }}>
            {champ.class} &nbsp;·&nbsp; Difficulty: {champ.difficulty}
          </p>
          <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap', alignItems: 'center' }}>
            {champ.roles.map(r => {
              const isActive = activeRole === r
              const color = ROLE_COLORS[r] || '#c89b3c'
              return (
                <button
                  key={r}
                  onClick={() => setActiveRole(r)}
                  style={{
                    padding: '5px 14px', borderRadius: '12px',
                    fontSize: '11px', fontWeight: 700,
                    textTransform: 'uppercase', letterSpacing: '0.5px',
                    background: isActive ? color : `${color}22`,
                    color: isActive ? '#000' : color,
                    border: `1px solid ${color}`,
                    cursor: champ.roles.length > 1 ? 'pointer' : 'default',
                    transition: 'all .15s',
                    display: 'flex', alignItems: 'center', gap: '5px',
                  }}
                >
                  {isActive && champ.roles.length > 1 && (
                    <span style={{ fontSize: '8px' }}>●</span>
                  )}
                  {r}
                  {champ.roleBuilds?.[r] && (
                    <span style={{
                      fontSize: '7px', background: isActive ? '#00000033' : `${color}33`,
                      borderRadius: '3px', padding: '1px 3px', letterSpacing: '0',
                    }}>
                      OWN BUILD
                    </span>
                  )}
                </button>
              )
            })}
            <span style={{
              padding: '3px 12px', borderRadius: '12px',
              fontSize: '11px', fontWeight: 700,
              background: `${TIER_COLORS[champ.tier]}22`,
              color: TIER_COLORS[champ.tier],
              border: `1px solid ${TIER_COLORS[champ.tier]}`,
            }}>
              {champ.tier} Tier
            </span>
          </div>

          {/* Multi-role hint */}
          {champ.roles.length > 1 && (
            <div style={{
              marginTop: '10px', fontSize: '11px',
              color: ROLE_COLORS[activeRole] || '#c89b3c',
              display: 'flex', alignItems: 'center', gap: '6px',
            }}>
              <span>↕</span>
              Tap a role to see that lane's build
            </div>
          )}
        </div>

        {/* Advanced toggle */}
        <button
          onClick={() => setShowAdvanced(!showAdvanced)}
          style={{
            background: showAdvanced ? '#c89b3c' : 'transparent',
            border: '1px solid #c89b3c', borderRadius: '8px',
            color: showAdvanced ? '#000' : '#c89b3c',
            fontSize: '11px', fontWeight: 700,
            padding: '8px 14px', cursor: 'pointer',
            display: 'flex', alignItems: 'center', gap: '6px',
            transition: 'all .2s', textTransform: 'uppercase',
            letterSpacing: '1px', flexShrink: 0, whiteSpace: 'nowrap',
          }}
        >
          📊 {showAdvanced ? 'Hide Stats' : 'Advanced'}
        </button>
      </div>

      {/* Advanced stats panel */}
      {showAdvanced && (
        <div style={{
          background: '#161b22',
          border: '1px solid #c89b3c',
          borderRadius: '12px',
          padding: '20px',
          marginBottom: '28px',
        }}>
          <div style={{
            fontSize: '11px', fontWeight: 700,
            textTransform: 'uppercase', letterSpacing: '1.5px',
            color: '#c89b3c', borderBottom: '1px solid #2a3548',
            paddingBottom: '10px', marginBottom: '16px',
          }}>
            Base Stats — Level 1 to 15
          </div>

          {/* Level buttons */}
          <div style={{ display: 'flex', gap: '4px', flexWrap: 'wrap', marginBottom: '16px' }}>
            {Array.from({ length: 15 }).map((_, i) => {
              const lvl = i + 1
              const isUlt = lvl === 5 || lvl === 9 || lvl === 13
              return (
                <button
                  key={lvl}
                  onClick={() => setSelectedLevel(lvl)}
                  style={{
                    width: '32px', height: '32px',
                    borderRadius: '6px',
                    background: selectedLevel === lvl
                      ? isUlt ? '#ec4899' : '#c89b3c'
                      : '#0d1117',
                    border: `1px solid ${selectedLevel === lvl
                      ? isUlt ? '#ec4899' : '#c89b3c'
                      : isUlt ? '#ec489944' : '#2a3548'}`,
                    color: selectedLevel === lvl ? '#000' : isUlt ? '#f9a8d4' : '#7a8fa6',
                    fontSize: '11px', fontWeight: 700,
                    cursor: 'pointer', transition: 'all .15s',
                  }}
                >
                  {lvl}
                </button>
              )
            })}
          </div>

          {/* Stats grid */}
          {(() => {
            const stats = getStatsAtLevel(champ.id, selectedLevel)
            if (!stats) return (
              <div style={{ textAlign: 'center', color: '#7a8fa6', fontSize: '13px', padding: '20px' }}>
                Stats not available for {champ.name}
              </div>
            )
            return (
              <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fill, minmax(150px, 1fr))',
                gap: '10px',
              }}>
                {STAT_DISPLAY.map(stat => {
                  const val = stats[stat.key]
                  if (!val) return null
                  return (
                    <div key={stat.key} style={{
                      background: '#0d1117',
                      border: '1px solid #2a3548',
                      borderRadius: '8px',
                      padding: '10px 12px',
                      display: 'flex', alignItems: 'center', gap: '10px',
                    }}>
                      <span style={{ fontSize: '18px' }}>{stat.icon}</span>
                      <div>
                        <div style={{ fontSize: '10px', color: '#7a8fa6', marginBottom: '2px' }}>{stat.label}</div>
                        <div style={{ fontSize: '15px', fontWeight: 700, color: stat.color }}>
                          {val}{stat.suffix}
                        </div>
                      </div>
                    </div>
                  )
                })}
              </div>
            )
          })()}

          <div style={{
            marginTop: '14px', padding: '10px 14px',
            background: '#0d1117', borderRadius: '8px',
            fontSize: '11px', color: '#7a8fa6', lineHeight: '1.6',
            borderLeft: '3px solid #c89b3c',
          }}>
            📈 Click any level button to see stats at that level. Pink buttons (5, 9, 13) are ultimate unlock levels.
          </div>
        </div>
      )}

      {/* Abilities section - clickable icons */}
      {champAbilities && (
        <Section title="Abilities — Tap to learn more">
          {/* Quick ability icons row */}
          <div style={{
            display: 'flex', gap: '10px',
            marginBottom: '16px', flexWrap: 'wrap',
          }}>
            {Object.entries(champAbilities).map(([key, ability]) => {
              const img = getAbilityImage(champ.id, key)
              return (
                <div
                  key={key}
                  onClick={() => openAbility(key)}
                  style={{
                    display: 'flex', flexDirection: 'column',
                    alignItems: 'center', gap: '6px',
                    cursor: 'pointer',
                  }}
                >
                  <div style={{
                    width: '60px', height: '60px',
                    borderRadius: '10px',
                    border: `2px solid ${SKILL_COLORS[key]?.border || '#2a3548'}`,
                    overflow: 'hidden', background: '#232d3f',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    position: 'relative', transition: 'all .2s',
                  }}
                  onMouseEnter={e => {
                    e.currentTarget.style.transform = 'scale(1.1)'
                    e.currentTarget.style.boxShadow = `0 0 12px ${SKILL_COLORS[key]?.border || '#c89b3c'}88`
                  }}
                  onMouseLeave={e => {
                    e.currentTarget.style.transform = 'scale(1)'
                    e.currentTarget.style.boxShadow = 'none'
                  }}
                  >
                    {img ? (
                      <img src={img} alt={ability.name}
                        style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                        onError={e => {
                          e.target.style.display = 'none'
                          e.target.parentNode.innerHTML += `<span style="font-weight:700;font-size:16px;color:${SKILL_COLORS[key]?.color || '#fff'}">${key}</span>`
                        }}
                      />
                    ) : (
                      <span style={{ fontWeight: 700, fontSize: '18px', color: SKILL_COLORS[key]?.color || '#fff' }}>
                        {key}
                      </span>
                    )}
                    {/* Key badge */}
                    <div style={{
                      position: 'absolute', bottom: '2px', right: '2px',
                      background: SKILL_COLORS[key]?.border || '#c89b3c',
                      borderRadius: '3px', fontSize: '8px', fontWeight: 700,
                      color: '#000', padding: '1px 4px', lineHeight: 1,
                    }}>
                      {key}
                    </div>
                  </div>
                  <span style={{
                    fontSize: '9px', color: '#7a8fa6',
                    textAlign: 'center', width: '64px',
                    overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap',
                  }}>
                    {ability.name}
                  </span>
                </div>
              )
            })}
          </div>

          {/* Ability list */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
            {Object.entries(champAbilities).map(([key, ability]) => {
              const img = getAbilityImage(champ.id, key)
              return (
                <div
                  key={key}
                  onClick={() => openAbility(key)}
                  style={{
                    background: '#0d1117',
                    border: `1px solid #2a3548`,
                    borderRadius: '10px', padding: '14px',
                    display: 'flex', gap: '14px', alignItems: 'flex-start',
                    cursor: 'pointer', transition: 'all .2s',
                  }}
                  onMouseEnter={e => {
                    e.currentTarget.style.borderColor = SKILL_COLORS[key]?.border || '#c89b3c'
                    e.currentTarget.style.background = '#161b22'
                  }}
                  onMouseLeave={e => {
                    e.currentTarget.style.borderColor = '#2a3548'
                    e.currentTarget.style.background = '#0d1117'
                  }}
                >
                  <div style={{
                    width: '48px', height: '48px', borderRadius: '8px',
                    border: `2px solid ${SKILL_COLORS[key]?.border || '#c89b3c'}`,
                    overflow: 'hidden', background: '#232d3f',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    flexShrink: 0, position: 'relative',
                  }}>
                    {img ? (
                      <img src={img} alt={ability.name}
                        style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                        onError={e => { e.target.style.display = 'none' }}
                      />
                    ) : (
                      <span style={{ fontWeight: 700, fontSize: '16px', color: SKILL_COLORS[key]?.color || '#fff' }}>
                        {key}
                      </span>
                    )}
                  </div>
                  <div style={{ flex: 1 }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '4px' }}>
                      <span style={{
                        background: SKILL_COLORS[key]?.border || '#c89b3c',
                        color: '#000', fontSize: '9px', fontWeight: 700,
                        padding: '1px 6px', borderRadius: '3px',
                      }}>
                        {key === 'P' ? 'PASSIVE' : key}
                      </span>
                      <span style={{ fontSize: '13px', fontWeight: 700, color: '#fff' }}>
                        {ability.name}
                      </span>
                    </div>
                    <div style={{ fontSize: '12px', color: '#7a8fa6', lineHeight: '1.6' }}>
                      {ability.desc}
                    </div>
                  </div>
                  <span style={{ fontSize: '18px', color: '#2a3548', flexShrink: 0 }}>›</span>
                </div>
              )
            })}
          </div>
        </Section>
      )}

      {/* Skill Order */}
      <Section title="Skill Order — Level 1 to 15">
        {skillOrder ? (
          <div>
            {/* Level numbers */}
            <div style={{ display: 'flex', gap: '4px', marginBottom: '6px', paddingLeft: '56px' }}>
              {Array.from({ length: 15 }).map((_, i) => (
                <div key={i} style={{
                  width: '32px', textAlign: 'center',
                  fontSize: '10px', color: '#7a8fa6', fontWeight: 600,
                }}>
                  {i + 1}
                </div>
              ))}
            </div>

            {/* Rows for each ability */}
            {['Q', 'W', 'E', 'R'].map(key => {
              const img = getAbilityImage(champ.id, key)
              const abilityName = champAbilities?.[key]?.name || key
              return (
                <div key={key} style={{ display: 'flex', alignItems: 'center', gap: '4px', marginBottom: '6px' }}>
                  {/* Ability icon */}
                  <div
                    onClick={() => openAbility(key)}
                    style={{
                      width: '48px', height: '32px',
                      borderRadius: '6px',
                      border: `1px solid ${SKILL_COLORS[key]?.border || '#2a3548'}`,
                      overflow: 'hidden', background: '#232d3f',
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                      flexShrink: 0, cursor: 'pointer',
                    }}
                  >
                    {img ? (
                      <img src={img} alt={key}
                        style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                        onError={e => { e.target.style.display = 'none' }}
                      />
                    ) : (
                      <span style={{ fontWeight: 700, fontSize: '12px', color: SKILL_COLORS[key]?.color || '#fff' }}>
                        {key}
                      </span>
                    )}
                  </div>

                  {/* Level boxes */}
                  {Array.from({ length: 15 }).map((_, i) => {
                    const isLeveled = skillOrder[i] === key
                    const isUlt = key === 'R' && isLeveled
                    return (
                      <div key={i} style={{
                        width: '32px', height: '32px', borderRadius: '6px',
                        background: isLeveled
                          ? isUlt ? '#ec4899' : SKILL_COLORS[key]?.border || '#c89b3c'
                          : '#0d1117',
                        border: `1px solid ${isLeveled
                          ? isUlt ? '#ec4899' : SKILL_COLORS[key]?.border || '#c89b3c'
                          : '#2a3548'}`,
                        display: 'flex', alignItems: 'center', justifyContent: 'center',
                        fontSize: '10px', fontWeight: 700,
                        color: isLeveled ? '#fff' : '#2a3548',
                        transition: 'all .15s',
                      }}>
                        {isLeveled ? (i + 1) : ''}
                      </div>
                    )
                  })}
                </div>
              )
            })}

            {/* Passive row */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '4px', marginTop: '8px' }}>
              <div style={{
                width: '48px', height: '32px',
                borderRadius: '6px',
                border: `1px solid ${SKILL_COLORS['P']?.border || '#c89b3c'}`,
                overflow: 'hidden', background: '#232d3f',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                flexShrink: 0, cursor: 'pointer',
              }}
              onClick={() => openAbility('P')}
              >
                {getAbilityImage(champ.id, 'P') ? (
                  <img src={getAbilityImage(champ.id, 'P')} alt="P"
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                    onError={e => { e.target.style.display = 'none' }}
                  />
                ) : (
                  <span style={{ fontWeight: 700, fontSize: '12px', color: '#fcd34d' }}>P</span>
                )}
              </div>
              <div style={{ fontSize: '11px', color: '#7a8fa6', marginLeft: '4px' }}>
                {champAbilities?.P?.name || 'Passive'} — Unlocked at Level 1
              </div>
            </div>

            {/* Legend */}
            <div style={{
              display: 'flex', gap: '16px', marginTop: '14px',
              fontSize: '11px', color: '#7a8fa6',
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                <div style={{ width: '12px', height: '12px', borderRadius: '3px', background: '#3b82f6' }} />
                <span>Ability level up</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                <div style={{ width: '12px', height: '12px', borderRadius: '3px', background: '#ec4899' }} />
                <span>Ultimate level up</span>
              </div>
            </div>
          </div>
        ) : (
          <p style={{ fontSize: '12px', color: '#7a8fa6' }}>Skill order coming soon!</p>
        )}
      </Section>

      {/* Build */}
      <Section title="Recommended Build">
        <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
          {(activeBuild || []).map((item, i) => (
            <div key={i} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '6px' }}>
              <div style={{
                width: '60px', height: '60px', background: '#232d3f',
                border: `1px solid ${item.mythic ? '#c89b3c' : '#2a3548'}`,
                boxShadow: item.mythic ? '0 0 0 1px #c89b3c' : 'none',
                borderRadius: '8px', overflow: 'hidden',
                display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '26px',
              }}>
                {ITEM_IMAGES[item.name] ? (
                  <img src={ITEM_IMAGES[item.name]} alt={item.name}
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                    onError={e => { e.target.style.display = 'none'; e.target.parentNode.innerHTML = item.icon || '⚔️' }}
                  />
                ) : (item.icon || '⚔️')}
              </div>
              <span style={{ fontSize: '10px', color: '#7a8fa6', textAlign: 'center', width: '70px', lineHeight: '1.3' }}>
                {item.name}
              </span>
            </div>
          ))}
        </div>
      </Section>

      {/* Runes */}
      <Section title="Runes">
        <div style={{ display: 'flex', gap: '14px', alignItems: 'center', marginBottom: '16px' }}>
          <div style={{
            width: '56px', height: '56px', background: '#232d3f',
            border: '2px solid #c89b3c', borderRadius: '50%',
            overflow: 'hidden', display: 'flex', alignItems: 'center',
            justifyContent: 'center', fontSize: '26px', flexShrink: 0,
          }}>
            {RUNE_IMAGES[activeRunes.keystone.name] ? (
              <img src={RUNE_IMAGES[activeRunes.keystone.name]} alt={activeRunes.keystone.name}
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                onError={e => { e.target.style.display = 'none'; e.target.parentNode.innerHTML = activeRunes.keystone.icon }}
              />
            ) : activeRunes.keystone.icon}
          </div>
          <div>
            <div style={{ fontSize: '14px', fontWeight: 600, color: '#fff' }}>
              {activeRunes.keystone.name}
              <span style={{ color: '#c89b3c', fontSize: '10px', fontWeight: 600, marginLeft: '8px' }}>KEYSTONE</span>
            </div>
            <div style={{ fontSize: '12px', color: '#7a8fa6', marginTop: '2px' }}>{activeRunes.keystone.desc}</div>
          </div>
        </div>

        {(activeRunes.secondary || []).map((r, i) => (
          <div key={i} style={{ display: 'flex', gap: '14px', alignItems: 'center', marginBottom: '12px' }}>
            <div style={{
              width: '44px', height: '44px', background: '#232d3f',
              border: '2px solid #2a3548', borderRadius: '50%', overflow: 'hidden',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              fontSize: '20px', flexShrink: 0,
            }}>
              {RUNE_IMAGES[r.name] ? (
                <img src={RUNE_IMAGES[r.name]} alt={r.name}
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                  onError={e => { e.target.style.display = 'none'; e.target.parentNode.innerHTML = r.icon }}
                />
              ) : r.icon}
            </div>
            <div>
              <div style={{ fontSize: '13px', fontWeight: 600, color: '#fff' }}>{r.name}</div>
              <div style={{ fontSize: '12px', color: '#7a8fa6', marginTop: '2px' }}>{r.desc}</div>
            </div>
          </div>
        ))}
      </Section>

      {/* Summoner Spells */}
      <Section title="Summoner Spells">
        <div style={{ display: 'flex', gap: '12px' }}>
          {(activeSpells || []).map((s, i) => (
            <div key={i} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '6px' }}>
              <div style={{
                width: '56px', height: '56px', background: '#232d3f',
                border: '1px solid #2a3548', borderRadius: '8px',
                overflow: 'hidden', display: 'flex', alignItems: 'center', justifyContent: 'center',
              }}>
                {SPELL_IMAGES[s] ? (
                  <img src={SPELL_IMAGES[s]} alt={s}
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                    onError={e => { e.target.style.display = 'none'; e.target.parentNode.innerHTML = '💫' }}
                  />
                ) : <span style={{ fontSize: '22px' }}>💫</span>}
              </div>
              <span style={{ fontSize: '10px', color: '#7a8fa6' }}>{s}</span>
            </div>
          ))}
        </div>
      </Section>

      {/* Tips */}
      <Section title="Tips & Tricks">
        <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '10px' }}>
          {(activeTips || []).map((t, i) => (
            <li key={i} style={{
              background: '#161b22', border: '1px solid #2a3548',
              borderLeft: '3px solid #c89b3c', padding: '12px 16px',
              borderRadius: '0 8px 8px 0', fontSize: '13px',
              color: '#7a8fa6', lineHeight: '1.6',
            }}>
              {t}
            </li>
          ))}
        </ul>
      </Section>

      {/* Counters */}
      {counterChamps.length > 0 && (
        <Section title="Weak Against">
          <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
            {counterChamps.map(c => (
              <div key={c.id} onClick={() => navigate('champion', c)}
                style={{
                  display: 'flex', alignItems: 'center', gap: '10px',
                  background: '#161b22', border: '1px solid #2a3548',
                  borderRadius: '8px', padding: '8px 14px',
                  cursor: 'pointer', transition: 'all .2s',
                  fontSize: '13px', color: '#e2e8f0',
                }}
                onMouseEnter={e => { e.currentTarget.style.borderColor = '#c89b3c'; e.currentTarget.style.color = '#c89b3c' }}
                onMouseLeave={e => { e.currentTarget.style.borderColor = '#2a3548'; e.currentTarget.style.color = '#e2e8f0' }}
              >
                <img src={c.img} alt={c.name}
                  style={{ width: '28px', height: '28px', borderRadius: '4px', objectFit: 'cover' }}
                  onError={e => { e.target.style.display = 'none' }}
                />
                {c.name}
              </div>
            ))}
          </div>
        </Section>
      )}

      {/* Patch Notes */}
      {(() => {
        const notes = CHAMPION_PATCH_NOTES[champ.id]
        if (!notes || notes.length === 0) return null
        const typeConfig = {
          buff:   { label: 'BUFF',      color: '#22c55e', bg: 'rgba(34,197,94,0.1)',   icon: '⬆️' },
          nerf:   { label: 'NERF',      color: '#ef4444', bg: 'rgba(239,68,68,0.1)',   icon: '⬇️' },
          adjust: { label: 'ADJUST',    color: '#f97316', bg: 'rgba(249,115,22,0.1)',  icon: '↔️' },
          rework: { label: 'REWORK',    color: '#8b5cf6', bg: 'rgba(139,92,246,0.1)', icon: '🔄' },
          new:    { label: 'NEW CHAMP', color: '#c89b3c', bg: 'rgba(200,155,60,0.1)', icon: '⭐' },
        }
        return (
          <Section title={`${champ.name} Patch History`}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
              {notes.map((note, i) => {
                const cfg = typeConfig[note.type] || typeConfig.adjust
                return (
                  <div key={i} style={{
                    background: cfg.bg,
                    border: `1px solid ${cfg.color}44`,
                    borderLeft: `3px solid ${cfg.color}`,
                    borderRadius: '0 10px 10px 0',
                    padding: '12px 16px',
                  }}>
                    {/* Header */}
                    <div style={{
                      display: 'flex', alignItems: 'center',
                      gap: '8px', marginBottom: '8px',
                    }}>
                      <span style={{
                        background: cfg.color,
                        color: '#000', fontSize: '9px',
                        fontWeight: 700, padding: '2px 8px',
                        borderRadius: '4px', letterSpacing: '1px',
                      }}>
                        {cfg.icon} {cfg.label}
                      </span>
                      <span style={{
                        fontSize: '12px', fontWeight: 700,
                        color: cfg.color,
                      }}>
                        Patch {note.patch}
                      </span>
                    </div>
                    {/* Changes */}
                    <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '6px' }}>
                      {note.changes.map((change, j) => (
                        <li key={j} style={{
                          fontSize: '12px', color: '#b0bec5',
                          lineHeight: '1.6',
                          display: 'flex', gap: '8px', alignItems: 'flex-start',
                        }}>
                          <span style={{ color: cfg.color, flexShrink: 0, marginTop: '2px' }}>•</span>
                          {change}
                        </li>
                      ))}
                    </ul>
                  </div>
                )
              })}
            </div>
          </Section>
        )
      })()}
    </div>
  )
}