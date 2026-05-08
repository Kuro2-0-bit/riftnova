import { ITEM_IMAGES } from '../data/images'

const WRF = 'https://www.wildriftfire.com/images'

const ITEMS = {
  'Physical': [
    { name: "Serylda's Grudge", tier: 'S', desc: 'AD, Armor Pen, slows on ability hit.' },
    { name: 'Trinity Force', tier: 'S', desc: 'AD, AS, Move Speed. Best for fighters.' },
    { name: 'Goredrinker', tier: 'A', desc: 'AD, Ability Haste, heals in AoE on use.' },
    { name: "Death's Dance", tier: 'A', desc: 'AD, Ability Haste, stores and bleeds damage.' },
    { name: 'Mortal Reminder', tier: 'A', desc: 'AD, Armor Pen, applies Grievous Wounds.' },
    { name: "Lord Dominik's Regards", tier: 'A', desc: 'AD, Armor Pen vs high HP enemies.' },
    { name: 'Galeforce', tier: 'A', desc: 'AD, Crit, dash and deal damage.' },
    { name: 'Guardian Angel', tier: 'A', desc: 'AD, Armor, revives on death.' },
    { name: "Sterak's Gage", tier: 'A', desc: 'HP, shield when low in fights.' },
    { name: 'Stridebreaker', tier: 'A', desc: 'AD, AS, slows nearby enemies on use.' },
    { name: 'Essence Reaver', tier: 'A', desc: 'AD, Crit, restores mana on hit.' },
    { name: 'The Collector', tier: 'A', desc: 'AD, Lethality, executes below 5% HP.' },
    { name: 'Bloodthirster', tier: 'A', desc: 'AD, Life Steal, overshield on full HP.' },
    { name: 'Hullbreaker', tier: 'A', desc: 'AD, bonus damage to structures when alone.' },
    { name: 'Blade of the Ruined King', tier: 'A', desc: 'AD, AS, drains HP on hit.' },
    { name: "Guinsoo's Rageblade", tier: 'A', desc: 'AD, AP, AS, applies on-hit twice.' },
    { name: 'Edge of Night', tier: 'A', desc: 'AD, Lethality, spell shield on channel.' },
    { name: "Youmuu's Ghostblade", tier: 'A', desc: 'AD, Lethality, Move Speed on use.' },
    { name: 'Eclipse', tier: 'A', desc: 'AD, Lethality, shield on 2-hit proc.' },
    { name: 'Spear of Shojin', tier: 'A', desc: 'AD, Ability Haste, reduces ability cooldowns on hit.' },
    { name: 'Terminus', tier: 'A', desc: 'AD, AS, alternates armor and MR shred.' },
    { name: 'Infinity Edge', tier: 'A', desc: 'Massive AD and crit damage amplifier.' },
    { name: 'Black Cleaver', tier: 'B', desc: 'AD, Ability Haste, shreds armor on hit.' },
    { name: 'Divine Sunderer', tier: 'B', desc: 'AD, Ability Haste, heals on ability hit.' },
    { name: 'Duskblade of Draktharr', tier: 'B', desc: 'AD, Lethality, bonus damage after being unseen.' },
    { name: 'Sundered Sky', tier: 'B', desc: 'AD, Ability Haste, heals on first crit hit.' },
    { name: 'Runaan\'s Hurricane', tier: 'B', desc: 'AD, Crit, AS, fires bolts at nearby enemies.' },
    { name: 'Kraken Slayer', tier: 'B', desc: 'AD, AS, true damage every 3rd hit.' },
    { name: 'Maw of Malmortius', tier: 'B', desc: 'AD, Ability Haste, shield vs magic damage.' },
    { name: 'Navori Quickblades', tier: 'B', desc: 'AD, Crit, reduces ability cooldowns on hit.' },
    { name: 'Dead Man\'s Plate', tier: 'B', desc: 'HP, Armor, Move Speed, empowers next auto.' },
    { name: 'Phantom Dancer', tier: 'B', desc: 'AD, AS, Crit, shield when low HP.' },
    { name: 'Overlord\'s Bloodmail', tier: 'B', desc: 'HP, AD, converts HP to bonus AD.' },
    { name: 'Iceborn Gauntlet', tier: 'B', desc: 'AD, Ability Haste, slows on ability hit.' },
    { name: 'Manamune', tier: 'B', desc: 'AD, Mana, converts mana to bonus AD.' },
    { name: 'Titanic Hydra', tier: 'B', desc: 'HP, AD, AoE cleave on hit.' },
  ],

  'Magic': [
    { name: "Rabadon's Deathcap", tier: 'S', desc: 'Massive AP amplifier. Buy last for huge spike.' },
    { name: 'Awakened Soulstealer', tier: 'A', desc: 'AP, Ability Haste, reduces R cooldown on kill.' },
    { name: 'Crown of the Shattered Queen', tier: 'A', desc: 'AP, HP, shield when taking damage.' },
    { name: 'Infinity Orb', tier: 'A', desc: 'AP, Magic Pen, crits on low HP targets.' },
    { name: 'Luden\'s Echo', tier: 'A', desc: 'AP, Mana, bonus damage on first ability hit.' },
    { name: 'Lich Bane', tier: 'A', desc: 'AP, Move Speed, empowers next auto after ability.' },
    { name: 'Riftmaker', tier: 'A', desc: 'AP, Omnivamp, true damage in extended fights.' },
    { name: "Liandry's Torment", tier: 'A', desc: 'AP, burns enemies over time per ability hit.' },
    { name: 'Rod of Ages', tier: 'A', desc: 'AP, HP, Mana, scales over time.' },
    { name: 'Psychic Projector', tier: 'A', desc: 'AP, bonus magic damage stored and released.' },
    { name: 'Archangel\'s Staff', tier: 'B', desc: 'AP, Mana, converts mana to bonus AP.' },
    { name: 'Malignance', tier: 'B', desc: 'AP, Ability Haste, burns on ultimate hit.' },
    { name: 'Bandle Fantasy', tier: 'B', desc: 'AP, Mana, bonus damage on ability hit.' },
    { name: 'Horizon Focus', tier: 'B', desc: 'AP, bonus damage to slowed or stunned targets.' },
    { name: 'Cosmic Drive', tier: 'B', desc: 'AP, Ability Haste, Move Speed in combat.' },
    { name: 'Rylai\'s Crystal Scepter', tier: 'B', desc: 'AP, HP, slows enemies on ability hit.' },
    { name: 'Searing Crown', tier: 'B', desc: 'AP, Ability Haste, bonus damage on spells.' },
    { name: 'Abyssal Mask', tier: 'B', desc: 'HP, MR, reduces nearby enemy MR.' },
    { name: "Nashor's Tooth", tier: 'C', desc: 'AP, AS, deals AP damage on hit.' },
    { name: 'Morellonomicon', tier: 'C', desc: 'AP, Grievous Wounds on ability hit.' },
    { name: 'Mejai\'s Soulstealer', tier: 'C', desc: 'AP, stacks on kills. High risk high reward.' },
    { name: 'Experimental Hexplate', tier: 'C', desc: 'AP, AS, empowers after using ultimate.' },
  ],

  'Defense': [
    { name: 'Sunfire Aegis', tier: 'S', desc: 'HP, Armor, MR, burns nearby enemies.' },
    { name: 'Thornmail', tier: 'S', desc: 'HP, Armor, reflects damage, applies Grievous Wounds.' },
    { name: 'Zeke\'s Convergence', tier: 'S', desc: 'HP, Armor, MR, burns linked ally target.' },
    { name: 'Frozen Heart', tier: 'A', desc: 'Armor, Ability Haste, slows nearby attackers.' },
    { name: 'Hollow Radiance', tier: 'A', desc: 'HP, MR, deals AoE magic damage nearby.' },
    { name: "Amaranth's Twinguard", tier: 'A', desc: 'HP, Armor, MR, stacks resistances in combat.' },
    { name: 'Force of Nature', tier: 'A', desc: 'HP, MR, Move Speed, stacks MR in fights.' },
    { name: 'Heartsteel', tier: 'A', desc: 'HP, stacks permanent HP from hitting champions.' },
    { name: 'Warmog\'s Armor', tier: 'A', desc: 'Massive HP, regenerates HP out of combat.' },
    { name: 'Mantle of the Twelfth Hour', tier: 'A', desc: 'HP, Armor, MR, shield at low HP.' },
    { name: 'Unending Despair', tier: 'A', desc: 'HP, MR, heals and deals damage to nearby enemies.' },
    { name: 'Kaenic Rookern', tier: 'A', desc: 'HP, MR, generates a magic damage shield.' },
    { name: "Randuin's Omen", tier: 'A', desc: 'HP, Armor, slows nearby enemies on use.' },
    { name: 'Radiant Virtue', tier: 'A', desc: 'HP, Ability Haste, heals nearby allies after R.' },
    { name: 'Maw of Malmortius', tier: 'B', desc: 'AD, Ability Haste, shield vs magic damage.' },
    { name: 'Overlord\'s Bloodmail', tier: 'B', desc: 'HP, AD, converts HP to bonus AD.' },
    { name: 'Wit\'s End', tier: 'B', desc: 'AD, AS, MR, deals magic damage on hit.' },
    { name: 'Winter\'s Approach', tier: 'C', desc: 'HP, Mana, stacks HP from mana on hit.' },
    { name: 'Imperial Mandate', tier: 'C', desc: 'AP, HP, bonus damage on slowed targets.' },
    { name: 'Soul Transfer', tier: 'C', desc: 'HP, revives nearby ally on death once.' },
    { name: 'Chempunk Chainsword', tier: 'C', desc: 'AD, HP, applies Grievous Wounds on hit.' },
  ],

  'Support': [
    { name: 'Ardent Censer', tier: 'S', desc: 'AP, Ability Haste, buffs ally you shield with AS.' },
    { name: 'Harmonic Echo', tier: 'S', desc: 'AP, Ability Haste, heals nearby allies from movement.' },
    { name: 'Redemption', tier: 'A', desc: 'HP, Ability Haste, heals AoE globally on use.' },
    { name: 'Knight\'s Vow', tier: 'A', desc: 'HP, Armor, redirects damage from linked ally.' },
    { name: 'Staff of Flowing Water', tier: 'A', desc: 'AP, Ability Haste, buffs ally you heal with AP.' },
    { name: 'Dawnshroud', tier: 'A', desc: 'HP, MR, reveals enemies who attack linked ally.' },
    { name: 'Locket of the Iron Solari', tier: 'A', desc: 'HP, Armor, MR, shields nearby allies on use.' },
    { name: 'Psychic Projector', tier: 'A', desc: 'AP, bonus magic damage stored and released.' },
    { name: 'Moonstone Renewer', tier: 'B', desc: 'AP, Ability Haste, heals nearby allies in combat.' },
    { name: 'Dream Maker', tier: 'B', desc: 'HP, Ability Haste, shields ally based on damage taken.' },
    { name: 'Yordle Trap', tier: 'B', desc: 'AP, places traps that slow and damage enemies.' },
    { name: 'Imperial Mandate', tier: 'C', desc: 'AP, HP, bonus damage on slowed targets.' },
    { name: 'Soul Transfer', tier: 'C', desc: 'HP, revives nearby ally on death once.' },
  ],

  'Boots': [
    { name: 'Gluttonous Greaves', tier: 'A', desc: 'Life Steal and Spell Vamp. Best for sustain.' },
    { name: 'Ionian Boots of Lucidity', tier: 'A', desc: 'Ability Haste and Summoner Spell CDR.' },
    { name: 'Berserker\'s Greaves', tier: 'A', desc: 'Attack Speed. Best for auto-attack champions.' },
    { name: 'Plated Steelcaps', tier: 'A', desc: 'Armor, reduces auto attack damage taken.' },
    { name: "Mercury's Treads", tier: 'A', desc: 'MR and Tenacity. Best vs CC-heavy teams.' },
    { name: 'Boots of Mana', tier: 'A', desc: 'Mana and Ability Haste. Best for mana-hungry mages.' },
    { name: 'Boots of Dynamism', tier: 'A', desc: 'Move Speed and Ability Haste. Versatile boots.' },
  ],

  'Enchants': [
    { name: 'Stasis', tier: 'S', desc: 'Become invulnerable for 2.5 seconds.' },
    { name: 'Quicksilver', tier: 'S', desc: 'Remove all CC effects instantly.' },
    { name: 'Veil', tier: 'S', desc: 'Grants a spell shield that blocks one ability.' },
    { name: 'Protobelt', tier: 'A', desc: 'Dash forward and deal AoE damage.' },
    { name: 'Glorious Teleport', tier: 'A', desc: 'Teleport to any allied structure.' },
    { name: 'Magnetic Blaster', tier: 'A', desc: 'Fires a blast at nearby enemies.' },
    { name: 'Gargoyle Stoneplate', tier: 'A', desc: 'HP, Armor, MR, massively grows HP on use.' },
    { name: 'Bandle Fantasy', tier: 'B', desc: 'AP, Mana, bonus damage on ability hit.' },
    { name: 'Dream Maker', tier: 'B', desc: 'HP, Ability Haste, shields ally based on damage taken.' },
  ],
}

