import React from 'react';
import styles from './ContactSection.module.css';

const ContactSection = () => {
  const contactInfo = [
    {
      id: 1,
      title: "Phone",
      content: "+7 (499) 350-66-04",
    },
    {
      id: 2,
      title: "Socials",
      content: "social-icons",
    },
    {
      id: 3,
      title: "Address",
      content: "Dubininskaya Ulitsa, 96, Moscow, Russia, 115093",
    },
    {
      id: 4,
      title: "Working Hours",
      content: "24 hours a day",
    },
  ];

  return (
    <section className={styles.section}>
      <h2 className={styles.title}>Contact</h2>

      <div className={styles.content}>
        <div className={styles.grid}>
          {/* First row */}
          <div className={styles.row}>
            <div className={styles.card}>
              <div className={styles.cardTitle}>{contactInfo[0].title}</div>
              <div className={styles.cardContent}>{contactInfo[0].content}</div>
            </div>

            <div className={styles.socialCard}>
              <div className={styles.cardTitle}>{contactInfo[1].title}</div>
              <div className={styles.socialIcons}>
                <img src="/assests/ic-instagram.svg" alt="Instagram" className={styles.socialIcon} />
                <img src="/assests/ic-whatsapp.svg" alt="WhatsApp" className={styles.socialIcon} />
              </div>
            </div>
          </div>

          {/* Second row */}
          <div className={styles.row}>
            <div className={styles.card}>
              <div className={styles.cardTitle}>{contactInfo[2].title}</div>
              <div className={styles.cardContent}>{contactInfo[2].content}</div>
            </div>

            <div className={styles.card}>
              <div className={styles.cardTitle}>{contactInfo[3].title}</div>
              <div className={styles.cardContent}>{contactInfo[3].content}</div>
            </div>
          </div>
        </div>

        {/* Map image заменяем на Google карту */}
        <iframe
          className={styles.map}
          title="Google Map"
          src="https://www.google.com/maps?q=Dubininskaya+Ulitsa,+96,+Moscow,+Russia,+115093&output=embed"
          width="100%"
          height="350"
          style={{ border: 0, borderRadius: '12px' }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>
    </section>
  );
};

export default ContactSection; 