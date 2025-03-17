"use client";

import { Row, Col, Typography, Layout, Button, Space, Divider, Card } from "antd";
import { FilePdfFilled, GithubFilled, FacebookFilled, LinkedinFilled } from "@ant-design/icons";

import AboutMe from "@components/contents/about-me";
import Experience from "@components/contents/experience";
import Education from "@components/contents/education";
import Skills from "@components/contents/skills";
import Projects from "@components/contents/projects";
import Certificates from "@components/contents/certificates";



export default function Home() {


  return (




    <>


      {
        [
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
        ))
      }


    </>
  );
}
