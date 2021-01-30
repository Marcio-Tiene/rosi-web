import React from 'react';

import { CgClose } from 'react-icons/cg';
import { CloseSpan, NotificatioBox } from './styles';

interface INotification {
  icon?: React.ReactNode;
  isOpen?: boolean;
  closeOnClick?: () => void;
  msgType: string;
}

const NotificationBanner: React.FC<INotification> = ({
  children,
  msgType,
  icon,
  isOpen,
  closeOnClick,
}) => {
  return (
    <NotificatioBox className={msgType} isOpen={isOpen}>
      {icon}
      <p>{children}</p>
      <CloseSpan onClick={closeOnClick}>
        <CgClose color="#fff" size={20} />
      </CloseSpan>
    </NotificatioBox>
  );
};

export default NotificationBanner;
