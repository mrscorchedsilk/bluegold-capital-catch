
import React from 'react';
import { Button } from '@/components/ui/button';

interface HeadlineSelectorProps {
  selected: string;
  onChange: (variant: string) => void;
}

const HeadlineSelector = ({ selected, onChange }: HeadlineSelectorProps) => {
  return (
    <div className="flex flex-wrap gap-2">
      <Button
        variant={selected === "default" ? "default" : "outline"}
        onClick={() => onChange("default")}
        className={selected === "default" ? "bg-gold text-navy" : ""}
      >
        General
      </Button>
      <Button
        variant={selected === "business" ? "default" : "outline"}
        onClick={() => onChange("business")}
        className={selected === "business" ? "bg-gold text-navy" : ""}
      >
        Business Owners
      </Button>
      <Button
        variant={selected === "professional" ? "default" : "outline"}
        onClick={() => onChange("professional")}
        className={selected === "professional" ? "bg-gold text-navy" : ""}
      >
        Smart Professionals
      </Button>
    </div>
  );
};

export default HeadlineSelector;
