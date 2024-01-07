import React, { useState, useEffect, useRef } from 'react';
import Button from '../components/buttons/button';
import { useNavigate } from 'react-router-dom';

export default function Home() {
  const navigate = useNavigate();
  const [joinRoom, setJoinRoom] = useState(false);
  const [roomCode, setRoomCode] = useState([0, 0, 0, 0]);
  const inputRefs = [useRef(), useRef(), useRef(), useRef()];

  const handleCodeEnter = (event, input) => {
    const value = event.target.value.slice(0, 1); // Restrict to one character
    setRoomCode((prevRoomCode) => {
      const newRoomCode = [...prevRoomCode];
      newRoomCode[input - 1] = value;
      return newRoomCode;
    });

    // Focus on the next input
    if (value !== '' && input < inputRefs.length) {
      inputRefs[input].current.focus();
    }
  };

  const handlePaste = (event) => {
    // Prevent pasting any value
    event.preventDefault();
  };

  const handleKeyDown = (event, input) => {
    // Handle backspace key
    setTimeout(() => {
      if (event.key === 'Backspace' && input > 1) {
        inputRefs[input - 2].current.focus();
      }
    })
  };

  return (
    <div className='d-flex flex-column gap-4 w-100 h-100  align-items-center justify-content-center'>
      {joinRoom ? (
        <>
          <div className='position-absolute top-0 start-0 m-4 cursor-pointer' onClick={() => setJoinRoom(false)}>
            <svg width="28" height="32" viewBox="0 0 28 32" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect width="27.8848" height="31.7781" rx="13.9424" fill="black" />
              <path d="M6.39026 15.2129L17.2827 5.55141V24.8744L6.39026 15.2129Z" fill="#D9D9D9" />
            </svg>
          </div>
          <div className='text-white'>ENTER THE ROOM CODE</div>
          <div className='d-flex gap-1'>
            {inputRefs.map((ref, index) => (
              <input
                key={index}
                onChange={(e) => handleCodeEnter(e, index + 1)}
                onPaste={handlePaste}
                onKeyDown={(e) => handleKeyDown(e, index + 1)}
                maxLength={1}
                className='code-element'
                type="text" // Allow handling one character
                id={`input-${index + 1}`}
                ref={ref}
              />
            ))}
          </div>
          <Button text={'SUBMIT'} action={() => navigate('/waiting-room')} />
        </>
      ) : (
        <>
          <Button text={'CREATE ROOM'} action={() => navigate('/waiting-room')} />
          <Button action={() => setJoinRoom(true)} text={'JOIN ROOM'} />
        </>
      )}
    </div>
  );
}
