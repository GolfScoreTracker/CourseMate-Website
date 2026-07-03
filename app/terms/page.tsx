import type { Metadata } from "next";
import { LegalShell, H2, P, Bullets, SupportEmail } from "@/components/Legal";

export const metadata: Metadata = {
  title: "Terms of Service",
  description: "The terms that govern your use of the CourseMate app and website.",
};

export default function TermsPage() {
  return (
    <LegalShell eyebrow="The fine print" title="Terms of Service" current="terms">
      <P size={16} marginBottom={36}>
        These Terms of Service (&ldquo;Terms&rdquo;) govern your use of the CourseMate mobile application and website
        (together, the &ldquo;Service&rdquo;), operated by CourseMate (&ldquo;we&rdquo;, &ldquo;us&rdquo;,
        &ldquo;our&rdquo;). By creating an account or using the Service, you agree to these Terms. If you do not
        agree, please do not use the Service.
      </P>

      <H2>1. Who can use CourseMate</H2>
      <P>
        You must be at least 13 years old to use the Service. If you are under 18, you confirm that a parent or
        guardian has reviewed and agreed to these Terms on your behalf. The Service is available worldwide; you are
        responsible for complying with any local laws that apply to you.
      </P>

      <H2>2. Your account</H2>
      <P>
        You need an account to use CourseMate. You can sign up with an email address and password, or through Google,
        Facebook or Apple sign-in. You agree to provide accurate information, keep your login details secure, and
        accept responsibility for activity that happens under your account. Notify us at support@coursemate.golf if
        you suspect unauthorised use.
      </P>
      <P>
        You can delete your account at any time from the Profile page in the app by selecting &ldquo;Delete
        account&rdquo;. This removes your account completely and permanently deletes your information.
      </P>

      <H2>3. The Service</H2>
      <P>
        CourseMate is a golf-scoring app: you can create and join rounds, keep scores, view summaries and stats,
        maintain a CourseMate handicap, and interact with friends. The free tier includes solo and multiplayer rounds,
        stroke-play round creation, joining any format you are invited to, one-tap scoring, an automatically
        calculated handicap after three rounds, your last three rounds of history, and social features. We may change,
        add or remove features of the free tier from time to time.
      </P>
      <P>
        Course information (including holes, distances and par) may be sourced from third parties or contributed by
        users, and we do not guarantee its accuracy. The CourseMate handicap is calculated for fun and fair play
        within the app — it is not an official handicap and should not be relied on for competition purposes.
      </P>

      <H2>4. CourseMate Pro</H2>
      <P>
        CourseMate Pro is an optional auto-renewing subscription that unlocks deeper insight stats, the ability to
        create rounds in additional game formats (Stableford, four-ball and Ambrose), unlimited round history, and Pro
        scoring. Pro comes with a 30-day free trial for new subscribers.
      </P>
      <P>
        Subscriptions are purchased through, and billed by, the Apple App Store or Google Play. Pricing is shown
        in-app before you subscribe. Unless you cancel at least 24 hours before the end of the trial or current
        billing period, your subscription renews automatically. You can manage or cancel your subscription in your App
        Store or Google Play account settings; refunds are handled under the applicable store&rsquo;s policies.
        Deleting your account does not automatically cancel a store subscription — cancel it with the store as well.
      </P>

      <H2>5. Your content and conduct</H2>
      <P>
        Content you create in the Service — rounds, scores, display name, comments, likes and manually added courses —
        remains yours. You grant us a worldwide, non-exclusive, royalty-free licence to host, store and display that
        content as needed to operate the Service (for example, showing your scores and comments to the mates you play
        with).
      </P>
      <P marginBottom={8}>When using the Service you agree not to:</P>
      <Bullets
        items={[
          "harass, abuse or bully other users, or post offensive or unlawful content in comments or display names;",
          "impersonate another person or misrepresent your identity;",
          "interfere with, disrupt, or attempt to gain unauthorised access to the Service or other users' accounts;",
          "copy, scrape, reverse engineer or resell the Service or its data, except as permitted by law;",
          "deliberately submit false course data intended to mislead other users.",
        ]}
      />
      <P>We may remove content or suspend or terminate accounts that breach these Terms.</P>

      <H2>6. Intellectual property</H2>
      <P>
        The Service, including its design, branding, software and content (other than your content), is owned by us
        or our licensors and is protected by intellectual-property laws. We grant you a personal, non-exclusive,
        non-transferable licence to use the app for its intended purpose. Golf course names are used for
        identification only and do not imply any affiliation with or endorsement by those courses.
      </P>

      <H2>7. Third-party services</H2>
      <P>
        Sign-in through Google, Facebook or Apple, and purchases through the Apple App Store or Google Play, are
        provided by those companies under their own terms and privacy policies. We are not responsible for third-party
        services.
      </P>

      <H2>8. Disclaimers</H2>
      <P>
        The Service is provided &ldquo;as is&rdquo; and &ldquo;as available&rdquo;. To the maximum extent permitted by
        law, we make no warranties — express or implied — about the Service, including its availability, reliability,
        or the accuracy of course data, scores, stats or handicaps. Golf is played at your own risk; CourseMate is a
        scoring tool and is not responsible for anything that happens on the course.
      </P>

      <H2>9. Limitation of liability</H2>
      <P>
        To the maximum extent permitted by law, we are not liable for any indirect, incidental, special, consequential
        or exemplary damages, or any loss of data, arising from your use of the Service. Our total liability for any
        claim relating to the Service is limited to the amount you paid us in the 12 months before the claim arose.
      </P>
      <P>
        Nothing in these Terms excludes, restricts or modifies any consumer guarantees or rights you have under the
        Australian Consumer Law or other laws that cannot be excluded. Where liability cannot be excluded but can be
        limited, our liability is limited to resupplying the Service.
      </P>

      <H2>10. Termination</H2>
      <P>
        You may stop using the Service and delete your account at any time (Profile &rarr; Delete account). We may
        suspend or terminate your access if you breach these Terms, if required by law, or if we discontinue the
        Service. Sections that by their nature should survive termination (such as intellectual property, disclaimers
        and limitation of liability) will survive.
      </P>

      <H2>11. Changes to these Terms</H2>
      <P>
        We may update these Terms from time to time. If we make material changes, we will give you reasonable notice —
        for example in the app or by email — before they take effect. Continuing to use the Service after changes take
        effect means you accept the updated Terms.
      </P>

      <H2>12. Governing law</H2>
      <P>
        These Terms are governed by the laws of Western Australia, Australia, and you submit to the non-exclusive
        jurisdiction of the courts of Western Australia. If you use the Service as a consumer in another country, you
        keep any mandatory protections of your local law.
      </P>

      <H2>13. Contact</H2>
      <P>
        Questions about these Terms? Email us at <SupportEmail />.
      </P>
    </LegalShell>
  );
}
