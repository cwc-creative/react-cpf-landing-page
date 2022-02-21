import React from 'react'
// import Logo from '../../assets/img/logo.png'
import Logo from '../../assets/img/CPF.jpg'

const Header = () => {
  return (
    
    // Header 
    // ============================================= 
    <header>
            <div className="container">
                <div className="row">
                     {/* Start Navigation  */}
                    <nav id="mainNav"
                        className="navbar logo-less navbar-default navbar-fixed white bootsnav on no-full nav-box menu-center no-background">
                        <div className="container">
                             {/* Start Header Navigation */}
                            <div className="navbar-header">
                                <button type="button" className="navbar-toggle" data-toggle="collapse"
                                    data-target="#navbar-menu">
                                    <i className="fa fa-bars"></i>
                                </button>
                                <a className="navbar-brand" href="index.html">
                                    <img src={Logo} className="logo" alt="Logo" />

                                    </a>
                            </div>
                             {/* End Header Navigation */}
                             {/* Collect the nav links, forms, and other content for toggling */}
                            <div className="collapse navbar-collapse" id="navbar-menu">
                                <ul className="nav navbar-nav navbar-center" data-in="fadeInDown" data-out="fadeOutUp">
                                    <li className="dropdown">
                                        <a href="#" className="dropdown-toggle active" data-toggle="dropdown">Comment ça marche ?</a>
                                        <ul className="dropdown-menu animated">
                                            <li><a href="index-1.html">Consultez vos droits</a></li>
                                            <li><a href="index-2.html">Faites-vous accompagner</a></li>
                                            <li><a href="index-3.html">Trouvez votre formation</a></li>
                                            <li><a href="index-4.html">Bénéficiez d'aide au financement</a></li>
                                            <li><a href="index-4.html">Suivez la formation</a></li>
                                            <li><a href="index-4.html">Obtenez votre diplôme ou certification</a></li>
                                        </ul>
                                    </li>
                                    <li>
                                        <a href="courses.html">Formations</a>
                                    </li>
                                    <li>
                                        <a href="contact.html">Contact</a>
                                    </li>
                                </ul>
                            </div>
                             {/* /.navbar-collapse */}
                        </div>
                    </nav>
                     {/* End Navigation */}
                </div>
            </div>
        </header>
        
        // End Header 
  )
}

export default Header