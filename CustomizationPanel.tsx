'use client'

import { useState } from 'react'
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"

const customizationOptions = [
  { id: 'case', name: 'Case', options: ['Aluminum', 'Stainless Steel', 'Titanium'] },
  { id: 'size', name: 'Size', options: ['41mm', '45mm'] },
  { id: 'band', name: 'Band', options: ['Sport Band', 'Solo Loop', 'Braided Solo Loop', 'Leather Link'] },
]

export default function CustomizationPanel() {
  const [activeTab, setActiveTab] = useState('case')

  return (
    <div className="flex-1">
      <Tabs value={activeTab} onValueChange={setActiveTab}>
        <TabsList>
          {customizationOptions.map((option) => (
            <TabsTrigger key={option.id} value={option.id}>
              {option.name}
            </TabsTrigger>
          ))}
        </TabsList>
        {customizationOptions.map((option) => (
          <TabsContent key={option.id} value={option.id}>
            <div className="grid grid-cols-2 gap-4 mt-4">
              {option.options.map((item) => (
                <Button key={item} variant="outline">
                  {item}
                </Button>
              ))}
            </div>
          </TabsContent>
        ))}
      </Tabs>
    </div>
  )
}

