import React, {useState} from 'react';

import ConnectBtn from '../buttons/connect-btn';

const Navbar = props => {

    const [isLoggedIn, setLoggedIn] = useState(true);


    const onClicked= e => {
        e.preventDefault();

        const target = e.currentTarget.dataset.target;
        const $target = document.getElementById(target);
        e.currentTarget.classList.toggle('is-active');
        $target.classList.toggle('is-active');
    }

    return(
        <nav className="navbar py-3 has-background-primary" role="navigation" aria-label="main navigation" style={{ position: 'sticky', top: '0'}}>


            {/* logo */}
            <div className="navbar-brand">

                <a role="button" className="navbar-burger" aria-label="menu" aria-expanded="false" data-target="navbar" onClick={onClicked}>
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                </a>
            </div>

            {/* items */}
            <div id="navbar" className="navbar-menu">

                <div className="navbar-end">


                    {
                        !isLoggedIn ?
                        <div className="navbar-item">
                            <button className="button is-rounded is-light">
                                <span className="icon"><i className="fas fa-wallet"></i></span>
                                <strong>Connect</strong>
                            </button>
                        </div>
                        :
                        <div className="navbar-item">
                            <ConnectBtn/>
                        </div>
                    }

                </div>
            </div>


        </nav>
    );

}

export default Navbar;
