import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Container, Row, Col, Card, ListGroup, Button } from "react-bootstrap";
import { motion } from "framer-motion";
import Footer from "../components/Footer";
import "../styles/JobDetails.css";

const jobs = [
  { id: "uav-engineer", title: "UAV Engineer" },
  { id: "avionics-engineer", title: "Avionics Engineer" },
  { id: "mechanical-design-engineer", title: "Mechanical Design Engineer" },
  { id: "embedded-systems-developer", title: "Embedded Systems Developer" },
  { id: "software-developer", title: "Software Developer" },
  { id: "cad-engineer", title: "CAD Engineer" },
  { id: "aerodynamics-engineer", title: "Aerodynamics Engineer" },
  { id: "manufacturing-engineer", title: "Manufacturing Engineer" },
  { id: "compliance-certification-engineer", title: "Compliance & Certification Engineer" },
  { id: "quality-control-engineer", title: "Quality Control (QC) Engineer" },
  { id: "internship-aerospace-robotics", title: "Internship – Aerospace & Robotics" },
];

// jobDetails object omitted here for brevity; reuse your existing jobDetails data
const jobDetails = {
  "uav-engineer": {
    title: "UAV Engineer",
    description: (
      <>
         <h4>Job Details</h4>
        <ul>
          <li><b>Location:</b> Valaiyappatti, Tamil Nadu (Ready to relocate)</li>
          <li><b>Experience:</b> 0–2 years</li>
          <li><b>Working Hours:</b> 9:30 AM – 6:30 PM</li>
          <li><b>Salary:</b> Negotiable (As per industry standards)</li>
          <li><b>Openings:</b> 2</li>
          <li><b>Department:</b> Research and Development</li>
          <li><b>Accommodation:</b> Provided by Company</li>
          <li><b>Job Type:</b> Full-Time</li>
          <li><b>Experience:</b> 0–2 years</li>
        </ul>


        <h4>Key Responsibilities</h4>
        <ul>
          <li>Design and develop UAV systems, including airframes, propulsion systems, avionics, and payloads.</li>
          <li>Conduct testing and evaluation of UAV components and systems to ensure performance, reliability, and safety.</li>
          <li>Collaborate with cross-functional teams to integrate UAV systems into overall projects.</li>
          <li>Manage UAV flight missions for data collection, surveillance, mapping, and research.</li>
          <li>Liaise with authorities to ensure regulatory compliance and safety protocols.</li>
          <li>Provide technical expertise and guidance on UAV capabilities for business development.</li>
          <li>Mentor and train team members on UAV operation, maintenance, troubleshooting procedures.</li>
          <li>Analyse and interpret flight data to optimize performance.</li>
          <li>Document all UAV design, testing, maintenance, and operational procedures.</li>
          <li>Take accountability for the design, operation, and maintenance of UAV systems.</li>
        </ul>
        <h4>Key Skills and Experience Required</h4>
        <ul>
          <li>B. Tech/M. Tech in Aeronautical, Mechanical, Electrical Engineering, or related field.</li>
          <li>0–2 years of experience in UAV design, operation, or related field.</li>
          <li>Proficiency with SolidWorks, CATIA, Mission Planner, QGC, UAV operation.</li>
          <li>Hands-on with UAV assembly, maintenance, troubleshooting.</li>
          <li>Strong understanding of aerodynamics, flight dynamics, system integration.</li>
          <li>Problem-solving, decision-making skills.</li>
          <li>Remote Pilot Certificate in small/medium category preferred.</li>
          <li>Excellent communication and collaboration skills.</li>
          <li>Independent and team-oriented work capabilities.</li>
        </ul>
      
      </>
    )
  },
  "avionics-engineer": {
    title: "Avionics Engineer",
    description: (
      <>
      <h4>Job Details</h4>
        <ul>
          <li><b>Location:</b> Valaiyappatti, Tamil Nadu (Ready to relocate)</li>
           <li><b>Experience:</b> 0–2 years</li>
          <li><b>Working Hours:</b> 9:30 AM – 6:30 PM</li>
          <li><b>Salary:</b> Negotiable (As per industry standards)</li>
          <li><b>Openings:</b> 2</li>
          <li><b>Department:</b> Research and Development</li>
          <li><b>Accommodation:</b> Provided by Company</li>
          <li><b>Job Type:</b> Full-Time</li>
        </ul>
        <h4>Key Responsibilities</h4>
        <ul>
          <li>Design and develop avionics systems for UAVs, including flight control, navigation, communication, and sensor integration with STM32.</li>
          <li>Conduct testing and validation of avionics for performance, reliability, and regulatory compliance.</li>
          <li>Integrate avionics systems into UAV platforms with cross-team collaboration.</li>
          <li>Analyze requirements and define architecture, considering power budgeting.</li>
          <li>Procure avionics components following quality standards and timelines.</li>
          <li>Support UAV flight testing, troubleshoot avionics issues, implement solutions.</li>
          <li>Update on emerging technologies in avionics engineering/UAV systems.</li>
          <li>Provide technical guidance for business development and customer engagements.</li>
          <li>Ensure compliance with regulatory requirements for avionics design, testing, operation.</li>
        </ul>
        <h4>Key Skills and Experience Required</h4>
        <ul>
          <li>B. Tech/M. Tech in ECE, EEE, or related field.</li>
          <li>0–2 years in avionics engineering or related field.</li>
          <li>Skilled in Altium, Eagle, MATLAB/Simulink, C/C++/Java/Python.</li>
          <li>Hands-on avionics testing/validation.</li>
          <li>Strong understanding of avionics systems, sensor tech, power budgeting.</li>
          <li>Great problem-solving, communication, and teamwork skills.</li>
        </ul>
       
      </>
    )
  },
  "mechanical-design-engineer": {
    title: "Mechanical Design Engineer",
    description: (
      <>
       <h4>Job Details</h4>
        <ul>
          <li><b>Location:</b> Valaiyappatti, Tamil Nadu (Ready to relocate)</li>
           <li><b>Experience:</b> 0–2 years</li>
          <li><b>Working Hours:</b> 9:30 AM – 6:30 PM</li>
          <li><b>Salary:</b> Negotiable (As per industry standards)</li>
          <li><b>Openings:</b> 3</li>
          <li><b>Department:</b> Research and Development</li>
          <li><b>Accommodation:</b> Provided by Company</li>
          <li><b>Job Type:</b> Full-Time</li>
        </ul>
        <h4>Key Responsibilities</h4>
        <ul>
          <li>Design mechanical components for UAVs with engineers/technicians.</li>
          <li>Use CAD (SolidWorks/AutoCAD/Fusion 360) for 3D models and technical drawings.</li>
          <li>Conduct feasibility studies, simulations, and analyses for designs.</li>
          <li>Generate engineering specifications and documentation.</li>
          <li>Review designs, solve issues, pursue process improvements.</li>
          <li>Work with suppliers on fabrication/testing of components.</li>
          <li>Support prototyping and test results implementation.</li>
        </ul>
        <h4>Key Skills and Experience Required</h4>
        <ul>
          <li>B. Tech/M. Tech in Mechanical Engineering or similar field.</li>
          <li>0–2 years of mechanical design engineering experience.</li>
          <li>Solid understanding of CAD, GD&T, materials, and regulatory standards.</li>
          <li>Strong problem-solving, teamwork, and communication skills.</li>
          <li>Three months probation, no backlogs at hiring time.</li>
        </ul>
       
      </>
    )
  },
 "embedded-systems-developer": {
  title: "Embedded Systems Developer",
  description: (
    <>
        <h4>Job Details</h4>
      <ul>
        <li><b>Location:</b> Valaiyappatti, Tamil Nadu (Ready to relocate)</li>
         <li><b>Experience:</b> 0–2 years</li>
        <li><b>Working Hours:</b> 9:30 AM – 6:30 PM</li>
        <li><b>Salary:</b> Negotiable (As per industry standards)</li>
        <li><b>Openings:</b> 2</li>
        <li><b>Department:</b> Research and Development</li>
        <li><b>Accommodation:</b> Provided by Company</li>
        <li><b>Job Type:</b> Full-Time</li>
      </ul>
      <h4>Key Responsibilities</h4>
      <ul>
        <li>Design, develop, and implement embedded systems for UAVs and robotic platforms including sensor integration, motor control, and communication protocols.</li>
        <li>Collaborate with R&D teams to prototype and test hardware-software interfaces in drone systems.</li>
        <li>Develop firmware using C/C++ or embedded Python targeting microcontrollers like STM32, Arduino, ESP32.</li>
        <li>Interface and calibrate various sensors (GPS, IMU, LIDAR, barometer) and implement filtering algorithms such as Kalman filters.</li>
        <li>Integrate communication protocols such as UART, SPI, I2C, CAN ensuring reliable data transmission.</li>
        <li>Support UAV system-level integration with flight controllers and ground stations (Pixhawk, ArduPilot, QGC).</li>
        <li>Perform unit testing and debugging using oscilloscopes, logic analyzers, and simulators.</li>
        <li>Assist in PCB assembly, quality testing, and embedded software flashing.</li>
        <li>Document system architecture, design specs, and test procedures clearly.</li>
        <li>Participate in brainstorming and experimentation for innovative UAV solutions.</li>
      </ul>
      <h4>Key Skills and Experience Required</h4>
      <ul>
        <li>B. Tech/M. Tech in Electronics, Electrical, Instrumentation, Mechatronics, or Computer Engineering.</li>
        <li>0–2 years experience in embedded system design, preferably aerospace, robotics, or IoT.</li>
        <li>Proficiency in embedded C/C++, RTOS, and microcontroller programming.</li>
        <li>PCB design tool experience (KiCad, Altium) a plus.</li>
        <li>Familiarity with UART, SPI, I2C, PWM communication protocols.</li>
        <li>Strong analytical, control systems and signal processing knowledge.</li>
        <li>Experience in UAV hardware or robotics projects advantageous.</li>
        <li>Good documentation, problem-solving, and teamwork skills.</li>
        <li>Adaptability and eagerness to learn in multidisciplinary teams.</li>
      </ul>
     
    </>
  )
},


"software-developer": {
  title: "Software Developer",
  description: (
    <>
     <h4>Job Details</h4>
      <ul>
        <li><b>Location:</b> Valaiyappatti, Tamil Nadu (Ready to relocate)</li>
         <li><b>Experience:</b> 0–2 years</li>
        <li><b>Working Hours:</b> 9:30 AM – 6:30 PM</li>
        <li><b>Salary:</b> Negotiable (As per industry standards)</li>
        <li><b>Openings:</b> 2</li>
        <li><b>Department:</b> Research and Development</li>
        <li><b>Accommodation:</b> Provided by Company</li>
        <li><b>Job Type:</b> Full-Time</li>
      </ul>
      <h4>Key Responsibilities</h4>
      <ul>
        <li>Design, develop, and maintain software for UAV systems including mission control and data processing platforms.</li>
        <li>Create web and desktop applications for UAV telemetry, monitoring, diagnostics, and ground control.</li>
        <li>Integrate software with flight controllers, embedded systems, and cloud data services.</li>
        <li>Develop/manage APIs, data dashboards, and user interfaces for stakeholders.</li>
        <li>Collaborate with hardware engineers and drone pilots to ensure smooth hardware-software integration.</li>
        <li>Optimize system performance and troubleshoot UAV flight and sensor data software issues.</li>
        <li>Maintain code quality, documentation, and version control with Git and collaboration tools.</li>
        <li>Participate in R&D for UAV autonomy, data analytics, and mission planning using AI/ML frameworks (optional).</li>
        <li>Support product lifecycle from concept to deployment with detailed documentation.</li>
      </ul>
      <h4>Key Skills and Experience Required</h4>
      <ul>
        <li>B. Tech/M. Tech in Computer Science, Software Engineering, IT, or related.</li>
        <li>0–2 years in software development preferably in aerospace, robotics, or IoT.</li>
        <li>Proficiency in Python, C++, JavaScript; React, Flask, Node.js experience a plus.</li>
        <li>Strong data structures, algorithms, and OOP knowledge.</li>
        <li>Experience with RESTful APIs, databases, and data visualization.</li>
        <li>Familiarity with Git, CI/CD, agile practices.</li>
        <li>Experience with UAV simulation or ground control software a plus.</li>
        <li>Knowledge of network protocols, real-time data streaming, cloud integration (optional).</li>
        <li>Strong problem-solving, teamwork, and passion for aerospace tech.</li>
      </ul>
     
    </>
  )
},


"cad-engineer": {
  title: "CAD Engineer",
  description: (
    <>
      <h4>Job Details</h4>
      <ul>
        <li><b>Location:</b> Valaiyappatti, Tamil Nadu (Ready to relocate)</li>
         <li><b>Experience:</b> 0–2 years</li>
        <li><b>Working Hours:</b> 9:30 AM – 6:30 PM</li>
        <li><b>Salary:</b> Negotiable (As per industry standards)</li>
        <li><b>Openings:</b> 2</li>
        <li><b>Department:</b> Research and Development</li>
        <li><b>Accommodation:</b> Provided by Company</li>
        <li><b>Job Type:</b> Full-Time</li>
      </ul>
      <h4>Key Responsibilities</h4>
      <ul>
        <li>Design/model UAV components and assemblies using SolidWorks, CATIA, AutoCAD.</li>
        <li>Develop 3D models, 2D drawings, and documentation for manufacturing and prototyping.</li>
        <li>Collaborate with R&D and production teams for design feasibility and compatibility.</li>
        <li>Conduct tolerance analysis, weight estimation, and material selection.</li>
        <li>Optimize CAD models for 3D printing, CNC machining, and composite fabrication.</li>
        <li>Support prototype testing by providing technical drawings and BOMs.</li>
        <li>Integrate electronics and mechanical components with embedded/software teams.</li>
        <li>Ensure designs comply with regulatory and internal standards.</li>
        <li>Maintain CAD data records and design iteration logs.</li>
      </ul>
      <h4>Key Skills and Experience Required</h4>
      <ul>
        <li>B. Tech/M. Tech in Mechanical or Aerospace Engineering.</li>
        <li>0–2 years CAD design experience, preferably aerospace or robotics.</li>
        <li>Proficient in SolidWorks, CATIA, AutoCAD.</li>
        <li>Strong knowledge of aerodynamics, materials science, mechanical systems.</li>
        <li>Experience producing production-ready drawings and GD&T documentation.</li>
        <li>Familiarity with FEA tools (ANSYS, SolidWorks Simulation) a plus.</li>
        <li>Strong visualization, drafting, problem-solving, and teamwork skills.</li>
      </ul>
     
    </>
  )
},


"aerodynamics-engineer": {
  title: "Aerodynamics Engineer",
  description: (
    <>
      <h4>Job Details</h4>
      <ul>
        <li><b>Location:</b> Valaiyappatti, Tamil Nadu (Ready to relocate)</li>
         <li><b>Experience:</b> 0–2 years</li>
        <li><b>Working Hours:</b> 9:30 AM – 6:30 PM</li>
        <li><b>Salary:</b> Negotiable (As per industry standards)</li>
        <li><b>Openings:</b> 2</li>
        <li><b>Department:</b> Research and Development</li>
        <li><b>Accommodation:</b> Provided by Company</li>
        <li><b>Job Type:</b> Full-Time</li>
      </ul>
      <h4>Key Responsibilities</h4>
      <ul>
        <li>Analyze and optimize UAV aerodynamic performance focusing on lift, drag, stability, and control.</li>
        <li>Conduct CFD simulations using ANSYS Fluent, OpenFOAM, or XFLR5.</li>
        <li>Collaborate with structural, propulsion, and control teams for aerodynamic integrity.</li>
        <li>Refine airfoil, wing, fuselage, and control surface designs.</li>
        <li>Conduct wind tunnel testing and validate simulation results.</li>
        <li>Perform drag reduction and performance trade-off studies.</li>
        <li>Support UAV flight testing and post-flight data analysis.</li>
        <li>Document simulation and design decisions professionally.</li>
        <li>Ensure adherence to safety, regulatory, and performance standards.</li>
      </ul>
      <h4>Key Skills and Experience Required</h4>
      <ul>
        <li>B. Tech/M. Tech in Aerospace, Mechanical, or related engineering.</li>
        <li>0–2 years experience in aerodynamic analysis or UAV design.</li>
        <li>Strong fluid dynamics, flight mechanics, and stability control knowledge.</li>
        <li>Proficiency with CFD tools such as ANSYS Fluent, OpenFOAM, XFLR5.</li>
        <li>Wind tunnel testing and drag prediction experience a plus.</li>
        <li>Ability to interpret CAD, simulation data, and technical docs.</li>
        <li>Familiar with UAV flight planning and propulsion integration.</li>
        <li>Strong analytical, communication, and teamwork skills.</li>
      </ul>
      
    </>
  )
},
"manufacturing-engineer": {
  title: "Manufacturing Engineer",
  description: (
    <>
      <h4>Job Details</h4>
      <ul>
        <li><b>Location:</b> Valaiyappatti, Tamil Nadu (Ready to relocate)</li>
        <li><b>Experience:</b> 0–2 years</li>
        <li><b>Working Hours:</b> 9:30 AM – 6:30 PM</li>
        <li><b>Salary:</b> Negotiable (As per industry standards)</li>
        <li><b>Openings:</b> 2</li>
        <li><b>Department:</b> Production & Quality</li>
        <li><b>Accommodation:</b> Provided by Company</li>
        <li><b>Job Type:</b> Full-Time</li>
      </ul>
      <h4>Key Responsibilities</h4>
      <ul>
        <li>Plan and supervise UAV manufacturing and assembly processes ensuring quality and timelines.</li>
        <li>Develop and implement manufacturing workflows and tooling for efficiency.</li>
        <li>Perform quality checks, audits, and root-cause analysis.</li>
        <li>Collaborate with R&D to ensure manufacturability and smooth prototype to production transition.</li>
        <li>Optimize workflows with Lean Manufacturing and reduce waste.</li>
        <li>Maintain and calibrate machinery and production tools.</li>
        <li>Manage procurement and inventory for production supplies.</li>
        <li>Create and maintain technical process documentation.</li>
        <li>Train and supervise technicians or interns.</li>
        <li>Support continuous improvement initiatives.</li>
      </ul>
      <h4>Key Skills and Experience Required</h4>
      <ul>
        <li>B. Tech/M. Tech in Mechanical, Aeronautical, Manufacturing or related.</li>
        <li>0–2 years aerospace production or UAV assembly experience.</li>
        <li>Hands-on knowledge of CNC, 3D printing, assembly line equipment.</li>
        <li>Familiarity with CAD and PLM systems.</li>
        <li>Strong material science and aerospace-grade materials knowledge.</li>
        <li>Quality systems knowledge (ISO 9001, AS9100, Six Sigma/Lean) a plus.</li>
        <li>Strong problem-solving and coordination skills.</li>
        <li>Ability to thrive in fast-paced, precision-driven environments.</li>
      </ul>
      
    </>
  )
},
"compliance-certification-engineer": {
  title: "Compliance & Certification Engineer",
  description: (
    <>
      <h4>Job Details</h4>
      <ul>
        <li><strong>Location:</strong> Valaiyappatti, Tamil Nadu</li>
         <li><b>Experience:</b> 0–2 years</li>
        <li><strong>Working Hours:</strong> 9:30 AM – 6:30 PM</li>
        <li><strong>Salary:</strong> Negotiable (As per industry standards)</li>
        <li><strong>Openings:</strong> 1</li>
        <li><strong>Department:</strong> Quality & Regulatory Affairs</li>
        <li><strong>Accommodation:</strong> Provided by Company</li>
        <li><strong>Job Type:</strong> Full-Time</li>
      </ul>
       <h4>Key Responsibilities</h4>
      <ul>
        <li>Ensure that all UAV products and systems adhere to DGCA, MoCA, and other national/international aerospace standards and regulations.</li>
        <li>Develop and manage certification documentation, including system safety analysis, compliance matrices, and conformance reports.</li>
        <li>Liaise with regulatory bodies and certification authorities to submit technical documents, respond to queries, and obtain type certifications or operational approvals.</li>
        <li>Monitor changes in applicable aerospace laws, airworthiness standards, and safety protocols, and ensure timely updates to internal processes.</li>
        <li>Work closely with R&D, design, and quality teams to integrate compliance requirements into product development and testing.</li>
        <li>Conduct audits, assessments, and gap analyses to ensure organizational compliance across engineering, manufacturing, and operations.</li>
        <li>Guide and support the team in maintaining traceability, documentation, and process controls required for regulatory approval.</li>
        <li>Train internal teams and stakeholders on certification procedures, regulatory updates, and best practices in UAV compliance.</li>
        <li>Manage certification timelines, documentation archives, and liaise with clients or government bodies during UAV project approvals.</li>
      </ul>







      <h4>Key Skills and Experience Required</h4>
      <ul>
        <li>B. Tech/M. Tech in Aerospace, Aeronautical, Mechanical, Electrical Engineering, or a related field.</li>
        <li>0–2 years of experience in regulatory compliance, certification, or safety engineering in aerospace or UAV-related industries.</li>
        <li>Strong knowledge of DGCA CAR standards, UAV Rules 2021, and applicable ISO, AS9100, or FAA/EASA regulations.</li>
        <li>Experience preparing and managing certification packages, such as airworthiness documentation, safety cases, and operational manuals.</li>
        <li>Excellent analytical, communication, and technical writing skills.</li>
        <li>Familiarity with safety assessment methods (FMEA, FTA, risk analysis) and documentation tools.</li>
        <li>Ability to work with cross-functional teams to embed compliance from concept to deployment.</li>
      </ul>
      
    </>
  )
},
"quality-control-engineer": {
  title: "Quality Control (QC) Engineer",
  description: (
    <>
     <h4>Job Details</h4>
      <ul>
        <li><strong>Location:</strong> Valaiyappatti, Tamil Nadu</li>
         <li><b>Experience:</b> 0–2 years</li>
        <li><strong>Working Hours:</strong> 9:30 AM – 6:30 PM</li>
        <li><strong>Salary:</strong> Negotiable (As per industry standards)</li>
        <li><strong>Openings:</strong> 2</li>
        <li><strong>Department:</strong> Production & Quality</li>
        <li><strong>Accommodation:</strong> Provided by Company</li>
        <li><strong>Job Type:</strong> Full-Time</li>
      </ul>
       <h4>Key Responsibilities</h4>
      <ul>
        <li>Perform inspection, testing, and validation of UAV components and assembled systems to ensure compliance with design and safety standards.</li>
        <li>Develop and maintain quality assurance protocols, inspection checklists, and documentation procedures for UAV production lines.</li>
        <li>Collaborate with R&D and Manufacturing teams to implement corrective actions and resolve quality-related issues.</li>
        <li>Oversee incoming material inspection, in-process checks, and final product validation as per technical drawings and specifications.</li>
        <li>Prepare and maintain detailed quality records, including inspection reports, non-conformance logs, and audit summaries.</li>
        <li>Ensure proper use of calibration tools, gauges, and measurement equipment, and maintain their periodic certification.</li>
        <li>Conduct root cause analysis (RCA) for defects or failures and assist in implementing process improvements to enhance quality and reduce rework.</li>
        <li>Participate in supplier quality audits, verification of raw materials, and alignment with quality benchmarks.</li>
        <li>Train production and assembly teams on quality standards, procedures, and proper documentation practices.</li>
        <li>Support certification and compliance teams by supplying quality assurance documentation required for regulatory audits.</li>
      </ul>
      <h4>Key Skills and Experience Required</h4>
      <ul>
        <li>B. Tech/M. Tech in Mechanical, Aeronautical, Electrical Engineering, or a related field.</li>
        <li>0–2 years of experience in quality control, inspection, or manufacturing assurance, preferably in aerospace or UAV industry.</li>
        <li>Familiarity with ISO 9001, AS9100, or equivalent quality standards and documentation practices.</li>
        <li>Hands-on experience with measuring instruments (e.g., Vernier calipers, micrometers, height gauges, etc.).</li>
        <li>Strong understanding of engineering drawings, GD&T, and manufacturing processes.</li>
        <li>Good analytical, problem-solving, and report-writing skills.</li>
        <li>Attention to detail and a passion for precision and process improvement.</li>
        <li>Ability to work collaboratively with cross-functional teams and production operators.</li>
      </ul>
      
    </>
  )
},
"internship-aerospace-robotics": {
  title: "Internship – Aerospace & Robotics",
  description: (
    <>
        <h4>Internship Structure</h4>
      <ul>
        <li><strong>Research & Development (R&D):</strong> Work alongside our R&D team to assist in the design, development, and testing of UAVs. Participate in brainstorming sessions, prototype development, and experimentation to explore innovative solutions and technologies.</li>
        <li><strong>Production:</strong> Gain practical experience in UAV manufacturing and assembly processes by working with our production team. Learn about quality control, process optimization, and production planning as you contribute to the assembly of UAV components and systems.</li>
        <li><strong>Management:</strong> Support our management team in various administrative and project-based tasks. Assist in scheduling meetings, preparing reports, and coordinating projects across different departments.</li>
      </ul>



   <h4>Job Details</h4>
      <ul>
        <li><strong>Location:</strong> Valaiyappatti, Tamil Nadu (Ready to relocate)</li>
        <li><strong>Working Hours:</strong> 9:30 AM – 6:30 PM</li>
        <li><strong>Salary:</strong> Negotiable (As per industry standards)</li>
        <li><strong>Openings:</strong> 2</li>
        <li><strong>Department:</strong> Management and R&D</li>
        <li><strong>Accommodation:</strong> Provided by Company</li>
        <li><strong>Job Type:</strong> Full-Time</li>
      </ul>




      <h4>Key Responsibilities</h4>
      <ul>
        <li>Assist in research, design, and development activities under the guidance of experienced engineers and researchers.</li>
        <li>Participate in UAV production activities, including assembly, testing, and quality control inspections.</li>
        <li>Support administrative tasks in the management department, such as scheduling meetings, preparing presentations, and organizing documents.</li>
        <li>Collaborate with team members on project-based assignments and contribute ideas to improve processes and outcomes.</li>
        <li>Attend training sessions, workshops, and team meetings to enhance your knowledge and skills in the drone/aerospace industry.</li>
        <li>Adhere to company policies, safety guidelines, and ethical standards in all internship activities.</li>
      </ul>
      <h4>Qualification</h4>
      <ul>
        <li>Recent graduate or final-year student pursuing a B. Tech/M. Tech in Aerospace Engineering, Mechanical Engineering, Electrical Engineering, Business Administration, B.E in English, Human Resources or related field.</li>
        <li>Strong academic background with a passion for technology, innovation, and the aerospace industry.</li>
        <li>Excellent communication, collaboration, and problem-solving skills.</li>
        <li>Ability to work independently and as part of a team in a fast-paced environment.</li>
        <li>Eagerness to learn and willingness to take on new challenges and responsibilities.</li>
      </ul>
      
    </>
  )
},
}; 
const API_BASE_URL = process.env.REACT_APP_API_BASE_URL;