const TIER_COLORS = { S: '#22c55e', A: '#3b82f6', B: '#f97316', C: '#ef4444', D: '#7a8fa6' }

const CATEGORY_COLORS = {
  'Physical': '#f97316',
  'Magic': '#8b5cf6',
  'Defense': '#22c55e',
  'Support': '#ec4899',
  'Boots': '#c89b3c',
  'Enchants': '#3b82f6',
}

export default function ItemList() {
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
          Item Tier List
        </h1>
        <p style={{ color: '#7a8fa6', fontSize: '14px' }}>
          All Wild Rift items organized by category — with tier ratings
        </p>
      </div>

      {/* Categories */}
      {Object.entries(ITEMS).map(([category, items]) => (
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
              {items.length} items
            </span>
          </div>

          {/* Items grid */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))',
            gap: '10px',
          }}>
            {items.map((item, i) => (
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
                  border: `1px solid ${CATEGORY_COLORS[category]}44`,
                  borderRadius: '8px',
                  overflow: 'hidden',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0,
                }}>
                  {ITEM_IMAGES[item.name] ? (
                    <img
                      src={ITEM_IMAGES[item.name]}
                      alt={item.name}
                      style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                      onError={e => {
                        e.target.style.display = 'none'
                        e.target.parentNode.innerHTML = '<span style="font-size:22px">⚔️</span>'
                      }}
                    />
                  ) : (
                    <span style={{ fontSize: '22px' }}>⚔️</span>
                  )}
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
                      {item.name}
                    </span>
                    <span style={{
                      fontSize: '10px',
                      fontWeight: 700,
                      padding: '1px 6px',
                      borderRadius: '4px',
                      background: `${TIER_COLORS[item.tier]}22`,
                      color: TIER_COLORS[item.tier],
                      border: `1px solid ${TIER_COLORS[item.tier]}44`,
                      flexShrink: 0,
                    }}>
                      {item.tier}
                    </span>
                  </div>
                  <p style={{
                    fontSize: '11px',
                    color: '#7a8fa6',
                    lineHeight: '1.5',
                    margin: 0,
                  }}>
                    {item.desc}
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