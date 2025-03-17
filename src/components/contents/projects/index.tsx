import { Typography, Card, Col, Row, Divider } from "antd";
const { Title, Paragraph } = Typography;

const projects = [
  {
    category: "Personal Projects",
    items: [
      {
        title: "POS",
        description: "As the primary developer, I designed and implemented a complete POS system using VB.NET, ensuring robust functionality and user-friendly interfaces.",
      },
      {
        title: "Blood Donation System",
        description: "Serving as the backend developer, I focused on system validation, testing, and debugging. I utilized HTML, CSS, JavaScript, PHP, and MySQL to ensure the system's reliability and efficiency.",
      },
      {
        title: "One Tap Alert FFE Mobile Application",
        description: "I developed an emergency response app as the backend developer, creating the API with Node.js. The app, built with JavaScript, uses React Native for mobile and React.js for web, providing responsive and user-friendly interfaces.",
      },
    ],
  },
  {
    category: "Other Projects",
    items: [
      {
        title: "Offshore Salary Calculator",
        description: "As a backend developer, I handled server-side requests and responses using Node.js and Express.js. Occasionally assisting with frontend tasks, I utilized JavaScript for both frontend and backend development, ensuring seamless integration and functionality.",
      },
      {
        title: "Online Game Web App - Azure Functions Server-Side Development",
        description: "Led server-side development using Azure Functions' serverless architecture, employing TypeScript for enhanced scalability and maintainability. Responsibilities included designing, deploying, and optimizing server-side functionalities while ensuring strict confidentiality and security.",
      },
      {
        title: "DOE – PELP (Philippine Energy Labeling Program) Web Application",
        description: "As a Full-Stack Developer, I developed and maintained the frontend using Next.js, Refine, and Ant Design, ensuring a responsive and user-friendly interface. On the backend, I implemented APIs using Strapi and SQL, contributing to a robust system deployed on AWS.",
      },
    ],
  },
];

const Projects = () => {
  return (
    <section style={{ marginBottom: "40px" }}>
      <Title level={2} style={{ color: '#1890ff', textAlign: 'center' }}>Projects</Title>
      {projects.map(projectCategory => (
        <div key={projectCategory.category}>
          <Title level={3}>{projectCategory.category}</Title>
          <Row gutter={16}>
            {projectCategory.items.map(project => (
              <Col span={24} key={project.title}>
                <Card
                  title={project.title}
                  bordered={false}
                  style={{ marginBottom: "16px", borderRadius: "10px", boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)" }}
                >
                  <Paragraph>{project.description}</Paragraph>
                </Card>
              </Col>
            ))}
          </Row>
          <Divider />
        </div>
      ))}
    </section>
  );
};

export default Projects;
