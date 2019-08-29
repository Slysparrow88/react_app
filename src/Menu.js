import React from 'react';

const menuList = [
    {name:'item-1', link: '#'},
    {name:'item-2', link: '#'},
    {name:'item-3', link: '#'},
    {name:'item-4', link: '#'},
]

const htmlMenu = (hendler) => menuList.map((item)=>{
    return <li onClick = {hendler} key = {item.name}>{item.name}</li>
})
function Menu() {
    const onDeleteHendrer = e =>{
       e.target.remove();
    }
    return (
       <ul>
          {htmlMenu(onDeleteHendrer)}
       </ul>
    )
}
export default Menu;