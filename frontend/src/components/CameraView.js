import React, { useEffect, useState } from 'react';
import './CameraView.css';

function CameraView() {
  const [frame, setFrame] = useState(null);

  useEffect(() => {
    const fetchVideo = async () => {
      try {
        const response = await fetch('/api/video/stream');
        const blob = await response.blob();
        setFrame(URL.createObjectURL(blob));
      } catch (error) {
        console.error('Error fetching video:', error);
      }
    };

    const interval = setInterval(fetchVideo, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="card my-4">
      <div className="card-header bg-primary text-white">
        <h3>Видеопоток</h3>
      </div>
      <div className="card-body">
        {frame ? (
          <img src={frame} alt="Видеопоток" className="video-frame" />
        ) : (
          <p>Загрузка видеопотока...</p>
        )}
      </div>
    </div>
  );
}

export default CameraView;
