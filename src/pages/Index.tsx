import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { 
  Loader2, 
  Sparkles, 
  BarChart3, 
  FileText, 
  Zap, 
  Shield, 
  TrendingUp, 
  Users,
  Clock,
  Award,
  ChevronRight,
  Star,
  CheckCircle2,
  Rocket,
  Brain,
  Target
} from "lucide-react";
import { toast } from "sonner";

const Index = () => {
  const [textInput, setTextInput] = useState("");
  const [analysisType, setAnalysisType] = useState<"summary" | "sentiment">("summary");
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [final_result, setResult] = useState<string | null>(null);

  const handleAnalyze = async () => {
  if (!textInput.trim()) {
    toast.error("Please enter some text to analyze");
    return;
  }

  setIsAnalyzing(true);
  setResult(null);

  try {
    const response = await fetch("https://chandraumesh8699.app.n8n.cloud/webhook/text-analyzer", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        text_to_analyze: textInput,
        analysisType: analysisType,
      }),
    });

    if (!response.ok) {
      throw new Error("Failed to fetch AI result");
    }

    const data = await response.json();
    console.log("Response from API:", data);
    setResult(data.final_result|| data[0]?.final_result);
    toast.success("Analysis complete!");
  } catch (error) {
    toast.error("Something went wrong while analyzing");
    console.error(error);
  } finally {
    setIsAnalyzing(false);
  }
};

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-blue-50 to-cyan-50 dark:from-gray-900 dark:via-purple-900/20 dark:to-blue-900/20 relative overflow-hidden">
      {/* Animated gradient orbs */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-purple-400/30 to-pink-400/30 rounded-full blur-3xl animate-pulse-glow" />
      <div className="absolute top-1/3 right-0 w-96 h-96 bg-gradient-to-br from-blue-400/30 to-cyan-400/30 rounded-full blur-3xl animate-pulse-glow animation-delay-2000" />
      <div className="absolute bottom-0 left-1/3 w-96 h-96 bg-gradient-to-br from-violet-400/30 to-purple-400/30 rounded-full blur-3xl animate-pulse-glow animation-delay-4000" />

      {/* Hero Section */}
      <header className="relative">
        <div className="container mx-auto px-4 py-16 md:py-24 lg:py-32 relative z-10">
          <div className="max-w-5xl mx-auto text-center space-y-8">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-6 py-3 bg-white/80 dark:bg-gray-800/80 backdrop-blur-md rounded-full border border-purple-200/50 dark:border-purple-500/50 shadow-lg animate-bounce-in">
              <Sparkles className="w-5 h-5 text-purple-600 dark:text-purple-400" />
              <span className="text-sm font-semibold bg-gradient-to-r from-purple-600 via-blue-600 to-cyan-600 bg-clip-text text-transparent">
                Powered by Advanced AI Technology
              </span>
              <Badge variant="secondary" className="bg-purple-100 dark:bg-purple-900/50 text-purple-700 dark:text-purple-300">
                Free
              </Badge>
            </div>

            {/* Main Heading */}
            <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold leading-tight animate-fade-in">
              <span className="bg-gradient-to-r from-purple-600 via-blue-600 to-cyan-600 bg-clip-text text-transparent animate-gradient bg-[length:200%_auto]">
                Analyze Text
              </span>
              <br />
              <span className="text-foreground">
                in Seconds
              </span>
            </h1>

            {/* Subtitle */}
            <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed animate-slide-in-from-bottom-4">
              Unlock powerful insights with AI-driven summarization and sentiment analysis. 
              Transform your content understanding instantly.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4 animate-scale-in">
              <Button 
                size="lg" 
                className="h-14 px-8 text-lg font-semibold bg-gradient-to-r from-purple-600 via-blue-600 to-cyan-600 hover:opacity-90 transition-all shadow-xl hover:shadow-2xl hover:scale-105"
                onClick={() => document.getElementById('analyzer')?.scrollIntoView({ behavior: 'smooth' })}
              >
                <Rocket className="w-5 h-5 mr-2" />
                Start Analyzing
                <ChevronRight className="w-5 h-5 ml-2" />
              </Button>
              <Button 
                size="lg" 
                variant="outline"
                className="h-14 px-8 text-lg font-semibold border-2 border-purple-200 dark:border-purple-500 hover:bg-purple-50 dark:hover:bg-purple-900/20 transition-all"
              >
                <Star className="w-5 h-5 mr-2" />
                See Demo
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-12 max-w-4xl mx-auto">
              {[
                { icon: Users, value: "10K+", label: "Active Users" },
                { icon: Clock, value: "<2s", label: "Avg Response" },
                { icon: Award, value: "99.9%", label: "Accuracy" },
                { icon: Zap, value: "50K+", label: "Analyses Daily" },
              ].map((stat, idx) => (
                <div 
                  key={idx} 
                  className="bg-white/60 dark:bg-gray-800/60 backdrop-blur-md rounded-2xl p-6 border border-purple-100 dark:border-purple-500/30 shadow-lg hover:shadow-xl hover:scale-105 transition-all hover-lift"
                  style={{ animationDelay: `${idx * 100}ms` }}
                >
                  <stat.icon className="w-8 h-8 text-purple-600 dark:text-purple-400 mx-auto mb-2" />
                  <div className="text-3xl font-bold bg-gradient-to-r from-purple-600 to-cyan-600 bg-clip-text text-transparent">
                    {stat.value}
                  </div>
                  <div className="text-sm text-muted-foreground mt-1">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </header>

      {/* Main Analyzer Section */}
      <main className="container mx-auto px-4 py-12 md:py-20 relative z-10" id="analyzer">
        <Card className="max-w-5xl mx-auto shadow-2xl border-0 bg-white/80 dark:bg-gray-800/80 backdrop-blur-xl overflow-hidden">
          {/* Gradient bar on top */}
          <div className="h-2 bg-gradient-to-r from-purple-600 via-blue-600 to-cyan-600 animate-gradient bg-[length:200%_auto]" />
          
          <CardHeader className="pb-8 pt-10">
            <div className="flex items-center justify-between flex-wrap gap-4">
              <div className="flex items-center gap-3">
                <div className="p-3 bg-gradient-to-br from-purple-600 to-blue-600 rounded-xl shadow-lg">
                  <Brain className="w-7 h-7 text-white" />
                </div>
                <div>
                  <CardTitle className="text-3xl font-bold">AI Text Analyzer</CardTitle>
                  <CardDescription className="text-base mt-1">
                    Choose your analysis type and get instant insights
                  </CardDescription>
                </div>
              </div>
              <Badge variant="outline" className="border-purple-300 dark:border-purple-500 text-purple-700 dark:text-purple-300 px-4 py-2">
                <Target className="w-4 h-4 mr-2" />
                Powered by Gemini AI
              </Badge>
            </div>
          </CardHeader>
          
          <CardContent className="space-y-8 px-6 md:px-10 pb-10">
            {/* Analysis Type Tabs */}
            <Tabs value={analysisType} onValueChange={(v) => setAnalysisType(v as "summary" | "sentiment")} className="w-full">
              <TabsList className="grid w-full grid-cols-2 h-14 p-1 bg-purple-50 dark:bg-purple-900/20">
                <TabsTrigger 
                  value="summary" 
                  className="flex items-center gap-2 text-base data-[state=active]:bg-white dark:data-[state=active]:bg-gray-800 data-[state=active]:shadow-md transition-all"
                >
                  <FileText className="w-5 h-5" />
                  <span className="hidden sm:inline">Summarization</span>
                  <span className="sm:hidden">Summary</span>
                </TabsTrigger>
                <TabsTrigger 
                  value="sentiment" 
                  className="flex items-center gap-2 text-base data-[state=active]:bg-white dark:data-[state=active]:bg-gray-800 data-[state=active]:shadow-md transition-all"
                >
                  <BarChart3 className="w-5 h-5" />
                  <span className="hidden sm:inline">Sentiment Analysis</span>
                  <span className="sm:hidden">Sentiment</span>
                </TabsTrigger>
              </TabsList>
              
              <TabsContent value="summary" className="space-y-4 mt-6">
                <div className="p-4 bg-gradient-to-r from-purple-50 to-blue-50 dark:from-purple-900/20 dark:to-blue-900/20 rounded-xl border border-purple-200/50 dark:border-purple-500/30">
                  <p className="text-sm text-foreground/80 flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-purple-600 dark:text-purple-400 flex-shrink-0 mt-0.5" />
                    Generate a concise, AI-powered summary that captures the essence of your text in seconds
                  </p>
                </div>
              </TabsContent>
              
              <TabsContent value="sentiment" className="space-y-4 mt-6">
                <div className="p-4 bg-gradient-to-r from-blue-50 to-cyan-50 dark:from-blue-900/20 dark:to-cyan-900/20 rounded-xl border border-blue-200/50 dark:border-blue-500/30">
                  <p className="text-sm text-foreground/80 flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-blue-600 dark:text-blue-400 flex-shrink-0 mt-0.5" />
                    Analyze emotional tone, detect sentiment polarity, and understand the mood of your content
                  </p>
                </div>
              </TabsContent>
            </Tabs>

            {/* Text Input */}
            <div className="space-y-3">
              <label htmlFor="textInput" className="text-base font-semibold flex items-center gap-2">
                <FileText className="w-5 h-5 text-purple-600" />
                Your Text
              </label>
              <Textarea
                id="textInput"
                placeholder="Paste or type your text here for analysis. Try entering a paragraph, customer review, article excerpt, social media post, or any text content you'd like to understand better..."
                className="min-h-[250px] resize-none text-base border-2 border-purple-100 dark:border-purple-500/30 focus:border-purple-500 dark:focus:border-purple-400 rounded-xl p-4 transition-all"
                value={textInput}
                onChange={(e) => setTextInput(e.target.value)}
              />
              <div className="flex justify-between items-center text-sm text-muted-foreground px-2">
                <span className="flex items-center gap-2">
                  <span className="font-medium">{textInput.length}</span> characters
                </span>
                <span className="flex items-center gap-2">
                  <span className="font-medium">{textInput.split(/\s+/).filter(Boolean).length}</span> words
                </span>
              </div>
            </div>

            {/* Analyze Button */}
            <Button
              onClick={handleAnalyze}
              disabled={isAnalyzing || !textInput.trim()}
              className="w-full h-16 text-lg font-bold bg-gradient-to-r from-purple-600 via-blue-600 to-cyan-600 hover:opacity-90 transition-all shadow-xl hover:shadow-2xl hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isAnalyzing ? (
                <>
                  <Loader2 className="w-6 h-6 mr-3 animate-spin" />
                  Analyzing Your Text...
                </>
              ) : (
                <>
                  <Sparkles className="w-6 h-6 mr-3" />
                  Analyze Text with AI
                  <ChevronRight className="w-6 h-6 ml-3" />
                </>
              )}
            </Button>

            {/* Result Display */}
            {final_result && (
              <div className="mt-8 p-8 bg-gradient-to-br from-purple-50 via-blue-50 to-cyan-50 dark:from-purple-900/20 dark:via-blue-900/20 dark:to-cyan-900/20 rounded-2xl border-2 border-purple-200 dark:border-purple-500/30 shadow-xl animate-bounce-in">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-gradient-to-br from-purple-600 to-blue-600 rounded-xl shadow-lg animate-pulse-glow">
                    <Sparkles className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex-1 space-y-3">
                    <h3 className="font-bold text-xl flex items-center gap-2">
                      <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
                        {analysisType === "summary" ? "AI Summary Result" : "Sentiment Analysis Result"}
                      </span>
                    </h3>
                    <p className="text-foreground/90 leading-relaxed text-base">{final_result}</p>
                    <div className="flex items-center gap-2 pt-2">
                      <Badge variant="secondary" className="bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400">
                        <CheckCircle2 className="w-3 h-3 mr-1" />
                        Completed
                      </Badge>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </CardContent>
        </Card>

        {/* How It Works Section */}
        <div className="max-w-6xl mx-auto mt-24">
          <div className="text-center mb-16">
            <Badge variant="outline" className="mb-4 border-purple-300 dark:border-purple-500 text-purple-700 dark:text-purple-300 px-4 py-2">
              Simple Process
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="bg-gradient-to-r from-purple-600 via-blue-600 to-cyan-600 bg-clip-text text-transparent">
                How It Works
              </span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Get AI-powered insights in three simple steps
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                step: "01",
                icon: FileText,
                title: "Input Your Text",
                description: "Paste or type any text content you want to analyze. Works with articles, reviews, emails, and more.",
                color: "from-purple-600 to-blue-600"
              },
              {
                step: "02",
                icon: Brain,
                title: "AI Processing",
                description: "Our advanced AI models powered by Gemini analyze your text using natural language processing.",
                color: "from-blue-600 to-cyan-600"
              },
              {
                step: "03",
                icon: Sparkles,
                title: "Get Insights",
                description: "Receive instant, accurate results with summaries or sentiment analysis in under 2 seconds.",
                color: "from-cyan-600 to-purple-600"
              },
            ].map((item, idx) => (
              <div 
                key={idx}
                className="relative group"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-purple-500/20 to-blue-500/20 rounded-3xl blur-xl group-hover:blur-2xl transition-all opacity-0 group-hover:opacity-100" />
                <Card className="relative bg-white/60 dark:bg-gray-800/60 backdrop-blur-md border-2 border-purple-100 dark:border-purple-500/30 hover:border-purple-300 dark:hover:border-purple-400 transition-all hover-lift h-full">
                  <CardHeader className="pb-6">
                    <div className="flex items-start justify-between mb-4">
                      <div className={`w-16 h-16 bg-gradient-to-br ${item.color} rounded-2xl flex items-center justify-center shadow-xl`}>
                        <item.icon className="w-8 h-8 text-white" />
                      </div>
                      <div className="text-6xl font-bold bg-gradient-to-br from-purple-200 to-blue-200 dark:from-purple-800 dark:to-blue-800 bg-clip-text text-transparent">
                        {item.step}
                      </div>
                    </div>
                    <CardTitle className="text-2xl">{item.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground leading-relaxed">
                      {item.description}
                    </p>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>

        {/* Features Section */}
        <div className="max-w-6xl mx-auto mt-24">
          <div className="text-center mb-16">
            <Badge variant="outline" className="mb-4 border-purple-300 dark:border-purple-500 text-purple-700 dark:text-purple-300 px-4 py-2">
              Powerful Features
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="bg-gradient-to-r from-purple-600 via-blue-600 to-cyan-600 bg-clip-text text-transparent">
                Why Choose Us
              </span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Everything you need for comprehensive text analysis in one place
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                icon: Zap,
                title: "Lightning Fast",
                description: "Get instant results powered by cutting-edge AI models. Analyze any text in under 2 seconds.",
                gradient: "from-yellow-400 to-orange-500"
              },
              {
                icon: Shield,
                title: "Highly Accurate",
                description: "Leveraging state-of-the-art NLP models with 99.9% accuracy for reliable insights every time.",
                gradient: "from-green-400 to-emerald-500"
              },
              {
                icon: TrendingUp,
                title: "Multiple Modes",
                description: "Choose between AI summarization and sentiment analysis based on your specific needs.",
                gradient: "from-blue-400 to-indigo-500"
              },
              {
                icon: Users,
                title: "User Friendly",
                description: "Intuitive interface designed for everyone. No technical knowledge required to get started.",
                gradient: "from-purple-400 to-pink-500"
              },
              {
                icon: Award,
                title: "Enterprise Ready",
                description: "Scalable infrastructure that handles everything from single queries to millions of requests.",
                gradient: "from-cyan-400 to-blue-500"
              },
              {
                icon: Rocket,
                title: "Always Improving",
                description: "Continuously updated with the latest AI models and features to serve you better.",
                gradient: "from-red-400 to-rose-500"
              },
            ].map((feature, idx) => (
              <Card 
                key={idx}
                className="border-2 border-purple-100 dark:border-purple-500/30 hover:border-purple-300 dark:hover:border-purple-400 transition-all hover-lift bg-white/60 dark:bg-gray-800/60 backdrop-blur-md"
              >
                <CardHeader>
                  <div className={`w-14 h-14 bg-gradient-to-br ${feature.gradient} rounded-xl flex items-center justify-center mb-4 shadow-lg`}>
                    <feature.icon className="w-7 h-7 text-white" />
                  </div>
                  <CardTitle className="text-xl">{feature.title}</CardTitle>
                  <CardDescription className="text-base leading-relaxed pt-2">
                    {feature.description}
                  </CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>

        {/* Use Cases Section */}
        <div className="max-w-6xl mx-auto mt-24 mb-20">
          <div className="text-center mb-16">
            <Badge variant="outline" className="mb-4 border-purple-300 dark:border-purple-500 text-purple-700 dark:text-purple-300 px-4 py-2">
              Versatile Applications
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="bg-gradient-to-r from-purple-600 via-blue-600 to-cyan-600 bg-clip-text text-transparent">
                Perfect For Every Need
              </span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Trusted by professionals across industries
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { 
                title: "Content Creation", 
                desc: "Quickly summarize research articles and blog posts",
                icon: FileText,
                color: "purple"
              },
              { 
                title: "Customer Feedback", 
                desc: "Analyze sentiment in reviews and testimonials",
                icon: BarChart3,
                color: "blue"
              },
              { 
                title: "Social Media", 
                desc: "Understand emotions in posts and comments",
                icon: TrendingUp,
                color: "cyan"
              },
              { 
                title: "Business Intelligence", 
                desc: "Extract key insights from reports and documents",
                icon: Target,
                color: "violet"
              },
            ].map((useCase, idx) => (
              <div
                key={idx}
                className="group p-6 bg-gradient-to-br from-white/80 to-purple-50/80 dark:from-gray-800/80 dark:to-purple-900/20 backdrop-blur-md rounded-2xl border-2 border-purple-100 dark:border-purple-500/30 hover:border-purple-300 dark:hover:border-purple-400 transition-all hover:shadow-xl hover:-translate-y-2 cursor-pointer"
              >
                <div className={`w-12 h-12 bg-gradient-to-br from-${useCase.color}-500 to-${useCase.color}-600 rounded-xl flex items-center justify-center mb-4 shadow-lg group-hover:scale-110 transition-transform`}>
                  <useCase.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="font-bold text-lg mb-2 text-foreground">{useCase.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{useCase.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="max-w-4xl mx-auto mt-24 mb-20">
          <Card className="relative overflow-hidden border-0 bg-gradient-to-br from-purple-600 via-blue-600 to-cyan-600 shadow-2xl">
            <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10" />
            <CardContent className="relative p-12 md:p-16 text-center text-white">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/20 backdrop-blur-md rounded-full mb-6">
                <Rocket className="w-5 h-5" />
                <span className="font-semibold">Get Started Today</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Ready to Transform Your Text?
              </h2>
              <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
                Join thousands of users who trust our AI-powered platform for instant, accurate text analysis.
              </p>
              <Button 
                size="lg"
                className="h-14 px-8 text-lg font-bold bg-white text-purple-600 hover:bg-gray-100 shadow-xl hover:shadow-2xl hover:scale-105 transition-all"
                onClick={() => document.getElementById('analyzer')?.scrollIntoView({ behavior: 'smooth' })}
              >
                <Sparkles className="w-5 h-5 mr-2" />
                Start Analyzing Now
                <ChevronRight className="w-5 h-5 ml-2" />
              </Button>
            </CardContent>
          </Card>
        </div>
      </main>

      {/* Footer */}
      <footer className="relative z-10 border-t border-purple-200/50 dark:border-purple-500/30 bg-white/50 dark:bg-gray-900/50 backdrop-blur-md py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="flex flex-col md:flex-row items-center justify-between gap-6">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-gradient-to-br from-purple-600 to-cyan-600 rounded-lg flex items-center justify-center shadow-lg">
                  <Brain className="w-6 h-6 text-white" />
                </div>
                <div>
                  <div className="font-bold text-lg bg-gradient-to-r from-purple-600 to-cyan-600 bg-clip-text text-transparent">
                    AI Text Analyzer
                  </div>
                  <div className="text-sm text-muted-foreground">Powered by Gemini AI</div>
                </div>
              </div>
              <div className="text-center md:text-right">
                <p className="text-muted-foreground text-sm mb-2">
                  © 2025 AI Text Analyzer. All rights reserved.
                </p>
                <p className="text-xs text-muted-foreground">
                  Built with React, TypeScript, and Tailwind CSS
                </p>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
