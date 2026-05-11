// Portfolio Script
console.log('Portfolio loading...');

// Boot Screen
const bootScreen = document.getElementById('boot-screen');
const loginScreen = document.getElementById('login-screen');
const desktop = document.getElementById('desktop');

if (bootScreen && loginScreen) {
    setTimeout(() => {
        bootScreen.classList.add('fade-out');
        setTimeout(() => {
            bootScreen.style.display = 'none';
            loginScreen.classList.remove('hidden');
        }, 500);
    }, 3000);
}

// Login
const signinBtn = document.getElementById('signin-btn');
if (signinBtn && loginScreen && desktop) {
    signinBtn.addEventListener('click', () => {
        loginScreen.classList.add('fade-out');
        setTimeout(() => {
            loginScreen.style.display = 'none';
            desktop.classList.remove('hidden');
        }, 500);
    });
}

// Clocks
function updateClock() {
    const now = new Date();
    const time = now.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' });
    const date = now.toLocaleDateString('en-US', { month: 'short', day: 'numeric' });
    const clockEl = document.getElementById('clock');
    if (clockEl) clockEl.textContent = `${time} ${date}`;
}

function updateLoginTime() {
    const now = new Date();
    const time = now.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', hour12: false });
    const loginTimeEl = document.getElementById('login-time');
    if (loginTimeEl) loginTimeEl.textContent = time;
}

updateClock();
updateLoginTime();
setInterval(updateClock, 1000);
setInterval(updateLoginTime, 1000);

// Window Management
let zIndex = 10;
const windowsContainer = document.getElementById('windows-container');
const taskbarApps = document.querySelector('.taskbar-apps');

