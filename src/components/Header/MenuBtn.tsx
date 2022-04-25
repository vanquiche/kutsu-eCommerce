import React from 'react';
import { GrFormClose } from 'react-icons/gr';
import { GiHamburgerMenu } from 'react-icons/gi';

const styles = {
  padding: 0,
  backgroundColor: 'transparent',
  border: 'none',
  cursor: 'pointer'
}

const MenuBtn = (props: { onClick: () => void; state: boolean }) => {
  return (
    <button onClick={props.onClick} style={styles}>
      {props.state ? (
        <GrFormClose size='1.5em' className='menu-icon'/>
      ) : (
        <GiHamburgerMenu size='1.2em' className='menu-icon'/>
      )}
    </button>
  );
};

export default MenuBtn;
