import { useEffect, useState } from 'react';
import {
  useNewNotificationSubscription,
  useSongAddedSubscription,
} from '../../generated/graphql';
import NotificationsItem from '../NotificationsItem/NotificationsItem';
import { v4 as uuidv4 } from 'uuid';
import { Notification } from '../../types/notifications'

function Notifications() {
  const [notifications, setNotifications] = useState<Notification[]>([]);
  const { data: notification } = useNewNotificationSubscription();
  const { data: song } = useSongAddedSubscription();

  useEffect(() => {
    if (notification) {
      setNotifications((prev) => [
        ...prev,
        { id: uuidv4(), text: notification.newNotification.text },
      ]);
    }
  }, [notification]);

  useEffect(() => {
    if (song) {
      setNotifications((prev) => [
        ...prev,
        {
          id: uuidv4(),
          text: `${song.songAdded.user} - "${song.songAdded.author} - ${song.songAdded.title}" `,
        },
      ]);
    }
  }, [song]);

  const onClose = (id: string) => {
    setNotifications((prev) => prev.filter((item) => item.id !== id));
  };

  return (
    <div className="absolute md:fixed top-5 right-4 left-4 md:left-auto z-20">
      {notifications.map((item) => (
        <NotificationsItem
          id={item.id}
          notifification={item.text}
          onClose={onClose}
          key={item.id}
        />
      ))}
    </div>
  );
}

export default Notifications;
