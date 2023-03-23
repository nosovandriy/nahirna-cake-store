"use client";

import { useCallback, useEffect } from "react";
import { animated, useSpring } from "@react-spring/web";

type Props = {
  children: React.ReactNode;
  isOpenModal: boolean;
  setIsOpenModal: (isOpen: boolean) => void;
};

const PopUpOverlay: React.FC<Props> = ({
  children,
  isOpenModal: isOpenModal,
  setIsOpenModal: setIsOpenModal,
}) => {
  const escapeKey = "Escape";

  const keyPress = useCallback(
    (event: any) => {
      if (event.key === escapeKey && isOpenModal) {
        setIsOpenModal(false);
      }
    },
    [isOpenModal, setIsOpenModal]
  );

  useEffect(() => {
    document.addEventListener("keydown", keyPress);
    return () => document.removeEventListener("keydown", keyPress);
  }, [keyPress]);

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
        <div className="fixed top-0 left-0 z-50 flex h-full w-full flex-col items-center justify-center bg-black bg-opacity-[72%]">
          <animated.div style={animation}>{children}</animated.div>
        </div>
      )}
    </>
  );
};

export default PopUpOverlay;
