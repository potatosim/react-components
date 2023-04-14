import { FC, PropsWithChildren } from 'react';
import { createPortal } from 'react-dom';

interface PortalProps extends PropsWithChildren {
  condition: boolean;
}

const Portal: FC<PortalProps> = ({ children, condition }) => {
  if (!condition) {
    return null;
  }

  return createPortal(children, document.body);
};

export default Portal;
