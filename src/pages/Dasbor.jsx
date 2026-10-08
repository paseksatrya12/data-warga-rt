import { useState } from 'react'
import WelcomeBanner from '../components/WelcomeBanner.jsx'
import KpiGrid from '../components/KpiGrid.jsx'
import DemografiUsia from '../components/DemografiUsia.jsx'
import DemografiGender from '../components/DemografiGender.jsx'
import Warta from '../components/Warta.jsx'
import Ronda from '../components/Ronda.jsx'

export default function Dasbor() {
  const [logMessage, setLogMessage] = useState('')

  const handleCheckLog = () => {
    setLogMessage('Memuat log riwayat Panic Button: seluruh pos terdata kondusif dalam 48 jam terakhir.')
    window.setTimeout(() => setLogMessage(''), 4500)
  }

  return (
    <div className="flex w-full flex-col gap-space-xl">
      <WelcomeBanner onCheckLog={handleCheckLog} />
      {logMessage && (
        <div className="rounded-xl bg-secondary-container px-space-md py-space-sm text-label-lg text-on-secondary-container">
          {logMessage}
        </div>
      )}
      <KpiGrid />
      <section className="grid grid-cols-1 gap-space-lg lg:grid-cols-12">
        <DemografiUsia />
        <DemografiGender />
      </section>
      <section className="grid grid-cols-1 gap-space-lg lg:grid-cols-12">
        <Warta />
        <Ronda />
      </section>
    </div>
  )
}
