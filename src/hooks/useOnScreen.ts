import React, { useState, useEffect, ElementRef } from 'react'

const useOnScreen = (element: any, rootMargin: string = '0px') => {
   
    const [isVisible, setState] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                setState(entry.isIntersecting);
            }, { rootMargin }
        );

        element.current && observer.observe(element.current);

        return () => observer.unobserve(element.current);
    }, []);

    return isVisible;
};

export default useOnScreen;