import * as React from 'react';
import { AppbarContainer, AppbarHeader } from "../../styles/appbar";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import {Actions} from "./actions";
import { IconButton } from "@mui/material";
import { useUIContext } from "../../context/UIContext";

interface AppbarProps {
    matches: boolean;
}


export const AppbarMobile = ({ matches}: AppbarProps) => {

    const { setDrawerOpen} = useUIContext();
    return (

        <AppbarContainer>
            <IconButton onClick={()=>{setDrawerOpen(true)}}>
                <MenuIcon />
            </IconButton>
            <AppbarHeader textAlign={"center"} variant="h4">
                Broowser Shop
            </AppbarHeader>
            <IconButton
                onClick={()=>{setDrawerOpen(true)}}
            >
                <SearchIcon />
            </IconButton>
            <Actions matches={matches} />
        </AppbarContainer>
    );
}