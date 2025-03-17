"use client";
import { CSSProperties, Suspense, useEffect, useRef, useState } from "react";
import { Header } from "@components/header";
import { Button, Col, Divider, Layout, Row, Space, Typography } from "antd";
import styles from "./page.module.css";
import { FilePdfFilled, GithubFilled, FacebookFilled, LinkedinFilled } from "@ant-design/icons";
const { Title, Paragraph } = Typography;
const { Content } = Layout;
import Image from "next/image";

export default function RootLayout({ children }: { children: React.ReactNode }) {
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


  const regBody: CSSProperties = {
    minHeight: "400px",
    margin: "0 15px",
  };
  const toggleDarkMode = () => {
    const newDarkMode = !isDarkMode;
    setIsDarkMode?.(newDarkMode); // Safe optional chaining

    // Apply to body and root container
    document.body.style.backgroundColor = newDarkMode ? "#333" : "#f0f2f5";
    document.body.style.color = newDarkMode ? "#ffffff" : "#000000";
  };
  return (
    <html lang="en">
      <body>
        <div style={regBody}>
          <Header isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} />
          <Suspense fallback={<div>Loading...</div>}>
            <main
              style={{
                width: '100%',
                margin: 0,
                padding: 0,
                animation: 'fadeInUp 1s ease-out',

              }}
            >
              <Layout style={{ minHeight: '100vh', backgroundColor: isDarkMode ? "#333" : "#f0f2f5", color: isDarkMode ? "#ffffff" : "#000000", }}>
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
                  <Divider style={{ margin: '40px 0', borderColor: '#404040' }} />
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
                  {children}
                </Content>
              </Layout>
            </main>
          </Suspense>
        </div>
      </body>
    </html>
  );
}
