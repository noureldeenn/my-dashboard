import React from "react";
import ProjectCard from "../components/ProjectCard";
import { Box } from "@mui/system";
import { Breadcrumbs, Link, Typography } from "@mui/material";
import Grid from "@mui/material/Grid";

interface ProjectItem {
  name: string;
  state: string;
  description: string;
  image?: boolean;
}

const projects: ProjectItem[] = [
  {
    name: "Landing page redesign",
    state: "Finished",
    description:
      "Etiam rhoncus. Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque sed ipsum.",
  },
  {
    name: "Company posters",
    state: "In progress",
    description:
      "Curabitur ligula sapien, tincidunt non, euismod vitae, posuere imperdiet, leo. Maecenas malesuada. Praesent congue erat at massa.",
  },
  {
    name: "Product page design",
    state: "Finished",
    description:
      "Etiam rhoncus. Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque sed ipsum.",
  },
  {
    name: "Upgrade CRM software",
    state: "In progress",
    description:
      "Nam pretium turpis et arcu. Duis arcu tortor, suscipit eget, imperdiet nec, imperdiet iaculis, ipsum. Sed aliquam ultrices mauris.",
  },
  {
    name: "Fix form validation",
    state: "Finished",
    description:
      "Nam pretium turpis et arcu. Duis arcu tortor, suscipit eget, imperdiet nec, imperdiet iaculis, ipsum. Sed aliquam ultrices mauris.",
    image: true,
  },
  {
    name: "New company logo",
    state: "On hold",
    description:
      "Etiam rhoncus. Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque sed ipsum.",
    image: true,
  },
  {
    name: "Upgrade to latest Maps API",
    state: "Finished",
    description:
      "Nam pretium turpis et arcu. Duis arcu tortor, suscipit eget, imperdiet nec, imperdiet iaculis, ipsum. Sed aliquam ultrices mauris.",
    image: true,
  },
  {
    name: "Refactor backend templates",
    state: "On hold",
    description:
      "Curabitur ligula sapien, tincidunt non, euismod vitae, posuere imperdiet, leo. Maecenas malesuada. Praesent congue erat at massa.",
    image: true,
  },
];

const Projects: React.FC = () => {
  return (
    <Box mx="50px" my="20px">
      <Box
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        padding="16px"
        mb="25px"
        borderBottom="1px solid  #e0e0e0"
      >
        <Box>
          <Typography
            variant="h4"
            fontWeight="400"
            sx={[
              (theme) => ({
                color: "#212121",
                ...theme.applyStyles("dark", {
                  color: "#fff",
                }),
              }),
            ]}
          >
            Projects
          </Typography>
          <Breadcrumbs aria-label="breadcrumb">
            <Link underline="none" href="/projects" color="info">
              Projects
            </Link>
          </Breadcrumbs>
        </Box>
      </Box>
      <Grid container spacing={2} mb="25px">
        {projects.map((item) => {
          return (
            <Grid key={item.name} item sm={12} md={6}>
              <ProjectCard item={item} />
            </Grid>
          );
        })}
      </Grid>
    </Box>
  );
};

export default Projects;
