import React, { useState } from 'react';
import { Sparkles, Loader2, Send, Upload, FileText, Building2, MapPin, Calendar, DollarSign, Briefcase, CheckCircle2, AlertCircle } from 'lucide-react';
import { generateProjectBrief } from '../services/geminiService';
import SEO from '../components/SEO';

const sectors = [
  "Offshore Construction",
  "Onshore Oil & Gas",
  "Renewable Energy (Wind/Solar)",
  "Heavy Infrastructure",
  "Petrochemical / Refining",
  "Pipeline Systems",
  "Power Generation",
  "Other"
];

const budgets = [
  "Under $10 Million",
  "$10 Million - $50 Million",
  "$50 Million - $100 Million",
  "$100 Million - $500 Million",
  "$500 Million+",
  "To Be Determined"
];

const serviceOptions = [
  "EPC (Engineering, Procurement, Construction)",
  "FEED (Front-End Engineering Design)",
  "Project Management Consultancy",
  "Maintenance & Turnaround",
  "Feasibility Study",
  "Fabrication & Installation",
  "HSE Consulting",
  "Logistics & Heavy Lift"
];

const Quote: React.FC = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    company: '',
    role: '',
    projectName: '',
    location: '',
    sector: '',
    budget: '',
    timeline: '',
    serviceType: [] as string[],
    description: '',
  });

  const [aiPrompt, setAiPrompt] = useState('');
  const [isGenerating, setIsGenerating] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [dragActive, setDragActive] = useState(false);

  const handleServiceChange = (service: string) => {
    setFormData(prev => {
      const exists = prev.serviceType.includes(service);
      if (exists) {
        return { ...prev, serviceType: prev.serviceType.filter(s => s !== service) };
      }
      return { ...prev, serviceType: [...prev.serviceType, service] };
    });
  };

  const handleAiAssist = async () => {
    if (!aiPrompt.trim()) return;
    
    setIsGenerating(true);
    try {
      // Generate a refined brief based on user input
      const refinedText = await generateProjectBrief(aiPrompt);
      // Populate the main description field
      setFormData(prev => ({ 
        ...prev, 
        description: prev.description ? `${prev.description}\n\n[AI Refinement]:\n${refinedText}` : refinedText 
      }));
      setAiPrompt(''); // Clear the prompt area
    } catch (error) {
      console.error("Failed to generate brief", error);
    } finally {
      setIsGenerating(false);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate submission delay
    setTimeout(() => {
        setIsSubmitted(true);
        window.scrollTo(0,0);
    }, 1500);
  };

  const handleDrag = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === "dragenter" || e.type === "dragover") {
      setDragActive(true);
    } else if (e.type === "dragleave") {
      setDragActive(false);
    }
  };

  if (isSubmitted) {
      return (
          <div className="min-h-screen pt-32 pb-20 px-4 flex items-center justify-center bg-zenthera-light">
              <SEO title="Proposal Request Received" description="Thank you for submitting your project inquiry." />
              <div className="bg-white p-12 max-w-2xl text-center shadow-xl border-t-4 border-zenthera-gold" data-aos="zoom-in">
                  <CheckCircle2 size={64} className="mx-auto text-green-600 mb-6" />
                  <h2 className="font-serif text-3xl mb-4 text-zenthera-dark">RFP Received Successfully</h2>
                  <p className="text-gray-600 mb-8 text-lg">
                    Thank you, <span className="font-bold">{formData.firstName}</span>. Your request for <span className="font-bold">{formData.projectName || 'your project'}</span> has been logged in our tender system. 
                    <br /><br />
                    Reference ID: <span className="font-mono bg-gray-100 px-2 py-1 rounded text-black">TR-{Math.floor(Math.random() * 10000)}</span>
                  </p>
                  <p className="text-sm text-gray-500 mb-8">
                    Our Commercial Director for the {formData.sector || 'relevant'} sector will review the scope and reach out to <span className="font-bold">{formData.email}</span> within 48 hours.
                  </p>
                  <button onClick={() => {setIsSubmitted(false); setFormData({...formData, description: '', serviceType: []})}} className="bg-black text-white px-8 py-3 uppercase tracking-widest text-sm font-bold hover:bg-zenthera-gold transition-colors">
                      Submit Another Request
                  </button>
              </div>
          </div>
      )
  }

  return (
    <div className="pt-24 min-h-screen bg-gray-50">
      <SEO 
        title="Request for Proposal (RFP)" 
        description="Submit a detailed Request for Proposal for your heavy industrial, oil & gas, or infrastructure project." 
        keywords="construction rfp, tender submission, EPC quote, engineering proposal"
      />
      
      {/* Header */}
      <div className="bg-zenthera-dark text-white py-20 px-4">
        <div className="max-w-4xl mx-auto text-center" data-aos="fade-down">
          <span className="text-zenthera-gold text-sm uppercase tracking-widest font-bold mb-4 block">Tender Portal</span>
          <h1 className="font-serif text-5xl md:text-6xl mb-6">Request for Proposal</h1>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            Partner with Zenthera Groups for your next major venture. Provide your project details below for a comprehensive technical and commercial assessment.
          </p>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-4 -mt-10 pb-24 relative z-10">
        <form onSubmit={handleSubmit} className="bg-white shadow-xl rounded-sm overflow-hidden" data-aos="fade-up" data-aos-duration="1000">
          
          {/* SECTION 1: CLIENT INFO */}
          <div className="p-8 md:p-12 border-b border-gray-100">
            <h2 className="font-serif text-2xl text-zenthera-dark mb-8 flex items-center gap-3">
              <span className="bg-zenthera-gold text-white w-8 h-8 rounded-full flex items-center justify-center text-sm font-sans font-bold">1</span>
              Client Information
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-2">
                <label className="text-xs uppercase tracking-widest font-bold text-gray-500">First Name <span className="text-red-500">*</span></label>
                <input required type="text" className="w-full bg-gray-50 border border-gray-200 p-3 focus:outline-none focus:border-zenthera-gold transition-colors"
                  value={formData.firstName} onChange={(e) => setFormData({...formData, firstName: e.target.value})} />
              </div>
              <div className="space-y-2">
                <label className="text-xs uppercase tracking-widest font-bold text-gray-500">Last Name <span className="text-red-500">*</span></label>
                <input required type="text" className="w-full bg-gray-50 border border-gray-200 p-3 focus:outline-none focus:border-zenthera-gold transition-colors"
                  value={formData.lastName} onChange={(e) => setFormData({...formData, lastName: e.target.value})} />
              </div>
              <div className="space-y-2">
                <label className="text-xs uppercase tracking-widest font-bold text-gray-500">Corporate Email <span className="text-red-500">*</span></label>
                <input required type="email" className="w-full bg-gray-50 border border-gray-200 p-3 focus:outline-none focus:border-zenthera-gold transition-colors"
                  value={formData.email} onChange={(e) => setFormData({...formData, email: e.target.value})} />
              </div>
              <div className="space-y-2">
                <label className="text-xs uppercase tracking-widest font-bold text-gray-500">Phone Number <span className="text-red-500">*</span></label>
                <input required type="tel" className="w-full bg-gray-50 border border-gray-200 p-3 focus:outline-none focus:border-zenthera-gold transition-colors"
                  value={formData.phone} onChange={(e) => setFormData({...formData, phone: e.target.value})} />
              </div>
              <div className="space-y-2">
                <label className="text-xs uppercase tracking-widest font-bold text-gray-500 flex items-center gap-2"><Building2 size={14} /> Company Name</label>
                <input type="text" className="w-full bg-gray-50 border border-gray-200 p-3 focus:outline-none focus:border-zenthera-gold transition-colors"
                  value={formData.company} onChange={(e) => setFormData({...formData, company: e.target.value})} />
              </div>
              <div className="space-y-2">
                <label className="text-xs uppercase tracking-widest font-bold text-gray-500 flex items-center gap-2"><Briefcase size={14} /> Job Title</label>
                <input type="text" className="w-full bg-gray-50 border border-gray-200 p-3 focus:outline-none focus:border-zenthera-gold transition-colors"
                  value={formData.role} onChange={(e) => setFormData({...formData, role: e.target.value})} />
              </div>
            </div>
          </div>

          {/* SECTION 2: PROJECT PARAMETERS */}
          <div className="p-8 md:p-12 border-b border-gray-100 bg-gray-50/50">
            <h2 className="font-serif text-2xl text-zenthera-dark mb-8 flex items-center gap-3">
              <span className="bg-zenthera-gold text-white w-8 h-8 rounded-full flex items-center justify-center text-sm font-sans font-bold">2</span>
              Project Parameters
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
               <div className="col-span-1 md:col-span-2 space-y-2">
                <label className="text-xs uppercase tracking-widest font-bold text-gray-500">Project Name / Reference <span className="text-red-500">*</span></label>
                <input required type="text" className="w-full bg-white border border-gray-200 p-3 focus:outline-none focus:border-zenthera-gold transition-colors"
                  placeholder="e.g. West Texas Pipeline Expansion - Phase 2"
                  value={formData.projectName} onChange={(e) => setFormData({...formData, projectName: e.target.value})} />
              </div>
               <div className="space-y-2">
                <label className="text-xs uppercase tracking-widest font-bold text-gray-500 flex items-center gap-2"><MapPin size={14} /> Project Location</label>
                <input required type="text" className="w-full bg-white border border-gray-200 p-3 focus:outline-none focus:border-zenthera-gold transition-colors"
                  value={formData.location} onChange={(e) => setFormData({...formData, location: e.target.value})} />
              </div>
              <div className="space-y-2">
                <label className="text-xs uppercase tracking-widest font-bold text-gray-500">Industry Sector</label>
                <select className="w-full bg-white border border-gray-200 p-3 focus:outline-none focus:border-zenthera-gold transition-colors appearance-none"
                  value={formData.sector} onChange={(e) => setFormData({...formData, sector: e.target.value})}>
                  <option value="">Select a Sector</option>
                  {sectors.map(s => <option key={s} value={s}>{s}</option>)}
                </select>
              </div>
              <div className="space-y-2">
                <label className="text-xs uppercase tracking-widest font-bold text-gray-500 flex items-center gap-2"><DollarSign size={14} /> Estimated Budget</label>
                <select className="w-full bg-white border border-gray-200 p-3 focus:outline-none focus:border-zenthera-gold transition-colors appearance-none"
                  value={formData.budget} onChange={(e) => setFormData({...formData, budget: e.target.value})}>
                  <option value="">Select Budget Range</option>
                  {budgets.map(b => <option key={b} value={b}>{b}</option>)}
                </select>
              </div>
              <div className="space-y-2">
                <label className="text-xs uppercase tracking-widest font-bold text-gray-500 flex items-center gap-2"><Calendar size={14} /> Target Timeline</label>
                <input type="text" className="w-full bg-white border border-gray-200 p-3 focus:outline-none focus:border-zenthera-gold transition-colors"
                  placeholder="e.g. Q3 2024 - Q4 2026"
                  value={formData.timeline} onChange={(e) => setFormData({...formData, timeline: e.target.value})} />
              </div>
            </div>

            <div className="space-y-4">
               <label className="text-xs uppercase tracking-widest font-bold text-gray-500">Services Required</label>
               <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                  {serviceOptions.map((service) => (
                    <div 
                      key={service} 
                      className={`border p-4 cursor-pointer transition-all duration-200 flex items-start gap-3 ${
                        formData.serviceType.includes(service) 
                          ? 'border-zenthera-gold bg-amber-50' 
                          : 'border-gray-200 bg-white hover:border-gray-400'
                      }`}
                      onClick={() => handleServiceChange(service)}
                    >
                      <div className={`w-5 h-5 rounded border flex items-center justify-center shrink-0 mt-0.5 ${
                        formData.serviceType.includes(service) ? 'bg-zenthera-gold border-zenthera-gold text-white' : 'border-gray-300'
                      }`}>
                         {formData.serviceType.includes(service) && <CheckCircle2 size={14} />}
                      </div>
                      <span className="text-sm font-medium text-gray-700 leading-tight">{service}</span>
                    </div>
                  ))}
               </div>
            </div>
          </div>

          {/* SECTION 3: SCOPE & AI */}
          <div className="p-8 md:p-12 border-b border-gray-100">
             <h2 className="font-serif text-2xl text-zenthera-dark mb-8 flex items-center gap-3">
              <span className="bg-zenthera-gold text-white w-8 h-8 rounded-full flex items-center justify-center text-sm font-sans font-bold">3</span>
              Scope of Work
            </h2>
            
            {/* AI Assistant Box */}
            <div className="bg-gray-900 text-white p-6 md:p-8 mb-8 rounded-lg relative overflow-hidden">
               <div className="absolute top-0 right-0 p-4 opacity-10">
                  <Sparkles size={120} />
               </div>
               <div className="relative z-10">
                  <h3 className="flex items-center gap-2 font-serif text-xl text-zenthera-gold mb-2">
                    <Sparkles size={20} /> AI Scope Architect
                  </h3>
                  <p className="text-gray-400 text-sm mb-4 max-w-xl">
                    Not sure how to phrase your technical requirements? Type a rough draft below, and our AI will structure it into a formal engineering scope for your proposal.
                  </p>
                  
                  <div className="flex flex-col md:flex-row gap-4">
                    <input 
                      type="text" 
                      className="flex-grow bg-white/10 border border-white/20 text-white placeholder-gray-500 p-3 focus:outline-none focus:border-zenthera-gold rounded-sm"
                      placeholder="e.g. We need to build a 20km subsea pipeline with 2 tie-in points..."
                      value={aiPrompt}
                      onChange={(e) => setAiPrompt(e.target.value)}
                      onKeyDown={(e) => e.key === 'Enter' && (e.preventDefault(), handleAiAssist())}
                    />
                    <button 
                      type="button"
                      onClick={handleAiAssist}
                      disabled={isGenerating || !aiPrompt}
                      className="bg-zenthera-gold text-black px-6 py-3 uppercase tracking-widest text-xs font-bold hover:bg-white transition-colors flex items-center justify-center gap-2 whitespace-nowrap disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                       {isGenerating ? <Loader2 className="animate-spin" size={16} /> : "Refine Scope"}
                    </button>
                  </div>
               </div>
            </div>

            <div className="space-y-2">
               <label className="text-xs uppercase tracking-widest font-bold text-gray-500">Detailed Project Description</label>
               <textarea 
                  required
                  className="w-full bg-gray-50 border border-gray-200 p-4 focus:outline-none focus:border-zenthera-gold transition-colors min-h-[200px] leading-relaxed"
                  placeholder="Provide technical details, constraints, and specific deliverables..."
                  value={formData.description}
                  onChange={(e) => setFormData({...formData, description: e.target.value})}
               ></textarea>
            </div>
          </div>

          {/* SECTION 4: DOCUMENTS */}
          <div className="p-8 md:p-12 bg-gray-50/50">
             <h2 className="font-serif text-2xl text-zenthera-dark mb-8 flex items-center gap-3">
              <span className="bg-zenthera-gold text-white w-8 h-8 rounded-full flex items-center justify-center text-sm font-sans font-bold">4</span>
              Documentation
            </h2>
            
            <div 
              className={`border-2 border-dashed rounded-lg p-10 text-center transition-colors duration-300 ${
                dragActive ? 'border-zenthera-gold bg-amber-50/50' : 'border-gray-300 bg-white hover:border-gray-400'
              }`}
              onDragEnter={handleDrag}
              onDragLeave={handleDrag}
              onDragOver={handleDrag}
              onDrop={handleDrag}
            >
               <Upload className="mx-auto text-gray-400 mb-4" size={40} />
               <p className="font-bold text-gray-700 mb-2">Upload Tender Documents</p>
               <p className="text-sm text-gray-500 mb-6">Drag & drop files here, or click to browse</p>
               <p className="text-xs text-gray-400">Supported formats: PDF, DWG, XLSX, DOCX (Max 50MB)</p>
               <button type="button" className="mt-6 text-xs uppercase tracking-widest font-bold border-b border-black pb-1 hover:text-zenthera-gold hover:border-zenthera-gold transition-colors">
                 Browse Files
               </button>
            </div>
            
            <div className="mt-6 flex items-start gap-3 p-4 bg-blue-50 border border-blue-100 rounded text-blue-800 text-sm">
               <AlertCircle size={20} className="shrink-0 mt-0.5" />
               <p>Please ensure all sensitive technical drawings are watermarked. A Non-Disclosure Agreement (NDA) will be automatically generated upon submission.</p>
            </div>
          </div>

          {/* FOOTER */}
          <div className="p-8 md:p-12 border-t border-gray-100 flex flex-col items-center text-center">
             <p className="text-gray-500 text-sm mb-8 max-w-2xl">
               By submitting this request, you acknowledge that Zenthera Groups will process your data in accordance with our Privacy Policy. This form constitutes a preliminary inquiry and does not create a binding contract.
             </p>
             <button 
              type="submit"
              className="bg-zenthera-dark text-white px-16 py-5 text-sm uppercase tracking-widest font-bold hover:bg-zenthera-gold transition-colors duration-300 flex items-center gap-3 shadow-lg transform hover:-translate-y-1"
             >
               Submit Proposal Request <Send size={18} />
             </button>
          </div>

        </form>
      </div>
    </div>
  );
};

export default Quote;