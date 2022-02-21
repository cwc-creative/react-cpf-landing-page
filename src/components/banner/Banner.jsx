import React from 'react'
import Img25 from '../../assets/img/banner/25.jpg'

const Banner = () => {
  return (
        // Start Banner 
        // ============================================= 
        <div className="banner-area content-only top-pad-170 shadow dark text-light bg-fixed text-center"
            style={{backgroundImage: `url(${Img25})`}}>
            <div className="item">
                <div className="container">
                    <div className="row align-center">
                        <div className="col-lg-8 offset-lg-2">
                            <div className="content">
                                <h1>Boostez votre carrière professionnelle avec le CPF</h1>
                                <ul>
                                    <li>Connaître votre éligibilité CPF</li>
                                    <li>Gratuit et sans engagement</li>
                                </ul>
                                <form action="#">
                                    {/* <input type="text" placeholder="Course name" className="form-control" name="text" /> */}
                                    {/* <button type="submit"><i className="fas fa-search"></i></button> */}
                                    <button type="submit">Vérifier mon éligibilité</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        // End Banner 
  )
}

export default Banner