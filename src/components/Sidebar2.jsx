import React, { useState } from 'react';
import { NavLink } from 'react-router-dom'; // Tambahkan ini
import { MdOutlineDashboard, MdAccountCircle, MdAnalytics, MdOutlineSettings, MdLogout } from 'react-icons/md';
import { BsChevronDown, BsChatLeftText, BsCalendarCheck, BsFiles, BsServer } from 'react-icons/bs';
import { FiAlignJustify } from 'react-icons/fi';

const Menus = [
  { title: 'Dashboard', src: 'Chart_fill', icon: <MdOutlineDashboard />, path: '/dashboard' }, // Tambahkan path
  { title: 'Inbox', src: 'Chat', icon: <BsChatLeftText />, path: '/inbox' }, // Tambahkan path
  // ... (menu lainnya)
  {
    title: 'Resources',
    src: 'Resources',
    icon: <BsServer />,
    subMenus: [
      {
        title: 'Vendor',
        src: '/vendor',
        cName: 'sub-nav',
      },
      {
        title: 'Produk',
        src: '/produk',
        cName: 'sub-nav',
      },
      {
        title: 'Sales',
        src: '/sales',
      },
    ],
  },
  {
    title: 'Finance',
    src: 'Chart',
    icon: <MdAnalytics />,
    subMenus: [
      {
        title: 'Neraca',
        src: '/neraca',
        cName: 'sub-nav',
      },
      {
        title: 'Laba Rugi',
        src: '/labarugi',
        cName: 'sub-nav',
      },
      {
        title: 'Arus Kas',
        src: '/aruskas',
      },
    ],
  },
  {
    title: 'CRM',
    src: 'Chart',
    icon: <MdAnalytics />,
    subMenus: [
      {
        title: 'Kontak',
        src: '/kontak',
        cName: 'sub-nav',
      },
      {
        title: 'Customer',
        src: '/customer',
        cName: 'sub-nav',
      },
    ],
  },
  {
    title: 'Transactions',
    src: 'Chart',
    icon: <MdAnalytics />,
    subMenus: [
      {
        title: 'Pembelian',
        src: '/pembelian',
        cName: 'sub-nav',
      },
      {
        title: 'Penjualan',
        src: '/penjualan',
        cName: 'sub-nav',
      },
      {
        title: 'Pembayaran',
        src: '/pembayaran',
      },
    ],
  },
  { title: 'Settings', src: 'Chat', icon: <BsChatLeftText />, path: '/settings' },
  { title: 'Help & Support', src: 'Chat', icon: <BsChatLeftText />, path: '/support' },
  { title: 'Logout', src: 'Chat', icon: <BsChatLeftText />, path: '/logout' },
  // Tambahkan path
  // ... (menu lainnya)
];

const Sidebar = () => {
  const [open, setOpen] = useState(true);
  const [subMenuOpen, setSubMenuOpen] = useState({}); // State untuk mengelola status submenu

  const toggleSidebar = () => {
    setOpen(!open);
  };

  // Fungsi untuk mengatur status submenu
  const toggleSubMenu = (menuTitle) => {
    // menuTitle: 1 menu yang diklik
    setSubMenuOpen((prevState) => ({
      // prevState: menyimpan semua menu
      ...prevState,
      [menuTitle]: !prevState[menuTitle],
    }));
  };

  return (
    <div className="h-screen flex items-end justify-end">
      <button className="fixed  z-90 bottom-6 right-6 bg-teal-800 w-10 h-10 rounded-full drop-shadow-lg flex justify-center items-center text-white text-4xl hover:bg-teal-800 duration-500" onClick={toggleSidebar}>
        {/* ... (tombol) */} <FiAlignJustify />
      </button>

      <div className={` ${open ? 'w-72 px-2 ' : 'w-0 hidden'}  bg-teal-800 h-screen relative duration-500`}>
        <div className="justify-center mt-3">
          <h1 className={`text-white italic font-medium text-2xl text-center duration-200 ${!open && 'invisible'}`}>
            Ady<span className=" text-orange-500">Water</span>
          </h1>
        </div>

        <ul className="pt-6">
          {Menus.map((Menu, index) => (
            <>
              <NavLink to={Menu.path} key={index} className={`flex rounded-md p-2 cursor-pointer hover:bg-teal-400 text-white text-sm items-center gap-x-4 ${Menu.gap ? 'mt-9' : 'mt-2'}`}>
                {Menu.icon ? Menu.icon : <MdOutlineDashboard />}
                <div
                  className="flex-1"
                  onClick={() => Menu.subMenus && toggleSubMenu(Menu.title)} // Toggle submenu saat klik
                >
                  {Menu.title}
                </div>
                {Menu.subMenus && <BsChevronDown onClick={() => toggleSubMenu(Menu.title)} className={`${subMenuOpen[Menu.title] && 'rotate-180'}`} />}
              </NavLink>
              {Menu.subMenus && subMenuOpen[Menu.title] && open && (
                <ul>
                  {Menu.subMenus.map((subMenuItem, idx) => (
                    <li key={idx} className="flex px-5 cursor-pointer text-center text-sm text-gray-200 py-1">
                      <NavLink to={subMenuItem.src}>{subMenuItem.title}</NavLink> {/* Tambahkan NavLink dengan path submenu */}
                    </li>
                  ))}
                </ul>
              )}
            </>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
