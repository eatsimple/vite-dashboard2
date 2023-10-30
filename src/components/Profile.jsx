import React, { useState, useEffect } from 'react';

function Profile() {
  const [isOpen, setIsOpen] = useState(false);

  const handleOutsideClick = (e) => {
    if (e.target.closest('.profile')) return;
    setIsOpen(false);
  };

  useEffect(() => {
    window.addEventListener('click', handleOutsideClick);

    return () => {
      window.removeEventListener('click', handleOutsideClick);
    };
  }, []);

  return (
    <div className="relative inline-block text-left profile">
      <button onClick={() => setIsOpen(!isOpen)} className="focus:outline-none">
        <div className="w-10 h-10 rounded-full bg-orange-500 flex items-center justify-center">
          <span className="text-white">A</span>
        </div>
      </button>

      {isOpen && (
        <div className="origin-top-right absolute right-4 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
          <div className="py-1">
            <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
              Profile
            </a>
            <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
              Settings
            </a>
            <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
              Logout
            </a>
          </div>
        </div>
      )}
    </div>
  );
}

export default Profile;
