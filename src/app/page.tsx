"use client";

import { Row, Col, Typography, Layout, Button, Space, Divider, Card } from "antd";
import { FilePdfFilled, GithubFilled, FacebookFilled, LinkedinFilled } from "@ant-design/icons";
import Image from "next/image";
import styles from "./page.module.css";
import { useEffect, useRef, useState } from "react";
import AboutMe from "@components/contents/about-me";
import Experience from "@components/contents/experience";
import Education from "@components/contents/education";
import Skills from "@components/contents/skills";
import Projects from "@components/contents/projects";
import Certificates from "@components/contents/certificates";

const { Title, Paragraph } = Typography;
const { Content } = Layout;

export default function Home() {
  const [text, setText] = useState("");
  const [fullText] = useState("Software Developer");
  const textRef = useRef<HTMLSpanElement>(null);
  const [isDarkMode, setIsDarkMode] = useState<boolean>(false);

  useEffect(() => {
    if (textRef.current) {
      let index = 0;
      const typingSpeed = 150;
      const clearingSpeed = 100;
      const delayBeforeRestart = 3000;
      const delayAfterTyping = 2000;

      const typeText = () => {
        if (index < fullText.length) {
          setText(fullText.slice(0, index + 1));
          index++;
          setTimeout(typeText, typingSpeed);
        } else {
          setTimeout(() => {
            setText("");
            index = 0;
            typeText();
          }, delayAfterTyping);
        }
      };

      const startTypingEffect = () => {
        typeText();
        setTimeout(startTypingEffect, delayBeforeRestart);
      };

      startTypingEffect();

      return () => {
        clearTimeout(typingSpeed);
        clearTimeout(clearingSpeed);
      };
    }
  }, [fullText]);

  const handleDarkModeToggle = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <main
      style={{
        width: '100%',
        margin: 0,
        padding: 0,
        animation: 'fadeInUp 1s ease-out',
        color: !isDarkMode ? "#333" : "#f0f2f5",
        backgroundColor: !isDarkMode ? "#fff" : "#001529",
      }}
    >
      <Layout style={{ minHeight: '100vh' }}>
        <Content
          style={{
            margin: '80px auto',
            padding: '50px',
            maxWidth: '1200px',
            animation: 'slideIn 1s ease-out',
          }}
        >
          <Row gutter={24} align="middle" style={{ margin: 0 }}>
            <Col xs={24} md={12} style={{ textAlign: 'left', paddingRight: '20px' }}>
              <Title level={1} style={{ color: isDarkMode ? '#f0f2f5' : '#333', fontSize: '2.5rem', marginBottom: '20px' }}>
                Hello, Im
                <br />
                <Title level={1} style={{ color: isDarkMode ? '#f0f2f5' : '#333', fontSize: '2.5rem', marginBottom: '20px' }}>
                  <span className={styles.typingEffect} ref={textRef}>
                    {text}
                  </span>
                </Title>
              </Title>

              <Paragraph style={{ color: isDarkMode ? '#d3d3d3' : '#333', fontSize: '1.2rem', lineHeight: '1.8', textAlign: 'justify' }}>
                Im a passionate software developer with nearly a year of experience in back-end development and a solid skill set in front-end technologies. I quickly grasp new concepts and am dedicated to creating impactful solutions. Whether working independently or in a team, I focus on delivering quality work and seamless user experiences. Lets connect and explore how we can work together to bring your ideas to life.
              </Paragraph>

              <Space size="large">
                <Button
                  type="primary"
                  icon={<FilePdfFilled />}
                  size="large"
                  href="/Joshua-onio-cv.pdf"
                  target="_blank"
                  style={{ fontSize: '1rem', fontWeight: 'bold' }}
                >
                  Download CV
                </Button>
              </Space>
            </Col>

            <Col xs={24} md={12} style={{ textAlign: 'center' }}>
              <Image
                src="https://joshua0nio.github.io/my-portfolio-onio/images/alsome.jpg"
                alt="Profile Picture"
                width={500}
                height={550}
                style={{
                  borderRadius: '30%', border: '2px solid #ddd', width: "100%", // Makes it responsive
                  height: "auto",
                }}
                priority
              />
            </Col>
          </Row>

          <Divider style={{ margin: '40px 0', borderColor: isDarkMode ? '#404040' : '#d9d9d9' }} />

          <Row gutter={24} justify="center" style={{ margin: 0 }}>
            {[
              { href: "https://github.com/yourusername", icon: <GithubFilled />, label: "GitHub" },
              { href: "https://facebook.com/yourusername", icon: <FacebookFilled />, label: "Facebook" },
              { href: "https://linkedin.com/in/yourusername", icon: <LinkedinFilled />, label: "LinkedIn" }
            ].map((link, index) => (
              <Col xs={24} sm={12} md={8} key={index} style={{ textAlign: 'center' }}>
                <a href={link.href} target="_blank" rel="noopener noreferrer" style={{ color: isDarkMode ? '#f0f2f5' : '#333' }}>
                  {link.icon}
                  <p style={{ color: isDarkMode ? '#d3d3d3' : '#333' }}>{link.label}</p>
                </a>
              </Col>
            ))}
          </Row>

          <Divider style={{ margin: '40px 0', borderColor: isDarkMode ? '#404040' : '#d9d9d9' }} />

          {[
            { id: "about", component: <AboutMe /> },
            { id: "experience", component: <Experience /> },
            { id: "education", component: <Education /> },
            { id: "skills", component: <Skills /> },
            { id: "projects", component: <Projects /> },
            { id: "certificates", component: <Certificates /> }
          ].map((section, index) => (
            <Card
              key={index}
              style={{
                borderRadius: '10px',
                boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
                padding: '20px',
                marginBottom: '20px',
                width: "100%",
                textAlign: 'left',
              }}
            >
              <div id={section.id}>
                {section.component}
              </div>
            </Card>
          ))}
        </Content>
      </Layout>
    </main>
  );
}
