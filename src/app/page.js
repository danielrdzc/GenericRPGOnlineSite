import { ThemeProvider } from '@mui/material/styles';
import SideMenu from '../components/SideMenu';
import UserHeaderCard from '../components/UserHeaderCard';
import CharacterSummaryPanel from '../components/CharacterSummaryPanel';
import primaryTheme from './primaryTheme';
import {Container, CssBaseline} from '@mui/material';

export default function Home() {
  return (
    <div>
      <ThemeProvider theme={primaryTheme}>
        <CssBaseline />
        <SideMenu />
        <Container>
          <UserHeaderCard />
          <CharacterSummaryPanel />
        </Container>
      </ThemeProvider>
    </div>
  );
}