import React from 'react';

export const AddOns = ({ formData, setFormData }) => {
  const addOns = [
    {
      id: 'online',
      title: 'Online service',
      description: 'Access to multiplayer games',
      monthlyPrice: 1,
      yearlyPrice: 10,
    },
    {
      id: 'storage',
      title: 'Larger storage',
      description: 'Extra 1TB of cloud save',
      monthlyPrice: 2,
      yearlyPrice: 20,
    },
    {
      id: 'profile',
      title: 'Customizable Profile',
      description: 'Custom theme on your profile',
      monthlyPrice: 2,
      yearlyPrice: 20,
    },
  ];

  const handleAddOnToggle = (addOnId) => {
    setFormData(prev => ({
      ...prev,
      addOns: prev.addOns.includes(addOnId)
        ? prev.addOns.filter(id => id !== addOnId)
        : [...prev.addOns, addOnId]
    }));
  };

  return (
    <div className="space-y-4">
      <h2 className="text-2xl font-bold">Pick add-ons</h2>
      <p className="text-gray-500">Add-ons help enhance your gaming experience.</p>

      <div className="space-y-4 mt-6">
        {addOns.map((addOn) => (
          <div
            key={addOn.id}
            className={`p-4 border rounded-lg cursor-pointer hover:border-blue-500 ${
              formData.addOns.includes(addOn.id) ? 'border-blue-500 bg-blue-50' : ''
            }`}
            onClick={() => handleAddOnToggle(addOn.id)}
          >
            <div className="flex items-center gap-4">
              <input
                type="checkbox"
                checked={formData.addOns.includes(addOn.id)}
                onChange={() => handleAddOnToggle(addOn.id)}
                className="w-5 h-5 text-blue-600"
              />
              <div className="flex-grow">
                <div className="font-medium">{addOn.title}</div>
                <div className="text-gray-500 text-sm">{addOn.description}</div>
              </div>
              <div className="text-blue-600">
                +${formData.billingCycle === 'monthly' 
                  ? `${addOn.monthlyPrice}/mo` 
                  : `${addOn.yearlyPrice}/yr`}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
export default AddOns;