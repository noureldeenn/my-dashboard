import React from "react";
import {
  Card,
  CardContent,
  Typography,
  Button,
  Avatar,
  Stack,
  Chip,
  CardMedia,
} from "@mui/material";
import { AvatarGroup } from "@mui/material";
import { green, orange, red } from "@mui/material/colors";
import projects from "../assets/project.jpg";

interface ProjectCardProp {
  name: string;
  state: string;
  description: string;
  image?: boolean;
}

interface ProjectItem {
  item: ProjectCardProp;
}

const ProjectCard: React.FC<ProjectItem> = ({ item }) => {
  return (
    <Card
      sx={[
        (theme) => ({
          mb: "25px",
          position: "relative",
          backgroundColor: "#fff",
          ...theme.applyStyles("dark", {
            backgroundColor: theme.palette.secondary.main,
          }),
        }),
      ]}
    >
      {item.image && (
        <CardMedia
          component="img"
          height="200"
          image={projects}
          alt="Background Image"
        />
      )}
      <CardContent>
        <Stack gap={1}>
          <Typography variant="h6">{item.name}</Typography>
          <Chip
            label={item.state}
            size="small"
            sx={{
              width: "90px",
              backgroundColor:
                item.state === "Finished"
                  ? green[400]
                  : item.state === "In progress"
                  ? orange[500]
                  : red[500],
              color: "#fff",
            }}
          />
          <Typography
            variant="body2"
            color="text.secondary"
            fontWeight={400}
            sx={{ mt: 1.5, mb: 2 }}
          >
            {item.description}
          </Typography>
        </Stack>

        <AvatarGroup max={3}>
          <Avatar alt="User 1" src="path-to-avatar1.jpg" />
          <Avatar alt="User 2" src="path-to-avatar2.jpg" />
          <Avatar alt="User 3" src="path-to-avatar3.jpg" />
        </AvatarGroup>

        <Stack
          direction="row"
          gap={1}
          sx={{ mt: 2 }}
          borderTop="1px solid #e0e0e0"
        >
          <Button
            variant="text"
            sx={{ fontSize: "13px", textTransform: "none" }}
          >
            Share
          </Button>
          <Button
            variant="text"
            sx={{ fontSize: "13px", textTransform: "none" }}
          >
            Learn More
          </Button>
        </Stack>
      </CardContent>
    </Card>
  );
};

export default ProjectCard;
