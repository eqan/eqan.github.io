/**
 * Portfolio Component Generators
 * Functional programming approach with pure template functions
 */

const Components = {
  // ============ UTILITY FUNCTIONS ============
  
  /**
   * Compose multiple functions from right to left
   */
  compose: (...fns) => x => fns.reduceRight((acc, fn) => fn(acc), x),

  /**
   * Pipe multiple functions from left to right
   */
  pipe: (...fns) => x => fns.reduce((acc, fn) => fn(acc), x),

  /**
   * Safely get nested property
   */
  get: (obj, path, defaultVal = '') => 
    path.split('.').reduce((acc, part) => acc?.[part] ?? defaultVal, obj),

  /**
   * Conditionally add attribute
   */
  attr: (name, value) => value ? `${name}="${value}"` : '',

  /**
   * Conditionally add class
   */
  cls: (...classes) => classes.filter(Boolean).join(' '),

  // ============ CONTACT ICON COMPONENT ============
  
  contactIcon: ({ href, icon, label, tooltip, target, id, hiddenAddress }) => `
    <a ${id ? `id="${id}"` : ''} href="${href}" class="contact-icon" 
       ${target ? `target="${target}"` : ''} 
       ${tooltip ? `data-toggle="tooltip" title="${tooltip}"` : ''}>
      <i class="fa ${icon}"></i>
      <span>${label}</span>
      ${hiddenAddress ? `<span class="hidden-address">${hiddenAddress}</span>` : ''}
    </a>`,

  contactIconsGroup: (icons) => `
    <div class="contact-icons">
      ${icons.map(Components.contactIcon).join('')}
    </div>`,

  // ============ NAVIGATION COMPONENT ============
  
  navItem: ({ id, num, label, icon }, isFirst = false) => `
    <li class="sections-nav-item">
      <a href="#${id}" class="nav-link sections-nav-link goto-section ${isFirst ? 'active' : ''}">
        <span class="sections-nav-counter">${num}</span>
        <i class="fa ${icon} sections-nav-icon"></i>
        <span class="sections-nav-label">${label}</span>
      </a>
    </li>`,

  navigation: (sections, contacts) => `
    <ul id="sections-nav" class="nav sections-nav sections-nav-animated">
      ${sections.map((s, i) => Components.navItem(s, i === 0)).join('')}
      <li class="sections-nav-item">
        <div class="sections-nav-info">
          ${Components.contactIconsGroup(contacts)}
        </div>
      </li>
    </ul>`,

  // ============ SERVICE/DOMAIN CARD COMPONENT ============
  
  serviceCard: ({ href, icon, label, target, modal }) => `
    <div class="service-item">
      <a href="${href}" ${modal ? 'data-toggle="modal"' : ''} 
         ${target ? `target="${target}"` : ''} 
         class="service-card">
        <i class="fa ${icon}"></i>
        <h4>${label}</h4>
      </a>
    </div>`,

  servicesSection: (services) => `
    <div class="services-grid animation-translate animation-item-2 mb-5">
      ${services.map(Components.serviceCard).join('')}
    </div>`,

  // ============ EXPERTISE CARD COMPONENT ============
  
  expertiseCard: ({ icon, label, duration, arrowLeft }) => `
    <div class="expertise-item">
      <div class="domain-card ${arrowLeft ? 'arrow-left' : ''}">
        <i class="fa ${icon}"></i>
        <h4 class="mb-1">${label}</h4>
        <small>${duration}</small>
      </div>
    </div>`,

  expertiseSection: (items) => `
    <div class="expertise-grid animation-translate animation-item-2 mb-5">
      ${items.map(Components.expertiseCard).join('')}
    </div>`,

  // ============ PROJECT CARD COMPONENT ============
  
  /**
   * Format tags string into skill pills for project cards
   */
  formatSkillPills: (tags, maxPills = 6) => {
    if (!Array.isArray(tags)) return '';
    
    const displayTags = tags.slice(0, maxPills);
    const remaining = tags.length - maxPills;
    
    let html = displayTags.map(tag => `<span class="skill-pill">${tag}</span>`).join('');
    if (remaining > 0) {
      html += `<span class="skill-pill skill-more">+${remaining}</span>`;
    }
    return html;
  },

  projectCard: ({ id, img, title, subtitle, tags }) => {
    const skillPillsHtml = Components.formatSkillPills(tags, 5);
    
    return `
      <article class="project-item">
        <a class="project-card" href="#${id}" data-toggle="modal">
          <figure class="project-card-img">
            <img src="${img}" alt="${title}" loading="lazy" />
          </figure>
          <div class="project-card-content">
            <h3 class="project-card-title">${title}</h3>
            <p class="project-card-desc">${subtitle}</p>
            <div class="project-card-tags">${skillPillsHtml}</div>
          </div>
        </a>
      </article>`;
  },

  projectsGrid: (featured, regular) => `
    <div class="projects-grid animation-translate animation-item-2">
      ${featured.map(Components.projectCard).join('')}
      ${regular.map(Components.projectCard).join('')}
    </div>`,

  // ============ PROJECT MODAL COMPONENT ============
  
  projectModalImage: ({ src, alt, basis, link }) => {
    const basisStyle = basis ? `flex: 0 0 calc(${basis} - 0.5rem); max-width: calc(${basis} - 0.5rem);` : '';
    const imgHtml = `<img class="img-fluid project-modal-img" src="${src}" alt="${alt}" loading="lazy"/>`;
    
    return link 
      ? `<a href="${link}" class="project-img-wrapper" style="${basisStyle}" target="_blank">${imgHtml}</a>`
      : `<div class="project-img-wrapper" style="${basisStyle}">${imgHtml}</div>`;
  },

  /**
   * Format tags array into styled pill badges
   */
  formatTags: (tags) => {
    if (!Array.isArray(tags)) return '';
    return tags.map(tag => `<span class="tech-tag">${tag}</span>`).join('');
  },

  projectModal: (id, { title, subtitle, tags, content, images, link }) => {
    const hasCollage = images.length > 1 || images.some(img => img.basis);
    const formattedTags = Components.formatTags(tags);
    
    return `
    <div id="${id}" class="modal fade project-modal" tabindex="-1" role="dialog" aria-labelledby="modal" style="display: none" aria-hidden="true">
      <div class="modal-dialog modal-dialog-centered modal-fluid">
        <div class="modal-content">
          <div class="modal-header">
            <button type="button" class="modal-close" data-dismiss="modal" aria-label="Close">
              <span class="d-none">×</span>
            </button>
          </div>
          <div class="modal-body">
            <article class="article project-article">
              <header class="project-header">
                ${link 
                  ? `<a href="${link}" target="_blank" class="project-title-link"><h2 class="project-modal-title">${title} <i class="fa fa-external-link"></i></h2></a>`
                  : `<h2 class="project-modal-title">${title}</h2>`
                }
                <p class="project-modal-subtitle">${subtitle}</p>
                <div class="tech-tags-container">${formattedTags}</div>
              </header>
              
              <div class="project-gallery ${hasCollage ? 'gallery-collage' : 'gallery-single'}">
                ${images.map(Components.projectModalImage).join('')}
              </div>
              
              <div class="project-content">
                ${content}
              </div>
            </article>
          </div>
        </div>
      </div>
    </div>`;
  },

  allProjectModals: (modals) => 
    Object.entries(modals).map(([id, data]) => Components.projectModal(id, data)).join('\n'),

  // ============ EXPERIENCE CARD COMPONENT (Modern) ============
  
  experienceCard: ({ date, title, role, icon, metrics, highlights, tech }, index) => {
    const metricsHtml = metrics 
      ? `<div class="exp-metrics">${metrics.map(m => `<span class="exp-metric">${m}</span>`).join('')}</div>`
      : '';
    
    const highlightsHtml = highlights 
      ? `<ul class="exp-highlights">${highlights.map(h => `<li>${h}</li>`).join('')}</ul>`
      : '';
    
    const techHtml = tech 
      ? `<div class="exp-tech">${tech.slice(0, 5).map(t => `<span class="tech-pill-sm">${t}</span>`).join('')}${tech.length > 5 ? `<span class="tech-pill-sm tech-more">+${tech.length - 5}</span>` : ''}</div>`
      : '';
    
    const animClass = `animation-translate animation-item-${Math.min(index + 2, 5)}`;
    
    return `
      <div class="exp-card info-card ${animClass}">
        <div class="exp-header">
          <div class="exp-icon"><i class="fa ${icon || 'fa-briefcase'}"></i></div>
          <div class="exp-info">
            <span class="exp-date">${date}</span>
            <h3 class="exp-title">${title}</h3>
            <span class="exp-role">${role}</span>
          </div>
        </div>
        ${metricsHtml}
        ${highlightsHtml}
        ${techHtml}
      </div>`;
  },

  experienceTimeline: (items) => `
    <div class="exp-timeline timeline-animated">
      ${items.map((item, i) => Components.experienceCard(item, i)).join('')}
    </div>`,

  // ============ HONOR CARD COMPONENT ============
  
  honorCard: ({ date, title, icon, metric, description, details }, index) => {
    const detailsHtml = details 
      ? `<ul class="honor-details">${details.map(d => `<li>${d}</li>`).join('')}</ul>`
      : '';
    
    const animClass = `animation-translate animation-item-${Math.min(index + 2, 5)}`;
    
    return `
      <div class="honor-card info-card ${animClass}">
        <div class="honor-icon"><i class="fa ${icon || 'fa-trophy'}"></i></div>
        <div class="honor-content">
          <span class="honor-date">${date}</span>
          <h3 class="honor-title">${title}</h3>
          ${metric ? `<span class="honor-metric">${metric}</span>` : ''}
          <p class="honor-desc">${description}</p>
          ${detailsHtml}
        </div>
      </div>`;
  },

  honorsSection: (items) => `
    <div class="honors-grid timeline-animated">
      ${items.map((item, i) => Components.honorCard(item, i)).join('')}
    </div>`,

  // ============ EDUCATION CARD COMPONENT ============
  
  educationCard: ({ date, title, icon, degree, institution, location }, index) => {
    const animClass = `animation-translate animation-item-${Math.min(index + 2, 5)}`;
    return `
      <div class="edu-card info-card ${animClass}">
        <div class="edu-icon"><i class="fa ${icon || 'fa-graduation-cap'}"></i></div>
        <div class="edu-content">
          <span class="edu-date">${date}</span>
          <h3 class="edu-title">${title}</h3>
          <span class="edu-degree">${degree}</span>
          <p class="edu-desc">${institution}${location ? ` • ${location}` : ''}</p>
        </div>
      </div>`;
  },

  educationSection: (items) => `
    <div class="edu-grid timeline-animated">
      ${items.map((item, i) => Components.educationCard(item, i)).join('')}
    </div>`,

  // ============ TESTIMONIAL COMPONENT (Modern) ============
  
  testimonialItem: ({ img, name, role, link, text }, index) => `
    <div class="carousel-item ${index === 0 ? 'active' : ''}">
      <div class="testimonial-card">
        <div class="testimonial-quote"><i class="fa fa-quote-left"></i></div>
        <p class="testimonial-text">${text}</p>
        <div class="testimonial-author">
          <img src="${img}" class="testimonial-avatar" alt="${name}" />
          <div class="testimonial-info">
            <h4 class="testimonial-name">${name}</h4>
            <p class="testimonial-role">${role}</p>
            ${link ? `<a href="${link}" target="_blank" class="testimonial-link"><i class="fa fa-external-link"></i> View Profile</a>` : ''}
          </div>
        </div>
      </div>
    </div>`,

  testimonialIndicator: (_, index) => 
    `<li data-target="#carousel" data-slide-to="${index}" class="${index === 0 ? 'active' : ''}" aria-label="Slide ${index + 1}"></li>`,

  testimonialCarousel: (testimonials) => `
    <div id="carousel" class="carousel slide testimonial-carousel animation-translate animation-item-2" data-ride="carousel" data-interval="6000">
      <div class="carousel-inner">
        ${testimonials.map(Components.testimonialItem).join('')}
      </div>
      <div class="testimonial-nav">
        <a class="testimonial-arrow testimonial-prev" href="#carousel" role="button" data-slide="prev" aria-label="Previous">
          <i class="fa fa-chevron-left"></i>
        </a>
        <ol class="carousel-indicators testimonial-dots">
          ${testimonials.map(Components.testimonialIndicator).join('')}
        </ol>
        <a class="testimonial-arrow testimonial-next" href="#carousel" role="button" data-slide="next" aria-label="Next">
          <i class="fa fa-chevron-right"></i>
        </a>
      </div>
    </div>
    <div class="testimonial-more animation-translate animation-item-3">
      <a href="https://www.fiverr.com/eqanahmad" target="_blank" class="testimonial-more-link">
        <i class="fa fa-star"></i>
        <span>See 60+ Reviews on Fiverr</span>
        <i class="fa fa-external-link"></i>
      </a>
    </div>`,

  // ============ PROFILE MODAL COMPONENT ============
  
  profileCard: ({ href, icon, label }) => `
    <a href="${href}" target="_blank" class="profile-link-card">
      <div class="profile-link-icon"><i class="fa ${icon}"></i></div>
      <span class="profile-link-label">${label}</span>
      <i class="fa fa-external-link profile-link-arrow"></i>
    </a>`,

  profileModal: (id, title, profiles) => `
    <div id="${id}" class="modal fade" tabindex="-1" role="dialog" aria-labelledby="modal" style="display: none" aria-hidden="true">
      <div class="modal-dialog modal-dialog-centered">
        <div class="modal-content profile-modal-content">
          <button type="button" class="modal-close" data-dismiss="modal" aria-label="Close"></button>
          <div class="profile-modal-header">
            <h2 class="profile-modal-title">${title}</h2>
            <p class="profile-modal-subtitle">Click to visit my profiles</p>
          </div>
          <div class="profile-modal-body">
            ${profiles.map(Components.profileCard).join('')}
          </div>
        </div>
      </div>
    </div>`,

  // ============ SECTION FOOTER COMPONENT ============
  
  sectionFooter: (current, total, nextId, animClass = 'animation-item-3') => 
    nextId ? `
      <div class="section-footer animation-translate ${animClass}">
        <a class="section-next goto-section" href="#${nextId}">
          <span class="section-next-counter">${String(current).padStart(2, '0')}/${total}</span>
          <span class="section-next-label">Next chapter</span>
          <span class="section-next-icon"></span>
        </a>
      </div>` : `
      <div class="section-footer animation-translate ${animClass}">
        <span class="section-next goto-section">
          <span class="section-next-counter">${String(current).padStart(2, '0')}/${total}</span>
        </span>
      </div>`,

  // ============ INITIALIZATION ============
  
  /**
   * Initialize all dynamic content
   */
  init: function() {
    const data = PORTFOLIO_DATA;
    
    // Render navigation
    const navContainer = document.querySelector('.sections-nav-container');
    if (navContainer) {
      navContainer.innerHTML = this.navigation(data.navSections, data.contacts);
    }

    // Render services
    const servicesContainer = document.getElementById('services-container');
    if (servicesContainer) {
      servicesContainer.innerHTML = this.servicesSection(data.services);
    }

    // Render expertise
    const expertiseContainer = document.getElementById('expertise-container');
    if (expertiseContainer) {
      expertiseContainer.innerHTML = this.expertiseSection(data.expertise);
    }

    // Render projects
    const projectsContainer = document.getElementById('projects-container');
    if (projectsContainer) {
      projectsContainer.innerHTML = this.projectsGrid(data.featuredProjects, data.projects);
    }

    // Render experiences (modern cards)
    const experiencesContainer = document.getElementById('experiences-container');
    if (experiencesContainer) {
      experiencesContainer.innerHTML = this.experienceTimeline(data.experiences);
    }

    // Render honors (modern cards)
    const honorsContainer = document.getElementById('honors-container');
    if (honorsContainer) {
      honorsContainer.innerHTML = this.honorsSection(data.honors);
    }

    // Render education (modern cards)
    const educationContainer = document.getElementById('education-container');
    if (educationContainer) {
      educationContainer.innerHTML = this.educationSection(data.education);
    }

    // Render testimonials
    const testimonialsContainer = document.getElementById('testimonials-container');
    if (testimonialsContainer) {
      testimonialsContainer.innerHTML = this.testimonialCarousel(data.testimonials);
    }

    // Render contact icons
    const contactStay = document.getElementById('contact-stay');
    if (contactStay) {
      contactStay.innerHTML = this.contactIconsGroup([data.contacts[0], data.contacts[2]]);
    }

    const contactSocial = document.getElementById('contact-social');
    if (contactSocial) {
      contactSocial.innerHTML = this.contactIconsGroup(data.socials);
    }

    const contactSupport = document.getElementById('contact-support');
    if (contactSupport) {
      contactSupport.innerHTML = this.contactIconsGroup(data.supports);
    }

    // Render project modals
    const modalsContainer = document.getElementById('modals-container');
    if (modalsContainer) {
      modalsContainer.innerHTML = this.allProjectModals(data.projectModals);
    }

    // Render profile modals
    const profileModalsContainer = document.getElementById('profile-modals-container');
    if (profileModalsContainer) {
      profileModalsContainer.innerHTML = 
        this.profileModal('programming-profile-modal', 'Programming Profiles', data.programmingProfiles) +
        this.profileModal('freelance-profile-modal', 'Freelance Profiles', data.freelanceProfiles);
    }
  }
};

// Initialize when DOM is ready
document.addEventListener('DOMContentLoaded', () => Components.init());
