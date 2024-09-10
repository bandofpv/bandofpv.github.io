---
sidebar_position: 1
sidebar_label: Projects
---
import CardSection from '@site/src/components/CardSection';
import Card from '@site/src/components/Card';

# Projects

<CardSection id="projects">
  <Card
    title="Robots"
    icon={<IIcon icon="mdi:robot-industrial-outline" />}
    to="/docs/projects/robots/mavrospy"
    description="Drones, robotic arms, computer vision, and more"
  />
  <Card
    title="Code"
    icon={<IIcon icon="ant-design:code-filled" />}
    to="/docs/projects/code/website"
    description="Computer programming projects"
  />
  <Card
    title="School"
    icon={<IIcon icon="mdi:school" />}
    to="/docs/projects/school/ping-pong"
    description="Final projects from the United States Naval Academy"
  />
  <Card
    title="Race Quads"
    icon={<IIcon icon="carbon:drone" />}
    to="/docs/projects/race-quads/qav-r"
    description="Quadcopters for both racing and freestyle flight"
  />
  <Card
    title="RC Airplanes"
    icon={<IIcon icon="fluent-emoji-high-contrast:small-airplane" />}
    to="/docs/projects/rc-airplanes/lockheed-vega"
    description="Scratch built foam remote controlled airplanes"
  />
  </CardSection>
