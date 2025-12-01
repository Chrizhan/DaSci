import React from 'react';
import { Brain, Database, LineChart, Cpu, CheckCircle2 } from 'lucide-react';

export default function ModelInfo() {
    const features = [
        {
            icon: Database,
            title: 'Training Data',
            description: 'Model trained on extensive player performance dataset with KDA metrics'
        },
        {
            icon: Brain,
            title: 'Regression Algorithm',
            description: 'Uses advanced regression techniques to predict continuous score values'
        },
        {
            icon: LineChart,
            title: 'Feature Engineering',
            description: 'KDA ratio and weighted performance metrics as key features'
        },
        {
            icon: Cpu,
            title: 'Real-time Prediction',
            description: 'Instant predictions based on your input parameters'
        },
    ];

    const metrics = [
        { label: 'Model Type', value: 'Linear Regression' },
        { label: 'Training Samples', value: '5,000' },
        { label: 'Features Used', value: '3' },
        { label: 'Medal Classes', value: '3' },
    ];

    return (
        <section className="py-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Section Header */}
                <div className="text-center mb-16">
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-500/10 border border-purple-500/20 mb-4">
                        <Brain className="w-4 h-4 text-purple-400" />
                        <span className="text-sm text-purple-400">Machine Learning Model</span>
                    </div>
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                        How It Works
                    </h2>
                    <p className="text-slate-400 max-w-2xl mx-auto">
                        Our regression model analyzes your KDA (Kills, Deaths, Assists) to predict 
                        your performance medal and score with high accuracy.
                    </p>
                </div>

                {/* Features Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
                    {features.map((feature, index) => (
                        <div
                            key={index}
                            className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-white/5 to-white/0 border border-white/10 p-6 hover:border-purple-500/30 transition-all"
                        >
                            <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-purple-500/10 to-transparent rounded-full -translate-y-1/2 translate-x-1/2 group-hover:scale-150 transition-transform duration-500" />
                            
                            <div className="relative">
                                <div className="p-3 rounded-xl bg-purple-500/10 border border-purple-500/20 w-fit mb-4">
                                    <feature.icon className="w-5 h-5 text-purple-400" />
                                </div>
                                <h3 className="text-lg font-semibold text-white mb-2">{feature.title}</h3>
                                <p className="text-sm text-slate-400">{feature.description}</p>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Metrics */}
                <div className="rounded-3xl bg-gradient-to-br from-slate-800/50 to-slate-900/50 border border-white/10 p-8 md:p-12">
                    <div className="flex flex-col md:flex-row items-center justify-between gap-8">
                        <div className="text-center md:text-left">
                            <h3 className="text-2xl font-bold text-white mb-2">Model Performance</h3>
                            <p className="text-slate-400">Trained and validated on real player data</p>
                        </div>
                        
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                            {metrics.map((metric, index) => (
                                <div key={index} className="text-center">
                                    <p className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                                        {metric.value}
                                    </p>
                                    <p className="text-xs text-slate-400 mt-1">{metric.label}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Medal Classification */}
                <div className="mt-12 text-center">
                    <h4 className="text-lg font-semibold text-white mb-6">Medal Classification Thresholds</h4>
                    <div className="flex flex-wrap justify-center gap-4">
                        {[
                            { medal: 'Gold', threshold: 'Score ≥ 20', color: 'from-yellow-400 to-amber-600' },
                            { medal: 'Silver', threshold: '10 ≤ Score < 20', color: 'from-slate-300 to-slate-500' },
                            { medal: 'Bronze', threshold: 'Score < 10', color: 'from-orange-400 to-orange-600' },
                        ].map((item, index) => (
                            <div 
                                key={index}
                                className="flex items-center gap-3 px-4 py-2 rounded-full bg-white/5 border border-white/10"
                            >
                                <div className={`w-4 h-4 rounded-full bg-gradient-to-r ${item.color}`} />
                                <span className="text-sm text-white font-medium">{item.medal}</span>
                                <span className="text-xs text-slate-400">({item.threshold})</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}