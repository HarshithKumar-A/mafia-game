import React, { useState, useEffect, useRef } from 'react'
import { BackButton } from '../components/buttons/BackButton'
import Button from '../components/buttons/button'
import { database } from '../intercepter/firebaseApp'
import { ref, set, onValue } from "firebase/database";
import { useNavigate } from 'react-router-dom';

function Waiting() {
    const [roomId, setRoomId] = useState('xxxx');
    const [roomData, setRoomData] = useState({ gameStatus: {}, players: [] });
    const [playerData, setPlayerData] = useState()
    const navigate = useNavigate();

    useEffect(() => {
        const roomId = JSON.parse(localStorage.getItem('v1:gmaeInfo'))?.gameId;
        if (!roomId) {
            navigate('/');
        }
        const cartRef = ref(database, 'room-id/' + roomId);
        console.log(database + 'room-id/' + roomId);
        onValue(cartRef, (snapshot) => {
            const data = snapshot.val();
            if (!!data) {
                setRoomId(roomId);
                setRoomData(data);
                const playerData = data?.players.find((player) => player.name === JSON.parse(localStorage.getItem('v1:userInfo')).name);
                setPlayerData(playerData);
                console.log(data, roomData);
            } else {
                console.log('Data not found');
            }
        });
    }, []);

    function onActionButtonClick() {
        console.log('here');
        if (playerData.host) {

        } else {
            // Find the player with the name 'Abu ser'
            const userIndex = roomData.players.findIndex(player => player.name === playerData.name);
            if (userIndex !== -1) {
                roomData.players[userIndex].isReady = !roomData.players[userIndex].isReady;
            }
            console.log('here', userIndex, roomData);
            set(ref(database, 'room-id/' + roomId),
                roomData
            ).then(() => {
                console.log('success');
            }).catch((error) => {
                console.log(error);
            });
        }
    }


    return (
        <>
            <BackButton url={'/'} />
            <div className='d-flex flex-column gap-4 w-100 h-100  align-items-center justify-content-center'>
                <span className='text-white fs-1'>ROOM</span>
                <div className='d-flex gap-2 opacity-50'>
                    {
                        roomId.split('').map((char, index) => (
                            <span key={index} className='code-element bg-white' >{char}</span>
                        ))
                    }
                </div>
                <div className="canvas bg-white card card-bg height-card-button p-4 gap-1 overflow-auto">
                    {
                        roomData.players.map((player, index) => (
                            <span key={index} className='py-1 px-3 bg-white card border-0 d-flex flex-row justify-content-between'>
                                <span className='text-uppercase'>{player.name}</span>
                                <span className="action-btn">
                                    {
                                        player.isReady ? <span className="text-success cursor-pointer">READY</span> :
                                            <span className="cross-icon cursor-pointer"></span>
                                    }
                                </span>
                            </span>
                        ))
                    }
                    {/* <span className='py-1 px-3 bg-white card border-0 d-flex flex-row justify-content-between'>
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
                    </span> */}
                </div>
                <Button action={() => onActionButtonClick()} disabled={!!playerData?.host && roomData.players.some(plyer => !plyer.isReady)} text={playerData?.host ? 'START' : playerData?.isReady ? 'NOT READY' : 'READY'} />
            </div>
        </>
    )
}

export default Waiting