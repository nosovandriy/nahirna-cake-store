// "use client";

import { useCallback, useEffect, useRef } from 'react';
import { animated, useSpring } from '@react-spring/web';

type Props = {
  children: React.ReactNode;
  isOrderConfirm: boolean;
  setIsOrderConfirm: (isOpen: boolean) => void;
};

export const PopUpOverlay: React.FC<Props> = ({
  children,
  isOrderConfirm,
  setIsOrderConfirm,
}) => {
  const modalRef = useRef<HTMLInputElement>(null);

  const escapeKey = 'Escape';

  const closeModal = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    if (modalRef.current === event.target) {
      setIsOrderConfirm(false);
    }
  }

  const keyPress = useCallback(
    (event: any) => {
      if (event.key === escapeKey && isOrderConfirm) {
        setIsOrderConfirm(false);
      }
    }, [setIsOrderConfirm, isOrderConfirm]
  );

  useEffect(() => {
    document.addEventListener('keydown', keyPress);
    return () => document.removeEventListener('keydown', keyPress);
  },
    [keyPress]
  );

  const animation = useSpring({
    config: {
      duration: 300,
    },
    opacity: isOrderConfirm ? 1 : 0,
    transform: isOrderConfirm ? `translateЧ(0%)` : `translateY(100%)`,
  });

  console.log(isOrderConfirm);
  
  return (
    <>
      {isOrderConfirm && (
        <div
          ref={modalRef}
          className="flex flex-col justify-center items-center fixed top-0 left-0 w-full h-full bg-black bg-opacity-[72%] z-50"
          // onClick={(event) => closeModal(event)}
        >
          <animated.div style={animation}>
            {children}
          </animated.div>
        </div>
      )}
    </>
  );
}
