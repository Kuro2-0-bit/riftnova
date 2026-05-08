const WRF = 'https://www.wildriftfire.com/images/runes'

const RUNES = {
  'Keystone': [
    { name: 'Grasp of the Undying', tier: 'S', img: `${WRF}/grasp-of-the-undying.png`, desc: 'Empowered auto after ability hit — heals you and grows your max HP permanently.' },
    { name: 'Conqueror', tier: 'S', img: `${WRF}/conqueror.png`, desc: 'Stack AD or AP in extended fights. Best for bruisers and fighters.' },
    { name: 'Electrocute', tier: 'S', img: `${WRF}/electrocute.png`, desc: 'Burst damage on 3-hit combo. Best for assassins and burst mages.' },
    { name: 'Fleet Footwork', tier: 'S', img: `${WRF}/fleet-footwork.png`, desc: 'Heal and movement speed on empowered auto. Best for ADCs needing sustain.' },
    { name: 'Lethal Tempo', tier: 'S', img: `${WRF}/lethal-tempo.png`, desc: 'Ramping attack speed in extended fights. Best for auto-attack carries.' },
    { name: 'Phase Rush', tier: 'A', img: `${WRF}/phase-rush.png`, desc: 'Burst of movement speed on 3-hit combo. Best for kiting champions.' },
    { name: 'Arcane Comet', tier: 'A', img: `${WRF}/arcane-comet.png`, desc: 'Empowered projectile on ability hit. Best for poke mages.' },
    { name: 'Aery', tier: 'A', img: `${WRF}/aery.png`, desc: 'Shields allies or pokes enemies on ability hit. Best for enchanters.' },
    { name: 'Courage of the Colossus', tier: 'A', img: `${WRF}/courage-of-the-colossus.png`, desc: 'Shield after landing CC on multiple enemies. Best for tanks.' },
    { name: 'First Strike', tier: 'A', img: `${WRF}/first-strike.png`, desc: 'Bonus gold and damage when attacking first. Best for poke champions.' },
    { name: 'Guardian', tier: 'B', img: `${WRF}/guardian.png`, desc: 'Shield yourself and a nearby ally when taking damage. Best for supports.' },
    { name: 'Dark Harvest', tier: 'B', img: `${WRF}/dark-harvest.png`, desc: 'Stacking execute damage from low HP enemies. High risk, high reward.' },
  ],

  'Domination': [
    { name: 'Sudden Impact', tier: 'S', img: `${WRF}/sudden-impact.png`, desc: 'Lethality or magic pen after dashing or leaving stealth.' },
    { name: 'Zombie Ward', tier: 'S', img: `${WRF}/zombie-ward.png`, desc: 'Destroyed wards become your own zombie wards briefly.' },
    { name: 'Eyeball Collector', tier: 'A', img: `${WRF}/eyeball-collector.png`, desc: 'Stacking AD or AP from takedowns.' },
    { name: 'Cheap Shot', tier: 'B', img: `${WRF}/cheap-shot.png`, desc: 'Bonus true damage to slowed or impaired enemies.' },
    { name: 'Hubris', tier: 'B', img: `${WRF}/hubris.png`, desc: 'Stacking AD from solo kills on champions.' },
    { name: 'Relentless Hunter', tier: 'C', img: `${WRF}/relentless-hunter.png`, desc: 'Out-of-combat movement speed stacking from unique takedowns.' },
  ],

  'Precision': [
    { name: 'Legend: Alacrity', tier: 'S', img: `${WRF}/legend-alacrity.png`, desc: 'Bonus attack speed stacking from takedowns.' },
    { name: 'Legend: Bloodline', tier: 'S', img: `${WRF}/legend-bloodline.png`, desc: 'Bonus life steal stacking from takedowns.' },
    { name: 'Demolish', tier: 'S', img: `${WRF}/demolish.png`, desc: 'Bonus tower damage on a short cooldown.' },
    { name: 'Cut Down', tier: 'S', img: `${WRF}/cut-down.png`, desc: 'Bonus damage to enemies with more HP than you.' },
    { name: 'Triumph', tier: 'B', img: `${WRF}/triumph.png`, desc: 'Heal on takedown and bonus gold.' },
    { name: 'Last Stand', tier: 'B', img: `${WRF}/last-stand.png`, desc: 'More damage when you are low on HP.' },
    { name: 'Coup de Grace', tier: 'B', img: `${WRF}/coup-de-grace.png`, desc: 'Bonus damage to enemies below 40% HP.' },
    { name: 'Empowered Attack', tier: 'B', img: `${WRF}/empowered-attack.png`, desc: 'Empowered auto after ability use dealing bonus damage.' },
    { name: 'Chain Assault', tier: 'B', img: `${WRF}/chain-assault.png`, desc: 'Bonus damage after hitting an ability on the same target.' },
    { name: 'Legend: Tenacity', tier: 'C', img: `${WRF}/legend-tenacity.png`, desc: 'Bonus tenacity stacking from takedowns.' },
  ],

  'Resolve': [
    { name: 'Second Wind', tier: 'S', img: `${WRF}/second-wind.png`, desc: 'Heal after taking damage from an enemy champion.' },
    { name: 'Overgrowth', tier: 'S', img: `${WRF}/overgrowth.png`, desc: 'Permanent HP from nearby minion and monster deaths.' },
    { name: 'Bone Plating', tier: 'S', img: `${WRF}/bone-plating.png`, desc: 'Reduces burst damage from the first 3 hits after taking damage.' },
    { name: 'Perseverance', tier: 'S', img: `${WRF}/perseverance.png`, desc: 'Enhanced regeneration when low on HP.' },
    { name: 'Font of Life', tier: 'A', img: `${WRF}/font-of-life.png`, desc: 'Heal nearby allies who attack enemies you have CC\'d.' },
    { name: 'Unshakeable', tier: 'A', img: `${WRF}/unshakeable.png`, desc: 'Build up tenacity and slow resistance during combat.' },
    { name: 'Revitalize', tier: 'A', img: `${WRF}/revitalize.png`, desc: 'Boosts shields and heals, especially when low HP.' },
    { name: 'Tyrant', tier: 'B', img: `${WRF}/tyrant.png`, desc: 'Deal bonus damage based on your bonus HP.' },
    { name: 'Nullifying Orb', tier: 'B', img: `${WRF}/nullifying-orb.png`, desc: 'Magic shield when you would take magic damage below 30% HP.' },
  ],

  'Sorcery': [
    { name: 'Transcendence', tier: 'S', img: `${WRF}/transcendence.png`, desc: 'CDR above cap converts to bonus damage. Resets on takedown.' },
    { name: 'Nimbus Cloak', tier: 'S', img: `${WRF}/nimbus-cloak.png`, desc: 'Movement speed after using summoner spells.' },
    { name: 'Battle Zeal', tier: 'A', img: `${WRF}/battle-zeal.png`, desc: 'Heal when dealing damage to champions based on missing HP.' },
    { name: 'Axiom Arcanist', tier: 'A', img: `${WRF}/axiom-arcanist.png`, desc: 'Empowers ultimate abilities with bonus effects.' },
    { name: 'Brutal', tier: 'A', img: `${WRF}/brutal.png`, desc: 'Flat AD or AP and armor pen or magic pen at game start.' },
    { name: 'Botanist', tier: 'A', img: `${WRF}/botanist.png`, desc: 'AP or AD based on your total move speed.' },
    { name: 'Ingenious Hunter', tier: 'A', img: `${WRF}/ingenious-hunter.png`, desc: 'Reduces item active cooldowns from unique champion takedowns.' },
    { name: 'Manaflow Band', tier: 'B', img: `${WRF}/manaflow-band.png`, desc: 'Permanent mana stacking from ability hits on champions.' },
    { name: 'Gathering Storm', tier: 'B', img: `${WRF}/gathering-storm.png`, desc: 'Scaling AD or AP that grows stronger over the game.' },
    { name: 'Scorch', tier: 'B', img: `${WRF}/scorch.png`, desc: 'Bonus burn damage on ability hit on a cooldown.' },
    { name: 'Celerity', tier: 'B', img: `${WRF}/celerity.png`, desc: 'Converts bonus movement speed into adaptive damage.' },
    { name: 'Absolute Focus', tier: 'B', img: `${WRF}/absolute-focus.png`, desc: 'Bonus AD or AP when above 70% HP.' },
    { name: 'Empowerment', tier: 'B', img: `${WRF}/empowerment.png`, desc: 'Stacking damage boost on hitting the same target repeatedly.' },
    { name: 'Ixtali Seedjar', tier: 'C', img: `${WRF}/ixtali-seedjar.png`, desc: 'Seeds placed periodically that grow into plants with effects.' },
  ],

  'Minor': [
    { name: 'Hextech Flashtraption', tier: 'S', img: `${WRF}/hextech-flashtraption.png`, desc: 'While Flash is on cooldown, channel to blink to a target location.' },
    { name: 'Ice Overlord', tier: 'S', img: `${WRF}/ice-overlord.png`, desc: 'Places a Poro in a brush that grants vision and buffs.' },
    { name: 'Sweet Tooth', tier: 'B', img: `${WRF}/sweet-tooth.png`, desc: 'Honeyfruits heal more and grant bonus gold when consumed.' },
  ],
}

