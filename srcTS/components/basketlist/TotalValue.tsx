
import {Typography} from "@mui/material";
import {useCookies} from "react-cookie";
import React from "react";

type basketArr = {
    amount: number,
    price: number,
    picture: string
}



export const TotalValue = () => {

    const [cookies, setCookies] = useCookies(['basketCookie'])

    const basketObject: basketArr[] = Object.values(cookies.basketCookie)
    console.log({basketObject}, 'to ten jest obiekt')
    let totalValue = Number(0)
    basketObject.forEach(row => {
        const amount = Number(row.amount)
        const price = Number(row.price)
        const total = (amount * price).toFixed(2)
        totalValue += Number(total)
    })


    return (

            <Typography
            align={"right"}
            sx={{
                fontSize: '25px'
            }}
            >
            Total value: {totalValue.toFixed(2)} $
            </Typography>

    );
}