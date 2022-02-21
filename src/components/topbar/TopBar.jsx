import React from 'react'
// import LogoLight from '../../assets/img/logo-light.png'
// import CPFLogo from '../../assets/img/cpf-logo.png'
import CPF from '../../assets/img/CPF.jpg'

const TopBar = () => {
  return (
        // Start TopBar
        // ============================================= 
        <div className="top-bar-area text-light transparent">
            <div className="container">
                <div className="row align-center">
                    <div className="col-lg-4 left-info">
                        <ul className="list">
                            <li> Vous avez des questions ? +261 34 01 533 35 </li>
                        </ul>
                    </div>
                    <div className="col-lg-4 logo text-center">
                        <a href="#"><img src={CPF} alt="cpf-logo" /></a>
                    </div>
                    <div className="col-lg-4 right-info">
                        <div className="item-flex">
                            <div className="social">
                                <ul>
                                    <li>
                                        <a href="#"><i className="fab fa-facebook-f"></i></a>
                                    </li>
                                    <li>
                                        <a href="#"><i className="fab fa-twitter"></i></a>
                                    </li>
                                    <li>
                                        <a href="#"><i className="fab fa-linkedin-in"></i></a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div> 
    // End TopBar
  )
}

export default TopBar