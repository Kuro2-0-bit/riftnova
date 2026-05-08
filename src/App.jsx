import { useState } from 'react'
import Navbar from './components/Navbar'
import ChampionGrid from './components/ChampionGrid'
import ChampionDetail from './components/ChampionDetail'
import TierList from './components/TierList'
import ItemList from './components/ItemList'
import RuneList from './components/RuneList'
import BuildCalculator from './components/BuildCalculator'

export default function App() {
  const [page, setPage] = useState('home')
  const [selectedChamp, setSelectedChamp] = useState(null)
  const [roleFilter, setRoleFilter] = useState('All')
  const [search, setSearch] = useState('')

  const navigate = (p, champ = null) => {
    setPage(p)
    setSelectedChamp(champ)
    window.scrollTo(0, 0)
  }

  return (
    <div style={{ minHeight: '100vh', background: '#0d1117' }}>
      <Navbar page={page} navigate={navigate} search={search} setSearch={setSearch} roleFilter={roleFilter} setRoleFilter={setRoleFilter} />
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '24px 16px' }}>
        {page === 'home' && <ChampionGrid navigate={navigate} roleFilter={roleFilter} search={search} />}
        {page === 'champion' && <ChampionDetail champ={selectedChamp} navigate={navigate} />}
        {page === 'tiers' && <TierList navigate={navigate} />}
        {page === 'items' && <ItemList />}
        {page === 'runes' && <RuneList />}
        {page === 'calculator' && <BuildCalculator />}
      </div>
    </div>
  )
}