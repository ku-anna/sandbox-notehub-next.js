"use client";

import { useRouter } from "next/navigation";
import styles from "./Modal.module.css";

type Props = {
  children: React.ReactNode;
};

const Modal = ({ children }: Props) => {
  const router = useRouter();

  const close = () => router.back();

  return (
    <div className={styles.overlay}>
      <div className={styles.modal}>
        {children}
        <button className={styles.closeButton} onClick={close}>
          Close
        </button>
      </div>
    </div>
  );
};

export default Modal;
