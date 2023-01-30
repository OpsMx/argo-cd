import * as React from 'react';
import { useState } from 'react';
require('./popup.css');

 
const PopupModal = (props: {
  isOpen: boolean; 
  content: string | number | boolean | {} | React.ReactElement<any, string | React.JSXElementConstructor<any>> | React.ReactNodeArray | React.ReactPortal; 
  header: string;
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const handleClose =()=> setIsOpen(false);

  React.useEffect(() => {
    setIsOpen(props.isOpen)
  }, [props.isOpen])
  
  return (
    isOpen && (<div className="popup-box">
      <div className='alignBox'>
        <div className='header'>
          {props.header}
        </div>
        <div className="content-box">
          {/* <span className="close-icon" onClick={handleClose}>x</span> */}
          {props.content}
        </div>
      </div>
    </div>)
  );
};
 
export default PopupModal;