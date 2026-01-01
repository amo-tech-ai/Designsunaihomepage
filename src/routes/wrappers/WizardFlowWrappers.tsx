import { useNavigate } from 'react-router-dom';
import { BriefWizard } from '../../components/BriefWizard';
import { AIProcessingScreen } from '../../components/AIProcessingScreen';
import { ProposalReadyScreen } from '../../components/ProposalReadyScreen';
import { WizardStep1 } from '../../wizard/WizardStep1';
import { WizardStep2 } from '../../wizard/WizardStep2';
import WizardStep3 from '../../wizard/WizardStep3';
import { WizardStep4 } from '../../wizard/WizardStep4';

export function WizardStep1Wrapper() {
  return <WizardStep1 />;
}

export function WizardStep2Wrapper() {
  return <WizardStep2 />;
}

export function WizardStep3Wrapper() {
  return <WizardStep3 />;
}

export function WizardStep4Wrapper() {
  return <WizardStep4 />;
}

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