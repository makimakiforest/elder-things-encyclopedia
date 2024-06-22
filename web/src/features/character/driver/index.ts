'use client';

import { GetCharacters200 } from '@/types/openapi/schemas';

interface CharacterDriver {
  getCharacters: () => Promise<GetCharacters200>;
}

export class CharacterDriverImpl implements CharacterDriver {
  async getCharacters(): Promise<GetCharacters200> {
    const response = await fetch('/characters');
    return response.json();
  }
}
