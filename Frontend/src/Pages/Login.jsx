import { useState } from 'react';

export default function Login() {
  // 1. Name store karne ke liye state banayein
  const [name, setName] = useState('');

  const handleSendDetails = () => {
    console.log('Sending Data:', { name });
  setName('');
  };

  return (
    <></>
  );
}
