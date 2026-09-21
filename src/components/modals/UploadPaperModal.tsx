import React, { useState } from 'react';
import { X, UploadCloud, FileText, Check, AlertCircle } from 'lucide-react';
import { SubjectName } from '../../data/types';
import { cn } from '../../utils/cn';

interface UploadPaperModalProps {
  isOpen: boolean;
  onClose: () => void;
  onUploadSuccess: (paperData: {
    examName: string;
    year: number;
    subject: SubjectName;
    fileSize: string;
    questionCount: number;
  }) => void;
}

export const UploadPaperModal: React.FC<UploadPaperModalProps> = ({
  isOpen,
  onClose,
  onUploadSuccess
}) => {
  const [examName, setExamName] = useState('KCET');
  const [year, setYear] = useState('2026');
  const [subject, setSubject] = useState<SubjectName>('Mathematics');
  const [file, setFile] = useState<{ name: string; size: string } | null>(null);
  const [isUploading, setIsUploading] = useState(false);
  const [uploadError, setUploadError] = useState<string | null>(null);

  if (!isOpen) return null;

  const handleSimulateSelectFile = () => {
    setFile({
      name: `${examName}_${year}_${subject}_Official_Question_Paper.pdf`,
      size: '3.8 MB'
    });
    setUploadError(null);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!file) {
      setUploadError('Please choose or drop a question paper PDF.');
      return;
    }

    setIsUploading(true);
    setTimeout(() => {
      setIsUploading(false);
      onUploadSuccess({
        examName,
        year: parseInt(year, 10),
        subject,
        fileSize: file.size,
        questionCount: 60
      });
      onClose();
    }, 900);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-xs animate-in fade-in duration-150">
      <div className="fixed inset-0" onClick={onClose} />

      <div className="relative w-full max-w-lg bg-white rounded-2xl border border-[#e8e8e2] shadow-2xl z-10 overflow-hidden">
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-[#e8e8e2] bg-[#fafaf8]">
          <div>
            <h3 className="text-sm font-bold text-[#121316]">Add Previous Exam Paper</h3>
            <p className="text-xs text-[#8b8f9a]">Upload PDF to extract questions and calibrate signals</p>
          </div>
          <button
            onClick={onClose}
            className="p-1 rounded-md text-[#8b8f9a] hover:text-[#121316] hover:bg-[#f0f0ea]"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="p-6 space-y-4">
          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className="block text-xs font-mono font-semibold uppercase text-[#5f636e] mb-1.5">
                Examination
              </label>
              <select
                value={examName}
                onChange={(e) => setExamName(e.target.value)}
                className="w-full text-xs bg-[#fafaf8] border border-[#e8e8e2] rounded-lg px-3 py-2 text-[#121316] outline-none focus:border-indigo-600"
              >
                <option value="KCET">KCET</option>
                <option value="JEE Main">JEE Main</option>
                <option value="NEET">NEET</option>
                <option value="GATE">GATE</option>
              </select>
            </div>

            <div>
              <label className="block text-xs font-mono font-semibold uppercase text-[#5f636e] mb-1.5">
                Paper Year
              </label>
              <select
                value={year}
                onChange={(e) => setYear(e.target.value)}
                className="w-full text-xs bg-[#fafaf8] border border-[#e8e8e2] rounded-lg px-3 py-2 text-[#121316] outline-none focus:border-indigo-600 font-mono"
              >
                <option value="2026">2026 (Model)</option>
                <option value="2025">2025</option>
                <option value="2024">2024</option>
                <option value="2023">2023</option>
                <option value="2022">2022</option>
                <option value="2021">2021</option>
              </select>
            </div>
          </div>

          <div>
            <label className="block text-xs font-mono font-semibold uppercase text-[#5f636e] mb-1.5">
              Subject
            </label>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
              {(['Mathematics', 'Physics', 'Chemistry', 'Biology'] as SubjectName[]).map((s) => (
                <button
                  key={s}
                  type="button"
                  onClick={() => setSubject(s)}
                  className={cn(
                    'py-2 px-2.5 rounded-lg border text-xs font-medium transition-colors text-center',
                    subject === s
                      ? 'bg-indigo-50 border-indigo-300 text-indigo-900 font-semibold'
                      : 'bg-[#fafaf8] border-[#e8e8e2] text-[#5f636e] hover:border-[#d4d4ca]'
                  )}
                >
                  {s}
                </button>
              ))}
            </div>
          </div>

          {/* File Dropzone */}
          <div>
            <label className="block text-xs font-mono font-semibold uppercase text-[#5f636e] mb-1.5">
              Paper Document (PDF)
            </label>
            <div
              onClick={handleSimulateSelectFile}
              className={cn(
                'border-2 border-dashed rounded-xl p-5 text-center cursor-pointer transition-colors',
                file
                  ? 'border-indigo-300 bg-indigo-50/40'
                  : 'border-[#e0e0d6] hover:border-[#c4c4b8] bg-[#fafaf8]'
              )}
            >
              {file ? (
                <div className="flex items-center justify-center gap-2.5 text-xs text-indigo-900 font-medium">
                  <FileText className="w-5 h-5 text-indigo-600" />
                  <span className="font-mono">{file.name}</span>
                  <span className="text-[#8b8f9a]">({file.size})</span>
                </div>
              ) : (
                <div className="flex flex-col items-center">
                  <UploadCloud className="w-8 h-8 text-[#8b8f9a] mb-2" />
                  <span className="text-xs font-semibold text-[#121316]">
                    Click to select exam paper PDF
                  </span>
                  <span className="text-[11px] text-[#8b8f9a] mt-0.5">
                    Official question paper scans or digital PDFs (max 25MB)
                  </span>
                </div>
              )}
            </div>
          </div>

          {uploadError && (
            <div className="flex items-center gap-2 text-xs text-rose-700 bg-rose-50 border border-rose-200 p-2.5 rounded-lg">
              <AlertCircle className="w-4 h-4 shrink-0" />
              <span>{uploadError}</span>
            </div>
          )}

          {/* Footer */}
          <div className="flex items-center justify-end gap-3 pt-3 border-t border-[#e8e8e2]">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 text-xs font-medium text-[#5f636e] hover:text-[#121316] transition-colors"
            >
              Cancel
            </button>
            <button
              type="submit"
              disabled={isUploading}
              className="px-5 py-2 rounded-lg bg-[#121316] hover:bg-[#25272c] text-white text-xs font-semibold transition-colors disabled:opacity-50"
            >
              {isUploading ? 'Uploading & Parsing...' : 'Add Paper'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
