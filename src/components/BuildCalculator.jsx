import { ITEM_IMAGES } from '../data/images'

const ALL_ITEMS = [
  // Physical
  { name: "Serylda's Grudge", cost: 3200, category: 'Physical', stats: { ad: 45, armorPen: 30, abilityHaste: 20 } },
  { name: 'Trinity Force', cost: 3333, category: 'Physical', stats: { ad: 35, as: 35, hp: 200, abilityHaste: 15 } },
  { name: 'Goredrinker', cost: 3300, category: 'Physical', stats: { ad: 45, hp: 350, abilityHaste: 20 } },
  { name: "Death's Dance", cost: 3100, category: 'Physical', stats: { ad: 55, armor: 45, abilityHaste: 15 } },
  { name: 'Mortal Reminder', cost: 2500, category: 'Physical', stats: { ad: 30, armorPen: 30, as: 25 } },
  { name: "Lord Dominik's Regards", cost: 3000, category: 'Physical', stats: { ad: 35, armorPen: 35 } },
  { name: 'Galeforce', cost: 3400, category: 'Physical', stats: { ad: 55, crit: 20, as: 15 } },
  { name: 'Guardian Angel', cost: 2800, category: 'Physical', stats: { ad: 40, armor: 40 } },
  { name: "Sterak's Gage", cost: 3100, category: 'Physical', stats: { ad: 40, hp: 400 } },
  { name: 'Stridebreaker', cost: 3300, category: 'Physical', stats: { ad: 50, as: 20, hp: 300 } },
  { name: 'Essence Reaver', cost: 2900, category: 'Physical', stats: { ad: 55, crit: 20, abilityHaste: 20 } },
  { name: 'The Collector', cost: 3000, category: 'Physical', stats: { ad: 55, crit: 20, lethality: 15 } },
  { name: 'Bloodthirster', cost: 3400, category: 'Physical', stats: { ad: 55, crit: 20, lifeSteal: 18 } },
  { name: 'Blade of the Ruined King', cost: 3200, category: 'Physical', stats: { ad: 40, as: 30, lifeSteal: 12 } },
  { name: "Guinsoo's Rageblade", cost: 3000, category: 'Physical', stats: { ad: 30, ap: 30, as: 35 } },
  { name: 'Edge of Night', cost: 2800, category: 'Physical', stats: { ad: 55, hp: 300, lethality: 10 } },
  { name: "Youmuu's Ghostblade", cost: 3000, category: 'Physical', stats: { ad: 55, lethality: 18, abilityHaste: 15 } },
  { name: 'Eclipse', cost: 3100, category: 'Physical', stats: { ad: 55, lethality: 18, lifeSteal: 7 } },
  { name: 'Infinity Edge', cost: 3400, category: 'Physical', stats: { ad: 70, crit: 20 } },
  { name: 'Black Cleaver', cost: 3000, category: 'Physical', stats: { ad: 40, hp: 400, abilityHaste: 25 } },
  { name: 'Kraken Slayer', cost: 3200, category: 'Physical', stats: { ad: 40, as: 35, crit: 20 } },
  { name: "Runaan's Hurricane", cost: 2800, category: 'Physical', stats: { ad: 35, as: 45, crit: 20 } },
  { name: 'Navori Quickblades', cost: 3400, category: 'Physical', stats: { ad: 60, crit: 20, abilityHaste: 15 } },
  { name: "Dead Man's Plate", cost: 2900, category: 'Physical', stats: { hp: 300, armor: 40, moveSpeed: 5 } },
  { name: 'Iceborn Gauntlet', cost: 3100, category: 'Physical', stats: { ad: 40, armor: 50, abilityHaste: 20 } },
  { name: 'Manamune', cost: 2900, category: 'Physical', stats: { ad: 35, mana: 500, abilityHaste: 15 } },
  { name: 'Hullbreaker', cost: 3000, category: 'Physical', stats: { ad: 60, hp: 400, armor: 40 } },
  { name: 'Spear of Shojin', cost: 3100, category: 'Physical', stats: { ad: 60, hp: 300, abilityHaste: 20 } },
  { name: 'Terminus', cost: 3000, category: 'Physical', stats: { ad: 40, as: 30, lethality: 15 } },
  { name: "Wit's End", cost: 3000, category: 'Physical', stats: { ad: 40, as: 40, mr: 40 } },

  // Magic
  { name: "Rabadon's Deathcap", cost: 3800, category: 'Magic', stats: { ap: 130 } },
  { name: "Luden's Echo", cost: 3200, category: 'Magic', stats: { ap: 80, mana: 600, abilityHaste: 20 } },
  { name: 'Shadowflame', cost: 3000, category: 'Magic', stats: { ap: 100, magicPen: 10 } },
  { name: 'Void Staff', cost: 2800, category: 'Magic', stats: { ap: 80, magicPen: 40 } },
  { name: 'Morellonomicon', cost: 2500, category: 'Magic', stats: { ap: 80, hp: 200 } },
  { name: 'Cryptbloom', cost: 2800, category: 'Magic', stats: { ap: 70, magicPen: 15 } },
  { name: 'Hextech Rocketbelt', cost: 3200, category: 'Magic', stats: { ap: 80, hp: 200, magicPen: 15 } },
  { name: "Zhonya's Hourglass", cost: 3250, category: 'Magic', stats: { ap: 80, armor: 50, abilityHaste: 15 } },
  { name: "Nashor's Tooth", cost: 3000, category: 'Magic', stats: { ap: 80, as: 50, abilityHaste: 15 } },
  { name: 'Riftmaker', cost: 3200, category: 'Magic', stats: { ap: 80, hp: 300, abilityHaste: 15 } },
  { name: 'Lich Bane', cost: 3000, category: 'Magic', stats: { ap: 80, mana: 250, abilityHaste: 15 } },
  { name: "Rylai's Crystal Scepter", cost: 2600, category: 'Magic', stats: { ap: 75, hp: 350 } },
  { name: 'Infinity Orb', cost: 3000, category: 'Magic', stats: { ap: 80, magicPen: 15, moveSpeed: 5 } },
  { name: 'Awakened Soulstealer', cost: 3200, category: 'Magic', stats: { ap: 80, abilityHaste: 25, mana: 400 } },
  { name: "Liandry's Torment", cost: 3000, category: 'Magic', stats: { ap: 75, hp: 300 } },
  { name: "Archangel's Staff", cost: 3200, category: 'Magic', stats: { ap: 80, mana: 700, abilityHaste: 20 } },

  // Defense
  { name: 'Sunfire Aegis', cost: 3000, category: 'Defense', stats: { hp: 450, armor: 35, mr: 35 } },
  { name: "Warmog's Armor", cost: 3100, category: 'Defense', stats: { hp: 800, armor: 25, mr: 25 } },
  { name: 'Frozen Heart', cost: 2700, category: 'Defense', stats: { armor: 80, mana: 400, abilityHaste: 20 } },
  { name: "Randuin's Omen", cost: 2700, category: 'Defense', stats: { hp: 400, armor: 60 } },
  { name: 'Thornmail', cost: 2900, category: 'Defense', stats: { hp: 350, armor: 60 } },
  { name: 'Force of Nature', cost: 2900, category: 'Defense', stats: { hp: 350, mr: 70, moveSpeed: 5 } },
  { name: "Spirit Visage", cost: 2900, category: 'Defense', stats: { hp: 450, mr: 60, abilityHaste: 10 } },
  { name: 'Heartsteel', cost: 3000, category: 'Defense', stats: { hp: 800, armor: 30 } },
  { name: 'Kaenic Rookern', cost: 3000, category: 'Defense', stats: { hp: 400, mr: 80 } },
  { name: 'Hollow Radiance', cost: 3000, category: 'Defense', stats: { hp: 350, mr: 60, armor: 30 } },
  { name: "Amaranth's Twinguard", cost: 3200, category: 'Defense', stats: { hp: 500, armor: 35, mr: 35 } },
  { name: 'Unending Despair', cost: 3000, category: 'Defense', stats: { hp: 400, mr: 55, armor: 25 } },
  { name: 'Gargoyle Stoneplate', cost: 3200, category: 'Defense', stats: { hp: 300, armor: 60, mr: 60 } },
  { name: 'Maw of Malmortius', cost: 2900, category: 'Defense', stats: { ad: 50, mr: 50, abilityHaste: 15 } },

  // Support
  { name: 'Moonstone Renewer', cost: 2500, category: 'Support', stats: { ap: 50, hp: 200, abilityHaste: 20 } },
  { name: 'Staff of Flowing Water', cost: 2200, category: 'Support', stats: { ap: 60, abilityHaste: 15 } },
  { name: 'Ardent Censer', cost: 2300, category: 'Support', stats: { ap: 60, abilityHaste: 15 } },
  { name: 'Redemption', cost: 2300, category: 'Support', stats: { hp: 300, abilityHaste: 20 } },
  { name: "Knight's Vow", cost: 2300, category: 'Support', stats: { hp: 400, armor: 30 } },
  { name: "Locket of the Iron Solari", cost: 2500, category: 'Support', stats: { hp: 300, armor: 30, mr: 30 } },
  { name: "Zeke's Convergence", cost: 2400, category: 'Support', stats: { hp: 250, armor: 30, mr: 30 } },

  // Boots
  { name: 'Plated Steelcaps', cost: 1100, category: 'Boots', stats: { armor: 20, moveSpeed: 45 } },
  { name: "Mercury's Treads", cost: 1100, category: 'Boots', stats: { mr: 20, moveSpeed: 45 } },
  { name: 'Ionian Boots of Lucidity', cost: 1100, category: 'Boots', stats: { abilityHaste: 15, moveSpeed: 45 } },
  { name: "Sorcerer's Shoes", cost: 1100, category: 'Boots', stats: { magicPen: 18, moveSpeed: 45 } },
  { name: 'Gluttonous Greaves', cost: 1100, category: 'Boots', stats: { lifeSteal: 8, moveSpeed: 45 } },
  { name: 'Berserker\'s Greaves', cost: 1100, category: 'Boots', stats: { as: 30, moveSpeed: 45 } },
  { name: 'Boots of Dynamism', cost: 1100, category: 'Boots', stats: { abilityHaste: 10, moveSpeed: 50 } },
  { name: 'Boots of Mana', cost: 1100, category: 'Boots', stats: { mana: 300, moveSpeed: 45 } },
]

