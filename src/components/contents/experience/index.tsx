import { Typography, List, Card } from "antd";
const { Title, Paragraph } = Typography;

const experiences = [
  {
    title: "Backend Developer (Intern)",
    company: "OnePaul Global Services",
    duration: "Jan 2023 - Apr 2023",
    description: "As an intern backend developer, my responsibilities included creating containers for Next.js development, managing GitLab project boards, setting up CI/CD pipelines and container repositories, and deploying web applications from development to staging environments. I was responsible for troubleshooting issues during production deployments and documenting all DevOps processes and configurations. My skills include Express.js, software quality assurance, Node.js, and JavaScript.",
  },
  {
    title: "Freelance Backend Developer",
    company: "Self-employed",
    duration: "Nov 2023 - Jul 2024",
    description: "As a freelance backend developer, I have leveraged technologies like Azure Functions for scalable serverless applications, Node.js for high-performance services, TypeScript for improved code quality, and Azure SignalR for real-time web functionalities. I have designed secure RESTful APIs, ensured data integrity and optimized queries in database management, and deployed scalable applications on cloud services, effectively meeting client needs and supporting their business objectives.",
  },
  // Add more experiences here if needed
];

const Experience = () => {
  return (
    <section style={{ margin: "40px 20px" }}>
      <Title level={2} style={{ color: '#1890ff', textAlign: 'center' }}>Experience</Title>
      <List
        itemLayout="vertical"
        dataSource={experiences}
        renderItem={item => (
          <List.Item style={{ marginBottom: '20px' }}>
            <Card
              title={<Title level={4} style={{ margin: 0 }}>{item.title}</Title>}
              style={{
                borderRadius: '10px',
                boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
                padding: '20px',
                background: '#fff',
              }}
            >
              <Paragraph style={{ margin: '8px 0', fontSize: '16px', fontWeight: 'bold' }}>
                {item.company} | <span style={{ fontWeight: 'normal' }}>{item.duration}</span>
              </Paragraph>
              <Paragraph style={{ fontSize: '16px', color: '#555' }}>
                {item.description}
              </Paragraph>
            </Card>
          </List.Item>
        )}
      />
    </section>
  );
};

export default Experience;
