import React from 'react'
import CreateNewGrp from './CreateNewGrp'
import Groupscreated from './Groupscreated'

const Group = () => {
    const group = [
        {
            groupname:"Ofjss"
        },
        {
            groupname:"friends Forever"
        }
    ]
  return (
    <>
        <div className='max-h-[86.5%] w-full overflow-auto overflow-x-hidden'>
            <CreateNewGrp />
            
            {
                group.map(({groupname})=>{
                    return(
                        <Groupscreated groupname={groupname} />
                    )
                })
            }
        </div> 
    </>
  )
}

export default Group
