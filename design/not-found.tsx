import React from "react";
import { useNavigate } from "react-router-dom";

export default function NotFound() {
  const navigate = useNavigate();
  return (
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
      <div style={{ display: 'flex', alignItems: 'center', gap: 24, marginBottom: 16 }}>
        <span style={{ fontSize: 120, fontWeight: 700, color: '#22b31b', lineHeight: 1 }}>4</span>
        <img src="/assests/posts.png" alt="Cactus" style={{ width: 120, height: 120, borderRadius: '50%', objectFit: 'cover', boxShadow: '0 4px 24px 0 rgba(34,179,27,0.08)' }} />
        <span style={{ fontSize: 120, fontWeight: 700, color: '#22b31b', lineHeight: 1 }}>4</span>
      </div>
      <div style={{ fontSize: 36, fontWeight: 700, color: '#222', marginBottom: 12, textAlign: 'center' }}>Page Not Found</div>
      <div style={{ fontSize: 18, color: '#666', marginBottom: 24, textAlign: 'center', maxWidth: 480 }}>
        We're sorry, the page you requested could not be found.<br />Please go back to the homepage.
          </div>
      <button
        onClick={() => navigate("/")}
        style={{
          background: '#22b31b',
          color: '#fff',
          border: 'none',
          borderRadius: 8,
          padding: '12px 36px',
          fontSize: 18,
          fontWeight: 600,
          cursor: 'pointer',
          transition: 'background 0.2s',
          marginBottom: 40
        }}
        onMouseOver={e => (e.currentTarget.style.background = '#178a13')}
        onMouseOut={e => (e.currentTarget.style.background = '#22b31b')}
      >
        Go Home
      </button>
    </div>
  );
}
