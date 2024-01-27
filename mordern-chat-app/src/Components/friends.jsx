import React from 'react'
import FindUser from './FindUser'

const Friends = () => {
  return (
    <>
        <div className='max-h-[86.5%] w-full overflow-auto overflow-x-hidden'>
            <FindUser name={`navneet`} />
        </div> 
    </>
  )
}

export default Friends
