'use client';

import { Characters } from '../domain';
import { CharacterDriverImpl } from '../driver';

interface CharacterGateway {
  getCharacters: () => Promise<Characters>;
}

export class CharacterGatewayImpl implements CharacterGateway {
  private characterDriver: CharacterDriverImpl;

  constructor(characterDriver: CharacterDriverImpl) {
    this.characterDriver = characterDriver;
  }

  async getCharacters(): Promise<Characters> {
    const driverCharacters = await this.characterDriver.getCharacters();

    return driverCharacters.characters.map((driverCharacter) => {
      return {
        id: driverCharacter.id,
        name: driverCharacter.name,
        profile: driverCharacter.profile,
      };
    });
  }
}
