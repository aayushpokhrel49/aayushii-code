import React, { useState } from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import Heading from '@theme/Heading';
import styles from './contact.module.css';
import Icon from '../components/Icon';

const CONTACT_EMAIL = 'info@aayushhpokhrel.com.np';

export default function Contact(): JSX.Element {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [errors, setErrors] = useState<{ name?: string; email?: string; message?: string }>({});
  const [submitted, setSubmitted] = useState(false);

  const validateForm = (): boolean => {
    const newErrors: { name?: string; email?: string; message?: string } = {};

    if (!name.trim()) {
      newErrors.name = 'Name is required';
    }

    if (!email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      newErrors.email = 'Please enter a valid email address';
    }

    if (!message.trim()) {
      newErrors.message = 'Message is required';
    } else if (message.trim().length < 10) {
      newErrors.message = 'Message must be at least 10 characters';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (validateForm()) {
      const mailtoHref = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(
        `Aayushi Code: Message from ${name}`,
      )}&body=${encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\n${message}`)}`;
      window.location.href = mailtoHref;
      setSubmitted(true);
    }
  };

  const handleInputChange = (field: string, value: string) => {
    // Clear error when user starts typing
    if (errors[field as keyof typeof errors]) {
      setErrors((prev) => ({ ...prev, [field]: undefined }));
    }

    switch (field) {
      case 'name':
        setName(value);
        break;
      case 'email':
        setEmail(value);
        break;
      case 'message':
        setMessage(value);
        break;
    }
  };

  if (submitted) {
    return (
      <Layout title="Contact" description="Get in touch with the Aayushi Code team.">
        <main className="container" style={{ padding: '3rem 0 5rem' }}>
          <div className={styles.successMessage}>
            <div className={styles.successIcon}>
              <Icon name="check" size={36} label="Success" />
            </div>
            <Heading as="h1">Message Prepared!</Heading>
            <p>
              Your email client should open shortly with your message ready to send.
              If it doesn't open automatically, you can send your message directly to{' '}
              <Link href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</Link>.
            </p>
            <button
              className="button button--primary"
              onClick={() => {
                setSubmitted(false);
                setName('');
                setEmail('');
                setMessage('');
                setErrors({});
              }}
            >
              Send another message
            </button>
          </div>
        </main>
      </Layout>
    );
  }

  return (
    <Layout title="Contact" description="Get in touch with the Aayushi Code team.">
      <main className="container" style={{ padding: '3rem 0 5rem' }}>
        <div className={styles.header}>
          <Heading as="h1">Contact us</Heading>
          <p className={styles.subtitle}>
            Questions, feedback, or ideas? We'd love to hear from you. For bug
            reports and feature requests, please use the GitHub issue tracker so
            nothing gets lost.
          </p>
        </div>

        <div className={styles.grid}>
          <section className={styles.formCard}>
            <Heading as="h2">Send a message</Heading>
            <form onSubmit={handleSubmit} className={styles.form}>
              <label className={styles.label}>
                Name <span className={styles.required}>*</span>
                <input
                  className={`${styles.input} ${errors.name ? styles.inputError : ''}`}
                  type="text"
                  value={name}
                  onChange={(e) => handleInputChange('name', e.target.value)}
                  placeholder="Your name"
                />
                {errors.name && <span className={styles.error}>{errors.name}</span>}
              </label>

              <label className={styles.label}>
                Email <span className={styles.required}>*</span>
                <input
                  className={`${styles.input} ${errors.email ? styles.inputError : ''}`}
                  type="email"
                  value={email}
                  onChange={(e) => handleInputChange('email', e.target.value)}
                  placeholder="your.email@example.com"
                />
                {errors.email && <span className={styles.error}>{errors.email}</span>}
              </label>

              <label className={styles.label}>
                Message <span className={styles.required}>*</span>
                <textarea
                  className={`${styles.input} ${styles.textarea} ${errors.message ? styles.inputError : ''}`}
                  rows={6}
                  value={message}
                  onChange={(e) => handleInputChange('message', e.target.value)}
                  placeholder="Tell us what's on your mind..."
                />
                {errors.message && <span className={styles.error}>{errors.message}</span>}
                <span className={styles.charCount}>{message.length} characters</span>
              </label>

              <button className="button button--primary" type="submit">
                Send via email
              </button>
            </form>
          </section>

          <section className={styles.infoCard}>
            <Heading as="h2">Other ways to reach us</Heading>
            <ul className={styles.contactList}>
              <li className={styles.contactItem}>
                <div className={styles.contactIcon}>
                  <Icon name="mail" size={20} label="Email" />
                </div>
                <div>
                  <strong>Email:</strong>{' '}
                  <Link href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</Link>
                </div>
              </li>
              <li className={styles.contactItem}>
                <div className={styles.contactIcon}>
                  <Icon name="bug" size={20} label="Bug report" />
                </div>
                <div>
                  <strong>Report a bug:</strong>{' '}
                  <Link href="https://github.com/aayushpokhrel49/aayushii-code/issues">
                    GitHub Issues
                  </Link>
                </div>
              </li>
              <li className={styles.contactItem}>
                <div className={styles.contactIcon}>
                  <Icon name="message-circle" size={20} label="Community" />
                </div>
                <div>
                  <strong>Community:</strong>{' '}
                  <Link href="https://github.com/aayushpokhrel49/aayushii-code/discussions">
                    GitHub Discussions
                  </Link>
                </div>
              </li>
              <li className={styles.contactItem}>
                <div className={styles.contactIcon}>
                  <Icon name="package" size={20} label="Source" />
                </div>
                <div>
                  <strong>Source:</strong>{' '}
                  <Link href="https://github.com/aayushpokhrel49/aayushii-code">
                    GitHub repository
                  </Link>
                </div>
              </li>
            </ul>
            <div className={styles.responseTime}>
              <div className={styles.responseTimeTitle}>
                <Icon name="lightbulb" size={18} label="Response time" />
                <strong>Response time:</strong>
              </div>
              Email replies may take a day or two. For faster answers, open a
              discussion on GitHub.
            </div>
          </section>
        </div>
      </main>
    </Layout>
  );
}