const appContent = {
    about: {
        title: 'About Me',
        content: `
            <h2>Paul Joseph Kaka</h2>
            <p>Full Stack & Web3 Developer with 5 years of experience.</p>
            <br>
            <p><strong>Current Roles:</strong></p>
            <p>• CTO at Capita Dapps Bridge Limited (Feb 2026 - Present)</p>
            <p>• CTO at Thrixxy Technologies (2022 - Present)</p>
            <br>
            <p><strong>Email:</strong> Pauljoseph5000@gmail.com</p>
            <div style="margin-top: 16px; display: flex; gap: 12px;">
                <a href="https://github.com/Hydrax117" target="_blank" style="padding: 8px 16px; background: #24292e; color: white; text-decoration: none; border-radius: 6px;">GitHub</a>
                <a href="https://www.linkedin.com/in/paul-joseph-kaka-765217228/" target="_blank" style="padding: 8px 16px; background: #0077b5; color: white; text-decoration: none; border-radius: 6px;">LinkedIn</a>
            </div>
        `
    },
    projects: {
        title: 'Projects',
        content: `
            <h2>Featured Projects</h2>
            <div style="display: grid; gap: 20px; max-height: 450px; overflow-y: auto; padding-right: 8px;">
                <a href="https://chainpaye.com/" target="_blank" style="text-decoration: none; color: inherit;">
                    <div style="padding: 24px; background: linear-gradient(135deg, #25D366 0%, #128C7E 100%); color: white; border-radius: 12px; box-shadow: 0 4px 15px rgba(0,0,0,0.2); transition: transform 0.3s, box-shadow 0.3s; cursor: pointer;" onmouseover="this.style.transform='translateY(-4px)'; this.style.boxShadow='0 8px 25px rgba(0,0,0,0.3)'" onmouseout="this.style.transform='translateY(0)'; this.style.boxShadow='0 4px 15px rgba(0,0,0,0.2)'">
                        <div style="display: flex; align-items: center; gap: 12px; margin-bottom: 16px;">
                            <span style="font-size: 36px;">💬</span>
                            <div>
                                <h3 style="margin: 0; font-size: 22px;">ChainPaye</h3>
                                <span style="font-size: 12px; opacity: 0.9;">2024 - Present</span>
                            </div>
                        </div>
                        <p style="margin: 12px 0; line-height: 1.6;">WhatsApp bot built on WhatsApp Business API enabling seamless cross-border payments using Toronet blockchain. Send money, make payments, and manage finances directly through WhatsApp.</p>
                        <div style="display: flex; flex-wrap: wrap; gap: 8px; margin-top: 16px;">
                            <span style="font-size: 11px; padding: 4px 10px; background: rgba(255,255,255,0.25); border-radius: 12px;">WhatsApp Business API</span>
                            <span style="font-size: 11px; padding: 4px 10px; background: rgba(255,255,255,0.25); border-radius: 12px;">Toronet Blockchain</span>
                            <span style="font-size: 11px; padding: 4px 10px; background: rgba(255,255,255,0.25); border-radius: 12px;">Node.js</span>
                            <span style="font-size: 11px; padding: 4px 10px; background: rgba(255,255,255,0.25); border-radius: 12px;">Express.js</span>
                        </div>
                        <div style="margin-top: 16px; padding-top: 16px; border-top: 1px solid rgba(255,255,255,0.2);">
                            <strong>Key Achievements:</strong>
                            <ul style="margin: 8px 0; padding-left: 20px;">
                                <li>Enabled instant cross-border transactions</li>
                                <li>Integrated with Toronet blockchain</li>
                                <li>Built secure custodial wallet system</li>
                            </ul>
                        </div>
                    </div>
                </a>
                <a href="https://agri-finance-v2.vercel.app/" target="_blank" style="text-decoration: none; color: inherit;">
                    <div style="padding: 24px; background: linear-gradient(135deg, #56ab2f 0%, #a8e063 100%); color: white; border-radius: 12px; box-shadow: 0 4px 15px rgba(0,0,0,0.2); transition: transform 0.3s, box-shadow 0.3s; cursor: pointer;" onmouseover="this.style.transform='translateY(-4px)'; this.style.boxShadow='0 8px 25px rgba(0,0,0,0.3)'" onmouseout="this.style.transform='translateY(0)'; this.style.boxShadow='0 4px 15px rgba(0,0,0,0.2)'">
                        <div style="display: flex; align-items: center; gap: 12px; margin-bottom: 16px;">
                            <span style="font-size: 36px;">🌾</span>
                            <div>
                                <h3 style="margin: 0; font-size: 22px;">AgriLend</h3>
                                <span style="font-size: 12px; opacity: 0.9;">2023 - Present</span>
                            </div>
                        </div>
                        <p style="margin: 12px 0; line-height: 1.6;">Agri-FinTech platform connecting farmers with financial services. Empowering agricultural communities through accessible lending solutions and financial inclusion.</p>
                        <div style="display: flex; flex-wrap: wrap; gap: 8px; margin-top: 16px;">
                            <span style="font-size: 11px; padding: 4px 10px; background: rgba(255,255,255,0.25); border-radius: 12px;">React</span>
                            <span style="font-size: 11px; padding: 4px 10px; background: rgba(255,255,255,0.25); border-radius: 12px;">Node.js</span>
                            <span style="font-size: 11px; padding: 4px 10px; background: rgba(255,255,255,0.25); border-radius: 12px;">MongoDB</span>
                            <span style="font-size: 11px; padding: 4px 10px; background: rgba(255,255,255,0.25); border-radius: 12px;">Payment APIs</span>
                        </div>
                        <div style="margin-top: 16px; padding-top: 16px; border-top: 1px solid rgba(255,255,255,0.2);">
                            <strong>Key Achievements:</strong>
                            <ul style="margin: 8px 0; padding-left: 20px;">
                                <li>Connected 500+ farmers to financial services</li>
                                <li>Processed $100K+ in agricultural loans</li>
                                <li>Built automated credit scoring system</li>
                            </ul>
                        </div>
                    </div>
                </a>
                <a href="https://arena-x-self.vercel.app/" target="_blank" style="text-decoration: none; color: inherit;">
                    <div style="padding: 24px; background: linear-gradient(135deg, #f093fb 0%, #f5576c 100%); color: white; border-radius: 12px; box-shadow: 0 4px 15px rgba(0,0,0,0.2); transition: transform 0.3s, box-shadow 0.3s; cursor: pointer;" onmouseover="this.style.transform='translateY(-4px)'; this.style.boxShadow='0 8px 25px rgba(0,0,0,0.3)'" onmouseout="this.style.transform='translateY(0)'; this.style.boxShadow='0 4px 15px rgba(0,0,0,0.2)'">
                        <div style="display: flex; align-items: center; gap: 12px; margin-bottom: 16px;">
                            <span style="font-size: 36px;">🎮</span>
                            <div>
                                <h3 style="margin: 0; font-size: 22px;">ArenaX</h3>
                                <span style="font-size: 12px; opacity: 0.9;">2024 - Present</span>
                            </div>
                        </div>
                        <p style="margin: 12px 0; line-height: 1.6;">Competitive gaming platform with real-time spectator systems and mobile streaming. Next-gen esports experience with live tournaments and community features.</p>
                        <div style="display: flex; flex-wrap: wrap; gap: 8px; margin-top: 16px;">
                            <span style="font-size: 11px; padding: 4px 10px; background: rgba(255,255,255,0.25); border-radius: 12px;">React Native</span>
                            <span style="font-size: 11px; padding: 4px 10px; background: rgba(255,255,255,0.25); border-radius: 12px;">Expo</span>
                            <span style="font-size: 11px; padding: 4px 10px; background: rgba(255,255,255,0.25); border-radius: 12px;">WebRTC</span>
                            <span style="font-size: 11px; padding: 4px 10px; background: rgba(255,255,255,0.25); border-radius: 12px;">Socket.io</span>
                        </div>
                        <div style="margin-top: 16px; padding-top: 16px; border-top: 1px solid rgba(255,255,255,0.2);">
                            <strong>Key Achievements:</strong>
                            <ul style="margin: 8px 0; padding-left: 20px;">
                                <li>Built real-time spectator mode</li>
                                <li>Implemented mobile streaming</li>
                                <li>Hosted 50+ competitive tournaments</li>
                            </ul>
                        </div>
                    </div>
                </a>
            </div>
        `
    },
    skills: {
        title: 'Skills',
        content: `
            <h2>Technical Stack</h2>
            <div style="display: grid; gap: 12px; margin-top: 16px;">
                <div style="padding: 12px; background: #e3f2fd; border-left: 4px solid #2196f3; border-radius: 4px;">
                    <strong>Frontend:</strong> React, TypeScript, Next.js, Tailwind CSS
                </div>
                <div style="padding: 12px; background: #e8f5e9; border-left: 4px solid #4caf50; border-radius: 4px;">
                    <strong>Backend:</strong> Node.js, Express.js, MongoDB, Redis
                </div>
                <div style="padding: 12px; background: #e0f2f1; border-left: 4px solid #009688; border-radius: 4px;">
                    <strong>Blockchain:</strong> Solidity, Crypto Payments, Web3
                </div>
            </div>
        `
    },
    contact: {
        title: 'Contact',
        content: `
            <h2>Let's Connect</h2>
            <p style="color: #666; margin: 16px 0;">Send me a message and I'll get back to you within 24 hours.</p>
            
            <form id="contact-form" style="display: grid; gap: 16px; margin-top: 24px;">
                <div>
                    <label style="display: block; margin-bottom: 8px; font-weight: 500;">Name</label>
                    <input type="text" id="contact-name" required style="width: 100%; padding: 12px; border: 1px solid #ddd; border-radius: 6px; font-family: inherit; font-size: 14px;">
                </div>
                <div>
                    <label style="display: block; margin-bottom: 8px; font-weight: 500;">Email</label>
                    <input type="email" id="contact-email" required style="width: 100%; padding: 12px; border: 1px solid #ddd; border-radius: 6px; font-family: inherit; font-size: 14px;">
                </div>
                <div>
                    <label style="display: block; margin-bottom: 8px; font-weight: 500;">Message</label>
                    <textarea id="contact-message" required rows="5" style="width: 100%; padding: 12px; border: 1px solid #ddd; border-radius: 6px; resize: vertical; font-family: inherit; font-size: 14px;"></textarea>
                </div>
                <button type="submit" id="contact-submit" style="padding: 14px; background: #0078d4; color: white; border: none; border-radius: 6px; cursor: pointer; font-weight: 600; font-size: 15px; transition: background 0.2s;">
                    Send Message
                </button>
                <div id="contact-status" style="display: none; padding: 12px; border-radius: 6px; text-align: center;"></div>
            </form>
            
            <div style="margin-top: 32px; padding-top: 24px; border-top: 1px solid #ddd;">
                <h3 style="margin-bottom: 16px;">Other Ways to Reach Me</h3>
                <div style="display: grid; gap: 12px;">
                    <a href="https://github.com/Hydrax117" target="_blank" style="padding: 12px 16px; background: #24292e; color: white; text-decoration: none; border-radius: 8px; display: flex; align-items: center; gap: 12px; transition: transform 0.2s;" onmouseover="this.style.transform='translateX(4px)'" onmouseout="this.style.transform='translateX(0)'">
                        <span>📱</span> GitHub @Hydrax117
                    </a>
                    <a href="https://www.linkedin.com/in/paul-joseph-kaka-765217228/" target="_blank" style="padding: 12px 16px; background: #0077b5; color: white; text-decoration: none; border-radius: 8px; display: flex; align-items: center; gap: 12px; transition: transform 0.2s;" onmouseover="this.style.transform='translateX(4px)'" onmouseout="this.style.transform='translateX(0)'">
                        <span>💼</span> LinkedIn Profile
                    </a>
                    <a href="mailto:Pauljoseph5000@gmail.com" style="padding: 12px 16px; background: #ea4335; color: white; text-decoration: none; border-radius: 8px; display: flex; align-items: center; gap: 12px; transition: transform 0.2s;" onmouseover="this.style.transform='translateX(4px)'" onmouseout="this.style.transform='translateX(0)'">
                        <span>✉️</span> Pauljoseph5000@gmail.com
                    </a>
                </div>
            </div>
        `
    },
    resume: {
        title: 'Resume',
        content: `
            <h2>Download Resume</h2>
            <div style="margin-top: 24px; padding: 24px; background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); border-radius: 12px; color: white; text-align: center;">
                <h3>Paul Joseph Kaka - Resume</h3>
                <p>Full Stack & Web3 Developer</p>
                <a href="resume.pdf" download style="display: inline-block; padding: 12px 32px; background: white; color: #667eea; text-decoration: none; border-radius: 6px; font-weight: 600; margin-top: 16px;">Download PDF</a>
            </div>
        `
    },
    github: {
        title: 'GitHub Stats',
        content: `
            <h2>GitHub Activity</h2>
            <a href="https://github.com/Hydrax117" target="_blank" style="display: block; padding: 20px; background: #24292e; color: white; text-decoration: none; border-radius: 12px; margin-top: 24px;">
                <h3>@Hydrax117</h3>
                <p>Visit my GitHub profile</p>
            </a>
        `
    }
};

