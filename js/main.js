document.addEventListener("DOMContentLoaded", () => {
  // Mobile Menu Toggle
  const mobileMenuToggle = document.querySelector(".mobile-menu-toggle")
  const mainNavigation = document.querySelector(".main-navigation")

  if (mobileMenuToggle && mainNavigation) {
    mobileMenuToggle.addEventListener("click", () => {
      mainNavigation.classList.toggle("active")
      mobileMenuToggle.setAttribute(
        "aria-expanded",
        mobileMenuToggle.getAttribute("aria-expanded") === "true" ? "false" : "true",
      )
    })
  }

  // Hero Slider Initialization
  const heroSlider = document.querySelector(".hero-slider .swiper-container")
  const Swiper = window.Swiper // Declare the Swiper variable
  if (heroSlider) {
    new Swiper(heroSlider, {
      slidesPerView: 1,
      spaceBetween: 0,
      loop: true,
      autoplay: {
        delay: 5000,
        disableOnInteraction: false,
      },
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
    })
  }

  // Gallery Lightbox
  const galleryLinks = document.querySelectorAll(".gallery-image-link")
  if (galleryLinks.length > 0) {
    galleryLinks.forEach((link) => {
      link.addEventListener("click", function (e) {
        e.preventDefault()

        const lightbox = document.createElement("div")
        lightbox.classList.add("lightbox")

        const lightboxContent = document.createElement("div")
        lightboxContent.classList.add("lightbox-content")

        const lightboxImage = document.createElement("img")
        lightboxImage.src = this.href
        lightboxImage.alt = "Gallery Image"

        const closeButton = document.createElement("button")
        closeButton.classList.add("lightbox-close")
        closeButton.innerHTML = "&times;"
        closeButton.addEventListener("click", () => {
          document.body.removeChild(lightbox)
        })

        lightboxContent.appendChild(lightboxImage)
        lightboxContent.appendChild(closeButton)
        lightbox.appendChild(lightboxContent)

        document.body.appendChild(lightbox)

        lightbox.addEventListener("click", (e) => {
          if (e.target === lightbox) {
            document.body.removeChild(lightbox)
          }
        })
      })
    })
  }

  // Newsletter Subscription
  const subscribeButtons = document.querySelectorAll(".subscribe-button, .footer-subscribe-button")
  if (subscribeButtons.length > 0) {
    subscribeButtons.forEach((button) => {
      button.addEventListener("click", () => {
        const newsletterModal = document.createElement("div")
        newsletterModal.classList.add("newsletter-modal")

        const modalContent = document.createElement("div")
        modalContent.classList.add("modal-content")

        const modalHeader = document.createElement("div")
        modalHeader.classList.add("modal-header")

        const modalTitle = document.createElement("h3")
        modalTitle.textContent = "Subscribe to Our Newsletter"

        const closeButton = document.createElement("button")
        closeButton.classList.add("modal-close")
        closeButton.innerHTML = "&times;"
        closeButton.addEventListener("click", () => {
          document.body.removeChild(newsletterModal)
        })

        modalHeader.appendChild(modalTitle)
        modalHeader.appendChild(closeButton)

        const modalBody = document.createElement("div")
        modalBody.classList.add("modal-body")

        const subscriptionForm = document.createElement("form")
        subscriptionForm.classList.add("subscription-form")
        subscriptionForm.innerHTML = `
                    <div class="form-group">
                        <label for="subscriber-email">Email Address</label>
                        <input type="email" id="subscriber-email" name="email" required>
                    </div>
                    <div class="form-group">
                        <label for="subscriber-name">Full Name</label>
                        <input type="text" id="subscriber-name" name="name" required>
                    </div>
                    <button type="submit" class="subscribe-submit">Subscribe</button>
                `

        subscriptionForm.addEventListener("submit", function (e) {
          e.preventDefault()

          const email = this.querySelector("#subscriber-email").value
          const name = this.querySelector("#subscriber-name").value

          // Here you would typically send the data to your server
          console.log("Subscription data:", { email, name })

          // Show success message
          modalBody.innerHTML = `
                        <div class="subscription-success">
                            <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-check-circle"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>
                            <h4>Thank You for Subscribing!</h4>
                            <p>You have been successfully added to our newsletter list.</p>
                        </div>
                    `

          // Close the modal after 3 seconds
          setTimeout(() => {
            document.body.removeChild(newsletterModal)
          }, 3000)
        })

        modalBody.appendChild(subscriptionForm)

        modalContent.appendChild(modalHeader)
        modalContent.appendChild(modalBody)

        newsletterModal.appendChild(modalContent)

        document.body.appendChild(newsletterModal)

        newsletterModal.addEventListener("click", (e) => {
          if (e.target === newsletterModal) {
            document.body.removeChild(newsletterModal)
          }
        })
      })
    })
  }
})
