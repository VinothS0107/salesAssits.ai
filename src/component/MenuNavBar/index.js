import React from 'react';
import "./index.css"
// import AllBags from "./../../../public/assets/AllBags.svg"

const MenuNavBar = () => {
    const menuListItems =[{
        id:1,
        menuImgUrl :'./assets/AllBags.svg',
        menuTitle:'All Bags'
    },{
        id:2,
        menuImgUrl :'./assets/DuffleBag.svg',
        menuTitle:'Duffle Bag'
    },{
        id:3,
        menuImgUrl :'./assets/HandBags.svg',
        menuTitle:'Hand Bags'
    },{
        id:4,
        menuImgUrl :'./assets/LaptopSleeve.svg',
        menuTitle:'Laptop Sleeve'
    },{
        id:5,
        menuImgUrl :'./assets/MessengerBags.svg',
        menuTitle:'Messenger Bags'
    },{
        id:6,
        menuImgUrl :'./assets/SlingBags.svg',
        menuTitle:'Sling Bags'
    },{
        id:7,
        menuImgUrl :'./assets/ToteBag.svg',
        menuTitle:'Tote Bag'
    },{
        id:8,
        menuImgUrl :'./assets/VanityPouch.svg',
        menuTitle:'Vanity Pouch'
    },{
        id:9,
        menuImgUrl :'./assets/AllBags.svg',
        menuTitle:'All Bags'
    },{
        id:10,
        menuImgUrl :'./assets/DuffleBag.svg',
        menuTitle:'Duffle Bag'
    },{
        id:11,
        menuImgUrl :'./assets/HandBags.svg',
        menuTitle:'Hand Bags'
    },{
        id:12,
        menuImgUrl :'./assets/LaptopSleeve.svg',
        menuTitle:'Laptop Sleeve'
    },{
        id:13,
        menuImgUrl :'./assets/MessengerBags.svg',
        menuTitle:'Messenger Bags'
    },
    
]
  return (
   <nav className='menu-nav-bar-container'>
    <ul className='nav-bar-list-container'>
        {
            menuListItems.map((menuItem)=>(
                <li className='nav-bar-list' key={menuItem.id}>
                <div className='list-categories-image-container'>
                    <img src={menuItem.menuImgUrl} alt={`${menuItem.menuImgUrl}`} width="96" height="96" />
                </div>
                <p className='list-categories-title'>{menuItem.menuTitle}</p>
            </li>
            ))
        }

    </ul>

   </nav>
  )
}

export default MenuNavBar