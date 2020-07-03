import React from 'react';
import BackToTop from 'react-easy-back-to-top';

export default function ToTop() {
  return (
    <BackToTop
      backgroundColor="#000000"
      position={{ right: '0%', bottom: '0%' }}
      hover={{
        backgroundColor: '#000000',
        color: 'white',
        opacity: '0.8',
        WebkitBoxShadow: 'inset 0px 0px 0px 5px #fff',
        MozBoxShadow: 'inset 0px 0px 0px 5px #fff',
        BoxShadow: 'inset 0px 0px 0px 5px #fff',
      }}
      transition="all 0.5s"
      showOnDistance={200}
      borderRadius={40}
      scrollBehavior="smooth"
      padding={16}
      opacity="0.4"
      color="white"
      fontSize="20px"
      icon="fa fa-arrow-up"
    />
  );
}
