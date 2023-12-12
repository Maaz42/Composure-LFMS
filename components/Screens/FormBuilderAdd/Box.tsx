import type { FC } from 'react';
import type { DragSourceMonitor } from 'react-dnd';
import { useDrag } from 'react-dnd'
import Image from 'next/image';
import styles from './styles.module.css'

export interface BoxProps {
  name: string
  imagePath: string
}

interface DropResult {
  allowedDropEffect: string
  dropEffect: string
  name: string
}

export const Box: FC<BoxProps> = ({ name, imagePath }) => {
  const [{ opacity }, drag] = useDrag(
    () => ({
      type: 'box',
      item: { name },
      end(item, monitor) {
        const dropResult = monitor.getDropResult() as DropResult
        if (item && dropResult) {
          let alertMessage = ''
          const isDropAllowed =
            dropResult.allowedDropEffect === 'any' ||
            dropResult.allowedDropEffect === dropResult.dropEffect

          if (isDropAllowed) {
            const isCopyAction = dropResult.dropEffect === 'copy'
            const actionName = isCopyAction ? 'copied' : 'moved'
            alertMessage = `You ${actionName} ${item.name} into ${dropResult.name}!`
          } else {
            alertMessage = `You cannot ${dropResult.dropEffect} an item into the ${dropResult.name}`
          }
          alert(alertMessage)
        }
      },
      collect: (monitor: DragSourceMonitor) => ({
        opacity: monitor.isDragging() ? 0.4 : 1,
      }),
    }),
    [name],
  )

  return (
    <div ref={drag} style={{ opacity }} className={styles.boxDrag}>
      <Image src={imagePath} height={20} alt="" /> &nbsp;
      {name}
    </div>
  )
}
