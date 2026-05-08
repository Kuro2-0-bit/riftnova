import React from 'react'
import { CHAMPIONS } from '../data/champions'
import { ITEM_IMAGES, RUNE_IMAGES, SPELL_IMAGES } from '../data/images'
import { CHAMPION_EXTRAS } from '../data/championExtras'
import { getAbilityImage } from '../data/abilityImages'

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
        fontSize: '11px',
        fontWeight: 700,
        textTransform: 'uppercase',
        letterSpacing: '1.5px',
        color: '#c89b3c',
        borderBottom: '1px solid #2a3548',
        paddingBottom: '10px',
        marginBottom: '16px',
      }}>
        {title}
      </div>
      {children}
    </div>
  )
}

export default function ChampionDetail({ champ, navigate }) {
  const [showAdvanced, setShowAdvanced] = React.useState(false)

  if (!champ) return null

  const extras = CHAMPION_EXTRAS[champ.id] || {}
  const champStats = extras.stats || champ.stats
  const champAbilities = extras.abilities || champ.abilities

  const counterChamps = (champ.counters || [])
    .map(id => CHAMPIONS.find(c => c.id === id))
    .filter(Boolean)

  return (
    <div style={{ maxWidth: '860px', margin: '0 auto' }}>

      {/* Back button */}
      <button
        onClick={() => navigate('home')}
        style={{
          background: 'none',
          border: '1px solid #2a3548',
          borderRadius: '8px',
          color: '#7a8fa6',
          fontSize: '13px',
          padding: '9px 18px',
          cursor: 'pointer',
          marginBottom: '24px',
          display: 'flex',
          alignItems: 'center',
          gap: '6px',
          transition: 'all .2s',
        }}
        onMouseEnter={e => { e.currentTarget.style.borderColor = '#c89b3c'; e.currentTarget.style.color = '#c89b3c' }}
        onMouseLeave={e => { e.currentTarget.style.borderColor = '#2a3548'; e.currentTarget.style.color = '#7a8fa6' }}
      >
        ← Back to Champions
      </button>

      {/* Champion header */}
      <div style={{
        display: 'flex',
        gap: '24px',
        alignItems: 'flex-start',
        background: '#161b22',
        border: '1px solid #2a3548',
        borderRadius: '12px',
        padding: '24px',
        marginBottom: '28px',
      }}>
        <div style={{
          width: '100px',
          height: '100px',
          borderRadius: '12px',
          border: '2px solid #c89b3c',
          overflow: 'hidden',
          flexShrink: 0,
          background: '#232d3f',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontSize: '40px',
        }}>
          <img
            src={champ.img}
            alt={champ.name}
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
            {champ.roles.map(r => (
              <span key={r} style={{
                padding: '3px 12px',
                borderRadius: '12px',
                fontSize: '11px',
                fontWeight: 700,
                textTransform: 'uppercase',
                letterSpacing: '0.5px',
                background: `${ROLE_COLORS[r]}22`,
                color: ROLE_COLORS[r],
                border: `1px solid ${ROLE_COLORS[r]}`,
              }}>
                {r}
              </span>
            ))}
            <span style={{
              padding: '3px 12px',
              borderRadius: '12px',
              fontSize: '11px',
              fontWeight: 700,
              background: `${TIER_COLORS[champ.tier]}22`,
              color: TIER_COLORS[champ.tier],
              border: `1px solid ${TIER_COLORS[champ.tier]}`,
            }}>
              {champ.tier} Tier
            </span>
          </div>
        </div>

        {/* Advanced toggle button */}
        <button
          onClick={() => setShowAdvanced(!showAdvanced)}
          style={{
            background: showAdvanced ? '#c89b3c' : 'transparent',
            border: '1px solid #c89b3c',
            borderRadius: '8px',
            color: showAdvanced ? '#000' : '#c89b3c',
            fontSize: '11px',
            fontWeight: 700,
            padding: '8px 14px',
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            gap: '6px',
            transition: 'all .2s',
            textTransform: 'uppercase',
            letterSpacing: '1px',
            flexShrink: 0,
            whiteSpace: 'nowrap',
          }}
        >
          📊 {showAdvanced ? 'Hide Stats' : 'Advanced'}
        </button>
      </div>

      {/* Advanced stats panel */}
      {showAdvanced && champStats && (
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
            display: 'flex', justifyContent: 'space-between', alignItems: 'center',
          }}>
            <span>Base Stats — Level 1</span>
            <span style={{ color: '#7a8fa6', fontSize: '10px' }}>Grows each level</span>
          </div>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(160px, 1fr))',
            gap: '10px',
          }}>
            {STAT_DISPLAY.map(stat => {
              const val = champStats[stat.key]
              if (!val) return null
              return (
                <div key={stat.key} style={{
                  background: '#0d1117',
                  border: '1px solid #2a3548',
                  borderRadius: '8px',
                  padding: '12px',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '10px',
                }}>
                  <span style={{ fontSize: '20px' }}>{stat.icon}</span>
                  <div>
                    <div style={{ fontSize: '11px', color: '#7a8fa6', marginBottom: '2px' }}>
                      {stat.label}
                    </div>
                    <div style={{ fontSize: '16px', fontWeight: 700, color: stat.color }}>
                      {val}{stat.suffix}
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
          <div style={{
            marginTop: '14px',
            padding: '10px 14px',
            background: '#0d1117',
            borderRadius: '8px',
            fontSize: '11px',
            color: '#7a8fa6',
            lineHeight: '1.6',
            borderLeft: '3px solid #c89b3c',
          }}>
            📈 These are <strong style={{ color: '#fff' }}>base stats at Level 1</strong>.
            Stats scale up each level and are further boosted by your item build.
          </div>
        </div>
      )}

      {showAdvanced && !champStats && (
        <div style={{
          background: '#161b22',
          border: '1px solid #2a3548',
          borderRadius: '12px',
          padding: '20px',
          marginBottom: '28px',
          textAlign: 'center',
          color: '#7a8fa6',
          fontSize: '13px',
        }}>
          Stats coming soon for {champ.name}!
        </div>
      )}

      {/* Build */}
      <Section title="Recommended Build">
        <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
          {(champ.build || []).map((item, i) => (
            <div key={i} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '6px' }}>
              <div style={{
                width: '60px',
                height: '60px',
                background: '#232d3f',
                border: `1px solid ${item.mythic ? '#c89b3c' : '#2a3548'}`,
                boxShadow: item.mythic ? '0 0 0 1px #c89b3c' : 'none',
                borderRadius: '8px',
                overflow: 'hidden',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '26px',
              }}>
                {ITEM_IMAGES[item.name] ? (
                  <img
                    src={ITEM_IMAGES[item.name]}
                    alt={item.name}
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                    onError={e => { e.target.style.display = 'none'; e.target.parentNode.innerHTML = item.icon || '⚔️' }}
                  />
                ) : (item.icon || '⚔️')}
              </div>
              <span style={{
                fontSize: '10px',
                color: '#7a8fa6',
                textAlign: 'center',
                width: '70px',
                lineHeight: '1.3',
              }}>
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
            width: '56px', height: '56px',
            background: '#232d3f',
            border: '2px solid #c89b3c',
            borderRadius: '50%',
            overflow: 'hidden',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            fontSize: '26px', flexShrink: 0,
          }}>
            {RUNE_IMAGES[champ.runes.keystone.name] ? (
              <img
                src={RUNE_IMAGES[champ.runes.keystone.name]}
                alt={champ.runes.keystone.name}
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                onError={e => { e.target.style.display = 'none'; e.target.parentNode.innerHTML = champ.runes.keystone.icon }}
              />
            ) : champ.runes.keystone.icon}
          </div>
          <div>
            <div style={{ fontSize: '14px', fontWeight: 600, color: '#fff' }}>
              {champ.runes.keystone.name}
              <span style={{ color: '#c89b3c', fontSize: '10px', fontWeight: 600, marginLeft: '8px' }}>KEYSTONE</span>
            </div>
            <div style={{ fontSize: '12px', color: '#7a8fa6', marginTop: '2px' }}>{champ.runes.keystone.desc}</div>
          </div>
        </div>

        {(champ.runes.secondary || []).map((r, i) => (
          <div key={i} style={{ display: 'flex', gap: '14px', alignItems: 'center', marginBottom: '12px' }}>
            <div style={{
              width: '44px', height: '44px',
              background: '#232d3f',
              border: '2px solid #2a3548',
              borderRadius: '50%',
              overflow: 'hidden',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              fontSize: '20px', flexShrink: 0,
            }}>
              {RUNE_IMAGES[r.name] ? (
                <img
                  src={RUNE_IMAGES[r.name]}
                  alt={r.name}
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
          {(champ.spells || []).map((s, i) => (
            <div key={i} style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: '6px',
            }}>
              <div style={{
                width: '56px', height: '56px',
                background: '#232d3f',
                border: '1px solid #2a3548',
                borderRadius: '8px',
                overflow: 'hidden',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}>
                {SPELL_IMAGES[s] ? (
                  <img
                    src={SPELL_IMAGES[s]}
                    alt={s}
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

      {/* Skill Order */}
      <Section title="Skill Priority">
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px', flexWrap: 'wrap', marginBottom: '12px' }}>
          {(champ.skills || []).map((s, i) => (
            <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
              <div style={{
                width: '40px', height: '40px',
                background: SKILL_COLORS[s]?.bg || '#232d3f',
                border: `1px solid ${SKILL_COLORS[s]?.border || '#2a3548'}`,
                borderRadius: '8px',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                fontWeight: 700, fontSize: '15px',
                color: SKILL_COLORS[s]?.color || '#fff',
              }}>
                {s}
              </div>
              {i < champ.skills.length - 1 && (
                <span style={{ color: '#c89b3c', fontWeight: 700, fontSize: '16px' }}>→</span>
              )}
            </div>
          ))}
        </div>
        <p style={{ fontSize: '12px', color: '#7a8fa6' }}>Always level R at levels 5, 9, and 13.</p>
      </Section>

      {/* Abilities */}
      {champAbilities && (
        <Section title="Abilities">
          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
            {Object.entries(champAbilities).map(([key, ability]) => (
              <div key={key} style={{
                background: '#0d1117',
                border: '1px solid #2a3548',
                borderRadius: '10px',
                padding: '14px',
                display: 'flex',
                gap: '14px',
                alignItems: 'flex-start',
                transition: 'all .2s',
              }}
              onMouseEnter={e => e.currentTarget.style.borderColor = SKILL_COLORS[key]?.border || '#c89b3c'}
              onMouseLeave={e => e.currentTarget.style.borderColor = '#2a3548'}
              >
                <div style={{
  width: '48px', height: '48px',
  borderRadius: '8px',
  background: SKILL_COLORS[key]?.bg || 'rgba(200,155,60,.15)',
  border: `2px solid ${SKILL_COLORS[key]?.border || '#c89b3c'}`,
  overflow: 'hidden',
  display: 'flex', alignItems: 'center',
  justifyContent: 'center',
  fontWeight: 700, fontSize: '15px',
  color: SKILL_COLORS[key]?.color || '#fcd34d',
  flexShrink: 0,
  position: 'relative',
}}>
  {getAbilityImage(champ.id, key) ? (
    <img
      src={getAbilityImage(champ.id, key)}
      alt={key}
      style={{ width: '100%', height: '100%', objectFit: 'cover' }}
      onError={e => {
        e.target.style.display = 'none'
        e.target.parentNode.innerHTML = `<span style="font-weight:700;font-size:15px;color:${SKILL_COLORS[key]?.color || '#fcd34d'}">${key}</span>`
      }}
    />
  ) : key}
  <div style={{
    position: 'absolute',
    bottom: '2px',
    right: '2px',
    background: 'rgba(0,0,0,0.7)',
    borderRadius: '3px',
    fontSize: '8px',
    fontWeight: 700,
    color: SKILL_COLORS[key]?.color || '#fcd34d',
    padding: '1px 3px',
    lineHeight: 1,
  }}>
    {key}
  </div>
</div>
                <div>
                  <div style={{ fontSize: '14px', fontWeight: 700, color: '#fff', marginBottom: '6px' }}>
                    {ability.name}
                  </div>
                  <div style={{ fontSize: '12px', color: '#7a8fa6', lineHeight: '1.7' }}>
                    {ability.desc}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Section>
      )}

      {/* Tips */}
      <Section title="Tips & Tricks">
        <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '10px' }}>
          {(champ.tips || []).map((t, i) => (
            <li key={i} style={{
              background: '#161b22',
              border: '1px solid #2a3548',
              borderLeft: '3px solid #c89b3c',
              padding: '12px 16px',
              borderRadius: '0 8px 8px 0',
              fontSize: '13px',
              color: '#7a8fa6',
              lineHeight: '1.6',
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
              <div
                key={c.id}
                onClick={() => navigate('champion', c)}
                style={{
                  display: 'flex', alignItems: 'center', gap: '10px',
                  background: '#161b22',
                  border: '1px solid #2a3548',
                  borderRadius: '8px',
                  padding: '8px 14px',
                  cursor: 'pointer',
                  transition: 'all .2s',
                  fontSize: '13px',
                  color: '#e2e8f0',
                }}
                onMouseEnter={e => { e.currentTarget.style.borderColor = '#c89b3c'; e.currentTarget.style.color = '#c89b3c' }}
                onMouseLeave={e => { e.currentTarget.style.borderColor = '#2a3548'; e.currentTarget.style.color = '#e2e8f0' }}
              >
                <img
                  src={c.img}
                  alt={c.name}
                  style={{ width: '28px', height: '28px', borderRadius: '4px', objectFit: 'cover' }}
                  onError={e => { e.target.style.display = 'none' }}
                />
                {c.name}
              </div>
            ))}
          </div>
        </Section>
      )}
    </div>
  )
}