import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import  Header from '../components/Header'
import  Feed from '../components/Feed'
import Modal from '../components/Modal'
import { signIn, signOut, useSession } from 'next-auth/react'

const { data: session } = useSession()
const Home: NextPage = () => {
  
  
  return (
   
   
    <div className="bg-gray-50 h-screen overflow-y-scroll scrollbar-hide">
      
      
      <Head>
        <title>Instagram</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      <Feed />

      {!session && (
        <div className="flex flex-col items-center justify-center min-h-screen py-2 -mt-56 px-14 text-center ">
        <img className="w-80" src="https://links.papareact.com/ocw"
        alt="" />
        <p className="font-xs italic">
          This is not real app this for portfolio purpose
        </p>
        </div>

      )}
      
      <Modal />
    </div>
    
    
   
  )
}

export default Home
