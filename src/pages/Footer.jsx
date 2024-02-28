import React from "react";
import './footer.css';
import FooterNavItem from "../components/FooterNavItem";

function Footer() {
    const usefulLinks = [
        'Home',
        'Movies',
        'My List',
        'Terms of service',
        'Privacy Policy',
    ]
    const locations = [
        'Dolorum optio',
        'Non rem rerum',
        'Cras fermentun odio',
        'Justo eget',
        'Fermentum iaculis',
    ];
    return (
            <footer id="footer" className="footer">
            <div className='footer-top'>
            <div className='container'>
                <div className='row gy-4'>
                    <div className='col-lg-5 col-md-12 footer-info'>
                        <a href='/' className='logo d-flex align-items-center'>
                            <span>Movieclub</span>
                        </a>
                        <p>
                        Movieclub serves as a canvas where dreams come alive through
                        the interplay of light and sound, forming a timeless masterpiece
                        that beckons us to lose ourselves in its enchanting beauty and
                        immerse our souls in the captivating art of storytelling
                        </p>
                        <div className='social-links mt-3'>
                            <a href='#' className='twitter'>
                                <ion-icon name='logo-twitter'></ion-icon>
                            </a>
                            <a href='#' className='facebook'>
                                <ion-icon name='logo-facebook'></ion-icon>
                            </a>
                            <a href='#' className='instagram'>
                                <ion-icon name='logo-instagram'></ion-icon>
                            </a>
                            <a href='#' className='youtube'>
                                <ion-icon name='logo-youtube'></ion-icon>
                            </a>

                        </div>
                    </div>
                    <div className='col-lg-2 col-6 footer-links'>
                        <h4>Useful Links</h4>
                        <ul>
                            {usefulLinks.map(link => (
                                <FooterNavItem key={link} name={link} />
                            ))
                        }
                        </ul>
                    </div>

                    <div className='col-lg-2 col-6 footer-links'>
                        <h4>Our Cinerma</h4>
                        <ul>
                            {locations.map(link => (
                                <FooterNavItem key={link} name={link} />
                            ))}
                        </ul>
                    </div>
                    
                    <div className='col-lg-3 col-md-12 footer-contact text-center text-md-start'>
                        <h4>Contact Us</h4>
                        <p>
                            Street Name <br/>
                            Fes, State 123456 <br/>
                            Morocco <br/><br/>
                            <strong>Phone:</strong>+212682669929 <br/>
                            <strong>Email:</strong> simofinance22@gmail.com <br/>                           

                        </p>
                    </div>
                </div>
            </div>
        </div>

        <div className='container'>
        <div className='copyright'>
            &copy; Copyright{' '}
            <strong>
                <span>Rodrigo Eccel Technology</span>
            </strong>
            . All Right Reserved
        </div>
        <div className='credits'>
            Designed by <a href='#'>REC Technology</a>
        </div>
        </div>
            </footer>
    );
}

export default Footer