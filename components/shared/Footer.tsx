import Link from 'next/link';
import { FiLinkedin, FiTwitter, FiGithub, FiMail } from 'react-icons/fi';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const footerSections = [
    {
      title: 'Solutions',
      links: [
        { name: 'Manufacturing', href: '/solutions#manufacturing' },
        { name: 'Supply Chain', href: '/solutions#supply-chain' },
        { name: 'Distribution', href: '/solutions#distribution' },
        { name: 'Logistics', href: '/solutions#logistics' },
      ],
    },
    {
      title: 'Platform',
      links: [
        { name: 'Features', href: '/platform#features' },
        { name: 'AI Agents', href: '/platform#agents' },
        { name: 'Integrations', href: '/platform#integrations' },
        { name: 'Security', href: '/platform#security' },
      ],
    },
    {
      title: 'Resources',
      links: [
        { name: 'Documentation', href: '/docs' },
        { name: 'Blog', href: '/blog' },
        { name: 'Case Studies', href: '/case-studies' },
        { name: 'Support', href: '/support' },
      ],
    },
    {
      title: 'Company',
      links: [
        { name: 'About Us', href: '/about' },
        { name: 'Contact', href: '/contact' },
        { name: 'Privacy Policy', href: '/privacy' },
        { name: 'Terms of Service', href: '/terms' },
      ],
    },
  ];

  return (
    <footer className="bg-[var(--bg-secondary)] border-t border-[var(--border-color)] mt-20">
      <div className="container-custom py-12">
        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8 mb-12">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center space-x-2 group mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-[var(--primary-color)] to-[var(--primary-light)] rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">D</span>
              </div>
              <span className="text-xl font-bold text-[var(--text-primary)]">
                Datamaglia
              </span>
            </Link>
            <p className="text-[var(--text-secondary)] text-sm mb-6 max-w-sm">
              AI-powered data governance and compliance monitoring for modern manufacturing and supply chain operations.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-[var(--bg-tertiary)] hover:bg-[var(--primary-color)] hover:text-white transition-all"
                aria-label="LinkedIn"
              >
                <FiLinkedin className="w-5 h-5" />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-[var(--bg-tertiary)] hover:bg-[var(--primary-color)] hover:text-white transition-all"
                aria-label="Twitter"
              >
                <FiTwitter className="w-5 h-5" />
              </a>
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-[var(--bg-tertiary)] hover:bg-[var(--primary-color)] hover:text-white transition-all"
                aria-label="GitHub"
              >
                <FiGithub className="w-5 h-5" />
              </a>
              <a
                href="mailto:contact@datamaglia.io"
                className="p-2 rounded-lg bg-[var(--bg-tertiary)] hover:bg-[var(--primary-color)] hover:text-white transition-all"
                aria-label="Email"
              >
                <FiMail className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Links Columns */}
          {footerSections.map((section) => (
            <div key={section.title}>
              <h3 className="font-semibold text-[var(--text-primary)] mb-4">
                {section.title}
              </h3>
              <ul className="space-y-3">
                {section.links.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-sm text-[var(--text-secondary)] hover:text-[var(--primary-color)] transition-colors"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Section */}
        <div className="pt-8 border-t border-[var(--border-color)]">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-sm text-[var(--text-secondary)]">
              © {currentYear} Datamaglia. All rights reserved.
            </p>
            <p className="text-sm text-[var(--text-muted)]">
              Powered by Multi-Agent AI Technology
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
