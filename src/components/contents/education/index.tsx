import { Typography, List, Card } from "antd";
const { Title, Paragraph } = Typography;

const education = [
  {
    degree: "Senior High School",
    institution: "Rizal High School",
    year: "2019",
    description: "Completed senior high school with a focus on general education.",
  },
  {
    degree: "Bachelor of Science in Information Technology",
    institution: "Jose Rizal University",
    year: "2023",
    description: "Focused on software development, database management, and network systems.",
  },
];

const Education = () => {
  return (
    <section style={{ margin: "40px 20px" }}>
      <Title level={2} style={{ color: '#1890ff', textAlign: 'center' }}>Education</Title>
      <List
        itemLayout="vertical"
        dataSource={education}
        renderItem={item => (
          <List.Item
            style={{ marginBottom: '20px' }}
          >
            <Card
              title={<Title level={4} style={{ margin: 0 }}>{item.degree}</Title>}
              style={{
                borderRadius: '10px',
                boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
                padding: '20px',
                background: '#fff',
              }}
            >
              <Paragraph style={{ margin: '8px 0', fontSize: '16px', fontWeight: 'bold' }}>
                {item.institution} | <span style={{ fontWeight: 'normal' }}>{item.year}</span>
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

export default Education;
