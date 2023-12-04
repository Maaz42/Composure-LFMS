import type { CSSProperties, FC } from 'react'
import { useDrop } from 'react-dnd'

import { ItemTypes } from './ItemTypes'



export interface DustbinProps {
  allowedDropEffect: string
}

function selectBackgroundColor(isActive: boolean, canDrop: boolean) {
  if (isActive) {
    return 'darkgreen'
  } else if (canDrop) {
    return 'darkkhaki'
  } else {
    return '#222'
  }
}

export const Dustbin: FC<DustbinProps> = ({ allowedDropEffect }) => {
  const [{ canDrop, isOver }, drop] = useDrop(
    () => ({
      accept: ItemTypes.BOX,
      drop: () => ({
        name: `${allowedDropEffect} Dustbin`,
        allowedDropEffect,
      }),
      collect: (monitor: any) => ({
        isOver: monitor.isOver(),
        canDrop: monitor.canDrop(),
      }),
    }),
    [allowedDropEffect],
  )

  const isActive = canDrop && isOver
  const backgroundColor = selectBackgroundColor(isActive, canDrop)
  return (
    <div ref={drop} style={{ height:'10px'}}>
                                 Drag & Drop the options here

    </div>
  )
}
