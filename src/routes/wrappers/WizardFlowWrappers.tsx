import { useNavigate } from 'react-router-dom';
import { BriefWizard } from '../../components/BriefWizard';
import { AIProcessingScreen } from '../../components/AIProcessingScreen';
import { ProposalReadyScreen } from '../../components/ProposalReadyScreen';

export function BriefWizardWrapper() {
  const navigate = useNavigate();
  
  return (
    <BriefWizard
      onClose={() => navigate('/')}
      onSubmit={() => navigate('/processing')}
    />
  );
}

export function AIProcessingScreenWrapper() {
  const navigate = useNavigate();
  
  return (
    <AIProcessingScreen onComplete={() => navigate('/proposal')} />
  );
}

export function ProposalReadyScreenWrapper() {
  const navigate = useNavigate();
  
  return (
    <ProposalReadyScreen
      onViewProposal={() => navigate('/booking')}
      onGoToDashboard={() => navigate('/dashboard')}
    />
  );
}
