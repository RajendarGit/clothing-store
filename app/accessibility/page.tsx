import Link from "next/link"
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
import { TableOfContents } from "@/components/table-of-contents"
import Container from "@/components/ui/container"

export default function AccessibilityPage() {
  const sections = [
    { id: "commitment", title: "Our Commitment" },
    { id: "standards", title: "Accessibility Standards" },
    { id: "features", title: "Accessibility Features" },
    { id: "assistive-technology", title: "Assistive Technology" },
    { id: "known-limitations", title: "Known Limitations" },
    { id: "feedback", title: "Feedback and Assistance" },
    { id: "contact-us", title: "Contact Us" },
  ]

  const lastUpdated = "May 21, 2024"

  return (
    <Container>
      <Breadcrumb className="mb-6">
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink asChild>
              <Link href="/">Home</Link>
            </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbLink asChild>
              <Link href="/accessibility">Accessibility</Link>
            </BreadcrumbLink>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>

      <div className="flex flex-col md:flex-row gap-12">
        <div className="md:w-3/4">
          <div className="mb-8">
            <h1 className="text-3xl md:text-4xl font-bold mb-4">
              Accessibility Statement
            </h1>
            <p className="text-muted-foreground">Last Updated: {lastUpdated}</p>
          </div>

          <div className="prose max-w-none dark:prose-invert">
            <section id="commitment" className="scroll-mt-16">
              <h2 className="my-4 font-bold">Our Commitment</h2>
              <p>
                At Elegance, we are committed to ensuring digital accessibility
                for people of all abilities. We believe that all users should
                have equal access to our website and online services, regardless
                of their abilities or disabilities.
              </p>
              <p>
                We strive to continually improve the user experience for
                everyone and apply the relevant accessibility standards to
                achieve this. We are actively working to increase the
                accessibility and usability of our website and in doing so
                adhere to many of the available standards and guidelines.
              </p>
            </section>

            <section id="standards" className="scroll-mt-16">
              <h2 className="my-4 font-bold">Accessibility Standards</h2>
              <p>
                Elegance aims to conform to the Web Content Accessibility
                Guidelines (WCAG) 2.1 Level AA. These guidelines explain how to
                make web content more accessible for people with disabilities
                and more user-friendly for everyone.
              </p>
              <p>
                The guidelines have three levels of accessibility (A, AA, and
                AAA). We've chosen Level AA as our target.
              </p>
              <p>
                Our website aims to comply with the following standards and
                legislation:
              </p>
              <ul>
                <li>
                  Web Content Accessibility Guidelines (WCAG) 2.1 Level AA
                </li>
                <li>Americans with Disabilities Act (ADA)</li>
                <li>Section 508 of the Rehabilitation Act</li>
                <li>
                  EN 301 549 (European accessibility requirements for public
                  procurement of ICT)
                </li>
              </ul>
            </section>

            <section id="features" className="scroll-mt-16">
              <h2 className="my-4 font-bold">Accessibility Features</h2>
              <p>Our website includes the following accessibility features:</p>
              <h3>Keyboard Navigation</h3>
              <p>
                All functionality on our website is operable through a keyboard
                interface without requiring specific timings for individual
                keystrokes. We've implemented:
              </p>
              <ul>
                <li>Logical tab order for keyboard navigation</li>
                <li>
                  Visible focus indicators to show which element has keyboard
                  focus
                </li>
                <li>Skip navigation links to bypass repetitive content</li>
                <li>Keyboard-accessible dropdown menus and form controls</li>
              </ul>

              <h3>Text and Typography</h3>
              <ul>
                <li>Clear, readable fonts with adequate size</li>
                <li>Sufficient color contrast between text and background</li>
                <li>
                  Text can be resized up to 200% without loss of content or
                  functionality
                </li>
                <li>
                  No content that flashes more than three times per second
                </li>
              </ul>

              <h3>Structure and Navigation</h3>
              <ul>
                <li>Proper heading structure to organize content</li>
                <li>
                  Descriptive page titles that clearly identify the purpose of
                  each page
                </li>
                <li>Consistent navigation across the website</li>
                <li>
                  Multiple ways to find content (navigation menu, search,
                  sitemap)
                </li>
                <li>ARIA landmarks to identify regions of the page</li>
              </ul>

              <h3>Images and Media</h3>
              <ul>
                <li>Alternative text for all non-decorative images</li>
                <li>Captions and transcripts for video content</li>
                <li>
                  No content that relies solely on color to convey information
                </li>
              </ul>

              <h3>Forms and Interactive Elements</h3>
              <ul>
                <li>Clear labels for all form fields</li>
                <li>
                  Error messages that identify the error and suggest corrections
                </li>
                <li>
                  Sufficient time to complete forms with options to extend time
                  limits
                </li>
              </ul>
            </section>

            <section id="assistive-technology" className="scroll-mt-16">
              <h2 className="my-4 font-bold">Assistive Technology</h2>
              <p>
                Our website is designed to be compatible with a variety of
                assistive technologies, including but not limited to:
              </p>
              <ul>
                <li>
                  Screen readers (such as JAWS, NVDA, VoiceOver, and TalkBack)
                </li>
                <li>Screen magnification software</li>
                <li>Speech recognition software</li>
                <li>
                  Alternative input devices (such as switch controls and
                  eye-tracking devices)
                </li>
              </ul>
              <p>
                We regularly test our website with assistive technologies to
                ensure compatibility and to identify areas for improvement.
              </p>
            </section>

            <section id="known-limitations" className="scroll-mt-16">
              <h2 className="my-4 font-bold">Known Limitations</h2>
              <p>
                While we strive to ensure that our website is accessible to all
                users, there may be some limitations:
              </p>
              <ul>
                <li>
                  Some older content may not fully meet our accessibility
                  standards. We are working to update this content as quickly as
                  possible.
                </li>
                <li>
                  Third-party content and functionality that we do not control
                  may not be fully accessible. We encourage our partners to
                  prioritize accessibility in their products.
                </li>
                <li>
                  Some complex interactive features may have limited
                  accessibility. We are continuously working to improve these
                  features.
                </li>
              </ul>
              <p>
                We are committed to addressing these limitations and improving
                the accessibility of our website over time.
              </p>
            </section>

            <section id="feedback" className="scroll-mt-16">
              <h2 className="my-4 font-bold">Feedback and Assistance</h2>
              <p>
                We welcome your feedback on the accessibility of our website. If
                you encounter any barriers or have suggestions for improvement,
                please let us know. Your input helps us identify areas where we
                can enhance accessibility.
              </p>
              <p>
                If you need assistance with any part of our website, please
                contact our customer service team using the information provided
                below. We're here to help and can provide information in
                alternative formats upon request.
              </p>
            </section>

            <section id="contact-us" className="scroll-mt-16">
              <h2 className="my-4 font-bold">Contact Us</h2>
              <p>
                If you have any questions, concerns, or feedback regarding the
                accessibility of our website, please contact us:
              </p>
              <p>
                <strong>Email:</strong> accessibility@elegance.com
                <br />
                <strong>Phone:</strong> +1 (555) 123-4567
                <br />
                <strong>Address:</strong> 123 Fashion Street, New York, NY
                10001, USA
              </p>
              <p>
                We aim to respond to accessibility feedback within 2 business
                days, and we will do our best to address any concerns in a
                timely manner.
              </p>
            </section>

            <section className="mt-12 border-t pt-8">
              <p>
                This accessibility statement was created on May 1, 2024, and was
                last updated on {lastUpdated}. We review and update this
                statement regularly as we improve our website's accessibility.
              </p>
            </section>
          </div>
        </div>

        <div className="md:w-1/4">
          <div className="sticky top-24">
            <TableOfContents sections={sections} />
          </div>
        </div>
      </div>
    </Container>
  );
}
