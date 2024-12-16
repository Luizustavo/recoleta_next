'use client';

import { useState } from 'react';
import TypeWasteForm from '@/components/forms/type-waste';
import AddressForm from '@/components/forms/address';
import SummaryRegistration from '@/components/forms/summary-registration-collection';

export default function WasteRegister() {
  const [step, setStep] = useState(1);

  const nextStep = () => setStep(prev => Math.min(prev + 1, 3));
  const prevStep = () => setStep(prev => Math.max(prev - 1, 1));
  const handleSubmit = () => {
    console.log('Formulário submetido com sucesso');
    // Lógica adicional de submissão
  };

  return (
    <div className="max-w-full mx-auto py-8">
      {step === 1 && <TypeWasteForm nextStep={nextStep} />}
      {step === 2 && <AddressForm nextStep={nextStep} prevStep={prevStep} />}
      {step === 3 && (
        <SummaryRegistration prevStep={prevStep} handleSubmit={handleSubmit} />
      )}
    </div>
  );
}
