/* ==========================================================================
   Nandini Kalal - Architecture Portfolio Script
   Interactions, Animations, and Theme Management
   ========================================================================== */

// --- Project Data Store ---
const projectsData = {
    residence: {
        title: "RESIDENCE",
        category: "Academic Project<br><span style=\"font-size: 0.9em; opacity: 0.85;\">(MBM University)</span>",
        location: "Jodhpur, Rajasthan",
        duration: "1 Year (2024-2025)",
        role: "Intern Architect",
        description: "A modern residence in Jodhpur built around a central double-height atrium. The design focuses on bringing in natural light and creating an open, breathable living space. Clean lines, large windows, and a rich material palette of dark marble and fluted wood define the home's contemporary aesthetic.",
        tools: ["AutoCAD", "SketchUp", "Enscape", "Photoshop"],
        img: "assets/images/residence_cover.jpg",
        drawings: [
            "assets/images/residence_hq_1.png",
            "assets/images/residence_hq_2.png",
            "assets/images/residence_hq_3.png"
        ]
    },
    housing: {
        title: "HOUSING",
        category: "Academic Project<br><span style=\"font-size: 0.9em; opacity: 0.85;\">(MBM University)</span>",
        location: "Jodhpur, Rajasthan",
        duration: "4 Months (2025)",
        role: "Design Lead",
        description: "A modern multi-story residential housing project designed to address high-density urban requirements. Features a cluster of residential towers integrated with extensive green public parks, kids' play areas, and community spaces in the foreground, promoting social interaction and sustainable urban living.",
        tools: ["SketchUp", "V-Ray", "Photoshop"],
        img: "assets/images/housing_cover.jpg",
        drawings: [
            "assets/images/housing_hq_1.png",
            "assets/images/housing_hq_2.png",
            "assets/images/housing_hq_3.png",
            "assets/images/housing_hq_4.png"
        ]
    },
    vocational: {
        title: "VOCATIONAL CENTER",
        category: "Academic Project<br><span style=\"font-size: 0.9em; opacity: 0.85;\">(MBM University)</span>",
        location: "Jodhpur, Rajasthan",
        duration: "3 Months (2024)",
        role: "Individual Project",
        description: "Designed using regional materials like Jodhpur sandstone, this vocational center provides training spaces for rural artisans. The layout uses flat courtyard designs and shaded corridors to create energy-efficient spaces suited to local climatic extremes.",
        tools: ["AutoCAD", "SketchUp", "Enscape"],
        img: "assets/images/vocational_cover.jpg",
        drawings: [
            "assets/images/vocational_hq_1.png",
            "assets/images/vocational_hq_2.png",
            "assets/images/vocational_hq_3.png"
        ]
    },
    measure: {
        title: "MEASURE DRAWING",
        category: "Academic Project<br><span style=\"font-size: 0.9em; opacity: 0.85;\">(MBM University)</span>",
        location: "Jodhpur, Rajasthan",
        duration: "2 Months (2023)",
        role: "Documentation Officer",
        description: "A comprehensive measure drawing and documentation of a historic Rajasthani Haveli. Documented intricate stone carvings, wooden brackets, arched entrance portals, and traditional courtyard cooling layouts to preserve vernacular heritage knowledge.",
        tools: ["AutoCAD", "Canva", "MS Office"],
        img: "assets/images/measure_cover.jpg",
        drawings: [
            "assets/images/measure_hq_1.png"
        ]
    },
    office: {
        title: "OFFICE WORK",
        category: "Professional Work<br><span style=\"font-size: 0.9em; opacity: 0.85;\">(AYA Design Studio)</span>",
        location: "Jodhpur, Rajasthan",
        duration: "6 Months (2024)",
        role: "Interior Specialist",
        description: "A comprehensive compilation of professional architectural and interior assignments completed during my tenure at AYA Design Studio. This collection highlights the development of precise working drawings, effective space planning for contemporary corporate environments, technical detailing, and the generation of high-fidelity 3D visualizations to communicate design intent and materiality.",
        tools: ["SketchUp", "D5 Render", "Photoshop"],
        img: "assets/images/office_cover.jpg",
        drawings: [
            "assets/images/office_hq_1.png",
            "assets/images/office_hq_2.png",
            "assets/images/office_hq_3.png",
            "assets/images/office_hq_4.png"
        ]
    },
    internship: {
        title: "INTERNSHIP WORK",
        category: "Professional Work<br><span style=\"font-size: 0.9em; opacity: 0.85;\">(Squelette Design)</span>",
        location: "Ahmedabad, Gujarat",
        duration: "6 Months",
        role: "Intern Architect",
        description: "A 6-month professional internship at Squelette Design in Ahmedabad (Jul-Dec 2025). Responsibilities included preparing working drawings, interior layouts, detailing sheets, site measurements, and related design presentations. Coordinated with senior architects and site teams to facilitate smooth design translation and documentation.",
        tools: ["AutoCAD", "SketchUp"],
        img: "assets/images/internship_cover.jpg",
        drawings: [
            "assets/images/internship_hq_2.jpg",
            "assets/images/internship_hq_3.jpg",
            "assets/images/internship_hq_4.jpg",
            "assets/images/internship_hq_5.jpg",
            "assets/images/internship_hq_6.jpg",
            "assets/images/internship_hq_7.jpg",
            "assets/images/internship_hq_8.jpg",
            "assets/images/internship_hq_9.jpg",
            "assets/images/internship_hq_10.jpg",
            "assets/images/internship_hq_11.jpg",
            "assets/images/internship_hq_12.jpg",
            "assets/images/internship_hq_13.jpg",
            "assets/images/internship_hq_14.jpg",
            "assets/images/internship_hq_15.jpg"
        ]
    },
    detailing: {
        title: "DETAILING",
        category: "Academic Project<br><span style=\"font-size: 0.9em; opacity: 0.85;\">(MBM University)</span>",
        location: "Jodhpur, Rajasthan",
        duration: "6 Months (2023)",
        role: "Individual Project",
        description: "An academic project focused on architectural detailing and technical documentation. The work involved drafting precise centerline drawings, excavation drawings, and comprehensive working drawings to understand the practical aspects of building construction and site execution.",
        tools: ["AutoCAD", "MS Office"],
        img: "assets/images/detailing_cover.jpg",
        drawings: [
            "assets/images/detailing_hq_1.png",
            "assets/images/detailing_hq_2.png",
            "assets/images/detailing_hq_3.png"
        ]
    },
    competition: {
        title: "COMPETITION",
        category: "Competition Work<br><span style=\"font-size: 0.9em; opacity: 0.85;\">(NASA ANDC)</span>",
        location: "National Entry",
        duration: "3 Months (2022-2023)",
        role: "Team Design Lead",
        description: "A competitive design entry focusing on public plaza rejuvenation. Features a centralized visual landmark tree surrounded by terraced brick seating and social step-platforms, integrated with caravan/food truck parking zones and pedestrian-friendly paths.",
        tools: ["SketchUp", "D5 Render", "Canva"],
        img: "assets/images/competition_cover.jpg",
        drawings: [
            "assets/images/comp_hq_1.png",
            "assets/images/comp_hq_2.png",
            "assets/images/comp_hq_3.png",
            "assets/images/comp_hq_4.png",
            "assets/images/comp_hq_5.png",
            "assets/images/comp_hq_6.png",
            "assets/images/comp_hq_7.png"
        ]
    },
    miscellaneous: {
        title: "MISCELLANEOUS",
        category: "Miscellaneous<br><span style=\"font-size: 0.9em; opacity: 0.85;\">(Freelance Work)</span>",
        location: "Jodhpur, Rajasthan",
        duration: "4 Months (2025)",
        role: "Freelance Designer",
        description: "A curated collection of freelance design and creative work. This section of work includes designing detailed residential floor plans, producing high-quality architectural renders, and capturing interesting perspectives through architectural photography.",
        tools: ["AutoCAD", "SketchUp", "V-Ray", "Photoshop"],
        img: "assets/images/miscellaneous_cover.jpg",
        drawings: [
            "assets/images/miscellaneous_hq_1.png",
            "assets/images/miscellaneous_hq_2.png",
            "assets/images/miscellaneous_hq_3.png"
        ]
    }
};

