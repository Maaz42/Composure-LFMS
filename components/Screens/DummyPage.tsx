import * as React from 'react'

export default function DummyPage({ title }: any) {
    return (
        <div className='flex flex-col'>
            <div className='m-auto'>
                <h1 className='text-4xl'>{title}</h1>
            </div>
        </div>
    )
}