const STAT_LABELS = {
  ad: { label: 'Attack Damage', color: '#f97316', icon: '⚔️' },
  ap: { label: 'Ability Power', color: '#8b5cf6', icon: '✨' },
  armor: { label: 'Armor', color: '#eab308', icon: '🛡' },
  mr: { label: 'Magic Resist', color: '#3b82f6', icon: '💠' },
  hp: { label: 'Health', color: '#22c55e', icon: '❤️' },
  mana: { label: 'Mana', color: '#60a5fa', icon: '💧' },
  as: { label: 'Attack Speed', color: '#f97316', icon: '⚡' },
  crit: { label: 'Crit Chance', color: '#facc15', icon: '🎯' },
  lethality: { label: 'Lethality', color: '#ef4444', icon: '🗡️' },
  armorPen: { label: 'Armor Pen %', color: '#ef4444', icon: '🔱' },
  magicPen: { label: 'Magic Pen', color: '#a855f7', icon: '💜' },
  lifeSteal: { label: 'Life Steal', color: '#22c55e', icon: '🩸' },
  abilityHaste: { label: 'Ability Haste', color: '#38bdf8', icon: '🔵' },
  moveSpeed: { label: 'Bonus Move Speed', color: '#c89b3c', icon: '💨' },
}

const CATEGORY_COLORS = {
  Physical: '#f97316',
  Magic: '#8b5cf6',
  Defense: '#22c55e',
  Support: '#ec4899',
  Boots: '#c89b3c',
}

