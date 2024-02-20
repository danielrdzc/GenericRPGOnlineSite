import {Box, Stack, Typography} from '@mui/material';
export default function CharacterStatItem() {
    return (
        <div>
            <Box sx={{border: "1px solid #aaa", borderRadius: "10%", display:'flex', justifyContent: 'center'}}>
                <Stack>
                    <Typography variant="body1" color="text.secondary" component="div">
                        Fue
                    </Typography>
                    <Typography variant="h4" component="div">
                        10
                    </Typography>
                </Stack>
            </Box>
        </div>
    );
}