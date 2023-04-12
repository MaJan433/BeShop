import {
    AppbarContainer,
    AppbarHeader,
    MyList
} from "../../styles/appbar";
import * as React from 'react';
import {ListItemText} from "@mui/material";
import { HTMLAttributes, MutableRefObject } from 'react';
import {Actions} from "./actions";
import {useContext} from "react";
import {RefContext} from "../../context/RefContext";
import {useUIContext} from "../../context/UIContext";

interface AppbarProps {
    matches: boolean;
}
interface MyDivProps extends HTMLAttributes<HTMLDivElement> {
    myRef?: MutableRefObject<HTMLDivElement | null>;
}


export const AppbarDesktop = ({matches}: AppbarProps) => {


    const {gridRef, setGridRef, contactRef, setContactRef} = useContext(RefContext);
    const {drawerOpen, setDrawerOpen} = useUIContext();


    const scrollToProducts = () => {
        if (gridRef && gridRef.current) {
            gridRef.current.scrollIntoView({ behavior: 'smooth' });
        }
    };

    const scrollToContact = () => {
        if (contactRef && contactRef.current) {
            contactRef.current.scrollIntoView({ behavior: 'smooth' });
        }
    };


            return (
            <AppbarContainer>
                <AppbarHeader>Broowser Shop</AppbarHeader>
                <MyList type={"row"}>
                    <ListItemText primary="Home"/>
                    <ListItemText primary="Categories" onClick={()=>{setDrawerOpen(true)}}/>
                    <ListItemText primary="Products" onClick={scrollToProducts}>
                    </ListItemText>
                    <ListItemText primary="Contact Us" onClick={scrollToContact}>
                    </ListItemText>
                    <Actions matches={matches}/>
                </MyList>
            </AppbarContainer>

    )
}