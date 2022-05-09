type NotifyButtonColor =
  | 'inherit'
  | 'primary'
  | 'secondary'
  | 'success'
  | 'error'
  | 'info'
  | 'warning';

interface NotifyButton {
  title: string;
  color: NotifyButtonColor;
}
