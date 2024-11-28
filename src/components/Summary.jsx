import React from 'react';

export const Summary = ({ formData }) => {
  const plans = {
    arcade: { monthly: 9, yearly: 90 },
    advanced: { monthly: 12, yearly: 120 },
    pro: { monthly: 15, yearly: 150 },
  };

  const addOns = {
    online: { title: 'Online service', monthly: 1, yearly: 10 },
    storage: { title: 'Larger storage', monthly: 2, yearly: 20 },
    profile: { title: 'Customizable Profile', monthly: 2, yearly: 20 },
  };

  const calculateTotal = () => {
    const planPrice = plans[formData.plan][formData.billingCycle];
    const addOnsPrice = formData.addOns.reduce((total, addOn) => {
      return total + addOns[addOn][formData.billingCycle];
    }, 0);
    return planPrice + addOnsPrice;
  };

  return (
    <div className="space-y-4">
      <h2 className="text-2xl font-bold">Finishing up</h2>
      <p className="text-gray-500">Double-check everything looks OK before confirming.</p>

      <div className="mt-6 p-4 bg-gray-50 rounded-lg space-y-4">
        <div className="flex justify-between items-center pb-4 border-b">
          <div>
            <div className="font-medium">
              {formData.plan.charAt(0).toUpperCase() + formData.plan.slice(1)} ({formData.billingCycle})
            </div>
          </div>
          <div className="font-medium">
            ${plans[formData.plan][formData.billingCycle]}/{formData.billingCycle === 'monthly' ? 'mo' : 'yr'}
          </div>
        </div>

        {formData.addOns.map((addOn) => (
          <div key={addOn} className="flex justify-between items-center">
            <div className="text-gray-500">{addOns[addOn].title}</div>
            <div className="text-gray-700">
              +${addOns[addOn][formData.billingCycle]}/{formData.billingCycle === 'monthly' ? 'mo' : 'yr'}
            </div>
          </div>
        ))}
      </div>

      <div className="flex justify-between items-center p-4">
        <div className="text-gray-500">
          Total (per {formData.billingCycle === 'monthly' ? 'month' : 'year'})
        </div>
        <div className="text-2xl font-bold text-blue-600">
          ${calculateTotal()}/{formData.billingCycle === 'monthly' ? 'mo' : 'yr'}
        </div>
      </div>
    </div>
  );
};
export default Summary;  