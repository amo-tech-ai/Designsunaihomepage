import { useNavigate } from 'react-router-dom';
import { CallIngestion } from '../../components/crm/intelligence/CallIngestion';
import { AnalysisState } from '../../components/crm/intelligence/AnalysisState';
import { SearchResults } from '../../components/crm/intelligence/SearchResults';

export function CallIngestionWrapper() {
  const navigate = useNavigate();
  return <CallIngestion onUploadComplete={() => navigate('/app/intelligence/analysis')} />;
}

export function AnalysisStateWrapper() {
  const navigate = useNavigate();
  return <AnalysisState onComplete={() => navigate('/app/intelligence/brief')} />;
}

export function SearchResultsWrapper() {
  const navigate = useNavigate();
  return <SearchResults onViewBrief={() => navigate('/app/intelligence/brief')} />;
}
