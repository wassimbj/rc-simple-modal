import React, { useState } from "react";
import LoginModal from "./LoginModal";
import LargeModal from "./LargeModal";

function App() {

  const [isModalOpen, setIsModalOpen] = useState(false);
  
  const [isLargeModalOpen, setIsLargeModalOpen] = useState(false);

  return (
    <div className="container mx-auto">
      
      <div className='my-20 max-w-xl bg-white py-8 px-3 rounded-lg shadow-md border-2 border-gray-200 mx-auto'>
        <h2 className='font-bold text-center block text-xl mb-10 text-gray-700'> Modal Demo </h2>
        <div className='flex items-center justify-center'>
          
          <button onClick={() => setIsModalOpen(true)} className='mx-1 bg-blue-400 text-white font-bold rounded-full px-5 py-3'>
            Open Modal
          </button>

          <button onClick={() => setIsLargeModalOpen(true)} className='mx-1 bg-blue-400 text-white font-bold rounded-full px-5 py-3'>
            Open Large Modal
          </button>

        </div>
      </div>

      <LoginModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />

      <LargeModal
        isOpen={isLargeModalOpen}
        onClose={() => setIsLargeModalOpen(false)}
      />
    </div>
  );
}

export default App;