function createWindow(appName) {
    const app = appContent[appName];
    if (!app) return;
    
    const existingWindow = document.querySelector(`[data-window="${appName}"]`);
    if (existingWindow) {
        existingWindow.style.display = 'flex';
        bringToFront(existingWindow);
        return;
    }

    const window = document.createElement('div');
    window.className = 'window';
    window.dataset.window = appName;
    window.style.left = `${100 + Math.random() * 200}px`;
    window.style.top = `${50 + Math.random() * 100}px`;
    window.style.opacity = '0';
    window.style.transform = 'scale(0.9)';

    window.innerHTML = `
        <div class="window-header">
            <div class="window-title">${app.title}</div>
            <div class="window-controls">
                <div class="window-btn minimize"></div>
                <div class="window-btn maximize"></div>
                <div class="window-btn close"></div>
            </div>
        </div>
        <div class="window-content">${app.content}</div>
    `;

    windowsContainer.appendChild(window);
    
    // Animate window in
    setTimeout(() => {
        window.style.transition = 'opacity 0.3s ease, transform 0.3s ease';
        window.style.opacity = '1';
        window.style.transform = 'scale(1)';
    }, 10);
    
    // Make draggable
    makeDraggable(window);
    
    // Window controls
    window.querySelector('.close').addEventListener('click', () => {
        window.style.opacity = '0';
        window.style.transform = 'scale(0.9)';
        setTimeout(() => {
            window.remove();
            removeTaskbarApp(appName);
        }, 300);
    });
    
    window.querySelector('.minimize').addEventListener('click', () => {
        window.style.opacity = '0';
        window.style.transform = 'scale(0.9)';
        setTimeout(() => {
            window.style.display = 'none';
            window.style.opacity = '1';
            window.style.transform = 'scale(1)';
        }, 300);
    });
    
    window.querySelector('.maximize').addEventListener('click', () => {
        if (window.dataset.maximized === 'true') {
            window.style.width = window.dataset.originalWidth;
            window.style.height = window.dataset.originalHeight;
            window.style.left = window.dataset.originalLeft;
            window.style.top = window.dataset.originalTop;
            window.dataset.maximized = 'false';
        } else {
            window.dataset.originalWidth = window.style.width || 'auto';
            window.dataset.originalHeight = window.style.height || 'auto';
            window.dataset.originalLeft = window.style.left;
            window.dataset.originalTop = window.style.top;
            window.style.width = '100%';
            window.style.height = 'calc(100vh - 48px)';
            window.style.left = '0';
            window.style.top = '0';
            window.dataset.maximized = 'true';
        }
    });
    
    // Add to taskbar
    addTaskbarApp(appName, app.title);
    
    // Bring to front
    bringToFront(window);
}