const JobDetails = () => {
  const { jobId } = useParams();
  const navigate = useNavigate();
  const currIndex = jobs.findIndex((j) => j.id === jobId);
  const job = jobDetails[jobId];

  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    resume: null,
    experience: "",
    dob: "",
    availability: "",
    skills: "",
    queries: "",
  });
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e) => {
    setFormData((prev) => ({ ...prev, resume: e.target.files[0] }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = new FormData();
    data.append("jobId", jobId);
    data.append("fullName", formData.fullName);
    data.append("email", formData.email);
    data.append("phone", formData.phone);
    if (formData.resume) {
      data.append("resume", formData.resume);
    }
    data.append("experience", formData.experience);
    data.append("dob", formData.dob);
    data.append("availability", formData.availability);
    data.append("skills", formData.skills);
    data.append("queries", formData.queries);

    try {
  const response = await fetch(`${API_BASE_URL}/apply`, {
    method: "POST",
    body: data, // if sending FormData (for file uploads), do NOT set Content-Type manually
    // headers: { 'Content-Type': 'multipart/form-data' } // DO NOT set manually for FormData
  });

  if (!response.ok) {
    // Try parsing error message from backend JSON if available
    const errorData = await response.json().catch(() => null);
    const errorMsg = errorData?.message || "Failed to submit application. Please try again.";
    setSubmitStatus(errorMsg);
  } else {
    // Success path
    const resData = await response.json();
    setSubmitStatus(resData.message || "Application submitted successfully.");
    setFormData({
      fullName: "",
      email: "",
      phone: "",
      resume: null,
      experience: "",
      dob: "",
      availability: "",
      skills: "",
      queries: "",
    });
    setShowForm(false);
  }
} catch (error) {
  setSubmitStatus("Error submitting application.");
}
  }

  return (
    <div className="jobdetails-bg">
      <Container>
        <Row className="jobdetails-row">
          <Col md={3} xs={12} className="jobdetails-sidebar">
            <ListGroup variant="flush" className="jobdetails-list">
              {jobs.map((jobItem, idx) => (
                <ListGroup.Item
                  key={jobItem.id}
                  action
                  active={currIndex === idx}
                  onClick={() => navigate(`/careers/${jobItem.id}`)}
                  className={`fw-semibold jobdetails-listitem${currIndex === idx ? " active" : ""}`}
                  style={{ cursor: "pointer" }}
                >
                  {jobItem.title}
                </ListGroup.Item>
              ))}
            </ListGroup>
          </Col>
          <Col md={9} xs={12} className="jobdetails-content">
            {job ? (
              <Card className="jobdetails-card">
                <Card.Body>
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                  >
                    <h2 className="fw-bold jobdetails-title">{job.title}</h2>
                    <hr className="jobdetails-hr" />
                    <div className="jobdetails-desc">{job.description}</div>

                    {!showForm ? (
                      <div className="d-flex justify-content-center mt-4">
                        <Button
                          className="apply-button"
                          variant="primary"
                          size="lg"
                          onClick={() => setShowForm(true)}
                        >
                          Apply for this Position
                        </Button>
                      </div>
                    ) : (
                      <form onSubmit={handleSubmit} className="mt-4">
                        <div className="mb-3">
                          <label htmlFor="fullName" className="form-label">
                            Full Name
                          </label>
                          <input
                            type="text"
                            className="form-control"
                            id="fullName"
                            name="fullName"
                            value={formData.fullName}
                            onChange={handleInputChange}
                            required
                          />
                        </div>
                        <div className="mb-3">
                          <label htmlFor="email" className="form-label">
                            Email
                          </label>
                          <input
                            type="email"
                            className="form-control"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleInputChange}
                            required
                          />
                        </div>
                        <div className="mb-3">
                          <label htmlFor="phone" className="form-label">
                            Phone Number
                          </label>
                          <input
                            type="tel"
                            className="form-control"
                            id="phone"
                            name="phone"
                            value={formData.phone}
                            onChange={handleInputChange}
                            required
                          />
                        </div>
                        <div className="mb-3">
                          <label htmlFor="resume" className="form-label">
                            Upload Resume (PDF or DOC)
                          </label>
                          <input
                            type="file"
                            className="form-control"
                            id="resume"
                            name="resume"
                            accept=".pdf,.doc,.docx"
                            onChange={handleFileChange}
                            required
                          />
                          <label htmlFor="position" className="form-label">
                            Applying for the Position
                          </label>
                          <input
                            type="text"
                            className="form-control"
                            id="position"
                            name="position"
                            value={job?.title || ""}
                            readOnly
                          />
                        </div>
                        <div className="mb-3">
                          <label htmlFor="experience" className="form-label">
                            Years of Experience (if any)
                          </label>
                          <input
                            type="number"
                            className="form-control"
                            id="experience"
                            name="experience"
                            min="0"
                            value={formData.experience || ""}
                            onChange={handleInputChange}
                          />
                        </div>
                        <div className="mb-3">
                          <label htmlFor="dob" className="form-label">
                            Date of Birth
                          </label>
                          <input
                            type="date"
                            className="form-control"
                            id="dob"
                            name="dob"
                            value={formData.dob || ""}
                            onChange={handleInputChange}
                          />
                        </div>
                        <div className="mb-3">
                          <label htmlFor="availability" className="form-label">
                            Availability to Join
                          </label>
                          <input
                            type="date"
                            className="form-control"
                            id="availability"
                            name="availability"
                            value={formData.availability || ""}
                            onChange={handleInputChange}
                          />
                        </div>
                        <div className="mb-3">
                          <label htmlFor="skills" className="form-label">
                            Skills
                          </label>
                          <textarea
                            className="form-control"
                            id="skills"
                            name="skills"
                            rows="3"
                            value={formData.skills || ""}
                            onChange={handleInputChange}
                          />
                        </div>
                        <div className="mb-3">
                          <label htmlFor="queries" className="form-label">
                            Any Queries
                          </label>
                          <textarea
                            className="form-control"
                            id="queries"
                            name="queries"
                            rows="3"
                            value={formData.queries || ""}
                            onChange={handleInputChange}
                          />
                        </div>
                        <div className="d-flex justify-content-between">
                          <Button variant="secondary" onClick={() => setShowForm(false)}>
                            Cancel
                          </Button>
                          <Button type="submit" variant="success">
                            Submit Application
                          </Button>
                        </div>
                      </form>
                    )}

                    {submitStatus && (
                      <p className="mt-3 text-center">
                        <small>{submitStatus}</small>
                      </p>
                    )}
                  </motion.div>
                </Card.Body>
              </Card>
            ) : (
              <Card className="jobdetails-card">
                <Card.Body>
                  <h4 className="text-muted">No job details available.</h4>
                </Card.Body>
              </Card>
            )}
          </Col>
        </Row>
      </Container>
      <Footer />
    </div>
  );
};

export default JobDetails;
