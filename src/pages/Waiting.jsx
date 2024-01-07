import React from 'react'
import { BackButton } from '../components/buttons/BackButton'
import Button from '../components/buttons/button'

function Waiting() {
    return (
        <>
            <BackButton url={'/'} />
            <div className='d-flex flex-column gap-4 w-100 h-100  align-items-center justify-content-center'>
                <span className='text-white fs-1'>ROOM</span>
                <div className='d-flex gap-2 opacity-50'>
                    <span className='code-element bg-white' ></span>
                    <span className='code-element bg-white' ></span>
                    <span className='code-element bg-white' ></span>
                    <span className='code-element bg-white' ></span>
                </div>
                <div className="canvas bg-white card card-bg height-card-button p-4 gap-1 overflow-auto">
                    <span className='py-1 px-3 bg-white card border-0 d-flex flex-row justify-content-between'>
                        <span className='text-uppercase'>karthik</span>
                        <span className="action-btn">
                            <span className="cross-icon cursor-pointer"></span>
                        </span>
                    </span>
                    <span className='py-1 px-3 bg-white card border-0 d-flex flex-row justify-content-between'>
                        <span className='text-uppercase'>karthik</span>
                        <span className="action-btn">
                            <span className="text-success cursor-pointer">READY</span>
                        </span>
                    </span>
                    <span className='py-1 px-3 bg-white card border-0 d-flex flex-row justify-content-between'>
                        <span className='text-uppercase'>karthik</span>
                        <span className="action-btn">
                            <input type="checkbox" name="" id="" />
                        </span>
                    </span>
                </div>
                <Button text={'READY'} />
            </div>
        </>
    )
}

export default Waiting