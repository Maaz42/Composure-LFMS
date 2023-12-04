import { Box } from './Box'
import { Col, Flex, Row } from 'antd'
import styles from './styles.module.css'
import { useDrop } from 'react-dnd'

import { ItemTypes } from './ItemTypes'
import { useState } from 'react'


export default function Container() {

    const colStyle = {
        padding: '8px'
    };

    const [allowedDropEffect, setAllowedDropEffect] = useState('move');


    const [, drop] = useDrop(
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
    return (
        <div>
            <Row>
                <Col xxl={14} lg={14} md={24} sm={24} xs={24} style={colStyle}>

                    <Box name="Glass" />
                    <Box name="Banana" />
                    <Box name="Paper" />
                </Col>

                <Col xxl={10} lg={10} md={24} sm={24} xs={24} style={colStyle}  ref={drop}>

                    <Flex className={styles.detailsSection} vertical>
                    <div style={{ height:'10px'}}>
                                 Drag & Drop the options here

    </div>
                    </Flex>
                </Col>
            </Row>
        </div>)
}
