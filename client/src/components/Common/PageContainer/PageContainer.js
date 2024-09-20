import ArrowLeft from '../ArrowLeft/ArrowLeft';
import ArrowRight from '../ArrowRight/Arrow';
import styles from '../PageContainer/PageContainer.module.scss'
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

const PageContainer = ({ children, toNext, toPrevious}) => {
  const [isExiting, setIsExiting] = useState(false);
  const navigate = useNavigate();

  const handleNavigation = (url) => {
    setIsExiting(true); 
    setTimeout(() => {
      navigate(url); 
    }, 1000); 
  };

  return(
    <div className={`${styles.pageContainer} ${isExiting ? styles['fade-out'] : ''}`}>
      <ArrowLeft onClick={() => handleNavigation(toPrevious)} />
      <ArrowRight onClick={() => handleNavigation(toNext)} />
      <div>
        {children}
      </div>
    </div>
  )
};
  
export default PageContainer;
  