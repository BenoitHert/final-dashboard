import React from 'react'
import {Link, NavLink} from 'react-router-dom';
import {MdOutlineCancel } from 'react-icons/md'
import {Si1001Tracklists} from 'react-icons/si'
// import {TooltipComponent } from '@syncfusion/ej2-react-popups';

import {links} from '../data/dummy';

const Sidebar = () => {

    
  const activeLink = 'flex items-center gap-5 pl-4 pt-3 pb-2.5 rounded-lg text-gray-700 text-md m-2 ';
  const normalLink = 'flex items-center gap-5 pl-4 pt-3 pb-2.5 rounded-lg text-md text-gray-700 dark:text-gray-200 dark:hover:text-black hover:bg-light-gray m-2 '

  return (
    <div className='ml-3 h-screen md:overflow-hidden overflow-auto md:hover:overflow-auto pb-10'>
      <> 
      <div className='flex justify-between items-center'> 
      <Link to="/"
        className="items-center gap-3 ml-3 mt-4 flex text-xl font-extrabold tracking-tight dark:text-white text-slate-900">
          <Si1001Tracklists/> <span>Backdash</span>
        </Link>
        <div classname= "BottomCenter">
          <button type="button" 
          className="text-xl rounded-full p-3 hover:bg-light-gray mt-4 block md:hidden">
            <MdOutlineCancel/>
          </button>
        </div>
      </div>
      <div className='mt-10'>
        {links.map((item) => (
          <div key={item.title}>
            <p  className='text-gray-400 m-3 mt-4 uppercase'>
              {item.title}
            </p>
            {item.links.map((link)=> (
              <NavLink to={`${link.linkname}`}
              key={link.name}
              style={({isActive}) => ({backgroundColor: isActive ? 'blue' : ''})
            //   TO DO CURRENT COLOR
              }
              className={({ isActive })=> isActive? activeLink : normalLink}>
                {link.icon}
                <span className='capitalize'>
                  {link.name}
                </span>
              </NavLink>
            ))}
          </div>
        ))}
      </div>
        
        
        </>
        

    </div>
  )
}

export default Sidebar