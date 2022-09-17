import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import Logo from '../assets/logo.png';
import CartWidget from './CartWidget';
import { NavLink } from 'react-router-dom';
import { useCart } from '../context/CartContext';

const pages = [{ menu: 'Promociones', url: '/categoria/promociones' }, { menu: 'Carta', url: '/categoria/carta' },
    //{'Locales'}, {'Contáctanos'}
]

export default function NavBar() {
    const [anchorElNav, setAnchorElNav] = React.useState(null)
    const { count } = useCart()

    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget)
    }

    const handleCloseNavMenu = () => {
        setAnchorElNav(null)
    }

    return (
        <AppBar position="static">
            <Container maxWidth="xl">
                <Toolbar disableGutters>
                    <Avatar sx={{ display: { xs: 'none', md: 'flex' }, mr: 1, width: 56, height: 56 }} src={Logo} alt="Logo" />
                    <NavLink to='/'>
                        <Typography
                            variant="h5"
                            noWrap
                            sx={{
                                mr: 2,
                                display: { xs: 'none', md: 'flex' },
                                fontFamily: 'monospace',
                                fontWeight: 700,
                                letterSpacing: '.3rem',
                                color: 'inherit',
                                textDecoration: 'none',
                            }}
                        >
                            POLLERIA D'MARYS
                        </Typography>
                    </NavLink>
                    <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
                        <IconButton
                            size="large"
                            aria-label="account of current user"
                            aria-controls="menu-appbar"
                            aria-haspopup="true"
                            onClick={handleOpenNavMenu}
                            color="inherit"
                        >
                            <MenuIcon />
                        </IconButton>
                        <Menu
                            id="menu-appbar"
                            anchorEl={anchorElNav}
                            anchorOrigin={{
                                vertical: 'bottom',
                                horizontal: 'left',
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'left',
                            }}
                            open={Boolean(anchorElNav)}
                            onClose={handleCloseNavMenu}
                            sx={{
                                display: { xs: 'block', md: 'none' },
                            }}
                        >
                            {pages.map((page) => (
                                <MenuItem key={page.menu} onClick={handleCloseNavMenu}>
                                    <NavLink to={page.url}>
                                        <Typography textAlign="center"
                                            sx={{
                                                color: 'black',
                                            }}>{page.menu}</Typography>
                                    </NavLink>
                                </MenuItem>
                            ))}
                        </Menu>
                    </Box>
                    <Avatar sx={{ display: { xs: 'flex', md: 'none' }, mr: 1, width: 50, height: 50 }}
                        style={{ position: "absolute", left: '20%' }}
                        src={Logo} alt="Logo" />
                    <NavLink to='/' style={{ position: "absolute", left: '40%' }}>
                        <Typography
                            variant="h5"
                            noWrap
                            sx={{
                                mr: 2,
                                display: { xs: 'flex', md: 'none' },
                                flexGrow: 1,
                                fontFamily: 'monospace',
                                fontWeight: 700,
                                letterSpacing: '.3rem',
                                color: 'inherit',
                                textDecoration: 'none',
                            }}
                        >
                            D'MARYS
                        </Typography>
                    </NavLink>
                    <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' }, marginLeft: '15%' }}>
                        {pages.map((page) => (
                            <Button
                                key={page.menu}
                                // onClick={handleCloseNavMenu}
                                sx={{ my: 2, color: 'white', display: 'block' }}

                            >
                                <NavLink to={page.url} activeclassname="active">
                                    <Typography textAlign="center" to={page.url} variant="h6"
                                        sx={{
                                            fontFamily: 'monospace',
                                            fontWeight: 700,
                                        }}>{page.menu}</Typography>
                                </NavLink>
                            </Button>
                        ))}
                    </Box>
                    {count > 0 ? <CartWidget counter={count} /> : ''}

                </Toolbar>
            </Container>
        </AppBar>
    );
};

