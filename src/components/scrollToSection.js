import { useNavigate } from 'react-router-dom';

export const useScrollToSection = () => {
  const navigate = useNavigate();

  const scrollTo = (sectionId, route) => {
    navigate(route); // update the URL
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return scrollTo;
};
