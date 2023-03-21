// "use client";

import { useCallback, useEffect, useRef } from 'react';
import { animated, useSpring } from '@react-spring/web';

type Props = {
  children: React.ReactNode;
  isOpenModal: boolean;
  setIsOpenModal: (isOpen: boolean) => void;
};

export const PopUpOverlay: React.FC<Props> = ({
  children,
  isOpenModal,
  setIsOpenModal,
}) => {
  const modalRef = useRef<HTMLInputElement>(null);

  const escapeKey = 'Escape';

  const closeModal = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    if (modalRef.current === event.target) {
      setIsOpenModal(false);
    }
  }

  const keyPress = useCallback(
    (event: any) => {
      if (event.key === escapeKey && isOpenModal) {
        setIsOpenModal(false);
      }
    }, [setIsOpenModal, isOpenModal]
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
    opacity: isOpenModal ? 1 : 0,
    transform: isOpenModal ? `translateЧ(0%)` : `translateY(100%)`,
  });

  return (
    <>
      {isOpenModal && (
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
