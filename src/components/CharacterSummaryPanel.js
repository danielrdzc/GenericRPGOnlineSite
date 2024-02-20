import {Card, Grid, Box, Typography, Stack} from '@mui/material';
import StarIcon from '@mui/icons-material/Star';
import CharacterStatItem from './CharacterStatItem';

export default function CharacterSummaryPanel() {
    return (
        <div>
            <Card sx={{p:2, mt: 2}}>
                <Grid container spacing={3}>
                    <Grid item xs={6}
                        sx={{ p:2, borderRight: '1px solid #000' }}>
                        <Typography variant="subtitle1" color="text.secondary" component="div">
                            <Box component="span" sx={{ display: 'flex', alignItems: 'center' }}>
                            <StarIcon sx={{mr:2}} />
                             CARACTERISTICAS
                            </Box>
                        </Typography>
                        <Grid container spacing={1} sx={{mt: 2}}>
                            <Grid item xs={2}>
                                <CharacterStatItem />
                            </Grid>
                            <Grid item xs={2}>
                                <CharacterStatItem />
                            </Grid>
                            <Grid item xs={2}>
                                <CharacterStatItem />
                            </Grid>
                            <Grid item xs={2}>
                                <CharacterStatItem />
                            </Grid>
                            <Grid item xs={2}>
                                <CharacterStatItem />
                            </Grid>
                            <Grid item xs={2}>
                                <CharacterStatItem />
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item xs={6}
                    sx={{p:1}}>
                        <Typography variant="subtitle1" color="text.secondary" component="div">
                            <Box component="span" sx={{ display: 'flex', alignItems: 'center' }}>
                            <StarIcon sx={{mr:2}} />
                             HABILIDADES
                            </Box>
                        </Typography>

                        <Stack spacing={2} sx={{mt: 2}}>
                            <Typography variant="body1" color="text.secondary" component="div">
                                Acrobacias
                            </Typography>
                            <Typography variant="body1" color="text.secondary" component="div">
                                Sigilo
                            </Typography>
                        </Stack>
                    </Grid>
                </Grid>
            </Card>
        </div>
    );
}