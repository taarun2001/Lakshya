import React, { useState, useEffect } from 'react';
import { Plus, FileText, UploadCloud, CheckCircle2, Clock, Filter } from 'lucide-react';
import { apiService } from '../services/api';
import { Paper } from '../data/types';
import { PaperCard } from '../components/cards/PaperCard';
import { UploadPaperModal } from '../components/modals/UploadPaperModal';

export const PapersPage: React.FC = () => {
  const [papers, setPapers] = useState<Paper[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isUploadOpen, setIsUploadOpen] = useState(false);
  const [activeTab, setActiveTab] = useState<'ALL' | 'Processed' | 'Processing'>('ALL');

  const loadPapers = async () => {
    setIsLoading(true);
    const data = await apiService.getPapers();
    setPapers(data);
    setIsLoading(false);
  };

  useEffect(() => {
    loadPapers();
  }, []);

  const handleUploadSuccess = async (paperData: any) => {
    await apiService.addPaper({
      examId: 'kcet-2026',
      examName: paperData.examName,
      year: paperData.year,
      subject: paperData.subject,
      questionCount: paperData.questionCount,
      fileSize: paperData.fileSize
    });
    loadPapers();
  };

  const filteredPapers = papers.filter((p) => {
    if (activeTab === 'ALL') return true;
    return p.status === activeTab;
  });

  return (
    <div className="space-y-6 animate-in fade-in duration-200 max-w-4xl mx-auto">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-2 border-b border-[#e8e8e2]">
        <div>
          <h1 className="text-2xl font-bold tracking-tight text-[#121316]">Your papers</h1>
          <p className="text-xs text-[#5f636e] mt-1">
            Archived examination papers powering question recurrence and recency models.
          </p>
        </div>

        <button
          type="button"
          onClick={() => setIsUploadOpen(true)}
          className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-[#121316] hover:bg-[#252830] text-white text-xs font-semibold shadow-xs transition-colors self-start sm:self-auto"
        >
          <Plus className="w-4 h-4" />
          <span>Add papers</span>
        </button>
      </div>

      {/* Stats Summary Card */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
        <div className="p-4 rounded-xl border border-[#e8e8e2] bg-white">
          <span className="text-xs font-mono text-[#5f636e] uppercase block">Total Papers</span>
          <div className="text-2xl font-bold font-mono text-[#121316] mt-1">{papers.length}</div>
          <span className="text-[11px] text-[#8b8f9a]">Spanning 2018–2025</span>
        </div>

        <div className="p-4 rounded-xl border border-emerald-200 bg-emerald-50/40">
          <span className="text-xs font-mono text-emerald-800 uppercase block">Processed & Calibrated</span>
          <div className="text-2xl font-bold font-mono text-emerald-950 mt-1">
            {papers.filter((p) => p.status === 'Processed').length}
          </div>
          <span className="text-[11px] text-emerald-700/80">Active in signal matrix</span>
        </div>

        <div className="p-4 rounded-xl border border-amber-200 bg-amber-50/40">
          <span className="text-xs font-mono text-amber-800 uppercase block">Processing / Queued</span>
          <div className="text-2xl font-bold font-mono text-amber-950 mt-1">
            {papers.filter((p) => p.status === 'Processing').length}
          </div>
          <span className="text-[11px] text-amber-700/80">Parsing OCR & questions</span>
        </div>
      </div>

      {/* Filter Tabs */}
      <div className="flex items-center gap-2">
        {(['ALL', 'Processed', 'Processing'] as const).map((tab) => (
          <button
            key={tab}
            type="button"
            onClick={() => setActiveTab(tab)}
            className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-colors border ${
              activeTab === tab
                ? 'bg-[#121316] text-white border-[#121316]'
                : 'bg-white text-[#5f636e] border-[#e8e8e2] hover:border-[#d4d4ca]'
            }`}
          >
            {tab === 'ALL' ? 'All Papers' : tab}
          </button>
        ))}
      </div>

      {/* Paper List */}
      <div className="space-y-3">
        {isLoading ? (
          <div className="py-12 text-center text-xs font-mono text-[#8b8f9a]">
            Loading examination papers archive...
          </div>
        ) : (
          filteredPapers.map((paper) => <PaperCard key={paper.id} paper={paper} />)
        )}
      </div>

      {/* Upload Paper Modal */}
      <UploadPaperModal
        isOpen={isUploadOpen}
        onClose={() => setIsUploadOpen(false)}
        onUploadSuccess={handleUploadSuccess}
      />
    </div>
  );
};
