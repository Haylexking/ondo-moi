import HeroSlider from "@/components/hero-slider"
import AboutSection from "@/components/about-section"
import ManagementSection from "@/components/management-section"
import PressReleaseSection from "@/components/press-release-section"
import LatestNewsSection from "@/components/latest-news-section"
import NewsletterSection from "@/components/newsletter-section"
import GallerySection from "@/components/gallery-section"
import BlogSection from "@/components/blog-section"
import SocialMediaSection from "@/components/social-media-section"

export default function Home() {
  return (
    <>
      <HeroSlider />
      <AboutSection />
      <ManagementSection />
      <PressReleaseSection />
      <LatestNewsSection />
      <NewsletterSection />
      <GallerySection />
      <BlogSection />
      <SocialMediaSection />
    </>
  )
}
