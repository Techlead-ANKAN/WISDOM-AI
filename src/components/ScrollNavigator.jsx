import { useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

const sections = ['/', '/about', '/solutions', '/contact'];

const ScrollNavigator = () => {
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const sectionHeight = window.innerHeight;

      const index = Math.floor(scrollY / sectionHeight);
      const targetPath = sections[index];

      if (targetPath && location.pathname !== targetPath) {
        navigate(targetPath);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [navigate, location.pathname]);

  return null;
};

export default ScrollNavigator;