const initPortfolio = () => {

    // ==========================================
    // 1. Theme Management (Forced Dark Mode)
    // ==========================================
    const rootHTML = document.documentElement;
    rootHTML.setAttribute('data-theme', 'dark');
    // Clean up any old localStorage preferences
    localStorage.removeItem('theme');

    // ==========================================
    // 2. Mobile Menu Toggle
    // ==========================================
    const mobileMenuBtn = document.getElementById('mobile-menu-btn');
    const mobileNavDrawer = document.getElementById('mobile-nav-drawer');
    const mobileLinks = document.querySelectorAll('.mobile-link');
    
    mobileMenuBtn.addEventListener('click', () => {
        mobileMenuBtn.classList.toggle('open');
        mobileNavDrawer.classList.toggle('open');
        
        // Prevent body scrolling when menu is open
        document.body.style.overflow = mobileNavDrawer.classList.contains('open') ? 'hidden' : '';
    });
    
    mobileLinks.forEach(link => {
        link.addEventListener('click', () => {
            mobileMenuBtn.classList.remove('open');
            mobileNavDrawer.classList.remove('open');
            document.body.style.overflow = '';
        });
    });

    // ==========================================
    // 3. Scroll Effects (Header & Progress Bar)
    // ==========================================
    const mainHeader = document.getElementById('main-header');
    const scrollProgress = document.getElementById('scroll-progress');
    const backToTopBtn = document.getElementById('back-to-top');
    
    window.addEventListener('scroll', () => {
        const scrollTop = window.scrollY;
        
        // Header scroll effect
        if (mainHeader) {
            if (scrollTop > 50) {
                mainHeader.classList.add('scrolled');
            } else {
                mainHeader.classList.remove('scrolled');
            }
        }
        
        // Scroll progress bar
        if (scrollProgress) {
            const docHeight = document.documentElement.scrollHeight - window.innerHeight;
            const scrollPercent = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
            scrollProgress.style.width = scrollPercent + '%';
        }
        
        // Back to Top button visibility
        if (backToTopBtn) {
            if (scrollTop > 400) {
                backToTopBtn.classList.add('visible');
            } else {
                backToTopBtn.classList.remove('visible');
            }
        }
    });

    // ==========================================
    // 4. Reveal on Scroll (Intersection Observer)
    // ==========================================
    const revealElements = document.querySelectorAll('[data-reveal]');
    
    // Initialize progress bars to 0% width for entrance load transition
    const progressFills = document.querySelectorAll('.progress-fill');
    progressFills.forEach(fill => {
        const targetWidth = fill.style.width || '0%';
        fill.setAttribute('data-target-width', targetWidth);
        fill.style.width = '0%';
    });
    
    if (revealElements.length > 0) {
        const revealObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('revealed');
                    
                    // Trigger progress bar animations if revealing software skills block
                    if (entry.target.classList.contains('skills-category-wrapper') || entry.target.classList.contains('skills-page-grid')) {
                        const fills = entry.target.querySelectorAll('.progress-fill');
                        fills.forEach((fill, index) => {
                            const target = fill.getAttribute('data-target-width');
                            setTimeout(() => {
                                fill.style.width = target;
                            }, 100 + (index * 250)); // Stagger trigger slower
                        });
                    }
                    
                    // Unobserve once revealed to keep layout performant
                    observer.unobserve(entry.target);
                }
            });
        }, {
            threshold: 0.15,
            rootMargin: '0px 0px -50px 0px'
        });
        
        revealElements.forEach(el => {
            revealObserver.observe(el);
        });
    }

    // ==========================================
    // 4b. Timeline Badge Pop Celebration on Scroll
    // ==========================================
    const timelineBadges = document.querySelectorAll('.timeline-badge');
    if (timelineBadges.length > 0) {
        const badgeObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    // Stagger the animation slightly based on badge position
                    const badge = entry.target;
                    const delay = 150; // ms delay after scroll into view
                    setTimeout(() => {
                        badge.classList.add('pop-celebrate');
                    }, delay);
                    observer.unobserve(badge);
                }
            });
        }, {
            threshold: 0.5,
            rootMargin: '0px 0px -30px 0px'
        });

        timelineBadges.forEach(badge => {
            badgeObserver.observe(badge);
        });
    }

    // ==========================================
    // 5. Portfolio Filtering
    // ==========================================
    const filterBtns = document.querySelectorAll('.filter-btn');
    const projectCards = document.querySelectorAll('.project-card');
    
    if (filterBtns.length > 0 && projectCards.length > 0) {
        // Staggered entry animation on load
        const animateCardsIn = (cards) => {
            cards.forEach((card, index) => {
                card.style.transition = 'opacity 0.85s cubic-bezier(0.34, 1.56, 0.64, 1), transform 0.85s cubic-bezier(0.34, 1.56, 0.64, 1), border-color 0.4s ease, box-shadow 0.4s ease';
                card.style.transitionDelay = `${index * 0.08}s`;
                card.style.opacity = '1';
                card.style.transform = 'translateY(0) scale(1)';
                
                // Reset transition delay after animation completes to keep hovers snappy
                setTimeout(() => {
                    card.style.transitionDelay = '';
                }, 850 + (index * 80));
            });
        };

        // Set initial state in JS as a fallback for cached CSS files
        projectCards.forEach(card => {
            card.style.opacity = '0';
            card.style.transform = 'translateY(50px) scale(0.88)';
        });

        // Trigger load animation
        setTimeout(() => {
            animateCardsIn(Array.from(projectCards));
        }, 150);

        filterBtns.forEach(btn => {
            btn.addEventListener('click', () => {
                // Update active button
                filterBtns.forEach(b => b.classList.remove('active'));
                btn.classList.add('active');
                
                const filterValue = btn.getAttribute('data-filter');
                const visibleCards = [];
                const hiddenCards = [];
                
                projectCards.forEach(card => {
                    const cardCategory = card.getAttribute('data-category');
                    if (filterValue === 'all' || filterValue === cardCategory) {
                        visibleCards.push(card);
                    } else {
                        hiddenCards.push(card);
                    }
                });
                
                // Hide inactive cards first
                hiddenCards.forEach(card => {
                    card.style.transition = 'opacity 0.4s cubic-bezier(0.165, 0.84, 0.44, 1), transform 0.4s cubic-bezier(0.165, 0.84, 0.44, 1)';
                    card.style.transitionDelay = '0s';
                    card.style.opacity = '0';
                    card.style.transform = 'translateY(25px) scale(0.95)';
                    setTimeout(() => {
                        card.style.display = 'none';
                    }, 400);
                });
                
                // Reveal active cards with stagger
                setTimeout(() => {
                    visibleCards.forEach(card => {
                        card.style.display = 'block';
                    });
                    // Cascade them in
                    animateCardsIn(visibleCards);
                }, hiddenCards.length > 0 ? 350 : 0); // Wait for hidden cards to slide down
            });
        });
    }

    // ==========================================
    // 6. Project Details Modal (Lightbox Popup)
    // ==========================================
    const modal = document.getElementById('project-modal');
    if (modal && projectCards.length > 0) {
        const modalCloseBtn = modal.querySelector('.modal-close-btn');
        const modalTitle = document.getElementById('modal-project-title');
        const modalCategory = document.getElementById('modal-project-category');
        const modalDesc = document.getElementById('modal-project-desc');
        const modalToolsList = document.getElementById('modal-tools-list');
        const modalToolsContainer = document.getElementById('modal-tools-container');
        
        projectCards.forEach(card => {
            card.addEventListener('click', () => {
                const projectId = card.getAttribute('data-project-id');
                const data = projectsData[projectId];
                
                if (data) {
                    // Populate Modal Data
                    if (modalTitle) modalTitle.textContent = data.title;
                    if (modalCategory) modalCategory.innerHTML = data.category;
                    if (modalDesc) modalDesc.textContent = data.description;
                    
                    // Tools
                    if (modalToolsList && modalToolsContainer) {
                        if (data.tools && data.tools.length > 0) {
                            modalToolsList.innerHTML = data.tools.map(tool => `<span class="tool-tag">${tool}</span>`).join('');
                            modalToolsContainer.style.display = 'block';
                        } else {
                            modalToolsContainer.style.display = 'none';
                        }
                    }

                    // Populate Images
                    const modalImg = document.getElementById('modal-project-img');
                    const modalImgLink = document.getElementById('modal-project-img-link');
                    const galleryContainer = document.getElementById('modal-drawings-container');
                    
                    if (modalImg) {
                        modalImg.src = data.img;
                        modalImg.alt = data.title;
                        
                        // Reset animation class to ensure it plays every time
                        modalImg.classList.remove('modal-img-anim');
                        void modalImg.offsetWidth; // Trigger reflow
                        modalImg.classList.add('modal-img-anim');
                        modalImg.style.animationDelay = '0.1s';
                    }
                    
                    if (modalImgLink) {
                        modalImgLink.href = data.img;
                    }
                    
                    // Populate Drawings/Schematic Layouts
                    if (galleryContainer) {
                        if (data.drawings && data.drawings.length > 0) {
                            galleryContainer.innerHTML = '';
                            data.drawings.forEach((dwg, index) => {
                                const dwgLink = document.createElement('a');
                                dwgLink.href = dwg;
                                dwgLink.target = '_blank';
                                dwgLink.className = 'drawing-box-real';
                                
                                // Calculate staggered delay for smooth cascade effect
                                const delay = 0.2 + (index * 0.15);
                                dwgLink.innerHTML = `<img src="${dwg}" alt="Drawing Sheet" class="modal-img-anim" style="max-width:100%; width:auto; margin:0 auto; height:auto; display:block; background-color:#ffffff; filter:contrast(1.02) saturate(1.05); animation-delay: ${delay}s;">`;
                                galleryContainer.appendChild(dwgLink);
                            });
                        } else {
                            galleryContainer.innerHTML = ''; // Empty if no extra drawings
                        }
                    }
                    
                    // Show Modal
                    modal.classList.add('open');
                    document.body.style.overflow = 'hidden'; // prevent background scrolling
                }
            });
        });
        
        function closeModal() {
            modal.classList.remove('open');
            document.body.style.overflow = '';
        }
        
        if (modalCloseBtn) {
            modalCloseBtn.addEventListener('click', closeModal);
        }
        
        // Close modal on click outside content
        modal.addEventListener('click', (e) => {
            if (e.target === modal) {
                closeModal();
            }
        });
        
        // Close modal on escape key
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && modal.classList.contains('open')) {
                closeModal();
            }
        });
    }

    // ==========================================
    // 7. Contact Form Handling (Mock Submission)
    // ==========================================
    const contactForm = document.getElementById('contact-form');
    const formFeedback = document.getElementById('form-feedback');
    
    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            
            // Show loading state
            const submitBtn = contactForm.querySelector('button[type="submit"]');
            const originalText = submitBtn.innerHTML;
            submitBtn.disabled = true;
            submitBtn.innerHTML = 'Sending... <i class="fa-solid fa-spinner fa-spin"></i>';
            
            // Submit via Fetch API to Web3Forms
            const formData = new FormData(contactForm);
            
            fetch(contactForm.action, {
                method: 'POST',
                body: formData,
                headers: {
                    'Accept': 'application/json'
                }
            })
            .then(response => response.json())
            .then(data => {
                submitBtn.disabled = false;
                submitBtn.innerHTML = originalText;
                
                if (data.success) {
                    if (formFeedback) {
                        formFeedback.className = 'form-feedback success';
                        formFeedback.textContent = 'Thank you! Your message has been sent successfully.';
                        formFeedback.style.display = 'block';
                    }
                    contactForm.reset();
                } else {
                    if (formFeedback) {
                        formFeedback.className = 'form-feedback error';
                        formFeedback.textContent = 'Oops! Something went wrong. Please try again.';
                        formFeedback.style.display = 'block';
                    }
                }
                
                // Hide feedback after 5 seconds
                setTimeout(() => {
                    if (formFeedback) formFeedback.style.display = 'none';
                }, 5000);
            })
            .catch(error => {
                submitBtn.disabled = false;
                submitBtn.innerHTML = originalText;
                if (formFeedback) {
                    formFeedback.className = 'form-feedback error';
                    formFeedback.textContent = 'Oops! There was a network problem. Please try again.';
                    formFeedback.style.display = 'block';
                }
                setTimeout(() => {
                    if (formFeedback) formFeedback.style.display = 'none';
                }, 5000);
            });
        });
    }

    // Handle resume download click warning
    const downloadResumeBtn = document.getElementById('download-resume-btn');
    if (downloadResumeBtn) {
        downloadResumeBtn.addEventListener('click', (e) => {
            e.preventDefault();
            alert("Portfolio Resume Download: You can replace this link with your actual PDF resume file path (e.g. assets/nandini_kalal_resume.pdf) once you place it in the assets folder!");
        });
    }

    // ==========================================
    // 8. Back to Top Button
    // ==========================================
    if (backToTopBtn) {
        backToTopBtn.addEventListener('click', () => {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    }

    // ==========================================
    // 9. Animated Counters
    // ==========================================
    const counterElements = document.querySelectorAll('.metric-num[data-count]');
    const metricsContainer = document.querySelector('.personal-metrics');
    let countersAnimated = false;

    if (counterElements.length > 0 && metricsContainer) {
        const counterObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting && !countersAnimated) {
                    countersAnimated = true;
                    counterElements.forEach(counter => {
                        const target = parseFloat(counter.getAttribute('data-count'));
                        const suffix = counter.getAttribute('data-suffix') || '';
                        const isDecimal = target % 1 !== 0;
                        const duration = 1800; // ms
                        const startTime = performance.now();

                        function updateCounter(currentTime) {
                            const elapsed = currentTime - startTime;
                            const progress = Math.min(elapsed / duration, 1);
                            // Ease-out cubic
                            const eased = 1 - Math.pow(1 - progress, 3);
                            const currentVal = eased * target;

                            if (isDecimal) {
                                counter.textContent = currentVal.toFixed(1) + suffix;
                            } else {
                                counter.textContent = Math.floor(currentVal) + suffix;
                            }

                            if (progress < 1) {
                                requestAnimationFrame(updateCounter);
                            } else {
                                // Ensure final value is exact
                                if (isDecimal) {
                                    counter.textContent = target.toFixed(1) + suffix;
                                } else {
                                    counter.textContent = target + suffix;
                                }
                            }
                        }
                        requestAnimationFrame(updateCounter);
                    });
                    counterObserver.disconnect();
                }
            });
        }, { threshold: 0.5 });

        counterObserver.observe(metricsContainer);
    }

    // ==========================================
    // 10. Vanilla Tilt 3D Effects
    // ==========================================
    if (typeof VanillaTilt !== 'undefined' && projectCards.length > 0) {
        VanillaTilt.init(document.querySelectorAll(".project-card"), {
            max: 5,
            speed: 400,
            glare: true,
            "max-glare": 0.1,
            scale: 1.02
        });
    }

    // ==========================================
    // 11. Premium Magic Animations (Custom Cursor, Magnetic Buttons, Spotlight, Parallax)
    // ==========================================
    
    // Custom Trailing Cursor Logic
    const cursorDot = document.getElementById('custom-cursor-dot');
    const cursorRing = document.getElementById('custom-cursor-ring');
    
    if (cursorDot && cursorRing) {
        let mouseX = 0, mouseY = 0;
        let ringX = 0, ringY = 0;
        let isMoving = false;
        
        // Track mouse position
        window.addEventListener('mousemove', (e) => {
            mouseX = e.clientX;
            mouseY = e.clientY;
            isMoving = true;
        });
        
        // Interpolate ring coordinates for lag trailing effect
        function updateCursor() {
            if (isMoving) {
                // Instantly position the dot with center translation
                cursorDot.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0) translate(-50%, -50%)`;
                
                // Lerp (Linear Interpolation) the ring position
                const lerpFactor = 0.15;
                ringX += (mouseX - ringX) * lerpFactor;
                ringY += (mouseY - ringY) * lerpFactor;
                
                cursorRing.style.transform = `translate3d(${ringX}px, ${ringY}px, 0) translate(-50%, -50%)`;
            }
            requestAnimationFrame(updateCursor);
        }
        requestAnimationFrame(updateCursor);
        
        // Cursor hover states via event delegation
        document.addEventListener('mouseover', (e) => {
            const target = e.target;
            if (target && (
                target.closest('a') || 
                target.closest('button') || 
                target.closest('.project-card') || 
                target.closest('.home-nav-card') || 
                target.closest('.logo') || 
                target.closest('.mobile-link') ||
                target.closest('#theme-toggle') ||
                target.closest('.filter-btn') ||
                target.closest('.drawing-box-real')
            )) {
                cursorDot.classList.add('cursor-hover');
                cursorRing.classList.add('cursor-hover');
            } else {
                cursorDot.classList.remove('cursor-hover');
                cursorRing.classList.remove('cursor-hover');
            }
        });
        
        // Hide custom cursor when mouse leaves the document window
        document.addEventListener('mouseleave', () => {
            cursorDot.style.opacity = '0';
            cursorRing.style.opacity = '0';
        });
        
        document.addEventListener('mouseenter', () => {
            cursorDot.style.opacity = '1';
            cursorRing.style.opacity = '1';
        });
    }

    // Magnetic Buttons Hover Effect
    const magneticBtns = document.querySelectorAll('.btn, #theme-toggle, .social-icon-link, .mobile-menu-btn');
    if (magneticBtns.length > 0) {
        magneticBtns.forEach(btn => {
            btn.addEventListener('mousemove', (e) => {
                const rect = btn.getBoundingClientRect();
                const x = e.clientX - rect.left - rect.width / 2;
                const y = e.clientY - rect.top - rect.height / 2;
                
                // Pull element 30% of offset distance
                btn.style.transform = `translate3d(${x * 0.3}px, ${y * 0.3}px, 0)`;
            });
            
            btn.addEventListener('mouseleave', () => {
                btn.style.transform = '';
            });
        });
    }

    // Spotlight Gradient Tracking on Cards
    const navCards = document.querySelectorAll('.home-nav-card');
    if (navCards.length > 0) {
        navCards.forEach(card => {
            card.addEventListener('mousemove', (e) => {
                const rect = card.getBoundingClientRect();
                const x = e.clientX - rect.left;
                const y = e.clientY - rect.top;
                
                card.style.setProperty('--mouse-x', `${x}px`);
                card.style.setProperty('--mouse-y', `${y}px`);
            });
        });
    }

    // 3D Architectural Parallax on Hero Section
    const heroSection = document.getElementById('home');
    const profileImg = document.querySelector('.profile-img');
    const profileFrame = document.querySelector('.profile-frame');
    const waves = document.querySelector('.architect-waves svg');
    
    if (heroSection && (profileImg || profileFrame || waves)) {
        heroSection.addEventListener('mousemove', (e) => {
            const width = window.innerWidth;
            const height = window.innerHeight;
            
            // Percentage from center (-0.5 to 0.5)
            const moveX = (e.clientX / width) - 0.5;
            const moveY = (e.clientY / height) - 0.5;
            
            // Move components in opposite offsets to create deep 3D separation
            if (profileImg) {
                profileImg.style.transform = `translate3d(${moveX * 18}px, ${moveY * 18}px, 0)`;
            }
            if (profileFrame) {
                profileFrame.style.transform = `translate3d(${moveX * -24}px, ${moveY * -24}px, 0)`;
            }
            if (waves) {
                waves.style.transform = `translate3d(${moveX * 32}px, ${moveY * 32}px, 0) scale3d(1.04, 1.04, 1)`;
            }
        });
        
        heroSection.addEventListener('mouseleave', () => {
            if (profileImg) profileImg.style.transform = '';
            if (profileFrame) profileFrame.style.transform = '';
            if (waves) waves.style.transform = '';
        });
    }

    // ==========================================
    // 12. 3D Achievements Carousel Controls
    // ==========================================
    const achievementsCarousel = document.querySelector('.achievements-3d-carousel');
    const prevArrow = document.querySelector('.slider-arrow.prev-arrow');
    const nextArrow = document.querySelector('.slider-arrow.next-arrow');

    if (achievementsCarousel && prevArrow && nextArrow) {
        const cards = Array.from(achievementsCarousel.querySelectorAll('.achievement-card'));
        const totalCards = cards.length;
        let currentIndex = 1; // Start at second card (Squelette Design in middle, AYA on left)

        // Scrollbar Support
        const scrollbar = document.getElementById('carousel-scrollbar');
        
        if (scrollbar) {
            scrollbar.max = totalCards - 1;
            scrollbar.addEventListener('input', (e) => {
                currentIndex = parseInt(e.target.value, 10);
                updateCarousel();
            });
        }

        const updateCarousel = () => {
            cards.forEach((card, index) => {
                // Clear old classes
                card.classList.remove('active-card', 'prev-card', 'next-card', 'hidden-card');
                
                const prevIndex = (currentIndex - 1 + totalCards) % totalCards;
                const nextIndex = (currentIndex + 1) % totalCards;

                if (index === currentIndex) {
                    card.classList.add('active-card');
                } else if (index === prevIndex) {
                    card.classList.add('prev-card');
                } else if (index === nextIndex) {
                    card.classList.add('next-card');
                } else {
                    card.classList.add('hidden-card');
                }
            });

            // We no longer disable arrows since it loops infinitely!
            prevArrow.disabled = false;
            nextArrow.disabled = false;

            // Sync scrollbar
            if (scrollbar) {
                scrollbar.value = currentIndex;
            }
        };

        // Arrow clicks (with wrapping)
        prevArrow.addEventListener('click', () => {
            currentIndex = (currentIndex - 1 + totalCards) % totalCards;
            updateCarousel();
        });

        nextArrow.addEventListener('click', () => {
            currentIndex = (currentIndex + 1) % totalCards;
            updateCarousel();
        });

        // Click on side cards to bring them to center
        cards.forEach((card, index) => {
            card.addEventListener('click', () => {
                if (card.classList.contains('prev-card') || card.classList.contains('next-card')) {
                    currentIndex = index;
                    updateCarousel();
                }
            });
        });

        // Touch/Swipe Support
        let touchStartX = 0;
        let touchEndX = 0;

        achievementsCarousel.addEventListener('touchstart', e => {
            touchStartX = e.changedTouches[0].screenX;
        }, { passive: true });

        achievementsCarousel.addEventListener('touchend', e => {
            touchEndX = e.changedTouches[0].screenX;
            handleSwipe();
        }, { passive: true });

        function handleSwipe() {
            const swipeThreshold = 50; // minimum distance to trigger swipe
            if (touchEndX < touchStartX - swipeThreshold) {
                // Swiped Left -> Go Next
                currentIndex = (currentIndex + 1) % totalCards;
                updateCarousel();
            }
            if (touchEndX > touchStartX + swipeThreshold) {
                // Swiped Right -> Go Prev
                currentIndex = (currentIndex - 1 + totalCards) % totalCards;
                updateCarousel();
            }
        }

        // Initialize first render
        updateCarousel();
    }

    // ==========================================
    // 13. Soul Reveal Profile Effect
    // ==========================================
    const soulContainer = document.getElementById('soul-reveal-container');
    
    if (soulContainer) {
        soulContainer.addEventListener('mousemove', (e) => {
            const rect = soulContainer.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            
            soulContainer.style.setProperty('--mask-x', `${x}px`);
            soulContainer.style.setProperty('--mask-y', `${y}px`);
        });

        soulContainer.addEventListener('mouseenter', () => {
            soulContainer.classList.add('is-hovering');
        });

        soulContainer.addEventListener('mouseleave', () => {
            soulContainer.classList.remove('is-hovering');
        });
    }

    // ==========================================
    // 14. Circular Mindmap Text Proximity Glow
    // ==========================================
    const mindmapContainer = document.querySelector('.strengths-diagram-container');
    if (mindmapContainer) {
        const glowElements = mindmapContainer.querySelectorAll('.glow-text');
        
        mindmapContainer.addEventListener('mousemove', (e) => {
            const rect = mindmapContainer.getBoundingClientRect();
            const mouseX = e.clientX;
            const mouseY = e.clientY;
            const maxDist = 220; // proximity threshold in pixels
            
            glowElements.forEach(el => {
                const elRect = el.getBoundingClientRect();
                const elX = elRect.left + elRect.width / 2;
                const elY = elRect.top + elRect.height / 2;
                
                const dist = Math.hypot(mouseX - elX, mouseY - elY);
                
                if (dist < maxDist) {
                    const intensity = (1 - (dist / maxDist)).toFixed(2);
                    const isDark = document.documentElement.getAttribute('data-theme') === 'dark';
                    
                    if (el.tagName === 'H3') {
                        // The central STRENGTHS text (merges mouse-proximity golden glow with protective background halos)
                        el.style.textShadow = `0 0 ${10 + intensity * 20}px var(--accent), 0 0 8px var(--bg-primary), 0 0 18px var(--bg-primary), 0 1px 2px rgba(0, 0, 0, 0.15)`;
                    } else {
                        // The outer nodes' headers and descriptions
                        el.style.textShadow = `0 0 ${5 + intensity * 15}px var(--accent)`;
                    }
                } else {
                    // Outside threshold, restore defaults
                    if (el.tagName === 'H3') {
                        el.style.textShadow = '0 0 8px var(--bg-primary), 0 0 18px var(--bg-primary), 0 1px 2px rgba(0, 0, 0, 0.15)';
                    } else {
                        el.style.textShadow = '';
                    }
                }
            });
        });
        
        mindmapContainer.addEventListener('mouseleave', () => {
            glowElements.forEach(el => {
                if (el.tagName === 'H3') {
                    el.style.textShadow = '0 0 8px var(--bg-primary), 0 0 18px var(--bg-primary), 0 1px 2px rgba(0, 0, 0, 0.15)';
                } else {
                    el.style.textShadow = '';
                }
            });
        });
    }

    // ==========================================
    // 15. Interactive Lock Screen (Contact Page)
    // ==========================================
    const lockScreen = document.getElementById('contact-lock-screen');
    const unlockBtn = document.getElementById('unlock-btn');
    
    if (lockScreen && unlockBtn) {
        // Prevent scrolling initially
        document.body.classList.add('is-locked');
        
        let isUnlocked = false;
        
        const triggerUnlock = () => {
            if (isUnlocked) return;
            isUnlocked = true;
            
            // Change icon to unlock
            const icon = unlockBtn.querySelector('i');
            if (icon) {
                icon.classList.remove('fa-lock');
                icon.classList.add('fa-lock-open');
            }
            
            // Stop pulse animation
            unlockBtn.style.animation = 'none';
            unlockBtn.style.backgroundColor = 'var(--accent)';
            unlockBtn.style.color = 'var(--bg-primary)';
            
            // Wait slightly for user to see the unlocked icon
            setTimeout(() => {
                lockScreen.classList.add('is-unlocked');
                document.body.classList.remove('is-locked');
                
                // Remove from DOM after animation completes so form is clickable
                setTimeout(() => {
                    lockScreen.style.display = 'none';
                }, 1200); // 1.2s matches CSS transition duration
            }, 400);
        };
        
        // Manual unlock on click
        unlockBtn.addEventListener('click', triggerUnlock);
        
        // Auto-unlock after 5 seconds if not clicked
        setTimeout(triggerUnlock, 5000);
    }

    // ==========================================
    // 15B. Studio Lights Interaction (Contact) [BACKUP]
    // ==========================================
    /*
    const studioLightsScreen = document.getElementById('studio-lights-screen');
    const studioSwitch = document.getElementById('studio-switch');

    if (studioLightsScreen && studioSwitch) {
        document.body.classList.add('is-locked');
        
        studioSwitch.addEventListener('change', (e) => {
            if (e.target.checked) {
                setTimeout(() => {
                    studioLightsScreen.classList.add('lights-on');
                    document.body.classList.remove('is-locked');
                    
                    setTimeout(() => {
                        studioLightsScreen.style.display = 'none';
                    }, 1000);
                }, 300);
            }
        });
    }
    */

    // ==========================================
    // 16. Page Transition Logic
    // ==========================================
    const transitionOverlay = document.querySelector('.page-transition-overlay');
    
    if (transitionOverlay) {
        // Initial page load reveal (fade out overlay)
        // A slight delay helps prevent FOUC (flash of unstyled content)
        setTimeout(() => {
            transitionOverlay.classList.add('is-leaving');
        }, 100);

        // Intercept internal links for exit animation
        const allLinks = document.querySelectorAll('a');
        
        allLinks.forEach(link => {
            link.addEventListener('click', (e) => {
                const targetHref = link.getAttribute('href');
                
                // Only intercept local HTML links
                if (targetHref && targetHref.endsWith('.html')) {
                    e.preventDefault();
                    
                    // Slide the dark overlay back in
                    transitionOverlay.classList.remove('is-leaving');
                    transitionOverlay.classList.add('is-active');
                    
                    // Wait for the slide animation (0.6s) before navigating
                    setTimeout(() => {
                        window.location.href = targetHref;
                    }, 600);
                }
            });
        });
    }
};

if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initPortfolio);
} else {
    initPortfolio();
}
