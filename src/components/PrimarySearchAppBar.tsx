import AccountCircle from '@mui/icons-material/AccountCircle';
import Close from '@mui/icons-material/Close';
import MenuIcon from '@mui/icons-material/Menu';
import MoreIcon from '@mui/icons-material/MoreVert';
import NotificationsIcon from '@mui/icons-material/Notifications';
import SearchIcon from '@mui/icons-material/Search';
import VideoCall from '@mui/icons-material/VideoCall';
import { alpha, colors, styled } from '@mui/material';
import AppBar from '@mui/material/AppBar';
import Badge from '@mui/material/Badge';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import InputBase from '@mui/material/InputBase';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Toolbar from '@mui/material/Toolbar';
import * as React from 'react';
import YTLogo from './YTLogo';

const Search = styled('div')(({ theme }) => ({
  'position': 'relative',
  'display': 'flex',
  'borderRadius': 40,
  'border': `1px solid ${colors.grey[400]}`,
  'backgroundColor': alpha(theme.palette.common.white, 0.15),
  'marginRight': theme.spacing(2),
  'marginLeft': 0,
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(3),
    width: 'auto',
  },
  '&:before': {
    display: 'block',
    width: '50%',
    height: '100%',
    backgroundColor: colors.blue[400],
  },
}));

const SearchInputBox = styled('div')(() => ({
  display: 'flex',
  flexDirection: 'row',
  borderRadius: '40px 0 0 40px',
}));

const SearchIconWrapper = styled(IconButton)(({ theme }) => ({
  padding: theme.spacing(0, 2),
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  borderRadius: '0 40px 40px 0',
  backgroundColor: colors.grey[200],
  borderLeft: `1px solid ${colors.grey[400]}`,
}));

const CloseInputWrapper = styled('div')(({ theme }) => ({
  position: 'absolute',
  right: theme.spacing(8),
  top: 0,
  bottom: 0,
  display: 'flex',
  alignItems: 'center',
  cursor: 'pointer',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  'color': 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 2),
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '55ch',
    },
  },
}));

export default function PrimarySearchAppBar() {
  const [focusInput, setFocusInput] = React.useState(false);
  const [searchInput, setSearchInput] = React.useState('');
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] =
    React.useState<null | HTMLElement>(null);

  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const handleProfileMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };

  const handleMobileMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const menuId = 'primary-search-account-menu';
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      id={menuId}
      keepMounted
      transformOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
      <MenuItem onClick={handleMenuClose}>My account</MenuItem>
    </Menu>
  );

  const mobileMenuId = 'primary-search-account-menu-mobile';
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      <MenuItem>
        <IconButton size='large' aria-label='show 4 new mails' color='inherit'>
          <VideoCall />
        </IconButton>
        <p>Create</p>
      </MenuItem>
      <MenuItem>
        <IconButton
          size='large'
          aria-label='show 17 new notifications'
          color='inherit'
        >
          <Badge badgeContent={17} color='error'>
            <NotificationsIcon />
          </Badge>
        </IconButton>
        <p>Notifications</p>
      </MenuItem>
      <MenuItem onClick={handleProfileMenuOpen}>
        <IconButton
          size='large'
          aria-label='account of current user'
          aria-controls='primary-search-account-menu'
          aria-haspopup='true'
          color='inherit'
        >
          <AccountCircle />
        </IconButton>
        <p>Profile</p>
      </MenuItem>
    </Menu>
  );

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar elevation={0} position='static'>
        <Toolbar
          sx={{
            minHeight: { sm: 56 },
          }}
        >
          <IconButton
            size='large'
            edge='start'
            color='inherit'
            aria-label='open drawer'
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <YTLogo
            viewBox='90 20'
            sx={{
              width: 90,
              height: 20,
            }}
          />
          <Box sx={{ flexGrow: 1 }} />
          <Search>
            <SearchInputBox
              sx={{
                border: `1px solid ${
                  focusInput ? colors.blue[800] : colors.common.white
                }`,
              }}
            >
              <StyledInputBase
                value={searchInput}
                onFocus={() => {
                  setFocusInput(true);
                }}
                onBlur={() => {
                  setFocusInput(false);
                }}
                onChange={(e) => {
                  setSearchInput(e.target.value);
                }}
                placeholder='Search'
                inputProps={{ 'aria-label': 'search' }}
              />
              {searchInput && (
                <CloseInputWrapper
                  onClick={() => {
                    setSearchInput('');
                  }}
                >
                  <Close
                    sx={{
                      color: `${colors.grey[600]}`,
                    }}
                  />
                </CloseInputWrapper>
              )}
            </SearchInputBox>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
          </Search>
          <Box sx={{ flexGrow: 1 }} />
          <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
            <IconButton
              size='large'
              aria-label='show 4 new mails'
              color='inherit'
            >
              <Badge color='error'>
                <VideoCall />
              </Badge>
            </IconButton>
            <IconButton
              size='large'
              aria-label='show 17 new notifications'
              color='inherit'
            >
              <Badge badgeContent={17} color='error'>
                <NotificationsIcon />
              </Badge>
            </IconButton>
            <IconButton
              size='large'
              edge='end'
              aria-label='account of current user'
              aria-controls={menuId}
              aria-haspopup='true'
              onClick={handleProfileMenuOpen}
              color='inherit'
            >
              <AccountCircle />
            </IconButton>
          </Box>
          <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size='large'
              aria-label='show more'
              aria-controls={mobileMenuId}
              aria-haspopup='true'
              onClick={handleMobileMenuOpen}
              color='inherit'
            >
              <MoreIcon />
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>
      {renderMobileMenu}
      {renderMenu}
    </Box>
  );
}
