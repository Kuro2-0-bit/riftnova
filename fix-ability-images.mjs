/**
 * fix-ability-images.mjs
 *
 * Run once with: node fix-ability-images.mjs
 *
 * Fetches the correct passive + spell image filenames from DDragon for every
 * champion in your ABILITY_MAP, then writes a corrected abilityImages.js to
 * stdout (redirect to overwrite your file).
 *
 * Usage:
 *   node fix-ability-images.mjs > src/data/abilityImages.js
 */

// ─── Champion ID → DDragon champion key mapping ──────────────────────────────
// DDragon uses PascalCase keys, not kebab-case. Map your app IDs here.
const CHAMP_KEY_MAP = {
  'aatrox':       'Aatrox',
  'ahri':         'Ahri',
  'akali':        'Akali',
  'akshan':       'Akshan',
  'alistar':      'Alistar',
  'ambessa':      'Ambessa',
  'amumu':        'Amumu',
  'annie':        'Annie',
  'ashe':         'Ashe',
  'aurelion-sol': 'AurelionSol',
  'aurora':       'Aurora',
  'bard':         'Bard',
  'blitzcrank':   'Blitzcrank',
  'brand':        'Brand',
  'braum':        'Braum',
  'caitlyn':      'Caitlyn',
  'camille':      'Camille',
  'corki':        'Corki',
  'darius':       'Darius',
  'diana':        'Diana',
  'dr-mundo':     'DrMundo',
  'draven':       'Draven',
  'ekko':         'Ekko',
  'evelynn':      'Evelynn',
  'ezreal':       'Ezreal',
  'fiddlesticks': 'Fiddlesticks',
  'fiora':        'Fiora',
  'fizz':         'Fizz',
  'galio':        'Galio',
  'garen':        'Garen',
  'gnar':         'Gnar',
  'gragas':       'Gragas',
  'graves':       'Graves',
  'gwen':         'Gwen',
  'hecarim':      'Hecarim',
  'heimerdinger': 'Heimerdinger',
  'irelia':       'Irelia',
  'janna':        'Janna',
  'jarvan-iv':    'JarvanIV',
  'jax':          'Jax',
  'jayce':        'Jayce',
  'jhin':         'Jhin',
  'jinx':         'Jinx',
  'kaisa':        'Kaisa',
  'kalista':      'Kalista',
  'karma':        'Karma',
  'kassadin':     'Kassadin',
  'katarina':     'Katarina',
  'kayle':        'Kayle',
  'kayn':         'Kayn',
  'kennen':       'Kennen',
  'khazix':       'Khazix',
  'kindred':      'Kindred',
  'kogmaw':       'KogMaw',
  'ksante':       'KSante',
  'lee-sin':      'LeeSin',
  'leona':        'Leona',
  'lillia':       'Lillia',
  'lissandra':    'Lissandra',
  'lucian':       'Lucian',
  'lulu':         'Lulu',
  'lux':          'Lux',
  'malphite':     'Malphite',
  'maokai':       'Maokai',
  'master-yi':    'MasterYi',
  'mel':          'Mel',
  'milio':        'Milio',
  'miss-fortune': 'MissFortune',
  'mordekaiser':  'Mordekaiser',
  'morgana':      'Morgana',
  'nami':         'Nami',
  'nasus':        'Nasus',
  'nautilus':     'Nautilus',
  'nidalee':      'Nidalee',
  'nilah':        'Nilah',
  'nocturne':     'Nocturne',
  'nunu':         'Nunu',
  'olaf':         'Olaf',
  'orianna':      'Orianna',
  'ornn':         'Ornn',
  'pantheon':     'Pantheon',
  'poppy':        'Poppy',
  'pyke':         'Pyke',
  'rakan':        'Rakan',
  'rammus':       'Rammus',
  'rell':         'Rell',
  'renekton':     'Renekton',
  'rengar':       'Rengar',
  'riven':        'Riven',
  'rumble':       'Rumble',
  'ryze':         'Ryze',
  'samira':       'Samira',
  'senna':        'Senna',
  'seraphine':    'Seraphine',
  'sett':         'Sett',
  'shen':         'Shen',
  'shyvana':      'Shyvana',
  'singed':       'Singed',
  'sion':         'Sion',
  'sivir':        'Sivir',
  'skarner':      'Skarner',
  'smolder':      'Smolder',
  'sona':         'Sona',
  'soraka':       'Soraka',
  'swain':        'Swain',
  'syndra':       'Syndra',
  'taliyah':      'Taliyah',
  'talon':        'Talon',
  'teemo':        'Teemo',
  'thresh':       'Thresh',
  'tristana':     'Tristana',
  'tryndamere':   'Tryndamere',
  'twisted-fate': 'TwistedFate',
  'twitch':       'Twitch',
  'urgot':        'Urgot',
  'varus':        'Varus',
  'vayne':        'Vayne',
  'veigar':       'Veigar',
  'velkoz':       'Velkoz',
  'vex':          'Vex',
  'vi':           'Vi',
  'viego':        'Viego',
  'viktor':       'Viktor',
  'vladimir':     'Vladimir',
  'volibear':     'Volibear',
  'warwick':      'Warwick',
  'wukong':       'MonkeyKing',
  'xayah':        'Xayah',
  'xin-zhao':     'XinZhao',
  'yasuo':        'Yasuo',
  'yone':         'Yone',
  'yuumi':        'Yuumi',
  'zed':          'Zed',
  'zeri':         'Zeri',
  'ziggs':        'Ziggs',
  'zilean':       'Zilean',
  'zoe':          'Zoe',
  'zyra':         'Zyra',
}

