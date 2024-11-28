import React, { useState } from 'react';
import { Check } from 'lucide-react';

const MultiStepForm = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    plan: 'arcade',
    billingCycle: 'monthly',
    addons: []
  });
  
  const PersonalInfo = () => (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-gray-900">Personal info</h2>
      <p className="text-gray-900">Please provide your name, email address, and phone number.</p>
      <div className="space-y-6">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Name</label>
          <input
            type="text"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            placeholder="e.g. Stephen King"
            className="mt-1 block w-full rounded-md border border-gray-300 px-4 py-3 text-lg bg-white shadow-sm focus:border-blue-500 focus:ring-blue-500 text-black"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Email Address</label>
          <input
            type="email"
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            placeholder="e.g. stephenking@lorem.com"
            className="mt-1 block w-full rounded-md border border-gray-300 px-4 py-3 text-lg bg-white shadow-sm focus:border-blue-500 focus:ring-blue-500 text-black"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Phone Number</label>
          <input
            type="tel"
            value={formData.phone}
            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
            placeholder="e.g. +1 234 567 890"
            className="mt-1 block w-full rounded-md border border-gray-300 px-4 py-3 text-lg bg-white shadow-sm focus:border-blue-500 focus:ring-blue-500 text-black"
          />
        </div>
      </div>
    </div>
  );

  const steps = [
    { number: 1, title: 'YOUR INFO', desc: 'STEP 1' },
    { number: 2, title: 'SELECT PLAN', desc: 'STEP 2' },
    { number: 3, title: 'ADD-ONS', desc: 'STEP 3' },
    { number: 4, title: 'SUMMARY', desc: 'STEP 4' }
  ];

  

  const plans = [
    { id: 'arcade', name: <span style={{ color: 'black' }}>Arcade</span>, monthlyPrice: 9, yearlyPrice: 90, icon: '🎮' },
    { id: 'advanced', name: <span style={{ color: 'black' }}>'Advanced'</span>, monthlyPrice: 12, yearlyPrice: 120, icon: '🎯' },
    { id: 'pro', name: <span style={{ color: 'black' }}>'Pro'</span>, monthlyPrice: 15, yearlyPrice: 150, icon: '🎲' }
  ];

  const addons = [
    {
      id: 'online',
      name: <span style={{ color: 'black' }}>Online service</span>,
      description: 'Access to multiplayer games',
      monthlyPrice: 1,
      yearlyPrice: 10
      
    },
    {
      id: 'storage',
      name:  <span style={{ color: 'black' }}>Larger storage</span>,
      description: 'Extra 1TB of cloud save',
      monthlyPrice: 2,
      yearlyPrice: 20
    },
    {
      id: 'profile',
      name: <span style={{ color: 'black' }}>Customizable profile</span>,
      description: 'Custom theme on your profile',
      monthlyPrice: 2,
      yearlyPrice: 20
    }
  ];

  const renderSidebar = (isMobile = false) => (
    <div 
    className={`
      ${isMobile ? 'md:hidden w-full' : 'hidden md:block w-[274px]'} 
      relative rounded-lg
      ${isMobile 
        ? 'bg-[url("/src/assets/bg-sidebar-desktop.svg")] h-[172px]' 
        : 'bg-[url("/src/assets/bg-sidebar-desktop.svg")] h-full'
      }
      bg-cover bg-center bg-no-repeat
    `}
    >
      <div className={`
        ${isMobile ? 'flex justify-center pt-8 space-x-4' : 'flex flex-col space-y-12 p-32'}
         
      `}>
        {steps.map((step) => (
          <div key={step.number} className={`flex ${isMobile ? '' : 'items-center gap-4'}`}>
            
            <div className={`
              h-8 w-8 rounded-full flex items-center justify-center border
              ${currentStep === step.number 
                ? 'bg-blue-200 text-blue-900 border-none' 
                : 'border-white text-white'
              }
            `}>
              {step.number}
            </div>
            {!isMobile && (
              <div>
                <p className="text-xs text-gray-300 uppercase">{step.desc}</p>
                <p className="text-white font-bold uppercase tracking-wider">{step.title}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );

  
  

  const SelectPlan = () => (
    <div className="space-y-4">
      <h2 className="text-2xl font-bold text-gray-900">Select your plan</h2>
      <p className="text-gray-500">You have the option of monthly or yearly billing.</p>
      
      <div className="space-y-3">
        {plans.map((plan) => (
          <div
            key={plan.id}
            onClick={() => setFormData({ ...formData, plan: plan.id })}
            className={`p-4 border rounded-lg cursor-pointer flex items-center space-x-4 
              ${formData.plan === plan.id ? 'border-blue-500 bg-blue-50' : 'border-gray-200'}`}
          >
            <span className="text-2xl">{plan.icon}</span>
            <div>
              <h3 className="font-medium">{plan.name}</h3>
              <p className="text-gray-500">
                ${formData.billingCycle === 'monthly' ? plan.monthlyPrice : plan.yearlyPrice}/
                {formData.billingCycle === 'monthly' ? 'mo' : 'yr'}
              </p>
              {formData.billingCycle === 'yearly' && (
                <p className="text-sm text-blue-600">2 months free</p>
              )}
            </div>
          </div>
        ))}
      </div>

      <div className="mt-6 bg-gray-50 rounded-lg p-4 flex items-center justify-center space-x-4">
        <span className={formData.billingCycle === 'monthly' ? 'text-blue-600' : 'text-gray-500'}>
          Monthly
        </span>
        <button
          onClick={() => setFormData({
            ...formData,
            billingCycle: formData.billingCycle === 'monthly' ? 'yearly' : 'monthly'
          })}
          className="relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 bg-blue-600"
        >
          <span
            className={`pointer-events-none inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out ${
              formData.billingCycle === 'yearly' ? 'translate-x-5' : 'translate-x-0'
            }`}
          />
        </button>
        <span className={formData.billingCycle === 'yearly' ? 'text-blue-600' : 'text-gray-500'}>
          Yearly
        </span>
      </div>
    </div>
  );

  const AddOns = () => (
    <div className="space-y-4">
      <h2 className="text-2xl font-bold text-gray-900">Pick add-ons</h2>
      <p className="text-gray-500">Add-ons help enhance your gaming experience.</p>
      
      <div className="space-y-3">
        {addons.map((addon) => (
          <div
            key={addon.id}
            onClick={() => {
              const newAddons = formData.addons.includes(addon.id)
                ? formData.addons.filter(id => id !== addon.id)
                : [...formData.addons, addon.id];
              setFormData({ ...formData, addons: newAddons });
            }}
            className={`p-4 border rounded-lg cursor-pointer flex items-center space-x-4 
              ${formData.addons.includes(addon.id) ? 'border-blue-500 bg-blue-50' : 'border-gray-200'}`}
          >
            <div className="flex-shrink-0">
              <div className={`w-5 h-5 border rounded flex items-center justify-center 
                ${formData.addons.includes(addon.id) ? 'bg-blue-600 border-blue-600' : 'border-gray-300'}`}>
                {formData.addons.includes(addon.id) && <Check className="w-4 h-4 text-white" />}
              </div>
            </div>
            <div className="flex-grow">
              <h3 className="font-medium">{addon.name}</h3>
              <p className="text-sm text-gray-500">{addon.description}</p>
            </div>
            <div className="text-blue-600">
              +${formData.billingCycle === 'monthly' ? addon.monthlyPrice : addon.yearlyPrice}/
              {formData.billingCycle === 'monthly' ? 'mo' : 'yr'}
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  const Summary = () => {
    const selectedPlan = plans.find(p => p.id === formData.plan) || plans[0];
    const selectedAddons = addons.filter(addon => formData.addons.includes(addon.id));
    
    const planPrice = formData.billingCycle === 'monthly' 
      ? selectedPlan.monthlyPrice 
      : selectedPlan.yearlyPrice;
    
    const addonsTotal = selectedAddons.reduce((sum, addon) => 
      sum + (formData.billingCycle === 'monthly' ? addon.monthlyPrice : addon.yearlyPrice), 0
    );
    
    const total = planPrice + addonsTotal;

    return (
      <div className="space-y-4">
        <h2 className="text-2xl font-bold text-gray-900">Finishing up</h2>
        <p className="text-gray-500">Double-check everything looks OK before confirming.</p>

        <div className="bg-gray-50 rounded-lg p-4 space-y-4">
          <div className="flex items-center justify-between pb-4 border-b">
            <div>
              <h3 className="font-medium">{selectedPlan.name} ({formData.billingCycle})</h3>
              <button className="text-sm text-gray-500 underline" onClick={() => setCurrentStep(2)}>
                Change
              </button>
            </div>
            <p className="font-medium">
              ${planPrice}/{formData.billingCycle === 'monthly' ? 'mo' : 'yr'}
            </p>
          </div>

          {selectedAddons.map(addon => (
            <div key={addon.id} className="flex items-center justify-between">
              <p className="text-gray-500">{addon.name}</p>
              <p className="text-gray-700">
                +${formData.billingCycle === 'monthly' ? addon.monthlyPrice : addon.yearlyPrice}/
                {formData.billingCycle === 'monthly' ? 'mo' : 'yr'}
              </p>
            </div>
          ))}
        </div>

        <div className="flex items-center justify-between p-4">
          <p className="text-gray-500">Total (per {formData.billingCycle === 'monthly' ? 'month' : 'year'})</p>
          <p className="text-xl font-bold text-blue-600">
            ${total}/{formData.billingCycle === 'monthly' ? 'mo' : 'yr'}
          </p>
        </div>
      </div>
    );
  };

  const renderContent = () => {
    switch (currentStep) {
      case 1:
        return <PersonalInfo />;
      case 2:
        return <SelectPlan />;
      case 3:
        return <AddOns />;
      case 4:
        return <Summary />;
      default:
        return <PersonalInfo />;
    }
  };

  return (
    
    <div className="min-h-screen bg-blue-50 flex items-center justify-center p-4">
      {/* Mobile Sidebar */}
      <div className="md:hidden absolute top-0 left-0 right-0 ">
        {renderSidebar(true)}
      </div>

      {/* Main Container */}
      <div className="w-full max-w-4xl bg-white rounded-2xl shadow-lg flex min-h-[600px] relative mt-24 md:mt-0">
        {/* Desktop Sidebar */}
        {renderSidebar()}

        {/* Content */}
        <div className="flex-1 p-8 md:p-16 flex flex-col">
          <div className="flex-grow">
            {renderContent()}
          </div>
          
          <div className="mt-auto pt-8 flex justify-between">
            {currentStep > 1 && (
              <button
                onClick={() => setCurrentStep(currentStep - 1)}
                className="text-gray-500 hover:text-gray-700"
              >
                Go Back
              </button>
            )}
            <button
              onClick={() => {
                if (currentStep === 4) {
                  // Handle form submission
                  console.log('Form submitted:', formData);
                } else {
                  setCurrentStep(currentStep + 1);
                }
              }}
              className={`ml-auto px-6 py-2 rounded-lg ${
                currentStep === 4
                  ? 'bg-blue-600 hover:bg-blue-700 text-white'
                  : 'bg-blue-600 text-white hover:bg-blue-700'
              }`}
            >
              {currentStep === 4 ? 'Confirm' : 'Next Step'}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MultiStepForm;