const TIER_COLORS = { S: '#22c55e', A: '#3b82f6', B: '#f97316', C: '#ef4444', D: '#7a8fa6' }

const CATEGORY_COLORS = {
  'Keystone': '#c89b3c',
  'Domination': '#ef4444',
  'Precision': '#3b82f6',
  'Resolve': '#22c55e',
  'Sorcery': '#8b5cf6',
  'Minor': '#ec4899',
}

export default function RuneList() {
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
          Wild Rift · Patch 7.1d
        </div>
        <h1 style={{
          fontSize: '32px',
          fontWeight: 700,
          color: '#fff',
          letterSpacing: '2px',
          textTransform: 'uppercase',
          marginBottom: '10px',
        }}>
          Rune Tier List
        </h1>
        <p style={{ color: '#7a8fa6', fontSize: '14px' }}>
          All Wild Rift runes organized by category — with tier ratings
        </p>
      </div>

      {/* Categories */}
      {Object.entries(RUNES).map(([category, runes]) => (
        <div key={category} style={{ marginBottom: '40px' }}>

          {/* Category header */}
          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: '12px',
            marginBottom: '16px',
          }}>
            <div style={{
              width: '4px',
              height: '24px',
              background: CATEGORY_COLORS[category],
              borderRadius: '2px',
            }} />
            <h2 style={{
              fontSize: '14px',
              fontWeight: 700,
              textTransform: 'uppercase',
              letterSpacing: '1.5px',
              color: CATEGORY_COLORS[category],
            }}>
              {category}
            </h2>
            <div style={{ flex: 1, height: '1px', background: '#2a3548' }} />
            <span style={{ fontSize: '11px', color: '#7a8fa6' }}>
              {runes.length} runes
            </span>
          </div>

          {/* Runes grid */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))',
            gap: '10px',
          }}>
            {runes.map((rune, i) => (
              <div
                key={i}
                style={{
                  background: '#161b22',
                  border: '1px solid #2a3548',
                  borderRadius: '10px',
                  padding: '12px',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '12px',
                  transition: 'all .2s',
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.borderColor = CATEGORY_COLORS[category]
                  e.currentTarget.style.transform = 'translateY(-2px)'
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.borderColor = '#2a3548'
                  e.currentTarget.style.transform = 'translateY(0)'
                }}
              >
                {/* Icon */}
                <div style={{
                  width: '52px',
                  height: '52px',
                  background: '#232d3f',
                  border: `2px solid ${CATEGORY_COLORS[category]}44`,
                  borderRadius: '50%',
                  overflow: 'hidden',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0,
                }}>
                  <img
                    src={rune.img}
                    alt={rune.name}
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                    onError={e => {
                      e.target.style.display = 'none'
                      e.target.parentNode.innerHTML = '<span style="font-size:22px">✨</span>'
                    }}
                  />
                </div>

                {/* Info */}
                <div style={{ flex: 1, minWidth: 0 }}>
                  <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '8px',
                    marginBottom: '4px',
                  }}>
                    <span style={{
                      fontSize: '13px',
                      fontWeight: 700,
                      color: '#fff',
                      whiteSpace: 'nowrap',
                      overflow: 'hidden',
                      textOverflow: 'ellipsis',
                    }}>
                      {rune.name}
                    </span>
                    <span style={{
                      fontSize: '10px',
                      fontWeight: 700,
                      padding: '1px 6px',
                      borderRadius: '4px',
                      background: `${TIER_COLORS[rune.tier]}22`,
                      color: TIER_COLORS[rune.tier],
                      border: `1px solid ${TIER_COLORS[rune.tier]}44`,
                      flexShrink: 0,
                    }}>
                      {rune.tier}
                    </span>
                  </div>
                  <p style={{
                    fontSize: '11px',
                    color: '#7a8fa6',
                    lineHeight: '1.5',
                    margin: 0,
                  }}>
                    {rune.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  )
}