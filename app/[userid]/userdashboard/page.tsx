"use client"

import { useState } from "react"
import { Calendar, Home, User, Settings, Activity, Bell, MessageCircle } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

interface UserDashboardProps {
  params: {
    userid: string
  }
}

export default function UserDashboard({ params }: UserDashboardProps) {
  const { userid } = params
  const [activeNav, setActiveNav] = useState("home")

  // Mock user data
  const userData = {
    name: "John Smith",
    email: "john.smith@email.com",
    phone: "(512) 555-0123",
    loyaltyPoints: 250,
    memberSince: "2022",
    totalBookings: 8,
  }

  const upcomingServices = [
    {
      id: "1",
      service: "Christmas Light Installation",
      date: "2024-11-15",
      time: "10:00 AM",
      address: "123 Main St, Austin, TX",
      status: "confirmed",
      package: "Advanced Package",
    },
    {
      id: "2",
      service: "Light Removal",
      date: "2024-01-15",
      time: "2:00 PM",
      address: "123 Main St, Austin, TX",
      status: "scheduled",
      package: "Removal Service",
    },
  ]

  const navItems = [
    { id: "home", icon: Home, label: "Home" },
    { id: "profile", icon: User, label: "Profile" },
    { id: "schedule", icon: Calendar, label: "Schedule" },
    { id: "activities", icon: Activity, label: "Services" },
    { id: "settings", icon: Settings, label: "Settings" },
  ]

  return (
    <div
      className="min-h-screen flex items-center justify-center"
      style={{
        background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
        fontFamily: '"Nunito", sans-serif',
      }}
    >
      <main className="dashboard-main">
        {/* Sidebar Navigation */}
        <nav className="main-menu">
          <h1 className="dashboard-title">Lone Star Lighting</h1>
          <Image src="/logo.png" alt="Logo" width={30} height={30} className="logo" />

          <ul>
            {navItems.map((item) => (
              <li
                key={item.id}
                className={`nav-item ${activeNav === item.id ? "active" : ""}`}
                onClick={() => setActiveNav(item.id)}
              >
                <b></b>
                <b></b>
                <Link href="#">
                  <item.icon className="nav-icon" />
                  <span className="nav-text">{item.label}</span>
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* Main Content */}
        <section className="content">
          {/* Left Content */}
          <div className="left-content text-black">
            {/* Popular Services */}
            <div className="activities">
              <h1>Popular Services</h1>
              <div className="activity-container">
                <div className="image-container img-one">
                  <Image src="/images/christmas-lighting.jpeg" alt="Christmas Lighting" fill className="object-cover" />
                  <div className="overlay">
                    <h3>Christmas</h3>
                  </div>
                </div>

                <div className="image-container img-two">
                  <Image src="/images/wedding-lighting.jpeg" alt="Wedding Lighting" fill className="object-cover" />
                  <div className="overlay">
                    <h3>Wedding</h3>
                  </div>
                </div>

                <div className="image-container img-three">
                  <Image src="/images/outdoor-lighting.png" alt="Outdoor Lighting" fill className="object-cover" />
                  <div className="overlay">
                    <h3>Outdoor</h3>
                  </div>
                </div>

                <div className="image-container img-four">
                  <Image src="/images/event-lighting.png" alt="Event Lighting" fill className="object-cover" />
                  <div className="overlay">
                    <h3>Events</h3>
                  </div>
                </div>

                <div className="image-container img-five">
                  <Image src="/images/landscape-lighting.png" alt="Landscape Lighting" fill className="object-cover" />
                  <div className="overlay">
                    <h3>Landscape</h3>
                  </div>
                </div>

                <div className="image-container img-six">
                  <Image src="/images/security-lighting.png" alt="Security Lighting" fill className="object-cover" />
                  <div className="overlay">
                    <h3>Security</h3>
                  </div>
                </div>
              </div>
            </div>

            {/* Bottom Section */}
            <div className="left-bottom">
              {/* Upcoming Schedule */}
              <div className="weekly-schedule text-black">
                <h1>Upcoming Schedule</h1>
                <div className="calendar">
                  {upcomingServices.map((service, index) => (
                    <div
                      key={service.id}
                      className={`day-and-activity ${index === 0 ? "activity-one" : "activity-two"}`}
                    >
                      <div className="day">
                        <h1>{new Date(service.date).getDate()}</h1>
                        <p>{new Date(service.date).toLocaleDateString("en", { weekday: "short" })}</p>
                      </div>
                      <div className="activity">
                        <h2>{service.service}</h2>
                        <div className="participants">
                          <div className="participant-avatar" style={{ "--i": 1 } as any}></div>
                          <div className="participant-avatar" style={{ "--i": 2 } as any}></div>
                          <div className="participant-avatar" style={{ "--i": 3 } as any}></div>
                        </div>
                      </div>
                      <button className="btn">View</button>
                    </div>
                  ))}
                </div>
              </div>

              {/* Service Stats */}
              <div className="personal-bests">
                <h1>Service Stats</h1>
                <div className="personal-bests-container">
                  <div className="best-item box-one">
                    <p>Total Services: 8</p>
                    <Image src="/images/basic-package.png" alt="Services" width={100} height={75} />
                  </div>
                  <div className="best-item box-two">
                    <p>Loyalty Points: 250</p>
                    <Image src="/images/advanced-package.png" alt="Points" width={90} height={60} />
                  </div>
                  <div className="best-item box-three">
                    <p>Member Since: 2022</p>
                    <Image src="/images/gingerbread-package.png" alt="Member" width={70} height={70} />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Content */}
          <div className="right-content text-black">
            {/* User Info */}
            <div className="user-info">
              <div className="icon-container">
                <Bell className="nav-icon" />
                <MessageCircle className="nav-icon" />
              </div>
              <h4>{userData.name}</h4>
              <div className="user-avatar"></div>
            </div>

            {/* Active Services */}
            <div className="active-calories text-black">
              <h1>Active Services</h1>
              <div className="active-calories-container">
                <div className="box" style={{ "--i": "85%" } as any}>
                  <div className="circle">
                    <h2>
                      85<small>%</small>
                    </h2>
                  </div>
                </div>
                <div className="calories-content">
                  <p>
                    <span>This Year:</span> 8
                  </p>
                  <p>
                    <span>This Month:</span> 2
                  </p>
                  <p>
                    <span>Completed:</span> 6
                  </p>
                </div>
              </div>
            </div>

            {/* Mobile Personal Bests */}
            <div className="mobile-personal-bests text-black">
              <h1>Service Stats</h1>
              <div className="personal-bests-container">
                <div className="best-item box-one">
                  <p>Total Services: 8</p>
                  <Image src="/images/basic-package.png" alt="Services" width={80} height={60} />
                </div>
                <div className="best-item box-two">
                  <p>Loyalty Points: 250</p>
                  <Image src="/images/advanced-package.png" alt="Points" width={70} height={50} />
                </div>
                <div className="best-item box-three">
                  <p>Member Since: 2022</p>
                  <Image src="/images/gingerbread-package.png" alt="Member" width={60} height={60} />
                </div>
              </div>
            </div>

            {/* Recent Activity */}
            <div className="friends-activity">
              <h1>Recent Activity</h1>
              <div className="card-container text-black">
                <div className="card">
                  <div className="card-user-info">
                    <div className="card-avatar"></div>
                    <h2>Sarah</h2>
                  </div>
                  <Image
                    src="/images/christmas-elegant.png"
                    alt="Christmas Setup"
                    width={200}
                    height={100}
                    className="card-img"
                  />
                  <p>We completed your Christmas light installation! ✨🎄</p>
                </div>

                <div className="card card-two">
                  <div className="card-user-info">
                    <div className="card-avatar"></div>
                    <h2>Mike</h2>
                  </div>
                  <Image
                    src="/images/wedding-lighting.jpeg"
                    alt="Wedding Setup"
                    width={200}
                    height={100}
                    className="card-img"
                  />
                  <p>Your wedding lighting setup was magical! 💫</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <style jsx>{`
        /* Base Styles */
        .dashboard-main {
          display: grid;
          grid-template-columns: 13% 87%;
          width: 100%;
          margin: 40px;
          background: rgb(254, 254, 254);
          box-shadow: 0 0.5px 0 1px rgba(255, 255, 255, 0.23) inset,
            0 1px 0 0 rgba(255, 255, 255, 0.66) inset, 0 4px 16px rgba(0, 0, 0, 0.12);
          border-radius: 15px;
          z-index: 10;
        }

        /* Main Menu */
        .main-menu {
          overflow: hidden;
          background: rgb(73, 57, 113);
          padding-top: 10px;
          border-radius: 15px 0 0 15px;
          font-family: "Roboto", sans-serif;
        }

        .dashboard-title {
          display: block;
          font-size: 1.5rem;
          font-weight: 500;
          text-align: center;
          margin: 20px 0 30px;
          color: #fff;
          font-family: "Nunito", sans-serif;
        }

        .logo {
          display: none;
          width: 30px;
          margin: 20px auto;
        }

        .nav-item {
          position: relative;
          display: block;
        }

        .nav-item a {
          position: relative;
          display: flex;
          flex-direction: row;
          align-items: center;
          justify-content: center;
          color: #fff;
          font-size: 1rem;
          padding: 15px 0;
          margin-left: 10px;
          border-top-left-radius: 20px;
          border-bottom-left-radius: 20px;
          text-decoration: none;
        }

        .nav-item b:nth-child(1) {
          position: absolute;
          top: -15px;
          height: 15px;
          width: 100%;
          background: #fff;
          display: none;
        }

        .nav-item b:nth-child(1)::before {
          content: "";
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          border-bottom-right-radius: 20px;
          background: rgb(73, 57, 113);
        }

        .nav-item b:nth-child(2) {
          position: absolute;
          bottom: -15px;
          height: 15px;
          width: 100%;
          background: #fff;
          display: none;
        }

        .nav-item b:nth-child(2)::before {
          content: "";
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          border-top-right-radius: 20px;
          background: rgb(73, 57, 113);
        }

        .nav-item.active b:nth-child(1),
        .nav-item.active b:nth-child(2) {
          display: block;
        }

        .nav-item.active a {
          text-decoration: none;
          color: #000;
          background: rgb(254, 254, 254);
        }

        .nav-icon {
          width: 60px;
          height: 20px;
          font-size: 20px;
          text-align: center;
        }

        .nav-text {
          display: block;
          width: 120px;
          height: 20px;
        }

        /* Content */
        .content {
          display: grid;
          grid-template-columns: 75% 25%;
        }

        /* Left Content */
        .left-content {
          display: grid;
          grid-template-rows: 50% 50%;
          background: #f6f7fb;
          margin: 15px;
          padding: 20px;
          border-radius: 15px;
        }

        /* Activities */
        .activities h1 {
          margin: 0 0 20px;
          font-size: 1.4rem;
          font-weight: 700;
        }

        .activity-container {
          display: grid;
          grid-template-columns: repeat(5, 1fr);
          grid-template-rows: repeat(2, 150px);
          column-gap: 10px;
        }

        .img-one {
          grid-area: 1 / 1 / 2 / 2;
        }

        .img-two {
          grid-area: 2 / 1 / 3 / 2;
        }

        .img-three {
          display: block;
          grid-area: 1 / 2 / 3 / 4;
        }

        .img-four {
          grid-area: 1 / 4 / 2 / 5;
        }

        .img-five {
          grid-area: 1 / 5 / 2 / 6;
        }

        .img-six {
          display: block;
          grid-area: 2 / 4 / 3 / 6;
        }

        .image-container {
          position: relative;
          margin-bottom: 10px;
          box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 3px;
          border-radius: 10px;
        }

        .overlay {
          position: absolute;
          display: flex;
          flex-direction: column;
          align-items: flex-end;
          justify-content: flex-end;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: linear-gradient(
            180deg,
            transparent,
            transparent,
            rgba(3, 3, 185, 0.5)
          );
          border-radius: 10px;
          transition: all 0.6s linear;
        }

        .image-container:hover .overlay {
          opacity: 0;
        }

        .overlay h3 {
          margin-bottom: 8px;
          margin-right: 10px;
          color: #fff;
        }

        /* Left Bottom */
        .left-bottom {
          display: grid;
          grid-template-columns: 55% 40%;
          gap: 40px;
        }

        /* Weekly Schedule */
        .weekly-schedule {
          display: flex;
          flex-direction: column;
        }

        .weekly-schedule h1 {
          margin-top: 20px;
          font-size: 1.3rem;
          font-weight: 700;
        }

        .calendar {
          margin-top: 10px;
        }

        .day-and-activity {
          display: grid;
          grid-template-columns: 15% 60% 25%;
          align-items: center;
          border-radius: 14px;
          margin-bottom: 5px;
          color: #484d53;
          box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 3px;
        }

        .activity-one {
          background-color: rgb(124, 136, 224, 0.5);
          background-image: linear-gradient(
            240deg,
            rgb(124, 136, 224) 0%,
            #c3f4fc 100%
          );
        }

        .activity-two {
          background-color: #aee2a4a1;
          background-image: linear-gradient(240deg, #e5a243ab 0%, #f7f7aa 90%);
        }

        .day {
          display: flex;
          flex-direction: column;
          align-items: center;
          transform: translateY(-10px);
        }

        .day h1 {
          font-size: 1.6rem;
          font-weight: 600;
        }

        .day p {
          text-transform: uppercase;
          font-size: 0.9rem;
          font-weight: 600;
          transform: translateY(-3px);
        }

        .activity {
          border-left: 3px solid #484d53;
        }

        .participants {
          display: flex;
          margin-left: 20px;
        }

        .participant-avatar {
          width: 28px;
          height: 28px;
          border-radius: 50%;
          background: #ccc;
          z-index: calc(2 * var(--i));
          margin-left: -10px;
          box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 3px;
        }

        .activity h2 {
          margin-left: 10px;
          font-size: 1.25rem;
          font-weight: 600;
          border-radius: 12px;
        }

        .btn {
          display: block;
          padding: 8px 24px;
          margin: 10px auto;
          font-size: 1.1rem;
          font-weight: 500;
          outline: none;
          text-decoration: none;
          color: #484b57;
          background: rgba(255, 255, 255, 0.9);
          box-shadow: 0 6px 30px rgba(0, 0, 0, 0.1);
          border: 1px solid rgba(255, 255, 255, 0.3);
          border-radius: 25px;
          cursor: pointer;
        }

        .btn:hover {
          transition-timing-function: cubic-bezier(0.6, 4, 0.3, 0.8);
          animation: gelatine 0.5s 1;
        }

        @keyframes gelatine {
          0%, 100% { transform: scale(1, 1); }
          25% { transform: scale(0.9, 1.1); }
          50% { transform: scale(1.1, 0.9); }
          75% { transform: scale(0.95, 1.05); }
        }

        /* Personal Bests */
        .personal-bests {
          display: block;
        }

        .personal-bests h1 {
          margin-top: 20px;
          font-size: 1.3rem;
          font-weight: 700;
        }

        .personal-bests-container {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          grid-template-rows: repeat(2, 150px);
          gap: 10px;
          margin-top: 10px;
        }

        .best-item {
          display: flex;
          gap: 20px;
          width: 100%;
          height: 100%;
          border-radius: 15px;
          box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 3px;
        }

        .box-one {
          flex-direction: row;
          align-items: center;
          justify-content: center;
          grid-area: 1 / 1 / 2 / 3;
          background-color: rgba(185, 159, 237, 0.6);
          padding: 15px;
          font-size: 1rem;
          font-weight: 700;
        }

        .box-two {
          flex-direction: column;
          align-items: center;
          justify-content: flex-start;
          font-size: 0.9rem;
          font-weight: 700;
          padding: 10px;
          grid-area: 2 / 1 / 3 / 2;
          background-color: rgba(238, 184, 114, 0.6);
        }

        .box-three {
          flex-direction: column;
          align-items: center;
          justify-content: flex-start;
          font-size: 0.9rem;
          font-weight: 700;
          padding: 10px;
          grid-area: 2 / 2 / 3 / 3;
          background-color: rgba(184, 224, 192, 0.6);
        }

        /* Right Content */
        .right-content {
          display: grid;
          grid-template-rows: 5% 20% 75%;
          background: #f6f7fb;
          margin: 15px 15px 15px 0;
          padding: 10px 0;
          border-radius: 15px;
        }

        /* User Info */
        .user-info {
          display: grid;
          grid-template-columns: 30% 55% 15%;
          align-items: center;
          padding: 0 10px;
        }

        .icon-container {
          display: flex;
          gap: 15px;
        }

        .user-info h4 {
          margin-left: 40px;
        }

        .user-avatar {
          width: 40px;
          height: 40px;
          border-radius: 50%;
          background: #ccc;
        }

        /* Active Calories */
        .active-calories {
          display: flex;
          flex-direction: column;
          align-items: center;
          background-color: rgb(214, 227, 248);
          padding: 0 10px;
          margin: 15px 10px 0;
          border-radius: 15px;
          box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 3px;
        }

        .active-calories h1 {
          margin-top: 10px;
          font-size: 1.2rem;
          align-self: flex-start;
        }

        .active-calories-container {
          display: flex;
          flex-direction: row;
          align-items: center;
          gap: 10px;
        }

        .calories-content p {
          font-size: 1rem;
        }

        .calories-content p span {
          font-weight: 700;
        }

        .box {
          display: flex;
          justify-content: center;
          align-items: center;
          flex-direction: column;
          position: relative;
          padding: 10px 0;
        }

        .box h2 {
          position: relative;
          text-align: center;
          font-size: 1.25rem;
          color: rgb(91, 95, 111);
          font-weight: 600;
        }

        .box h2 small {
          font-size: 0.8rem;
          font-weight: 600;
        }

        .circle {
          position: relative;
          width: 80px;
          height: 80px;
          background: conic-gradient(
            from 0deg,
            #590b94 0%,
            #590b94 0% var(--i),
            #b3b2b2 var(--i),
            #b3b2b2 100%
          );
          border-radius: 50%;
          display: flex;
          justify-content: center;
          align-items: center;
        }

        .circle::before {
          content: "";
          position: absolute;
          inset: 10px;
          background-color: rgb(214, 227, 248);
          border-radius: 50%;
        }

        /* Mobile Personal Bests */
        .mobile-personal-bests {
          display: none;
        }

        /* Friends Activity */
        .friends-activity {
          display: flex;
          flex-direction: column;
        }

        .friends-activity h1 {
          font-size: 1.2rem;
          font-weight: 700;
          margin: 15px 0 10px 15px;
        }

        .card-container {
          display: flex;
          flex-direction: column;
          gap: 10px;
        }

        .card {
          background-color: #fff;
          margin: 0 10px;
          padding: 5px 7px;
          border-radius: 15px;
          box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 3px;
        }

        .card-two {
          display: block;
        }

        .card-user-info {
          display: flex;
          flex-direction: row;
          align-items: center;
          padding-bottom: 5px;
        }

        .card-avatar {
          width: 25px;
          height: 25px;
          border-radius: 50%;
          background: #ccc;
        }

        .card-user-info h2 {
          font-size: 1rem;
          font-weight: 700;
          margin-left: 5px;
        }

        .card-img {
          display: block;
          width: 100%;
          aspect-ratio: 7/4;
          margin-bottom: 10px;
          object-fit: cover;
          border-radius: 10px;
          object-position: 50% 30%;
        }

        .card p {
          font-size: 0.9rem;
          padding: 0 5px 5px;
        }

        /* Responsive Design */
        @media (max-width: 1500px) {
          .dashboard-main {
            grid-template-columns: 6% 94%;
          }

          .dashboard-title {
            display: none;
          }

          .logo {
            display: block;
          }

          .nav-text {
            display: none;
          }

          .content {
            grid-template-columns: 70% 30%;
          }
        }

        @media (max-width: 1310px) {
          .dashboard-main {
            grid-template-columns: 8% 92%;
            margin: 30px;
          }

          .content {
            grid-template-columns: 65% 35%;
          }

          .day-and-activity {
            margin-bottom: 10px;
          }

          .btn {
            padding: 8px 16px;
            margin: 10px 0;
            margin-right: 10px;
            font-size: 1rem;
          }

          .personal-bests-container {
            grid-template-rows: repeat(3, 98px);
            gap: 15px;
          }

          .box-one {
            flex-direction: row;
            justify-content: space-between;
            grid-area: 1 / 1 / 2 / 3;
            padding: 10px;
            font-size: 0.9rem;
          }

          .box-two {
            flex-direction: row;
            justify-content: space-between;
            grid-area: 2 / 1 / 3 / 3;
          }

          .box-three {
            flex-direction: row;
            justify-content: space-between;
            grid-area: 3 / 1 / 4 / 3;
          }

          .right-content {
            grid-template-rows: 4% 20% 76%;
            margin: 15px 15px 15px 0;
          }
        }

        @media (max-width: 1150px) {
          .content {
            grid-template-columns: 60% 40%;
          }

          .left-content {
            grid-template-rows: 50% 50%;
            margin: 15px;
            padding: 20px;
          }

          .btn {
            padding: 8px 8px;
            font-size: 0.9rem;
          }

          .personal-bests-container {
            grid-template-rows: repeat(3, 70px);
            gap: 10px;
          }

          .activity-container {
            grid-template-columns: repeat(3, 1fr);
            grid-template-rows: repeat(2, 150px);
          }

          .img-one {
            grid-area: 1 / 1 / 2 / 2;
          }

          .img-two {
            grid-area: 2 / 1 / 3 / 2;
          }

          .img-three {
            display: none;
          }

          .img-four {
            grid-area: 1 / 2 / 2 / 3;
          }

          .img-five {
            grid-area: 1 / 3 / 2 / 4;
          }

          .img-six {
            grid-area: 2 / 2 / 3 / 4;
          }

          .left-bottom {
            grid-template-columns: 100%;
            gap: 0;
          }

          .right-content {
            grid-template-rows: 4% 19% 36% 41%;
          }

          .personal-bests {
            display: none;
          }

          .mobile-personal-bests {
            display: block;
            margin: 0 10px;
          }

          .mobile-personal-bests h1 {
            margin-top: 20px;
            font-size: 1.2rem;
          }

          .card-two {
            display: none;
          }

          .card-img {
            aspect-ratio: 16/9;
          }
        }

        @media (max-width: 1050px) {
          .right-content {
            grid-template-rows: 4% 19% 37% 40%;
          }
        }

        @media (max-width: 910px) {
          .dashboard-main {
            grid-template-columns: 10% 90%;
            margin: 20px;
          }

          .content {
            grid-template-columns: 55% 45%;
          }

          .left-content {
            grid-template-rows: 50% 50%;
            padding: 30px 20px 20px;
          }

          .activity-container {
            grid-template-columns: repeat(2, 1fr);
            grid-template-rows: repeat(2, 150px);
          }

          .img-one {
            grid-area: 1 / 1 / 2 / 2;
          }

          .img-two {
            grid-area: 2 / 1 / 3 / 2;
          }

          .img-three {
            display: none;
          }

          .img-four {
            grid-area: 1 / 2 / 2 / 3;
          }

          .img-five {
            grid-area: 2 / 2 / 3 / 3;
          }

          .img-six {
            display: none;
          }
        }

        @media (max-width: 800px) {
          .content {
            grid-template-columns: 52% 48%;
          }
        }

        @media (max-width: 700px) {
          .dashboard-main {
            grid-template-columns: 15% 85%;
          }

          .content {
            grid-template-columns: 100%;
            grid-template-rows: 45% 55%;
            grid-template-areas:
              "rightContent"
              "leftContent";
          }

          .left-content {
            grid-area: leftContent;
            grid-template-rows: 45% 55%;
            padding: 10px 20px 10px;
          }

          .right-content {
            grid-area: rightContent;
            grid-template-rows: 5% 40% 50%;
            margin: 15px 15px 0 15px;
            padding: 10px 0 0;
            gap: 15px;
          }

          .activities,
          .weekly-schedule {
            margin-top: 10px;
          }

          .active-calories-container {
            display: flex;
            flex-direction: column;
            align-items: center;
            gap: 10px;
          }

          .friends-activity {
            display: none;
          }
        }
      `}</style>
    </div>
  )
}
