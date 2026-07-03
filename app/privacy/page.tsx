import type { Metadata } from "next";
import { LegalShell, H2, P, Bullets, Strong, SupportEmail } from "@/components/Legal";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "How CourseMate collects, uses and protects your personal information.",
};

export default function PrivacyPage() {
  return (
    <LegalShell eyebrow="Your data, kept proper" title="Privacy Policy" current="privacy">
      <P size={16}>
        This Privacy Policy explains how CourseMate (&ldquo;we&rdquo;, &ldquo;us&rdquo;, &ldquo;our&rdquo;) collects,
        uses and protects your personal information when you use the CourseMate app and website (the
        &ldquo;Service&rdquo;). CourseMate is operated from Western Australia and available worldwide.
      </P>
      <P size={16} marginBottom={36}>
        The short version: we collect only what we need to run the app — your email address and your name or display
        name — plus the golf content you create. We don&rsquo;t run third-party analytics or advertising, and we never
        sell your data.
      </P>

      <H2>1. Information we collect</H2>
      <Bullets
        items={[
          <>
            <Strong>Account details.</Strong> Your email address and your name or display name. Your display name is
            used to link your rounds to you and to identify you to the mates you play with.
          </>,
          <>
            <Strong>Sign-in credentials.</Strong> If you sign up with email and password, your password is stored
            securely in hashed form. If you sign in with Google, Facebook or Apple, we receive your name and email
            address from that provider — we never see your password for those services.
          </>,
          <>
            <Strong>Content you create.</Strong> Rounds, scores, stats, your CourseMate handicap, friends, likes and
            comments, and any courses you add manually.
          </>,
        ]}
      />
      <P>
        That&rsquo;s it. We do not use third-party analytics or advertising SDKs, we do not track you across other
        apps or websites, and we do not collect your precise location. Subscription payments are handled entirely by
        the Apple App Store or Google Play — we never see your payment card details.
      </P>

      <H2>2. How we use your information</H2>
      <Bullets
        items={[
          "to provide the Service — creating your account, linking rounds and scores to you, calculating your handicap, and showing your activity to mates you play with;",
          "to respond to support requests and send essential service emails (such as account or security notices);",
          "occasionally, to tell you about product updates — only where permitted, and you can unsubscribe at any time;",
          "to keep the Service safe — preventing abuse and enforcing our Terms of Service.",
        ]}
      />
      <P>
        Where laws such as the EU/UK GDPR apply, we rely on the performance of our contract with you (running the
        app), our legitimate interests (keeping it safe and improving it), and your consent (for optional emails) as
        our legal bases.
      </P>

      <H2>3. What other users can see</H2>
      <P>
        CourseMate is social by design. Your display name, scores, rounds and achievements are visible to the mates
        you play with, your friends, and anyone in a round you join. Likes and comments you post are visible to the
        people who can see that round or achievement. Your email address is never shown to other users.
      </P>

      <H2>4. Sharing your information</H2>
      <P>
        We do not sell or rent your personal information, and we do not share it with advertisers. We share it only
        with: service providers who host our database and infrastructure (acting on our instructions); the app stores
        and sign-in providers you choose to use (under their own policies); and authorities, where required by law. If
        CourseMate is ever acquired or merged, your information may transfer to the new operator under this same
        policy.
      </P>

      <H2>5. International transfers</H2>
      <P>
        The Service is available worldwide and our servers may be located outside your country. Wherever your data is
        processed, we protect it as described in this policy and take reasonable steps to ensure appropriate
        safeguards are in place.
      </P>

      <H2>6. How long we keep it</H2>
      <P>
        We keep your information for as long as your account is active. When you delete your account, your information
        is deleted. We may retain limited records where the law requires it (for example, records of a support
        dispute).
      </P>

      <H2>7. Deleting your account</H2>
      <div
        style={{
          background: "#fff",
          border: "1.5px solid var(--ink)",
          borderRadius: 12,
          padding: "22px 26px",
          margin: "0 0 12px",
        }}
      >
        <p style={{ fontSize: 15.5, lineHeight: 1.7, color: "var(--bodysoft)", margin: 0 }}>
          You can delete your account at any time, right in the app: go to your <Strong>Profile</Strong> page and
          select <Strong>Delete account</Strong>. This removes your account completely and permanently deletes your
          information. If you&rsquo;d rather we do it for you, email <SupportEmail /> and we&rsquo;ll take care of it.
        </p>
      </div>
      <P>
        If you subscribed to CourseMate Pro, remember to also cancel the subscription in your App Store or Google Play
        settings — deleting your account does not cancel store billing.
      </P>

      <H2>8. Your rights</H2>
      <P>
        Depending on where you live — including under the Australian Privacy Act, the EU/UK GDPR and the California
        Consumer Privacy Act — you may have the right to access, correct, delete or receive a copy of your personal
        information, to object to or restrict certain processing, and to withdraw consent. You can exercise most of
        these directly in the app (edit your profile, or delete your account); for anything else, email us and
        we&rsquo;ll respond within a reasonable time. You also have the right to complain to your local privacy
        regulator (in Australia, the OAIC).
      </P>

      <H2>9. Security</H2>
      <P>
        We take reasonable technical and organisational measures to protect your information, including encryption in
        transit and hashed passwords. No system is perfectly secure, so please use a strong, unique password and keep
        it to yourself.
      </P>

      <H2>10. Children</H2>
      <P>
        CourseMate is not intended for children under 13, and we do not knowingly collect personal information from
        them. If you believe a child under 13 has created an account, contact us and we will delete it.
      </P>

      <H2>11. Changes to this policy</H2>
      <P>
        We may update this policy from time to time. If we make material changes, we will notify you in the app or by
        email before they take effect. The &ldquo;Last updated&rdquo; date at the top always shows the current
        version.
      </P>

      <H2>12. Contact us</H2>
      <P>
        For privacy questions or requests, email <SupportEmail />.
      </P>
    </LegalShell>
  );
}
