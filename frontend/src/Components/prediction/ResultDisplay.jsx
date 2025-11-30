import React from 'react';
import { motion } from 'framer-motion';
import { Trophy, Star, Target, TrendingUp, Award } from 'lucide-react';
import { cn } from '@/lib/utils';

const medalConfig = {
    'Gold': {
        color: 'from-yellow-400 to-amber-600',
        bgColor: 'from-yellow-500/20 to-amber-600/10',
        borderColor: 'border-yellow-500/30',
        textColor: 'text-yellow-400',
        icon: Trophy,
    },
    'Silver': {
        color: 'from-slate-300 to-slate-500',
        bgColor: 'from-slate-300/20 to-slate-500/10',
        borderColor: 'border-slate-400/30',
        textColor: 'text-slate-300',
        icon: Award,
    },
    'Bronze': {
        color: 'from-orange-400 to-orange-700',
        bgColor: 'from-orange-500/20 to-orange-700/10',
        borderColor: 'border-orange-500/30',
        textColor: 'text-orange-400',
        icon: Star,
    },
};

export default function ResultsDisplay({ result, inputData }) {
    if (!result) return null;

    const medal = result.predicted_medal || 'Bronze';
    const score = result.predicted_score || 0;
    const config = medalConfig[medal] || medalConfig['Bronze'];
    const MedalIcon = config.icon;

    const kda = inputData.deaths > 0 
        ? ((inputData.kills + inputData.assists) / inputData.deaths).toFixed(2)
        : (inputData.kills + inputData.assists).toFixed(2);

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mt-8"
        >
            <div className={cn(
                "relative overflow-hidden rounded-3xl border bg-gradient-to-br p-8",
                config.bgColor,
                config.borderColor
            )}>
                {/* Background decoration */}
                <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-white/5 to-transparent rounded-full -translate-y-1/2 translate-x-1/2" />
                <div className="absolute bottom-0 left-0 w-48 h-48 bg-gradient-to-tr from-white/5 to-transparent rounded-full translate-y-1/2 -translate-x-1/2" />

                <div className="relative">
                    {/* Header */}
                    <div className="text-center mb-8">
                        <p className="text-sm text-slate-400 uppercase tracking-wider mb-2">Prediction Result</p>
                        <h3 className="text-2xl font-bold text-white">Performance Analysis</h3>
                    </div>

                    {/* Main Result */}
                    <div className="flex flex-col md:flex-row items-center justify-center gap-8 mb-8">
                        {/* Medal Display */}
                        <motion.div
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            transition={{ delay: 0.2, type: 'spring', stiffness: 200 }}
                            className="text-center"
                        >
                            <div className={cn(
                                "w-32 h-32 rounded-full bg-gradient-to-br flex items-center justify-center shadow-2xl mb-4 mx-auto",
                                config.color
                            )}>
                                <MedalIcon className="w-16 h-16 text-white" />
                            </div>
                            <p className="text-sm text-slate-400 mb-1">Predicted Medal</p>
                            <p className={cn("text-3xl font-bold", config.textColor)}>{medal}</p>
                        </motion.div>

                        {/* Divider */}
                        <div className="hidden md:block w-px h-32 bg-gradient-to-b from-transparent via-white/20 to-transparent" />

                        {/* Score Display */}
                        <motion.div
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            transition={{ delay: 0.3, type: 'spring', stiffness: 200 }}
                            className="text-center"
                        >
                            <div className="w-32 h-32 rounded-full bg-gradient-to-br from-cyan-500/20 to-purple-600/20 border border-cyan-500/30 flex items-center justify-center mb-4 mx-auto">
                                <div>
                                    <TrendingUp className="w-8 h-8 text-cyan-400 mx-auto mb-1" />
                                    <span className="text-3xl font-bold text-white">{score}</span>
                                </div>
                            </div>
                            <p className="text-sm text-slate-400 mb-1">KDA Score</p>
                            <p className="text-xs text-cyan-400/70">(2×Kills + Assists - Deaths)</p>
                        </motion.div>
                    </div>

                    {/* Stats Summary */}
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                        <div className="bg-white/5 rounded-xl p-4 text-center">
                            <p className="text-2xl font-bold text-cyan-400">{inputData.kills}</p>
                            <p className="text-xs text-slate-400">Kills</p>
                        </div>
                        <div className="bg-white/5 rounded-xl p-4 text-center">
                            <p className="text-2xl font-bold text-red-400">{inputData.deaths}</p>
                            <p className="text-xs text-slate-400">Deaths</p>
                        </div>
                        <div className="bg-white/5 rounded-xl p-4 text-center">
                            <p className="text-2xl font-bold text-purple-400">{inputData.assists}</p>
                            <p className="text-xs text-slate-400">Assists</p>
                        </div>
                        <div className="bg-white/5 rounded-xl p-4 text-center">
                            <p className="text-2xl font-bold text-green-400">{kda}</p>
                            <p className="text-xs text-slate-400">KDA Ratio</p>
                        </div>
                    </div>

                    {/* Insight */}
                    {result.insight && (
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.5 }}
                            className="mt-6 p-4 bg-white/5 rounded-xl border border-white/10"
                        >
                            <p className="text-sm text-slate-300 leading-relaxed">{result.insight}</p>
                        </motion.div>
                    )}
                </div>
            </div>
        </motion.div>
    );
}