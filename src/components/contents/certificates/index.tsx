import { Typography, Card, Col, Row } from "antd";
const { Title, Paragraph } = Typography;

const certificates = [
  {
    title: "AWS Academy Graduate - AWS Academy Cloud Foundations",
    issuer: "AWS Academy",
    year: "2023",
    description: "Certification in foundational cloud knowledge and AWS services.",
  },
  {
    title: "CompTIA ITF+",
    issuer: "CompTIA",
    year: "2023",
    description: "Certification in fundamental IT skills and knowledge.",
  },
  {
    title: "Marketing Me Live: Building a Successful Tech Career",
    issuer: "José Rizal University",
    year: "2023",
    description: "Course focused on building a successful career in the tech industry.",
  },
  {
    title: "Software Development and Life as a Software Quality Assurance Engineer",
    issuer: "José Rizal University",
    year: "2023",
    description: "Course covering software development practices and quality assurance.",
  },
  // Add more certificates here if needed
];

const Certificates = () => {
  return (
    <section style={{ marginBottom: "40px" }}>
      <Title level={2} style={{ color: '#1890ff', textAlign: 'center' }}>Certificates</Title>

      <Row gutter={16}>
        {certificates.map(cert => (
          <Col xs={24} sm={12} md={8} key={cert.title}>
            <Card
              title={cert.title}
              bordered={false}
              style={{
                marginBottom: "16px",
                borderRadius: "10px",
                boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
                background: "#fff",
              }}
            >
              <Paragraph style={{ margin: '8px 0', fontSize: '16px', fontWeight: 'bold' }}>
                {cert.issuer} | <span style={{ fontWeight: 'normal' }}>{cert.year}</span>
              </Paragraph>
              <Paragraph style={{ fontSize: '16px', color: '#555' }}>
                {cert.description}
              </Paragraph>
            </Card>
          </Col>
        ))}
      </Row>
    </section>
  );
};

export default Certificates;
