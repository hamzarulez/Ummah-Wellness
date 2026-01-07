import './style.css'

// Render the entire app
function renderApp() {
    const app = document.querySelector('#app');
    app.innerHTML = `
    <!-- Header -->
    <header>
        <div class="container">
            <nav class="navbar">
                <div class="logo">
                    <img src="/UW_Logo.png" alt="Ummah Wellness" class="logo-img">
                    <span class="logo-text">Ummah Wellness</span>
                </div>
                <div class="nav-links" id="navLinks">
                    <a href="#services">Services</a>
                    <a href="#booking">Book Session</a>
                    <a href="#contact">Contact</a>
                </div>
                <button class="cta-button" id="headerBookBtn">Book Now</button>
                <div class="mobile-menu" id="mobileMenu">
                    <i class="fas fa-bars"></i>
                </div>
            </nav>
        </div>
    </header>

    <!-- Hero Section -->
    <section class="hero">
        <div class="floating-shapes">
            <div class="shape shape-1"></div>
            <div class="shape shape-2"></div>
            <div class="shape shape-3"></div>
        </div>
        <div class="container">
            <div class="hero-wrapper">
                <div class="hero-content">
                    <h1>Your Path to Inner Peace Begins Here</h1>
                    <p>Rooted in Islamic psychology, Ummah Wellness supports healing of the Qalb, regulation of the Nafs, and balance of the Ruh, integrating faith with emotional and behavioral well being of fellow Muslims</p>
                    <div class="hero-buttons">
                        <button class="cta-button" id="heroBookBtn">Schedule Consultation</button>
                        <button class="secondary-button" id="learnMoreBtn">Learn More</button>
                    </div>
                </div>
                <div class="hero-logo">
                    <img src="/UW_Logo.png" alt="Ummah Wellness" class="hero-logo-img">
                </div>
            </div>
        </div>
    </section>

    <!-- Services Section -->
    <section class="section" id="services">
        <div class="container">
            <div class="section-title">
                <h2>Our Services</h2>
                <p>Comprehensive mental health support tailored to your needs, combining evidence-based therapies with spiritual guidance.</p>
            </div>
            <div class="services-grid">
                <div class="service-card">
                    <div class="service-icon">
                        <i class="fas fa-user-friends"></i>
                    </div>
                    <h3>Individual Therapy</h3>
                    <p>One-on-one sessions focused on your personal growth, mental health challenges, and spiritual well-being.</p>
                </div>
                <div class="service-card">
                    <div class="service-icon">
                        <i class="fas fa-heart"></i>
                    </div>
                    <h3>Couples Counseling</h3>
                    <p>Strengthen your relationship through improved communication and understanding within Islamic marital principles.</p>
                </div>
                <div class="service-card">
                    <div class="service-icon">
                        <i class="fas fa-users"></i>
                    </div>
                    <h3>Family Therapy</h3>
                    <p>Address family dynamics and conflicts while nurturing stronger bonds and healthier relationships.</p>
                </div>
            </div>
        </div>
    </section>

    <!-- Booking Section -->
    <section class="section booking" id="booking">
        <div class="container">
            <div class="section-title">
                <h2>Book Your Session</h2>
                <p>Take the first step towards healing. Schedule a confidential consultation with our experienced therapists.</p>
            </div>
            <div class="booking-container">
                <div class="booking-info">
                    <h3>Why Choose Us?</h3>
                    <p>Our therapists understand the unique challenges faced by the Muslim community and provide culturally sensitive care.</p>
                    <div class="booking-features">
                        <div class="feature">
                            <i class="fas fa-check-circle"></i>
                            <span>Licensed and experienced therapists</span>
                        </div>
                        <div class="feature">
                            <i class="fas fa-check-circle"></i>
                            <span>Culturally sensitive approach</span>
                        </div>
                        <div class="feature">
                            <i class="fas fa-check-circle"></i>
                            <span>Flexible scheduling options</span>
                        </div>
                        <div class="feature">
                            <i class="fas fa-check-circle"></i>
                            <span>Online & in-person sessions</span>
                        </div>
                        <div class="feature">
                            <i class="fas fa-check-circle"></i>
                            <span>Confidential and secure</span>
                        </div>
                    </div>
                </div>
                <div class="form-container">
                    <div class="booking-form">
                        <h4>Request a Consultation</h4>
                        <div class="form-row">
                            <div class="form-group">
                                <label for="firstName">First Name</label>
                                <input type="text" id="firstName" placeholder="Enter your first name">
                            </div>
                            <div class="form-group">
                                <label for="lastName">Last Name</label>
                                <input type="text" id="lastName" placeholder="Enter your last name">
                            </div>
                        </div>
                        <div class="form-group">
                            <label for="email">Email Address</label>
                            <input type="email" id="email" placeholder="Enter your email">
                        </div>
                        <div class="form-group">
                            <label for="phone">Phone Number</label>
                            <input type="tel" id="phone" placeholder="Enter your phone number">
                        </div>
                        <div class="form-group">
                            <label for="service">Service Type</label>
                            <select id="service">
                                <option value="">Select a service</option>
                                <option value="Individual Therapy">Individual Therapy</option>
                                <option value="Couples Counseling">Couples Counseling</option>
                                <option value="Family Therapy">Family Therapy</option>
                            </select>
                        </div>
                        <div class="form-group">
                            <label for="message">Message (Optional)</label>
                            <textarea id="message" rows="4" placeholder="Tell us briefly about what you're looking for help with..."></textarea>
                        </div>
                        <button class="cta-button" id="submitBooking" style="width: 100%;">Send Email</button>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- Footer -->
    <footer id="contact">
        <div class="container">
            <div class="footer-content">
                <div class="footer-column">
                    <h3>Ummah Wellness</h3>
                    <p style="color: rgba(255,255,255,0.8); margin-bottom: 20px;">Professional therapy services for the Muslim community. Healing through understanding.</p>
                </div>
                <div class="footer-column">
                    <h3>Quick Links</h3>
                    <ul class="footer-links">
                        <li><a href="#services">Our Services</a></li>
                        <li><a href="#booking">Book Session</a></li>
                        <li><a href="#contact">Contact</a></li>
                    </ul>
                </div>
                <div class="footer-column">
                    <h3>Services</h3>
                    <ul class="footer-links footer-links-static">
                        <li><span>Individual Therapy</span></li>
                        <li><span>Couples Counseling</span></li>
                        <li><span>Family Therapy</span></li>
                        <li><span>Group Sessions</span></li>
                    </ul>
                </div>
                <div class="footer-column">
                    <h3>Contact</h3>
                    <ul class="footer-links">
                        <li><a href="mailto:ummahwellness1@gmail.com" class="email-link"><i class="fas fa-envelope"></i><span>ummahwellness1@gmail.com</span></a></li>
                    </ul>
                </div>
            </div>
            <div class="copyright">
                <p>&copy; ${new Date().getFullYear()} Ummah Wellness. All rights reserved.</p>
            </div>
        </div>
    </footer>

    <!-- Success Modal -->
    <div class="modal" id="successModal">
        <div class="modal-content">
            <span class="modal-close" id="modalClose">&times;</span>
            <h3>Request Sent!</h3>
            <p id="modalMessage">Thank you for reaching out. We'll get back to you shortly.</p>
            <button class="cta-button" id="modalCloseBtn">Close</button>
        </div>
    </div>
    `;

    attachEventListeners();
}

