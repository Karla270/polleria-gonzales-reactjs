import * as React from 'react';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import PersonIcon from '@mui/icons-material/Person';
import Badge from '@mui/material/Badge';
import { Box, IconButton, Typography } from '@mui/material';
import { NavLink } from 'react-router-dom';

export default function CartWidget(props) {
    return (
        <Box style={{ display: 'flex' }} className="pt-3 mb-sm-2">
            <NavLink to={'/login'} style={{ display: 'block' }}>
                <IconButton sx={{ p: 0 }} >
                    <PersonIcon color="action" fontSize="large" />
                </IconButton>
                <Typography textAlign="center" variant="h6" className="d-none d-lg-block"
                    mx={{
                        fontFamily: 'monospace',
                        fontWeight: 700,
                        color: '#1c5c3d',
                    }}>Bienvenid@</Typography>
            </NavLink>
            {props.counter > 0 ?
                <NavLink to={'/cart'} style={{ display: 'block', marginLeft: '15px' }}>
                    <IconButton sx={{ p: 0 }} >
                        <Badge badgeContent={props.counter} color="success">
                            <ShoppingCartIcon color="action" fontSize="large" />
                        </Badge>
                    </IconButton>
                    <Typography textAlign="center" variant="h6" className="d-none d-lg-block"
                        mx={{
                            fontFamily: 'monospace',
                            fontWeight: 700,
                            color: '#1c5c3d'
                        }}>S/0.00</Typography>
                </NavLink> : ''}

        </Box>
    )
}

