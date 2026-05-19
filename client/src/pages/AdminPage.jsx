import React, { useState, useEffect } from 'react';
import './AdminPage.css';

export default function AdminPage() {
  const [activeTab, setActiveTab] = useState('dashboard');
  const [members, setMembers] = useState([]);
  const [leads, setLeads] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    setLoading(true);
    try {
      const [membersRes, leadsRes] = await Promise.all([
        fetch('http://localhost:5000/api/members'),
        fetch('http://localhost:5000/api/leads')
      ]);
      const membersData = await membersRes.json();
      const leadsData = await leadsRes.json();
      setMembers(Array.isArray(membersData) ? membersData : []);
      setLeads(Array.isArray(leadsData) ? leadsData : []);
    } catch (err) {
      console.error('Error fetching admin data', err);
    } finally {
      setLoading(false);
    }
  };

  const totalRevenue = members.reduce((acc, m) => acc + (m.amount || 0), 0);

  return (
    <div className="admin-layout">
      {/* Sidebar */}
      <aside className="admin-sidebar">
        <div className="admin-brand">
          <span className="logo-mark">💪</span>
          <h2>EMPIRE <span>ADMIN</span></h2>
        </div>
        <nav className="admin-nav">
          <button className={activeTab === 'dashboard' ? 'active' : ''} onClick={() => setActiveTab('dashboard')}>📊 Dashboard</button>
          <button className={activeTab === 'members' ? 'active' : ''} onClick={() => setActiveTab('members')}>👥 Members</button>
          <button className={activeTab === 'leads' ? 'active' : ''} onClick={() => setActiveTab('leads')}>📩 Leads / Inquiries</button>
        </nav>
        <div className="admin-footer">
          <a href="/" className="back-link">← Back to Website</a>
        </div>
      </aside>

      {/* Main Content */}
      <main className="admin-main">
        <header className="admin-header">
          <h1>{activeTab.charAt(0).toUpperCase() + activeTab.slice(1)}</h1>
          <button onClick={fetchData} className="btn-refresh">↻ Refresh</button>
        </header>

        {loading ? (
          <div className="loading-state">Loading data...</div>
        ) : (
          <div className="admin-content">
            {activeTab === 'dashboard' && (
              <div className="dashboard-grid">
                <div className="stat-card">
                  <h3>Total Members</h3>
                  <div className="stat-value">{members.length}</div>
                </div>
                <div className="stat-card">
                  <h3>Total Leads</h3>
                  <div className="stat-value">{leads.length}</div>
                </div>
                <div className="stat-card highlight">
                  <h3>Total Revenue</h3>
                  <div className="stat-value">₹{totalRevenue.toLocaleString('en-IN')}</div>
                </div>
              </div>
            )}

            {activeTab === 'members' && (
              <div className="table-container">
                <table className="admin-table">
                  <thead>
                    <tr>
                      <th>Name</th>
                      <th>Phone</th>
                      <th>Plan</th>
                      <th>Amount</th>
                      <th>Start Date</th>
                      <th>Status</th>
                    </tr>
                  </thead>
                  <tbody>
                    {members.map(m => (
                      <tr key={m._id}>
                        <td style={{ fontWeight: 600 }}>{m.name}</td>
                        <td>{m.phone}</td>
                        <td><span className="badge">{m.plan}</span></td>
                        <td>₹{m.amount}</td>
                        <td>{new Date(m.startDate).toLocaleDateString()}</td>
                        <td><span className="status active">Active</span></td>
                      </tr>
                    ))}
                    {members.length === 0 && <tr><td colSpan="6" style={{textAlign:'center'}}>No members found.</td></tr>}
                  </tbody>
                </table>
              </div>
            )}

            {activeTab === 'leads' && (
              <div className="table-container">
                <table className="admin-table">
                  <thead>
                    <tr>
                      <th>Name</th>
                      <th>Phone</th>
                      <th>Message</th>
                      <th>Date</th>
                    </tr>
                  </thead>
                  <tbody>
                    {leads.map(l => (
                      <tr key={l._id}>
                        <td style={{ fontWeight: 600 }}>{l.name}</td>
                        <td>{l.phone}</td>
                        <td style={{ maxWidth: '300px', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>{l.message}</td>
                        <td>{new Date(l.createdAt).toLocaleDateString()}</td>
                      </tr>
                    ))}
                    {leads.length === 0 && <tr><td colSpan="4" style={{textAlign:'center'}}>No leads found.</td></tr>}
                  </tbody>
                </table>
              </div>
            )}
          </div>
        )}
      </main>
    </div>
  );
}
