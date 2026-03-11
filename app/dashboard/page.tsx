'use client';
import React, { useState } from 'react';

// Define the structure of a parking space
interface ParkingSpace {
  id: number;
  status: 'available' | 'occupied';
}

// Define the structure of a parking record
interface ParkingRecord {
  id: number;
  spaceId: number;
  startTime: Date;
  endTime: Date;
  vehicleNumber: string;
  userId: string;
}

// Sample data for demonstration
const initialSpaces: ParkingSpace[] = [
  { id: 1, status: 'available' },
  { id: 2, status: 'occupied' },
  // Add more spaces as needed
];

const initialRecords: ParkingRecord[] = [
  {
    id: 1,
    spaceId: 2,
    startTime: new Date(),
    endTime: new Date(new Date().setHours(new Date().getHours() + 1)),
    vehicleNumber: 'ABC123',
    userId: 'user1',
  },
  // Add more records as needed
];

export default function DashboardPage() {
  const [spaces, setSpaces] = useState<ParkingSpace[]>(initialSpaces);
  const [records, setRecords] = useState<ParkingRecord[]>(initialRecords);

  // Function to simulate parking space update
  const updateSpaces = () => {
    setSpaces((prevSpaces) =>
      prevSpaces.map((space) => ({
        ...space,
        status: space.id === 2 ? 'available' : 'occupied',
      }))
    );
  };

  // Function to add a new parking record
  const addParkingRecord = (spaceId: number, vehicleNumber: string) => {
    const newRecord: ParkingRecord = {
      id: records.length + 1,
      spaceId,
      startTime: new Date(),
      endTime: null,
      vehicleNumber,
      userId: 'user1',
    };
    setRecords([...records, newRecord]);
    setSpaces((prevSpaces) =>
      prevSpaces.map((space) =>
        space.id === spaceId ? { ...space, status: 'occupied' } : space
      )
    );
  };

  // Function to end a parking session
  const endParkingSession = (recordId: number) => {
    setRecords((prevRecords) =>
      prevRecords.map((record) =>
        record.id === recordId ? { ...record, endTime: new Date() } : record
      )
    );
    setSpaces((prevSpaces) =>
      prevSpaces.map((space) =>
        space.id === records.find((r) => r.id === recordId)?.spaceId
          ? { ...space, status: 'available' }
          : space
      )
    );
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', padding: '20px' }}>
      <h1 style={{ marginBottom: '20px' }}>주차 관리 대시보드</h1>
      <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '20px' }}>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <h2 style={{ marginRight: '10px' }}>사용 가능한 공간 수:</h2>
          <div style={{ fontSize: '24px', fontWeight: 'bold' }}>
            {spaces.filter((space) => space.status === 'available').length}
          </div>
        </div>
        <button onClick={updateSpaces} style={{ padding: '10px 20px', backgroundColor: '#007bff', color: '#fff', border: 'none', borderRadius: '5px', cursor: 'pointer' }}>
          주차 공간 업데이트
        </button>
      </div>
      <div style={{ display: 'flex', marginBottom: '20px' }}>
        <div style={{ width: '50%' }}>
          <h2 style={{ marginBottom: '10px' }}>주차 공간 매핑</h2>
          <div style={{ width: '100%', height: '300px', border: '1px solid #ccc' }}>
            {/* Leaflet or Mapbox GL JS map implementation goes here */}
          </div>
          {spaces.map((space) => (
            <div
              key={space.id}
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                width: '40px',
                height: '40px',
                margin: '5px',
                backgroundColor: space.status === 'occupied' ? '#ff6347' : '#90ee90',
                cursor: 'pointer',
              }}
              onClick={() => {
                if (space.status === 'available') {
                  const vehicleNumber = prompt('차량 번호 입력:');
                  if (vehicleNumber && vehicleNumber.trim() !== '') {
                    addParkingRecord(space.id, vehicleNumber.trim());
                  }
                } else {
                  const record = records.find((r) => r.spaceId === space.id);
                  if (record) {
                    endParkingSession(record.id);
                  }
                }
              }}
            >
              {space.id}
            </div>
          ))}
        </div>
        <div style={{ width: '50%' }}>
          <h2 style={{ marginBottom: '10px' }}>주차 기록</h2>
          <table style={{ width: '100%', borderCollapse: 'collapse' }}>
            <thead>
              <tr>
                <th>ID</th>
                <th>공간 ID</th>
                <th>시작 시간</th>
                <th>종료 시간</th>
                <th>차량 번호</th>
                <th>사용자 ID</th>
              </tr>
            </thead>
            <tbody>
              {records.slice(-5).map((record) => (
                <tr key={record.id}>
                  <td>{record.id}</td>
                  <td>{record.spaceId}</td>
                  <td>{record.startTime.toLocaleString()}</td>
                  <td>{record.endTime ? record.endTime.toLocaleString() : '-'}</td>
                  <td>{record.vehicleNumber}</td>
                  <td>{record.userId}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}