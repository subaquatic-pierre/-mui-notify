interface NotificationConfig {
  duration?: number | null;
  anchorOrigin?: SnackbarOrigin;
}

interface NotificationState {
  message: string;
  type: AlertColor;
  isOpen?: boolean;
}

interface SetNotificationArgs extends NotificationState {
  config: NotificationConfig | undefined;
}

type SetNotification = ({ message, type, config }: SetNotificationArgs) => void;
type ClearNotification = () => void;

interface NotificationMethods {
  setNotification: SetNotification;
  clearNotification: ClearNotification;
}
