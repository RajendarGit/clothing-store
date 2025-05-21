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

export default function TermsOfServicePage() {
  const sections = [
    { id: "introduction", title: "Introduction" },
    { id: "eligibility", title: "Eligibility" },
    { id: "account-registration", title: "Account Registration" },
    { id: "products-and-orders", title: "Products and Orders" },
    { id: "pricing-and-payment", title: "Pricing and Payment" },
    { id: "shipping-and-delivery", title: "Shipping and Delivery" },
    { id: "returns-and-refunds", title: "Returns and Refunds" },
    { id: "intellectual-property", title: "Intellectual Property" },
    { id: "user-content", title: "User Content" },
    { id: "prohibited-activities", title: "Prohibited Activities" },
    { id: "disclaimer-of-warranties", title: "Disclaimer of Warranties" },
    { id: "limitation-of-liability", title: "Limitation of Liability" },
    { id: "indemnification", title: "Indemnification" },
    { id: "dispute-resolution", title: "Dispute Resolution" },
    { id: "termination", title: "Termination" },
    { id: "changes-to-terms", title: "Changes to Terms" },
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
              <Link href="/terms-of-service">Terms of Service</Link>
            </BreadcrumbLink>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>

      <div className="flex flex-col md:flex-row gap-12">
        <div className="md:w-3/4">
          <div className="mb-8">
            <h1 className="text-3xl md:text-4xl font-bold mb-4">
              Terms of Service
            </h1>
            <p className="text-muted-foreground">Last Updated: {lastUpdated}</p>
          </div>

          <div className="prose max-w-none dark:prose-invert">
            <section id="introduction" className="scroll-mt-16">
              <h2 className="my-4 font-bold">Introduction</h2>
              <p>
                Welcome to Elegance. These Terms of Service ("Terms") govern
                your access to and use of the Elegance website, mobile
                application, and services (collectively, the "Services").
              </p>
              <p>
                Please read these Terms carefully before using our Services. By
                accessing or using our Services, you agree to be bound by these
                Terms and our Privacy Policy. If you do not agree to these
                Terms, you may not access or use our Services.
              </p>
            </section>

            <section id="eligibility" className="scroll-mt-16">
              <h2 className="my-4 font-bold">Eligibility</h2>
              <p>
                You must be at least 18 years old to use our Services. By using
                our Services, you represent and warrant that you are at least 18
                years old and have the legal capacity to enter into a binding
                agreement.
              </p>
              <p>
                If you are using our Services on behalf of a company,
                organization, or other entity, you represent and warrant that
                you have the authority to bind that entity to these Terms, in
                which case "you" will refer to that entity.
              </p>
            </section>

            <section id="account-registration" className="scroll-mt-16">
              <h2 className="my-4 font-bold">Account Registration</h2>
              <p>
                To access certain features of our Services, you may need to
                create an account. When you create an account, you must provide
                accurate, current, and complete information. You are responsible
                for maintaining the confidentiality of your account credentials
                and for all activities that occur under your account.
              </p>
              <p>You agree to:</p>
              <ul>
                <li>
                  Provide accurate and complete information when creating your
                  account
                </li>
                <li>Keep your password secure and confidential</li>
                <li>Promptly update your account information if it changes</li>
                <li>
                  Notify us immediately of any unauthorized use of your account
                  or any other breach of security
                </li>
              </ul>
              <p>
                We reserve the right to suspend or terminate your account if any
                information provided during the registration process or
                thereafter proves to be inaccurate, false, or misleading.
              </p>
            </section>

            <section id="products-and-orders" className="scroll-mt-16">
              <h2 className="my-4 font-bold">Products and Orders</h2>
              <p>
                All product descriptions, images, and specifications are for
                reference only and may not be exact. We make reasonable efforts
                to display the colors and features of our products accurately,
                but we cannot guarantee that your device's display will
                accurately reflect the actual colors of the products.
              </p>
              <p>
                We reserve the right to limit the quantity of items purchased
                per person, per household, or per order. We also reserve the
                right to refuse or cancel orders at our discretion, including if
                we believe the order was placed by dealers, resellers, or
                distributors.
              </p>
              <p>
                Your receipt of an order confirmation does not constitute our
                acceptance of your order. We reserve the right to accept or
                decline your order for any reason up until the time of shipment.
              </p>
            </section>

            <section id="pricing-and-payment" className="scroll-mt-16">
              <h2 className="my-4 font-bold">Pricing and Payment</h2>
              <p>
                All prices are shown in US dollars unless otherwise specified.
                We reserve the right to change prices at any time without
                notice. Despite our best efforts, a small number of the items on
                our website may be mispriced. If an item's correct price is
                higher than our stated price, we will, at our discretion, either
                contact you for instructions before shipping or cancel your
                order and notify you of such cancellation.
              </p>
              <p>
                Payment must be received prior to the acceptance of an order. We
                accept various payment methods as indicated on our website. By
                providing a payment method, you represent and warrant that you
                are authorized to use the designated payment method and
                authorize us to charge your payment method for the total amount
                of your order (including taxes, shipping, and handling).
              </p>
              <p>
                If the payment method you provide cannot be verified, is
                invalid, or is otherwise not acceptable, your order may be
                suspended or canceled. You are responsible for resolving any
                problems we encounter in order to proceed with your order.
              </p>
            </section>

            <section id="shipping-and-delivery" className="scroll-mt-16">
              <h2 className="my-4 font-bold">Shipping and Delivery</h2>
              <p>
                We ship to the addresses provided by customers during the
                checkout process. It is your responsibility to ensure that the
                shipping address you provide is accurate and complete. We are
                not responsible for orders shipped to an incorrect address
                provided by the customer.
              </p>
              <p>
                Delivery times are estimates only and are not guaranteed.
                Factors such as carrier delays, weather conditions, and customs
                clearance may affect delivery times. We are not liable for any
                delays in shipments.
              </p>
              <p>
                Risk of loss and title for items purchased from our website pass
                to you upon delivery of the items to the carrier. You are
                responsible for filing any claims with carriers for damaged
                and/or lost shipments.
              </p>
            </section>

            <section id="returns-and-refunds" className="scroll-mt-16">
              <h2 className="my-4 font-bold">Returns and Refunds</h2>
              <p>
                We want you to be completely satisfied with your purchase. If
                you are not satisfied, you may return eligible items within 30
                days of delivery for a full refund of the purchase price,
                subject to our Return Policy.
              </p>
              <p>To be eligible for a return, your item must be:</p>
              <ul>
                <li>In the same condition that you received it</li>
                <li>Unworn, unwashed, and undamaged</li>
                <li>In the original packaging with all tags attached</li>
              </ul>
              <p>
                Certain items cannot be returned, including intimate apparel,
                swimwear, personalized items, and final sale items. Please see
                our Return Policy for complete details.
              </p>
              <p>
                Refunds will be issued to the original payment method used for
                the purchase. Processing times for refunds vary depending on the
                payment method and financial institution.
              </p>
            </section>

            <section id="intellectual-property" className="scroll-mt-16">
              <h2 className="my-4 font-bold">Intellectual Property</h2>
              <p>
                All content included on our website and through our Services,
                such as text, graphics, logos, button icons, images, audio
                clips, digital downloads, data compilations, and software, is
                the property of Elegance or its content suppliers and is
                protected by international copyright, trademark, and other
                intellectual property laws.
              </p>
              <p>
                Our trademarks and trade dress may not be used in connection
                with any product or service that is not ours, in any manner that
                is likely to cause confusion among customers, or in any manner
                that disparages or discredits us.
              </p>
              <p>
                We grant you a limited, non-exclusive, non-transferable, and
                revocable license to access and use our Services for personal,
                non-commercial purposes. This license does not include:
              </p>
              <ul>
                <li>Any resale or commercial use of our Services or content</li>
                <li>
                  Any collection and use of product listings, descriptions, or
                  prices
                </li>
                <li>Any derivative use of our Services or content</li>
                <li>
                  Any downloading or copying of account information for the
                  benefit of another merchant
                </li>
                <li>
                  Any use of data mining, robots, or similar data gathering and
                  extraction tools
                </li>
              </ul>
            </section>

            <section id="user-content" className="scroll-mt-16">
              <h2 className="my-4 font-bold">User Content</h2>
              <p>
                Our Services may allow you to post, upload, publish, submit, or
                transmit content such as product reviews, comments, and feedback
                ("User Content"). By submitting User Content, you grant us a
                worldwide, non-exclusive, royalty-free, perpetual, irrevocable,
                and fully sublicensable right to use, reproduce, modify, adapt,
                publish, translate, create derivative works from, distribute,
                and display such User Content in any media.
              </p>
              <p>You represent and warrant that:</p>
              <ul>
                <li>
                  You own or control all rights to the User Content you submit
                </li>
                <li>
                  The User Content does not infringe upon or violate the rights
                  of any third party, including intellectual property rights and
                  privacy rights
                </li>
                <li>
                  The User Content is not defamatory, obscene, offensive,
                  harassing, or otherwise objectionable
                </li>
              </ul>
              <p>
                We reserve the right to remove any User Content at our
                discretion, without prior notice, for any reason or no reason.
              </p>
            </section>

            <section id="prohibited-activities" className="scroll-mt-16">
              <h2 className="my-4 font-bold">Prohibited Activities</h2>
              <p>
                You agree not to engage in any of the following prohibited
                activities:
              </p>
              <ul>
                <li>
                  Using our Services for any illegal purpose or in violation of
                  any local, state, national, or international law
                </li>
                <li>
                  Violating or infringing upon the rights of others, including
                  intellectual property rights and privacy rights
                </li>
                <li>
                  Interfering with, disrupting, or creating an undue burden on
                  our Services or the networks or services connected to our
                  Services
                </li>
                <li>
                  Attempting to bypass any measures we may use to prevent or
                  restrict access to our Services
                </li>
                <li>
                  Using any automated means or interface not provided by us to
                  access our Services or to extract data
                </li>
                <li>
                  Impersonating another person or otherwise misrepresenting your
                  affiliation with a person or entity
                </li>
                <li>
                  Engaging in any harassing, intimidating, predatory, or
                  stalking conduct
                </li>
              </ul>
            </section>

            <section id="disclaimer-of-warranties" className="scroll-mt-16">
              <h2 className="my-4 font-bold">Disclaimer of Warranties</h2>
              <p>
                OUR SERVICES ARE PROVIDED "AS IS" AND "AS AVAILABLE" WITHOUT ANY
                WARRANTIES OF ANY KIND, EITHER EXPRESS OR IMPLIED, INCLUDING BUT
                NOT LIMITED TO THE IMPLIED WARRANTIES OF MERCHANTABILITY,
                FITNESS FOR A PARTICULAR PURPOSE, OR NON-INFRINGEMENT.
              </p>
              <p>
                WE DO NOT WARRANT THAT OUR SERVICES WILL BE UNINTERRUPTED OR
                ERROR-FREE, THAT DEFECTS WILL BE CORRECTED, OR THAT OUR SERVICES
                OR THE SERVERS THAT MAKE THEM AVAILABLE ARE FREE OF VIRUSES OR
                OTHER HARMFUL COMPONENTS.
              </p>
              <p>
                WE MAKE NO WARRANTIES OR REPRESENTATIONS ABOUT THE ACCURACY OR
                COMPLETENESS OF THE CONTENT PROVIDED THROUGH OUR SERVICES OR THE
                CONTENT OF ANY WEBSITES LINKED TO OUR SERVICES.
              </p>
            </section>

            <section id="limitation-of-liability" className="scroll-mt-16">
              <h2 className="my-4 font-bold">Limitation of Liability</h2>
              <p>
                TO THE FULLEST EXTENT PERMITTED BY APPLICABLE LAW, IN NO EVENT
                WILL ELEGANCE, ITS AFFILIATES, OR THEIR LICENSORS, SERVICE
                PROVIDERS, EMPLOYEES, AGENTS, OFFICERS, OR DIRECTORS BE LIABLE
                FOR DAMAGES OF ANY KIND, UNDER ANY LEGAL THEORY, ARISING OUT OF
                OR IN CONNECTION WITH YOUR USE, OR INABILITY TO USE, OUR
                SERVICES, INCLUDING ANY DIRECT, INDIRECT, SPECIAL, INCIDENTAL,
                CONSEQUENTIAL, OR PUNITIVE DAMAGES, INCLUDING BUT NOT LIMITED
                TO, PERSONAL INJURY, PAIN AND SUFFERING, EMOTIONAL DISTRESS,
                LOSS OF REVENUE, LOSS OF PROFITS, LOSS OF BUSINESS OR
                ANTICIPATED SAVINGS, LOSS OF USE, LOSS OF GOODWILL, LOSS OF
                DATA, AND WHETHER CAUSED BY TORT (INCLUDING NEGLIGENCE), BREACH
                OF CONTRACT, OR OTHERWISE, EVEN IF FORESEEABLE.
              </p>
              <p>
                IN NO EVENT WILL OUR TOTAL LIABILITY TO YOU FOR ALL CLAIMS
                RELATED TO OUR SERVICES EXCEED THE AMOUNT PAID BY YOU TO US
                DURING THE THREE (3) MONTHS IMMEDIATELY PRECEDING THE EVENT
                GIVING RISE TO THE LIABILITY.
              </p>
              <p>
                THE FOREGOING DOES NOT AFFECT ANY LIABILITY WHICH CANNOT BE
                EXCLUDED OR LIMITED UNDER APPLICABLE LAW.
              </p>
            </section>

            <section id="indemnification" className="scroll-mt-16">
              <h2 className="my-4 font-bold">Indemnification</h2>
              <p>
                You agree to defend, indemnify, and hold harmless Elegance, its
                affiliates, licensors, and service providers, and its and their
                respective officers, directors, employees, contractors, agents,
                licensors, suppliers, successors, and assigns from and against
                any claims, liabilities, damages, judgments, awards, losses,
                costs, expenses, or fees (including reasonable attorneys' fees)
                arising out of or relating to your violation of these Terms or
                your use of our Services, including, but not limited to, your
                User Content, any use of our content, services, and products
                other than as expressly authorized in these Terms, or your use
                of any information obtained from our Services.
              </p>
            </section>

            <section id="dispute-resolution" className="scroll-mt-16">
              <h2 className="my-4 font-bold">Dispute Resolution</h2>
              <h3>Informal Resolution</h3>
              <p>
                Before filing a claim against Elegance, you agree to try to
                resolve the dispute informally by contacting us. We'll try to
                resolve the dispute informally by contacting you via email. If a
                dispute is not resolved within 30 days of submission, you or
                Elegance may bring a formal proceeding.
              </p>
              <h3>Arbitration Agreement</h3>
              <p>
                You and Elegance agree to resolve any disputes through binding
                arbitration conducted by the American Arbitration Association
                (AAA) according to its Commercial Arbitration Rules. The
                arbitration will be conducted in New York, New York, unless you
                and Elegance agree otherwise. Each party will be responsible for
                paying any AAA filing, administrative, and arbitrator fees in
                accordance with AAA rules.
              </p>
              <h3>Class Action Waiver</h3>
              <p>
                YOU AND ELEGANCE AGREE THAT EACH MAY BRING CLAIMS AGAINST THE
                OTHER ONLY IN YOUR OR ITS INDIVIDUAL CAPACITY AND NOT AS A
                PLAINTIFF OR CLASS MEMBER IN ANY PURPORTED CLASS OR
                REPRESENTATIVE PROCEEDING.
              </p>
              <h3>Exceptions</h3>
              <p>
                Notwithstanding the foregoing, either party may seek injunctive
                or other equitable relief in any court of competent jurisdiction
                to prevent the actual or threatened infringement,
                misappropriation, or violation of a party's copyrights,
                trademarks, trade secrets, patents, or other intellectual
                property rights.
              </p>
            </section>

            <section id="termination" className="scroll-mt-16">
              <h2 className="my-4 font-bold">Termination</h2>
              <p>
                We may terminate or suspend your account and access to our
                Services immediately, without prior notice or liability, for any
                reason whatsoever, including, without limitation, if you breach
                these Terms.
              </p>
              <p>
                Upon termination, your right to use our Services will
                immediately cease. If you wish to terminate your account, you
                may simply discontinue using our Services or contact us to
                request account deletion.
              </p>
              <p>
                All provisions of these Terms which by their nature should
                survive termination shall survive termination, including,
                without limitation, ownership provisions, warranty disclaimers,
                indemnity, and limitations of liability.
              </p>
            </section>

            <section id="changes-to-terms" className="scroll-mt-16">
              <h2 className="my-4 font-bold">Changes to Terms</h2>
              <p>
                We reserve the right to modify these Terms at any time. If we
                make changes to these Terms, we will post the revised Terms on
                our website with an updated "Last Updated" date. If the changes
                are material, we will provide notice through our Services or by
                other means.
              </p>
              <p>
                Your continued use of our Services following the posting of
                revised Terms means that you accept and agree to the changes.
                You are expected to check this page frequently so you are aware
                of any changes, as they are binding on you.
              </p>
            </section>

            <section id="contact-us" className="scroll-mt-16">
              <h2 className="my-4 font-bold">Contact Us</h2>
              <p>
                If you have any questions, concerns, or comments about these
                Terms, please contact us at:
              </p>
              <p>
                <strong>Email:</strong> legal@elegance.com
                <br />
                <strong>Address:</strong> 123 Fashion Street, New York, NY
                10001, USA
                <br />
                <strong>Phone:</strong> +1 (555) 123-4567
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