// Attach event listeners
function attachEventListeners() {
    // Mobile menu toggle
    const mobileMenu = document.getElementById('mobileMenu');
    const navLinks = document.getElementById('navLinks');

    mobileMenu?.addEventListener('click', () => {
        navLinks.classList.toggle('active');
    });

    // Book now buttons
    ['headerBookBtn', 'heroBookBtn'].forEach(id => {
        document.getElementById(id)?.addEventListener('click', () => {
            document.getElementById('booking')?.scrollIntoView({ behavior: 'smooth' });
        });
    });

    // Learn more button
    document.getElementById('learnMoreBtn')?.addEventListener('click', () => {
        document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' });
    });

    // Submit booking
    document.getElementById('submitBooking')?.addEventListener('click', handleBookingSubmit);

    // Modal close
    ['modalClose', 'modalCloseBtn'].forEach(id => {
        document.getElementById(id)?.addEventListener('click', () => {
            document.getElementById('successModal').style.display = 'none';
        });
    });

    // Close modal on background click
    document.getElementById('successModal')?.addEventListener('click', (e) => {
        if (e.target.id === 'successModal') {
            e.target.style.display = 'none';
        }
    });

    // Smooth scrolling for nav links
    document.querySelectorAll('a[href^="#"]').forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const target = document.querySelector(link.getAttribute('href'));
            if (target) {
                target.scrollIntoView({ behavior: 'smooth' });
                navLinks.classList.remove('active');
            }
        });
    });
}

// Handle booking submission
function handleBookingSubmit() {
    const firstName = document.getElementById('firstName').value.trim();
    const lastName = document.getElementById('lastName').value.trim();
    const email = document.getElementById('email').value.trim();
    const phone = document.getElementById('phone').value.trim();
    const service = document.getElementById('service').value;
    const message = document.getElementById('message').value.trim();

    // Validation
    if (!firstName || !lastName || !email || !phone || !service) {
        alert('Please fill in all required fields');
        return;
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        alert('Please enter a valid email address');
        return;
    }

    // Compose email
    const subject = encodeURIComponent(`Consultation Request from ${firstName} ${lastName}`);
    const body = encodeURIComponent(
        `New consultation request from Ummah Wellness website:

Name: ${firstName} ${lastName}
Email: ${email}
Phone: ${phone}
Service: ${service}

Message:
${message || 'No message provided'}

---
This request was submitted via the Ummah Wellness website.`
    );

    // Open email client
    window.location.href = `mailto:ummahwellness1@gmail.com?subject=${subject}&body=${body}`;

    // Show success modal
    const modal = document.getElementById('successModal');
    const modalMessage = document.getElementById('modalMessage');

    modalMessage.innerHTML = `
        Thank you, <strong>${firstName}</strong>! Your email client should open with your request.<br><br>
        If it doesn't open automatically, please email us directly at <strong>ummahwellness1@gmail.com</strong>
    `;

    modal.style.display = 'flex';

    // Reset form
    document.getElementById('firstName').value = '';
    document.getElementById('lastName').value = '';
    document.getElementById('email').value = '';
    document.getElementById('phone').value = '';
    document.getElementById('service').value = '';
    document.getElementById('message').value = '';
}

// Initialize the app
renderApp();
