import { GetStaticProps } from 'next';
import React, { useState, useCallback } from 'react';
import { Button, Htag, Input, P, Rating, Tag, Textarea } from '../components';
import { withLayout } from '../layout/Layout';
import axios from 'axios';
import { MenuItem } from '../interfaces/menu.interface';
import { API } from '../helpers/api';

function Home({ menu, firstCategory }: HomeProps): React.ReactElement {
  const [rating, setRating] = useState<number>(4);

  // Пример useCallback с правильной зависимостью
  const handleRatingChange = useCallback(
    (newRating: number) => {
      setRating(newRating);
    },
    []
  );

  return (
    <>
      <Htag tag='h1'>Заголовок</Htag>

      {/* Кнопки */}
      <Button appearance='primary' arrow='right'>Кнопка</Button>
      <Button appearance='ghost' arrow='down'>Кнопка</Button>

      {/* Параграфы */}
      <P size='l'>Большой</P>
      <P>Средний</P>
      <P size='s'>Маленький</P>

      {/* Теги */}
      <Tag size='s'>Ghost</Tag>
      <Tag size='m' color='red'>Red</Tag>
      <Tag size='s' color='green'>Green</Tag>
      <Tag color='primary'>Green</Tag>

      {/* Рейтинг */}
      <Rating rating={rating} isEditable setRating={handleRatingChange} />

      {/* Инпуты */}
      <Input placeholder='тест' />
      <Textarea placeholder='тест area' />

      {/* Используем menu */}
      <h2>Меню с API</h2>
      <ul>
        {menu.map(item => (
          <li key={item._id}>{item.title}</li>
        ))}
      </ul>

      <p>Категория: {firstCategory}</p>
    </>
  );
}

export default withLayout(Home);

export const getStaticProps: GetStaticProps<HomeProps> = async () => {
  const firstCategory = 0;
  const { data: menu } = await axios.post<MenuItem[]>(API.topPage.find, { firstCategory });

  return {
    props: {
      menu,
      firstCategory
    }
  };
};

interface HomeProps {
  menu: MenuItem[];
  firstCategory: number;
}