import { Container, Title, Button, Group, Text } from '@mantine/core';
import classes from './CallToAction.module.css';
import { IconCalendarClock, IconShoppingBag } from '@tabler/icons-react';

export function CallToAction() {
    return (
        <Container className={classes.wrapper}>
        <Title className={classes.title}>Taste the Rich Heritage of Cantonese Delights</Title>
        <Text className={classes.description}>Delight in our curated selection of Cantonese favorites, where classic recipes meet contemporary tastes. Indulge in our signature dishes, each offering a unique fusion of rich heritage and modern culinary artistry.</Text>
        <Group justify="center">
            <Button variant="filled" color="black" size="xl" radius="xl" leftSection={<IconCalendarClock size={32} />}>
                Dine-in
            </Button>
            <Button variant="white" color="black" size="xl" radius="xl" leftSection={<IconShoppingBag size={32}  />}>
                Take-out
            </Button>
        </Group>
      </Container>
    );
  }