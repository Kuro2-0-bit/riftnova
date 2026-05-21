// Patch notes for each champion - Buffs, Nerfs, Adjustments
// Format: { patch, type: 'buff'|'nerf'|'adjust'|'rework', changes: [] }

export const CHAMPION_PATCH_NOTES = {
  'zed': [
    {
      patch: '7.1e', type: 'buff',
      changes: ['Living Shadow (W): Shadow now dashes to target location faster','Razor Shuriken (Q): Damage increased from 70/115/160/205 to 80/125/170/215']
    },
    {
      patch: '6.3c', type: 'buff',
      changes: ['Razor Shuriken (Q): Bonus Attack Damage ratio increased','Death Mark (R): Cooldown reduced from 100/80/60s to 80/65/50s']
    },
    {
      patch: '6.1b', type: 'nerf',
      changes: ['Living Shadow (W): Cooldown increased from 18/16/14/12s to 20/18/16/14s']
    },
  ],
  'ahri': [
    {
      patch: '7.1c', type: 'buff',
      changes: ['Essence Theft (P): Healing increased from 3/5/9/18 to 4/6/10/20','Orb of Deception (Q): Mana cost reduced from 65 to 55']
    },
    {
      patch: '7.0d', type: 'nerf',
      changes: ['Spirit Rush (R): Cooldown increased from 110/95/80s to 120/100/80s']
    },
    {
      patch: '6.3a', type: 'adjust',
      changes: ['Charm (E): Damage adjusted. Now deals magic damage instead of true damage on return']
    },
  ],
  'darius': [
    {
      patch: '7.1b', type: 'nerf',
      changes: ['Hemorrhage (P): Max stack damage reduced from 13-39 to 11-35 per second','Decimate (Q): Healing from blade hits reduced from 15% to 12% of missing health']
    },
    {
      patch: '7.0c', type: 'buff',
      changes: ['Noxian Guillotine (R): True damage increased at all ranks']
    },
  ],
  'akali': [
    {
      patch: '7.1d', type: 'nerf',
      changes: ['Twilight Shroud (W): Duration reduced from 5s to 4s','Five Point Strike (Q): Energy cost increased from 120 to 130 at rank 1']
    },
    {
      patch: '7.0f', type: 'buff',
      changes: ['Perfect Execution (R): Second dash damage increased from 85/200/315 to 95/225/355']
    },
    {
      patch: '6.3e', type: 'adjust',
      changes: ['Shuriken Flip (E): Cooldown adjusted to be more consistent across ranks']
    },
  ],
  'jinx': [
    {
      patch: '7.1e', type: 'nerf',
      changes: ['Fishbones (Q): Mana cost per shot increased from 16/14/12/10 to 20/18/16/14','Super Mega Death Rocket (R): Base damage reduced from 250/350/450 to 200/300/400']
    },
    {
      patch: '7.0b', type: 'buff',
      changes: ['Get Excited! (P): Movement speed bonus increased from 175% to 200%']
    },
  ],
  'kaisa': [
    {
      patch: '7.1d', type: 'nerf',
      changes: ['Icathian Rain (Q): Damage per missile reduced from 40/55/70/85 to 35/50/65/80','Killer Instinct (R): Shield amount reduced by 10% at all ranks']
    },
    {
      patch: '7.0e', type: 'buff',
      changes: ['Supercharge (E): Evolved invisibility duration increased from 0.5s to 0.75s']
    },
  ],
  'thresh': [
    {
      patch: '7.1b', type: 'adjust',
      changes: ['Death Sentence (Q): Hook speed slightly increased','Flay (E): Passive damage growth rate adjusted']
    },
    {
      patch: '7.0a', type: 'buff',
      changes: ['Dark Passage (W): Lantern shield amount increased from 60/100/140/180 to 80/120/160/200']
    },
  ],
  'leona': [
    {
      patch: '7.1c', type: 'nerf',
      changes: ['Eclipse (W): Duration reduced from 3s to 2.5s','Zenith Blade (E): Root duration reduced from 0.5s to 0.35s']
    },
    {
      patch: '7.0d', type: 'buff',
      changes: ['Solar Flare (R): Outer ring slow increased from 70% to 80%']
    },
  ],
  'nautilus': [
    {
      patch: '7.1e', type: 'nerf',
      changes: ['Depth Charge (R): Cooldown increased from 100/80/60s to 120/90/60s','Titan\'s Wrath (W): Shield amount reduced by 15%']
    },
    {
      patch: '7.0c', type: 'buff',
      changes: ['Dredge Line (Q): Cooldown reduced from 14/13/12/11s to 12/11/10/9s']
    },
  ],
  'lux': [
    {
      patch: '7.1a', type: 'buff',
      changes: ['Final Spark (R): Cooldown reduced from 60/50/40s to 50/40/30s','Lucent Singularity (E): Slow increased from 25% to 30%']
    },
    {
      patch: '6.3f', type: 'nerf',
      changes: ['Light Binding (Q): Root duration reduced from 2/2.25/2.5/2.75s to 1.75/2/2.25/2.5s']
    },
  ],
  'lee-sin': [
    {
      patch: '7.1b', type: 'buff',
      changes: ['Sonic Wave (Q): Damage increased from 50/75/100/125 to 60/90/120/150','Safeguard (W): Shield duration increased from 2s to 2.5s']
    },
    {
      patch: '7.0f', type: 'nerf',
      changes: ['Dragon\'s Rage (R): Cooldown increased from 90/75/60s to 100/80/60s']
    },
  ],
  'miss-fortune': [
    {
      patch: '7.1e', type: 'nerf',
      changes: ['Bullet Time (R): Damage per wave reduced from 55/85/115 to 45/75/105','Strut (W): Passive move speed reduced from 30 to 25']
    },
    {
      patch: '7.0d', type: 'buff',
      changes: ['Double Up (Q): Cooldown reduced from 7/6.5/6/5.5s to 6/5.5/5/4.5s']
    },
  ],
  'draven': [
    {
      patch: '7.1c', type: 'adjust',
      changes: ['Spinning Axe (Q): Catch radius slightly increased for better feel','League of Draven (P): Adoration stack gain adjusted']
    },
    {
      patch: '7.0a', type: 'nerf',
      changes: ['Whirling Death (R): Damage per target reduced from 175/275/375 to 155/250/345']
    },
  ],
  'evelynn': [
    {
      patch: '7.1d', type: 'nerf',
      changes: ['Last Caress (R): Execute threshold reduced from 35% to 30% health','Allure (W): Charm duration reduced from 1.25s to 1s at rank 1']
    },
    {
      patch: '7.0e', type: 'buff',
      changes: ['Hate Spike (Q): Energy cost reduced from 25 to 20 per spike']
    },
  ],
  'yasuo': [
    {
      patch: '7.1b', type: 'adjust',
      changes: ['Steel Tempest (Q): Animation speed adjusted for smoother gameplay','Wind Wall (W): Duration adjusted from 3.75s to 4s']
    },
    {
      patch: '6.3d', type: 'nerf',
      changes: ['Last Breath (R): Armor penetration duration reduced from 15s to 12s']
    },
  ],
  'viego': [
    {
      patch: '7.1a', type: 'nerf',
      changes: ['Sovereign\'s Domination (R): Possession duration reduced from 10s to 8s','Heartbreaker (R): Damage reduced by 10% at all ranks']
    },
    {
      patch: '7.0c', type: 'buff',
      changes: ['Blade of the Ruined King (Q): Passive healing increased from 15% to 18%']
    },
  ],
  'katarina': [
    {
      patch: '7.1c', type: 'buff',
      changes: ['Death Lotus (R): Can now dodge 3 basic attacks while channeling','Shunpo (E): Cooldown reduced from 14/12.5/11/9.5s to 12/10.5/9/7.5s']
    },
    {
      patch: '7.0b', type: 'nerf',
      changes: ['Bouncing Blade (Q): Damage reduced from 75/105/135/165 to 65/90/115/140']
    },
  ],
  'fizz': [
    {
      patch: '7.1e', type: 'buff',
      changes: ['Chum the Waters (R): Shark size increased at all ranks dealing more AoE damage','Urchin Strike (Q): Cooldown reduced from 10/9/8/7s to 8/7.5/7/6.5s']
    },
    {
      patch: '7.0d', type: 'nerf',
      changes: ['Seastone Trident (W): Magic damage on hit reduced by 10 at all ranks']
    },
  ],
  'malphite': [
    {
      patch: '7.1b', type: 'buff',
      changes: ['Granite Shield (P): Shield recharge time reduced from 10s to 8s','Ground Slam (E): Armor ratio increased from 30% to 40%']
    },
    {
      patch: '7.0a', type: 'adjust',
      changes: ['Unstoppable Force (R): Knockup duration slightly adjusted based on rank']
    },
  ],
  'morgana': [
    {
      patch: '7.1d', type: 'buff',
      changes: ['Dark Binding (Q): Root duration increased from 2/2.25/2.5/2.75s to 2.25/2.5/2.75/3s','Tormented Shadow (W): Damage per second increased by 10 at all ranks']
    },
    {
      patch: '6.3b', type: 'nerf',
      changes: ['Soul Shackles (R): Stun duration reduced from 1.5s to 1.25s']
    },
  ],
  'kayn': [
    {
      patch: '7.1e', type: 'buff',
      changes: ['The Darkin Scythe (P): Shadow Assassin bonus damage ratio increased from 48%~62% to 52%~66% (based on level)','Blade\'s Reach (W): Bonus Attack Damage scaling increased from 110% to 120%']
    },
    {
      patch: '7.1c', type: 'buff',
      changes: ['Reaping Slash (Q): Cooldown reduced from 7s to 6s','Shadow Step (E): Wall duration increased from 1s to 1.5s']
    },
    {
      patch: '7.0e', type: 'nerf',
      changes: ['Umbral Trespass (R): Rhaast healing reduced from 70% to 60% of damage dealt']
    },
  ],
  'vex': [
    {
      patch: '7.1a', type: 'buff',
      changes: ['Mistral Bolt (Q): Damage increased from 60/100/140/180 to 70/115/160/205','Shadow Surge (R): Cooldown reduced at all ranks']
    },
    {
      patch: '7.0c', type: 'nerf',
      changes: ['Personal Space (W): Shield amount reduced by 10%']
    },
  ],
  'rengar': [
    {
      patch: '7.1b', type: 'buff',
      changes: ['Savagery (Q): Empowered version attack speed bonus increased from 40% to 55%','Battle Roar (W): Empowered heal increased from 40/70/100/130 to 55/90/125/160']
    },
    {
      patch: '7.0f', type: 'nerf',
      changes: ['Thrill of the Hunt (R): Stealth delay before entering increased from 1s to 1.5s']
    },
  ],
  'samira': [
    {
      patch: '7.1e', type: 'nerf',
      changes: ['Inferno Trigger (R): Damage per shot reduced from 55/80/105 to 45/70/95','Daredevil Impulse (P): Style grade requirements adjusted']
    },
    {
      patch: '7.0b', type: 'buff',
      changes: ['Wild Rush (E): Cooldown on kill reset improved']
    },
  ],
  'tristana': [
    {
      patch: '7.1d', type: 'buff',
      changes: ['Explosive Charge (E): Explosion damage after killing a unit increased from 55/85/115/145 to 65/100/135/170, improving early wave clear']
    },
    {
      patch: '7.1c', type: 'buff',
      changes: ['Explosive Charge (E): Max stacks damage increased from 120/175/230/285 to 140/200/260/320','Rocket Jump (W): Reset on assist now also works on objectives']
    },
    {
      patch: '7.0d', type: 'nerf',
      changes: ['Buster Shot (R): Knockback distance reduced from 800 to 700 units']
    },
  ],
  'irelia': [
    {
      patch: '7.1d', type: 'nerf',
      changes: ['Bladesurge (Q): Damage reduced from 20/45/70/95 to 15/38/61/84','Ionian Fervor (P): Bonus damage per stack reduced from 14-30 to 12-26']
    },
    {
      patch: '7.0a', type: 'buff',
      changes: ['Flawless Duet (E): Stun duration increased from 1.25s to 1.5s']
    },
  ],
  'camille': [
    {
      patch: '7.1b', type: 'adjust',
      changes: ['Hookshot (E): Can now target smaller terrain more consistently','The Hextech Ultimatum (R): Zone size adjusted for better visual clarity']
    },
    {
      patch: '6.3f', type: 'buff',
      changes: ['Precision Protocol (Q): Second hit AD ratio increased from 55% to 65%']
    },
  ],
  'fiora': [
    {
      patch: '7.1a', type: 'nerf',
      changes: ['Grand Challenge (R): Heal on completing all Vitals reduced from 80/120/160 to 60/100/140','Lunge (Q): Cooldown increased from 13/11/9/7s to 14/12/10/8s at all ranks']
    },
    {
      patch: '7.0e', type: 'buff',
      changes: ['Riposte (W): Window to activate parry increased by 0.1 seconds']
    },
  ],
  'riven': [
    {
      patch: '7.1d', type: 'nerf',
      changes: ['Runic Blade (P): Bonus damage ratio reduced from 32%~60% to 22%~50% (based on level) to tone down lane burst', 'Runic Blade (P): Damage ratio vs jungle monsters increased from 50% to 65% to preserve clear']
    },
    {
      patch: '7.1c', type: 'buff',
      changes: ['Broken Wings (Q): Third hit knockup duration increased from 0.75s to 1s','Wind Slash (R): Execute threshold increased from 25% to 33% health']
    },
    {
      patch: '7.0b', type: 'nerf',
      changes: ['Valor (E): Shield amount reduced from 60/100/140/180 to 50/85/120/155']
    },
  ],
  'aurelion-sol': [
    {
      patch: '7.1e', type: 'nerf',
      changes: ['The Skies Descend (R enhanced): Stun duration reduced from 1.5s to 1.25s','Breath of Light (Q): Maximum damage cap reduced at high Stardust']
    },
    {
      patch: '7.0d', type: 'buff',
      changes: ['Singularity (E): Stardust gain per kill inside increased from 1 to 2']
    },
  ],
  'norra': [
    {
      patch: '7.1e', type: 'new',
      changes: ['Norra joins the Rift! Wild Rift\'s very first original champion','Portalpalooza (R): New ultimate dealing AoE magic damage','Journey to Nowhere (W): Unique banishment mechanic removes enemies from play briefly']
    },
  ],
  'diana': [
    {
      patch: '7.1b', type: 'buff',
      changes: ['Lunar Rush (E): Cooldown on Moonlight targets reduced from 0.5s to 0s','Pale Cascade (W): Shield amount increased from 40/70/100/130 to 55/90/125/160']
    },
    {
      patch: '7.0c', type: 'nerf',
      changes: ['Moonfall (R): Pull radius reduced from 450 to 375 units']
    },
  ],
  'ekko': [
    {
      patch: '7.1d', type: 'buff',
      changes: ['Chronobreak (R): Healing increased from 100/150/200 to 120/180/240 base','Phase Dive (E): Cooldown reduced from 9/8.5/8/7.5s to 8/7.5/7/6.5s']
    },
    {
      patch: '7.0e', type: 'nerf',
      changes: ['Timewinder (Q): Slow reduced from 32/39/46/53% to 25/32/39/46%']
    },
  ],
  'hecarim': [
    {
      patch: '7.1c', type: 'nerf',
      changes: ['Rampage (Q): Damage reduced from 60/100/140/180 to 52/88/124/160','Spirit of Dread (W): Healing reduced from 20% to 15% of damage dealt']
    },
    {
      patch: '7.0a', type: 'buff',
      changes: ['Devastating Charge (E): Movement speed cap increased from 75 to 100']
    },
  ],
  'graves': [
    {
      patch: '7.1e', type: 'buff',
      changes: ['End of the Line (Q): Bonus AD ratio of explosion increased from 80/110/140/170% to 110/130/150/170%, front-loading early-rank power','Quickdraw (E): Cooldown standardized from 16/15/14/13s to 13s at all ranks']
    },
    {
      patch: '7.1b', type: 'buff',
      changes: ['New Destiny (P): Reload time reduced from 2s to 1.75s','Collateral Damage (R): Explosion damage increased from 80/110/140 to 100/135/170']
    },
    {
      patch: '7.0d', type: 'nerf',
      changes: ['End of the Line (Q): Mana cost increased from 60 to 70']
    },
  ],
  'ksante': [
    {
      patch: '7.1', type: 'new',
      changes: ['K\'Sante joins the Rift on April 9th 2026!','All Out (R): Unique mechanic transforming from tank to fighter','Ntofo Strikes (Q): Three-hit stun pattern']
    },
  ],
  'mel': [
    {
      patch: '7.1d', type: 'nerf',
      changes: ['Radiant Volley (Q): Damage per explosion reduced from 13/16/19/22+7%AP to 11/14/17/20+6%AP (minion modifier increased 75%→90% to preserve waveclear)','Rebuttal (E): Cooldown increased from 32/29/26/23s to 38/36/34/32s, reducing reflect frequency']
    },
    {
      patch: '7.0d', type: 'new',
      changes: ['Mel joins the Rift!','Rebuttal (E): Unique projectile reflection mechanic','Radiant Field (R): Large AoE zoning ultimate']
    },
  ],
  'smolder': [
    {
      patch: '7.1e', type: 'adjust',
      changes: ['Super Scorcher Breath (Q): Stack thresholds for empowered effects increased from 20/85/150 to 25/100/175, delaying power spikes','Super Scorcher Breath (Q): Crit-based damage scaling changed from Crit Rate×50% to (Crit Rate + bonus Crit Damage)×45%']
    },
    {
      patch: '7.1a', type: 'nerf',
      changes: ['Super Scorcher Breath (Q): Damage reduced slightly at early stacks','Achooo! (W): Cooldown increased from 12s to 14s at rank 1']
    },
    {
      patch: '7.0', type: 'new',
      changes: ['Smolder joins the Rift January 22nd 2026!','Dragon Practice (P): Unique stacking mechanic upgrading abilities at 25 and 125 stacks','MMOOOMMMM! (R): Global healing ultimate']
    },
  ],
  'gwen': [
    {
      patch: '7.1b', type: 'buff',
      changes: ['Snip Snip! (Q): True damage in center increased from 8% to 10% of target\'s max health','Needlework (R): Slow per needle increased from 30% to 40%']
    },
    {
      patch: '7.0c', type: 'nerf',
      changes: ['Hallowed Mist (W): Duration reduced from 5s to 4s']
    },
  ],
  'volibear': [
    {
      patch: '7.1d', type: 'adjust',
      changes: ['Frenzied Maul (W): Bleed duration standardized across all ranks','The Relentless Storm (R): Turret disable window adjusted for clarity']
    },
    {
      patch: '7.0e', type: 'buff',
      changes: ['Thundering Smash (Q): Stun duration increased from 1s to 1.25s']
    },
  ],
  'nilah': [
    {
      patch: '7.1c', type: 'buff',
      changes: ['Formless Blade (Q): Whip range extended by 50 units','Apotheosis (R): Knockback range increased for better team play']
    },
    {
      patch: '7.0b', type: 'nerf',
      changes: ['Jubilant Veil (W): Dodge duration reduced from 0.75s to 0.6s']
    },
  ],
  'zeri': [
    {
      patch: '7.1d', type: 'buff',
      changes: ['Base Attack Damage per level increased from 3.5 to 4','Living Battery (Q): Attack Damage ratio improved from 104/108/112/116/120% to 105/110/115/120/125%','Spark Surge (E): Cooldown reduced from 24/21.5/19/16.5s to 22/19.5/17/14.5s']
    },
    {
      patch: '7.1a', type: 'adjust',
      changes: ['Burst Fire (Q): Damage distribution adjusted across charges','Lightning Crash (R): Stack gain per hit adjusted']
    },
    {
      patch: '7.0d', type: 'buff',
      changes: ['Ultrashock Laser (W): Wall laser range increased by 200 units']
    },
  ],
  'ambessa': [
    {
      patch: '7.1b', type: 'nerf',
      changes: ['Public Execution (R): Cooldown increased from 100/80/60s to 110/90/70s','Deathdance (E): Cooldown increased from 16s to 18s at rank 1']
    },
    {
      patch: '7.0f', type: 'buff',
      changes: ['Cunning Sweep (Q): Slow on second hit increased from 35% to 45%']
    },
  ],
  'taliyah': [
  {
    patch: '7.1e', type: 'new',
    changes: ['Taliyah joins the Rift on May 15 2026!','Mid lane battlemage with unparalleled map control','Weaver\'s Wall R splits the entire map giving global presence','Threaded Volley Q creates Worked Ground changing her combat pattern']
  },
],

  // ── Added from official 7.1d & 7.1e patch notes ───────────────────────────

  'vayne': [
    {
      patch: '7.1d', type: 'nerf',
      changes: ['Tumble (Q): Empowered attack duration reduced from 7s to 4s, making her harder to set up burst combos','Silver Bolts (W): True damage reduced from 3/6/9/12% to 2/5/8/11% of max health','Silver Bolts (W): Attack Speed reduced from 15/20/25/30% to 10/15/20/25%']
    },
  ],

  'urgot': [
    {
      patch: '7.1d', type: 'buff',
      changes: ['Base Attack Damage increased from 58 to 62, improving early last-hits and trades','Echoing Flames (P): Attack Damage ratio increased from 50/65/80/95% to 60/75/90/105%, adding more punch to leg cannon procs']
    },
  ],

  'vladimir': [
    {
      patch: '7.1d', type: 'buff',
      changes: ['Base Armor increased from 34 to 37, helping him survive AD matchups early','Crimson Pact (P): Ability Power to Bonus Health conversion ratio increased from 120% to 140%, boosting his AP-to-tank scaling']
    },
  ],

  'sivir': [
    {
      patch: '7.1d', type: 'buff',
      changes: ['Base Attack Damage per level increased from 3.5 to 4, improving her late-game basic attack damage','Boomerang Blade (Q): Attack Damage ratio increased from 70/75/80/85% to 75/80/85/90% on both hits, boosting waveclear and poke']
    },
  ],

  'garen': [
    {
      patch: '7.1e', type: 'nerf',
      changes: ['Perseverance (P): Health regeneration when out of combat reduced from 1.3%~5.5% to 1.2%~4% (based on level)','Judgement (E): Base damage per spin reduced from 15/19/23/27 to 13/17/21/25','Judgement (E): Armor Shred reduced from 15% to 10%, making him less oppressive against tanks']
    },
  ],

  'shyvana': [
    {
      patch: '7.1e', type: 'adjust',
      changes: ['Base Attack Damage increased from 58 to 62 (earlier power)', 'Fury of the Dragonborn (P): Stacks from large monsters reduced from 10 to 8 (slower dragon ramp)', 'Twin Bite (Q): Dragon form slow reduced from 50% to 30%', 'Dragon\'s Descent (R): Fury generated per second reduced from 1.5/2/2.5 to 1/1.5/2 (less time in dragon form)']
    },
  ],

  'ryze': [
    {
      patch: '7.1e', type: 'nerf',
      changes: ['Base Attack Damage reduced from 58 to 54','Overload (Q): Bonus Movement Speed after discharge reduced from 30/35/40/45% to 20/27.5/35/42.5%, reducing Phase Rush synergy','Overload (Q): Base damage reduced from 80/105/130/155 to 70/95/120/145']
    },
  ],

  'twisted-fate': [
    {
      patch: '7.1e', type: 'nerf',
      changes: ['Loaded Dice (P): Bonus gold per unit kill reduced from 2~12 to 1~9, slowing early snowball','Stacked Deck (E): Attack Speed when active reduced from 30/35/40/45% to 20/25/30/35%']
    },
  ],

  'bard': [
    {
      patch: '7.1e', type: 'buff',
      changes: ['Caretaker\'s Shrine (W): Charge time reduced at higher ranks from 15/15/15/15s to 15/14.5/14/13.5s','Tempered Fate (R): Cooldown reduced from 80/70/60s to 75/65/55s']
    },
  ],
}