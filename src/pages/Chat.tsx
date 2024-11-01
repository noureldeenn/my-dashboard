import React from "react";
import {
  Box,
  TextField,
  Avatar,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Typography,
  Paper,
  IconButton,
  Breadcrumbs,
  Link,
  Card,
  CardContent,
} from "@mui/material";
import Grid from "@mui/material/Grid";
import SendIcon from "@mui/icons-material/Send";
import { Stack } from "@mui/system";

const messages = [
  {
    id: 1,
    sender: "Remy Sharp",
    text: "Sit meis deleniti eu, pri vidit meliore docendi ut, an eum erat animal commodo.",
    time: "20 minutes ago",
  },
  {
    id: 2,
    sender: "You",
    text: "Lorem ipsum dolor sit amet, vis erat denique in, dicunt prodesset te vix.",
    time: "12 minutes ago",
    isOwn: true,
  },
  {
    id: 3,
    sender: "Remy Sharp",
    text: "Cum ea graeci tractatos.",
    time: "8 minutes ago",
  },
  {
    id: 4,
    sender: "You",
    text: "Cras pulvinar, sapien id vehicula aliquet, diam velit elementum orci.",
    time: "5 minutes ago",
    isOwn: true,
  },
  {
    id: 5,
    sender: "Remy Sharp",
    text: "Lorem ipsum dolor sit amet, vis erat denique in, dicunt prodesset te vix.",
    time: "3 minutes ago",
  },
  {
    id: 6,
    sender: "Remy Sharp",
    text: "Lorem ipsum dolor sit amet, vis erat denique in, dicunt prodesset te vix.",
    time: "3 minutes ago",
  },
  {
    id: 7,
    sender: "Remy Sharp",
    text: "Lorem ipsum dolor sit amet, vis erat denique in, dicunt prodesset te vix.",
    time: "3 minutes ago",
  },
];

const Chat: React.FC = () => {
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
            Chat
          </Typography>
          <Breadcrumbs aria-label="breadcrumb">
            <Link underline="none" href="/pages/profile" color="info">
              Pages
            </Link>
            <Link
              underline="none"
              href="/pages/chat"
              aria-current="page"
              color="info"
            >
              Chat
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
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6} md={3}>
              <Box pr={2} height="100%" borderRight="1px solid #ddd">
                <TextField
                  variant="outlined"
                  placeholder="Search contacts"
                  fullWidth
                />
                <List>
                  {["Lucy Lavender", "Remy Sharp", "Cassandra Mixon"].map(
                    (name) => (
                      <ListItem key={name} sx={{ px: 0 }}>
                        <ListItemAvatar>
                          <Avatar>{name.charAt(0)}</Avatar>
                        </ListItemAvatar>
                        <Stack>
                          <Typography variant="body1">{name}</Typography>
                          <Typography
                            variant="body2"
                            fontWeight={400}
                            color="textSecondary"
                          >
                            {name === "Remy Sharp" ? "Coffee?" : "Hello!"}
                          </Typography>
                        </Stack>
                      </ListItem>
                    )
                  )}
                </List>
              </Box>
            </Grid>
            <Grid item xs={12} sm={6} md={9}>
              <Box flexGrow={1} display="flex" flexDirection="column">
                <Box flexGrow={1} p={2} height="50vh" overflow="auto">
                  {messages.map((message) => (
                    <Box
                      key={message.id}
                      display="flex"
                      justifyContent={message.isOwn ? "flex-end" : "flex-start"}
                      mb={2}
                    >
                      {!message.isOwn && (
                        <Avatar>{message.sender.charAt(0)}</Avatar>
                      )}
                      <Stack
                        display="flex"
                        alignItems="end"
                        justifyContent="flex-end"
                        gap={1}
                      >
                        <Paper
                          elevation={1}
                          sx={{
                            p: 1.5,
                            ml: message.isOwn ? 0 : 1,
                            mr: message.isOwn ? 1 : 0,
                            bgcolor: message.isOwn ? "#3f51b5" : "#e0e0e0",
                            color: message.isOwn ? "#fff" : "#000",
                            display: "flex",
                            flexDirection: "column",
                          }}
                        >
                          <Typography variant="body2" fontWeight={600} >
                            {message.sender}
                          </Typography>
                          <Typography fontSize="13px" fontWeight={400}>
                            {message.text}
                          </Typography>
                        </Paper>
                        <Typography
                          variant="caption"
                          display="block"
                          color="textSecondary"
                          align={message.isOwn ? "right" : "left"}
                        >
                          {message.time}
                        </Typography>
                      </Stack>
                    </Box>
                  ))}
                </Box>

                <Box
                  p={1}
                  display="flex"
                  alignItems="center"
                  borderTop="1px solid #ddd"
                >
                  <TextField
                    variant="outlined"
                    label="Type your message"
                    placeholder="Type your message"
                    fullWidth
                  />
                  <IconButton color="primary">
                    <SendIcon />
                  </IconButton>
                </Box>
              </Box>
            </Grid>
          </Grid>
        </CardContent>
      </Card>
    </Box>
  );
};

export default Chat;
