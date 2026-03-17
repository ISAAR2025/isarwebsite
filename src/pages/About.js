// AboutISARMultiColorAOS.jsx
import React, { useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import AOS from "aos";
import "aos/dist/aos.css";
import "../styles/about.css";
import Footer from "../components/Footer";


// Replace these with real assets or CMS URLs
import heroImg from "../assets/images/3dprinting.webp"; 
import summitMP from "../assets/images/summitmp.webp"; 
import summitDubai from "../assets/images/summitDubai.webp"; 
import g20Img from "../assets/images/G20.webp"; 
import leadership1 from "../assets/images/PDK.webp"; 
import leadership2 from "../assets/images/JV.webp"; 
import leadership3 from "../assets/images/Gov.webp"; 
import leadership4 from "../assets/images/london.webp"; 
import about from "../assets/images/about-section square.jpeg";


export default function AboutISARMultiColorAOS() {
  useEffect(() => {
    AOS.init({
      duration: 700,
      easing: "ease-out",
      once: false,     // animate on down and up
      mirror: true,    // animate elements out on scroll past
      offset: 80,
    });
    const onLoad = () => AOS.refreshHard();
    window.addEventListener("load", onLoad);
    return () => window.removeEventListener("load", onLoad);
  }, []);

  

  return (
    <div className="about-multicolor">
      
      {/* Hero — clean white */}
      <section className="section-white border-bottom">
        <div className="container">
          <div className="row align-items-center gy-4">
            <div className="col-lg-7" data-aos="fade-right">
              <h1 className="display-6 fw-semibold mb-3">
                Print Your Ideas. Build the Future.
              </h1>
              <p className="lead text-muted mb-4">
                Advancing aerospace training, robotics research, and global collaborations to power the next generation of innovation.
              </p>
              <div className="d-flex flex-wrap gap-3">
              
                <a href="#contact" className="btn btn-primary btn-lg">Collaborate With Us</a>
              </div>
              
            </div>
            <div className="col-lg-5" data-aos="zoom-in">
              <div className="ratio ratio-4x3 rounded-3 overflow-hidden shadow-sm">
                <img src={heroImg} alt="ISAR training and research" className="img-covers" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About — soft gray */}


<section className="section-white border-bottom section-background">
        <div className="container">
          <div className="row align-items-center gy-4">
            <div className="col-lg-7" data-aos="fade-right">
              <h1 className="display-6 fw-semibold mb-3">
                About ISAR
              </h1>
              <p className="lead text-muted mb-4">
                At ISAR, we are committed to advancing innovation through aerospace training, 
                  robotics research, and global collaborations. Our mission is to empower students, 
                  researchers, businesses, and institutions with knowledge, skills, and cutting-edge technology 
                  to thrive in the future of science and engineering. With a strong foundation in education and research,
                   ISAR delivers excellence through UAV training programs, institutional
                    partnerships, and industry engagements.
                    We stand for integrity, innovation, and excellence, ensuring quality 
                    learning and impactful contributions in every initiative.
              </p>
              
            </div>
            <div className="col-lg-5" data-aos="zoom-in">
              <div className="ratio ratio-4x3 rounded-3 overflow-hidden shadow-sm">
                <img src={about} alt="ISAR training and research" className="img-covers" />
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* Mission & Vision — light blue */}
      <section className="section-blue">
        <div className="container">
          <div className="row g-4">
            <div className="col-lg-6" data-aos="fade-up">
              <div className="p-4 p-lg-5 bg-white rounded-3 h-100 shadow-sm">
                <h3 className="h5 mb-2">Our Mission</h3>
                <p className="mb-0">
                  To empower the next generation of innovators by providing world-class training, research opportunities, and technological exposure in aerospace, robotics, and emerging technologies. We bridge academic learning and industry needs to prepare learners for a future of limitless possibilities.
                </p>
              </div>
            </div>
            <div className="col-lg-6" data-aos="fade-up" data-aos-delay="120">
              <div className="p-4 p-lg-5 bg-white rounded-3 h-100 shadow-sm">
                <h3 className="h5 mb-2">Our Vision</h3>
                <p className="mb-0">
                  To become a global leader in aerospace education and research—driving innovation, collaboration, and technological excellence—where students, institutions, and industries unite to transform ideas into impactful solutions for society.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Global Platforms — lavender gradient */}
      <section className="section-gradient-purple">
        <div className="container">
          <div className="d-flex align-items-center justify-content-between mb-3" data-aos="fade-right">
            <h3 className="h5 mb-0">ISAR at Global Platforms</h3>
          </div>
          <div className="row g-4">
            <div className="col-md-6 col-lg-4" data-aos="fade-up">
              <div className="card h-100 border-0 shadow-sm">
                <div className="ratio ratio-16x9">
                  <img src={summitMP} alt="Global Investors Summit 2025 – MP" className="img-cover rounded-top" />
                </div>
                <div className="card-body">
                  <h5 className="card-title">Global Investors Summit 2025 — MP</h5>
                  <p className="card-text">
                    Contributed to Madhya Pradesh’s global investment vision; leadership engagement with the Hon’ble Chief Minister reflects commitment to economic growth and innovation ecosystems.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-4" data-aos="fade-up" data-aos-delay="120">
              <div className="card h-100 border-0 shadow-sm">
                <div className="ratio ratio-16x9">
                  <img src={summitDubai} alt="Global Police Summit 2025 – Dubai" className="img-cover rounded-top" />
                </div>
                <div className="card-body">
                  <h5 className="card-title">Global Police Summit 2025 — Dubai</h5>
                  <p className="card-text">
                    Representation on security technology, AI surveillance, and public safety; engagements with senior officials, industry leaders, and delegations from 50+ countries.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-4" data-aos="fade-up" data-aos-delay="240">
              <div className="card h-100 border-0 shadow-sm">
                <div className="ratio ratio-16x9">
                  <img src={g20Img} alt="G20 Summit 2023 – India" className="img-cover rounded-top" />
                </div>
                <div className="card-body">
                  <h5 className="card-title">G20 Summit 2023 — India</h5>
                  <p className="card-text">
                    Participation underscoring ISAR’s role in innovation and global collaboration on international platforms.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Leadership — warm sand */}
      <section className="section-sand">
        <div className="container">
          <h3 className="h5 mb-3" data-aos="fade-right">Leadership & Recognition</h3>
          <div className="row g-4">
            <div className="col-md-6 col-lg-3" data-aos="zoom-in">
              <div className="p-0 bg-white rounded-3 shadow-sm h-100 overflow-hidden">
                <div className="ratio ratio-1x1">
                  <img src={leadership1} alt="Leadership highlight 1" className="img-cover" />
                </div>
                <div className="p-3">
                  <p className="mb-0">Ms. Praveena D.K., IAS, Vice Chairperson & Managing Director, GIDC.</p>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-3" data-aos="zoom-in" data-aos-delay="100">
              <div className="p-0 bg-white rounded-3 shadow-sm h-100 overflow-hidden">
                <div className="ratio ratio-1x1">
                  <img src={leadership2} alt="Leadership highlight 2" className="img-cover" />
                </div>
                <div className="p-3">
                  <p className="mb-0">Meeting with Jagdish Vishwakarma, Hon’ble Minister for Cottage, Khadi, and Rural Industries, Gujarat.</p>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-3" data-aos="zoom-in" data-aos-delay="200">
              <div className="p-0 bg-white rounded-3 shadow-sm h-100 overflow-hidden">
                <div className="ratio ratio-1x1">
                  <img src={leadership3} alt="Leadership highlight 3" className="img-cover" />
                </div>
                <div className="p-3">
                  <p className="mb-0">Award from Dr. Tamilisai Soundararajan, Hon’ble Governor of Telangana.</p>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-3" data-aos="zoom-in" data-aos-delay="300">
              <div className="p-0 bg-white rounded-3 shadow-sm h-100 overflow-hidden">
                <div className="ratio ratio-1x1">
                  <img src={leadership4} alt="Leadership highlight 4" className="img-cover" />
                </div>
                <div className="p-3">
                  <p className="mb-0">Collaboration proposal with University of West London (UWL), UK, during Global Police Summit.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact — light green */}
      <section id="contact" className="section-green">
        <div className="container">
          <div className="row g-4">
            <div className="col-lg-7" data-aos="fade-up">
              <div className="p-4 p-lg-5 bg-white rounded-3 h-100 shadow-sm">
                <h3 className="h5 mb-3">Contact</h3>
                <ul className="list-unstyled mb-0">
                  <li className="mb-2">Address: 339/2, Kurunji Nagar, Valayapatti, Mohanur, Namakkal District, Tamil Nadu – 637020</li>
                  <li className="mb-2">Email: <a href="mailto:admin@isaar.in" className="link-primary">admin@isaar.in</a></li>
                  <li>Phone: <a href="tel:+916374720788" className="link-primary">+91-6374720788</a></li>
                </ul>
              </div>
            </div>
            <div className="col-lg-5" data-aos="fade-up" data-aos-delay="120">
              <div className="p-4 p-lg-5 bg-white rounded-3 h-100 shadow-sm">
                <h3 className="h5 mb-3">Why Choose ISAR?</h3>
                <ul className="list-unstyled mb-0">
                  <li className="mb-2"> Strong Academic & Industry Focus — bridging education with real-world impact.</li>
                  <li>Value-Driven Programs — affordable, impactful, and future-ready.</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer/>
    </div>
  );
}
