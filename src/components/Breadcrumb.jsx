import React from 'react'
import { Link, useLocation } from 'react-router-dom'

const Breadcrumb = () => {
  const location = useLocation();
  const pathnames = location.pathname.split('/').filter((x) => x);
    
  return (
    <section className="page-title">
      <div className="container">
        <li>
          <Link to="/"><i className="fa-regular fa-house"></i> Home</Link>
          <Link to="/"><i className="fa-solid fa-chevrons-right icon"></i> Contact</Link>
        </li>
        <ul className='breadcrumb'>
        <h1>{pathnames[pathnames.length]?.replace(/-/g, ' ')|| 'Contact Us'}</h1>
          {
            pathnames.map((value, index) => {
              const to = `/${pathnames.slice(0, index +1).join('/')}`;

              return (
                <li key={to}>
                  {index === pathnames.length -1
                      ? (<span>{value.replace(/-/g, ' ')}</span>)
                      : (<link to={to}>{value.replace(/-/g, ' ')}</link>)}
                </li>
              );
            })
          }
        </ul>
      </div>
    </section>
  )
}

export default Breadcrumb