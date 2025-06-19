import React from "react";
import { useNavigate } from "react-router-dom";
import ContactSection from '../components/ContactSection';

export default function NotFound() {
  const navigate = useNavigate();
  return (
    <>
      <div style={{
        minHeight: '100vh',
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        background: '#fff',
        fontFamily: 'Montserrat, Helvetica, sans-serif',
        padding: '0 16px'
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 48, marginBottom: 60 }}>
          <span style={{ fontSize: 260, fontWeight: 700, color: '#339933', lineHeight: 1, fontFamily: 'Montserrat, Helvetica, sans-serif' }}>4</span>
          <img src="/assests/cactus.png" alt="Cactus" style={{ width: 220, height: 220, borderRadius: '50%', objectFit: 'cover', margin: '0 16px' }} />
          <span style={{ fontSize: 260, fontWeight: 700, color: '#339933', lineHeight: 1, fontFamily: 'Montserrat, Helvetica, sans-serif' }}>4</span>
        </div>
        <div style={{ fontSize: 64, fontWeight: 700, color: '#222', marginBottom: 18, textAlign: 'center', fontFamily: 'Montserrat, Helvetica, sans-serif' }}>Page Not Found</div>
        <div style={{ fontSize: 28, color: '#888', marginBottom: 40, textAlign: 'center', maxWidth: 700, fontFamily: 'Montserrat, Helvetica, sans-serif' }}>
          We're sorry, the page you requested could not be found.<br />Please go back to the homepage.
        </div>
        <button
          onClick={() => navigate("/")}
          style={{
            background: '#339933',
            color: '#fff',
            border: 'none',
            borderRadius: 12,
            padding: '22px 70px',
            fontSize: 32,
            fontWeight: 600,
            cursor: 'pointer',
            transition: 'background 0.2s',
            marginBottom: 60,
            fontFamily: 'Montserrat, Helvetica, sans-serif'
          }}
          onMouseOver={e => (e.currentTarget.style.background = '#267326')}
          onMouseOut={e => (e.currentTarget.style.background = '#339933')}
        >
          Go Home
        </button>
      </div>
      <ContactSection />
    </>
  );
} 