// Champions that don't exist in DDragon (Wild Rift exclusives) — keep as-is
const MANUAL_OVERRIDES = {
  'norra': {
    P: 'https://www.wildriftfire.com/images/abilities/norra-beloved-trinkets.png',
    Q: 'https://www.wildriftfire.com/images/abilities/norra-memory-surge.png',
    W: 'https://www.wildriftfire.com/images/abilities/norra-journey-to-nowhere.png',
    E: 'https://www.wildriftfire.com/images/abilities/norra-threads-of-homecoming.png',
    R: 'https://www.wildriftfire.com/images/abilities/norra-portalpalooza.png',
  },
}

async function getLatestVersion() {
  const res = await fetch('https://ddragon.leagueoflegends.com/api/versions.json')
  const versions = await res.json()
  return versions[0] // always the latest
}

async function getChampionData(version, ddKey) {
  const url = `https://ddragon.leagueoflegends.com/cdn/${version}/data/en_US/champion/${ddKey}.json`
  const res = await fetch(url)
  if (!res.ok) throw new Error(`404 for ${ddKey}: ${url}`)
  const json = await res.json()
  return json.data[ddKey]
}

// Strip .png from DDragon filenames (your getAbilityImage adds it back)
const strip = (filename) => filename.replace(/\.png$/i, '')

async function main() {
  process.stderr.write('Fetching latest DDragon version...\n')
  const version = await getLatestVersion()
  process.stderr.write(`Using version: ${version}\n\n`)

  const result = {}
  const errors = []

  const champIds = Object.keys(CHAMP_KEY_MAP)

  for (const champId of champIds) {
    if (MANUAL_OVERRIDES[champId]) {
      result[champId] = MANUAL_OVERRIDES[champId]
      process.stderr.write(`  [manual] ${champId}\n`)
      continue
    }

    const ddKey = CHAMP_KEY_MAP[champId]
    try {
      const data = await getChampionData(version, ddKey)

      const passiveFile = strip(data.passive.image.full)
      const spells = data.spells.map(s => strip(s.image.full))
      // spells order in DDragon is always Q, W, E, R
      const [Q, W, E, R] = spells

      result[champId] = { P: passiveFile, Q, W, E, R }
      process.stderr.write(`  [ok] ${champId} → passive: ${passiveFile}\n`)
    } catch (err) {
      errors.push({ champId, ddKey, err: err.message })
      process.stderr.write(`  [ERR] ${champId} (${ddKey}): ${err.message}\n`)
    }

    // Small delay to avoid hammering DDragon
    await new Promise(r => setTimeout(r, 60))
  }

  if (errors.length) {
    process.stderr.write(`\n⚠️  ${errors.length} champion(s) failed — check manually:\n`)
    errors.forEach(e => process.stderr.write(`   ${e.champId} → ${e.ddKey}: ${e.err}\n`))
  }

  // ── Output corrected abilityImages.js ──────────────────────────────────────
  const lines = [
    `const DD = 'https://ddragon.leagueoflegends.com/cdn/${version}/img/spell'`,
    `const PASSIVE = 'https://ddragon.leagueoflegends.com/cdn/${version}/img/passive'`,
    '',
    '// Auto-generated by fix-ability-images.mjs — do not edit by hand',
    'const ABILITY_MAP = {',
  ]

  for (const [champId, map] of Object.entries(result)) {
    const isManual = MANUAL_OVERRIDES[champId]
    if (isManual) {
      // Keep manual entries with full URLs
      const vals = Object.entries(map)
        .map(([k, v]) => `${k}:'${v}'`)
        .join(', ')
      lines.push(`  '${champId}': { ${vals} },`)
    } else {
      lines.push(
        `  '${champId}': { P:'${map.P}', Q:'${map.Q}', W:'${map.W}', E:'${map.E}', R:'${map.R}' },`
      )
    }
  }

  lines.push('}')
  lines.push('')
  lines.push('export const getAbilityImage = (champId, key) => {')
  lines.push('  const champ = ABILITY_MAP[champId]')
  lines.push('  if (!champ) return null')
  lines.push('  const spellKey = champ[key]')
  lines.push('  if (!spellKey) return null')
  lines.push('  if (spellKey.startsWith(\'http\')) return spellKey')
  lines.push('  if (key === \'P\') return `${PASSIVE}/${spellKey}.png`')
  lines.push('  return `${DD}/${spellKey}.png`')
  lines.push('}')

  process.stdout.write(lines.join('\n') + '\n')
  process.stderr.write('\nDone! Pipe stdout to your abilityImages.js file.\n')
}

main().catch(err => {
  process.stderr.write(`Fatal: ${err.message}\n`)
  process.exit(1)
})
