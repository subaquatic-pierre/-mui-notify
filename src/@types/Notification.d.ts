interface NotificationConfig {}

interface NotificationState {
  message: string;
  type: AlertColor;
  isOpen?: boolean;
}

type SetNotification = ({ message, type, isOpen }: NotificationState) => void;
type ClearNotification = () => void;

interface NotificationMethods {
  setNotification: SetNotification;
  clearNotification: ClearNotification;
}
