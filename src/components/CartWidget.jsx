import * as React from 'react';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import ProductionQuantityLimitsIcon from '@mui/icons-material/ProductionQuantityLimits';
import PersonIcon from '@mui/icons-material/Person';
import LogoutIcon from '@mui/icons-material/Logout';
import Badge from '@mui/material/Badge';
import { Box, IconButton, ListItemButton, ListItemIcon, ListItemText, Menu, MenuItem, Tooltip } from '@mui/material';

const settings = [
    { icon: <ProductionQuantityLimitsIcon />, label: 'Ver Carrito' },
    { icon: <PersonIcon />, label: 'Perfil' },
    { icon: <LogoutIcon />, label: 'Salir' },
];

export default function CartWidget(props) {
    const [anchorElUser, setAnchorElUser] = React.useState(null)

    const handleOpenUserMenu = (event) => {
        setAnchorElUser(event.currentTarget)
    };

    const handleCloseUserMenu = () => {
        setAnchorElUser(null)
    };

    return (
        <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Ver opciones">
                <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                    <Badge badgeContent={props.counter} color="success">
                        <ShoppingCartIcon color="action" fontSize="large" />
                    </Badge>
                </IconButton>
            </Tooltip>
            <Menu
                sx={{ mt: '45px' }}
                id="menu-appbar"
                anchorEl={anchorElUser}
                anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                }}
                keepMounted
                transformOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                }}
                open={Boolean(anchorElUser)}
                onClose={handleCloseUserMenu}
            >
                {settings.map((setting) => (
                    <MenuItem key={setting.label} onClick={handleCloseUserMenu}>
                        <ListItemButton
                            sx={{ py: 0, minHeight: 32 }}
                        >
                            <ListItemIcon sx={{ color: 'inherit' }}>
                                {setting.icon}
                            </ListItemIcon>
                            <ListItemText
                                primary={setting.label}
                                primaryTypographyProps={{ fontSize: 14, fontWeight: 'medium' }}
                            />
                        </ListItemButton>
                    </MenuItem>
                ))}
            </Menu>
        </Box>
    )
}

