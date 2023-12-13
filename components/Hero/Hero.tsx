import cx from 'clsx';
import { Title, Text, Container, Button, Overlay } from '@mantine/core';
import classes from './Hero.module.css';

export function Hero() {
  return (
    <div className={classes.wrapper}>
       <video autoPlay loop muted className={classes.videoBackground}>
        <source src={"wok_background_md.mp4"} type="video/mp4" />
      </video>
      <Overlay color="#000" opacity={0.70} zIndex={1} />

      <div className={classes.inner}>

      </div>
    </div>
  );
}