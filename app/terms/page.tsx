import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const TermsPage = () => {
  return (
    <div className="min-h-screen bg-[#f8fafc] p-4 md:p-8">
      <Card className="w-full max-w-4xl mx-auto shadow-sm border-[#e2e8f0]">
        <CardHeader className="border-b border-[#e2e8f0] pb-6">
          <CardTitle className="text-3xl font-bold text-[#0f172a]">Terms and Conditions</CardTitle>
        </CardHeader>
        <CardContent className="pt-8 space-y-8">
          <section>
            <p className="text-[#64748b] leading-relaxed">
              Welcome to our service. Please read the following terms and conditions carefully before using any of our services.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-[#0f172a] mb-4">General Terms and Conditions</h2>
            <ul className="list-disc pl-5 space-y-2 text-[#64748b]">
              <li>You agree to be bound by these terms and conditions.</li>
              <li>Your use of this service indicates your acceptance of these terms.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-[#0f172a] mb-4">Privacy Policy</h2>
            <ol className="list-decimal pl-5 space-y-2 text-[#64748b]">
              <li>Our Privacy Policy outlines how we collect and use your data.</li>
              <li>We respect your privacy and are committed to protecting it.</li>
            </ol>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-[#0f172a] mb-4">User Conduct</h2>
            <ul className="list-disc pl-5 space-y-2 text-[#64748b]">
              <li>You must not engage in any activity that may harm or disrupt our service.</li>
              <li>Abusive behavior will result in the suspension or termination of your account.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-[#0f172a] mb-4">Termination</h2>
            <p className="text-[#64748b] leading-relaxed">
              We reserve the right to terminate or suspend access to our service at any time without notice.
            </p>
          </section>
        </CardContent>
      </Card>
    </div>
  );
};

export default TermsPage;