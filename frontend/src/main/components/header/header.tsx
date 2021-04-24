import React from 'react';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import logo from '../../../assets/logo.png';

const useStyles = makeStyles({
    brandShortName: {
        fontWeight: 600,
        margin: '0px',
        fontSize: '38px'
    },
    brandFullName: {
        fontWeight: 700,
        fontSize: '13px',
        margin: '0',
    },
    brandAffiliation: {
        margin: '0',
        fontSize: '9px',
    },
    login: {
        fontSize: '15px',
        fontWeight: 500,
        marginRight: '30px',
    },
    logo: {
        maxHeight: '100%',
        maxWidth: '100%',
    },
    instituteInfo: {
        padding: '3px',
    },
    instituteAddressContact: {
        fontSize: '10px',
        margin: '0',
    },
    navMenu: {
        margin: '0 8px',
        textDecoration: 'none',
        color: '#000',
    },
    horizontalLine: {
        marginTop: '35px',
        width: '100%',
        height: '1px',
        backgroundColor: '#E5E5E5',
    },
    notificationTitle: {
        backgroundColor: '#000',
        color: '#fff',
        fontWeight: 700,
    },
    notificationContent: {
        backgroundColor: '#EBEEF8',
        fontWeight: 200,
    },
})

const Header: React.FC = () => {
    const classes = useStyles();
    return (
        <>
            <Grid container>
                <Grid item xs={12}>
                    <Grid container justify='flex-end' alignItems='center'>
                        <Grid item>
                            <p className={classes.login}>Student Login &nbsp; | &nbsp; Admin Login</p>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item xs={12}>
                    <Grid container justify='center' alignItems='flex-end'>
                        <Grid item xs={7}>
                            <Grid container spacing={2}>
                                <Grid item xs={4}>
                                    <Grid container justify='flex-end' alignItems='center'>
                                        <Grid item xs={6}>
                                            <img className={classes.logo} src={logo} alt='eiem-logo' />
                                        </Grid>
                                    </Grid>
                                </Grid>
                                <Grid item xs={8}>
                                    <Grid container justify='center'>
                                        <Grid item xs={12}>
                                            <h3 className={classes.brandShortName}>EIEM</h3>
                                        </Grid>
                                        <Grid item xs={12}>
                                            <b className={classes.brandFullName}>Elitte Institute of Engineering And Management</b>
                                        </Grid>
                                        <Grid item xs={12}>
                                            <b className={classes.brandAffiliation}>Approved by AICTE , Affiliated to WBSCT& VE& SD (Formerly WBSCTE)</b>
                                        </Grid>
                                    </Grid>
                                </Grid>

                            </Grid>
                        </Grid>
                        <Grid item xs={5} className={classes.instituteInfo}>
                            <Grid container justify='center' alignItems='flex-end'>
                                <Grid item xs={8}>
                                    <Grid container justify='center' alignItems='flex-end'>
                                        <Grid item xs={12}>
                                            <h3 className={classes.instituteAddressContact}>PO: Karnamadhabpur, PS: Ghola, Sodepur, Kolkata - 700113</h3>
                                        </Grid>
                                        <Grid item xs={12}>
                                            <b className={classes.instituteAddressContact}>info@petindia.org / admission.eiem@petindia.org</b>
                                        </Grid>
                                        <Grid item xs={12}>
                                            <b className={classes.instituteAddressContact}>Contact us:  9163316560 / 9831500840</b>
                                        </Grid>
                                    </Grid>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item xs={12}>
                    <Grid container justify='center' alignItems='center'>
                        <Grid item xs={10}>
                            <div className={classes.horizontalLine}></div>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item xs={12}>
                    <Grid container justify='center' alignItems='center' style={{ marginTop: '22px' }}>
                        <Grid item>
                            <Link to='/' className={classes.navMenu}>Home</Link>
                        </Grid>
                        <Grid item>
                            <Link to='/about' className={classes.navMenu}>About</Link>
                        </Grid>
                        <Grid item>

                            <p className={classes.navMenu}>Authorities</p>
                        </Grid>
                        <Grid item>
                            <p className={classes.navMenu}>Infrastructure</p>
                        </Grid>
                        <Grid item>
                            <p className={classes.navMenu}>Academics</p>
                        </Grid>
                        <Grid item>
                            <p className={classes.navMenu}>Tranning & Placement</p>
                        </Grid>
                        <Grid item>
                            <p className={classes.navMenu}>IIC</p>
                        </Grid>
                        <Grid item>
                            <p className={classes.navMenu}>Admission</p>
                        </Grid>
                        <Grid item>
                            <p className={classes.navMenu}>Careers</p>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item xs={12}>
                    <Grid container justify='center' alignItems='center' style={{ marginTop: '22px' }}>
                        <Grid item xs={2}>
                            <Grid container className={classes.notificationTitle} justify='flex-end' alignItems='center'>
                                <p style={{ margin: '6px 18px 6px 0' }}>Notification</p>
                            </Grid>
                        </Grid>
                        <Grid item xs={10}>
                            <Grid container className={classes.notificationContent} justify='center' alignItems='center'>
                                <p style={{ margin: '6px 0 6px 0' }}>Republic Day Livecast | Research | Degree Programmes | Livestream of Convocation 2020</p>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </>
    )
}

export default Header;