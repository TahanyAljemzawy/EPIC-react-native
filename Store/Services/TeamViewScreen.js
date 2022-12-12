const users = [
    {
        id: '1',
        fullname: 'Rawan Bazadough' ,
        email: 'rawan@email.com',
        phonenumber: '0777142139',
        image: 'https://avatars.githubusercontent.com/u/30241710?v=4',
        team: 'Epic Team',
        manager: 'Mahmoud Hamed',
        password:'tttttt',
        location:'3-floor',
        checkInState:true,
    },
    {
        id: '2',
        fullname: 'Tahany Jimzawy' ,
        email: 'tahany@email.com',
        phonenumber: '0777142122',
        image: 'https://www.everypixel.com/i/covers/microstock/photos/flower/yellow/cover.jpg',
        team: 'Epic Team',
        manager: 'Mahmoud Hamed',
        password:'123456',
        location:'2-floor',
        checkInState:true,
    },
    {
        id: '3',
        fullname: 'Haneen Ta3amneh' ,
        email: 'haneen@email.com',
        phonenumber: '0777123122',
        image: 'https://www.labelprint.co.za/wp-content/uploads/2018/11/user-icon-image-placeholder-300-grey.jpg',
        team: 'Epic Team',
        manager: 'Mahmoud Hamed',
        password:'123456kk',
        location:'3-floor',
        checkInState:false,
    },
    {
        id: '4',
        fullname: 'Abed Ta3amneh' ,
        email: 'abed@email.com',
        phonenumber: '0777123122',
        image: 'https://www.labelprint.co.za/wp-content/uploads/2018/11/user-icon-image-placeholder-300-grey.jpg',
        team: 'test Team',
        manager: 'Feras Arabyat',
        password:'5456lkjlk',
        location:'3-floor',
        checkInState:true,
    },
    {
        id: '5',
        fullname: 'Mahmoud' ,
        email: 'moe@email.com',
        phonenumber: '0797123122',
        image: 'https://lusterblue.lk/wp-content/uploads/2019/12/male-placeholder-image.jpeg',
        team: 'Epic Team',
        manager: 'Feras Arabyat',
        password:'123456',
        location:'2-floor',
        checkInState:false,
    },
    {
        id: '6',
        fullname: 'Mahmoud' ,
        email: 'test@email.com',
        phonenumber: '0777123122',
        image: 'https://www.labelprint.co.za/wp-content/uploads/2018/11/user-icon-image-placeholder-300-grey.jpg',
        team: 'test Team',
        manager: 'Feras Arabyat',
        password:'123456',
        location:'3-floor',
        checkInState:false,
    },
]

export const getTeamData = (teamName) => new Promise(( resolve, reject )=>{
    const user = users.filter(user => user.team === teamName)
    setTimeout(() => {
        resolve(user);
        reject(Error);    
    }, 1000); 
}) 


