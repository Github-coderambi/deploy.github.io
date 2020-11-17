import React from 'react';
import { Feature, OptForm } from '../components';
import { FaqsContainer } from '../containers/faqs';
import { FooterContainer } from '../containers/footer';
import { JumbotronContainer } from '../containers/jumbotron';
import { HeaderContainer } from '../containers/header';
//import { Feature } from '../components/header/styles/header';

export default function Home(){

  return(
    <>
    <HeaderContainer>
      <Feature>
        <Feature.Title>
          Unlimited movies, TV shows and more.
          </Feature.Title>
        <Feature.SubTitle>
          Watch anywhere. Cancel anytime.
        </Feature.SubTitle>

        <OptForm>
    <OptForm.Text>
      Ready to watch? Enter your email to create or restart your membership.
      </OptForm.Text>
      <OptForm.Break />
        <OptForm.Input placeholder="Email address" />
        <OptForm.Button>GET STARTED</OptForm.Button>
      </OptForm>
      </Feature>
    
      </HeaderContainer>
    <JumbotronContainer />
    <FaqsContainer />
    <FooterContainer />
    
    
    </>
  )
}


