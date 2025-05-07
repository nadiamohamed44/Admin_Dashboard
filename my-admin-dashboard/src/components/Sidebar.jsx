
import React from 'react';
import './Sidebar.css';

const Sidebar = () => {
  return (
    <aside className="sidebar">
      <ul>
        <li>لوحة التحكم</li>
        <li>المستخدمين</li>
        <li>الإعدادات</li>
        <li>تسجيل الخروج</li>
      </ul>
    </aside>
  );
};

export default Sidebar;
