'use client';

import { useEffect, useState } from 'react';
import { Characters } from '../domain';
import { CharacterDriverImpl } from '../driver';
import { CharacterGatewayImpl } from '../gateway';
import { CharacterUseCaseImpl } from '../useCase';

export const useCharacters = () => {
  const [data, setData] = useState<Characters>([]);

  useEffect(() => {
    const characterDriver = new CharacterDriverImpl();
    const characterGateway = new CharacterGatewayImpl(characterDriver);
    const characterUseCase = new CharacterUseCaseImpl(characterGateway);

    characterUseCase.getCharacters().then((characters) => {
      setData(characters);
    });
  }, []);

  return {
    characters: data,
  };
};
