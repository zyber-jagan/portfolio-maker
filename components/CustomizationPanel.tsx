'use client'

import { CustomizationOptions } from '@/types/portfolio'

interface CustomizationPanelProps {
  customization: CustomizationOptions
  onCustomizationChange: (customization: CustomizationOptions) => void
}

export default function CustomizationPanel({
  customization,
  onCustomizationChange,
}: CustomizationPanelProps) {
  const updateCustomization = (updates: Partial<CustomizationOptions>) => {
    onCustomizationChange({ ...customization, ...updates })
  }

  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-4 space-y-4 sticky top-24">
      <h3 className="font-semibold text-gray-900 mb-4">Customization</h3>
      
      {/* Section Visibility */}
      <div>
        <h4 className="text-sm font-medium text-gray-700 mb-3">Visible Sections</h4>
        <div className="space-y-2">
          {Object.entries(customization)
            .filter(([key]) => key.startsWith('show'))
            .map(([key, value]) => (
              <label key={key} className="flex items-center gap-2 cursor-pointer">
                <input
                  type="checkbox"
                  checked={value as boolean}
                  onChange={(e) =>
                    updateCustomization({ [key]: e.target.checked })
                  }
                  className="rounded border-gray-300 text-primary-600 focus:ring-primary-500"
                />
                <span className="text-sm text-gray-700">
                  {key.replace('show', '').replace(/([A-Z])/g, ' $1').trim()}
                </span>
              </label>
            ))}
        </div>
      </div>

      {/* Color Picker */}
      <div>
        <h4 className="text-sm font-medium text-gray-700 mb-2">Primary Color</h4>
        <input
          type="color"
          value={customization.primaryColor}
          onChange={(e) => updateCustomization({ primaryColor: e.target.value })}
          className="w-full h-10 rounded border border-gray-300 cursor-pointer"
        />
      </div>

      {/* Font Family */}
      <div>
        <h4 className="text-sm font-medium text-gray-700 mb-2">Font Family</h4>
        <select
          value={customization.fontFamily}
          onChange={(e) => updateCustomization({ fontFamily: e.target.value })}
          className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-primary-500"
        >
          <option value="Inter">Inter</option>
          <option value="Roboto">Roboto</option>
          <option value="Open Sans">Open Sans</option>
          <option value="Lato">Lato</option>
          <option value="Montserrat">Montserrat</option>
          <option value="Poppins">Poppins</option>
        </select>
      </div>
    </div>
  )
}

