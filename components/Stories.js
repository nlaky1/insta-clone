import faker from '@faker-js/faker'
import Story from './Story'
import { useEffect, useState } from 'react'

import { signIn, signOut, useSession } from 'next-auth/react'

function Stories() {
  const [suggestions, setSuggestions] = useState([])

  useEffect(() => {
    const suggestions = [...Array(20)].map((_, i) => ({
      ...faker.helpers.contextualCard(),
      id: i,
    }))
    console.log(suggestions)
    setSuggestions(suggestions)
  }, [])
  const { data: session } = useSession()
  return (
    <>
      {session && (
        <div
          className="mt-8 flex space-x-2 overflow-x-scroll rounded-sm border border-gray-200 bg-white p-6
    scrollbar-thin scrollbar-thumb-black"
        >
          {session && (
            <Story img={session.user.image} username={session.username} />
          )}

          {session &&
            suggestions.map((profile) => (
              <Story
                key={profile.id}
                img={profile.avatar}
                username={profile.username}
              />
            ))}
        </div>
      )}
    </>
  )
}

export default Stories
