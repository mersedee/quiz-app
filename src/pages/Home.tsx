import { FC, useState } from 'react'
import { Card } from '@/components/ui'
import { Setting, Questions } from '@/components/features'

const Home: FC = () => {
  const [options, setOptions] = useState<string>('')

  return (
    <div className="flex justify-center">
      <Card className="w-[50%] min-h-[400px] flex justify-center items-center">
        {options.length === 0
          ? <Setting setOptions={setOptions}/>
          : <Questions options={options} setOptions={setOptions} />}
      </Card>
    </div>
  )
}

export default Home
