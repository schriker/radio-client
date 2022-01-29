import useStore from '../../store/store';
import NotificationsItem from '../NotificationsItem/NotificationsItem';

function Notifications() {
  const notifications = useStore((state) => state.notifications);

  return (
    <div className="fixed sm:right-4 top-5 z-20">
      {notifications.map((item) => (
        <NotificationsItem notifification={item} key={item.id} />
      ))}
    </div>
  );
}

export default Notifications;
