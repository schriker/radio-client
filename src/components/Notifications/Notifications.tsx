import useStore from '../../store/store';
import NotificationsItem from '../NotificationsItem/NotificationsItem';

function Notifications() {
  const notifications = useStore((state) => state.notifications);

  return (
    <div className="absolute md:fixed top-5 right-4 left-4 md:left-auto z-20">
      {notifications.map((item) => (
        <NotificationsItem notifification={item} key={item.id} />
      ))}
    </div>
  );
}

export default Notifications;
