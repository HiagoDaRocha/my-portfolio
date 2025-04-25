import { Box, Container, Grid, styled, Typography } from "@mui/material";
import Avatar from "../../../../assets/images/avatar.jpg";
import DownloadIcon from '@mui/icons-material/Download';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import StyledButton from "../../../../components/StyledButton/StyledButton";
import theme from "../../../../theme";
import { AnimatedBackground } from "../../../../components/AnimatedBackground/AnimatedBackground";
import CV from "../../../../assets/pdf/Curriculo-HiagoFerreiradaRocha.pdf"
import Typewriter from "../../../../components/Typewriter/Typewriter";

const Hero = () => {
    const StyledHero = styled("div")(({ theme }) => ({
        backgroundColor: theme.palette.primary.main,
        width: "100%",
        [theme.breakpoints.up('xs')]: {
            display: "block",
            padding: "20px",
            paddingTop: "100px",
            paddingBottom: "40px",
        },
        [theme.breakpoints.up('md')]: {
            display: "flex",
            alignItems: "center",
            paddingTop: "100px",
            height: "100vh"
        },
    }));

    const StyledImg = styled("img")(() => ({
        width: "80%",
        borderRadius: "50%",
        border: `2px solid ${theme.palette.primary.contrastText}`,
    }));

    const handleDownload = () => {
        console.log("download")
        // Create a link element
        const link = document.createElement('a');
        link.href = CV
        link.download = 'Curriculo-HiagoFerreiradaRocha.pdf'; // Set the download attribute to specify the file name
        // Append the link to the body
        document.body.appendChild(link);
        // Trigger the click event
        link.click();
        // Remove the link from the body
        document.body.removeChild(link);
    };

    const handleEmail = () => {

    }

    return (
        <>
            <StyledHero>
                <Container maxWidth="lg">
                    <Grid container spacing={2}>

                        <Grid item xs={12} md={5}>
                                <Box position="relative">
                                <Box position="absolute" width={"100%"} top={-70} right={110}>
                                    <AnimatedBackground />
                                </Box>
                                <Box position="relative" textAlign="center"><StyledImg src={Avatar} /></Box>
                                </Box>

                        </Grid>

                        <Grid item xs={12} md={7}>

                            <Typography color="primary.contrastText" variant="h1" textAlign="center" pb={2}>Hiago da Rocha</Typography>
                            <Typewriter text="I'm a FullStack Developer" delay={120} variant="h2" color="primary.contrastText" />

                            <Grid container display={"flex"} justifyContent="center" spacing={3} pt={3}>

                                <Grid item xs={12} md={4} display="flex" justifyContent="center">

                                    <StyledButton onClick={() => handleDownload()}>
                                        <DownloadIcon />
                                        <Typography>Download CV</Typography>
                                    </StyledButton>

                                </Grid>

                                <Grid item xs={12} md={4} display="flex" justifyContent="center">

                                    <StyledButton onClick={() => handleEmail()}>
                                        <MailOutlineIcon />
                                        <Typography>Contact me</Typography>
                                    </StyledButton>

                                </Grid>

                            </Grid>

                        </Grid>

                    </Grid>
                </Container>
            </StyledHero>
        </>
    );
};

export default Hero;