function makeDraggable(window) {
    const header = window.querySelector('.window-header');
    let isDragging = false;
    let currentX, currentY, initialX, initialY;

    header.addEventListener('mousedown', startDrag);
    header.addEventListener('touchstart', startDrag);

    function startDrag(e) {
        if (e.target.classList.contains('window-btn')) return;
        if (window.dataset.maximized === 'true') return;
        
        isDragging = true;
        const event = e.type === 'touchstart' ? e.touches[0] : e;
        initialX = event.clientX - window.offsetLeft;
        initialY = event.clientY - window.offsetTop;
        
        bringToFront(window);
        header.style.cursor = 'grabbing';
    }

    document.addEventListener('mousemove', drag);
    document.addEventListener('touchmove', drag);

    function drag(e) {
        if (!isDragging) return;
        e.preventDefault();
        
        const event = e.type === 'touchmove' ? e.touches[0] : e;
        currentX = event.clientX - initialX;
        currentY = event.clientY - initialY;
        
        window.style.left = currentX + 'px';
        window.style.top = Math.max(0, currentY) + 'px';
    }

    document.addEventListener('mouseup', stopDrag);
    document.addEventListener('touchend', stopDrag);

    function stopDrag() {
        if (isDragging) {
            isDragging = false;
            header.style.cursor = 'grab';
        }
    }
}

