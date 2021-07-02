import Head from 'next/head'
import Navbar from '../src/components/module/Navbar'

export default function Home() {
  return (
    <div className="flex flex-col items-center min-h-screen font-body">
      <Head>
        <title>Studext - Home</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <main className="">
        <h3>halo</h3>
      </main>
    </div>
  )
}