const MAX_ITEMS = 6

export default function BuildCalculator() {
  const [selectedItems, setSelectedItems] = React.useState([])
  const [activeCategory, setActiveCategory] = React.useState('All')
  const [search, setSearch] = React.useState('')

  const addItem = (item) => {
    if (selectedItems.length >= MAX_ITEMS) return
    if (selectedItems.find(i => i.name === item.name)) return
    setSelectedItems([...selectedItems, item])
  }

  const removeItem = (index) => {
    setSelectedItems(selectedItems.filter((_, i) => i !== index))
  }

  const clearBuild = () => setSelectedItems([])

  const totalStats = selectedItems.reduce((acc, item) => {
    Object.entries(item.stats).forEach(([key, val]) => {
      acc[key] = (acc[key] || 0) + val
    })
    return acc
  }, {})

  const totalCost = selectedItems.reduce((acc, item) => acc + item.cost, 0)

  const filteredItems = ALL_ITEMS.filter(item => {
    const matchCat = activeCategory === 'All' || item.category === activeCategory
    const matchSearch = item.name.toLowerCase().includes(search.toLowerCase())
    return matchCat && matchSearch
  })

  const categories = ['All', 'Physical', 'Magic', 'Defense', 'Support', 'Boots']

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
          Build Calculator
        </h1>
        <p style={{ color: '#7a8fa6', fontSize: '14px' }}>
          Pick up to 6 items and see your total stats and gold cost instantly
        </p>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 340px', gap: '24px' }}>

        {/* Left — Item picker */}
        <div>
          {/* Search + filters */}
          <div style={{ display: 'flex', gap: '10px', marginBottom: '16px', flexWrap: 'wrap' }}>
            <input
              placeholder="Search items..."
              value={search}
              onChange={e => setSearch(e.target.value)}
              style={{
                background: '#161b22', border: '1px solid #2a3548',
                borderRadius: '8px', padding: '8px 14px',
                color: '#e2e8f0', fontSize: '13px', width: '200px', outline: 'none',
              }}
            />
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                style={{
                  background: activeCategory === cat ? (CATEGORY_COLORS[cat] || '#c89b3c') : 'transparent',
                  border: `1px solid ${activeCategory === cat ? (CATEGORY_COLORS[cat] || '#c89b3c') : '#2a3548'}`,
                  borderRadius: '20px',
                  color: activeCategory === cat ? '#000' : '#7a8fa6',
                  fontSize: '11px', fontWeight: 700,
                  textTransform: 'uppercase', letterSpacing: '0.5px',
                  padding: '6px 14px', cursor: 'pointer', transition: 'all .15s',
                }}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Items grid */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(56px, 1fr))',
            gap: '8px',
          }}>
            {filteredItems.map((item, i) => {
              const isSelected = selectedItems.find(s => s.name === item.name)
              const isFull = selectedItems.length >= MAX_ITEMS
              return (
                <div
                  key={i}
                  onClick={() => !isSelected && !isFull && addItem(item)}
                  title={`${item.name} — ${item.cost}g`}
                  style={{
                    width: '56px', height: '56px',
                    background: isSelected ? '#232d3f' : '#161b22',
                    border: `2px solid ${isSelected ? '#c89b3c' : '#2a3548'}`,
                    borderRadius: '8px', overflow: 'hidden',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    cursor: isSelected || isFull ? 'not-allowed' : 'pointer',
                    opacity: isSelected ? 0.4 : isFull ? 0.5 : 1,
                    transition: 'all .15s', position: 'relative',
                  }}
                  onMouseEnter={e => {
                    if (!isSelected && !isFull) {
                      e.currentTarget.style.borderColor = '#c89b3c'
                      e.currentTarget.style.transform = 'scale(1.1)'
                    }
                  }}
                  onMouseLeave={e => {
                    if (!isSelected) e.currentTarget.style.borderColor = '#2a3548'
                    e.currentTarget.style.transform = 'scale(1)'
                  }}
                >
                  {ITEM_IMAGES[item.name] ? (
                    <img
                      src={ITEM_IMAGES[item.name]}
                      alt={item.name}
                      style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                      onError={e => { e.target.style.display = 'none'; e.target.parentNode.innerHTML = '⚔️' }}
                    />
                  ) : <span style={{ fontSize: '22px' }}>⚔️</span>}
                </div>
              )
            })}
          </div>
        </div>

        {/* Right — Build panel */}
        <div>
          {/* Selected items */}
          <div style={{
            background: '#161b22', border: '1px solid #2a3548',
            borderRadius: '12px', padding: '20px', marginBottom: '16px',
          }}>
            <div style={{
              display: 'flex', justifyContent: 'space-between',
              alignItems: 'center', marginBottom: '16px',
            }}>
              <span style={{ fontSize: '11px', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '1.5px', color: '#c89b3c' }}>
                Your Build ({selectedItems.length}/{MAX_ITEMS})
              </span>
              {selectedItems.length > 0 && (
                <button
                  onClick={clearBuild}
                  style={{
                    background: 'none', border: '1px solid #2a3548',
                    borderRadius: '6px', color: '#7a8fa6',
                    fontSize: '11px', padding: '4px 10px', cursor: 'pointer',
                  }}
                >
                  Clear
                </button>
              )}
            </div>

            {/* 6 slots */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '8px', marginBottom: '16px' }}>
              {Array.from({ length: MAX_ITEMS }).map((_, i) => {
                const item = selectedItems[i]
                return (
                  <div
                    key={i}
                    onClick={() => item && removeItem(i)}
                    title={item ? `Remove ${item.name}` : 'Empty slot'}
                    style={{
                      width: '100%', aspectRatio: '1',
                      background: item ? '#232d3f' : '#0d1117',
                      border: `2px dashed ${item ? '#c89b3c' : '#2a3548'}`,
                      borderRadius: '8px', overflow: 'hidden',
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                      cursor: item ? 'pointer' : 'default',
                      position: 'relative',
                    }}
                    onMouseEnter={e => { if (item) e.currentTarget.style.borderColor = '#ef4444' }}
                    onMouseLeave={e => { if (item) e.currentTarget.style.borderColor = '#c89b3c' }}
                  >
                    {item ? (
                      <>
                        {ITEM_IMAGES[item.name] ? (
                          <img
                            src={ITEM_IMAGES[item.name]}
                            alt={item.name}
                            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                            onError={e => { e.target.style.display = 'none' }}
                          />
                        ) : <span style={{ fontSize: '26px' }}>⚔️</span>}
                      </>
                    ) : (
                      <span style={{ fontSize: '20px', color: '#2a3548' }}>+</span>
                    )}
                  </div>
                )
              })}
            </div>

            {/* Item names */}
            {selectedItems.length > 0 && (
              <div style={{ display: 'flex', flexDirection: 'column', gap: '6px', marginBottom: '16px' }}>
                {selectedItems.map((item, i) => (
                  <div key={i} style={{
                    display: 'flex', justifyContent: 'space-between',
                    alignItems: 'center', fontSize: '12px',
                  }}>
                    <span style={{ color: '#e2e8f0' }}>{item.name}</span>
                    <span style={{ color: '#c89b3c', fontWeight: 700 }}>
                      {item.cost.toLocaleString()}g
                    </span>
                  </div>
                ))}
              </div>
            )}

            {/* Total cost */}
            <div style={{
              display: 'flex', justifyContent: 'space-between',
              alignItems: 'center',
              borderTop: '1px solid #2a3548', paddingTop: '12px',
            }}>
              <span style={{ fontSize: '13px', fontWeight: 700, color: '#fff' }}>Total Cost</span>
              <span style={{
                fontSize: '18px', fontWeight: 700,
                color: totalCost > 15000 ? '#ef4444' : totalCost > 10000 ? '#f97316' : '#22c55e',
              }}>
                {totalCost.toLocaleString()}g
              </span>
            </div>
          </div>

          {/* Total stats */}
          {selectedItems.length > 0 && (
            <div style={{
              background: '#161b22', border: '1px solid #2a3548',
              borderRadius: '12px', padding: '20px',
            }}>
              <div style={{
                fontSize: '11px', fontWeight: 700,
                textTransform: 'uppercase', letterSpacing: '1.5px',
                color: '#c89b3c', marginBottom: '16px',
                borderBottom: '1px solid #2a3548', paddingBottom: '10px',
              }}>
                Total Stats
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                {Object.entries(totalStats).map(([key, val]) => {
                  const statInfo = STAT_LABELS[key]
                  if (!statInfo) return null
                  return (
                    <div key={key} style={{
                      display: 'flex', justifyContent: 'space-between',
                      alignItems: 'center',
                    }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                        <span style={{ fontSize: '16px' }}>{statInfo.icon}</span>
                        <span style={{ fontSize: '12px', color: '#7a8fa6' }}>{statInfo.label}</span>
                      </div>
                      <span style={{
                        fontSize: '14px', fontWeight: 700,
                        color: statInfo.color,
                      }}>
                        +{val}{key === 'crit' || key === 'armorPen' || key === 'lifeSteal' || key === 'as' || key === 'magicPen' ? '%' : ''}
                      </span>
                    </div>
                  )
                })}
              </div>
            </div>
          )}

          {selectedItems.length === 0 && (
            <div style={{
              background: '#161b22', border: '1px solid #2a3548',
              borderRadius: '12px', padding: '40px 20px',
              textAlign: 'center',
            }}>
              <div style={{ fontSize: '40px', marginBottom: '12px' }}>⚔️</div>
              <div style={{ color: '#7a8fa6', fontSize: '13px' }}>
                Click items on the left to add them to your build
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

// Need React for useState
import React from 'react'