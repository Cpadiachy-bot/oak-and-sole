import React from 'react'
export default function Contact(){
  return (
    <section>
      <div className="section-head"><h2>Contact</h2></div>
      <p className="muted">For enquiries, use the form below.</p>

      <form className="contact-form" onSubmit={e => { e.preventDefault(); alert('Form submitted (demo)') }}>
        <label>
          Name
          <input name="name" />
        </label>
        <label>
          Email
          <input name="email" />
        </label>
        <label>
          Message
          <textarea name="message" />
        </label>
        <div>
          <button className="btn primary">Send message</button>
        </div>
      </form>
    </section>
  )
}
