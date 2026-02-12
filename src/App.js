import React, { useEffect } from "react";

function App() {

  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://unpkg.com/lucide@latest";
    script.onload = () => {
      if (window.lucide) {
        window.lucide.createIcons();
      }
    };
    document.body.appendChild(script);
  }, []);

  return (
    <>
      <style>{`
*{
  margin:0;
  padding:0;
  box-sizing:border-box;
  font-family:'Inter',sans-serif;
}

body{
  background:#f5f6f8;
  color:#111827;
}

/* ================= LAYOUT ================= */

.app{
  display:flex;
  height:100vh;
}

/* ================= ICON STRIP ================= */

.icon-strip{
  width:70px;
  background:white;
  border-right:1px solid #e5e7eb;
  display:flex;
  flex-direction:column;
  align-items:center;
  padding-top:20px;
  gap:22px;
}

.icon-btn{
  width:38px;
  height:38px;
  border-radius:10px;
  display:flex;
  align-items:center;
  justify-content:center;
  color:#6b7280;
  cursor:pointer;
}

.iccon-btn{
  width:38px;
  height:38px;
  border-radius:10px;
  display:flex;
  align-items:center;
  justify-content:center;
  color:#6b7280;
  cursor:pointer;
  margin-top:150px;
}

.icccon-btn{
  width:38px;
  height:38px;
  border-radius:10px;
  display:flex;
  align-items:center;
  justify-content:center;
  color:#6b7280;
  cursor:pointer;
  margin-top:10px;
}

.icon-btn:hover{
  background:#f3f4f6;
}

/* ================= SIDEBAR ================= */

.sidebar{
  width:360px;
  background:white;
  border-right:1px solid #e5e7eb;
  padding:25px;
  overflow:auto;
}

.sidebar h1{
  font-size:18px;
  font-weight:600;
  margin-bottom:5px;
}

.sidebar p{
  font-size:13px;
  color:#6b7280;
  margin-bottom:20px;
}

.sidebar label{
  font-size:13px;
  display:block;
  margin-top:15px;
  margin-bottom:6px;
}

.sidebar input,
.sidebar textarea{
  width:100%;
  padding:10px;
  border-radius:8px;
  border:1px solid #e5e7eb;
  font-size:13px;
}

.sidebar textarea{
  resize:none;
}

.ai-box{
  margin-top:70px;
  background:#ffffff;
  padding:20px;
  border-radius:14px;
  border:1px solid #e5e7eb;
  font-size:13px;
  position:relative;
}

.ai-send{
  position:absolute;
  right:15px;
  bottom:15px;
  width:38px;
  height:38px;
  border-radius:50%;
  background:black;
  color:white;
  display:flex;
  align-items:center;
  justify-content:center;
}

/* ================= MAIN ================= */

.main{
  flex:1;
  padding:20px 35px;
  overflow:auto;
}

/* ================= HEADER ================= */

.header{
  height:60px;
  background:#e5e7eb;
  display:flex;
  align-items:center;
  justify-content:space-between;
  padding:0 25px;
}

.header-left{
  display:flex;
  align-items:center;
  gap:15px;
}

.logo{
  width:32px;
  height:32px;
  background:black;
  border-radius:8px;
}

.header h2{
  font-size:18px;
  font-weight:600;
}

.header-right{
  display:flex;
  align-items:center;
  gap:20px;
  font-size:14px;
}

.bell{
  color:white;
  background:#111;
  width:32px;
  height:32px;
  border-radius:50%;
  display:flex;
  align-items:center;
  justify-content:center;
}

.avatar{
  width:32px;
  height:32px;
  border-radius:50%;
}

/* Report Navigation */

.report-nav{
  display:flex;
  justify-content:space-between;
  align-items:center;
  margin-bottom:15px;
  background-color:white;
  padding:22px;
}

.page-controls{
  display:flex;
  align-items:center;
  gap:10px;
  font-size:13px;
  color:#6b7280;
}

.control-btn{
  width:28px;
  height:28px;
  border:1px solid #e5e7eb;
  border-radius:6px;
  display:flex;
  align-items:center;
  justify-content:center;
  cursor:pointer;
}

.export{
  padding:6px 14px;
  font-size:13px;
  border:1px solid #ddd;
  border-radius:8px;
  background:#fff;
  cursor:pointer;
}

.save{
  padding:6px 16px;
  font-size:13px;
  border-radius:10px;
  border:none;
  background:#111;
  color:#fff;
  cursor:pointer;
}

.report-card{
  background:white;
  border-radius:16px;
  padding:30px;
  box-shadow:0 4px 20px rgba(0,0,0,0.04);
}

.monthly-header{
  display:flex;
  align-items:center;
  gap:12px;
  margin-bottom:20px;
}

.file-icon{
  width:42px;
  height:42px;
  background:black;
  border-radius:10px;
  display:flex;
  align-items:center;
  justify-content:center;
  color:white;
  padding:10px;
}

.stats{
  display:grid;
  grid-template-columns:repeat(4,1fr);
  gap:15px;
  margin-bottom:25px;
}

.stat{
  background:#f3f4f6;
  padding:20px;
  border-radius:12px;
}

.section-title{
  font-weight:600;
  margin-bottom:10px;
}

.chart-box{
  margin-top:25px;
  background:#f9fafb;
  padding:20px;
  border-radius:16px;
}

.chart-wrapper{
  display:flex;
}

.y-labels{
  display:flex;
  flex-direction:column;
  justify-content:space-between;
  font-size:12px;
  color:#6b7280;
  padding-right:10px;
}

svg{
  width:100%;
  height:200px;
}

.x-labels{
  display:flex;
  justify-content:space-between;
  font-size:12px;
  color:#6b7280;
  margin-top:5px;
}
      `}</style>



       <div className="header">
        <div className="header-left">
          <div className="logo"></div>
          <h2>Dashboard Builder</h2>
        </div>

        <div className="header-right">
          <span>Onepane Organisation</span>
          <div className="bell">🔔</div>
          <img src="something.jpg" alt="description" />

        </div>
      </div>

      <div className="app">

        {/* LEFT ICON STRIP */}
        <div className="icon-strip">
          <div className="icon-btn"><i data-lucide="plus"></i></div>
          <div className="icon-btn"><i data-lucide="message-square"></i></div>
          <div className="icon-btn"><i data-lucide="bot"></i></div>
          <div className="icon-btn"><i data-lucide="bar-chart-3"></i></div>
          <div className="icon-btn"><i data-lucide="file-text"></i></div>
          <div></div>
          <div className="icccon-btn"><i data-lucide="bar-chart-3"></i></div>
          <div className="iccon-btn"><i data-lucide="settings"></i></div>
        </div>

        {/* SIDEBAR */}
        <div className="sidebar">

          <div className="back">← Back to Dashboard</div>

          <h1>The Instant Dashboard</h1>
          <p>Transform JSON data into visual dashboards instantly</p>

          <label>Dashboard Name</label>
          <input defaultValue="Dashboard 1" />

          <label>API Key</label>
          <input defaultValue="dsquiduiw-2uwj2022-3thd8wws-eyei" />

          <label>JSON Data</label>
          <textarea rows="6" defaultValue={`{
 "report_title": "Sales Data",
 "items": [
  {"month":"Jan","revenue":45000,"expenses":32000},
  {"month":"Feb","revenue":52000,"expenses":35000}
 ]
}`} />

          <div className="ai-box">
            Design an expansive business dashboard featuring detailed charts that illustrate revenue versus expenses over time, prominent key metrics cards, and a comprehensive summary table.
            <div className="ai-send">
              <i data-lucide="arrow-up"></i>
            </div>
          </div>

        </div>

        {/* MAIN */}
        <div className="main">

          <div className="report-nav">
            <h3>Report Preview</h3>
            <div className="page-controls">
              Page 1 of 13
              <div className="control-btn"><i data-lucide="chevrons-left"></i></div>
              <div className="control-btn"><i data-lucide="chevron-left"></i></div>
              <div className="control-btn"><i data-lucide="chevron-right"></i></div>
              <div className="control-btn"><i data-lucide="chevrons-right"></i></div>
            </div>
            <div className="page-controls">
              <button className="export">Export ↓</button>
              <button className="save">Save ✓</button>
            </div>
          </div>

          <div className="report-card">

            <div className="monthly-header">
              <div className="file-icon">
                <i data-lucide="file-text"></i>
              </div>
              <div>
                <h3>Monthly Report</h3>
                <small style={{ color: "#6b7280" }}>Comprehensive Overview</small>
              </div>
            </div>

            <div className="stats">
              <div className="stat"><p>Over Utilised</p><h2>5</h2></div>
              <div className="stat"><p>Replication Status</p><h2>249</h2></div>
              <div className="stat"><p>Failed Backup Jobs</p><h2>740</h2></div>
              <div className="stat"><p>Total Cost/Month</p><h2>$28568.00</h2></div>
            </div>

            <div>
              <div className="section-title">Purpose of The Report</div>
              <p>This is a monthly report as part of the managed services provided by LogicEra. This report contains the following areas:</p>
              <ul>
                <li>List of Azure resources provisioned and hosted on Azure.</li>
                <li>Health statistics for the month of December.</li>
                <li>Approx. Azure Consumption for the month of December.</li>
              </ul>
            </div>

            <h3 style={{ marginTop: "20px" }}>
              Azure Hosted Azure Billing Analysis 1st December 2025 – 31st December 2025 types
            </h3>

            <p style={{ marginTop: "6px" }}>Subscription: Deyaar - HUB - Prod - Sub</p>
            <h3 style={{ marginTop: "10px" }}>$4,099.31</h3>

            <div className="chart-box">
              <div className="chart-title">
                <div className="green-dot"></div>
                Accumulated cost
              </div>

              <div className="chart-wrapper">
                <div className="y-labels">
                  <span>$6,000</span>
                  <span>$4,500</span>
                  <span>$3,000</span>
                  <span>$1,500</span>
                  <span>$0</span>
                </div>

                <svg viewBox="0 0 800 200" preserveAspectRatio="none">
                  <defs>
                    <linearGradient id="grad" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="#16a34a" stopOpacity="0.5"/>
                      <stop offset="100%" stopColor="#16a34a" stopOpacity="0"/>
                    </linearGradient>
                  </defs>

                  <path d="
                    M0 180
                    C100 160,150 140,200 130
                    S350 115,400 105
                    S550 95,600 90
                    S750 85,800 80
                    L800 200 L0 200 Z"
                    fill="url(#grad)"/>

                  <path d="
                    M0 180
                    C100 160,150 140,200 130
                    S350 115,400 105
                    S550 95,600 90
                    S750 85,800 80"
                    fill="none"
                    stroke="#16a34a"
                    strokeWidth="3"
                    strokeLinecap="round"/>
                </svg>
              </div>

              <div className="x-labels">
                <span>Dec 1</span>
                <span>Dec 5</span>
                <span>Dec 8</span>
                <span>Dec 13</span>
                <span>Dec 17</span>
                <span>Dec 21</span>
                <span>Dec 26</span>
                <span>Dec 29</span>
              </div>
            </div>

          </div>

        </div>

      </div>
    </>
  );
}

export default App;
