import React from 'react';
import { Users, Map, Sun, Award } from 'lucide-react';

const StatItem = ({ icon, value, label }) => {
  return (
    <div className="stat-item">
      <div className="stat-icon">{icon}</div>
      <div className="stat-value">{value}</div>
      <div className="stat-label">{label}</div>
    </div>
  );
};

const Stats = () => {
  return (
    <section className="stats">
      <div className="stats-overlay"></div>
      <div className="stats-content">
        <div className="section-title">
          <h2>Cartagena en números</h2>
        </div>
        <div className="stats-grid">
          <StatItem 
            icon={<Users size={32} />}
            value="+1.5 millones"
            label="Visitantes anuales"
          />
          <StatItem 
            icon={<Map size={32} />}
            value="11 km"
            label="De murallas históricas"
          />
          <StatItem 
            icon={<Sun size={32} />}
            value="30°C"
            label="Temperatura promedio anual"
          />
          <StatItem 
            icon={<Award size={32} />}
            value="Desde 1984"
            label="Patrimonio de la Humanidad"
          />
        </div>
      </div>
    </section>
  );
};

export default Stats;