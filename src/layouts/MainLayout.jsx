import React from 'react'
import useScript from '../custom-hooks/useScript'

const MainLayout = ({children}) => {
   {/* jQuery Frameworks
            =============================================  */}
      useScript('/src/assets/js/jquery-1.12.4.min.js')
      useScript('/src/assets/js/popper.min.js')
      useScript('/src/assets/js/bootstrap.min.js')
      useScript('/src/assets/js/jquery.appear.js')
      useScript('/src/assets/js/jquery.easing.min.js')
      useScript('/src/assets/js/jquery.magnific-popup.min.js')
      useScript('/src/assets/js/modernizr.custom.13711.js')
      useScript('/src/assets/js/owl.carousel.min.js')
      useScript('/src/assets/js/wow.min.js')
      useScript('/src/assets/js/progress-bar.min.js')
      useScript('/src/assets/js/isotope.pkgd.min.js')
      useScript('/src/assets/js/imagesloaded.pkgd.min.js')
      useScript('/src/assets/js/count-to.js')
      useScript('/src/assets/js/YTPlayer.min.js')
      useScript('/src/assets/js/jquery.nice-select.min.js')
      useScript('/src/assets/js/loopcounter.js')
      useScript('/src/assets/js/bootsnav.js')
      useScript('/src/assets/js/main.js')
  return (
    <>
        {children}   
    </>
  )
}

export default MainLayout