import { AppBar, MenuItem, Toolbar, styled } from "@mui/material"



const NavBar = () => {

    const StyledToolBar = styled(Toolbar)(() => ({
        display: "flex",
        justifyContent: "space-evenly",
    }));

    return (
      <>

            <AppBar position="absolute">
            <StyledToolBar>
                <MenuItem>About</MenuItem>
                <MenuItem>Skills</MenuItem>
                <MenuItem>Projects</MenuItem>
            </StyledToolBar>

            </AppBar>
      </>
    )
  }
  
  export default NavBar
  