import React from 'react';

function Footer() {
  const currentYear = new Date().getFullYear();

  const staffMembers = [
    { name: "Ricardo Perez", role: "Soporte Técnico", email: "ricardo@mundogamer.com" },
    { name: "Samuel Lopez", role: "Ventas Online", email: "samuel@mundogamer.com" },
    { name: "Estevan Gomez", role: "Armado de PC", email: "estevan@mundogamer.com" }
  ];

  return (
    <footer style={{ backgroundColor: '#1a1a1a', padding: '20px', color: 'white', marginTop: '40px' }}>
      <div style={{ textAlign: 'center', marginBottom: '20px' }}>
        <h4>Mundo Gamer S.A.</h4>
        <p>📍 Av. Rivadavia 4500, CABA | 📞 0800-999-8324</p>
      </div>
<div style={{ display: 'flex', justifyContent: 'center', gap: '20px', flexWrap: 'wrap', marginBottom: '20px' }}>
        {staffMembers.map((person, index) => (
          <div key={index} style={{ border: '1px solid #444', padding: '10px', borderRadius: '6px', backgroundColor: '#222', width: '180px', textAlign: 'center' }}>
            <h5 style={{ margin: '0 0 5px 0', color: '#00ffcc' }}>{person.name}</h5>
            <p style={{ margin: '0', fontSize: '12px', color: 'gray' }}>{person.role}</p>
            <p style={{ margin: '5px 0 0 0', fontSize: '11px' }}>{person.email}</p>
          </div>
        ))}
      </div>

      <p style={{ color: 'gray', textAlign: 'center', fontSize: '12px', margin: 0 }}>
        © {currentYear} Reservados todos los derechos.
      </p>
    </footer>
  );
}

export default Footer;