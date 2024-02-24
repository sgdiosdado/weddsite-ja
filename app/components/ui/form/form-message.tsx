import React from 'react';
import { cn } from '~/lib/utils';

export const FormMessage = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLParagraphElement> & { errors?: string[] }
>(({ className, children, errors, ...props }, ref) => {
  if (!errors) {
    return null;
  }

  return (
    <div className="flex flex-col">
      {errors.map((error) => (
        <p
          ref={ref}
          className={cn('text-sm font-medium text-destructive', className)}
          {...props}
        >
          {error}
        </p>
      ))}
    </div>
  );
});
FormMessage.displayName = 'FormMessage';
