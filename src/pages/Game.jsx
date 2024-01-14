import React, { useState } from 'react';
import { BackButton } from '../components/buttons/BackButton';
import { useParams } from 'react-router-dom';
import Chat from '../components/chat/Chat';
import Button from '../components/buttons/button';

export default function Game() {
    const [gameStatus, setStatus] = useState({
        code: 5155,
        round_no: 1,
        // status: 'reveal',
        // status: 'secreate-operation',
        // status: 'status',
        status: 'morning',
        // status: 'end',
        isDayTime: false,
        dayChat: [],
        mafiaChat: [
            { sender: 'karthik', message: 'rasaathi unnai pakath anenjam kathadi pladuthe' },
            { sender: 'Harshith', message: 'rasaathi unnai pakath anenjam kathadi pladuthe' },
            { sender: 'Harshith', message: 'rasaathi unnai pakath anenjam kathadi pladuthe' },
            { sender: 'Harshith', message: 'rasaathi unnai pakath anenjam kathadi pladuthe' },
            { sender: 'Harshith', message: 'rasaathi unnai pakath anenjam kathadi pladuthe' },
            { sender: 'Harshith', message: 'rasaathi unnai pakath anenjam kathadi pladuthe' },
            { sender: 'Harshith', message: 'rasaathi unnai pakath anenjam kathadi pladuthe' },
            { sender: 'karthik', message: 'rasaathi unnai pakath anenjam kathadi pladuthe' },
            { sender: 'karthik', message: 'rasaathi unnai pakath anenjam kathadi pladuthe' },
            { sender: 'karthik', message: 'rasaathi unnai pakath anenjam kathadi pladuthe' },
            { sender: 'karthik', message: 'rasaathi unnai pakath anenjam kathadi pladuthe' },

        ],
    })

    const [roomData, setRoomData] = useState({
        "gameStaus": {
            "code": "5155",
            "round_no": 1,
            "status": "waiting"
        },
        "players": [
            {
                "host": true,
                "isActive": true,
                "isReady": true,
                "name": "Harshith",
                "score": 0,
                "role": 'villeger',
                "subrole": 'doctor',
                "isVoted": true,
            },
            {
                "host": true,
                "isActive": true,
                "isReady": true,
                "name": "Harshith",
                "score": 0,
                "role": '',
                "subrole": 'doctor',
                "isVoted": false,
            }
        ]
    });

    const [userInfo, setUserIno] = useState({
        // role: 'villager',
        // role: 'mafia',
        // role: 'doctor',
        role: 'dictector',
    })

    const [tab, setTab] = useState(1);

    const param = useParams();

    return (
        <>
            <BackButton url={'/'} />
            <div className='d-flex flex-column gap-4 w-100 h-100  align-items-center justify-content-center'>
                <span className='text-white fs-1'>ROUND {gameStatus.round_no}({gameStatus.isDayTime ? 'MORNING' : 'NIGHT'})</span>
                {
                    (() => {
                        switch (gameStatus.status) {
                            case 'reveal':
                                return (
                                    <>
                                        <div className='border-radius-15 canvas bg-white card card-bg p-2 px-3 gap-1 d-flex flex-row justify-content-around'>
                                            <span className='border-radius-15 card font-10 text-center flex-1 py-1'>REVEAL ROLE</span>
                                        </div>
                                        <div className="fs-3 canvas bg-white card card-bg height-card-button p-4 gap-1 overflow-auto d-flex align-items-center justify-content-center">
                                            you and karthiks are mafia
                                        </div>
                                    </>
                                );
                            case 'secreate-operation':
                                switch (userInfo.role) {
                                    case 'villager':
                                        return (
                                            <>
                                                <div className="fs-3 canvas bg-white card card-bg height-card-button p-4 gap-1 overflow-auto d-flex align-items-center justify-content-center">
                                                    its bed time
                                                </div>
                                            </>
                                        )
                                    case 'mafia':
                                        return (
                                            <>
                                                <div className='border-radius-15 canvas bg-white card card-bg p-2 px-3 gap-1 d-flex flex-row justify-content-around'>
                                                    <span onClick={() => { setTab(1) }} className={`border-radius-15 card font-10 text-center flex-1 py-1 cursor-pointer ${tab !== 1 && 'bg-off-white'}`}>MAFIA CHAT</span>
                                                    <span onClick={() => { setTab(2) }} className={`border-radius-15 card font-10 text-center flex-1 py-1 cursor-pointer ${tab !== 2 && 'bg-off-white'}`}>VOTE TO KILL</span>
                                                </div>
                                                {tab === 1 ?
                                                    <div className="fs-3 canvas bg-white card card-bg height-card-button gap-1 overflow-auto d-flex align-items-center justify-content-center">
                                                        <Chat chatHistory={gameStatus.mafiaChat} />
                                                    </div> :

                                                    <>
                                                        <div className="canvas bg-white card card-bg height-card-button p-2">
                                                            {roomData.players.map((player, index) => (
                                                                <span key={index} className='py-1 px-3 bg-white card border-0 d-flex flex-row justify-content-between'>
                                                                    <span className='text-uppercase'>{player.name}</span>
                                                                    <span className="action-btn" style={{ height: '26px' }}>
                                                                        <input type="checkbox" name="" id="" />
                                                                    </span>
                                                                </span>
                                                            ))}
                                                        </div>
                                                        <Button action={() => console.log('')} disabled={false} text={'submit'} />
                                                    </>
                                                }
                                            </>
                                        );
                                    case 'doctor':
                                        return (
                                            <>
                                                <div className='border-radius-15 canvas bg-white card card-bg p-2 px-3 gap-1 d-flex flex-row justify-content-around'>
                                                    <span onClick={() => { setTab(1) }} className={`border-radius-15 card font-10 text-center flex-1 py-1 cursor-pointer`}>protect one</span>
                                                </div>
                                                <div className="canvas bg-white card card-bg height-card-button p-2  gap-1">
                                                    {roomData.players.map((player, index) => (
                                                        <span key={index} className='py-1 px-3 bg-white card border-0 d-flex flex-row justify-content-between'>
                                                            <span className='text-uppercase'>{player.name}</span>
                                                            <span className="action-btn" style={{ height: '26px' }}>
                                                                <input type="checkbox" name="" id="" />
                                                            </span>
                                                        </span>
                                                    ))}
                                                </div>
                                                <Button action={() => console.log('')} disabled={false} text={'submit'} />
                                            </>
                                        );
                                    case 'dictector':
                                        return (
                                            <>
                                                <div className='border-radius-15 canvas bg-white card card-bg p-2 px-3 gap-1 d-flex flex-row justify-content-around'>
                                                    <span onClick={() => { setTab(1) }} className={`border-radius-15 card font-10 text-center flex-1 py-1 cursor-pointer`}>reveal role</span>
                                                </div>
                                                <div className="canvas bg-white card card-bg height-card-button p-2 gap-1">
                                                    {roomData.players.map((player, index) => (
                                                        <span key={index} className='py-1 px-3 bg-white card border-0 d-flex flex-row justify-content-between'>
                                                            <span className='text-uppercase'>{player.name}</span>
                                                            {player.role ? <span className='text-success'>{player.role}</span> : <span className="action-btn" style={{ height: '26px' }}>
                                                                <input type="checkbox" name="" id="" />
                                                            </span>}
                                                        </span>
                                                    ))}
                                                </div>
                                                <Button action={() => console.log('')} disabled={false} text={'submit'} />
                                            </>
                                        );

                                }
                            case 'round-status':
                                return (
                                    <>
                                        <div className='border-radius-15 canvas bg-white card card-bg p-2 px-3 gap-1 d-flex flex-row justify-content-around'>
                                            <span className='border-radius-15 card font-10 text-center flex-1 py-1'>STATUS</span>
                                        </div>
                                        <div className="fs-3 canvas bg-white card card-bg height-card-button p-4 gap-1 overflow-auto d-flex align-items-center justify-content-center">
                                            last night, Karthik was killed by mafias
                                        </div>
                                    </>
                                );
                            case 'morning':
                                return (
                                    <>
                                        <div className='border-radius-15 canvas bg-white card card-bg p-2 px-3 gap-1 d-flex flex-row justify-content-around'>
                                            <span onClick={() => { setTab(1) }} className={`border-radius-15 card font-10 text-center flex-1 py-1 cursor-pointer ${tab !== 1 && 'bg-off-white'}`}>CHAT</span>
                                            <span onClick={() => { setTab(2) }} className={`border-radius-15 card font-10 text-center flex-1 py-1 cursor-pointer ${tab !== 2 && 'bg-off-white'}`}>VOTE</span>
                                            <span onClick={() => { setTab(3) }} className={`border-radius-15 card font-10 text-center flex-1 py-1 cursor-pointer ${(tab !== 3 && tab !== 4) && 'bg-off-white'}`}>PLAYERS</span>
                                        </div>
                                        {(() => {
                                            switch (tab) {
                                                case 1:
                                                    return (
                                                        <div className="fs-3 canvas bg-white card card-bg height-card-button gap-1 overflow-auto d-flex align-items-center justify-content-center">
                                                            <Chat chatHistory={gameStatus.dayChat} />
                                                        </div>)
                                                case 2:
                                                    return (
                                                        <>
                                                            <div className="canvas bg-white card card-bg height-card-button p-2 gap-1">
                                                                {roomData.players.map((player, index) => (
                                                                    <span key={index} className='py-1 px-3 bg-white card border-0 d-flex flex-row justify-content-between'>
                                                                        <span className='text-uppercase'>{player.name}</span>
                                                                        <span className="action-btn" style={{ height: '26px' }}>
                                                                            <input type="checkbox" name="" id="" />
                                                                        </span>
                                                                    </span>
                                                                ))}
                                                            </div>
                                                            <Button action={() => console.log('')} disabled={false} text={'submit'} />
                                                        </>)
                                                case 3:
                                                    return (
                                                        <div className="canvas bg-white card card-bg height-card-button p-2 gap-1">
                                                            {roomData.players.map((player, index) => (
                                                                <span key={index} className='py-1 px-3 bg-white card border-0 d-flex flex-row justify-content-between'>
                                                                    <span className='text-uppercase'>{player.name}</span>
                                                                    <span className="action-btn">
                                                                        {
                                                                            player.isVoted ? <span className="text-success cursor-pointer">voted</span> :
                                                                                <span className="text-danger cursor-pointer" onClick={() => setTab(4)}>kick</span>
                                                                        }
                                                                    </span>
                                                                </span>
                                                            ))}
                                                        </div>
                                                    )
                                                case 4:
                                                    return (
                                                        <div className="canvas bg-white card card-bg height-card-button p-2 gap-1">
                                                            PLAYER WILL BE REMOVED FEM GAME !
                                                            <button onClick={() => setTab(3)}>QUITE</button>
                                                            <button onClick={() => setTab(3)}>Continue</button>
                                                        </div>
                                                    )
                                                default:
                                                    return null; // Handle default case if needed
                                            }
                                        })()}
                                    </>

                                );
                            case 'end':
                                return (
                                    <>
                                        <div className='border-radius-15 canvas bg-white card card-bg p-2 px-3 gap-1 d-flex flex-row justify-content-around'>
                                            <span className='border-radius-15 card font-10 text-center flex-1 py-1'>END</span>
                                        </div>
                                        <div className="fs-3 canvas bg-white card card-bg height-card-button p-4 gap-1 overflow-auto d-flex align-items-center justify-content-center">
                                            MAFIA WON THE GMAE
                                        </div>
                                    </>
                                );
                            default:
                                return null;
                        }
                    })()
                }
            </div>
        </>
    )
}
