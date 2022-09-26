import React from 'react'
import { Box, Button, ButtonGroup } from '@mui/material';
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";;


export default function ItemCount({ initial, stock, onAdd, count, setCount }) {
    const restar = () => {
        if (count > initial) {
            setCount(count - 1)
        }
    }

    const sumar = () => {
        if (count < stock) {
            setCount(count + 1)
        }
    }

    return (
        <>
            {stock > 0 ? <Box className='mt-3'>
                < ButtonGroup >
                    <ButtonGroup>
                        <Button
                            color="success"
                            onClick={restar}
                        >
                            <RemoveIcon fontSize="small" />
                        </Button>
                    </ButtonGroup>

                    <Box className='mx-3'>
                        <span>{count}</span>
                    </Box>
                    <ButtonGroup>

                        <Button disabled={count === stock}
                            color="success"
                            onClick={sumar}
                        >
                            <AddIcon fontSize="small" />
                        </Button>
                    </ButtonGroup>
                </ButtonGroup >
                <br></br>
                <Button variant="contained" color="success" className='mt-2' onClick={onAdd}>Comprar</Button>
            </Box > : ''
            }
        </>


    )
}