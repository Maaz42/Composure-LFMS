import { Box } from './Box'
import { Col, Flex, Input, Row } from 'antd'
import { useDrop } from 'react-dnd'
import { useState } from 'react'
import styles from './styles.module.css'
import FloatLabel from '@/components/ReusableComponents/FloatLabel'
import { CALENDER, CHECK, DOCUMENT, DOCUMENTTXT, DOCUMENTUPLOAD, KEYBOARD, RECORD, TICKSQUARE } from '@/constants/images'

export default function Container() {
  const colStyle = {
    padding: '8px'
  };

  const [allowedDropEffect, setAllowedDropEffect] = useState('move');
  const [projectTitle, setproJectTitle] = useState("");

  const [, drop] = useDrop(
    () => ({
      accept:'box',
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
    <Row>
      <Col xxl={14} lg={14} md={24} sm={24} xs={24} style={colStyle}>
        <Flex className={styles.detailsSectionLeft} vertical>
          <div style={{ marginLeft: 5, marginRight: 5 }}>
            <FloatLabel label="Project Title" value={projectTitle}>
              <Input style={{ height: "48px" }} value={projectTitle} onChange={e => setproJectTitle(e.target.value)} />
            </FloatLabel>
          </div>
          <Row>
            <Col xxl={12} lg={12} md={24} sm={24} xs={24} style={{ paddingLeft: 5, paddingRight: 5 }}>
              <Box name="Text Input" imagePath={CHECK} />
            </Col>
            <Col xxl={12} lg={12} md={24} sm={24} xs={24} style={{ paddingLeft: 5, paddingRight: 5 }}>
              <Box name="Text Area" imagePath={DOCUMENTTXT} />
            </Col>
            <Col xxl={12} lg={12} md={24} sm={24} xs={24} style={{ paddingLeft: 5, paddingRight: 5 }}>
              <Box name="Dropdown Menu" imagePath={DOCUMENT} />
            </Col>
            <Col xxl={12} lg={12} md={24} sm={24} xs={24} style={{ paddingLeft: 5, paddingRight: 5 }}>
              <Box name="Check Box" imagePath={TICKSQUARE} />
            </Col>
            <Col xxl={12} lg={12} md={24} sm={24} xs={24} style={{ paddingLeft: 5, paddingRight: 5 }}>
              <Box name="Radio Button" imagePath={RECORD} />
            </Col>
            <Col xxl={12} lg={12} md={24} sm={24} xs={24} style={{ paddingLeft: 5, paddingRight: 5 }}>
              <Box name="Date Picker" imagePath={CALENDER} />
            </Col>
            <Col xxl={12} lg={12} md={24} sm={24} xs={24} style={{ paddingLeft: 5, paddingRight: 5 }}>
              <Box name="File Upload" imagePath={DOCUMENTUPLOAD} />
            </Col>
            <Col xxl={12} lg={12} md={24} sm={24} xs={24} style={{ paddingLeft: 5, paddingRight: 5 }}>
              <Box name="Email Input" imagePath={CHECK} />
            </Col>
            <Col xxl={12} lg={12} md={24} sm={24} xs={24} style={{ paddingLeft: 5, paddingRight: 5 }}>
              <Box name="Number Input" imagePath={CHECK} />
            </Col>
            <Col xxl={12} lg={12} md={24} sm={24} xs={24} style={{ paddingLeft: 5, paddingRight: 5 }}>
              <Box name="Password Input" imagePath={CHECK} />
            </Col>
            <Col xxl={12} lg={12} md={24} sm={24} xs={24} style={{ paddingLeft: 5, paddingRight: 5 }}>
              <Box name="Phone Number Input" imagePath={CHECK} />
            </Col>
            <Col xxl={12} lg={12} md={24} sm={24} xs={24} style={{ paddingLeft: 5, paddingRight: 5 }}>
              <Box name="URL Input" imagePath={CHECK} />
            </Col>
            <Col xxl={12} lg={12} md={24} sm={24} xs={24} style={{ paddingLeft: 5, paddingRight: 5 }}>
              <Box name="Button" imagePath={KEYBOARD} />
            </Col>
          </Row>
        </Flex>
      </Col>

      <Col xxl={10} lg={10} md={24} sm={24} xs={24} style={colStyle} ref={drop}>
        <Flex className={styles.detailsSection} vertical>
          <div style={{ height: '10px' }}>
            Drag & Drop the options here
          </div>
        </Flex>
      </Col>
    </Row>
  )
}
