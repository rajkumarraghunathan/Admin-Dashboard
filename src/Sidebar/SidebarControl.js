// import React from 'react'
// import { useState } from 'react';
// import CustomComponent from './CustomComponent';
// import { IoIosArrowDropleftCircle } from 'react-icons/io';
import { Sidebar } from './Sidebar';
import { SidebarClose } from './SidebarClose';

const SidebarControl = () => {
    const [isOpen, setIsOpen] = useState(true);
    return (
        <div className=''>
            {isExpand ? (<Sidebar />) : (<SidebarClose />)}

        </div>
    )
}

export default SidebarControl