import React from 'react';
import {FiBookOpen, FiEdit, FiCompass, FiHome}  from 'react-icons/fi';
import { IoMdContacts } from 'react-icons/io';
import {AiOutlineCalendar} from 'react-icons/ai';



export const links = [
    {
      title: 'Dashboard',
      links: [
        {
          name: 'Home',
          icon: <FiHome />,
          linkname: '/',
        },
      ],
    },
  
    {
      title: 'Pages',
      links: [
        {
          name: 'About',
          icon: <FiCompass />,
          linkname: '/about',
        },
        {
          name: 'User Profile',
          icon: <IoMdContacts />,
          linkname: '/user',
        },
      ],
    },
    {
      title: 'Apps',
      links: [
        {
          name: 'Calendar',
          icon: <AiOutlineCalendar />,
          linkname: '/calendar',
        },
        {
          name: 'Objectifs',
          icon: <FiEdit />,
          linkname: '/goals',
        },
        {
          name: 'Notes',
          icon: <FiBookOpen />,
          linkname: '/editor',
        },
      ],
    },
  ];