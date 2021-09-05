import {
  IonItem,
  IonLabel,
  IonNote,
  IonItemSliding,
  IonItemOptions,
  IonItemOption,
  } from '@ionic/react';
import { Message } from '../data/messages';
import './MessageListItem.css';

interface MessageListItemProps {
  message: Message;
}

const MessageListItem: React.FC<MessageListItemProps> = ({ message }) => {
  return (
<IonItemSliding>
  <IonItemOptions side="end">
    <IonItemOption
      color="danger"
      expandable
      const removeItem = (message: Message) => {
  console.log(message)
}
    >
      Delete
    </IonItemOption>
  </IonItemOptions>
  <IonItem detail={false}>
    <div slot="start" className="dot dot-unread"></div>
    <IonLabel className="ion-text-wrap">
      <h2>
        {message.fromName}
        <span className="date">
          <IonNote>{message.date}</IonNote>
        </span>
      </h2>
      <h3>{message.subject}</h3>
    </IonLabel>
  </IonItem>
</IonItemSliding>
  );
};

export default MessageListItem;
