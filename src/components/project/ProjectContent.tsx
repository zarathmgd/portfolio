import { Box, Typography, Button, Link, Grid } from "@mui/material";
import { IProject } from "../Context";

<<<<<<< HEAD
export default function ProjectContent({ projectName, projectInformations, elementClassName, compteRenduLink, modeOperatoireLink, projectSkills, image }: IProject) {
  const { skills } = useContext(AppContext);
=======
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
>>>>>>> 73c7f8e79658ac2e4ee0ecab7c1f8a3ec8a12650

  return (
    <Box
      className={elementClassName}
      sx={{
        display: "flex",
        alignItems: "center",
        flexDirection: !elementClassName ? { xs: "column", md: "column" } : { xs: "column", md: "column" },
        rowGap: { xs: "20px", md: "20px" },
      }}
    >
<<<<<<< HEAD
      <Box sx={{ width: "300px", height: "225px", backgroundColor: "primary.main", borderRadius: "4px" }}>
        <img src={image} alt="" style={{width: "100%", height: "100%", objectFit: "fill"}}/>
=======
      <Box sx={{ width: "200px", height: "200px", backgroundColor: "primary.main", borderRadius: "4px", flexShrink: 0 }}>
        <img src="" alt="" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
>>>>>>> 73c7f8e79658ac2e4ee0ecab7c1f8a3ec8a12650
      </Box>

      <Box
        className="informations-container"
        sx={{
          maxWidth: "575px",
          height: { xs: "auto", md: "auto" },
<<<<<<< HEAD
=======
          minHeight: { md: "175px" },
>>>>>>> 73c7f8e79658ac2e4ee0ecab7c1f8a3ec8a12650
          border: "1px solid",
          borderLeft: !elementClassName ? { xs: "1px solid", md: "1px solid" } : "1px solid",
          borderRight: !elementClassName ? "1px solid" : { xs: "1px solid", md: "1px solid" },
          borderColor: "primary.main",
          borderRadius: !elementClassName ? { xs: "4px", md: "4px" } : { xs: "4px", md: "4px" },
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
<<<<<<< HEAD
        </Box>
        <Typography variant="body2">{projectInformations}</Typography>
        <Grid container columnGap={3} rowGap={1} sx={{ marginTop: 1, justifyContent: { xs: "center", md: "start" } }}>
          {projectSkills.map(({ id, name }) => {
            return (
              <Grid item key={id}>
              <Button
                variant="outlined"
                sx={{
                  width: "90px",
                  p: 0.1,
                  borderColor: "primary.main",
                  fontSize: ".7rem",
                  cursor: "default",
                  ":hover": { backgroundColor: "primary.hover" },
                }}
              >
                {name}
              </Button>
            </Grid>
            )
          })}
=======
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
>>>>>>> 73c7f8e79658ac2e4ee0ecab7c1f8a3ec8a12650
        </Grid>
        <Box sx={{ mt: 2, display: "flex", flexDirection: "row", justifyContent: "start", alignItems:"start" ,gap: "20px" }}>
          {compteRenduLink && (
          <Link href={compteRenduLink} target="_blank" rel="noopener noreferrer" sx={{padding: 0}}>
            <Button variant="outlined" sx={{ mb: 1 }}>
              Compte-Rendu
            </Button>
          </Link>
          )}
          {modeOperatoireLink && (
            <Link href={modeOperatoireLink} target="_blank" rel="noopener noreferrer" sx={{padding: 0}}>
              <Button variant="outlined">
                Mode Opératoire
              </Button>
            </Link>
          )}
        </Box>
      </Box>
    </Box>
  );
}