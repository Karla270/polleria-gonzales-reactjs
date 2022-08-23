import * as React from 'react';

export default function RawHTML({ children, className = "" }) {
    return (
        <div className={className} dangerouslySetInnerHTML={{ __html: children.replace(/\n/g, '<br />') }} />
    )
}

