'use client';

import { Character } from '../domain';
import { CharacterGatewayImpl } from '../gateway';

interface CharacterUseCase {
  getCharacters: () => Promise<Character[]>;
}

export class CharacterUseCaseImpl implements CharacterUseCase {
  private characterGateway: CharacterGatewayImpl;

  constructor(characterGateway: CharacterGatewayImpl) {
    this.characterGateway = characterGateway;
  }

  async getCharacters(): Promise<Character[]> {
    return this.characterGateway.getCharacters();
  }
}
