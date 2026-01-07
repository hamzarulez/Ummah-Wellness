import './style.css'

// App state
const state = {
    selectedDate: null,
    selectedTime: null,
    currentMonth: new Date().getMonth(),
    currentYear: new Date().getFullYear()
};

// Available time slots
const timeSlots = ['9:00 AM', '10:00 AM', '11:00 AM', '2:00 PM', '3:00 PM', '4:00 PM'];

// Month names
const monthNames = ['January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'];

// Render the entire app
function renderApp() {
    const app = document.querySelector('#app');
    app.innerHTML = `
    <!-- Header -->
    <header>
        <div class="container">
            <nav class="navbar">
                <div class="logo">
                    <i class="fas fa-hands-helping logo-icon"></i>
                    <span class="logo-text">Ummah Wellness</span>
                </div>
                <div class="nav-links" id="navLinks">
                    <a href="#services">Services</a>
                    <a href="#about">About</a>
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
            <div class="hero-content">
                <h1>Your Path to Inner Peace Begins Here</h1>
                <p>Professional therapy services rooted in Islamic principles and modern psychological practices. Find healing, hope, and harmony.</p>
                <div class="hero-buttons">
                    <button class="cta-button" id="heroBookBtn">Schedule Consultation</button>
                    <button class="secondary-button" id="learnMoreBtn">Learn More</button>
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
                    <span class="service-link">Learn More <i class="fas fa-arrow-right"></i></span>
                </div>
                <div class="service-card">
                    <div class="service-icon">
                        <i class="fas fa-heart"></i>
                    </div>
                    <h3>Couples Counseling</h3>
                    <p>Strengthen your relationship through improved communication and understanding within Islamic marital principles.</p>
                    <span class="service-link">Learn More <i class="fas fa-arrow-right"></i></span>
                </div>
                <div class="service-card">
                    <div class="service-icon">
                        <i class="fas fa-users"></i>
                    </div>
                    <h3>Family Therapy</h3>
                    <p>Address family dynamics and conflicts while nurturing stronger bonds and healthier relationships.</p>
                    <span class="service-link">Learn More <i class="fas fa-arrow-right"></i></span>
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
                <div class="calendar-container">
                    <div class="calendar-header">
                        <h3 id="calendarTitle">${monthNames[state.currentMonth]} ${state.currentYear}</h3>
                        <div class="calendar-nav">
                            <button id="prevMonth"><i class="fas fa-chevron-left"></i></button>
                            <button id="nextMonth"><i class="fas fa-chevron-right"></i></button>
                        </div>
                    </div>
                    <div class="calendar-weekdays">
                        <div>Sun</div>
                        <div>Mon</div>
                        <div>Tue</div>
                        <div>Wed</div>
                        <div>Thu</div>
                        <div>Fri</div>
                        <div>Sat</div>
                    </div>
                    <div class="calendar-days" id="calendarDays">
                        ${generateCalendarDays()}
                    </div>
                    <div class="time-slots">
                        <h4>Available Time Slots</h4>
                        <div class="slots-container" id="timeSlots">
                            ${timeSlots.map(time => `
                                <div class="time-slot ${state.selectedTime === time ? 'selected' : ''}" data-time="${time}">
                                    ${time}
                                </div>
                            `).join('')}
                        </div>
                    </div>
                    <div class="booking-form">
                        <h4>Your Information</h4>
                        <div class="form-group">
                            <label for="name">Full Name</label>
                            <input type="text" id="name" placeholder="Enter your full name">
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
                                <option value="individual">Individual Therapy</option>
                                <option value="couples">Couples Counseling</option>
                                <option value="family">Family Therapy</option>
                            </select>
                        </div>
                        <button class="cta-button" id="submitBooking" style="width: 100%;">Confirm Booking</button>
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
                    <div class="social-links">
                        <a href="#"><i class="fab fa-facebook-f"></i></a>
                        <a href="#"><i class="fab fa-instagram"></i></a>
                        <a href="#"><i class="fab fa-twitter"></i></a>
                        <a href="#"><i class="fab fa-linkedin-in"></i></a>
                    </div>
                </div>
                <div class="footer-column">
                    <h3>Quick Links</h3>
                    <ul class="footer-links">
                        <li><a href="#services">Our Services</a></li>
                        <li><a href="#about">About Us</a></li>
                        <li><a href="#booking">Book Session</a></li>
                        <li><a href="#contact">Contact</a></li>
                    </ul>
                </div>
                <div class="footer-column">
                    <h3>Services</h3>
                    <ul class="footer-links">
                        <li><a>Individual Therapy</a></li>
                        <li><a>Couples Counseling</a></li>
                        <li><a>Family Therapy</a></li>
                        <li><a>Group Sessions</a></li>
                    </ul>
                </div>
                <div class="footer-column">
                    <h3>Contact</h3>
                    <ul class="footer-links">
                        <li><a><i class="fas fa-envelope" style="margin-right: 10px;"></i>info@ummahwellness.com</a></li>
                        <li><a><i class="fas fa-phone" style="margin-right: 10px;"></i>(555) 123-4567</a></li>
                        <li><a><i class="fas fa-map-marker-alt" style="margin-right: 10px;"></i>123 Wellness St, City</a></li>
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
            <h3>Booking Confirmed!</h3>
            <p id="modalMessage">Thank you for scheduling your appointment. We'll send you a confirmation email shortly.</p>
            <button class="cta-button" id="modalCloseBtn">Close</button>
        </div>
    </div>
    `;

    attachEventListeners();
}

