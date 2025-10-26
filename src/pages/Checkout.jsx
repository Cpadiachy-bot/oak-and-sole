import React from "react";

export default function Checkout() {
  return (
    <div className="checkout-page" style={{ padding: "100px 20px", textAlign: "center" }}>
      <h1>Checkout</h1>
      <p>Fill in your personal and shipping details below (backend coming soon).</p>

      <form
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "15px",
          maxWidth: "500px",
          margin: "40px auto",
          textAlign: "left",
        }}
      >
        <label>
          Full Name:
          <input type="text" placeholder="Enter your full name" required />
        </label>
        <label>
          Email:
          <input type="email" placeholder="Enter your email" required />
        </label>
        <label>
          Address:
          <input type="text" placeholder="Street Address" required />
        </label>
        <label>
          City:
          <input type="text" placeholder="City" required />
        </label>
        <label>
          Postal Code:
          <input type="text" placeholder="Postal Code" required />
        </label>
        <label>
          Phone Number:
          <input type="tel" placeholder="Phone Number" required />
        </label>

        <button
          type="submit"
          style={{
            backgroundColor: "#b78b3f",
            color: "#fff",
            padding: "12px",
            border: "none",
            cursor: "pointer",
            borderRadius: "8px",
            marginTop: "10px",
          }}
        >
          Continue to Payment
        </button>
      </form>
    </div>
  );
}
