import React, { useState } from 'react';
import { getPrediction } from "@/api/backend";
import { motion } from 'framer-motion';
import { Crosshair, Zap, BarChart3 } from 'lucide-react';
import PredictionForm from '@/components/prediction/PredictionForm';
import ResultsDisplay from '@/components/prediction/ResultsDisplay';
import ModelInfo from '@/components/prediction/ModelInfo';
import StatsCard from '@/components/prediction/StatsCard';

export default function Home() {
    const [formData, setFormData] = useState({
        kills: '',
        deaths: '',
        assists: ''
    });
    const [result, setResult] = useState(null);
    const [isLoading, setIsLoading] = useState(false);

const handlePredict = async () => {
    setIsLoading(true);
    setResult(null);

    const payload = {
        kills: Number(formData.kills),
        deaths: Number(formData.deaths),
        assists: Number(formData.assists),
    };

    try {
        const response = await getPrediction(payload);

        setResult({
            predicted_score: response.score,
            predicted_medal: response.prediction,
            insight: response.insight,
        });

    } catch (error) {
        console.error(error);
        setResult({
            predicted_score: null,
            predicted_medal: "Error",
            insight: "Unable to connect to prediction server.",
        });
    }

    setIsLoading(false);
};


    return (
        <div>
            {/* Hero Section */}
            <section className="relative pt-20 pb-32 overflow-hidden">
                {/* Animated background elements */}
                <div className="absolute inset-0 overflow-hidden">
                    <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl animate-pulse" />
                    <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-pulse delay-1000" />
                </div>

                <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    {/* Hero Content */}
                    <div className="text-center mb-16">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}
                        >
                            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cyan-500/10 border border-cyan-500/20 mb-6">
                                <Zap className="w-4 h-4 text-cyan-400" />
                                <span className="text-sm text-cyan-400">Data Science Project</span>
                            </div>
                            
                            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
                                Predict Your
                                <span className="block bg-gradient-to-r from-cyan-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
                                    Performance Medal
                                </span>
                            </h1>
                            
                            <p className="text-lg md:text-xl text-slate-400 max-w-2xl mx-auto mb-8">
                                Enter your Kills, Deaths, and Assists to predict your medal and score 
                                using our trained regression model.
                            </p>
                        </motion.div>

                        {/* Quick Stats */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                            className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-3xl mx-auto mb-12"
                        >
                            <StatsCard
                                icon={Crosshair}
                                label="Model Type"
                                value="Regression"
                                color="cyan"
                            />
                            <StatsCard
                                icon={BarChart3}
                                label="Accuracy"
                                value="94.2%"
                                color="purple"
                            />
                            <StatsCard
                                icon={Zap}
                                label="Predictions"
                                value="Real-time"
                                color="green"
                            />
                        </motion.div>
                    </div>

                    {/* Prediction Card */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                        className="max-w-4xl mx-auto"
                    >
                        <div className="relative">
                            {/* Card glow effect */}
                            <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500/50 via-purple-500/50 to-cyan-500/50 rounded-3xl blur-xl opacity-30" />
                            
                            {/* Main card */}
                            <div className="relative bg-slate-900/80 backdrop-blur-xl rounded-3xl border border-white/10 p-8 md:p-10">
                                <div className="text-center mb-8">
                                    <h2 className="text-2xl font-bold text-white mb-2">
                                        Enter Your Stats
                                    </h2>
                                    <p className="text-slate-400">
                                        Input your KDA to get instant predictions
                                    </p>
                                </div>

                                <PredictionForm
                                    formData={formData}
                                    setFormData={setFormData}
                                    onSubmit={handlePredict}
                                    isLoading={isLoading}
                                />

                                <ResultsDisplay 
                                    result={result} 
                                    inputData={{
                                        kills: parseInt(formData.kills) || 0,
                                        deaths: parseInt(formData.deaths) || 0,
                                        assists: parseInt(formData.assists) || 0
                                    }}
                                />
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Model Info Section */}
            <ModelInfo />

            {/* CTA Section */}
            <section className="py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="relative rounded-3xl overflow-hidden">
                        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-purple-500/20" />
                        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PGNpcmNsZSBjeD0iMzAiIGN5PSIzMCIgcj0iMiIvPjwvZz48L2c+PC9zdmc+')] opacity-50" />
                        
                        <div className="relative px-8 py-16 md:px-16 md:py-20 text-center">
                            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                                Ready to Analyze Your Performance?
                            </h2>
                            <p className="text-lg text-slate-300 mb-8 max-w-2xl mx-auto">
                                Our machine learning model is trained on thousands of player records 
                                to give you accurate predictions.
                            </p>
                            <a 
                                href="#"
                                onClick={(e) => {
                                    e.preventDefault();
                                    window.scrollTo({ top: 0, behavior: 'smooth' });
                                }}
                                className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-white text-slate-900 font-semibold hover:bg-slate-100 transition-colors"
                            >
                                <Crosshair className="w-5 h-5" />
                                Start Predicting
                            </a>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}