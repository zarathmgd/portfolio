import { Box, Typography, Button } from "@mui/material";
import ProjectContent from "./ProjectContent";
import { motion, useAnimation, useInView } from "framer-motion";
import { useRef, useEffect } from "react";

export default function Project() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false });
  const controls = useAnimation();

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [isInView]);

  return (
    <Box
      ref={ref}
      component={motion.div}
      variants={{
        hidden: { opacity: 0, y: -30 },
        visible: { opacity: 1, y: 0 },
      }}
      initial="hidden"
      animate={controls}
      transition={{ duration: 1, delay: 0.2 }}
      sx={{
        width: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        marginTop: { xs: "125px", md: "150px" },
        marginBottom: "100px",
      }}
    >
      <Box
        className="project-content"
        sx={{
          maxWidth: "775px",
          display: "flex",
          flexDirection: "column",
          alignItems: { xs: "center", md: "start" },
          rowGap: "60px",
          position: "relative",
        }}
      >
        <Typography
          variant="h2"
          id="project"
          sx={{
            position: "relative",
            alignSelf: "center",
            marginBottom: "20px",
            "::after": {
              content: "''",
              position: "absolute",
              left: "50%",
              transform: "translateX(-50%)",
              bottom: -10,
              width: "60px",
              height: "3px",
              backgroundColor: "primary.main",
            },
          }}
        >
          Selected Projects
        </Typography>

        <ProjectContent
          projectName="Weather Data ETL & BI Pipeline"
          projectInformations={`End-to-end Data Engineering project designed to optimize retail logistics based on European weather trends.
          I built an automated pipeline extracting data from the Open-Meteo API, transforming it with Python, and loading it into a containerized PostgreSQL warehouse (Docker).
          The final output is a Power BI dashboard enabling strategic decision-making for inventory management.`}
          link={"https://github.com/zarathmgd/weather-data-pipeline"} 
          tags={["Python", "SQL", "Docker", "Power BI"]}
        />

        <ProjectContent
          projectName="Messaging System (School Project)"
          projectInformations="Academic PHP/SQL chat app featuring user authentication and automated data archiving. I implemented SQL Triggers to ensure full traceability of deleted messages."
          elementClassName="chatbox project"
          link={"https://github.com/zarathmgd/chatbox"} 
          tags={["PHP", "MySQL", "HTML", "CSS"]}
        />

        <ProjectContent
          projectName="Personal Web App"
          projectInformations="Developed a fully responsive Single Page Application using React & TypeScript. Implemented clean architecture patterns, custom hooks for logic reuse, and optimized rendering performance with Framer Motion."
          link={"https://github.com/zarathmgd/portfolio"} 
          tags={["React", "TypeScript", "MUI", "Framer Motion"]}
        />

        <Box sx={{ width: "100%", display: "flex", justifyContent: "center", mt: 4 }}>
            <Button 
                variant="outlined" 
                size="large"
                href="https://github.com/zarathmgd?tab=repositories" 
                target="_blank"
                sx={{
                    padding: "10px 30px",
                    color: "text.primary",
                    borderColor: "primary.main",
                    textTransform: "uppercase",
                    letterSpacing: "1px",
                    ":hover": {
                        backgroundColor: "rgba(25, 118, 210, 0.1)",
                        borderColor: "primary.main"
                    }
                }}
            >
                <i className="fa-brands fa-github" style={{ marginRight: "10px", fontSize: "1.2rem" }}></i>
                See more on GitHub
            </Button>
        </Box>

      </Box>
    </Box>
  );
}