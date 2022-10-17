import {
  ErrorNotification,
  SuccessNotification,
} from './styles/Notification.styles';

export const Notification = ({ status, title, message }) => {
  let SectionTag = SuccessNotification;

  if (status === 'error') {
    SectionTag = ErrorNotification;
  }
  return (
    <SectionTag data-testid='notification'>
      <h2>{title}</h2>
      <p>{message}</p>
    </SectionTag>
  );
};
