import React, { useState } from 'react'
import {AppBar, Tabs, Tab, Toolbar, Typography} from '@mui/material';
import LibraryBooksIcon from '@mui/icons-material/LibraryBooks';
import {NavLink} from 'react-router-dom';

export const Header = () => {
    const [value, setvalue] = useState();
  return (
    <div>
        <AppBar sx = {{backgroundColor: "#232F3D"}} position = "sticky">
            <Toolbar>

            <Typography>
                <LibraryBooksIcon/>
            </Typography>
            <Tabs sx={{marginLeft: "auto"}} textColor='inherit' indicatorColor='primary' value={value} onChange={(e,val)=>setvalue(val)}>
                <Tab LinkComponent={NavLink} to= "/add" label = 'Add Product'/>
                <Tab LinkComponent={NavLink} to= "/books" label = 'Books'/>
                <Tab LinkComponent={NavLink} to= "/about"  label = 'About Us'/>
            </Tabs>

            </Toolbar>

        </AppBar>
    </div>
  )
}