function bringToFront(window) {
    document.querySelectorAll('.window').forEach(w => w.classList.remove('active'));
    window.classList.add('active');
    window.style.zIndex = ++zIndex;
}

function addTaskbarApp(appName, title) {
    const existingApp = document.querySelector(`.taskbar-app[data-app="${appName}"]`);
    if (existingApp) return;
    
    const taskbarApp = document.createElement('div');
    taskbarApp.className = 'taskbar-app';
    taskbarApp.dataset.app = appName;
    taskbarApp.textContent = title;
    
    taskbarApp.addEventListener('click', () => {
        const window = document.querySelector(`[data-window="${appName}"]`);
        if (window) {
            if (window.style.display === 'none') {
                window.style.display = 'flex';
                window.style.opacity = '0';
                window.style.transform = 'scale(0.9)';
                setTimeout(() => {
                    window.style.opacity = '1';
                    window.style.transform = 'scale(1)';
                }, 10);
            }
            bringToFront(window);
        }
    });
    
    taskbarApps.appendChild(taskbarApp);
}

function removeTaskbarApp(appName) {
    const taskbarApp = document.querySelector(`.taskbar-app[data-app="${appName}"]`);
    if (taskbarApp) taskbarApp.remove();
}

// Desktop icons - Single click to open
document.querySelectorAll('.icon').forEach(icon => {
    // Single click for desktop
    icon.addEventListener('click', () => {
        createWindow(icon.dataset.app);
    });
    
    // Single tap for mobile
    icon.addEventListener('touchend', (e) => {
        e.preventDefault();
        createWindow(icon.dataset.app);
    });
});

// Start menu
const startBtn = document.querySelector('.start-btn');
const startMenu = document.getElementById('start-menu');

if (startBtn && startMenu) {
    startBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        startMenu.classList.toggle('hidden');
    });

    document.addEventListener('click', () => {
        startMenu.classList.add('hidden');
    });

    document.querySelectorAll('.start-app').forEach(app => {
        app.addEventListener('click', () => {
            createWindow(app.dataset.app);
            startMenu.classList.add('hidden');
        });
    });
}

// Theme toggle
const themeToggle = document.getElementById('theme-toggle');
if (themeToggle) {
    themeToggle.addEventListener('click', () => {
        document.body.classList.toggle('dark-mode');
    });
}

