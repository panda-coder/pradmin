import React, { useEffect } from 'react';

import Routes from '../router/AppRouter';


export default (props) => {
    useEffect(() => { 
        document.getElementById('main-wrapper').classList.toggle('toggled');

        return () => {}
    },[])

    return (
        <aside id="sidebar">
            <div className="sidebar-title">
                <h2>Panda React Admin</h2>
            </div>
            <div className="list-group">
                { Routes.map((route, index) => (
                    <a href={route.path} className="list-group-item" >{route.name}</a>
                )) }
            </div>
        </aside>
    )
}