import css from './Notification.module.css';

export const Notification = ({ message }) => {
  return (
    <section>
      <p className={css.message}>{message}</p>
    </section>
  );
};