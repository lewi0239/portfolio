import * as React from 'react';

interface EmailTemplateProps {
  firstName: string;
}

export function EmailTemplate({ firstName }: EmailTemplateProps) {
  return (
    <div>
      <h1>Hello!, {firstName}</h1>
      <p>
        {' '}
        Thank you for reaching out, I will respond back to your email as soon as possible! In the
        mean time please check out my socials
      </p>
      <ul>
        <li>
          <a href="https://github.com/lewi0239">GitHub</a>
        </li>
        <li>
          <a href="https://www.linkedin.com/in/brodie-lewis/">LinkedIn</a>
        </li>
      </ul>
    </div>
  );
}
