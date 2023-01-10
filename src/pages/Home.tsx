import React from 'react'
import { Card } from '../components/ui'
import { Setting } from '../components/features'

const Home = (): JSX.Element => {
  return (
    <div className="flex justify-center">
      <Card className="w-[50%]">
        <Setting />
      </Card>
    </div>
  )
}

export default Home
