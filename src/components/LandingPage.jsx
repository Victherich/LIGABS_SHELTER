import React from 'react'
import Hero from './Hero'
import AboutSummary from './AboutSummary'
import CoreValues from './CoreValues'
import FeaturedProperties from './FeaturedProperties'
import WhyChooseUs from './WhyChooseUs'
import LeadershipPreview from './LeadershipPreview'
import CtaBanner from './CtaBanner'

const LandingPage = () => {
  return (
    <div>
      <Hero/>
      <AboutSummary/>
      <CoreValues/>
      <FeaturedProperties/>
      <WhyChooseUs/>
      <LeadershipPreview/>
      <CtaBanner/>
    </div>
  )
}

export default LandingPage
