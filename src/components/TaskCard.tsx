import { ChatBubbleOutline } from "@mui/icons-material";
import { Avatar, AvatarGroup, Paper, Typography } from "@mui/material";
import { Box, Stack } from "@mui/system";
import { Key } from "react";

interface TaskCardProp {
  title: string;
  comments: number;
  avatars: string[];
  progressColor: string[];
}

const TaskCard: React.FC<TaskCardProp> = ({
  title,
  comments,
  avatars,
  progressColor,
}) => (
  <Paper variant="outlined" sx={{ p: 2, mb: 2, borderRadius: 2 }}>
    <Box display="flex" alignItems="center" gap={1} mb={1}>
      {progressColor.map((el) => (
        <Box
          sx={{
            width: "17%",
            height: 6,
            backgroundColor: el,
            borderRadius: 2,
          }}
        />
      ))}
    </Box>
    <Typography variant="body1" fontWeight={500}>
      {title}
    </Typography>
    <Stack direction="row" spacing={1} mt={1}>
      <AvatarGroup max={3}>
        {avatars.map(
          (src: string | undefined, index: Key | null | undefined) => (
            <Avatar key={index} alt="User" src="path-to-avatar1.jpg" />
          )
        )}
      </AvatarGroup>
    </Stack>
    {comments > 0 && (
      <Box display="flex" justifyContent="flex-end" alignItems="center">
        <ChatBubbleOutline fontSize="small" />

        <Typography variant="caption" ml={0.5}>
          {comments}
        </Typography>
      </Box>
    )}
  </Paper>
);

export default TaskCard;
