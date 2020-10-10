import React from 'react';

import './menu-item.styles.scss';

function MenuItemOptions({ titulo }) {
    return (
        <div className="titulo-wrapper">
            <p className="titulo">{titulo}</p>
        </div>
    )
}

export default MenuItemOptions;
