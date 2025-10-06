import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

interface ScrollToHashRedirectProps {
  to: string;
}

const ScrollToHashRedirect = ({ to }: ScrollToHashRedirectProps) => {
  const navigate = useNavigate();

  useEffect(() => {
    const [path, hash] = to.split('#');
    navigate(path, { replace: true });
    
    // Wait for navigation and DOM update
    setTimeout(() => {
      if (hash) {
        const element = document.getElementById(hash);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }
    }, 100);
  }, [to, navigate]);

  return null;
};

export default ScrollToHashRedirect;
