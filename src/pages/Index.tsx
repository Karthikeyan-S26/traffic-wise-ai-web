
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Separator } from "@/components/ui/separator";
import { ArrowDown, ArrowUp, ChevronRight, Clock, MapPin, Users, Youtube } from "lucide-react";
import { useState } from "react";

const Index = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    organization: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Demo request submitted:", formData);
    // Here you would typically send the data to your backend
    alert("Thank you for your interest! We'll contact you within 24 hours to schedule your demo.");
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-sm border-b border-slate-200 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-teal-600 rounded-lg flex items-center justify-center">
                <MapPin className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold text-slate-900">SmartFlow AI</span>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <a href="#features" className="text-slate-600 hover:text-slate-900 transition-colors">Features</a>
              <a href="#dashboard" className="text-slate-600 hover:text-slate-900 transition-colors">Dashboard</a>
              <a href="#benefits" className="text-slate-600 hover:text-slate-900 transition-colors">Benefits</a>
              <a href="#testimonials" className="text-slate-600 hover:text-slate-900 transition-colors">Testimonials</a>
              <a href="#contact" className="text-slate-600 hover:text-slate-900 transition-colors">Contact</a>
            </div>
            <Button className="bg-gradient-to-r from-blue-600 to-teal-600 hover:from-blue-700 hover:to-teal-700">
              Request Demo
            </Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-24 pb-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-teal-600/10"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center">
            <Badge className="mb-6 bg-blue-100 text-blue-700 hover:bg-blue-200">
              AI-Powered Traffic Intelligence
            </Badge>
            <h1 className="text-5xl md:text-6xl font-bold text-slate-900 mb-6 leading-tight">
              Transform Your City's
              <span className="block bg-gradient-to-r from-blue-600 to-teal-600 bg-clip-text text-transparent">
                Traffic Management
              </span>
            </h1>
            <p className="text-xl text-slate-600 mb-8 max-w-3xl mx-auto leading-relaxed">
              Reduce congestion by up to 40% with our AI-driven Smart Traffic Management System. 
              Real-time optimization, predictive analytics, and seamless IoT integration for the cities of tomorrow.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-gradient-to-r from-blue-600 to-teal-600 hover:from-blue-700 hover:to-teal-700 text-lg px-8 py-3">
                Schedule Live Demo
                <ChevronRight className="ml-2 w-5 h-5" />
              </Button>
              <Button size="lg" variant="outline" className="text-lg px-8 py-3 border-slate-300 hover:bg-slate-50">
                <Youtube className="mr-2 w-5 h-5" />
                Watch Overview
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">
              Intelligent Traffic Solutions
            </h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              Cutting-edge AI and IoT technology working together to create smarter, more efficient urban transportation networks.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardHeader className="text-center pb-4">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <ArrowUp className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-xl">AI-Driven Optimization</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-slate-600 mb-4">
                  Machine learning algorithms analyze traffic patterns in real-time, automatically adjusting signal timing to minimize congestion and reduce wait times by up to 35%.
                </p>
                <ul className="text-sm text-slate-500 space-y-2">
                  <li>• Predictive traffic modeling</li>
                  <li>• Dynamic signal optimization</li>
                  <li>• Congestion prediction & prevention</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardHeader className="text-center pb-4">
                <div className="w-16 h-16 bg-gradient-to-r from-teal-500 to-teal-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Clock className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-xl">Real-Time Monitoring</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-slate-600 mb-4">
                  24/7 monitoring with IoT sensors and smart cameras providing instant visibility into traffic conditions, incidents, and system performance across your entire network.
                </p>
                <ul className="text-sm text-slate-500 space-y-2">
                  <li>• Live traffic visualization</li>
                  <li>• Incident detection & alerts</li>
                  <li>• Performance analytics dashboard</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardHeader className="text-center pb-4">
                <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-xl">Emergency Vehicle Priority</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-slate-600 mb-4">
                  Intelligent emergency vehicle detection automatically creates green corridors, reducing emergency response times by an average of 25% while minimizing disruption to regular traffic.
                </p>
                <ul className="text-sm text-slate-500 space-y-2">
                  <li>• Automatic vehicle detection</li>
                  <li>• Dynamic route clearing</li>
                  <li>• Coordinated signal preemption</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Dashboard Demo Section */}
      <section id="dashboard" className="py-20 bg-gradient-to-br from-slate-900 to-blue-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              Command Center Dashboard
            </h2>
            <p className="text-xl text-blue-100 max-w-2xl mx-auto">
              Get complete visibility and control over your city's traffic infrastructure with our intuitive management platform.
            </p>
          </div>
          
          <div className="bg-white rounded-2xl p-8 shadow-2xl">
            <div className="grid md:grid-cols-4 gap-6 mb-8">
              <Card className="bg-gradient-to-r from-green-50 to-green-100 border-green-200">
                <CardContent className="p-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm text-green-600 font-medium">Active Intersections</p>
                      <p className="text-2xl font-bold text-green-800">1,247</p>
                    </div>
                    <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
                      <MapPin className="w-4 h-4 text-white" />
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="bg-gradient-to-r from-blue-50 to-blue-100 border-blue-200">
                <CardContent className="p-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm text-blue-600 font-medium">Avg. Wait Time</p>
                      <p className="text-2xl font-bold text-blue-800">32s</p>
                    </div>
                    <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center">
                      <Clock className="w-4 h-4 text-white" />
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="bg-gradient-to-r from-purple-50 to-purple-100 border-purple-200">
                <CardContent className="p-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm text-purple-600 font-medium">Traffic Flow</p>
                      <p className="text-2xl font-bold text-purple-800">+15%</p>
                    </div>
                    <div className="w-8 h-8 bg-purple-500 rounded-full flex items-center justify-center">
                      <ArrowUp className="w-4 h-4 text-white" />
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="bg-gradient-to-r from-orange-50 to-orange-100 border-orange-200">
                <CardContent className="p-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm text-orange-600 font-medium">Emergency Calls</p>
                      <p className="text-2xl font-bold text-orange-800">8</p>
                    </div>
                    <div className="w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center">
                      <Users className="w-4 h-4 text-white" />
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
            
            <div className="bg-slate-100 rounded-lg p-6 h-64 flex items-center justify-center">
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-teal-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <MapPin className="w-8 h-8 text-white" />
                </div>
                <p className="text-slate-600 font-medium">Interactive Traffic Map</p>
                <p className="text-sm text-slate-500 mt-2">Real-time visualization of traffic patterns, incidents, and optimization actions</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section id="benefits" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-bold text-slate-900 mb-6">
                Benefits for Everyone
              </h2>
              <p className="text-xl text-slate-600 mb-8">
                Our Smart Traffic Management System delivers measurable improvements for city governments, businesses, and citizens alike.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <ArrowDown className="w-4 h-4 text-green-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-900 mb-1">40% Reduction in Congestion</h3>
                    <p className="text-slate-600">Intelligent signal optimization dramatically improves traffic flow during peak hours.</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <Clock className="w-4 h-4 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-900 mb-1">25% Faster Emergency Response</h3>
                    <p className="text-slate-600">Priority routing saves critical minutes when every second counts.</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <Users className="w-4 h-4 text-purple-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-900 mb-1">Improved Citizen Satisfaction</h3>
                    <p className="text-slate-600">Shorter commutes and reduced emissions lead to happier, healthier communities.</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-teal-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <MapPin className="w-4 h-4 text-teal-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-900 mb-1">30% Lower Operational Costs</h3>
                    <p className="text-slate-600">Automated optimization reduces the need for manual intervention and maintenance.</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-blue-50 to-teal-50 rounded-2xl p-8">
              <div className="space-y-6">
                <div className="text-center">
                  <h3 className="text-lg font-semibold text-slate-900 mb-2">For City Governments</h3>
                  <ul className="text-sm text-slate-600 space-y-1">
                    <li>• Reduced infrastructure strain</li>
                    <li>• Lower maintenance costs</li>
                    <li>• Data-driven policy decisions</li>
                    <li>• Improved public satisfaction</li>
                  </ul>
                </div>
                
                <Separator />
                
                <div className="text-center">
                  <h3 className="text-lg font-semibold text-slate-900 mb-2">For Citizens</h3>
                  <ul className="text-sm text-slate-600 space-y-1">
                    <li>• Shorter commute times</li>
                    <li>• Reduced fuel consumption</li>
                    <li>• Lower stress levels</li>
                    <li>• Cleaner air quality</li>
                  </ul>
                </div>
                
                <Separator />
                
                <div className="text-center">
                  <h3 className="text-lg font-semibold text-slate-900 mb-2">For Businesses</h3>
                  <ul className="text-sm text-slate-600 space-y-1">
                    <li>• Improved logistics efficiency</li>
                    <li>• Predictable delivery times</li>
                    <li>• Reduced transportation costs</li>
                    <li>• Enhanced customer experience</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">
              Trusted by Leading Cities
            </h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              Join the growing network of smart cities transforming their transportation infrastructure with our AI-powered solutions.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-0 shadow-lg">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-teal-500 rounded-full flex items-center justify-center text-white font-bold text-lg">
                    M
                  </div>
                  <div className="ml-4">
                    <h4 className="font-semibold text-slate-900">Maria Rodriguez</h4>
                    <p className="text-sm text-slate-600">Traffic Director, Metropolitan City</p>
                  </div>
                </div>
                <p className="text-slate-600 mb-4">
                  "SmartFlow AI reduced our downtown congestion by 42% in just 6 months. The ROI was evident immediately, and citizen complaints dropped by 60%."
                </p>
                <div className="flex text-yellow-400">
                  ★★★★★
                </div>
              </CardContent>
            </Card>
            
            <Card className="border-0 shadow-lg">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-blue-500 rounded-full flex items-center justify-center text-white font-bold text-lg">
                    J
                  </div>
                  <div className="ml-4">
                    <h4 className="font-semibold text-slate-900">James Chen</h4>
                    <p className="text-sm text-slate-600">Smart City Manager, Tech Valley</p>
                  </div>
                </div>
                <p className="text-slate-600 mb-4">
                  "The emergency vehicle prioritization feature is a game-changer. Our ambulance response times improved by 28%, directly saving lives in our community."
                </p>
                <div className="flex text-yellow-400">
                  ★★★★★
                </div>
              </CardContent>
            </Card>
            
            <Card className="border-0 shadow-lg">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center text-white font-bold text-lg">
                    S
                  </div>
                  <div className="ml-4">
                    <h4 className="font-semibold text-slate-900">Sarah Thompson</h4>
                    <p className="text-sm text-slate-600">Public Works Director, Green City</p>
                  </div>
                </div>
                <p className="text-slate-600 mb-4">
                  "The analytics dashboard gives us insights we never had before. We can now make data-driven decisions that actually improve our residents' daily lives."
                </p>
                <div className="flex text-yellow-400">
                  ★★★★★
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Case Studies Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">
              Real-World Results
            </h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              See how cities worldwide are achieving measurable improvements with our Smart Traffic Management System.
            </p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-12">
            <Card className="border-0 shadow-lg overflow-hidden">
              <div className="bg-gradient-to-r from-blue-500 to-teal-500 p-6 text-white">
                <h3 className="text-xl font-bold mb-2">Metro City Implementation</h3>
                <p className="text-blue-100">Population: 2.3M • 850 Intersections • 6 Months Active</p>
              </div>
              <CardContent className="p-6">
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-green-600 mb-1">-38%</div>
                    <div className="text-sm text-slate-600">Average Commute Time</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-blue-600 mb-1">-45%</div>
                    <div className="text-sm text-slate-600">Peak Hour Delays</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-purple-600 mb-1">+32%</div>
                    <div className="text-sm text-slate-600">Traffic Throughput</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-teal-600 mb-1">-22%</div>
                    <div className="text-sm text-slate-600">CO2 Emissions</div>
                  </div>
                </div>
                <p className="text-slate-600 text-sm">
                  "The system paid for itself within 8 months through reduced operational costs and improved efficiency."
                </p>
              </CardContent>
            </Card>
            
            <Card className="border-0 shadow-lg overflow-hidden">
              <div className="bg-gradient-to-r from-green-500 to-blue-500 p-6 text-white">
                <h3 className="text-xl font-bold mb-2">Coastal Town Deployment</h3>
                <p className="text-green-100">Population: 450K • 200 Intersections • 1 Year Active</p>
              </div>
              <CardContent className="p-6">
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-green-600 mb-1">-52%</div>
                    <div className="text-sm text-slate-600">Tourist Season Congestion</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-blue-600 mb-1">-31%</div>
                    <div className="text-sm text-slate-600">Emergency Response Time</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-purple-600 mb-1">+89%</div>
                    <div className="text-sm text-slate-600">Citizen Satisfaction</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-teal-600 mb-1">$2.1M</div>
                    <div className="text-sm text-slate-600">Annual Savings</div>
                  </div>
                </div>
                <p className="text-slate-600 text-sm">
                  "Tourism increased 15% due to improved traffic flow, boosting our local economy significantly."
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gradient-to-br from-slate-900 to-blue-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white mb-4">
              Ready to Transform Your City?
            </h2>
            <p className="text-xl text-blue-100 max-w-2xl mx-auto">
              Schedule a personalized demo and see how SmartFlow AI can optimize your traffic infrastructure.
            </p>
          </div>
          
          <Card className="border-0 shadow-2xl">
            <CardContent className="p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-2">
                      Full Name *
                    </label>
                    <Input
                      id="name"
                      name="name"
                      type="text"
                      required
                      value={formData.name}
                      onChange={handleInputChange}
                      className="border-slate-300 focus:border-blue-500"
                      placeholder="John Smith"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-2">
                      Email Address *
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={handleInputChange}
                      className="border-slate-300 focus:border-blue-500"
                      placeholder="john@cityname.gov"
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="organization" className="block text-sm font-medium text-slate-700 mb-2">
                    Organization/City *
                  </label>
                  <Input
                    id="organization"
                    name="organization"
                    type="text"
                    required
                    value={formData.organization}
                    onChange={handleInputChange}
                    className="border-slate-300 focus:border-blue-500"
                    placeholder="City of Springfield Department of Transportation"
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-slate-700 mb-2">
                    Tell us about your traffic challenges
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    rows={4}
                    value={formData.message}
                    onChange={handleInputChange}
                    className="border-slate-300 focus:border-blue-500"
                    placeholder="Describe your current traffic management challenges, the size of your network, and what you hope to achieve..."
                  />
                </div>
                
                <Button
                  type="submit"
                  size="lg"
                  className="w-full bg-gradient-to-r from-blue-600 to-teal-600 hover:from-blue-700 hover:to-teal-700 text-lg py-3"
                >
                  Schedule Your Demo
                  <ChevronRight className="ml-2 w-5 h-5" />
                </Button>
                
                <p className="text-sm text-slate-500 text-center">
                  We'll contact you within 24 hours to schedule your personalized demonstration
                </p>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="md:col-span-2">
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-teal-600 rounded-lg flex items-center justify-center">
                  <MapPin className="w-5 h-5 text-white" />
                </div>
                <span className="text-xl font-bold">SmartFlow AI</span>
              </div>
              <p className="text-slate-300 mb-6 max-w-md">
                Transforming urban transportation with AI-powered traffic management solutions. Building smarter, more efficient cities for the future.
              </p>
              <div className="flex space-x-4">
                <Button variant="outline" size="sm" className="text-white border-slate-600 hover:bg-slate-800">
                  <Youtube className="w-4 h-4" />
                </Button>
                <Button variant="outline" size="sm" className="text-white border-slate-600 hover:bg-slate-800">
                  LinkedIn
                </Button>
                <Button variant="outline" size="sm" className="text-white border-slate-600 hover:bg-slate-800">
                  Twitter
                </Button>
              </div>
            </div>
            
            <div>
              <h3 className="font-semibold mb-4">Solutions</h3>
              <ul className="space-y-2 text-slate-300">
                <li><a href="#" className="hover:text-white transition-colors">Traffic Optimization</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Emergency Priority</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Real-time Monitoring</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Analytics Dashboard</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-semibold mb-4">Company</h3>
              <ul className="space-y-2 text-slate-300">
                <li><a href="#" className="hover:text-white transition-colors">About Us</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Case Studies</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Support</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Contact</a></li>
              </ul>
            </div>
          </div>
          
          <Separator className="my-8 bg-slate-700" />
          
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-slate-400 text-sm">
              © 2024 SmartFlow AI. All rights reserved.
            </p>
            <div className="flex space-x-6 text-sm text-slate-400 mt-4 md:mt-0">
              <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
              <a href="#" className="hover:text-white transition-colors">Security</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
