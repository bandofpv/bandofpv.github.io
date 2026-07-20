import React from 'react';
import Layout from '@theme/Layout';

const papers = [
//  {
//    title: 'Adaptive Nullspace-Model Parameter Identification of Multirotor Aircraft: Theory and Experimental Evaluation',
//    authors: 'Allan Elsberry, Louis Whitcomb, Levi DeVries, Andrew Bernas',
//    venue: 'IEEE International Conference on Robotics and Automation (ICRA), 2026',
//    link: 'https://example.com/paper-link',
//    abstract: 'This paper reports a Nullspace-based Adaptive Identification (NSAID) algorithm for simultaneously estimating plant model parameters and actuator model parameters for a multirotor aircraft with a 6-degree of freedom (DOF) second- order nonlinear dynamical model. A stability analysis is reported showing stability of all signals, and convergence of the parameter estimates to the set of true parameters under a Persistence of Excitation (PE) condition. Simulation and the first-reported ex- perimental results corroborate this analysis. Identifying accurate model parameters is essential for simulation, control, and fault detection and isolation. However, multirotor parameters such as mass, moments of inertia, and propeller thrust and drag coefficients may be unknown a priori and often change based on mission configuration or as components degrade. Unlike most existing model parameter identification methods, the proposed NSAID algorithm only requires vehicle attitude, velocity, and rotor speeds and does not require vehicle inertial acceleration measurements, which are corrupted by gravity and significant noise due to high-frequency vibrations inherent to multirotor systems. NSAID can be implemented in real-time with modest onboard computational resources.'
//  },
  {
    title: 'Feature 3D Gaussian Splatting for UAV-to-Ship Pose Estimation in GNSS-Denied Environments',
    authors: 'Andrew Bernas, John McConnell, John Seargeant, and Levi DeVries',
    venue: '2026 International Conference on Unmanned Aircraft Systems (ICUAS)',
    link: 'https://doi.org/10.1109/ICUAS69441.2026.11598627',
    abstract: "Autonomous recovery of Unmanned Aerial Vehicles (UAVs) in maritime environments is challenged by dynamic ship motion, texture-poor surroundings, and vulnerabilities inherent to Global Navigation Satellite Systems (GNSS). To enable robust UAV state estimation relative to a naval vessel in GNSS-denied environments, this paper presents a novel vision-based pose estimation framework leveraging Feature 3D Gaussian Splatting (3DGS). Adopting STDLoc's sparse pose estimation framework, our approach bypasses computationally expensive dense rendering in favor of direct sparse 2D-3D matching. We extract 2D features from live monocular imagery using SuperPoint and match them against a compact set of view-consistent 3D Gaussian landmarks distilled via a Matching-Oriented Sampling strategy. The 6-DoF camera pose is then robustly recovered using a Perspective-n-Point (PnP) solver augmented with Locally Optimized RANSAC (LO-RANSAC). Experimental validation on a 1/24-scale naval Yard Patrol (YP) craft demonstrates centimeter-level translational accuracy (1.66 cm lateral, 2.28 cm vertical mean absolute errors) and near-degree rotational accuracy (0.90° roll, 1.17° yaw). This method eliminates the need for physical fiducial markers or precise CAD models, offering a scalable and highly accurate relative localization solution for autonomous maritime operations."
  },
  {
    title: 'Relative Pose Estimation of an Unmanned Aerial System to a Naval Vessel Using Gaussian Splatting',
    authors: 'Andrew Bernas, Nolan Jess, Levi DeVries, John McConnell, and Donald H. Costello.',
    venue: 'AIAA SciTech 2026 Forum',
    link: 'https://doi.org/10.2514/6.2026-1123',
    abstract: "Precise relative pose estimation between Unmanned Aerial Vehicles (UAVs) and naval vessels is critical for autonomous operations, particularly in GPS-degraded environments where jamming or spoofing risks catastrophic failure. Addressing the limitations of current vision-based methods that often rely on physical markers, active lighting, or labor-intensive CAD annotations, this work presents a novel maritime localization approach using 3D Gaussian Splatting (3DGS) to estimate 6-DoF camera pose directly from a learned scene representation.  Utilizing the 6DGS framework, the pipeline inverts the rendering process via Radiant Ellicell ray- casting and a learned attention mechanism to solve for pose in a one-shot, closed-form manner without requiring an initial guess. Experimental validation performed with a quadcopter and a 1/10th scale Yard Patrol (YP) craft demonstrates that the system achieves high computational efficiency with an average inference latency of 0.012s (86Hz) and robust sub-meter accuracy in lateral and vertical translation, offering a scalable, real-time alternative for dynamic maritime environments."
  },
  //Add more papers here
];

const AbstractText = ({ abstract, title }) => {
  const [isExpanded, setIsExpanded] = React.useState(false);

  if (!abstract) return null;
  
  const previewLength = Math.max(200, 600 - (title ? title.length * 3 : 0));
  const isLong = abstract.length > previewLength;

  return (
    <div className="margin-top--sm">
      <p className="text--justify" style={{fontSize: '0.9rem', marginBottom: '0'}}>
        {isExpanded || !isLong ? abstract : `${abstract.substring(0, previewLength)}...`}
        {isLong && (
          <span
            onClick={() => setIsExpanded(!isExpanded)}
            style={{
              cursor: 'pointer',
              fontWeight: 'bold',
              color: 'var(--ifm-color-primary)',
              marginLeft: '5px'
            }}
          >
            {isExpanded ? ' Show Less' : ' Read More'}
          </span>
        )}
      </p>
    </div>
  );
};

function Research() {
  return (
    <Layout title="Research" description="My published research papers">
      <div className="container margin-top--lg padding-top--md margin-bottom--md">
        <div className="text--center margin-bottom--lg">
          <h1 className="hero__title">Published Research</h1>
          <p className="hero__subtitle">My research contributions to robotics and autonomous systems.</p>
        </div>
        
        <div className="row">
          {papers.map((paper, idx) => (
            <div key={idx} className="col col--6 margin-bottom--lg" style={{display: 'flex'}}>
              <div className="card shadow--md" style={{width: '100%', display: 'flex', flexDirection: 'column'}}>
                <div className="card__header" style={{paddingBottom: '0.25rem'}}>
                  <div className="avatar">
                    <div className="avatar__intro">
                      <div className="avatar__name">
                        <h3 className="margin-bottom--xs">{paper.title}</h3>
                      </div>
                      <small className="avatar__subtitle">
                        <span 
                          className="badge badge--secondary margin-right--sm" 
                          style={{paddingTop: '2px', paddingBottom: '2px'}}
                        >
                          {paper.venue}
                        </span>
                      </small>
                    </div>
                  </div>
                </div>
                <div className="card__body" style={{paddingTop: '0.25rem', paddingBottom: '0.25rem', flexGrow: 1}}>
                  <div className="margin-bottom--sm">
                    <span className="text--italic">
                      {paper.authors.split('Andrew Bernas').map((part, i, arr) => (
                        <React.Fragment key={i}>
                          {part}
                          {i < arr.length - 1 && <strong style={{color: 'var(--ifm-font-color-base)'}}>Andrew Bernas</strong>}
                        </React.Fragment>
                      ))}
                    </span>
                  </div>
                  <AbstractText abstract={paper.abstract} title={paper.title} />
                </div>
                <div className="card__footer">
                  <div className="button-group button-group--block">
                    <a 
                      href={paper.link} 
                      className="button button--primary button--outline" 
                      target="_blank" 
                      rel="noopener noreferrer"
                    >
                      View Publication
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
}

export default Research;
