import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { createPageUrl } from '@/utils';
import { 
    Brain, 
    Database, 
    LineChart, 
    Code2, 
    GitBranch, 
    Users,
    ArrowRight,
    CheckCircle2,
    BookOpen,
    FlaskConical
} from 'lucide-react';

export default function About() {
    const steps = [
        {
            step: '01',
            title: 'Data Collection',
            description: 'Gathered player performance data including kills, deaths, assists, and corresponding medals/scores.',
            icon: Database,
        },
        {
            step: '02',
            title: 'Data Preprocessing',
            description: 'Cleaned and normalized the dataset, handled missing values, and performed feature engineering.',
            icon: Code2,
        },
        {
            step: '03',
            title: 'Model Training',
            description: 'Trained multiple regression models in Google Colab and selected the best performing one.',
            icon: FlaskConical,
        },
        {
            step: '04',
            title: 'Model Deployment',
            description: 'Integrated the trained model with our web application for real-time predictions.',
            icon: GitBranch,
        },
    ];

    const features = [
        'Linear Regression baseline model',
        'Feature importance analysis',
        'Cross-validation for accuracy',
        'Hyperparameter tuning',
        'Model evaluation metrics',
        'Real-time prediction API',
    ];

    const teamMembers = [
        { name: 'Team Member 1', role: 'Data Scientist' },
        { name: 'Team Member 2', role: 'ML Engineer' },
        { name: 'Team Member 3', role: 'Frontend Developer' },
        { name: 'Team Member 4', role: 'Backend Developer' },
    ];

    return (
        <div>
            {/* Hero */}
            <section className="relative pt-20 pb-16 overflow-hidden">
                <div className="absolute inset-0 overflow-hidden">
                    <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl" />
                </div>

                <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="text-center"
                    >
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-500/10 border border-purple-500/20 mb-6">
                            <BookOpen className="w-4 h-4 text-purple-400" />
                            <span className="text-sm text-purple-400">Documentation</span>
                        </div>
                        
                        <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
                            About Our
                            <span className="block bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
                                Regression Model
                            </span>
                        </h1>
                        
                        <p className="text-lg text-slate-400 max-w-2xl mx-auto">
                            A deep dive into our machine learning approach for predicting 
                            player medals and scores based on KDA statistics.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Project Overview */}
            <section className="py-16">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        <div>
                            <h2 className="text-3xl font-bold text-white mb-6">Project Overview</h2>
                            <p className="text-slate-400 mb-6 leading-relaxed">
                                This project is part of our Data Science course where we explore 
                                regression techniques to predict player performance in Mobile Legends. 
                                We use a simulated dataset of 5,000 player records to train our model.
                            </p>
                            <p className="text-slate-400 mb-6 leading-relaxed">
                                Our Linear Regression model takes three input features (Kills, Deaths, Assists) 
                                and calculates a KDA score using the formula: Score = 2×Kills + Assists - Deaths. 
                                The score is then classified into Bronze, Silver, or Gold medals based on thresholds.
                            </p>
                            
                            <div className="flex flex-wrap gap-3">
                                {['Python', 'Scikit-learn', 'Pandas', 'NumPy', 'Google Colab', 'React'].map((tech) => (
                                    <span 
                                        key={tech}
                                        className="px-3 py-1.5 rounded-lg bg-white/5 border border-white/10 text-sm text-slate-300"
                                    >
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </div>

                        <div className="relative">
                            <div className="absolute -inset-4 bg-gradient-to-r from-purple-500/20 to-cyan-500/20 rounded-3xl blur-xl" />
                            <div className="relative bg-slate-900/80 backdrop-blur-xl rounded-2xl border border-white/10 p-8">
                                <h3 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
                                    <Brain className="w-5 h-5 text-purple-400" />
                                    Model Features
                                </h3>
                                <ul className="space-y-3">
                                    {features.map((feature, index) => (
                                        <li key={index} className="flex items-center gap-3">
                                            <CheckCircle2 className="w-4 h-4 text-cyan-400 flex-shrink-0" />
                                            <span className="text-slate-300 text-sm">{feature}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Development Process */}
            <section className="py-16 bg-slate-900/50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold text-white mb-4">Development Process</h2>
                        <p className="text-slate-400 max-w-2xl mx-auto">
                            How we built and deployed our regression model from data collection to production.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {steps.map((step, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.1 }}
                                viewport={{ once: true }}
                                className="relative group"
                            >
                                <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-500/50 to-cyan-500/50 rounded-2xl blur opacity-0 group-hover:opacity-100 transition-opacity" />
                                <div className="relative bg-slate-900 rounded-2xl border border-white/10 p-6 h-full">
                                    <div className="flex items-center gap-3 mb-4">
                                        <span className="text-3xl font-bold bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
                                            {step.step}
                                        </span>
                                        <div className="p-2 rounded-lg bg-purple-500/10">
                                            <step.icon className="w-5 h-5 text-purple-400" />
                                        </div>
                                    </div>
                                    <h3 className="text-lg font-semibold text-white mb-2">{step.title}</h3>
                                    <p className="text-sm text-slate-400">{step.description}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Formula Section */}
            <section className="py-16">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold text-white mb-4">Prediction Formula</h2>
                        <p className="text-slate-400 max-w-2xl mx-auto">
                            Our regression model uses weighted features to calculate the performance score.
                        </p>
                    </div>

                    <div className="max-w-3xl mx-auto">
                        <div className="bg-slate-900/80 backdrop-blur-xl rounded-2xl border border-white/10 p-8">
                            <div className="text-center mb-8">
                                <code className="text-lg md:text-xl text-cyan-400 font-mono">
                                    Score = 2 × Kills + Assists − Deaths
                                </code>
                            </div>

                            <div className="grid md:grid-cols-3 gap-6">
                                <div className="text-center p-4 bg-white/5 rounded-xl">
                                    <p className="text-2xl font-bold text-cyan-400 mb-1">× 2</p>
                                    <p className="text-sm text-slate-400">Kills Weight</p>
                                </div>
                                <div className="text-center p-4 bg-white/5 rounded-xl">
                                    <p className="text-2xl font-bold text-purple-400 mb-1">× 1</p>
                                    <p className="text-sm text-slate-400">Assists Weight</p>
                                </div>
                                <div className="text-center p-4 bg-white/5 rounded-xl">
                                    <p className="text-2xl font-bold text-red-400 mb-1">− 1</p>
                                    <p className="text-sm text-slate-400">Deaths Penalty</p>
                                </div>
                            </div>

                            <div className="mt-8 pt-8 border-t border-white/10">
                                <h4 className="text-white font-semibold mb-4 flex items-center gap-2">
                                    <LineChart className="w-5 h-5 text-purple-400" />
                                    Medal Thresholds
                                </h4>
                                <div className="grid grid-cols-3 gap-4 text-sm">
                                    <div className="flex items-center gap-2">
                                        <div className="w-3 h-3 rounded-full bg-gradient-to-r from-yellow-400 to-amber-600" />
                                        <span className="text-slate-300">Gold: ≥ 20</span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <div className="w-3 h-3 rounded-full bg-gradient-to-r from-slate-300 to-slate-500" />
                                        <span className="text-slate-300">Silver: 10-19</span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <div className="w-3 h-3 rounded-full bg-gradient-to-r from-orange-400 to-orange-600" />
                                        <span className="text-slate-300">Bronze: &lt; 10</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Team Section */}
            <section className="py-16 bg-slate-900/50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cyan-500/10 border border-cyan-500/20 mb-4">
                            <Users className="w-4 h-4 text-cyan-400" />
                            <span className="text-sm text-cyan-400">Our Team</span>
                        </div>
                        <h2 className="text-3xl font-bold text-white mb-4">Built By Students</h2>
                        <p className="text-slate-400">Our dedicated team working on this Data Science project.</p>
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl mx-auto">
                        {teamMembers.map((member, index) => (
                            <div 
                                key={index}
                                className="text-center p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-purple-500/30 transition-colors"
                            >
                                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-purple-500/20 to-cyan-500/20 flex items-center justify-center mx-auto mb-4">
                                    <span className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
                                        {member.name.split(' ').pop()}
                                    </span>
                                </div>
                                <h3 className="font-semibold text-white mb-1">{member.name}</h3>
                                <p className="text-xs text-slate-400">{member.role}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-3xl font-bold text-white mb-4">Try the Predictor</h2>
                    <p className="text-slate-400 mb-8">
                        Put our model to the test with your own KDA stats.
                    </p>
                    <Link 
                        to={createPageUrl('Home')}
                        className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-semibold hover:from-cyan-400 hover:to-purple-500 transition-all"
                    >
                        Go to Predictor
                        <ArrowRight className="w-5 h-5" />
                    </Link>
                </div>
            </section>
        </div>
    );
}