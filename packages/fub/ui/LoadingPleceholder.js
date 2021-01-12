import React from "react";

export default function LoadingPleceholder() {
  return (
    <div className="py-10 flex flex-col items-center rounded-lg text-gray-500">
      <svg width="160px" viewBox="0 0 128 16" className="animate-pulse rounded">
        <rect x="0" y="0" width="100%" height="100%" fill="#FFFFFF" />
        <g>
          <path
            d="M-22.949-5.576l4.525,4.525L-41.051,21.576l-4.525-4.525Zm19.2,0L0.776-1.051-21.851,21.576l-4.526-4.525Zm19.2,0,4.525,4.525L-2.651,21.576l-4.525-4.525Zm19.2,0,4.525,4.525L16.549,21.576l-4.525-4.525Zm19.2,0,4.525,4.525L35.749,21.576l-4.526-4.525Zm38.4,0,4.525,4.525L74.149,21.576l-4.525-4.525Zm-19.2,0,4.525,4.525L54.949,21.576l-4.526-4.525Zm38.4,0,4.525,4.525L93.349,21.576l-4.526-4.525Zm19.2,0,4.525,4.525L112.549,21.576l-4.525-4.525Zm19.2,0,4.525,4.525L131.749,21.576l-4.525-4.525Z"
            fill="#4338ca"
            fillOpacity="1"
          />
          <animateTransform
            attributeName="transform"
            type="translate"
            from="0 0"
            to="-19 0"
            dur="1080ms"
            repeatCount="indefinite"
          />
        </g>
      </svg>
    </div>
  );
}
