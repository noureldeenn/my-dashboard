import React, { useState } from "react";
import {
  Breadcrumbs,
  Link,
  Typography,
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  TextField,
  Card,
  CardContent,
} from "@mui/material";
import { Calendar, dateFnsLocalizer } from "react-big-calendar";
import { format, parse, startOfWeek, getDay } from "date-fns";
import "react-big-calendar/lib/css/react-big-calendar.css";

const locales = {
  "en-US": require("date-fns/locale/en-US"),
};
const localizer = dateFnsLocalizer({
  format,
  parse,
  startOfWeek,
  getDay,
  locales,
});

const events = [
  {
    title: "All Day Event",
    allDay: true,
    start: new Date(2023, 1, 1),
    end: new Date(2023, 1, 1),
  },
  {
    title: "Long Event",
    start: new Date(2023, 1, 7),
    end: new Date(2023, 1, 10),
  },
  {
    title: "Conference",
    start: new Date(2023, 1, 11),
    end: new Date(2023, 1, 13),
  },
  {
    title: "Birthday Party",
    start: new Date(2023, 1, 14, 7, 0, 0),
    end: new Date(2023, 1, 14, 10, 30, 0),
  },
  {
    title: "Meeting",
    start: new Date(2023, 1, 14, 14, 0, 0),
    end: new Date(2023, 1, 14, 15, 30, 0),
  },
];

const Calender: React.FC = () => {
  const [open, setOpen] = useState(false);
  const [newEvent, setNewEvent] = useState<{
    title: string;
    start: Date | string;
    end: Date | string;
  }>({
    title: "",
    start: "",
    end: "",
  });
  const [myEvents, setMyEvents] = useState(events);

  const handleAddEvent = () => {
    const eventToAdd = {
      ...newEvent,
      start:
        newEvent.start instanceof Date
          ? newEvent.start
          : new Date(newEvent.start),
      end: newEvent.end instanceof Date ? newEvent.end : new Date(newEvent.end),
    };

    setMyEvents([...myEvents, eventToAdd]);
    setOpen(false);
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
            Calender
          </Typography>
          <Breadcrumbs aria-label="breadcrumb">
            <Link underline="none" href="/calendar" color="info">
              Calender
            </Link>
          </Breadcrumbs>
        </Box>
      </Box>
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
            <Button variant="contained" onClick={() => setOpen(true)}>
              Add New Event
            </Button>
            <Dialog open={open} onClose={() => setOpen(false)}>
              <DialogTitle>Add New Event</DialogTitle>
              <DialogContent>
                <TextField
                  label="Title"
                  fullWidth
                  variant="outlined"
                  margin="normal"
                  value={newEvent.title}
                  onChange={(e) =>
                    setNewEvent({ ...newEvent, title: e.target.value })
                  }
                />
                <TextField
                  label="Start Date"
                  type="datetime-local"
                  fullWidth
                  margin="normal"
                  InputLabelProps={{ shrink: true }}
                  value={
                    newEvent.start instanceof Date
                      ? newEvent.start.toISOString().slice(0, 16)
                      : newEvent.start
                  }
                  onChange={(e) =>
                    setNewEvent({
                      ...newEvent,
                      start: new Date(e.target.value),
                    })
                  }
                />
                <TextField
                  label="End Date"
                  type="datetime-local"
                  fullWidth
                  margin="normal"
                  InputLabelProps={{ shrink: true }}
                  value={
                    newEvent.end instanceof Date
                      ? newEvent.end.toISOString().slice(0, 16)
                      : newEvent.end
                  }
                  onChange={(e) =>
                    setNewEvent({ ...newEvent, end: new Date(e.target.value) })
                  }
                />
              </DialogContent>
              <DialogActions>
                <Button onClick={() => setOpen(false)} color="primary">
                  Cancel
                </Button>
                <Button onClick={handleAddEvent} color="primary">
                  Add Event
                </Button>
              </DialogActions>
            </Dialog>
            <Calendar
              localizer={localizer}
              events={myEvents}
              startAccessor="start"
              endAccessor="end"
              style={{ height: 500, marginBlock: "50px" }}
              views={["month", "week", "day"]}
              defaultView="month"
              selectable
            />
          </Box>
        </CardContent>
      </Card>
    </Box>
  );
};

export default Calender;
