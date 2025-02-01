function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}

const modal = document.getElementById("modal");
const span = document.getElementsByClassName("close")[0];

function showProjectDetails(projectId) {
  const projectData = {
    experience1: {
      title: "Research Assistant at ROAHM Lab",
      description: "Safe motion planning is a critical challenge in robotics that involves generating collision-free trajectories while ensuring robots maintain safety constraints during execution. This project addresses this through polynomial trajectories to represent robot motions, which provide continuous derivatives for smooth motion and analytical computation of velocity and acceleration profiles. The system computes overapproximations of the robot's reachable set using Spherical Forward Occupancy (SFO) and Joint Reachable Sets. The SFO approximates robot links with collections of spheres to provide conservative bounds on occupied workspace volume, while Joint Reachable Sets capture all possible joint configurations over trajectory segments. For trajectory representation, we use polynomial zonotopes due to their beneficial properties in representing reachable sets. These allow for efficient computation of reachable volumes while maintaining safety guarantees through analytical bounds. The framework employs multiple specialized neural networks to efficiently predict key parameters. For the Digit humanoid robot, fully-connected networks with 1024 width and 18-28 hidden layers were trained to predict joint centers, radii, and gradients. The networks use GELU activation functions with dropout and batch normalization1. For bimanual manipulation tasks, smaller networks with 5-12 hidden layers proved sufficient due to simpler kinematics. The system achieved mean center prediction errors of 0.94 cm with maximum errors of 2.80 cm, while radius predictions showed mean errors of 0.18 cm. Runtime comparisons between CROWS (Conformalized Reachable sets for Obstacle avoidance With Spheres) and baseline SPARROWS demonstrated significant improvements. For bimanual manipulation, CROWS-II achieved mean constraint evaluation times of 3.9±0.4 ms with 10 obstacles and 4.8±0.3 ms with 20 obstacles. The mean planning times were 0.16±0.20 s and 0.23±0.10 s respectively1. The system was implemented on hardware featuring an Intel i7-8700K CPU and NVIDIA RTX A6000 GPU, using PyTorch for neural network implementation and IPOPT for trajectory optimization. The simulation environment utilized Digit v2 Humanoid for locomotion planning and Kinova Gen3 7-DOF manipulators for bimanual task. The report contains progress until Dec 2024 and is being built on top of code attached below.",
      images: ["./assets/detail1.png", "./assets/detail2.png"],
      documentType: "report",
      report: "./assets/reports/roahm_report.pdf",
      codeRepo: "https://github.com/roahmlab/crows"
  },
  experience2: {
      title: "Fleet Managment System - Mobile Robotics Intern",
      description: "The Fleet Management System (FMS) is a software solution designed to coordinate and control automated vehicles and robots within warehouse environments. During my internship, I made significant contributions to enhance its capabilities and efficiency through various software developments and optimizations (including improvements to global planner, ideation for more robust behaviour trees and innovation for task generator and allocator modules). My work began with addressing core functionality challenges, including the development of a multi-edge incorporation algorithm that enabled simultaneous addition of multiple edges in map generation. This enhancement significantly improved the map creation process, allowing for more complex and accurate representations of warehouse environments. The algorithm implemented robust validation mechanisms and efficient graph traversal techniques to ensure data integrity and optimal performance. I also implemented critical improvements to the FMS replayer and map exportation functionalities. This included fixing timestamp display issues in the replayer and ensuring accurate preservation of hospital dock directions during map exports. The development extended to creating traffic light switching mechanisms that dynamically adapted to clutter within the simulated environment, incorporating PID-based control logic for enhanced responsiveness and stability. A significant contribution was the implementation of the show path functionality, which enables users to visualize and interact with planned routes directly within the map interface. This feature includes path visualization algorithms and edge weight tuning capabilities, allowing users to optimize traffic flow and efficiency without running full-scale simulations. The visualization was enhanced through the introduction of edge weight-based coloration and legends, making it easier to identify and understand weight modifications across the map. To improve data management and analysis capabilities, I developed several utilities including a database utility for MongoDB integration, a scene utility for log extraction, and a data sanitizer with integrated log archiving functionality. These tools streamlined data handling processes and enabled efficient storage management while preserving historical data for analysis. The system's usability was enhanced through the implementation of comprehensive keyboard shortcuts for map operations and context menu capabilities. These features significantly reduced the time required for common tasks and improved overall user productivity. Additionally, I developed a robust message dialog pipeline and extraction functionality with optimized API calls and progress tracking, providing users with real-time feedback during data processing operations. Throughout the development process, I maintained a strong focus on code quality, performance optimization, and user experience. Each feature underwent rigorous testing and validation to ensure reliability and efficiency. The implemented solutions have contributed to significant improvements in the FMS's capabilities, making it more robust, user-friendly, and efficient in managing warehouse automation operations. These enhancements collectively resulted in measurable improvements in system performance, with some operations showing up to 20% reduction in execution time. The optimizations have enabled more efficient warehouse operations, better resource utilization, and enhanced decision-making capabilities for fleet management operators.",
      images: ["./assets/addverb2.png", "./assets/addverb2.jpg"],
      documentType: "both",
      report: "./assets/reports/addverb_report.pdf",
      certificatePath: "./assets/certificates/addverb.pdf",
  },
  experience3: {
      title: "Backend Engineer at Data Systems",
      description: "Optimized database performance and developed RESTful APIs. Reduced query response time by 50%.",
      images: ["./assets/detail5.png", "./assets/detail6.png"]
  },
  experience4: {
      title: "Team Captain - Rover",
      description: "The Thapar rover project emerged from a vision to revitalize robotics culture at Thapar University and create meaningful opportunities for cross-disciplinary collaboration. As the project initiator and leader, I recognized the need to increase student participation and make the robotics society more active. After extensive research of existing rover designs, I developed a comprehensive understanding of core subsystems and requirements to guide the project's development. Despite initial skepticism about the project's feasibility given resource and time constraints, I persisted in building a strong foundation through careful planning and team development. I assembled and mentored a dedicated interdisciplinary team, providing technical guidance across mechanical design, electronics, software development, and communications systems. My approach involved first studying each domain in depth myself, then effectively dividing tasks and guiding team members in their respective areas of responsibility. The rover development process involved several complex technical challenges. We designed and implemented a modular 6-wheel rocker-bogie suspension system for optimal terrain handling, integrated a 5-DOF robotic arm with custom end effectors for sample collection, developed autonomous navigation capabilities using sensor fusion and computer vision, and implemented soil analysis subsystems for scientific exploration tasks. Throughout the development, I maintained a hands-on leadership approach, working closely with team members to overcome technical obstacles while ensuring alignment with competition requirements. The project management aspects were equally challenging. I successfully secured substantial funding through university grants and industry sponsorships, established clear technical requirements and project milestones, and coordinated cross-functional teams spanning mechanical, electrical, and software domains. My role involved managing procurement, testing, and integration of rover subsystems while maintaining focus on project timelines and deliverables. The team's efforts culminated in strong performance at the International Rover Challenge 2023, where we achieved 6th place overall ranking among global competitors and received the prestigious Emerging Team of the Year award recognizing our technical innovation. The rover successfully completed challenging mission tasks including autonomous navigation, sample collection, and soil analysis, demonstrating the effectiveness of our design and implementation approach. This project not only delivered technical achievements but also reinvigorated student interest in robotics at Thapar University, establishing a foundation for future innovation. The experience demonstrated how effective leadership, careful planning, and persistent execution can overcome resource constraints to achieve ambitious goals in robotics development. The project's success has created a lasting impact and inspired future generations of students to pursue similar challenging endeavors. The rover legacy has been succefully taken forward with the team participating for the third time in the competition.",
      images: ["./assets/rover1.png", "./assets/rover2.jpg"]
  },
  experience5: {
      title: "Team Lead - Food Delivery Robot",
      description: "The vision for developing an affordable autonomous food delivery robot emerged from recognizing the need for cost-effective automation solutions in campus environments. As the project lead, I spearheaded the development of a complete autonomous navigation stack from scratch, focusing on achieving high performance while maintaining affordability through strategic sensor selection and software optimization. The system architecture centered around fusing data from a 2D LiDAR and RGBD camera, carefully chosen for their complementary strengths and cost-effectiveness. I developed custom ROS packages to handle sensor fusion, achieving 90% mapping accuracy even in feature-sparse environments where traditional single-sensor approaches struggle. The fusion pipeline required extensive calibration and testing to optimize the integration of point cloud data from both sensors, involving careful tuning of transformation parameters and filtering algorithms. A significant innovation was the implementation of a modified SLAM system that leveraged the fused sensor data. By integrating point clouds from multiple sensors and implementing custom odometry algorithms, the system achieved a 20% improvement in localization accuracy and 30% better odometry performance compared to single-sensor approaches. This required developing sophisticated point cloud registration and loop closure detection algorithms to maintain consistency across long trajectories. For navigation, I designed and implemented a hybrid planning system combining a modified A* global planner with a time-elastic band (TEB) local planner. The TEB planner was specifically adapted to handle dynamic obstacles, incorporating real-time sensor data to adjust trajectories on the fly. This resulted in a 95% success rate in obstacle avoidance at speeds up to 1.0 m/s, even in crowded environments. The planner optimization involved extensive parameter tuning and real-world testing to balance path smoothness, safety margins, and computational efficiency. The development process involved rigorous testing across various scenarios, including narrow corridors, open spaces, and dynamic environments with moving obstacles. I established comprehensive testing protocols and metrics to evaluate system performance, iteratively refining algorithms based on quantitative results. The final system demonstrated reliable autonomous navigation while maintaining cost-effectiveness through efficient use of affordable sensors and optimized software architecture. Throughout the project, I managed task allocation among team members, ensuring efficient development cycles and integration of various subsystems. My role extended beyond technical development to include documentation, performance analysis, and system optimization, creating a robust foundation for future enhancements and scalability.",
      images: ["./assets/capstone1.png", "./assets/capstone2.jpg"],
      documentType: "both",
      report: "./assets/reports/capstone.pdf",
      certificatePath: "./assets/certificates/capstone.pdf",
  },
  experience6: {
      title: "Reinforcement Learning Research Intern",
      description: "During my research internship, I developed and implemented a mapless navigation framework using model-free reinforcement learning algorithms to enable autonomous robot navigation in unknown environments. The project focused on comparing and optimizing different RL approaches while bridging the sim-to-real gap. I began by implementing and evaluating multiple reinforcement learning algorithms including Q-Learning, SARSA, and Deep Q-Networks (DQN). Through extensive experimentation, I developed a novel reward function design that balanced exploration and exploitation while incorporating safety constraints. The reward structure was carefully tuned to encourage efficient path planning while heavily penalizing collisions. For the perception system, I discretized the continuous LiDAR scan data into manageable state spaces and developed an action space comprising linear and angular velocity commands. This discretization approach reduced the state-action space complexity while maintaining sufficient resolution for effective navigation. The system used a 52-dimensional state space from LiDAR readings combined with goal position information. The training pipeline was implemented in ROS and Gazebo, leveraging parallel training across multiple simulation instances to accelerate learning. Through optimization of hyperparameters and training strategies, I achieved a 30% reduction in training time compared to baseline implementations. The trained policies were then successfully transferred to real robots with minimal performance degradation. A key achievement was demonstrating decentralized multi-robot navigation with four autonomous robots operating simultaneously. The system achieved impressive results with: 98% success rate over 20 trials, Collision-free navigation across 45m trajectories, Real-time adaptation to dynamic obstacles, Smooth velocity profiles and natural motion patterns. The project showcased how carefully designed reinforcement learning approaches can enable robust autonomous navigation without requiring prior maps. The successful sim-to-real transfer and multi-robot demonstrations highlighted the practical viability of learning-based methods for real-world robotics applications.",
      images: ["./assets/iitk1.png", "./assets/iitk2.png"],
      documentType: "certificate",
      certificatePath: "./assets/certificates/iitk.pdf",
      codeRepo: ""
  },
  experience7: {
      title: "Co-Founder, CEO",
      description: "Recognizing a critical gap in STEM education across India, particularly in robotics, I co-founded an educational technology startup to address the declining participation in technical fields. The core challenge stemmed from fragmented learning resources and prohibitively expensive physical robotics kits, which created significant barriers for students interested in pursuing robotics education. Our solution centered on developing comprehensive, affordable learning kits integrated with structured online courses. The flagship product, Wheelo 1.0: Introduction to Mobile Robotics, was designed to provide a foundational understanding of robot kinematics through a carefully curated combination of theoretical concepts and hands-on applications. The kit includes essential components for building mobile robots while maintaining cost-effectiveness through strategic component selection and optimized manufacturing processes. The accompanying self-paced online course was structured to break down complex robotics concepts into digestible modules, featuring detailed code explanations, practical examples, and comprehensive practice sheets. This approach ensures students develop both theoretical understanding and practical implementation skills. The course materials were developed with input from experienced educators and industry professionals, ensuring content quality and relevance. The startup's impact was quickly recognized, earning Startup India Recognition (DIPP138383) and receiving positive feedback from faculty members at Thapar Institute of Engineering and Technology. The accolades particularly highlighted the accessibility of our course materials and the effectiveness of our teaching methodology in enhancing student learning outcomes. To scale our impact, I established a dedicated team focused on product development, custom project services, and marketing initiatives. The team worked collaboratively to expand our product range while maintaining our core mission of making robotics education accessible and engaging. This venture represented a significant step toward democratizing robotics education in India, providing students with the resources and support needed to pursue careers in robotics and automation. By bridging the theory-practice gap through affordable, high-quality learning solutions, we contributed to building a stronger foundation for STEM education in India.",
      images: ["./assets/botted1.jpg", "./assets/botted2.png"]
  },
  experience8: {
      title: "Overall Student Coordinator",
      description: "Starting as a member of the robotics society, I quickly recognized the need to revitalize student engagement and technical innovation within the organization. Through progressive roles from Joint Secretary to Team Captain and ultimately Overall Student Coordinator, I implemented a comprehensive strategy to transform the society's impact and reach. As Joint Secretary, I initiated foundational changes by organizing introductory workshops on basic robotics concepts and hands-on sessions with Arduino and sensors. These workshops attracted newcomers and helped identify passionate students interested in pursuing robotics projects. Building on this momentum, I developed structured learning paths covering fundamental to advanced topics in robotics. Upon becoming Team Captain, I expanded the society's scope by introducing specialized tracks in ROS, Computer Vision, and Control Systems. I personally conducted over 45 technical workshops, ensuring hands-on experience with real robots and simulation environments. The workshop series covered diverse topics from wheeled robotics and manipulator arms to drone technology, providing students with comprehensive exposure to different robotics domains. As Overall Student Coordinator, I implemented several key initiatives: Established a mentorship program pairing experienced members with newcomers, created project teams focused on different robotics applications, secured additional funding through proposals and competitions, expanded the society's inventory of development boards, sensors, and robot platforms, organized inter-college robotics competitions and technical symposiums. These efforts resulted in remarkable growth, expanding the active membership from around 50 to over 150 students. The society saw a 70% increase in overall participation across events and projects. More importantly, the quality of technical projects improved significantly, with teams regularly participating in national and international competitions. The transformation from a relatively inactive club to a thriving technical society demonstrated the impact of structured leadership and systematic capacity building. By creating multiple avenues for learning and hands-on experience while fostering a collaborative environment, we successfully established a sustainable ecosystem for robotics innovation and learning within the college.",
      images: ["./assets/osc1.JPG", "./assets/osc3.jpeg"],
      documentType: "certificate",
      certificatePath: "./assets/certificates/mars.pdf"
  },
    project1: {
        title: "Software Developer at Tech Corp",
        images: ["./assets/botted1.jpg", "./assets/botted2.png"]
    },
    project2: {
        title: "Frontend Developer at Web Solutions",
        description: "Developed responsive web applications using React and Vue.js. Improved user experience and reduced load times by 60%.",
        images: ["./assets/detail3.png", "./assets/detail4.png"]
    },
    project3: {
        title: "Backend Engineer at Data Systems",
        description: "Optimized database performance and developed RESTful APIs. Reduced query response time by 50%.",
        images: ["./assets/detail5.png", "./assets/detail6.png"]
    },
    project4: {
        title: "ML Engineer at AI Solutions",
        description: "Implemented machine learning models for predictive analytics. Achieved 95% accuracy in prediction models.",
        images: ["./assets/detail7.png", "./assets/detail8.png"]
    },
    project5: {
        title: "DevOps Engineer at Cloud Tech",
        description: "Managed CI/CD pipelines and cloud infrastructure. Reduced deployment time by 70%.",
        images: ["./assets/detail9.png", "./assets/detail10.png"]
    },
    project6: {
        title: "System Architect at Tech Solutions",
        description: "Designed scalable system architectures for enterprise applications. Improved system reliability by 99.9%.",
        images: ["./assets/detail11.png", "./assets/detail12.png"]
    },
    project7: {
        title: "Security Engineer at Cyber Security",
        description: "Implemented security protocols and conducted security audits. Prevented multiple potential security breaches.",
        images: ["./assets/detail13.png", "./assets/detail14.png"]
    },
    project8: {
        title: "QA Engineer at Quality Tech",
        description: "Led quality assurance processes and automated testing. Reduced bug detection time by 80%.",
        images: ["./assets/detail15.png", "./assets/detail16.png"]
    }
};

  const data = projectData[projectId];
  
  document.getElementById("modal-title").textContent = data.title;
  document.getElementById("modal-description").textContent = data.description;
  document.getElementById("modal-image-1").src = data.images[0];
  document.getElementById("modal-image-2").src = data.images[1];
  const documentLinks = document.querySelector('.document-links');
  documentLinks.innerHTML = '';
  if (data.documentType === "report") {
    documentLinks.innerHTML = `
      <button class="btn btn-color-2" onclick="window.open('${data.report}')">
        Report
      </button>
      <button class="btn btn-color-2" onclick="window.open('${data.codeRepo}')">
        Code
      </button>
    `;
  } else if (data.documentType === "certificate") {
    documentLinks.innerHTML = `
      <button class="btn btn-color-2" onclick="window.open('${data.certificatePath}')">
        Certificate
      </button>
      
    `;
  } else if (data.documentType === "both") {
    documentLinks.innerHTML = `
      <button class="btn btn-color-2" onclick="window.open('${data.report}')">
        Report
      </button>
      <button class="btn btn-color-2" onclick="window.open('${data.certificatePath}')">
        Certificate
      </button>
    `;
  }
    
  modal.style.display = "block";
}

// Close modal when clicking (X)
span.onclick = function() {
  modal.style.display = "none";
}

// Close modal when clicking outside
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

// Close modal with Escape key
document.addEventListener("keydown", function(event) {
  if (event.key === "Escape" && modal.style.display === "block") {
    modal.style.display = "none";
  }
})[3];
