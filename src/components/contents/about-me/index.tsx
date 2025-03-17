import { Typography, Row, Col, Card, Avatar } from "antd";
import Image from "next/image";
const { Title, Paragraph } = Typography;

const AboutMe = () => {
  return (
    <section style={{ margin: "40px 0", padding: "0 20px" }}>
      <Title level={2} style={{ color: '#1890ff', textAlign: 'center' }}>About Me</Title>
      <Row gutter={16} justify="center">
        <Col xs={24} sm={12} md={8}>
          <Card
            style={{
              textAlign: 'center',
              borderRadius: '10px',
              boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
              width: "100%",
              height: "100%",
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
              marginBottom: "100px"
            }}
            cover={
              <Avatar
                size={180}
                src="images/alsome.png" // Replace with your image URL

                style={{ border: '4px solid #1890ff', borderRadius: '50%' }}
              />
            }
          >
            <Title level={3}>Joshua Onio</Title>
            <Paragraph style={{ margin: '8px 0', fontSize: '16px' }}>Age: 23</Paragraph>
            <Paragraph style={{ margin: '8px 0', fontSize: '16px' }}>oniojoshua1900@gmail.com</Paragraph>
            <Paragraph style={{ margin: '8px 0', fontSize: '16px' }}>09094793301</Paragraph>
            <Paragraph style={{ margin: '8px 0', fontSize: '16px' }}>Pasig City</Paragraph>
          </Card>
        </Col>
        <Col xs={24} sm={24} md={16}>
          <Card
            style={{
              borderRadius: '10px',
              boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
              padding: '20px',
              width: "100%",
              height: "100%",
              textAlign: 'left',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center'
            }}
          >
            <Row gutter={24}>
              <Col xs={24} md={14} style={{ paddingRight: '20px' }}>
                <Paragraph style={{ color: "#333", fontSize: "16px", lineHeight: '1.6', textAlign: 'justify' }}>
                  I’m a passionate software developer with nearly a year of experience in back-end development and a solid skill set in front-end technologies. I quickly grasp new concepts and am dedicated to creating impactful solutions. Whether working independently or in a team, I focus on delivering quality work and seamless user experiences. Let’s connect and explore how we can work together to bring your ideas to life.
                </Paragraph>
              </Col>
              <Col xs={24} md={10}>
                <Image
                  src="/images/coding-freak.gif"
                  alt="Coding Illustration"
                  unoptimized

                  style={{
                    borderRadius: '10px',
                    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
                  }}
                  layout="fill"  // Makes the image responsive
                  objectFit="contain"  // Keeps aspect ratio
                />
              </Col>
            </Row>
          </Card>
        </Col>
      </Row>
    </section>
  );
};

export default AboutMe;
