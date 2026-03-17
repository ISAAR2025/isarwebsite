import '../styles/Footer.css';
import { useNavigate } from 'react-router-dom';
import { Container, Row, Col } from 'react-bootstrap';
import { FaFacebook, FaInstagram, FaLinkedin, FaPhone, FaEnvelope, FaMapMarkerAlt} from 'react-icons/fa';



const Footer = () => {
  const navigate = useNavigate();

  const handleNavigation = (path) => {
    navigate(path);
  };
  const footerStyle = {
  //backgroundImage: `url(${footerBg})`,
  backgroundRepeat: 'no-repeat',
  backgroundPosition: 'center center',
  backgroundSize: 'cover',
  color: '#052343',
  marginTop: 'auto',
  padding: '60px 0 0',
};



  return (
    <footer className="footer" style={footerStyle}>
      <Container>
        {/* Main Footer Content */}
        <Row className="footer-main-row">
          {/* Column 1: Company Info & Social */}
          <Col xs={12} md={6} lg={4} className="footer-section company-info">
  <div className="company-logo">
    <div className="logo-container">
      
      <p className="company-name">Indian Scientific Aerospace and Robotics</p>
    </div>
  </div>

  <p className="company-description">
    At ISAR, we're dedicated to delivering innovative technology solutions 
    tailored to meet the unique needs of aerospace and robotics education. 
    Building the future through advanced UAV training and research.
  </p>
</Col>

          {/* Column 2: Quick Links */}
          <Col xs={12} md={6} lg={3} className="footer-section quick-links">
            <h3>Quick Links</h3>
            <Row className="links-grid">
              {/* Sub-column 1 */}
              <Col xs={6} className="links-column">
                <ul>
                  <li><button onClick={() => handleNavigation('/')}>Home</button></li>
                  <li><button onClick={() => handleNavigation('/about')}>About</button></li>
                  <li><button onClick={() => handleNavigation('/institute')}>Our Institute</button></li>
                  <li><button onClick={() => handleNavigation('/services')}>Our Services</button></li>
                  <li><button onClick={() => handleNavigation('/gallery')}>Gallery</button></li>
                </ul>
              </Col>
              
              {/* Sub-column 2 */}
              <Col xs={6} className="links-column">
                <ul>
                  <li><button onClick={() => handleNavigation('/careers')}>Careers</button></li>
                  <li><button onClick={() => handleNavigation('/#collaborate')}>Collaborate</button></li>
                  <li><button onClick={() => handleNavigation('/#Blog')}>Blog</button></li>
                  <li><button onClick={() => handleNavigation('/testimonials')}>Testimonials</button></li>
                  <li><button onClick={() => handleNavigation('/contact')}>Contact</button></li>
                </ul>
              </Col>
            </Row>
          </Col>

          {/* Column 3: Programs & Services */}
          <Col xs={12} lg={5} className="footer-section services-links">
            <h3>Programs & Services</h3>
            <Row className="services-grid">
              <Col xs={12} sm={6} className="services-column">
                <ul>
                   <li><button onClick={() => handleNavigation('/services')}>3D printing Service (Business)</button></li>
                  <li><button onClick={() => handleNavigation('/courses/master-certificate-in-advanced-drone-applications-and-technologies')}>Master Certificate in Industry-Oriented Drone Applications</button></li>
                  <li><button onClick={() => handleNavigation('/courses/professional-certificate-in-unmanned-aerial-systems-uas-operations')}>Professional Certificate in Unmanned Aerial Vehicle</button></li>
                  <li><button onClick={() => handleNavigation('/courses/advanced-certificate-in-drone-technology-and-applications')}>Advance Certificate in Unmanned Aerial Vehicle</button></li>
                  <li><button onClick={() => handleNavigation('/courses/certificate-in-advanced-drone-engineering-and-design')}>Certificate in Advance Drone Engineering</button></li>
                </ul>
              </Col>
              
              <Col xs={12} sm={6} className="services-column">
                <ul>
                  <li><button onClick={() => handleNavigation('/courses/professional-certificate-in-cad-design-with-catia-and-solidworks')}>Professional Certificate in CATIA & Solid Works</button></li>
                  <li><button onClick={() => handleNavigation('/courses/advanced-certificate-in-computational-fluid-dynamics-cfd-and-finite-element-analysis-fea')}>Advance Certificate in CFD & FEA Analysis</button></li>
                  <li><button onClick={() => handleNavigation('/courses/professional-diploma-in-drone-maintenance-assembly-and-production')}>Professional Diploma in Unmanned Aerial Vehicle Maintenance and Production</button></li>
                  <li><button onClick={() => handleNavigation('/courses/foundational-academic-program-junior-level')}>Junior High</button></li>
                </ul>
              </Col>
            </Row>
          </Col>
        </Row>
        

        {/* Contact Information Row */}
<Row className="contact-row">
  <Col xs={12}>
    <h3>Contact Us</h3>
  </Col>

  <Col xs={12} md={3} className="contact-item d-flex align-items-center gap-2">
    <FaPhone className="contact-icon" />
    <a href="tel:+916374720788">+91-6374720788</a>
  </Col>

  <Col xs={12} md={3} className="contact-item d-flex align-items-center gap-2">
    <FaEnvelope className="contact-icon" />
    <a href="mailto:admin@isaar.in">admin@isaar.in</a>
  </Col>

  <Col xs={12} md={3} className="contact-item d-flex align-items-left gap-2 address">
    <FaMapMarkerAlt className="contact-icon" />
    <span>339/2 at Kurunji Nagar Valayapatti, Trichy Road, Namakkal, Tamil Nadu 637020</span>
  </Col>

  <Col xs={12} md={3} className="footer-social responsive-social d-flex gap-3 align-items-center">
    <a href="https://www.instagram.com/isar_drone_institute?igsh=MTR6OWFrd2V6dWs5Zw==" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
      <FaInstagram />
    </a>
    <a href="https://www.linkedin.com/company/indian-scientific-aerospace-and-robotics/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
      <FaLinkedin />
    </a>
    <a href="https://www.facebook.com/share/16n143NgEy/" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
      <FaFacebook />
    </a>
  </Col>
</Row>



      </Container>

      {/* SEO Keywords Section */}
      <div className="seo-keywords">
        <Container>
          <Row>
            <Col xs={12}>
              <p>
                <strong>Services:</strong> Chennai Drone Training, Coimbatore UAV Courses, Madurai Aerospace Education, 
                Salem Robotics Institute, Tiruchirappalli Drone Academy, Vellore Aviation Training, 
                Tirunelveli Drone Certification, Erode UAV Workshop, Thoothukudi Aerospace Programs, 
                Thanjavur Drone Technology, Dindigul Aviation Courses, Cuddalore Robotics Training
              </p>
            </Col>
          </Row>
        </Container>
      </div>

      {/* Copyright Section */}
      <div className="footer-bottom">
        <Container>
          <Row>
            <Col xs={12}>
              <p>&copy; {new Date().getFullYear()} Indian Scientific Aerospace and Robotics (ISAR). All Rights Reserved.</p>
            </Col>
          </Row>
        </Container>
      </div>
    </footer>
  );
};

export default Footer;