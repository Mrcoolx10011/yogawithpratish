import { useEffect } from 'react';

/**
 * Higher-Order Component to ensure pages start from the top
 * Usage: export default withScrollToTop(YourComponent);
 */
const withScrollToTop = (WrappedComponent) => {
  return function ScrollToTopWrapper(props) {
    useEffect(() => {
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'smooth'
      });
    }, []);

    return <WrappedComponent {...props} />;
  };
};

export default withScrollToTop;