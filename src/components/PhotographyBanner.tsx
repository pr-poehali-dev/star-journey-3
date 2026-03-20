import type React from "react"
import { useState, useEffect } from "react"

const PhotographyBanner: React.FC = () => {
  const [currentText, setCurrentText] = useState("")
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isDeleting, setIsDeleting] = useState(false)

  const texts = ["СИБИРЬ.", "ВОСТОК."]

  useEffect(() => {
    const typeSpeed = isDeleting ? 40 : 100
    const currentFullText = texts[currentIndex]

    const timer = setTimeout(() => {
      if (!isDeleting) {
        if (currentText.length < currentFullText.length) {
          setCurrentText(currentFullText.substring(0, currentText.length + 1))
        } else {
          setTimeout(() => setIsDeleting(true), 1500)
        }
      } else {
        if (currentText.length > 0) {
          setCurrentText(currentText.substring(0, currentText.length - 1))
        } else {
          setIsDeleting(false)
          setCurrentIndex((prevIndex) => (prevIndex + 1) % texts.length)
        }
      }
    }, typeSpeed)

    return () => clearTimeout(timer)
  }, [currentText, currentIndex, isDeleting, texts])

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;700&family=Inter:wght@400&display=swap');

        .photography-banner,
        .photography-banner * {
          box-sizing: border-box;
        }

        .photography-banner {
          margin: 0;
          background-color: #002b36;
          background-image: url("https://www.yudiz.com/codepen/photography-banner/frame.png");
          background-size: cover;
          background-repeat: no-repeat;
          overflow-x: hidden;
          min-height: 100vh;
          width: 100%;
        }

        .photography-banner *::selection {
          background-color: rgba(203, 75, 22, 0.3);
          color: #ffffff;
        }

        .info-section {
          height: 100vh;
          min-height: 780px;
          padding: 0 0 0 30px;
          display: flex;
          align-items: center;
          justify-content: flex-end;
          position: relative;
          z-index: 1;
          user-select: none;
          overflow: hidden;
        }

        .info-section::before {
          content: "";
          border-radius: 197.5px 0px;
          opacity: 0.4;
          background: #cb4b16;
          filter: blur(162px);
          height: 35%;
          width: 55%;
          position: absolute;
          top: -40%;
          left: -66%;
          transform: translate(50%, 50%);
          z-index: -1;
        }

        .left-part {
          padding: 20px 0 0;
          overflow: hidden;
        }

        .left-part h1 {
          margin: 0;
          color: #fff;
          font-family: "Montserrat", sans-serif;
          font-weight: 700;
          font-size: clamp(48px, 12vw, 160px);
          line-height: 0.75;
          font-style: normal;
          text-transform: uppercase;
        }

        .left-part h1 .text {
          color: #cb4b16;
          display: block;
          height: clamp(100px, 15vw, 120px);
        }

        .left-part h1 .d-flex {
          display: flex;
          align-items: center;
        }

        .left-part h1 .char {
          transform: translateY(0);
          transition: transform 0.5s;
          animation: slideUp 0.3s ease-out forwards;
        }

        .typed-cursor {
          display: none !important;
        }

        @keyframes slideUp {
          from {
            transform: translateY(-515px);
          }
          to {
            transform: translateY(0);
          }
        }

        .left-part p {
          width: 72%;
          margin: 20px 0 0;
          color: #fff;
          font-size: 16px;
          font-style: normal;
          font-weight: normal;
          line-height: 2;
          font-family: "Montserrat";
          opacity: 0.8;
        }

        .book-link {
          margin: 40px 0 0;
          padding: 0;
          border: 0;
          font-size: 56px;
          line-height: 1;
          color: #f1f1f1;
          letter-spacing: 0.25px;
          text-transform: uppercase;
          font-family: "Montserrat";
          font-weight: 300;
          font-style: normal;
          display: inline-flex;
          align-items: center;
          gap: 28px;
          position: relative;
          text-decoration: none;
          cursor: pointer;
        }

        .book-link .linktext {
          position: relative;
          overflow: hidden;
          display: inline-block;
        }

        .book-link .linktext::before {
          position: absolute;
          content: "";
          left: 0;
          bottom: 6px;
          width: 100%;
          height: 3px;
          background-color: #ffffff;
          transform: scaleX(1);
          transition: transform 250ms ease-in-out;
          transform-origin: 0 0;
        }

        .book-link:hover .linktext:before {
          transform: scaleX(0);
          transform-origin: 100% 100%;
        }

        .book-link .arrow {
          height: 36px;
          width: 36px;
          top: -5px;
          display: inline-block;
          position: relative;
          overflow: hidden;
        }

        .book-link .arrow::before,
        .book-link .arrow::after {
          position: absolute;
          content: "";
          background-color: #cb4b16;
          transition: all ease-in-out 0.35s;
          transform-origin: 0 0;
          border-radius: 30px;
        }

        .book-link .arrow::before {
          height: 2px;
          width: 100%;
          top: 0;
          right: 0;
        }

        .book-link .arrow::after {
          width: 2px;
          height: 100%;
          top: 0;
          right: 0;
        }

        .book-link:hover .arrow::before {
          width: 65%;
        }

        .book-link:hover .arrow::after {
          height: 65%;
        }

        .book-link .arrow span {
          background-color: #cb4b16;
          height: 2px;
          width: 100%;
          display: inline-block;
          transform: rotate(-45deg) translate(-3px, -1px);
          transform-origin: right top;
          border-radius: 30px;
          position: relative;
          transition: all ease-in-out 0.35s;
          position: absolute;
          top: 0;
          left: 0;
        }

        .book-link .arrow span::before {
          background-color: #cb4b16;
          content: "";
          height: 100%;
          width: 15px;
          left: -15px;
          top: 0;
          position: absolute;
        }

        .right-part {
          background-color: transparent;
          height: 588px;
          width: 588px;
          margin: 0 0 0 auto;
          margin-right: -14px;
          display: block;
          position: relative;
          z-index: 1;
          flex-shrink: 0;
        }

        .right-part::before {
          content: "";
          border-radius: 197.5px 0px;
          opacity: 0.4;
          background: #cb4b16;
          filter: blur(112px);
          height: 35%;
          width: 55%;
          position: absolute;
          top: 50%;
          right: 33%;
          transform: translate(50%, -50%);
          z-index: -1;
        }

        .particles-container {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          overflow: hidden;
          z-index: 0;
        }

        .particle {
          position: absolute;
          background: rgba(203, 75, 22, 0.6);
          border-radius: 50%;
          pointer-events: none;
          animation: float linear infinite;
        }

        .particle:nth-child(odd) {
          background: rgba(38, 139, 210, 0.4);
        }

        .particle:nth-child(3n) {
          background: rgba(255, 255, 255, 0.2);
        }

        @keyframes float {
          0% {
            transform: translateX(-100px) translateY(0px) rotate(0deg);
            opacity: 0;
          }
          10% {
            opacity: 1;
          }
          90% {
            opacity: 1;
          }
          100% {
            transform: translateX(calc(100vw + 100px)) translateY(-100px) rotate(360deg);
            opacity: 0;
          }
        }

        .bg-line {
          position: absolute;
          top: 0;
          right: 0;
          width: 50%;
          height: 85px;
          z-index: -1;
          overflow: hidden;
          display: flex;
          display: -webkit-flex;
          white-space: nowrap;
        }

        .bg-line img {
          position: relative;
          flex-shrink: 0;
          -webkit-flex-shrink: 0;
          animation: 26s linear infinite;
        }

        .bg-line img:nth-child(1) {
          animation-name: first-text;
        }

        .bg-line img:nth-child(2) {
          animation-name: second-text;
        }

        @keyframes first-text {
          50% {
            transform: translateX(-100%);
            opacity: 1;
          }
          50.05% {
            opacity: 0;
          }
          50.1% {
            transform: translateX(100%);
            opacity: 1;
          }
          100% {
            transform: translateX(0%);
          }
        }

        @keyframes second-text {
          50% {
            transform: translateX(-100%);
          }
          100% {
            transform: translateX(-200%);
          }
          0% {
            transform: translateX(0%);
          }
        }

        .bg-dash-circle {
          position: absolute;
          bottom: -35px;
          right: -13px;
          z-index: -1;
          width: 180px;
          aspect-ratio: 1/1;
        }

        .bg-dash-circle img {
          height: 100%;
          width: 100%;
          object-fit: cover;
          object-position: center center;
          animation: circle-rotate 18s linear infinite;
        }

        @keyframes circle-rotate {
          0% {
            transform: rotate(0);
          }
          100% {
            transform: rotate(360deg);
          }
        }

        .hero-image {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          width: 80%;
          height: auto;
          z-index: 2;
          border-radius: 12px;
          opacity: 0.9;
        }

        @media screen and (min-width: 1500px) {
          .info-section {
            padding-left: 120px;
          }
        }

        @media screen and (min-width: 1400px) {
          .info-section {
            padding-left: 100px;
          }
        }

        @media screen and (max-width: 1199px) {
          .bg-line {
            height: 68px;
          }
          .right-part {
            height: 400px;
            width: 400px;
          }
          .right-part .d-flex {
            gap: 20px;
          }
          .bg-dash-circle {
            width: 130px;
          }
        }

        @media screen and (max-width: 767px) {
          .photography-banner {
            overflow-x: hidden;
          }

          .info-section {
            display: block;
            padding: 0;
            overflow: visible;
            min-height: auto;
            height: auto;
          }

          .bg-line {
            height: 52px;
          }

          .left-part {
            padding: 40px 16px 60px;
            overflow: visible;
          }

          .right-part {
            height: 334px;
            width: 334px;
            margin: 0 auto;
            margin-right: auto;
          }

          .left-part h1 .text {
            height: 88px;
          }

          .left-part p {
            font-size: 12px;
            width: 96%;
          }

          .bg-dash-circle {
            width: 80px;
          }
        }

        /* ========== ROUTE SECTION ========== */
        .route-section {
          padding: 100px 30px;
          background-color: #073642;
          position: relative;
          overflow: hidden;
        }

        .route-section::before {
          content: "";
          border-radius: 197.5px 0px;
          opacity: 0.3;
          background: #cb4b16;
          filter: blur(140px);
          height: 40%;
          width: 40%;
          position: absolute;
          top: 20%;
          right: -20%;
          z-index: 0;
        }

        .route-container {
          max-width: 1400px;
          margin: 0 auto;
          position: relative;
          z-index: 1;
        }

        .section-label {
          color: #cb4b16;
          font-family: "Montserrat", sans-serif;
          font-size: 13px;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 4px;
          margin: 0 0 20px;
        }

        .route-title {
          color: #fff;
          font-family: "Montserrat", sans-serif;
          font-weight: 700;
          font-size: clamp(40px, 6vw, 90px);
          line-height: 0.9;
          margin: 0 0 50px;
          text-transform: uppercase;
        }

        .route-title .highlight {
          color: #cb4b16;
        }

        .route-map-container {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 60px;
          align-items: start;
        }

        .map-wrapper {
          position: relative;
          background: rgba(0,0,0,0.3);
          border: 1px solid rgba(203, 75, 22, 0.3);
          border-radius: 16px;
          overflow: hidden;
          aspect-ratio: 4/3;
        }

        .map-wrapper img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          opacity: 0.85;
        }

        .map-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(to bottom, transparent 60%, rgba(0,43,54,0.8) 100%);
        }

        .map-badge {
          position: absolute;
          bottom: 20px;
          left: 20px;
          background: rgba(203, 75, 22, 0.9);
          color: #fff;
          font-family: "Montserrat", sans-serif;
          font-size: 12px;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 2px;
          padding: 8px 16px;
          border-radius: 30px;
        }

        .route-timeline {
          display: flex;
          flex-direction: column;
          gap: 0;
        }

        .timeline-item {
          display: flex;
          gap: 24px;
          position: relative;
        }

        .timeline-item:not(:last-child)::after {
          content: "";
          position: absolute;
          left: 19px;
          top: 40px;
          width: 2px;
          height: calc(100% - 10px);
          background: rgba(203, 75, 22, 0.3);
        }

        .timeline-dot {
          width: 40px;
          height: 40px;
          background: #cb4b16;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-family: "Montserrat", sans-serif;
          font-weight: 700;
          font-size: 13px;
          color: #fff;
          flex-shrink: 0;
          margin-top: 4px;
        }

        .timeline-content {
          padding-bottom: 36px;
        }

        .timeline-year {
          color: #cb4b16;
          font-family: "Montserrat", sans-serif;
          font-size: 12px;
          font-weight: 700;
          letter-spacing: 2px;
          text-transform: uppercase;
          margin: 0 0 6px;
        }

        .timeline-heading {
          color: #fff;
          font-family: "Montserrat", sans-serif;
          font-size: 18px;
          font-weight: 700;
          text-transform: uppercase;
          margin: 0 0 8px;
        }

        .timeline-text {
          color: #93a1a1;
          font-family: "Inter", sans-serif;
          font-size: 14px;
          line-height: 1.7;
          margin: 0;
        }

        /* ========== CREW SECTION ========== */
        .features-section {
          padding: 100px 30px;
          background-color: #002b36;
          position: relative;
          overflow: hidden;
        }

        .features-section::before {
          content: "";
          border-radius: 197.5px 0px;
          opacity: 0.3;
          background: #cb4b16;
          filter: blur(140px);
          height: 40%;
          width: 40%;
          position: absolute;
          top: 20%;
          right: -20%;
          z-index: -1;
        }

        .features-container {
          max-width: 1400px;
          margin: 0 auto;
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
          gap: 60px;
          align-items: center;
        }

        .features-content h2 {
          color: #fff;
          font-family: "Montserrat", sans-serif;
          font-weight: 700;
          font-size: clamp(60px, 8vw, 120px);
          line-height: 0.9;
          margin: 0 0 30px;
          text-transform: uppercase;
        }

        .features-content h2 .highlight {
          color: #cb4b16;
        }

        .features-list {
          list-style: none;
          padding: 0;
          margin: 0;
        }

        .feature-item {
          padding: 25px 0;
          border-bottom: 1px solid #333;
          display: flex;
          align-items: center;
          gap: 20px;
        }

        .feature-icon {
          width: 50px;
          height: 50px;
          background: #cb4b16;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 20px;
          font-weight: bold;
          color: #fff;
          flex-shrink: 0;
        }

        .feature-text h3 {
          color: #fff;
          font-family: "Montserrat";
          font-size: 18px;
          margin: 0 0 8px;
          text-transform: uppercase;
        }

        .feature-text p {
          color: #93a1a1;
          font-family: "Inter", sans-serif;
          font-size: 14px;
          margin: 0;
          line-height: 1.6;
        }

        /* ========== PEOPLE SECTION ========== */
        .testimonials-section {
          padding: 100px 30px;
          background-color: #073642;
          position: relative;
          overflow: hidden;
        }

        .testimonials-section::before {
          content: "";
          border-radius: 197.5px 0px;
          opacity: 0.4;
          background: #cb4b16;
          filter: blur(120px);
          height: 50%;
          width: 30%;
          position: absolute;
          top: 50%;
          left: -15%;
          transform: translateY(-50%);
          z-index: -1;
        }

        .testimonials-container {
          max-width: 1200px;
          margin: 0 auto;
          text-align: center;
        }

        .testimonials-title {
          color: #fff;
          font-family: "Montserrat", sans-serif;
          font-weight: 700;
          font-size: clamp(60px, 8vw, 100px);
          line-height: 0.9;
          margin: 0 0 80px;
          text-transform: uppercase;
        }

        .testimonials-marquee {
          display: flex;
          animation: scroll 30s linear infinite;
          gap: 40px;
          width: max-content;
        }

        .testimonials-marquee:hover {
          animation-play-state: paused;
        }

        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        .testimonial-card {
          background: rgba(255, 255, 255, 0.05);
          border: 1px solid #333;
          border-radius: 20px;
          padding: 40px 30px;
          position: relative;
          backdrop-filter: blur(10px);
          width: 380px;
          text-align: left;
          flex-shrink: 0;
        }

        .testimonial-quote {
          color: #fff;
          font-family: "Inter", sans-serif;
          font-weight: 400;
          font-size: 16px;
          line-height: 1.8;
          margin: 0 0 30px;
          font-style: italic;
        }

        .testimonial-author {
          display: flex;
          font-family: "Inter", sans-serif;
          align-items: center;
          gap: 15px;
        }

        .author-avatar {
          width: 50px;
          height: 50px;
          border-radius: 50%;
          background: #cb4b16;
          display: flex;
          align-items: center;
          justify-content: center;
          font-weight: bold;
          color: #fff;
          font-size: 18px;
        }

        .author-info h4 {
          color: #cb4b16;
          font-family: "Inter", sans-serif;
          font-size: 14px;
          margin: 0;
          text-transform: uppercase;
        }

        .author-info p {
          color: #aaa;
          font-family: "Inter", sans-serif;
          font-size: 12px;
          margin: 5px 0 0;
        }

        /* ========== CTA SECTION ========== */
        .cta-section {
          padding: 120px 30px;
          background-color: #002b36;
          position: relative;
          overflow: hidden;
        }

        .cta-section::before {
          content: "";
          border-radius: 197.5px 0px;
          opacity: 0.6;
          background: #cb4b16;
          filter: blur(180px);
          height: 60%;
          width: 80%;
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          z-index: -1;
        }

        .cta-container {
          max-width: 800px;
          margin: 0 auto;
          text-align: center;
        }

        .cta-title {
          color: #fff;
          font-family: "Montserrat", sans-serif;
          font-weight: 700;
          font-size: clamp(60px, 10vw, 140px);
          line-height: 0.85;
          margin: 0 0 30px;
          text-transform: uppercase;
        }

        .cta-subtitle {
          color: #93a1a1;
          font-family: "Montserrat";
          font-size: 20px;
          line-height: 1.7;
          margin: 0 0 50px;
          max-width: 600px;
          margin-left: auto;
          margin-right: auto;
        }

        .cta-buttons {
          display: flex;
          gap: 30px;
          justify-content: center;
          flex-wrap: wrap;
        }

        .cta-button {
          padding: 18px 40px;
          background: #cb4b16;
          color: #fff;
          text-decoration: none;
          font-family: "Montserrat";
          font-size: 16px;
          font-weight: bold;
          text-transform: uppercase;
          border-radius: 50px;
          transition: all 0.3s ease;
          border: 2px solid #cb4b16;
        }

        .cta-button:hover {
          background: transparent;
          color: #cb4b16;
        }

        .cta-button.secondary {
          background: transparent;
          color: #fff;
          border: 2px solid rgba(255,255,255,0.4);
        }

        .cta-button.secondary:hover {
          background: transparent;
          color: #cb4b16;
          border: 2px solid #cb4b16;
        }

        @media screen and (max-width: 1199px) {
          .route-section,
          .features-section,
          .testimonials-section,
          .cta-section {
            padding: 80px 20px;
          }
          .route-map-container {
            grid-template-columns: 1fr;
            gap: 40px;
          }
          .features-container {
            gap: 40px;
          }
          .testimonials-marquee {
            gap: 30px;
          }
          .cta-buttons {
            gap: 20px;
          }
        }

        @media screen and (max-width: 767px) {
          .route-section,
          .features-section,
          .testimonials-section,
          .cta-section {
            padding: 60px 16px;
          }
          .features-container {
            grid-template-columns: 1fr;
            gap: 30px;
          }
          .testimonials-marquee {
            gap: 25px;
          }
          .testimonial-card {
            padding: 30px 20px;
            width: 300px;
          }
          .cta-buttons {
            flex-direction: column;
            align-items: center;
            gap: 15px;
          }
          .cta-button {
            width: 100%;
            max-width: 300px;
          }
        }
      `}</style>

      <div className="photography-banner">
        <main>
          {/* HERO */}
          <section className="info-section">
            <div className="left-part">
              <h1>
                <span className="d-flex">
                  {["П", "О", "Х", "О", "Д", " ", "В"].map((char, index) => (
                    <span key={index} className="char tracking-tighter" style={{ animationDelay: `${index * 0.08}s` }}>
                      {char === " " ? "\u00A0" : char}
                    </span>
                  ))}
                </span>
                <span className="text tracking-tighter">{currentText}</span>
              </h1>
              <p className="tracking-widest">
                Верхнеудинско-Охотский отряд · 1735–1737 · Великая Северная экспедиция
              </p>
              <a href="#route" className="book-link">
                <span className="linktext tracking-tighter text-3xl">Изучить маршрут</span>
                <span className="arrow">
                  <span></span>
                </span>
              </a>
            </div>
            <div className="right-part">
              <div className="particles-container">
                {Array.from({ length: 20 }, (_, i) => (
                  <div
                    key={i}
                    className="particle"
                    style={{
                      width: `${Math.random() * 8 + 4}px`,
                      height: `${Math.random() * 8 + 4}px`,
                      left: `${Math.random() * 100}%`,
                      top: `${Math.random() * 100}%`,
                      animationDuration: `${Math.random() * 20 + 15}s`,
                      animationDelay: `${Math.random() * 10}s`,
                    }}
                  />
                ))}
              </div>
              <div className="bg-line">
                <img
                  src="https://www.yudiz.com/codepen/photography-banner/wave.svg"
                  alt="Line"
                  style={{ filter: "hue-rotate(30deg) saturate(1.5)" }}
                />
                <img
                  src="https://www.yudiz.com/codepen/photography-banner/wave.svg"
                  alt="Line"
                  style={{ filter: "hue-rotate(30deg) saturate(1.5)" }}
                />
              </div>
              <img
                src="https://cdn.poehali.dev/projects/26be4ca2-2a20-4077-a402-cfa1518a4c2a/files/4b38783a-81a0-45fa-822e-4ddca20a23c2.jpg"
                alt="Карта экспедиции"
                className="hero-image"
              />
              <div className="bg-dash-circle">
                <img
                  src="https://www.yudiz.com/codepen/photography-banner/dash-circle.svg"
                  alt="dash-circle"
                  style={{ filter: "hue-rotate(30deg) saturate(1.5)" }}
                />
              </div>
            </div>
          </section>

          {/* ROUTE */}
          <section className="route-section" id="route">
            <div className="route-container">
              <p className="section-label">Маршрут экспедиции</p>
              <h2 className="route-title">
                От Верхнеудинска<br />
                <span className="highlight">до Охотска</span>
              </h2>
              <div className="route-map-container">
                <div>
                  <div className="map-wrapper">
                    <img
                      src="https://cdn.poehali.dev/projects/26be4ca2-2a20-4077-a402-cfa1518a4c2a/files/4b38783a-81a0-45fa-822e-4ddca20a23c2.jpg"
                      alt="Карта маршрута Верхнеудинско-Охотского отряда"
                    />
                    <div className="map-overlay" />
                    <span className="map-badge">≈ 2800 км пути</span>
                  </div>
                </div>
                <div className="route-timeline">
                  <div className="timeline-item">
                    <div className="timeline-dot">1</div>
                    <div className="timeline-content">
                      <p className="timeline-year">1735, весна</p>
                      <h3 className="timeline-heading">Верхнеудинск</h3>
                      <p className="timeline-text">
                        Отряд формируется в Верхнеудинске (ныне Улан-Удэ) — ключевом пункте на Баргузинском тракте. Получены провизия, инструменты и инструкции от Сената.
                      </p>
                    </div>
                  </div>
                  <div className="timeline-item">
                    <div className="timeline-dot">2</div>
                    <div className="timeline-content">
                      <p className="timeline-year">1735–1736</p>
                      <h3 className="timeline-heading">Якутск — промежуточная база</h3>
                      <p className="timeline-text">
                        Движение через бескрайние просторы Восточной Сибири. Отряд пересекает реки Лена и Алдан, ведёт геодезическую съёмку и описание берегов.
                      </p>
                    </div>
                  </div>
                  <div className="timeline-item">
                    <div className="timeline-dot">3</div>
                    <div className="timeline-content">
                      <p className="timeline-year">1736</p>
                      <h3 className="timeline-heading">Хребты Джугджур</h3>
                      <p className="timeline-text">
                        Преодоление горного хребта Джугджур — труднейший участок пути. Суровые морозы, бездорожье и нехватка продовольствия испытывают стойкость команды.
                      </p>
                    </div>
                  </div>
                  <div className="timeline-item">
                    <div className="timeline-dot">4</div>
                    <div className="timeline-content">
                      <p className="timeline-year">1737, осень</p>
                      <h3 className="timeline-heading">Охотск</h3>
                      <p className="timeline-text">
                        Достижение Охотска — главного порта России на Тихом океане. Составлены подробные карты побережья, описаны народы и природа края.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* CREW */}
          <section className="features-section">
            <div className="features-container">
              <div className="features-content">
                <p className="section-label">Участники</p>
                <h2>Состав<br /><span className="highlight">отряда</span></h2>
              </div>
              <ul className="features-list">
                <li className="feature-item">
                  <div className="feature-icon">⚓</div>
                  <div className="feature-text">
                    <h3>Офицеры флота</h3>
                    <p className="tracking-wider">
                      Морские офицеры руководили навигацией и составлением морских карт вдоль побережья Охотского моря
                    </p>
                  </div>
                </li>
                <li className="feature-item">
                  <div className="feature-icon">🗺</div>
                  <div className="feature-text">
                    <h3>Геодезисты</h3>
                    <p className="tracking-wider">
                      Выполняли астрономические наблюдения и триангуляционную съёмку для создания точных географических карт
                    </p>
                  </div>
                </li>
                <li className="feature-item">
                  <div className="feature-icon">🌿</div>
                  <div className="feature-text">
                    <h3>Натуралисты</h3>
                    <p className="tracking-wider">
                      Описывали флору и фауну, собирали коллекции образцов горных пород, растений и животных Сибири
                    </p>
                  </div>
                </li>
                <li className="feature-item">
                  <div className="feature-icon">⚔</div>
                  <div className="feature-text">
                    <h3>Солдаты и казаки</h3>
                    <p className="tracking-wider">
                      Обеспечивали охрану отряда, прокладку пути через тайгу и налаживали контакт с местными народами
                    </p>
                  </div>
                </li>
              </ul>
            </div>
          </section>

          {/* KEY PEOPLE */}
          <section className="testimonials-section">
            <div className="testimonials-container">
              <h2 className="testimonials-title">Ключевые<br />люди</h2>
              <div className="testimonials-marquee">
                <div className="testimonial-card">
                  <p className="testimonial-quote">
                    «Составить точнейшее описание берегов и устьев рек, впадающих в Охотское море, со всеми островами» — такова была задача отряда.
                  </p>
                  <div className="testimonial-author">
                    <div className="author-avatar">📜</div>
                    <div className="author-info">
                      <h4>Дмитрий Лаптев</h4>
                      <p>Командир Ленского отряда, соратник экспедиции</p>
                    </div>
                  </div>
                </div>
                <div className="testimonial-card">
                  <p className="testimonial-quote">
                    Иван Биллингс прошёл сложнейший маршрут через хребет Джугджур, ведя непрерывные астрономические наблюдения для определения координат.
                  </p>
                  <div className="testimonial-author">
                    <div className="author-avatar">🔭</div>
                    <div className="author-info">
                      <h4>Геодезисты отряда</h4>
                      <p>Астрономические и триангуляционные наблюдения</p>
                    </div>
                  </div>
                </div>
                <div className="testimonial-card">
                  <p className="testimonial-quote">
                    Великая Северная экспедиция — крупнейшее исследовательское предприятие XVIII века, охватившее побережье от Архангельска до Камчатки.
                  </p>
                  <div className="testimonial-author">
                    <div className="author-avatar">⚡</div>
                    <div className="author-info">
                      <h4>Витус Беринг</h4>
                      <p>Организатор Второй Камчатской экспедиции</p>
                    </div>
                  </div>
                </div>
                <div className="testimonial-card">
                  <p className="testimonial-quote">
                    Степан Малыгин, Семён Челюскин, братья Лаптевы — имена первопроходцев, чьи открытия навсегда вошли в историю географии.
                  </p>
                  <div className="testimonial-author">
                    <div className="author-avatar">🧭</div>
                    <div className="author-info">
                      <h4>Участники ВСЭ</h4>
                      <p>Первопроходцы северных морей</p>
                    </div>
                  </div>
                </div>
                <div className="testimonial-card">
                  <p className="testimonial-quote">
                    «Составить точнейшее описание берегов и устьев рек, впадающих в Охотское море, со всеми островами» — такова была задача отряда.
                  </p>
                  <div className="testimonial-author">
                    <div className="author-avatar">📜</div>
                    <div className="author-info">
                      <h4>Дмитрий Лаптев</h4>
                      <p>Командир Ленского отряда, соратник экспедиции</p>
                    </div>
                  </div>
                </div>
                <div className="testimonial-card">
                  <p className="testimonial-quote">
                    Иван Биллингс прошёл сложнейший маршрут через хребет Джугджур, ведя непрерывные астрономические наблюдения для определения координат.
                  </p>
                  <div className="testimonial-author">
                    <div className="author-avatar">🔭</div>
                    <div className="author-info">
                      <h4>Геодезисты отряда</h4>
                      <p>Астрономические и триангуляционные наблюдения</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* CTA */}
          <section className="cta-section" id="cta">
            <div className="cta-container">
              <h2 className="cta-title">Путь<br />в историю</h2>
              <p className="cta-subtitle">
                Экспедиция 1735–1737 годов — часть Великой Северной экспедиции, открывшей миру восточное побережье России
              </p>
              <div className="cta-buttons">
                <a href="#route" className="cta-button">
                  Изучить маршрут
                </a>
                <a href="#" className="cta-button secondary">
                  Состав отряда
                </a>
              </div>
            </div>
          </section>
        </main>
      </div>
    </>
  )
}

export default PhotographyBanner
