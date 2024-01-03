import type { FC } from "react";
import React, { useState } from "react";
import type { DragSourceMonitor } from "react-dnd";
import { useDrag } from "react-dnd";
import Image from "next/image";
import { Modal, Input } from "antd";
import styles from "./styles.module.css";
import FloatLabel from "../../ReusableComponents/FloatLabel";

export interface BoxProps {
  name: string;
  imagePath: string;
  onUpdateNameForm: (value: string) => void;
}

interface DropResult {
  allowedDropEffect: string;
  dropEffect: string;
  name: string;
}

export const Box: FC<BoxProps> = ({ name, imagePath, onUpdateNameForm }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [nameform, setNameForm] = useState("")

  const handleOk = () => {
    onUpdateNameForm(nameform); // Notify the Container component about the nameform value
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
            setIsModalOpen(true);
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

      <Modal
        title="Field Details"
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <div className="mb-5">
          <FloatLabel label="Title" value={nameform}>
            <Input
              style={{ height: "48px" }}
              value={nameform}
              onChange={(e) => setNameForm(e.target.value)}
            />
          </FloatLabel>
        </div>
      </Modal>
    </>
  );
};
