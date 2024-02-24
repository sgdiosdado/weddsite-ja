import React from 'react';
import { Label } from '../label';
import { cn } from '~/lib/utils';
import LabelPrimitive from '@radix-ui/react-label';

type FormLabelProps = React.ComponentPropsWithoutRef<
  typeof LabelPrimitive.Root
> & { errors?: string[] };

export const FormLabel = React.forwardRef<
  React.ElementRef<typeof LabelPrimitive.Root>,
  FormLabelProps
>(({ className, errors, ...props }, ref) => {
  return (
    <Label
      ref={ref}
      className={cn(errors && 'text-destructive', className)}
      {...props}
    />
  );
});
FormLabel.displayName = 'FormLabel';
