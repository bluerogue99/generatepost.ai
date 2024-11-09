import React, { useEffect, useRef } from 'react';
import './Testimonials.css';

const testimonialsData = [
  { name: "John Doe", title: "Content Strategist", feedback: "This AI Post Generator has completely transformed the way we create content. The quality and consistency are top-notch, saving us hours every week!" },
  { name: "Jane Smith", title: "Marketing Manager", feedback: "I’m amazed by how intuitive this tool is. It understands our brand voice and produces posts that resonate with our audience." },
  { name: "Robert Johnson", title: "Social Media Specialist", feedback: "As someone who manages multiple accounts, this tool is a game-changer. It generates unique posts that drive engagement effortlessly." },
  { name: "Emily Davis", title: "Brand Specialist", feedback: "This tool consistently exceeds our expectations, helping us create high-quality content quickly. A must-have for any team!" },
  { name: "Michael Green", title: "Digital Marketer", feedback: "Fantastic tool! It has significantly reduced the time I spend on content creation, and the results are incredible." },
  { name: "Sarah Thompson", title: "Content Writer", feedback: "Using this AI Post Generator has been a breeze. It feels like I have a team of writers backing me up!" },
  { name: "David Lee", title: "SEO Specialist", feedback: "The posts this tool generates are not only engaging but also SEO-friendly. I couldn’t ask for a better tool!" },
  { name: "Jessica Wright", title: "Copywriter", feedback: "This is a brilliant solution for any copywriter. It gives me fresh ideas and helps me focus on more strategic tasks." },
  { name: "Carlos Martinez", title: "Influencer", feedback: "Creating engaging social posts has never been this easy. It’s like having a personal assistant for my content!" },
  { name: "Laura Evans", title: "Product Manager", feedback: "The AI understands the tone we need and produces posts that align perfectly with our brand voice. It’s been a game-changer." },
  { name: "Matthew Wilson", title: "Freelance Writer", feedback: "The tool is fast, efficient, and delivers quality content every time. It’s now an essential part of my workflow." },
  { name: "Anna Robinson", title: "Content Marketing Manager", feedback: "Our content calendar is always full, thanks to this tool! It’s streamlined our planning and execution tremendously." },
  { name: "Sophia Turner", title: "Growth Marketer", feedback: "I love how it suggests ideas and creates posts that resonate with our target audience. Absolutely fantastic!" },
  { name: "Daniel Kim", title: "E-commerce Manager", feedback: "The tool has made content creation effortless. It’s a perfect solution for busy marketers who need quality fast." },
  { name: "Grace Collins", title: "UX Designer", feedback: "It’s not just about the posts; it’s about consistency and understanding our audience. This tool does it all!" },
  { name: "Liam Harris", title: "Agency Owner", feedback: "My clients are impressed with the content quality. This tool is a secret weapon for any agency!" },
  { name: "Nina Brooks", title: "Content Lead", feedback: "I can’t believe how much this tool has boosted our team’s productivity. We now focus on strategy, not content creation." },
  { name: "Lucas Perez", title: "Influencer", feedback: "Posts are always engaging and on-point. This AI post generator has quickly become my favorite tool!" },
  { name: "Victoria Gray", title: "Brand Manager", feedback: "The tool is so easy to use and produces top-quality posts. It feels like magic!" },
  { name: "Benjamin Scott", title: "Blogger", feedback: "The AI Post Generator gives me ideas that I would have never thought of. It’s like a brainstorming partner." },
  { name: "Zoe Campbell", title: "Project Coordinator", feedback: "Using this tool has taken a lot of stress out of my day. The content is always spot-on and ready to go!" },
  { name: "Chris Young", title: "PR Specialist", feedback: "The tool generates creative content that catches attention. It’s now part of our daily toolkit!" },
];

const Testimonials = () => {
  const scrollRef = useRef(null);

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    let start;
    
    const animateScroll = timestamp => {
      if (!start) start = timestamp;
      const elapsed = timestamp - start;
      scrollContainer.scrollLeft = (elapsed / 20) % scrollContainer.scrollWidth; // Control scroll speed
      requestAnimationFrame(animateScroll);
    };
    
    requestAnimationFrame(animateScroll);
  }, []);

  return (
    <section className="testimonials-section" id="testimonials">
      <h2 className="testimonials-title">Trusted by Content Creators</h2>
      <p className="testimonials-description">
  At our core, we <span className="highlighted-testimonial-description">care deeply about the effectiveness and authenticity of every single post</span>. 
  We understand that social media is about genuine connection, not noise, and our goal is to provide a tool that <span className="highlighted-testimonial-description">empowers users to work smarter, not spam</span>. 
  That's why our platform includes a dedicated dashboard where users can <span className="highlighted-testimonial-description">fine-tune and personalize content after it’s generated</span>, ensuring every post aligns with their unique voice and values.
</p>
      <div ref={scrollRef} className="testimonials-container">
        {[...testimonialsData, ...testimonialsData].map((testimonial, index) => (
          <div key={index} className="testimonial-card">
            <p className="testimonial-feedback">"{testimonial.feedback}"</p>
            <p className="testimonial-name">- {testimonial.name}</p>
            <p className="testimonial-title">{testimonial.title}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;