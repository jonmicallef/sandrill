import Image from "next/image";

export default function About() {
  const team = [
    {
      name: "Alex Johnson",
      role: "Founder & CEO",
      bio: "Former lifeguard turned entrepreneur, Alex founded Sandrill after losing his phone to the ocean one too many times.",
      image: "/alex.jpg"
    },
    {
      name: "Maria Rodriguez",
      role: "Head of Product Design",
      bio: "Industrial designer with 15+ years experience creating outdoor products that withstand the elements.",
      image: "/maria.jpg"
    },
    {
      name: "David Chen",
      role: "Chief Technology Officer",
      bio: "Materials science expert specializing in UV-resistant and waterproof technologies for outdoor applications.",
      image: "/david.jpg"
    },
    {
      name: "Sarah Williams",
      role: "Head of Marketing",
      bio: "Beach enthusiast and marketing strategist who believes every beach day should be worry-free.",
      image: "/sarah.jpg"
    }
  ];

  const values = [
    {
      title: "Innovation",
      description: "We constantly push the boundaries of beach storage technology to create solutions that don't just work—they excel.",
      icon: (
        <svg className="w-12 h-12 text-primary" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clipRule="evenodd" />
        </svg>
      )
    },
    {
      title: "Quality",
      description: "Every Sandrill product is built to last, using premium materials and rigorous testing to ensure reliability.",
      icon: (
        <svg className="w-12 h-12 text-primary" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
        </svg>
      )
    },
    {
      title: "Sustainability",
      description: "We're committed to protecting the beaches we love by using eco-friendly materials and sustainable practices.",
      icon: (
        <svg className="w-12 h-12 text-primary" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M3 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" />
        </svg>
      )
    },
    {
      title: "Community",
      description: "We believe in building a community of beach lovers who share our passion for safe, organized beach experiences.",
      icon: (
        <svg className="w-12 h-12 text-primary" fill="currentColor" viewBox="0 0 20 20">
          <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3z" />
        </svg>
      )
    }
  ];

  const milestones = [
    {
      year: "2020",
      title: "The Beginning",
      description: "Alex loses his phone to the ocean and decides there has to be a better way to secure beach belongings."
    },
    {
      year: "2021",
      title: "First Prototype",
      description: "The original Sand Safe prototype is created and tested on beaches across California."
    },
    {
      year: "2022",
      title: "Company Founded",
      description: "Sandrill is officially founded with a mission to revolutionize beach storage and security."
    },
    {
      year: "2023",
      title: "Product Launch",
      description: "Sand Safe 2.0 launches to critical acclaim, selling out within the first month."
    },
    {
      year: "2024",
      title: "Expansion",
      description: "Sandrill expands product line to include collapsible storage, anchoring systems, and more."
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-primary to-coral text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-bold mb-6">About Sandrill</h1>
          <p className="text-xl opacity-90 max-w-3xl mx-auto">
            We're passionate about making beach experiences safer, more organized, and more enjoyable for everyone.
          </p>
        </div>
      </div>

      {/* Story Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Story</h2>
              <p className="text-lg text-gray-600 mb-6">
                It all started on a sunny day in Malibu when our founder, Alex Johnson, was enjoying a perfect beach day. 
                As a former lifeguard, Alex thought he knew everything about beach safety—until his phone disappeared into the sand, never to be seen again.
              </p>
              <p className="text-lg text-gray-600 mb-6">
                Frustrated by the lack of reliable beach storage solutions, Alex decided to create one. What began as a simple 
                prototype in his garage has grown into Sandrill, a company dedicated to revolutionizing how people store and 
                secure their belongings at the beach.
              </p>
              <p className="text-lg text-gray-600">
                Today, Sandrill products are trusted by thousands of beachgoers worldwide, from casual visitors to professional 
                beach photographers and surf instructors. Our mission is simple: make every beach day worry-free.
              </p>
            </div>
            <div className="relative">
              <div className="bg-gradient-to-br from-sand/20 to-ocean/20 rounded-2xl p-8">
                <div className="aspect-square bg-white rounded-xl flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-32 h-32 bg-gradient-to-br from-primary to-coral rounded-full mx-auto mb-4 flex items-center justify-center">
                      <svg className="w-16 h-16 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <h3 className="text-xl font-semibold text-gray-800">From Problem to Solution</h3>
                    <p className="text-gray-600 mt-2">Innovation born from necessity</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Values */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Mission & Values</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We're driven by a simple mission: to make beach experiences safer, more organized, and more enjoyable for everyone.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="bg-white p-8 rounded-2xl text-center hover:shadow-lg transition-shadow">
                <div className="mb-6 flex justify-center">
                  {value.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-16">Our Journey</h2>
          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-px h-full w-0.5 bg-primary"></div>
            <div className="space-y-12">
              {milestones.map((milestone, index) => (
                <div key={index} className={`relative flex items-center ${index % 2 === 0 ? 'justify-start' : 'justify-end'}`}>
                  <div className={`w-5/12 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8 text-left'}`}>
                    <div className="bg-white p-6 rounded-lg shadow-lg">
                      <div className="text-2xl font-bold text-primary mb-2">{milestone.year}</div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-2">{milestone.title}</h3>
                      <p className="text-gray-600">{milestone.description}</p>
                    </div>
                  </div>
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-primary rounded-full border-4 border-white shadow-lg"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Meet Our Team</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              The passionate individuals behind Sandrill's innovative beach storage solutions.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <div key={index} className="bg-white rounded-2xl p-6 text-center hover:shadow-lg transition-shadow">
                <div className="w-24 h-24 bg-gradient-to-br from-primary to-coral rounded-full mx-auto mb-4 flex items-center justify-center text-white text-2xl font-bold">
                  {member.name.split(' ').map(n => n[0]).join('')}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{member.name}</h3>
                <p className="text-primary font-medium mb-4">{member.role}</p>
                <p className="text-gray-600 text-sm">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gradient-to-r from-primary to-coral text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold mb-2">10,000+</div>
              <div className="text-lg opacity-90">Happy Customers</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">50+</div>
              <div className="text-lg opacity-90">Beach Locations</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">6</div>
              <div className="text-lg opacity-90">Product Lines</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">99%</div>
              <div className="text-lg opacity-90">Customer Satisfaction</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">Join the Sandrill Family</h2>
          <p className="text-xl text-gray-600 mb-8">
            Ready to transform your beach experience? Discover our innovative storage solutions today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-primary hover:bg-primary-dark text-white font-semibold py-4 px-8 rounded-lg text-lg">
              Shop Our Products
            </button>
            <button className="border-2 border-primary text-primary hover:bg-primary hover:text-white font-semibold py-4 px-8 rounded-lg text-lg">
              Contact Us
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
