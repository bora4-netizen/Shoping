import { Link } from 'react-router-dom'

const faqs = [
  {
    q: 'How long does shipping take?',
    a: 'Standard shipping typically takes 3–5 business days. Orders are processed within 24 hours on business days. You will receive updates once your order has been dispatched.',
  },
  {
    q: 'Do you offer free shipping?',
    a: 'Yes. We offer free shipping on orders over $100. For orders under $100, a flat shipping fee of $5.00 is applied at checkout.',
  },
  {
    q: 'What is your return policy?',
    a: 'We offer a 30-day hassle-free return policy on most items. Products must be in their original condition. Contact our support team to start a return.',
  },
  {
    q: 'How can I track my order?',
    a: 'Once your order ships, you will receive a confirmation with tracking details. If you have questions about your order status, please contact us with your order information.',
  },
  {
    q: 'What payment methods do you accept?',
    a: 'Our checkout demo accepts card details for demonstration purposes. In a production store, this would support major credit/debit cards and other secure payment options.',
  },
  {
    q: 'Can I change or cancel my order?',
    a: 'If your order has not yet been processed or shipped, contact our support team as soon as possible and we will do our best to accommodate your request.',
  },
  {
    q: 'How do I contact customer support?',
    a: 'You can reach us via the Contact page, by email at support@shopease.example, or by phone at +1 (555) 123-4567 during business hours.',
  },
]

export default function FAQ() {
  return (
    <main className="section">
      <div className="container">
        <div className="page-header">
          <div>
            <p className="eyebrow">Support</p>
            <h1>Frequently Asked Questions</h1>
            <p>Find quick answers to common questions about orders, shipping, returns, and more.</p>
          </div>
        </div>

        <div className="faq-list">
          {faqs.map((item, index) => (
            <details key={index} className="faq-item">
              <summary className="faq-question">{item.q}</summary>
              <div className="faq-answer">
                <p>{item.a}</p>
              </div>
            </details>
          ))}
        </div>

        <div className="cta-panel" style={{ marginTop: '2rem' }}>
          <div>
            <h2>Still have questions?</h2>
            <p>Our support team is happy to help with anything you need.</p>
          </div>
          <div className="hero-actions">
            <Link to="/contact" className="btn btn-primary btn-lg">Contact Support</Link>
            <Link to="/shop" className="btn btn-secondary btn-lg">Continue Shopping</Link>
          </div>
        </div>
      </div>
    </main>
  )
}
