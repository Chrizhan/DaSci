import React from 'react';
import { cn } from '@/lib/utils';

export default function StatsCard({ icon: Icon, label, value, color = 'cyan', className }) {
    const colorClasses = {
        cyan: 'from-cyan-500/20 to-cyan-600/10 border-cyan-500/20 text-cyan-400',
        purple: 'from-purple-500/20 to-purple-600/10 border-purple-500/20 text-purple-400',
        red: 'from-red-500/20 to-red-600/10 border-red-500/20 text-red-400',
        green: 'from-green-500/20 to-green-600/10 border-green-500/20 text-green-400',
        yellow: 'from-yellow-500/20 to-yellow-600/10 border-yellow-500/20 text-yellow-400',
        orange: 'from-orange-500/20 to-orange-600/10 border-orange-500/20 text-orange-400',
    };

    return (
        <div className={cn(
            "relative overflow-hidden rounded-2xl border bg-gradient-to-br p-6 transition-all hover:scale-[1.02]",
            colorClasses[color],
            className
        )}>
            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-white/5 to-transparent rounded-full -translate-y-1/2 translate-x-1/2" />
            
            <div className="relative">
                {Icon && (
                    <div className={cn("p-3 rounded-xl bg-gradient-to-br w-fit mb-4", colorClasses[color])}>
                        <Icon className="w-5 h-5" />
                    </div>
                )}
                <p className="text-sm text-slate-400 mb-1">{label}</p>
                <p className="text-2xl font-bold text-white">{value}</p>
            </div>
        </div>
    );
}