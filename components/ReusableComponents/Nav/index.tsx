import React from 'react';
import Head from 'next/head'
import { Layout } from 'antd';
import Image from 'next/image';
import Link from 'next/link';
import styles from './styles.module.css'
import { LOGO, PROJECT, TICKET, WORKFLOW, FILES, FORMBUILDER, INTAKE, SETTINGS, DASHBOARD } from '@/constants/images';
import { useRouter } from 'next/router'
import { usePathname } from 'next/navigation'

const { Sider, Content } = Layout;

export default function Nav({ children }: any) {
    const router = useRouter();
    let pathname = usePathname();
    pathname = pathname.slice(1);
    pathname = pathname.toUpperCase()
    let titleConcat = 'Composure';

    if (pathname) titleConcat = pathname + ' | ' + titleConcat;

    return (
        <>
            <Head>
                <title>{titleConcat}</title>
            </Head>
            <Layout>
                <Sider trigger={null} collapsible collapsed={true} className={styles.sliderStyle}>
                    <Link href={`/`}> <Image width={100} height={50} src={LOGO} alt='' /></Link>
                    <Image width={100} height={50} src={DASHBOARD} alt='' />
                    <Link href={`/intakeList`}>
                        {pathname === 'INTAKELIST' ? <Image width={100} height={50} src={INTAKE} alt='aaa' style={{ backgroundColor: "#DBDBDB", borderLeft: "3px solid #333793" }} /> : <Image width={100} height={50} src={INTAKE} alt='aaa' />}
                    </Link>
                    <Link href={`/projectList`}>
                        {pathname === 'PROJECTLIST' ? <Image width={100} height={50} src={PROJECT} alt='aaa' style={{ backgroundColor: "#DBDBDB", borderLeft: "3px solid #333793" }} /> : <Image width={100} height={50} src={PROJECT} alt='aaa' />}
                    </Link>
                    <Link href={`/ticketList`}>
                        {pathname === 'TICKETLIST' ? <Image width={100} height={50} src={TICKET} alt='aaa' style={{ backgroundColor: "#DBDBDB", borderLeft: "3px solid #333793" }} /> : <Image width={100} height={50} src={TICKET} alt='aaa' />}
                    </Link>
                    <Link href={`/workflowList`}>
                        {pathname === 'WORKFLOWLIST' ? <Image width={100} height={50} src={WORKFLOW} alt='aaa' style={{ backgroundColor: "#DBDBDB", borderLeft: "3px solid #333793" }} /> : <Image width={100} height={50} src={WORKFLOW} alt='aaa' />}
                    </Link>
                    <Link href={`/filesFolderList`}>
                        {pathname === 'FILESFOLDERLIST' ? <Image width={100} height={50} src={FILES} alt='aaa' style={{ backgroundColor: "#DBDBDB", borderLeft: "3px solid #333793" }} /> : <Image width={100} height={50} src={FILES} alt='aaa' />}
                    </Link>
                    <Link href={`/formBuilderList`}>
                        {pathname === 'FORMBUILDERLIST' ? <Image width={100} height={50} src={FORMBUILDER} alt='aaa' style={{ backgroundColor: "#DBDBDB", borderLeft: "3px solid #333793" }} /> : <Image width={100} height={50} src={FORMBUILDER} alt='aaa' />}
                    </Link>
                    <Image width={100} height={50} src={SETTINGS} alt='' />
                </Sider>

                <Layout>
                    <Content style={{ background: 'white' }}>
                        <div className='flex flex-col flex-grow' style={{ overflow: 'auto' }}>
                            {children}
                        </div>
                    </Content>
                </Layout>
            </Layout>
        </>
    )
}