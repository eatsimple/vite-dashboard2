import React, { useState } from 'react';
import { HiOutlineSearch, HiOutlineBell } from 'react-icons/hi';
import Profile from '../components/Profile';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import Popover from '@mui/material/Popover';
import Button from '@mui/material/Button';
import { BsFillCalendarDayFill } from 'react-icons/bs';

const Header = () => {
  const [calendarOpen, setCalendarOpen] = useState(false);
  const [selectedDate, setSelectedDate] = useState(new Date());

  const handleCalendarClick = (event) => {
    setCalendarOpen(true);
  };

  const handleCalendarClose = () => {
    setCalendarOpen(false);
  };

  const handleDateChange = (date) => {
    setSelectedDate(date);
    handleCalendarClose();
  };

  // Fungsi untuk menentukan apakah tanggal adalah hari ini
  const isToday = (date) => {
    const today = new Date();
    return (
      date.getDate() === today.getDate() &&
      date.getMonth() === today.getMonth() &&
      date.getFullYear() === today.getFullYear()
    );
  };

  // Fungsi untuk mengatur kelas latar belakang jika tanggal adalah hari ini
  const tileContent = ({ date, view }) => {
    if (view === 'month' && isToday(date)) {
      return <div className="bg-blue-500 text-white">Hari Ini</div>;
    }
  };

  return (
    <div className="bg-white h-16 px-4 flex flex-row justify-between">
      <div className="relative my-auto">
        <HiOutlineSearch fontSize={20} className="text-gray-400 absolute top-1/2 left-3 -translate-y-1/2" />
        <input
          type="text"
          placeholder="Search..."
          className="text-sm focus:outline-none active:outline-orange border border-gray-300 w-[24rem] h-10 pl-11 pr-4 rounded-md hover:border-orange-500"
        />
      </div>

      <div className="my-3 flex flex-row space-x-3.5 items-center">
        <Button onClick={handleCalendarClick} variant="outlined">
          <BsFillCalendarDayFill />
        </Button>
        <HiOutlineBell fontSize={24} className="cursor-pointer" />
        <Profile />

        <Popover
          open={calendarOpen}
          onClose={handleCalendarClose}
          anchorReference="anchorPosition"
          anchorPosition={{ top: 60, left: 1040 }} // Sesuaikan posisinya sesuai kebutuhan
        >
          <Calendar
            onChange={handleDateChange}
            value={selectedDate}
            tileContent={tileContent} // Tambahkan properti tileContent
          />
        </Popover>
      </div>
    </div>
  );
};

export default Header;
