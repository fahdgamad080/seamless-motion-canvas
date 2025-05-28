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
      category: "ecommerce",
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
    },
    {
      id: 7,
      title: "Corporate WordPress Site",
      description: "Custom WordPress theme development with advanced functionality and responsive design for corporate clients.",
      longDescription: "Professional WordPress website featuring custom post types, advanced custom fields, multilingual support, SEO optimization, and performance enhancements for enterprise-level clients.",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=400&fit=crop",
      tech: ["WordPress", "PHP", "MySQL", "ACF", "WPML"],
      category: "wordpress",
      github: "#",
      demo: "#",
      status: "completed"
    },
    {
      id: 8,
      title: "Fashion E-commerce Store",
      description: "Modern e-commerce platform for fashion brands with advanced product filtering and shopping cart functionality.",
      longDescription: "Comprehensive fashion e-commerce solution with product variations, size guides, wishlist functionality, advanced search filters, and integrated payment processing for seamless shopping experience.",
      image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800&h=400&fit=crop",
      tech: ["Shopify", "Liquid", "JavaScript", "CSS3", "Stripe"],
      category: "ecommerce",
      github: "#",
      demo: "#",
      status: "completed"
    }
  ];

  const categories = [
    { id: 'all', name: 'All Projects' },
    { id: 'fullstack', name: 'Full Stack' },
    { id: 'frontend', name: 'Frontend' },
    { id: 'backend', name: 'Backend' },
    { id: 'wordpress', name: 'WordPress' },
    { id: 'ecommerce', name: 'E-commerce' }
  ];

  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(project => project.category === filter);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-blue-50 dark:from-gray-900 dark:via-gray-800 dark:to-blue-900">
      {/* Header */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 via-purple-600/20 to-pink-600/20 animate-pulse"></div>
        <div className="relative container mx-auto px-4 sm:px-6 py-12 sm:py-16 lg:py-20">
          <div className="flex items-start sm:items-center gap-3 sm:gap-4 mb-6 sm:mb-8 animate-fade-in">
            <Link to="/">
              <Button variant="ghost" size="icon" className="text-gray-600 dark:text-gray-300 hover:bg-white/10 backdrop-blur-md shrink-0">
                <ArrowLeft className="h-4 w-4 sm:h-5 sm:w-5" />
              </Button>
            </Link>
            <div className="flex-1 min-w-0">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold gradient-text leading-tight">
                My Projects
              </h1>
              <p className="text-sm sm:text-base lg:text-lg text-gray-600 dark:text-gray-300 mt-1 sm:mt-2">
                Explore my latest work and creative solutions
              </p>
            </div>
          </div>

          {/* Filter Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-3 mb-8 sm:mb-12 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            <div className="flex items-center gap-2 sm:gap-3">
              <Filter className="h-4 w-4 sm:h-5 sm:w-5 text-gray-500 dark:text-gray-400 shrink-0" />
              <span className="text-sm font-medium text-gray-700 dark:text-gray-300 sm:hidden">
                Filter:
              </span>
            </div>
            <div className="flex flex-wrap gap-2 sm:gap-3">
              {categories.map((category) => (
                <Button
                  key={category.id}
                  variant={filter === category.id ? "default" : "outline"}
                  size="sm"
                  onClick={() => setFilter(category.id)}
                  className={`text-xs sm:text-sm transition-all duration-300 ${
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
      </div>

      {/* Projects Grid */}
      <div className="container mx-auto px-4 sm:px-6 pb-12 sm:pb-16 lg:pb-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
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
                  className="w-full h-40 sm:h-48 object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                {/* Status Badge */}
                <div className="absolute top-3 sm:top-4 left-3 sm:left-4">
                  <Badge 
                    variant={project.status === 'completed' ? 'default' : 'secondary'}
                    className={`text-xs ${
                      project.status === 'completed' 
                        ? 'bg-green-500 text-white' 
                        : 'bg-yellow-500 text-white'
                    }`}
                  >
                    {project.status === 'completed' ? 'Completed' : 'In Progress'}
                  </Badge>
                </div>
                
                {/* Action Buttons */}
                <div className="absolute top-3 sm:top-4 right-3 sm:right-4 flex space-x-1 sm:space-x-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <Button size="sm" variant="secondary" className="h-7 w-7 sm:h-8 sm:w-8 p-0 backdrop-blur-md bg-white/20">
                    <Github className="h-3 w-3 sm:h-4 sm:w-4" />
                  </Button>
                  <Button size="sm" variant="secondary" className="h-7 w-7 sm:h-8 sm:w-8 p-0 backdrop-blur-md bg-white/20">
                    <ExternalLink className="h-3 w-3 sm:h-4 sm:w-4" />
                  </Button>
                </div>

                {/* Project Info Overlay */}
                <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                  <p className="text-xs sm:text-sm opacity-90 line-clamp-3">
                    {project.longDescription}
                  </p>
                </div>
              </div>
              
              <CardHeader className="p-4 sm:p-6 pb-2 sm:pb-3">
                <h3 className="text-lg sm:text-xl font-semibold mb-2 group-hover:text-blue-600 transition-colors duration-300 line-clamp-2">
                  {project.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 text-xs sm:text-sm leading-relaxed line-clamp-3">
                  {project.description}
                </p>
              </CardHeader>
              
              <CardContent className="p-4 sm:p-6 pt-0">
                <div className="flex flex-wrap gap-1 sm:gap-2">
                  {project.tech.slice(0, 4).map((tech) => (
                    <Badge 
                      key={tech} 
                      variant="outline" 
                      className="text-xs hover:bg-blue-50 dark:hover:bg-blue-900/20 transition-colors duration-200"
                    >
                      {tech}
                    </Badge>
                  ))}
                  {project.tech.length > 4 && (
                    <Badge 
                      variant="outline" 
                      className="text-xs text-gray-500"
                    >
                      +{project.tech.length - 4}
                    </Badge>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {filteredProjects.length === 0 && (
          <div className="text-center py-12 sm:py-20 animate-fade-in">
            <p className="text-gray-500 dark:text-gray-400 text-base sm:text-lg">
              No projects found in this category.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProjectsPage;
