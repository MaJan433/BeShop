import * as React from 'react';
import {useMediaQuery, useTheme, Theme} from "@mui/material";
import {AppbarMobile} from "./appbarMobile";
import {AppbarDesktop} from "./appbarDesktop";

interface Matches {
    matches: boolean;
}

export const Appbar = () => {
    const theme = useTheme()
    const matches = useMediaQuery(theme.breakpoints.down('md'))
    return (
        <>
            {matches ? <AppbarMobile matches={matches}/>: <AppbarDesktop matches={matches}/>}
        </>
    )
}