// Generate calendar days
function generateCalendarDays() {
    const firstDay = new Date(state.currentYear, state.currentMonth, 1).getDay();
    const daysInMonth = new Date(state.currentYear, state.currentMonth + 1, 0).getDate();
    const today = new Date();
    
    let html = '';
    
    // Empty cells for days before the first of the month
    for (let i = 0; i < firstDay; i++) {
        html += '<div></div>';
    }
    
    // Generate days
    for (let day = 1; day <= daysInMonth; day++) {
        const date = new Date(state.currentYear, state.currentMonth, day);
        const isSelected = state.selectedDate && 
            state.selectedDate.getDate() === day && 
            state.selectedDate.getMonth() === state.currentMonth &&
            state.selectedDate.getFullYear() === state.currentYear;
        const isPast = date < new Date(today.getFullYear(), today.getMonth(), today.getDate());
        const isAvailable = !isPast && day % 3 !== 0; // Sample availability logic
        
        let className = '';
        if (isSelected) className = 'selected';
        else if (isAvailable && !isPast) className = 'available';
        
        html += `<div class="${className}" data-day="${day}" ${isPast ? 'style="opacity: 0.3; cursor: not-allowed;"' : ''}>${day}</div>`;
    }
    
    return html;
}

// Attach event listeners
function attachEventListeners() {
    // Mobile menu toggle
    const mobileMenu = document.getElementById('mobileMenu');
    const navLinks = document.getElementById('navLinks');
    
    mobileMenu?.addEventListener('click', () => {
        navLinks.classList.toggle('active');
    });

    // Calendar navigation
    document.getElementById('prevMonth')?.addEventListener('click', () => {
        state.currentMonth--;
        if (state.currentMonth < 0) {
            state.currentMonth = 11;
            state.currentYear--;
        }
        updateCalendar();
    });

    document.getElementById('nextMonth')?.addEventListener('click', () => {
        state.currentMonth++;
        if (state.currentMonth > 11) {
            state.currentMonth = 0;
            state.currentYear++;
        }
        updateCalendar();
    });

    // Calendar day selection
    document.getElementById('calendarDays')?.addEventListener('click', (e) => {
        const day = e.target.dataset.day;
        if (day && !e.target.style.opacity) {
            state.selectedDate = new Date(state.currentYear, state.currentMonth, parseInt(day));
            updateCalendar();
        }
    });

    // Time slot selection
    document.getElementById('timeSlots')?.addEventListener('click', (e) => {
        const timeSlot = e.target.closest('.time-slot');
        if (timeSlot) {
            state.selectedTime = timeSlot.dataset.time;
            document.querySelectorAll('.time-slot').forEach(slot => slot.classList.remove('selected'));
            timeSlot.classList.add('selected');
        }
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

// Update calendar display
function updateCalendar() {
    const calendarTitle = document.getElementById('calendarTitle');
    const calendarDays = document.getElementById('calendarDays');
    
    if (calendarTitle) {
        calendarTitle.textContent = `${monthNames[state.currentMonth]} ${state.currentYear}`;
    }
    if (calendarDays) {
        calendarDays.innerHTML = generateCalendarDays();
    }
}

// Handle booking submission
function handleBookingSubmit() {
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const service = document.getElementById('service').value;

    if (!name || !email || !phone || !service) {
        alert('Please fill in all fields');
        return;
    }

    if (!state.selectedDate) {
        alert('Please select a date');
        return;
    }

    if (!state.selectedTime) {
        alert('Please select a time slot');
        return;
    }

    // Show success modal
    const modal = document.getElementById('successModal');
    const message = document.getElementById('modalMessage');
    
    const formattedDate = state.selectedDate.toLocaleDateString('en-US', { 
        weekday: 'long', 
        year: 'numeric', 
        month: 'long', 
        day: 'numeric' 
    });
    
    message.innerHTML = `
        Thank you, <strong>${name}</strong>! Your appointment has been scheduled for:<br><br>
        <strong>${formattedDate} at ${state.selectedTime}</strong><br><br>
        A confirmation email will be sent to <strong>${email}</strong>.
    `;
    
    modal.style.display = 'flex';

    // Reset form
    document.getElementById('name').value = '';
    document.getElementById('email').value = '';
    document.getElementById('phone').value = '';
    document.getElementById('service').value = '';
    state.selectedDate = null;
    state.selectedTime = null;
    updateCalendar();
    document.querySelectorAll('.time-slot').forEach(slot => slot.classList.remove('selected'));
}

// Initialize the app
renderApp();
