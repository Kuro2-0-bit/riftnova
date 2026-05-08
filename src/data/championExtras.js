export const CHAMPION_EXTRAS = {
  'aatrox': {
    stats:{hp:650,mana:0,ad:62,armor:38,mr:32,as:0.651,moveSpeed:345,hpRegen:9,range:175},
    abilities:{
      P:{name:'Deathbringer Stance',desc:'Periodically empowers his next attack to deal bonus damage and heal himself.'},
      Q:{name:'The Darkin Blade',desc:'Slams his greatsword three times. The third slam knocks enemies into the air.'},
      W:{name:'Infernal Chains',desc:'Slams the ground sending a chain that slows and drags enemies to the center.'},
      E:{name:'Umbral Dash',desc:'Passively heals when dealing damage. Actively dashes in a direction during Q.'},
      R:{name:'World Ender',desc:'Transforms unleashing his true form. Gains movement speed and increased healing. Can revive on death.'},
    }
  },
  'ahri': {
    stats:{hp:570,mana:418,ad:52,armor:21,mr:30,as:0.668,moveSpeed:330,hpRegen:6,manaRegen:8,range:550},
    abilities:{
      P:{name:'Essence Theft',desc:'Gains stacks when hitting enemies with abilities. At max stacks her next ability heals her.'},
      Q:{name:'Orb of Deception',desc:'Throws an orb dealing magic damage on the way out and true damage on the way back.'},
      W:{name:'Fox-Fire',desc:'Summons three spectral flames that orbit and attack nearby enemies prioritizing champions.'},
      E:{name:'Charm',desc:'Blows a kiss that charms the first enemy hit causing them to walk harmlessly toward Ahri.'},
      R:{name:'Spirit Rush',desc:'Dashes forward dealing damage to nearby enemies. Can be cast up to three times.'},
    }
  },
  'akali': {
    stats:{hp:570,mana:0,ad:58,armor:23,mr:37,as:0.625,moveSpeed:345,hpRegen:9,range:175},
    abilities:{
      P:{name:'Assassin\'s Mark',desc:'Dealing damage with abilities creates a ring of energy. Crossing it empowers her next basic attack.'},
      Q:{name:'Five Point Strike',desc:'Throws five kunai dealing damage and slowing at max range. Heals when cast with full energy.'},
      W:{name:'Twilight Shroud',desc:'Creates a smoke cloud granting invisibility. Enemies cannot see her while inside.'},
      E:{name:'Shuriken Flip',desc:'Flips backward throwing a shuriken that marks the target. Can dash to the mark with a second cast.'},
      R:{name:'Perfect Execution',desc:'Two-part dash. First deals damage. Second deals massive damage based on target\'s missing health.'},
    }
  },
  'akshan': {
    stats:{hp:560,mana:350,ad:52,armor:24,mr:30,as:0.638,moveSpeed:330,hpRegen:7,manaRegen:7,range:500},
    abilities:{
      P:{name:'Dirty Fighting',desc:'Every third attack fires a bonus shot. Canceling it gives a burst of movement speed.'},
      Q:{name:'Avengerang',desc:'Throws a boomerang dealing damage and revealing enemies on the way out and back.'},
      W:{name:'Going Rogue',desc:'Marks enemies who kill allies as Scoundrels. Killing them revives the ally. Actively goes camouflaged near Scoundrels.'},
      E:{name:'Heroic Swing',desc:'Fires a hook to grapple around terrain shooting at nearby enemies. Re-cast to jump off.'},
      R:{name:'Comeuppance',desc:'Locks onto a target charging bullets dealing damage based on missing health.'},
    }
  },
  'alistar': {
    stats:{hp:724,mana:350,ad:62,armor:44,mr:32,as:0.625,moveSpeed:330,hpRegen:9,manaRegen:8,range:125},
    abilities:{
      P:{name:'Triumphant Roar',desc:'Generates stacks when nearby enemies are stunned or die. At max stacks heals himself and nearby allies.'},
      Q:{name:'Pulverize',desc:'Smashes the ground dealing damage and launching nearby enemies into the air.'},
      W:{name:'Headbutt',desc:'Dashes to an enemy dealing damage and knocking them back.'},
      E:{name:'Trample',desc:'Tramples nearby enemies over time. After enough damage his next attack stuns a champion.'},
      R:{name:'Unbreakable Will',desc:'Removes all crowd control effects and gains massive damage reduction for the duration.'},
    }
  },
  'ambessa': {
    stats:{hp:650,mana:0,ad:62,armor:38,mr:32,as:0.651,moveSpeed:345,hpRegen:9,range:175},
    abilities:{
      P:{name:'Warlord\'s Might',desc:'After casting an ability her next basic attack is empowered dealing bonus damage.'},
      Q:{name:'Cunning Sweep',desc:'Sweeps forward twice with her gauntlets dealing damage and slowing on the second hit.'},
      W:{name:'Silver Will',desc:'Dashes and becomes briefly untargetable. Re-cast to blink back to original position.'},
      E:{name:'Deathdance',desc:'Dashes through an enemy leaving a blade behind. Re-casting dashes back to the blade.'},
      R:{name:'Public Execution',desc:'Marks a target then dashes unleashing a series of rapid strikes dealing massive damage.'},
    }
  },
  'amumu': {
    stats:{hp:615,mana:287,ad:48,armor:33,mr:32,as:0.638,moveSpeed:330,hpRegen:9,manaRegen:7,range:125},
    abilities:{
      P:{name:'Cursed Touch',desc:'Attacks reduce enemy magic resistance briefly making them take more magic damage.'},
      Q:{name:'Bandage Toss',desc:'Throws a bandage that stuns the first enemy hit and pulls Amumu to them.'},
      W:{name:'Despair',desc:'Deals damage to nearby enemies each second based on their max health.'},
      E:{name:'Tantrum',desc:'Passively reduces physical damage taken. Actively deals damage to nearby enemies.'},
      R:{name:'Curse of the Sad Mummy',desc:'Entangles all nearby enemies in bandages dealing damage and stunning them.'},
    }
  },
  'annie': {
    stats:{hp:524,mana:418,ad:50,armor:21,mr:30,as:0.579,moveSpeed:330,hpRegen:6,manaRegen:8,range:625},
    abilities:{
      P:{name:'Pyromania',desc:'After casting four abilities her next damaging ability stuns the target.'},
      Q:{name:'Disintegrate',desc:'Launches a fireball dealing magic damage. Kills refund the mana cost and half the cooldown.'},
      W:{name:'Incinerate',desc:'Casts a cone of fire in front dealing magic damage to all enemies in the area.'},
      E:{name:'Molten Shield',desc:'Grants Annie or Tibbers a shield and movement speed. Attackers take magic damage back.'},
      R:{name:'Summon: Tibbers',desc:'Summons her bear Tibbers dealing damage on arrival. Tibbers attacks nearby enemies.'},
    }
  },
  'ashe': {
    stats:{hp:570,mana:280,ad:54,armor:26,mr:30,as:0.658,moveSpeed:325,hpRegen:6,manaRegen:7,range:600},
    abilities:{
      P:{name:'Frost Shot',desc:'Basic attacks slow enemies. Critical strikes apply a stronger slow instead of bonus damage.'},
      Q:{name:'Ranger\'s Focus',desc:'Stacks Focus on basic attacks. Activate to consume stacks and fire a flurry of arrows.'},
      W:{name:'Volley',desc:'Fires seven arrows in a cone dealing damage and slowing all enemies hit.'},
      E:{name:'Hawkshot',desc:'Sends out a hawk spirit that reveals terrain and provides vision as it travels.'},
      R:{name:'Enchanted Crystal Arrow',desc:'Fires a large arrow that stuns the first champion hit. The further it travels the longer the stun.'},
    }
  },
  'aurelion-sol': {
    stats:{hp:570,mana:350,ad:52,armor:21,mr:30,as:0.625,moveSpeed:335,hpRegen:7,manaRegen:8,range:550},
    abilities:{
      P:{name:'Cosmic Creator',desc:'Damaging enemies with abilities grants Stardust permanently upgrading his abilities.'},
      Q:{name:'Breath of Light',desc:'Channels a beam of starfire dealing magic damage each second. Stardust increases width and damage.'},
      W:{name:'Astral Flight',desc:'Flies in a direction and can use abilities while flying. Distance increases with Stardust.'},
      E:{name:'Singularity',desc:'Creates a black hole that slows pulls in and damages enemies. Stardust increases the size.'},
      R:{name:'Falling Star',desc:'Crashes a star into the ground dealing damage and stunning. Upgrades to The Skies Descend at max Stardust.'},
    }
  },
  'aurora': {
    stats:{hp:560,mana:400,ad:52,armor:22,mr:30,as:0.638,moveSpeed:335,hpRegen:7,manaRegen:8,range:550},
    abilities:{
      P:{name:'Spirit Abjuration',desc:'Damaging a champion three times summons a wisp granting movement speed and reducing the enemy\'s.'},
      Q:{name:'Twofold Hex',desc:'Launches a bolt of spirit magic that slows. Re-cast calls it back applying a mark to enemies hit twice.'},
      W:{name:'Across the Veil',desc:'Hops in a direction briefly entering the spirit realm becoming invisible.'},
      E:{name:'Ebb and Flow',desc:'Releases a burst bouncing between champions healing allies and damaging enemies.'},
      R:{name:'Between Worlds',desc:'Leaps to a location creating a spirit realm border. Enemies are slowed and she can hop through the border.'},
    }
  },
  'bard': {
    stats:{hp:570,mana:350,ad:52,armor:24,mr:30,as:0.625,moveSpeed:330,hpRegen:7,manaRegen:8,range:500},
    abilities:{
      P:{name:'Traveler\'s Call',desc:'Meeps appear near Bard and empower his next auto attack. Collecting chimes grants experience and more meeps.'},
      Q:{name:'Cosmic Binding',desc:'Fires a projectile that slows and stuns. If it hits a wall or second enemy both targets are stunned.'},
      W:{name:'Caretaker\'s Shrine',desc:'Creates health shrines that heal and speed up allies that walk over them.'},
      E:{name:'Magical Journey',desc:'Opens a portal through terrain that allies and enemies can use to travel quickly.'},
      R:{name:'Tempered Fate',desc:'Sends all targets in a large area into stasis freezing them briefly including allies and objectives.'},
    }
  },
  'blitzcrank': {
    stats:{hp:651,mana:267,ad:60,armor:38,mr:32,as:0.625,moveSpeed:325,hpRegen:9,manaRegen:7,range:125},
    abilities:{
      P:{name:'Mana Barrier',desc:'When health drops below 20% gains a magic damage shield based on his current mana.'},
      Q:{name:'Rocket Grab',desc:'Launches his hand forward grabbing the first enemy hit and pulling them to him.'},
      W:{name:'Overdrive',desc:'Supercharges himself gaining massive movement and attack speed briefly.'},
      E:{name:'Power Fist',desc:'Charges his fist to deal double damage and launch the target into the air on the next attack.'},
      R:{name:'Static Field',desc:'Passive lightning zaps nearby enemies periodically. Activating silences and damages nearby enemies.'},
    }
  },
  'brand': {
    stats:{hp:524,mana:418,ad:52,armor:22,mr:30,as:0.625,moveSpeed:330,hpRegen:6,manaRegen:8,range:550},
    abilities:{
      P:{name:'Blaze',desc:'Abilities set targets ablaze dealing damage over time. Three stacks causes a large explosion around the target.'},
      Q:{name:'Sear',desc:'Launches a fireball dealing damage. Stuns targets that are already ablaze.'},
      W:{name:'Pillar of Flame',desc:'Creates a column of fire dealing damage. Deals bonus damage to ablaze targets.'},
      E:{name:'Conflagration',desc:'Ignites nearby enemies dealing damage. Spreads Blaze to enemies near a blazing target.'},
      R:{name:'Pyroclasm',desc:'Unleashes a torrent of fire that bounces between nearby enemies prioritizing champions.'},
    }
  },
  'braum': {
    stats:{hp:651,mana:350,ad:58,armor:45,mr:32,as:0.625,moveSpeed:335,hpRegen:9,manaRegen:8,range:125},
    abilities:{
      P:{name:'Concussive Blows',desc:'After Braum hits an enemy allies can stack Concussive Blows with attacks. Four stacks stuns the target.'},
      Q:{name:'Winter\'s Bite',desc:'Propels freezing ice dealing damage and slowing the first enemy hit. Applies one stack of Concussive Blows.'},
      W:{name:'Stand Behind Me',desc:'Leaps to an allied champion or minion granting both of them armor and magic resistance.'},
      E:{name:'Unbreakable',desc:'Creates a barrier blocking and reducing all incoming projectiles for him and allies behind him.'},
      R:{name:'Glacial Fissure',desc:'Slams the ground sending out a fissure that knocks up enemies. Leaves a crevice that slows.'},
    }
  },
  'caitlyn': {
    stats:{hp:570,mana:315,ad:52,armor:24,mr:30,as:0.681,moveSpeed:325,hpRegen:6,manaRegen:7,range:650},
    abilities:{
      P:{name:'Headshot',desc:'Every few attacks or from brush Caitlyn charges a Headshot dealing bonus damage.'},
      Q:{name:'Piltover Peacemaker',desc:'Fires a narrow blast dealing full damage to the first enemy and reduced damage to those behind.'},
      W:{name:'Yordle Snap Trap',desc:'Places a trap that roots and marks enemies that step on it.'},
      E:{name:'90 Caliber Net',desc:'Fires a net knocking Caitlyn back and immobilizing the enemy hit briefly.'},
      R:{name:'Ace in the Hole',desc:'Fires a massive bullet at an enemy champion dealing massive damage. Nearby enemies can intercept it.'},
    }
  },
  'camille': {
    stats:{hp:615,mana:0,ad:60,armor:38,mr:32,as:0.638,moveSpeed:340,hpRegen:9,range:125},
    abilities:{
      P:{name:'Adaptive Defenses',desc:'Basic attacks on champions grant a shield against the dominant damage type that champion deals.'},
      Q:{name:'Precision Protocol',desc:'Empowers her next two attacks. The second deals bonus damage and grants movement speed.'},
      W:{name:'Tactical Sweep',desc:'Sweeps her leg in a cone. The outer half deals bonus damage and heals her.'},
      E:{name:'Hookshot',desc:'Grapples to a wall then leaps dealing damage and briefly stunning enemies she lands on.'},
      R:{name:'The Hextech Ultimatum',desc:'Leaps to an enemy champion trapping them in a zone. Enemies who leave the zone are slowed.'},
    }
  },
  'corki': {
    stats:{hp:570,mana:350,ad:52,armor:24,mr:30,as:0.638,moveSpeed:325,hpRegen:7,manaRegen:8,range:550},
    abilities:{
      P:{name:'Hextech Munitions',desc:'Basic attacks deal mixed damage. Periodically The Package appears granting a powerful dash ability.'},
      Q:{name:'Phosphorus Bomb',desc:'Drops a bomb dealing damage and revealing enemies in the area briefly.'},
      W:{name:'Valkyrie',desc:'Flies forward leaving a burning trail. Package version creates a larger explosion.'},
      E:{name:'Gatling Gun',desc:'Fires rapidly in front dealing damage and reducing enemy armor and magic resistance.'},
      R:{name:'Missile Barrage',desc:'Stores and fires missiles. Every third missile is a Big One dealing more damage in a larger area.'},
    }
  },
  'darius': {
    stats:{hp:651,mana:263,ad:64,armor:39,mr:32,as:0.625,moveSpeed:340,hpRegen:10,manaRegen:7,range:175},
    abilities:{
      P:{name:'Hemorrhage',desc:'Attacks and abilities cause bleeding dealing damage over time stacking up to five times.'},
      Q:{name:'Decimate',desc:'Swings his axe in a wide circle. The blade deals full damage and heals him per champion hit.'},
      W:{name:'Crippling Strike',desc:'His next attack deals bonus damage and slows the target.'},
      E:{name:'Apprehend',desc:'Passive grants armor penetration. Active pulls all enemies in front toward him.'},
      R:{name:'Noxian Guillotine',desc:'Leaps to an enemy dealing true damage. Executing a target refreshes the cooldown for a chain kill.'},
    }
  },
  'diana': {
    stats:{hp:610,mana:350,ad:55,armor:33,mr:32,as:0.625,moveSpeed:340,hpRegen:9,manaRegen:8,range:175},
    abilities:{
      P:{name:'Moonsilver Blade',desc:'Periodically her next attack deals bonus magic damage and creates a damaging arc behind the target.'},
      Q:{name:'Crescent Strike',desc:'Fires a curved bolt of lunar energy that damages and applies Moonlight to enemies hit.'},
      W:{name:'Pale Cascade',desc:'Creates three orbiting spheres that detonate on contact dealing damage and granting a shield.'},
      E:{name:'Lunar Rush',desc:'Dashes to an enemy dealing damage. No cooldown when dashing to Moonlight targets.'},
      R:{name:'Moonfall',desc:'Reveals and pulls in nearby enemies. If multiple enemies are pulled deals massive damage to all of them.'},
    }
  },
  'dr-mundo': {
    stats:{hp:651,mana:0,ad:62,armor:38,mr:32,as:0.625,moveSpeed:345,hpRegen:14,range:175},
    abilities:{
      P:{name:'Goes Where He Pleases',desc:'Resists the first immobilizing effect on a long cooldown. Passively regenerates health.'},
      Q:{name:'Infected Bonesaw',desc:'Throws a bonesaw dealing damage based on target\'s current health and slowing them.'},
      W:{name:'Heart Zapper',desc:'Electrocutes himself dealing damage to nearby enemies and storing a portion of damage taken.'},
      E:{name:'Blunt Force Trauma',desc:'Passive bonus attack damage. Active smashes with his cleaver dealing bonus damage.'},
      R:{name:'Maximum Dosage',desc:'Injects himself gaining massive health regen movement speed and attack damage.'},
    }
  },
  'draven': {
    stats:{hp:570,mana:280,ad:56,armor:26,mr:30,as:0.679,moveSpeed:330,hpRegen:7,manaRegen:7,range:550},
    abilities:{
      P:{name:'League of Draven',desc:'Catching Spinning Axes generates Adoration stacks. Killing champions consumes stacks for bonus gold.'},
      Q:{name:'Spinning Axe',desc:'Next attack deals bonus damage and causes a ricochet axe he can catch to refresh the ability.'},
      W:{name:'Blood Rush',desc:'Gains movement and attack speed briefly. Catching a Spinning Axe refreshes the cooldown.'},
      E:{name:'Stand Aside',desc:'Throws axes in a line dealing damage knocking aside and slowing enemies hit.'},
      R:{name:'Whirling Death',desc:'Hurls two massive axes forward dealing damage to all enemies. Reverses direction after max range or re-cast.'},
    }
  },
  'ekko': {
    stats:{hp:570,mana:280,ad:55,armor:24,mr:30,as:0.688,moveSpeed:340,hpRegen:7,manaRegen:8,range:125},
    abilities:{
      P:{name:'Z-Drive Resonance',desc:'Every third hit on the same enemy deals bonus damage and slows champions granting Ekko movement speed.'},
      Q:{name:'Timewinder',desc:'Throws a device dealing damage then expanding into a slowing field before returning.'},
      W:{name:'Parallel Convergence',desc:'Creates an afterimage that stuns enemies inside when it detonates. Ekko gains a large shield if he enters it.'},
      E:{name:'Phase Dive',desc:'Dashes in a direction empowering the next attack to teleport to the target.'},
      R:{name:'Chronobreak',desc:'Teleports back in time dealing massive damage to nearby enemies and healing based on damage taken recently.'},
    }
  },
  'evelynn': {
    stats:{hp:570,mana:315,ad:52,armor:24,mr:30,as:0.658,moveSpeed:335,hpRegen:7,manaRegen:7,range:125},
    abilities:{
      P:{name:'Demon Shade',desc:'Enters Demon Shade when out of combat regenerating health when low. After level 5 grants permanent camouflage.'},
      Q:{name:'Hate Spike',desc:'Fires a line of spikes then re-casts to fire more at the last enemy hit.'},
      W:{name:'Allure',desc:'Places a curse on a target. Attacking a fully cursed target charms them and reduces their resistances.'},
      E:{name:'Whiplash',desc:'Lunges to a target with tentacles dealing damage. Empowered version pulls nearby enemies toward her.'},
      R:{name:'Last Caress',desc:'Briefly becomes untargetable devastating enemies ahead then blinks backward. Bonus damage below 30% health.'},
    }
  },
  'ezreal': {
    stats:{hp:530,mana:375,ad:52,armor:24,mr:30,as:0.625,moveSpeed:325,hpRegen:6,manaRegen:8,range:550},
    abilities:{
      P:{name:'Rising Spell Force',desc:'Hitting enemies with abilities grants stacking attack speed up to five times.'},
      Q:{name:'Mystic Shot',desc:'Fires an energy bolt dealing physical damage. Reduces all cooldowns by 1.5 seconds on hit.'},
      W:{name:'Essence Flux',desc:'Fires an orb marking the target. Hitting the mark with another ability detonates it for bonus damage.'},
      E:{name:'Arcane Shift',desc:'Teleports to a target location and fires a homing bolt at the nearest enemy.'},
      R:{name:'Trueshot Barrage',desc:'Channels then fires a massive energy wave across the entire map dealing damage to all enemies hit.'},
    }
  },
  'fiddlesticks': {
    stats:{hp:560,mana:418,ad:52,armor:21,mr:30,as:0.625,moveSpeed:330,hpRegen:7,manaRegen:8,range:550},
    abilities:{
      P:{name:'A Harmless Scarecrow',desc:'Creates an effigy of himself that mimics his appearance. Allies can use them as wards.'},
      Q:{name:'Terrify',desc:'Fears an enemy briefly. If the target is already feared deals bonus damage instead.'},
      W:{name:'Bountiful Harvest',desc:'Channels draining life from all nearby enemies dealing damage and healing himself.'},
      E:{name:'Reap',desc:'Slices with his scythe in an arc dealing damage and briefly silencing enemies in the center.'},
      R:{name:'Crowstorm',desc:'Channels then blinks to a target location unleashing crows that rapidly deal magic damage to all nearby enemies.'},
    }
  },
  'fiora': {
    stats:{hp:600,mana:0,ad:60,armor:33,mr:32,as:0.690,moveSpeed:345,hpRegen:9,range:150},
    abilities:{
      P:{name:'Duelist\'s Dance',desc:'Reveals Vital weak points on enemy champions. Striking them deals bonus true damage and heals her.'},
      Q:{name:'Lunge',desc:'Dashes to a target dealing damage. Resets if she hits a Vital.'},
      W:{name:'Riposte',desc:'Parries all incoming damage and crowd control for a moment. When the timer ends stuns or slows attackers.'},
      E:{name:'Bladework',desc:'Empowers her next two attacks. The first slows and the second is a guaranteed critical strike.'},
      R:{name:'Grand Challenge',desc:'Reveals all four Vitals on an enemy. Striking all four or if they die she and allies receive a large heal.'},
    }
  },
  'fizz': {
    stats:{hp:570,mana:287,ad:52,armor:26,mr:32,as:0.658,moveSpeed:340,hpRegen:7,manaRegen:8,range:175},
    abilities:{
      P:{name:'Nimble Fighter',desc:'Can move through units and takes reduced damage from basic attacks.'},
      Q:{name:'Urchin Strike',desc:'Dashes through an enemy dealing damage and applying on-hit effects.'},
      W:{name:'Seastone Trident',desc:'Passive deals bonus magic damage on hit. Active deals bonus damage and causes wounds reducing healing.'},
      E:{name:'Playful / Trickster',desc:'Hops onto his trident avoiding all damage then slams down dealing damage and slowing or hops to a new location.'},
      R:{name:'Chum the Waters',desc:'Flings out a fish that attaches to an enemy. After a delay a shark erupts knocking up nearby enemies.'},
    }
  },
  'galio': {
    stats:{hp:600,mana:418,ad:58,armor:38,mr:32,as:0.625,moveSpeed:335,hpRegen:9,manaRegen:8,range:125},
    abilities:{
      P:{name:'Colossal Smash',desc:'Periodically his next attack deals bonus magic damage in an area. Reduced cooldown by taking magic damage.'},
      Q:{name:'Winds of War',desc:'Fires two gusts of wind that converge into a tornado dealing damage and briefly slowing.'},
      W:{name:'Shield of Durand',desc:'Channels taunting nearby enemies when released. Cooldown reduced when taking magic damage.'},
      E:{name:'Justice Punch',desc:'Dashes forward and punches the first enemy champion hit dealing damage and knocking them up.'},
      R:{name:'Hero\'s Entrance',desc:'Designates an allied champion\'s location then crashes down dealing damage and knocking up nearby enemies.'},
    }
  },
  'garen': {
    stats:{hp:651,mana:0,ad:62,armor:38,mr:32,as:0.625,moveSpeed:340,hpRegen:10,range:175},
    abilities:{
      P:{name:'Perseverance',desc:'Regenerates health rapidly when out of combat and not recently damaged by enemy champions.'},
      Q:{name:'Decisive Strike',desc:'Gains movement speed and silences the first enemy hit dealing bonus damage.'},
      W:{name:'Courage',desc:'Passively reduces damage taken from monsters. Active reduces incoming damage briefly.'},
      E:{name:'Judgment',desc:'Rapidly spins his sword dealing damage to nearby enemies. Can move but at reduced speed.'},
      R:{name:'Demacian Justice',desc:'Calls down a giant magical sword dealing true damage to the enemy Villain. Higher damage on low-health Villains.'},
    }
  },
  'gnar': {
    stats:{hp:560,mana:287,ad:52,armor:24,mr:30,as:0.658,moveSpeed:325,hpRegen:7,manaRegen:7,range:500},
    abilities:{
      P:{name:'Rage Gene',desc:'Generates Rage when attacking or taking damage. At max Rage transforms into Mega Gnar briefly.'},
      Q:{name:'Boomerang Throw / Boulder Toss',desc:'Mini throws a boomerang dealing damage on the way out and back. Mega throws a boulder with the same effect.'},
      W:{name:'Hyper / Wallop',desc:'Mini gains movement speed and deals bonus damage on every third hit. Mega jumps and slams the ground slowing enemies.'},
      E:{name:'Hop / Crunch',desc:'Mini hops to a target gaining movement speed. Mega leaps to a target dealing damage and slowing.'},
      R:{name:'GNAR!',desc:'Transforms into Mega Gnar and flings nearby enemies dealing damage. Enemies knocked into walls are stunned.'},
    }
  },
  'gragas': {
    stats:{hp:651,mana:400,ad:60,armor:38,mr:32,as:0.625,moveSpeed:335,hpRegen:10,manaRegen:8,range:125},
    abilities:{
      P:{name:'Happy Hour',desc:'Periodically heals himself when using abilities.'},
      Q:{name:'Barrel Roll',desc:'Rolls a cask to a location that can be detonated by re-casting. Deals damage and slows.'},
      W:{name:'Drunken Rage',desc:'Channels to drink and reduce incoming damage. Next basic attack deals bonus magic damage in an area.'},
      E:{name:'Body Slam',desc:'Dashes forward and deals damage to the first enemy hit knocking them back.'},
      R:{name:'Explosive Cask',desc:'Hurls his cask dealing damage and knocking back all enemies and allies hit in a large area.'},
    }
  },
  'graves': {
    stats:{hp:570,mana:280,ad:52,armor:26,mr:30,as:0.625,moveSpeed:340,hpRegen:7,manaRegen:7,range:425},
    abilities:{
      P:{name:'New Destiny',desc:'His shotgun holds two shells. After firing both he reloads. Each shell fires multiple pellets.'},
      Q:{name:'End of the Line',desc:'Fires a shell that explodes after a delay or on hitting terrain dealing bonus damage.'},
      W:{name:'Smoke Screen',desc:'Throws a smoke canister creating a cloud that obscures vision and slows enemies inside.'},
      E:{name:'Quickdraw',desc:'Dashes in a direction reloading one shell. Dashing toward enemies reduces the cooldown.'},
      R:{name:'Collateral Damage',desc:'Fires an explosive shell dealing heavy damage to the first enemy hit then exploding for AoE damage.'},
    }
  },
  'gwen': {
    stats:{hp:570,mana:330,ad:52,armor:26,mr:32,as:0.690,moveSpeed:340,hpRegen:9,manaRegen:8,range:150},
    abilities:{
      P:{name:'Thousand Cuts',desc:'Basic attacks deal bonus magic damage based on target\'s max health. Heals based on damage dealt to champions.'},
      Q:{name:'Snip Snip!',desc:'Rapidly snips dealing magic damage in a cone. The center of the last snip deals true damage.'},
      W:{name:'Hallowed Mist',desc:'Creates a mist that follows her making her untargetable by enemies outside it.'},
      E:{name:'Skip \'n Slash',desc:'Dashes a short distance empowering her next three attacks with bonus range damage and speed.'},
      R:{name:'Needlework',desc:'Fires needles that deal damage slow and apply Thousand Cuts. Can be cast three times in a row.'},
    }
  },
  'hecarim': {
    stats:{hp:615,mana:280,ad:58,armor:33,mr:32,as:0.638,moveSpeed:345,hpRegen:9,manaRegen:7,range:175},
    abilities:{
      P:{name:'Warpath',desc:'Ignores unit collision and gains bonus attack damage based on his bonus movement speed.'},
      Q:{name:'Rampage',desc:'Cleaves nearby enemies dealing damage. Each kill reduces its cooldown.'},
      W:{name:'Spirit of Dread',desc:'Deals damage to nearby enemies and heals for a portion of the damage nearby enemies take from any source.'},
      E:{name:'Devastating Charge',desc:'Gains increasing movement speed then the next attack knocks the target back.'},
      R:{name:'Onslaught of Shadows',desc:'Summons spectral riders and charges forward. At the end fears nearby enemies.'},
    }
  },
  'heimerdinger': {
    stats:{hp:524,mana:418,ad:52,armor:21,mr:30,as:0.625,moveSpeed:325,hpRegen:6,manaRegen:8,range:550},
    abilities:{
      P:{name:'Techmaturgical Repair Bots',desc:'Passively grants nearby allied turrets bonus health regeneration.'},
      Q:{name:'H-28G Evolution Turret',desc:'Lays a turret that shoots at enemies. Can have multiple turrets active at once.'},
      W:{name:'Hextech Micro-Rockets',desc:'Unleashes a barrage of rockets that converge on a target location dealing damage.'},
      E:{name:'CH-1 Concussion Grenade',desc:'Tosses a grenade dealing damage and slowing. Enemies in the center are stunned.'},
      R:{name:'UPGRADE!!!',desc:'Empowers the next ability cast with bonus effects. Turrets become giant with a laser. Rockets increase. Grenade stuns all enemies.'},
    }
  },
  'irelia': {
    stats:{hp:600,mana:0,ad:60,armor:33,mr:32,as:0.690,moveSpeed:345,hpRegen:9,range:125},
    abilities:{
      P:{name:'Ionian Fervor',desc:'Hitting enemies with abilities grants stacking attack speed. At max stacks attacks deal bonus magic damage.'},
      Q:{name:'Bladesurge',desc:'Dashes through an enemy dealing damage. Resets if the enemy is debuffed or dies.'},
      W:{name:'Defiant Dance',desc:'Holds her blades reducing incoming damage. Releases them dealing damage in a line.'},
      E:{name:'Flawless Duet',desc:'Sends two blades to positions. Both blades converge dealing damage and stunning enemies caught between them.'},
      R:{name:'Vanguard\'s Edge',desc:'Launches a storm of blades that deals damage and creates a large wall of blades. Crossing the wall deals damage and slows.'},
    }
  },
  'janna': {
    stats:{hp:524,mana:418,ad:46,armor:21,mr:30,as:0.658,moveSpeed:330,hpRegen:6,manaRegen:8,range:550},
    abilities:{
      P:{name:'Tailwind',desc:'Passively grants nearby moving allies bonus movement speed.'},
      Q:{name:'Howling Gale',desc:'Summons a whirlwind that knocks up enemies. Hold to increase the range and damage before releasing.'},
      W:{name:'Zephyr',desc:'Passive grants movement speed and ignores unit collision. Active deals damage and slows an enemy.'},
      E:{name:'Eye of the Storm',desc:'Shields an allied champion or turret and grants bonus attack damage while the shield holds.'},
      R:{name:'Monsoon',desc:'Channels releasing a monsoon knocking back nearby enemies and healing nearby allies per second.'},
    }
  },
  'jarvan-iv': {
    stats:{hp:615,mana:280,ad:58,armor:36,mr:32,as:0.658,moveSpeed:340,hpRegen:9,manaRegen:7,range:175},
    abilities:{
      P:{name:'Martial Cadence',desc:'First attack against an enemy deals bonus physical damage based on their current health.'},
      Q:{name:'Dragon Strike',desc:'Extends his lance dealing damage and lowering armor of enemies hit. Pulls to his flag if nearby.'},
      W:{name:'Golden Aegis',desc:'Slows nearby enemies and shields himself based on the number of nearby enemies.'},
      E:{name:'Demacian Standard',desc:'Throws a flag dealing damage and granting attack speed to nearby allies. Dashes to the flag with Q.'},
      R:{name:'Cataclysm',desc:'Leaps to an enemy champion creating a circular arena of terrain around them.'},
    }
  },
  'jax': {
    stats:{hp:615,mana:0,ad:60,armor:36,mr:32,as:0.638,moveSpeed:340,hpRegen:9,range:125},
    abilities:{
      P:{name:'Relentless Assault',desc:'Each consecutive basic attack stacks bonus attack speed up to eight times.'},
      Q:{name:'Leap Strike',desc:'Leaps to a target dealing damage. Can target allies to jump to them.'},
      W:{name:'Empower',desc:'Empowers the next basic attack or Leap Strike to deal bonus magic damage.'},
      E:{name:'Counter Strike',desc:'Dodges all basic attacks and reduces damage from AoE. After a moment stuns nearby enemies.'},
      R:{name:'Grandmaster\'s Might',desc:'Passive every third attack deals bonus magic damage. Active gains bonus armor and magic resistance briefly.'},
    }
  },
  'jayce': {
    stats:{hp:560,mana:350,ad:52,armor:24,mr:30,as:0.638,moveSpeed:335,hpRegen:7,manaRegen:8,range:500},
    abilities:{
      P:{name:'Hextech Transmitter',desc:'Switching forms levels up his ultimate for free. Gains bonus movement speed after switching forms.'},
      Q:{name:'Shock Blast / To the Skies!',desc:'Cannon fires a powerful orb. Hammer leaps to slam an enemy dealing damage and slowing.'},
      W:{name:'Hyper Charge / Lightning Field',desc:'Cannon gains attack speed for a few attacks. Hammer passively restores mana and damages nearby enemies.'},
      E:{name:'Acceleration Gate / Thundering Blow',desc:'Cannon creates a gate granting speed to allies. Hammer knocks back an enemy dealing damage.'},
      R:{name:'Mercury Cannon / Mercury Hammer',desc:'Switches between ranged Cannon form and melee Hammer form each with different abilities.'},
    }
  },
  'jhin': {
    stats:{hp:570,mana:300,ad:59,armor:24,mr:30,as:0.625,moveSpeed:325,hpRegen:6,manaRegen:7,range:550},
    abilities:{
      P:{name:'Whisper',desc:'Fires exactly four shots. The fourth shot always crits and deals bonus damage. Gains attack damage from crit and attack speed.'},
      Q:{name:'Dancing Grenade',desc:'Launches a bouncing grenade that deals damage and bounces up to four times gaining damage each bounce.'},
      W:{name:'Deadly Flourish',desc:'Fires a long-range shot that damages and roots the first champion hit if they were recently damaged.'},
      E:{name:'Captive Audience',desc:'Places a trap that deals damage and slows. Killing marked enemies activates nearby traps.'},
      R:{name:'Curtain Call',desc:'Assembles his cannon and fires up to four long-range shots that slow. The fourth shot deals massive damage.'},
    }
  },
  'jinx': {
    stats:{hp:570,mana:280,ad:52,armor:24,mr:30,as:0.679,moveSpeed:325,hpRegen:6,manaRegen:7,range:525},
    abilities:{
      P:{name:'Get Excited!',desc:'Gains massive movement speed and attack speed after killing or assisting in killing a champion or structure.'},
      Q:{name:'Switcheroo!',desc:'Switches between minigun for attack speed and rocket launcher for AoE splash damage at the cost of mana.'},
      W:{name:'Zap!',desc:'Fires a shock blast dealing damage and slowing the first enemy hit.'},
      E:{name:'Flame Chompers!',desc:'Throws grenades that explode rooting the first enemy that steps on them.'},
      R:{name:'Super Mega Death Rocket!',desc:'Fires a global rocket that deals more damage the further it travels dealing massive damage to the first champion hit.'},
    }
  },
  'kaisa': {
    stats:{hp:570,mana:330,ad:52,armor:24,mr:30,as:0.644,moveSpeed:330,hpRegen:7,manaRegen:8,range:525},
    abilities:{
      P:{name:'Second Skin',desc:'Abilities and allies stack Plasma on enemies. At four stacks the target takes a burst of damage. Nearby allies trigger her passive.'},
      Q:{name:'Icathian Rain',desc:'Launches a swarm of missiles dealing damage split between nearby enemies. Evolved version fires more missiles.'},
      W:{name:'Void Seeker',desc:'Fires a long-range blast dealing damage and stacking Plasma. Evolved version fires faster and applies more Plasma.'},
      E:{name:'Supercharge',desc:'Charges up gaining attack speed. Evolved version grants brief invisibility during the charge.'},
      R:{name:'Killer Instinct',desc:'Dashes to a target champion surrounded by a plasma shield. Shield absorbs damage briefly.'},
    }
  },
  'kalista': {
    stats:{hp:570,mana:280,ad:52,armor:24,mr:30,as:0.694,moveSpeed:330,hpRegen:6,manaRegen:7,range:525},
    abilities:{
      P:{name:'Martial Poise',desc:'Basic attacks cause her to dash a short distance in the target direction. Cannot cancel this animation.'},
      Q:{name:'Pierce',desc:'Hurls a spear that deals damage and passes through enemies that die to it carrying embedded spears to the next target.'},
      W:{name:'Sentinel',desc:'Bonds her soul with an ally. Passively Kalista can stacks spears on enemies and rend them. Active bound ally gains a movement speed buff.'},
      E:{name:'Rend',desc:'Tears spears from nearby enemies dealing damage and slowing. Kills reset the cooldown and refund mana.'},
      R:{name:'Fate\'s Call',desc:'Binds her oathsworn ally drawing them to her then launching them in a direction knocking up and slowing enemies they land on.'},
    }
  },
  'karma': {
    stats:{hp:570,mana:418,ad:52,armor:22,mr:30,as:0.625,moveSpeed:330,hpRegen:7,manaRegen:8,range:550},
    abilities:{
      P:{name:'Gathering Fire',desc:'Damaging enemy champions with abilities reduces Mantra\'s cooldown.'},
      Q:{name:'Inner Flame',desc:'Fires a bolt of energy that deals damage and slows. Mantra version detonates for AoE damage and heals.'},
      W:{name:'Focused Resolve',desc:'Links to a target dealing damage and rooting if the link is maintained. Mantra version summons a spirit that also roots nearby enemies.'},
      E:{name:'Inspire',desc:'Shields an ally and grants them movement speed. Mantra version gives a larger shield and speed to nearby allies.'},
      R:{name:'Mantra',desc:'Empowers her next ability with bonus effects. Has no cost or cooldown reduction from passive stacks.'},
    }
  },
  'kassadin': {
    stats:{hp:570,mana:400,ad:52,armor:22,mr:52,as:0.638,moveSpeed:335,hpRegen:7,manaRegen:8,range:175},
    abilities:{
      P:{name:'Void Stone',desc:'Takes reduced magic damage and ignores unit collision.'},
      Q:{name:'Null Sphere',desc:'Launches a projectile dealing magic damage and interrupting channels. Briefly grants magic resistance.'},
      W:{name:'Nether Blade',desc:'Passive bonus magic damage on attacks. Active empowers the next attack to deal more magic damage and restore mana.'},
      E:{name:'Force Pulse',desc:'Deals magic damage and slows nearby enemies. Charges up from nearby spell casts.'},
      R:{name:'Riftwalk',desc:'Teleports to a nearby location dealing magic damage. Stacks for more damage if cast repeatedly but costs more mana.'},
    }
  },
  'katarina': {
    stats:{hp:570,mana:0,ad:52,armor:24,mr:32,as:0.658,moveSpeed:340,hpRegen:7,range:125},
    abilities:{
      P:{name:'Voracity',desc:'Picking up a Dagger reduces all ability cooldowns. Getting a kill or assist resets all basic ability cooldowns.'},
      Q:{name:'Bouncing Blade',desc:'Throws a blade that bounces between targets leaving a Dagger on the ground.'},
      W:{name:'Preparation',desc:'Jumps in the air and drops a Dagger at her feet gaining movement speed briefly.'},
      E:{name:'Shunpo',desc:'Teleports to a nearby target. Deals damage if it\'s an enemy. Always picks up Daggers she\'s near after blinking.'},
      R:{name:'Death Lotus',desc:'Channels rapidly throwing a torrent of daggers at the three nearest champions dealing damage and applying Grievous Wounds.'},
    }
  },
  'kayle': {
    stats:{hp:570,mana:350,ad:52,armor:22,mr:30,as:0.690,moveSpeed:335,hpRegen:7,manaRegen:8,range:125},
    abilities:{
      P:{name:'Divine Ascent',desc:'Attacking champions stacks Fervor. At max stacks ascends to a new form. Becomes permanently ranged at level 11 and gains AoE at level 16.'},
      Q:{name:'Radiant Blast',desc:'Summons a portal that fires a beam dealing damage slowing and reducing resistances of enemies hit.'},
      W:{name:'Celestial Blessing',desc:'Heals herself and target ally and grants them movement speed briefly.'},
      E:{name:'Starfire Spellblade',desc:'Passive deals bonus magic damage on hit. Active empowers the next attack to deal more magic damage based on target\'s missing health.'},
      R:{name:'Divine Judgment',desc:'Makes herself or an ally briefly invulnerable then descends dealing damage to all nearby enemies.'},
    }
  },
  'kayn': {
    stats:{hp:600,mana:0,ad:60,armor:38,mr:32,as:0.658,moveSpeed:340,hpRegen:9,range:175},
    abilities:{
      P:{name:'The Darkin Scythe',desc:'Absorbs the essence of slain enemies to transform into Rhaast the Darkin or Shadow Assassin.'},
      Q:{name:'Reaping Slash',desc:'Dashes and slashes dealing damage. The slash deals bonus damage to monsters.'},
      W:{name:'Blade\'s Reach',desc:'Slashes in a direction dealing damage and slowing. Can be cast while inside terrain.'},
      E:{name:'Shadow Step',desc:'Passes through terrain. Heals himself when emerging. Can\'t pass through walls without sufficient mana.'},
      R:{name:'Umbral Trespass',desc:'Hides inside an enemy dealing massive damage when he erupts. Rhaast heals during this. Shadow Assassin deals more damage.'},
    }
  },
  'ksante': {
    stats:{hp:700,mana:0,ad:60,armor:52,mr:32,as:0.625,moveSpeed:335,hpRegen:10,range:175},
    abilities:{
      P:{name:'Dauntless Instinct',desc:'Hitting enemies with abilities marks them. Attacking marked enemies deals bonus damage and heals briefly.'},
      Q:{name:'Ntofo Strikes',desc:'Slams with his ntofos dealing damage and briefly slowing. Third cast knocks up enemies nearby.'},
      W:{name:'Path Maker',desc:'Charges up then dashes dealing damage and knocking back enemies. Longer charge deals more damage.'},
      E:{name:'Footwork',desc:'Dashes granting a shield. Dashing to an ally grants them the shield. Can dash through terrain.'},
      R:{name:'All Out',desc:'Unleashes true power knocking back an enemy. Transforms losing tankiness for high damage during the transformation.'},
    }
  },
  'lee-sin': {
    stats:{hp:600,mana:0,ad:62,armor:36,mr:32,as:0.651,moveSpeed:345,hpRegen:9,range:175},
    abilities:{
      P:{name:'Flurry',desc:'After using an ability his next two attacks gain attack speed and restore energy.'},
      Q:{name:'Sonic Wave / Resonating Strike',desc:'Fires a sonic wave to reveal enemies. Re-cast to dash to the target dealing damage based on missing health.'},
      W:{name:'Safeguard / Iron Will',desc:'Dashes to a target granting a shield. Re-cast to gain lifesteal and spell vamp briefly.'},
      E:{name:'Tempest / Cripple',desc:'Slams the ground revealing and dealing damage to nearby enemies. Re-cast to slow revealed enemies.'},
      R:{name:'Dragon\'s Rage',desc:'Kicks an enemy champion sending them flying. Enemies they collide with are knocked up and take damage.'},
    }
  },
  'leona': {
    stats:{hp:651,mana:287,ad:58,armor:45,mr:32,as:0.625,moveSpeed:335,hpRegen:9,manaRegen:7,range:125},
    abilities:{
      P:{name:'Sunlight',desc:'Damaging abilities mark enemies with Sunlight. Allied champion attacks on marked targets trigger bonus magic damage.'},
      Q:{name:'Shield of Daybreak',desc:'Empowers her next attack to deal bonus damage and stun the target briefly.'},
      W:{name:'Eclipse',desc:'Briefly gains bonus armor and magic resistance then deals damage to nearby enemies and extends the buffs if enemies are hit.'},
      E:{name:'Zenith Blade',desc:'Projects a solar image dealing damage to all enemies in a line and dashing to the last champion hit rooting them briefly.'},
      R:{name:'Solar Flare',desc:'Calls down a solar flare dealing damage and slowing in an area. Enemies in the center are stunned.'},
    }
  },
  'lillia': {
    stats:{hp:570,mana:418,ad:52,armor:21,mr:30,as:0.658,moveSpeed:330,hpRegen:7,manaRegen:8,range:300},
    abilities:{
      P:{name:'Dream-Laden Bough',desc:'Abilities apply a stack of Dream Dust. At max stacks the enemy falls asleep becoming drowsy then sleeping.'},
      Q:{name:'Blooming Blows',desc:'Swings her branch in a circle dealing magic damage. The edge deals bonus damage and grants movement speed.'},
      W:{name:'Watch Out! Eep!',desc:'Winds up then slams her branch dealing massive damage in a small area.'},
      E:{name:'Swirlseed',desc:'Lobs a seed that rolls forward dealing damage and slowing enemies it hits.'},
      R:{name:'Lilting Lullaby',desc:'Causes all nearby enemies affected by Dream Dust to become drowsy then fall asleep. Waking them deals bonus damage.'},
    }
  },
  'lissandra': {
    stats:{hp:570,mana:418,ad:52,armor:22,mr:30,as:0.625,moveSpeed:325,hpRegen:6,manaRegen:8,range:550},
    abilities:{
      P:{name:'Iceborn',desc:'Every few spells cast her next ability costs no mana. Killing units reduces this passive cooldown.'},
      Q:{name:'Ice Shard',desc:'Throws a spear of ice that shatters on the first enemy dealing damage and slowing. The shards pass through.'},
      W:{name:'Ring of Frost',desc:'Freezes all nearby enemies in a burst of ice dealing damage and rooting them.'},
      E:{name:'Glacial Path',desc:'Casts an ice claw that moves forward. Re-casting teleports her to the claw\'s current location.'},
      R:{name:'Frozen Tomb',desc:'On enemy freezes them in place dealing damage. On self becomes untargetable briefly and creates a blizzard slowing enemies.'},
    }
  },
  'lucian': {
    stats:{hp:570,mana:350,ad:58,armor:26,mr:30,as:0.638,moveSpeed:335,hpRegen:7,manaRegen:8,range:500},
    abilities:{
      P:{name:'Lightslinger',desc:'After using an ability his next two attacks deal bonus damage. Attacks against targets marked by ally abilities deal bonus damage.'},
      Q:{name:'Piercing Light',desc:'Shoots a bolt of piercing light through a target dealing damage to all enemies in its path.'},
      W:{name:'Ardent Blaze',desc:'Fires a shot that explodes in a cross pattern marking enemies. Shooting marked targets grants movement speed.'},
      E:{name:'Relentless Pursuit',desc:'Dashes a short distance quickly. Lightslinger hits reduce its cooldown.'},
      R:{name:'The Culling',desc:'Rapidly fires a barrage of shots in a direction dealing damage to the first enemy hit per shot.'},
    }
  },
  'lulu': {
    stats:{hp:524,mana:418,ad:46,armor:21,mr:30,as:0.658,moveSpeed:330,hpRegen:6,manaRegen:8,range:550},
    abilities:{
      P:{name:'Pix Faerie Companion',desc:'Pix fires three bolts of light at whatever Lulu attacks or fires at.'},
      Q:{name:'Glitterlance',desc:'Pix and Lulu each fire a bolt of energy dealing damage and heavily slowing enemies hit.'},
      W:{name:'Whimsy',desc:'On ally grants movement speed and ability power briefly. On enemy polymorphs them into a critter briefly.'},
      E:{name:'Help Pix!',desc:'On ally grants a shield and sends Pix to follow them. On enemy deals damage and sends Pix to follow them granting vision.'},
      R:{name:'Wild Growth',desc:'Causes an ally to grow knocking up nearby enemies and granting bonus health and a slow aura briefly.'},
    }
  },
  'lux': {
    stats:{hp:524,mana:418,ad:50,armor:22,mr:30,as:0.625,moveSpeed:330,hpRegen:6,manaRegen:8,range:550},
    abilities:{
      P:{name:'Illumination',desc:'Abilities mark enemies with light energy. Basic attacks trigger the mark dealing bonus magic damage.'},
      Q:{name:'Light Binding',desc:'Fires a burst of light that binds and deals damage to up to two enemies.'},
      W:{name:'Prismatic Barrier',desc:'Launches her wand in a line shielding allies it passes through. Returns and shields again.'},
      E:{name:'Lucent Singularity',desc:'Creates a slowing zone of light at a location. Re-casting or the timer detonates it for damage.'},
      R:{name:'Final Spark',desc:'Charges then unleashes a giant beam of light dealing massive damage to all enemies in a line.'},
    }
  },
  'malphite': {
    stats:{hp:651,mana:287,ad:58,armor:38,mr:32,as:0.625,moveSpeed:335,hpRegen:9,manaRegen:7,range:125},
    abilities:{
      P:{name:'Granite Shield',desc:'Generates a rock shield periodically that absorbs damage equal to a portion of max health.'},
      Q:{name:'Seismic Shard',desc:'Throws a shard dealing damage and slowing the target while briefly stealing their movement speed.'},
      W:{name:'Thunderclap',desc:'Passive reduces physical damage taken. Active next attack deals AoE damage. Nearby attacks generate shield stacks.'},
      E:{name:'Ground Slam',desc:'Slams the ground dealing magic damage to nearby enemies and reducing their attack speed.'},
      R:{name:'Unstoppable Force',desc:'Charges to a location dealing massive damage and knocking up all enemies at the destination.'},
    }
  },
  'maokai': {
    stats:{hp:651,mana:350,ad:62,armor:38,mr:32,as:0.625,moveSpeed:335,hpRegen:9,manaRegen:8,range:125},
    abilities:{
      P:{name:'Sap Magic',desc:'Each time a nearby champion casts a spell he gains a charge. At max charges his next basic attack heals him.'},
      Q:{name:'Bramble Smash',desc:'Knocks back nearby enemies then swings his limbs dealing damage and slowing enemies in front.'},
      W:{name:'Twisted Advance',desc:'Transforms into a mass of roots dashing to a target and rooting them.'},
      E:{name:'Sapling Toss',desc:'Hurls a sapling that deals damage on landing then stays as a trap dealing damage and slowing.'},
      R:{name:'Nature\'s Grasp',desc:'Creates a massive wall of brambles that slowly moves forward rooting the first enemy champion each bramble hits.'},
    }
  },
  'master-yi': {
    stats:{hp:630,mana:0,ad:66,armor:33,mr:32,as:0.679,moveSpeed:345,hpRegen:9,range:125},
    abilities:{
      P:{name:'Double Strike',desc:'Every few basic attacks he strikes twice dealing additional damage on the second hit.'},
      Q:{name:'Alpha Strike',desc:'Becomes untargetable and teleports striking up to four enemies. Deals bonus damage to minions.'},
      W:{name:'Meditate',desc:'Channels restoring health and reducing incoming damage. Generates Double Strike stacks while channeling.'},
      E:{name:'Wuju Style',desc:'Passive bonus true damage on attacks. Active temporarily increases true damage on attacks.'},
      R:{name:'Highlander',desc:'Gains massive attack and movement speed. Immune to slows. Takedowns extend the duration.'},
    }
  },
  'mel': {
    stats:{hp:524,mana:418,ad:50,armor:21,mr:30,as:0.625,moveSpeed:330,hpRegen:6,manaRegen:8,range:550},
    abilities:{
      P:{name:'Golden Aegis',desc:'Periodically generates a shield that blocks one ability and deals reflected damage back to the attacker.'},
      Q:{name:'Gold Flux',desc:'Fires a golden bolt dealing damage and marking the target. Next ability against a marked target deals bonus damage.'},
      W:{name:'Radiance',desc:'Creates a golden burst that heals herself and damages nearby enemies.'},
      E:{name:'Rebuttal',desc:'Creates a reflective barrier that reflects the next projectile back at the attacker dealing damage.'},
      R:{name:'Radiant Field',desc:'Creates a massive field of radiant energy dealing continuous damage and slowing all enemies inside.'},
    }
  },
  'milio': {
    stats:{hp:524,mana:418,ad:46,armor:21,mr:30,as:0.625,moveSpeed:330,hpRegen:6,manaRegen:8,range:550},
    abilities:{
      P:{name:'Fired Up!',desc:'Enchanting allies with abilities causes their next attack to deal bonus magic damage and apply a burn.'},
      Q:{name:'Ultra Mega Fire Kick',desc:'Kicks a ball that bounces off enemies knocking them back and dealing damage.'},
      W:{name:'Cozy Campfire',desc:'Creates a healing zone that follows the lowest health ally. Allies inside gain attack range.'},
      E:{name:'Warm Hugs',desc:'Tosses a shield to an ally granting them movement speed and damage absorption.'},
      R:{name:'Breath of Life',desc:'Unleashes a wave of soothing flames healing nearby allies and cleansing them of all crowd control.'},
    }
  },
  'miss-fortune': {
    stats:{hp:570,mana:325,ad:52,armor:26,mr:30,as:0.658,moveSpeed:330,hpRegen:7,manaRegen:7,range:550},
    abilities:{
      P:{name:'Love Tap',desc:'Switching attack targets deals bonus physical damage on the first attack against each new target.'},
      Q:{name:'Double Up',desc:'Fires a shot that bounces off the target hitting an enemy behind them. The bounce deals more damage.'},
      W:{name:'Strut',desc:'Passively gains movement speed when not recently attacked. Activate to immediately gain the movement speed and attack speed.'},
      E:{name:'Make It Rain',desc:'Fires a barrage of bullets into the air that rain down slowing and dealing damage to enemies in an area.'},
      R:{name:'Bullet Time',desc:'Channels rapidly firing waves of bullets in a cone dealing damage to all enemies hit. Each wave can critically strike.'},
    }
  },
  'mordekaiser': {
    stats:{hp:651,mana:0,ad:62,armor:38,mr:32,as:0.625,moveSpeed:340,hpRegen:9,range:175},
    abilities:{
      P:{name:'Darkness Rise',desc:'Damaging enemies with abilities activates Darkness Rise dealing AoE magic damage per second and granting movement speed.'},
      Q:{name:'Obliterate',desc:'Slams with his mace dealing damage. Deals bonus damage if only one enemy is hit.'},
      W:{name:'Indestructible',desc:'Generates a shield from damage dealt. Activate to consume part of the shield and heal.'},
      E:{name:'Death\'s Grasp',desc:'Creates a claw of death that pulls enemies toward him dealing damage.'},
      R:{name:'Realm of Death',desc:'Banishes an enemy to a death realm for a duration. Steals a portion of their stats and fights them 1v1.'},
    }
  },
  'morgana': {
    stats:{hp:570,mana:418,ad:52,armor:24,mr:30,as:0.625,moveSpeed:335,hpRegen:7,manaRegen:8,range:550},
    abilities:{
      P:{name:'Soul Siphon',desc:'Deals spell vamp healing from abilities used against enemy units especially champions and large monsters.'},
      Q:{name:'Dark Binding',desc:'Launches a sphere of dark magic rooting the first enemy hit for a long duration.'},
      W:{name:'Tormented Shadow',desc:'Creates a zone of anguish dealing damage per second to enemies and dealing bonus damage based on missing health.'},
      E:{name:'Black Shield',desc:'Places a shield on an ally that absorbs magic damage and blocks crowd control while active.'},
      R:{name:'Soul Shackles',desc:'Chains nearby enemy champions draining their movement speed. After a delay stuns all still chained.'},
    }
  },
  'nami': {
    stats:{hp:524,mana:418,ad:46,armor:21,mr:30,as:0.658,moveSpeed:330,hpRegen:6,manaRegen:8,range:550},
    abilities:{
      P:{name:'Surging Tides',desc:'Allies affected by her abilities gain movement speed briefly.'},
      Q:{name:'Aqua Prison',desc:'Releases a bubble that traps and stuns the first enemy hit.'},
      W:{name:'Ebb and Flow',desc:'Releases a stream of water that bounces between allies and enemies healing or damaging alternately.'},
      E:{name:'Tidecaller\'s Blessing',desc:'Empowers an ally\'s next three attacks to deal bonus magic damage and slow enemies.'},
      R:{name:'Tidal Wave',desc:'Summons a massive wave that travels across the map knocking up slowing and dealing damage to all enemies hit.'},
    }
  },
  'nasus': {
    stats:{hp:651,mana:287,ad:62,armor:38,mr:32,as:0.638,moveSpeed:345,hpRegen:14,manaRegen:7,range:125},
    abilities:{
      P:{name:'Soul Eater',desc:'Passively drains life from basic attacks restoring health.'},
      Q:{name:'Siphoning Strike',desc:'Empowers his next attack dealing bonus damage. Killing units permanently adds stacks that increase this damage.'},
      W:{name:'Wither',desc:'Slows a target reducing their movement and attack speed over time.'},
      E:{name:'Spirit Fire',desc:'Creates a circle of flames that deals damage and reduces armor of enemies inside.'},
      R:{name:'Fury of the Sands',desc:'Transforms channeling the power of Shurima growing in size and gaining health bonus armor and AoE damage.'},
    }
  },
  'nautilus': {
    stats:{hp:651,mana:287,ad:58,armor:45,mr:32,as:0.625,moveSpeed:325,hpRegen:9,manaRegen:7,range:125},
    abilities:{
      P:{name:'Staggering Blow',desc:'First basic attack against each enemy roots them briefly.'},
      Q:{name:'Dredge Line',desc:'Hurls his anchor hooking and dragging the first target hit toward him. Hitting terrain pulls him forward.'},
      W:{name:'Titan\'s Wrath',desc:'Creates a shield that absorbs damage. While the shield is active his attacks deal AoE magic damage.'},
      E:{name:'Riptide',desc:'Creates a shockwave that deals damage and slows nearby enemies. Hits multiple times in different areas.'},
      R:{name:'Depth Charge',desc:'Fires a charge toward an enemy champion that knocks up enemies it passes through and stuns and knocks up the target.'},
    }
  },
  'nidalee': {
    stats:{hp:570,mana:350,ad:52,armor:21,mr:30,as:0.638,moveSpeed:335,hpRegen:7,manaRegen:8,range:525},
    abilities:{
      P:{name:'Prowl',desc:'Moving through brush increases movement speed. Hitting an enemy with Javelin or Bushwhack marks them as Hunted granting bonus effects.'},
      Q:{name:'Javelin Toss / Takedown',desc:'Human throws a spear dealing more damage the farther it travels. Cougar pounces dealing damage based on target\'s missing health.'},
      W:{name:'Bushwhack / Pounce',desc:'Human places a trap that reveals and damages. Cougar dashes to a target resetting on Hunted targets.'},
      E:{name:'Primal Surge / Swipe',desc:'Human heals an ally and grants attack speed. Cougar claws in a cone dealing damage.'},
      R:{name:'Aspect of the Cougar',desc:'Transforms between human and cougar form. Cougar abilities do not cost mana.'},
    }
  },
  'nilah': {
    stats:{hp:570,mana:0,ad:56,armor:26,mr:32,as:0.679,moveSpeed:335,hpRegen:7,range:125},
    abilities:{
      P:{name:'Joy Unending',desc:'Heals and shields from allies are empowered. Sharing joy with nearby allies reduces ability cooldowns.'},
      Q:{name:'Formless Blade',desc:'Slashes with the whip-sword in a line dealing damage. Empowers next few attacks to deal more damage and extend range.'},
      W:{name:'Jubilant Veil',desc:'Becomes briefly immune to basic attacks and reduces incoming magic damage. Nearby allies also gain this effect briefly.'},
      E:{name:'Slipstream',desc:'Dashes through an enemy dealing damage. Can store two charges.'},
      R:{name:'Apotheosis',desc:'Spins creating a storm of water dealing damage and pulling enemies to the center then releasing a burst that knocks them back.'},
    }
  },
  'nocturne': {
    stats:{hp:615,mana:0,ad:62,armor:33,mr:32,as:0.658,moveSpeed:345,hpRegen:9,range:175},
    abilities:{
      P:{name:'Umbra Blades',desc:'Every few seconds attacks all nearby enemies dealing bonus physical damage. Hitting enemies resets this passive.'},
      Q:{name:'Duskbringer',desc:'Throws a shadow blade leaving a trail that grants movement speed while on it. Empowers next attack if enemy is hit.'},
      W:{name:'Shroud of Darkness',desc:'Becomes a vortex of shadow blocking the next spell cast at him and briefly doubling his attack speed if it blocks something.'},
      E:{name:'Unspeakable Horror',desc:'Creates a nightmare on an enemy draining health over time then fearing them when the link breaks.'},
      R:{name:'Paranoia',desc:'Shrouds the entire map in darkness reducing all enemy sight range then dashes toward an enemy champion.'},
    }
  },
  'norra': {
    stats:{hp:524,mana:418,ad:50,armor:21,mr:30,as:0.625,moveSpeed:330,hpRegen:6,manaRegen:8,range:550},
    abilities:{
      P:{name:'Portals Abound',desc:'Collecting portals left by her abilities empowers her next ability with bonus effects.'},
      Q:{name:'Memory Surge',desc:'Charges up and fires a bolt dealing more damage the longer it charges. Leaves a portal on hit.'},
      W:{name:'Journey to Nowhere',desc:'Creates a portal that banishes the first enemy that touches it briefly removing them from the map.'},
      E:{name:'Yuumi\'s Arrival',desc:'Yuumi swoops down dealing damage to enemies in an area and leaving a portal behind.'},
      R:{name:'Portalpalooza',desc:'Creates a massive circle of portals dealing damage to enemies inside. Activating portals with allies increases the effect.'},
    }
  },
  'nunu': {
    stats:{hp:651,mana:287,ad:62,armor:38,mr:32,as:0.625,moveSpeed:340,hpRegen:9,manaRegen:7,range:125},
    abilities:{
      P:{name:'Call of the Freljord',desc:'Willump periodically empowers their attacks and nearby allies\' attacks and movement speed.'},
      Q:{name:'Consume',desc:'Willump takes a bite of an enemy dealing damage and healing himself. Empowered by Snowball Barrage.'},
      W:{name:'Biggest Snowball Ever!',desc:'Rolls a snowball that grows in size and speed dealing damage and knocking enemies up. Press again to release early.'},
      E:{name:'Snowball Barrage',desc:'Nunu throws multiple snowballs rapidly dealing damage and stacking charges. After casting Willump roots nearby enemies.'},
      R:{name:'Absolute Zero',desc:'Channels creating a massive blizzard dealing damage per second and massively slowing. Releasing deals massive damage.'},
    }
  },
  'olaf': {
    stats:{hp:615,mana:0,ad:62,armor:36,mr:32,as:0.694,moveSpeed:345,hpRegen:10,range:175},
    abilities:{
      P:{name:'Berserker Rage',desc:'Gains attack speed based on how much health he\'s missing. At low health gains massive attack speed.'},
      Q:{name:'Undertow',desc:'Throws two axes that deal damage and slow. Picking up the axes reduces the cooldown.'},
      W:{name:'Vicious Strikes',desc:'Gains attack speed and life steal briefly. Bonus life steal scales with missing health.'},
      E:{name:'Reckless Swing',desc:'Strikes an enemy dealing true damage at the cost of his own health.'},
      R:{name:'Ragnarok',desc:'Removes all crowd control effects and becomes immune to CC for the duration. Gains bonus attack damage.'},
    }
  },
  'orianna': {
    stats:{hp:524,mana:418,ad:50,armor:21,mr:30,as:0.625,moveSpeed:325,hpRegen:6,manaRegen:8,range:550},
    abilities:{
      P:{name:'Clockwork Windup',desc:'Her Ball deals bonus magic damage that increases with consecutive hits on the same target.'},
      Q:{name:'Command: Attack',desc:'Moves the Ball to a target location dealing damage to enemies it passes through.'},
      W:{name:'Command: Dissonance',desc:'Creates an electric pulse at the Ball\'s location dealing damage and speeding up allies while slowing enemies.'},
      E:{name:'Command: Protect',desc:'Moves the Ball to an ally shielding them. Ball stays on that ally.'},
      R:{name:'Command: Shockwave',desc:'Creates a shockwave at the Ball\'s location pulling in nearby enemies and dealing massive damage.'},
    }
  },
  'ornn': {
    stats:{hp:700,mana:0,ad:62,armor:45,mr:32,as:0.625,moveSpeed:335,hpRegen:12,range:175},
    abilities:{
      P:{name:'Living Forge',desc:'Can forge items anywhere on the map. Can upgrade certain items for himself and allies into Masterwork items.'},
      Q:{name:'Volcanic Rupture',desc:'Slams the ground sending a fissure forward dealing damage and slowing. Creates a pillar of rock at the end.'},
      W:{name:'Bellows Breath',desc:'Breathes fire becoming briefly unstoppable and dealing damage. Targets hit by the final puff become Brittle.'},
      E:{name:'Searing Charge',desc:'Charges forward dealing damage. Colliding with terrain creates a shockwave. Knocking Brittle enemies into terrain stuns them.'},
      R:{name:'Call of the Forge God',desc:'Summons a colossal ram that charges forward. He can redirect it during the charge. Enemies hit are knocked up.'},
    }
  },
  'pantheon': {
    stats:{hp:600,mana:280,ad:60,armor:36,mr:32,as:0.638,moveSpeed:340,hpRegen:9,manaRegen:7,range:175},
    abilities:{
      P:{name:'Mortal Will',desc:'Every few spell casts empowers his next basic ability with bonus effects.'},
      Q:{name:'Comet Spear',desc:'Thrusts his spear or throws it for long range. Empowered version knocks back and deals more damage.'},
      W:{name:'Shield Vault',desc:'Dashes to an enemy dealing damage and stunning them.'},
      E:{name:'Aegis Assault',desc:'Blocks all damage from the front briefly while dealing damage to enemies in front. Empowered version lasts longer.'},
      R:{name:'Grand Starfall',desc:'Leaps into the air and crashes down at a target location dealing damage and empowering Mortal Will.'},
    }
  },
  'poppy': {
    stats:{hp:651,mana:280,ad:62,armor:45,mr:32,as:0.638,moveSpeed:345,hpRegen:9,manaRegen:7,range:125},
    abilities:{
      P:{name:'Iron Ambassador',desc:'Periodically throws her buckler that bounces back granting a shield if she picks it up.'},
      Q:{name:'Hammer Shock',desc:'Slams the ground dealing damage in front and leaving a zone that slows before erupting for more damage.'},
      W:{name:'Steadfast Presence',desc:'Gains movement and magic resistance. Activating creates a dome preventing dashes inside.'},
      E:{name:'Heroic Charge',desc:'Dashes to a target pushing them. If they hit terrain they are stunned.'},
      R:{name:'Keeper\'s Verdict',desc:'Charges up a massive hammer swing that knocks enemies high into the air sending them off the map briefly.'},
    }
  },
  'pyke': {
    stats:{hp:600,mana:350,ad:60,armor:36,mr:32,as:0.651,moveSpeed:335,hpRegen:14,manaRegen:8,range:125},
    abilities:{
      P:{name:'Gift of the Drowned Ones',desc:'Converts bonus health into bonus attack damage. Regenerates health rapidly when unseen by enemies.'},
      Q:{name:'Bone Skewer',desc:'Channels pulling in the first enemy hit or quickly stabbing for less damage. Both slow the target.'},
      W:{name:'Ghostwater Dive',desc:'Enters camouflage and gains massive movement speed that decays over time.'},
      E:{name:'Phantom Undertow',desc:'Dashes leaving behind a drowned phantom that deals damage and stuns enemies when it returns.'},
      R:{name:'Death from Below',desc:'Executes enemies in an X-shaped pattern below a health threshold. Kills grant gold to nearby allies and reset the cooldown.'},
    }
  },
  'rakan': {
    stats:{hp:570,mana:350,ad:52,armor:22,mr:30,as:0.625,moveSpeed:335,hpRegen:7,manaRegen:8,range:300},
    abilities:{
      P:{name:'Fey Feathers',desc:'Periodically generates a shield. Damaging abilities and being near Xayah charges the shield faster.'},
      Q:{name:'Gleaming Quill',desc:'Hurls an enchanted feather dealing damage. Hitting a champion or epic monster begins healing nearby allies.'},
      W:{name:'Grand Entrance',desc:'Dashes to a location knocking up and dealing damage to enemies.'},
      E:{name:'Battle Dance',desc:'Dashes to an allied champion granting them a shield. Can be re-cast shortly after. Range is extended when dashing to Xayah.'},
      R:{name:'The Quickness',desc:'Gains movement speed charming and dealing damage to every enemy he touches before the ability ends.'},
    }
  },
  'rammus': {
    stats:{hp:651,mana:0,ad:58,armor:52,mr:32,as:0.625,moveSpeed:335,hpRegen:9,range:125},
    abilities:{
      P:{name:'Spiked Shell',desc:'Deals magic damage back to enemies that attack him based on his armor.'},
      Q:{name:'Powerball',desc:'Rolls into a ball gaining massive speed. Deals damage and slows enemies he collides with on impact.'},
      W:{name:'Defensive Ball Curl',desc:'Curls up dealing damage to nearby attackers and gaining massive bonus armor and magic resistance.'},
      E:{name:'Frenzying Taunt',desc:'Taunts an enemy forcing them to attack him and increasing his attack speed.'},
      R:{name:'Soaring Slam',desc:'Leaps into the air and crashes down creating aftershocks that deal damage and slow around the impact zone.'},
    }
  },
  'rell': {
    stats:{hp:651,mana:287,ad:58,armor:45,mr:32,as:0.625,moveSpeed:330,hpRegen:9,manaRegen:7,range:125},
    abilities:{
      P:{name:'Break the Mold',desc:'Attacks steal armor and magic resistance from enemies. Gaining resistances empowers attacks to deal bonus damage.'},
      Q:{name:'Shattering Strike',desc:'Stabs forward dealing damage and breaking crowd control effects on nearby allies.'},
      W:{name:'Ferromancy: Crash Down',desc:'Mounts or dismounts. Mounting crashes down knocking up and dealing damage. Dismounting slows nearby enemies.'},
      E:{name:'Full Tilt',desc:'She and a target ally charge forward gaining speed. Colliding with enemies deals damage and slows.'},
      R:{name:'Magnet Storm',desc:'Erupts in magnetic fury pulling nearby enemies toward her and dealing damage. Does not interrupt dashes.'},
    }
  },
  'renekton': {
    stats:{hp:651,mana:0,ad:64,armor:38,mr:32,as:0.638,moveSpeed:345,hpRegen:10,range:175},
    abilities:{
      P:{name:'Reign of Anger',desc:'Generates Fury from taking damage. At 50+ Fury abilities are empowered consuming the Fury.'},
      Q:{name:'Cull the Meek',desc:'Sweeps his blade dealing damage and healing. Empowered version heals more and deals more damage.'},
      W:{name:'Ruthless Predator',desc:'Next attack strikes multiple times dealing damage and stunning. Empowered version stuns longer.'},
      E:{name:'Slice and Dice',desc:'Dashes forward and can re-cast to dash again. Empowered second dash reduces armor on hit.'},
      R:{name:'Dominus',desc:'Grows dealing damage per second to nearby enemies gaining bonus health and generating Fury.'},
    }
  },
  'rengar': {
    stats:{hp:600,mana:0,ad:62,armor:33,mr:32,as:0.658,moveSpeed:345,hpRegen:9,range:175},
    abilities:{
      P:{name:'Unseen Predator',desc:'Leaps to targets from brush. Kills generate Trophy stacks that eventually grant bonus abilities.'},
      Q:{name:'Savagery',desc:'Next attack or two attacks deal bonus damage. Empowered version also grants attack speed.'},
      W:{name:'Battle Roar',desc:'Deals magic damage to nearby enemies and heals himself. Empowered version also removes crowd control.'},
      E:{name:'Bola Strike',desc:'Throws a bola dealing damage and slowing. Empowered version roots instead of slowing.'},
      R:{name:'Thrill of the Hunt',desc:'Enters stealth revealing the nearest enemy champion. Gains movement speed and can leap to an enemy at the end.'},
    }
  },
  'riven': {
    stats:{hp:600,mana:0,ad:60,armor:33,mr:32,as:0.651,moveSpeed:345,hpRegen:9,range:125},
    abilities:{
      P:{name:'Runic Blade',desc:'Abilities charge her blade up to three times. Charged attacks deal bonus physical damage.'},
      Q:{name:'Broken Wings',desc:'Three-part attack. Each cast strikes in front dealing damage and the third knocks up enemies nearby.'},
      W:{name:'Ki Burst',desc:'Emits a burst of energy dealing damage and stunning nearby enemies briefly.'},
      E:{name:'Valor',desc:'Dashes forward and generates a shield that absorbs damage briefly.'},
      R:{name:'Blade of the Exile',desc:'First cast empowers her abilities and enables Wind Slash. Second cast fires a wave dealing massive damage scaling with missing health.'},
    }
  },
  'rumble': {
    stats:{hp:570,mana:0,ad:55,armor:33,mr:32,as:0.625,moveSpeed:335,hpRegen:9,range:125},
    abilities:{
      P:{name:'Junkyard Titan',desc:'Abilities generate Heat. Abilities at 50-99 Heat deal bonus damage. Overheating silences but empowers attacks.'},
      Q:{name:'Flamespitter',desc:'Breathes fire in front dealing damage over time. Deals bonus damage in the Danger Zone.'},
      W:{name:'Scrap Shield',desc:'Generates a shield and gains movement speed briefly. Deals bonus effect in the Danger Zone.'},
      E:{name:'Electro Harpoon',desc:'Fires a harpoon dealing damage and slowing. Second cast fires another. Deals bonus effect in the Danger Zone.'},
      R:{name:'The Equalizer',desc:'Fires a line of rockets that land in sequence creating a burning trail that deals damage and slows.'},
    }
  },
  'ryze': {
    stats:{hp:570,mana:418,ad:52,armor:22,mr:30,as:0.625,moveSpeed:325,hpRegen:7,manaRegen:8,range:550},
    abilities:{
      P:{name:'Arcane Mastery',desc:'Gains ability power from bonus mana. Abilities deal more damage when Overload is ready.'},
      Q:{name:'Overload',desc:'Hurls a blast dealing magic damage. Passively charges up dealing bonus damage and granting movement speed when Flux is active.'},
      W:{name:'Rune Prison',desc:'Roots an enemy dealing damage. Deals more damage and roots longer against Flux targets.'},
      E:{name:'Spell Flux',desc:'Projects a runic bolt that bounces between Ryze and nearby targets. Applies Flux and deals damage.'},
      R:{name:'Realm Warp',desc:'Opens a portal summoning a shared teleport for Ryze and nearby allies to a target location.'},
    }
  },
  'samira': {
    stats:{hp:570,mana:0,ad:56,armor:26,mr:30,as:0.679,moveSpeed:335,hpRegen:7,range:500},
    abilities:{
      P:{name:'Daredevil Impulse',desc:'Chains different attacks and abilities to build Style stacks. At S rank can use Inferno Trigger. Melee attacks knock up airborne enemies.'},
      Q:{name:'Flair',desc:'Fires a shot at range or slashes with her sword in melee. Destroys enemy missiles if timed correctly.'},
      W:{name:'Blade Whirl',desc:'Slashes around her twice dealing damage and destroying enemy missiles in the area.'},
      E:{name:'Wild Rush',desc:'Dashes through an enemy ally dealing damage. Killing enemies resets the cooldown.'},
      R:{name:'Inferno Trigger',desc:'Unleashes a flurry of shots in all directions dealing damage to nearby enemies. Requires S Style rank.'},
    }
  },
  'senna': {
    stats:{hp:570,mana:350,ad:52,armor:24,mr:30,as:0.625,moveSpeed:330,hpRegen:7,manaRegen:8,range:600},
    abilities:{
      P:{name:'Absolution',desc:'Enemies killed near her drop Mist. Collecting Mist grants attack damage crit chance and attack range permanently.'},
      Q:{name:'Piercing Darkness',desc:'Fires a beam from her gun that heals the first ally hit and damages the first enemy hit.'},
      W:{name:'Last Embrace',desc:'Throws a dark entity that roots the target and surrounding enemies after a brief delay.'},
      E:{name:'Curse of the Black Mist',desc:'Creates a mist that grants camouflage to herself and nearby allies and gives them movement speed.'},
      R:{name:'Dawning Shadow',desc:'Fires a global beam that shields allies in the center and deals damage to enemies. Allies on the edge gain a smaller shield.'},
    }
  },
  'seraphine': {
    stats:{hp:524,mana:418,ad:46,armor:21,mr:30,as:0.625,moveSpeed:325,hpRegen:6,manaRegen:8,range:550},
    abilities:{
      P:{name:'Stage Presence',desc:'Every third ability cast creates an Echo repeating the ability\'s effect. Nearby allies grant notes that reduce Echo cooldown.'},
      Q:{name:'High Note',desc:'Releases a pure note dealing magic damage. Damage increases based on target\'s missing health.'},
      W:{name:'Surround Sound',desc:'Sings granting a shield and movement speed to herself and nearby allies. Healing nearby shielded allies restores more health.'},
      E:{name:'Beat Drop',desc:'Releases a heavy soundwave dealing damage and slowing. Rooting or slowing enemies roots them instead.'},
      R:{name:'Encore',desc:'Releases an extended soundwave that charms all enemies hit and deals damage. Allies in the path extend the range.'},
    }
  },
  'sett': {
    stats:{hp:651,mana:0,ad:62,armor:38,mr:32,as:0.651,moveSpeed:340,hpRegen:10,range:125},
    abilities:{
      P:{name:'Pit Grit',desc:'Passively heals rapidly when low on health. Basic attacks alternate between left and right hands. Right hand deals bonus damage.'},
      Q:{name:'Knuckle Down',desc:'Gains movement speed toward enemies. Next two attacks deal bonus damage.'},
      W:{name:'Haymaker',desc:'Stores damage taken as Grit. Releases all Grit dealing true damage in the center and physical damage on the sides.'},
      E:{name:'Facebreaker',desc:'Pulls enemies on both sides toward him dealing damage and briefly stunning if he grabs an enemy on each side.'},
      R:{name:'The Show Stopper',desc:'Grabs an enemy champion and slams them into the ground dealing damage and slowing all nearby enemies.'},
    }
  },
  'shen': {
    stats:{hp:651,mana:0,ad:62,armor:45,mr:32,as:0.651,moveSpeed:340,hpRegen:10,range:125},
    abilities:{
      P:{name:'Ki Barrier',desc:'Periodically generates a shield after using an ability. Hitting champions with abilities reduces the cooldown.'},
      Q:{name:'Twilight Assault',desc:'Recalls his spirit blade dealing damage and empowering the next three attacks to deal bonus damage and slow.'},
      W:{name:'Spirit\'s Refuge',desc:'Creates a zone around the spirit blade where all basic attacks miss. Dashing to an ally moves the zone to them.'},
      E:{name:'Shadow Dash',desc:'Dashes in a direction dealing damage and taunting enemies hit. Restores energy per champion taunted.'},
      R:{name:'Stand United',desc:'Channels shielding a target ally anywhere on the map then teleports to their location.'},
    }
  },
  'shyvana': {
    stats:{hp:615,mana:0,ad:58,armor:33,mr:32,as:0.679,moveSpeed:350,hpRegen:9,range:125},
    abilities:{
      P:{name:'Dragonborn',desc:'Gains bonus armor and magic resistance. Killing dragons grants permanent bonus stats and enhances her abilities.'},
      Q:{name:'Twin Bite',desc:'Next attack strikes twice. In dragon form attacks nearby enemies around her.'},
      W:{name:'Burnout',desc:'Creates a ring of fire damaging nearby enemies and gaining movement speed. Extended by basic attacks.'},
      E:{name:'Flame Breath',desc:'Breathes fire in a cone dealing damage and marking enemies. In dragon form fires a fireball.'},
      R:{name:'Dragon\'s Descent',desc:'Transforms into a dragon dealing damage to enemies she passes through. Generates Fury to maintain dragon form.'},
    }
  },
  'singed': {
    stats:{hp:651,mana:287,ad:58,armor:36,mr:32,as:0.625,moveSpeed:345,hpRegen:9,manaRegen:7,range:125},
    abilities:{
      P:{name:'Noxious Slipstream',desc:'Drafting behind enemies grants Singed a burst of movement speed.'},
      Q:{name:'Poison Trail',desc:'Leaves a trail of poison behind him dealing damage to enemies in the trail.'},
      W:{name:'Mega Adhesive',desc:'Throws a vial of mega adhesive slowing all enemies in the area.'},
      E:{name:'Fling',desc:'Grabs the nearest enemy flinging them over his shoulder dealing damage and applying poison.'},
      R:{name:'Insanity Potion',desc:'Drinks an insane chemical concoction granting him combat stats and empowering all abilities.'},
    }
  },
  'sion': {
    stats:{hp:700,mana:287,ad:62,armor:45,mr:32,as:0.625,moveSpeed:340,hpRegen:10,manaRegen:7,range:175},
    abilities:{
      P:{name:'Glory in Death',desc:'Revives after dying with rapidly decaying health. Attacks during this time drain health from enemies.'},
      Q:{name:'Decimating Smash',desc:'Charges up then slams dealing damage and knocking up. Longer charge deals more damage over a larger area.'},
      W:{name:'Soul Furnace',desc:'Gains a shield. Killing units permanently increases max health. Activate to explode the shield dealing magic damage.'},
      E:{name:'Roar of the Slayer',desc:'Releases a shockwave slowing and dealing damage. Hitting enemies into other targets deals more damage.'},
      R:{name:'Unstoppable Onslaught',desc:'Charges in a direction with increasing speed dealing massive damage and knocking up enemies upon impact.'},
    }
  },
  'sivir': {
    stats:{hp:570,mana:280,ad:55,armor:24,mr:30,as:0.658,moveSpeed:330,hpRegen:7,manaRegen:7,range:500},
    abilities:{
      P:{name:'Fleet of Foot',desc:'Gains a burst of movement speed for a few seconds when attacking an enemy champion.'},
      Q:{name:'Boomerang Blade',desc:'Hurls her crossblade dealing damage on the way out and on the way back.'},
      W:{name:'Ricochet',desc:'Empowers her next attack to bounce between enemies dealing reduced damage with each bounce.'},
      E:{name:'Spell Shield',desc:'Creates a spell shield that blocks the next enemy ability and restores mana.'},
      R:{name:'On The Hunt',desc:'Rallies nearby allies granting them initial movement speed that decays over time. Also activates Fleet of Foot.'},
    }
  },
  'smolder': {
    stats:{hp:570,mana:350,ad:52,armor:24,mr:30,as:0.658,moveSpeed:330,hpRegen:7,manaRegen:8,range:525},
    abilities:{
      P:{name:'Dragon Practice',desc:'Hitting champions with abilities stacks Dragon Practice. Reaching 25 and 125 stacks evolves Q and W for bonus effects.'},
      Q:{name:'Super Scorcher Breath',desc:'Breathes a fireball dealing damage. Evolved version leaves a burning patch and executes minions.'},
      W:{name:'Achooo!',desc:'Sneezes a large fireball that detonates on the first champion hit dealing AoE damage. Evolved version leaves a burning zone.'},
      E:{name:'Flap Flap Flap',desc:'Flies upward briefly gaining movement speed toward enemies and damage reduction from towers.'},
      R:{name:'MMOOOMMMM!',desc:'Calls his mother who swoops down healing allies and damaging enemies in a large area globally.'},
    }
  },
  'sona': {
    stats:{hp:524,mana:418,ad:46,armor:21,mr:30,as:0.644,moveSpeed:325,hpRegen:6,manaRegen:8,range:550},
    abilities:{
      P:{name:'Power Chord',desc:'Every third ability cast empowers her next attack. Effect depends on last song played: damage slow or silence.'},
      Q:{name:'Hymn of Valor',desc:'Creates an aura that grants allies bonus attack damage and ability power. Fires bolts at nearby enemies.'},
      W:{name:'Aria of Perseverance',desc:'Creates an aura granting damage reduction. Heals herself and a nearby allied champion.'},
      E:{name:'Song of Celerity',desc:'Creates an aura granting movement speed to allies. Briefly gives Sona extra movement speed.'},
      R:{name:'Crescendo',desc:'Plays her ultimate dealing damage and briefly stunning all enemies in a line.'},
    }
  },
  'soraka': {
    stats:{hp:524,mana:418,ad:46,armor:21,mr:30,as:0.625,moveSpeed:325,hpRegen:6,manaRegen:8,range:550},
    abilities:{
      P:{name:'Salvation',desc:'Gains movement speed when moving toward low-health allies.'},
      Q:{name:'Starcall',desc:'Calls down a star dealing damage and slowing. Hitting enemies heals Soraka and grants movement speed.'},
      W:{name:'Astral Infusion',desc:'Heals a friendly champion at the cost of her own health. Cannot be cast when very low health.'},
      E:{name:'Equinox',desc:'Creates a zone of silence that deals damage. When the zone expires it roots enemies still inside.'},
      R:{name:'Wish',desc:'Calls upon the stars to heal all allied champions on the map. Bonus healing for allies below 40% health.'},
    }
  },
  'swain': {
    stats:{hp:570,mana:418,ad:52,armor:22,mr:30,as:0.625,moveSpeed:330,hpRegen:7,manaRegen:8,range:500},
    abilities:{
      P:{name:'Ravenous Flock',desc:'Can pull immobilized enemy champions toward him. Pieces of soul are released when champions die nearby.'},
      Q:{name:'Death\'s Hand',desc:'Fires bolts of eldritch energy dealing damage. The bolts converge at max range dealing massive damage to the first target hit.'},
      W:{name:'Vision of Empire',desc:'Creates a demonic eye at a location that deals damage and slows after a delay rooting enemies at the center.'},
      E:{name:'Nevermove',desc:'Launches a demonic tentacle that roots all enemies hit.'},
      R:{name:'Demonic Ascension',desc:'Transforms summoning demonic tentacles that drain health from nearby enemies. Second cast ends the transformation dealing burst damage.'},
    }
  },
  'syndra': {
    stats:{hp:524,mana:418,ad:52,armor:21,mr:30,as:0.625,moveSpeed:330,hpRegen:6,manaRegen:8,range:550},
    abilities:{
      P:{name:'Transcendent',desc:'Each ability gains additional effects at max rank. Dark Sphere damage increases Q deals more damage E additional sphere.'},
      Q:{name:'Dark Sphere',desc:'Conjures a Dark Sphere dealing magic damage. Spheres persist on the ground and can be used with other abilities.'},
      W:{name:'Force of Will',desc:'Grabs a Dark Sphere or enemy minion and throws it dealing damage and slowing.'},
      E:{name:'Scatter the Weak',desc:'Shoves all Dark Spheres in a direction dealing damage. Spheres that hit enemies stun them.'},
      R:{name:'Unleashed Power',desc:'Hurls all nearby Dark Spheres at an enemy dealing massive damage per sphere.'},
    }
  },
  'taliyah': {
    stats:{hp:570,mana:418,ad:52,armor:21,mr:30,as:0.625,moveSpeed:335,hpRegen:7,manaRegen:8,range:550},
    abilities:{
      P:{name:'Rock Surfing',desc:'Gains movement speed when moving near terrain. Moving through worked ground loses this buff.'},
      Q:{name:'Threaded Volley',desc:'Throws a volley of rocks dealing damage. Subsequent casts on worked ground throw fewer rocks.'},
      W:{name:'Seismic Shove',desc:'Creates a fissure that erupts knocking up enemies if aimed at a wall or toward her.'},
      E:{name:'Unraveled Earth',desc:'Places a field of moving stones that slows and deals damage. Enemies knocked through the field take damage and are stunned.'},
      R:{name:'Weaver\'s Wall',desc:'Creates a massive wall of stone across the map. Surfing the wall herself during cast.'},
    }
  },
  'talon': {
    stats:{hp:600,mana:0,ad:62,armor:33,mr:32,as:0.651,moveSpeed:345,hpRegen:9,range:175},
    abilities:{
      P:{name:'Blade\'s End',desc:'Hitting an enemy champion with three abilities stacks a bleed that deals damage over time when fully stacked.'},
      Q:{name:'Noxian Diplomacy',desc:'Stabs the target dealing physical damage. On champions opens a wound dealing bonus damage after a delay.'},
      W:{name:'Rake',desc:'Throws blades in a cone and recalls them. Both hit dealing damage. Return hit slows enemies.'},
      E:{name:'Assassin\'s Path',desc:'Vaults over any terrain on a long cooldown per wall.'},
      R:{name:'Shadow Assault',desc:'Disperses blades in an expanding circle becoming invisible and gaining movement speed. Blades return dealing damage.'},
    }
  },
  'teemo': {
    stats:{hp:524,mana:287,ad:48,armor:24,mr:30,as:0.690,moveSpeed:330,hpRegen:7,manaRegen:7,range:500},
    abilities:{
      P:{name:'Guerrilla Warfare',desc:'Becomes invisible after standing still briefly. Moving or attacking cancels stealth. Ambush bonus attack speed.'},
      Q:{name:'Blinding Dart',desc:'Fires a dart dealing damage and blinding the enemy for a short time causing their attacks to miss.'},
      W:{name:'Move Quick',desc:'Passively gains movement speed when not recently attacked. Activate to immediately gain the speed.'},
      E:{name:'Toxic Shot',desc:'Basic attacks poison the target dealing magic damage over time.'},
      R:{name:'Noxious Trap',desc:'Places an invisible mushroom that deals damage over time and slows enemies that step on it.'},
    }
  },
  'thresh': {
    stats:{hp:651,mana:287,ad:58,armor:45,mr:32,as:0.625,moveSpeed:330,hpRegen:9,manaRegen:7,range:125},
    abilities:{
      P:{name:'Damnation',desc:'Collects souls of enemies that die nearby permanently gaining armor and ability power.'},
      Q:{name:'Death Sentence',desc:'Throws his scythe hooking and pulling the first enemy hit. Re-cast to dash to the target.'},
      W:{name:'Dark Passage',desc:'Throws his lantern to a location. Allies can click it to dash to him. Also shields nearby allies.'},
      E:{name:'Flay',desc:'Passive charges bonus damage on attacks. Active sweeps his chain dealing damage and pushing or pulling enemies.'},
      R:{name:'The Box',desc:'Creates a pentagonal prison of walls. Enemies that break a wall take damage and are slowed.'},
    }
  },
  'tristana': {
    stats:{hp:570,mana:280,ad:55,armor:24,mr:30,as:0.679,moveSpeed:325,hpRegen:6,manaRegen:7,range:525},
    abilities:{
      P:{name:'Draw a Bead',desc:'Increases her attack range as she levels up.'},
      Q:{name:'Rapid Fire',desc:'Increases attack speed massively for a few seconds.'},
      W:{name:'Rocket Jump',desc:'Jumps to a location dealing damage and slowing. Resets on kills and assists.'},
      E:{name:'Explosive Charge',desc:'Places a bomb on an enemy that stacks with attacks and abilities. Detonates at max stacks dealing damage.'},
      R:{name:'Buster Shot',desc:'Fires a massive cannonball dealing damage and knocking the target and nearby enemies back.'},
    }
  },
  'tryndamere': {
    stats:{hp:651,mana:0,ad:66,armor:33,mr:32,as:0.670,moveSpeed:345,hpRegen:14,range:125},
    abilities:{
      P:{name:'Battle Fury',desc:'Generates Fury on attacks. Fury converts to critical strike chance. Gains Fury when taking damage.'},
      Q:{name:'Bloodlust',desc:'Passively gains attack damage from Fury. Activate to consume Fury and heal.'},
      W:{name:'Mocking Shout',desc:'Decreases all enemies\' attack damage in front. Enemies that are moving away are also slowed.'},
      E:{name:'Spinning Slash',desc:'Spins through a target dealing damage. Crits reduce its cooldown.'},
      R:{name:'Undying Rage',desc:'Becomes unkillable for several seconds. Cannot be reduced below 1 health during this time.'},
    }
  },
  'twisted-fate': {
    stats:{hp:524,mana:418,ad:52,armor:21,mr:30,as:0.651,moveSpeed:330,hpRegen:6,manaRegen:8,range:525},
    abilities:{
      P:{name:'Loaded Dice',desc:'On kill rolls dice granting bonus gold.'},
      Q:{name:'Wild Cards',desc:'Throws three cards in a spread dealing damage to all enemies hit.'},
      W:{name:'Pick a Card',desc:'Cycles through three cards. Gold Card stuns. Red Card deals AoE damage and slows. Blue Card deals damage and restores mana.'},
      E:{name:'Stacked Deck',desc:'Passive every fourth attack deals bonus magic damage. Passive also reduces Pick a Card cooldown on attacks.'},
      R:{name:'Destiny',desc:'Reveals all enemy champions on the map briefly. Can teleport to any visible location during this time.'},
    }
  },
  'twitch': {
    stats:{hp:570,mana:287,ad:52,armor:24,mr:30,as:0.679,moveSpeed:330,hpRegen:7,manaRegen:7,range:550},
    abilities:{
      P:{name:'Deadly Venom',desc:'Basic attacks infect enemies with Deadly Venom dealing true damage per second stacking up to six times.'},
      Q:{name:'Ambush',desc:'Enters stealth gaining movement speed. When breaking stealth attacks deal bonus damage and gain attack speed briefly.'},
      W:{name:'Venom Cask',desc:'Hurls a cask slowing enemies in an area and applying stacks of Deadly Venom.'},
      E:{name:'Contaminate',desc:'Deals damage in an area based on stacks of Deadly Venom on each enemy.'},
      R:{name:'Spray and Pray',desc:'Gains attack speed and range. Attacks pierce through all enemies in their path.'},
    }
  },
  'urgot': {
    stats:{hp:651,mana:280,ad:62,armor:38,mr:32,as:0.638,moveSpeed:335,hpRegen:9,manaRegen:7,range:350},
    abilities:{
      P:{name:'Echoing Flames',desc:'His legs periodically fire in the direction of his attacks dealing physical damage in a cone.'},
      Q:{name:'Corrosive Charge',desc:'Fires an explosive charge at a location dealing damage and slowing enemies in the area.'},
      W:{name:'Purge',desc:'Rapidly fires his legs at nearby enemies locking onto champions dealing physical damage and triggering Echoing Flames.'},
      E:{name:'Disdain',desc:'Charges forward dealing damage and grabbing the first enemy champion hit flinging them behind him.'},
      R:{name:'Fear Beyond Death',desc:'Fires a chem-drill that executes enemies below a health threshold. If it kills pulls them through his grinder fearing nearby enemies.'},
    }
  },
  'varus': {
    stats:{hp:570,mana:350,ad:52,armor:24,mr:30,as:0.658,moveSpeed:330,hpRegen:7,manaRegen:8,range:575},
    abilities:{
      P:{name:'Living Vengeance',desc:'On kill or assist against champions gains attack speed temporarily. Minion kills give a smaller bonus.'},
      Q:{name:'Piercing Arrow',desc:'Charges up then fires a long-range arrow dealing more damage the longer it charges.'},
      W:{name:'Blighted Quiver',desc:'Passive basic attacks stack Blight on enemies. Abilities detonate the stacks dealing bonus damage.'},
      E:{name:'Hail of Arrows',desc:'Fires a hail of arrows dealing damage and desecrating the ground reducing healing and slowing enemies.'},
      R:{name:'Chain of Corruption',desc:'Launches a tendril of corruption rooting the first champion hit and spreading to nearby enemies.'},
    }
  },
  'vayne': {
    stats:{hp:570,mana:0,ad:54,armor:24,mr:30,as:0.658,moveSpeed:330,hpRegen:7,range:550},
    abilities:{
      P:{name:'Night Hunter',desc:'Gains bonus movement speed when moving toward visible enemy champions.'},
      Q:{name:'Tumble',desc:'Rolls forward empowering the next attack to deal bonus physical damage.'},
      W:{name:'Silver Bolts',desc:'Every third consecutive attack deals true damage based on the target\'s max health.'},
      E:{name:'Condemn',desc:'Fires a bolt of energy knocking the target back. If they hit a wall they are pinned and stunned briefly.'},
      R:{name:'Final Hour',desc:'Gains bonus attack damage and reduced Tumble cooldown. Tumble briefly grants invisibility while active.'},
    }
  },
  'veigar': {
    stats:{hp:524,mana:418,ad:50,armor:21,mr:30,as:0.625,moveSpeed:330,hpRegen:6,manaRegen:8,range:550},
    abilities:{
      P:{name:'Phenomenal Evil Power',desc:'Damaging enemy champions with abilities and killing them grants permanent bonus ability power.'},
      Q:{name:'Baleful Strike',desc:'Unleashes a bolt of dark energy dealing magic damage. Killing enemies with it grants bonus AP stacks.'},
      W:{name:'Dark Matter',desc:'Calls a meteor to fall dealing magic damage after a brief delay.'},
      E:{name:'Event Horizon',desc:'Creates a cage that stuns enemies that pass through its borders.'},
      R:{name:'Primordial Burst',desc:'Blasts an enemy with magical energy dealing massive damage scaling with the target\'s missing health.'},
    }
  },
  'velkoz': {
    stats:{hp:524,mana:418,ad:50,armor:21,mr:30,as:0.625,moveSpeed:330,hpRegen:6,manaRegen:8,range:550},
    abilities:{
      P:{name:'Organic Deconstruction',desc:'Abilities apply a stack. Three stacks cause a true damage burst and reset the stacks.'},
      Q:{name:'Plasma Fission',desc:'Fires a bolt that splits perpendicular to its path when re-cast or when it hits an enemy.'},
      W:{name:'Void Ooze',desc:'Launches a gooey projectile dealing damage. Leaves a trail slowing enemies that walk through it.'},
      E:{name:'Tectonic Disruption',desc:'Creates a localized earthquake dealing damage and briefly knocking up enemies.'},
      R:{name:'Life Form Disintegration Ray',desc:'Channels a powerful disintegration beam dealing massive damage per second to all enemies hit.'},
    }
  },
  'vex': {
    stats:{hp:570,mana:418,ad:52,armor:22,mr:30,as:0.625,moveSpeed:330,hpRegen:7,manaRegen:8,range:550},
    abilities:{
      P:{name:'Doom \'n Gloom',desc:'Periodically becomes Doomy interrupting the next dash near her and marking the dasher with Gloom. Marked enemies can be feared.'},
      Q:{name:'Mistral Bolt',desc:'Fires a bolt that accelerates mid-flight dealing magic damage and triggering Gloom.'},
      W:{name:'Personal Space',desc:'Creates a shield and emits a burst dealing magic damage to nearby enemies triggering Gloom.'},
      E:{name:'Looming Darkness',desc:'Summons a growing shadow that slows and deals damage when it lands triggering Gloom on contact.'},
      R:{name:'Shadow Surge',desc:'Launches her shadow dealing damage and marking the first champion hit. Re-cast to dash to the marked target.'},
    }
  },
  'vi': {
    stats:{hp:615,mana:280,ad:58,armor:33,mr:32,as:0.644,moveSpeed:340,hpRegen:9,manaRegen:7,range:125},
    abilities:{
      P:{name:'Blast Shield',desc:'Activating abilities generates a shield briefly. Has a short cooldown.'},
      Q:{name:'Vault Breaker',desc:'Charges up a powerful punch dashing forward. The longer the charge the farther and harder the punch.'},
      W:{name:'Denting Blows',desc:'Every third attack on the same target deals bonus damage and reduces their armor while granting attack speed.'},
      E:{name:'Relentless Force',desc:'Fires a short-range blast dealing damage. Resets on takedowns.'},
      R:{name:'Cease and Desist',desc:'Charges to a target knocking aside enemies in the path. Deals damage and knocks up the target.'},
    }
  },
  'viego': {
    stats:{hp:600,mana:0,ad:62,armor:33,mr:32,as:0.658,moveSpeed:345,hpRegen:9,range:175},
    abilities:{
      P:{name:'Sovereign\'s Domination',desc:'When Viego kills an enemy champion he temporarily possesses their body. Heals on entering possession.'},
      Q:{name:'Blade of the Ruined King',desc:'Passive deals percent health damage on every second attack. Active dashes forward dealing damage.'},
      W:{name:'Spectral Maw',desc:'Charges up a dash that stuns the first enemy hit on release.'},
      E:{name:'Harrowed Path',desc:'Spreads black mist around nearby terrain granting camouflage and movement speed inside the mist.'},
      R:{name:'Heartbreaker',desc:'Discards any possessed body and teleports to the enemy champion with the lowest percent health in range dealing damage.'},
    }
  },
  'viktor': {
    stats:{hp:524,mana:418,ad:52,armor:22,mr:30,as:0.625,moveSpeed:325,hpRegen:6,manaRegen:8,range:525},
    abilities:{
      P:{name:'Glorious Evolution',desc:'Kills and assists generate Hex Fragments. Collecting enough upgrades his abilities with powerful new effects.'},
      Q:{name:'Siphon Power',desc:'Fires a bolt dealing magic damage and granting a shield. Evolved version empowers the next attack.'},
      W:{name:'Gravity Field',desc:'Places a device that slows enemies inside. Enemies slowed three times are stunned.'},
      E:{name:'Death Ray',desc:'Fires a beam across the area dealing magic damage. Evolved version leaves an explosion trail.'},
      R:{name:'Chaos Storm',desc:'Creates a singularity dealing initial magic damage and silencing. The storm continues dealing damage and can be moved by re-casting.'},
    }
  },
  'vladimir': {
    stats:{hp:570,mana:0,ad:52,armor:24,mr:32,as:0.625,moveSpeed:335,hpRegen:7,range:450},
    abilities:{
      P:{name:'Crimson Pact',desc:'Bonus health grants ability power and bonus ability power grants health.'},
      Q:{name:'Transfusion',desc:'Drains a target\'s blood dealing magic damage and healing himself. Generates resource charges passively.'},
      W:{name:'Sanguine Pool',desc:'Sinks into a pool of blood becoming untargetable and slowing enemies above. Consumes a portion of current health.'},
      E:{name:'Tides of Blood',desc:'Deals magic damage to nearby enemies. Stacks to become empowered dealing more damage in a larger area.'},
      R:{name:'Hemoplague',desc:'Infects enemies in an area increasing all damage they take. After a delay deals magic damage.'},
    }
  },
  'volibear': {
    stats:{hp:651,mana:0,ad:62,armor:38,mr:32,as:0.638,moveSpeed:350,hpRegen:10,range:125},
    abilities:{
      P:{name:'The Relentless Storm',desc:'As he attacks he gains increasing attack speed and his attacks become empowered with lightning. Damages turrets during ultimate.'},
      Q:{name:'Thundering Smash',desc:'Gains movement speed toward enemies and stuns the first one he attacks briefly.'},
      W:{name:'Frenzied Maul',desc:'Mauls a target dealing damage and applying a mark. Attacking the mark again deals bonus damage and heals him.'},
      E:{name:'Sky Splitter',desc:'Calls down lightning at a location dealing damage and slowing inside. Shields himself if inside the area.'},
      R:{name:'Stormbringer',desc:'Leaps to a target dealing damage and disabling turrets briefly. Creates a storm that deals magic damage.'},
    }
  },
  'warwick': {
    stats:{hp:651,mana:0,ad:62,armor:38,mr:32,as:0.638,moveSpeed:345,hpRegen:14,range:175},
    abilities:{
      P:{name:'Eternal Hunger',desc:'Basic attacks deal bonus magic damage and heal him. At low health the healing triples.'},
      Q:{name:'Jaws of the Beast',desc:'Bites an enemy dealing damage and healing. Holding the button lunges and clamps onto them dealing damage over time.'},
      W:{name:'Blood Hunt',desc:'Passively senses low-health enemies granting movement speed toward them. Activate to gain the speed toward any enemy.'},
      E:{name:'Primal Howl',desc:'Reduces incoming damage briefly then releases a howl fearing nearby enemies.'},
      R:{name:'Infinite Duress',desc:'Leaps at an enemy suppressing them and rapidly striking them while holding on.'},
    }
  },
  'wukong': {
    stats:{hp:615,mana:287,ad:62,armor:36,mr:32,as:0.638,moveSpeed:345,hpRegen:9,manaRegen:7,range:175},
    abilities:{
      P:{name:'Stone Skin',desc:'Gains bonus armor and max health when nearby enemy champions are visible.'},
      Q:{name:'Crushing Blow',desc:'Next attack deals bonus damage and reduces the target\'s armor briefly.'},
      W:{name:'Warrior Trickster',desc:'Becomes invisible briefly leaving behind a decoy that attacks nearby enemies.'},
      E:{name:'Nimbus Strike',desc:'Dashes to a target dealing damage and summoning images to attack nearby enemies granting attack speed.'},
      R:{name:'Cyclone',desc:'Spins his staff dealing damage and knocking up enemies. Can move while spinning. Re-cast to leap upward.'},
    }
  },
  'xayah': {
    stats:{hp:570,mana:280,ad:52,armor:24,mr:30,as:0.644,moveSpeed:330,hpRegen:7,manaRegen:7,range:525},
    abilities:{
      P:{name:'Clean Cuts',desc:'After using an ability basic attacks hit all targets in a line and leave behind Feathers.'},
      Q:{name:'Double Daggers',desc:'Throws two damaging blades that leave Feathers where they land.'},
      W:{name:'Deadly Plumage',desc:'Creates a storm of blades granting attack speed and bonus damage. Dashing to Rakan extends the duration.'},
      E:{name:'Bladecaller',desc:'Recalls all Feathers to her dealing damage. Enemies hit by multiple Feathers are briefly rooted.'},
      R:{name:'Featherstorm',desc:'Leaps into the air becoming briefly untargetable then crashes down dealing damage in a line with a barrage of feathers.'},
    }
  },
  'xin-zhao': {
    stats:{hp:615,mana:280,ad:62,armor:36,mr:32,as:0.645,moveSpeed:345,hpRegen:9,manaRegen:7,range:175},
    abilities:{
      P:{name:'Determination',desc:'Every third attack deals bonus damage and heals himself.'},
      Q:{name:'Three Talon Strike',desc:'Empowers the next three attacks to deal bonus damage. The third attack knocks the target into the air.'},
      W:{name:'Wind Becomes Lightning',desc:'Slashes in front dealing damage then thrusts dealing damage and slowing.'},
      E:{name:'Audacious Charge',desc:'Charges to a target dealing damage to all enemies nearby. Briefly grants attack speed.'},
      R:{name:'Crescent Guard',desc:'Creates a zone and challenges nearby enemy champions. Enemies outside the zone are knocked back.'},
    }
  },
  'yasuo': {
    stats:{hp:570,mana:0,ad:60,armor:30,mr:32,as:0.679,moveSpeed:345,hpRegen:7,range:175},
    abilities:{
      P:{name:'Way of the Wanderer',desc:'Passive has two parts. Intent builds a shield when moving. Resolve doubles his critical strike chance.'},
      Q:{name:'Steel Tempest',desc:'Thrusts his sword dealing damage. Third stack fires a tornado that knocks up enemies in a line.'},
      W:{name:'Wind Wall',desc:'Creates a wall that blocks all enemy projectiles for several seconds.'},
      E:{name:'Sweeping Blade',desc:'Dashes through a target dealing magic damage. Cannot re-use on the same target briefly.'},
      R:{name:'Last Breath',desc:'Blinks to an airborne target dealing damage and holding all airborne enemies briefly. Grants armor penetration for a period.'},
    }
  },
  'yone': {
    stats:{hp:570,mana:0,ad:60,armor:30,mr:32,as:0.679,moveSpeed:345,hpRegen:7,range:175},
    abilities:{
      P:{name:'Way of the Hunter',desc:'Every second attack deals magic damage. Critical strike chance is doubled but crits deal less damage.'},
      Q:{name:'Mortal Steel',desc:'Thrusts his sword dealing physical damage. Third stack dashes forward and launches enemies into the air.'},
      W:{name:'Spirit Cleave',desc:'Cleaves forward dealing damage in a cone. Grants a shield based on enemies hit.'},
      E:{name:'Soul Unbound',desc:'Enters his spirit form leaving his body behind. When the ability ends snaps back to his body dealing a portion of damage dealt.'},
      R:{name:'Fate Sealed',desc:'Blinks behind the furthest champion in a direction pulling all enemies hit toward him and knocking them into the air.'},
    }
  },
  'yuumi': {
    stats:{hp:524,mana:418,ad:46,armor:21,mr:30,as:0.625,moveSpeed:330,hpRegen:6,manaRegen:8,range:550},
    abilities:{
      P:{name:'Bop \'n Block',desc:'Periodically her next attack deals bonus magic damage and grants a shield. Attaching to an ally refreshes this.'},
      Q:{name:'Prowling Projectile',desc:'Fires a missile that deals damage and slows. Can be steered while attached to an ally.'},
      W:{name:'You and Me!',desc:'Attaches to an allied champion becoming untargetable and moving with them. Stats are partially shared.'},
      E:{name:'Zoomies',desc:'Heals and grants movement speed and attack speed to herself or her attached ally.'},
      R:{name:'Final Chapter',desc:'Fires seven waves dealing damage and rooting enemies hit by multiple waves.'},
    }
  },
  'zed': {
    stats:{hp:600,mana:0,ad:62,armor:33,mr:32,as:0.651,moveSpeed:345,hpRegen:9,range:125},
    abilities:{
      P:{name:'Contempt for the Weak',desc:'When an enemy is below 50% health basic attacks deal bonus magic damage. Can only trigger once every few seconds.'},
      Q:{name:'Razor Shuriken',desc:'Throws a shuriken dealing physical damage. Shadow shurikens deal less damage.'},
      W:{name:'Living Shadow',desc:'Passive generates energy on shadow ability hits. Active throws a shadow that mimics his abilities.'},
      E:{name:'Shadow Slash',desc:'Slashes nearby enemies dealing physical damage and slowing them briefly.'},
      R:{name:'Death Mark',desc:'Becomes untargetable and dashes to an enemy marking them. After a few seconds the mark detonates dealing damage based on damage dealt.'},
    }
  },
  'zeri': {
    stats:{hp:570,mana:280,ad:52,armor:24,mr:30,as:0.658,moveSpeed:330,hpRegen:7,manaRegen:7,range:500},
    abilities:{
      P:{name:'Living Battery',desc:'Basic attacks generate charges against shields. Damaging a shield absorbs it granting her a shield.'},
      Q:{name:'Burst Fire',desc:'Rapidly fires a burst of rounds dealing physical damage. Passive basic attack that generates Spark charges.'},
      W:{name:'Ultrashock Laser',desc:'Fires an electric pulse dealing damage and slowing the first enemy hit. Hitting terrain fires a huge laser.'},
      E:{name:'Spark Surge',desc:'Dashes and energizes for a brief time causing bullets to pierce through enemies.'},
      R:{name:'Lightning Crash',desc:'Discharges electricity dealing damage to nearby enemies and overcharging herself with stacking speed on hit.'},
    }
  },
  'ziggs': {
    stats:{hp:524,mana:418,ad:52,armor:21,mr:30,as:0.625,moveSpeed:330,hpRegen:6,manaRegen:8,range:550},
    abilities:{
      P:{name:'Short Fuse',desc:'Periodically empowers his next basic attack to deal bonus magic damage and deal extra damage to structures.'},
      Q:{name:'Bouncing Bomb',desc:'Throws a bouncing bomb that explodes after three bounces or on re-cast dealing damage.'},
      W:{name:'Satchel Charge',desc:'Flings an explosive that detonates after a delay or when re-cast dealing damage and knocking back.'},
      E:{name:'Hexplosive Minefield',desc:'Scatters a minefield of mines that explode on contact dealing damage and slowing.'},
      R:{name:'Mega Inferno Bomb',desc:'Deploys his ultimate bomb dropping it from long range dealing massive damage in a large area.'},
    }
  },
  'zilean': {
    stats:{hp:524,mana:418,ad:46,armor:21,mr:30,as:0.625,moveSpeed:330,hpRegen:6,manaRegen:8,range:550},
    abilities:{
      P:{name:'Time in a Bottle',desc:'Gains experience over time and can donate it to nearby allies to level them up.'},
      Q:{name:'Time Bomb',desc:'Tosses a ticking time bomb that explodes after a delay. Placing two bombs on the same target stuns nearby enemies.'},
      W:{name:'Rewind',desc:'Reduces all other ability cooldowns by a set amount.'},
      E:{name:'Time Warp',desc:'Grants a large amount of movement speed to allies or slows enemies.'},
      R:{name:'Chronoshift',desc:'Places a watch on an ally. If they take lethal damage they are briefly immune then revived with bonus health.'},
    }
  },
  'zoe': {
    stats:{hp:524,mana:418,ad:52,armor:21,mr:30,as:0.625,moveSpeed:330,hpRegen:6,manaRegen:8,range:550},
    abilities:{
      P:{name:'More Sparkles!',desc:'After casting an ability her next basic attack deals bonus magic damage.'},
      Q:{name:'Paddle Star!',desc:'Fires a star dealing magic damage. Can be re-cast to redirect it. Damage increases with travel distance.'},
      W:{name:'Spell Thief',desc:'Picks up summoner spell items dropped by enemies. Stores and can cast their summoner spells temporarily.'},
      E:{name:'Sleepy Trouble Bubble',desc:'Throws a bubble that puts the first enemy hit to sleep. Deals bonus damage when they wake up.'},
      R:{name:'Portal Jump',desc:'Briefly blinks to a nearby location then returns. Can use abilities while there but cannot move.'},
    }
  },
  'zyra': {
    stats:{hp:524,mana:418,ad:46,armor:21,mr:30,as:0.625,moveSpeed:330,hpRegen:6,manaRegen:8,range:575},
    abilities:{
      P:{name:'Garden of Thorns',desc:'Seeds periodically spawn near Zyra. Abilities cast near seeds grow them into plants that attack enemies.'},
      Q:{name:'Deadly Spines',desc:'Shoots thorns that deal damage and grow a Thorn Spitter plant from nearby seeds.'},
      W:{name:'Rampant Growth',desc:'Plants a seed that can be grown into a plant by her abilities. Seeds grant vision briefly.'},
      E:{name:'Grasping Roots',desc:'Sends a vine forward dealing damage and rooting enemies hit. Grows a Vine Lasher from nearby seeds.'},
      R:{name:'Stranglethorns',desc:'Summons a jungle that deals damage and briefly knocks up all enemies in the area. Nearby plants are enraged.'},
    }
  },
}