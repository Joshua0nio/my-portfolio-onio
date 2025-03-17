import { Typography, Slider, Row, Col, Card } from "antd";
const { Title } = Typography;

const skills = {
  "Programming Languages": [
    { name: "JavaScript", rating: 7 },
    { name: "TypeScript", rating: 9 },
    { name: "Python", rating: 6 },
    { name: "Visual Basic", rating: 5 },
  ],
  "Web Technologies": [
    { name: "HTML", rating: 8 },
    { name: "CSS", rating: 7 },
    { name: "Bootstrap", rating: 7 },
  ],
  "Backend Technologies": [
    { name: "Node.js", rating: 9 },
    { name: "Express.js", rating: 8 },
    { name: "Laravel", rating: 6 },
  ],
  "Frameworks & Libraries": [
    { name: "React.js", rating: 7 },
    { name: "Next.js", rating: 8 },
    { name: "Ant Design", rating: 6 },
    { name: "Refine", rating: 6 },
  ],
  "Databases": [
    { name: "MongoDB", rating: 8 },
    { name: "MySQL", rating: 8 },
    { name: "SQL", rating: 7 },
  ],
  "Version Control": [
    { name: "Git", rating: 8 },
  ],
  "Serverless": [
    { name: "Azure Functions (Node.js, TypeScript)", rating: 9 },
    { name: "React Native", rating: 6 },
  ],
  "Cloud Services": [
    { name: "AWS (Deployment & Security)", rating: 6 },
    { name: "Azure", rating: 6 },
  ],
  "DevOps": [
    { name: "CI/CD", rating: 6 },
    { name: "Docker (Containerization)", rating: 6 },
  ],
  "Networking": [
    { name: "Cisco Networking", rating: 8 },
  ],
  "Quality Assurance": [
    { name: "Software Quality Assurance", rating: 6 },
  ],
};

const Skills = () => {
  return (
    <section style={{ marginBottom: "40px" }}>
      <Title level={2} style={{ color: '#1890ff', textAlign: 'center' }}>Skills</Title>
      <Row gutter={16}>
        {Object.entries(skills).map(([category, skillsList]) => (
          <Card
            key={category}
            title={<Title level={4}>{category}</Title>}
            style={{ marginBottom: "20px", width: "50%" }}
          >
            {skillsList.map(skill => (
              <Row key={skill.name} style={{ marginBottom: "10px" }}>
                <Col span={12}>
                  <Title level={5} style={{ margin: 0 }}>
                    {skill.name}
                  </Title>
                </Col>
                <Col span={12}>
                  <Slider
                    disabled
                    value={skill.rating}
                    min={1}
                    max={10}
                    style={{ margin: "auto" }}
                  />
                </Col>
              </Row>
            ))}
          </Card>
        ))}
      </Row>
    </section>
  );
};

export default Skills;
