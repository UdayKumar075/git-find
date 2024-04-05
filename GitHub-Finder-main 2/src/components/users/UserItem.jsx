import React from 'react'
import { Link } from 'react-router-dom'

function UserItem({user: {login, avatar_url}}) {
  return (
    <div className='card shadow-md compact side bg-base-300 border-b-4 border-neutral-content'>
        <div className='flex-col items-center card-body '>
            <div>
                <div className='avatar'>
                    <div className="rounded-full shadow w-14 h-14">
                        <img src={avatar_url} alt="Profile"/>
                    </div>
                </div>
            </div>
            <div className='flex flex-col items-center justify-center'>
                <h2 className='card-title'>{login}</h2>
               <Link className='text-base-content text-opacity-40 btn btn-xs mt-1 border-base-300' to={`/user/${login}`}>Visit Profile</Link> 
            </div>
        </div>
    </div>
  )
}

export default UserItem