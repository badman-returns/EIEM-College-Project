import { Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';
import React from 'react';
import logo from '../../../assets/logoGrey.png';
import facebook from '../../../assets/facebook.svg';
import linkedin from '../../../assets/linkedin.svg';

const useStyles = makeStyles({
    root: {
        backgroundColor: '#19181B',
    },
    brandShortName: {
        fontWeight: 600,
        margin: '0px',
        fontSize: '34px',
        color: '#B3B2B2',
    },
    brandFullName: {
        fontWeight: 700,
        fontSize: '18px',
        margin: '0',
        color: '#B3B2B2',
    },
    brandAffiliation: {
        margin: '0',
        fontSize: '12px',
        color: '#B3B2B2',
    },
    logo: {
        maxHeight: '100%',
        maxWidth: '100%',
    },
    tagline: {
        fontWeight: 500,
        color: '#B3B2B2',
        marginTop: '40px',
    },
    horizontalLine: {
        marginTop: '15px',
        marginBottom: '15px',
        width: '100%',
        height: '1px',
        backgroundColor: '#B3B2B2',
    },
    navMenu: {
        margin: '0 16px',
        textDecoration: 'none',
        color: '#B3B2B2',
        fontWeight: 600,
    },
    footerMenu: {
        textDecoration: 'none',
        color: '#B3B2B2',
        fontSize: '12px',
        textTransform: 'uppercase',
        fontWeight: 500,
    },
    socialIcon: {
        width: '35px',
        margin: '0 10px',
        filter: 'invert(80%)',
        webkitFilter: 'invert(80%)',
    },
    footerItem: {
        color: '#B3B2B2',
        textDecoration: 'none',
        fontSize: '14px',
        fontWeight: 500,
    }
})

const FooterMenu = () => {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <Grid container>
                <Grid item xs={12}>
                    <Grid container justify='center' alignItems='center' style={{ marginTop: '100px' }}>
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
                                        <Grid item xs={12}>
                                            <p className={classes.tagline}>BUILDING CAREERS THROUGH INNOVATION</p>
                                        </Grid>
                                    </Grid>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item xs={12}>
                    <Grid container justify='center' alignItems='center' style={{ marginTop: '40px' }}>
                        <Grid item xs={10}>
                            <div className={classes.horizontalLine}></div>
                            <Grid container justify='center' alignItems='center'>
                                <Grid item>
                                    <Link to='#' className={classes.navMenu}>Home</Link>
                                </Grid>
                                <Grid item>
                                    <Link to='#' className={classes.navMenu}>About</Link>
                                </Grid>
                                <Grid item>

                                    <Link to='#' className={classes.navMenu}>Authorities</Link>
                                </Grid>
                                <Grid item>
                                    <Link to='#' className={classes.navMenu}>Infrastructure</Link>
                                </Grid>
                                <Grid item>
                                    <Link to='#' className={classes.navMenu}>Academics</Link>
                                </Grid>
                                <Grid item>
                                    <Link to='#' className={classes.navMenu}>Tranning & Placement</Link>
                                </Grid>
                                <Grid item>
                                    <Link to='#' className={classes.navMenu}>IIC</Link>
                                </Grid>
                                <Grid item>
                                    <Link to='#' className={classes.navMenu}>Admission</Link>
                                </Grid>
                                <Grid item>
                                    <Link to='#' className={classes.navMenu}>Careers</Link>
                                </Grid>
                            </Grid>
                            <div className={classes.horizontalLine}></div>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item xs={12}>
                    <Grid container justify='center' alignItems='center' style={{ marginTop: '40px' }}>
                        <Grid item xs={8} style={{ margin: '0 0 0 80px' }}>
                            <Grid container justify='space-evenly' alignItems='center'>
                                <Grid item xs={3}>
                                    <Grid container justify='center' alignItems='center'>
                                        <Grid item xs={12}>
                                            <Link to='#' className={classes.footerMenu}>Appropal</Link>
                                        </Grid>
                                        <Grid item xs={12}>
                                            <Link to='#' className={classes.footerMenu}>Academic Council</Link>
                                        </Grid>
                                        <Grid item xs={12}>
                                            <Link to='#' className={classes.footerMenu}>Studemt Support Cell</Link>
                                        </Grid>
                                        <Grid item xs={12}>
                                            <Link to='#' className={classes.footerMenu}>Notices</Link>
                                        </Grid>
                                    </Grid>
                                </Grid>
                                <Grid item xs={3}>
                                    <Grid container justify='center' alignItems='center'>
                                        <Grid item xs={12}>
                                            <Link to='#' className={classes.footerMenu}>Achievement</Link>
                                        </Grid>
                                        <Grid item xs={12}>
                                            <Link to='#' className={classes.footerMenu}>Academic Calender</Link>
                                        </Grid>
                                        <Grid item xs={12}>
                                            <Link to='#' className={classes.footerMenu}>Faculty List</Link>
                                        </Grid>
                                        <Grid item xs={12}>
                                            <Link to='#' className={classes.footerMenu}>Library</Link>
                                        </Grid>
                                    </Grid>
                                </Grid>
                                <Grid item xs={3}>
                                    <Grid container justify='center' alignItems='center'>
                                        <Grid item xs={12}>
                                            <Link to='#' className={classes.footerMenu}>Authorities</Link>
                                        </Grid>
                                        <Grid item xs={12}>
                                            <Link to='#' className={classes.footerMenu}>Institute Location</Link>
                                        </Grid>
                                        <Grid item xs={12}>
                                            <Link to='#' className={classes.footerMenu}>Notification</Link>
                                        </Grid>
                                        <Grid item xs={12}>
                                            <Link to='#' className={classes.footerMenu}>Fee Structure</Link>
                                        </Grid>
                                    </Grid>
                                </Grid>
                                <Grid item xs={3}>
                                    <Grid container justify='center' alignItems='center'>
                                        <Grid item xs={12}>
                                            <Link to='#' className={classes.footerMenu}>Anti Raggin</Link>
                                        </Grid>
                                        <Grid item xs={12}>
                                            <Link to='#' className={classes.footerMenu}>Alumni</Link>
                                        </Grid>
                                        <Grid item xs={12}>
                                            <Link to='#' className={classes.footerMenu}>Gallery</Link>
                                        </Grid>
                                        <Grid item xs={12}>
                                            <Link to='#' className={classes.footerMenu}>Mandatory Disclousure</Link>
                                        </Grid>
                                    </Grid>
                                </Grid>

                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item xs={12}>
                    <Grid container justify='flex-end' alignItems='center' style={{ margin: '70px 0 10px 0' }}>
                        <Grid item xs={7}>
                            <Grid container justify='center'>
                                <Grid item >
                                    <img className={classes.socialIcon} src={facebook} alt='facebook' />
                                </Grid>
                                <Grid item>
                                    <img className={classes.socialIcon} src={linkedin} alt='linkedin' />
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item xs={12}>
                    <Grid container justify='center' alignItems='center' style={{margin: '10px 0 '}}>
                        <Grid item xs={7}>
                            <Grid container justify='center' alignItems='center' >
                                <Grid item xs={8}>
                                    <span className={classes.footerItem}>
                                        <Link className={classes.footerItem} to='#'>Accessibility</Link> &nbsp; | &nbsp;
                                        <Link className={classes.footerItem} to='#'>Privacy Policy</Link> &nbsp; | &nbsp;
                                        <Link className={classes.footerItem} to='#'>Terms of Use</Link> &nbsp; | &nbsp;
                                        <Link className={classes.footerItem} to='#'>Sitemap</Link>
                                    </span>
                                </Grid>
                                <Grid item xs={8}>
                                    <span className={classes.footerItem}> &copy; Copyright 2021 by CST Students 2019-20 EIEM - All rights reserved.</span>
                                </Grid>
                            </Grid>
                        </Grid>
                        <Grid item xs={5}>
                            <Grid container justify='flex-end' alignItems='center' >
                                <Grid item xs={12}>
                                    <span className={classes.footerItem}>PO:- Karnamadhabpur, PS: Ghola, Sodepur, Kolkata - 700113</span>
                                </Grid>
                                <Grid item xs={12}>
                                    <span className={classes.footerItem}>Email:- info@petindia.org / admission.eiem@petindia.org</span>
                                </Grid>
                                <Grid item xs={12}>
                                    <span className={classes.footerItem}>Contact us:-  9163316560 / 9831500840</span>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </div >
    )
}

export default FooterMenu;