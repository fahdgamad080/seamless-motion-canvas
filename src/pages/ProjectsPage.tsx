
import { useState } from 'react';
import { ArrowLeft, ExternalLink, Github, Filter } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Link } from 'react-router-dom';

const ProjectsPage = () => {
  const [filter, setFilter] = useState('all');
  
  const projects = [
    {
      id: 1,
      title: "E-Commerce Platform",
      description: "A full-stack e-commerce solution built with React, Node.js, and PostgreSQL. Features include user authentication, payment processing, and admin dashboard.",
      longDescription: "This comprehensive e-commerce platform provides a complete shopping experience with advanced features like real-time inventory management, secure payment processing through Stripe, advanced search and filtering, user reviews and ratings, and a powerful admin dashboard for managing products, orders, and customers.",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=400&fit=crop",
      tech: ["React", "Node.js", "PostgreSQL", "Stripe", "AWS"],
      category: "fullstack",
      github: "#",
      demo: "#",
      status: "completed"
    },
    {
      id: 2,
      title: "Task Management App",
      description: "A collaborative task management application with real-time updates, drag-and-drop functionality, and team collaboration features.",
      longDescription: "Modern project management tool designed for teams. Features include kanban boards, real-time collaboration, time tracking, file attachments, team chat integration, and comprehensive reporting tools to boost productivity.",
      image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=800&h=400&fit=crop",
      tech: ["Vue.js", "Firebase", "Vuex", "CSS3", "WebSocket"],
      category: "frontend",
      github: "#",
      demo: "#",
      status: "completed"
    },
    {
      id: 3,
      title: "Weather Dashboard",
      description: "A responsive weather dashboard that displays current conditions and forecasts with beautiful data visualizations.",
      longDescription: "Interactive weather application with location-based services, detailed forecasts, weather maps, historical data analysis, and customizable alerts for severe weather conditions.",
      image: "https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?w=800&h=400&fit=crop",
      tech: ["TypeScript", "Chart.js", "API Integration", "PWA"],
      category: "frontend",
      github: "#",
      demo: "#",
      status: "completed"
    },
    {
      id: 4,
      title: "AI Chat Application",
      description: "Real-time chat application with AI integration, smart responses, and modern UI design.",
      longDescription: "Next-generation chat platform integrating AI capabilities for smart message suggestions, language translation, sentiment analysis, and automated moderation features.",
      image: "https://images.unsplash.com/photo-1587560699334-cc4ff634909a?w=800&h=400&fit=crop",
      tech: ["React", "Socket.io", "OpenAI", "Express"],
      category: "fullstack",
      github: "#",
      demo: "#",
      status: "in-progress"
    },
    {
      id: 5,
      title: "Portfolio Website",
      description: "A modern, responsive portfolio website showcasing creative animations and optimized performance.",
      longDescription: "Personal portfolio showcasing development skills with advanced animations, dark mode support, responsive design, and performance optimization techniques.",
      image: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=800&h=400&fit=crop",
      tech: ["React", "Tailwind CSS", "Framer Motion", "Vite"],
      category: "frontend",
      github: "#",
      demo: "#",
      status: "completed"
    },
    {
      id: 6,
      title: "Financial Dashboard",
      description: "Comprehensive financial tracking and analytics dashboard with real-time data visualization.",
      longDescription: "Advanced financial management tool with portfolio tracking, expense analysis, budget planning, and investment insights with beautiful charts and reports.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=400&fit=crop",
      tech: ["React", "D3.js", "Python", "FastAPI"],
      category: "fullstack",
      github: "#",
      demo: "#",
      status: "completed"
    }
  ];

  const categories = [
    { id: 'all', name: 'All Projects' },
    { id: 'fullstack', name: 'Full Stack' },
    { id: 'frontend', name: 'Frontend' },
    { id: 'backend', name: 'Backend' }
  ];

  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(project => project.category === filter);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-blue-50 dark:from-gray-900 dark:via-gray-800 dark:to-blue-900">
      {/* Header */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 via-purple-600/20 to-pink-600/20 animate-pulse"></div>
        <div className="relative container mx-auto px-6 py-20">
          <div className="flex items-center gap-4 mb-8 animate-fade-in">
            <Link to="/">
              <Button variant="ghost" size="icon" className="text-gray-600 dark:text-gray-300 hover:bg-white/10 backdrop-blur-md">
                <ArrowLeft className="h-5 w-5" />
              </Button>
            </Link>
            <div>
              <h1 className="text-4xl md:text-6xl font-bold gradient-text">My Projects</h1>
              <p className="text-lg text-gray-600 dark:text-gray-300 mt-2">
                Explore my latest work and creative solutions
              </p>
            </div>
          </div>

          {/* Filter Buttons */}
          <div className="flex flex-wrap gap-3 mb-12 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            <Filter className="h-5 w-5 text-gray-500 dark:text-gray-400 mt-2" />
            {categories.map((category) => (
              <Button
                key={category.id}
                variant={filter === category.id ? "default" : "outline"}
                onClick={() => setFilter(category.id)}
                className={`transition-all duration-300 ${
                  filter === category.id 
                    ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg transform scale-105' 
                    : 'hover:bg-gray-100 dark:hover:bg-gray-700'
                }`}
              >
                {category.name}
              </Button>
            ))}
          </div>
        </div>
      </div>

      {/* Projects Grid */}
      <div className="container mx-auto px-6 pb-20">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <Card 
              key={project.id}
              className="group overflow-hidden border-0 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 animate-fade-in-up glass-effect"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="relative overflow-hidden">
                <img 
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                {/* Status Badge */}
                <div className="absolute top-4 left-4">
                  <Badge 
                    variant={project.status === 'completed' ? 'default' : 'secondary'}
                    className={`${
                      project.status === 'completed' 
                        ? 'bg-green-500 text-white' 
                        : 'bg-yellow-500 text-white'
                    }`}
                  >
                    {project.status === 'completed' ? 'Completed' : 'In Progress'}
                  </Badge>
                </div>
                
                {/* Action Buttons */}
                <div className="absolute top-4 right-4 flex space-x-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <Button size="sm" variant="secondary" className="h-8 w-8 p-0 backdrop-blur-md bg-white/20">
                    <Github className="h-4 w-4" />
                  </Button>
                  <Button size="sm" variant="secondary" className="h-8 w-8 p-0 backdrop-blur-md bg-white/20">
                    <ExternalLink className="h-4 w-4" />
                  </Button>
                </div>

                {/* Project Info Overlay */}
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                  <p className="text-sm opacity-90">
                    {project.longDescription}
                  </p>
                </div>
              </div>
              
              <CardHeader className="pb-3">
                <h3 className="text-xl font-semibold mb-2 group-hover:text-blue-600 transition-colors duration-300">
                  {project.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
                  {project.description}
                </p>
              </CardHeader>
              
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <Badge 
                      key={tech} 
                      variant="outline" 
                      className="text-xs hover:bg-blue-50 dark:hover:bg-blue-900/20 transition-colors duration-200"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {filteredProjects.length === 0 && (
          <div className="text-center py-20 animate-fade-in">
            <p className="text-gray-500 dark:text-gray-400 text-lg">
              No projects found in this category.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProjectsPage;
