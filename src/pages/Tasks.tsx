import {
  Breadcrumbs,
  Button,
  Card,
  CardContent,
  Divider,
  Link,
  Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import Grid from "@mui/material/Grid";
import React, { useState } from "react";
import TaskCard from "../components/TaskCard";
import { DndContext, closestCenter } from "@dnd-kit/core";
import {
  arrayMove,
  SortableContext,
  sortableKeyboardCoordinates,
} from "@dnd-kit/sortable";
import { useSortable } from "@dnd-kit/sortable";
import { restrictToVerticalAxis } from "@dnd-kit/modifiers";
import {
  KeyboardSensor,
  PointerSensor,
  useSensor,
  useSensors,
} from "@dnd-kit/core";

function SortableItem(props: {
  id: any;
  children:
    | string
    | number
    | boolean
    | React.ReactElement<any, string | React.JSXElementConstructor<any>>
    | Iterable<React.ReactNode>
    | React.ReactPortal
    | null
    | undefined;
}) {
  const { attributes, listeners, setNodeRef, transform, transition } =
    useSortable({ id: props.id });

  const style = {
    transform: transform
      ? `translate3d(${transform.x}px, ${transform.y}px, 0)`
      : undefined,
    transition,
  };

  return (
    <div ref={setNodeRef} style={style} {...attributes} {...listeners}>
      {props.children}
    </div>
  );
}

const Tasks: React.FC = () => {
  const [tasksOne, setTasksOne] = useState([
    {
      id: "1",
      title: "Redesign the homepage",
      avatars: ["/avatar1.png", "/avatar2.png", "/avatar3.png", "/avatar4.png"],
      comments: 2,
      progressColor: ["green", "orange"],
    },
    {
      id: "2",
      title: "Upgrade dependencies to latest versions",
      avatars: ["/avatar3.png"],
      comments: 1,
      progressColor: ["green"],
    },
    {
      id: "3",
      title: "Google Adwords best practices",
      avatars: ["/avatar4.png", "/avatar5.png"],
      comments: 0,
      progressColor: [],
    },
    {
      id: "4",
      title: "Improve site speed",
      avatars: [],
      comments: 3,
      progressColor: ["green"],
    },
    {
      id: "5",
      title: "Stripe payment integration",
      avatars: [],
      comments: 3,
      progressColor: ["blue"],
    },
  ]);

  const [tasksTwo, setTasksTwo] = useState([
    {
      id: "6",
      title: "Google Adwords best practices",
      avatars: ["/avatar4.png", "/avatar5.png"],
      comments: 0,
      progressColor: [],
    },
    {
      id: "7",
      title: "Stripe payment integration",
      avatars: ["/avatar6.png"],
      comments: 3,
      progressColor: ["blue"],
    },
  ]);

  const [tasksThree, setTasksThree] = useState([
    {
      id: "8",
      title: "Improve site speed",
      avatars: ["/avatar1.png", "/avatar2.png"],
      comments: 3,
      progressColor: ["green"],
    },
    {
      id: "9",
      title: "Google Adwords best practices",
      avatars: ["/avatar3.png"],
      comments: 0,
      progressColor: [],
    },
    {
      id: "10",
      title: "Redesign the homepage",
      avatars: [],
      comments: 2,
      progressColor: ["green", "orange"],
    },
  ]);

  const sensors = useSensors(
    useSensor(PointerSensor),
    useSensor(KeyboardSensor, {
      coordinateGetter: sortableKeyboardCoordinates,
    })
  );

  const handleDragEnd = (event: { active: any; over: any }) => {
    const { active, over } = event;

    if (active.id !== over.id) {
      setTasksOne((items) => {
        const oldIndex = items.findIndex((item) => item.id === active.id);
        const newIndex = items.findIndex((item) => item.id === over.id);
        return arrayMove(items, oldIndex, newIndex);
      });
    }
  };

  const handleDragEndTwo = (event: { active: any; over: any }) => {
    const { active, over } = event;

    if (active.id !== over.id) {
      setTasksTwo((items) => {
        const oldIndex = items.findIndex((item) => item.id === active.id);
        const newIndex = items.findIndex((item) => item.id === over.id);
        return arrayMove(items, oldIndex, newIndex);
      });
    }
  };

  const handleDragEndThree = (event: { active: any; over: any }) => {
    const { active, over } = event;

    if (active.id !== over.id) {
      setTasksThree((items) => {
        const oldIndex = items.findIndex((item) => item.id === active.id);
        const newIndex = items.findIndex((item) => item.id === over.id);
        return arrayMove(items, oldIndex, newIndex);
      });
    }
  };

  return (
    <Box mx="70px" my="20px">
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
            Tasks
          </Typography>
          <Breadcrumbs aria-label="breadcrumb">
            <Link underline="none" href="/tasks" color="info">
              Tasks
            </Link>
          </Breadcrumbs>
        </Box>
      </Box>

      <Grid
        container
        spacing={2}
        alignItems="flex-start"
        style={{ marginTop: 10 }}
      >
        <Grid item xs={12} sm={6} md={4}>
          <Card
            sx={[
              (theme) => ({
                mb: "25px",
                backgroundColor: "#fff",
                ...theme.applyStyles("dark", {
                  backgroundColor: theme.palette.secondary.main,
                }),
              }),
            ]}
          >
            <CardContent>
              <Box>
                <Typography variant="h6">Backlog</Typography>
                <Typography variant="caption">
                  Nam pretium turpis et arcu. Duis arcu.
                </Typography>
                <Divider sx={{ my: 2 }} />
                <DndContext
                  sensors={sensors}
                  collisionDetection={closestCenter}
                  onDragEnd={handleDragEnd}
                  modifiers={[restrictToVerticalAxis]}
                >
                  <SortableContext items={tasksOne.map((task) => task.id)}>
                    {tasksOne.map((task) => (
                      <SortableItem key={task.id} id={task.id}>
                        <TaskCard {...task} />
                      </SortableItem>
                    ))}
                  </SortableContext>
                </DndContext>
                <Button
                  variant="contained"
                  color="primary"
                  fullWidth
                  sx={{ mt: 2, fontSize: "13px" }}
                >
                  + Add new task
                </Button>
              </Box>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Card
            sx={[
              (theme) => ({
                mb: "25px",
                backgroundColor: "#fff",
                ...theme.applyStyles("dark", {
                  backgroundColor: theme.palette.secondary.main,
                }),
              }),
            ]}
          >
            <CardContent>
              <Box>
                <Typography variant="h6">Backlog</Typography>
                <Typography variant="caption">
                  Curabitur ligula sapien, tincidunt non.
                </Typography>
                <Divider sx={{ my: 2 }} />
                <DndContext
                  sensors={sensors}
                  collisionDetection={closestCenter}
                  onDragEnd={handleDragEndTwo}
                  modifiers={[restrictToVerticalAxis]}
                >
                  <SortableContext items={tasksTwo.map((task) => task.id)}>
                    {tasksTwo.map((task) => (
                      <SortableItem key={task.id} id={task.id}>
                        <TaskCard {...task} />
                      </SortableItem>
                    ))}
                  </SortableContext>
                </DndContext>
                <Button
                  variant="contained"
                  color="primary"
                  fullWidth
                  sx={{ mt: 2, fontSize: "13px" }}
                >
                  + Add new task
                </Button>
              </Box>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Card
            sx={[
              (theme) => ({
                padding: "20px",
                mb: "25px",
                backgroundColor: "#fff",
                ...theme.applyStyles("dark", {
                  backgroundColor: theme.palette.secondary.main,
                }),
              }),
            ]}
          >
            <CardContent>
              <Box>
                <Typography variant="h6">Backlog</Typography>
                <Typography variant="caption">
                  Aenean posuere, tortor sed cursus feugiat.
                </Typography>
                <Divider sx={{ my: 2 }} />
                <DndContext
                  sensors={sensors}
                  collisionDetection={closestCenter}
                  onDragEnd={handleDragEndThree}
                  modifiers={[restrictToVerticalAxis]}
                >
                  <SortableContext items={tasksThree.map((task) => task.id)}>
                    {tasksThree.map((task) => (
                      <SortableItem key={task.id} id={task.id}>
                        <TaskCard {...task} />
                      </SortableItem>
                    ))}
                  </SortableContext>
                </DndContext>
                <Button
                  variant="contained"
                  color="primary"
                  fullWidth
                  sx={{ mt: 2, fontSize: "13px" }}
                >
                  + Add new task
                </Button>
              </Box>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Tasks;
