import React from 'react';
import { Card, Container, Image, Icon } from 'semantic-ui-react'
import {capitalizeFirstLetter} from "@app/helpers/stringHelper";
import router from 'next/router';

const PokemonCard = ({img, name, id} ) => {
  const handlerClick = async (id) => {
    await router.push(`/home/pokemon/${id}`);
  }

  return (
    <Card key={id} onClick={() => handlerClick(id)}>
      <Image src={img} wrapped ui={false} />
      <Card.Content textAlign='center'>
        <Card.Header>{capitalizeFirstLetter(name)}</Card.Header>
      </Card.Content>
    </Card>
  )
}

export default PokemonCard;
