import { useEffect, useState } from 'react'
import Sidebar from './components/Sidebar.jsx'
import Header from './components/Header.jsx'
import Dasbor from './pages/Dasbor.jsx'
import DataWarga from './pages/DataWarga.jsx'
import LayananSurat from './pages/LayananSurat.jsx'
import KeuanganRonda from './pages/KeuanganRonda.jsx'
import { navItems } from './data/navigasi'

const pages = {
  dasbor: Dasbor,
  warga: DataWarga,
  surat: LayananSurat,
  keuangan: KeuanganRonda
}

const pageFromHash = () => {
  const id = window.location.hash.slice(1)
  return navItems.some((item) => item.id === id) ? id : 'dasbor'
}

export default function App() {
  const [activePage, setActivePage] = useState(pageFromHash)

  useEffect(() => {
    const onHashChange = () => setActivePage(pageFromHash())
    window.addEventListener('hashchange', onHashChange)
    return () => window.removeEventListener('hashchange', onHashChange)
  }, [])

  const handleNavigate = (id) => {
    window.location.hash = id
    window.scrollTo({ top: 0 })
  }

  const Page = pages[activePage]

  return (
    <div className="min-h-screen bg-background font-sans text-on-surface">
      <Sidebar activePage={activePage} onNavigate={handleNavigate} />
      <div className="flex min-h-screen flex-col lg:pl-72">
        <Header />
        <main className="w-full flex-1 bg-background p-gutter pt-[5.5rem]">
          <Page />
        </main>
      </div>
    </div>
  )
}
