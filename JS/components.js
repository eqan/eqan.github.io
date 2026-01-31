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
  
  navItem: ({ id, num, label }, isFirst = false) => `
    <li class="sections-nav-item">
      <a href="#${id}" class="nav-link sections-nav-link goto-section ${isFirst ? 'active' : ''}">
        <span class="sections-nav-counter">${num}</span>
        ${label}
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
  
  serviceCard: ({ href, icon, label, target, modal, arrowLeft }) => `
    <div class="col-6 col-md-4 mb-4">
      <a href="${href}" ${modal ? 'data-toggle="modal"' : ''} 
         ${target ? `target="${target}"` : ''} 
         class="domain-card d-block text-center no-decoration ${arrowLeft ? 'arrow-left' : ''}">
        <i class="fa ${icon}"></i>
        <h4 class="mb-1">${label}</h4>
      </a>
    </div>`,

  servicesSection: (services) => `
    <div class="row animation-translate animation-item-2 mb-5">
      ${services.map(Components.serviceCard).join('')}
    </div>`,

  // ============ EXPERTISE CARD COMPONENT ============
  
  expertiseCard: ({ icon, label, duration, arrowLeft }) => `
    <div class="col-6 col-md-3 mb-4">
      <div class="domain-card ${arrowLeft ? 'arrow-left' : ''}">
        <i class="fa ${icon}"></i>
        <h4 class="mb-1">${label}</h4>
        <small>${duration}</small>
      </div>
    </div>`,

  expertiseSection: (items) => `
    <div class="row animation-translate animation-item-2 mb-5">
      ${items.map(Components.expertiseCard).join('')}
    </div>`,

  // ============ PROJECT CARD COMPONENT ============
  
  projectCard: ({ id, img, title, subtitle, tags }, size = 'small') => {
    const tagsHtml = Array.isArray(tags) 
      ? tags.map(t => `<p class="card-tags specific-card-tags">${t}</p>`).join('')
      : `<p class="card-tags">${tags}</p>`;
    
    const colClass = size === 'full' ? 'col-12 col-lg-10 mx-auto' 
                   : size === 'medium' ? 'col-12 col-md-10" style="width: 60%; margin-left: auto; margin-right: auto;'
                   : 'col-6 col-md-4 mb-4';
    
    return `
      <div class="${colClass}">
        <a class="card" href="#${id}" data-toggle="modal">
          <img class="card-img-top" src="${img}" alt="${title}" />
          <div class="card-body">
            <h3 class="card-title">${title}</h3>
            <h4 class="card-subtitle">${subtitle}</h4>
            ${tagsHtml}
          </div>
        </a>
      </div>`;
  },

  featuredProjectCard: (project) => Components.projectCard(project, project.size),

  projectsGrid: (featured, regular) => `
    ${featured.map(Components.featuredProjectCard).join('')}
    <div class="row animation-translate animation-item-2">
      ${regular.slice(0, 3).map(p => Components.projectCard(p)).join('')}
    </div>
    <div class="row animation-translate animation-item-2">
      ${regular.slice(3, 6).map(p => Components.projectCard(p)).join('')}
    </div>
    <div class="row animation-translate animation-item-2">
      ${regular.slice(6, 9).map(p => Components.projectCard(p)).join('')}
    </div>`,

  // ============ PROJECT MODAL COMPONENT ============
  
  projectModalImage: ({ src, alt, basis, link }) => {
    const style = basis ? `style="flex-basis: ${basis};"` : '';
    const imgHtml = `<img class="img-fluid ${basis ? 'collage-image' : 'mb-10'}" src="${src}" alt="${alt}" ${basis ? 'style="width: 100%; height: auto;"' : ''}/>`;
    
    return link 
      ? `<a href="${link}" ${basis ? style : ''} target="_blank">${imgHtml}</a>${basis ? '</br></br>' : ''}`
      : `<a ${style}>${imgHtml}</a>${basis ? '</br></br>' : ''}`;
  },

  projectModal: (id, { title, subtitle, tags, content, images, link }) => {
    const hasCollage = images.length > 1 || images.some(img => img.basis);
    
    return `
    <div id="${id}" class="modal fade" tabindex="-1" role="dialog" aria-labelledby="modal" style="display: none" aria-hidden="true">
      <div class="modal-dialog modal-dialog-centered modal-fluid">
        <div class="modal-content">
          <div class="modal-header">
            &nbsp;
            <button type="button" class="modal-close" data-dismiss="modal" aria-label="Close">
              <span class="d-none">×</span>
            </button>
          </div>
          <div class="modal-body">
            <article class="article">
              <div class="article-header">
                <h2 class="article-title" ${link ? `href="${link}" target="_blank"` : ''}>${title}</h2>
                <h3 class="article-subtitle">${subtitle}</h3>
                <p class="article-tags">${tags}</p>
              </div>
              <div class="row flex-column-reverse flex-lg-row">
                <div class="col-12 col-lg-${hasCollage ? '12' : '6'}">
                  ${content}
                </div>
                <div class="col-12 col-lg-${hasCollage ? '12' : '6'}">
                  ${hasCollage ? '<div class="image-collage" style="display: flex; flex-wrap: wrap;">' : ''}
                  ${images.map(Components.projectModalImage).join('')}
                  ${hasCollage ? '</div>' : ''}
                </div>
              </div>
            </article>
          </div>
        </div>
      </div>
    </div>`;
  },

  allProjectModals: (modals) => 
    Object.entries(modals).map(([id, data]) => Components.projectModal(id, data)).join('\n'),

  // ============ TIMELINE COMPONENT ============
  
  timelineItem: ({ date, title, role, points, content }) => {
    const bodyHtml = points 
      ? `${role}</br>${points.map(p => `→ ${p} </br></br>`).join('')}`
      : content;
    
    return `
      <div class="timeline-item">
        <span class="timeline-date">${date}</span>
        <h3 class="timeline-title">${title}</h3>
        <p class="timeline-text">${bodyHtml}</p>
      </div>`;
  },

  timeline: (items) => `
    <div class="timeline timeline-animated">
      ${items.map(Components.timelineItem).join('')}
    </div>`,

  // ============ TESTIMONIAL COMPONENT ============
  
  testimonialItem: ({ img, name, role, link, text }, index) => `
    <div class="carousel-item ${index === 0 ? 'active' : ''}" style="min-height: 244px">
      <div class="testimonial">
        <img src="${img}" class="testimonial-img" alt="${name}" />
        <div class="testimonial-body">
          <h3 class="testimonial-title">${name}</h3>
          <h4 class="testimonial-subtitle">
            ${role} ${link ? `— <a href="${link}" target="_blank">${link}</a>` : ''}
          </h4>
          <p class="testimonial-text">${text}</p>
        </div>
      </div>
    </div>`,

  testimonialIndicator: (_, index) => 
    `<li data-target="#carousel" data-slide-to="${index}" class="${index === 0 ? 'active' : ''}"></li>`,

  testimonialCarousel: (testimonials) => `
    <div id="carousel" class="carousel slide animation-translate animation-item-2" data-ride="carousel">
      <div class="carousel-inner">
        ${testimonials.map(Components.testimonialItem).join('')}
      </div>
      <ol class="carousel-indicators">
        ${testimonials.map(Components.testimonialIndicator).join('')}
      </ol>
      <a class="carousel-control-prev" href="#carousel" role="button" data-slide="prev">
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="sr-only">Previous</span>
      </a>
      <a class="carousel-control-next" href="#carousel" role="button" data-slide="next">
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="sr-only">Next</span>
      </a>
    </div>`,

  // ============ PROFILE MODAL COMPONENT ============
  
  profileCard: ({ href, icon, label }) => `
    <div class="col-12 col-sm-6 col-md-4 mb-4">
      <a href="${href}" target="_blank" class="card shadow-sm h-100">
        <div class="card-body d-flex flex-column align-items-center">
          <i class="fa ${icon} fa-3x mb-3"></i>
          <h4 class="card-title mb-0">${label}</h4>
        </div>
      </a>
    </div>`,

  profileModal: (id, title, profiles) => `
    <div id="${id}" class="modal fade" tabindex="-1" role="dialog" aria-labelledby="modal" style="display: none" aria-hidden="true">
      <div class="modal-dialog modal-dialog-centered modal-fluid">
        <div class="modal-content">
          <div class="modal-header">
            &nbsp;
            <button type="button" class="modal-close" data-dismiss="modal" aria-label="Close">
              <span class="d-none">×</span>
            </button>
          </div>
          <div class="modal-body">
            <h2 class="text-center mb-4">${title}</h2>
            <div class="row justify-content-center text-center">
              ${profiles.map(Components.profileCard).join('')}
            </div>
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

    // Render experiences
    const experiencesContainer = document.getElementById('experiences-container');
    if (experiencesContainer) {
      experiencesContainer.innerHTML = this.timeline(data.experiences);
    }

    // Render honors
    const honorsContainer = document.getElementById('honors-container');
    if (honorsContainer) {
      honorsContainer.innerHTML = data.honors.map(h => this.timeline([h])).join('');
    }

    // Render education
    const educationContainer = document.getElementById('education-container');
    if (educationContainer) {
      educationContainer.innerHTML = this.timeline(data.education);
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
