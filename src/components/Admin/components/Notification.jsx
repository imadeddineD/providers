import React, { useEffect, useRef, useState } from 'react';
import { IoMdNotificationsOutline } from "react-icons/io";
import { format } from "date-fns"; // Update this import to use `date-fns` instead of `path`

const Notifications = () => {
    const [open, setOpen] = useState(false);
    const [notifications, setNotifications] = useState(
        [
            {
                title : "Notif 1" , 
                message : "Notif from Imad" , 
                createdAt : "08/08/2024" , 
                id : "1"
            },
            {
                title : "Notif 2" , 
                message : "Notif from Abuterki" , 
                createdAt : "08/12/2024" , 
                id : "2"
            },
        ]
    );
    const notificationSound = useRef(null);
    const [prevNotificationCount, setPrevNotificationCount] = useState(0);

    const handleNotificationIconClick = () => {
        setOpen(!open);
    };

    const fetchNotifications = async () => {
        // try {
        //     const response = await axios.get('/api/notification');
        //     const unreadNotifications = response.data.filter((notification: any) => notification.status === 'unread');
        //     setNotifications(unreadNotifications);
        // } catch (error) {
        //     console.error("Failed to fetch notifications", error);
        // }
    };

    const markAsRead = async (notificationId) => {
        // try {
        //     await axios.patch(`/api/notification/${notificationId}`);
        //     setNotifications(prevNotifications =>
        //         prevNotifications.map(notification =>
        //             notification.id === notificationId ? { ...notification, status: 'read' } : notification
        //         ).filter(notification => notification.status === 'unread')
        //     );
        // } catch (error) {
        //     console.error("Failed to update notification status", error);
        // }
    };

    useEffect(() => {
        // fetchNotifications();
        // const interval = setInterval(fetchNotifications, 10000); // Poll every 10 seconds
        // return () => clearInterval(interval);
    }, []);

    useEffect(() => {
        // if (notificationSound.current && notifications.length > prevNotificationCount) {
        //     notificationSound.current.play();
        // }
        // setPrevNotificationCount(notifications.length);
    },
     [
        // notifications
    ]);

    return (
        <div>
            <div className="relative cursor-pointer m-2" onClick={handleNotificationIconClick}>
                <span className="text-2xl cursor-pointer dark:text-white text-black">
                    <IoMdNotificationsOutline />
                </span>
                <span className="absolute -top-2 -right-2 bg-[#2d9bff] rounded-full w-[20px] h-[20px] text-[12px] flex items-center justify-center text-white">
                    {notifications && notifications.length}
                </span>
            </div>
            {open && (
                <div className="w-[350px] h-[60vh] overflow-y-scroll py-3 px-2 border border-[#ffffff0c] dark:bg-[#111C43] bg-white shadow-xl absolute top-16 z-[1000000000] rounded">
                    <h5 className="text-center text-[20px] font-Poppins text-black dark:text-white p-3">
                    Notifications
                    </h5>
                    {notifications && notifications.map((item, index) => (
                        <div
                            className="dark:bg-[#2d3a4e] bg-[#00000013] font-Poppins border-b dark:border-b-[#ffffff47] border-b-[#0000000f]"
                            key={index}
                        >
                            <div className="w-full flex items-center justify-between p-2">
                                <p className="text-black dark:text-white">{item.title}</p>
                                <p
                                    className="text-black dark:text-white cursor-pointer"
                                    onClick={() => markAsRead(item.id)}
                                >
                                    Readed
                                </p>
                            </div>
                            <p className="px-2 text-black dark:text-white">
                                {item.message}
                            </p>
                            <p className="p-2 text-black dark:text-white text-[14px]">
                                {format(new Date(item.createdAt), 'PPpp')}
                            </p>
                        </div>
                    ))}
                </div>
            )}
            {/* <audio ref={notificationSound} src="/notif.wav" preload="auto" /> */}
        </div>
    );
};

export default Notifications;
