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

export default function PrivacyPolicyPage() {
  const sections = [
    { id: "introduction", title: "Introduction" },
    { id: "information-we-collect", title: "Information We Collect" },
    { id: "how-we-use-information", title: "How We Use Your Information" },
    { id: "information-sharing", title: "Information Sharing and Disclosure" },
    { id: "your-rights", title: "Your Rights and Choices" },
    { id: "data-security", title: "Data Security" },
    { id: "international-transfers", title: "International Data Transfers" },
    { id: "children-privacy", title: "Children's Privacy" },
    { id: "policy-changes", title: "Changes to This Privacy Policy" },
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
              <Link href="/privacy-policy">Privacy Policy</Link>
            </BreadcrumbLink>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>

      <div className="flex flex-col md:flex-row gap-12">
        <div className="md:w-3/4">
          <div className="mb-8">
            <h1 className="text-3xl md:text-4xl font-bold mb-4">
              Privacy Policy
            </h1>
            <p className="text-muted-foreground">Last Updated: {lastUpdated}</p>
          </div>

          <div className="prose max-w-none dark:prose-invert">
            <section id="introduction" className="scroll-mt-16">
              <h2 className="my-4 font-bold">Introduction</h2>
              <p>
                Elegance ("we," "our," or "us") is committed to protecting your
                privacy. This Privacy Policy explains how we collect, use,
                disclose, and safeguard your information when you visit our
                website, use our mobile application, or make a purchase from our
                store (collectively, the "Services").
              </p>
              <p>
                Please read this Privacy Policy carefully. By accessing or using
                our Services, you acknowledge that you have read, understood,
                and agree to be bound by all the terms of this Privacy Policy.
                If you do not agree with our policies and practices, please do
                not use our Services.
              </p>
            </section>

            <section id="information-we-collect" className="scroll-mt-16">
              <h2 className="my-4 font-bold">Information We Collect</h2>
              <p>
                We collect several types of information from and about users of
                our Services, including:
              </p>
              <h3>Personal Information</h3>
              <p>
                Personal information is data that can be used to identify you
                directly or indirectly. We collect personal information when
                you:
              </p>
              <ul>
                <li>Create an account or profile</li>
                <li>Make a purchase</li>
                <li>Sign up for our newsletter</li>
                <li>Participate in surveys, contests, or promotions</li>
                <li>Contact our customer service</li>
              </ul>
              <p>The personal information we collect may include:</p>
              <ul>
                <li>Name</li>
                <li>Email address</li>
                <li>Postal address</li>
                <li>Phone number</li>
                <li>Payment information</li>
                <li>Date of birth</li>
                <li>Purchase history</li>
              </ul>

              <h3>Automatically Collected Information</h3>
              <p>
                When you access our Services, we automatically collect certain
                information about your device and usage. This information may
                include:
              </p>
              <ul>
                <li>IP address</li>
                <li>Device type and operating system</li>
                <li>Browser type and settings</li>
                <li>Unique device identifiers</li>
                <li>Browsing actions and patterns</li>
                <li>Referring websites or sources</li>
                <li>Location information</li>
              </ul>
              <p>
                We collect this information using cookies, web beacons, and
                other similar technologies. Please see our Cookie Policy for
                more information.
              </p>
            </section>

            <section id="how-we-use-information" className="scroll-mt-16">
              <h2 className="my-4 font-bold">How We Use Your Information</h2>
              <p>
                We use the information we collect for various purposes,
                including to:
              </p>
              <ul>
                <li>Process and fulfill your orders</li>
                <li>Create and manage your account</li>
                <li>Provide customer support</li>
                <li>Send transactional emails and order confirmations</li>
                <li>Send marketing communications (with your consent)</li>
                <li>Personalize your shopping experience</li>
                <li>Improve our website, products, and services</li>
                <li>Analyze usage patterns and trends</li>
                <li>Protect against fraud and unauthorized transactions</li>
                <li>Comply with legal obligations</li>
              </ul>
              <p>
                We process your personal information based on legitimate
                business interests, the fulfillment of our contract with you,
                compliance with our legal obligations, and/or your consent.
              </p>
            </section>

            <section id="information-sharing" className="scroll-mt-16">
              <h2 className="my-4 font-bold">Information Sharing and Disclosure</h2>
              <p>
                We may share your information in the following circumstances:
              </p>
              <h3>Service Providers</h3>
              <p>
                We share information with third-party service providers who
                perform services on our behalf, such as payment processing,
                order fulfillment, data analysis, email delivery, hosting
                services, customer service, and marketing assistance.
              </p>
              <h3>Business Transfers</h3>
              <p>
                If we are involved in a merger, acquisition, financing,
                reorganization, bankruptcy, or sale of company assets, your
                information may be transferred as part of that transaction.
              </p>
              <h3>Legal Requirements</h3>
              <p>
                We may disclose your information where we believe it is
                necessary to comply with applicable laws, regulations, legal
                processes, or governmental requests, or to exercise or defend
                legal claims.
              </p>
              <h3>With Your Consent</h3>
              <p>
                We may share your information with third parties when you have
                given us your consent to do so.
              </p>
              <p>
                We do not sell your personal information to third parties for
                their marketing purposes without your explicit consent.
              </p>
            </section>

            <section id="your-rights" className="scroll-mt-16">
              <h2 className="my-4 font-bold">Your Rights and Choices</h2>
              <p>
                Depending on your location, you may have certain rights
                regarding your personal information. These may include:
              </p>
              <ul>
                <li>Access to your personal information</li>
                <li>Correction of inaccurate or incomplete information</li>
                <li>Deletion of your personal information</li>
                <li>Restriction or objection to processing</li>
                <li>Data portability</li>
                <li>Withdrawal of consent</li>
              </ul>
              <p>
                To exercise these rights, please contact us using the
                information provided in the "Contact Us" section below.
              </p>
              <h3>Marketing Communications</h3>
              <p>
                You can opt out of receiving marketing communications from us by
                clicking the "unsubscribe" link in our emails, updating your
                communication preferences in your account settings, or
                contacting us directly.
              </p>
              <h3>Cookies and Tracking Technologies</h3>
              <p>
                Most web browsers are set to accept cookies by default. You can
                usually choose to set your browser to remove or reject cookies.
                Please note that if you choose to remove or reject cookies, this
                could affect certain features or services of our website.
              </p>
            </section>

            <section id="data-security" className="scroll-mt-16">
              <h2 className="my-4 font-bold">Data Security</h2>
              <p>
                We have implemented appropriate technical and organizational
                measures to protect the security of your personal information.
                However, please be aware that no method of transmission over the
                Internet or electronic storage is 100% secure, and we cannot
                guarantee absolute security.
              </p>
              <p>
                We maintain safeguards designed to protect your personal
                information against accidental, unlawful, or unauthorized
                destruction, loss, alteration, access, disclosure, or use.
              </p>
            </section>

            <section id="international-transfers" className="scroll-mt-16">
              <h2 className="my-4 font-bold">International Data Transfers</h2>
              <p>
                Your personal information may be transferred to, and processed
                in, countries other than the country in which you reside. These
                countries may have data protection laws that are different from
                the laws of your country.
              </p>
              <p>
                When we transfer your personal information to other countries,
                we will protect that information as described in this Privacy
                Policy and in accordance with applicable law.
              </p>
            </section>

            <section id="children-privacy" className="scroll-mt-16">
              <h2 className="my-4 font-bold">Children's Privacy</h2>
              <p>
                Our Services are not directed to children under the age of 13
                (or 16 in certain jurisdictions). We do not knowingly collect
                personal information from children. If you are a parent or
                guardian and believe that your child has provided us with
                personal information, please contact us, and we will take steps
                to delete such information.
              </p>
            </section>

            <section id="policy-changes" className="scroll-mt-16">
              <h2 className="my-4 font-bold">Changes to This Privacy Policy</h2>
              <p>
                We may update this Privacy Policy from time to time to reflect
                changes in our practices or for other operational, legal, or
                regulatory reasons. The updated policy will be posted on this
                page with a revised "Last Updated" date. We encourage you to
                review this Privacy Policy periodically.
              </p>
              <p>
                If we make material changes to this Privacy Policy, we will
                notify you by email or through a notice on our website prior to
                the changes becoming effective.
              </p>
            </section>

            <section id="contact-us" className="scroll-mt-16">
              <h2 className="my-4 font-bold">Contact Us</h2>
              <p>
                If you have any questions, concerns, or requests regarding this
                Privacy Policy or our privacy practices, please contact us at:
              </p>
              <p>
                <strong>Email:</strong> privacy@elegance.com
                <br />
                <strong>Address:</strong> 123 Fashion Street, New York, NY
                10001, USA
                <br />
                <strong>Phone:</strong> +1 (555) 123-4567
              </p>
              <p>
                For individuals in the European Union, we have appointed a data
                protection officer who can be contacted at dpo@elegance.com.
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
