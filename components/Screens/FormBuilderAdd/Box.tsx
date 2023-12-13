import type { FC } from "react";
import React, { useState } from "react";
import type { DragSourceMonitor } from "react-dnd";
import { useDrag } from "react-dnd";
import Image from "next/image";
import { Button, Modal } from "antd";
import styles from "./styles.module.css";

export interface BoxProps {
  name: string;
  imagePath: string;
}

interface DropResult {
  allowedDropEffect: string;
  dropEffect: string;
  name: string;
}

export const Box: FC<BoxProps> = ({ name, imagePath }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };
  const [{ opacity }, drag] = useDrag(
    () => ({
      type: "box",
      item: { name },
      end(item, monitor) {
        const dropResult = monitor.getDropResult() as DropResult;
        if (item && dropResult) {
          let alertMessage = "";
          const isDropAllowed =
            dropResult.allowedDropEffect === "any" ||
            dropResult.allowedDropEffect === dropResult.dropEffect;

          if (isDropAllowed) {
            const isCopyAction = dropResult.dropEffect === "copy";
            const actionName = isCopyAction ? "copied" : "moved";
            alertMessage = `You are useless`;
          } else {
            alertMessage = `You cannot ${dropResult.dropEffect} an item into the ${dropResult.name}`;
          }
          alert(alertMessage);
        }
      },
      collect: (monitor: DragSourceMonitor) => ({
        opacity: monitor.isDragging() ? 0.4 : 1,
      }),
    }),
    [name]
  );

  return (
    <>
      <div ref={drag} style={{ opacity }} className={styles.boxDrag}>
        <Image src={imagePath} height={20} alt="" /> &nbsp;
        {name}
      </div>
      <Button type="primary" onClick={showModal}>
        Open Modal
      </Button>
      <Modal
        title="Basic Modal"
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <p>Some contents...</p>
        <p>Some contents...</p>
        <p>Some contents...</p>
      </Modal>
    </>
  );
};
