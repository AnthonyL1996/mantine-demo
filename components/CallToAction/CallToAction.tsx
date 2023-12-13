import { Container, Title, Button, Group } from '@mantine/core';
import classes from './CallToAction.module.css';
import { IconCalendarClock, IconShoppingBag } from '@tabler/icons-react';

export function CallToAction() {
    return (
        <Container className={classes.wrapper}>
        <Title className={classes.title}>Flavors That Tell a Story – Taste the Rich Heritage of Cantonese Delights</Title>
        <Group justify="center">
            <Button size="lg" leftSection={<IconCalendarClock size={32} />} variant="default">
                Reservation
            </Button>
            <Button size="lg" leftSection={<IconShoppingBag size={32}  />} variant="default">
                Order Now
            </Button>
        </Group>
      </Container>
    );
  }