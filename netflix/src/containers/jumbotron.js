import React from 'react';
import jumboData from '../fixtures/jumbo.json';
import { Jumbotron } from '../components';


export function JumbotronContainer() {
  return (
    <Jumbotron.Container>
      {jumboData.map((Item)=>(
        <Jumbotron key={Item.id} direction={Item.direction}>
          <Jumbotron.Pane>
            <Jumbotron.Title>{Item.title}</Jumbotron.Title>
            <Jumbotron.SubTitle>{Item.subTitle}</Jumbotron.SubTitle>
          </Jumbotron.Pane>
      <Jumbotron.Image src={Item.image} alt={Item.alt}/>

        </Jumbotron>
      ))}
    </Jumbotron.Container>
  );
}      
