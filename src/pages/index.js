import Image from 'next/image'
import { Inter } from 'next/font/google'
import Link from 'next/link'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  

  return (   
       <div>
        <Link href="/chat">
          <img className='mx-auto' src="/AIcoach.png" />
        </Link>
       </div>
  )
}
