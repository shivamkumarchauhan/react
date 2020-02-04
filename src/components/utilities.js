import React  from 'react';

export function getSectionMenu(section,item){
      
      if(item.menu===section){
            return <li><a href={item.menuLink} className="" target={item.openInNewWindow ? '_blank' : ''}>{item.menuTitle}</a></li>
      }
      else{
            return ''
      }
}