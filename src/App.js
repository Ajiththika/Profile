import React from 'react';

const ProfileCard = ({ name, age, bio, image }) => {
  return (
    <div style={{
      border: '2px solid #e0e0e0',
      borderRadius: '12px',
      padding: '20px',
      textAlign: 'center',
      backgroundColor: '#ffffff',
      boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
      transition: 'transform 0.2s, box-shadow 0.2s',
      cursor: 'pointer',
    }}
    onMouseEnter={(e) => {
      e.currentTarget.style.transform = 'translateY(-5px)';
      e.currentTarget.style.boxShadow = '0 8px 12px rgba(0, 0, 0, 0.15)';
    }}
    onMouseLeave={(e) => {
      e.currentTarget.style.transform = 'translateY(0)';
      e.currentTarget.style.boxShadow = '0 4px 6px rgba(0, 0, 0, 0.1)';
    }}>
      <img 
        src={image} 
        alt={name}
        style={{
          width: '100px',
          height: '100px',
          borderRadius: '50%',
          objectFit: 'cover',
          border: '3px solid #4a90e2',
          marginBottom: '15px',
        }}
      />
      <h3 style={{
        margin: '10px 0',
        fontSize: '20px',
        color: '#333',
        fontWeight: '600',
      }}>
        {name}
      </h3>
      <p style={{
        margin: '5px 0',
        fontSize: '14px',
        color: '#666',
        fontWeight: '500',
      }}>
        Age: {age}
      </p>
      <p style={{
        margin: '10px 0 0 0',
        fontSize: '14px',
        color: '#888',
        lineHeight: '1.5',
      }}>
        {bio}
      </p>
    </div>
  );
};

const App = () => {
  const profiles = [
    {
      name: "Sarah Johnson",
      age: 28,
      bio: "Digital marketing specialist with a passion for creative campaigns and data-driven strategies.",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&h=200&fit=crop"
    },
    {
      name: "Michael Chen",
      age: 35,
      bio: "Software engineer who loves building scalable applications and mentoring junior developers.",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop"
    },
    {
      name: "Emma Rodriguez",
      age: 42,
      bio: "Chef and restaurant owner specializing in fusion cuisine and sustainable cooking practices.",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&h=200&fit=crop"
    },
    {
      name: "James Wilson",
      age: 31,
      bio: "Fitness trainer and nutrition coach helping people achieve their health goals through holistic wellness.",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&h=200&fit=crop"
    },
    {
      name: "Olivia Martinez",
      age: 26,
      bio: "Graphic designer creating stunning visual identities for brands across various industries.",
      image: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=200&h=200&fit=crop"
    },
    {
      name: "David Kim",
      age: 39,
      bio: "Financial advisor with expertise in investment strategies and retirement planning for families.",
      image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=200&h=200&fit=crop"
    },
    {
      name: "Sophia Anderson",
      age: 29,
      bio: "Environmental scientist working on climate change solutions and renewable energy projects.",
      image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=200&h=200&fit=crop"
    },
    {
      name: "Ryan Thompson",
      age: 33,
      bio: "Photographer capturing life's beautiful moments through compelling portraits and landscapes.",
      image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=200&h=200&fit=crop"
    },
    {
      name: "Isabella Garcia",
      age: 37,
      bio: "Teacher and educational consultant passionate about innovative learning methods and student success.",
      image: "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?w=200&h=200&fit=crop"
    },
    {
      name: "Lucas Brown",
      age: 30,
      bio: "Music producer and sound engineer crafting unique audio experiences for artists worldwide.",
      image: "https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?w=200&h=200&fit=crop"
    },
    {
      name: "Ava Taylor",
      age: 27,
      bio: "Travel blogger sharing adventures and cultural experiences from over 50 countries visited.",
      image: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=200&h=200&fit=crop"
    },
    {
      name: "Ethan Davis",
      age: 34,
      bio: "Architect designing sustainable buildings that blend modern aesthetics with environmental responsibility.",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&h=200&fit=crop"
    }
  ];

  return (
    <div style={{
      minHeight: '100vh',
      backgroundColor: '#f5f7fa',
      padding: '40px 20px',
    }}>
      <h1 style={{
        textAlign: 'center',
        fontSize: '36px',
        color: '#333',
        marginBottom: '40px',
        fontWeight: '700',
      }}>
        Our Team Profiles
      </h1>
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(4, 1fr)',
        gap: '25px',
        maxWidth: '1400px',
        margin: '0 auto',
      }}>
        {profiles.map((profile, index) => (
          <ProfileCard
            key={index}
            name={profile.name}
            age={profile.age}
            bio={profile.bio}
            image={profile.image}
          />
        ))}
      </div>
    </div>
  );
};

export default App;