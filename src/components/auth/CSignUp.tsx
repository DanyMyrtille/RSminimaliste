import {
  Box,
  Button,
  Link,
  Paper,
  Stack,
  TextField,
  Typography,
} from "@mui/material";

export default function CSignUp() {
  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      minHeight="100vh"
      px={2}
      sx={{ backgroundColor: "#f0f2f5" }}>
      <Stack alignItems={"strech"}>
        <Box
          bgcolor="#5865F2"
          color="white"
          textAlign="center"
          py={3}
          px={2}
          position={"relative"}
          sx={{
            borderTopLeftRadius: "30px",
            borderTopRightRadius: "30px",
          }}
          height={190}>
          <Typography variant="h5" fontWeight="bold">
            Connected
          </Typography>
          <Typography variant="body2">Your favorite social network</Typography>
        </Box>
        <Paper
          elevation={0}
          sx={{
            width: "100%",
            maxWidth: 400,
            borderTopLeftRadius: "30px",
            borderTopRightRadius: "30px",
            overflow: "hidden",
            position: "relative",
            bottom: 80,
          }}>
          <Box px={3} py={4}>
            <Typography variant="h6" gutterBottom>
              Create an account
            </Typography>

            <TextField fullWidth margin="normal" label="Full name" />

            <TextField fullWidth margin="normal" label="Username" />

            <TextField fullWidth margin="normal" label="E-mail" type="email" />

            <TextField
              fullWidth
              margin="normal"
              type="password"
              label="Password"
            />
            <TextField
              fullWidth
              margin="normal"
              type="Repet password"
              label="Password"
            />
            <Box textAlign="right" mb={2}>
              <Link href="#" variant="body2">
                Forgot your password?
              </Link>
            </Box>

            <Button
              fullWidth
              variant="contained"
              color="primary"
              sx={{ textTransform: "none", py: 1.2 }}>
              Log in
            </Button>

            <Box textAlign="center" mt={3}>
              <Typography variant="body2">
                Don’t have an account?
                <Link href="/logIn" underline="hover">
                  Sign up
                </Link>
              </Typography>
            </Box>
          </Box>
        </Paper>
      </Stack>
    </Box>
  );
}
