'use client';

import CharacterCard from '@/features/character/components/CharacterCard';
import { useCharacters } from '@/features/character/hooks/useCharacters';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';

const TopPage: React.FC = () => {
  const { characters } = useCharacters();

  return (
    <main className="character-page">
      <Box sx={{ display: 'flex', justifyContent: 'center', padding: '8rem 0 0 0' }}>
        <Grid
          container
          spacing={5}
          justifyContent="center"
          maxWidth={700}
        >
          {characters.map((_, i) => (
            <Grid
              item
              xs={12}
              sm={6}
              md={4}
              key={i}
            >
              <CharacterCard />
            </Grid>
          ))}
        </Grid>
      </Box>
    </main>
  );
};

export default TopPage;
