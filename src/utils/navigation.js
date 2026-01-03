// src/utils/navigation.js
import posthog from 'posthog-js'

// Track CTA clicks
const trackContactClick = (source) => {
  if (typeof window !== 'undefined' && posthog) {
    posthog.capture('contact_cta_clicked', {
      source: source,
      page: window.location.pathname
    })
  }
}

// For header and primary CTAs - go to dedicated contact page
export const navigateToContactPage = (router, source = 'header') => {
  trackContactClick(source)
  router.push('/contacto');
};

// For in-content quick contact CTAs - scroll to contact section
export const navigateToContactSection = (router, pathname, source = 'in_content') => {
  trackContactClick(source)
  if (pathname === '/') {
    // If already on home page, smooth scroll to contact
    const contactSection = document.getElementById('contact-section');
    if (contactSection) {
      contactSection.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  } else {
    // If on another page, navigate to home with hash
    router.push('/#contact-section');
  }
};

// Header contact button - goes to dedicated page
export const handleContactClick = (e, router, pathname, source = 'header') => {
  e.preventDefault();
  navigateToContactPage(router, source);
};

// In-content contact button - scrolls to section
export const handleQuickContactClick = (e, router, pathname, source = 'in_content') => {
  e.preventDefault();
  navigateToContactSection(router, pathname, source);
};

// Auto-scroll on page load if hash is present
export const checkHashAndScroll = () => {
  if (typeof window !== 'undefined') {
    const hash = window.location.hash;
    if (hash === '#contact-section') {
      // Small delay to ensure page is loaded
      setTimeout(() => {
        const contactSection = document.getElementById('contact-section');
        if (contactSection) {
          contactSection.scrollIntoView({ 
            behavior: 'smooth', 
            block: 'start' 
          });
        }
      }, 100);
    }
  }
};