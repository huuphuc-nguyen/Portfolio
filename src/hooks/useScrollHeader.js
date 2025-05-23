import React, { useEffect } from "react";

// This hook handles the header and burger menu animation when scrolling

const useScrollHeader = () => {
    const headerRef = React.useRef(null);
    const burgerRef = React.useRef(null);

    const [prevScrollPos, setPrevScrollPos] = React.useState(0);

    useEffect(() => {
        const handleScroll = () => {
            const currentScroll = window.scrollY;
            const header = headerRef.current;
            const burger = burgerRef.current;

            if(prevScrollPos > currentScroll) {
                header.style.transform = 'translate(-50%,0)';
                burger.style.transform = 'translate(0,0)';
                header.style.opacity = '1';
                burger.style.opacity = '1';
            }
            else {
                header.style.transform = 'translate(-50%,-200%)';
                burger.style.transform = 'translate(0,-300%)';
                header.style.opacity = '0';
                burger.style.opacity = '0';
            }

            setPrevScrollPos(currentScroll);
        }

        window.addEventListener('scroll', handleScroll);

        return () => {window.removeEventListener('scroll', handleScroll)};
    });

    return { headerRef, burgerRef };
}

export default useScrollHeader;