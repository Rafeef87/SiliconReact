import React from 'react'
import facebook from '../assets/images/Contact/facebook.svg'
import twitter from '../assets/images/Contact/twitter.svg'
import instagram from '../assets/images/Contact/instagram.svg'
import youtub from '../assets/images/Contact/youtub.svg'

const SocialMediaLinks = () => {

  return (
    <div className='socail-media'>
        <a href="http://facebook.com" target ="-blank"><img src={facebook} alt="facebook icon." /></a>
        <a href="http://twitter.com" target="_blank"><img src={twitter} alt="Twitter icon." /></a>
        <a href="http://instagram.com" target="_blank"><img src={instagram} alt="Instagram icon." /></a>
        <a href="http://youtube.com" target="_blank"><img src={youtub} alt="Youtub icon." /></a>
    </div>
  )
}

export default SocialMediaLinks