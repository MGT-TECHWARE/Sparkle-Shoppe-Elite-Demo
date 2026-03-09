#!/bin/bash
# Generate hero image using Gemini API
# Usage: GEMINI_API_KEY="your-key" bash generate-hero.sh
set -e -E

GEMINI_API_KEY="${GEMINI_API_KEY:?Set GEMINI_API_KEY environment variable}"
MODEL_ID="gemini-3.1-flash-image-preview"
GENERATE_CONTENT_API="streamGenerateContent"

cat << EOF > request.json
{
  "contents": [
    {
      "role": "user",
      "parts": [
        {
          "text": "Generate a high-end cinematic photograph of a luxury modern home exterior at golden hour. Crystal clear floor-to-ceiling windows reflecting a dramatic sunset sky. Freshly power-washed stone and brick facade with water droplets catching warm amber sunlight. Upscale contemporary residential architecture with clean geometric lines. Cinematic photography with shallow depth of field and volumetric light rays streaming through pristine glass. Professional architectural editorial quality. Atmospheric moody dark tones with selective warm golden illumination. The scene should evoke premium professional cleaning services and immaculate craftsmanship. Ultra-realistic, 8K quality, dramatic lighting contrast."
        }
      ]
    }
  ],
  "generationConfig": {
    "responseModalities": ["IMAGE", "TEXT"],
    "thinkingConfig": {
      "thinkingLevel": "MINIMAL"
    },
    "imageConfig": {
      "aspectRatio": "16:9",
      "imageSize": "1K"
    }
  },
  "tools": [
    {
      "googleSearch": {
        "searchTypes": {
          "webSearch": {}
        }
      }
    }
  ]
}
EOF

echo "Generating hero image..."
curl -s "https://generativelanguage.googleapis.com/v1beta/models/${MODEL_ID}:${GENERATE_CONTENT_API}?alt=sse&key=${GEMINI_API_KEY}" \
  -H 'Content-Type: application/json' \
  -d @request.json > /tmp/gemini-response.txt

echo "Done. Response saved to /tmp/gemini-response.txt"
echo "Use Python to extract the base64 image data from the SSE response."

rm -f request.json
