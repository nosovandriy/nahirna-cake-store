"use client";

import { useCallback, useEffect } from 'react';
import { animated, useSpring } from '@react-spring/web';

type Props = {
  children: React.ReactNode;
  isOpenModalAction: boolean;
  setIsOpenModalAction: (isOpen: boolean) => void;
};

const PopUpOverlay: React.FC<Props> = ({
  children,
  isOpenModalAction,
  setIsOpenModalAction,
}) => {
  const escapeKey = 'Escape';

  const keyPress = useCallback(
    (event: any) => {
      if (event.key === escapeKey && isOpenModalAction) {
        setIsOpenModalAction(false);
      }
    }, [isOpenModalAction, setIsOpenModalAction]
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
    opacity: isOpenModalAction ? 1 : 0,
    transform: isOpenModalAction ? `translateЧ(0%)` : `translateY(100%)`,
  });

  return (
    <>
      {isOpenModalAction && (
        <div
          className="flex flex-col justify-center items-center fixed top-0 left-0 w-full h-full bg-black bg-opacity-[72%] z-50"
        >
          <animated.div style={animation}>
            {children}
          </animated.div>
        </div>
      )}
    </>
  );
}

export default PopUpOverlay;