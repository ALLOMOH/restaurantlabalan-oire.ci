// --- Navbar Scroll Effect ---
        const navbar = document.getElementById('navbar');
        window.addEventListener('scroll', () => {
            if (window.scrollY > 50) {
                navbar.classList.add('bg-neutral-950/95', 'backdrop-blur-sm', 'border-b', 'border-white/5');
            } else {
                navbar.classList.remove('bg-neutral-950/95', 'backdrop-blur-sm', 'border-b', 'border-white/5');
            }
        });
        
        // --- Mobile Menu Toggle ---
        const menuBtn = document.getElementById('menuBtn');
        const mobileMenu = document.getElementById('mobileMenu');
        let menuOpen = false;
        
        menuBtn.addEventListener('click', () => {
            menuOpen = !menuOpen;
            mobileMenu.classList.toggle('opacity-0', !menuOpen);
            mobileMenu.classList.toggle('pointer-events-none', !menuOpen);
            mobileMenu.classList.toggle('opacity-100', menuOpen);
        });
        
        mobileMenu.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                menuOpen = false;
                mobileMenu.classList.add('opacity-0', 'pointer-events-none');
                mobileMenu.classList.remove('opacity-100');
            });
        });

        // --- Parallax ---
        window.addEventListener('scroll', () => {
            const parallaxBg = document.querySelector('.parallax-bg');
            if (parallaxBg && window.scrollY < window.innerHeight) {
                parallaxBg.style.transform = `translateY(${window.scrollY * 0.4}px) scale(1.1)`;
            }
        });

        // --- Interactive Menu Filter ---
        const menuTabs = document.querySelectorAll('.menu-tab');
        const menuItems = document.querySelectorAll('.menu-item-card');

        menuTabs.forEach(tab => {
            tab.addEventListener('click', () => {
                // Update active tab style
                menuTabs.forEach(t => {
                    t.classList.remove('border-gold-500', 'text-gold-400', 'bg-gold-500/10');
                    t.classList.add('border-white/20', 'text-neutral-400');
                });
                tab.classList.remove('border-white/20', 'text-neutral-400');
                tab.classList.add('border-gold-500', 'text-gold-400', 'bg-gold-500/10');

                const category = tab.getAttribute('data-category');

                // Filter items
                menuItems.forEach(item => {
                    if (item.getAttribute('data-type') === category) {
                        item.classList.remove('hidden-item');
                    } else {
                        item.classList.add('hidden-item');
                    }
                });
            });
        });

        // --- WhatsApp Reservation Form ---
        const form = document.getElementById('reservationForm');
        
        form.addEventListener('submit', function(e) {
            e.preventDefault();

            // Get values
            const name = document.getElementById('resName').value;
            const phone = document.getElementById('resPhone').value;
            const date = document.getElementById('resDate').value;
            const time = document.getElementById('resTime').value;
            const guests = document.getElementById('resGuests').value;
            const message = document.getElementById('resMessage').value;

            // Format Date for display (DD/MM/YYYY)
            const dateObj = new Date(date);
            const formattedDate = dateObj.toLocaleDateString('fr-FR');

            // Construct Message
            let text = `🍽️ *NOUVELLE RÉSERVATION - LA BALANÇOIRE* %0A%0A`;
            text += `👤 *Nom:* ${name}%0A`;
            text += `📞 *Tél:* ${phone}%0A`;
            text += `📅 *Date:* ${formattedDate}%0A`;
            text += `⏰ *Heure:* ${time}%0A`;
            text += `👥 *Personnes:* ${guests}%0A`;
            if(message) {
                text += `📝 *Message:* ${message}%0A`;
            }
            text += `%0A_Merci de confirmer la disponibilité._`;

            // Replace with actual restaurant WhatsApp number (without +)
            const whatsappNumber = '2250700000000'; 

            const url = `https://wa.me/${whatsappNumber}?text=${text}`;

            // Open WhatsApp
            window.open(url, '_blank');
        });

        // Smooth scroll
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function(e) {
                e.preventDefault();
                const target = document.querySelector(this.getAttribute('href'));
                if (target) {
                    target.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }
            });
        });