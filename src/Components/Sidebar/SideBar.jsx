import React from "react";
import "./sidebar.css";
import Profile from "../../Assets/Profile.jpg";

function SideBar() {
  return (
    <div className="sidebar-wrapper">
      <div className="sidebar-top-content-wrapper">
        <div className="sidebar-top-content-container">
          <div class="material-symbols-outlined dashboard-icon">dashboard</div>
          <div className="dashboard-text">Dashboard</div>
        </div>

        <div className="sidebar-middle-content-wrapper">
          <div className="sidebar-middle-content dashboard">
            <div className="icon-middle-content-container">
              <div className="material-symbols-outlined dashboard-icon">
                note_alt
              </div>
              <div className="sidebar-middle-content-values dashboard">
                Dashboard
              </div>
            </div>
          </div>

          <div className="sidebar-middle-content">
            <div className="icon-middle-content-container">
              <div class="material-symbols-outlined non-highlighted-icon">
                category
              </div>
              <div className="sidebar-middle-content-values">Product</div>
            </div>
            <div class="material-symbols-outlined arrow-right">
              chevron_right
            </div>
          </div>

          <div className="sidebar-middle-content">
            <div className="icon-middle-content-container">
              <div class="material-symbols-outlined non-highlighted-icon">
                account_box
              </div>
              <div className="sidebar-middle-content-values">Customers</div>
            </div>
            <div class="material-symbols-outlined arrow-right">
              chevron_right
            </div>
          </div>

          <div className="sidebar-middle-content">
            <div className="icon-middle-content-container">
              <div class="material-symbols-outlined non-highlighted-icon">
                account_balance_wallet
              </div>
              <div className="sidebar-middle-content-values">Income</div>
            </div>
            <div class="material-symbols-outlined arrow-right">
              chevron_right
            </div>
          </div>

          <div className="sidebar-middle-content">
            <div className="icon-middle-content-container">
              <div class="material-symbols-outlined non-highlighted-icon">
                heap_snapshot_large
              </div>
              <div className="sidebar-middle-content-values">Promote</div>
            </div>
            <div class="material-symbols-outlined arrow-right">
              chevron_right
            </div>
          </div>

          <div className="sidebar-middle-content">
            <div className="icon-middle-content-container">
              <div class="material-symbols-outlined non-highlighted-icon">
                live_help
              </div>
              <div className="sidebar-middle-content-values">Help</div>
            </div>
            <div class="material-symbols-outlined arrow-right">
              chevron_right
            </div>
          </div>
        </div>
      </div>

      <div className="sidebar-footer-content-wrapper">
        <div className="sidebar-footer-content-container">
          <img src={Profile} alt="" className="profile-pic" />

          <div className="sidebar-footer-profile-container">
            <div className="footer-profile-name">Evano</div>
            <div className="footer-profile-position non-highlighted-icon">
              Project Manager
            </div>
          </div>
        </div>
        <div class="material-symbols-outlined non-highlighted-icon">
          expand_more
        </div>
      </div>
    </div>
  );
}

export default SideBar;
