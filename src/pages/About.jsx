import React from 'react'

export default function About() {
  return (
    <>
      {/* HERO SECTION */}
      <div className="about-hero">
        <h1 className="about-title">Our Story: Built to Last.</h1>
        <p className="lead about-lead">
          At Timberland Co., we’re all about one thing — crafting boots that can take on anything. From city streets to mountain trails, our legacy is built on rugged durability, timeless design, and honest craftsmanship.
        </p>
      </div>

      {/* CRAFTSMANSHIP SECTION */}
      <div className="about-section vision-section">
        <h2>Crafted by Hand. Built for Life.</h2>
        <div className="about-content-grid">
          <p>
            Every pair of Timberlands starts in the hands of skilled artisans. Each cut, stitch, and sole is made with purpose — no shortcuts, no compromises. We believe in real craftsmanship, the kind you can feel with every step.
            <br /><br />
            Our boots are designed to endure. The leather is strong, the seams are tight, and the spirit behind every pair is pure grit. Because when you lace up a pair of Timberlands, you’re stepping into decades of heritage and hard work.
          </p>
          <img
            src="/images/hand.jpg" // 🔧 Replace with your image file path
            alt="Timberlands being handcrafted by an artisan"
            className="about-image"
          />
        </div>
      </div>

      {/* VALUES SECTION */}
      <div className="about-section values-section">
        <h2>What We Stand For</h2>
        <div className="values-list">
          <div className="value-card card">
            <h3>1. Built Tough</h3>
            <p>Our boots are made for real life — rain, dirt, work, or play. Every detail is tested for endurance and comfort.</p>
          </div>
          <div className="value-card card">
            <h3>2. Real Craftsmanship</h3>
            <p>We take pride in the process — from hand-selecting leather to the final stitch. Quality you can see and feel.</p>
          </div>
          <div className="value-card card">
            <h3>3. Sustainable Future</h3>
            <p>We’re constantly improving how we source, build, and ship — keeping our planet as strong as our boots.</p>
          </div>
        </div>
      </div>

      {/* CALL TO ACTION */}
      <div className="about-cta">
        <p>Ready to lace up something legendary?</p>
        <a href="/shop" className="btn primary">Shop Timberlands</a>
      </div>
    </>
  )
}
