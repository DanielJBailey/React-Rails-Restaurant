import React from 'react';
import Menu from './Menu';
import '../styles/menuList.scss';

const MenuList = ({ toggle, menus, show, current, editing, selected, showForm, add }) => (

    <>  
        <div className="toggle">
            <button className="menu-button" onClick={toggle}>Edit Menu</button>
            <button className="menu-button" onClick={showForm}>Add Items</button>
        </div>
        <div className="menu-wrapper">
            <h1 className="rest-name">CUBBY'S</h1>
            <div className="menu-list">
                {menus.map(menu =>
                    <div 
                        className="menu-name" 
                        key={menu.id} 
                        onClick={() => show(menu.id)}
                        style={menu.id === selected ?  {borderBottom: "3px solid black"} : null}>
                        {menu.name}
                    </div>
                )}
            </div>
            {current.map(menu=> 
                <Menu key={menu.id} menuName={menu.name} {...menu} edit={editing} toggle={toggle} showForm={showForm} add={add}/>
            )}
            
            
        </div>
    </>
)

export default MenuList;


