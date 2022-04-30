import Stroies from './Stories'
import Posts from './Posts'
import MiniProfile from './MiniProfile'
import Suggestions from './Suggestions'
import { signIn, signOut, useSession } from 'next-auth/react'


function Feed() {
  const { data: session } = useSession()
  return (
    <>
      {session && (
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
      ) }
    </>
  )
}

export default Feed
