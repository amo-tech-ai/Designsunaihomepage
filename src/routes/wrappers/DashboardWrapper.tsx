import { useNavigate } from 'react-router-dom';
import { ProjectDashboard } from '../../components/ProjectDashboard';
import { DeckEditorPage } from '../../components/premium/v7/deck/DeckEditorPage';

export function ProjectDashboardWrapper() {
  const navigate = useNavigate();
  return <ProjectDashboard onClose={() => navigate('/')} />;
}

export function DeckEditorWrapper() {
  const navigate = useNavigate();
  
  const handleNavigate = (page: string) => {
    navigate(`/${page}`);
  };
  
  const handleVersionChange = (version: string) => {
    navigate(`/${version}`);
  };
  
  return (
    <DeckEditorPage 
      onNavigate={handleNavigate} 
      onVersionChange={handleVersionChange} 
    />
  );
}