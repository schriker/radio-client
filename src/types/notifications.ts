export type NotificationsItemPropsType = {
  notifification: string;
  id: string;
  onClose: (id: string) => void;
};

export interface Notification {
  text: string;
  id: string;
}
