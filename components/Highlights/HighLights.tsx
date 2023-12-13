'use client'
import { Carousel } from '@mantine/carousel';
import { useMediaQuery } from '@mantine/hooks';
import { SimpleGrid, Card, Image, Text, Container, AspectRatio, useMantineTheme, rem, Center, Group } from '@mantine/core';
import classes from './HighLights.module.css';
import { Product, featuredProducts } from '@/app/data';
import { IconEye, IconMessageCircle } from '@tabler/icons-react';

function ProductCard({ id, price, title, type, desc, img, options }: Product) {
  const theme = useMantineTheme();

  return (
    <Card
    key={id}
    p="lg"
    shadow="lg"
    className={classes.card}
    radius="md"
    component="a"
    href="https://mantine.dev/"
    target="_blank"
  >
    <div
      className={classes.image}
      style={{ backgroundImage: `url(${img})` }}
    />
    <div className={classes.overlay} />

    <div className={classes.content}>
      <div>
        <Text size="lg" className={classes.title} fw={500}>
          {title}
        </Text>

        <Group justify="space-between" gap="xs">
          <Text size="sm" className={classes.author}>
            {type}
          </Text>
        </Group>
      </div>
    </div>
  </Card>
  );
}

const data = featuredProducts

export function CardsCarousel() {
  const theme = useMantineTheme();
  const mobile = useMediaQuery(`(max-width: ${theme.breakpoints.sm})`);
  const slides = data.map((item) => (
    <Carousel.Slide key={item.title}>
      <ProductCard {...item} />
    </Carousel.Slide>
  ));

  return (

    <Carousel
      slideSize={{ base: '100%', sm: '50%' }}
      slideGap={{ base: rem(1), sm: 'xl' }}
      align="start"
      slidesToScroll={mobile ? 2 : 1}
    >
      {slides}
    </Carousel>
  );
}