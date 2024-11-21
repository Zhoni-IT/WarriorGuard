import React from 'react';
import CameraView from '../components/CameraView';
import Notifications from '../components/Notifications';

function Dashboard() {
  return (
    <div className="container my-4">
      <h1 className="text-center mb-4">Панель мониторинга</h1>
      <CameraView />
      <Notifications />
    </div>
  );
}

export default Dashboard;
