import React from 'react';
import { FaFacebookF, FaTwitter, FaGooglePlusG, FaLinkedinIn } from 'react-icons/fa';

const SocialStats = () => {
    const socials = [
        { name: 'Like us on facebook', value: '30,000', icon: <FaFacebookF />, bg: '#3b5998' },
        { name: 'Follow us on twitter', value: '111,000', icon: <FaTwitter />, bg: '#00acee' },
        { name: 'Follow us on google plus', value: '19,000', icon: <FaGooglePlusG />, bg: '#db4a39' },
        { name: 'Follow us on linkedin', value: '45,000', icon: <FaLinkedinIn />, bg: '#0077b5' },
    ];

    return (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
            {socials.map((social, index) => (
                <div key={index} style={{
                    backgroundColor: social.bg,
                    borderRadius: '8px',
                    padding: '20px',
                    color: '#fff',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center',
                    textAlign: 'center',
                    minHeight: '100px'
                }}>
                    <div style={{ fontSize: '24px', marginBottom: '5px' }}>{social.icon}</div>
                    <p style={{ fontSize: '12px', opacity: 0.8, marginBottom: '2px' }}>{social.name}</p>
                    <h3 style={{ fontSize: '20px', fontWeight: 'bold' }}>{social.value}</h3>
                </div>
            ))}
        </div>
    );
};

export default SocialStats;
