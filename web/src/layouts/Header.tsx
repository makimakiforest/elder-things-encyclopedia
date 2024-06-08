'use client';

import { MouseEventHandler } from 'react';
import { Box, Button, Link, List, ListItem } from '@mui/material';

const Header: React.FC = () => {
  const handleClick: MouseEventHandler<HTMLButtonElement> = () => {
    console.log('unko');
  };

  return (
    <Box
      className="header"
      sx={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '0 1rem',
        backgroundColor: 'white',
        boxShadow: '0 0 5px rgba(0, 0, 0, 0.1)',
      }}
    >
      <Link
        className="header-title"
        href="/"
      >
        elder-things-encyclopedia
      </Link>
      <List
        sx={{
          display: 'flex',
        }}
      >
        <ListItem>
          <Button
            sx={{
              minWidth: '200px',
            }}
            onClick={handleClick}
          >
            JSONアップロード
          </Button>
        </ListItem>
        <ListItem>お問い合わせ</ListItem>
      </List>
    </Box>
  );
};

export default Header;
