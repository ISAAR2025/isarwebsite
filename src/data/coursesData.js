import c1 from "../assets/images/Master Certificate in Advanced Drone Applications and Technologies.webp";
import c2 from "../assets/images/Professional Certificate in Unmanned Aerial Systems (UAS) Operations.webp";
import c3 from "../assets/images/Advanced Certificate in Drone Technology and Applications.webp";
import c4 from "../assets/images/Certificate in Advanced Drone Engineering and Design.webp";
import c5 from "../assets/images/Professional Certificate in CAD Design with CATIA and SolidWorks.webp";
import c6 from "../assets/images/Advanced Certificate in Computational Fluid Dynamics (CFD) and Finite Element Analysis (FEA).webp";
import c7 from "../assets/images/Professional Diploma in Drone Maintenance, Assembly, and Production.webp";
import c8 from "../assets/images/Foundational Academic Program (Junior Level).webp";

const coursesData = [
  {
    id: 1,
    slug: "master-certificate-drone-applications", // ✅ added
    title: "Master Certificate in Advanced Drone Applications and Technologies",
    duration: "45 Days",
    fee: "₹25,000",
    certification: "Yes",
    eligibility: "Any UG",
    lessons: 10,
    students: 25,
    image: c8,
    description: `
      <h3>Overview</h3>
      <p>Our Master Certified Industry-Oriented Drone Applications program bridges advanced drone technology with real-world industry needs.</p>
      <h3>What You’ll Learn</h3>
      <ul>
        <li>Emergency Response: Rapid delivery of medical kits, disaster management, aerial surveys.</li>
        <li>Infrastructure & Construction: 3D mapping, inspections, progress monitoring.</li>
        <li>Energy Sector: Power line, turbine, and solar farm inspections.</li>
        <li>Logistics: Last-mile deliveries efficiently.</li>
        <li>Environmental Applications: Wildlife monitoring, forest mapping, pollution tracking.</li>
        <li>Precision Agriculture: Crop health analysis, irrigation planning, yield forecasting.</li>
      </ul>
      <h3>Certification</h3>
      <p>Industry-Recognized Certificate validating expertise in drone applications.</p>
    `,
  },
  {
    id: 2,
    slug: "professional-certificate-uas-operations",
    title: "Professional Certificate in Unmanned Aerial Systems (UAS) Operations",
    duration: "45 Days",
    fee: "₹20,000",
    certification: "Yes",
    eligibility: "Any UG",
    lessons: 9,
    students: 25,
    image: c7,
    description: `
      <h3>Overview</h3>
      <p>Master UAV operations with advanced aerodynamics, AI navigation, payloads, and mission planning.</p>
      <h3>What You’ll Learn</h3>
      <ul>
        <li>Advanced Flight Dynamics: Stability, control algorithms, environmental effects.</li>
        <li>Autonomous Systems: GPS & vision-based navigation using ArduPilot/PX4 & ROS.</li>
        <li>Drone Design: Heavy-lift, endurance, multi-role missions.</li>
        <li>Payload & Sensors: LiDAR, thermal, multispectral, telemetry systems.</li>
        <li>Mission Planning & Simulation: Mission Planner, QGroundControl, Gazebo.</li>
        <li>Mapping & Surveying: 2D/3D maps, photogrammetry, ArcGIS.</li>
        <li>Regulatory Mastery: DGCA/FAA/ICAO frameworks & BVLOS permissions.</li>
      </ul>
      <h3>Certification</h3>
      <p>Professional Certification in UAV from ISAR.</p>
    `,
  },
  {
    id: 3,
    slug: "advanced-certificate-drone-technology",
    title: "Advanced Certificate in Drone Technology and Applications",
    duration: "45 Days",
    fee: "₹15,000",
    certification: "Yes",
    eligibility: "Any UG",
    lessons: 8,
    students: 25,
    image: c6,
    description: `
      <h3>Overview</h3>
      <p>Dive into advanced UAV technology, AI navigation, swarming, and mission planning.</p>
      <h3>What You’ll Learn</h3>
      <ul>
        <li>Flight Dynamics & Control</li>
        <li>Autonomous Systems & AI Navigation</li>
        <li>Drone Design & Payload Integration</li>
        <li>Mission Planning & Simulation</li>
        <li>Mapping & Surveying</li>
        <li>Regulatory & Operational Compliance</li>
      </ul>
      <h3>Certification</h3>
      <p>Professional Certificate in UAV from ISAR.</p>
    `,
  },
  {
    id: 4,
    slug: "certificate-drone-engineering-design",
    title: "Certificate in Advanced Drone Engineering and Design",
    duration: "7 Days",
    fee: "₹10,000",
    certification: "Yes",
    eligibility: "Any UG",
    lessons: 7,
    students: 25,
    image: c5,
    description: `
      <h3>Overview</h3>
      <p>Hands-on drone engineering workshop covering fundamentals, flight systems, CAD design, simulation, and industry exposure.</p>
      <h3>Schedule</h3>
      <ul>
        <li>Day 1: Drone Fundamentals</li>
        <li>Day 2: Flight Systems & Regulations</li>
        <li>Day 3: 3D Drone Design (CAD)</li>
        <li>Days 4–5: Simulation & Testing</li>
        <li>Day 6: Industry Exposure</li>
        <li>Day 7: Career Opportunities & Q&A</li>
      </ul>
      <h3>Certification</h3>
      <p>Advanced Drone Engineering Certificate from ISAR.</p>
    `,
  },
  {
    id: 5,
    slug: "professional-certificate-cad-catia-solidworks",
    title: "Professional Certificate in CAD Design with CATIA and SolidWorks",
    duration: "N/A",
    fee: "₹10,000",
    certification: "Yes",
    eligibility: "Any UG",
    lessons: 8,
    students: 25,
    image: c4,
    description: `
      <h3>Overview</h3>
      <p>Beginner course on SolidWorks & CATIA focusing on sketches, features, and 3D modeling.</p>
      <h3>What You’ll Learn</h3>
      <ul>
        <li>2D Sketching and Dimensions</li>
        <li>Feature Creation & Modification</li>
        <li>Basic Assembly Concepts</li>
      </ul>
      <h3>Certification</h3>
      <p>Industry-Recognized Certificate from ISAR.</p>
    `,
  },
  {
    id: 6,
    slug: "advanced-certificate-cfd-fea",
    title: "Advanced Certificate in Computational Fluid Dynamics (CFD) and Finite Element Analysis (FEA)",
    duration: "N/A",
    fee: "₹10,000",
    certification: "Yes",
    eligibility: "Any UG",
    lessons: 9,
    students: 25,
    image: c3,
    description: `
      <h3>Overview</h3>
      <p>Hands-on course in CFD, FEA, and XFLR5 to optimize drone aerodynamics and structural performance.</p>
      <h3>What You’ll Learn</h3>
      <ul>
        <li>CFD: Geometry, meshing, flow visualization, force calculation, design insight.</li>
        <li>FEA: Geometry, meshing, stress analysis, deformation, material selection.</li>
        <li>XFLR5: Wing analysis, airfoil comparison, custom wing design, stability, visual validation, prototype optimization.</li>
      </ul>
      <h3>Certification</h3>
      <p>Industry-Recognized Certificate from ISAR.</p>
    `,
  },
  {
    id: 7,
    slug: "professional-diploma-drone-maintenance",
    title: "Professional Diploma in Drone Maintenance, Assembly, and Production",
    duration: "N/A",
    fee: "₹70,000",
    certification: "Yes",
    eligibility: "Any UG",
    lessons: 10,
    students: 25,
    image: c1,
    description: `
      <h3>Overview</h3>
      <p>Comprehensive program covering UAV fundamentals, design, manufacturing, maintenance, and innovation.</p>
      <h3>What You’ll Learn</h3>
      <ul>
        <li>Fundamentals of UAV flight and aerodynamics</li>
        <li>Design techniques for structure and propulsion</li>
        <li>Manufacturing & Prototyping processes</li>
        <li>Maintenance: predictive and corrective strategies</li>
        <li>Research & Innovation in UAV applications</li>
      </ul>
      <h3>Certification</h3>
      <p>Industry-Recognized Certificate from ISAR.</p>
    `,
  },
  {
    id: 8,
    slug: "foundational-academic-program-junior",
    title: "Foundational Academic Program (Junior Level)",
    duration: "N/A",
    fee: "₹8,000",
    certification: "Yes",
    eligibility: "School Students",
    lessons: 7,
    students: 25,
    image: c2,
    description: `
      <h3>Overview</h3>
      <p>The Junior High program — To enroll contact us:<br />Phone: +91 6374720788<br />Email: admin@isaar.in</p>
    `,
  },
];

export default coursesData;