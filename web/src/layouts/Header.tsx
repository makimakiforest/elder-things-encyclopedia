'use client';

import { Box, BoxProps, Button, Link, List, ListItem } from '@mui/material';

type HeaderProps = Pick<BoxProps, 'sx'>;

const Header: React.FC<HeaderProps> = ({ sx }) => {
  return (
    <Box
      className="header"
      sx={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '0 1rem',
        backgroundColor: 'white',
        boxShadow: '0 2px 10px rgba(0, 0, 0, 0.2)',
        ...sx,
      }}
    >
      <Link
        className="header-title"
        href="/"
        sx={{
          textDecoration: 'none',
          color: 'black',
          fontWeight: 'bold',
          '&:hover': {
            color: '#1976d2',
          },
        }}
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
