import { useState } from 'react'

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' })
  const [sent, setSent] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target
    setForm((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setSent(true)
  }

  return (
    <main className="section">
      <div className="container">
        <div className="page-header">
          <div>
            <p className="eyebrow">Contact</p>
            <h1>Get in touch with us</h1>
            <p>Have a question about an order, product, or our services? We&apos;re here to help.</p>
          </div>
        </div>

        <div className="contact-layout">
          <div className="contact-info">
            <div className="info-card">
              <h3>Contact Information</h3>
              <ul className="info-list">
                <li>
                  <strong>Email</strong>
                  <span>support@shopease.example</span>
                </li>
                <li>
                  <strong>Phone</strong>
                  <span>+1 (555) 123-4567</span>
                </li>
                <li>
                  <strong>Address</strong>
                  <span>123 Commerce Street, Suite 100<br />San Francisco, CA 94105</span>
                </li>
                <li>
                  <strong>Business Hours</strong>
                  <span>Monday – Friday: 9:00 AM – 6:00 PM<br />Saturday: 10:00 AM – 4:00 PM</span>
                </li>
              </ul>
            </div>
            <div className="info-card">
              <h3>Customer Support</h3>
              <p>
                Our support team typically responds within 24 hours on business days.
                For order-related inquiries, please include your order details in the message.
              </p>
            </div>
          </div>

          <div className="contact-form-wrap">
            {sent ? (
              <div className="checkout-success">
                <div className="success-icon">✓</div>
                <h2>Message Sent</h2>
                <p>
                  Thank you, <strong>{form.name || 'there'}</strong>. We&apos;ve received your
                  message and will get back to you at <strong>{form.email}</strong> soon.
                </p>
                <button type="button" className="btn btn-primary" onClick={() => { setSent(false); setForm({ name: '', email: '', subject: '', message: '' }) }}>
                  Send another message
                </button>
              </div>
            ) : (
              <form className="checkout-form" onSubmit={handleSubmit}>
                <h2>Send us a message</h2>
                <div className="form-grid">
                  <label>
                    Full Name
                    <input className="input" name="name" value={form.name} onChange={handleChange} required />
                  </label>
                  <label>
                    Email Address
                    <input className="input" type="email" name="email" value={form.email} onChange={handleChange} required />
                  </label>
                  <label className="full">
                    Subject
                    <input className="input" name="subject" value={form.subject} onChange={handleChange} required />
                  </label>
                  <label className="full">
                    Message
                    <textarea className="input textarea" name="message" rows="5" value={form.message} onChange={handleChange} required />
                  </label>
                </div>
                <button type="submit" className="btn btn-primary btn-lg">Send Message</button>
              </form>
            )}
          </div>
        </div>
      </div>
    </main>
  )
}
