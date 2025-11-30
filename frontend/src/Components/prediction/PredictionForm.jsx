import React from 'react';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';
import { Sword, Skull, HandHelping, Sparkles, Loader2 } from 'lucide-react';

export default function PredictionForm({ formData, setFormData, onSubmit, isLoading }) {
    const handleChange = (field, value) => {
        const numValue = value === '' ? '' : Math.max(0, parseInt(value) || 0);
        setFormData(prev => ({ ...prev, [field]: numValue }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit();
    };

    const inputFields = [
        { 
            key: 'kills', 
            label: 'Kills', 
            icon: Sword, 
            color: 'cyan',
            placeholder: 'Enter kills count'
        },
        { 
            key: 'deaths', 
            label: 'Deaths', 
            icon: Skull, 
            color: 'red',
            placeholder: 'Enter deaths count'
        },
        { 
            key: 'assists', 
            label: 'Assists', 
            icon: HandHelping, 
            color: 'purple',
            placeholder: 'Enter assists count'
        },
    ];

    const colorClasses = {
        cyan: 'text-cyan-400 bg-cyan-500/10 border-cyan-500/30 focus-within:border-cyan-500/60',
        red: 'text-red-400 bg-red-500/10 border-red-500/30 focus-within:border-red-500/60',
        purple: 'text-purple-400 bg-purple-500/10 border-purple-500/30 focus-within:border-purple-500/60',
    };

    return (
        <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {inputFields.map(({ key, label, icon: Icon, color, placeholder }) => (
                    <div key={key} className="space-y-2">
                        <Label className="text-sm text-slate-400 flex items-center gap-2">
                            <Icon className={`w-4 h-4 ${colorClasses[color].split(' ')[0]}`} />
                            {label}
                        </Label>
                        <div className={`relative rounded-xl border transition-all ${colorClasses[color]}`}>
                            <Input
                                type="number"
                                min="0"
                                value={formData[key]}
                                onChange={(e) => handleChange(key, e.target.value)}
                                placeholder={placeholder}
                                className="bg-transparent border-0 text-white placeholder:text-slate-500 text-lg font-medium h-14 focus-visible:ring-0 focus-visible:ring-offset-0"
                            />
                        </div>
                    </div>
                ))}
            </div>

            <Button
                type="submit"
                disabled={isLoading || formData.kills === '' || formData.deaths === '' || formData.assists === ''}
                className="w-full h-14 rounded-xl bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-400 hover:to-purple-500 text-white font-semibold text-lg shadow-lg shadow-cyan-500/25 transition-all hover:shadow-cyan-500/40 hover:scale-[1.01] disabled:opacity-50 disabled:cursor-not-allowed"
            >
                {isLoading ? (
                    <>
                        <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                        Predicting...
                    </>
                ) : (
                    <>
                        <Sparkles className="w-5 h-5 mr-2" />
                        Predict Medal & Score
                    </>
                )}
            </Button>
        </form>
    );
}