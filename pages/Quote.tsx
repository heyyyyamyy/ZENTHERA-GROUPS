import React, { useState } from 'react';
import { Sparkles, Loader2, Send, Upload, Building2, MapPin, Calendar, DollarSign, Briefcase, CheckCircle2, AlertCircle } from 'lucide-react';
import { generateProjectBrief } from '../services/geminiService';
import SEO from '../components/SEO';

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
      const refinedText = await generateProjectBrief(aiPrompt);
      setFormData(prev => ({ 
        ...prev, 
        description: prev.description ? `${prev.description}\n\n--- AI Suggested Scope ---\n${refinedText}` : refinedText 
      }));
      setAiPrompt('');
    } finally {
      setIsGenerating(false);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setTimeout(() => {
        setIsSubmitted(true);
        window.scrollTo(0,0);
    }, 1500);
  };

  const handleDrag = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === "dragenter" || e.type === "dragover") setDragActive(true);
    else if (e.type === "dragleave" || e.type === "drop") setDragActive(false);
  };

  if (isSubmitted) {
      return (
          <div className="min-h-screen pt-32 pb-20 px-4 flex items-center justify-center bg-gray-50">
              <SEO title="Request Received" description="Thank you for your inquiry." />
              <div className="bg-white p-12 max-w-xl w-full text-center shadow-2xl border-t-4 border-zenthera-gold">
                  <div className="w-20 h-20 bg-green-50 rounded-full flex items-center justify-center mx-auto mb-6">
                    <CheckCircle2 size={40} className="text-green-600" />
                  </div>
                  <h2 className="font-serif text-3xl mb-4 text-zenthera-dark">Proposal Request Logged</h2>
                  <p className="text-gray-600 mb-8">
                    Reference ID: <span className="font-mono font-bold text-black">TR-{Math.floor(Math.random() * 10000)}</span><br/>
                    Our commercial team will review your specifications and contact <span className="font-bold text-black">{formData.email}</span> within 48 hours.
                  </p>
                  <button onClick={() => {setIsSubmitted(false); setFormData({...formData, description: '', serviceType: []})}} className="text-sm uppercase tracking-widest font-bold border-b border-black pb-1 hover:text-zenthera-gold hover:border-zenthera-gold transition-colors">
                      Submit Another Request
                  </button>
              </div>
          </div>
      )
  }

  return (
    <div className="pt-24 min-h-screen bg-gray-50">
      <SEO title="Request for Proposal" description="Submit a tender request." />
      
      {/* Header */}
      <div className="bg-zenthera-dark text-white py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <span className="text-zenthera-gold text-sm uppercase tracking-widest font-bold mb-4 block">Tender Portal</span>
          <h1 className="font-serif text-5xl md:text-6xl mb-6">Request for Proposal</h1>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            Provide your project details below for a comprehensive technical and commercial assessment.
          </p>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-4 -mt-10 pb-24 relative z-10">
        <form onSubmit={handleSubmit} className="bg-white shadow-xl rounded-sm overflow-hidden">
          
          {/* 1. Contact Info */}
          <div className="p-8 md:p-12 border-b border-gray-100">
            <h2 className="font-serif text-2xl mb-8 flex items-center gap-3">
              <span className="bg-black text-white w-8 h-8 rounded-full flex items-center justify-center text-sm font-sans font-bold">1</span>
              Client Information
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {['First Name', 'Last Name', 'Corporate Email', 'Phone Number'].map((label) => (
                <div key={label} className="space-y-2">
                   <label className="text-xs uppercase tracking-widest font-bold text-gray-500">{label} *</label>
                   <input 
                      required 
                      type={label.includes('Email') ? 'email' : 'text'} 
                      className="w-full bg-gray-50 border border-gray-200 p-3 focus:outline-none focus:border-zenthera-gold focus:bg-white transition-all"
                      onChange={(e) => {
                        const key = label.toLowerCase().replace(' ', '') === 'phonenumber' ? 'phone' : label.toLowerCase().replace(' ', '') === 'corporateemail' ? 'email' : label.toLowerCase().replace(' ', '');
                        setFormData({...formData, [key]: e.target.value});
                      }}
                   />
                </div>
              ))}
              <div className="space-y-2">
                <label className="text-xs uppercase tracking-widest font-bold text-gray-500 flex items-center gap-2"><Building2 size={14} /> Company</label>
                <input className="w-full bg-gray-50 border border-gray-200 p-3 focus:outline-none focus:border-zenthera-gold focus:bg-white transition-all" onChange={(e) => setFormData({...formData, company: e.target.value})} />
              </div>
              <div className="space-y-2">
                 <label className="text-xs uppercase tracking-widest font-bold text-gray-500 flex items-center gap-2"><Briefcase size={14} /> Job Title</label>
                 <input className="w-full bg-gray-50 border border-gray-200 p-3 focus:outline-none focus:border-zenthera-gold focus:bg-white transition-all" onChange={(e) => setFormData({...formData, role: e.target.value})} />
              </div>
            </div>
          </div>

          {/* 2. Project Details */}
          <div className="p-8 md:p-12 border-b border-gray-100 bg-gray-50/30">
            <h2 className="font-serif text-2xl mb-8 flex items-center gap-3">
              <span className="bg-black text-white w-8 h-8 rounded-full flex items-center justify-center text-sm font-sans font-bold">2</span>
              Project Parameters
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
               <div className="col-span-1 md:col-span-2 space-y-2">
                <label className="text-xs uppercase tracking-widest font-bold text-gray-500">Project Name / Reference *</label>
                <input required className="w-full bg-white border border-gray-200 p-3 focus:outline-none focus:border-zenthera-gold transition-all" placeholder="e.g. West Texas Pipeline Expansion" onChange={(e) => setFormData({...formData, projectName: e.target.value})} />
              </div>
               <div className="space-y-2">
                <label className="text-xs uppercase tracking-widest font-bold text-gray-500 flex items-center gap-2"><MapPin size={14} /> Location</label>
                <input required className="w-full bg-white border border-gray-200 p-3 focus:outline-none focus:border-zenthera-gold transition-all" onChange={(e) => setFormData({...formData, location: e.target.value})} />
              </div>
              <div className="space-y-2">
                <label className="text-xs uppercase tracking-widest font-bold text-gray-500">Industry Sector</label>
                <select className="w-full bg-white border border-gray-200 p-3 focus:outline-none focus:border-zenthera-gold transition-all appearance-none" onChange={(e) => setFormData({...formData, sector: e.target.value})}>
                  <option value="">Select Sector</option>
                  {["Offshore", "Oil & Gas", "Renewable Energy", "Infrastructure", "Petrochemicals"].map(s => <option key={s} value={s}>{s}</option>)}
                </select>
              </div>
              <div className="space-y-2">
                <label className="text-xs uppercase tracking-widest font-bold text-gray-500 flex items-center gap-2"><DollarSign size={14} /> Budget</label>
                <select className="w-full bg-white border border-gray-200 p-3 focus:outline-none focus:border-zenthera-gold transition-all appearance-none" onChange={(e) => setFormData({...formData, budget: e.target.value})}>
                  <option value="">Select Budget</option>
                  {["< $10M", "$10M - $50M", "$50M - $100M", "$100M - $500M", "$500M+"].map(b => <option key={b} value={b}>{b}</option>)}
                </select>
              </div>
              <div className="space-y-2">
                <label className="text-xs uppercase tracking-widest font-bold text-gray-500 flex items-center gap-2"><Calendar size={14} /> Timeline</label>
                <input className="w-full bg-white border border-gray-200 p-3 focus:outline-none focus:border-zenthera-gold transition-all" placeholder="e.g. Q3 2024 - Q4 2026" onChange={(e) => setFormData({...formData, timeline: e.target.value})} />
              </div>
            </div>

            <div className="space-y-4">
               <label className="text-xs uppercase tracking-widest font-bold text-gray-500">Services Required</label>
               <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3">
                  {["EPC", "FEED", "Consultancy", "Maintenance", "Fabrication", "HSE", "Logistics", "Feasibility"].map((service) => (
                    <div 
                      key={service} 
                      className={`border p-3 cursor-pointer transition-all flex items-center gap-3 text-sm font-medium ${
                        formData.serviceType.includes(service) ? 'border-zenthera-gold bg-amber-50 text-black' : 'border-gray-200 bg-white text-gray-600 hover:border-gray-400'
                      }`}
                      onClick={() => handleServiceChange(service)}
                    >
                      <div className={`w-4 h-4 rounded border flex items-center justify-center shrink-0 ${formData.serviceType.includes(service) ? 'bg-zenthera-gold border-zenthera-gold text-white' : 'border-gray-300'}`}>
                         {formData.serviceType.includes(service) && <CheckCircle2 size={12} />}
                      </div>
                      {service}
                    </div>
                  ))}
               </div>
            </div>
          </div>

          {/* 3. Scope & AI */}
          <div className="p-8 md:p-12 border-b border-gray-100">
             <h2 className="font-serif text-2xl mb-8 flex items-center gap-3">
              <span className="bg-black text-white w-8 h-8 rounded-full flex items-center justify-center text-sm font-sans font-bold">3</span>
              Scope of Work
            </h2>
            
            <div className="bg-[#0a0a0a] text-white p-6 md:p-8 mb-8 rounded-sm relative overflow-hidden group">
               <div className="absolute -top-10 -right-10 text-white/5 group-hover:text-white/10 transition-colors duration-500">
                  <Sparkles size={150} />
               </div>
               <div className="relative z-10">
                  <h3 className="flex items-center gap-2 font-serif text-xl text-zenthera-gold mb-3">
                    <Sparkles size={18} /> AI Scope Architect
                  </h3>
                  <p className="text-gray-400 text-sm mb-4">
                    Describe your project loosely, and our AI will format it into a technical engineering brief.
                  </p>
                  
                  <div className="flex flex-col md:flex-row gap-3">
                    <input 
                      type="text" 
                      className="flex-grow bg-white/10 border border-white/20 text-white placeholder-gray-500 px-4 py-3 focus:outline-none focus:border-zenthera-gold rounded-sm text-sm"
                      placeholder="e.g. Build a 20km subsea pipeline with 2 tie-in points..."
                      value={aiPrompt}
                      onChange={(e) => setAiPrompt(e.target.value)}
                      onKeyDown={(e) => e.key === 'Enter' && (e.preventDefault(), handleAiAssist())}
                    />
                    <button 
                      type="button"
                      onClick={handleAiAssist}
                      disabled={isGenerating || !aiPrompt}
                      className="bg-zenthera-gold text-black px-6 py-3 uppercase tracking-widest text-xs font-bold hover:bg-white transition-colors flex items-center justify-center gap-2 disabled:opacity-50"
                    >
                       {isGenerating ? <Loader2 className="animate-spin" size={16} /> : "Generate Brief"}
                    </button>
                  </div>
               </div>
            </div>

            <div className="space-y-2">
               <label className="text-xs uppercase tracking-widest font-bold text-gray-500">Detailed Description *</label>
               <textarea 
                  required
                  className="w-full bg-gray-50 border border-gray-200 p-4 focus:outline-none focus:border-zenthera-gold transition-all min-h-[200px]"
                  placeholder="Technical details, constraints, and deliverables..."
                  value={formData.description}
                  onChange={(e) => setFormData({...formData, description: e.target.value})}
               ></textarea>
            </div>
          </div>

          {/* 4. Docs */}
          <div className="p-8 md:p-12 bg-gray-50/50">
             <h2 className="font-serif text-2xl mb-8 flex items-center gap-3">
              <span className="bg-black text-white w-8 h-8 rounded-full flex items-center justify-center text-sm font-sans font-bold">4</span>
              Documentation
            </h2>
            
            <div 
              className={`border-2 border-dashed rounded-sm p-10 text-center transition-colors ${
                dragActive ? 'border-zenthera-gold bg-amber-50' : 'border-gray-300 bg-white hover:border-gray-400'
              }`}
              onDragEnter={handleDrag}
              onDragLeave={handleDrag}
              onDragOver={handleDrag}
              onDrop={handleDrag}
            >
               <Upload className="mx-auto text-gray-400 mb-4" size={32} />
               <p className="font-bold text-gray-700 mb-1">Upload Tender Documents</p>
               <p className="text-xs text-gray-400">PDF, DWG, XLSX (Max 50MB)</p>
               <button type="button" className="mt-6 text-xs uppercase tracking-widest font-bold border-b border-black pb-1 hover:text-zenthera-gold hover:border-zenthera-gold transition-colors">
                 Browse Files
               </button>
            </div>
            
            <div className="mt-6 flex items-start gap-3 p-4 bg-blue-50 border border-blue-100 rounded text-blue-800 text-xs">
               <AlertCircle size={16} className="shrink-0 mt-0.5" />
               <p>Sensitive technical drawings should be watermarked. A Non-Disclosure Agreement (NDA) will be generated upon submission.</p>
            </div>
          </div>

          {/* Submit */}
          <div className="p-8 md:p-12 border-t border-gray-100 text-center">
             <button 
              type="submit"
              className="bg-black text-white px-16 py-5 text-sm uppercase tracking-widest font-bold hover:bg-zenthera-gold transition-all duration-300 shadow-xl hover:-translate-y-1"
             >
               Submit Proposal Request
             </button>
             <p className="text-gray-400 text-xs mt-6">
               Protected by reCAPTCHA and the Google Privacy Policy and Terms of Service apply.
             </p>
          </div>

        </form>
      </div>
    </div>
  );
};

export default Quote;