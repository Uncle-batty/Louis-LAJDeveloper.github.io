document.addEventListener("DOMContentLoaded", () => {
    loadBlogPosts();
    loadLinkedInPosts();
});

function loadBlogPosts() {
    // Fetch and display blog posts
    // Replace with your own blog fetching logic
    document.getElementById("blog-posts").innerHTML = `
        <div class="post">
            <h3>Coming soon.</h3>
           <!-- <p>This is a sample blog post...</p> -->
        </div>
    `;
}

function loadLinkedInPosts() {
    // Fetch and display LinkedIn posts
    // Replace with your own LinkedIn fetching logic
    var linkedinPosts = [
        { 'img': './Assets/Linked1.jpg', 'link':'https://www.linkedin.com/posts/dev-louis-batty_teamappreciation-entlectteam-entlectopenday-activity-7196552324637483010-lnfg?utm_source=share&utm_medium=member_desktop'},
        { 'img': './Assets/Linked2.jpg', 'link': 'https://www.linkedin.com/posts/dev-louis-batty_teamuxplore-innovationjourney-activity-7196118166501023744-6ndw?utm_source=share&utm_medium=member_desktop' },
        { 'img': './Assets/Linked3.jpg', 'link': 'https://www.linkedin.com/posts/dev-louis-batty_microsoft-kuunda-uj-activity-7187090703246659585-gSYj?utm_source=share&utm_medium=member_desktop' }
        // Add more LinkedIn post image URLs as needed
    ];

    var glideSlides = document.querySelector('.glide__slides');

    linkedinPosts.forEach(function (postUrl) {
        var postHTML = `
            <li class="glide__slide">
                <a href="${postUrl.link}" target="_blank" title="Click to view LinkedIn post">
                    <img src="${postUrl.img}" alt="LinkedIn Post Thumbnail">
                </a>
            </li>
        `;
        glideSlides.innerHTML += postHTML;
    });

    // Initialize Glide carousel
    new Glide('.glide', {
        type: 'carousel',
        perView: 2, // Number of slides per view
        autoplay: 2000, // Autoplay interval in milliseconds
        hoverpause: true, // Pause autoplay on hover
        gap: 10, // Space between slides
        breakpoints: {
            768: {
                perView: 1, // Adjust number of slides per view for smaller screens if needed
            }
        }
    }).mount();
}

// Load LinkedIn posts when the page loads
window.addEventListener('load', loadLinkedInPosts);


function showCodeUnavailableAlert() {
    alert("Sorry, the code isn't available due to IP restrictions.");
}

function showInprogressAlert() {
    alert("Sorry, this is still a work in progress.");
}


document.getElementById('contact-form').addEventListener('submit', function (event) {
    event.preventDefault();

    const btn = document.getElementById('submit-btn');
    btn.textContent = 'Sending...';

    const serviceID = 'service_zwb3no1';
    const templateID = 'template_9bgqcth';

    // Get form values
    const email = document.getElementById('email').value;
    const subject = document.getElementById('subject').value;
    const message = document.getElementById('message').value;

    // Set up the email parameters
    const templateParams = {
        email: email,
        subject: subject,
        message: message
    };

    // Send the email
    emailjs.send(serviceID, templateID, templateParams)
        .then(() => {
            btn.textContent = 'Send';
            alert('Email sent successfully!');
        }, (err) => {
            btn.textContent = 'Send';
            alert('Failed to send email. Please try again later.');
            console.error('Error:', err);
        });
});

