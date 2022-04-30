import Stroies from './Stories'
import Posts from './Posts'
import MiniProfile from './MiniProfile'
import Suggestions from './Suggestions'
import { signIn, signOut, useSession } from 'next-auth/react'

function Feed() {
  const { data: session } = useSession()
  return (
    <>
      {session ? (
        <main
          className={`mx-auto grid grid-cols-1 md:max-w-3xl md:grid-cols-2 xl:max-w-6xl xl:grid-cols-3 ${
            !session && '!max-w-3xl !grid-cols-1'
          }`}
        >
          {/* Section Left*/}
          <section className="col-span-2 ">
            <Stroies />
            <Posts />
          </section>

          {session && (
            <section className="hidden md:col-span-1 xl:inline-grid">
              {/* Mini Profile*/}
              <div className="fixed top-20">
                <MiniProfile />

                <Suggestions />
              </div>
            </section>
          )}
        </main>
      ) : (
        <div className="-mt-56 flex min-h-screen flex-col items-center justify-center py-2 px-14 text-center ">
          <img className="w-80" src="https://links.papareact.com/ocw" alt="" />
          <p className="font-xs italic">
            This is not real app this for portfolio purpose
          </p>

          <button className="py-2.5 pt-10 px-5 mr-2 mb-2 text-sm font-medium text-white focus:outline-none bg-blue-700 rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-blue-400 dark:bg-blue-500 light:text-white-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700
            " onClick={signIn}>
              Sign in with Google
            </button>
        </div>
      )}
    </>
  )
}

export default Feed