// Context menu
const contextMenu = document.getElementById('context-menu');
if (desktop && contextMenu) {
    desktop.addEventListener('contextmenu', (e) => {
        e.preventDefault();
        contextMenu.style.left = e.clientX + 'px';
        contextMenu.style.top = e.clientY + 'px';
        contextMenu.classList.remove('hidden');
    });

    document.addEventListener('click', () => {
        contextMenu.classList.add('hidden');
    });

    document.querySelectorAll('.context-item').forEach(item => {
        item.addEventListener('click', () => {
            if (item.dataset.action === 'refresh') location.reload();
            if (item.dataset.action === 'theme' && themeToggle) themeToggle.click();
        });
    });
}

console.log('Portfolio loaded successfully!');


// Contact Form Handler with EmailJS
function initContactForm() {
    const form = document.getElementById('contact-form');
    if (!form) return;
    
    form.addEventListener('submit', async (e) => {
        e.preventDefault();
        
        const submitBtn = document.getElementById('contact-submit');
        const statusDiv = document.getElementById('contact-status');
        const name = document.getElementById('contact-name').value;
        const email = document.getElementById('contact-email').value;
        const message = document.getElementById('contact-message').value;
        
        // Disable button and show loading
        submitBtn.disabled = true;
        submitBtn.textContent = 'Sending...';
        submitBtn.style.background = '#666';
        
        try {
            // Using FormSubmit.co (free, no signup required)
            const response = await fetch('https://formsubmit.co/ajax/Pauljoseph5000@gmail.com', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                },
                body: JSON.stringify({
                    name: name,
                    email: email,
                    message: message,
                    _subject: `Portfolio Contact from ${name}`,
                    _template: 'table'
                })
            });
            
            if (response.ok) {
                statusDiv.style.display = 'block';
                statusDiv.style.background = '#d4edda';
                statusDiv.style.color = '#155724';
                statusDiv.textContent = `Thanks ${name}! Your message has been sent successfully. I'll get back to you soon!`;
                form.reset();
                
                // Show notification
                showNotification('Message Sent!', `Thanks ${name}! I'll respond within 24 hours.`);
            } else {
                throw new Error('Failed to send');
            }
        } catch (error) {
            statusDiv.style.display = 'block';
            statusDiv.style.background = '#f8d7da';
            statusDiv.style.color = '#721c24';
            statusDiv.textContent = 'Oops! Something went wrong. Please try emailing me directly at Pauljoseph5000@gmail.com';
        } finally {
            submitBtn.disabled = false;
            submitBtn.textContent = 'Send Message';
            submitBtn.style.background = '#0078d4';
            
            setTimeout(() => {
                statusDiv.style.display = 'none';
            }, 5000);
        }
    });
}

// Notification System
function showNotification(title, message) {
    const container = document.getElementById('notifications-container');
    if (!container) {
        const newContainer = document.createElement('div');
        newContainer.id = 'notifications-container';
        newContainer.style.cssText = 'position: fixed; bottom: 60px; right: 16px; z-index: 2000; display: flex; flex-direction: column; gap: 12px;';
        document.body.appendChild(newContainer);
    }
    
    const notification = document.createElement('div');
    notification.className = 'notification';
    notification.style.cssText = `
        background: white;
        border-radius: 8px;
        box-shadow: 0 4px 16px rgba(0,0,0,0.2);
        padding: 16px;
        min-width: 300px;
        max-width: 400px;
        transform: translateX(450px);
        transition: transform 0.3s ease;
    `;
    
    notification.innerHTML = `
        <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 8px;">
            <strong>${title}</strong>
            <button onclick="this.parentElement.parentElement.remove()" style="background: none; border: none; font-size: 20px; cursor: pointer; color: #666; padding: 0; width: 24px; height: 24px;">&times;</button>
        </div>
        <div style="color: #666; font-size: 14px;">${message}</div>
    `;
    
    document.getElementById('notifications-container').appendChild(notification);
    
    setTimeout(() => {
        notification.style.transform = 'translateX(0)';
    }, 10);
    
    setTimeout(() => {
        notification.style.transform = 'translateX(450px)';
        setTimeout(() => notification.remove(), 300);
    }, 5000);
}

// Initialize contact form when window opens
const originalCreateWindow = createWindow;
createWindow = function(appName) {
    originalCreateWindow(appName);
    if (appName === 'contact') {
        setTimeout(initContactForm, 100);
    }
};

// Show welcome notification
setTimeout(() => {
    if (desktop && !desktop.classList.contains('hidden')) {
        showNotification('Welcome!', 'Thanks for visiting my portfolio. Feel free to explore!');
    }
}, 1000);
