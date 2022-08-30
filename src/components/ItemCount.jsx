import React, { useEffect, useState } from 'react'
import { Box, Button, ButtonGroup } from '@mui/material';
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";;


export default function ItemCount({ item, initial }) {
    const [contador, setContador] = useState(initial);
    //montaje naciemiento
    useEffect(() => {
        console.log('se monto el componente');
    }, []);

    //cambios cualquiera
    useEffect(() => {
        //console.log('siempre que hay un render no me importa quien lo causo');
        if (contador + 1 > item.stock) {
            alert('Stock máximo: ' + item.stock);
        }
    });

    useEffect(() => {
        console.log('siempre que cambie el contador 1');
    }, [contador]);

    //muere o desmonta el componente
    useEffect(() => {
        return () => {
            console.log('muere el componente');
        };
    }, []);

    const addCarrito = () => {
        if (contador > 0) {
            alert(`Se agregó (${contador}) ${item.nombre} -> S/${(contador * item.precio).toFixed(2)}`);
            // alert('Se agregó (' + contador + ') ' + item.nombre + '->');
            setContador(initial);
        }
        else {
            alert('Debe añadir unidades');
        }
    };

    return (
        <Box className='mt-3'>
            <ButtonGroup>
                <ButtonGroup>
                    <Button
                        onClick={() => {
                            setContador(Math.max(contador - 1, 0));
                        }}
                    >
                        <RemoveIcon fontSize="small" />
                    </Button>
                </ButtonGroup>

                <Box className='mx-3'>
                    <span>{contador}</span>
                </Box>
                <ButtonGroup>

                    <Button disabled={contador === item.stock}
                        onClick={() => {
                            setContador(contador + 1);
                        }}
                    >
                        <AddIcon fontSize="small" />
                    </Button>
                </ButtonGroup>
            </ButtonGroup>
            <br></br>
            <Button variant="outlined" className='mt-2' onClick={addCarrito}>Agregar al carrito</Button>
        </Box>
    )
}