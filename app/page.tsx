import CompanionCard from '@/components/CompanionCard'
import Cta from '@/components/Cta'
import CompanionsList from '@/components/CompanionsList'
import { Button } from '@/components/ui/button'
import React from 'react'
import { recentSessions } from '@/constants'

const Page = () => {
  return (
    <div>
      <h1 className="test-2xl underline">Populer Companions</h1>
      <section className='home-section'>
        <CompanionCard 
          id = "123"
          name = "Neura the brainy explorer"
          topic = "Neural Network of the brain"
          subject = "science"
          duration = {45}
          color="#ffda6e"
          test = "test"
        />
        <CompanionCard
          id = "456"
          name = "Countsy the Number Wizard"
          topic = "Derivative and Integrals"
          subject = "math"
          duration = {45}
          color="#e5d0ff"
          test = "test"
        />
        <CompanionCard
          id = "789"
          name = "Verba the Vocabulary Builder"
          topic = "language"
          subject = "English Literature"
          duration = {30}
          color="#BDE7FF"
          test = "test"
        />
      </section>
      <section className='home-section'>
        <CompanionsList
          title="Recently completed Sessions"
          companions={recentSessions} //accessing data in the index.ts file
          classNames = 'w-2/3 max-lg:w-full'
        />
        <Cta />
      </section>
    </div>
  )
}

export default Page