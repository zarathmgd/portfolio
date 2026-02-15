import { Box, Typography, Button, Link, Grid } from "@mui/material";
import { IProject } from "../Context";

interface ProjectContentProps extends IProject {
  tags: string[];
}

export default function ProjectContent({ 
  projectName, 
  projectInformations, 
  elementClassName, 
  link, 
  tags 
}: ProjectContentProps) {

  return (
    <Box
      className={elementClassName}
      sx={{
        display: "flex",
        alignItems: "center",
        flexDirection: !elementClassName ? { xs: "column", md: "row" } : { xs: "column", md: "row-reverse" },
        rowGap: { xs: "20px", md: 0 },
      }}
    >
      <Box sx={{ width: "200px", height: "200px", backgroundColor: "primary.main", borderRadius: "4px", flexShrink: 0 }}>
        <img src="" alt="" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
      </Box>

      <Box
        className="informations-container"
        sx={{
          maxWidth: "575px",
          height: { xs: "auto", md: "auto" },
          minHeight: { md: "175px" },
          border: "1px solid",
          borderLeft: !elementClassName ? { xs: "1px solid", md: "none" } : "1px solid",
          borderRight: !elementClassName ? "1px solid" : { xs: "1px solid", md: "none" },
          borderColor: "primary.main",
          borderRadius: !elementClassName ? { xs: "4px", md: "0 4px 4px 0" } : { xs: "4px", md: "4px 0 0 4px" },
          p: 2.5,
          textAlign: { xs: "center", md: "start" },
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: { xs: "center", md: "start" },
            alignItems: "center",
            columnGap: 1.5,
            marginBottom: 1.5,
          }}
        >
          <Typography variant="h3" sx={{ fontSize: "1.3rem", fontWeight: 500 }}>
            {projectName}
          </Typography>
          {link && (
            <Link href={link} target="_blank" rel="noopener noreferrer">
                <i className="fa-solid fa-arrow-up-right-from-square" style={{ cursor: 'pointer', color: 'inherit' }}></i>
            </Link>
          )}
        </Box>
        
        <Typography variant="body2" sx={{ whiteSpace: "pre-line" }}>
            {projectInformations}
        </Typography>

        <Grid container columnGap={1} rowGap={1} sx={{ marginTop: 2, justifyContent: { xs: "center", md: "start" } }}>
          {tags && tags.map((tagName, index) => (
            <Grid item key={index}>
              <Button
                variant="outlined"
                sx={{
                  minWidth: "auto",
                  px: 1,
                  py: 0.1,
                  borderColor: "primary.main",
                  fontSize: ".7rem",
                  cursor: "default",
                  color: "text.primary",
                  textTransform: "none",
                  ":hover": { backgroundColor: "rgba(25, 118, 210, 0.1)" },
                }}
              >
                {tagName}
              </Button>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
  );
}