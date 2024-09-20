import ArrowLeft from '../ArrowLeft/ArrowLeft';
import ArrowRight from '../ArrowRight/Arrow';
import styles from '../PageContainer/PageContainer.module.scss'
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { useEffect } from 'react';

const PageContainer = ({ children, toNext, toPrevious}) => {
  const [isExiting, setIsExiting] = useState(false);
  const [isMounted, setIsMounted] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const handleNavigation = (url) => {
    setIsExiting(true);
    setIsMounted(true);
    setTimeout(() => {
      navigate(url);
    }, 800); 
  };

  return (
    <div className={`${styles.pageContainer} ${isMounted ? styles['fade-in'] : ''} ${isExiting ? styles['fade-out'] : ''}`} >
      <ArrowLeft onClick={() => handleNavigation(toPrevious)} />
      <ArrowRight onClick={() => handleNavigation(toNext)} />
      <div>
        {children}
      </div>
    </div>
  );
};

export default PageContainer;
  