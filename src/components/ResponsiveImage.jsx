import React from 'react';

export default function ResponsiveImage(props) {
    let image = props.imgFileName;
    return (
      <picture>
        <source srcSet={`${image}-tablet.jpg`} media="(min-width: 768px)"/>
        <source srcSet={`${image}-desktop.jpg`} media="(min-width: 1024px)"/>
        <img src={`${image}-mobile.jpg`} alt="Responsive image" className={props.activeImg ? "image redBorder" : "image"} />
      </picture>
    );
   }