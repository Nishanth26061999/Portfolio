import React, { useState } from 'react';
import Style from './Navbar.module.scss';
import Toggler from "./home/Toggler";
import { useLocation } from "react-router-dom";
import { HashLink as Link } from 'react-router-hash-link';
import { Box } from "@mui/material";
import { info } from "../info/Info";
import { singlePage } from '../info/Info';


const links = [
    {
        name: 'Home',
        to: 'Portfolio/',
        active: 'Portfolio/home'
    },
    {
        name: 'About Me',
        to: 'Portfolio/about',
        active: 'Portfolio/about'
    },
    {
        name: info.initials,
        type: 'initials',
        to: 'Portfolio/home',
        active: 'Portfolio/home'
    },
    {
        name: 'Resume',
        to: '',
        active: ''
    }
]

// This function is used to create a scroll offset to compensate for the navbar
// when you click on the nav buttons to scroll down.
const scrollWidthOffset = (el) => {
    const yCoordinate = el.getBoundingClientRect().top + window.pageYOffset;
    const yOffset = -80;
    window.scrollTo({ top: yCoordinate + yOffset, behavior: 'smooth' });
}

const downloadFile = () => {
    // Assuming your file is named 'example.txt' and located in the public folder
    const filePath = '/nishanth_Resume.pdf';

    // Create a link element
    const link = document.createElement('a');
    link.href = process.env.PUBLIC_URL + filePath;
    link.download = 'nishanth_Resume.pdf'; // The name you want to give to the downloaded file
    document.body.appendChild(link);

    // Trigger the download
    link.click();

    // Cleanup
    document.body.removeChild(link);
}


export default function Navbar({ darkMode, handleClick, active, setActive }) {

    return (
        <Box component={'nav'} width={'100%'} position={singlePage ? 'fixed' : 'relative'} className={darkMode ? Style.dark : Style.light}>
            <Box component={'ul'} display={'flex'} justifyContent={'center'} alignItems={'center'}
                gap={{ xs: '2rem', md: '8rem' }}
                fontSize={'1rem'}>
                {links.map((link, index) => (
                    <Box key={index} component={'li'} className={(link.active === active && !link.type) && Style.active}
                        sx={{ borderImageSource: info.gradient }}>
                        <Link to={link.name != 'Resume' && `/${link.to}`}
                            scroll={el => scrollWidthOffset(el)}
                            smooth
                            onClick={() => {
                                link.name == 'Resume' && downloadFile()
                                setActive(link.active)
                            }} className={Style.link}>
                            {!link.type && <p style={{ padding: '0.5rem 0' }}>{link.name}</p>}
                            {link.type && <h1>{link.name}</h1>}
                        </Link>
                    </Box>
                ))}
                <li>
                    <Toggler darkMode={darkMode} handleClick={handleClick} />
                </li>
            </Box>
        </Box>
    )
}