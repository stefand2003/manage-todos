import React from 'react';

export default function Todo({ content }) {
  return (
    <div>
      <label>
        <input type='checkbox' defaultChecked={content.completed} />
        {content.name}
      </label>
    </div>
  );
}
