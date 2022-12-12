const rooms = [
  {
    id: '1',
    name: 'Disappointment Beach Room',
    floor: '5th',
    capacity: '10',
    equipments: 'WhiteBoard, Speakers, and Projector',
    bookedData: [
      {
        employeeName: 'Tahani',
        guestInvitations: [
          'rawan@email.com',
          'tahany@email.com',
          'haneen@email.com',
          'mahmoud@email.com',
        ],
        duration: 60,
        date: 'June 9, 2021',
        startingTime: '2:00 PM',
        endingTime: '3:00 PM',
      },
      {
        employeeName: 'Rawan',
        guestInvitations: [
          'rawan@email.com',
          'tahany@email.com',
          'haneen@email.com',
        ],
        startingTime: '3:00 PM',
        endingTime: '4:00 PM',
        duration: 60,
        date: 'June 9, 2021',
      },
      {
        employeeName: 'sawan',
        guestInvitations: ['thahny@email.com', 'mahmoud@email.com'],
        startingTime: '4:00 PM',
        endingTime: '5:30 PM',
        duration: 90,
        date: 'June 8, 2021',
      },
      {
        employeeName: 'sawan',
        guestInvitations: ['thahny@email.com', 'mahmoud@email.com'],
        startingTime: '1:00 PM',
        endingTime: '2:00 PM',
        duration: 60,
        date: 'June 1, 2021',
      },
    ],
  },
  {
    id: '2',
    name: 'Batcave Room',
    floor: '3th',
    capacity: '15',
    equipments: 'Data Show, WhiteBoard, Speakers, Projector, and CoffeMaker',
    bookedData: [
      {
        employeeName: 'Tahani',
        guestInvitations: [
          'rawan@email.com',
          'tahany@email.com',
          'haneen@email.com',
          'mahmoud@email.com',
        ],
        duration: 60,
        date: 'June 9, 2021',
        startingTime: '1:00 PM',
        endingTime: '2:00 PM',
      },
      {
        employeeName: 'Tahani',
        guestInvitations: [
          'rawan@email.com',
          'tahany@email.com',
          'haneen@email.com',
          'mahmoud@email.com',
        ],
        duration: 60,
        date: 'June 9, 2021',
        startingTime: '2:00 PM',
        endingTime: '3:00 PM',
      },
      {
        employeeName: 'Tahani',
        guestInvitations: [
          'rawan@email.com',
          'tahany@email.com',
          'haneen@email.com',
          'mahmoud@email.com',
        ],
        duration: 60,
        date: 'June 8, 2021',
        startingTime: '2:00 PM',
        endingTime: '3:00 PM',
      },
      {
        employeeName: 'Tahani',
        guestInvitations: [
          'rawan@email.com',
          'tahany@email.com',
          'haneen@email.com',
          'mahmoud@email.com',
        ],
        duration: 60,
        date: 'June 9, 2021',
        startingTime: '3:00 PM',
        endingTime: '4:00 PM',
      },
      {
        employeeName: 'sawan',
        guestInvitations: ['thahny@email.com', 'mahmoud@email.com'],
        startingTime: '4:00 PM',
        endingTime: '5:00 PM',
        duration: 60,
        date: 'June 8, 2021',
      },
    ],
  },
  {
    id: '3',
    name: 'Tiny House Room',
    floor: '4th',
    capacity: '20',
    equipments: 'Data Show, WhiteBoard, Speakers, and CoffeMaker',
    bookedData: [],
  },
  {
    id: '4',
    name: 'Big Ideas Room',
    floor: '2th',
    capacity: '12',
    equipments: 'Data Show, WhiteBoard, Speakers, Projector, and CoffeMaker',
    bookedData: [],
  },
  {
    id: '5',
    name: 'Dothraki Room',
    floor: '5th',
    capacity: '15',
    equipments: 'Data Show, WhiteBoard, Speakers, Projector, and CoffeMaker',
    bookedData: [
      {
        employeeName: 'Tahani',
        guestInvitations: [
          'rawan@email.com',
          'tahany@email.com',
          'haneen@email.com',
          'mahmoud@email.com',
        ],
        duration: 75,
        date: 'June 9, 2021',
        startingTime: '2:00 PM',
        endingTime: '3:15 PM',
      },
    ],
  },
  {
    id: '6',
    name: 'Decision Accelerator Room',
    floor: '5th',
    capacity: '10',
    equipments: 'Data Show, WhiteBoard, and Projector',
    bookedData: [
      {
        employeeName: 'Tahani',
        guestInvitations: [
          'mahmoud@email.com',
        ],
        duration: 75,
        date: 'June 1, 2021',
        startingTime: '2:00 PM',
        endingTime: '3:15 PM',
      },
      {
        employeeName: 'Rawan',
        guestInvitations: [
          'rawan@email.com',
          'tahany@email.com',
          'haneen@email.com',
        ],
        startingTime: '2:00 PM',
        endingTime: '3:00 PM',
        duration: 60,
        date: 'June 9, 2021',
      },
      {
        employeeName: 'sawan',
        guestInvitations: ['thahny@email.com', 'mahmoud@email.com'],
        startingTime: '3:00 PM',
        endingTime: '5:00 PM',
        duration: 120,
        date: 'June 9, 2021',
      },
      {
        employeeName: 'Tahany',
        guestInvitations: ['thahny@email.com', 'mahmoud@email.com'],
        startingTime: '3:00 PM',
        endingTime: '5:00 PM',
        duration: 120,
        date: 'June 8, 2021',
      },
    ],
  },
];

export const getRoomsData = () =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(rooms);
      reject(Error);
    }, 500);
  });

export const getSelectedRoomData = id => new Promise((resolve, reject) => {
    const result = rooms.find(room => room.id === id)
    setTimeout(() => {
      resolve(result);
      reject(Error);
    }, 500);
  });

export const setReservationData = (resData, roomId) =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
    const selectedRoom = rooms.find(room => room.id === roomId);
    const newRoomsData = selectedRoom?.bookedData?.concat(resData)
    const index= rooms.findIndex(room=> room.id === roomId)
    rooms[index].bookedData = newRoomsData
      resolve(rooms);
      reject(Error);
    }, 500);
  });

export const searchReservationByDay = (day , roomId) =>  new Promise((resolve, reject) => { 
  
  setTimeout(() => {
   resolve(rooms);
    reject(Error);
  }, 500);
});
