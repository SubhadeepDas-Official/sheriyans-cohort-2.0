import { useEffect, useState } from 'react';
import '../style/nav-style.scss';
import { useNavigate } from "react-router";

const Navbar = () => {

  /* Scroll ↓ → navbar hides
  Scroll ↑ → navbar appears */
  const [showNav, setShowNav] = useState(true);

  useEffect(() => {
    let lastScrollY = window.scrollY;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY) {
        // scrolling down
        setShowNav(false);
      } else {
        // scrolling up
        setShowNav(true);
      }

      lastScrollY = currentScrollY;
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const navigate = useNavigate()

  return (
    <div className={`nav-bar ${showNav ? 'show' : 'hide'}`}>
      <p>Instagram</p>
      <button className="button primary-button" onClick={()=>{navigate('/create-post')}}>Create Post</button>
    </div>
  );
};

export default Navbar;
